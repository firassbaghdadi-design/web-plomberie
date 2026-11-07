import type { Config } from "tailwindcss";

/**
 * Charte Kuschnick, direction « Gazette de quartier 1957 ». Le site actuel n'a ni logo ni couleur propre : on garde
 * l'accent « cuivre » (#9C4A22), la couleur du métier (tubes de cuivre, raccords en laiton), seule couleur de la page.
 * Fond papier journal ivoire, encre noire, filets d'imprimerie. Contraste du cuivre sur l'ivoire : 5,6:1.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#151311", soft: "#3d3934", faint: "#6b655c" },
        copper: { DEFAULT: "#9c4a22", deep: "#7a3817", light: "#d9a27f", wash: "#efe4d6" },
        paper: { DEFAULT: "#f5f0e6", 2: "#ece5d7", 3: "#e3dac8" },
        line: "#d6cdbd",
        perf: "#bfb4a2",
      },
      fontFamily: {
        serif: ["'Playfair Display Variable'", "Georgia", "serif"],
        sans: ["'Libre Franklin Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "90rem" },
    },
  },
  plugins: [],
} satisfies Config;
