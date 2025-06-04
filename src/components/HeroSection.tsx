
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
    <section className="relative h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light via-white via-calm-lavender/10 to-calm-navy/5 overflow-hidden flex items-center">
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-calm-lavender/20 via-transparent to-calm-navy/15"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-calm-charcoal/5 via-transparent to-calm-lavender/10"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-calm-navy/10 via-transparent to-calm-lavender/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-calm-charcoal/5 via-calm-lavender/5 to-calm-navy/10"></div>
      
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
          alt="Woman using laptop for therapy session"
          className="absolute top-10 right-10 w-32 h-24 object-cover rounded-2xl opacity-20 blur-sm animate-float"
        />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Healthcare professional with laptop"
          className="absolute bottom-20 left-10 w-24 h-32 object-cover rounded-2xl opacity-15 blur-sm animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-calm-lavender/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-calm-navy/30 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-calm-charcoal/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-calm-lavender/50 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-32 left-1/3 w-8 h-8 bg-gradient-to-br from-calm-navy/20 to-calm-lavender/30 rounded-full animate-float blur-lg" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-tl from-calm-charcoal/10 to-calm-lavender/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Interactive Wave Background */}
      <div 
        ref={waveRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <svg 
          className="absolute top-20 left-0 w-full h-full opacity-15"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 C300,300 400,500 800,400 C1000,350 1100,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#enhanced-wave-gradient)"
          />
          <defs>
            <linearGradient id="enhanced-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#293587" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#98A5FE" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4B4E4E" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#293587" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#98A5FE" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-nunito font-bold text-4xl sm:text-5xl lg:text-6xl text-calm-charcoal leading-tight mb-6">
              Therapy happens once a week.{' '}
              <span className="text-transparent bg-gradient-to-r from-calm-navy via-calm-lavender to-calm-navy bg-clip-text">Practice happens every day</span>
              —with Fluently.
            </h1>
            
            <p className="font-nunito text-lg sm:text-xl text-calm-charcoal/70 mb-8 leading-relaxed">
              AI-powered, structured training between sessions—so your patients stay motivated, and your results stick.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-gradient-to-r from-calm-navy via-calm-lavender to-calm-navy hover:from-calm-navy/90 hover:via-calm-lavender/90 hover:to-calm-navy/90 text-white font-nunito font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              >
                Join the Waitlist for Early Access
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            {/* Background Image for Card */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Laptop computer showing therapy dashboard"
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            {/* Online Status Card */}
            <div className="absolute -top-4 -right-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-calm-light p-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-nunito text-sm font-semibold text-calm-charcoal">Online</span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-calm-light relative overflow-hidden">
              {/* Gradient overlay on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-calm-lavender/5 via-transparent to-calm-navy/5 rounded-3xl"></div>
              
              <div className="relative z-10">
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
                      <div className="bg-gradient-to-r from-calm-navy via-calm-lavender to-calm-navy h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-calm-lavender/20 to-calm-lavender/10 rounded-2xl border border-calm-lavender/30">
                    <span className="font-nunito text-sm font-medium text-calm-charcoal">Stuttering Modification</span>
                    <div className="w-6 h-6 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-calm-navy/10 to-calm-navy/5 rounded-2xl border border-calm-navy/20">
                    <span className="font-nunito text-sm font-medium text-calm-charcoal">Fluency Shaping</span>
                    <div className="w-6 h-6 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-calm-light/80 to-calm-charcoal/5 rounded-2xl border border-calm-charcoal/10">
                    <span className="font-nunito text-sm font-medium text-calm-charcoal/70">Cognitive Training</span>
                    <div className="w-6 h-6 bg-calm-charcoal/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vocal Cord Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="w-full h-24" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 V100 H0 Z"
            fill="url(#vocal-wave-gradient)"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 V100 H0 Z;
                      M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50 V100 H0 Z;
                      M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 V100 H0 Z"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,60 Q200,30 400,60 T800,60 T1200,60 V100 H0 Z"
            fill="url(#vocal-wave-gradient-2)"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              values="M0,60 Q200,30 400,60 T800,60 T1200,60 V100 H0 Z;
                      M0,60 Q200,90 400,60 T800,60 T1200,60 V100 H0 Z;
                      M0,60 Q200,30 400,60 T800,60 T1200,60 V100 H0 Z"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="vocal-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#293587" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#98A5FE" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#293587" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="vocal-wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#98A5FE" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#4B4E4E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#98A5FE" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
