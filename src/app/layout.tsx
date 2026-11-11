import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import { ReactNode } from "react";

export default function RootLayout({ children } : { children: ReactNode}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
