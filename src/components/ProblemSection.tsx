
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
      gradient: "from-red-500/20 to-pink-500/20",
      accentColor: "border-red-400/30 bg-red-50/50"
    },
    {
      icon: "📉",
      title: "Motivation Drop",
      description: "Patients lose engagement and momentum without ongoing support structure",
      gradient: "from-orange-500/20 to-yellow-500/20", 
      accentColor: "border-orange-400/30 bg-orange-50/50"
    },
    {
      icon: "🔄",
      title: "Transfer Gap",
      description: "Clinical skills fail to generalize to real-world communication contexts",
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "border-blue-400/30 bg-blue-50/50"
    },
    {
      icon: "⏰",
      title: "Regression Cycle",
      description: "Time wasted re-teaching concepts instead of progressing forward",
      gradient: "from-purple-500/20 to-indigo-500/20",
      accentColor: "border-purple-400/30 bg-purple-50/50"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-destructive/10 rounded-full mb-6 border border-destructive/20">
            <span className="text-destructive text-sm font-medium">⚠ Critical Gap Identified</span>
          </div>
          
          <h2 className="font-nunito font-bold text-4xl sm:text-5xl text-secondary mb-6 leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
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
              className={`problem-card group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-16 h-16 rounded-xl ${problem.accentColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-3xl p-8 border border-primary/10 backdrop-blur-sm">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
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
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
