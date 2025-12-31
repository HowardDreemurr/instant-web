import { colors } from "./src/config/theme.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"],
      },
      colors: {
        bg: colors.bg,
        text: colors.text,
        forest: colors.forest,
        forest2: colors.forest2,
        accent: colors.accent,
        secondary: colors.secondary,
      },
      boxShadow: {
        soft: "0 18px 54px rgba(0,0,0,.08)",
      },
      maxWidth: {
        site: "1160px",
      },
    },
  },
  plugins: [],
};
