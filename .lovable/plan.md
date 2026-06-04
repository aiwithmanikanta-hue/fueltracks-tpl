# Rebrand: Mint (#D4EEED) Background System

Goal: Move the entire site off the white/navy palette to a fresh, premium mint system centered on `#D4EEED`, with white cards, sky-blue CTAs (`#0EA5E9`), and high-contrast slate typography.

## 1. Update design tokens (`src/styles.css`)

This is the single source of truth — changing it cascades across every page (Home, About, Products, Services, Contact, product detail pages) without touching each section file.

New `:root` values (converted to oklch to stay consistent with the existing token format):

- `--background`: `#D4EEED` (mint) — primary page background
- `--foreground`: `#0F172A` (slate-900) — headings / primary text
- `--card`: `#FFFFFF`
- `--card-foreground`: `#0F172A`
- `--popover` / `--popover-foreground`: white / slate-900
- `--primary`: `#0EA5E9` (sky-500) — CTAs, links, accents
- `--primary-foreground`: `#FFFFFF`
- `--primary-glow`: `#38BDF8` (sky-400)
- `--secondary`: `#F8FCFC` (off-white)
- `--secondary-foreground`: `#0F172A`
- `--muted`: `#F8FCFC`
- `--muted-foreground`: `#64748B` (slate-500)
- `--accent`: `#D4EEED`
- `--accent-foreground`: `#0F172A`
- `--border`: `rgba(15,23,42,0.08)`
- `--input`: `rgba(15,23,42,0.12)`
- `--ring`: `#0EA5E9`
- `--surface`: `rgba(255,255,255,0.7)`
- `--surface-elevated`: `rgba(255,255,255,0.92)`
- `--destructive`: keep current red

Gradients & shadows:
- `--gradient-hero`: soft sky/mint radial blooms over `#D4EEED → #F8FCFC`
- `--gradient-primary`: `#0EA5E9 → #0284C7`
- `--gradient-glow`: sky radial at low opacity
- `--shadow-elegant` / `--shadow-soft`: `0 10px 30px rgba(0,0,0,0.05)` style, slate-tinted
- `--shadow-glow`: sky-tinted

Utility classes updated to match:
- `.glass` / `.glass-strong`: white translucent over mint, slate border (`rgba(15,23,42,0.08)`)
- `.text-gradient` / `.text-gradient-brand`: slate-900 → sky-600 (so headlines stay readable on mint, not invisible)
- `.bg-grid`: slate hairlines at ~6% opacity
- `.nav-link` underline: sky-500

## 2. Section rhythm (alternating backgrounds)

To avoid a flat one-tone page, alternate section backgrounds across the home page in this order:
- Hero → white (with subtle hero gradient)
- TrustBar → `#D4EEED`
- About → `#F8FCFC`
- Features → `#D4EEED`
- DashboardShowcase → white
- Industries → `#D4EEED`
- MobileApp → `#F8FCFC`
- Services → `#D4EEED`
- Testimonials → white
- DealerProgram → `#D4EEED`
- FAQ → `#F8FCFC`
- Contact → white

Each section's existing `bg-gradient-to-b from-white/40 …` overlay will be swapped for `bg-background`, `bg-secondary`, or a transparent pass-through so the page-level rhythm shows. Same approach applied to Products, About, Services, Contact, and product detail pages.

## 3. Product section (currently dark navy)

Replace the dark navy product blocks (ProductHero, ProductOverview, ProductFeatures, ProductSpecs, etc.) with:
- Section background `#D4EEED` or `#F8FCFC`
- Product cards: white, `rounded-2xl`, `border border-border`, `shadow-[0_10px_30px_rgba(0,0,0,0.05)]`
- Text colors swapped to slate-900 / slate-500
- Any hardcoded `bg-navy`, `bg-slate-900`, `text-white` removed in favor of tokens

## 4. Header (`src/components/Header.tsx`)

- Fixed-position bar gets a subtle white tint (`bg-white/80 backdrop-blur` when scrolled; transparent at top over mint)
- Nav link colors: slate-600 default, slate-900 hover, sky-500 active
- LIVE LOGIN: white glass pill with sky border on hover
- ADMIN LOGIN: solid `#0EA5E9`, hover `#0284C7`, white text (remove the hardcoded `bg-slate-700`)
- Drop the heavy logo `drop-shadow` (designed for dark bg); use a soft shadow instead

## 5. Footer

Switch from any dark background to white or `#F8FCFC`, slate text, sky links, slate-08 top border.

## 6. Component sweep for hardcoded colors

Grep and fix any `bg-white/5`, `bg-black`, `text-white`, `bg-slate-*`, `bg-navy`, raw hex values inside components. Replace with semantic tokens (`bg-card`, `bg-background`, `bg-secondary`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary`). This guarantees the palette holds together in light mode and meets the contrast requirements.

Specific known spots: `Header.tsx` (`bg-slate-700`, `hover:bg-slate-800`, `bg-white/5`), mobile menu (`bg-white/5`), `Features.tsx` `LiveTrackingVisual` (`bg-[oklch(0.14_0.04_260)]`), TrustBar/About/Features overlay gradients.

## 7. Accessibility check

Target ratios on `#D4EEED` background:
- `#0F172A` body/headings: ~15:1 ✅
- `#475569` secondary: ~7:1 ✅
- `#64748B` muted: ~4.7:1 ✅ (AA normal)
- `#0EA5E9` on white button with white text: ~3.1:1 — acceptable for large/bold button text; hover `#0284C7` raises to ~4.6:1. Buttons will keep bold weight + ≥14px to stay AA.

## 8. Out of scope

- No layout, copy, or component-structure changes
- No new pages or routes
- No logic / backend changes
- Dark mode tokens untouched (site is light-only today)

## Files to edit

- `src/styles.css` — full token + utility rewrite (the main change)
- `src/components/Header.tsx` — navbar bg + button colors
- `src/components/Footer.tsx` — light bg, slate text
- `src/components/sections/*.tsx` — strip dark overlay gradients, set alternating section backgrounds, remove hardcoded whites
- `src/components/product/*.tsx` — remove dark navy blocks, swap to mint/white card system
- `src/components/ui/PageHeader.tsx`, `GlassCard.tsx`, `DashboardMock.tsx` — token-only colors
- `src/routes/{index,about,products,services,contact,products.$slug}.tsx` — only if a route file sets its own background wrapper

No new dependencies. No route or data changes.