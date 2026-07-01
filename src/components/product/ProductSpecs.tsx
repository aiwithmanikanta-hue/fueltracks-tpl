import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/data/products";

export function ProductSpecs({ product }: { product: Product }) {
  return (
    <section id="specs" className="relative py-24 border-y border-navy/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-primary font-bold">
              04 · Specifications
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-navy leading-tight tracking-tight">
              The technical details, neatly laid out.
            </h2>
            <p className="mt-4 text-navy/60 font-light">
              Every number verified. Nothing hidden in fine print.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 border border-navy/15 rounded-md bg-white text-xs font-mono tracking-widest uppercase text-navy/70">
              <span className="size-1.5 rounded-full bg-primary" />
              {product.specs.length} data points
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <Accordion
                type="single"
                collapsible
                defaultValue={`${product.slug}-spec-0`}
                className="rounded-md border border-navy/10 bg-white overflow-hidden divide-y divide-navy/10"
              >
                {product.specs.map((s, i) => {
                  const Icon = s.icon ?? Settings;
                  const value = `${product.slug}-spec-${i}`;
                  return (
                    <AccordionItem
                      key={value}
                      value={value}
                      className="group px-5 border-0 data-[state=open]:bg-primary/[0.04]"
                    >
                      <AccordionTrigger className="py-5 hover:no-underline">
                        <div className="flex items-center gap-4 text-left flex-1">
                          <span className="text-[10px] font-mono tracking-widest text-navy/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="size-9 shrink-0 rounded-md bg-primary/10 grid place-items-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                            <Icon className="size-4" />
                          </div>
                          <span className="text-base font-display font-bold text-navy leading-snug">
                            {s.label}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-[68px] pb-5 text-base text-navy/75 font-mono">
                        {s.value}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
