/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Main.PNG')",
      },
      fontFamily: {
        roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [],
};
