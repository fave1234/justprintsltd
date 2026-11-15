"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icon";
import { ButtonLink } from "./ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation & lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line-light/70 bg-paper/85 backdrop-blur-xl dark:border-line-dark/70 dark:bg-ink/85"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-4 sm:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[0.83rem] font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-ink-mute hover:text-brand dark:text-paper/80 dark:hover:text-brand"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
              Get a Quote
            </ButtonLink>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-light text-ink transition-colors hover:border-brand hover:text-brand dark:border-line-dark dark:text-paper lg:hidden"
            >
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper pt-28 dark:bg-ink lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex flex-col gap-1 pb-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`group flex items-baseline gap-3 border-b border-line-light py-4 dark:border-line-dark ${
                      isActive(link.href) ? "text-brand" : "text-ink dark:text-paper"
                    }`}
                  >
                    <span className="font-mono text-xs text-smoke">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-semibold tracking-tightest transition-colors group-hover:text-brand">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="container-site mt-auto flex flex-col gap-4 pb-12"
            >
              <ButtonLink href="/contact" size="lg" arrow className="w-full">
                Get a Free Quote
              </ButtonLink>
              <p className="text-center text-sm text-smoke">
                {SITE.phones[0].label} · {SITE.email}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
