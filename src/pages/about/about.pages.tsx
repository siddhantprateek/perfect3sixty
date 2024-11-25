import React from 'react';
import { ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';
import { ScrollAnimatedSection } from '../../components';
import { FRAME2, SALON } from '../../assets';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  // const stats = [
  //   { number: '10K+', label: 'Happy Clients' },
  //   { number: '50+', label: 'Expert Stylists' },
  //   { number: '15+', label: 'Years Experience' },
  //   { number: '4.9', label: 'Average Rating' },
  // ];
  const handlePartnerNavigation = () => {
    navigate('/partner-with-us');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollAnimatedSection>
        <section className="relative h-[500px] overflow-hidden rounded-2xl mx-4 my-8">
          <img
            src={SALON}
            alt="Modern salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-white text-6xl font-bold mb-4">Perfect3sixty</h1>
              <p className="text-white text-lg max-w-xl mb-8">
                Revolutionizing the salon experience through innovative technology
                and personalized care. We're bringing together stylists and clients
                in a seamless, modern platform.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Vision Section */}
      <ScrollAnimatedSection>
        <section className="container mx-auto px-4 my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-gray-600">Our Vision</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Smart Beauty Tech</h2>
              <p className="text-gray-700">
                We believe in making beauty services smarter and more accessible.
                Our platform combines cutting-edge booking technology with personalized
                style recommendations to create the perfect salon experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={FRAME2}
                alt="Salon app interface"
                className="w-full h-[30rem] object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Stats Section */}
      {/* <ScrollAnimatedSection>
        <section className="container mx-auto px-4 my-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimatedSection> */}

      {/* Innovation Section */}
      <ScrollAnimatedSection>
        <section className="container mx-auto px-4 my-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/25626428/pexels-photo-25626428/free-photo-of-human-responsibility.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="AI Beauty Assistant Interface"
                  className="w-full h-[30rem] object-cover"
                />
              </div>
              <div>
                <span className="text-gray-600">Innovation + Experience</span>
                <h2 className="text-4xl font-bold mt-2 mb-4">Your AI Beauty<br />Assistant</h2>
                <p className="text-gray-700 mb-6">
                  Just like having a beauty expert in your pocket. Our AI learns your unique features,
                  style preferences, and beauty goals to recommend the perfect styles, products, and expert stylists.
                </p>
                <button className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors">
                  <span>Try Your Beauty Assistant (Coming Soon)</span>
                  <ArrowRight size={20} />
                </button>
              </div>

            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <section className="container mx-auto px-4 my-16">
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Salon team"
                className="w-full rounded-2xl h-64 object-cover"
              />
            </div>
            <div className="md:col-span-1 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700">
                The idea for Perfect3sixty was born in a crowded barbershop on a busy Saturday afternoon.
                Our founders watched as walk-in customers left frustrated due to long wait times,
                while barbers lost potential clients during their quieter hours. We realized that the
                traditional walk-in system wasn't just inconvenient – it was costing both clients
                and businesses valuable time and money.
              </p>
            </div>
            <div className="md:col-span-1">
              <img
                src="https://images.pexels.com/photos/6140472/pexels-photo-6140472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="App interface"
                className="w-full rounded-2xl h-64 object-cover"
              />
            </div>
          </div>

          {/* Mission and Partnership Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We're on a mission to revolutionize the salon industry by making
                beauty services more accessible, efficient, and personalized through
                innovative technology.
              </p>
              <p className="text-gray-700">
                Our platform empowers both stylists and clients to create better
                beauty experiences.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Salon atmosphere"
                className="w-full rounded-2xl h-full object-cover"
              />
            </div>
            <div className="bg-black rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Partner With Us!</h2>
                <p className="text-gray-200 mb-8">
                  Are you a salon owner or stylist? Join our platform and transform
                  your business with our innovative booking and client management tools.
                </p>
              </div>
              <button 
              onClick={handlePartnerNavigation}
              className="w-full bg-white text-black py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>
    </div>
  );
};

export default AboutPage;