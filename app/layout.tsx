import { FloatingNavDemo, NavigationMenuDemo } from "./component/navbar";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/Footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "cdiengca",
  description: "Made by PrOeZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationMenuDemo />
        <FloatingNavDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
