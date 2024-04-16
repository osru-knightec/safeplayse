import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const runtime = "edge";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://safeplay.se"),
  title: "SafePlay+ - Enkel lekplatsbesiktning, direkt i mobilen",
  description:
    "SafePlay+ är den ultimata appen för att digitalisera och effektivisera lekplatsbesiktningar. Byt ut papper och penna mot en smidig digital lösning och skapa professionella protokoll på nolltid. Prova nu och upptäck hur enkelt det är att säkerställa lekplatsers trygghet och säkerhet! Helt gratis!",
  appLinks: {
    android: {
      package: "se.oskarrubensson.safeplayplus",
      app_name: "SafePlay+",
      url: "https://play.google.com/store/apps/details?id=se.oskarrubensson.safeplayplus",
    },
    ios: {
      app_name: "SafePlay",
      app_store_id: "6445820584",
      url: "https://apps.apple.com/se/app/safeplay/id6445820584",
    },
  },
  applicationName: "SafePlay+",
  openGraph: {
    images: "/splash.png",
  },
  robots: "index,nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
