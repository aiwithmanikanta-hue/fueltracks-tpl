import { useEffect, useState } from "react";

const sections = [
  { id: "details", label: "Details" },
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "specs", label: "Specifications" },
  { id: "use-cases", label: "Use Cases" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" },
];

export function ProductStickyNav() {
  const [active, setActive] = useState<string>("details");

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-navy/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar h-14">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative shrink-0 h-full inline-flex items-center px-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                active === s.id
                  ? "text-primary"
                  : "text-navy/50 hover:text-navy"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary" />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
