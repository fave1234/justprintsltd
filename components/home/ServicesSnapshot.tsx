import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function ServicesSnapshot() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="services-snapshot">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Five crafts under one roof."
          lede="Design studio and print house together — so nothing is lost between the artboard and the press."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.09}>
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-light bg-paper-white transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.4)] dark:border-line-dark dark:bg-ink-mute"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-ink/70 text-white backdrop-blur-sm">
                    <Icon name={service.icon as "book"} size={19} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h3 className="font-display text-[1.4rem] font-semibold tracking-tight text-ink transition-colors group-hover:text-brand dark:text-paper">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-smoke-dark dark:text-smoke-light">
                    {service.short}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand">
                    Explore service
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

          {/* CTA card completes the grid */}
          <Reveal delay={0.18}>
            <Link
              href="/contact"
              className="group flex h-full min-h-[16rem] flex-col justify-between gap-6 rounded-2xl bg-brand p-7 text-white transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:bg-brand-600 hover:shadow-[0_24px_50px_-20px_rgba(196,30,58,0.6)]"
            >
              <h3 className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight">
                Something else in mind? Tell us what you’re making.
              </h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Get a free quote
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
