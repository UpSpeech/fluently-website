
import React from 'react';

const DifferentiationSection = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Goal-Based Training',
      description: 'Custom weekly plans by severity and age group',
      benefit: 'More relevant and engaging practice'
    },
    {
      icon: '🔁',
      title: 'Therapist-Defined Hierarchies',
      description: 'Structured task difficulty levels',
      benefit: 'Supports generalization over time'
    },
    {
      icon: '👥',
      title: 'Clinic Dashboards',
      description: 'Aggregated view of all patients',
      benefit: 'Easier management, better outcomes'
    },
    {
      icon: '🔐',
      title: 'Fully Secure',
      description: 'HIPAA/GDPR-compliant cloud infrastructure',
      benefit: 'Safe for professionals & patients'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-light/50 via-white to-calm-lavender/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-20 h-20 bg-calm-charcoal/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-calm-navy/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6">
            Why Clinics Choose Fluently Over Worksheets and Apps
          </h2>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-calm-light shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-calm-lavender/30 to-calm-navy/20 rounded-2xl flex items-center justify-center border border-calm-lavender/40">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-lg text-calm-charcoal">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:text-center">
                  <p className="font-nunito text-calm-charcoal/80">
                    {feature.description}
                  </p>
                </div>
                
                <div className="md:text-right">
                  <p className="font-nunito font-semibold text-calm-navy">
                    {feature.benefit}
                  </p>
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
