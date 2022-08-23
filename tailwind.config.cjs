/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'gruen': '#56945a',
        'gelb': '#e7ac23',
        'braun': '#9d926a',
        'beige': '#f5f3ef',
      },
    },
  },
  plugins: [],
}