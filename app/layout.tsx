import localFont from "next/font/local";
const emergency = localFont({
  src: "../public/fonts/emergency.ttf",
  display: "swap",
  variable: "--font-emergency",
});
// import from next
import type { Metadata } from "next";
// import analytics
import { Analytics } from '@vercel/analytics/react';
//  import from upload thing
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

// import fonts
import { Permanent_Marker } from "next/font/google";
// import components
import { Header } from "../components/header";
import { Footer } from "../components/footer";
// import styles
import "./globals.css";

// define font
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Long Emergency",
  description: "Official website for rock band, The Long Emergency, from St. Louis, Missouri.",
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Long Emergency",
    description: "Official website for The Long Emergency, a rock band from St. Louis, Missouri.",
    url: "https://www.thelongemergency.net/",
    siteName: "The Long Emergency",
    type: "website",
    locale: "en_US",
    images: [{
      url: "https://www.thelongemergency.net//opengraph-image.png",
      width: 960,
      height:691
    }],
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
      className={`over ${emergency.variable}`} 
      style={{ height: "100%" }}
    >
      <body
        className={`font-emergency overflow-x-hidden flex flex-col`}>
        <div
          style={{
            backgroundImage: "url('/images/masks-no-text-4800x3190.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
          // style={{
          //   backgroundImage: "url('/images/masks-no-text-2048-rotate.png')",
          //   backgroundPosition: "center center",
          //   backgroundSize: "42%",
          //   backgroundRepeat: "no-repeat",
          //   minHeight: "100vh",
          //   display: "flex",
          //   flexDirection: "column",
          // }}
          >
          <Header />
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <main className="flex flex-grow items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="over" style={{ height: "100%" }}>
//       <body
//         className={`${permanentMarker.className}  flex flex-col`}
//         style={{
//           backgroundImage: "url('/images/masks-no-text-4800x3190.png')",
//           backgroundPosition: "center center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           minHeight: "100%",
//         }}>
//         <Header />
//         <NextSSRPlugin
//           /**
//            * The `extractRouterConfig` will extract **only** the route configs
//            * from the router to prevent additional information from being
//            * leaked to the client. The data passed to the client is the same
//            * as if you were to fetch `/api/uploadthing` directly.
//            */
//           routerConfig={extractRouterConfig(ourFileRouter)}
//         />
//         <main className="flex flex-grow items-center justify-center">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
