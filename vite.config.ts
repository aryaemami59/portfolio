import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: "http://127.0.0.1:3000/",
  },
  base: "/portfolio/",
  plugins: [react()],
});
