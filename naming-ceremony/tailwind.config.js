/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#96A29A',
        'sage-dark': '#5A7060',
        'sage-muted': '#A8AFA8',
        blush: '#F4E5E3',
        rose: '#CB8886',
        ribbon: '#F5ABAE',
        tan: '#E9D7CA',
      },
      fontFamily: {
        script: ['Galada', '"Lobster Two"', 'cursive'],
        sans: ['Mulish', 'Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'arch': '50% 50% 0 0',
      },
    },
  },
  plugins: [],
}
