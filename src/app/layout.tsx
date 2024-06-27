'use client';
import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Lottie from 'lottie-react';
import loadingAnim from '@/../public/icons/LoadingAnimation.json'

const DMSANS = DM_Sans({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const loadTime = setTimeout(handleLoad, 3000);
    return () => {
      clearTimeout(loadTime);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${DMSANS.className} ${loading ? "bg-white" : ""}`}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Lottie animationData={loadingAnim} style={{ width: 200, height: 200 }} />
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
