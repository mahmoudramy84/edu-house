import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Edu House",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 h-screen relative">
        <Providers attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
