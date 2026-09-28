import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

export default function RootLayout({ children }) {
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
