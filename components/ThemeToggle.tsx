"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-light text-ink-mute transition-colors duration-300 hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper ${className}`}
    >
      {/* Reserve space before mount to avoid layout shift / hydration flash */}
      <span className={mounted ? "hidden" : "block h-5 w-5"} />
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            <Icon name={isDark ? "sun" : "moon"} size={18} />
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
