import type { Metadata } from "next";
import { PROCESS_STEPS } from "@/lib/data";
import { pageMeta } from "@/lib/metadata";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTABand from "@/components/home/CTABand";

export const metadata: Metadata = pageMeta(
  "Our Process",
  "From consultation and design through proofing, printing, finishing and delivery — the transparent six-step Justprints process that keeps you in control.",
  "/process"
);

export default function ProcessPage() {
  return (
    <>
      <section className="pb-16 pt-36 lg:pt-44">
        <div className="container-site">
          <Reveal>
            <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.04] text-ink dark:text-mist sm:text-6xl">
              How it works.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-site pb-24 lg:pb-28">
        <ol className="relative mx-auto flex max-w-3xl flex-col">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[1.65rem] top-8 w-px bg-gradient-to-b from-brand/60 via-line-light to-transparent dark:via-line-dark sm:left-[2.15rem]"
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.05 * i}>
              <li className="relative flex gap-6 py-8 sm:gap-9">
                <span className="relative z-10 grid h-[3.3rem] w-[3.3rem] shrink-0 place-items-center rounded-4xl border border-brand/40 bg-mist text-brand shadow-[0_0_0_6px] shadow-mist dark:bg-ink dark:shadow-ink sm:h-[4.3rem] sm:w-[4.3rem]">
                  <Icon name={step.icon as "chat"} size={24} />
                </span>
                <div className="pt-1">
                  <p className="font-display text-lg font-extrabold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-ink dark:text-mist sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-steel-dark dark:text-steel-light">
                    {step.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <CTABand />
    </>
  );
}
