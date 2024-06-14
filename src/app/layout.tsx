'use client'
import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
import {DM_Sans} from "next/font/google"


const DMSANS = DM_Sans({
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin']
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {





  return (
    <html lang="en">
      <body className={DMSANS.className}>
          <NavBar2/>
            {children}
  
      </body>
    </html>
  );
}
