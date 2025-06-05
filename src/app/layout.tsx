"use client"; // Add this directive

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import Loader from '@/components/layout/loader'; // Import the loader
import { useState, useEffect } from 'react'; // Import hooks

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Removed metadata export as it's not allowed in "use client" components at the root.
// Metadata should be defined in Server Components, typically in a parent layout or per page.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading. In a real app, you might wait for data or assets.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed (e.g., 1500-2500ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen bg-background`}>
        {isLoading && <Loader />}
        
        <div
          className={`flex flex-col min-h-screen flex-grow ${
            isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500 delay-200'
            // Added delay to ensure loader is visible before content starts fading in.
          }`}
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
