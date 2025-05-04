import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Use Geist Sans
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Removed Geist Mono as it's not specified in the typography requirements

export const metadata: Metadata = {
  title: 'Winners Baptist Church Effurun',
  description: 'Official website of Winners Baptist Church Effurun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
