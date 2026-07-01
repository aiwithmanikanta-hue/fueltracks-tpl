import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
              03 · Features
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
              Engineered for everyday reliability.
            </h2>
          </div>
          <p className="text-navy/60 font-light max-w-md">
            Every capability fleet teams reach for — none of the bloat they don't.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 rounded-md overflow-hidden">
          {product.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="p-7 bg-white h-full group hover:bg-primary/5 transition-colors">
                <div className="text-[10px] font-mono tracking-[0.22em] text-navy/40 mb-5">
                  {String(i + 1).padStart(2, "0")} / {String(product.features.length).padStart(2, "0")}
                </div>
                <div className="size-10 rounded-md bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-base text-navy leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">
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
