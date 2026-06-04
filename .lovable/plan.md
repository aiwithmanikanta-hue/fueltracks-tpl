## Findings

This codebase is not Laravel; it is a React/TanStack Start project. The media issue is caused mainly by Lovable asset pointer files such as `*.asset.json` whose URLs point to `"/__l5e/assets-v1/..."`. Those URLs work inside Lovable, but a downloaded ZIP or separate localhost/static host usually cannot serve that Lovable asset route.

Current media inventory:

- 20 Lovable-hosted asset pointers in `src/assets/*.asset.json`
- 2 video pointers: `dashboard-map.mp4.asset.json`, `dashboard-preview.mp4.asset.json`
- Multiple image/icon pointers for product images, maps, logo, Apple logo, RFID/GPS/fuel icons, mobile screenshots, feature charts
- Local bundled assets already exist for many `.webp` images under `src/assets/` and `src/assets/products/`
- `public/` currently contains only `favicon.ico`, `llms.txt`, and `robots.txt`
- There are also external SEO image/logo URLs in `src/routes/__root.tsx`

## Implementation plan

1. **Create a self-contained public asset structure**
   - Add local folders under `public/`:
     ```text
     public/images/
     public/videos/
     public/icons/
     public/products/
     public/animations/
     ```
   - Keep current local `src/assets/*.webp` imports that already bundle correctly unless moving them is needed for consistency.

2. **Download every Lovable-hosted media asset**
   - Read all `*.asset.json` files.
   - Fetch each `url` from the Lovable preview/published asset route.
   - Save the actual binary files locally with stable names, preserving extension/content type.
   - Place videos in `public/videos/`, product/marketing images in `public/images/` or `public/products/`, and small icons/logos in `public/icons/`.

3. **Replace CDN-dependent imports**
   - Remove runtime usage of `.asset.json` URLs from components/data.
   - Replace patterns like:
     ```ts
     import logoAsset from "@/assets/fuel-tracks-logo.png.asset.json";
     <img src={logoAsset.url} />
     ```
     with stable local paths such as:
     ```ts
     const logo = "/icons/fuel-tracks-logo.png";
     <img src={logo} />
     ```
   - Update all affected files, including:
     - `src/components/Footer.tsx`
     - `src/components/sections/About.tsx`
     - `src/components/sections/DashboardShowcase.tsx`
     - `src/components/sections/Features.tsx`
     - `src/components/sections/Hero.tsx`
     - `src/components/sections/MobileApp.tsx`
     - `src/routes/about.tsx`
     - `src/routes/products.tsx`
     - `src/routes/services.tsx`
     - `src/data/products.ts`

4. **Fix external SEO/social media references**
   - Replace `https://fuel-track-cosmos.lovable.app/logo.png` and R2-hosted Open Graph/Twitter image URLs in `src/routes/__root.tsx` with local public asset URLs.
   - Keep metadata content unchanged except the media URLs.

5. **Audit for remaining broken media dependencies**
   - Search for remaining references to:
     - `*.asset.json`
     - `/__l5e/`
     - external media URLs
     - missing `/assets/...` paths
   - Confirm all referenced local files exist exactly, including case-sensitive filenames.

6. **Verify videos and images**
   - Ensure video tags still use `autoPlay`, `muted`, `loop`, and `playsInline` exactly as before.
   - Keep all image alt text, dimensions, classes, animations, and layout unchanged.
   - Do not redesign, recolor, or alter content.

7. **Validation**
   - Run a targeted asset existence audit script.
   - Run the project test/build validation available in this environment after edits.
   - Inspect browser/network output for media 404s if the preview is available.

## Expected result

After implementation, the downloaded project will no longer depend on Lovable asset-serving URLs for images, videos, icons, or media. Running locally, building for production, deploying from GitHub, or uploading the build to another host will use only files included in the project.