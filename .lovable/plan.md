# Plan: WhatsApp Enquire Now button

## Scope
Product cards on `/products` only. Replace the two existing buttons (View Details + secondary icon) with a single **Enquire Now** WhatsApp CTA per card. Log each click to Supabase.

## WhatsApp config
- Number: `+91 73374 33351` → `wa.me/917337433351`
- Per-product pre-filled messages (URL-encoded):
  - **VLTD-AIS GPS Tracking Device** — full message with product details / pricing / installation / demo + Name/Company placeholders
  - **Capacitive Fuel Sensor** — specifications / pricing / installation
  - **Smart HD CCTV Security Camera** — features / pricing / demo access
- Add `message` field per product in the `products` array in `src/routes/products.tsx`.

## Button
Replace the `<Link to="/products/$slug">` + secondary `<Link to="/contact">` block in `ProductCard` (lines 153–168) with one full-width `<a>`:

- `href`: `https://wa.me/917337433351?text=<encoded message>`
- `target="_blank"`, `rel="noopener noreferrer"`
- Style: bg `#25D366`, white text, hover `#1ebe57`, rounded-xl, MessageCircle icon + "Enquire Now"
- onClick → fire tracking insert (fire-and-forget, don't block navigation)

## Tracking (Supabase)
New table via migration:

```
public.whatsapp_clicks
  - id uuid pk
  - product_name text not null
  - product_slug text
  - page_url text
  - user_agent text
  - created_at timestamptz default now()
```
- GRANT INSERT to anon, authenticated; GRANT ALL to service_role; GRANT SELECT to authenticated (admin via RLS).
- RLS: allow anon/authenticated INSERT (with length checks); SELECT restricted to `has_role(auth.uid(),'admin')`.

Client logs click via `supabase.from('whatsapp_clicks').insert({...})` directly before opening WhatsApp (link still navigates via `target=_blank`).

## Files
- `supabase/migration` — create table + policies
- `src/routes/products.tsx` — add `message` per product, rewrite button row in `ProductCard`, drop unused `Download`/`ArrowRight`/`Link` imports as needed, import `supabase`.

## Out of scope
Product detail page, contact page, other CTAs elsewhere on the site.
