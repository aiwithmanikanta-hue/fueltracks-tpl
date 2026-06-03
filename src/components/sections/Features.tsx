import { motion } from "framer-motion";
import { Activity, Bell, Gauge, History, MapPin, Route } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import fuelTheftChart from "@/assets/fuel-theft-chart.png.asset.json";


const features = [
  {
    eyebrow: "REAL-TIME",
    title: "Track every vehicle, every second.",
    desc: "Sub-10-second GPS refresh with route playback, geo-fence alerts and ETA prediction. Built on redundant SIM and tower-fallback architecture for uninterrupted visibility.",
    bullets: ["Live map with neon route paths", "Speed & idle reporting", "Trip history up to 365 days"],
    icons: [MapPin, Route, History],
    visual: <LiveTrackingVisual />,
    flip: false,
  },
  {
    eyebrow: "FUEL INTELLIGENCE",
    title: "Stop fuel theft before it happens.",
    desc: "Capacitive fuel sensors measure tank levels in real time and instantly flag drains, refills and discrepancies — with verified-litre reports for billing.",
    bullets: ["Refill & drain detection", "Mileage per trip", "Tamper-proof sensor"],
    icons: [Activity, Gauge, Bell],
    visual: <FuelVisual />,
    flip: true,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Premium Features"
          title="Engineered for accuracy. Designed for clarity."
          description="A precision-built data stack delivered through a beautifully simple interface."
        />

        <div className="mt-16 space-y-24">
          {features.map((f) => (
            <div key={f.title} className={`grid lg:grid-cols-2 gap-12 items-center ${f.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>{f.visual}</Reveal>
              <Reveal delay={0.1}>
                <div className="text-xs font-semibold tracking-[0.2em] text-primary">{f.eyebrow}</div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gradient leading-tight">{f.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b, i) => {
                    const Icon = f.icons[i];
                    return (
                      <li key={b} className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-primary/15 grid place-items-center text-primary"><Icon className="size-4" /></div>
                        <span className="text-sm">{b}</span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveTrackingVisual() {
  return (
    <div className="relative aspect-[4/3] w-full glass-strong rounded-3xl p-5 shadow-elegant overflow-hidden">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent-green animate-pulse-dot" /> Live · 4 vehicles</span>
        <span className="font-mono">17.3850°N 78.4867°E</span>
      </div>
      <div className="relative h-[calc(100%-2rem)] rounded-2xl overflow-hidden bg-[oklch(0.14_0.04_260)] border border-white/5">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/Z2pAeH0HFdA?autoplay=1&mute=1&loop=1&playlist=Z2pAeH0HFdA&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
          title="Fuel Tracks live tracking demo"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}

function FuelVisual() {
  return (
    <div className="relative aspect-[4/3] w-full glass-strong rounded-3xl p-6 shadow-elegant">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <span>Fuel Level — Tanker TS-09-EH</span>
        <span className="text-accent-red flex items-center gap-1.5"><Bell className="size-3" /> Drain Detected</span>
      </div>
      <div className="relative w-full h-[calc(100%-2rem)] rounded-xl overflow-hidden bg-white">
        <img
          src={fuelTheftChart.url}
          alt="Fuel theft detection chart showing sudden drop"
          className="absolute inset-0 w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
