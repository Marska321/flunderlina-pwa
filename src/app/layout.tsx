import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flunderlina's Great Ride",
  description: "A personalized magical adventure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flunderlina&apos;s Great Ride</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
