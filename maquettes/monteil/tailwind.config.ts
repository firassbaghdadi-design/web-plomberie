import type { Config } from "tailwindcss";

/**
 * Charte Monteil & Cie. L'accent est la couleur du logo, lue au build sur monteil-info.fr (scripts/fetch-photos.mjs,
 * assombrie si besoin jusqu'à un contraste d'au moins 4,8:1 sur blanc) et injectée en variables CSS par le layout.
 * Par défaut : le bleu du site actuel. Encre bleu-nuit, filets gris bleuté : le zinc et l'eau.
 * Police : Figtree (imposée).
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f1a24", soft: "#46525e", faint: "#6f7b87" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), wash: v("accent-wash") },
        line: "#e1e6ea",
        paper: "#f6f8f9",
      },
      fontFamily: {
        sans: ["'Figtree Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
    },
  },
  plugins: [],
} satisfies Config;
