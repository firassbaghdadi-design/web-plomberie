import type { Config } from "tailwindcss";

/**
 * Charte SMAP v2, « galerie d'architecte d'intérieur » : fond béton clair, gris chauds, encre brun-noir,
 * un seul accent terre cuite (--terra). La couleur tirée du logo (--accent, brand.generated.css) reste réservée au logo.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: v("terra"), deep: v("terra-deep"), tint: v("terra-tint") },
        brand: v("accent"),
        ink: { DEFAULT: "#26221e", soft: "#5b554e", faint: "#857e74" },
        lead: "#6f685f",
        line: "#cdc5ba",
        mist: "#dcd5cb",
        chalk: "#f3f0ea",
        paper: "#e8e4dd",
      },
      fontFamily: {
        sans: ["'Familjen Grotesk Variable'", "system-ui", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
      },
      maxWidth: { site: "90rem" },
    },
  },
  plugins: [],
} satisfies Config;
