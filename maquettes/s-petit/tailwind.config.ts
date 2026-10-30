import type { Config } from "tailwindcss";

/**
 * Charte S. Petit. L'entreprise n'a ni site ni logo public : l'accent est un bleu d'eau profond (#1769A3), la couleur
 * du métier, utilisé avec retenue (goutte, filets, liens). Contraste sur blanc : 5,9:1. Encre bleu-nuit, filets pâles.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#101c27", soft: "#44525e", faint: "#6f7c88" },
        eau: { DEFAULT: "#1769a3", deep: "#0f4f7f", light: "#8fbbd9", wash: "#eef5fa" },
        paper: { DEFAULT: "#f8fafc", 2: "#eef2f6" },
        line: "#e2e8ee",
      },
      fontFamily: { sans: ["'Onest Variable'", "system-ui", "sans-serif"] },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(16,28,39,.04), 0 14px 40px -22px rgba(16,28,39,.16)" },
    },
  },
  plugins: [],
} satisfies Config;
