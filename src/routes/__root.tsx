import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-xl glass px-5 py-2.5 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fuel Tracks Technologies Pvt Ltd",
  url: "https://fuel-track-cosmos.lovable.app",
  logo: "https://fuel-track-cosmos.lovable.app/logo.png",
  description: "GPS vehicle tracking and real-time fuel monitoring solutions for fleets across India.",
  telephone: ["+91-7337433351", "+91-7337433352", "+91-9491666914"],
  email: "info@fueltracks.in",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: 17.3454351, longitude: 78.5239719 },
  hasMap: "https://maps.app.goo.gl/oSUTUMM2ynC87BKTA",
  areaServed: "IN",
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fuel Tracks — Smart GPS & Fuel Monitoring Solutions" },
      { name: "description", content: "Real-time GPS vehicle tracking and fuel monitoring for transport, logistics, school buses and industrial fleets across India." },
      { name: "author", content: "Fuel Tracks Technologies Pvt Ltd" },
      { name: "theme-color", content: "#0F172A" },
      { property: "og:title", content: "Fuel Tracks — Smart GPS & Fuel Monitoring Solutions" },
      { property: "og:description", content: "Real-time GPS vehicle tracking and fuel monitoring for transport, logistics, school buses and industrial fleets across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fuel Tracks — Smart GPS & Fuel Monitoring Solutions" },
      { name: "twitter:description", content: "Real-time GPS vehicle tracking and fuel monitoring for transport, logistics, school buses and industrial fleets across India." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3b50a3fd-9568-462b-938b-2564330c944b/id-preview-9812d14c--8c7ff6b9-7e1d-460c-a9df-2174870245c5.lovable.app-1779362937442.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3b50a3fd-9568-462b-938b-2564330c944b/id-preview-9812d14c--8c7ff6b9-7e1d-460c-a9df-2174870245c5.lovable.app-1779362937442.png" },
      { name: "google-site-verification", content: "dvDm50BEbD8cK_KmNawB9JRtId9AC_uuaptnW1GfwPU" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: orgJsonLd },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
