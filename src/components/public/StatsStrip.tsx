"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const STATS = [
  { value: 2024, label: "Est.", suffix: "", display: "2024", type: "year" as const },
  { value: 4, label: "Active Programmes", suffix: "", display: "04", type: "count" as const },
  { value: 3, label: "Countries", suffix: "+", display: "03+", type: "count" as const },
  { value: 40, label: "Participants", suffix: "+", display: "40+", type: "count" as const },
]

function Counter({
  value,
  suffix,
  type,
  inView,
}: {
  value: number
  suffix: string
  type: "year" | "count"
  inView: boolean
}) {
  const [display, setDisplay] = useState(type === "year" ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (type === "year") {
      setDisplay(value)
      return
    }

    const duration = 1200
    const start = Date.now()
    const from = 0
    const to = value

    const update = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [inView, value, type])

  return (
    <span>
      {type === "year" ? display : String(display).padStart(2, "0")}
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <section
      ref={ref}
      className="stats-grid"
      style={{
        background: "#0d0d0d",
        padding: "80px 56px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
      }}
    >
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            padding: "0 24px",
            borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
          }}
        >
          <p
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 900,
              color: "#e8e1da",
              lineHeight: 1,
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            <Counter value={stat.value} suffix={stat.suffix} type={stat.type} inView={inView} />
          </p>
          <p
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(232,225,218,0.40)",
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  )
}
