## Phase 2 — Products & Lead Generation

Builds on Phase 1 polish. Keeps brand, logo, colors, navigation, WhatsApp number, Supabase wiring, and existing 3 product detail pages intact. Existing detail page already has Hero / Overview / Features / Specs / How-It-Works / Dashboard / Benefits / Industries / FAQ / Testimonials / CTA / Related / Contact — we polish, don't rebuild.

### 1. Catalog expansion (`src/data/products.ts`)

Add 4 new entries with drafted copy + AI-generated product images:
- `vltd-ais-140-4g-device` — VLTD AIS-140 4G Device
- `vltd-ais-140-2g-device` — VLTD AIS-140 2G Device
- `v5-basic-gps-device` — V5 Basic GPS Device
- `gps-tracking-platform` — GPS Tracking Platform (software)
- `fleet-management-solutions` — Fleet Management Solutions (software)
- `asset-tracking-solutions` — Asset Tracking Solutions (software)

Existing `gps-tracking-device`, `fuel-sensor`, `fleet-software` (CCTV) stay. New entries reuse the Product shape so the existing detail page renders them automatically. Spec values for AIS-140 devices follow standard AIS-140 norms (4G LTE / 2G fallback, GNSS GPS+GLONASS+IRNSS, 2-axis accelerometer, 8hr backup battery, panic button, IP65, ARAI cert) — drafted as reasonable defaults you can edit.

Product images generated via `imagegen` at premium tier (transparent PNGs on neutral background) and stored under `src/assets/products/`. Uploaded as Lovable Assets so they don't bloat the repo.

### 2. Products grid redesign (`src/routes/products.tsx`)

- Replace flat 3-card grid with a filtered catalog: chip filter row (All / Devices / Sensors / Software) above the grid.
- Each card: premium image, name, category tag, short description, 2–3 key feature pills, "View Details" primary button, WhatsApp icon button. Hover: lift + soft shadow + image zoom (already in Phase 1 utilities).
- Uniform aspect ratios across breakpoints, consistent padding, scroll-reveal stagger.
- Cards link to `/products/$slug` via `<Link to params>` (no `<a href>`).

### 3. Detail page polish (existing components, surgical edits)

- **ProductSpecs**: convert to single-open accordion (controlled `openIndex` state) grouped by section.
- **ProductFAQ**: enforce single-open accordion (one `value` controlled).
- **ProductHero**: add a thumbnail gallery + lightbox-style zoom for `product.images`. Reuse `framer-motion`; no new heavy lib. Add a "Download Brochure" button next to Get Quote / WhatsApp. Brochure URL resolves to `/brochures/{slug}.pdf`; when missing, button renders disabled with "Brochure coming soon" tooltip. Detection: a small `BROCHURES` set in `src/data/products.ts` (empty for now) — easy toggle when PDFs are dropped into `/public/brochures/`.
- **ProductHero CTAs**: already pre-fill WhatsApp via `buildProductEnquiryUrl`. Update message template to match the requested format (Product Details / Pricing / Installation / Demo bullets).

### 4. Lead-generation form (`src/components/sections/Contact.tsx` + product `ProductContact`)

- Add **Company Name** field (currently missing). Refresh validation with zod-style rules inline (already validated; just add company).
- Pre-select "Product Interested" when arriving from a product page (already happens via `ProductContact`; verify and extend new product names in the dropdown).
- On submit: insert into `contact_leads` (already wired) + open WhatsApp with the structured message + show inline success card. No DB schema change needed — `contact_leads` already has 14 columns including company. Confirm via a read query before editing.
- Premium UI pass: floating labels, focus rings using brand color, success state with check animation.

### 5. Google Maps on Contact page

- Add a responsive embedded map section above the contact form. Since no office address was provided, use a generic Hyderabad pin (Fuel Tracks HQ — Hyderabad, India) via the free Google Maps `https://www.google.com/maps?...&output=embed` iframe (no API key needed, no connector required). Includes "Get Directions" button (deep-link to Google Maps) and an Office Address / Business Hours card next to the map.
- When you give me the real address later, it's a one-line swap.

### 6. Routing / SEO

- New product slugs route automatically through `/products/$slug` — no new route files needed. Each new product gets its own `head()` meta via existing loader (title, description, og:image from product image).
- Update sitemap if one exists; otherwise no action.

### 7. Performance hygiene (homepage + products only)

- `loading="lazy"` + `decoding="async"` on every product image.
- Preload hero product image in `head().links` on `/products/$slug`.
- Defer non-critical sections of the detail page below the fold (already largely structured; just confirm `<Reveal>` usage is consistent).

### Files touched

- `src/data/products.ts` — add 6 products + brochure set
- `src/routes/products.tsx` — redesigned grid + category filter
- `src/components/product/ProductHero.tsx` — gallery, zoom, brochure button, updated CTA template
- `src/components/product/ProductSpecs.tsx` — single-open accordion
- `src/components/product/ProductFAQ.tsx` — single-open accordion
- `src/components/product/ProductContact.tsx` — add Company field, pre-select product
- `src/components/sections/Contact.tsx` — add Company field, polish
- `src/routes/contact.tsx` — add Map section component
- `src/components/sections/OfficeMap.tsx` (new) — embed + directions + address card
- `src/lib/whatsapp.ts` — refine `buildProductEnquiryUrl` message template
- `src/assets/products/*` — new generated images (uploaded as Lovable Assets)

### Out of scope (later phases)

- About + Services redesign (Phase 3)
- Footer + sitewide perf pass / Lighthouse 95+ enforcement / WebP/WebM pipeline (Phase 4)
- Real brochure PDFs, real office address, real product photography — wire-ready, drop-in later.

### Acceptance

- 9 products visible in the grid, filter chips work, all link to their detail pages with no 404s.
- Each detail page renders hero with gallery + zoom, single-open specs accordion, single-open FAQ accordion, brochure button (disabled state acceptable), WhatsApp with new message format.
- Contact form has Company field and saves to `contact_leads`; success state visible.
- Map renders responsively with Get Directions deep-link.
- No console errors, no broken images (placeholders are real generated images), build passes.
