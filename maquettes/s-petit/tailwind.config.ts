import type { Config } from "tailwindcss";

/**
 * Charte S. Petit, v2 « l'artisan de quartier ». L'entreprise n'a ni site ni logo public : la palette est celle d'une
 * devanture de quartier. Vert sauge profond (#2F4A3F, 9,6:1 sur crème) pour les aplats et les titres, crème pour le
 * fond, cuivre (#9A5B2E, 5,1:1 sur crème) en touches : liens, numéros, étoiles, la goutte. Rien de vif.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1f2b25", soft: "#4a5650", faint: "#6e7770" },
        sauge: { DEFAULT: "#2f4a3f", deep: "#22372e", mid: "#4f6b5d", light: "#a9b8a8", wash: "#e4e8dc" },
        creme: { DEFAULT: "#f5efe4", 2: "#ece3d2", 3: "#e2d6c0" },
        cuivre: { DEFAULT: "#9a5b2e", deep: "#7a4421", light: "#c88b5a", pale: "#e7c39f" },
        line: "#ddd2bf",
        /* Alias de l'ancienne charte, pour les composants partagés (formulaire). */
        eau: { DEFAULT: "#2f4a3f", deep: "#22372e", light: "#a9b8a8", wash: "#e4e8dc" },
        paper: { DEFAULT: "#fbf8f2", 2: "#ece3d2" },
      },
      fontFamily: {
        sans: ["'Work Sans Variable'", "system-ui", "sans-serif"],
        serif: ["'Lora Variable'", "Georgia", "serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(31,43,37,.05), 0 18px 44px -24px rgba(31,43,37,.28)" },
    },
  },
  plugins: [],
} satisfies Config;
