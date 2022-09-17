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
      'slate-transparent': 'rgba(15, 23, 42, 0.7)',
      'cyan': colors.cyan,
    },
  },
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './app.vue',
  ],
}