import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "China Travel Assistant - Smart Beijing & Shanghai Travel Guide",
  description:
    "AI-powered travel recommendations for Beijing and Shanghai. Get personalized itineraries, VPN setup guides, and essential travel tips for China.",
  keywords:
    "China travel, Beijing guide, Shanghai guide, China VPN, travel to China, China itinerary",
  openGraph: {
    title: "China Travel Assistant",
    description:
      "AI-powered recommendations for independent travelers visiting Beijing & Shanghai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
