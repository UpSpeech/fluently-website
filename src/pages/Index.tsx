
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DifferentiationSection from '@/components/DifferentiationSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-nunito">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <DifferentiationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
