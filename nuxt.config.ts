import {createWebHistory} from 'vue-router'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    baseURL: "/JestedskaOdyseaWeb/",
  },
  router: {
    base: "/JestedskaOdyseaWeb/",
    options: {
      history: createWebHistory('/base-directory/'),
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
