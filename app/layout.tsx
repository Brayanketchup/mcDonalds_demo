import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Inter, LuckiestGuy } from "next/font/google"; // Import Luckiest Guy here
import "./globals.css";
import { Navbar, Footer } from '@/components';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McCopy",
  description: "Mcdonalds CopyCat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
