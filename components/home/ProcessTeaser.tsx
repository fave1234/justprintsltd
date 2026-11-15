import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";

const TEASER_STEPS = [0, 1, 3, 5].map((i) => PROCESS_STEPS[i]);

export default function ProcessTeaser() {
  return (
    <section
      className="border-y border-line-light bg-paper-white py-24 dark:border-line-dark dark:bg-ink-soft lg:py-32"
      aria-labelledby="process-teaser"
    >
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="How It Works"
            title="From brief to bookshelf in four moves."
            lede="A clear, honest process — you always know what happens next."
          />
          <Reveal delay={0.15}>
            <ButtonLink href="/process" variant="outline" arrow>
              See the full process
            </ButtonLink>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TEASER_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col gap-4">
                {/* connector line (desktop) */}
                {i < TEASER_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[3.4rem] right-[-1.5rem] top-6 hidden border-t border-dashed border-line-light dark:border-line-dark lg:block"
                  />
                )}
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-brand/40 bg-brand/10 font-display text-lg font-semibold text-brand">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
                  {step.text.split(".")[0]}.
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
