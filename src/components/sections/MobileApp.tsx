import { Bell, Fuel, MapPin } from "lucide-react";
import { Reveal } from "../ui/Reveal";
const mobileScreens = { url: "/images/mobile-app-screens.jpeg" };
const appleLogo = { url: "/icons/apple-logo.png" };



export function MobileApp() {
  return (
    <section id="app" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 via-white/30 to-background/80" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Phones */}
          <Reveal className="relative hidden md:block">
            <img
              src={mobileScreens.url}
              alt="Mobile app showing live tracking and fuel data records"
              className="w-full h-auto object-contain"
            />
          </Reveal>


          {/* Content */}
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.2em] text-primary">MOBILE APP</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gradient leading-tight">
              Your fleet, in your pocket.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Native iOS and Android apps with live tracking, fuel alerts, push notifications and one-tap driver communication.
            </p>

            <ul className="mt-8 space-y-3 text-sm">
              {[
                { i: MapPin, t: "Live map with vehicle clustering" },
                { i: Fuel, t: "Real-time fuel level & refill notifications" },
                { i: Bell, t: "Geo-fence, speed and SOS push alerts" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-primary/15 grid place-items-center text-primary"><x.i className="size-4" /></div>
                  {x.t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-3 rounded-xl glass-strong px-5 py-3 hover:border-primary/40 transition-colors">
                <img src={appleLogo.url} alt="Apple" className="size-6 object-contain" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-muted-foreground">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 rounded-xl glass-strong px-5 py-3 hover:border-primary/40 transition-colors">
                <PlayStoreIcon />
                <div className="text-left leading-tight">
                  <div className="text-[10px] text-muted-foreground">Get it on</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}




function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M3 1.5l11.5 10.5L3 22.5V1.5zm12.7 11.5L19 16.3l-2.7 1.5-3.3-3 2.7-1.8zM4.5 23l11-6.3-2.7-2.5L4.5 23zm0-22l8.3 8.8 2.7-2.5L4.5 1z"/>
    </svg>
  );
}
