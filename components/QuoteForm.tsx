"use client";

import { useRef, useState } from "react";
import { SERVICES } from "@/lib/data";
import { SITE, WA_MESSAGES, trackEvent, waLink } from "@/lib/site";
import Icon from "./Icon";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [...SERVICES.map((s) => s.title), "Something else"];

const TIMELINES = [
  "As soon as possible",
  "Within 1–2 weeks",
  "Within 2–4 weeks",
  "1–3 months",
  "I’m flexible",
];

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line-light bg-paper-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-smoke transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-line-dark dark:bg-ink-soft dark:text-paper";

/**
 * Quote request form → Formspree email notification when configured,
 * otherwise falls back to opening WhatsApp with the composed brief.
 */
export default function QuoteForm({ initialType }: { initialType?: string }) {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const [status, setStatus] = useState<Status>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const type = String(data.get("type") ?? "");
    const quantity = String(data.get("quantity") ?? "");
    const timeline = String(data.get("timeline") ?? "");
    const message = String(data.get("message") ?? "");

    const summary = [
      `*New quote request — ${SITE.name}*`,
      ``,
      `*Name:* ${name}`,
      `*Contact:* ${contact}`,
      `*Project type:* ${type}`,
      quantity ? `*Quantity:* ${quantity}` : "",
      timeline ? `*Timeline:* ${timeline}` : "",
      ``,
      `*Project details:*`,
      message,
    ]
      .filter((l) => l !== "")
      .join("\n");

    setStatus("sending");
    trackEvent("quote_form_submit", { project_type: type });

    if (formspreeId) {
      try {
        const body = new FormData();
        body.append("name", name);
        body.append("contact", contact);
        body.append("project_type", type);
        body.append("quantity", quantity);
        body.append("timeline", timeline);
        body.append("message", message);
        body.append("_subject", `New quote request — ${type} (${name})`);
        const file = fileRef.current?.files?.[0];
        if (file) body.append("attachment", file);

        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      // No backend configured — compose the brief into WhatsApp (never lose a lead)
      window.open(waLink(`${WA_MESSAGES.quote}${summary}`), "_blank", "noopener");
      setStatus("success");
    }
    if (status !== "error") form.reset();
    setFileName(null);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-brand/40 bg-brand/5 p-8 dark:bg-brand/10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
          <Icon name="check" size={22} />
        </span>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink dark:text-paper">
          Your brief is on its way.
        </h3>
        <p className="leading-relaxed text-smoke-dark dark:text-smoke-light">
          {formspreeId
            ? "We’ve received your request and will reply within one business day."
            : "We opened WhatsApp with your project brief pre-filled — just hit send. We typically reply within the hour."}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
            Send another request
          </Button>
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[#128C4B] transition-colors hover:bg-[#25D366]/10 dark:text-[#4ade80]"
          >
            <Icon name="whatsapp" size={17} />
            Continue on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-label="Request a quote"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
            Your name <span className="text-brand">*</span>
          </label>
          <input
            id="q-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="q-contact" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
            Email or phone <span className="text-brand">*</span>
          </label>
          <input
            id="q-contact"
            name="contact"
            required
            autoComplete="email"
            placeholder="ada@example.com / 0810…"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-type" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
            Project type <span className="text-brand">*</span>
          </label>
          <select
            id="q-type"
            name="type"
            required
            defaultValue={
              initialType && PROJECT_TYPES.includes(initialType) ? initialType : ""
            }
            className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23888%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat pr-10`}
          >
            <option value="" disabled>
              Choose a service…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-quantity" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
            Quantity
          </label>
          <input
            id="q-quantity"
            name="quantity"
            inputMode="numeric"
            placeholder="e.g. 100 copies"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-timeline" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
          Timeline
        </label>
        <select
          id="q-timeline"
          name="timeline"
          defaultValue=""
          className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20fill%3D%22none%22%20stroke%3D%22%23888%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            When do you need it?
          </option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="q-message" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
          Tell us about the project <span className="text-brand">*</span>
        </label>
        <textarea
          id="q-message"
          name="message"
          required
          rows={5}
          placeholder="What are we making? Size, pages, colours, finishes — anything you know already helps us quote faster."
          className={`${inputCls} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="q-file" className="mb-2 block text-sm font-semibold text-ink dark:text-paper">
          Attach artwork or a brief <span className="font-normal text-smoke">(optional)</span>
        </label>
        <label
          htmlFor="q-file"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line-light px-4 py-4 text-sm text-smoke transition-colors hover:border-brand hover:text-brand dark:border-line-dark"
        >
          <Icon name="upload" size={18} className="shrink-0" />
          {fileName ? (
            <span className="font-medium text-ink dark:text-paper">{fileName}</span>
          ) : (
            "PDF, JPG or PNG · max 10MB"
          )}
        </label>
        <input
          ref={fileRef}
          id="q-file"
          name="attachment"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {!formspreeId && (
          <p className="mt-2 text-xs text-smoke">
            This form currently delivers via WhatsApp — you can attach files in
            the chat after sending your brief.
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-brand/40 bg-brand/5 px-4 py-3 text-sm text-brand dark:bg-brand/10" role="alert">
          Something went wrong sending the form. Please try again — or{" "}
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            reach us on WhatsApp
          </a>
          .
        </p>
      )}

      <Button type="submit" size="lg" arrow disabled={status === "sending"} className="mt-1 w-full sm:w-auto">
        {status === "sending" ? "Sending…" : "Send quote request"}
      </Button>
      <p className="text-xs text-smoke">
        We reply within one business day — usually much faster. Prefer email?{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-brand underline underline-offset-2"
        >
          {SITE.email}
        </a>
      </p>
    </form>
  );
}
