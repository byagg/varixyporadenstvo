import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://varixyporadenstvo.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [mdx(), react()],
  vite: {
    cacheDir: "node_modules/.vite-build",
    plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
    open: false,
  },
  devToolbar: {
    enabled: false,
  },
});
