// ============ CONFIG — change once, updates everywhere ============
// IMPORTANT: keep this as the single source of truth for the company's WhatsApp number.
export const WHATSAPP_NUMBER = "916390758373"; // +91 63907 58373
export const COMPANY_EMAIL = "pryabhixtechnologies@gmail.com";

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Pryabhix Technologies, I'd like to know more about your web development and software services.";
