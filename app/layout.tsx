import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/NavBar/Header";
import Footer from "@/components/Footer";
// import NavNew from "@/components/NavBar/NavNew";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {/* <NavNew /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
