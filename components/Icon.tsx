import type { JSX, SVGProps } from "react";

/**
 * Minimal hand-authored line-icon set (24×24, stroke-based) —
 * keeps the bundle lean and the style consistent.
 */

const paths: Record<string, JSX.Element> = {
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  x: (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2.5" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21.5" y2="12" />
      <line x1="5.3" y1="5.3" x2="7" y2="7" />
      <line x1="17" y1="17" x2="18.7" y2="18.7" />
      <line x1="18.7" y1="5.3" x2="17" y2="7" />
      <line x1="7" y1="17" x2="5.3" y2="18.7" />
    </>
  ),
  moon: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />,
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </>
  ),
  arrowUpRight: (
    <>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="8 6 18 6 18 16" />
    </>
  ),
  chevronLeft: <polyline points="14 5 7 12 14 19" />,
  chevronRight: <polyline points="10 5 17 12 10 19" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <polyline points="3.5 7 12 13 20.5 7" />
    </>
  ),
  phone: (
    <path d="M5.5 3.5h3l1.7 4.2-2 1.5a12.5 12.5 0 0 0 6.6 6.6l1.5-2 4.2 1.7v3a1.8 1.8 0 0 1-2 1.8A16.5 16.5 0 0 1 3.7 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  mapPin: (
    <>
      <path d="M12 21.5s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
  check: <polyline points="4.5 12.5 9.5 17.5 19.5 6.5" />,
  checkbadge: (
    <>
      <path d="M12 3 5 5.5v5c0 4.6 3 8.4 7 10 4-1.6 7-5.4 7-10v-5L12 3Z" />
      <polyline points="8.8 12 11.2 14.4 15.4 9.8" />
    </>
  ),
  quote: (
    <>
      <path
        d="M9.6 6.2C6.9 7.8 5 10.3 5 13.4c0 2.5 1.6 4.4 3.7 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.3 0-.7.1-.8.1.3-1.6 1.7-3.2 3.2-4L9.6 6.2Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M18.9 6.2c-2.7 1.6-4.6 4.1-4.6 7.2 0 2.5 1.6 4.4 3.7 4.4 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.3 0-.7.1-.8.1.3-1.6 1.7-3.2 3.2-4L18.9 6.2Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  send: (
    <>
      <path d="M21 3.5 10.2 14.3" />
      <path d="M21 3.5 14.5 20.5l-4.3-6.2L4 10l17-6.5Z" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4.5" />
      <polyline points="6.5 10 12 4.5 17.5 10" />
      <path d="M4 15.5v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  file: (
    <>
      <path d="M6 2.8h8l4.5 4.5v13a1.7 1.7 0 0 1-1.7 1.7H6a1.7 1.7 0 0 1-1.7-1.7v-15.8A1.7 1.7 0 0 1 6 2.8Z" transform="translate(1.2 0)" />
      <polyline points="13.8 2.8 13.8 7.5 18.5 7.5" transform="translate(1.2 0)" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.8A2 2 0 0 1 6 3h14v15.5H6.5A2.5 2.5 0 0 0 4 21Z" />
      <path d="M4 19.5V4.8" />
      <path d="M20 18.5H6.5A2.5 2.5 0 0 0 4 21" />
      <line x1="9" y1="7.5" x2="15" y2="7.5" />
    </>
  ),
  pen: (
    <>
      <path d="m14.5 4.5 5 5L8 20l-5.2 1L4 15.8 14.5 4.5Z" />
      <path d="m12.5 6.5 5 5" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.3a2.2 2.2 0 0 0 0-4.4H12a2 2 0 0 1 0-4h5.2A3.3 3.3 0 0 0 20.5 9 8.6 8.6 0 0 0 12 3.5Z" />
      <circle cx="7.6" cy="10.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.6" cy="7.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  printer: (
    <>
      <polyline points="7 8 7 3.5 17 3.5 17 8" />
      <rect x="3.5" y="8" width="17" height="8" rx="2" />
      <polyline points="7 13 17 13 17 20.5 7 20.5 7 13" />
      <circle cx="17.2" cy="11" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  flag: (
    <>
      <line x1="5" y1="3.5" x2="5" y2="21" />
      <path d="M5 4.5h12.5l-2.5 4 2.5 4H5" />
    </>
  ),
  crown: (
    <>
      <path d="m4 17 1-9 4.2 4.5L12 6l2.8 6.5L19 8l1 9H4Z" />
      <line x1="4.5" y1="20.5" x2="19.5" y2="20.5" />
    </>
  ),
  gem: (
    <>
      <path d="M7 4h10l3.5 4.5L12 20 3.5 8.5 7 4Z" />
      <polyline points="3.5 8.5 20.5 8.5" />
      <polyline points="9.5 4 8 8.5 12 20" />
      <polyline points="14.5 4 16 8.5 12 20" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.8a8.5 8.5 0 0 1-8.5 8.3c-1.5 0-3-.4-4.2-1L3.5 20.4l1.4-4.4A8.3 8.3 0 1 1 21 11.8Z" />
      <line x1="8.5" y1="10" x2="15.5" y2="10" />
      <line x1="8.5" y1="13.5" x2="13" y2="13.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.8 12S6.3 5.5 12 5.5 21.2 12 21.2 12 17.7 18.5 12 18.5 2.8 12 2.8 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  truck: (
    <>
      <rect x="2.5" y="5.5" width="12" height="10" rx="1" />
      <path d="M14.5 9h3.7l3.3 3.4v3.1h-7" />
      <circle cx="7" cy="17.8" r="2" />
      <circle cx="17" cy="17.8" r="2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <path d="M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5S9.4 5.8 12 3.5Z" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M5.5 7.5A8 8 0 0 1 12 4.5c1.9 0 3.7.7 5 1.9" />
      <path d="M4.2 11.2a8.3 8.3 0 0 0 .4 3.9" />
      <path d="M7.3 9.2a5.3 5.3 0 0 0-.8 3c0 1.9-.3 3.4-1 4.9" />
      <path d="M12 8a4.2 4.2 0 0 1 4.2 4.2c0 2.5.2 4.6 1 6.5" />
      <path d="M12 11.4c.5 0 .9.4.9.9 0 2.7-.3 5.1-1.4 7.4" />
      <path d="M18.8 8.6a8.3 8.3 0 0 1 .8 3.6c0 1.4.1 2.8.5 4.1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="2.8" x2="8" y2="6" />
      <line x1="16" y1="2.8" x2="16" y2="6" />
    </>
  ),
};

const filledPaths: Record<string, JSX.Element> = {
  whatsapp: (
    <path d="M12.04 2.5A9.4 9.4 0 0 0 2.6 11.94c0 1.93.6 3.72 1.63 5.2L2.5 21.5l4.47-1.66a9.38 9.38 0 0 0 5.07 1.5h.01a9.42 9.42 0 0 0 9.4-9.44 9.35 9.35 0 0 0-2.75-6.65 9.3 9.3 0 0 0-6.66-2.75Zm0 1.72a7.68 7.68 0 0 1 7.7 7.68 7.7 7.7 0 0 1-7.7 7.72 7.6 7.6 0 0 1-4.18-1.24l-.3-.18-2.65.98.94-2.6-.2-.32a7.63 7.63 0 0 1-1.31-4.32 7.69 7.69 0 0 1 7.7-7.72Zm-3.2 3.7c-.17 0-.45.06-.68.32-.23.25-.9.87-.9 2.13 0 1.25.91 2.47 1.04 2.64.12.17 1.78 2.85 4.4 3.88 2.18.86 2.62.69 3.1.65.47-.04 1.52-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.5-.3-.26-.13-1.53-.75-1.76-.83-.24-.09-.4-.13-.57.13-.17.26-.66.83-.8 1-.15.17-.3.2-.55.06a6.9 6.9 0 0 1-2.05-1.26 7.6 7.6 0 0 1-1.42-1.77c-.15-.25-.02-.39.11-.52.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.45-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.57-.43l-.6-.01Z" />
  ),
  facebook: (
    <path d="M14.5 21.5v-7.2h2.4l.36-2.8h-2.76v-1.8c0-.8.23-1.36 1.4-1.36h1.5V5.85c-.26-.03-1.15-.11-2.2-.11-2.17 0-3.66 1.33-3.66 3.76v2.1H9.5v2.8h2.04v7.1a9.5 9.5 0 0 0 2.96 0Z" />
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.2" cy="6.8" r="1.3" stroke="none" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  className,
  filled = false,
  ...rest
}: {
  name: keyof typeof paths | keyof typeof filledPaths;
  size?: number;
  filled?: boolean;
} & SVGProps<SVGSVGElement>) {
  const useFilled = filled || name in filledPaths;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
      fill={useFilled ? "currentColor" : "none"}
      stroke={useFilled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {useFilled ? filledPaths[name] : paths[name]}
    </svg>
  );
}
