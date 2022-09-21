/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Theme 1
        // Background
        veryDarkDesaturatedBlueMain: "hsl(222, 26%, 31%)",
        veryDarkDesaturatedBlueToggle: "hsl(223, 31%, 20%)",
        veryDarkDesaturatedBlueScreen: "hsl(224, 36%, 15%)",
        // Keys
        desaturatedDarkBlueBackground: "hsl(225, 21%, 49%)",
        desaturatedDarkBlueShadow: "hsl(224, 28%, 35%)",
        redToggle: "hsl(6, 63%, 50%)",
        darkRed: "hsl(6, 70%, 34%)",
        lightGrayishOrange: "hsl(30, 25%, 89%)",
        grayishOrange: "hsl(28, 16%, 65%)",
        // Text
        veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        //Theme 2
        //Background
        lightGray: "hsl(0, 0%, 90%)",
        grayishRed: "hsl(0, 5%, 81%)",
        veryLightGray: "hsl(0, 0%, 93%)",
        // Key
        darkModerateCyan: "hsl(185, 42%, 37%)",
        veryDarkCyan: "hsl(185, 58%, 25%)",
        orange: "hsl(25, 98%, 40%)",
        darkOrange: "hsl(25, 99%, 27%)",
      },
      fontSize: {
        default: "32px",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans serif"],
      },
    },
  },
  plugins: [],
};
