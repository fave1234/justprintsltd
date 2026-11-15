import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data";
import Logo from "./Logo";
import Icon from "./Icon";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-line-light bg-paper-white dark:border-line-dark dark:bg-ink-soft">
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
            {SITE.tagline} Premium book printing, branding &amp; design from
            Enugu, Nigeria — for clients who care about quality.
          </p>
          <div className="flex items-center gap-3">
            {SITE.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Justprints on ${s.name}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-line-light text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper/80"
              >
                <Icon name={s.name.toLowerCase() as "facebook"} size={17} />
              </a>
            ))}
          </div>
          <NewsletterForm />
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h3 className="eyebrow mb-1">Explore</h3>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-fit text-sm text-ink-mute transition-colors hover:text-brand dark:text-paper/75 dark:hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Services */}
        <nav aria-label="Services" className="flex flex-col gap-3">
          <h3 className="eyebrow mb-1">Services</h3>
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.id}`}
              className="w-fit text-sm text-ink-mute transition-colors hover:text-brand dark:text-paper/75 dark:hover:text-brand"
            >
              {s.title}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="eyebrow mb-1">Contact</h3>
          <a
            href="https://maps.google.com/?q=8+Owerri+Road+Asata+Enugu+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm leading-relaxed text-ink-mute transition-colors hover:text-brand dark:text-paper/75 dark:hover:text-brand"
          >
            <Icon name="mapPin" size={17} className="mt-0.5 shrink-0 text-brand" />
            {SITE.address.primary}
          </a>
          {SITE.phones.map((p) => (
            <a
              key={p.raw}
              href={`tel:+${p.raw}`}
              className="flex items-center gap-3 text-sm text-ink-mute transition-colors hover:text-brand dark:text-paper/75 dark:hover:text-brand"
            >
              <Icon name="phone" size={17} className="shrink-0 text-brand" />
              {p.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 text-sm text-ink-mute transition-colors hover:text-brand dark:text-paper/75 dark:hover:text-brand"
          >
            <Icon name="mail" size={17} className="shrink-0 text-brand" />
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line-light dark:border-line-dark">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-smoke sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} · {SITE.rc}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            A PlusFrica Company
          </p>
        </div>
      </div>
    </footer>
  );
}
