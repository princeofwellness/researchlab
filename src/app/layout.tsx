import type { Metadata } from "next"
import { Instrument_Serif, Inter, Space_Mono, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Research Lab // Human Edge",
  description: "Restoring the Human Edge in an AI World",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${syne.variable}`}>
      <body className="antialiased font-mono">{children}</body>
    </html>
  )
}
