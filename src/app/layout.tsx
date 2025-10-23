import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { BackgroundImage } from '@/components/layout/BackgroundImage';

export const metadata: Metadata = {
  title: "Bentar's Digital Portfolio",
  description:
    'Portfolio of Muhammad Bentar Raya Triadmodjo, a professional in electrical installation, mechatronics, and industrial control systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <BackgroundImage />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
