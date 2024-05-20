import type { Metadata } from "next";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "./api/uploadthing/core";

import { Inter, Permanent_Marker } from "next/font/google";

// import components
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./globals.css";

const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Long Emergency",
  description: "Official website for The Long Emergency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="over">
      <body className={permanentMarker.className}>
        <Header />
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
