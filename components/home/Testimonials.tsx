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
    <section className="py-16 lg:py-20" aria-labelledby="testimonials">
      <div className="container-site">
        <SectionHeading title="What clients say." align="center" className="mx-auto" />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="min-h-[10rem] sm:min-h-[8rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-center font-display text-xl font-bold leading-relaxed text-ink dark:text-mist sm:text-2xl">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-center">
                  <p className="text-sm font-bold text-ink dark:text-mist">{t.name}</p>
                  <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-steel">
                    {t.role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink dark:border-mist/30 dark:text-mist dark:hover:border-mist"
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
                      : "w-1.5 bg-line-light hover:bg-steel-light dark:bg-line-dark"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink dark:border-mist/30 dark:text-mist dark:hover:border-mist"
            >
              <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
