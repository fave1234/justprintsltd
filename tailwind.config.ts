import type { Config } from "tailwindcss";

/**
 * Design tokens — Justprints by PlusFrica × Monzo-style reference
 * ──────────────────────────────────────────────────────────────
 * · Light-first: Page Mist canvas → white cards → Soft Mint fills
 *   (dark theme = pitch-black canvas; toggle persisted)
 * · Brand red #EB3A34 is an ACCENT ONLY — logo, links, icons,
 *   hairline highlights. Never a button fill / control surface.
 * · Type: Inter (text, -0.05em) + Manrope (display, 700–800)
 * · Shapes: 500px pills · 64px cards · 32px containers · 24px inputs
 * · No shadows — hierarchy via surface color stepping + whitespace.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "50": "#FDEEED",
          "100": "#FAD8D6",
          "200": "#F5B1AE",
          "300": "#EF8581",
          "400": "#EC5F5A",
          "500": "#EB3A34",
          "600": "#D42F29",
          "700": "#B02721",
          "800": "#8A1F1B",
          "900": "#661713",
          "950": "#440F0C",
          DEFAULT: "#EB3A34",
        },
        ink: {
          DEFAULT: "#091723", // Midnight Ink — text + primary dark pills (light theme)
          soft: "#0C1217", // Near-black — dark-theme card surface on pitch black
          mute: "#3B4C54", // Slate — strong body text
        },
        mist: {
          DEFAULT: "#F2F8F3", // Page Mist canvas
          white: "#FFFFFF", // card surfaces
          soft: "#E3EBE4", // Soft Mint — hairlines, hover washes, insets
        },
        steel: {
          DEFAULT: "#6B747B", // secondary body / metadata
          dark: "#4C5860",
          light: "#B5B9BD", // Fog — tertiary text, low-emphasis borders
        },
        line: {
          light: "#E3EBE4",
          dark: "#1E2630", // hairlines on pitch black
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "75rem", // 1200px per reference
      },
      borderRadius: {
        "4xl": "2rem", // containers / small cards
        "5xl": "4rem", // cards — signature 64px
      },
      boxShadow: {
        md: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px", // the ONLY shadow in the system
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.45" },
          "80%, 100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
