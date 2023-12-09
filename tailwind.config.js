/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./www/html/tailwind.html"],
  theme: {
    extend: {
      colors: {
        primary: "#017edb",
        "primary-dark": "#015b9e",
        black: "#000",
        grey: "#666",
      },
      borderRadius: {
        "xl-15": "0.938rem",
      },
      fontSize: {
        xxs: "0.688rem",
        "lg-19": "1.188rem",
        "sm-13": "0.813rem",
      },
      boxShadow: {
        card: "0 6px 10px 0 rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
