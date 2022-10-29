/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js,ts}',
    './components/**/*.{html,js,ts}',
  ],
  theme: {
    extend: {},
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: '#000000',
    //   white: '#ffffff',
    //   gray: '#F7F7F8',
    //   primary: '#4C78E0',
    //   secondary: '#FE764F',
    //   dark: '#3D464A'
    // }
  },
  plugins: [],
  variants: {
    extend: {},
  },
  mode: "jit",
  purge: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}
