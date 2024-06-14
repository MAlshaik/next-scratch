import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";

import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scratchpaper",
  description: "This is a next app to test different things in the nextjs sphere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`bg-background ${inter.className}`}>
        <NextThemesProvider attribute="class" defaultTheme="system">
        <NavBar />
        <Toaster />
        {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
