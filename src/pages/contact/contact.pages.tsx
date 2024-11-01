import React from 'react';
import { Map, Phone, Mail, Building2 } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl">
            We'd love to hear from you! Whether you have questions about our services, 
            need support, or want to learn more about Perfect3sixty, our team is here to help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-8">
          <div className="flex items-start space-x-3">
            <Building2 className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Our Address</h3>
              <p className="text-gray-600 text-sm">Perfect3sixty Office</p>
              <p className="text-gray-600 text-sm">Biju Nagar, Jharsuguda, Odisha</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Contact Info</h3>
              <p className="text-gray-600 text-sm">+91-7077817628</p>
              <p className="text-gray-600 text-sm">+91-8273511939</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600 text-sm">mail@perfect3sixty.com</p>
            </div>
          </div>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-[400px] relative">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34401.51022268643!2d84.00343532435723!3d21.88048266937127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20e42f7ac9f109%3A0xb5c0ca7a217bec47!2sBijju%20Nagar%2C%20Jharsuguda%2C%20Odisha!5e1!3m2!1sen!2sin!4v1730480500115!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title='map'
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-none"
            />
            <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <Map className="w-4 h-4" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Form */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Position*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your job position..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:ring-black outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;