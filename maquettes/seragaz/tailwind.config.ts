import type { Config } from "tailwindcss";

/** Charte SERAGAZ : bleu #00519E et vert #88BB3D relevés au pixel sur le logo ; marine #022C68 repris du site actuel. Fond blanc, la couleur reste un accent. */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#022c68",
        blue: { DEFAULT: "#00519e", deep: "#003f7d", tint: "#edf3f9" },
        green: { DEFAULT: "#88bb3d", deep: "#4f7a1c", tint: "#f2f8ea" },
        ink: { DEFAULT: "#0e1c2c", soft: "#4b5a6b", faint: "#7d8a99" },
        line: "#e4e9ef",
        mist: "#f6f8fa",
        paper: "#ffffff",
      },
      fontFamily: {
        sans: ["'Manrope Variable'", "system-ui", "sans-serif"],
        display: ["'Manrope Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 60px -40px rgba(2,44,104,.35)",
      },
      maxWidth: { site: "84rem" },
    },
  },
  plugins: [],
} satisfies Config;
