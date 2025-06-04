
import React from 'react';

const FeaturesVariantSection = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Goal-Based Training',
      description: 'Custom weekly plans by severity and age group',
      benefit: 'More relevant and engaging practice',
      bgGradient: 'from-red-50 to-red-100',
      iconBg: 'from-red-400 to-red-500',
      iconColor: 'text-white'
    },
    {
      icon: '🔁',
      title: 'Therapist-Defined Hierarchies',
      description: 'Structured task difficulty levels',
      benefit: 'Supports generalization over time',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'from-blue-400 to-blue-500',
      iconColor: 'text-white'
    },
    {
      icon: '👥',
      title: 'Clinic Dashboards',
      description: 'Aggregated view of all patients',
      benefit: 'Easier management, better outcomes',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'from-purple-400 to-purple-500',
      iconColor: 'text-white'
    },
    {
      icon: '🔐',
      title: 'Fully Secure',
      description: 'HIPAA/GDPR-compliant cloud infrastructure',
      benefit: 'Safe for professionals & patients',
      bgGradient: 'from-green-50 to-green-100',
      iconBg: 'from-green-400 to-green-500',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-calm-navy/10 to-calm-lavender/10 rounded-full mb-6 border border-calm-navy/20">
            <span className="text-calm-charcoal text-sm font-medium">⚡ Critical Gap Identified</span>
          </div>
          
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6">
            Why Clinics Choose Fluently Over Worksheets and Apps
          </h2>
          <p className="font-nunito text-xl text-calm-charcoal/80 max-w-3xl mx-auto">
            Bridge the gap between structured therapy sessions and unstructured practice periods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`text-2xl ${feature.iconColor}`}>{feature.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-nunito font-bold text-lg text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-nunito text-sm text-gray-600 mb-4">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Benefit */}
                  <div className="mt-auto">
                    <div className="bg-white/70 rounded-xl p-3 border border-white/50">
                      <p className="font-nunito text-sm font-semibold text-gray-800">
                        {feature.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-nunito text-sm text-gray-600">Structured therapy sessions vs. unstructured practice periods</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesVariantSection;
