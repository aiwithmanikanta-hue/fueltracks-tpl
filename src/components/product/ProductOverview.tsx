import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <section id="overview" className="relative py-24 border-y border-navy/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
            02 · Overview
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
            Built around how you actually use it.
          </h2>
          <p className="mt-4 text-navy/60 font-light">
            A quick tour of the value this product brings to the road every day.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 rounded-md overflow-hidden">
          {product.overview.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="p-8 bg-white h-full hover:bg-primary/5 transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <div className="size-11 rounded-md bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-navy/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-navy leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">
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
