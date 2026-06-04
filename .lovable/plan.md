## Plan: Replace "View Details" with WhatsApp Product Enquiry

### 1. Add a reusable WhatsApp icon component
Create `src/components/icons/WhatsAppIcon.tsx` as a small inline SVG matching the brand green (#25D366). Reuse this in both the product cards and replace the raw SVG in `Footer.tsx` to keep things DRY.

### 2. Build a WhatsApp enquiry link helper
Add a small pure helper (e.g. in `src/lib/whatsapp.ts`) that accepts a product name and returns a `https://wa.me/917337433351?text=...` URL with an encoded enquiry message:

```
Hello Fuel Tracks Team,

I am interested in the {Product Name}.

Could you please provide:
• Product Details
• Pricing Information
• Installation Process
• Demo Availability

Please contact me with more information.

Thank you.
```

The message is dynamically generated from the product name — no hardcoding.

### 3. Update `src/routes/products.tsx` ProductCard
- Replace the primary "View Details" button with an "Enquire on WhatsApp" CTA.
- Style it with the WhatsApp green (`#25D366`) background, white text, and the WhatsApp icon.
- Both the text and the icon open the same `wa.me` link.
- The secondary action button ("Download Spec" / contact icon) stays as-is.

### 4. (Optional cleanup) Update `Footer.tsx`
Swap its inline WhatsApp SVG for the new shared component to keep the icon consistent.

### Out of scope
- No backend changes.
- No new routes or pages.
- The product detail page (`/products/$slug`) remains accessible via direct URL but is no longer linked from the card grid.
