# Justprints by PlusFrica Ltd — Official Website

> **We Don’t Just Print. We Craft Excellence.**

Premium, conversion-focused website for Justprints by PlusFrica Ltd (RC7805223) —
a printing, branding, graphic design and book publishing house in Enugu, Nigeria,
and a subsidiary of the PlusFrica Group (RC 1713477).

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** — dual themes (dark default + light), class-based
- **Framer Motion** — reveal animations, carousels, micro-interactions
- **next-themes** — theme persistence via `localStorage`
- **Fontsource** — self-hosted Inter Variable (UI) + Fraunces Variable (display)
- No runtime backend required: the quote form posts to **Formspree** when
  configured, otherwise falls back to a fully pre-filled **WhatsApp** message.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TS validation
```

## Configuration (`.env.local` — see `.env.example`)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap/OG (e.g. `https://justprints.ng`) |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; analytics disabled when empty |
| `NEXT_PUBLIC_FORMSPREE_ID` | Quote-form → email; falls back to WhatsApp when empty |

## Structure

```
app/            routes: /, /work(+[slug]), /services, /process, /about,
                /insights(+[slug]), /contact, sitemap, robots, icon
components/     header, footer, WhatsApp float, quote form, home sections, UI
lib/site.ts     contact details, WhatsApp deep-links, tracking helper
lib/data.ts     projects, services, process steps, testimonials, articles
public/images/  imagery (currently generated placeholders — see below)
```

## Before launch

See **[PLACEHOLDERS.md](./PLACEHOLDERS.md)** — client archive photos, final logo,
real testimonials, hours, socials, domain registration, GA4 + Formspree keys.

Recommended domain (per brief): `justprints.ng` · Deploy target: Vercel.
