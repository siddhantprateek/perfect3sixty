import React from 'react';
import { Shield, Users, Sparkles, AlertCircle } from 'lucide-react';

const keyPoints = [
  {
    icon: Users,
    title: 'User Guidelines',
    content: 'By using Perfect3sixty, you agree to provide accurate information and maintain the confidentiality of your account.'
  },
  {
    icon: Shield,
    title: 'Service Terms',
    content: 'Our platform facilitates bookings between users and beauty service providers. We are not responsible for the actual services provided.'
  },
  {
    icon: Sparkles,
    title: 'Platform Rules',
    content: 'Users must respect booking policies, cancellation terms, and maintain appropriate conduct with service providers.'
  },
  {
    icon: AlertCircle,
    title: 'Important Notice',
    content: 'Perfect3sixty reserves the right to modify or terminate services for any reason, with or without notice.'
  }
];

const termsContent = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By downloading, accessing, or using Perfect3sixty, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.',
      'Perfect3sixty is a platform connecting users with beauty service providers through our mobile application and website.'
    ]
  },
  {
    title: 'Account Creation & Usage',
    content: [
      'You must be at least 18 years old to create an account',
      'Provide accurate and complete information during registration',
      'Maintain the security of your account credentials',
      'One person may not maintain multiple active accounts'
    ]
  },
  {
    title: 'Booking & Cancellation',
    content: [
      'Users must honor their scheduled appointments',
      'Cancellations must be made at least 24 hours in advance',
      'No-shows may result in penalties or account restrictions',
      'Service providers reserve the right to refuse service'
    ]
  },
  {
    title: 'Payment Terms',
    content: [
      'All payments are processed through our secure payment providers',
      'Users agree to pay all charges at the prices listed for their selected services',
      'Some services may require advance deposits or credit card authorization',
      'Refunds are subject to individual service provider policies'
    ]
  }
];

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center mb-16"
        style={{
          backgroundImage: 'url("https://wallpaperboat.com/wp-content/uploads/2021/08/05/78116/iOS-13-liquid-01.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/10">
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">Terms & Conditions</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="mb-4">
                <point.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.content}</p>
            </div>
          ))}
        </div>

        {/* Main Terms Content */}
        <div className="space-y-12">
          <p className="text-gray-600">Last Updated: 28th Oct, 2024</p>

          {termsContent.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-gray-700 flex-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">Questions?</h3>
            <p className="text-gray-700">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mt-2 text-blue-600">mail@perfect3sixty.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;