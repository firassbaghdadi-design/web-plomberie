import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F3A4E", soft: "#4A5A63" },
        paper: { DEFAULT: "#FFFFFF", deep: "#F1F8FB" },
        brand: { DEFAULT: "#4CAAC9", dark: "#26718C", light: "#9FD3E6", tint: "#DCEFF6" },
        line: "#D5E3EA",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
