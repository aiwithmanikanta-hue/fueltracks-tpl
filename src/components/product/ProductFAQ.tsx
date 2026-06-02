import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductFAQ({ product }: { product: Product }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {product.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className={`glass rounded-2xl overflow-hidden transition-colors ${open === i ? "border-primary/40" : ""}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <Plus className={`size-5 text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
