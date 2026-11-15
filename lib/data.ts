/**
 * Content model — Justprints by PlusFrica Ltd
 * ─────────────────────────────────────────────
 * Portfolio projects, services, process steps, testimonials and articles.
 * NOTE: items flagged PLACEHOLDER in PLACEHOLDERS.md should be replaced
 * with real client content before launch.
 */

// ─── Portfolio ───────────────────────────────────────────────

export const PROJECT_CATEGORIES = ["All", "Books", "Other"] as const;

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
    slug: "women-without-walls",
    title: "Women Without Walls",
    category: "Books",
    year: "2026",
    client: "Katherine Chukwujama",
    summary:
      "Katherine Chukwujama's author edition — cover to bound copies, with the Justprints imprint on the back.",
    description: [
      "Women Without Walls — “Rise above challenges and thrive in all ramifications” — came in as a manuscript and left as a finished book. Cover design, interior layout and binding were all handled under one roof.",
      "Every copy passed our finishing inspection before delivery. The back cover carries the Justprints imprint beside the book's ISBN — our mark on a title we're proud of.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/women-without-walls.jpg",
      alt: "Front and back cover of Women Without Walls by Katherine Chukwujama",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Press operators running a colour job at the Justprints press room",
      },
      {
        src: "/images/textures/binding.jpg",
        alt: "Close-up of thread binding in a book block",
      },
    ],
    featured: true,
  },
  {
    slug: "brain-bank",
    title: "Brain Bank",
    category: "Books",
    year: "2026",
    client: "Katherine Chukwujama",
    summary:
      "Unlocking the power of mental wealth — Katherine Chukwujama's paperback, from cover artwork to bound run.",
    description: [
      "Brain Bank is built on one idea: your mind is an asset. Its money-brain cover made the point before a page was opened — and kept the bindery honest on a dense black wrap.",
      "The wraparound cover — back, spine and front — was set as a single piece, so the author's portrait and bio sit exactly where they should.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/brain-bank.jpg",
      alt: "Brain Bank by Katherine Chukwujama — money-filled brain artwork on a black cover",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Colour being checked on press at the Justprints press room",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Close-up of uncoated book paper stock",
      },
    ],
    featured: true,
  },
  {
    slug: "the-new-you",
    title: "The New You",
    category: "Books",
    year: "2026",
    client: "Sam Iheanacho",
    summary:
      "Designing Your Perfect Future — Sam Iheanacho's paperback, printed with the Justprints imprint on the back cover.",
    description: [
      "Lead pastor and management consultant Sam Iheanacho brought us The New You — interior pages, cover and finishing, end to end.",
      "The back cover carries our imprint: a mark we only put on books we're proud of.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/the-new-you.jpg",
      alt: "Front and back cover of The New You by Sam Iheanacho",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "The Justprints press room mid-production",
      },
      {
        src: "/images/textures/binding.jpg",
        alt: "Binding detail on a finished book block",
      },
    ],
    featured: true,
  },
  {
    slug: "from-novice-to-top-selling-realtor",
    title: "From Novice to Top Selling Realtor",
    category: "Books",
    year: "2026",
    client: "Jeff Anozie",
    summary:
      "Jeff Anozie's guide to building a real-estate marketing business in Nigeria — a full paperback run, trimmed and boxed.",
    description: [
      "From Novice to Top Selling Realtor is Jeff Anozie's field manual for property sales in Nigeria — typeset, printed and perfect-bound at our press.",
      "The finished run left the bindery stacked and boxed — ready for readers, trainings and signing tables.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/from-novice-to-top-selling-realtor.jpg",
      alt: "From Novice to Top Selling Realtor by Jeff Anozie — paperback covers",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Operators at the large-format press in the Justprints press room",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Book paper sheets ready for the press",
      },
    ],
    featured: true,
  },
  {
    slug: "ilead",
    title: "iLead",
    category: "Books",
    year: "2026",
    client: "Solomon Umezude, Solomon C. Okeke & Gideon C. Okeke",
    summary:
      "Basic leadership tools for emerging leaders — a co-authored paperback with a marble-and-gold cover.",
    description: [
      "Three authors, one book: iLead gathers leadership lessons from Solomon Umezude, Solomon C. Okeke and Gideon C. Okeke — the “Meet the Authors” spread was typeset in-house along with the full interior.",
      "The bright gold cover art was colour-checked against an approved proof before the run went to press.",
    ],
    services: ["Book Printing & Publishing", "Graphic Design"],
    cover: {
      src: "/images/work/ilead.jpg",
      alt: "iLead — Basic leadership tools for emerging leaders, with chess-piece cover",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "The Justprints press room during production",
      },
      {
        src: "/images/textures/foil.jpg",
        alt: "Gold detail on a printed cover, close-up",
      },
    ],
  },
  {
    slug: "when-purpose-meets-people",
    title: "When Purpose Meets People",
    category: "Books",
    year: "2026",
    client: "Uzor Jonathan",
    summary:
      "Uzor Jonathan's paperback run — off press, shrink-wrapped in sets and boxed for distribution.",
    description: [
      "When Purpose Meets People — “Harnessing the Treasures of Strategic Relationships” — went from press to bindery to shrink-wrapped stacks, ready for Uzor Jonathan's readers.",
      "The monochrome cover is dense black and fine detail. The photo shows the result better than we could describe it.",
    ],
    services: ["Book Printing & Publishing"],
    cover: {
      src: "/images/work/when-purpose-meets-people.jpg",
      alt: "Shrink-wrapped copies of When Purpose Meets People by Uzor Jonathan",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Printing under way at the Justprints press room",
      },
      {
        src: "/images/textures/binding.jpg",
        alt: "Trimmed and bound book blocks, close-up",
      },
    ],
  },
  {
    slug: "youre-easy-to-ignore",
    title: "You're Easy to Ignore",
    category: "Books",
    year: "2026",
    client: "Jeff Anozie",
    summary:
      "Jeff Anozie's title at its author launch — the finished book, in the author's hands.",
    description: [
      "At the launch of You're Easy to Ignore, Jeff Anozie held the finished copy up for the cameras — the same edition our press produced.",
      "A book launch is where print quality meets its audience. This one arrived on time and on brief.",
    ],
    services: ["Book Printing & Publishing"],
    cover: {
      src: "/images/work/youre-easy-to-ignore.jpg",
      alt: "Jeff Anozie holding a copy of You're Easy to Ignore at the book launch",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "The Justprints press room, where the edition was produced",
      },
      {
        src: "/images/textures/paper.jpg",
        alt: "Uncoated book paper, close-up",
      },
    ],
  },
  {
    slug: "campaign-caps",
    title: "Campaign Caps",
    category: "Other",
    year: "2026",
    summary:
      "Full-colour branded caps for a political campaign — merchandise produced alongside our large-format work.",
    description: [
      "Campaign merchandise has one rule: it must read clearly from across the street. These caps carry a bold, high-contrast mark on white.",
      "Merchandise sits alongside our banners and event materials — small items, produced to the same standard.",
    ],
    services: ["Event Branding & Large Format"],
    cover: {
      src: "/images/work/campaign-caps.jpg",
      alt: "White branded campaign caps produced by Justprints",
    },
    gallery: [
      {
        src: "/images/about/workspace.jpg",
        alt: "Production under way at the Justprints press room",
      },
      {
        src: "/images/textures/foil.jpg",
        alt: "Close-up of a branded print finish",
      },
    ],
    featured: true,
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
      src: "/images/work/women-without-walls.jpg",
      alt: "Women Without Walls — a title printed and bound by Justprints",
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
      alt: "Press operators checking colour at the Justprints press room",
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
      src: "/images/work/campaign-caps.jpg",
      alt: "Branded campaign caps produced by Justprints",
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
    title: "Obsessive Quality",
    text: "Every job passes a 21-point finishing inspection before it ships.",
  },
  {
    icon: "book",
    title: "Publishing Excellence",
    text: "Books built to stand on any shelf in the world.",
  },
  {
    icon: "palette",
    title: "Design + Print, One Roof",
    text: "Engineered for press from the first artboard. Nothing lost in translation.",
  },
  {
    icon: "crown",
    title: "Treated Like Royalty",
    text: "One contact. Honest timelines. Proactive updates, always.",
  },
] as const;

