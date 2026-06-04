import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Droplet, Monitor, Activity, BarChart3, MapPin, Bell, Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Services } from "@/components/sections/Services";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Industries } from "@/components/sections/Industries";
import mapPinIcon from "@/assets/map-pin.png.asset.json";
import fuelSensorIcon from "@/assets/fuel-sensor-icon.png.asset.json";
import rfidIcon from "@/assets/rfid-icon-v2.png.asset.json";
import fleetDeploymentImg from "@/assets/fleet-deployment.png.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GPS, Fuel Monitoring & RFID | Fuel Tracks" },
      { name: "description", content: "End-to-end GPS tracking, fuel monitoring and RFID services for fleets across India. Live monitoring, theft detection and full software platform." },
      { property: "og:title", content: "Fuel Tracks Services" },
      { property: "og:description", content: "GPS · Fuel Monitoring · RFID · End-to-end solutions." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const tabs = [
  { id: "fuel", label: "Fuel Sensor Specs", icon: Droplet },
  { id: "gps", label: "GPS Device Specs", icon: Cpu },
  { id: "software", label: "Software Features", icon: Monitor },
];

const fuelSpecs: [string, string][] = [
  ["Sensor Type", "Capacitive Fuel Level Sensor"],
  ["Accuracy", "±1–2% with idle-field condition"],
  ["Resolution", "1 mm for regular tanks"],
  ["Response", "<5 mins (500 samples/sec)"],
  ["Operating", "DC 0–5V / Serial RS-232 or RS-485"],
  ["Protection", "IP67 · Casing: Aluminium"],
  ["Lifetime", "30,000 hours"],
];

const gpsFeatures = [
  "GPS + GLONASS multi-constellation",
  "Sub-10-second location refresh",
  "Internal 1100 mAh backup battery",
  "Tamper, ignition and SOS detection",
  "4 digital + 2 analog inputs",
  "ARAI certified, IP65 rated",
  "Operating −20°C to +70°C",
  "Remote OTA firmware updates",
];

const softwareFeatures = [
  { i: MapPin, t: "Real Time Vehicle Tracking", d: "Sub-10-second updates with route playback." },
  { i: Droplet, t: "Fuel Monitoring", d: "Refill, drain and mileage analytics." },
  { i: BarChart3, t: "Reports", d: "Daily, weekly and custom CSV exports." },
  { i: Activity, t: "History", d: "365-day trip and event history." },
];

function ServicesPage() {
  const [tab, setTab] = useState("fuel");

  return (
    <>
      <PageHeader title="Our Services" crumbs={[{ label: "Home", to: "/" }, { label: "Our Services" }]} />

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">END TO END</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">GPS · Fuel Monitoring · RFID</h2>
            <p className="mt-4 text-muted-foreground">From sensor to software, a single trusted partner for your entire mobility stack.</p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { i: Cpu, t: "GPS Device", d: "Industrial multi-constellation GPS with 4G fallback, internal battery and tamper detection." },
              { i: Droplet, t: "Fuel Sensor", d: "±1% capacitive fuel level sensor with IP67 rating and 30,000-hour lifetime." },
              { i: Monitor, t: "RFID System", d: "Driver and asset identification with seamless integration to dispatch & payroll." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <GlassCard glow className="h-full text-center group">
                  <div className="size-14 mx-auto rounded-2xl bg-primary grid place-items-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform overflow-hidden">
                    {i === 0 ? (
                      <img src={mapPinIcon.url} alt="GPS location pin" className="size-8 object-contain" />
                    ) : i === 1 ? (
                      <img src={fuelSensorIcon.url} alt="Fuel level sensor" className="size-10 object-contain" />
                    ) : (
                      <img src={rfidIcon.url} alt="RFID system" className="size-8 object-contain invert" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application areas with red accent banner */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="rounded-2xl overflow-hidden bg-[var(--gradient-primary)] shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-accent-red animate-pulse-dot ring-2 ring-white/30" />
                <h3 className="text-primary-foreground font-display font-bold text-lg md:text-xl text-slate-800">Application Areas — Where We're Deployed</h3>
              </div>
              <div className="text-xs text-primary-foreground/70 tracking-wider uppercase">Pan-India coverage</div>
            </div>
          </Reveal>

          <Reveal className="mt-6 grid md:grid-cols-2 gap-4">
            <GlassCard className="h-full">
              <ul className="space-y-3 text-sm">
                {["Logistics & Cargo Trucks", "Cranes & Bulldozers", "Generators & Industrial Equipment", "School Buses & Vans", "Cold Storage Reefers", "Ambulances & Emergency Vehicles", "Police & Government Fleets", "Corporate Employee Transport"].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <div className="size-7 rounded-md bg-primary/15 grid place-items-center text-primary"><Check className="size-3.5" /></div>
                    {x}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="h-full overflow-hidden p-0">
              <div className="aspect-video relative bg-secondary">
                <img
                  src={fleetDeploymentImg.url}
                  alt="Diverse fleet — trucks, buses, ambulances and construction equipment connected via GPS tracking across India"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-xs text-white/90">Live deployments across 28 states</div>
              </div>
            </GlassCard>
          </Reveal>

        </div>
      </section>

      {/* Tabbed specs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">FUEL SENSOR FEATURES</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">The full technical breakdown.</h2>
          </Reveal>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    tab === t.id ? "bg-[var(--gradient-primary)] text-primary-foreground shadow-glow" : "glass hover:border-primary/40"
                  }`}
                >
                  <t.icon className="size-4" /> {t.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="glass-strong rounded-3xl p-6 md:p-8 shadow-elegant"
              >
                {tab === "fuel" && (
                  <table className="w-full text-sm">
                    <tbody>
                      {fuelSpecs.map(([k, v], i) => (
                        <motion.tr
                          key={k}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={i % 2 === 0 ? "bg-white/[0.03]" : ""}
                        >
                          <td className="py-3 px-4 text-muted-foreground">{k}</td>
                          <td className="py-3 px-4 font-mono text-foreground">{v}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {tab === "gps" && (
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                    {gpsFeatures.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="size-7 rounded-md bg-primary/15 grid place-items-center text-primary"><Check className="size-3.5" /></div>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                )}
                {tab === "software" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {softwareFeatures.map((s, i) => (
                      <motion.div
                        key={s.t}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <div className="size-10 rounded-lg bg-primary/15 grid place-items-center text-primary shrink-0">
                          <s.i className="size-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{s.t}</div>
                          <div className="text-xs text-muted-foreground mt-1">{s.d}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Live monitoring demo */}
      <DashboardShowcase />

      {/* Software features grid (reuse Services) */}
      <Services />

      {/* Live charts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">LIVE MONITORING</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Fuel filling vs theft, side by side.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <Reveal>
              <ChartCard title="Fuel Filling Event" subtitle="+220L · Refill verified" tone="green" data={[40, 42, 45, 44, 60, 80, 95, 96, 97]} />
            </Reveal>
            <Reveal delay={0.1}>
              <ChartCard title="Fuel Theft Event" subtitle="−42L · Tamper alert" tone="red" data={[90, 88, 86, 85, 80, 70, 55, 48, 46]} />
            </Reveal>
          </div>
        </div>
      </section>

      <Industries />
    </>
  );
}

function ChartCard({ title, subtitle, tone, data }: { title: string; subtitle: string; tone: "green" | "red"; data: number[] }) {
  const color = tone === "green" ? "oklch(0.68 0.18 145)" : "oklch(0.66 0.22 25)";
  const w = 400, h = 180;
  const max = 100;
  const path = data.map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (data.length - 1)) * w} ${h - (v / max) * (h - 20) - 10}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="glass-strong rounded-3xl p-6 shadow-elegant">
      <div className="flex items-center justify-between text-xs">
        <div>
          <div className="font-semibold text-sm">{title}</div>
          <div className="text-muted-foreground mt-0.5">{subtitle}</div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-medium" style={{ color }}>
          <Bell className="size-3" /> Live
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[180px] mt-4" aria-hidden>
        <defs>
          <linearGradient id={`fill-${tone}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <g opacity="0.15">
          {Array.from({ length: 4 }).map((_, i) => <line key={i} x1="0" y1={(i + 1) * 40} x2={w} y2={(i + 1) * 40} stroke="white" strokeWidth="0.4" />)}
        </g>
        <path d={area} fill={`url(#fill-${tone})`} />
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {data.map((v, i) => (
          <circle key={i} cx={(i / (data.length - 1)) * w} cy={h - (v / max) * (h - 20) - 10} r="3" fill={color} />
        ))}
      </svg>
    </div>
  );
}
