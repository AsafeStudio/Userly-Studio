import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'services' | 'about', hash?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    
    if (page === 'home' && hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src="https://i.imgur.com/aj3S2NQ.png" alt="Userly" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick('home', '#faq')}
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              FAQ
            </button>
            <a
              href="#contact"
              className="bg-dark-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-dark-800 transition-colors shadow-lg shadow-dark-900/10 font-display"
            >
              Solicitar projeto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            >
              Serviços
            </button>
            <button
              onClick={() => handleNavClick('home', '#faq')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            >
              FAQ
            </button>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-primary-600 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-primary-700 font-display"
              >
                Solicitar projeto
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};