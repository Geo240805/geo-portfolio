import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Geovanny  Edgardo - Desarrollador Web",
  description:
    "Portafolio profesional de Geovanny  Edgardo, desarrollador Web especializado en Vue y tecnologías modernas.",
  keywords: "desarrollador, web, vue, javascript, typescript, portfolio",
  authors: [{ name: "Geovanny  Edgardo" }],
  creator: "Geovanny  Edgardo",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://geo-portfolio-sage.vercel.app/",
    title: "Geovanny  Edgardo - Desarrollador Web",
    description:
      "Portafolio profesional de Geovanny  Edgardo, desarrollador Web especializado en Vue y tecnologías modernas.",
    siteName: "Geovanny  Edgardo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geovanny  Edgardo - Desarrollador Web",
    description:
      "Portafolio profesional de Geovanny  Edgardo, desarrollador Web especializado en Vue y tecnologías modernas.",
    creator: "@geovannyedgardo_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
