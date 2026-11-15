# Placeholders & Open Items — Justprints by PlusFrica

The site is fully functional, but the following items are **professional placeholders**
that the client should replace/confirm before launch (per Section 10 of the brief):

## Assets
- [x] **Logo** — client-supplied logo files integrated: JP mark in header (`public/images/logo-mark.png`), full light/dark lockups in footer (`logo-black.png` / `logo-white.png`), favicon derived from the mark (`app/icon.png`).
- [x] **Hero image** — client-supplied hero (`public/images/hero-books.jpg`).
- [x] **Portfolio photography** — real client work now in `public/images/work/` (6 published book covers, author-launch photo, campaign caps, press room).
- [ ] **Remaining photography** — a few AI-generated stand-ins remain (`work/amara.jpg`, `work/plusfrica-report.jpg`, `textures/*`, `insights/cmyk.jpg`). Replace as more client photos arrive.
- [x] **CEO photo** — real portrait of *Dr. Chiedozie Gideon Okeke* at `public/images/about/ceo-portrait.jpg`.
- [ ] **CEO bio** — copy on `/about` is still placeholder text awaiting the client's approved bio.

## Content
- [ ] **Testimonials** (`lib/data.ts` → `TESTIMONIALS`) — first entry is a real client review (received via WhatsApp); the remaining three are placeholders. Replace as real quotes arrive; confirm the journal client's name for attribution.
- [ ] **About stats** (`lib/data.ts` → `ABOUT_STATS`) — "500+ projects", "40+ authors" are plausible placeholders; confirm real numbers.
- [x] **Portfolio projects** (`lib/data.ts` → `PROJECTS`) — now real client work: Women Without Walls, Brain Bank, The New You, From Novice to Top Selling Realtor, iLead, When Purpose Meets People, You're Easy to Ignore, and Campaign Caps. Project years currently default to 2026 — confirm per project.
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
