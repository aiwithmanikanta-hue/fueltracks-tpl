import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductIndustries({ product }: { product: Product }) {
  return (
    <section id="use-cases" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
            05 · Use Cases
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
            Where this product earns its keep.
          </h2>
          <p className="mt-4 text-navy/60 font-light">
            Trusted across industries where every trip counts and every drop matters.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 rounded-md overflow-hidden">
          {product.industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.05}>
              <div className="p-6 bg-white h-full text-center group hover:bg-primary/5 transition-colors">
                <div className="mx-auto size-12 rounded-md bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ind.icon className="size-6" />
                </div>
                <div className="mt-4 text-sm font-display font-semibold text-navy">
                  {ind.name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
