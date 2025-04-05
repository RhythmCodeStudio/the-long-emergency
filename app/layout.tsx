// import from next
import type { Metadata } from "next";
// import analytics
import { Analytics } from "@vercel/analytics/react";
// import fonts
import localFont from "next/font/local";
const emergency = localFont({
  src: "../public/fonts/emergency.ttf",
  display: "swap",
  variable: "--font-emergency",
});
// import { Permanent_Marker } from "next/font/google";
import { Special_Elite } from "next/font/google";
// import components
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import ScrollToTopButton from "../components/scroll-to-top-button";

// import styles
import "./globals.css";

// define font
// const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });
const special_elite = Special_Elite({ 
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: {
    template: '%s | The Long Emergency | St. Louis, Missouri',
    default: 'The Long Emergency | St. Louis, Missouri',
  },
  description: "Official website for rock band, The Long Emergency, from St. Louis, Missouri.",
  metadataBase: new URL("https://www.thelongemergency.net/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "The Long Emergency",
    description:
      "Official website for The Long Emergency, a rock band from St. Louis, Missouri.",
    url: "https://www.thelongemergency.net/",
    siteName: "The Long Emergency",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.thelongemergency.net//opengraph-image.png",
        width: 960,
        height: 691,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${emergency.variable} ${special_elite.variable}`}
      // style={{ height: "100%" }}
    >
      <body className={`font-specialElite overflow-x-hidden flex flex-col`}>
        <div
          className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/background-images/768x1156.png')] xl:bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal.png')] md:bg-fixed"
        >
          <div>
          <Header />
          </div>
          <main className="flex flex-grow items-center justify-center">
            {children}
          </main>
          <ScrollToTopButton />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
};