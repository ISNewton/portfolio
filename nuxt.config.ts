// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //@ts-ignore
  googleFonts: {
    families: {
      Lekton: [400, 700],

      // advanced
      Raleway: {
        // weights
        wght: [100, 400],
        // italic
        ital: [100],
      },
    },
  },
  plugins: [
    {
      src: "~/plugins/vue-writer.ts",
    },
  ],
  modules: [
    "nuxt-particles",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],

  colorMode: {
    classSuffix: "",
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
      htmlAttrs: {
        class: "dark",
      },
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
