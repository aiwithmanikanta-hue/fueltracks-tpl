import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import fuelTracksLogo from "@/assets/fuel-tracks-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 bg-card rounded-xl px-3 py-2 w-fit shadow-soft">
              <img src={fuelTracksLogo.url} alt="Fuel Tracks Technologies Pvt Ltd" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              India's premium GPS-based vehicle tracking and fuel monitoring solutions. Fuel Monitoring Now Online.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, label: "Fuel Tracks on LinkedIn" },
                { Icon: Twitter, label: "Fuel Tracks on Twitter" },
                { Icon: Facebook, label: "Fuel Tracks on Facebook" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="size-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu + Support */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-foreground tracking-wider">MENU</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {[
                  { l: "Home", h: "/" },
                  { l: "About Us", h: "/about" },
                  { l: "Products", h: "/products" },
                  { l: "Services", h: "/services" },
                  { l: "Contact Us", h: "/contact" },
                ].map((l) => (
                  <li key={l.l}><Link to={l.h} className="nav-link hover:text-primary transition-colors">{l.l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground tracking-wider">SUPPORT</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {["Live Login", "Admin Login", "FAQ", "Sitemap"].map((l) => (
                  <li key={l}><a href="#" className="nav-link hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider">CONTACT US</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex gap-2.5"><MapPin className="size-4 mt-0.5 text-primary shrink-0" /> <a href="https://maps.app.goo.gl/oSUTUMM2ynC87BKTA" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fuel Tracks Technologies,<br />Hyderabad, India</a></li>
              <li className="flex gap-2.5"><Phone className="size-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <a href="tel:+917337433351" className="block hover:text-primary">+91 73374 33351</a>
                  <a href="tel:+917337433352" className="block hover:text-primary">+91 73374 33352</a>
                  <a href="tel:04035651100" className="block hover:text-primary">040-35651100</a>
                </div>
              </li>
              <li className="flex gap-2.5"><Mail className="size-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <a href="mailto:info@fueltracks.in" className="block hover:text-primary">info@fueltracks.in</a>
                  <a href="mailto:fueltrackstpl@gmail.com" className="block hover:text-primary">fueltrackstpl@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© 2026 by FUEL TRACKS TECHNOLOGIES PVT LTD. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-3 inset-x-3 z-40 grid grid-cols-2 gap-2">
        <a href="tel:+917337433351" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-glow text-sm">
          <Phone className="size-4" /> Call Now
        </a>
        <a href="https://wa.me/917337433351" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold shadow-elegant text-sm">
          <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8.9-1 1.1c-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.7l.5-.5c.2-.2.2-.3.4-.5.1-.2.1-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5-1.4c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.1 15 3.6 13.5 3.6 12c0-4.6 3.7-8.4 8.4-8.4s8.4 3.8 8.4 8.4c0 4.6-3.8 8.4-8.4 8.4z"/></svg>
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
