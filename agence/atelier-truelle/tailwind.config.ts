import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terre: { DEFAULT: "#C8553D", action: "#B24630", dark: "#8F3624", tint: "#F3DDD5" },
        platre: { DEFAULT: "#F4EEE3", deep: "#EAE0CE", light: "#FAF6EE" },
        ardoise: { DEFAULT: "#1F2A30", soft: "#46545B", 2: "#2C3A41" },
        zinc: { DEFAULT: "#8A9BA3", dark: "#5A6970" },
        line: "#D9CFBB",
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "Fraunces", "Georgia", "serif"],
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
        hand: ["'Caveat Variable'", "Caveat", "cursive"],
      },
      boxShadow: {
        lift: "0 30px 60px -32px rgba(31,42,48,0.45)",
        snap: "0 2px 4px rgba(31,42,48,0.12), 0 22px 40px -22px rgba(31,42,48,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
