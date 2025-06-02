
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-calm-stone text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-calm-mint/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-calm-lavender/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a 
              href="mailto:hello@fluently.app" 
              className="font-nunito text-sm text-white/80 hover:text-white transition-colors duration-200"
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
