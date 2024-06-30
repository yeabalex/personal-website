'use client';

import "./globals.css";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Lottie from 'lottie-react';
import loadingAnim from '@/../public/icons/LoadingAnimation.json'
import { useMetaTags } from 'react-metatags-hook';


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

    const loadTime = setTimeout(handleLoad, 4000);
    return () => {
      clearTimeout(loadTime);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Yeabsira</title>
        <link rel="icon" href='/yabicon.ico' />
      </head>
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
