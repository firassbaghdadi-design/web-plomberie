import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        flame: { DEFAULT: "#E4342B", btn: "#C9261D", dark: "#9E1B14", tint: "#FDECEA" },
        ember: { DEFAULT: "#FF8A3D", soft: "#FFD2B0" },
        coal: { DEFAULT: "#2C353D", 2: "#1B2229", 3: "#3B464F", soft: "#59646C" },
        cream: { DEFAULT: "#FBF6F0", deep: "#F2E9DD" },
        line: "#E6DCCF",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "'Arial Narrow'", "sans-serif"],
        sans: ["'Open Sans Variable'", "'Open Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 30px 60px -30px rgb(27 34 41 / 0.5)",
        glow: "0 0 0 1px rgb(255 138 61 / 0.25), 0 30px 80px -30px rgb(228 52 43 / 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
