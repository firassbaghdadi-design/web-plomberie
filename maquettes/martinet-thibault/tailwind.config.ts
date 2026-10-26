import type { Config } from "tailwindcss";

/**
 * Charte Martinet Thibault : le bleu du logo (#0071E5, relevé au pixel sur logo.gif du site actuel),
 * approfondi en bleu de Prusse (#0A57C8) pour le texte et les boutons ; le fond rosé du site actuel (#F5F1F1)
 * devient un papier calque chaud ; le cuivre des tuyaux sert d'unique contrepoint.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#f4f0eb", 2: "#ebe5dd", 3: "#ded6cb" },
        ink: { DEFAULT: "#15171c", soft: "#4a4f58", faint: "#6b707a" },
        cobalt: { DEFAULT: "#0a57c8", logo: "#0071e5", deep: "#0a3a86", night: "#08285c", mist: "#dfe8f6" },
        copper: { DEFAULT: "#b4632a", deep: "#8e4a1c", soft: "#f1e2d4" },
        line: "#d9d1c6",
      },
      fontFamily: {
        display: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'Hanken Grotesk Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "88rem" },
    },
  },
  plugins: [],
} satisfies Config;
