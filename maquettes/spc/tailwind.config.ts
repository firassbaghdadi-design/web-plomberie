import type { Config } from "tailwindcss";

/**
 * Charte SPC. L'accent est la couleur du logo de l'entreprise, lue au build sur spc-services.fr
 * (scripts/fetch-photos.mjs, assombrie si besoin pour un contraste d'au moins 4,8:1 sur blanc) et injectée en variables CSS.
 * Encre gris-zinc, filets couleur zinc clair : le métal des toits du 12e.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#17191c", soft: "#4c5259", faint: "#737a82" },
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), wash: v("accent-wash") },
        zinc: { DEFAULT: "#9aa3ab", light: "#c9cfd4", wash: "#f4f6f7" },
        line: "#e3e7ea",
      },
      fontFamily: {
        sans: ["'Onest Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(23,25,28,.04), 0 14px 40px -20px rgba(23,25,28,.14)" },
    },
  },
  plugins: [],
} satisfies Config;
