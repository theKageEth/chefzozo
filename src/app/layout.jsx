import { Crafty_Girls } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const inter = Crafty_Girls({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Mr.UK",
  description: "Mr.UK Pizzeria Pasta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
