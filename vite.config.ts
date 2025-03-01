import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Ensure path module is imported

const CDN_URL = "https://66c6f24e3b086b000864fb9f.storage.fermion.app/public-cached/"; // Replace with actual Fermion CDN URL

export default defineConfig({
  plugins: [react()],
  base: CDN_URL,
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  experimental: {
    renderBuiltUrl(filename, { hostId, type }) { // ✅ hostType removed
      if (type === "public") {
        return `${CDN_URL}${filename}`;
      } else if (hostId && path.extname(hostId) === ".js") {
        return {
          runtime: `window.__assetsPath(${JSON.stringify(filename)})`
        };
      } else {
        return `${CDN_URL}assets/${filename}`;
      }
    },
  },
});
