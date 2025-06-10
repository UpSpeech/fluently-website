import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-calm-light shadow-sm animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/images/logo.png"
              alt="Fluently"
              className="h-6 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <nav
            className="hidden md:flex items-center space-x-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="font-nunito text-calm-charcoal hover:text-calm-navy transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-nunito text-calm-charcoal hover:text-calm-navy transition-colors duration-200 hover:-translate-y-0.5 transform"
            >
              Features
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("cta")}
            className="bg-gradient-to-r from-calm-navy to-calm-lavender hover:from-calm-navy/90 hover:to-calm-lavender/90 text-white font-nunito font-bold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
