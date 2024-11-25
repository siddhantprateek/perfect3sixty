import { ArrowRight } from 'lucide-react';
import { ANDROID_APK } from '../../assets';

const DownloadAppsSection = () => {
  return (
    <section className="py-16 bg-white" id="downloadApps">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">It's easier in the apps</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {['ios', 'android'].map((platform) => (
            <div key={platform} className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4 w-full md:w-auto">
              <div className="w-24 h-24 flex items-center justify-center rounded-lg overflow-hidden">
                {platform === 'android' ? (
                  <img 
                    src={ANDROID_APK} 
                    alt="Android App" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">QR</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Download the {platform} app
                    {platform === 'ios' && (
                      <span className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded-full">Coming Soon</span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-2">Scan to download</p>
                </div>
                <a 
                  href={platform === 'android' ? 'https://expo.dev/artifacts/eas/jCFYVz3pgVmYbWA7Aapuwt.apk' : '/'} 
                  className={`flex items-center font-semibold ${
                    platform === 'ios' ? 'text-gray-400 cursor-not-allowed' : 'text-black'
                  }`}
                  onClick={platform === 'ios' ? (e) => e.preventDefault() : undefined}
                >
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