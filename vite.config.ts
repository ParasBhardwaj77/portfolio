import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/resume.pdf") {
          res.setHeader("Content-Disposition", "inline");
          res.setHeader("Content-Type", "application/pdf");
        }
        next();
      });
    },
  },
});
