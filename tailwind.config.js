/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 80%)",
        lightLavender: "hsl(241, 100%, 85%)",
        darkGrayBlue: "hsl(224, 30%, 80%)",
        // gradients
        // backgrounds
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        // circle
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        // textos
        lightRed: "hsl(0, 100%, 67%)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: "hsl(166, 100%, 37%)",
        cobaltBlue: "hsl(234, 85%, 45%)",
      },
    },
  },
  plugins: [],
};
