import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: "http://localhost:3000/",
  },
  base: "/portfolio/",
  plugins: [react()],
});
