
import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧠",
      title: "Memory Fade",
      description: "Skills deteriorate rapidly between sessions without continuous reinforcement",
      gradient: "from-calm-navy/20 to-calm-lavender/20",
      accentColor: "border-calm-navy/30 bg-calm-navy/10"
    },
    {
      icon: "📉",
      title: "Motivation Drop",
      description: "Patients lose engagement and momentum without ongoing support structure",
      gradient: "from-calm-charcoal/20 to-calm-light", 
      accentColor: "border-calm-charcoal/30 bg-calm-charcoal/10"
    },
    {
      icon: "🔄",
      title: "Transfer Gap",
      description: "Clinical skills fail to generalize to real-world communication contexts",
      gradient: "from-calm-lavender/20 to-calm-navy/10",
      accentColor: "border-calm-lavender/40 bg-calm-lavender/10"
    },
    {
      icon: "⏰",
      title: "Regression Cycle",
      description: "Time wasted re-teaching concepts instead of progressing forward",
      gradient: "from-calm-light to-calm-lavender/20",
      accentColor: "border-calm-light bg-calm-light/50"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light via-white to-calm-lavender/10 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-calm-charcoal/10 to-calm-navy/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-calm-lavender/15 to-calm-light rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-navy/20 to-calm-lavender/20 rounded-full mb-6 border border-calm-navy/30 backdrop-blur-sm">
            <span className="text-calm-charcoal text-sm font-medium">⚠ Critical Gap Identified</span>
          </div>
          
          <h2 className="font-nunito font-bold text-4xl sm:text-5xl text-calm-charcoal mb-6 leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-calm-navy to-calm-lavender bg-clip-text text-transparent">
              6-Day Problem
            </span>
            {' '}in Speech Therapy
          </h2>
          
          <p className="font-nunito text-xl text-calm-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Structured therapy sessions vs. unstructured practice periods
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-calm-light shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-6 hover:scale-110 cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-calm-navy/40 transition-all duration-500"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-calm-lavender/20 to-calm-navy/20 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl ${problem.accentColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-sm m-6`}>
                <span className="group-hover:animate-bounce">{problem.icon}</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10 px-6 pb-6">
                <h3 className="font-nunito font-bold text-lg text-calm-charcoal mb-3 group-hover:text-calm-navy transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="font-nunito text-sm text-calm-charcoal/70 leading-relaxed group-hover:text-calm-charcoal transition-colors duration-300">
                  {problem.description}
                </p>
              </div>

              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-calm-lavender/20 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="relative">
          <div className="bg-gradient-to-r from-calm-navy/10 via-calm-lavender/20 to-calm-light rounded-3xl p-8 border border-calm-light backdrop-blur-sm shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-lavender/20 to-calm-navy/20 rounded-full mb-6 border border-calm-lavender/30 backdrop-blur-sm">
                <span className="text-calm-navy text-sm font-medium">✨ AI-Powered Solution</span>
              </div>
              
              <h3 className="font-nunito font-bold text-3xl text-calm-navy mb-4">
                What if practice was as structured as therapy?
              </h3>
              
              <p className="font-nunito text-lg text-calm-charcoal/80 mb-6">
                Intelligent daily practice sessions that adapt to each patient's progress,
                bridging the gap between weekly appointments.
              </p>

              {/* Animated Progress Indicator */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full animate-glow"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-calm-lavender to-calm-charcoal rounded-full animate-glow" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-calm-charcoal to-calm-navy rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-calm-lavender/30 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-calm-navy/30 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
