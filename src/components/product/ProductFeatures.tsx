import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className="relative py-24 bg-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Features"
          title="Built with everything you need."
          description="Premium features that fleet teams use every single day."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="group glass rounded-2xl p-5 h-full hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft transition-all duration-300">
                <div className="size-10 rounded-lg bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-base">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
