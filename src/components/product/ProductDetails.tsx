import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section id="details" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Product Details"
          title="What it is, and why it belongs in your fleet."
          description={product.description}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.highlights.map((h, i) => (
            <Reveal key={h} delay={(i % 4) * 0.06}>
              <div className="card-premium p-6 h-full">
                <div className="text-[11px] font-semibold tracking-wider uppercase text-primary mb-2">
                  Advantage · 0{i + 1}
                </div>
                <div className="text-base font-semibold text-foreground leading-snug">
                  {h}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
