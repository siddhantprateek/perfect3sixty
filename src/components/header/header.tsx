import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="flex justify-between items-center py-4">
      <div className="text-2xl font-semibold">Perfect<span className='text-orange-500'>3Sixty</span></div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
          <li><a href="#about" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#faqs" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollToSection('faqs'); }}>FAQs</a></li>
          {/* <li>Reviews</li> */}
          {/* <li>Pricing</li> */}
        </ul>
      </nav>
      <div className="space-x-4">
        <button className="px-4 py-2">Sign up</button>
        <button className="px-4 py-2 bg-black text-white rounded" onClick={() => scrollToSection('downloadApps')}>Get App</button>
      </div>
    </header>
  )
}

export default Header