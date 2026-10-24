import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: "#E4342B", btn: "#C9261D", dark: "#9E1B14", tint: "#FBE6E1" },
        ink: { DEFAULT: "#2C353D", 2: "#1B2229", soft: "#505B64" },
        paper: { DEFAULT: "#F6F0E3", 2: "#EDE4D0", 3: "#E2D6BB", sheet: "#FFFCF4" },
      },
      fontFamily: {
        display: ["'Fraunces Variable'", "Georgia", "serif"],
        sans: ["'Open Sans Variable'", "'Open Sans'", "system-ui", "sans-serif"],
        hand: ["Caveat", "'Segoe Print'", "cursive"],
        label: ["'Barlow Condensed'", "'Arial Narrow'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
