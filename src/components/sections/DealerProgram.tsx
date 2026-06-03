import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgePercent, GraduationCap, LifeBuoy, Megaphone, Map as MapIcon } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Reveal } from "../ui/Reveal";


const benefits = [
  { i: BadgePercent, t: "High Commissions", d: "Industry-best margins on devices and SaaS subscriptions." },
  { i: GraduationCap, t: "Installation Training", d: "Hands-on certification for hardware fitment & calibration." },
  { i: LifeBuoy, t: "Technical Support", d: "Priority engineer access — phone, chat and on-site." },
  { i: Megaphone, t: "Marketing Support", d: "Co-branded creatives, leads and digital campaigns." },
  { i: MapIcon, t: "Territory Rights", d: "Protected zones for serious dealers ready to scale." },
];

export function DealerProgram() {
  return (
    <section id="dealers" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="glass-strong rounded-[2rem] p-8 md:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                <span className="size-1.5 rounded-full bg-accent-orange animate-pulse-dot" />
                <span className="text-primary font-medium">PARTNER PROGRAM</span>
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gradient leading-tight">
                Become a Fuel Tracks Dealer.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
                Join 500+ active dealers building profitable GPS & fuel-monitoring businesses across India. Premium hardware, recurring revenue, full support.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="text-3xl font-bold text-gradient"><AnimatedCounter to={500} suffix="+" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Active Dealers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">₹<AnimatedCounter to={4.2} decimals={1} suffix="L" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Avg. Monthly Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient"><AnimatedCounter to={28} suffix="%" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Recurring Margin</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/dealers" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow bg-slate-500 hover:bg-slate-600 hover:shadow-glow hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] active:brightness-95 transition-[transform,box-shadow,background-color] duration-200 ease-out">
                  Apply Now <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:border-primary/40 transition-colors">
                  Talk to Sales
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <Reveal key={b.t} delay={i * 0.06}>
                  <GlassCard className={`h-full ${i === 4 ? "col-span-2" : ""}`}>
                    <div className="size-9 rounded-lg bg-primary/15 grid place-items-center text-primary">
                      <b.i className="size-4" />
                    </div>
                    <h3 className="mt-3 font-semibold text-sm">{b.t}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.d}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
