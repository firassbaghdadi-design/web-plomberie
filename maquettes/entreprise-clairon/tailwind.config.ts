import type { Config } from "tailwindcss";

/**
 * Charte Entreprise Clairon, direction « plan d'ingénieur » : fond bleu nuit de tirage, traits blancs très fins,
 * cotes dans la couleur du site actuel (éclaircie pour rester lisible sur le bleu : --accent-hi), laiton pour le fil à plomb.
 * --accent garde la couleur d'origine (brand), écrite au build par scripts/fetch-site-photos.mjs.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: v("accent-hi"), brand: v("accent"), deep: v("accent-deep"), tint: v("accent-tint") },
        ink: { DEFAULT: "#eef2f7", soft: "#aebbcb", faint: "#7487a0" },
        brass: { DEFAULT: "#cfae6e", light: "#ecd6a2", deep: "#8a6a32" },
        night: { DEFAULT: "#081526", deep: "#050e1b", raised: "#0d1f37" },
        lead: "#7487a0",
        line: "#1d3250",
        mist: "#0d1f37",
        paper: "#081526",
      },
      fontFamily: {
        sans: ["'IBM Plex Sans Variable'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "86rem" },
    },
  },
  plugins: [],
} satisfies Config;
