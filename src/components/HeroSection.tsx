
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-nunito font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary leading-tight mb-6">
              Therapy Happens Once a Week.{' '}
              <span className="text-primary">Practice Happens Every Day</span>
              —with Fluently.
            </h1>
            
            <p className="font-nunito text-lg sm:text-xl text-secondary/80 mb-8 leading-relaxed">
              AI-powered, structured training between sessions—so your patients stay motivated, and your results stick.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Join the Waitlist for Early Access
              </Button>
              
              <p className="font-nunito text-sm text-secondary/60">
                No credit card required. Limited to 30 clinics in July 2025.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
                <h3 className="font-nunito font-semibold text-lg text-secondary mb-2">
                  Patient Dashboard
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-nunito text-sm text-secondary/70">Today's Practice</span>
                    <span className="font-nunito text-sm font-semibold text-primary">3/5 Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="font-nunito text-sm font-medium text-secondary">Articulation Practice</span>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="font-nunito text-sm font-medium text-secondary">Voice Exercises</span>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-nunito text-sm font-medium text-secondary/70">Fluency Training</span>
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
