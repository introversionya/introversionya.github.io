// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
  },
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['cover 99.5%'],
      },
    },
  },
});
