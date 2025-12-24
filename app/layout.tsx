import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { PageTransitionProvider } from "@/components/page-transition-provider"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Erebor - Engineering Digital Systems That Work",
  description:
    "Erebor builds digital products, automation systems, and intelligent workflows designed for real business needs — with a strong focus on clarity, execution, and scalability.",
  generator: "suryaansh.app",
  icons: {
    icon: "/images/logo.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
