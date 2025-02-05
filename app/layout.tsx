import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"


// import Hero from "@/components/Hero";
// import Footer from "@/components/Footer";

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { PDFProvider } from "@/context/pdf-context";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/layout/Sidebar";
// import Header from "@/components/header/Header";

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
    <html lang="en">
      <body className={dmSans.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto">
              <ThemeProvider>
                <PDFProvider>
                  {children}
                </PDFProvider>
              </ThemeProvider>
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
