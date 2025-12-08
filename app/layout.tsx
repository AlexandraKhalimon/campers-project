import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Choose a camper for your next adventure",
  keywords: "campers, transport, travel, vacation, adventure, campers price, book a camper, rent a camper",
  openGraph: {
    title: "TravelTrucks",
    description: "Choose a camper for your next adventure",
    url: "https://campers-project-rho.vercel.app/",
    type: "website",
    images: [{
      url: "https://cdn.pixabay.com/photo/2023/11/10/01/43/campervan-8378584_1280.png",
      width: 1200,
      height: 630,
      alt: "TravelTrucks"
    }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"/>
      </head>
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
