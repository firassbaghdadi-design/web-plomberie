import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#06283A", 2: "#0B3A52", soft: "#4A5A63" },
        paper: { DEFAULT: "#FFFFFF", deep: "#F2FAFD" },
        brand: { DEFAULT: "#4CAAC9", dark: "#26718C", light: "#9FD3E6", tint: "#DCEFF6" },
        amber: { DEFAULT: "#FFB020", dark: "#F59E0B" },
        line: "#D5E3EA",
      },
      fontFamily: {
        display: ["Questrial", "system-ui", "sans-serif"],
        sans: ["'Roboto Variable'", "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 30px 60px -30px rgba(6,40,58,0.45)",
        glow: "0 0 0 1px rgba(159,211,230,0.25), 0 30px 80px -30px rgba(76,170,201,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
