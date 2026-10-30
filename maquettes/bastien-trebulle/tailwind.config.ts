import type { Config } from "tailwindcss";

/**
 * Charte Bastien & Trebulle. L'accent est le bleu nuit du site actuel (#232F63), relevé sur le logo au build
 * (scripts/fetch-photos.mjs) et injecté en variables CSS. Le laiton n'existe que dans le compteur lui-même : c'est la
 * matière de l'objet, pas une seconde couleur de charte. Encre bleu-noir, filets gris clair, fond blanc.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#13171f", soft: "#4a505c", faint: "#6f7683" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), wash: v("accent-wash") },
        brass: { DEFAULT: "#a8873f", light: "#e3cb94", deep: "#6e5521" },
        paper: "#f8f8f6",
        line: "#e4e6ea",
      },
      fontFamily: {
        sans: ["'Instrument Sans Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(19,23,31,.04), 0 14px 40px -20px rgba(19,23,31,.16)" },
    },
  },
  plugins: [],
} satisfies Config;
