// EmailJS Configuration
// Replace these with your actual EmailJS credentials

// NOTE:
// In a Vite (browser) environment you must use import.meta.env, not process.env.
// process is undefined in the client bundle unless you polyfill it, which causes
// the runtime error you observed.

// Augment the existing Vite env type without redefining core fields
interface ExtendedImportMetaEnv extends ImportMetaEnv {
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
  VITE_EMAILJS_PUBLIC_KEY?: string;
}
interface ExtendedImportMeta extends ImportMeta {
  readonly env: ExtendedImportMetaEnv;
}

const env = (import.meta as ExtendedImportMeta).env;

export const EMAILJS_CONFIG = {
  SERVICE_ID: env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Email template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  to_name: string;
  to_email: string;
  user_role: string;
  clinic_size: string;
  linkedin_url?: string;
  logo_url?: string;
  referral_link?: string;
  reply_to: string;
}
