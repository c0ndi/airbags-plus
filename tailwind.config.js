/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F41A1A',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
      },
      keyframes: {
        transform: {
          '0%': { width: "0%" },
          '100%': { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}
