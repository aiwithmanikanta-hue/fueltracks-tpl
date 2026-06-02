import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getRelated } from "@/data/products";

export function RelatedProducts({ slugs }: { slugs: string[] }) {
  const items = getRelated(slugs);
  if (!items.length) return null;

  return (
    <section className="relative py-24 bg-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="Related" title="Pairs perfectly with…" />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block glass rounded-2xl p-6 h-full hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="aspect-square w-24 shrink-0 rounded-2xl bg-[oklch(0.98_0.01_230)] p-3 grid place-items-center mx-auto">
                    <img src={p.image} alt={p.name} width={1055} height={1055} loading="lazy" className="w-full h-full object-contain object-center" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono tracking-wider text-primary">{p.sku}</div>
                    <h3 className="mt-1 font-display font-bold text-lg">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
