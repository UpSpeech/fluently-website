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
            
            // Animate progress bar
            if (entry.target === progressRef.current) {
              setTimeout(() => {
                const progressBar = entry.target.querySelector('.progress-bar') as HTMLElement;
                if (progressBar) {
                  progressBar.style.width = '85%';
                }
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
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
        <div className="text-center mb-16 animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-navy/20 to-calm-lavender/20 rounded-full mb-6 border border-calm-navy/30 backdrop-blur-sm">
            <span className="text-calm-charcoal text-sm font-medium">🚀 AI-Powered Innovation</span>
          </div>
          
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-calm-navy to-calm-lavender bg-clip-text text-transparent">
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
              className="animate-on-scroll opacity-0 text-center group"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-calm-lavender/30 to-calm-navy/30 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                
                <span className="text-white text-3xl relative z-10 group-hover:animate-bounce">{feature.icon}</span>
              </div>
              <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4 group-hover:text-calm-navy transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-nunito text-calm-charcoal/70 mb-4 group-hover:text-calm-charcoal transition-colors duration-300">
                {feature.description}
              </p>
              <p className="font-nunito text-sm font-semibold text-calm-navy group-hover:scale-105 transition-transform duration-300">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll opacity-0 bg-gradient-to-r from-calm-lavender/20 to-calm-navy/10 rounded-3xl p-8 border border-calm-light backdrop-blur-sm shadow-lg relative overflow-hidden group" style={{ animationDelay: '800ms' }}>
          {/* Tech Lines Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-calm-navy to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-calm-lavender to-transparent"></div>
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-calm-charcoal to-transparent"></div>
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-calm-navy to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="font-nunito font-bold text-2xl text-calm-charcoal mb-4 group-hover:text-calm-navy transition-colors duration-300">
                See Fluently in Action
              </h3>
              <p className="font-nunito text-calm-charcoal/80 mb-6">
                Watch how our platform creates personalized practice sessions and provides 
                real-time feedback to keep your patients engaged between appointments.
              </p>
              <div className="space-y-3">
                {[
                  "Custom exercise creation",
                  "AI-powered speech analysis", 
                  "Comprehensive progress tracking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group/item">
                    <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full group-hover/item:scale-150 group-hover/item:animate-pulse transition-all duration-300"></div>
                    <span className="font-nunito text-sm text-calm-charcoal group-hover/item:text-calm-navy transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={progressRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-calm-light relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-calm-navy/30 transition-all duration-500"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-calm-lavender/10 to-calm-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-nunito font-semibold text-calm-charcoal">Weekly Progress</span>
                  <span className="font-nunito text-sm text-calm-navy font-semibold">85% Complete</span>
                </div>
                <div className="w-full bg-calm-light rounded-full h-3 overflow-hidden">
                  <div className="progress-bar bg-gradient-to-r from-calm-navy to-calm-lavender h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-calm-lavender/20 rounded-2xl border border-calm-lavender/30 group-hover:scale-105 transition-transform duration-300">
                    <div className="font-nunito font-bold text-xl text-calm-navy">47</div>
                    <div className="font-nunito text-xs text-calm-charcoal/70">Exercises Completed</div>
                  </div>
                  <div className="text-center p-3 bg-calm-navy/10 rounded-2xl border border-calm-navy/20 group-hover:scale-105 transition-transform duration-300">
                    <div className="font-nunito font-bold text-xl text-calm-navy">92%</div>
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
