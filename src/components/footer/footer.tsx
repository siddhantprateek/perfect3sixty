import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/perfect3sixty' },
    { icon: Facebook, href: 'https://www.facebook.com/perfect3sixty' },
    { icon: Instagram, href: 'https://www.instagram.com/perfect3sixty' },
    { icon: Twitter, href: 'https://twitter.com/perfect3sixty' },
    { icon: Award, href: 'https://www.producthunt.com/products/perfect3sixty' },
  ];

  return (
    <footer className="100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800">
              Perfect<span className="text-orange-500">3Sixty</span>
            </h3>
            <p className="text-sm text-gray-600">Revolutionizing the salon experience</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="mt-8 text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-800">Legal</h4>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
            <Link to="/policy" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link to="/refunds" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Refunds/Cancellations
            </Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Perfect3Sixty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
