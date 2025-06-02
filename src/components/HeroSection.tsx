
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (waveRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        
        waveRef.current.style.transform = `translate(${xPercent * 0.1}px, ${yPercent * 0.1}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Interactive Wave Background */}
      <div 
        ref={waveRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <svg 
          className="absolute top-20 left-0 w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 400,500 800,400 C1000,350 1100,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#293587" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#98A5FE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#293587" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg 
          className="absolute top-40 right-0 w-full h-full opacity-15"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,200 C900,100 600,300 400,200 C200,150 100,250 0,200 L0,800 L1200,800 Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#98A5FE" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#293587" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
                  <span className="font-nunito text-sm font-medium text-secondary">Stuttering Modification</span>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="font-nunito text-sm font-medium text-secondary">Fluency Shaping</span>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-nunito text-sm font-medium text-secondary/70">Cognitive Training</span>
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
