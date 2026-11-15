import { WHY_POINTS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function WhyJustprints() {
  return (
    <section
      className="border-y border-line-light bg-paper-white py-24 dark:border-line-dark dark:bg-ink-soft lg:py-32"
      aria-labelledby="why-justprints"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Justprints"
          title="Quality isn’t a promise. It’s a process."
          lede="Four reasons authors, brands and event teams keep coming back to our press."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.09}>
              <article className="group flex h-full flex-col gap-5 rounded-2xl border border-line-light bg-paper p-7 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_50px_-24px_rgba(196,30,58,0.35)] dark:border-line-dark dark:bg-ink">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110">
                  <Icon name={point.icon as "gem"} size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink dark:text-paper">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
                  {point.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
