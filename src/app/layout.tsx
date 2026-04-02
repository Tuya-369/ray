"use client"; // 1. Pathname шалгахын тулд заавал Client Component болгоно

import { usePathname } from "next/navigation"; // 2. Next.js-ийн hook-ийг импортлоно
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 


  const hideLayout = pathname === "/login" || pathname === "/register";

  return (
    <html lang="mn">
      <body className="flex flex-col min-h-screen">

        {!hideLayout && <Header />} 

        <main className="flex-grow">
          {children}
        </main>


        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}