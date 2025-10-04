import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maleesha Nuwanthi - Portfolio",
  description: "IT Undergraduate | Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
