import React from 'react';
import { Linkedin, Facebook, Instagram, Twitter, Award } from 'lucide-react';

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
            <h3 className="text-xl font-bold text-gray-800">Perfect<span className='text-orange-500'>3Sixty</span></h3>
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
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Perfect3Sixty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;