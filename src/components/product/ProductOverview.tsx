import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Overview"
          title="A simple way to run a smarter fleet."
          description="Everything you need to know in plain language — what it does, how it helps, and who it's for."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.overview.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/40 transition-colors">
                <div className="size-11 rounded-xl bg-[var(--gradient-primary)] grid place-items-center shadow-soft">
                  <item.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
