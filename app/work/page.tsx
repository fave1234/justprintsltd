import type { Metadata } from "next";
import WorkGrid from "@/components/work/WorkGrid";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/home/CTABand";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta(
  "Work — Portfolio",
  "A gallery of premium print by Justprints by PlusFrica: books, brand identities, event materials and corporate print — bound, foiled and finished with obsession in Enugu, Nigeria.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <section className="pb-8 pt-36 lg:pt-44">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-4">Our Work</p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tightest text-ink dark:text-paper sm:text-6xl">
              The proof is in the{" "}
              <em className="not-italic text-brand">print</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke-dark dark:text-smoke-light">
              Every piece below left our press after a 21-point finishing check.
              Filter by craft and look closely — the details are the point.
            </p>
          </Reveal>
          <div className="mt-12">
            <WorkGrid />
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
