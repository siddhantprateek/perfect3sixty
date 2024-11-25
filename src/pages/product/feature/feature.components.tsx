import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DISPLAY } from '../../../assets';

const YaraFeatureCard = () => {
  return (
    <div className="my-[5rem]">
      <div className="max-w-6xl mx-auto">
        {/* Main Container */}
        <div className="bg-black rounded-3xl relative p-16">
          {/* Content Section */}
          <div className="max-w-2xl w-1/3 relative z-10">
            <h1 className="text-3xl font-semibold text-white leading-tight mb-6">
              It's time to revolutionize<br />beauty<br />experience.
            </h1>
            <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 group text-lg">
              <span>Get in touch</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>


          {/* Image Container with mask */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            {/* Notification Image - Positioned to overflow within container */}
            <img 
              src={DISPLAY}
              alt="Notification Card"
              className="absolute bottom-20 -right-20 w-[600px] rounded-xl shadow-2xl translate-y-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YaraFeatureCard;