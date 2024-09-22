import path from "path";

const apiBaseUrl = process.env.API_URL;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://api.example.com",
    },
  },

  build: {
    // 잘못된 설정 예시
  },

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

  imports: {
    autoImport: true,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  primevue: {
    options: {
      unstyled: false,
    },
    importPT: { from: path.resolve(__dirname, "./presets/aura/") }, //import and apply preset
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-primevue",
    "@nuxt/test-utils/module",
    "@nuxt/content",
    "@nuxt/image",
  ],

  routeRules: {
    "/api/**": {
      proxy: `${apiBaseUrl}/api/**`,
      cors: true,
    },
  },

  content: {
    api: {
      baseURL: "/_content", // queryContent 함수응답용 API base URL 변경(default: '/api/_content')
    },
    watch: false, // websocket 기능 끄기
  },

  compatibilityDate: "2024-09-22",
});