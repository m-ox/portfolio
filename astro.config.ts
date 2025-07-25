import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.maudlinoxalis.xyz',
  base: '/',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  trailingSlash: 'ignore',
  integrations: [react()],
  build: {
    format: 'directory',
    outDir: 'dist',
  },
});
