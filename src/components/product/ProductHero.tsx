import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Calendar, Download, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

export function ProductHero({ product }: { product: Product }) {
  const gallery = product.images?.length ? product.images : [product.image];
  const [active, setActive] = useState(0);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background layers — mirror site Hero */}
      <div className="absolute inset-0 -z-20 bg-white" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 size-[420px] rounded-full bg-primary/15 blur-3xl animate-orb" />
        <div className="absolute top-40 -right-32 size-[480px] rounded-full bg-[#38BDF8]/20 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-accent/40 blur-3xl animate-orb" style={{ animationDelay: "-3s" }} />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span className="opacity-40">/</span>
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
              SKU · {product.sku}
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] text-gradient">
              {product.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-brand">
                {product.name.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {product.tagline}
            </p>

            {/* highlight strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {product.highlights.slice(0, 4).map((h, i) => (
                <div key={h} className="glass rounded-xl p-3">
                  <div className="text-[10px] font-medium tracking-wider uppercase text-primary mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-semibold text-foreground leading-tight">
                    {h}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-[#0284C7] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-[transform,box-shadow,background-color] duration-200"
              >
                <FileText className="size-4" /> Get Quote
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={buildProductEnquiryUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/30 transition-colors"
              >
                <Calendar className="size-4" /> Request Demo
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/30 transition-colors"
              >
                <Download className="size-4" /> Brochure
              </a>
            </div>
          </motion.div>

          {/* Right — device plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 -z-10 bg-primary/20 blur-[100px] rounded-full" />

            <div className="relative card-premium overflow-hidden">
              {/* status row */}
              <div className="flex items-center justify-between px-6 pt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-accent-green">
                  <span className="size-1.5 rounded-full bg-accent-green animate-pulse-dot" />
                  In Stock
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                </span>
              </div>

              {/* image */}
              <div className="relative aspect-square bg-gradient-to-br from-white to-secondary mx-6 mt-4 rounded-2xl overflow-hidden border border-border">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.12), transparent 60%)",
                  }}
                />
                <motion.img
                  key={gallery[active]}
                  src={gallery[active]}
                  alt={`${product.name} — view ${active + 1}`}
                  width={1200}
                  height={1200}
                  loading="eager"
                  {...({ fetchpriority: "high" } as Record<string, string>)}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 w-full h-full object-contain p-10 md:p-14"
                />
              </div>

              {/* thumbs */}
              <div className="flex gap-2 p-5 mt-2">
                {gallery.map((src, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={src + i}
                      type="button"
                      aria-label={`View image ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={`relative size-14 rounded-lg overflow-hidden border transition-all ${
                        isActive
                          ? "border-primary bg-white shadow-glow"
                          : "border-border bg-white/70 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-contain p-1.5"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
