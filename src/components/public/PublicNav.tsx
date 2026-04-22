// src/components/public/PublicNav.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Programmes", href: "#programmes" },
  { label: "Publications", href: "#haab" }, // TODO: /publications page
  { label: "HAAB", href: "#haab" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "About", href: "#about" },
]

export function PublicNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 font-cabinet"
        style={{
          height: 56,
          background: "rgba(232,225,218,0.94)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="/site" className="flex items-center gap-0 no-underline">
          <span
            className="font-black tracking-widest uppercase"
            style={{ fontSize: 13, letterSpacing: "0.18em", color: "#0047BB" }}
          >
            RESEARCH
          </span>
          <span
            className="font-black tracking-widest uppercase"
            style={{ fontSize: 13, letterSpacing: "0.18em", color: "#0d0d0d" }}
          >
            LAB
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors hover:opacity-60"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0d0d0d",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#collaborate"
            className="hidden md:inline-flex items-center no-underline"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#0047BB",
              color: "white",
              padding: "8px 18px",
              borderRadius: 3,
            }}
          >
            Work With Us
          </Link>
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 font-cabinet md:hidden"
          style={{ background: "#e8e1da" }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="no-underline py-4"
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#0d0d0d",
                borderBottom: "1px solid rgba(0,0,0,0.10)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#collaborate"
            onClick={() => setOpen(false)}
            className="no-underline mt-8 inline-flex"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#0047BB",
              color: "white",
              padding: "14px 24px",
              borderRadius: 3,
            }}
          >
            Work With Us
          </Link>
        </div>
      )}
    </>
  )
}
