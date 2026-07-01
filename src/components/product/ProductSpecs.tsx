import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/data/products";

export function ProductSpecs({ product }: { product: Product }) {
  return (
    <section id="specs" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Specifications"
          title="The technical details, neatly laid out."
          description="Every number verified. Nothing hidden in fine print."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              defaultValue={`${product.slug}-spec-0`}
              className="card-premium overflow-hidden divide-y divide-border"
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
                        <div className="size-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                          <Icon className="size-4" />
                        </div>
                        <span className="text-base font-semibold text-foreground leading-snug">
                          {s.label}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[60px] pb-5 text-base text-muted-foreground">
                      {s.value}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
