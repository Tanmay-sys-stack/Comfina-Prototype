import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Comfina - Relief. Anytime. Anywhere.",
  description:
    "Premium wellness-tech that discreetly relieves period cramps through an innovative product with integrated heating. Comfort. Style. Technology.",
  generator: "v0.app",
  keywords: ["wellness", "period relief", "women health", "heating technology", "premium wellness"],
  authors: [{ name: "Comfina Team" }],
  openGraph: {
    title: "Comfina - Relief. Anytime. Anywhere.",
    description: "Premium wellness-tech for period relief",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfina - Relief. Anytime. Anywhere.",
    description: "Premium wellness-tech for period relief",
  },
  verification: {
    google: "WkmJk1JnQjwIxksyQ5uUG17IY2mlCpjfwzdQiSv2DS0", // <--- paste the token Google gave you
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
