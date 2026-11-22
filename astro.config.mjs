// @ts-check
import { defineConfig } from 'astro/config';

// TODO: set once the GitHub repo / domain is known.
// - Custom domain or <user>.github.io repo: site = 'https://your-domain', base = '/'
// - Project repo at <user>.github.io/<repo>: base = '/<repo>'
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
});
