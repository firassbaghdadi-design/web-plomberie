import type { Config } from "tailwindcss";

/** Charte SERAGAZ : bleu #00519E et vert #88BB3D relevés au pixel sur le logo ; marine #022C68 repris du site actuel. */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#061a33", 2: "#0b2546", 3: "#12345e" },
        navy: "#022c68",
        blue: { DEFAULT: "#00519e", deep: "#003f7d", soft: "#dbe7f3", mist: "#eef3f8" },
        flame: { DEFAULT: "#88bb3d", deep: "#4d7a1a", soft: "#e9f3da" },
        ink: { DEFAULT: "#0d1b2a", soft: "#45556a", faint: "#7b8899" },
        paper: "#f6f7f4",
        line: "#d7dee6",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque Variable'", "system-ui", "sans-serif"],
        sans: ["'Figtree Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        plate: "0 1px 0 rgba(255,255,255,.6) inset, 0 30px 60px -30px rgba(6,26,51,.45)",
        soft: "0 24px 48px -28px rgba(6,26,51,.35)",
      },
      maxWidth: { site: "84rem" },
    },
  },
  plugins: [],
} satisfies Config;
