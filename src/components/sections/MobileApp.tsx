import { motion } from "framer-motion";
import { Apple, Bell, Fuel, MapPin } from "lucide-react";
import { Reveal } from "../ui/Reveal";


export function MobileApp() {
  return (
    <section id="app" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Phones */}
          <Reveal className="relative h-[560px] hidden md:block">
            <div className="absolute inset-0 bg-[var(--gradient-glow)] blur-3xl opacity-40" />
            <Phone className="absolute left-1/2 top-1/2 -translate-x-[110%] -translate-y-1/2 -rotate-6" delay={0.2} />
            <Phone variant="alt" className="absolute left-1/2 top-1/2 -translate-x-[5%] -translate-y-[55%] rotate-6" delay={0.4} />
          </Reveal>

          {/* Content */}
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.2em] text-primary">MOBILE APP</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient leading-tight">
              Your fleet, in your pocket.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Native iOS and Android apps with live tracking, fuel alerts, push notifications and one-tap driver communication.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                { i: MapPin, t: "Live map with vehicle clustering" },
                { i: Fuel, t: "Real-time fuel level & refill notifications" },
                { i: Bell, t: "Geo-fence, speed and SOS push alerts" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-primary/15 grid place-items-center text-primary"><x.i className="size-4" /></div>
                  {x.t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-3 rounded-xl glass-strong px-5 py-3 hover:border-primary/40 transition-colors">
                <Apple className="size-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-muted-foreground">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-xl glass-strong px-5 py-3 hover:border-primary/40 transition-colors">
                <PlayStoreIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-muted-foreground">Get it on</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Phone({ className = "", delay = 0, variant = "main" }: { className?: string; delay?: number; variant?: "main" | "alt" }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute w-[260px] h-[520px] rounded-[3rem] glass-strong shadow-elegant p-3 ${className}`}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black/40 z-10" />
      <div className="w-full h-full rounded-[2.4rem] bg-[oklch(0.14_0.04_260)] overflow-hidden relative">
        {variant === "main" ? <ScreenLive /> : <ScreenFuel />}
      </div>
    </motion.div>
  );
}

function ScreenLive() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="text-[10px] text-muted-foreground">Hello, Fleet Manager</div>
      <div className="text-base font-semibold">Live Tracking</div>
      <div className="mt-3 flex-1 rounded-xl bg-[oklch(0.18_0.04_260)] relative overflow-hidden">
        <svg viewBox="0 0 200 240" className="w-full h-full" aria-hidden>
          <g opacity="0.2">
            {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={i*40} y1="0" x2={i*40} y2="240" stroke="white" strokeWidth="0.4" />)}
            {Array.from({ length: 7 }).map((_, i) => <line key={i} x1="0" y1={i*40} x2="200" y2={i*40} stroke="white" strokeWidth="0.4" />)}
          </g>
          <path d="M20 200 C 80 100, 130 180, 180 60" fill="none" stroke="oklch(0.72 0.18 235)" strokeWidth="2" strokeDasharray="5 4" />
          <circle cx="100" cy="140" r="5" fill="oklch(0.78 0.18 55)" />
          <circle cx="100" cy="140" r="14" fill="oklch(0.78 0.18 55)" opacity="0.25" />
          <circle cx="160" cy="80" r="5" fill="oklch(0.72 0.18 235)" />
        </svg>
      </div>
      <div className="mt-3 glass rounded-xl p-2.5">
        <div className="text-[10px] text-muted-foreground">TS-09-EH-2418</div>
        <div className="text-sm font-semibold">62 km/h · 68% fuel</div>
      </div>
    </div>
  );
}

function ScreenFuel() {
  return (
    <div className="p-4 pt-10 h-full flex flex-col">
      <div className="text-[10px] text-muted-foreground">Tanker AP-37-AB</div>
      <div className="text-base font-semibold">Fuel Monitor</div>
      <div className="mt-4 mx-auto relative size-32 rounded-full bg-[oklch(0.18_0.04_260)] grid place-items-center">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="6" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.78 0.18 155)" strokeWidth="6" strokeDasharray="180 264" strokeLinecap="round" transform="rotate(-90 50 50)" />
        </svg>
        <div className="text-center">
          <div className="text-2xl font-bold">68%</div>
          <div className="text-[9px] text-muted-foreground">408 / 600 L</div>
        </div>
      </div>
      <div className="mt-4 glass rounded-xl p-2.5 text-[11px] flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent-red animate-pulse-dot" />
        Drain alert · 12 min ago
      </div>
      <div className="mt-2 glass rounded-xl p-2.5 text-[11px] flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent-green" />
        Refill +220L · Yesterday
      </div>
    </div>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M3 1.5l11.5 10.5L3 22.5V1.5zm12.7 11.5L19 16.3l-2.7 1.5-3.3-3 2.7-1.8zM4.5 23l11-6.3-2.7-2.5L4.5 23zm0-22l8.3 8.8 2.7-2.5L4.5 1z"/>
    </svg>
  );
}
