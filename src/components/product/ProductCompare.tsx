import { Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products, type Product } from "@/data/products";

type Row = { label: string; values: Record<string, string | boolean> };

const matrix: Row[] = [
  {
    label: "Connectivity",
    values: {
      "vltd-4g-device": "4G LTE + 2G fallback",
      "vltd-2g-device": "2G GSM/GPRS",
      "v5-basic-gps-device": "2G GSM/GPRS",
      "capacitive-fuel-sensor": "Wired to tracker",
    },
  },
  {
    label: "AIS-140 Compliance",
    values: {
      "vltd-4g-device": true,
      "vltd-2g-device": true,
      "v5-basic-gps-device": false,
      "capacitive-fuel-sensor": false,
    },
  },
  {
    label: "Fuel Monitoring",
    values: {
      "vltd-4g-device": false,
      "vltd-2g-device": false,
      "v5-basic-gps-device": false,
      "capacitive-fuel-sensor": true,
    },
  },
  {
    label: "Mobile App",
    values: {
      "vltd-4g-device": true,
      "vltd-2g-device": true,
      "v5-basic-gps-device": true,
      "capacitive-fuel-sensor": true,
    },
  },
  {
    label: "Web Dashboard",
    values: {
      "vltd-4g-device": true,
      "vltd-2g-device": true,
      "v5-basic-gps-device": true,
      "capacitive-fuel-sensor": true,
    },
  },
  {
    label: "Installation",
    values: {
      "vltd-4g-device": "Professional",
      "vltd-2g-device": "Professional",
      "v5-basic-gps-device": "DIY / 15-min pro",
      "capacitive-fuel-sensor": "Tank-mounted, calibrated",
    },
  },
  {
    label: "Suitable For",
    values: {
      "vltd-4g-device": "Commercial fleets",
      "vltd-2g-device": "Small–mid fleets",
      "v5-basic-gps-device": "Personal / SMB",
      "capacitive-fuel-sensor": "Trucks, tankers, gensets",
    },
  },
];

function Cell({ v }: { v: string | boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <span className="inline-flex size-6 rounded-full bg-primary/10 text-primary items-center justify-center">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex size-6 rounded-full bg-navy/5 text-navy/30 items-center justify-center">
        <Minus className="size-3.5" />
      </span>
    );
  }
  return <span className="text-sm text-navy/80">{v}</span>;
}

export function ProductCompare({ product }: { product: Product }) {
  const cols = [product, ...products.filter((p) => p.slug !== product.slug)];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Compare"
          title="How it stacks up."
          description="See how this product compares against the rest of the Fuel Tracks range."
        />

        <Reveal className="mt-12">
          <div className="overflow-x-auto rounded-2xl border border-navy/10 bg-white shadow-card">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-navy/10">
                  <th className="p-5 text-xs font-mono tracking-wider text-muted-foreground uppercase">
                    Feature
                  </th>
                  {cols.map((p) => {
                    const active = p.slug === product.slug;
                    return (
                      <th
                        key={p.slug}
                        className={`p-5 align-bottom ${
                          active ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          {active && (
                            <span className="inline-flex w-fit rounded-full bg-primary/10 text-primary text-[10px] font-mono tracking-widest uppercase px-2 py-0.5">
                              This product
                            </span>
                          )}
                          <Link
                            to="/products/$slug"
                            params={{ slug: p.slug }}
                            className={`text-sm font-display font-bold leading-tight hover:text-primary transition-colors ${
                              active ? "text-primary" : "text-navy"
                            }`}
                          >
                            {p.name}
                          </Link>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {p.sku}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-navy/[0.015]"}
                  >
                    <td className="p-5 text-sm font-semibold text-navy">
                      {row.label}
                    </td>
                    {cols.map((p) => {
                      const active = p.slug === product.slug;
                      return (
                        <td
                          key={p.slug}
                          className={`p-5 ${active ? "bg-primary/5" : ""}`}
                        >
                          <Cell v={row.values[p.slug]} />
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
