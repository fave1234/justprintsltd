/**
 * Content model — Justprints by PlusFrica Ltd
 * ─────────────────────────────────────────────
 * Portfolio projects, services, process steps, testimonials and articles.
 * NOTE: items flagged PLACEHOLDER in PLACEHOLDERS.md should be replaced
 * with real client content before launch.
 */

// ─── Portfolio ───────────────────────────────────────────────

export const PROJECT_CATEGORIES = [
  "All",
  "Books",
  "Branding",
  "Event Materials",
  "Corporate",
  "Other",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type GalleryImage = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  client?: string;
  summary: string;
  description: string[];
  services: string[];
  cover: GalleryImage;
  gallery: GalleryImage[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "the-stillwater-memoirs",
    title: "The Stillwater Memoirs",
    category: "Books",
    year: "2026",
    summary:
      "A 320-page hardcover memoir — Smyth-sewn binding, red foil-debossed cover and printed endpapers.",
    description: [
      "A family history deserved more than a paperback. For this memoir we chose a case-bound hardcover with Smyth-sewn signatures, so the book opens flat and will outlive generations of readers.",
      "The cover is a deep crimson Wibalin with a blind deboss and red foil title; inside, 100gsm cream uncoated stock keeps long-form reading easy on the eyes. Every copy passed a 21-point finishing check before leaving the press.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/stillwater.jpg",
      alt: "Crimson hardcover memoir with red foil title, photographed on a dark table",
    },
    gallery: [
      {
        src: "/images/textures/foil.jpg",
        alt: "Macro close-up of red foil stamping on black book cloth",
      },
      {
        src: "/images/textures/binding.jpg",
        alt: "Close-up of Smyth-sewn thread binding in a hardcover book block",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Stack of cream uncoated paper sheets showing deckled edges",
      },
    ],
    featured: true,
  },
  {
    slug: "echoes-of-the-ancestors",
    title: "Echoes of the Ancestors",
    category: "Books",
    year: "2026",
    summary:
      "A poetry collection in perfect-bound paperback — soft-touch laminate, French flaps and a kraft-textured cover.",
    description: [
      "Poetry deserves tactility. This collection pairs a kraft-textured cover stock with soft-touch lamination and French flaps — details usually reserved for books twice the budget.",
      "Interior typesetting was handled in-house: generous margins, a quiet serif, and section openers printed in a single spot red.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/echoes.jpg",
      alt: "Cream poetry book with kraft-textured cover lying beside loose manuscript pages",
    },
    gallery: [
      {
        src: "/images/textures/paper.jpg",
        alt: "Close-up of natural kraft-toned paper texture",
      },
      {
        src: "/images/textures/binding.jpg",
        alt: "Detail of a book spine showing neat binding work",
      },
    ],
    featured: true,
  },
  {
    slug: "amara-gold-cosmetics",
    title: "Amara Gold Cosmetics",
    category: "Branding",
    year: "2026",
    summary:
      "Complete identity for a beauty brand — wordmark, colour system, stationery and packaging labels with gold-foil detailing.",
    description: [
      "Amara Gold needed an identity that felt premium on a shelf and unforgettable in the hand. We built a restrained black-and-red system with gold foil accents, then carried it through cards, letterheads, labels and gift boxes.",
      "The packaging run used 350gsm art board with matte lamination and a metallic gold foil — proof that small print runs can still feel luxurious.",
    ],
    services: ["Branding & Identity", "Graphic Design", "General Commercial Printing"],
    cover: {
      src: "/images/work/amara.jpg",
      alt: "Flat lay of black and red brand stationery with gold foil logo details",
    },
    gallery: [
      {
        src: "/images/textures/foil.jpg",
        alt: "Macro of metallic foil catching light on a printed card",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Stacked luxury packaging board samples",
      },
    ],
    featured: true,
  },
  {
    slug: "coal-city-coffee-roasters",
    title: "Coal City Coffee Roasters",
    category: "Branding",
    year: "2025",
    summary:
      "Naming, identity and packaging for an Enugu coffee roaster — kraft bags, stamped labels and loyalty cards.",
    description: [
      "Named after Enugu's coal heritage, Coal City Coffee asked for a brand as warm as its roast. We delivered a full identity — logotype, palette, iconography — plus printed kraft pouches with stamped red labels.",
      "The loyalty cards, printed on recycled 400gsm stock with deep debossing, turn every cup into a keepsake.",
    ],
    services: ["Branding & Identity", "General Commercial Printing"],
    cover: {
      src: "/images/work/coalcity.jpg",
      alt: "Kraft coffee bags with red labels beside spilling roasted coffee beans",
    },
    gallery: [
      {
        src: "/images/textures/paper.jpg",
        alt: "Kraft paper texture used for the coffee packaging",
      },
      {
        src: "/images/textures/foil.jpg",
        alt: "Stamped red label detail close-up",
      },
    ],
  },
  {
    slug: "enugu-tech-summit-2026",
    title: "Enugu Tech Summit 2026",
    category: "Event Materials",
    year: "2026",
    summary:
      "Full event branding — 20-ft stage backdrop, roll-up banners, badges, programmes and wayfinding signage.",
    description: [
      "One week before doors opened, the summit needed everything: a six-metre stage backdrop, twelve roll-up banners, 800 badges, programmes, lanyards and wayfinding — all colour-matched across substrates.",
      "We printed, finished and delivered on schedule, with on-site support through setup morning. Large format doesn't rattle us; it excites us.",
    ],
    services: ["Event Branding & Large Format", "Graphic Design"],
    cover: {
      src: "/images/work/techsummit.jpg",
      alt: "Conference stage with bold printed red and black backdrop branding",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Large-format press operator checking colour at the machine",
      },
      {
        src: "/images/textures/foil.jpg",
        alt: "Close-up of premium finish on printed event badge",
      },
    ],
    featured: true,
  },
  {
    slug: "a-royal-heritage-wedding",
    title: "A Royal Heritage Wedding",
    category: "Event Materials",
    year: "2025",
    summary:
      "Luxury invitation suite — crimson foil on cotton card, blind embossing, wax seals, in presentation boxes.",
    description: [
      "When a couple says they want guests to gasp, we take it literally. This suite layers 600gsm cotton card, crimson foil calligraphy and a blind-embossed family crest, finished with hand-poured wax seals.",
      "Each invitation ships in its own rigid presentation box — print as the first gift of the celebration.",
    ],
    services: ["Event Branding & Large Format", "General Commercial Printing"],
    cover: {
      src: "/images/work/wedding.jpg",
      alt: "Crimson and cream wedding invitation suite with wax seal and foil details",
    },
    gallery: [
      {
        src: "/images/textures/foil.jpg",
        alt: "Crimson foil detail on cotton invitation card",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Cotton card stock edges in a wedding stationery stack",
      },
    ],
  },
  {
    slug: "plusfrica-group-annual-report",
    title: "PlusFrica Group Annual Report",
    category: "Corporate",
    year: "2026",
    client: "PlusFrica Group",
    summary:
      "A 96-page section-sewn annual report — lay-flat binding, spot-colour charts and a linen-textured cover.",
    description: [
      "An annual report is a company's handshake in print. For our parent group we produced a 96-page section-sewn edition that lies flat on the boardroom table, with financial charts printed in a precise spot red.",
      "The linen-textured cover and rounded spine give it the gravity of a bound journal — a document worth keeping, not binning.",
    ],
    services: ["General Commercial Printing", "Graphic Design"],
    cover: {
      src: "/images/work/plusfrica-report.jpg",
      alt: "Elegant black annual report with red accents on a boardroom table",
    },
    gallery: [
      {
        src: "/images/textures/binding.jpg",
        alt: "Section-sewn spine detail of the annual report",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Interior paper stock close-up",
      },
    ],
    featured: true,
  },
  {
    slug: "zenith-point-logistics",
    title: "Zenith Point Logistics",
    category: "Corporate",
    year: "2025",
    summary:
      "Corporate stationery system — letterheads, cards, envelopes and fleet decals in a disciplined red-on-black system.",
    description: [
      "Zenith Point asked for one thing: consistency. We produced a complete stationery system — letterheads, business cards, envelopes, delivery notes — governed by a printed mini brand guide.",
      "Durable vinyl fleet decals extended the identity onto every truck, turning the motorway into a moving billboard.",
    ],
    services: ["General Commercial Printing", "Branding & Identity"],
    cover: {
      src: "/images/work/zenith.jpg",
      alt: "Stack of corporate business cards and letterheads in black and red",
    },
    gallery: [
      {
        src: "/images/textures/foil.jpg",
        alt: "Red foil edge detail on business cards",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Letterhead paper stock macro",
      },
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

// ─── Services ────────────────────────────────────────────────

export type Service = {
  id: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  image: GalleryImage;
};

export const SERVICES: Service[] = [
  {
    id: "book-printing-publishing",
    icon: "book",
    title: "Book Printing & Publishing",
    short:
      "From manuscript to bookshelf — typesetting, covers, ISBN guidance and printing in hardcover or paperback.",
    description:
      "Our flagship craft. We walk authors from raw manuscript to a book that feels as good as it reads — handling interior typesetting, cover design, paper selection, ISBN and CIP guidance, offset or digital printing, and binding in hardcover, perfect-bound or saddle-stitched editions. Whether it's 25 copies or 5,000, every title gets the same obsessive finishing standard.",
    deliverables: [
      "Interior typesetting & layout",
      "Cover design (front, spine, back)",
      "ISBN / legal deposit guidance",
      "Hardcover, perfect & saddle-stitch binding",
      "Offset & digital printing",
      "Special finishes — foil, embossing, sprayed edges",
    ],
    image: {
      src: "/images/work/stillwater.jpg",
      alt: "Premium hardcover book printed by Justprints",
    },
  },
  {
    id: "graphic-design",
    icon: "pen",
    title: "Graphic Design",
    short:
      "Design that earns attention — book covers, marketing materials, packaging and artwork prepared properly for print.",
    description:
      "Beautiful on screen means nothing if it fails on press. Our designers create with ink in mind: correct colour spaces, bleed, resolution and paper behaviour are considered from the first sketch — so what you approve is exactly what you hold.",
    deliverables: [
      "Book covers & interior design",
      "Flyers, brochures & marketing collateral",
      "Packaging & label design",
      "Publication & report layouts",
      "Large-format artwork",
      "Print-ready file preparation (CMYK, bleed, imposition)",
    ],
    image: {
      src: "/images/insights/prepress.jpg",
      alt: "Designer preparing print-ready artwork on screen with colour proofs",
    },
  },
  {
    id: "branding-identity",
    icon: "fingerprint",
    title: "Branding & Identity",
    short:
      "Identities with weight — logos, brand systems, stationery kits and guidelines that keep you consistent everywhere.",
    description:
      "A brand is a promise, repeated consistently. We design identity systems — logo, typography, colour, iconography — then print them across every touchpoint: cards, letterheads, packaging, signage. You leave with brand guidelines your whole team can actually use.",
    deliverables: [
      "Logo & visual identity design",
      "Brand guidelines & usage manuals",
      "Stationery kits — cards, letterheads, envelopes",
      "Rebrands & identity refreshes",
      "Packaging systems",
      "Launch collateral bundles",
    ],
    image: {
      src: "/images/work/amara.jpg",
      alt: "Black and red brand identity stationery flat lay designed by Justprints",
    },
  },
  {
    id: "commercial-printing",
    icon: "printer",
    title: "General Commercial Printing",
    short:
      "Everyday print, elevated — business cards, flyers, brochures, reports, stickers and packaging at production scale.",
    description:
      "The bread and butter of business communication, done to a standard your competitors will notice. Sharp colour, clean trimming, honest paper weights — and a quality check on every batch before it leaves the building.",
    deliverables: [
      "Business cards & corporate stationery",
      "Flyers, posters & brochures",
      "Annual reports & company profiles",
      "Stickers, labels & packaging",
      "Calendars, notepads & journals",
      "Certificates & presentation folders",
    ],
    image: {
      src: "/images/work/plusfrica-report.jpg",
      alt: "Premium printed corporate report produced by Justprints",
    },
  },
  {
    id: "event-branding",
    icon: "flag",
    title: "Event Branding & Large Format",
    short:
      "Make the room yours — backdrops, banners, signage, programmes and branded souvenirs for events of any size.",
    description:
      "Conferences, weddings, church programmes, school ceremonies — we brand the whole experience. From the stage backdrop to the name badge, every piece arrives colour-matched, finished and on schedule, with delivery and setup support available across Enugu and beyond.",
    deliverables: [
      "Stage backdrops & press walls",
      "Roll-up & feather banners",
      "Event programmes & invitation suites",
      "Badges, lanyards & wristbands",
      "Wayfinding & venue signage",
      "Branded souvenirs & gift items",
    ],
    image: {
      src: "/images/work/techsummit.jpg",
      alt: "Large-format stage backdrop printed for a conference by Justprints",
    },
  },
];

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}

// ─── Why Justprints ──────────────────────────────────────────

export const WHY_POINTS = [
  {
    icon: "gem",
    title: "Obsessive Quality & Finishing",
    text: "Paper weight, ink density, trim tolerance — we sweat details most printers never check. Every job passes a 21-point finishing inspection before dispatch.",
  },
  {
    icon: "book",
    title: "Book Publishing Excellence",
    text: "Books are our first love. From memoirs to manuals, we produce publications that stand beside anything on an international shelf.",
  },
  {
    icon: "palette",
    title: "Full Branding & Design Capability",
    text: "Design studio and print house under one roof. What we design is engineered for press from day one — no costly translation errors.",
  },
  {
    icon: "crown",
    title: "Treated Like Royalty",
    text: "One point of contact, honest timelines, proactive updates. Our clients stay because of how they're treated — the print is the bonus.",
  },
] as const;

// ─── Process ─────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    icon: "chat",
    title: "Consultation & Brief",
    text: "We listen first. On WhatsApp, a call, or over coffee at Asata — we capture your vision, audience, quantity, timeline and budget, then recommend the smartest route.",
    hint: "Free · same-day response",
  },
  {
    icon: "pen",
    title: "Design & Layout",
    text: "If you need design, our studio concepts, typesets and lays out your project — engineered for print from the first artboard. Already have artwork? We preflight it for free.",
    hint: "2–5 working days",
  },
  {
    icon: "eye",
    title: "Proofing & Approval",
    text: "You review a digital proof — and for books and large runs, a physical press proof. Nothing goes to press until you say the words: approved.",
    hint: "You stay in control",
  },
  {
    icon: "printer",
    title: "Printing",
    text: "Your job hits the press — offset for volume, digital for speed. Colour is calibrated and checked sheet by sheet against your approved proof.",
    hint: "Calibrated colour",
  },
  {
    icon: "checkbadge",
    title: "Finishing & Quality Check",
    text: "Binding, trimming, foiling, laminating — then our 21-point finishing inspection. If a copy isn't perfect, it doesn't ship. Simple.",
    hint: "21-point inspection",
  },
  {
    icon: "truck",
    title: "Delivery / Collection",
    text: "Collect at our Asata press or have it delivered to your door, anywhere in Nigeria. We confirm safe arrival — treated like royalty, remember?",
    hint: "Nationwide delivery",
  },
] as const;

