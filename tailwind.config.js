/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-bg': "url('/Hero-banner.jpg')",
        'pattern-bg': "url('/pattern1.png')"

        
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-color": {
          DEFAULT: "#f7e647",
          100: "#ffbc0d",
        },
        "secondary-color": {
          DEFAULT: "#da2d24"
        },
      }
    },
  },
  plugins: [],
}

