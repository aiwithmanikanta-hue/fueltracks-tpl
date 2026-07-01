import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <section id="overview" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Overview"
          title="Built around how you actually use it."
          description="A quick tour of the value this product brings to the road every day."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.overview.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.07}>
              <div className="card-premium p-7 h-full group">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-11 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
