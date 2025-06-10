import React from "react";

const DifferentiationSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Goal-Based Training",
      description: "Custom weekly plans by severity and age group",
      benefit: "More relevant and engaging practice",
    },
    {
      icon: "🔁",
      title: "Therapist-Defined Hierarchies",
      description: "Structured task difficulty levels",
      benefit: "Supports generalization over time",
    },
    {
      icon: "👥",
      title: "Clinic Dashboards",
      description: "Aggregated view of all patients",
      benefit: "Easier management, better outcomes",
    },
    {
      icon: "🔐",
      title: "Fully Secure",
      description: "HIPAA/GDPR-compliant cloud infrastructure",
      benefit: "Safe for professionals & patients",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light/50 via-white to-calm-lavender/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-calm-navy/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-calm-charcoal/10 rounded-full blur-xl animate-float-delayed"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-calm-lavender/15 rounded-full blur-lg animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-6 shadow-sm border border-calm-light/50 backdrop-blur-sm">
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-calm-navy/10 to-calm-lavender/10 flex items-center justify-center mr-2">
              <span className="text-xs">✨</span>
            </span>
            <span className="text-calm-charcoal/80 text-sm font-medium">
              Why Choose Fluently
            </span>
          </div>

          <h2
            className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Why Clinics Choose Fluently Over Worksheets and Apps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-calm-light shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Background gradient blob */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-calm-lavender/10 to-calm-navy/5 rounded-full blur-xl transform transition-transform duration-500 group-hover:scale-150"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-calm-lavender/30 to-calm-navy/20 rounded-2xl flex items-center justify-center border border-calm-lavender/40 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-nunito font-bold text-xl text-calm-charcoal group-hover:text-calm-navy transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="font-nunito text-calm-charcoal/80 text-lg">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <div className="inline-flex items-center px-4 py-2 bg-calm-navy/5 rounded-full">
                      <span className="font-nunito font-semibold text-calm-navy">
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
