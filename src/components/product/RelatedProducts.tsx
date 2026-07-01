import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import { getRelated } from "@/data/products";

export function RelatedProducts({ slugs }: { slugs: string[] }) {
  const items = getRelated(slugs);
  if (!items.length) return null;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Related"
          title="Complete the setup."
          description="Products that pair naturally with this one to build a full fleet stack."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <div className="group h-full flex flex-col card-premium overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-white via-secondary to-accent overflow-hidden border-b border-border">
                  <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider text-primary uppercase glass rounded-full px-2.5 py-1">
                    {p.sku}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-foreground leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="mt-auto pt-5 flex gap-2">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-[#0284C7] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-colors"
                    >
                      View Details <ArrowRight className="size-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                    <a
                      href={buildProductEnquiryUrl(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp enquiry for ${p.name}`}
                      className="inline-flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#1ebe57] px-4 py-3 text-white transition-colors"
                    >
                      <WhatsAppIcon className="size-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
