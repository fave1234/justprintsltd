"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";

export default function FeaturedWork() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32" aria-labelledby="featured-work">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Print worth staring at."
            lede="A few pieces we’re proud of — bound, foiled, stitched and delivered with obsession."
          />
          <Reveal className="flex items-center gap-3" delay={0.15}>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll featured work backwards"
              className="grid h-12 w-12 place-items-center rounded-full border border-line-light text-ink transition-all hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper"
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll featured work forwards"
              className="grid h-12 w-12 place-items-center rounded-full border border-line-light text-ink transition-all hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper"
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} y={40}>
        <div
          ref={railRef}
          className="rail-scroll mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {FEATURED_PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative w-[80vw] max-w-[26rem] shrink-0 snap-start sm:w-[26rem]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-mute">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, 416px"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <Icon name="arrowUpRight" size={18} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-200">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-paper">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}

          {/* End card → Work page */}
          <Link
            href="/work"
            className="group grid w-[60vw] max-w-[20rem] shrink-0 snap-start place-items-center rounded-2xl border border-dashed border-line-light text-center transition-colors hover:border-brand dark:border-line-dark sm:w-[20rem]"
          >
            <span className="flex flex-col items-center gap-4 p-10">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110">
                <Icon name="arrowRight" size={22} />
              </span>
              <span className="font-display text-xl font-semibold text-ink dark:text-paper">
                See the full archive
              </span>
              <span className="text-sm text-smoke">
                Books · Branding · Events · Corporate
              </span>
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
