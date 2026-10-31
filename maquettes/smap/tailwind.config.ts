import type { Config } from "tailwindcss";

/**
 * Charte SMAP : fond blanc, encre presque noire, gris « plomb » pour le fil, une seule couleur d'accent
 * reprise du site actuel (variable --accent, définie dans globals.css).
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), tint: v("accent-tint") },
        ink: { DEFAULT: "#15171a", soft: "#55595f", faint: "#8a8e94" },
        lead: "#6e737a",
        line: "#e6e6e3",
        mist: "#f6f6f4",
        paper: "#ffffff",
      },
      fontFamily: {
        sans: ["'Outfit Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "84rem" },
    },
  },
  plugins: [],
} satisfies Config;
