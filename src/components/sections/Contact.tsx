import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Building2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { submitContactLead } from "@/lib/contact.functions";

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const submit = useServerFn(submitContactLead);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("submitting");
    setErrorMsg(null);
    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          email: String(fd.get("email") ?? ""),
          subject: String(fd.get("subject") ?? ""),
          message: String(fd.get("message") ?? ""),
          source: "website-contact",
        },
      });
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const submitting = status === "submitting";
  const sent = status === "sent";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Contact Us"
          title="Let's get your fleet online."
          description="Get a free demo, custom quote or dealership info — our team responds within 24 hours."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-7 md:p-9 shadow-elegant">
              <h3 className="text-xl font-semibold">Send us a message</h3>
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" type="text" name="name" id="contact-name" />
                  <Field label="Phone" type="tel" name="phone" id="contact-phone" />
                </div>
                <Field label="Email" type="email" name="email" id="contact-email" />
                <div>
                  <label htmlFor="contact-subject" className="text-xs text-foreground/80">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="mt-1 w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="gps">GPS Device</option>
                    <option value="fuel">Fuel Sensor</option>
                    <option value="software">Fleet Software</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs text-foreground/80">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-foreground/50"
                    placeholder="Tell us about your fleet..."
                  />
                </div>
                {errorMsg && (
                  <p className="text-xs text-red-500" role="alert">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-[#0284C7] hover:shadow-glow hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:brightness-95 transition-[transform,box-shadow,background-color] duration-200 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sent
                    ? "Sent — we'll be in touch ✓"
                    : submitting
                    ? "Sending…"
                    : <>Send Message <Send className="size-4" /></>}
                </button>
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
                  <a href="https://wa.me/917337433351" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[oklch(0.68_0.18_145_/_0.15)] border border-[oklch(0.68_0.18_145_/_0.4)] text-accent-green px-4 py-3 text-sm font-semibold hover:scale-[1.02] transition-transform">
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

function Field({ label, type, name, id }: { label: string; type: string; name: string; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs text-foreground/80">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required
        className="mt-1 w-full rounded-xl bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </li>
  );
}
