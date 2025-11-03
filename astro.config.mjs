// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://chxuo.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [expressiveCode(), mdx(), icon()],
});
