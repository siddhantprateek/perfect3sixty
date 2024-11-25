
import { ExternalLink } from 'lucide-react';

const AnnouncementHeader = () => {
  return (
    <div className="w-full bg-gradient-to-tr from-lime-200 via-lime-200 to-teal-300 py-4 px-4 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 font-medium text-gray-800">
          <span className="inline-flex items-center text-gray-700 ">
            🎉 Try out Yara - Your AI Beauty Assistant
          </span>
          <a 
            href="/product/yara"
            className="inline-flex items-center gap-1 text-stone-600 hover:text-gray-900 transition-colors"
          >
            Learn More
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementHeader;