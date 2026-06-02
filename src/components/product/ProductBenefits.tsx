import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductBenefits({ product }: { product: Product }) {
  return (
    <section className="relative py-24 bg-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Benefits"
          title="Real outcomes our customers measure."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {product.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.08}>
              <div className="glass rounded-2xl p-6 h-full flex gap-4 hover:border-primary/40 hover:shadow-soft transition-all">
                <div className="size-11 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary">
                  <b.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
