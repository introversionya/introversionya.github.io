// https://nuxt.com/docs/api/configuration/nuxt-config
import legacy from '@vitejs/plugin-legacy';

export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false,
  },
  app: {
    // keepalive: true,
    // layoutTransition: true,
    // pageTransition: true,
  },
  ssr: true,
  css: ['/assets/styles/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['cover 99.5%'],
      },
    },
  },
  telemetry: false,
  vite: {
    plugins: [
      legacy({
        targets: ['defaults', 'IE 11'],
        polyfills: true,
      }),
    ],
  },
});
