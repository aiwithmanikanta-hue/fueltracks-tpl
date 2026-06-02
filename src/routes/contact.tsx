import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fuel Tracks Technologies Pvt Ltd" },
      { name: "description", content: "Get in touch with Fuel Tracks for a demo, custom quote or dealership info. Hyderabad-based, serving fleets across India." },
      { property: "og:title", content: "Contact Fuel Tracks" },
      { property: "og:description", content: "Talk to our team — demos, quotes and dealership inquiries." },
      { property: "og:url", content: "https://fuel-track-cosmos.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://fuel-track-cosmos.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
