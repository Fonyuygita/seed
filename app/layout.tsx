import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";
import Header from "@/components/header/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dmSans.className}>
          <Header />

          <main className="max-w-7xl mx-auto bg-[#0F1117]">
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>

  );
}
