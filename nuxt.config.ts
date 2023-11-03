// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-particles", '@vueuse/motion/nuxt'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: "_nuxt/assets/js/animate.js",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  // nuxt.config.js
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
