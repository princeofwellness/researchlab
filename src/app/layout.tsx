import type { Metadata } from "next"
import { Instrument_Serif, Inter, Space_Mono, Syne, Source_Code_Pro } from "next/font/google"
import localFont from "next/font/local"
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

const proximaNova = localFont({
  src: [
    { path: "../fonts/ProximaNova-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/ProximaNova-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/ProximaNova-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/ProximaNova-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-proxima-nova",
})

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${spaceMono.variable} ${syne.variable} ${proximaNova.variable} ${sourceCode.variable}`}>
      <body className="antialiased font-mono">{children}</body>
    </html>
  )
}
