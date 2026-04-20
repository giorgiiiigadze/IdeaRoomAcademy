import { GoogleAnalytics } from '@next/third-parties/google'

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";

import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IdeaRoom Academy",
  description: "Where great ideas come to life.",
  metadataBase: new URL("https://idea-room-academy.vercel.app"),
  openGraph: {
    title: "IdeaRoom Academy",
    description: "Where great ideas come to life.",
    url: "https://idea-room-academy.vercel.app",
    siteName: "IdeaRoom Academy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IdeaRoom Academy",
    description: "Where great ideas come to life.",
  },
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="w-full flex flex-col items-center min-h-screen bg-background">
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="w-full">
              {children}
              <Toaster richColors position="top-right" />
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
      <GoogleAnalytics gaId="G-5EMWCPM57Z" />
    </html>
  )
}