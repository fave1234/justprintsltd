"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Background photograph with a slow cinematic settle */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src="/images/hero-books.jpg"
          alt="Stack of premium hardcover books with crimson foil detail on a dark press table, lit by a red accent light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />
      <div
        className="absolute -bottom-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 pb-28 pt-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
          }}
          className="max-w-3xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-paper/90 backdrop-blur-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
            Premium Print House — Enugu, Nigeria
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-[2.9rem] font-semibold leading-[1.03] tracking-tightest text-paper sm:text-6xl lg:text-7xl"
          >
            We Don’t Just Print.{" "}
            <span className="block">
              We Craft{" "}
              <em className="relative inline-block not-italic text-brand">
                Excellence
                <svg
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand/70"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 100 0 198 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
              .
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/75 sm:text-xl"
          >
            Premium book printing, branding &amp; design for visionaries who
            refuse to settle. From beautifully bound books to complete brand
            identities — print that feels as good as it looks.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/contact" size="lg" arrow>
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/work" variant="outline" size="lg" className="border-white/30 text-paper hover:border-brand hover:text-brand dark:border-white/30 dark:text-paper">
              View Our Work
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.2em] text-paper/50"
          >
            <span>A PlusFrica Company</span>
            <span aria-hidden="true" className="h-3 w-px bg-paper/25" />
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-200"
            >
              Chat instantly on WhatsApp
            </a>
            <span aria-hidden="true" className="h-3 w-px bg-paper/25" />
            <span>{SITE.phones[0].label}</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-paper/30 p-2">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}
