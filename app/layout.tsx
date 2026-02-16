import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ToothStories | Best Dental clinic & Luxury Dental Care in Moshi",
  description: "Experience premium dental care with advanced technology and a gold standard of service. Every smile tells a story at ToothStories.",
  keywords: "dental care, luxury dentistry, smile makeover, dental implants, teeth whitening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
        <WhatsAppWidget />
        <GoogleAnalytics gaId="G-S34YD9KRZH" />
      </body>
    </html>
  );
}
