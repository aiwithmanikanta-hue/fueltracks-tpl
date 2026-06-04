export const COMPANY_WHATSAPP_NUMBER = "917337433351";

export function buildProductEnquiryUrl(productName: string): string {
  const message = `Hello Fuel Tracks Team,

I am interested in the ${productName}.

Could you please provide:
• Product Details
• Pricing Information
• Installation Process
• Demo Availability

Please contact me with more information.

Thank you.`;
  return `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
