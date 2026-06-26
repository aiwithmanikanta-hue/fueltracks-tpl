import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Droplet, Monitor, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import fttplGpsDevice from "@/assets/gps-device.png.asset.json";
import fuelSensorImage from "@/assets/fuel-sensor.png.asset.json";
import fleetCameraImage from "@/assets/fleet-camera.png.asset.json";
import v5BasicGpsImage from "@/assets/v5-basic-gps.png.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — GPS, Fuel Sensors & Software | Fuel Tracks" },
      { name: "description", content: "Explore Fuel Tracks products — GPS tracking devices, capacitive fuel level sensors and fleet management software for trucks, buses and heavy vehicles." },
      { property: "og:title", content: "Fuel Tracks Products" },
      { property: "og:description", content: "GPS devices · Capacitive fuel sensors · Fleet management software." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Product", name: "VLTD 4G Device", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "AIS-140 certified 4G vehicle tracker with SOS, driver behaviour and live fleet visibility.", category: "GPS Tracking" },
            { "@type": "Product", name: "VLTD 2G Device", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Reliable, budget-friendly AIS-140 ready tracker for essential real-time fleet visibility.", category: "GPS Tracking" },
            { "@type": "Product", name: "V5 Basic GPS Device", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Compact, easy-to-install GPS tracker for everyday vehicle security.", category: "GPS Tracking" },
            { "@type": "Product", name: "Capacitive Fuel Sensor", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Premium capacitive fuel level sensor with ±1–2% accuracy, 1mm resolution and tamper-proof aluminium casing.", category: "Fuel Level Sensor" },
          ],
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    slug: "vltd-4g-device",
    icon: Cpu,
    image: fttplGpsDevice.url,
    name: "VLTD 4G Device",
    tag: "FT-VLTD-4G",
    desc: "AIS-140 certified 4G vehicle tracker with SOS, driver behaviour monitoring and live fleet visibility.",
    cta: "View Details",
  },
  {
    slug: "vltd-2g-device",
    icon: Monitor,
    image: fleetCameraImage.url,
    name: "VLTD 2G Device",
    tag: "FT-VLTD-2G",
    desc: "Reliable, budget-friendly AIS-140 ready tracker for essential real-time tracking, geofencing and trip history.",
    cta: "View Details",
  },
  {
    slug: "v5-basic-gps-device",
    icon: Cpu,
    image: v5BasicGpsImage.url,
    name: "V5 Basic GPS Device",
    tag: "FT-V5-Basic",
    desc: "Compact, easy-to-install GPS tracker for everyday vehicle security — perfect for cars, bikes and personal vehicles.",
    cta: "View Details",
  },
  {
    slug: "capacitive-fuel-sensor",
    icon: Droplet,
    image: fuelSensorImage.url,
    name: "Capacitive Fuel Sensor",
    tag: "FT-CFS-1000",
    desc: "Premium capacitive fuel level sensor with ±1–2% accuracy, 1 mm resolution and tamper-proof aluminium casing.",
    cta: "View Details",
  },
];

function ProductsPage() {
  return (
    <>
      <PageHeader title="Our Products" crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]} />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-[0.25em] text-primary">HARDWARE + SOFTWARE</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient">Everything you need, end to end.</h2>
            <p className="mt-4 text-muted-foreground">Premium IoT hardware paired with a beautifully simple cloud platform.</p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  return (
    <div className="h-full flex flex-col group bg-white rounded-2xl border border-navy/[0.08] shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Product visual — light, clean background */}
      <div className="relative aspect-square w-full max-w-[1055px] mx-auto -mx-6 -mt-6 mb-5 bg-gradient-to-br from-[#F0F9FF] via-white to-[#E8F4FD] overflow-hidden text-right">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="relative h-full grid place-items-center p-6 bg-transparent">
          {"image" in p && p.image ? (
            <motion.img
              src={p.image}
              alt={p.name}
              loading="lazy"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="max-h-[95%] max-w-[95%] object-contain drop-shadow-2xl"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="size-24 rounded-3xl bg-[var(--gradient-primary)] grid place-items-center shadow-glow group-hover:shadow-glow"
            >
              <p.icon className="size-12 text-primary-foreground" />
            </motion.div>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-navy">{p.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>



        <div className="mt-auto pt-5 flex gap-2">
          <a
            href={buildProductEnquiryUrl(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] px-4 py-3 text-sm font-semibold text-white shadow-glow hover:scale-[1.02] transition-transform"
          >
            <WhatsAppIcon className="size-4" /> Enquire Now <ArrowRight className="size-4" />
          </a>
          <a
            href={buildProductEnquiryUrl(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-navy/10 px-4 py-3 text-sm font-semibold text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-colors"
            aria-label={`WhatsApp enquiry for ${p.name}`}
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
