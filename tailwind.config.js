/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#394ccc',
        secondary: '#8a96eb',
        accent: '#566aee',
        background: '#F2F3FB',
        fontColor: '#0a0b15'
      },
      backgroundImage: {
        fondoHome: "url('./public/img/fondo-home.jpg')",
        fondoServices: "url('./public/img/fondo-services.jpg')",
        fondoSections: "url('./public/svg/sections.svg')",
      }
    },
  },
  plugins: [],
}