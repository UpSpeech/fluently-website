
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
              className="font-nunito text-secondary hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="font-nunito text-secondary hover:text-primary transition-colors"
            >
              Features
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('cta')}
            className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Join Beta Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
