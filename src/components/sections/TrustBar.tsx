import { Truck, Users, Target, HeadphonesIcon } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Reveal } from "../ui/Reveal";


const stats = [
  { icon: Truck, to: 10000, suffix: "+", label: "Vehicles Tracked" },
  { icon: Users, to: 500, suffix: "+", label: "Active Dealers" },
  { icon: Target, to: 99.9, suffix: "%", label: "GPS Accuracy", decimals: 1 },
  { icon: HeadphonesIcon, to: 24, suffix: "/7", label: "Live Support" },
];

export function TrustBar() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="glass-strong rounded-3xl p-8 md:p-10 shadow-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="inline-flex size-11 rounded-xl bg-primary/15 text-primary items-center justify-center mb-3">
                  <s.icon className="size-5" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
