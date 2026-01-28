
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'HOME' | 'TEAM') => void;
  currentView: 'HOME' | 'TEAM';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'HOME', href: '#home' },
    { name: 'About', view: 'HOME', href: '#about' },
    { name: 'Movies', view: 'HOME', href: '#movies' },
    { name: 'Team', view: 'TEAM', href: '#team' },
    { name: 'Gallery', view: 'HOME', href: '#gallery' },
    { name: 'Contact', view: 'HOME', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, view: 'HOME' | 'TEAM', href: string) => {
    if (view !== currentView) {
      e.preventDefault();
      onNavigate(view);
      setIsMobileMenuOpen(false);
    } else if (view === 'HOME' && href.startsWith('#')) {
      // Standard anchor scroll handled by browser
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500  ${
        isScrolled ? 'bg-[#0c0a09]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div 
          onClick={() => onNavigate('HOME')} 
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-[#c5a059] rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="/logo.png" 
              alt="Rangmanch Logo" 
              className="relative w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinematic text-xl md:text-2xl font-bold text-[#c5a059] tracking-[0.2em] uppercase leading-none">
              Rangmanch
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-stone-400 mt-1">
              Film Making Society
            </span>
          </div>
        </div>

        {/* Desktop Menu - ml-auto creates the gap from the logo */}
        <div className="hidden md:flex items-center lg:space-x-10 md:space-x-6 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.view as any, link.href)}
              className={`text-[10px] lg:text-[11px] uppercase tracking-[0.1em] lg:tracking-[0.2em] transition-colors duration-300 font-medium ${
                (currentView === link.view && link.name !== 'Home' && link.name !== 'About' && link.name !== 'Movies' && link.name !== 'Gallery' && link.name !== 'Contact') || (currentView === 'HOME' && link.name === 'Home')
                ? 'text-[#c5a059]' 
                : 'text-stone-300 hover:text-[#c5a059]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#c5a059] ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a09] border-t border-[#500b0b]/30 px-6 py-10 flex flex-col space-y-8 absolute top-full left-0 w-full animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.view as any, link.href)}
              className="text-lg uppercase tracking-[0.2em] text-[#fafaf9] hover:text-[#c5a059] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
