import React from 'react';
import { ChevronRight, Calendar, Clock, Scissors } from 'lucide-react';
import { STOCK1, STOCK2, STOCK4 } from '../../assets';
import { AppFeature, DownloadAppsSection, FAQs, Footer, Header, Hero } from '../../components';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const FeaturesContent = [
  {
    title: 'Smart Booking',
    icon: Calendar,
    image: STOCK1,
    dark: false,
    description: "Our advanced booking algorithm ensures optimal time management for both stylists and clients, minimizing downtime and maximizing satisfaction."
  },
  {
    title: 'Smart Booking',
    icon: Calendar,
    image: '',
    dark: false,
    description: "Effortlessly schedule your appointments with our smart booking system. Say goodbye to wait times and hello to a seamless salon experience."
  },
  {
    title: 'Real-time Updates',
    icon: Clock,
    image: STOCK4,
    dark: false,
    description: "Stay informed with instant notifications about your appointment status, reducing uncertainty and allowing you to plan your day efficiently."
  },
  {
    title: 'Service Menu',
    icon: Scissors,
    image: '',
    dark: true,
    description: "Explore our comprehensive service menu, complete with detailed descriptions and pricing. Find the perfect treatment for your unique style needs."
  },
  {
    title: 'Personalized',
    icon: ChevronRight,
    image: STOCK2,
    dark: false,
    description: "Experience tailored care with our personalized approach. We remember your preferences to ensure each visit is perfectly suited to you."
  },
  {
    title: 'Personalized Recommendations',
    icon: ChevronRight,
    image: '',
    dark: true,
    description: "Receive expert suggestions based on your hair type, style history, and preferences."
  }
];

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



const LandingPage = () => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        
        {/* Hero Section */}
        <ScrollAnimatedSection>
          <Hero />
        </ScrollAnimatedSection>

        {/* Featured IN */}
        <motion.div 
          className="mt-20 mb-20 bottom-0 left-0 right-0 flex justify-center space-x-8 pb-8"
        >
          {/* {['Bogo', 'Appsumo', 'Producthunt', 'Lifetime', 'Dealify', 'Stacksocial'].map((brand, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-black text-opacity-50"
            >
              {brand}
            </motion.div>
          ))} */}
        </motion.div>

        {/* App Feature */}
        <AppFeature />

        {/* Features Section */}
        <ScrollAnimatedSection className="py-16 bg-gray-100 rounded-xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
          >
            Revolutionize your salon experience
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FeaturesContent.map((feature, index) => (
              <ScrollAnimatedSection key={index}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-lg overflow-hidden ${feature.dark ? '' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-800 text-white')}`}
                >
                  {feature.image ? (
                    <img src={feature.image} alt={feature.title} className="w-full h-[20rem] object-cover" />
                  ) : (
                    <div className="p-6 h-[20rem] flex flex-col justify-center">
                      <h3 className="font-semibold mb-3 flex flex-col items-center text-lg text-center">
                        <feature.icon className="mb-2" size={24} />
                        {feature.title}
                      </h3>
                      <p className="text-sm text-center">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </ScrollAnimatedSection>



        {/* For Apps */}
        <ScrollAnimatedSection>
          <DownloadAppsSection />
        </ScrollAnimatedSection>

        

        
        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FAQs />
        </motion.div>

        {/* Footer */}

      </motion.div>
    </AnimatePresence>
  );
};

export default LandingPage;