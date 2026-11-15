import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  const titleTone =
    tone === "onDark" ? "text-paper" : "text-ink dark:text-paper";
  const ledeTone =
    tone === "onDark" ? "text-smoke-light" : "text-smoke-dark dark:text-smoke-light";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`font-display text-4xl font-semibold leading-[1.06] tracking-tightest sm:text-5xl ${titleTone}`}
      >
        {title}
      </h2>
      {lede && <p className={`text-lg leading-relaxed ${ledeTone}`}>{lede}</p>}
    </Reveal>
  );
}