// ─── Testimonials (PLACEHOLDER — replace with real quotes) ───

export const TESTIMONIALS = [
  {
    quote:
      "The moment I held my book, I understood the difference. The binding, the paper, the colour — everything felt intentional. My readers keep asking who printed it.",
    name: "Adaeze N.",
    role: "Author, Enugu",
  },
  {
    quote:
      "“Treated like royalty” is not a slogan; it’s how they actually work. They caught a colour issue in our artwork before we ever saw it — then fixed it for free.",
    name: "Emeka O.",
    role: "Founder, Coal City Coffee",
  },
  {
    quote:
      "One week to brand an entire summit and they never blinked. Setup morning, every banner, badge and programme was flawless. Our sponsors noticed.",
    name: "Conference Director",
    role: "Enugu Tech Summit",
  },
  {
    quote:
      "As a designer, print partners usually disappoint me. Justprints didn’t. Proofs were accurate, finishing was surgical, and my clients think I’m a genius.",
    name: "Chiamaka E.",
    role: "Creative Director, Lagos",
  },
];

// ─── About ───────────────────────────────────────────────────

// PLACEHOLDER numbers — confirm real figures with the client
export const ABOUT_STATS = [
  { value: "8+", label: "Years of craft" },
  { value: "500+", label: "Projects delivered" },
  { value: "40+", label: "Authors published" },
  { value: "100%", label: "Quality-checked" },
] as const;

