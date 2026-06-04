## Goal
Swap the site-wide primary background from `#D4EEED` to `#E5F1F1` and align card/border/shadow tokens to the new spec. Keep the existing mint+sky system; only soften the base tint.

## Changes

### 1. `src/styles.css` — token update
- `--background: #E5F1F1` (was `#D4EEED`)
- `--accent: #E5F1F1` (keep accent aligned with new base)
- `--secondary` / `--muted`: stay `#F8FCFC`
- `--card: #FFFFFF`, `--card-foreground: #0F172A`
- `--foreground: #0F172A`, `--muted-foreground: #64748B`
- Add secondary text token usage: keep `#475569` available via existing `text-slate-*` utilities (no new token needed)
- `--border: rgba(15,23,42,0.08)`
- `--primary: #0EA5E9`, hover `#0284C7` (already set; verify CTA hover uses `#0284C7`)
- Update `--gradient-hero` second radial stop from `rgba(212,238,237,…)` → `rgba(229,241,241,…)`
- Soften `--shadow-elegant` to `0 8px 25px rgba(15,23,42,0.05)` to match card spec
- Card utility shadow (`.shadow-card`) → `0 8px 25px rgba(15,23,42,0.05)`

### 2. Component sweep (only where `#D4EEED` is hardcoded)
Search and replace any literal `#D4EEED` references in components with `var(--background)` / `bg-background`. Based on prior edits the palette is token-driven, so this should be a no-op or minimal.

### 3. Card radius
Confirm Tailwind `rounded-2xl` (16px) is used on primary cards (`GlassCard`, product cards). No structural changes — only adjust if a card currently uses `rounded-xl` in a hero/product context.

## Out of scope
- No layout, copy, routing, or component-structure changes
- No dark-mode token changes
- No new pages or sections
- No logic/business changes

## Files touched
- `src/styles.css` (primary)
- Any component file containing a literal `#D4EEED` (sweep only)
