import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const items = [
  { n: "Rajesh Kumar", r: "Owner, RK Logistics", q: "We cut fuel theft by 90% in the first quarter. The dashboard is so clean my drivers actually use it.", a: "RK" },
  { n: "Priya Sharma", r: "Fleet Manager, BlueLine Transport", q: "60-vehicle fleet tracked from one screen. Reports that used to take hours are now one click.", a: "PS" },
  { n: "Mohammed Faraz", r: "Director, Faraz Tankers", q: "Real-time fuel-drop alerts saved us lakhs. Installation team was professional and on time.", a: "MF" },
  { n: "Suresh Reddy", r: "Principal, Vidya Public School", q: "Parents love the live bus tracking. The peace of mind it gives families is priceless.", a: "SR" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = items[idx];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What our customers say."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 shadow-elegant overflow-hidden min-h-[280px]">
            <Quote className="absolute top-6 right-6 size-16 text-primary/15" />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-1 text-accent-orange">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="mt-5 text-xl md:text-2xl font-display leading-snug text-foreground">
                  "{t.q}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="size-11 rounded-full bg-[var(--gradient-primary)] grid place-items-center font-bold text-primary-foreground">
                    {t.a}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-primary" : "w-4 bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
