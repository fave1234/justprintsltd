import type { Config } from "tailwindcss";

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
          "50": "#FCE9EC",
          "100": "#F7CDD4",
          "200": "#EF9AAA",
          "300": "#E66780",
          "400": "#DE3C5C",
          "500": "#C41E3A",
          "600": "#A81731",
          "700": "#861228",
          "800": "#640D1E",
          "900": "#420814",
          "950": "#2A050C",
          DEFAULT: "#C41E3A",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          soft: "#111111",
          mute: "#1A1A1A",
          raise: "#222222",
        },
        paper: {
          DEFAULT: "#F8F6F4",
          white: "#FFFFFF",
          dim: "#EFEDEA",
        },
        smoke: {
          DEFAULT: "#888888",
          dark: "#666666",
          light: "#B0B0B0",
        },
        line: {
          light: "#E5E5E5",
          dark: "#262626",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        site: "80rem",
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
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
