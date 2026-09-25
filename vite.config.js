import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH lets the same code run at a domain root ("/", e.g. cosmodentalusa.com)
// or in a sub-folder (e.g. "/cosmodental_frontend/" for the GitHub Pages preview).
const base = process.env.BASE_PATH || "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
  },
});
