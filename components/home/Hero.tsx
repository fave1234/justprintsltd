"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="container-site pt-24 sm:pt-28">
      <div className="relative overflow-hidden rounded-5xl">
        <motion.div
          className="relative min-h-[68svh] sm:min-h-[74svh]"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease }}
        >
          <Image
            src="/images/hero-books.jpg"
            alt="Stack of premium hardcover books with crimson foil detail on a dark press table"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="object-cover"
          />
          {/* Darken treatment so white type always reads */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="absolute inset-x-0 bottom-0 p-7 sm:p-12 lg:p-16"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-md"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            Premium print house — Enugu, Nigeria
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.85, ease }}
            className="max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-[61px]"
          >
            We Don’t Just Print.
            <span className="block">
              We Craft <span className="text-brand-400">Excellence</span>.
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.85, ease }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Premium book printing, branding &amp; design for visionaries who
            refuse to settle.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.85, ease }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <ButtonLink href="/contact" variant="light" size="lg" arrow>
              Start your project
            </ButtonLink>
            <ButtonLink
              href="/work"
              size="lg"
              className="border border-white/35 text-white hover:bg-white/10"
            >
              View our work
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
