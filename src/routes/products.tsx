import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import { products, type Product, type ProductCategory } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — GPS, Fuel Sensors & Fleet Software | Fuel Tracks" },
      { name: "description", content: "Explore the complete Fuel Tracks catalogue — AIS-140 GPS trackers, basic GPS devices, capacitive fuel sensors and fleet management software for every commercial fleet." },
      { property: "og:title", content: "Fuel Tracks Products" },
      { property: "og:description", content: "AIS-140 GPS · Basic Trackers · Capacitive Fuel Sensors · Fleet Management & Asset Tracking Software." },
      { property: "og:url", content: "https://fueltracks-tpl.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://fueltracks-tpl.lovable.app/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": products.map((p) => ({
            "@type": "Product",
            name: p.name,
            sku: p.sku,
            brand: { "@type": "Brand", name: "Fuel Tracks" },
            description: p.tagline,
            category: p.category,
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

type Filter = "All" | Exclude<ProductCategory, "Software">;
const FILTERS: Filter[] = ["All", "Devices", "Sensors"];

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const catalog = useMemo(() => products.filter((p) => p.category !== "Software"), []);
  const visible = useMemo(
    () => (filter === "All" ? catalog : catalog.filter((p) => p.category === filter)),
    [filter, catalog],
  );

  return (
    <>
      <PageHeader title="Our Products" crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]} />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">HARDWARE + SOFTWARE</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Everything you need, end to end.</h2>
            <p className="mt-4 text-muted-foreground">
              AIS-140 trackers, fuel sensors and a powerful cloud platform — built to run modern fleets.
            </p>
          </Reveal>

          {/* Category filter chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => {
              const active = f === filter;
              const count = f === "All" ? products.length : products.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border ${
                    active
                      ? "bg-[var(--gradient-primary)] text-primary-foreground border-transparent shadow-glow scale-[1.02]"
                      : "bg-white/70 backdrop-blur text-navy/80 border-navy/10 hover:border-primary/40 hover:text-primary"
                  }`}
                  aria-pressed={active}
                >
                  {f}
                  <span className={`text-[10px] font-mono tracking-wider rounded-full px-1.5 py-0.5 ${active ? "bg-white/20" : "bg-navy/5"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="h-full flex flex-col group bg-white rounded-2xl border border-navy/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#F0F9FF] via-white to-[#E8F4FD] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur border border-navy/10 px-2.5 py-1 text-[10px] font-mono tracking-[0.15em] uppercase text-navy/70">
            {p.category}
          </span>
        </div>
        <div className="relative h-full grid place-items-center p-6">
          <motion.img
            src={p.image}
            alt={p.name}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.06, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="max-h-[85%] max-w-[85%] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex flex-col flex-1">
        <div className="text-[10px] font-mono tracking-[0.18em] text-primary uppercase">{p.sku}</div>
        <h3 className="mt-1 font-display font-bold text-lg text-navy leading-tight">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.tagline}</p>

        {/* Key feature pills */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="inline-flex items-center gap-1 rounded-full bg-primary/8 text-primary/90 border border-primary/15 px-2.5 py-1 text-[11px] font-semibold"
            >
              <Check className="size-3" strokeWidth={3} />
              {h}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-auto pt-5 flex gap-2">
          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
          <a
            href={buildProductEnquiryUrl(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp enquiry for ${p.name}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] px-4 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
