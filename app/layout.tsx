import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { CartProvider } from "@/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artisan Coffee Co. - Premium Coffee Beans",
  description: "Discover the finest coffee beans from around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t mt-20">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Artisan Coffee Co.</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium coffee beans sourced from the finest farms around the world.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Shop</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Coffee Beans</li>
                    <li>Ground Coffee</li>
                    <li>Instant Coffee</li>
                    <li>Coffee Pods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">About</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Our Story</li>
                    <li>Sustainability</li>
                    <li>Brewing Guides</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Shipping Info</li>
                    <li>Returns</li>
                    <li>FAQ</li>
                    <li>Track Order</li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                © 2024 Artisan Coffee Co. All rights reserved.
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}

