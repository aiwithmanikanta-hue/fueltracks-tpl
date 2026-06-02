import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const faqs = [
  { q: "How does fuel monitoring work?", a: "We install a calibrated capacitive fuel-level sensor inside the tank that reports real-time levels to our cloud. Refills, drains and discrepancies are detected instantly and shown on your dashboard." },
  { q: "How accurate is the GPS tracking?", a: "Our devices use multi-constellation GNSS (GPS + GLONASS) with 2.5-meter accuracy and refresh location every 10 seconds with optional 1-second mode for high-value assets." },
  { q: "Is a mobile app available?", a: "Yes — native iOS and Android apps for fleet owners, dispatchers, drivers and parent (school bus) profiles, all included with your subscription." },
  { q: "How does theft detection work?", a: "Geo-fence breaches, after-hours ignition, fuel drains and SIM tampering all trigger instant SMS, email and push notifications. Optional remote engine immobilizer is available." },
  { q: "Can I track multiple vehicles?", a: "From 1 to 10,000+ vehicles on a single dashboard. Group by region, driver or asset type with role-based access for your team." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
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
