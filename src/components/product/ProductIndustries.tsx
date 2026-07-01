import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductIndustries({ product }: { product: Product }) {
  return (
    <section id="use-cases" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Use Cases"
          title="Where this product earns its keep."
          description="Trusted across industries where every trip counts and every drop matters."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {product.industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.06}>
              <div className="card-premium p-6 text-center h-full group">
                <div className="mx-auto size-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ind.icon className="size-6" />
                </div>
                <div className="mt-4 text-sm font-semibold text-foreground">
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
