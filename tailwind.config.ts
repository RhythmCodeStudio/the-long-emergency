import { nextui } from "@nextui-org/theme";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      animation: {
        expand: "expand 1s ease-out",
      },
      keyframes: {
        expand: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        emergency: ["var(--font-emergency)"],
      },
      textShadow: {
        "outline-black":
          "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
      },
      rotate: {
        "15": "15deg",
        "16": "16deg",
        "17": "17deg",
        "18": "18deg",
        "19": "19deg",
        "20": "20deg",
        "21": "21deg",
        "22": "22deg",
        "23": "23deg",
        "24": "24deg",
        "25": "25deg",
        "26": "26deg",
      },
      spacing: {
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "58": "14.5rem",
        "66": "16.5rem",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "144": "36rem",
        "152": "38rem",
        "160": "40rem",
        "176": "44rem",
        "192": "48rem",
      },
      height: {
        100: "25rem", // 400px
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        180: "44rem", // 704px
        200: "48rem", // 768px
        300: "64rem", // 1024px
        400: "76rem", // 1216px
        500: "88rem", // 1408px
        600: "96rem", // 1536px
        700: "104rem", // 1664px
        800: "112rem", // 1792px
        900: "120rem", // 1920px
        1000: "128rem", // 2048px
        1200: "144rem", // 2304px
      },
      width: {
        100: "25rem", // 400px
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        180: "44rem", // 704px
        200: "48rem", // 768px
        300: "64rem", // 1024px
        400: "76rem", // 1216px
        500: "88rem", // 1408px
        600: "96rem", // 1536px
        700: "104rem", // 1664px
        800: "112rem", // 1792px
        900: "120rem", // 1920px
        1000: "128rem", // 2048px
        1200: "144rem", // 2304px
      },
      maxWidth: {
        128: "32rem", // 512px
        132: "33rem", // 528px
        144: "36rem", // 576px
        160: "40rem", // 640px
        180: "44rem", // 704px
        200: "48rem", // 768px
        300: "64rem", // 1024px
        400: "76rem", // 1216px
        500: "88rem", // 1408px
        600: "96rem", // 1536px
        700: "104rem", // 1664px
        800: "112rem", // 1792px
        900: "120rem", // 1920px
        1000: "128rem", // 2048px
        1200: "144rem", // 2304px
        1400: "160rem", // 2560px
        1600: "176rem", // 2816px
        1800: "192rem", // 3072px
        2000: "208rem", // 3328px
      },
      screens: {
        xs: "400px",
        "3xl": "1800px",
        "4xl": "2200px",
        "5xl": "2600px",
        "6xl": "2800px",
        "7xl": "3000px",
        "8xl": "3200px",
      },
    },
  },
  plugins: [nextui()],
});
