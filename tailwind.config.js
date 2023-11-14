/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#252525",
        "neon-blue": "#001",
      },
      screens: {
        "small": { "max": "400px" },
        "medium": { "max": "750px" },
        "large": { "max": " 1000px" }
      }
    },
  },
  plugins: [],
};
