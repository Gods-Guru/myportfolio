import {defineConfig} from "eslint/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
  ],
})
