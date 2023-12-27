// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //@ts-ignore
  googleFonts: {
    families: {
      "Space Mono " : [400 , 700],
      "Satisfy": [400]
      // advanced
    },
  },
  modules: [
    "nuxt-particles",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],

  colorMode: {
    classSuffix: "",
    preference: 'dark',
    fallback: 'dark',
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: 'icon', type: 'image/x', href: '/icon.ico' }
      ],
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    htmlAttrs: {
      class: "dark",
      lang: 'en',
    },
    script: [
      {
        src: "_nuxt/assets/js/animate.js",
      },
    ],
  },
},
  css: ["@/assets/css/main.css" , "@/assets/css/main.css"],
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
