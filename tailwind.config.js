/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#252525",
        "neon-blue": "#001",
      },
    },
  },
  plugins: [],
};
