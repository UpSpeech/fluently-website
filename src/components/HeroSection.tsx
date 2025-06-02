
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
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-cream via-calm-sky/30 to-calm-mint/20 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-calm-lavender/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-calm-mint/40 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-calm-peach/40 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-calm-sage/40 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

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
            fill="url(#calm-wave-gradient)"
          />
          <defs>
            <linearGradient id="calm-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A8E6CF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7FB3D3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4B5D9" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-nunito font-bold text-4xl sm:text-5xl lg:text-6xl text-secondary leading-tight mb-6">
              Therapy Happens Once a Week.{' '}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Practice Happens Every Day</span>
              —with Fluently.
            </h1>
            
            <p className="font-nunito text-lg sm:text-xl text-secondary/70 mb-8 leading-relaxed">
              AI-powered, structured training between sessions—so your patients stay motivated, and your results stick.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-nunito font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              >
                Join the Waitlist for Early Access
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50">
              <div className="bg-gradient-to-br from-calm-mint/20 to-calm-sky/30 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-calm-forest rounded-full animate-glow"></div>
                  <div className="w-3 h-3 bg-calm-sage rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                  <div className="w-3 h-3 bg-calm-stone rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>
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
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-calm-mint/20 rounded-2xl border border-calm-mint/30">
                  <span className="font-nunito text-sm font-medium text-secondary">Stuttering Modification</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-calm-forest to-calm-sage rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-calm-sky/20 rounded-2xl border border-calm-sky/30">
                  <span className="font-nunito text-sm font-medium text-secondary">Fluency Shaping</span>
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-calm-cream/50 rounded-2xl border border-calm-stone/20">
                  <span className="font-nunito text-sm font-medium text-secondary/70">Cognitive Training</span>
                  <div className="w-6 h-6 bg-calm-stone/50 rounded-full"></div>
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
