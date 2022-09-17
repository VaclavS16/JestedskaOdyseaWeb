import { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')

export default <Config>{
  theme: {
    extend: {},
    colors: {
      'green': "#00D200",
      'white': colors.white,
      'black': colors.black,
      'slate': colors.slate,
    },
  },
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './app.vue',
  ],
}