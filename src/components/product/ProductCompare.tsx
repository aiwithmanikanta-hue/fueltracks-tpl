import { Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      <span className="inline-flex size-7 rounded-full items-center justify-center bg-muted text-muted-foreground/50">
        <Minus className="size-4" />
      </span>
    );
  }
  return (
    <span className={`text-sm ${active ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
      {v}
    </span>
  );
}

export function ProductCompare({ product }: { product: Product }) {
  const cols = [product, ...products.filter((p) => p.slug !== product.slug)];

  return (
    <section id="compare" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Compare"
          title="How it stacks up across the range."
          description={`${product.name} shown against every other Fuel Tracks product, side by side.`}
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto card-premium">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-xs font-semibold tracking-wider text-muted-foreground uppercase w-56">
                    Feature
                  </th>
                  {cols.map((p) => {
                    const active = p.slug === product.slug;
                    return (
                      <th
                        key={p.slug}
                        className={`p-5 align-bottom ${active ? "bg-primary/5" : ""}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {active ? (
                            <span className="inline-flex w-fit rounded-full bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5">
                              Current
                            </span>
                          ) : (
                            <span className="inline-flex w-fit text-[10px] font-semibold tracking-wider uppercase text-transparent px-2 py-0.5">
                              &nbsp;
                            </span>
                          )}
                          <Link
                            to="/products/$slug"
                            params={{ slug: p.slug }}
                            className={`text-sm font-semibold leading-snug hover:text-primary transition-colors ${active ? "text-foreground" : "text-foreground/80"}`}
                          >
                            {p.name}
                          </Link>
                          <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                            {p.sku}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, ri) => (
                  <tr key={row.label} className={ri < matrix.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-5 text-sm font-semibold text-foreground">
                      {row.label}
                    </td>
                    {cols.map((p) => {
                      const active = p.slug === product.slug;
                      const v = row.values[p.slug];
                      return (
                        <td key={p.slug} className={`p-5 ${active ? "bg-primary/5" : ""}`}>
                          <Cell v={v} active={active} />
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
