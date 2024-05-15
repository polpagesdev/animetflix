import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";

import "./globals.css";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animetflix",
  description: "Your favorite animes, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="bg-[#000000ce]">
          <div className="max-w-7xl mx-auto">
            <Footer />
            <Hero />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
