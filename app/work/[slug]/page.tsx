import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, getProject } from "@/lib/data";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.category} | Work`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${SITE.name}`,
      description: project.summary,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = PROJECTS.indexOf(project);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
        <div className="container-site">
          <Reveal>
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-brand"
            >
              <Icon name="arrowRight" size={15} className="rotate-180" />
              Back to all work
            </Link>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <p className="eyebrow mb-4">
                {project.category} · {project.year}
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-normal text-ink dark:text-mist sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg leading-relaxed text-steel-dark dark:text-steel-light">
                {project.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line-light px-3.5 py-1.5 text-xs font-medium text-ink-mute dark:border-line-dark dark:text-mist/75"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="container-site">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-5xl bg-mist-soft">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Details + gallery */}
      <section className="py-16 lg:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex max-w-xl flex-col gap-6">
              <h2 className="font-display text-3xl font-extrabold tracking-normal text-ink dark:text-mist">
                Behind the piece
              </h2>
              {project.description.map((para, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-steel-dark dark:text-steel-light"
                >
                  {para}
                </p>
              ))}
              <div className="mt-4 flex flex-wrap gap-4">
                <ButtonLink
                  href={`/contact?type=${encodeURIComponent(project.services[0])}`}
                  arrow
                >
                  Request something similar
                </ButtonLink>
                <ButtonLink
                  href={waLink(
                    `Hello Justprints! I saw "${project.title}" on your website and I'd love something similar for my project.`
                  )}
                  external
                  variant="outline"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon name="whatsapp" size={17} />
                    WhatsApp us
                  </span>
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <Reveal key={img.src + i} delay={i * 0.08}>
                <div
                  className={`relative overflow-hidden rounded-4xl bg-mist-soft ${
                    i === 0 ? "aspect-[3/4] sm:row-span-2 sm:h-full sm:min-h-[32rem]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <nav
        aria-label="More projects"
        className="border-t border-line-light dark:border-line-dark"
      >
        <div className="container-site grid sm:grid-cols-2">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col gap-2 border-b border-line-light py-10 transition-colors sm:border-b-0 sm:border-r sm:pr-8 dark:border-line-dark"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-brand">
              <Icon name="chevronLeft" size={14} /> Previous project
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand dark:text-mist">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col items-start gap-2 py-10 text-left transition-colors sm:items-end sm:pl-8 sm:text-right"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel transition-colors group-hover:text-brand">
              Next project <Icon name="chevronRight" size={14} />
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-brand dark:text-mist">
              {next.title}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
