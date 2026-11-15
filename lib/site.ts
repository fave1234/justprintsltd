/**
 * Central site constants — Justprints by PlusFrica Ltd
 * Single source of truth for contact details, messaging and integrations.
 */

export const SITE = {
  name: "Justprints by PlusFrica",
  shortName: "Justprints",
  legalName: "Justprints by PlusFrica Ltd",
  group: "PlusFrica Group",
  rc: "RC7805223",
  groupRc: "RC 1713477",
  description:
    "Justprints by PlusFrica Ltd — premium printing, branding, graphic design and book publishing in Enugu, Nigeria. Books, brands and events: designed, printed, delivered.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://justprints.ng",

  email: "justprintsltd1@gmail.com",

  phones: [
    { label: "+234 810 443 3169", raw: "2348104433169" },
    { label: "+234 907 694 8741", raw: "2349076948741" },
  ] as const,

  whatsappPrimary: "2348104433169",

  address: {
    primary: "8 Owerri Road (Former St. Patrick Hospital), Asata, Enugu, Nigeria",
    previous: "Suite 305, CBN Center for Economics and Finance, UNEC, Enugu",
    city: "Enugu",
    country: "Nigeria",
    mapEmbed:
      "https://www.google.com/maps?q=8+Owerri+Road+Asata+Enugu+Nigeria&output=embed",
  },

  // PLACEHOLDER — confirm real hours with the client
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // PLACEHOLDER — confirm real handles with the client
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/justprintsltd" },
    { name: "Instagram", href: "https://www.instagram.com/justprintsltd" },
  ],

  hashtags: ["#JustprintsLtd", "#Justprintspublishing", "#Justprints"],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

/** Build a wa.me WhatsApp link with a pre-filled message. */
export function waLink(message: string, phone: string = SITE.whatsappPrimary) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Smart pre-filled WhatsApp messages per enquiry type. */
export const WA_MESSAGES = {
  general:
    "Hello Justprints! 👋 I'd like to make an enquiry about a print project.",
  book: "Hello Justprints! 📚 I'm interested in book printing / publishing. Here are the details of my project:\n\n• Title/Type of book:\n• Approx. page count:\n• Quantity:\n• Timeline:",
  branding:
    "Hello Justprints! ✨ I need branding / design services. Here's what I have in mind:\n\n• Business/Project name:\n• What I need (logo, stationery, packaging…):\n• Timeline:",
  event:
    "Hello Justprints! 🎪 I'm organising an event and need branding / large-format printing. Details:\n\n• Event type:\n• Date:\n• Items needed (banners, backdrop, programmes…):",
  quote: "Hello Justprints! I'd like a free quote for a project. Details below:\n\n",
} as const;

/** Fire a GA4 conversion event when analytics is enabled. */
export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", action, params);
  }
}
