## Goal

Make every product image surface use a consistent square (1:1) container, capped at 1055×1055 on desktop, scaling down cleanly on tablet and mobile, with sharp non-distorted images.

## Approach

Introduce a single shared wrapper class and apply it everywhere a product image (or its icon stand-in) is rendered. No image re-encoding — the source assets are already high-res; we just constrain the container and use `object-contain` so nothing stretches.

## Shared container rules

- `aspect-ratio: 1 / 1` (square)
- `max-width: 1055px`, `width: 100%`, `margin-inline: auto` (center, responsive scale-down)
- Image inside: `width:100%; height:100%; object-fit: contain; object-position: center;`
- Light neutral background so transparent PNGs read cleanly
- `loading="lazy"` for off-screen, `loading="eager"` + `fetchpriority="high"` for the hero's primary image

## Changes

1. **`src/routes/products.tsx` — ProductCard visual block** (lines 119–132)
   - Replace the fixed `h-44` icon strip with a square container: `aspect-square w-full max-w-[1055px] mx-auto`, keeping the existing gradient/grid background and centered icon (per your choice: keep icons, square framing only).

2. **`src/components/product/ProductHero.tsx` — main image + thumbnails**
   - Main image card already uses `aspect-square`; add `max-w-[1055px] mx-auto` and keep `object-contain`.
   - Thumbnails: change from `size-20 / size-[88px]` to a small square (`aspect-square w-20 md:w-24`) with `object-contain` (already set).

3. **`src/components/product/RelatedProducts.tsx` — thumbnail**
   - Change `size-24` block to `aspect-square w-24` with `object-contain` (already set), centered.

4. **Any other product image surface** — quick sweep of `src/components/product/*` and `src/components/sections/*` for `<img>` tags rendering product photos; apply the same square + `object-contain` rule. (Most other product detail sections are text/feature cards, not photos.)

No data, routing, or business-logic changes. Pure presentation.

## Out of scope

- Generating/replacing image assets
- Changing the product card's icon to a real photo (you chose to keep icons)
- Touching non-product imagery (logo, hero illustrations on home/about)
