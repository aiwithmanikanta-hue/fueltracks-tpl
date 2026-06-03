import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import logistics from "@/assets/ind-logistics.jpg";
import school from "@/assets/ind-school.jpg";
import mining from "@/assets/ind-mining.jpg";
import construction from "@/assets/ind-construction.jpg";
import rental from "@/assets/ind-rental.jpg";
import tanker from "@/assets/ind-tanker.jpg";
import delivery from "@/assets/ind-delivery.jpg";
import corporate from "@/assets/ind-corporate.jpg";

const items = [
  { img: logistics, title: "Logistics & Transport", desc: "Long-haul fleets" },
  { img: school, title: "School Buses", desc: "Child safety & parent app" },
  { img: mining, title: "Mining", desc: "Heavy off-road tracking" },
  { img: construction, title: "Construction", desc: "Earth movers & cranes" },
  { img: rental, title: "Car Rentals", desc: "Self-drive monitoring" },
  { img: tanker, title: "Fuel Tankers", desc: "Theft & leak detection" },
  { img: delivery, title: "Delivery Services", desc: "Last-mile visibility" },
  { img: corporate, title: "Corporate Fleets", desc: "Executive & employee transport" },
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
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-primary/40 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-semibold text-lg">{it.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{it.desc}</p>
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
