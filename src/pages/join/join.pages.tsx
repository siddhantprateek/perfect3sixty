
import { motion } from 'framer-motion';
import { ScrollAnimatedSection } from '../../components';
import { Sparkles, Users, TrendingUp, Clock, Shield, Award } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Expand Your Reach',
    description: 'Access a wider customer base and grow your business through our platform.'
  },
  {
    icon: TrendingUp,
    title: 'Boost Revenue',
    description: 'Increase your earnings with our smart booking system and reduced no-shows.'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automated scheduling and management tools to streamline your operations.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'State-of-the-art security to protect your business and customer data.'
  },
  {
    icon: Sparkles,
    title: 'Smart Features',
    description: 'AI-powered tools for better customer service and business insights.'
  },
  {
    icon: Award,
    title: 'Growth Support',
    description: 'Dedicated partner support team to help you succeed and grow.'
  }
];

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <ScrollAnimatedSection>
        <div className="relative bg-black text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
              alt="Salon background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner With Perfect3sixty
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Join our network of successful salon partners and transform your business 
              with our innovative platform.
            </p>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Benefits Section */}
      <ScrollAnimatedSection>
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Registration Form Section */}
      <ScrollAnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 bg-black text-white">
                <h2 className="text-3xl font-bold mb-4">Register Your Business</h2>
                <p className="opacity-90">
                  Fill out the form below to start your journey with Perfect3sixty. 
                  Our team will review your application and get back to you within 24 hours.
                </p>
              </div>
              <div className="p-8">
                <div className="h-[800px]"> {/* Adjust height as needed */}
                  <iframe
                    title='partner-with-us'
                    style={{ border: 'none', width: '100%', height: '100%' }} 
                    id="request-to-register-business-9mauwe" 
                    src="https://opnform.com/forms/request-to-register-business-9mauwe"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Support Section */}
      <ScrollAnimatedSection>
        <section className="py-20 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Our partner support team is here to assist you at every step.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:partners@perfect3sixty.com" 
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="/faqs" 
              className="px-6 py-3 border border-black text-black rounded-lg hover:bg-gray-50 transition-colors"
            >
              View FAQs
            </a>
          </div>
        </section>
      </ScrollAnimatedSection>
    </div>
  );
};

export default PartnerWithUs;