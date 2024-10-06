import React from 'react';
import { ChevronRight, Calendar, Clock, Scissors } from 'lucide-react';
import { STOCK1, STOCK2, STOCK4 } from '../../assets';
import { DownloadAppsSection, FAQs, Footer, Header, Hero } from '../../components';

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
    description: "Receive expert suggestions based on your hair type, style history, and preferences. Our AI-driven recommendations help you discover new looks and treatments."
  }
];

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* App Preview */}
  
      {/* Featured IN */}
      <div className="mt-20 mb-20 bottom-0 left-0 right-0 flex justify-center space-x-8 pb-8">
        {['Bogo', 'Appsumo', 'Producthunt', 'Lifetime', 'Dealify', 'Stacksocial'].map((brand, index) => (
          <div key={index} className="text-black text-opacity-50">{brand}</div>
        ))}
      </div>
    

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Revolutionize your salon experience</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturesContent.map((feature, index) => (
            <div key={index} className={`rounded-lg overflow-hidden ${feature.dark ? '' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-800 text-white')}`}>
              {feature.image ? (
                <img src={feature.image} alt={feature.title} className="w-full h-[20rem] object-cover" />
              ) : (
                <div className="p-6 h-full flex flex-col justify-center">
                <h3 className="font-semibold mb-3 flex flex-col items-center text-lg text-center">
                  <feature.icon className="mb-2" size={24} />
                  {feature.title}
                </h3>
                <p className="text-sm text-center">
                  {feature.description}
                </p>
              </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* For Apps */}
      <DownloadAppsSection />

      {/* FAQs */}
      <FAQs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;