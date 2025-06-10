import React from "react";

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧠",
      title: "Memory Fade",
      description:
        "Skills deteriorate rapidly between sessions without continuous reinforcement",
      gradient: "from-calm-navy/20 to-calm-lavender/20",
      accentColor: "border-calm-navy/30 bg-calm-navy/10",
    },
    {
      icon: "📉",
      title: "Motivation Drop",
      description:
        "Patients lose engagement and momentum without ongoing support structure",
      gradient: "from-calm-charcoal/20 to-calm-light",
      accentColor: "border-calm-charcoal/30 bg-calm-charcoal/10",
    },
    {
      icon: "🔄",
      title: "Transfer Gap",
      description:
        "Clinical skills fail to generalize to real-world communication contexts",
      gradient: "from-calm-lavender/20 to-calm-navy/10",
      accentColor: "border-calm-lavender/40 bg-calm-lavender/10",
    },
    {
      icon: "⏰",
      title: "Regression Cycle",
      description:
        "Time wasted re-teaching concepts instead of progressing forward",
      gradient: "from-calm-light to-calm-lavender/20",
      accentColor: "border-calm-light bg-calm-light/50",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light via-white to-calm-lavender/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-calm-charcoal/10 to-calm-navy/10 rounded-full blur-2xl animate-float-delayed"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-calm-lavender/15 to-calm-light rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-6 shadow-sm border border-calm-light/50 backdrop-blur-sm">
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10 flex items-center justify-center mr-2">
              <span className="text-xs">⚠</span>
            </span>
            <span className="text-calm-charcoal/80 text-sm font-medium">
              Critical Problem
            </span>
          </div>

          <h2 className="font-nunito font-bold text-4xl sm:text-5xl text-calm-charcoal mb-6 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-calm-navy to-calm-lavender bg-clip-text text-transparent">
              6-Day Problem
            </span>{" "}
            in Speech Therapy
          </h2>

          <p className="font-nunito text-xl text-calm-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Structured therapy sessions vs. unstructured practice periods
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div
                className={`bg-gradient-to-br ${problem.gradient} rounded-2xl p-8 border border-gray-200/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full relative overflow-hidden`}
              >
                {/* Icon Container */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-xl ${problem.accentColor} flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  {problem.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-nunito font-bold text-lg text-calm-charcoal mb-3 transition-colors duration-300 group-hover:text-calm-navy">
                    {problem.title}
                  </h3>
                  <p className="font-nunito text-sm text-calm-charcoal/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="relative">
          <div className="bg-gradient-to-r from-calm-navy/10 via-calm-lavender/20 to-calm-light rounded-2xl p-8 border border-calm-light backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-lavender/20 to-calm-navy/20 rounded-full mb-6 border border-calm-lavender/30 backdrop-blur-sm">
                <span className="text-calm-navy text-sm font-medium">
                  ✨ AI-Powered Solution
                </span>
              </div>

              <h3 className="font-nunito font-bold text-3xl text-calm-navy mb-4">
                What if practice was as structured as therapy?
              </h3>

              <p className="font-nunito text-lg text-calm-charcoal/80 mb-6">
                Intelligent daily practice sessions that adapt to each patient's
                progress, bridging the gap between weekly appointments.
              </p>

              {/* Animated Progress Indicator */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full animate-glow"></div>
                <div
                  className="w-3 h-3 bg-gradient-to-r from-calm-lavender to-calm-charcoal rounded-full animate-glow"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-gradient-to-r from-calm-charcoal to-calm-navy rounded-full animate-glow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-calm-lavender/30 rounded-full blur-sm animate-float"></div>
          <div
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-calm-navy/30 rounded-full blur-sm animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
