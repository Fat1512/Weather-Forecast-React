/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "hsla(0, 0%, 0%, 0.1)",
          800: "hsl(270, 5%, 7%) ",
          900: "hsla(260, 5%, 12%) ",
        },
      },
    },
  },
  plugins: [],
};
