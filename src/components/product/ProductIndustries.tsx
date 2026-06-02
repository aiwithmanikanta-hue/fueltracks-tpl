import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductIndustries({ product }: { product: Product }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Industries"
          title="Trusted across every kind of fleet."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {product.industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 6) * 0.05}>
              <div className="group glass rounded-2xl p-5 text-center h-full hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="mx-auto size-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ind.icon className="size-6" />
                </div>
                <div className="mt-3 text-sm font-semibold text-navy">{ind.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
