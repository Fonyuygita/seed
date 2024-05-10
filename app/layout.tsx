import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';

export const metadata: Metadata = {
  title: 'SEED',
  description: 'Skills Enhancement and Empowerment through Digitalization',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        <Notification/>
      </body>
    </html>
  )
}
