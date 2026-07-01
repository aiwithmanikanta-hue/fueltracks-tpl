import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import { getRelated } from "@/data/products";

export function RelatedProducts({ slugs }: { slugs: string[] }) {
  const items = getRelated(slugs);
  if (!items.length) return null;

  return (
    <section className="relative py-24 border-y border-navy/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
            08 · Related
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
            Complete the setup.
          </h2>
          <p className="mt-4 text-navy/60 font-light">
            Products that pair naturally with this one to build a full fleet stack.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <div className="group h-full flex flex-col bg-white rounded-md border border-navy/10 overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)] transition-all duration-300">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F0F9FF] via-white to-[#E8F4FD] overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-[0.06]" />
                  <div className="relative h-full grid place-items-center p-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-[90%] max-w-[90%] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-navy/50 uppercase bg-white/80 backdrop-blur rounded-sm px-2 py-1 border border-navy/10">
                    {p.sku}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-navy leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60 line-clamp-2 leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="mt-auto pt-5 flex gap-2">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-navy hover:bg-navy/85 px-4 py-3 text-sm font-bold text-white transition-colors"
                    >
                      View Details <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href={buildProductEnquiryUrl(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp enquiry for ${p.name}`}
                      className="inline-flex items-center justify-center rounded-md bg-[#25D366] hover:bg-[#1ebe57] px-4 py-3 text-white transition-colors"
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
