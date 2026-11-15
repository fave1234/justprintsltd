import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, formatDate, getArticle } from "@/lib/data";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ArticleBody from "@/components/ArticleBody";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: article.cover.src, alt: article.cover.alt }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: `${SITE.url}${article.cover.src}`,
    author: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.legalName },
  };

  return (
    <>
      <JsonLd data={articleLd} />

      <article>
        {/* Header */}
        <header className="pb-12 pt-36 lg:pt-44">
          <div className="container-site max-w-3xl">
            <Reveal>
              <Link
                href="/insights"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-smoke transition-colors hover:text-brand"
              >
                <Icon name="arrowRight" size={15} className="rotate-180" />
                All insights
              </Link>
              <p className="eyebrow mb-4">{article.category}</p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-ink dark:text-paper sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-smoke">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="calendar" size={14} />
                  {formatDate(article.date)}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>By the {SITE.shortName} press team</span>
              </p>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-mute">
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="container-site max-w-3xl py-14 lg:py-20">
          <Reveal>
            <ArticleBody body={article.body} />
          </Reveal>

          {/* Inline CTA */}
          <Reveal className="mt-14">
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-brand/30 bg-brand/5 p-7 sm:flex-row sm:items-center sm:justify-between dark:bg-brand/10">
              <p className="font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                Have a project in mind after reading this?
              </p>
              <ButtonLink href="/contact" arrow className="shrink-0">
                Get a free quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      <section
        className="border-t border-line-light py-16 dark:border-line-dark"
        aria-labelledby="related-articles"
      >
        <div className="container-site">
          <h2
            id="related-articles"
            className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-paper"
          >
            Keep reading
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group flex gap-5 rounded-2xl border border-line-light p-5 transition-all duration-300 hover:border-brand/50 dark:border-line-dark"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-ink-mute">
                  <Image
                    src={rel.cover.src}
                    alt={rel.cover.alt}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand">
                    {rel.category}
                  </p>
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand dark:text-paper">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-smoke">{rel.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
