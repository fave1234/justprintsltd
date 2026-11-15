import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const TEASER_STEPS = [0, 1, 3, 5].map((i) => PROCESS_STEPS[i]);

export default function ProcessTeaser() {
  return (
    <section
      className="border-y border-line-light bg-white py-16 dark:border-line-dark dark:bg-ink-soft lg:py-20"
      aria-labelledby="process-teaser"
    >
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Process" title="Brief to shelf in four moves." />
          <Reveal delay={0.1}>
            <ButtonLink href="/process" variant="outline" arrow>
              The full process
            </ButtonLink>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TEASER_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative flex flex-col gap-3">
                {i < TEASER_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-10 right-[-1.5rem] top-4 hidden border-t border-line-light dark:border-line-dark lg:block"
                  />
                )}
                <span className="relative font-display text-3xl font-extrabold text-brand">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-ink dark:text-mist">
                  {step.title}
                </h3>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
