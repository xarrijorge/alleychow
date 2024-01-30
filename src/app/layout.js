"use-client";

import { Inter } from "next/font/google";
import "./globals.css";
import tailwindConfig from "../../tailwind.config";
import './globals.css'
import Footer from './Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlleyChow",
  description: "A product by Flex Team",
};

export default function RootLayout({ children }) {
  return (
    <><body>
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    </body>
    </>
  )
}
