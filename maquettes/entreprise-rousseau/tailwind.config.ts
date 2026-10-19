import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#12263A", soft: "#2B4660" },
        paper: { DEFAULT: "#FAF6F0", deep: "#F1EADF" },
        copper: { DEFAULT: "#A9481F", dark: "#7E3414", light: "#E9C7B3" },
        line: "#DDD2C0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
