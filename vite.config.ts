import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";
const CDN_URL = "https://66c6f24e3b086b000864fb9f.storage.fermion.app/public-cached/custom-page-zip-contents";

export default defineConfig({
  base: CDN_URL,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Main page
        programs: resolve(__dirname, "/programs/index.html"), // Programs page
        courseRegisteration: resolve(__dirname, "course-registeration/index.html"), // Course Registration page
      },
    },
  },
});
