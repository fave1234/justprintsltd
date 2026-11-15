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

const LINKS = NAV_LINKS.filter((l) => l.href !== "/");

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

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line-light/80 bg-mist/90 backdrop-blur-xl dark:border-line-dark/80 dark:bg-black/90"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[0.9rem] font-semibold transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-ink-mute hover:text-brand dark:text-mist/75 dark:hover:text-brand"
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
              Get a quote
            </ButtonLink>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-light text-ink transition-colors hover:border-brand hover:text-brand dark:border-line-dark dark:text-mist lg:hidden"
            >
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — oversized coral link list on hairlines (reference pattern) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-mist pt-24 dark:bg-black lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex flex-col pb-8">
              {[{ href: "/", label: "Home" }, ...LINKS].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block border-b border-line-light py-4 font-display text-[2rem] font-extrabold leading-tight dark:border-line-dark ${
                      isActive(link.href) || (link.href === "/" && pathname === "/")
                        ? "text-brand"
                        : "text-ink dark:text-mist"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="container-site mt-auto pb-12"
            >
              <ButtonLink href="/contact" size="lg" arrow className="w-full">
                Get a free quote
              </ButtonLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
