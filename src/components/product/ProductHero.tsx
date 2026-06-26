import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Calendar, Check, ShieldCheck, Headphones, Truck, Download, X, ZoomIn } from "lucide-react";
import { brochureUrl, type Product } from "@/data/products";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";

export function ProductHero({ product }: { product: Product }) {
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const brochure = brochureUrl(product.slug);
  const whatsappUrl = buildProductEnquiryUrl(product.name);

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left — image gallery first on mobile? keep order */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-mono tracking-[0.18em] text-primary uppercase">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {product.sku} · Vehicle Tracking
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-display font-bold text-navy leading-[1.05] tracking-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gradient font-semibold leading-tight">
            {product.tagline}
          </p>

          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-xl">
            {product.description}
          </p>

          {/* Highlights as check list */}
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm font-medium text-navy/85">
                <span className="size-5 shrink-0 rounded-full bg-primary/10 grid place-items-center text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-black shadow-glow hover:scale-[1.02] transition-transform"
            >
              <FileText className="size-4" /> Get Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp Enquiry
            </a>
            {brochure ? (
              <a
                href={brochure}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
              >
                <Download className="size-4" /> Download Brochure
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Brochure coming soon"
                aria-label="Brochure coming soon"
                className="inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-navy/50 cursor-not-allowed"
              >
                <Download className="size-4" /> Brochure coming soon
              </button>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/15 bg-white/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-navy hover:border-primary/40 hover:bg-white transition-colors"
            >
              <Calendar className="size-4" /> Request Demo
            </Link>
          </div>


          {/* Trust strip */}
          <div className="mt-8 pt-6 border-t border-navy/10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: ShieldCheck, label: "1-Year Warranty" },
              { icon: Truck, label: "Pan-India Install" },
              { icon: Headphones, label: "24/7 Support" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <t.icon className="size-4 text-primary shrink-0" />
                <span className="text-[11px] font-semibold text-navy/70 leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — image gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative"
        >
          {/* Main image card — bright background so the dark device pops */}
          <div className="relative mx-auto w-full max-w-[1055px]">
            <div className="absolute -inset-6 -z-10 bg-[var(--gradient-glow)] blur-3xl opacity-60" />

            <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-white via-white to-slate-100 border border-white shadow-2xl overflow-hidden group">
              {/* soft radial spotlight */}
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, rgba(59,130,246,0.10), transparent 60%)",
                }}
              />

              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label={`Zoom image: ${product.name}`}
                className="absolute inset-0 z-10 cursor-zoom-in"
              >
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
                  className="w-full h-full object-contain p-10 md:p-14 transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
              </button>

              {/* zoom hint */}
              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-[10px] font-semibold text-navy/80 border border-navy/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="size-3" /> Click to zoom
              </div>

              {/* counter pill */}
              <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[10px] font-mono tracking-[0.15em] text-navy/70 uppercase border border-navy/10">
                {active + 1} / {gallery.length}
              </div>

              {/* live badge */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[10px] font-semibold text-navy/80 border border-navy/10">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                In Stock
              </div>
            </div>


            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div
                className="mt-5 flex flex-wrap justify-center gap-3"
                role="tablist"
                aria-label="Product images"
              >
                {gallery.map((src, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={src + i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View image ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={`relative aspect-square w-20 md:w-24 rounded-2xl overflow-hidden bg-white border transition-all duration-300 ${
                        isActive
                          ? "border-primary shadow-[0_8px_24px_-8px_rgba(59,130,246,0.45)] scale-[1.04]"
                          : "border-navy/10 hover:border-primary/40 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${product.name} — view ${i + 1} thumbnail`}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="w-full h-full object-contain object-center p-2"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] grid place-items-center bg-navy/85 backdrop-blur-md p-4 md:p-10"
            onClick={() => setZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} — zoomed image`}
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close zoomed image"
              className="absolute top-5 right-5 size-11 grid place-items-center rounded-full bg-white/95 text-navy shadow-lg hover:scale-105 transition-transform"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={gallery[active]}
              alt={`${product.name} — zoomed view`}
              className="max-h-[88vh] max-w-[92vw] object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

