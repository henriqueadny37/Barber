/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    //Or if using `src` directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      abbrown: "#734822",
      abwhite: "#ffff",
      abplat: "#D7D7D9",
      abdeep: "#08c7cc",
      abyellow: "#ebf74f",
      abdark: "#000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
