
import React, { useEffect, useRef } from 'react';

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.problem-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "🧠",
      title: "Memory Fade",
      description: "Skills deteriorate rapidly between sessions without continuous reinforcement",
      gradient: "from-calm-peach/30 to-calm-lavender/30",
      accentColor: "border-calm-peach/40 bg-calm-peach/10"
    },
    {
      icon: "📉",
      title: "Motivation Drop",
      description: "Patients lose engagement and momentum without ongoing support structure",
      gradient: "from-calm-sage/30 to-calm-mint/30", 
      accentColor: "border-calm-sage/40 bg-calm-sage/10"
    },
    {
      icon: "🔄",
      title: "Transfer Gap",
      description: "Clinical skills fail to generalize to real-world communication contexts",
      gradient: "from-calm-sky/30 to-calm-lavender/30",
      accentColor: "border-calm-sky/40 bg-calm-sky/10"
    },
    {
      icon: "⏰",
      title: "Regression Cycle",
      description: "Time wasted re-teaching concepts instead of progressing forward",
      gradient: "from-calm-mint/30 to-calm-forest/30",
      accentColor: "border-calm-mint/40 bg-calm-mint/10"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-cream via-white to-calm-sky/20 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-calm-mint/20 to-calm-sage/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-calm-lavender/20 to-calm-peach/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-calm-sky/15 to-calm-mint/15 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-peach/20 to-calm-lavender/20 rounded-full mb-6 border border-calm-peach/30 backdrop-blur-sm">
            <span className="text-secondary text-sm font-medium">⚠ Critical Gap Identified</span>
          </div>
          
          <h2 className="font-nunito font-bold text-4xl sm:text-5xl text-secondary mb-6 leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-calm-peach to-primary bg-clip-text text-transparent">
              6-Day Problem
            </span>
            {' '}in Speech Therapy
          </h2>
          
          <p className="font-nunito text-xl text-secondary/70 max-w-3xl mx-auto leading-relaxed">
            Structured therapy sessions vs. unstructured practice periods
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`problem-card group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl ${problem.accentColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {problem.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-nunito font-bold text-lg text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="font-nunito text-sm text-secondary/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="relative">
          <div className="bg-gradient-to-r from-calm-mint/20 via-calm-sky/30 to-calm-lavender/20 rounded-3xl p-8 border border-white/40 backdrop-blur-sm shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-6 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary text-sm font-medium">✨ AI-Powered Solution</span>
              </div>
              
              <h3 className="font-nunito font-bold text-3xl text-primary mb-4">
                What if practice was as structured as therapy?
              </h3>
              
              <p className="font-nunito text-lg text-secondary/80 mb-6">
                Intelligent daily practice sessions that adapt to each patient's progress,
                bridging the gap between weekly appointments.
              </p>

              {/* Animated Progress Indicator */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-glow"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-calm-mint rounded-full animate-glow" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-calm-mint to-primary rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-calm-mint/30 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-calm-lavender/30 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
