
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    clinicSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Welcome to the Fluently waitlist!",
      description: "We'll contact you soon with early access details."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      clinicSize: ''
    });
  };

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-mint/20 via-calm-sky/10 to-calm-lavender/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-calm-peach/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-calm-sage/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-calm-lavender/15 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-nunito font-bold text-3xl sm:text-4xl text-secondary mb-6">
          Start Offering Continuous Support Between Sessions—Without Extra Work
        </h2>
        <p className="font-nunito text-xl text-secondary/80 mb-12 max-w-3xl mx-auto">
          Join our waitlist of pioneering clinics and therapists reimagining what happens between sessions.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 max-w-md mx-auto">
          <h3 className="font-nunito font-bold text-xl text-secondary mb-6">
            Request Early Access to Fluently
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <Label htmlFor="name" className="font-nunito text-sm font-semibold text-secondary">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 font-nunito rounded-2xl border-calm-stone/30 focus:border-primary"
                placeholder="Dr. Sarah Johnson"
                required
              />
            </div>

            <div className="text-left">
              <Label htmlFor="email" className="font-nunito text-sm font-semibold text-secondary">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 font-nunito rounded-2xl border-calm-stone/30 focus:border-primary"
                placeholder="sarah@speechclinic.com"
                required
              />
            </div>

            <div className="text-left">
              <Label htmlFor="role" className="font-nunito text-sm font-semibold text-secondary">
                Role *
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                <SelectTrigger className="mt-1 font-nunito rounded-2xl border-calm-stone/30">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="speech-therapist">Speech Therapist</SelectItem>
                  <SelectItem value="clinic-director">Clinic Director</SelectItem>
                  <SelectItem value="practice-owner">Practice Owner</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-left">
              <Label htmlFor="clinic-size" className="font-nunito text-sm font-semibold text-secondary">
                Clinic Size (Optional)
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, clinicSize: value})}>
                <SelectTrigger className="mt-1 font-nunito rounded-2xl border-calm-stone/30">
                  <SelectValue placeholder="Select clinic size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Solo Practice</SelectItem>
                  <SelectItem value="small">2-5 Therapists</SelectItem>
                  <SelectItem value="medium">6-15 Therapists</SelectItem>
                  <SelectItem value="large">15+ Therapists</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-nunito font-bold py-3 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 mt-6"
            >
              Request Early Access
            </Button>
          </form>

          <p className="font-nunito text-sm text-secondary/60 mt-4">
            🚀 Demos open July 2025 — only 30 early access slots available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