export const VALUES = [
  {
    icon: "gem",
    title: "Craftsmanship First",
    text: "We are printers by calling, not by accident. Every sheet carries our name, so every sheet earns it.",
  },
  {
    icon: "eye",
    title: "Radical Transparency",
    text: "Honest quotes, real timelines, proof before press. You always know exactly where your project stands.",
  },
  {
    icon: "crown",
    title: "Royalty Treatment",
    text: "Every client — one book or ten thousand — gets the same respect, attention and care. That’s the Justprints way.",
  },
  {
    icon: "globe",
    title: "A Bigger African Vision",
    text: "As part of the PlusFrica Group, we’re committed to strengthening Africa’s economic framework through innovative solutions.",
  },
] as const;

// ─── Insights / Blog ─────────────────────────────────────────

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: GalleryImage;
  /** Markdown-lite body: paragraphs separated by blank lines,
   *  "## " for H2, "- " list items, **bold**, [text](url). */
  body: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "rgb-vs-cmyk-why-colours-look-different-in-print",
    title: "RGB vs CMYK: Why Your Colours Look Different in Print",
    excerpt:
      "Your design glowed on screen — and arrived muted on paper. Here’s why screens and presses speak different colour languages, and how to make them agree.",
    category: "Print Basics",
    date: "2026-10-20",
    readTime: "5 min read",
    cover: {
      src: "/images/insights/cmyk.jpg",
      alt: "CMYK ink rollers on a printing press showing vivid colour",
    },
    body: `Every designer has lived this heartbreak: a poster that blazed coral-red on the monitor comes off the press looking… subdued. Nobody made a mistake. Your screen and our press simply speak two different colour languages.

## Light versus ink

Your screen is an **RGB** device — it mixes red, green and blue *light* to build colour. Start with black, add light, and you can create millions of vivid, luminous colours, including electric reds and neon greens.

A printing press is a **CMYK** device — it lays cyan, magenta, yellow and black *ink* onto paper. Ink doesn't emit light; it absorbs it. The CMYK gamut (the range of colours it can reproduce) is smaller than RGB — especially in those glowing, saturated reds, greens and blues.

When an RGB file is printed, those out-of-gamut colours get "mapped" to the nearest printable equivalent. That's the mute you're seeing.

## The fix: design in CMYK from the start

- **Set up your document in CMYK** before you design, not at the end. In Adobe tools, choose a print preset; in Canva, export as "PDF Print".
- **Use a coated profile** like *FOGRA39* or *GRACoL* for most commercial work — your printer can advise. (Yes, we'd love to advise.)
- **Watch your blacks.** "RGB black" converts to a muddy grey-brown. For crisp text, use 100% K only. For large, rich black areas, use a "rich black" like C40 M30 Y30 K100.
- **If colour is mission-critical** — a brand logo, a product label — ask for a **physical proof**. Screens lie politely; proofs tell the truth.

## The Justprints safety net

Every file that comes to us goes through a free preflight. If your artwork is RGB, we'll convert it with press-matched profiles and flag any colours that will shift — and for critical jobs, we'll put a printed proof in your hands before the full run.

Because "I thought it would be redder" is a sentence nobody should have to say.`,
  },
  {
    slug: "how-to-prepare-files-for-print",
    title: "How to Prepare Your Files for Print (A Non-Designer’s Guide)",
    excerpt:
      "Bleed, resolution, fonts, PDF settings — the four things that decide whether your print job sails through prepress or bounces back. A plain-English checklist.",
    category: "Guides",
    date: "2026-10-06",
    readTime: "6 min read",
    cover: {
      src: "/images/insights/prepress.jpg",
      alt: "Designer checking print-ready artwork, bleed guides and colour proofs on screen",
    },
    body: `Most print disasters don't happen on the press. They happen at export — a missing bleed, a low-resolution photo, a font that never made the trip. Here's the plain-English checklist we wish every client laminated to their desk.

## 1. Bleed: give us something to trim

Printing presses grip paper; they can't print to the absolute edge. So artwork must extend **3mm beyond the final trim size** on every side that touches an edge. That extension is the *bleed*.

- Business card (90 × 50mm): supply artwork at **96 × 56mm**.
- A4 flyer: supply at **216 × 303mm**.
- Keep text and logos at least **5mm inside** the trim line — the "safe zone" — so trimming tolerances never nibble your words.

## 2. Resolution: 300 is the magic number

Screens are forgiving at 72 pixels per inch. Print is not.

- **Photos and artwork: 300dpi** at final size.
- **Large-format banners** viewed from a distance: 100–150dpi at final size is usually fine.
- That image you pulled off WhatsApp or your website? Almost certainly 72dpi. It will print soft or pixelated — we'll flag it, but a better source file saves a day.

## 3. Colour & fonts

As we covered in [RGB vs CMYK](/insights/rgb-vs-cmyk-why-colours-look-different-in-print), exports should be CMYK. And fonts: either **embed** them in your PDF (most export presets do this automatically) or convert text to outlines. A missing font is a silent reflow waiting to happen.

## 4. Export a proper print PDF

- Use **"PDF/X-1a"** or **"High Quality Print"** presets — never "Smallest File Size".
- Include bleed and crop marks (there's a checkbox for both).
- One file per item, pages in reading order. For booklets, *don't* impose or shuffle pages — that's our job, and our imposition software does it precisely for our presses.

## When in doubt, send what you have

Honestly? Don't let this list intimidate you. Send us what you have — Word file, Canva link, a sketch photographed on your phone. Preflight is free at Justprints, and we'll tell you exactly what's needed to make it press-ready. That's what a print partner is for.`,
  },
  {
    slug: "paper-choices-explained-gsm-coated-uncoated",
    title: "Paper Choices Explained: GSM, Coated vs Uncoated, and Finishes",
    excerpt:
      "Paper is 50% of how a print piece feels. GSM, coated versus uncoated, laminates and soft-touch — a hands-on guide to choosing stock that elevates your project.",
    category: "Materials",
    date: "2026-09-22",
    readTime: "5 min read",
    cover: {
      src: "/images/textures/paper.jpg",
      alt: "Close-up of premium paper stocks in a fan of white and cream sheets",
    },
    body: `Ask two printers to quote the "same" flyer and the price difference is often not the printing — it's the paper. Stock is half of how a piece *feels* in the hand, and feel is half of how your brand is judged. Here's how to choose like a pro.

## GSM: the weight of first impressions

**GSM** (grams per square metre) is paper weight. Higher means thicker, stiffer, more substantial:

- **80–100gsm** — office paper, book interiors, letterheads
- **130–170gsm** — flyers, brochures, posters (the sweet spot)
- **250–350gsm** — covers, postcards, folders
- **350–600gsm** — business cards, invitations, luxury packaging

A business card on 250gsm feels apologetic. On 400gsm, it feels like a commitment. Same design, totally different handshake.

## Coated versus uncoated

**Coated** paper (gloss or silk/matte) has a smooth mineral layer on the surface. Ink sits on top, so colours look vivid and photographs look sharp. Choose it for image-heavy brochures, magazines and flyers.

**Uncoated** paper is natural and porous — think book pages. Ink sinks in slightly, giving a softer, warmer, more honest look. It writes beautifully (ever tried signing a glossy card?), which makes it ideal for letterheads, notebooks and literary books.

Rule of thumb: **photographs love coated; words love uncoated.**

## Finishes: the final 10% that does 50% of the work

- **Matte lamination** — a smooth, glare-free protective film. The modern default for covers and cards.
- **Gloss lamination** — punchy shine and protection; great for flyers that live hard lives.
- **Soft-touch lamination** — a velvet feel people cannot stop rubbing. Use sparingly; it shows fingerprints on very dark designs.
- **Foil stamping** — metallic red, gold or silver, pressed into the stock. Instant luxury.
- **Embossing / debossing** — raised or pressed detail you feel before you see.

## Our advice? Come and touch

We keep a paper library at the Asata press. Twenty minutes of handling stocks will teach you more than twenty articles — including this one. And if you're far away, we'll courier you a sample pack. Great print starts in the hand, not on the screen.`,
  },
  {
    slug: "binding-types-compared",
    title: "Binding Types Compared: Perfect, Hardcover, Saddle Stitch & More",
    excerpt:
      "The binding decides how your publication opens, ages and impresses. A practical comparison of the five bindings we use most — and when to choose each.",
    category: "Book Production",
    date: "2026-09-08",
    readTime: "6 min read",
    cover: {
      src: "/images/textures/binding.jpg",
      alt: "Close-up of thread-sewn book binding signatures",
    },
    body: `Readers judge a book by its cover; owners judge it by its binding. Choose right and your publication opens flat, survives years of handling, and quietly signals quality. Choose wrong and pages start escaping by month three. Here's the practical rundown.

## Saddle stitch — the stapled classic

Folded sheets, two staples through the spine. Think brochures, programmes, newsletters and slim magazines.

- **Best for:** 8–64 pages (paper-weight dependent)
- **Pros:** fast and economical; opens completely flat
- **Watch out:** page creep on thicker documents (we compensate in imposition)

## Perfect bound — the paperback standard

Pages gathered into a block, spine milled, glued into a wraparound cover. Your standard novel or business report.

- **Best for:** 40–400+ pages — books, catalogues, reports
- **Pros:** printable spine, bookshelf-ready, cost-effective at volume
- **Watch out:** doesn't lay flat; allow generous inner margins

## Hardcover (case bound) — the heirloom

Sewn or glued book block cased into rigid board covers. This is the binding of memoirs, coffee-table books and anything meant to outlive its author.

- **Best for:** premium books, yearbooks, limited editions
- **Pros:** unmistakable presence; the most durable option; supports foil, deboss, cloth and printed endpapers
- **Pair it with:** **Smyth-sewn** signatures — thread-sewn sections that open flat and essentially never fall apart

## Wire-O / spiral — the workhorse

Punched holes and a metal or plastic coil. Un glamorous? Maybe. Indispensable? Absolutely — for items meant to lie flat and fold back on themselves.

- **Best for:** manuals, notebooks, calendars, training materials
- **Pros:** true lay-flat, 360° fold-back, pages turn effortlessly

## Screw post & presentation binding — the portfolio choice

Chicago screws or posts bind loose sheets you can later swap. Menus, portfolios and tender documents love it.

## Still torn?

Tell us three things — **page count, budget, and how the piece will be used** — and we'll recommend the binding in one message. Or visit the press and bind nothing yet: just open a few samples and let your hands decide.`,
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
