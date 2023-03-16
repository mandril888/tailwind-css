/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    // colors: {
    //   here we override the default colors
    // },
    extend: {
      colors: {
        vuejs: '#42b883',
        highlight: {
          100: '#dae7ff',
          300: '#82aeff',
          600: '#4385ff',
          900: '#0b60ff',
        }
      },
      screens: {
        'lg': '992px',    // override lg class
        '3xl': '1600px',  // create new class
      },
    },
  },
  plugins: [],
}
