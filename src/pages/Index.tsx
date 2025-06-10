import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen font-nunito">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentiationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
