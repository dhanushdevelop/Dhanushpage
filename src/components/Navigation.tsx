
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 transition-all duration-300 ${
        isScrolled ? 'bg-dark-200/80 backdrop-blur-lg' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold flex items-center animate-fade-in">
          <span className="text-white mr-1">Dhanush</span>
          <span className="text-purple-400"></span>
        </div>
        
        <div className={`
          fixed md:relative top-0 ${isMobileMenuOpen ? 'right-0' : '-right-full'}
          md:right-auto h-screen md:h-auto w-2/3 md:w-auto
          bg-dark-200 md:bg-transparent
          md:flex space-y-8 md:space-y-0 md:space-x-8
          p-8 md:p-0 transition-all duration-300 ease-in-out
          flex flex-col md:flex-row items-start md:items-center
        `}>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-purple-400 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4 animate-fade-in">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm px-6 transition-colors duration-300"
          >
            Call Now
          </Button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
