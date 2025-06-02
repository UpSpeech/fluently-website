
import React from 'react';

const SolutionSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-calm-light/30 to-calm-lavender/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-calm-navy/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-calm-charcoal/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6">
            Meet Fluently: Your AI-Powered Training Companion for Better Carry-Over
          </h2>
          <p className="font-nunito text-xl text-calm-charcoal/80 max-w-4xl mx-auto">
            Fluently helps patients practice effectively between sessions, with structured plans, 
            real-time feedback, and tracked progress—all designed to fit into your current workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-calm-navy to-calm-lavender rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white text-3xl">📋</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4">
              Structured Weekly Plans
            </h3>
            <p className="font-nunito text-calm-charcoal/70 mb-4">
              Tailored exercises based on patient goals
            </p>
            <p className="font-nunito text-sm font-semibold text-calm-navy">
              → Faster progress and fewer regressions
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-calm-lavender to-calm-charcoal rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white text-3xl">🧠</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4">
              Real-Time AI Feedback
            </h3>
            <p className="font-nunito text-calm-charcoal/70 mb-4">
              Instant corrections on technique
            </p>
            <p className="font-nunito text-sm font-semibold text-calm-navy">
              → Better retention, less therapist rework
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-calm-charcoal to-calm-navy rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white text-3xl">📊</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-4">
              Progress Tracking Dashboards
            </h3>
            <p className="font-nunito text-calm-charcoal/70 mb-4">
              See how patients are engaging
            </p>
            <p className="font-nunito text-sm font-semibold text-calm-navy">
              → Keep them accountable and motivated
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-calm-lavender/20 to-calm-navy/10 rounded-3xl p-8 border border-calm-light backdrop-blur-sm shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-nunito font-bold text-2xl text-calm-charcoal mb-4">
                See Fluently in Action
              </h3>
              <p className="font-nunito text-calm-charcoal/80 mb-6">
                Watch how our platform creates personalized practice sessions and provides 
                real-time feedback to keep your patients engaged between appointments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full"></div>
                  <span className="font-nunito text-sm text-calm-charcoal">Custom exercise creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full"></div>
                  <span className="font-nunito text-sm text-calm-charcoal">AI-powered speech analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-calm-navy to-calm-lavender rounded-full"></div>
                  <span className="font-nunito text-sm text-calm-charcoal">Comprehensive progress tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-calm-light">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-nunito font-semibold text-calm-charcoal">Weekly Progress</span>
                  <span className="font-nunito text-sm text-calm-navy font-semibold">85% Complete</span>
                </div>
                <div className="w-full bg-calm-light rounded-full h-3">
                  <div className="bg-gradient-to-r from-calm-navy to-calm-lavender h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-calm-lavender/20 rounded-2xl border border-calm-lavender/30">
                    <div className="font-nunito font-bold text-xl text-calm-navy">47</div>
                    <div className="font-nunito text-xs text-calm-charcoal/70">Exercises Completed</div>
                  </div>
                  <div className="text-center p-3 bg-calm-navy/10 rounded-2xl border border-calm-navy/20">
                    <div className="font-nunito font-bold text-xl text-calm-navy">92%</div>
                    <div className="font-nunito text-xs text-calm-charcoal/70">Accuracy Score</div>
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
