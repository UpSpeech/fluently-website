
import React, { useEffect, useRef } from 'react';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate progress bar with better timing
            if (entry.target === progressRef.current) {
              setTimeout(() => {
                const progressBar = entry.target.querySelector('.progress-bar') as HTMLElement;
                if (progressBar) {
                  progressBar.style.width = '85%';
                }
              }, 800);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((element) => observer.observe(element));

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-calm-light/30 to-calm-lavender/10 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-calm-navy/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-calm-charcoal/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-calm-lavender/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(41, 53, 135, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(41, 53, 135, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-navy/20 to-calm-lavender/20 rounded-full mb-6 border border-calm-navy/30 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <span className="text-calm-charcoal text-sm font-medium">🚀 AI-Powered Innovation</span>
          </div>
          
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6 transform hover:scale-105 transition-transform duration-300">
            Meet{' '}
            <span className="bg-gradient-to-r from-calm-navy to-calm-lavender bg-clip-text text-transparent animate-glow">
              Fluently
            </span>
            : Your AI-Powered Training Companion for Better Carry-Over
          </h2>
          <p className="font-nunito text-xl text-calm-charcoal/80 max-w-4xl mx-auto">
            Fluently helps patients practice effectively between sessions, with structured plans, 
            real-time feedback, and tracked progress—all designed to fit into your current workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "📋",
              title: "Structured Weekly Plans",
              description: "Tailored exercises based on patient goals",
              benefit: "→ Faster progress and fewer regressions",
              gradient: "from-calm-navy to-calm-lavender",
              delay: "200ms"
            },
            {
              icon: "🧠",
              title: "Real-Time AI Feedback",
              description: "Instant corrections on technique",
              benefit: "→ Better retention, less therapist rework",
              gradient: "from-calm-lavender to-calm-charcoal",
              delay: "400ms"
            },
            {
              icon: "📊",
              title: "Progress Tracking Dashboards",
              description: "See how patients are engaging",
              benefit: "→ Keep them accountable and motivated",
              gradient: "from-calm-charcoal to-calm-navy",
              delay: "600ms"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transform translate-y-12 transition-all duration-1000 ease-out text-center group hover:transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                animationDelay: feature.delay,
                transitionDelay: feature.delay 
              }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg relative overflow-hidden`}>
                {/* Enhanced Pulse Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-calm-lavender/40 to-calm-navy/40 rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700"></div>
                
                <span className="text-white text-3xl relative z-10 group-hover:animate-bounce group-hover:scale-110 transition-all duration-500">{feature.icon}</span>
              </div>
              <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4 group-hover:text-calm-navy transition-all duration-500 transform group-hover:scale-105">
                {feature.title}
              </h3>
              <p className="font-nunito text-calm-charcoal/70 mb-4 group-hover:text-calm-charcoal transition-all duration-500">
                {feature.description}
              </p>
              <p className="font-nunito text-sm font-semibold text-calm-navy group-hover:scale-110 group-hover:font-bold transition-all duration-500 transform">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 transform translate-y-16 transition-all duration-1200 ease-out bg-gradient-to-r from-calm-lavender/20 to-calm-navy/10 rounded-3xl p-8 border border-calm-light backdrop-blur-sm shadow-lg relative overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-700" style={{ animationDelay: '800ms' }}>
          {/* Enhanced Tech Lines Background */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-calm-navy to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-calm-lavender to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-calm-charcoal to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-calm-navy to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="transform group-hover:translate-x-2 transition-transform duration-700">
              <h3 className="font-nunito font-bold text-2xl text-calm-charcoal mb-4 group-hover:text-calm-navy transition-all duration-500 transform group-hover:scale-105">
                See Fluently in Action
              </h3>
              <p className="font-nunito text-calm-charcoal/80 mb-6 group-hover:text-calm-charcoal transition-colors duration-500">
                Watch how our platform creates personalized practice sessions and provides 
                real-time feedback to keep your patients engaged between appointments.
              </p>
              <div className="space-y-3">
                {[
                  "Custom exercise creation",
                  "AI-powered speech analysis", 
                  "Comprehensive progress tracking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group/item transform hover:translate-x-2 transition-all duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full group-hover/item:scale-150 group-hover/item:animate-pulse transition-all duration-500"></div>
                    <span className="font-nunito text-sm text-calm-charcoal group-hover/item:text-calm-navy group-hover/item:font-semibold transition-all duration-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={progressRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-calm-light relative overflow-hidden transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
              {/* Enhanced Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-calm-navy/40 transition-all duration-700 animate-pulse"></div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-calm-lavender/20 to-calm-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg"></div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between transform group-hover:scale-105 transition-transform duration-500">
                  <span className="font-nunito font-semibold text-calm-charcoal">Weekly Progress</span>
                  <span className="font-nunito text-sm text-calm-navy font-semibold animate-pulse">85% Complete</span>
                </div>
                <div className="w-full bg-calm-light rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="progress-bar bg-gradient-to-r from-calm-navy via-calm-lavender to-calm-navy h-3 rounded-full transition-all duration-2000 ease-out shadow-lg animate-glow" style={{ width: '0%', backgroundSize: '200% 100%', animation: 'glow 3s ease-in-out infinite' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-calm-lavender/20 rounded-2xl border border-calm-lavender/30 group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 hover:bg-calm-lavender/30">
                    <div className="font-nunito font-bold text-xl text-calm-navy animate-pulse">47</div>
                    <div className="font-nunito text-xs text-calm-charcoal/70">Exercises Completed</div>
                  </div>
                  <div className="text-center p-3 bg-calm-navy/10 rounded-2xl border border-calm-navy/20 group-hover:scale-110 group-hover:-rotate-1 transition-all duration-500 hover:bg-calm-navy/20">
                    <div className="font-nunito font-bold text-xl text-calm-navy animate-pulse" style={{ animationDelay: '0.5s' }}>92%</div>
                    <div className="font-nunito text-xs text-calm-charcoal/70">Accuracy Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
