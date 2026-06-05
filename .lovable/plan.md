# Contact Page Redesign + WhatsApp Lead Enquiry

## What changes

Rebuild the Contact form so a single "Send Enquiry on WhatsApp" click:
1. Validates required fields,
2. Saves the lead to Supabase (`contact_leads`),
3. Opens WhatsApp (app on mobile, Web on desktop) with a pre-filled structured message to the company number `+91 73374 33351` (already in `src/lib/whatsapp.ts`).

## Form fields

| Field | Required | Control |
|---|---|---|
| Full Name | ✓ | text |
| Phone Number | ✓ | tel (10-digit India validation) |
| Email | — | email |
| City / Location | — | text |
| Product Interested In | ✓ | select: GPS Tracking Device, Fuel Sensor, AIS-140 Device, Fleet Management Software, School Bus Tracking, Other |
| Message / Requirement | ✓ | textarea |

Inline error messages below each field; disable submit while sending.

## WhatsApp message format

```
Hello Fuel Tracks Team,

I would like to enquire about your services.

Name: {name}
Phone Number: {phone}
Email: {email or "—"}
Location: {city or "—"}
Product Interested In: {product}

Message:
{message}

Please contact me with more information.

Thank you.
```

Open `https://wa.me/917337433351?text=<encoded>` in a new tab. `wa.me` automatically routes to the app on mobile and WhatsApp Web on desktop.

## Supabase persistence

Reuse the existing `submitContactLead` server function (`src/lib/contact.functions.ts`) and extend it to accept `city` and `product` (stored in existing `subject` field as `product` value, plus appended to `message`, OR added as new columns via migration).

**Schema decision:** add two new nullable columns to `contact_leads`:
- `city text`
- `product text`

Migration runs before code changes that depend on the columns.

The form calls the server fn first; on success it then opens the WhatsApp URL. If the DB write fails, still open WhatsApp (lead capture must not block enquiry) but log the error.

## UI redesign

Keep the existing two-column layout (form left, contact info + map right) and the glassmorphism look already in `Contact.tsx`. Refinements:
- Larger, clearer labels with required-asterisks
- Floating helper text under inputs
- Replace the generic blue "Send Message" with a green WhatsApp-branded button (`WhatsAppIcon` already exists at `src/components/icons/WhatsAppIcon.tsx`): "Send Enquiry on WhatsApp"
- Add a small secondary line: "Opens WhatsApp with your details pre-filled"
- Tighter spacing, consistent border radius, focus rings already in design tokens

No layout/section reordering; the contact-info card, map, and quick-action buttons on the right stay.

## Files touched

- `supabase/migrations/<timestamp>_contact_leads_add_city_product.sql` — add `city`, `product` columns
- `src/lib/contact.functions.ts` — extend Zod schema + insert with new fields
- `src/components/sections/Contact.tsx` — new fields, validation, WhatsApp submit handler, button restyle
- (No changes to `Header`, `Footer`, routes, or other sections.)

## Out of scope

- No changes to other pages, product pages, or the floating WhatsApp button.
- No auth changes.
- No new routes.

## Validation / done criteria

- All 4 required fields show inline errors when empty.
- Submit writes a row to `contact_leads` with all fields populated.
- Submit opens `wa.me` URL in a new tab with the exact message template above, URL-encoded.
- Works on mobile (deep-links to WhatsApp app) and desktop (WhatsApp Web).
- `npm run build` passes with zero TS errors.
