"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/UserContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login" || pathname === "/register";

  return (
    <html lang="mn">
      <body className="">
        <UserProvider>
          <CartProvider>
            {!hideLayout && <Header />}
            <main className="`flex-grow`">{children}</main>
            {!hideLayout && <Footer />}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
