import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#121814", soft: "#565c58", 2: "#22302a" },
        paper: { DEFAULT: "#ffffff", deep: "#f6f5f1" },
        brand: { DEFAULT: "#085627", dark: "#063d1b", light: "#6fb287", tint: "#e8f0ea" },
        amber: { DEFAULT: "#ff4100", action: "#c43300", deep: "#a82e00", tint: "#fff0ea" },
        line: "#e6e5df",
      },
      fontFamily: {
        display: ["'Jost Variable'", "system-ui", "sans-serif"],
        sans: ["'Jost Variable'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 30px 60px -40px rgba(18,24,20,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
