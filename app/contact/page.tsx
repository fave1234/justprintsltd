import type { Metadata } from "next";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = pageMeta(
  "Contact & Get a Quote",
  "Start your print project with Justprints by PlusFrica. Chat on WhatsApp, request a free quote, or visit the press at 8 Owerri Road, Asata, Enugu, Nigeria.",
  "/contact"
);

const QUICK_CHAT = [
  { label: "Book Printing", message: WA_MESSAGES.book, icon: "book" as const },
  { label: "Branding & Design", message: WA_MESSAGES.branding, icon: "fingerprint" as const },
  { label: "General Enquiry", message: WA_MESSAGES.general, icon: "chat" as const },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <>
      <section className="pb-16 pt-36 lg:pt-44">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">Contact · Get a Quote</p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-ink dark:text-paper sm:text-6xl">
              Let’s talk about what you’re{" "}
              <em className="not-italic text-brand">making</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke-dark dark:text-smoke-light">
              Two easy ways in: tap a WhatsApp shortcut below for an instant
              chat, or send the detailed quote form — we reply within one
              business day, usually much faster.
            </p>
          </Reveal>

          {/* Quick WhatsApp paths */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {QUICK_CHAT.map((q, i) => (
              <Reveal key={q.label} delay={i * 0.08}>
                <a
                  href={waLink(q.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line-light bg-paper-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/60 hover:shadow-[0_18px_40px_-20px_rgba(37,211,102,0.45)] dark:border-line-dark dark:bg-ink-mute"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366]/12 text-[#128C4B] transition-transform duration-300 group-hover:scale-110 dark:text-[#4ade80]">
                    <Icon name={q.icon} size={21} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink dark:text-paper">
                      {q.label}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-smoke">
                      <Icon name="whatsapp" size={13} className="text-[#25D366]" />
                      Pre-filled WhatsApp chat
                    </span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    size={16}
                    className="ml-auto text-smoke transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25D366]"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site pb-24 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Quote form */}
          <Reveal>
            <div className="rounded-3xl border border-line-light bg-paper-white p-7 dark:border-line-dark dark:bg-ink-mute sm:p-9">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-paper sm:text-3xl">
                Request a free quote
              </h2>
              <p className="mb-8 mt-2 text-sm text-smoke-dark dark:text-smoke-light">
                The more detail you give us, the sharper the quote.
              </p>
              <QuoteForm initialType={type} />
            </div>
          </Reveal>

          {/* Info panel */}
          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-line-light bg-paper-white p-7 dark:border-line-dark dark:bg-ink-mute">
                <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                  <Icon name="mapPin" size={19} className="text-brand" />
                  Visit the press
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute dark:text-paper/80">
                  {SITE.address.primary}
                </p>
                <p className="mt-2 text-xs text-smoke">
                  Previously: {SITE.address.previous}
                </p>
                <div className="mt-5 overflow-hidden rounded-xl border border-line-light dark:border-line-dark">
                  <iframe
                    title="Map — Justprints by PlusFrica, 8 Owerri Road, Asata, Enugu"
                    src={SITE.address.mapEmbed}
                    width="100%"
                    height="240"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-60 w-full grayscale-[0.3] dark:grayscale dark:invert-[0.92] dark:hue-rotate-180"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-line-light bg-paper-white p-7 dark:border-line-dark dark:bg-ink-mute">
                <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                  <Icon name="phone" size={19} className="text-brand" />
                  Call or write
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {SITE.phones.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={`tel:+${p.raw}`}
                        className="inline-flex items-center gap-2.5 text-ink-mute transition-colors hover:text-brand dark:text-paper/80"
                      >
                        <Icon name="phone" size={15} className="text-smoke" />
                        {p.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="inline-flex items-center gap-2.5 text-ink-mute transition-colors hover:text-brand dark:text-paper/80"
                    >
                      <Icon name="mail" size={15} className="text-smoke" />
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-line-light bg-paper-white p-7 dark:border-line-dark dark:bg-ink-mute">
                <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                  <Icon name="clock" size={19} className="text-brand" />
                  Opening hours
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {SITE.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between border-b border-dashed border-line-light pb-2.5 last:border-0 last:pb-0 dark:border-line-dark"
                    >
                      <span className="text-ink-mute dark:text-paper/80">{h.days}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "text-smoke"
                            : "font-semibold text-ink dark:text-paper"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
