
import { Send, Camera, Link2, Hand, ShoppingBasket, TrendingUp } from 'lucide-react';

const ChatInterface = () => {
  const suggestedTopics = [
    { icon: <ShoppingBasket size={20} />, title: 'Suggest Product', subtitle: 'Find product that suites best for you.' },
    { icon: <Hand size={20} />, title: 'Personal Assistant', subtitle: 'Day-to-Day Help, reminders, and activites.' },
    { icon: <TrendingUp size={20} />, title: 'Whats Trending', subtitle: 'Latest style updates and guides.' }
  ];
  
  return (
    <div>
      {/* Suggestion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {suggestedTopics.map((topic, index) => (
          <button
            key={index}
            className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow text-left group"
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

      {/* Input Area */}
      <div className="bg-white rounded-2xl p-3 flex items-center space-x-3 shadow-sm">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Camera size={20} className="text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Link2 size={20} className="text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 bg-transparent border-none focus:outline-none text-sm"
        />
        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors flex items-center space-x-2">
          <span>Send</span>
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}

export default ChatInterface;