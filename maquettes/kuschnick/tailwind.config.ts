import type { Config } from "tailwindcss";

/**
 * Charte Kuschnick. Le site actuel n'a ni logo ni couleur propre (modèle WordPress par défaut) : on propose un accent
 * « cuivre » (#9C4A22), la couleur du métier (tubes de cuivre, raccords en laiton) et celle des lettres dorées des
 * enseignes peintes de 1957. Contraste sur blanc : 6,3:1. Encre brun-noir chaude, filets couleur papier.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1b1916", soft: "#55504a", faint: "#7c766e" },
        copper: { DEFAULT: "#9c4a22", deep: "#7a3817", light: "#d9a27f", wash: "#f7efe9" },
        paper: { DEFAULT: "#fbf9f6", 2: "#f3eee7" },
        line: "#e7e1d8",
        perf: "#cfc6b9",
      },
      fontFamily: {
        sans: ["'Urbanist Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(27,25,22,.04), 0 14px 40px -20px rgba(27,25,22,.14)" },
    },
  },
  plugins: [],
} satisfies Config;
