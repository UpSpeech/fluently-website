// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: process.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: process.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Email template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  to_name: string;
  to_email: string;
  user_role: string;
  clinic_size: string;
  reply_to: string;
}
