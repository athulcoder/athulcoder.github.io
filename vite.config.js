import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",

  rollupOptions: {
    external: ["react", "react-dom"], // Add the problematic module here
  },
});
