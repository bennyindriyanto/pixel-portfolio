
import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Code } from 'lucide-react';
import PixelArt from '../ui/PixelArt';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', icon: <PixelArt type="cursor" size="sm" animated={false} /> },
    { name: 'About Me', href: '#about', icon: null },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Code size={16} /> },
    { name: 'Skills', href: '#skills', icon: null },
    { name: 'Education', href: '#education', icon: null },
    { name: 'Certifications', href: '#certifications', icon: null },
    { name: 'Contact', href: '#contact', icon: null },
  ];

  const handleNavigation = (href: string) => {
    if (href === '#') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      // We're navigating to a section on the home page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-mono font-bold transition-all duration-300 hover:text-blue-400"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <PixelArt type="cursor" size="sm" animated={false} />
          <span>Benny Indriyanto</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative font-medium text-sm transition-colors hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full flex items-center gap-1.5"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-1 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm md:hidden">
            <nav className="w-full max-w-sm px-6">
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <a
                      href={link.href}
                      className="flex items-center justify-center gap-2 py-2 text-xl font-medium transition-colors hover:text-blue-400"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
