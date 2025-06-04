/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // For the demo page
    "./main.tsx",   // For the demo page
    "./src/**/*.{js,ts,jsx,tsx}", // For the library components
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#303742', // Custom darker gray for flat card example
          850: '#232a35', // Custom even darker for card footer example
        }
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
