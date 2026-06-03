import { createFileRoute } from "@tanstack/react-router";
import indiaMap from "@/assets/fleet-coverage-map.jpeg.asset.json";
import { Satellite, Droplet, Shield, Headphones, Truck, Bus, Building2, Factory, Snowflake, Stethoscope, ShieldCheck, Tractor } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { About } from "@/components/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Fuel Tracks Technologies" },
      { name: "description", content: "Learn about Fuel Tracks Technologies — India's leading provider of GPS vehicle tracking, fuel monitoring and RFID solutions for fleets across the country." },
      { property: "og:title", content: "About Fuel Tracks Technologies" },
      { property: "og:description", content: "GPS · Fuel Monitoring · RFID · 500+ clients · 10+ years · 99.9% uptime." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/about" }],
  }),
  component: AboutPage,
});

const why = [
  { i: Satellite, t: "GPS Tracking", d: "Multi-constellation, sub-10s refresh." },
  { i: Droplet, t: "Fuel Monitoring", d: "Capacitive sensors, ±1% accuracy." },
  { i: Shield, t: "RFID Systems", d: "Driver, asset and trip identification." },
  { i: Headphones, t: "24/7 Support", d: "Phone, chat and on-site engineers." },
];

const apps = [
  { i: Truck, l: "Logistics" },
  { i: Truck, l: "Cargo Trucks" },
  { i: Factory, l: "Generators" },
  { i: Tractor, l: "Cranes" },
  { i: Bus, l: "School Buses" },
  { i: Snowflake, l: "Cold Storage" },
  { i: Stethoscope, l: "Ambulances" },
  { i: ShieldCheck, l: "Police Vehicles" },
  { i: Building2, l: "Company Fleets" },
  { i: Tractor, l: "Bulldozers" },
];

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      {/* Floating stats */}
      <section className="relative -mt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="glass-strong rounded-3xl p-6 md:p-8 shadow-elegant grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: 500, s: "+", l: "Clients" },
              { v: 10, s: "+", l: "Years" },
              { v: 99.9, s: "%", l: "Uptime", d: 1 },
              { v: 24, s: "/7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-brand font-mono">
                  <AnimatedCounter to={s.v} suffix={s.s} decimals={s.d ?? 0} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reuse About section */}
      <About />

      {/* Why choose us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">WHY CHOOSE US</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Built different. Trusted everywhere.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <GlassCard glow className="text-center group h-full">
                  <div className="size-14 mx-auto rounded-2xl bg-primary/15 grid place-items-center text-primary group-hover:scale-110 transition-transform">
                    <w.i className="size-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{w.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{w.d}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">PAN-INDIA COVERAGE</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Active in every corner of the country.</h2>
          </Reveal>

          <Reveal className="mt-12 max-w-3xl mx-auto">
            <div className="relative aspect-[4/5] rounded-3xl p-6 shadow-elegant overflow-hidden ring-1 ring-primary/20" style={{ background: "#BFDFFF" }}>
              <div className="absolute inset-1 rounded-3xl bg-background/40 backdrop-blur-sm" />
              <img
                src={indiaMap.url}
                alt="Fuel Tracks pan-India coverage map"
                loading="lazy"
                className="relative w-full h-full object-contain"
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {["Delhi", "Mumbai", "Hyderabad", "Chennai", "Bangalore", "Kolkata", "Lucknow", "Patna"].map((c) => (
                  <span key={c} className="text-[11px] glass rounded-full px-2.5 py-1 font-medium">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Application areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">APPLICATION AREAS</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Anywhere wheels turn.</h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="flex flex-wrap justify-center gap-3">
              {apps.map((a) => (
                <div key={a.l} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2.5 text-sm font-medium hover:border-primary/40 hover:scale-105 transition-all">
                  <a.i className="size-4 text-primary" /> {a.l}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
