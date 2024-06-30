import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'https://api.example.com'
    }
  },
  build: {
    // 잘못된 설정 예시
  },
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  imports: {
    autoImport: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  primevue: {
    options: {
      unstyled: false
    },
    importPT: { from: path.resolve(__dirname, './presets/aura/') },      //import and apply preset

  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-primevue"],
  
})