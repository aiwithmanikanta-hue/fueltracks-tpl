import { MapPin, Fuel, ScanLine, Bus, BarChart3, UserCheck, Hexagon, Power, ShieldAlert, Smartphone } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";


const services = [
  { i: MapPin, t: "Live GPS Tracking", d: "Pinpoint vehicle location with sub-10-second refresh." },
  { i: Fuel, t: "Fuel Monitoring", d: "Capacitive sensor data straight to your dashboard." },
  { i: ScanLine, t: "RFID Tracking", d: "Driver, asset and trip identification at scale." },
  { i: Bus, t: "School Bus Tracking", d: "Parent app, route adherence and child safety." },
  { i: BarChart3, t: "Fleet Analytics", d: "Mileage, idling, utilization and cost reports." },
  { i: UserCheck, t: "Driver Monitoring", d: "Behaviour scoring with harsh-event detection." },
  { i: Hexagon, t: "Geo-fencing", d: "Polygon zones with entry, exit and dwell alerts." },
  { i: Power, t: "Engine On/Off Alerts", d: "Ignition events with optional remote immobilizer." },
  { i: ShieldAlert, t: "Fuel Theft Detection", d: "Instant SMS, email and push on suspicious drops." },
  { i: Smartphone, t: "Mobile App Tracking", d: "Native iOS & Android apps for owners and drivers." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your fleet needs, in one platform."
          description="A complete suite of GPS, fuel and IoT solutions — modular, scalable and built for Indian conditions."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 5) * 0.05}>
              <GlassCard glow className="h-full group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="size-11 rounded-xl bg-primary/15 grid place-items-center text-primary group-hover:scale-110 transition-transform">
                    <s.i className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-base">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
