import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'About', id: 'about' },
    { label: 'FAQs', id: 'faqs' },
  ];

  return (
    <header className="py-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Perfect<span className='text-orange-500'>3Sixty</span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4">
          <button 
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            onClick={() => scrollToSection('downloadApps')}
          >
            Get App
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <nav className="container mx-auto py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    // Handle sign up action
                    setIsMenuOpen(false);
                  }}
                >
                  Sign up
                </button>
              </li>
              <li>
                <button 
                  className="w-full text-left py-2 px-4 bg-black text-white hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    scrollToSection('downloadApps');
                    setIsMenuOpen(false);
                  }}
                >
                  Get App
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;