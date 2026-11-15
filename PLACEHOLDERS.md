# Placeholders & Open Items — Justprints by PlusFrica

The site is fully functional, but the following items are **professional placeholders**
that the client should replace/confirm before launch (per Section 10 of the brief):

## Assets
- [ ] **Logo** — currently an inline SVG wordmark (`components/Logo.tsx`). Replace with final logo files (SVG + PNG, light & dark variants).
- [ ] **Photography** — all images in `public/images/` are AI-generated stand-ins. Replace with the best 20–40 photos from the client archive (books, binding close-ups, branding kits, event materials, workspace, machines).
- [ ] **CEO photo & bio** — `public/images/about/ceo-portrait.jpg` is a generated placeholder portrait of *Dr. Chiedozie Gideon Okeke*; bio copy on `/about` is a placeholder.

## Content
- [ ] **Testimonials** (`lib/data.ts` → `TESTIMONIALS`) — written placeholders. Replace with 5–8 real client quotes.
- [ ] **About stats** (`lib/data.ts` → `ABOUT_STATS`) — "500+ projects", "40+ authors" are plausible placeholders; confirm real numbers.
- [ ] **Portfolio projects** (`lib/data.ts` → `PROJECTS`) — realistic sample projects. Replace with real case studies.
- [ ] **Company timeline dates** on `/about` — founding year of In-Grace Digital Resources Africa is approximate ("8+ years" per brief).

## Operations
- [ ] **Opening hours** (`lib/site.ts` → `SITE.hours`) — placeholder Mon–Fri 8:00–18:00, Sat 9:00–16:00.
- [ ] **Social links** (`lib/site.ts` → `SITE.socials`) — placeholder handles for Facebook & Instagram.
- [ ] **Domain** — not yet registered. Brief recommends `justprints.ng` (preferred), then `justprintsbyplusfrica.com`, `justprints.com.ng`, `getjustprints.com`. Set `NEXT_PUBLIC_SITE_URL` once secured.
- [ ] **Google Maps embed** — currently a search embed for "8 Owerri Road Asata Enugu". Replace with a verified business-profile embed once the listing exists.

## Integrations
- [ ] **GA4** — set `NEXT_PUBLIC_GA_ID` (see `.env.example`). Conversion events already wired: `quote_form_submit`, `whatsapp_click`, newsletter signup.
- [ ] **Formspree** — set `NEXT_PUBLIC_FORMSPREE_ID`. Without it, the quote form gracefully falls back to opening WhatsApp with a fully pre-filled message (zero-friction by design).

## Registration numbers (confirmed in brief)
- Justprints by PlusFrica Ltd — RC7805223
- PlusFrica Group — RC 1713477
