import Image from "next/image";
import type { Metadata } from "next";
import { ABOUT_STATS, VALUES } from "@/lib/data";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/metadata";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/home/CTABand";

export const metadata: Metadata = pageMeta(
  "About",
  "From In-Grace Digital Resources Africa to Justprints by PlusFrica Ltd (RC7805223) — 8+ years of print craftsmanship in Enugu, now part of the PlusFrica Group.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="pb-20 pt-36 lg:pt-44">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-ink dark:text-paper sm:text-6xl">
              Eight years of ink.{" "}
              <em className="not-italic text-brand">One new name.</em>
            </h1>
            <div className="mt-7 flex flex-col gap-5 leading-relaxed text-smoke-dark dark:text-smoke-light">
              <p>
                For over eight years we operated as{" "}
                <strong className="font-semibold text-ink dark:text-paper">
                  In-Grace Digital Resources Africa
                </strong>{" "}
                — quietly becoming the press Enugu’s authors, schools, churches
                and businesses trusted when the work had to be right.
              </p>
              <p>
                Today we are{" "}
                <strong className="font-semibold text-ink dark:text-paper">
                  Justprints by PlusFrica Ltd
                </strong>{" "}
                ({SITE.rc}), a registered subsidiary of the PlusFrica Group (
                {SITE.groupRc}). New name, same obsession: craftsmanship,
                honest timelines, and treating every client like royalty.
              </p>
              <p>
                Part of the PlusFrica Group — committed to strengthening
                Africa’s economic framework through innovative solutions, one
                beautifully finished sheet at a time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/workspace.jpg"
                alt="Inside the Justprints press room — an operator checking colour on a large-format press"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/80">
                  The press room · Asata, Enugu
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <dl className="container-site mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-light bg-line-light dark:border-line-dark dark:bg-line-dark lg:grid-cols-4">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 bg-paper px-4 py-9 text-center dark:bg-ink"
            >
              <dt className="order-2 text-xs font-semibold uppercase tracking-[0.18em] text-smoke">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-semibold tracking-tightest text-brand sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Values */}
      <section className="border-y border-line-light bg-paper-white py-24 dark:border-line-dark dark:bg-ink-soft">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">What We Live By</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-ink dark:text-paper sm:text-5xl">
              Values you can feel in the paper.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-line-light bg-paper p-7 dark:border-line-dark dark:bg-ink">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon name={v.icon as "gem"} size={22} />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
                    {v.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership + Group */}
      <section className="py-24 lg:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/images/about/ceo-portrait.jpg"
                alt="Dr. Chiedozie Gideon Okeke, CEO of Justprints by PlusFrica Ltd"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tightest text-ink dark:text-paper sm:text-5xl">
              Dr. Chiedozie Gideon Okeke
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Chief Executive Officer
            </p>
            {/* PLACEHOLDER bio — replace with client's approved text */}
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-smoke-dark dark:text-smoke-light">
              <p>
                Dr. Okeke has led the company through its growth from In-Grace
                Digital Resources Africa to Justprints by PlusFrica Ltd —
                championing a simple conviction: that African print can stand
                shoulder to shoulder with anything produced anywhere in the
                world.
              </p>
              <p>
                Under his leadership the press has become the publishing
                partner of choice for authors across the South East, while
                expanding into full branding, design and event production for
                clients nationwide.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-brand pl-6 font-display text-xl italic leading-relaxed text-ink dark:text-paper">
              “Quality that speaks without words — that is the only kind of
              print we will ever put our name on.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* PlusFrica Group band */}
      <section className="container-site pb-24 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-14 text-center sm:px-12 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">
              A PlusFrica Company
            </p>
            <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
              Part of the PlusFrica Group of Companies
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-paper/70">
              Committed to strengthening Africa’s economic framework through
              innovative solutions — in print, in design, and in every
              partnership we build.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
