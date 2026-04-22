import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Lab — SORRYWECAN",
  description: "An experimental space for exploring tomorrow's mindset. Where humans and AI co-evolve.",
}

export default function PublicSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-cabinet antialiased" style={{ background: "#e8e1da", color: "#0d0d0d" }}>
      {children}
    </div>
  )
}
