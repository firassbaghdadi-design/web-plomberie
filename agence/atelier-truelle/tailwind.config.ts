import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terre: { DEFAULT: "#C8553D", action: "#B24630", dark: "#8F3624", tint: "#F3DDD5" },
        platre: { DEFAULT: "#F6F1E7", deep: "#EDE5D5", light: "#FBF8F2" },
        ardoise: { DEFAULT: "#1F2A30", soft: "#4A585F", 2: "#2C3A41" },
        zinc: { DEFAULT: "#8A9BA3", dark: "#5C6B73" },
        line: "#DDD3C0",
      },
      fontFamily: {
        display: ["'Archivo Variable'", "Archivo", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 30px 60px -32px rgba(31,42,48,0.45)",
        card: "0 1px 0 rgba(31,42,48,0.04), 0 18px 40px -26px rgba(31,42,48,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
