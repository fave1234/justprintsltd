import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function ServicesSnapshot() {
  return (
    <section className="py-16 lg:py-20" aria-labelledby="services-snapshot">
      <div className="container-site">
        <SectionHeading title="Services." />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full flex-col rounded-4xl bg-white p-3 pb-7 transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 dark:bg-ink-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-mist-soft dark:bg-ink">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                  />
                  <span className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full bg-white/85 text-ink opacity-0 backdrop-blur-md transition-opacity duration-400 group-hover:opacity-100">
                    <Icon name="arrowUpRight" size={17} />
                  </span>
                </div>
                <div className="px-4 pt-5">
                  <h3 className="font-display text-[1.35rem] font-bold text-ink transition-colors group-hover:text-brand dark:text-mist">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-steel dark:text-steel-light">
                    {service.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* Dark pill CTA completes the grid */}
          <Reveal delay={0.16}>
            <Link
              href="/contact"
              className="group flex h-full min-h-[15rem] flex-col justify-between gap-6 rounded-4xl bg-ink p-8 text-white transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 dark:bg-mist-white dark:text-ink"
            >
              <h3 className="font-display text-2xl font-extrabold leading-tight">
                Tell us what you’re making.
              </h3>
              <span className="inline-flex items-center gap-2 font-semibold">
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
