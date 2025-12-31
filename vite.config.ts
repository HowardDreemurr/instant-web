import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages friendly:
// - We use HashRouter so it works without server-side routing config.
export default defineConfig({
  plugins: [react()],
});
