
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is it hard to set up?",
      answer: "Not at all. You'll be up and running in under 15 minutes—with or without IT support. Our onboarding team provides personalized setup assistance for every clinic."
    },
    {
      question: "Will Fluently replace my role as a therapist?",
      answer: "Never. Fluently enhances your impact by reinforcing your work—not replacing it. You remain in complete control of treatment plans and goals while Fluently provides structured practice between sessions."
    },
    {
      question: "Is it suitable for both kids and adults?",
      answer: "Yes. Exercises are tailored by age, condition, and therapy goals. Our platform adapts to different learning styles and communication needs across all age groups."
    },
    {
      question: "How do I know if patients are actually using it?",
      answer: "You'll get weekly reports on engagement, completion rates, and improvement markers. Real-time dashboards show exactly when and how your patients are practicing."
    },
    {
      question: "What about patient privacy and data security?",
      answer: "We're fully HIPAA and GDPR compliant with enterprise-grade security. All patient data is encrypted and stored securely, with you maintaining complete control over access permissions."
    },
    {
      question: "Can I customize the exercises for my patients?",
      answer: "Absolutely. You can create custom exercise plans, adjust difficulty levels, and set specific goals for each patient. Fluently works with your existing therapy methods and protocols."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-secondary mb-6">
            Have Questions? We've Got Answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/5">
                <span className="font-nunito font-semibold text-lg text-secondary">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="font-nunito text-secondary/80 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
