import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "../backend/public",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: [".fly.dev", ".build0.ai"],
    port: 5172,
    proxy: {
      "/api": "http://localhost:8000",
    },
    headers: {
      "Content-Security-Policy":
        "frame-ancestors https://*.build0.ai http://localhost:*",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
