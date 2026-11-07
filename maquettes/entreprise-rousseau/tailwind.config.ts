import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: v("ink"), 2: v("ink-2"), soft: v("ink-soft") },
        paper: { DEFAULT: "#FFFFFF", deep: v("paper-deep") },
        brand: { DEFAULT: v("brand"), dark: v("brand-dark"), light: v("brand-light"), tint: v("brand-tint") },
        amber: { DEFAULT: v("amber"), dark: v("amber-dark") },
        line: v("line"),
      },
      fontFamily: {
        display: ["Questrial", "system-ui", "sans-serif"],
        sans: ["'Roboto Variable'", "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 30px 60px -30px rgb(var(--c-ink) / 0.45)",
        glow: "0 0 0 1px rgb(var(--c-brand-light) / 0.25), 0 30px 80px -30px rgb(var(--c-brand) / 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
