import type { Config } from "tailwindcss";

/**
 * Charte M. Fabulet, direction « Atelier nuit » (éditorial sombre, refonte du 05/11/2026).
 * Fond bois brûlé presque noir ; l'orange du logo (#D9822B) devient la lumière de l'atelier, en cuivre et orange chaud.
 * Le crème est réservé au texte. Contrastes : crème 15:1, crème-soft 9:1, crème-faint 5,1:1, cuivre-light 7,6:1 sur nuit.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nuit: { DEFAULT: "#1d130d", deep: "#140d08", 2: "#24170f", 3: "#2e1f15", 4: "#3a2819" },
        creme: { DEFAULT: "#F2E7D5", soft: "#CDBBA3", faint: "#A08C75" },
        cuivre: { DEFAULT: "#D9822B", light: "#EFA75C", pale: "#F3C793", deep: "#B4652A", dark: "#7A4119" },
      },
      fontFamily: {
        serif: ["'Bodoni Moda Variable'", "Didot", "Georgia", "serif"],
        sans: ["'Schibsted Grotesk Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "94rem" },
      boxShadow: {
        photo: "0 40px 90px -40px rgba(0,0,0,.85)",
        glow: "0 18px 50px -18px rgba(217,130,43,.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
