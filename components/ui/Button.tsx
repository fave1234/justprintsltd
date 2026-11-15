import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "@/components/Icon";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out-expo focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Per the design reference: brand red is an accent, never a control fill.
 * Primary actions are dark pills (Midnight Ink); white pills sit on imagery.
 */
const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:-translate-y-0.5 hover:bg-ink-mute active:translate-y-0 dark:bg-mist-white dark:text-ink dark:hover:bg-mist",
  outline:
    "border border-ink/20 text-ink hover:border-ink dark:border-mist/30 dark:text-mist dark:hover:border-mist",
  light: "bg-white text-ink hover:-translate-y-0.5 hover:bg-mist",
  ghost: "text-steel hover:text-brand dark:text-steel-light dark:hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-[3.25rem] px-8 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1"
        />
      )}
    </button>
  );
}
