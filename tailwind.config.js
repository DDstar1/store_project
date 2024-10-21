/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        "left-lg": "-50px 0px 40px rgba(0, 0, 0, 0.5)", // Adjust this for shadow to the left
        "3xl": "50px 0px 41px 0px rgba(0,0,0,1) inset",
      
          'bottom': '0 2px rgba(0, 0, 0, 0.5)', // Custom bottom shadow
        
      },
    },
  },
  plugins: [],
};
