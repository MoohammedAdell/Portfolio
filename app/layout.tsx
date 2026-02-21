import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";
import { MouseCursor } from "@/components/mouse-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// --- SECTION: SEO & METADATA UPDATED ---
export const metadata: Metadata = {
  title: "MADEL | Design Driven Front-End Architect",
  description:
    "Mohamed Adel: Specializing in building high-end digital products that combine clean code with exceptional visual identity.",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "Mohamed Adel",
    "MADEL",
    "UI/UX Designer",
    "Framer Motion",
  ],
  authors: [{ name: "Mohamed Adel" }],

  icons: {
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "MADEL | Creative Portfolio Showcase",
    description:
      "Explore a unique fusion of design and performance. Built with Next.js & Framer Motion.",
    url: "https://madel-portfolio.vercel.app/",
    siteName: "MADEL Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
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
    description: "High-end digital experiences powered by clean code.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          font-sans antialiased 
          bg-[#020202] text-white 
          selection:bg-primary/30 selection:text-primary
        `}
      >
        <LoadingScreen />
        <MouseCursor />

        <div className="relative z-0">{children}</div>

        <Analytics />
      </body>
    </html>
  );
}
