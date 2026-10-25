import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#17201b", soft: "#47544c", 2: "#22302a" },
        paper: { DEFAULT: "#fbf7f0", deep: "#f1eadd" },
        brand: { DEFAULT: "#085627", dark: "#063d1b", light: "#6fb287", tint: "#e4efe7" },
        amber: { DEFAULT: "#ff4100", action: "#d63c00", deep: "#a82e00", tint: "#ffe9df" },
        line: "#ddd3c1",
      },
      fontFamily: {
        display: ["'Playfair Display Variable'", "Georgia", "serif"],
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 34px 60px -34px rgba(23,32,27,0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
