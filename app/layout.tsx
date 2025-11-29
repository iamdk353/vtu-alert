import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// <CHANGE> Updated metadata for VTU Notification System
export const metadata: Metadata = {
  title: "VTU Alerts - Never Miss a VTU Circular Again",
  description:
    "The first platform to auto-notify VTU students the moment a new circular is published. Instant alerts for exams, results, and academic updates.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://js.pusher.com/beams/2.1.0/push-notifications-cdn.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Toaster position="top-center" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
