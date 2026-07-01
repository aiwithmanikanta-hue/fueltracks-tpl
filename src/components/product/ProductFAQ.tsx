import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductFAQ({ product }: { product: Product }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
              07 · FAQ
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
              Answers to common questions.
            </h2>
            <p className="mt-4 text-navy/60 font-light">
              Real questions our team hears every week — answered plainly.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-2">
            {product.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className={`rounded-md border overflow-hidden transition-colors ${isOpen ? "border-primary/40 bg-primary/[0.04]" : "border-navy/10 bg-white hover:border-navy/20"}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="text-[10px] font-mono tracking-widest text-navy/30 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display font-semibold text-navy">{f.q}</span>
                      </div>
                      <Plus className={`size-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[52px] pr-5 pb-5 text-sm text-navy/70 leading-relaxed">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
