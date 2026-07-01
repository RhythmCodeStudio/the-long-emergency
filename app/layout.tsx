// import from next
import type { Metadata } from "next";
// import analytics
import { Analytics } from "@vercel/analytics/react";
// import fonts
// import localFont from "next/font/local";
// const emergency = localFont({
//   src: "../public/fonts/emergency.ttf",
//   display: "swap",
//   variable: "--font-emergency",
// });
// import { Permanent_Marker } from "next/font/google";
import { emergency, special_elite } from "@/fonts";
// import { Special_Elite } from "next/font/google";
// import components
import { Header } from "../ui/header";
import { Footer } from "../ui/footer";
import ScrollToTopButton from "../ui/scroll-to-top-button";
// import styles
import "./globals.css";
// import context providers
import { PushNotificationContextProvider } from "@/context/push-notification-context-provider";
import { DismissedToastsProvider } from "@/context/dismissed-toasts-context-provider";
import { InstallContextProvider } from "@/context/install-context-provider";
// import actions
import { getSession } from "../actions/actions";

// define font
// const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });
// const special_elite = Special_Elite({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-special-elite",
// });

export const metadata: Metadata = {
  title: {
    template: "%s | The Long Emergency | St. Louis, Missouri",
    default: "The Long Emergency | St. Louis, Missouri",
  },
  description:
    "Official website for rock band, The Long Emergency, from St. Louis, Missouri.",
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
        url: "https://www.thelongemergency.net/opengraph-image.png",
        width: 960,
        height: 691,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isAuthenticated = session?.data?.user?.id ? true : false;
  return (
    <html
      lang="en"
      className={`${emergency.variable} ${special_elite.variable}`}>
      <body className={`font-specialElite overflow-x-hidden flex flex-col`}>
        <PushNotificationContextProvider>
          <InstallContextProvider>
            <DismissedToastsProvider>
              <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/background-images/768x1156.png')] xl:bg-[url('/images/background-images/masks-no-text-4800x3190-gaps-filled-horizontal.png')] md:bg-fixed">
                <Header isAuthenticated={isAuthenticated} />
                <main className="flex grow items-center justify-center">
                  {children}
                </main>
                <ScrollToTopButton />
                <Footer />
              </div>
              <Analytics />
            </DismissedToastsProvider>
          </InstallContextProvider>
        </PushNotificationContextProvider>
      </body>
    </html>
  );
}
