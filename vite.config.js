import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
  },
  resolve: {
    alias: {
      "@": "/src", // This maps '@' to the 'src' directory
      "@components": "/src/components", // Example of another alias
    },
  },
});
