import React from "react";

const SolutionSection = () => {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-calm-light/30 to-calm-lavender/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-calm-navy/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-calm-charcoal/10 rounded-full blur-xl animate-float-delayed"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-calm-lavender/15 rounded-full blur-lg animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6 animate-fade-in">
            Meet Fluently: Your Smart, Daily Training Companion
          </h2>
          <p className="font-nunito text-xl text-calm-charcoal/80 max-w-4xl mx-auto animate-fade-in">
            Fluently helps people who stutter build fluency and confidence — one
            day at a time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: "📋",
              title: "Structured Weekly Plans",
              description: "Real-time feedback using speech and context",
              benefit: "→ Faster progress and fewer regressions",
              gradient: "from-calm-navy to-calm-lavender",
              delay: "0.2s",
            },
            // {
            //   icon: "🧠",
            //   title: "Real-Time AI Feedback",
            //   description: "Instant corrections on technique",
            //   benefit: "→ Better retention, less therapist rework",
            //   gradient: "from-calm-lavender to-calm-charcoal",
            //   delay: "0.4s",
            // },
            {
              icon: "📈",
              title: "Therapist-Ready Reports",
              description: "Access AI-generated reports after each session",
              benefit: "→ No manual work, more time for patients",
              gradient: "from-calm-charcoal to-calm-lavender",
              delay: "0.4s",
            },
            {
              icon: "💬",
              title: "Built-in Emotional Tools",
              description: "Coping strategies for frustration and setbacks",
              benefit: "→ Keep patients engaged and motivated",
              gradient: "from-calm-lavender to-calm-navy",
              delay: "0.6s",
            },
            {
              icon: "📊",
              title: "Progress Tracking Dashboards",
              description: "Smart dashboards to track progress and consistency",
              benefit: "→ Identify patterns and adjust plans",
              gradient: "from-calm-charcoal to-calm-navy",
              delay: "0.6s",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: feature.delay }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
              >
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

        {/* Main Content with Mockups */}
        <div className="animate-fade-in-up bg-gradient-to-r from-calm-lavender/20 to-calm-navy/10 rounded-2xl p-8 border border-calm-light backdrop-blur-sm shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
              <h3 className="font-nunito font-bold text-2xl text-calm-charcoal mb-4">
                Designed with Therapists. Built for Real Life.
              </h3>
              <p className="font-nunito text-calm-charcoal/80 mb-6">
                We work alongside therapists to provide structured plans,
                real-time feedback, and motivational support — tailored to each
                user’s progress.
              </p>
              <div className="space-y-4">
                {[
                  "Assign custom plans in minutes",
                  "Track practice consistency and difficulty",
                  "Reports compliant with ICD-11 and DSM-5-TR",
                  "Motivate patients with daily micro-successes",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full"></div>
                    <span className="font-nunito text-sm text-calm-charcoal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Mockups */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
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
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">
                          Good Morning, Sarah!
                        </h4>
                        <p className="text-gray-600 mb-6">
                          How is your stuttering today?
                        </p>

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
                          <p className="text-xs text-gray-600 text-center">
                            Feeling pretty good today!
                          </p>
                        </div>

                        {/* Today's Session Card */}
                        <div className="bg-gray-800 rounded-xl p-4 text-white mb-4">
                          <h5 className="text-sm font-semibold mb-1">
                            Today's Session
                          </h5>
                          <p className="text-xs text-gray-300">
                            Breathing exercises to help reduce anxiety
                          </p>
                        </div>

                        {/* Action Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-calm-lavender/30 rounded-xl p-3 text-center">
                            <div className="w-8 h-8 bg-calm-lavender rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs">📊</span>
                            </div>
                            <p className="text-xs font-semibold text-gray-700">
                              Track Mood
                            </p>
                          </div>
                          <div className="bg-calm-navy/20 rounded-xl p-3 text-center">
                            <div className="w-8 h-8 bg-calm-navy rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs">💬</span>
                            </div>
                            <p className="text-xs font-semibold text-gray-700">
                              Get Support
                            </p>
                          </div>
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
                        <h6 className="font-semibold text-sm text-gray-800">
                          Mood Trends
                        </h6>
                        <p className="text-xs text-gray-600">
                          Weekly emotional patterns
                        </p>
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
                        <h6 className="font-semibold text-sm text-gray-800">
                          Coping Tools
                        </h6>
                        <p className="text-xs text-gray-600">
                          Personalized strategies
                        </p>
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
