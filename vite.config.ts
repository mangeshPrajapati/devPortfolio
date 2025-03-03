import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prototype } from "events";
import { config } from "dotenv";

// https://vitejs.dev/config/
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: "0.0.0.0",
    port: PORT,
    strictPort: false,
  },
});
