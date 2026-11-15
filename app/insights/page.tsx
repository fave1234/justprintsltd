import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES, formatDate } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/home/CTABand";

export const metadata: Metadata = pageMeta(
  "Insights — Print Guides & Resources",
  "Practical print wisdom from the Justprints press room: RGB vs CMYK, file preparation, paper choices, binding types and how to get the best from your print project.",
  "/insights"
);

export default function InsightsPage() {
  return (
    <>
      <section className="pb-8 pt-36 lg:pt-44">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">Insights</p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-ink dark:text-paper sm:text-6xl">
              Print wisdom from the{" "}
              <em className="not-italic text-brand">press room</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke-dark dark:text-smoke-light">
              Practical guides that make your next project better — whether you
              print with us or not. (But especially if you print with us.)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-site pb-24 pt-10 lg:pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-light bg-paper-white transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] dark:border-line-dark dark:bg-ink-mute"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.cover.src}
                    alt={article.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-paper backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <p className="flex items-center gap-3 text-xs text-smoke">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="calendar" size={13} />
                      {formatDate(article.date)}
                    </span>
                    <span aria-hidden="true">·</span>
                    {article.readTime}
                  </p>
                  <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand dark:text-paper">
                    {article.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
                    {article.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-brand">
                    Read the guide
                    <Icon
                      name="arrowRight"
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
