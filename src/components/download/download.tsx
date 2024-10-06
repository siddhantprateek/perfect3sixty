import React from 'react';
import { ArrowRight } from 'lucide-react';

const DownloadAppsSection = () => {
  return (
    <section className="py-16 bg-white" id="downloadApps">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">It's easier in the apps</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {['ios', 'android'].map((platform) => (
            <div key={platform} className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4 w-full md:w-auto">
              <div className="w-24 h-24 bg-black flex items-center justify-center rounded-lg">
                <span className="text-white text-2xl font-bold">QR</span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download the {platform} app</h3>
                  <p className="text-gray-600 mb-2">Scan to download</p>
                </div>
                <a href="/" className="text-black font-semibold flex items-center justify-center">
                  Get the app 
                <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadAppsSection;