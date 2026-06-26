import { useState, type FormEvent } from "react";
import { Phone, Mail, Send, Headphones } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import type { Product } from "@/data/products";
import { submitContactLead } from "@/lib/contact.functions";
import { COMPANY_WHATSAPP_NUMBER } from "@/lib/whatsapp";

type Status = "idle" | "submitting" | "sent" | "error";

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function buildWhatsAppUrl(productName: string, f: FormState) {
  const msg = `Hello Fuel Tracks Team,

I am interested in the ${productName}.

Name: ${f.name}
Phone: ${f.phone}
Email: ${f.email || "—"}
Company: ${f.company || "—"}

Please share:
• Product Details
• Pricing
• Installation Process
• Demo Availability

Message:
${f.message}

Thank you.`;
  return `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function validate(f: FormState): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim()) e.name = "Please enter your full name.";
  if (!f.phone.trim()) e.phone = "Phone number is required.";
  else if (!/^[0-9+\-\s()]{7,20}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email.";
  if (!f.message.trim()) e.message = "Please tell us how we can help.";
  return e;
}

export function ProductContact({ product }: { product: Product }) {
  const submit = useServerFn(submitContactLead);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: `I'd like to know more about ${product.name}.`,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setStatus("submitting");

    const waUrl = buildWhatsAppUrl(product.name, form);
    const waWindow = typeof window !== "undefined" ? window.open(waUrl, "_blank", "noopener,noreferrer") : null;

    try {
      await submit({
        data: {
          name: form.name,
          phone: form.phone,
          email: form.email,
          company: form.company,
          product: product.name,
          subject: product.name,
          message: form.message,
          source: `product-page:${product.slug}`,
        },
      });
    } catch (err) {
      console.error("Lead save failed:", err);
    }

    if (!waWindow && typeof window !== "undefined") {
      window.location.href = waUrl;
    }

    setStatus("sent");
  }

  const submitting = status === "submitting";
  const sent = status === "sent";

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={`Enquire about ${product.name}`}
          description="Drop your details and we'll open WhatsApp with everything pre-filled — our team replies within 2 hours."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="glass-strong rounded-3xl p-6 md:p-8 shadow-soft space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" required id="pc-name" value={form.name} onChange={(v) => update("name", v)} error={errors.name} placeholder="Your name" />
                <Field label="Phone Number" required id="pc-phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} error={errors.phone} placeholder="+91 98765 43210" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" id="pc-email" type="email" value={form.email} onChange={(v) => update("email", v)} error={errors.email} placeholder="you@company.com" />
                <Field label="Company Name" id="pc-company" value={form.company} onChange={(v) => update("company", v)} placeholder="Your company" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Product Interested In</label>
                <div className="w-full rounded-xl bg-primary/8 border border-primary/20 px-4 py-3 text-sm font-semibold text-primary">
                  {product.name}
                </div>
              </div>
              <div>
                <label htmlFor="pc-msg" className="block text-xs font-semibold text-foreground/80 mb-1.5">Message / Requirement <span className="text-red-500">*</span></label>
                <textarea
                  id="pc-msg"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  className="w-full rounded-xl bg-white/60 border border-navy/10 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting || sent}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-[#1ebe57] hover:scale-[1.01] transition-transform disabled:opacity-70"
              >
                <WhatsAppIcon className="size-5" />
                {sent ? "WhatsApp opened — finish sending in the chat ✓" : submitting ? "Opening WhatsApp…" : "Send Enquiry on WhatsApp"}
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                Opens WhatsApp with your details pre-filled. We never share your information.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-3">
            <ContactRow icon={Phone} label="Call us" value="+91 73374 33351" href="tel:+917337433351" />
            <ContactRow icon={WhatsAppIcon} label="WhatsApp" value="+91 73374 33351" href={`https://wa.me/${COMPANY_WHATSAPP_NUMBER}`} />
            <ContactRow icon={Mail} label="Email" value="info@fueltracks.in" href="mailto:info@fueltracks.in" />
            <ContactRow icon={Headphones} label="Support" value="24×7 fleet helpdesk" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, required, id, type = "text", value, onChange, error, placeholder,
}: {
  label: string;
  required?: boolean;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-foreground/80 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="w-full rounded-xl bg-white/60 border border-navy/10 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-foreground/40"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 h-full hover:border-primary/40 transition-colors">
      <div className="size-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">{label}</div>
        <div className="font-semibold text-sm truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : <div>{inner}</div>;
}
