import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://the-carrot.vercel.app";

export const metadata: Metadata = {
  title: "Advertise in The Carrot — Benson High School",
  description:
    "Support Benson High graphic design students while promoting your business to the Benson neighborhood. Reserve your ad in The Carrot.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Advertise in The Carrot",
    description:
      "Support Benson High design students while promoting your business to the Benson neighborhood.",
    url: BASE_URL,
    siteName: "The Carrot",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertise in The Carrot",
    description: "Support Benson High design students while promoting your business in Benson.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fonts/fontawesome/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-950`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
