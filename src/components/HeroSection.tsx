
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
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light via-white to-calm-lavender/20 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-calm-lavender/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-calm-navy/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-calm-charcoal/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-calm-lavender/50 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Interactive Wave Background */}
      <div 
        ref={waveRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <svg 
          className="absolute top-20 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 400,500 800,400 C1000,350 1100,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#new-wave-gradient)"
          />
          <defs>
            <linearGradient id="new-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#293587" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#98A5FE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4B4E4E" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-nunito font-bold text-4xl sm:text-5xl lg:text-6xl text-calm-charcoal leading-tight mb-6">
              Therapy Happens Once a Week.{' '}
              <span className="text-transparent bg-gradient-to-r from-calm-navy to-calm-lavender bg-clip-text">Practice Happens Every Day</span>
              —with Fluently.
            </h1>
            
            <p className="font-nunito text-lg sm:text-xl text-calm-charcoal/70 mb-8 leading-relaxed">
              AI-powered, structured training between sessions—so your patients stay motivated, and your results stick.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-gradient-to-r from-calm-navy to-calm-lavender hover:from-calm-navy/90 hover:to-calm-lavender/90 text-white font-nunito font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              >
                Join the Waitlist for Early Access
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-calm-light">
              <div className="bg-gradient-to-br from-calm-lavender/20 to-calm-navy/10 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-calm-navy rounded-full animate-glow"></div>
                  <div className="w-3 h-3 bg-calm-lavender rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                  <div className="w-3 h-3 bg-calm-charcoal rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>
                </div>
                <h3 className="font-nunito font-semibold text-lg text-calm-charcoal mb-2">
                  Patient Dashboard
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-nunito text-sm text-calm-charcoal/70">Today's Practice</span>
                    <span className="font-nunito text-sm font-semibold text-calm-navy">3/5 Complete</span>
                  </div>
                  <div className="w-full bg-calm-light rounded-full h-2">
                    <div className="bg-gradient-to-r from-calm-navy to-calm-lavender h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-calm-lavender/20 rounded-2xl border border-calm-lavender/30">
                  <span className="font-nunito text-sm font-medium text-calm-charcoal">Stuttering Modification</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-calm-navy/10 rounded-2xl border border-calm-navy/20">
                  <span className="font-nunito text-sm font-medium text-calm-charcoal">Fluency Shaping</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-calm-light/80 rounded-2xl border border-calm-charcoal/10">
                  <span className="font-nunito text-sm font-medium text-calm-charcoal/70">Cognitive Training</span>
                  <div className="w-6 h-6 bg-calm-charcoal/30 rounded-full"></div>
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
