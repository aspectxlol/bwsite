import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        text: "#0A0F13",
        background: "#F7FAFC",
        primary: "#4C92BC",
        secondary: "#83C0E9",
        accent: "#5BB4F0",
      },
      boxShadow: {
        'topdown-boxes': "0px 0px 10px rgba(0, 0, 0, 0.1)",
        'r-3xl': "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
} satisfies Config;
