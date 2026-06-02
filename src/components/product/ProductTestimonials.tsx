import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductTestimonials({ product }: { product: Product }) {
  const [i, setI] = useState(0);
  const t = product.testimonials[i];
  const prev = () => setI((p) => (p - 1 + product.testimonials.length) % product.testimonials.length);
  const next = () => setI((p) => (p + 1) % product.testimonials.length);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="Testimonials" title="Loved by fleet teams across India." />

        <div className="mt-14 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="glass-strong rounded-3xl p-8 md:p-10 shadow-soft text-center"
            >
              <Quote className="size-8 text-primary mx-auto" />
              <p className="mt-6 text-lg md:text-xl text-navy font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="size-11 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-primary-foreground font-bold text-sm">
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="size-10 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors">
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-1.5">
              {product.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-navy/20"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="size-10 rounded-full glass grid place-items-center hover:border-primary/40 transition-colors">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
