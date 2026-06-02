import { useState } from "react";
import { Phone, Mail, MessageCircle, Send, Headphones } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductContact({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title="We'd love to hear from you."
          description="Drop us a quick note, or reach us directly via phone, WhatsApp or email."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass-strong rounded-3xl p-6 md:p-8 shadow-soft space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" id="name" placeholder="Full name" />
                <Field label="Phone" id="phone" placeholder="+91" />
              </div>
              <Field label="Email" id="email" type="email" placeholder="you@company.com" />
              <div>
                <label htmlFor="msg" className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  defaultValue={`I'd like to know more about ${product.name}.`}
                  className="mt-2 w-full rounded-xl bg-white/60 border border-navy/10 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform disabled:opacity-70"
              >
                {sent ? "Thanks — we'll be in touch" : <>Send enquiry <Send className="size-4" /></>}
              </button>
            </form>
          </Reveal>

          {/* Quick contacts */}
          <Reveal delay={0.1} className="lg:col-span-2 space-y-3">
            <ContactRow icon={Phone} label="Call us" value="+91 73374 33351" href="tel:+917337433351" />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="+91 94916 66914" href="https://wa.me/919491666914" />
            <ContactRow icon={Mail} label="Email" value="info@fueltracks.in" href="mailto:info@fueltracks.in" />
            <ContactRow icon={Headphones} label="Support" value="24×7 fleet helpdesk" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/60 border border-navy/10 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Phone; label: string; value: string; href?: string }) {
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
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
}
