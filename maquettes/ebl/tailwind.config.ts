import type { Config } from "tailwindcss";

/**
 * Charte EBL v2, « Seventies chic » : l'hommage à 1978.
 * Vert olive profond, moutarde, brun tabac et crème. L'accent (--accent) est le brun tabac,
 * lisible sur crème ; la moutarde sert sur fond olive et en filets.
 */
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: v("accent"), deep: v("accent-deep"), tint: v("accent-tint") },
        olive: { DEFAULT: "#2e3520", deep: "#222816", soft: "#454d2f", mist: "#727a55" },
        mustard: { DEFAULT: "#c99a2e", light: "#e3bb5a", deep: "#946c14" },
        tabac: { DEFAULT: "#74462a", deep: "#4f2f1b", light: "#a06a43" },
        cream: { DEFAULT: "#f1e7d0", light: "#f7f1e3", deep: "#e5d6b4" },
        ink: { DEFAULT: "#28241a", soft: "#544b3a", faint: "#776b54" },
        lead: "#776b54",
        line: "#d6c6a2",
        mist: "#e9ddc1",
        paper: "#f4ecda",
      },
      fontFamily: {
        sans: ["'Darker Grotesque Variable'", "system-ui", "sans-serif"],
        serif: ["'Young Serif'", "Georgia", "serif"],
      },
      maxWidth: { site: "86rem" },
    },
  },
  plugins: [],
} satisfies Config;
