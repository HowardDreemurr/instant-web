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
        bg: "#f7f7f7",
        text: "#222222",
        forest: "#0066cc",
        forest2: "#004494",
        accent: "#00a8e8",
        secondary: "#ff6b35",
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
