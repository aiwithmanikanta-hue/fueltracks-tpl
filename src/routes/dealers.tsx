import { createFileRoute } from "@tanstack/react-router";
import { DealerProgram } from "@/components/sections/DealerProgram";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export const Route = createFileRoute("/dealers")({
  head: () => ({
    meta: [
      { title: "Dealer Program — Fuel Tracks Technologies" },
      { name: "description", content: "Join 500+ Fuel Tracks dealers. High commissions, installation training, technical support, marketing and protected territories." },
      { property: "og:title", content: "Become a Fuel Tracks Dealer" },
      { property: "og:description", content: "Build a profitable GPS & fuel-monitoring business with India's premium IoT platform." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/dealers" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/dealers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How does fuel monitoring work?", acceptedAnswer: { "@type": "Answer", text: "We install a calibrated capacitive fuel-level sensor inside the tank that reports real-time levels to our cloud." } },
            { "@type": "Question", name: "How accurate is the GPS tracking?", acceptedAnswer: { "@type": "Answer", text: "Multi-constellation GNSS (GPS + GLONASS) with 2.5-meter accuracy and 10-second refresh." } },
            { "@type": "Question", name: "Is a mobile app available?", acceptedAnswer: { "@type": "Answer", text: "Yes — native iOS and Android apps for fleet owners, dispatchers, drivers and parents." } },
            { "@type": "Question", name: "How does theft detection work?", acceptedAnswer: { "@type": "Answer", text: "Geo-fence breaches, after-hours ignition, fuel drains and SIM tampering trigger instant alerts." } },
            { "@type": "Question", name: "Can I track multiple vehicles?", acceptedAnswer: { "@type": "Answer", text: "From 1 to 10,000+ vehicles on a single dashboard with role-based access." } },
          ],
        }),
      },
    ],
  }),
  component: DealersPage,
});

function DealersPage() {
  return (
    <div className="pt-24">
      <DealerProgram />
      <FAQ />
      <Contact />
    </div>
  );
}
