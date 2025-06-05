
"use client";

import type { Metadata } from 'next'; // Keep for potential page-level metadata
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import Loader from '@/components/layout/loader';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/context/theme-provider'; // Import ThemeProvider

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Metadata is removed from here as it's a client component.
// Define metadata in individual page.tsx files or a parent server component layout.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjusted loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning for theme provider */}
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen bg-background`}>
        <ThemeProvider
          attribute="data-theme" // This is if we were using a library like next-themes. Custom provider handles it directly.
          defaultTheme="light"
          enableSystem={false} // Disable system preference for now, user explicit choice
          storageKey="wbc-effurun-theme"
        >
          {isLoading && <Loader />}
          
          <div
            className={`flex flex-col min-h-screen flex-grow ${
              isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500 delay-200'
            }`}
          >
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
