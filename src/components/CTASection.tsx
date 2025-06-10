import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    clinicSize: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mpwrpely", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Welcome to the Fluently waitlist!",
          description: "We'll contact you soon with early access details.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          role: "",
          clinicSize: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-calm-lavender/20 via-calm-navy/5 to-calm-light relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-calm-charcoal/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-calm-navy/10 rounded-full blur-3xl animate-float-delayed"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-calm-lavender/15 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h2
          className="font-nunito font-bold text-3xl sm:text-4xl text-calm-charcoal mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Join us before we launch!
        </h2>
        <p
          className="font-nunito text-xl text-calm-charcoal/80 mb-12 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Join forward-thinking speech therapy clinics already revolutionizing
          their practice with AI-powered continuous care solutions.
        </p>

        <div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-calm-light p-8 max-w-md mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="font-nunito font-bold text-xl text-calm-charcoal mb-6">
            Request Early Access to Fluently
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <Label
                htmlFor="name"
                className="font-nunito text-sm font-semibold text-calm-charcoal"
              >
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 font-nunito rounded-2xl border-calm-charcoal/10 hover:border-calm-charcoal/20 focus:border-calm-lavender placeholder:text-calm-charcoal/30 transition-colors duration-200"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="text-left">
              <Label
                htmlFor="email"
                className="font-nunito text-sm font-semibold text-calm-charcoal"
              >
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 font-nunito rounded-2xl border-calm-charcoal/10 hover:border-calm-charcoal/20 focus:border-calm-lavender placeholder:text-calm-charcoal/30 transition-colors duration-200"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="text-left">
              <Label
                htmlFor="role"
                className="font-nunito text-sm font-semibold text-calm-charcoal"
              >
                Role *
              </Label>
              <Select
                onValueChange={value =>
                  setFormData({ ...formData, role: value })
                }
              >
                <SelectTrigger className="mt-1 font-nunito rounded-2xl border-calm-charcoal/10 hover:border-calm-charcoal/20 focus:border-calm-lavender data-[placeholder]:text-calm-charcoal/30 transition-colors duration-200">
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent className="border-calm-charcoal/10 bg-white/90 backdrop-blur-sm">
                  <SelectItem
                    value="speech-therapist"
                    className="focus:bg-calm-navy/5"
                  >
                    Speech Therapist
                  </SelectItem>
                  <SelectItem
                    value="clinic-director"
                    className="focus:bg-calm-navy/5"
                  >
                    Clinic Director
                  </SelectItem>
                  <SelectItem
                    value="practice-owner"
                    className="focus:bg-calm-navy/5"
                  >
                    Practice Owner
                  </SelectItem>
                  <SelectItem value="other" className="focus:bg-calm-navy/5">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-left">
              <Label
                htmlFor="clinic-size"
                className="font-nunito text-sm font-semibold text-calm-charcoal"
              >
                Clinic Size (Optional)
              </Label>
              <Select
                onValueChange={value =>
                  setFormData({ ...formData, clinicSize: value })
                }
              >
                <SelectTrigger className="mt-1 font-nunito rounded-2xl border-calm-charcoal/10 hover:border-calm-charcoal/20 focus:border-calm-lavender data-[placeholder]:text-calm-charcoal/30 transition-colors duration-200">
                  <SelectValue placeholder="Choose clinic size" />
                </SelectTrigger>
                <SelectContent className="border-calm-charcoal/10 bg-white/90 backdrop-blur-sm">
                  <SelectItem value="solo" className="focus:bg-calm-navy/5">
                    Solo Practice
                  </SelectItem>
                  <SelectItem value="small" className="focus:bg-calm-navy/5">
                    2-5 Therapists
                  </SelectItem>
                  <SelectItem value="medium" className="focus:bg-calm-navy/5">
                    6-15 Therapists
                  </SelectItem>
                  <SelectItem value="large" className="focus:bg-calm-navy/5">
                    15+ Therapists
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-calm-navy to-calm-lavender hover:from-calm-navy/90 hover:to-calm-lavender/90 text-white font-nunito font-bold py-3 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 mt-6"
            >
              Join the Waitlist
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
