import Link from "next/link";

/**
 * Justprints wordmark — inline SVG/text lockup.
 * PLACEHOLDER: swap for final client logo files (SVG, light & dark) when provided.
 */
export default function Logo({
  compact = false,
  href = "/",
}: {
  compact?: boolean;
  href?: string | null;
}) {
  const mark = (
    <span className="group inline-flex items-center gap-2.5">
      {/* Mark */}
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-brand text-white shadow-[0_8px_24px_-8px_rgba(196,30,58,0.55)]">
        <span className="font-display text-xl font-semibold leading-none tracking-tight">
          J
        </span>
        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white/90" />
      </span>

      {/* Wordmark */}
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] font-semibold tracking-tightest text-ink dark:text-paper">
          Justprints<span className="text-brand">.</span>
        </span>
        {!compact && (
          <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-smoke">
            by PlusFrica Ltd
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return mark;
  return (
    <Link href={href} aria-label="Justprints by PlusFrica — home" className="shrink-0">
      {mark}
    </Link>
  );
}
