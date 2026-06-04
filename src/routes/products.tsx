import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cpu, Droplet, Monitor, Download, ArrowRight, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import fttplGpsDevice from "@/assets/fttpl-gps-device.png.asset.json";
import fuelSensorImage from "@/assets/fuel-sensor.png.asset.json";
import fleetCameraImage from "@/assets/fleet-camera.png.asset.json";

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
            { "@type": "Product", name: "VLTD-AIS GPS Tracking Device", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Industrial-grade multi-constellation GPS+GLONASS device with 4G fallback, internal battery and tamper detection.", category: "VLTD-AIS GPS Tracking Device" },
            { "@type": "Product", name: "FT-CFS-1000 Capacitive Fuel Sensor", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Premium capacitive fuel level sensor with ±1–2% accuracy, 1mm resolution and tamper-proof aluminium casing.", category: "Fuel Level Sensor" },
            { "@type": "Product", name: "FT-Cloud Suite Smart HD CCTV Security Camera", brand: { "@type": "Brand", name: "Fuel Tracks" }, description: "Monitor your property 24/7 with crystal-clear HD video and night vision. Get real-time alerts and remote access for enhanced security anytime, anywhere.", category: "Smart HD CCTV Security Camera" },
          ],
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    slug: "gps-tracking-device",
    icon: Cpu,
    image: fttplGpsDevice.url,
    name: "VLTD-AIS GPS Tracking Device",
    tag: "FT-GPS-Pro",
    desc: "Industrial-grade multi-constellation GPS+GLONASS device with 4G fallback, internal battery and tamper detection.",
    cta: "Enquire Now",
    specs: [
      ["Network", "4G LTE + 2G fallback"],
      ["GNSS", "GPS + GLONASS, 2.5 m accuracy"],
      ["Battery", "1100 mAh internal backup"],
      ["I/O", "4 digital + 2 analog inputs"],
      ["Operating Temp", "−20°C to +70°C"],
      ["Certification", "ARAI, IP65"],
    ],
  },
  {
    slug: "fuel-sensor",
    icon: Droplet,
    image: fuelSensorImage.url,
    name: "Capacitive Fuel Sensor",
    tag: "FT-CFS-1000",
    desc: "Premium capacitive fuel level sensor with ±1–2% accuracy, 1mm resolution and tamper-proof aluminium casing.",
    cta: "Download Spec",
    specs: [
      ["Sensor Type", "Capacitive Fuel Level Sensor"],
      ["Accuracy", "±1–2% with idle-field condition"],
      ["Resolution", "1 mm for regular tanks"],
      ["Response", "<5 mins (500 samples/sec)"],
      ["Output", "DC 0–5V / RS-232 / RS-485"],
      ["Protection", "IP67, Aluminium casing"],
      ["Lifetime", "30,000 hours"],
    ],
  },
  {
    slug: "fleet-software",
    icon: Monitor,
    image: fleetCameraImage.url,
    name: "Smart HD CCTV Security Camera",
    tag: "FT-Cloud Suite",
    desc: "Monitor your property 24/7 with crystal-clear HD video and night vision. Get real-time alerts and remote access for enhanced security anytime, anywhere.",
    cta: "Request Demo",
    specs: [
      ["Live Tracking", "Sub-10-second refresh"],
      ["Fuel Reports", "Refill, drain & mileage events"],
      ["Geo-fencing", "Polygon zones with alerts"],
      ["Mobile App", "Native iOS & Android"],
      ["Roles", "Admin, Manager, Driver, Parent"],
      ["Exports", "CSV, PDF, scheduled email"],
    ],
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

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
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
              className="max-h-[80%] max-w-[80%] object-contain drop-shadow-2xl"
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
          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform text-slate-700"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-navy/10 px-4 py-3 text-sm font-semibold text-navy hover:border-primary/40 hover:bg-primary/5 transition-colors"
            aria-label={p.cta}
          >
            {p.cta === "Download Spec" ? <Download className="size-4" /> : <MessageCircle className="size-4" />}
          </Link>
        </div>
      </div>
    </div>
  );
}
