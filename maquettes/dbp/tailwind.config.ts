import type { Config } from "tailwindcss";

/**
 * Charte DBP, direction D « Typographique suisse » : noir, blanc et un seul rouge-orange chaleur.
 * L'entreprise n'a ni site ni logo public : le rouge-orange vient du concept (la chaleur qui monte de 16° à 21°).
 * heat (#ff4a00) ne sert qu'aux grands chiffres et aux filets (3,3:1 sur blanc, 6,3:1 sur noir) ;
 * heat-deep (#c43000, 5,4:1 sur blanc) sert aux petits textes et aux survols.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b0b0b", soft: "#3a3a3a", faint: "#6b6b6b" },
        heat: { DEFAULT: "#ff4a00", deep: "#c43000" },
        paper: { DEFAULT: "#ffffff", 2: "#f2f2f0" },
        line: "#d9d9d6",
      },
      fontFamily: {
        sans: ["'Geist Variable'", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: { site: "96rem" },
    },
  },
  plugins: [],
} satisfies Config;
