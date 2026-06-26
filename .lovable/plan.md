# Product Details Pages — 4 Dedicated Routes

## Current state

- The detail route `/products/$slug` already exists with a full template: Hero, Overview, Features, Specs, How It Works, Dashboard Preview, Benefits, Industries, FAQ, Testimonials, CTA, Related Products, Contact. All sections read from `src/data/products.ts`.
- Products page lists 4 cards but the data file only has 3 entries with **mismatched** content (e.g. card "VLTD 4G Device" loads data titled "VLTD-AIS GPS Tracking Device"; card "VLTD 2G Device" loads data titled "Smart HD CCTV Security Camera"). V5 Basic GPS has no detail data at all → broken page.
- Product cards have no "View Details" button — only WhatsApp.

## Changes

### 1. Rewrite `src/data/products.ts`

Replace the 3 entries with 4 entries matching the requested slugs and unique content per product:

| Slug | Name | Image |
|---|---|---|
| `vltd-4g-device` | VLTD 4G Device | `gps-device.png` |
| `vltd-2g-device` | VLTD 2G Device | `fleet-camera.png` (current 2G card image) |
| `v5-basic-gps-device` | V5 Basic GPS Device | `v5-basic-gps.png` |
| `capacitive-fuel-sensor` | Capacitive Fuel Sensor | `fuel-sensor.png` |

For each product, author unique:
- `tagline`, `description`, `highlights` (4 chips), `overview` (4 cards)
- `features` (8 cards from the spec list per product in the brief)
- `specs` (Device Type, Connectivity, Network, GPS Accuracy, Power Supply, Operating Voltage, Installation Type, Platform Support, Warranty)
- `steps` (How It Works, 5 steps)
- `benefits` (6 cards — Improve Fleet Visibility, Reduce Fuel Costs, Enhance Vehicle Security, etc.)
- `industries` (8 — Logistics, School Buses, Transport, Construction, Mining, Fuel Tankers, Delivery, Corporate Fleets)
- `faqs` (6 product-specific Q&A)
- `related` → the other 3 slugs
- `images` → reuse main image (single-item gallery for now; structure supports future uploads)

Keep `Product` type and shared `baseTestimonials` unchanged.

### 2. Update `src/routes/products.tsx`

- Rewrite the `products` array slugs/names to match new data: `vltd-4g-device`, `vltd-2g-device`, `v5-basic-gps-device`, `capacitive-fuel-sensor`.
- Update JSON-LD product names accordingly.
- Add a **View Details** button to `ProductCard` linking to `/products/$slug` via TanStack `<Link to="/products/$slug" params={{ slug: p.slug }}>` — placed alongside the existing WhatsApp buttons (primary action on the left).

### 3. No changes needed elsewhere

- All detail page section components (`ProductHero`, `ProductFeatures`, `ProductSpecs`, `ProductFAQ`, `RelatedProducts`, `ProductContact`, etc.) already consume the `Product` shape correctly.
- `ProductSpecs` and `ProductFAQ` already use Radix Accordion in single-open mode (verified by file structure).
- WhatsApp enquiry already dynamically inserts product name via `buildProductEnquiryUrl(product.name)`.
- Route `/products/$slug` already handles 404 with a friendly Not Found component.

## Technical notes

- All 4 slugs become valid because `getProduct(slug)` looks up by `slug` field.
- No new routes are needed — TanStack's existing `/products/$slug` dynamic route serves every product.
- Image gallery thumbnails appear only when `images.length > 1`; we can expand later by adding more URLs to each product's `images` array.

## Out of scope

- New photography / additional gallery images per product (structure ready; assets can be uploaded later).
- Backend changes — purely frontend/content.
