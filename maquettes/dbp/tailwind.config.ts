import type { Config } from "tailwindcss";

/**
 * Charte DBP. L'entreprise n'a ni site ni logo public : l'accent est imposé par le concept du thermostat.
 * Il passe du bleu froid (#1e6696, 6,1:1 sur blanc) au rouge doux (#bc4840, 5,0:1) au fil de la page ;
 * la valeur courante vit dans la variable CSS --accent (mise à jour par Motion.tsx), jamais figée dans une classe.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#13171c", soft: "#474f58", faint: "#6a727b" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep") },
        paper: { DEFAULT: "#f6f8fa", 2: "#eef2f5" },
        line: "#e2e7ec",
      },
      fontFamily: {
        sans: ["'Schibsted Grotesk Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(19,23,28,.04), 0 18px 44px -22px rgba(19,23,28,.2)" },
    },
  },
  plugins: [],
} satisfies Config;
