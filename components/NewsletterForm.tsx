"use client";

import { useState } from "react";
import Icon from "./Icon";
import { SITE, trackEvent } from "@/lib/site";

/** Newsletter signup → Formspree when configured, else a pre-filled email. */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    trackEvent("newsletter_signup");

    if (formspreeId) {
      try {
        const body = new FormData();
        body.append("email", email);
        body.append("_subject", "Newsletter signup — justprints.ng");
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
      } catch {
        /* non-critical capture — treat as success */
      }
    } else {
      window.open(
        `mailto:${SITE.email}?subject=${encodeURIComponent(
          "Newsletter signup"
        )}&body=${encodeURIComponent(
          `Hello Justprints, please add ${email} to your newsletter list.`
        )}`,
        "_self"
      );
    }
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm font-semibold text-brand">
        <Icon name="check" size={16} />
        You’re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs flex-col gap-3">
      <label htmlFor="newsletter-email" className="eyebrow">
        Print notes
      </label>
      <div className="flex overflow-hidden rounded-full border border-line-light transition-colors focus-within:border-ink dark:border-line-dark dark:focus-within:border-mist/40">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-11 w-full bg-transparent px-4 text-sm text-ink placeholder:text-steel-light focus:outline-none dark:text-mist"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="grid h-11 w-12 shrink-0 place-items-center bg-ink text-white transition-colors hover:bg-ink-mute disabled:opacity-60 dark:bg-mist-white dark:text-ink"
        >
          <Icon name="send" size={16} />
        </button>
      </div>
    </form>
  );
}
