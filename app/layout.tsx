import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import BackgroundImageComponent from "./components/image/BackgroundImageComponent";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Sushii website template",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Home - Sushii Website Template",
    description: "Created by Jamstackers",
    images: ["/assets/dish1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundImageComponent />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
