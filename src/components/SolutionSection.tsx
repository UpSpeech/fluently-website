
import React from 'react';

const SolutionSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-secondary mb-6">
            Meet Fluently: Your AI-Powered Training Companion for Better Carry-Over
          </h2>
          <p className="font-nunito text-xl text-secondary/80 max-w-4xl mx-auto">
            Fluently helps patients practice effectively between sessions, with structured plans, 
            real-time feedback, and tracked progress—all designed to fit into your current workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📋</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-secondary mb-4">
              Structured Weekly Plans
            </h3>
            <p className="font-nunito text-secondary/70 mb-4">
              Tailored exercises based on patient goals
            </p>
            <p className="font-nunito text-sm font-semibold text-primary">
              → Faster progress and fewer regressions
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-secondary mb-4">
              Real-Time AI Feedback
            </h3>
            <p className="font-nunito text-secondary/70 mb-4">
              Instant corrections on technique
            </p>
            <p className="font-nunito text-sm font-semibold text-primary">
              → Better retention, less therapist rework
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📊</span>
            </div>
            <h3 className="font-nunito font-bold text-xl text-secondary mb-4">
              Progress Tracking Dashboards
            </h3>
            <p className="font-nunito text-secondary/70 mb-4">
              See how patients are engaging
            </p>
            <p className="font-nunito text-sm font-semibold text-primary">
              → Keep them accountable and motivated
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-nunito font-bold text-2xl text-secondary mb-4">
                See Fluently in Action
              </h3>
              <p className="font-nunito text-secondary/80 mb-6">
                Watch how our platform creates personalized practice sessions and provides 
                real-time feedback to keep your patients engaged between appointments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-nunito text-sm text-secondary">Custom exercise creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-nunito text-sm text-secondary">AI-powered speech analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-nunito text-sm text-secondary">Comprehensive progress tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-nunito font-semibold text-secondary">Weekly Progress</span>
                  <span className="font-nunito text-sm text-primary font-semibold">85% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="font-nunito font-bold text-xl text-primary">47</div>
                    <div className="font-nunito text-xs text-secondary/70">Exercises Completed</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="font-nunito font-bold text-xl text-primary">92%</div>
                    <div className="font-nunito text-xs text-secondary/70">Accuracy Score</div>
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
