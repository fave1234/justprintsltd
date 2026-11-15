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
            <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.04] text-ink dark:text-mist sm:text-6xl">
              Selected work.
            </h1>
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
