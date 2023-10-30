// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      script: [
        {
          src: '_nuxt/assets/js/animate.js'
        }
      ]
    }
  },
  css: ["@/assets/css/main.css"],

});
