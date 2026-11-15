"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { SITE, WA_MESSAGES, trackEvent, waLink } from "@/lib/site";

const QUICK_OPTIONS = [
  { label: "Book Printing & Publishing", message: WA_MESSAGES.book },
  { label: "Branding & Design", message: WA_MESSAGES.branding },
  { label: "Event Materials", message: WA_MESSAGES.event },
  { label: "General Enquiry", message: WA_MESSAGES.general },
];

/**
 * Floating WhatsApp button with smart pre-filled messages —
 * always visible (mobile & desktop) per the brief.
 */
export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((v) => {
      if (!v) trackEvent("whatsapp_click", { source: "float_open" });
      return !v;
    });
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-[19rem] overflow-hidden rounded-2xl border border-line-light bg-paper-white shadow-2xl dark:border-line-dark dark:bg-ink-mute"
          >
            <div className="bg-brand px-5 py-4">
              <p className="font-display text-lg font-semibold text-white">
                Chat with us
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/85">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                Typically replies within the hour
              </p>
            </div>
            <ul className="divide-y divide-line-light dark:divide-line-dark">
              {QUICK_OPTIONS.map((opt) => (
                <li key={opt.label}>
                  <a
                    href={waLink(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("whatsapp_click", { topic: opt.label })
                    }
                    className="group flex items-center justify-between gap-3 px-5 py-3.5 text-sm font-medium text-ink-mute transition-colors hover:bg-brand/5 hover:text-brand dark:text-paper/85 dark:hover:bg-brand/10"
                  >
                    {opt.label}
                    <Icon
                      name="arrowUpRight"
                      size={15}
                      className="text-smoke transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="px-5 py-3 text-center text-[0.7rem] text-smoke">
              Or call {SITE.phones[0].label} · {SITE.phones[1].label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Close WhatsApp chat options" : "Chat with Justprints on WhatsApp"}
        aria-expanded={open}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {!open && (
          <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        )}
        <span className="relative">
          <Icon name={open ? "x" : "whatsapp"} size={open ? 22 : 28} />
        </span>
      </button>
    </div>
  );
}
