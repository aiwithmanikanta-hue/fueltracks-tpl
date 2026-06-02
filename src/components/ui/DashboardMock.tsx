import { motion } from "framer-motion";
import { Activity, Fuel, MapPin, Bell, Truck } from "lucide-react";

export function DashboardMock() {
  return (
    <div className="relative w-full max-w-[560px] aspect-[4/5] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-glow)] blur-3xl opacity-60" />

      {/* Main panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 glass-strong rounded-3xl p-5 shadow-elegant overflow-hidden"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent-green animate-pulse-dot" />
            Live Fleet
          </div>
          <span>12:42 IST</span>
        </div>

        {/* Map */}
        <div className="mt-3 relative h-[55%] rounded-2xl overflow-hidden bg-[oklch(0.14_0.04_260)] border border-white/5">
          <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden>
            <defs>
              <linearGradient id="mapBg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.22 0.05 250)" />
                <stop offset="100%" stopColor="oklch(0.16 0.04 260)" />
              </linearGradient>
            </defs>
            <rect width="400" height="260" fill="url(#mapBg)" />
            <g opacity="0.25">
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="260" stroke="white" strokeWidth="0.4" />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={i} x1="0" y1={i * 45} x2="400" y2={i * 45} stroke="white" strokeWidth="0.4" />
              ))}
            </g>
            <defs>
              <linearGradient id="routeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.74 0.15 165)" />
                <stop offset="55%" stopColor="oklch(0.74 0.15 165)" />
                <stop offset="75%" stopColor="oklch(0.70 0.19 35)" />
                <stop offset="100%" stopColor="oklch(0.66 0.21 25)" />
              </linearGradient>
              <radialGradient id="nodeGlowEmerald">
                <stop offset="0%" stopColor="oklch(0.74 0.15 165 / 0.55)" />
                <stop offset="100%" stopColor="oklch(0.74 0.15 165 / 0)" />
              </radialGradient>
              <radialGradient id="nodeGlowCrimson">
                <stop offset="0%" stopColor="oklch(0.68 0.20 25 / 0.55)" />
                <stop offset="100%" stopColor="oklch(0.68 0.20 25 / 0)" />
              </radialGradient>
            </defs>
            <path d="M40 80 C 110 130, 175 118, 235 160 S 320 220, 360 210" fill="none" stroke="url(#routeGrad)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
            <motion.circle r="5"
              animate={{
                cx: [40, 360],
                cy: [80, 210],
                fill: [
                  "oklch(0.78 0.16 165)",
                  "oklch(0.78 0.16 165)",
                  "oklch(0.72 0.18 90)",
                  "oklch(0.70 0.20 25)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.75, 1] }} />
            <circle cx="210" cy="145" r="16" fill="url(#nodeGlowEmerald)" />
            <motion.circle cx="210" cy="145" r="14" fill="oklch(0.74 0.15 165 / 0.22)"
              animate={{ r: [12, 18, 12], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
            <circle cx="210" cy="145" r="5" fill="oklch(0.78 0.16 160)" />
            <circle cx="320" cy="195" r="16" fill="url(#nodeGlowCrimson)" />
            <motion.circle cx="320" cy="195" r="14" fill="oklch(0.68 0.20 25 / 0.22)"
              animate={{ r: [12, 18, 12], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
            <circle cx="320" cy="195" r="5" fill="oklch(0.70 0.20 25)" />
          </svg>
          <div className="absolute top-3 left-3 glass rounded-lg px-2 py-1 text-[10px] flex items-center gap-1.5">
            <MapPin className="size-3 text-primary" /> 24 Active Vehicles
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <Stat icon={<Fuel className="size-4" />} label="Fuel" value="68%" tint="green" />
          <Stat icon={<Activity className="size-4" />} label="Speed" value="62 km/h" tint="primary" />
        </div>

        {/* Fuel chart */}
        <div className="mt-2.5 glass rounded-xl p-3">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
            <span>Fuel Trend · 7d</span>
            <span className="text-accent-red">−4.2%</span>
          </div>
          <svg viewBox="0 0 300 60" className="w-full h-12" aria-hidden>
            <defs>
              <linearGradient id="fillGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.72 0.18 145 / 0.45)" />
                <stop offset="50%" stopColor="oklch(0.72 0.18 145 / 0.25)" />
                <stop offset="55%" stopColor="oklch(0.68 0.22 25 / 0.35)" />
                <stop offset="100%" stopColor="oklch(0.68 0.22 25 / 0)" />
              </linearGradient>
              <linearGradient id="strokeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.72 0.18 145)" />
                <stop offset="50%" stopColor="oklch(0.72 0.18 145)" />
                <stop offset="55%" stopColor="oklch(0.68 0.22 25)" />
                <stop offset="100%" stopColor="oklch(0.68 0.22 25)" />
              </linearGradient>
            </defs>
            <path d="M0 18 L40 16 L80 20 L120 17 L160 22 L200 38 L240 44 L300 52 L300 60 L0 60 Z" fill="url(#fillGrad)" />
            <path d="M0 18 L40 16 L80 20 L120 17 L160 22 L200 38 L240 44 L300 52" fill="none" stroke="url(#strokeGrad)" strokeWidth="2" />
          </svg>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-1/3 glass-strong rounded-xl px-3 py-2.5 shadow-elegant w-[180px]"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="size-8 rounded-lg bg-primary/15 grid place-items-center text-primary">
            <Truck className="size-4" />
          </div>
          <div>
            <div className="font-semibold text-foreground">TS-09-EH-2418</div>
            <div className="text-muted-foreground text-[10px]">Hyderabad → Vizag</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-4 top-12 glass-strong rounded-xl px-3 py-2.5 shadow-elegant w-[170px]"
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="size-8 rounded-lg bg-[oklch(0.68_0.22_25_/_0.18)] grid place-items-center text-accent-red">
            <Bell className="size-4" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Fuel Drop Alert</div>
            <div className="text-muted-foreground text-[10px]">−18L · 2 min ago</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ icon, label, value, tint }: { icon: React.ReactNode; label: string; value: string; tint: "green" | "primary" }) {
  const color = tint === "green" ? "text-accent-green" : "text-primary";
  return (
    <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-3">
      <div className={`size-8 rounded-lg grid place-items-center ${tint === "green" ? "bg-[oklch(0.78_0.18_155_/_0.18)]" : "bg-primary/15"} ${color}`}>
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
