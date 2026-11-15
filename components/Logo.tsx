import Image from "next/image";
import Link from "next/link";

/**
 * Justprints brand lockup — client-supplied JP mark (red rounded panel,
 * works on both canvases) + Manrope wordmark.
 */
export default function Logo({ href = "/" }: { href?: string | null }) {
  const mark = (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={483}
        height={341}
        priority
        className="h-8 w-auto"
      />
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
