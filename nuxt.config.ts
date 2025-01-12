// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'miniblog',
      htmlAttrs: {
        lang: 'es-Mx',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'miniblog es mi blog personal' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    public: {
      NETLIFY_API: process.env.NETLIFY_API
    },
  },
})
