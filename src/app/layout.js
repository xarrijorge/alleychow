import { Inter } from "next/font/google";
import "./globals.css";
import tailwindConfig from "../../tailwind.config";
import "./globals.css";
import Footer from "./Footer";
// import { Router } from "next/router";

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
