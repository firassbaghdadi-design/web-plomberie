import type { Config } from "tailwindcss";

/**
 * Charte M. Fabulet, direction E « Artisan chaleureux ».
 * Les deux couleurs du logo : le brun bois du nom (#6B4423) et l'orange de « Couverture » (#D9822B).
 * Autour : crème, papier, terre cuite. L'orange ne sert jamais au texte courant (contraste) : le texte d'accent
 * passe en terre cuite foncée (#9A4A1F, 5,2:1 sur crème).
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2A1D13", soft: "#5B4636", faint: "#83705F" },
        bois: { DEFAULT: "#6B4423", deep: "#3E2716", night: "#2B1B10" },
        orange: { DEFAULT: "#D9822B", light: "#EDB173" },
        tuile: { DEFAULT: "#B4532A", deep: "#9A4A1F" },
        creme: { DEFAULT: "#F4ECDF", 2: "#EADDC8", 3: "#E0CFB4" },
        papier: "#FBF7F0",
        line: "#DDCCB3",
      },
      fontFamily: {
        serif: ["'Literata Variable'", "Georgia", "serif"],
      },
      maxWidth: { site: "90rem" },
      boxShadow: {
        soft: "0 1px 2px rgba(42,29,19,.05), 0 18px 50px -24px rgba(42,29,19,.28)",
        photo: "0 30px 80px -40px rgba(42,29,19,.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
