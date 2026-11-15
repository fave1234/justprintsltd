import { WHY_POINTS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function WhyJustprints() {
  return (
    <section
      className="border-y border-line-light bg-white py-16 dark:border-line-dark dark:bg-ink-soft lg:py-20"
      aria-labelledby="why-justprints"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Why Justprints"
          title="Quality isn’t a promise. It’s a process."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col gap-4 rounded-4xl bg-mist p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 dark:bg-ink">
                <Icon name={point.icon as "gem"} size={26} className="text-brand" />
                <h3 className="font-display text-lg font-bold leading-snug text-ink dark:text-mist">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel dark:text-steel-light">
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
