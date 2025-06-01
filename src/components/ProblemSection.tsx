
import React from 'react';

const ProblemSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-secondary mb-6">
            The Hardest Part of Speech Therapy Happens Between Sessions
          </h2>
          <p className="font-nunito text-xl text-secondary/80 max-w-3xl mx-auto">
            Your sessions are structured, engaging, and tailored to each patient.
            But what happens in the 6 days between appointments?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-destructive text-sm">⚠</span>
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-lg text-secondary mb-2">
                    Patients forget techniques
                  </h3>
                  <p className="font-nunito text-secondary/70">
                    Without reinforcement, learned skills fade quickly between sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-destructive text-sm">📉</span>
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-lg text-secondary mb-2">
                    Motivation drops
                  </h3>
                  <p className="font-nunito text-secondary/70">
                    Patients lose engagement and momentum without ongoing support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-destructive text-sm">🔄</span>
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-lg text-secondary mb-2">
                    Generalization doesn't happen
                  </h3>
                  <p className="font-nunito text-secondary/70">
                    Skills learned in therapy don't transfer to daily communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-destructive text-sm">⏰</span>
                </div>
                <div>
                  <h3 className="font-nunito font-semibold text-lg text-secondary mb-2">
                    You waste time backtracking
                  </h3>
                  <p className="font-nunito text-secondary/70">
                    Instead of moving forward, you're re-teaching previous concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-nunito font-bold text-2xl text-primary mb-4">
                What if your patients had a smart, structured way to practice daily?
              </h3>
              <p className="font-nunito text-lg text-secondary/80">
                Without adding to your workload or changing your proven methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
