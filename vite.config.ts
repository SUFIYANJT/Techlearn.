import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const CDN_URL = "https://66c6f24e3b086b000864fb9f.storage.fermion.app/public-cached/custom-page-zip-contents";
export default defineConfig({
  base: CDN_URL,
  plugins: [react()],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    headers: {
      "Content-Type": "text/css",
    },
  },
});
