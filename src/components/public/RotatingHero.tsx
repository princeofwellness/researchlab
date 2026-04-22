"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

const PROVOCATIONS = [
  { line1: "What breaks first", line2: "when execution accelerates?" },
  { line1: "Can you move faster", line2: "and still stay human?" },
  { line1: "Is judgment the last thing", line2: "that is still yours?" },
]

export function RotatingHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % PROVOCATIONS.length)
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
        {/* rotating headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 100px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#0d0d0d",
              maxWidth: 900,
              marginBottom: 40,
            }}
          >
            {PROVOCATIONS[index].line1}
            <br />
            {PROVOCATIONS[index].line2}
          </motion.h1>
        </AnimatePresence>

        {/* progress dots */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, alignItems: "center" }}>
          {PROVOCATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}`}
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
