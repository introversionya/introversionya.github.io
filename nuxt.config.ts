import autoprefixer from './postcss.config.js';
import meta from './meta.config.js';

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
  },
  app: {
    head: meta,
    // keepalive: true,
    // layoutTransition: true,
    // pageTransition: true,
  },
  ssr: true,
  css: ['@/assets/styles/main.scss'],
  postcss: autoprefixer,
  telemetry: false,
});