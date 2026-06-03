import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import coverageMap from "@/assets/coverage-map.png.asset.json";


const points = [
  { t: "Real-time GPS Tracking", d: "Sub-10-second location updates with full route history.", v: 98 },
  { t: "Fuel Monitoring", d: "Capacitive sensors detect every refill, drain and theft event.", v: 95 },
  { t: "Theft Protection", d: "Engine immobilizer, geo-fence breach and SOS alerts.", v: 92 },
  { t: "Fleet Analytics", d: "Mileage, idling, harsh braking and driver scorecards.", v: 90 },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — illustration */}
          <Reveal className="relative w-full mx-auto" style={{ maxWidth: "1402px", aspectRatio: "1402 / 1122" }}>
            <div className="absolute inset-0 rounded-[2.5rem] bg-[var(--gradient-glow)] blur-3xl opacity-40" />
            <div className="relative h-full glass-strong rounded-[2rem] overflow-hidden">
              <img
                src={coverageMap.url}
                alt="Fuel Tracks coverage across Telangana and Andhra Pradesh"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right — content */}
          <div>
            <SectionHeader
              eyebrow="About Fuel Tracks"
              title="An IoT platform built for India's toughest fleets."
              description="From single-truck owners to enterprise transport companies, Fuel Tracks delivers a unified GPS + fuel-monitoring stack engineered for accuracy, uptime and ROI."
              align="left"
            />

            <div className="mt-8 space-y-5">
              {points.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="size-9 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0 mt-0.5">
                      <Check className="size-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold">{p.t}</h3>
                        <span className="text-xs text-primary font-mono">{p.v}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{p.d}</p>
                      <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.v}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-[var(--gradient-primary)] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
