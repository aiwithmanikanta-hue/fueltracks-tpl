import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Settings } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductSpecs({ product }: { product: Product }) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Technical Specifications"
          title="Engineered for the road."
          description="Built-in capability you can verify, line by line — nothing buried in fine print."
        />

        <div className="mt-14 mx-auto max-w-3xl">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-3"
            >
              {product.specs.map((s, i) => {
                const Icon = s.icon ?? Settings;
                const value = `${product.slug}-spec-${i}`;
                return (
                  <AccordionItem
                    key={value}
                    value={value}
                    className="group rounded-2xl bg-white border border-navy/10 px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_10px_30px_-15px_rgba(15,23,42,0.15)] transition-all duration-300"
                  >
                    <AccordionTrigger className="py-5 hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="size-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.18em] text-navy/40 uppercase">
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div className="text-base font-display font-bold text-navy leading-snug">
                            {s.label}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 pb-5 text-base text-navy/80">
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
