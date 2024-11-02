import React from 'react';
import { Linkedin, Instagram, Twitter, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HAIRSALONFT } from '../../assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/perfect3sixty', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/perfect3sixty', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/perfect3sixty', label: 'Twitter' },
    { icon: Award, href: 'https://www.producthunt.com/products/perfect3sixty', label: 'Product Hunt' },
  ];

  return (
    <section className="bg-black text-white mt-16 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Perfect<span className="text-orange-500">3Sixty</span>
              </h3>
              <p className="text-gray-400 mt-2">Revolutionizing the salon experience</p>
            </div>

            <h2 className="text-4xl font-bold mb-4">Engage with Us in<br />Conversation.</h2>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                  onClick={scrollToTop}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-4">About</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/about" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/sustainability" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Sustainability 
                    </Link>
                  </li>
                  <li>
                    <span className="cursor-not-allowed">
                      Careers (Coming Soon)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Customer Service</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/refunds" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Returns & Refunds
                    </Link>
                  </li>
                  <li>
                    <Link to="/trust-securities" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/terms" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/refunds" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Refunds/Cancellations
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="hover:text-white transition-colors" onClick={scrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={HAIRSALONFT}
                alt="Interior"
                className="w-full h-[25rem] object-cover"
              />
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Perfect3Sixty. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;