import {createWebHistory} from 'vue-router'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    baseURL: "/jestedska-odysea-web/",
  },
  router: {
    base: "/jestedska-odysea-web/",
    options: {
      history: createWebHistory('/jestedska-odysea-web/'),
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
  ],
  image: {
    dir: 'static/images',
  },
  css: [
    '~/assets/scss/main.scss',
  ],
})
