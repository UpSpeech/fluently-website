import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-charcoal to-calm-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-calm-lavender/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-calm-light/10 rounded-full blur-lg animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center animate-fade-in-up">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start space-y-2">
            <img
              src="/images/logo.png"
              alt="UpSpeech"
              className="h-6 w-auto mb-2 brightness-0 invert transition-transform duration-300 hover:scale-105"
            />
            <p className="font-nunito text-sm text-white/80">
              Give a voice to 80 million people who stutter
            </p>
          </div>

          <div className="flex space-x-8">
            <a
              href="mailto:geral@upspeech.pt"
              className="hover:underline font-nunito text-sm text-white/80 hover:text-white transition-all duration-200"
            >
              Contact us
            </a>
          </div>
        </div>

        <div
          className="border-t border-white/20 mt-8 pt-8 text-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="font-nunito text-sm text-white/60">
            © 2025 UpSpeech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
