import type { Config } from "tailwindcss";

/**
 * Charte SPC, direction « couleur de marque pleine ».
 * La couleur du logo (lue au build sur spc-services.fr par scripts/fetch-photos.mjs, bleu zinc par défaut) est déclinée
 * en aplats de plus en plus profonds : `brand` (la couleur du logo), `deep` (l'ardoise), `abyss` (la cave).
 * Le texte est blanc ; le zinc clair sert aux filets et aux textes secondaires.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: v("accent"), deep: v("deep"), abyss: v("abyss"), light: v("accent-light"), mid: v("accent-deep") },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), wash: v("accent-wash") },
        ink: { DEFAULT: "#0d1822", soft: "#46525d", faint: "#6b7682" },
        zinc: { DEFAULT: "#a9b5be", light: "#cfd7dd", wash: "#eef2f4" },
        line: "#dbe2e7",
      },
      fontFamily: {
        sans: ["'Archivo Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "92rem" },
      boxShadow: { soft: "0 1px 2px rgba(13,24,34,.05), 0 24px 60px -30px rgba(13,24,34,.35)" },
    },
  },
  plugins: [],
} satisfies Config;
