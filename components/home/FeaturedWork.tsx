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
  const scrollBy = (dir: 1 | -1) =>
    railRef.current?.scrollBy({ left: dir * 460, behavior: "smooth" });

  return (
    <section className="py-16 lg:py-20" aria-labelledby="featured-work">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Work" title="Print worth staring at." />
          <Reveal className="flex items-center gap-3" delay={0.1}>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll featured work backwards"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink dark:border-mist/30 dark:text-mist dark:hover:border-mist"
            >
              <Icon name="chevronLeft" size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll featured work forwards"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink dark:border-mist/30 dark:text-mist dark:hover:border-mist"
            >
              <Icon name="chevronRight" size={17} />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} y={36}>
        <div
          ref={railRef}
          className="rail-scroll mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-75rem)/2+2rem))]"
        >
          {FEATURED_PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group w-[78vw] max-w-[25rem] shrink-0 snap-start rounded-4xl bg-white p-3 pb-6 transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 dark:bg-ink-soft sm:w-[25rem]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist-soft dark:bg-ink">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  priority={i < 2}
                />
                <span className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-ink opacity-0 backdrop-blur-md transition-opacity duration-400 group-hover:opacity-100">
                  <Icon name="arrowUpRight" size={17} />
                </span>
              </div>
              <div className="px-4 pt-5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-1.5 font-display text-[1.4rem] font-bold text-ink dark:text-mist">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}

          <Link
            href="/work"
            className="group grid w-[60vw] max-w-[19rem] shrink-0 snap-start place-items-center rounded-4xl bg-mist-soft text-center transition-colors hover:bg-mist-soft/70 dark:bg-ink-soft dark:hover:bg-ink-mute sm:w-[19rem]"
          >
            <span className="flex flex-col items-center gap-4 p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 text-ink transition-transform duration-500 group-hover:scale-110 dark:border-mist/30 dark:text-mist">
                <Icon name="arrowRight" size={20} />
              </span>
              <span className="font-display text-xl font-bold text-ink dark:text-mist">
                All work
              </span>
            </span>
          </Link>
        </div>
      </Reveal>

      <div className="container-site mt-6">
        <ButtonLink href="/work" variant="ghost" arrow>
          Browse the full archive
        </ButtonLink>
      </div>
    </section>
  );
}
