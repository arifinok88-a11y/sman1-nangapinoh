import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        berita: resolve(__dirname, "berita.html"),
        admin: resolve(__dirname, "admin.html")
      }
    }
  }
});