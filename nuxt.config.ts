export default defineNuxtConfig({
  build: {
    transpile: ['tslib'],
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
});
