import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#E4342B", btn: "#D42C23", dark: "#B3241C", tint: "#FBEDEB" },
        ink: { DEFAULT: "#15181B", 2: "#0D0F11", soft: "#5D636A" },
        paper: { DEFAULT: "#FFFFFF", 2: "#F6F5F3", 3: "#ECEAE6", sheet: "#FFFFFF" },
        line: "#E7E5E1",
        flame: "#2F6FD6",
      },
      fontFamily: {
        display: ["'Inter Tight Variable'", "'Inter Tight'", "system-ui", "sans-serif"],
        sans: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
        label: ["'Inter Variable'", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
