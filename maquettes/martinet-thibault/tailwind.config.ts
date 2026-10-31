import type { Config } from "tailwindcss";

/**
 * Charte Martinet Thibault : le bleu du logo (#0071E5, relevé au pixel sur logo.gif du site actuel) sert d'unique accent,
 * approfondi (#0057B8) pour le texte en bleu et les survols. Fond blanc, encre bleu nuit, filets gris bleuté,
 * et une teinte « eau » très claire pour le concept des écluses.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0d1b2e", soft: "#4a5568", faint: "#7a8494" },
        blue: { DEFAULT: "#0071e5", deep: "#0057b8", night: "#0b2a55" },
        water: { DEFAULT: "#eaf3fd", 2: "#cfe3fa" },
        line: "#e5eaf1",
        mist: "#f6f8fb",
      },
      fontFamily: {
        sans: ["'Albert Sans Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "86rem" },
      boxShadow: { soft: "0 1px 2px rgba(13,27,46,.04), 0 12px 40px -18px rgba(13,27,46,.12)" },
    },
  },
  plugins: [],
} satisfies Config;
