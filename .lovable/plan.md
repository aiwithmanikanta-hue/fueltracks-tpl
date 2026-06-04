## Goal

Replace the 8 industry images in the "Industries We Serve" section (`src/components/sections/Industries.tsx`) with newly generated, premium, India-authentic visuals at 1055×1055.

## Images to generate (1055×1055, premium quality, photorealistic India context)

1. **Logistics & Transport** — Indian Tata/Ashok Leyland cargo truck on a Telangana highway, subtle GPS/logistics hub backdrop.
2. **School Buses** — Yellow Indian school bus outside a Hyderabad school campus, safety/tracking feel.
3. **Mining** — Indian mining dump trucks (BEML/Tata) in an open-pit mine, monitoring overlay subtle.
4. **Construction** — Excavators, tippers, JCBs at a large Indian infrastructure site.
5. **Car Rentals** — Fleet of Indian rental sedans/SUVs (Swift Dzire, Innova) at a professional business lot.
6. **Fuel Tankers** — Indian fuel tanker on a national highway with fuel-monitoring visualization.
7. **Delivery Services** — Indian delivery vans/mini-cargo (Tata Ace, Mahindra) in busy Hyderabad street.
8. **Corporate Fleets** — Corporate Innovas/Toyotas outside a modern Indian office campus.

Style guide applied to every prompt: photorealistic, cinematic corporate, natural daylight, consistent warm Indian palette, shallow DOF, no text, no logos, enterprise-grade, NOT American/European vehicles.

## Implementation

1. Generate 8 images via `imagegen--generate_image` (premium tier, 1056×1056 — must be multiple of 32, closest to 1055), saved as `src/assets/ind-{slug}.jpg` (overwriting the existing 8 industry JPGs to keep imports unchanged).
2. Verify visually by viewing each generated file; regenerate any that include foreign vehicles or look AI-artificial.
3. No code changes needed in `Industries.tsx` since filenames are reused — the existing imports automatically pick up new images.

## Technical notes

- Existing files: `src/assets/ind-logistics.jpg`, `ind-school.jpg`, `ind-mining.jpg`, `ind-construction.jpg`, `ind-rental.jpg`, `ind-tanker.jpg`, `ind-delivery.jpg`, `ind-corporate.jpg`.
- Use `model: "standard"` (premium is reserved for typography-heavy images; standard delivers photorealistic hero-quality at lower cost). Confirm if you'd prefer `premium`.
- Dimensions: 1056×1056 (imagegen requires multiples of 32; 1055 isn't valid). The component renders them in a 4:5 aspect container with `object-cover`, so square source works fine.

## Confirm before I build

- OK to overwrite the 8 existing `ind-*.jpg` files?
- Use `standard` quality (faster/cheaper, photoreal) or `premium` (highest fidelity, slower)?
