import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "./componet";
import { Analytics } from "@vercel/analytics/react"

const raleway = Raleway({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Zhengda Huang",
  description: "Zhengda Huang's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/zlogo.png" /> 
      </head>
      <body className={raleway.className}> 
        <Header />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
