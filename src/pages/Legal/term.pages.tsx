import React from 'react';
import { Mail, Phone, MessageCircle, Shield, RefreshCw } from 'lucide-react';

const refundSteps = [
  {
    icon: MessageCircle,
    title: 'Request Submission',
    content: 'Submit your refund request through the app or contact support'
  },
  {
    icon: Shield,
    title: 'Verification',
    content: 'Our team verifies the request and booking details'
  },
  {
    icon: RefreshCw,
    title: 'Processing',
    content: '2-3 working days for amount to reflect in your account'
  }
];

const cancellationRules = [
  {
    title: '> 2 Hours Before',
    status: 'Full Refund',
    description: 'Cancel more than 2 hours before appointment'
  },
  {
    title: '< 2 Hours Before',
    status: 'Cancellation Fee',
    description: 'Cancellations within 2 hours may incur fees'
  },
  {
    title: 'No Show',
    status: 'No Refund',
    description: 'Missing appointments without cancellation'
  }
];

export const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-lg opacity-90">Clear and fair policies for our valued customers</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Refund Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {refundSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <step.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.content}</p>
            </div>
          ))}
        </div>

        {/* Cancellation Rules */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cancellationRules.map((rule, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{rule.title}</h3>
                <div className="text-blue-600 font-medium mb-2">{rule.status}</div>
                <p className="text-sm text-gray-600">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const termsCategories = [
  {
    title: 'Platform Usage',
    items: [
      'Services available to users in compliance with platform policies',
      'Pricing displayed in INR, subject to service provider rates',
      'Bookings are non-transferable and time-specific'
    ]
  },
  {
    title: 'User Responsibilities',
    items: [
      'Maintain accurate account information',
      'Respect service provider policies',
      'Adhere to booking and cancellation terms'
    ]
  },
  {
    title: 'Service Delivery',
    items: [
      'Digital confirmations sent immediately',
      'Service quality standards maintained',
      'Customer satisfaction guarantee'
    ]
  }
];

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">Everything you need to know about using Perfect3sixty</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Terms Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {termsCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'mail@perfect3sixty.com',
    description: 'We typically respond within 24 hours'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91-7077817628',
    description: 'Available Monday to Saturday, 9am - 6pm'
  },
  {
    icon: MessageCircle,
    title: 'Feedback & Complaints',
    content: '+91-8273511939',
    description: 'We value your feedback and address concerns promptly'
  }
];

export const ContactInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">We're here to help with any questions or concerns</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center">
              <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">{method.title}</h2>
              <p className="text-blue-600 font-medium mb-2">{method.content}</p>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};