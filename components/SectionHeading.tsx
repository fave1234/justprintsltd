import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`flex max-w-3xl flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-ink dark:text-mist sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="text-xl leading-relaxed text-steel dark:text-steel-light">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
