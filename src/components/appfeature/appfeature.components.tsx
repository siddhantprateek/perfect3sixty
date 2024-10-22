import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FRAME5, FRAME2, FRAME3, FRAME4 } from '../../assets';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Smart Suggestions",
    description: "Get personalized recommendations backed by real engagement data.",
    icon: "🎯",
    image: FRAME2
  },
  {
    id: 2,
    title: "Range of Services",
    description: "Choose from a variety of services offered by different businesses.",
    icon: "📅",
    image: FRAME3
  },
  {
    id: 3,
    title: "Book Seemlessly",
    description: "Our calendar system helps you manage your schedule, track appointments, and optimize your time.",
    icon: "⭐",
    image: FRAME4
  },
  {
    id: 4,
    title: "Never Miss your appointment",
    description: "Recieve notifications so you never miss an appointment.",
    icon: "🔔",
    image: FRAME5
  },
];

const AppFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setSelectedFeature(current => 
          current === features.length ? 1 : current + 1
        );
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handleFeatureClick = (id: number) => {
    setSelectedFeature(id);
    setIsAutoPlaying(false); // Pause auto-rotation when user clicks
  };

  // Resume auto-rotation when mouse leaves the features section
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div id='features' className="max-w-7xl my-20 mx-auto p-6" onMouseLeave={handleMouseLeave}>
      <div className="inline-block">
        <span className="bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
          Our Features
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Features List */}
        <div className="space-y-4">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedFeature === feature.id
                  ? 'bg-orange-50 border-orange-500'
                  : 'bg-white hover:bg-gray-50'
              } border-2 transition-colors duration-200`}
              onClick={() => handleFeatureClick(feature.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <div className="items-center space-x-4">
                <h3 className="font-bold text-lg text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative h-[28rem] bg-gray-100 rounded-xl overflow-hidden">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 200 }}
              animate={{
                opacity: selectedFeature === feature.id ? 1 : 0,
                x: selectedFeature === feature.id ? 0 : 200,
              }}
              transition={{ duration: 1 }}
            >
              {selectedFeature === feature.id && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
          {!selectedFeature && (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a feature to see details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;