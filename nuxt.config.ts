// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    // payloadExtraction: false,
    // inlineSSRStyles: false,
  },
  app: {
    // keepalive: true,
    // layoutTransition: true,
    // pageTransition: true,
  },
  ssr: true,
  // css: ['/assets/styles/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['cover 99.5%'],
      },
    },
  },
});
