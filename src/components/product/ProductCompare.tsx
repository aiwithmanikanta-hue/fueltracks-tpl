import { Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { products, type Product } from "@/data/products";

type Row = { label: string; values: Record<string, string | boolean> };

const matrix: Row[] = [
  { label: "Connectivity", values: {
    "vltd-4g-device": "4G LTE + 2G fallback",
    "vltd-2g-device": "2G GSM/GPRS",
    "v5-basic-gps-device": "2G GSM/GPRS",
    "capacitive-fuel-sensor": "Wired to tracker",
  }},
  { label: "Tracking Features", values: {
    "vltd-4g-device": "Live · SOS · Driver score",
    "vltd-2g-device": "Live · Route history",
    "v5-basic-gps-device": "Live · Ignition · Movement",
    "capacitive-fuel-sensor": "Fuel level · Theft alerts",
  }},
  { label: "AIS-140 Compliance", values: {
    "vltd-4g-device": true, "vltd-2g-device": true,
    "v5-basic-gps-device": false, "capacitive-fuel-sensor": false,
  }},
  { label: "Fuel Monitoring", values: {
    "vltd-4g-device": false, "vltd-2g-device": false,
    "v5-basic-gps-device": false, "capacitive-fuel-sensor": true,
  }},
  { label: "Web Dashboard", values: {
    "vltd-4g-device": true, "vltd-2g-device": true,
    "v5-basic-gps-device": true, "capacitive-fuel-sensor": true,
  }},
  { label: "Mobile App", values: {
    "vltd-4g-device": true, "vltd-2g-device": true,
    "v5-basic-gps-device": true, "capacitive-fuel-sensor": true,
  }},
  { label: "Warranty", values: {
    "vltd-4g-device": "1 year",
    "vltd-2g-device": "1 year",
    "v5-basic-gps-device": "1 year",
    "capacitive-fuel-sensor": "1 year",
  }},
];

function Cell({ v, active }: { v: string | boolean; active: boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <span className={`inline-flex size-7 rounded-full items-center justify-center ${active ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}>
        <Check className="size-4" strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex size-7 rounded-full items-center justify-center bg-white/5 text-white/25">
        <Minus className="size-4" />
      </span>
    );
  }
  return (
    <span className={`text-sm ${active ? "text-white font-semibold" : "text-white/70"} font-mono`}>
      {v}
    </span>
  );
}

export function ProductCompare({ product }: { product: Product }) {
  const cols = [product, ...products.filter((p) => p.slug !== product.slug)];

  return (
    <section id="compare" className="relative py-24 bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(14,165,233,0.7) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
            06 · Compare
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight">
            How it stacks up across the range.
          </h2>
          <p className="mt-4 text-white/60 font-light">
            {product.name} shown against every other Fuel Tracks product, side by side.
          </p>
        </div>

        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-md border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-[10px] font-mono tracking-[0.22em] text-white/40 uppercase w-56">
                    Feature
                  </th>
                  {cols.map((p) => {
                    const active = p.slug === product.slug;
                    return (
                      <th
                        key={p.slug}
                        className={`p-5 align-bottom ${active ? "bg-primary/10 border-x border-primary/30" : ""}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {active ? (
                            <span className="inline-flex w-fit rounded-sm bg-primary text-primary-foreground text-[9px] font-mono tracking-[0.2em] uppercase px-2 py-0.5">
                              Current
                            </span>
                          ) : (
                            <span className="inline-flex w-fit text-[9px] font-mono tracking-[0.2em] uppercase text-white/40 px-2 py-0.5">
                              &nbsp;
                            </span>
                          )}
                          <Link
                            to="/products/$slug"
                            params={{ slug: p.slug }}
                            className={`text-sm font-display font-bold leading-tight hover:text-primary transition-colors ${
                              active ? "text-primary" : "text-white"
                            }`}
                          >
                            {p.name}
                          </Link>
                          <span className="text-[10px] font-mono text-white/40">{p.sku}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "" : "bg-white/[0.02]"}>
                    <td className="p-5 text-sm font-semibold text-white/90">{row.label}</td>
                    {cols.map((p) => {
                      const active = p.slug === product.slug;
                      return (
                        <td
                          key={p.slug}
                          className={`p-5 ${active ? "bg-primary/10 border-x border-primary/30" : ""}`}
                        >
                          <Cell v={row.values[p.slug]} active={active} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
