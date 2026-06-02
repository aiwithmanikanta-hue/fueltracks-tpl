import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function HowItWorks({ product }: { product: Product }) {
  return (
    <section className="relative py-24 bg-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="How it works"
          title="From install to insight in 5 steps."
        />

        <div className="mt-16 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {product.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="relative mx-auto size-14 rounded-2xl bg-[var(--gradient-primary)] grid place-items-center shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground font-display">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
