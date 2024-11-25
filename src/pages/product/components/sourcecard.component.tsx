import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface SearchResultsProps {
  videos: any[];
  web: any[];
}

const SourceItem: React.FC<{ source: any }> = ({ source }) => (
  <div className="flex items-center gap-2 bg-stone-200/50 hover:bg-stone-300/50 px-3 py-2 rounded-lg transition-colors">
    <img
      src={source.profile.img}
      alt={source.profile.name}
      className="w-4 h-4 rounded-sm"
    />
    <div className="flex flex-col min-w-0">
      <span className="text-sm truncate max-w-[200px]">
        {source.title}
      </span>
      <span className="text-xs ">
        {source.profile.name}
      </span>
    </div>
  </div>
);

const AllSourcesDialog: React.FC<{ web: any[] }> = ({ web }) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
    <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-2xl max-h-[85vh] bg-stone-200 rounded-xl p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <Dialog.Title className="text-lg font-medium">
          Web Sources
        </Dialog.Title>
        <Dialog.Close className="text-gray-400 hover:text-white">
          <X size={20} />
        </Dialog.Close>
      </div>
      <div className="space-y-3">
        {web.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-stone-400/50 transition-colors"
          >
            <img
              src={source.profile.img}
              alt={source.profile.name}
              className="w-6 h-6 rounded-sm"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium">{source.title}</h4>
              <p className="text-xs text-gray-900">{source.profile.name}</p>
              <p className="text-xs text-gray-600">{source.description?.slice(0, 170)}</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 flex-shrink-0" />
          </a>
        ))}
      </div>
    </Dialog.Content>
  </Dialog.Portal>
);

const SearchResults: React.FC<SearchResultsProps> = ({ videos, web }) => {
  const [isVideosOpen, setIsVideosOpen] = useState(false);

  return (
    <div className="mt-4 space-y-4">
      {/* Sources Section */}
      <div>
        <h3 className="text-sm font-medium mb-3">Sources</h3>
        <div className="grid grid-cols-4 gap-2">
          {web.slice(0, 3).map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SourceItem source={source} />
            </a>
          ))}
          
          <Dialog.Root>
            <Dialog.Trigger className="flex items-center justify-center gap-2 bg-stone-300/50 hover:bg-stone-700/50 px-3 py-2 rounded-lg transition-colors hover:text-white">
              Show all
            </Dialog.Trigger>
            <AllSourcesDialog web={web} />
          </Dialog.Root>
        </div>
      </div>

      {/* Videos Drawer Section */}
      <div className="">
        <button
          onClick={() => setIsVideosOpen(!isVideosOpen)}
          className="flex items-center justify-between w-full py-3 text-sm font-medium transition-colors"
        >
          <span>Videos ({videos.length})</span>
          {isVideosOpen ? (
            <ChevronUp size={18} className="text-gray-400" />
          ) : (
            <ChevronDown size={18} className="text-gray-400" />
          )}
        </button>
        
        {isVideosOpen && (
          <div className="space-y-3 pb-3">
            {videos.slice(0, 3).map((video, index) => (
              <a 
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 p-2 rounded-lg hover:bg-stone-300/50 transition-colors"
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <img 
                    src={video.thumbnail.src} 
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium truncate">
                    {video.title}
                  </h4>
                  {video.age && (
                    <p className="text-xs text-gray-500 mt-1">{video.age}</p>
                  )}
                  {video.description && (
                    <p className="text-xs text-gray-500 mt-1">{video.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;