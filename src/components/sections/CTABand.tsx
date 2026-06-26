import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const WHATSAPP_URL =
  "https://wa.me/917997660442?text=Hi%20Fuel%20Tracks%2C%20I%27d%20like%20to%20know%20more%20about%20your%20GPS%20%26%20fuel%20monitoring%20solutions.";

export function CTABand() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center shadow-elegant"
            style={{ background: "var(--gradient-navy)" }}
          >
            {/* Decorative orbs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-16 size-[360px] rounded-full bg-primary/30 blur-3xl animate-orb" />
              <div className="absolute -bottom-24 -right-10 size-[420px] rounded-full bg-[#38BDF8]/25 blur-3xl animate-orb" style={{ animationDelay: "-7s" }} />
              <div className="absolute inset-0 bg-grid opacity-[0.07]" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/90">
                <span className="size-1.5 rounded-full bg-accent-green animate-pulse-dot" />
                <span className="tracking-wider font-medium">READY WHEN YOU ARE</span>
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-white max-w-3xl mx-auto">
                Let's build smarter fleet management,{" "}
                <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                  together.
                </span>
              </h2>
              <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
                Talk to our team about GPS tracking, fuel monitoring and end-to-end fleet visibility — tailored for your operation.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-[#0284C7] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-[transform,box-shadow,background-color] duration-200 ease-out"
                >
                  Contact Us <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white border border-white/15 hover:bg-white/15 hover:border-white/30 transition-colors"
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
