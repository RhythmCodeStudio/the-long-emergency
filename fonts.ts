// import fonts
import localFont from "next/font/local";
import { Special_Elite } from "next/font/google";

// export fonts
export const emergency = localFont({
  src: "./public/fonts/emergency.ttf",
  display: "swap",
  variable: "--font-emergency",
});

export const special_elite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
});