# Update Google Maps location sitewide

Resolved short link `https://maps.app.goo.gl/oSUTUMM2ynC87BKTA` →
Place: **Fuel Tracks**, coords **17.3454351, 78.5239719**.

Single shared link constant will be used everywhere for consistency:
`https://maps.app.goo.gl/oSUTUMM2ynC87BKTA` (mobile devices auto-open the Google Maps app via this short link; desktop opens in browser).

## Changes

### 1. `src/components/sections/Contact.tsx`
- Replace the iframe `src` with a new embed centered on the new coordinates (zoom ~17, marker on the exact spot), update `title` to "Fuel Tracks Technologies office location".
- Update the `<Info icon={MapPin} label="Office" value="..." />` value to a more specific address line (keep "Hyderabad, Telangana, India" suffix) and wrap it in an `<a>` to the short link (new tab, `rel="noopener noreferrer"`, hover styling consistent with other links).
- Add a "Get Directions" button under the map (or convert the existing map card into a clickable surface) linking to the short link.

### 2. `src/components/Footer.tsx`
- Wrap the address line (`Fuel Tracks Technologies, Hyderabad, India`) in an `<a href="https://maps.app.goo.gl/oSUTUMM2ynC87BKTA" target="_blank" rel="noopener noreferrer">` with hover:text-primary.

### 3. `src/routes/__root.tsx`
- No coordinate change needed in JSON-LD beyond what already lists Hyderabad/Telangana/IN. (Skip unless we want to add geo lat/long — will add `geo` block with the new lat/long for SEO accuracy.)

## Technical notes
- New embed URL pattern:
  `https://www.google.com/maps?q=17.3454351,78.5239719&hl=en&z=17&output=embed`
  (lightweight, no API key, marker pinned on the coordinate, works on all devices, responsive via existing 100%/100% sizing).
- Mobile behavior: `maps.app.goo.gl` short links are handled by the Google Maps app on Android/iOS automatically; no extra logic required.
- Keep all existing styling (glass-strong card, rounded-3xl, h-[260px], filter inversion) so the visual design stays identical.
- No business logic, routing, or data-layer changes.
