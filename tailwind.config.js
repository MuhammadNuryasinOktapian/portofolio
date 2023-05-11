/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "#2b2c34",
          2: "#6246ea",
          3: "#e45858",
          4: "#d1d1e9",
        },
        background: {
          1: "#fffffe",
          2: "#eaeaea",
        },
      },
    },
  },
  plugins: [],
};
