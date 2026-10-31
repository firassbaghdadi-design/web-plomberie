import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fond: v("fond"),
        carte: v("carte"),
        creux: v("creux"),
        trait: v("trait"),
        encre: v("encre"),
        doux: v("doux"),
        pale: v("pale"),
        terre: v("terre"),
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Text'", "Inter", "'Segoe UI'", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "14px", "2xl": "20px", "3xl": "28px" },
      boxShadow: {
        doux: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.10)",
        haut: "0 1px 0 rgb(0 0 0 / 0.04), 0 18px 40px -20px rgb(0 0 0 / 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
