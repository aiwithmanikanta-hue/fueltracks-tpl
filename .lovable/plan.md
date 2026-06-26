
# Fuel Tracks Upgrade — Phase 1

Scope locked to **global design polish + Homepage**. About, Services, Products, Product Details, Contact, Footer come in later phases. No theme change, no color change, no logo change, no content rewrites, no stats changes, no data migrations.

## Guardrails (won't touch)

- Brand colors, logo, brand name, existing palette in `src/styles.css`
- Navigation structure and routes
- WhatsApp integration, Supabase wiring, Contact form logic, Play Store link, social URLs
- Products list / data source (stays hardcoded)
- Stats numbers (kept as-is)
- Existing copy unless a line is visibly broken

## What Phase 1 ships

### 1. Global polish system (applies sitewide, not just homepage)

Adds reusable primitives so later phases inherit the look for free.

- **Tokens added to `src/styles.css`** (no color changes): spacing rhythm, radius scale (`--radius-card: 18px`), elevation scale (`--shadow-sm/md/lg/glow`), motion tokens (`--ease-out-soft`, durations), glass surface token using existing brand color with alpha.
- **Utilities** (`@utility`): `card-premium`, `glass-surface`, `hover-lift`, `reveal-on-scroll`, `gradient-border`. All built from existing brand tokens.
- **Scroll reveal**: lightweight IntersectionObserver hook (`useReveal`) — no new heavy deps. Respects `prefers-reduced-motion`.
- **Typography hierarchy pass**: tighten heading sizes/leading/tracking in `styles.css` only (same font families already loaded). Larger H1, better H2/H3 rhythm, improved body line-height.
- **Button consistency audit**: verify shadcn Button variants render consistently; add one `variant="premium"` (gradient + soft shadow) for hero CTAs. Existing buttons untouched unless they're the hero CTA.
- **Accessibility sweep on homepage only this phase**: focus-visible rings on interactive elements, `aria-label` on icon-only buttons in hero/nav, `h-dvh` swap if `h-screen` is used in hero.

### 2. Homepage redesign (`src/routes/index.tsx` + its section components)

Preserves every existing section and its content. Visual upgrade only.

- **Hero**: larger headline, refined CTA stack, animated background (soft floating blurred brand-color orbs + subtle grid), keep existing dashboard/device imagery. Add scroll-down cue.
- **Stats**: animated count-up on scroll into view, same numbers as today, premium card row with subtle dividers/glass.
- **Product Showcase**: switch to premium card grid (rounded 18px, soft shadow, hover lift, image zoom on hover). WhatsApp enquiry button preserved.
- **Industries**: modern icon cards (Logistics, Transportation, School Buses, Construction, Mining, Fuel Tankers) using lucide icons; only if section exists — otherwise added as a new section using current content tone.
- **Why Choose Fuel Tracks**: feature cards w/ icon + title + 1-line description, gradient border on hover.
- **CTA band**: full-width section with WhatsApp + Contact buttons (existing URLs).
- **Scroll-reveal animations** wired into each section via the new hook.

### 3. Performance hygiene (homepage only this phase)

- Lazy-load below-the-fold sections via dynamic import where worthwhile.
- Add `loading="lazy"` + explicit width/height to non-hero images.
- Preload hero image via route `head().links`.

## Out of scope this phase (explicit)

About page, Services page, Products grid page, Product Details pages, Contact page redesign, Footer redesign, sitewide Lighthouse 95+ target, WebP/WebM conversion pipeline, code-splitting overhaul. These are Phase 2–4.

## Files I expect to touch

- `src/styles.css` — tokens, utilities, type scale
- `src/routes/index.tsx` — section composition + reveal wiring
- `src/components/sections/Hero.tsx`, `Stats.tsx`, `Products.tsx` (or equivalent), `Industries.tsx`, `WhyChoose.tsx`, `CTA.tsx` — visual upgrades only
- `src/hooks/use-reveal.ts` — new
- `src/components/ui/button.tsx` — add `premium` variant only if missing

## Acceptance for Phase 1

- Homepage looks visibly premium and modern; existing brand identity intact.
- All existing homepage links/CTAs still work (WhatsApp, Contact, Play Store, social).
- No regressions on mobile/tablet/desktop at 360 / 768 / 1280 / 1440.
- No console errors; build passes.
- Other routes still render (no global breakage from the new tokens/utilities).

After you approve, I implement Phase 1 in one go and then we move to Phase 2 (About + Services).
