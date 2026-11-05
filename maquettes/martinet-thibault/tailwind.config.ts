import type { Config } from "tailwindcss";

/**
 * Direction E, « Artisan chaleureux », version maison de 1880 :
 * crème chaud et pierre de Paris (le calcaire lutétien des façades du 10e), encre brune, laiton patiné.
 * Le bleu du logo (#0071E5, relevé au pixel sur logo.gif du site actuel) reste la marque : monogramme,
 * plaque de rue émaillée du héros et filet d'eau du canal, rien d'autre.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2a231c", soft: "#5a4f43", faint: "#8b7f6f" },
        cream: { DEFAULT: "#f5efe4", 2: "#faf6ef" },
        stone: { DEFAULT: "#e9e0d0", 2: "#ddd1bc", deep: "#b9a888" },
        brass: { DEFAULT: "#9a7744", deep: "#73572c", light: "#cdb084", pale: "#e6d4b3" },
        night: { DEFAULT: "#221c16", 2: "#2e261e" },
        canal: { DEFAULT: "#0071e5", enamel: "#123f7c" },
        water: { DEFAULT: "#e4dac8", 2: "#d6c8b0" },
        line: "#dcd0bd",
        mist: "#ece4d6",
      },
      fontFamily: {
        serif: ["'Fraunces Variable'", "Georgia", "serif"],
        sans: ["'Karla Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "88rem" },
      boxShadow: { soft: "0 1px 2px rgba(42,35,28,.05), 0 18px 50px -24px rgba(42,35,28,.25)" },
    },
  },
  plugins: [],
} satisfies Config;
