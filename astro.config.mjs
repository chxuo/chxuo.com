// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://chxuo.com",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [expressiveCode(), mdx(), icon(), sitemap()],

  env: {
    schema: {
      UMAMI_URL: envField.string({ context: "server", access: "public", optional: true }),
      UMAMI_WEBSITE_ID: envField.string({ context: "server", access: "public", optional: true })
    }
  }
});
