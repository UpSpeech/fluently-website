import React from "react";

const ProblemSection = () => {
  const problems = [
    {
      icon: "🧠", // spinning stars representing confusion/forgetfulness
      title: "Patients forget techniques",
      description:
        "<strong>Real-life practice is hard</strong> — Without support, structure, or feedback between sessions, clients lose confidence, get emotionally drained and isolated",
      gradient: "from-calm-navy/20 via-calm-lavender/15 to-calm-navy/5",
      accentColor:
        "border-calm-navy/20 bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10",
    },
    {
      icon: "🔍", // magnifying glass representing limited visibility/insight
      title: "Limited visibility into what clients do between sessions",
      description:
        "Therapists often don't know if or how clients practice, making it hard to adjust treatment",
      gradient: "from-calm-lavender/20 via-calm-navy/10 to-calm-lavender/5",
      accentColor:
        "border-calm-lavender/20 bg-gradient-to-br from-calm-lavender/10 to-calm-navy/10",
    },
    {
      icon: "📈", // chart going up representing progress tracking
      title: "Progress tracking is manual and time-consuming",
      description:
        "Therapists spend hours creating reports instead of focusing on personalized care",
      gradient: "from-calm-navy/15 via-calm-charcoal/10 to-calm-navy/5",
      accentColor:
        "border-calm-navy/20 bg-gradient-to-br from-calm-navy/10 to-calm-charcoal/10",
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
          <h2 className="font-nunito font-bold text-4xl sm:text-5xl text-calm-charcoal mb-6 leading-tight">
            The{" "}
            <span className="text-transparent bg-calm-lavender bg-clip-text">
              Hardest{" "}
            </span>
            Part of Speech Therapy
            <br />
            Happens Between Sessions
          </h2>

          <p className="font-nunito text-xl text-calm-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Your sessions are structured, engaging, and tailored to each
            patient.
            <br />
            <span className="font-bold text-transparent bg-calm-navy bg-clip-text">
              But what happens between appointments?
            </span>
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 opacity-50 mix-blend-multiply bg-gradient-to-br ${problem.gradient}`}
                />

                {/* Icon Container */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-xl ${problem.accentColor} flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  {problem.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4 transition-colors duration-300 group-hover:text-calm-navy">
                    {problem.title}
                  </h3>
                  <p
                    className="font-nunito text-base text-calm-charcoal/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: problem.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="relative">
          <div className="bg-gradient-to-r from-calm-navy/10 via-calm-lavender/20 to-calm-light rounded-2xl p-8 border border-calm-light backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="font-nunito font-bold text-3xl text-calm-navy mb-4 transition-colors duration-300">
                What if practice was as structured as therapy?
              </h3>

              <p className="font-nunito text-lg text-calm-charcoal/80 mb-8">
                Intelligent daily practice sessions that adapt to each patient's
                progress, bridging the gap between weekly appointments.
              </p>

              {/* Improved Progress Indicator */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full animate-pulse"></div>
                <div
                  className="w-4 h-4 bg-gradient-to-r from-calm-lavender to-calm-charcoal rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-4 h-4 bg-gradient-to-r from-calm-charcoal to-calm-navy rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-calm-lavender/30 rounded-full blur-lg animate-float transform transition-transform duration-500 hover:scale-110"></div>
          <div
            className="absolute top-1/2 left-0 w-8 h-8 bg-calm-navy/20 rounded-full blur-md animate-float"
            style={{ animationDelay: "0.7s" }}
          ></div>
          <div
            className="absolute -bottom-4 -right-4 w-12 h-12 bg-calm-navy/30 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1.4s" }}
          ></div>
          <div
            className="absolute bottom-1/2 right-0 w-8 h-8 bg-calm-lavender/20 rounded-full blur-md animate-float"
            style={{ animationDelay: "2.1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
