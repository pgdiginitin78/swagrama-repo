/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ayuDark: "#263d21",
        ayuMid: "#4a7c2c",
        ayuLight: "#8fbc8f",
        ayuBrown: "#882E2E",
        tulsi: "#3f6b4f",
        tulsiDark: "#263d21",
        herbal: "#e8f3e8",
        saffron: "#f4b860",
      },
       backgroundImage: {
        'footerBg': 'linear-gradient(135deg, #f0e6d2 0%, #e8dcc4 25%, #d4c5a9 50%, #e8dcc4 75%, #f0e6d2 100%)',
      }
    },
  },
  plugins: [],
};
