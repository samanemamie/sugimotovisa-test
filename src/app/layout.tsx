import type { Metadata } from "next";
import { Inter } from "next/font/google";

//
import "./globals.css";

//
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: " Sugimotovisa",
  description: " Sugimotovisa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
