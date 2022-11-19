import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  image: {
    dir: 'static/images',
  },
  static: {
    prefix: 'public',
  },
  css: [
    '~/assets/scss/main.scss',
  ],
})
