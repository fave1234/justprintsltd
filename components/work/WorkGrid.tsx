"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/data";
import Icon from "@/components/Icon";

export default function WorkGrid() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      {/* Filters */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2.5"
      >
        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = cat === active;
          const count =
            cat === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-white dark:text-ink"
                  : "text-ink-mute hover:text-brand dark:text-mist/70 dark:hover:text-brand"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="work-filter-pill"
                  className="absolute inset-0 rounded-full bg-ink dark:bg-mist-white"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">
                {cat}
                <span className={`ml-1.5 text-xs ${isActive ? "text-white/60 dark:text-ink/60" : "text-steel"}`}>
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-mist-soft">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-200">
                      {project.category} · {project.year}
                    </p>
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-mist">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-steel-dark dark:text-steel-light">
                  {project.summary}
                </p>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-steel">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
