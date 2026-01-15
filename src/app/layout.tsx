import type { Metadata } from "next"
import "./globals.css"

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
