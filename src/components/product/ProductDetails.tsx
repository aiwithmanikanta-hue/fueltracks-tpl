import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section id="details" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
              01 · Product Details
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
              What it is, and why it belongs in your fleet.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="text-lg text-navy/80 leading-relaxed font-light">
              {product.description}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-navy/10 border border-navy/10 rounded-md overflow-hidden">
              {product.highlights.map((h, i) => (
                <div key={h} className="p-5 bg-white">
                  <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-navy/40 mb-1.5">
                    Advantage · 0{i + 1}
                  </div>
                  <div className="text-sm font-display font-semibold text-navy">
                    {h}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
