import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realm Chiropractic",
  description: "Realm Chiropractic is focused on functional correction. We use state of the art technology and techniques to restore full function of the spine and nervous system to allow the in-born recuperative capacity of the body to work optimally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e1e1e" />
      </head>
      <body className={inter.className}>
      <NavBar/>
      {children}
      </body>
    </html>
  );
}
