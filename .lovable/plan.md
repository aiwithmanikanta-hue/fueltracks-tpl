# Product Details — Fix & Redesign Plan

## 1. Diagnose the "View Details doesn't load" report

The current route in the preview is `/products/vltd-4g-device`, which means routing already works. The only console signal is a benign framer-motion SSR hydration warning (`opacity: 0` vs `"0"`), not a fetch or route failure.

**Action:** Before redesigning, I'll do a full audit:
- Confirm all 4 slugs (`vltd-4g-device`, `vltd-2g-device`, `v5-basic-gps-device`, `capacitive-fuel-sensor`) resolve to real `Product` entries in `src/data/products.ts`.
- Confirm `getProduct(slug)` returns the correct object and `throw notFound()` fires cleanly for bad slugs.
- Fix the hydration warning by moving framer-motion `initial`/`animate` off SSR-critical headings (or wrapping in a client-only `Reveal`), so the page paints without React warnings on refresh.

If any product page is genuinely blank for a user, it is almost certainly this hydration issue or a stale route cache — the fix above resolves both.

## 2. Central product data — already in place

`src/data/products.ts` is already the single source of truth (used by `/products` grid, `/products/$slug` detail page, and `RelatedProducts`). No new database needed. I will:
- Add missing optional fields per product: `gallery: string[]`, `brochureUrl?: string`, `whatsappMessage?: string` (falls back to the existing `buildProductEnquiryUrl`).
- Keep the existing `Product` shape backward compatible.

## 3. Redesign the Product Details page

Keep Fuel Tracks branding, palette, animations, and the products card exactly as they are. Only `/products/$slug` and its child components change.

New page structure (top to bottom):

```text
[ Breadcrumbs ]
┌─────────────────────────┬──────────────────────┐
│  Gallery                │  Product Hero        │
│  - Large image + zoom   │  - Name, SKU chip    │
│  - Thumbnail strip      │  - Tagline           │
│  - Prev/Next            │  - Highlight pills   │
│                         │  - Get Quote         │
│                         │  - WhatsApp Enquiry  │
│                         │  - Download Brochure │
└─────────────────────────┴──────────────────────┘
[ Overview: 4 cards — What / How / Why / Who ]
[ Key Features — existing card grid ]
[ Technical Specifications — accordion, single-open ]
[ How It Works — existing steps ]
[ Applications / Industries ]
[ Benefits ]
[ FAQs — accordion, single-open ]
[ Related Products ]
[ Contact CTA — WhatsApp · Call · Request Demo ]
```

Components to add / update (no changes to Header, Footer, Hero page, or `ProductCard`):
- `ProductHero.tsx` — split into left `ProductGallery` (new) + right `ProductHeroInfo`. Adds Download Brochure button next to existing Get Quote / WhatsApp.
- `ProductGallery.tsx` (new) — main image with hover-zoom, thumbnail strip, keyboard/arrow nav, responsive stack on mobile.
- `ProductSpecs.tsx` / `ProductFAQ.tsx` — already single-open Radix accordions; verify `type="single" collapsible`.
- `ProductDetailSkeleton.tsx` (new) — skeleton shown via route `pendingComponent` so users never see a blank frame on slow networks.

## 4. Loading + error UX

- Add `pendingMs: 100`, `pendingComponent: ProductDetailSkeleton` on the `/products/$slug` route.
- Keep existing `notFoundComponent` (Product Not Found with suggested slugs) and `errorComponent` (retry via `router.invalidate()`).

## 5. Responsive & performance

- Two-column hero collapses to single column at `md:`.
- All images use `loading="lazy"` (hero uses `fetchpriority="high"`) and `decoding="async"`.
- Gallery thumbnails preloaded; main image swap is instant.
- No new dependencies.

## 6. Final QA checklist

For each of the 4 products I'll verify: View Details navigates, correct data renders, gallery works, specs accordion opens one-at-a-time, FAQs same, WhatsApp message contains the correct product name, related products link out, refresh works, back button works, no console errors.

## Out of scope (explicitly untouched)

- Website design tokens, colors, gradients in `src/styles.css`
- Fuel Tracks branding, logo, typography
- Existing framer-motion `Reveal` animations
- `ProductCard` layout on `/products` (already finalized in your last edit — black View Details + green Enquire side-by-side stays)

## Files to change

- `src/data/products.ts` — add `gallery`, `brochureUrl`, optional `whatsappMessage`
- `src/routes/products.$slug.tsx` — add `pendingComponent`, wire skeleton
- `src/components/product/ProductHero.tsx` — split into gallery + info, add brochure button
- `src/components/product/ProductGallery.tsx` — NEW
- `src/components/product/ProductDetailSkeleton.tsx` — NEW
- `src/components/product/ProductSpecs.tsx` — confirm single-open accordion
- `src/components/product/ProductFAQ.tsx` — confirm single-open accordion
- `src/components/product/ProductContact.tsx` — add Call + Request Demo alongside WhatsApp
