"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="py-24 lg:py-32" aria-labelledby="testimonials">
      <div className="container-site">
        <SectionHeading
          eyebrow="Kind Words"
          title="Clients who felt like royalty."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Icon
            name="quote"
            size={44}
            className="mx-auto mb-8 text-brand"
            aria-hidden="true"
          />
          <div className="min-h-[11rem] sm:min-h-[9rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-center font-display text-xl font-medium leading-relaxed tracking-tight text-ink dark:text-paper sm:text-2xl">
                  “{t.quote}”
                </p>
                <footer className="mt-7 text-center">
                  <p className="text-sm font-semibold text-ink dark:text-paper">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-smoke">
                    {t.role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="grid h-10 w-10 place-items-center rounded-full border border-line-light text-ink-mute transition-colors hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper"
            >
              <Icon name="chevronLeft" size={16} />
            </button>
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index
                      ? "w-7 bg-brand"
                      : "w-1.5 bg-line-light hover:bg-smoke dark:bg-line-dark"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-light text-ink-mute transition-colors hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper"
            >
              <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
