import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Send, Camera, Link2, Hand, ShoppingBasket, TrendingUp } from 'lucide-react';
import YaraFeatureCard from './feature/feature.components';
import { YaraHeader, YaraHero } from './components';
import ReactMarkdown from 'react-markdown';
import Cookies from 'js-cookie';
import SearchResults from './components/sourcecard.component';

export interface UserProfile {
  face_shape: string;
  skin_type: string;
  skin_concerns: string[];
  hair_texture: string;
  style_preferences: string[];
  budget_range: string;
  allergies: string[];
  preferred_brands: string[];
}

interface Message {
  type: 'user' | 'bot';
  content: string;
  searchResults?: {
    videos: any[];
    web: any[];
  };
}


interface Topic {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface StreamResponse {
  event?: string;
  message_id?: string;
  type?: string;
  content: string;
}

const COOKIE_SESSION_KEY = 'yara_chat_session';

const initialUserProfile: UserProfile = {
  face_shape: "oval",
  skin_type: "combination",
  skin_concerns: ["acne", "dark spots"],
  hair_texture: "wavy",
  style_preferences: ["natural", "minimalist"],
  budget_range: "mid-range",
  allergies: ["fragrance"],
  preferred_brands: ["The Ordinary", "Cerave"]
};

const YaraProduct: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStreamedContent, setCurrentStreamedContent] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedTopics: Topic[] = [
    {
      icon: <ShoppingBasket size={20} />,
      title: 'Suggest Product',
      subtitle: 'Find product that suites best for you.'
    },
    {
      icon: <Hand size={20} />,
      title: 'Personal Assistant',
      subtitle: 'Day-to-Day Help, reminders, and activites.'
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Whats Trending',
      subtitle: 'Latest style updates and guides.'
    }
  ];

  const scrollToBottom = (): void => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => { 
    const savedSessionId = Cookies.get(COOKIE_SESSION_KEY);
    if (savedSessionId) {
      setSessionId(savedSessionId);
    } else {
      initializeChat(initialUserProfile);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentStreamedContent]);

  const initializeChat = async (userProfile: UserProfile): Promise<void> => {

    try {
      const response = await fetch("/api/chat/initialize", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.session_id) {
        setSessionId(data.session_id);
        Cookies.set(COOKIE_SESSION_KEY, data.session_id, { expires: 7 });
        setMessages([]); // Clear messages for new session
      }
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }
  };

  const handleProfileUpdate = async (newProfile: UserProfile) => {
    try {
      await initializeChat(newProfile);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleSendMessage = async (e?: FormEvent): Promise<void> => {
    e?.preventDefault();
    if (!inputMessage.trim() || !sessionId || isLoading) return;
  
    const messageToSend = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);
  
    try {
      // Add user message
      setMessages(prev => [...prev, { type: 'user', content: messageToSend }]);
      
      // Get search results first
      const searchQuery = messageToSend.replace(/\s+/g, '+').replace(/[^a-zA-Z0-9+]/g, encodeURIComponent);
      const searchResponse = await fetch(`/api/search?q=${searchQuery}&country=in&count=5`, {
        mode: 'cors',
        credentials: 'include',
      });
  
      if (!searchResponse.ok) throw new Error(`Search API error: ${searchResponse.status}`);
      const searchData = await searchResponse.json();
  
      // Add temporary bot message with search results
      setMessages(prev => [...prev, {
        type: 'bot',
        content: '',
        searchResults: {
          videos: searchData.videos || [],
          web: searchData.web || []
        }
      }]);
  
      const chatResponse = await fetch(`/api/chat/${sessionId}/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ message: messageToSend }),
      });
  
      if (!chatResponse.ok) throw new Error(`Chat API error: ${chatResponse.status}`);
      
      const reader = chatResponse.body?.getReader();
      if (!reader) throw new Error('No reader available');
  
      let accumulatedContent = '';
  
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
  
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');
  
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonStr = line.slice(6).trim();
              if (!jsonStr) continue;
  
              const cleanJsonStr = jsonStr
                .replace(/'/g, '"')
                .replace(/\s+/g, ' ')
                .trim();
  
              const data = JSON.parse(cleanJsonStr);
  
              if (data.event === 'START') {
                accumulatedContent = '';
                setCurrentStreamedContent('');
              } else if (data.event === 'DONE') {
                if (accumulatedContent) {
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    if (lastMessage && lastMessage.type === 'bot') {
                      lastMessage.content = accumulatedContent.trim();
                    }
                    return newMessages;
                  });
                  setCurrentStreamedContent('');
                }
                break;
              } else if (data.type === 'message' && data.content) {
                accumulatedContent += data.content;
                setCurrentStreamedContent(accumulatedContent);
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e, line);
              continue;
            }
          }
        }
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        searchResults: { videos: [], web: [] }
      }]);
    } finally {
      setIsLoading(false);
      setCurrentStreamedContent('');
    }
  };
  const handleTopicClick = async (topic: Topic): Promise<void> => {
    if (!isLoading) {
      const topicMessage = `Tell me about ${topic.title.toLowerCase()}`;
      setInputMessage(topicMessage);
      
      // Ensure state is updated before sending
      await new Promise(resolve => setTimeout(resolve, 0));
      
      // Use the updated inputMessage
      handleSendMessage();
    }
  };

  const allMessages = [
    ...messages,
    ...(currentStreamedContent ? [{ type: 'bot' as const, content: currentStreamedContent }] : [])
  ];

  return (
    <div>
      <div className="min-h-screen bg-stone-100 rounded-3xl py-8 mx-10">
        <div className="max-w-4xl mx-auto">
          <YaraHeader onUpdateProfile={handleProfileUpdate} />

          {messages.length === 0 ? (
            <>
              <YaraHero />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {suggestedTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(topic)}
                    disabled={isLoading}
                    className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow text-left group disabled:opacity-50"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors">
                        {topic.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{topic.title}</h3>
                        <p className="text-sm text-gray-500">{topic.subtitle}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            
            <div className="rounded-2xl p-6 mb-4  overflow-y-auto">
              <div ref={messagesEndRef} />
            {/* <div className="rounded-2xl p-6 mb-4 h-[600px] overflow-y-auto"> */}
              {allMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                >
                  <div
                    className={`inline-block rounded-2xl max-w-[85%] ${message.type === 'user'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-900'
                      }`}
                  >
                    <div className="p-4">
                      {message.type === 'bot' && message.searchResults && (
                        <SearchResults
                          videos={message.searchResults.videos}
                          web={message.searchResults.web}
                        />
                      )}
                      <ReactMarkdown className="prose prose-sm">
                        {message.content}
                      </ReactMarkdown>
                    </div>


                  </div>
                </div>
              ))}

              
              {isLoading && !currentStreamedContent && (
                <div className="text-left">
                  <div className="inline-block p-4 rounded-2xl bg-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
      
            </div>
          )}

          <form onSubmit={handleSendMessage} className="bg-white rounded-2xl p-3 flex items-center space-x-3 shadow-sm">
            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Camera size={20} className="text-gray-500" />
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Link2 size={20} className="text-gray-500" />
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={sessionId ? "Ask anything..." : "Initializing chat..."}
              disabled={!sessionId || isLoading}
              className="flex-1 bg-transparent border-none focus:outline-none text-sm disabled:opacity-50"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              type="submit"
              disabled={!sessionId || isLoading || !inputMessage.trim()}
              className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Send</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <YaraFeatureCard />
    </div>
  );
};

export default YaraProduct;