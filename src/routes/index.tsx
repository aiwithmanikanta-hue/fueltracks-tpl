import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Industries } from "@/components/sections/Industries";
import { MobileApp } from "@/components/sections/MobileApp";
import { DealerProgram } from "@/components/sections/DealerProgram";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTABand } from "@/components/sections/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fuel Tracks — Smart GPS Vehicle Tracking & Fuel Monitoring" },
      { name: "description", content: "India's premium GPS tracking and real-time fuel monitoring platform. Track vehicles, prevent theft, manage fleets — used by 500+ dealers and 10,000+ vehicles." },
      { name: "keywords", content: "GPS Tracking, Fuel Monitoring System, Vehicle Tracking System, Fleet Management, GPS Device, Fuel Theft Detection" },
      { property: "og:title", content: "Fuel Tracks — Smart GPS & Fuel Monitoring" },
      { property: "og:description", content: "Real-time GPS tracking and fuel monitoring for fleets across India." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How does fuel monitoring work?", acceptedAnswer: { "@type": "Answer", text: "We install a calibrated capacitive fuel-level sensor inside the tank that reports real-time levels to our cloud. Refills, drains and discrepancies are detected instantly and shown on your dashboard." } },
            { "@type": "Question", name: "How accurate is the GPS tracking?", acceptedAnswer: { "@type": "Answer", text: "Our devices use multi-constellation GNSS (GPS + GLONASS) with 2.5-meter accuracy and refresh location every 10 seconds with optional 1-second mode for high-value assets." } },
            { "@type": "Question", name: "Is a mobile app available?", acceptedAnswer: { "@type": "Answer", text: "Yes — native iOS and Android apps for fleet owners, dispatchers, drivers and parent (school bus) profiles, all included with your subscription." } },
            { "@type": "Question", name: "How does theft detection work?", acceptedAnswer: { "@type": "Answer", text: "Geo-fence breaches, after-hours ignition, fuel drains and SIM tampering all trigger instant SMS, email and push notifications. Optional remote engine immobilizer is available." } },
            { "@type": "Question", name: "Can I track multiple vehicles?", acceptedAnswer: { "@type": "Answer", text: "From 1 to 10,000+ vehicles on a single dashboard. Group by region, driver or asset type with role-based access for your team." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Features />
      <DashboardShowcase />
      <Industries />
      <MobileApp />
      <DealerProgram />
      <Testimonials />
      <FAQ />
      <CTABand />
      <Contact />
    </>
  );
}
