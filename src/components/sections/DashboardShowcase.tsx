import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, AlertTriangle, Fuel, Truck } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import dashboardMap from "@/assets/dashboard-map.mp4.asset.json";


export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-1, 1], [4, -4]), { stiffness: 100, damping: 20 });
  const ry = useSpring(useTransform(x, [-1, 1], [-6, 6]), { stiffness: 100, damping: 20 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width * 2 - 1);
    y.set((e.clientY - rect.top) / rect.height * 2 - 1);
  }
  function reset() { x.set(0); y.set(0); }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Live Dashboard"
          title="Your fleet command center."
          description="A SaaS-grade web dashboard with real-time map, fuel analytics, alerts and full CSV export."
        />

        <Reveal className="mt-14">
          <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className="relative mx-auto max-w-6xl"
            style={{ perspective: "1500px" }}
          >
            <div className="absolute inset-0 -z-10 bg-[var(--gradient-glow)] blur-3xl opacity-50" />
            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              className="glass-strong rounded-3xl p-4 md:p-6 shadow-elegant"
            >
              {/* topbar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-[oklch(0.65_0.20_25)]" />
                    <span className="size-2.5 rounded-full bg-[oklch(0.78_0.18_55)]" />
                    <span className="size-2.5 rounded-full bg-[oklch(0.78_0.18_155)]" />
                  </div>
                  <span className="ml-3 text-xs text-muted-foreground">app.fueltracks.in/dashboard</span>
                </div>
                <div className="text-xs text-muted-foreground hidden md:flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-green animate-pulse-dot" /> All systems operational
                </div>
              </div>

              <div className="mt-4 grid lg:grid-cols-[1fr_280px] gap-4">
                {/* Map */}
                <div className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden bg-white border border-white/5">
                  <video
                    src={dashboardMap.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* floating cards on map */}
                  <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 text-xs">
                    <div className="text-muted-foreground text-[10px]">Active Now</div>
                    <div className="font-bold text-lg">42<span className="text-xs text-muted-foreground"> / 48</span></div>
                  </div>
                  <div className="absolute bottom-4 left-4 glass rounded-xl px-3 py-2 text-xs flex items-center gap-2">
                    <Fuel className="size-3.5 text-accent-green" />
                    <span>Fuel saved this month: <b className="text-foreground">12,840 L</b></span>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-3">
                  <Card title="Live Notifications">
                    {[
                      { i: AlertTriangle, c: "text-accent-red", t: "Fuel drain on TS-09-EH", s: "2 min" },
                      { i: Truck, c: "text-primary", t: "AP-37-AB entered Vizag", s: "8 min" },
                      { i: Activity, c: "text-accent-green", t: "Trip completed — 286 km", s: "21 min" },
                    ].map((n, i) => (
                      <div key={i} className="flex items-center gap-2.5 py-2 border-b border-white/5 last:border-0">
                        <n.i className={`size-3.5 ${n.c}`} />
                        <div className="flex-1 text-xs">{n.t}</div>
                        <div className="text-[10px] text-muted-foreground">{n.s}</div>
                      </div>
                    ))}
                  </Card>
                  <Card title="Today">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <Stat l="Distance" v="1,284 km" />
                      <Stat l="Avg Speed" v="48 km/h" />
                      <Stat l="Fuel Used" v="312 L" />
                      <Stat l="Idle Time" v="1h 12m" />
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-3.5">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">{title}</div>
      {children}
    </div>
  );
}

function Stat({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <div className="text-muted-foreground text-[10px]">{l}</div>
      <div className="font-semibold text-sm">{v}</div>
    </div>
  );
}
