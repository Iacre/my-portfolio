/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mysec: "#1A1A22",
        mypri:"#0E0D17",
        myhigh: "#BD6D29",  // Define both colors in the same object
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gra1': 'linear-gradient(to right, #BD6D29, #FAC17F)', //  custom gradient
        'gra2': 'linear-gradient(to right, #05788D, #6BADB2)',
        'gra3': 'linear-gradient(to right, #05788D, #BD6D29)',
      },
      textDecorationColor: {
        'gra1': 'linear-gradient(to right, #BD6D29, #FAC17F)',  // Define the decoration color
      },
    },
  },
  plugins: [],
}
