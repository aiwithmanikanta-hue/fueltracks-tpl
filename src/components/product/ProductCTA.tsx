import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { COMPANY_WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function ProductCTA() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(14,165,233,0.7) 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-primary/20 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
            09 · Next Step
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight">
            Ready to <span className="text-primary">upgrade</span> your fleet?
          </h2>
          <p className="mt-6 text-lg text-white/70 font-light max-w-xl leading-relaxed">
            Talk to our team about a live demo, custom pricing, or full-fleet deployment. Real people, no chatbots.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary-glow px-6 py-4 text-sm font-bold text-primary-foreground transition-colors"
            >
              <Calendar className="size-4" /> Request Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white text-navy hover:bg-white/90 px-6 py-4 text-sm font-bold transition-colors"
            >
              <FileText className="size-4" /> Get a Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 hover:bg-white/10 px-6 py-4 text-sm font-bold text-white transition-colors"
            >
              <Phone className="size-4" /> Contact Us
            </Link>
            <a
              href={`https://wa.me/${COMPANY_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe57] px-6 py-4 text-sm font-bold text-white transition-colors"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp Enquiry
            </a>
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">Sales</div>
              <div className="mt-2 font-display font-bold text-white">+91 73374 33351</div>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">Email</div>
              <div className="mt-2 font-display font-bold text-white">info@fueltracks.in</div>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">Support</div>
              <div className="mt-2 font-display font-bold text-white">24×7 Helpdesk</div>
            </div>
          </div>

          <Link
            to="/products"
            className="mt-14 inline-flex items-center gap-1.5 text-sm font-mono tracking-widest uppercase text-white/60 hover:text-primary transition-colors"
          >
            ← Back to all products <ArrowRight className="size-3.5 rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
