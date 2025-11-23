// .lintstagedrc.mjs

/** @type {import("@commitlint/config-conventional").Config} */
export default {
  "*.{js,jsx,ts,tsx}": "prettier --write --ignore-unknown",
  "*.{md,mdx}": "prettier --write --ignore-unknown",
  "*.astro": "prettier --write --ignore-unknown",
  "*.{json,html}": "prettier --write --ignore-unknown",
  "*.css": "prettier --write --ignore-unknown",
};
