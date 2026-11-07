import type { Config } from "tailwindcss";

/**
 * Charte Monteil & Cie, direction C « Immersif photo ». Les photos de chantier de la maison occupent l'écran bord à bord,
 * le texte est posé dessus en surimpression fine. Fond nuit, textes ivoire, accent = la couleur du logo lue au build
 * (scripts/fetch-photos.mjs) et injectée en variables CSS par le layout ; sa version claire sert au texte sur fond sombre.
 * Polices : Space Grotesk (texte, titres légers) + Newsreader italique (accents).
 * Les noms de jetons sont sémantiques : `ink` = texte fort, `ink-soft` = texte courant, `night` = fond.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#0b0e11", 2: "#12171c", 3: "#191f25" },
        ink: { DEFAULT: "#f1eee8", soft: "#bdbcb7", faint: "#8d9092" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), light: v("accent-light"), wash: v("accent-wash") },
        line: "rgb(241 238 232 / 0.14)",
        paper: "#12171c",
      },
      fontFamily: {
        sans: ["'Space Grotesk Variable'", "system-ui", "sans-serif"],
        serif: ["'Newsreader Variable'", "Georgia", "serif"],
      },
      maxWidth: { site: "92rem" },
    },
  },
  plugins: [],
} satisfies Config;
