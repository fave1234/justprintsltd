import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";

export default function CTABand() {
  return (
    <section className="pb-24 pt-4 lg:pb-32" aria-labelledby="cta-band">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand to-brand-500 px-7 py-16 text-center text-white sm:px-12 lg:py-20">
            {/* decorative print dots */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1.6px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-ink/30 blur-3xl"
            />

            <div className="relative flex flex-col items-center gap-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                Ready when you are
              </p>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tightest sm:text-5xl">
                Let’s make something worth holding onto.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/85">
                A book, a brand, a whole event — tell us the vision and we’ll
                bring it to life on press. Replies within the hour.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href="/contact" variant="light" size="lg" arrow>
                  Get a Free Quote
                </ButtonLink>
                <ButtonLink
                  href={waLink(WA_MESSAGES.quote)}
                  external
                  size="lg"
                  className="border border-white/40 text-white hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon name="whatsapp" size={18} />
                    Chat on WhatsApp
                  </span>
                </ButtonLink>
              </div>
              <p className="text-xs text-white/70">
                Or call {SITE.phones[0].label} — we actually answer.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
