import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4Coders",
  description: "Soluciones tecnologicas a la vanguardia con 4coders team",
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
