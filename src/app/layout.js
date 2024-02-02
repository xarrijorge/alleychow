"use-client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlleyChow",
  description: "A product by Flex Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="loader"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}