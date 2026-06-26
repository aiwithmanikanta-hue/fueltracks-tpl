import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Building2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { submitContactLead } from "@/lib/contact.functions";
import { COMPANY_WHATSAPP_NUMBER } from "@/lib/whatsapp";

type Status = "idle" | "submitting" | "sent" | "error";

const PRODUCT_OPTIONS = [
  "VLTD AIS-140 4G Device",
  "VLTD AIS-140 2G Device",
  "V5 Basic GPS Device",
  "VLTD-AIS GPS Tracking Device",
  "Capacitive Fuel Sensor",
  "GPS Tracking Platform",
  "Fleet Management Solutions",
  "Asset Tracking Solutions",
  "Smart HD CCTV Security Camera",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  product: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", phone: "", email: "", company: "", city: "", product: "", message: "" };

function buildWhatsAppUrl(f: FormState) {
  const msg = `Hello Fuel Tracks Team,

I would like to enquire about your services.

Name: ${f.name}
Phone Number: ${f.phone}
Email: ${f.email || "—"}
Company: ${f.company || "—"}
Location: ${f.city || "—"}
Product Interested In: ${f.product}

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
  if (!f.product) e.product = "Please select a product.";
  if (!f.message.trim()) e.message = "Please tell us how we can help.";
  return e;
}

export function Contact() {
  const submit = useServerFn(submitContactLead);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    setErrorMsg(null);

    const waUrl = buildWhatsAppUrl(form);
    // Open WhatsApp immediately to keep it within the user gesture (prevents popup blocking).
    const waWindow = typeof window !== "undefined" ? window.open(waUrl, "_blank", "noopener,noreferrer") : null;

    try {
      await submit({
        data: {
          name: form.name,
          phone: form.phone,
          email: form.email,
          company: form.company,
          city: form.city,
          product: form.product,
          subject: form.product,
          message: form.message,
          source: "website-contact-whatsapp",
        },
      });
    } catch (err) {
      // Don't block the enquiry — WhatsApp already opened. Just log.
      console.error("Lead save failed:", err);
      setErrorMsg("We've opened WhatsApp, but couldn't save your details server-side. Please send the message.");
    }

    // Fallback in case popup was blocked.
    if (!waWindow && typeof window !== "undefined") {
      window.location.href = waUrl;
    }

    setStatus("sent");
    setForm(INITIAL);
    setTimeout(() => setStatus("idle"), 6000);
  }

  const submitting = status === "submitting";
  const sent = status === "sent";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Contact Us"
          title="Send your enquiry on WhatsApp."
          description="Fill the form and we'll open WhatsApp with your details pre-filled — our team replies within 2 hours."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-7 md:p-9 shadow-elegant">
              <h3 className="text-xl font-semibold">Tell us about your fleet</h3>
              <p className="mt-1 text-sm text-muted-foreground">Required fields marked <span className="text-red-500">*</span></p>
              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Full Name" required id="c-name" type="text"
                    value={form.name} onChange={(v) => update("name", v)} error={errors.name}
                    placeholder="Your name"
                  />
                  <Field
                    label="Phone Number" required id="c-phone" type="tel"
                    value={form.phone} onChange={(v) => update("phone", v)} error={errors.phone}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Email" id="c-email" type="email"
                    value={form.email} onChange={(v) => update("email", v)} error={errors.email}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="City / Location" id="c-city" type="text"
                    value={form.city} onChange={(v) => update("city", v)} error={errors.city}
                    placeholder="Hyderabad"
                  />
                </div>
                <div>
                  <label htmlFor="c-product" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Product Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="c-product"
                    value={form.product}
                    onChange={(e) => update("product", e.target.value)}
                    aria-invalid={!!errors.product}
                    className="w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a product…</option>
                    {PRODUCT_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Message / Requirement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    placeholder="Fleet size, current challenges, pricing questions…"
                    className="w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-foreground/50"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {errorMsg && (
                  <p className="text-xs text-amber-600" role="alert">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-[#1ebe57] hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] transition-[transform,box-shadow,background-color] duration-200 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <WhatsAppIcon className="size-5" />
                  {sent ? "WhatsApp opened — finish sending in the chat ✓" : submitting ? "Opening WhatsApp…" : "Send Enquiry on WhatsApp"}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  Opens WhatsApp with your details pre-filled. We never share your information.
                </p>
              </form>
            </div>
          </Reveal>

          {/* Info + Map */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="glass-strong rounded-3xl p-7 shadow-elegant">
                <div className="flex items-center gap-2 text-xs font-medium text-primary mb-2">
                  <Building2 className="size-3.5" /> HEADQUARTERS
                </div>
                <h3 className="text-xl font-semibold">Fuel Tracks Technologies Pvt Ltd</h3>

                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Office</div>
                      <a
                        href="https://maps.app.goo.gl/oSUTUMM2ynC87BKTA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        Hyderabad, Telangana, India
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                      <Phone className="size-4" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Phone</div>
                      <a href="tel:+917337433351" className="block text-sm font-medium hover:text-primary">+91 73374 33351</a>
                      <a href="tel:+917337433352" className="block text-sm font-medium hover:text-primary">+91 73374 33352</a>
                      <a href="tel:04035651100" className="block text-sm font-medium hover:text-primary">040-35651100</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                      <Mail className="size-4" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Email</div>
                      <a href="mailto:info@fueltracks.in" className="block text-sm font-medium hover:text-primary">info@fueltracks.in</a>
                      <a href="mailto:fueltrackstpl@gmail.com" className="block text-sm font-medium hover:text-primary">fueltrackstpl@gmail.com</a>
                    </div>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green/15 text-accent-green px-3 py-1 font-medium">
                    <span className="size-1.5 rounded-full bg-accent-green animate-pulse-dot" /> Responds in 2 hours
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 font-medium">Mon–Sat · 9AM–6PM</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href={`https://wa.me/${COMPANY_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.68_0.18_145_/_0.15)] border border-[oklch(0.68_0.18_145_/_0.4)] text-accent-green px-4 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform">
                    <MessageCircle className="size-4" /> WhatsApp
                  </a>
                  <a href="tel:+917337433351" className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm font-semibold hover:border-primary/40 transition-colors">
                    <Phone className="size-4" /> Call Now
                  </a>
                </div>
              </div>

              <div className="glass-strong rounded-3xl overflow-hidden shadow-elegant">
                <div className="h-[260px]">
                  <iframe
                    title="Fuel Tracks Technologies office location"
                    src="https://www.google.com/maps?q=17.3454351,78.5239719&hl=en&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/oSUTUMM2ynC87BKTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors border-t border-border"
                >
                  <MapPin className="size-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, required, id, type, value, onChange, error, placeholder,
}: {
  label: string;
  required?: boolean;
  id: string;
  type: string;
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
        className="w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-foreground/40"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
