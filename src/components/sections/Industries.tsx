import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import logistics from "@/assets/ind-logistics.webp";
import school from "@/assets/ind-school.webp";
import mining from "@/assets/ind-mining.webp";
import construction from "@/assets/ind-construction.webp";
import rental from "@/assets/ind-rental.webp";
import tanker from "@/assets/ind-tanker.webp";
import delivery from "@/assets/ind-delivery.webp";
import corporate from "@/assets/ind-corporate.webp";

const items = [
  { img: logistics, title: "Logistics & Transport", desc: "Long-haul fleets", alt: "Logistics and transport fleet GPS tracking" },
  { img: school, title: "School Buses", desc: "Child safety & parent app", alt: "School bus tracking with parent safety app" },
  { img: mining, title: "Mining", desc: "Heavy off-road tracking", alt: "Mining vehicle GPS tracking and fuel monitoring" },
  { img: construction, title: "Construction", desc: "Earth movers & cranes", alt: "Construction fleet tracking for earth movers and cranes" },
  { img: rental, title: "Car Rentals", desc: "Self-drive monitoring", alt: "Car rental self-drive vehicle monitoring" },
  { img: tanker, title: "Fuel Tankers", desc: "Theft & leak detection", alt: "Fuel tanker theft and leak detection system" },
  { img: delivery, title: "Delivery Services", desc: "Last-mile visibility", alt: "Last-mile delivery vehicle tracking" },
  { img: corporate, title: "Corporate Fleets", desc: "Executive & employee transport", alt: "Corporate fleet tracking for executive and employee transport" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Trusted across every category of mobility."
          description="From single-truck owners to enterprise operators — Fuel Tracks adapts to your industry."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 0.06}>
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/40 border border-white/20 cursor-pointer">
                <img
                  src={it.img}
                  alt={it.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-primary/40 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-semibold text-lg text-slate-100">{it.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 text-slate-100">{it.desc}</p>
                  <div className="mt-3 h-0.5 w-8 bg-primary rounded-full transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
