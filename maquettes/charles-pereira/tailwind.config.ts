import type { Config } from "tailwindcss";

/**
 * Charte : l'entreprise n'a ni site ni logo public. On propose un accent unique « bleu de plan » (#1d4e89),
 * la couleur des schémas isométriques et des plans de plomberie, sur blanc (contraste 8,6:1). Encre bleu-noir froide.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#101a24", soft: "#4a5764", faint: "#717d89" },
        accent: { DEFAULT: "#1d4e89", deep: "#143a69", light: "#8fb0d6", wash: "#f0f5fa" },
        paper: { DEFAULT: "#f8fafc", 2: "#eef2f6" },
        line: "#e2e8ee",
      },
      fontFamily: { sans: ["'Red Hat Display Variable'", "system-ui", "sans-serif"] },
      maxWidth: { site: "88rem" },
    },
  },
  plugins: [],
} satisfies Config;
