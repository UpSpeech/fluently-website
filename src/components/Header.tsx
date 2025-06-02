
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d4d25aaf-89e1-4703-99a5-d7a40346cd18.png" 
              alt="Fluently" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-nunito text-secondary hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="font-nunito text-secondary hover:text-primary transition-colors duration-200"
            >
              Features
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('cta')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-nunito font-bold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Join Beta Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
