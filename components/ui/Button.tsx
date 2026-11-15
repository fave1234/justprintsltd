import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "@/components/Icon";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out-expo focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-10px_rgba(196,30,58,0.6)] hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_16px_36px_-10px_rgba(196,30,58,0.7)] active:translate-y-0",
  outline:
    "border border-ink/25 text-ink hover:border-brand hover:text-brand dark:border-paper/30 dark:text-paper dark:hover:border-brand dark:hover:text-brand",
  light:
    "bg-white text-ink hover:-translate-y-0.5 hover:bg-paper shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]",
  ghost:
    "text-ink-mute hover:text-brand dark:text-smoke-light dark:hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-[3.25rem] px-8 text-[0.95rem]",
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
