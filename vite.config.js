import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/computer-graphics-helper/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`
    }
  }
})