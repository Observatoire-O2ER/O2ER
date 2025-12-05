import { defineConfig } from 'astro/config';
import github from "@astrojs/github";

export default defineConfig({
  site: "https://observatoire-o2er.github.io/o2er",
  base: "/o2er",
  integrations: [github()],
});
