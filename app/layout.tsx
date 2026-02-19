import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";
import { MouseCursor } from "@/components/mouse-cursor"; // تأكد من المسار

// Section: Fonts Configuration
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono", 
});

// Section: SEO & Metadata
export const metadata: Metadata = {
  title: "Mohamed Adel | Front-End Developer",
  description:
    "I build modern, fast, and animated web experiences. Front-End Developer specializing in React, Tailwind CSS, and Framer Motion.",
  keywords: ["Front-End Developer", "React", "Next.js", "Mohamed Adel", "UI/UX Designer"],
  authors: [{ name: "Mohamed Adel" }],
  icons: {
    apple: "/apple-icon.png",
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
          bg-[#020617] text-white 
          selection:bg-primary/30 selection:text-primary
        `}
      >
        {/* Section: Core Global Components */}
        <LoadingScreen />
        <MouseCursor />
        
        {/* Section: Main Content */}
        <div className="relative z-0">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  );
}