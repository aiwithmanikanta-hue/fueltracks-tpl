import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Calendar, Download } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

export function ProductHero({ product }: { product: Product }) {
  const gallery = product.images?.length ? product.images : [product.image];
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,165,233,0.55) 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* soft glow */}
      <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-primary/25 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-28 pb-20 md:pt-32 md:pb-28">
        {/* breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] uppercase text-white/50 mb-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-white/25">/</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span className="text-white/25">/</span>
          <span className="text-primary truncate">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              SKU · {product.sku}
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.02] tracking-tight">
              {product.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">
                {product.name.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light">
              {product.tagline}
            </p>

            {/* highlight strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden max-w-2xl">
              {product.highlights.slice(0, 4).map((h, i) => (
                <div key={h} className="p-4 bg-navy/60">
                  <div className="text-[9px] font-mono tracking-[0.22em] uppercase text-white/40 mb-1.5">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-semibold text-white leading-tight">
                    {h}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary-glow px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors"
              >
                <FileText className="size-4" /> Get Quote
              </Link>
              <a
                href={buildProductEnquiryUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 px-6 py-3.5 text-sm font-bold text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="size-4" /> WhatsApp Enquiry
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors"
              >
                <Calendar className="size-4" /> Request Demo
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors"
              >
                <Download className="size-4" /> Brochure
              </a>
            </div>
          </motion.div>

          {/* Right — device plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 -z-10 bg-primary/20 blur-[100px] rounded-full" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
              {/* status row */}
              <div className="flex items-center justify-between px-6 pt-5">
                <span className="inline-flex items-center gap-2 rounded-sm border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  In Stock
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                  {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                </span>
              </div>

              {/* image */}
              <div className="relative aspect-square bg-gradient-to-br from-white to-slate-100 mx-6 mt-4 rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.14), transparent 60%)",
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
              <div className="flex gap-2 p-5 border-t border-white/10 mt-4">
                {gallery.map((src, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={src + i}
                      type="button"
                      aria-label={`View image ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={`relative size-14 rounded-md overflow-hidden border transition-all ${
                        isActive
                          ? "border-primary bg-white"
                          : "border-white/10 bg-white/70 opacity-60 hover:opacity-100"
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
