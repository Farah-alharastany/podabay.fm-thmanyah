import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Podbay - The best podcast player on the web.",
  description: "The fastest and easiest podcast player designed for the web. From Fancy Soups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
