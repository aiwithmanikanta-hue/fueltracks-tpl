import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Handshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ProductCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 -z-10 bg-[var(--gradient-glow)] opacity-60" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

            <h2 className="text-3xl md:text-5xl font-bold text-gradient leading-tight max-w-2xl mx-auto">
              Ready to monitor your fleet smarter?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Talk to our team about a personalised demo, custom pricing, or becoming a regional dealer.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
              >
                Get Demo <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-navy hover:border-primary/40 transition-colors"
              >
                <MessageCircle className="size-4" /> Contact Team
              </Link>
              <Link
                to="/dealers"
                className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-navy hover:border-primary/40 transition-colors"
              >
                <Handshake className="size-4" /> Become Dealer
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
