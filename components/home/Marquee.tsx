const ITEMS = [
  "Book Printing & Publishing",
  "Graphic Design",
  "Branding & Identity",
  "Commercial Printing",
  "Event Branding & Large Format",
];

/** Quiet service ticker — hairline band on the canvas in both themes. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="mt-16 overflow-hidden border-y border-line-light py-4 dark:border-line-dark lg:mt-20">
      <div className="mask-fade-x">
        <ul className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.14em] text-steel dark:text-steel-light"
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
