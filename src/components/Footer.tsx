
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/d4d25aaf-89e1-4703-99a5-d7a40346cd18.png" 
              alt="Fluently" 
              className="h-8 w-auto mb-2 brightness-0 invert"
            />
            <p className="font-nunito text-sm text-white/80">
              Helping therapy stick—one session at a time.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="#privacy" 
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a 
              href="mailto:hello@fluently.app" 
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-nunito text-sm text-white/60">
            © 2025 Fluently. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
