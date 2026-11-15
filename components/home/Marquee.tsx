const ITEMS = [
  "Book Printing & Publishing",
  "Graphic Design",
  "Branding & Identity",
  "Commercial Printing",
  "Event Branding & Large Format",
];

/** Infinite service ticker — an always-dark band for contrast in both themes. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line-dark bg-ink-soft py-5">
      <div className="mask-fade-x">
        <ul className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.28em] text-paper/55"
              aria-hidden={i >= ITEMS.length}
            >
              {item}
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-brand" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
