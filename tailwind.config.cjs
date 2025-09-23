/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcf6",
          100: "#cff7e6",
          200: "#a0edcd",
          300: "#6de0b1",
          400: "#3fd397",
          500: "#1fb87d",
          600: "#149563",
          700: "#117450",
          800: "#0f5b41",
          900: "#0c4935",
        },
      },
    },
  },
  plugins: [],
};
