import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WA_MESSAGES, waLink } from "@/lib/site";

export default function CTABand() {
  return (
    <section className="pb-16 pt-2 lg:pb-20" aria-labelledby="cta-band">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-brand px-7 py-14 text-center text-white sm:px-12 lg:py-16">
            {/* halftone dot texture — a nod to print */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative flex flex-col items-center gap-7">
              <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.06] sm:text-5xl">
                Let’s make something worth holding onto.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3.5">
                <ButtonLink href="/contact" variant="light" size="lg" arrow>
                  Get a free quote
                </ButtonLink>
                <ButtonLink
                  href={waLink(WA_MESSAGES.quote)}
                  external
                  size="lg"
                  className="border border-white/40 text-white hover:bg-white/10"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon name="whatsapp" size={18} />
                    WhatsApp
                  </span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
