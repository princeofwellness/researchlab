"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

// Short supporting lines — each one is a genuine statement about what RL does.
// These rotate beneath the fixed headline.
const SUPPORTING_LINES = [
  "We teach people to think with AI — not just use it.",
  "We distill what matters from the noise.",
  "We design structures that keep speed and direction together.",
  "We translate real-world AI practice into better decisions.",
]

export function RotatingHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SUPPORTING_LINES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#e8e1da",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 56px",
        paddingTop: 56,
      }}
    >
      <div style={{ flex: 1 }} />

      <div>
        {/* Fixed headline */}
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(52px, 8vw, 100px)",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "#0d0d0d",
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          Where humans
          <br />
          & AI co-evolve.
        </h1>

        {/* Rotating supporting line */}
        <div style={{ minHeight: 28, marginBottom: 28 }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 17,
                fontWeight: 500,
                lineHeight: 1.5,
                color: "rgba(13,13,13,0.55)",
                maxWidth: 520,
                margin: 0,
              }}
            >
              {SUPPORTING_LINES[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, alignItems: "center" }}>
          {SUPPORTING_LINES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Statement ${i + 1}`}
              style={{
                width: i === index ? 28 : 8,
                height: 2,
                background: i === index ? "#0047BB" : "rgba(0,0,0,0.20)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s ease",
                borderRadius: 1,
              }}
            />
          ))}
        </div>

        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.35)",
            marginBottom: 56,
          }}
        >
          Research · Rewire · Recreate
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          paddingBottom: 56,
          borderTop: "1px solid rgba(0,0,0,0.10)",
          paddingTop: 32,
        }}
      >
        <Link
          href="#about"
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0d0d0d",
            border: "1px solid rgba(0,0,0,0.20)",
            padding: "12px 24px",
            borderRadius: 2,
            textDecoration: "none",
          }}
        >
          Read the Lab →
        </Link>
        <Link
          href="#collaborate"
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "white",
            background: "#0047BB",
            padding: "12px 24px",
            borderRadius: 2,
            textDecoration: "none",
          }}
        >
          Work With Us
        </Link>
      </div>
    </section>
  )
}
