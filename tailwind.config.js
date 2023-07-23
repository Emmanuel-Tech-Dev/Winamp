/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage : {
  'Bg_image' : "url(' ../images/bcg.png')",
}
    },
  },
  plugins: [],
};

