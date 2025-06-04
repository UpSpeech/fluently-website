
import React, { useEffect, useRef } from 'react';

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-calm-light/30 to-calm-lavender/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-calm-navy/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-calm-charcoal/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-calm-lavender/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
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
              className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 ease-out text-center group hover:transform hover:-translate-y-2 hover:scale-105"
              style={{ 
                animationDelay: feature.delay,
                transitionDelay: feature.delay 
              }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <span className="text-white text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="font-nunito text-calm-charcoal/70 mb-4">
                {feature.description}
              </p>
              <p className="font-nunito text-sm font-semibold text-calm-navy">
                {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile App Mockups Section */}
        <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1200 ease-out bg-gradient-to-r from-calm-lavender/20 to-calm-navy/10 rounded-3xl p-8 border border-calm-light backdrop-blur-sm shadow-lg relative overflow-hidden" style={{ animationDelay: '800ms' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-nunito font-bold text-2xl text-calm-charcoal mb-4">
                See Fluently in Action
              </h3>
              <p className="font-nunito text-calm-charcoal/80 mb-6">
                Watch how our platform creates personalized practice sessions and provides 
                real-time feedback to keep your patients engaged between appointments.
              </p>
              <div className="space-y-4">
                {[
                  "Custom exercise creation with AI assistance",
                  "Real-time speech analysis and feedback", 
                  "Comprehensive progress tracking dashboards",
                  "Mood and emotional wellness monitoring",
                  "Personalized coping strategies and tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full"></div>
                    <span className="font-nunito text-sm text-calm-charcoal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Mockups */}
            <div className="relative">
              <div className="flex justify-center items-center space-x-4">
                {/* Main Phone Mockup */}
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-2 bg-white">
                        <span className="text-sm font-semibold">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-6 py-4">
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">Good Morning, Sarah!</h4>
                        <p className="text-gray-600 mb-6">How are you feeling today?</p>
                        
                        {/* Mood Selection */}
                        <div className="bg-calm-lavender/20 rounded-2xl p-4 mb-4">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-xs">😢</span>
                            <span className="text-xs">😐</span>
                            <span className="text-xs">😊</span>
                            <div className="w-8 h-8 bg-calm-lavender rounded-full flex items-center justify-center">
                              <span className="text-white">😊</span>
                            </div>
                            <span className="text-xs">😄</span>
                          </div>
                          <p className="text-xs text-gray-600 text-center">Feeling pretty good today!</p>
                        </div>
                        
                        {/* Action Cards */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-calm-lavender/30 rounded-xl p-3 text-center">
                            <div className="w-8 h-8 bg-calm-lavender rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs">📊</span>
                            </div>
                            <p className="text-xs font-semibold text-gray-700">Track Mood</p>
                          </div>
                          <div className="bg-calm-navy/20 rounded-xl p-3 text-center">
                            <div className="w-8 h-8 bg-calm-navy rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs">💬</span>
                            </div>
                            <p className="text-xs font-semibold text-gray-700">Get Support</p>
                          </div>
                        </div>
                        
                        {/* Exercise Card */}
                        <div className="bg-gray-800 rounded-xl p-4 text-white">
                          <h5 className="text-sm font-semibold mb-1">Today's Session</h5>
                          <p className="text-xs text-gray-300">Breathing exercises to help reduce anxiety</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-8 transform rotate-12">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-calm-light w-48">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-calm-lavender/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">📈</span>
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm text-gray-800">Mood Trends</h6>
                        <p className="text-xs text-gray-600">Weekly emotional patterns</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 transform -rotate-12">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-calm-light w-44">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-calm-navy/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">🧘</span>
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm text-gray-800">Coping Tools</h6>
                        <p className="text-xs text-gray-600">Personalized strategies</p>
                      </div>
                    </div>
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
