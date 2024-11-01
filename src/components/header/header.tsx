import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', id: 'features', type: 'scroll' },
    { label: 'About', id: 'about', type: 'route' },
    { label: 'Join Us', id: 'partner-with-us', type: 'route' },
  ];

  const companyItems = [
    { label: 'Trust & Securities', path: '/trust-securities' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Refund/Cancellation', path: '/refunds' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { id: string, type: string }) => {
    e.preventDefault();
    if (item.type === 'route') {
      navigate(`/${item.id}`);
    } else {
      scrollToSection(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Spacer div to prevent content jump when header becomes fixed */}
      {isScrolled && <div className="h-5" />}
      
      <motion.header
        className={`py-4 transition-all duration-300 ${
          isScrolled 
            ? 'fixed mx-4 md:mx-8 lg:mx-12 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 rounded-2xl' 
            : 'relative bg-white px-4 md:px-0'
        }`}
        initial={false}
        animate={isScrolled ? {
          y: 0,
          opacity: 1,
        } : {
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <div className={`container mx-auto flex justify-between items-center ${isScrolled ? 'px-6' : ''}`}>
          <div 
            className="text-2xl font-semibold cursor-pointer" 
            onClick={() => navigate("/")}
          >
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
            <ul className="flex space-x-4 items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/${item.id}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Company Dropdown */}
              <li className="relative">
                <button
                  className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                >
                  <span>Company</span>
                  {isCompanyDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {isCompanyDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-20"
                    >
                      {companyItems.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => scrollToSection('downloadApps')}
            >
              Get App
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden absolute ${isScrolled ? 'top-30' : 'top-16'} left-0 right-0 bg-white shadow-lg rounded-b-2xl z-10`}
            >
              <nav className="container mx-auto py-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`/${item.id}`}
                        onClick={(e) => handleNavClick(e, item)}
                        className="block py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  {/* Mobile Company Menu */}
                  <li>
                    <button
                      className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 transition-colors rounded-lg"
                      onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                    >
                      <span>Company</span>
                      {isCompanyDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <AnimatePresence>
                      {isCompanyDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-gray-50 rounded-lg mt-1"
                        >
                          {companyItems.map((item) => (
                            <a
                              key={item.path}
                              href={item.path}
                              className="block py-2 px-8 text-sm hover:bg-gray-100 transition-colors rounded-lg"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li>
                    <button
                      className="w-full text-left py-2 px-4 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg"
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-2 right-2 h-[2px] bg-orange-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) 
            }}
            style={{ transformOrigin: '0%' }}
          />
        )}
      </motion.header>
    </>
  );
};

export default Header;