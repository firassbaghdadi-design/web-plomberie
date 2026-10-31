import type { Config } from "tailwindcss";

/**
 * Charte Bastien & Trebulle, direction A « éditorial sombre » : fond d'encre, ivoire, laiton.
 * Le laiton est l'unique accent : c'est la matière du compteur, l'objet précieux de la maquette.
 * La couleur du logo (bleu nuit, relevée au build) n'apparaît que sur les rouleaux décimaux (--logo).
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0d0f",
        coal: "#131417",
        raise: "#1a1b1f",
        fg: { DEFAULT: "#ede7db", soft: "#bfb8ab", faint: "#8f897e" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep") },
        brass: { DEFAULT: "#c8a565", light: "#ead39c", deep: "#7c612f" },
        logo: v("logo"),
        line: { DEFAULT: "#2a2a2f", strong: "#45434a" },
      },
      fontFamily: {
        sans: ["'Instrument Sans Variable'", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond Variable'", "Georgia", "serif"],
      },
      maxWidth: { site: "92rem" },
      boxShadow: { deep: "0 1px 0 rgba(237,231,219,.04) inset, 0 40px 80px -40px rgba(0,0,0,.8)" },
    },
  },
  plugins: [],
} satisfies Config;
