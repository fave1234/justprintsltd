import Link from "next/link";

/**
 * Justprints wordmark. PLACEHOLDER: swap for final client logo files
 * (SVG, light & dark variants) when provided.
 */
export default function Logo({ href = "/" }: { href?: string | null }) {
  const mark = (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-brand text-white">
        <span className="font-display text-xl font-extrabold leading-none">J</span>
        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white/90" />
      </span>
      <span className="font-display text-[1.35rem] font-extrabold leading-none text-ink dark:text-mist">
        Justprints<span className="text-brand">.</span>
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
