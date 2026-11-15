import Image from "next/image";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = pageMeta(
  "Services",
  "Book printing & publishing, graphic design, branding & identity, commercial printing and event branding — five crafts under one roof at Justprints by PlusFrica, Enugu.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="pb-10 pt-36 lg:pt-44">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">Services</p>
            <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.04] tracking-normal text-ink dark:text-mist sm:text-6xl">
              Everything your idea needs to{" "}
              <em className="not-italic text-brand">exist beautifully</em>.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-steel dark:text-steel-light">
              Five crafts, one roof — every engagement ends with something
              you’re proud to hold.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-site flex flex-col gap-20 pb-24 pt-10 lg:gap-28 lg:pb-32">
        {SERVICES.map((service, i) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28"
            aria-labelledby={`service-${service.id}`}
          >
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-5xl bg-mist-soft">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-ink/70 text-white backdrop-blur-sm">
                    <Icon name={service.icon as "book"} size={22} />
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="eyebrow mb-3">0{i + 1}</p>
                <h2
                  id={`service-${service.id}`}
                  className="font-display text-3xl font-extrabold leading-tight tracking-normal text-ink dark:text-mist sm:text-4xl"
                >
                  {service.title}
                </h2>
                <p className="mt-5 leading-relaxed text-steel-dark dark:text-steel-light">
                  {service.description}
                </p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink dark:text-mist">
                  What’s included
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-ink-mute dark:text-mist/80"
                    >
                      <Icon
                        name="check"
                        size={16}
                        className="mt-0.5 shrink-0 text-brand"
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-4">
                  <ButtonLink
                    href={`/contact?type=${encodeURIComponent(service.title)}`}
                    arrow
                  >
                    Request a quote
                  </ButtonLink>
                  <ButtonLink href="/work" variant="outline">
                    See it in action
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
