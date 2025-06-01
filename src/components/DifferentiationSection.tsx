
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-secondary mb-6">
            Why Clinics Choose Fluently Over Worksheets and Apps
          </h2>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-white to-accent/5 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-lg text-secondary">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <div className="md:text-center">
                  <p className="font-nunito text-secondary/80">
                    {feature.description}
                  </p>
                </div>
                
                <div className="md:text-right">
                  <p className="font-nunito font-semibold text-primary">
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
