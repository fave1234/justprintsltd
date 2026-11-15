"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { WA_MESSAGES, trackEvent, waLink } from "@/lib/site";

const QUICK_OPTIONS = [
  { label: "Book printing", message: WA_MESSAGES.book },
  { label: "Branding & design", message: WA_MESSAGES.branding },
  { label: "Event materials", message: WA_MESSAGES.event },
  { label: "General enquiry", message: WA_MESSAGES.general },
];

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
            className="w-[18rem] overflow-hidden rounded-4xl border border-line-light bg-white shadow-md dark:border-line-dark dark:bg-ink-soft"
          >
            <p className="flex items-center gap-2.5 px-6 pb-3 pt-5 font-display text-lg font-extrabold text-ink dark:text-mist">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366]/15 text-[#128C4B] dark:text-[#4ade80]">
                <Icon name="whatsapp" size={16} />
              </span>
              Chat with us
            </p>
            <ul className="divide-y divide-line-light border-t border-line-light dark:divide-line-dark dark:border-line-dark">
              {QUICK_OPTIONS.map((opt) => (
                <li key={opt.label}>
                  <a
                    href={waLink(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { topic: opt.label })}
                    className="group flex items-center justify-between gap-3 px-6 py-3.5 text-sm font-semibold text-ink-mute transition-colors hover:bg-mist-soft/60 hover:text-brand dark:text-mist/85 dark:hover:bg-white/5"
                  >
                    {opt.label}
                    <Icon
                      name="arrowUpRight"
                      size={15}
                      className="text-steel-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Close chat options" : "Chat with Justprints on WhatsApp"}
        aria-expanded={open}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
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
