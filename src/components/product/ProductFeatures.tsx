import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Premium Features"
          title="Engineered for everyday reliability."
          description="Every capability fleet teams reach for — none of the bloat they don't."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="card-premium p-6 h-full group">
                <div className="size-11 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-base text-foreground leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
