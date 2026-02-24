import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";
import { MouseCursor } from "@/components/mouse-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* -------------------- VIEWPORT -------------------- */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://madel-portfolio.vercel.app"),

  title: {
    default: "MADEL | Design Driven Front-End Architect",
    template: "%s | MADEL",
  },

  description:
    "Mohamed Adel is a design-driven Front-End Architect specializing in high-end digital experiences using React, Next.js, and Framer Motion.",

  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "Mohamed Adel",
    "MADEL",
    "UI Engineer",
    "Framer Motion",
  ],

  authors: [{ name: "Mohamed Adel" }],
  creator: "Mohamed Adel",
  publisher: "Mohamed Adel",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.jpeg",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "MADEL | Creative Portfolio Showcase",
    description:
      "Explore a unique fusion of design precision and performance engineering.",
    url: "/",
    siteName: "MADEL Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MADEL Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MADEL | Front-End Architect",
    description:
      "High-end digital experiences powered by clean architecture & motion.",
    images: ["/og-image.png"],
  },
};

/* -------------------- ROOT LAYOUT -------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          font-sans antialiased 
          bg-[#020202] text-white 
          selection:bg-primary/30 selection:text-primary
        `}
      >
        {/* Decorative UI Elements */}
        <div aria-hidden="true">
          <LoadingScreen />
          <MouseCursor />
        </div>

        <main className="relative z-0">{children}</main>

        <Analytics />
      </body>
    </html>
  );
}