// ─── Process ─────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    icon: "chat",
    title: "Consultation & Brief",
    text: "We listen first. On WhatsApp, a call, or over coffee at Asata — we capture your vision, audience, quantity, timeline and budget, then recommend the smartest route.",
  },
  {
    icon: "pen",
    title: "Design & Layout",
    text: "If you need design, our studio concepts, typesets and lays out your project — engineered for print from the first artboard. Already have artwork? We preflight it for free.",
  },
  {
    icon: "eye",
    title: "Proofing & Approval",
    text: "You review a digital proof — and for books and large runs, a physical press proof. Nothing goes to press until you say the words: approved.",
  },
  {
    icon: "printer",
    title: "Printing",
    text: "Your job hits the press — offset for volume, digital for speed. Colour is calibrated and checked sheet by sheet against your approved proof.",
  },
  {
    icon: "checkbadge",
    title: "Finishing & Quality Check",
    text: "Binding, trimming, foiling, laminating — then our 21-point finishing inspection. If a copy isn't perfect, it doesn't ship. Simple.",
  },
  {
    icon: "truck",
    title: "Delivery / Collection",
    text: "Collect at our Asata press or have it delivered to your door, anywhere in Nigeria. We confirm safe arrival — treated like royalty, remember?",
  },
] as const;

// ─── Testimonials (first entry real — client review via WhatsApp;
//     remainder PLACEHOLDER, replace as real quotes arrive) ───

export const TESTIMONIALS = [
  {
    quote: "The journal is beautifully good and well illustrated. Well done. Thank you.",
    name: "Journal client",
    role: "WhatsApp review",
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
    body: `Every designer has lived this heartbreak: a poster that blazed coral-red on the monitor comes off the press looking… subdued. Nobody made a paperake. Your screen and our press simply speak two different colour languages.

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
      alt: "Press operators reviewing a fresh print at the Justprints press room",
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
- **Pros:** unpaperakable presence; the most durable option; supports foil, deboss, cloth and printed endpapers
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
