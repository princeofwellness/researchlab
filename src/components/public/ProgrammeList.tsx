"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

type Programme = {
  num: string
  slug: string
  name: string
  tag: string
  desc: string
}

const PROGRAMME_DETAIL: Record<string, { thesis: string; questions: string[] }> = {
  mindshift: {
    thesis: "AI doesn't make thinking easier — it makes the quality of thinking more consequential.",
    questions: [
      "What separates speed from clarity when execution is automated?",
      "How does taste and judgment hold when AI can generate anything?",
      "What do you still need to learn — and what can you now let go of?",
    ],
  },
  communitea: {
    thesis: "The most important conversations about AI are still happening between humans.",
    questions: [
      "How do communities form around shared uncertainty?",
      "What does peer learning look like when expertise is fluid?",
      "Where do people go to think seriously together?",
    ],
  },
  "future-protocols": {
    thesis: "Work is being reorganized faster than the protocols that govern it.",
    questions: [
      "What behavioral protocols emerge from AI-integrated work?",
      "How do teams maintain coherence when execution is automated?",
      "What is the minimum human structure that cannot be replaced?",
    ],
  },
  "the-source": {
    thesis: "Everything Research Lab builds and observes should be documented, published, and shared.",
    questions: [
      "What does it mean to publish research in real time?",
      "How do you archive a practice that is still forming?",
      "What format carries ideas best in the age of short attention?",
    ],
  },
}

export function ProgrammeList({ programmes }: { programmes: Programme[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section
      id="programmes"
      style={{
        minHeight: "100vh",
        background: "#e8e1da",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 56px 56px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.40)",
          }}
        >
          Programmes
        </p>
        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.28)",
          }}
        >
          {String(programmes.length).padStart(2, "0")} Active
        </p>
      </div>

      <div style={{ flex: 1 }}>
        {programmes.map((prog, i) => {
          const detail = PROGRAMME_DETAIL[prog.slug]
          const isOpen = open === prog.slug

          return (
            <div
              key={prog.slug}
              style={{
                borderTop: i === 0 ? "1px solid rgba(0,0,0,0.12)" : undefined,
                borderBottom: "1px solid rgba(0,0,0,0.12)",
              }}
            >
              {/* row header — always visible */}
              <button
                onClick={() => setOpen(isOpen ? null : prog.slug)}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  alignItems: "center",
                  gap: 24,
                  padding: "28px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    color: "rgba(0,0,0,0.30)",
                  }}
                >
                  {prog.num}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    color: isOpen ? "#0047BB" : "#0d0d0d",
                    transition: "color 0.2s",
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                  }}
                >
                  {prog.name}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: 20,
                    color: isOpen ? "#0047BB" : "rgba(0,0,0,0.25)",
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                >
                  +
                </motion.span>
              </button>

              {/* expandable detail */}
              <AnimatePresence initial={false}>
                {isOpen && detail && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "48px 1fr",
                        gap: 24,
                        paddingBottom: 40,
                      }}
                    >
                      <div />
                      <div>
                        {/* thesis */}
                        <p
                          style={{
                            fontSize: 17,
                            lineHeight: 1.65,
                            color: "#0d0d0d",
                            fontWeight: 400,
                            marginBottom: 32,
                            maxWidth: 600,
                          }}
                        >
                          {detail.thesis}
                        </p>

                        {/* questions */}
                        <div style={{ marginBottom: 36 }}>
                          <p
                            style={{
                              fontFamily: "'SF Mono','Fira Code',monospace",
                              fontSize: 9,
                              fontWeight: 700,
                              letterSpacing: "0.24em",
                              textTransform: "uppercase",
                              color: "rgba(0,0,0,0.35)",
                              marginBottom: 20,
                            }}
                          >
                            Key Questions
                          </p>
                          {detail.questions.map((q, qi) => (
                            <div
                              key={qi}
                              style={{
                                display: "flex",
                                gap: 16,
                                marginBottom: 12,
                                alignItems: "baseline",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "'SF Mono','Fira Code',monospace",
                                  fontSize: 9,
                                  fontWeight: 700,
                                  color: "#0047BB",
                                  minWidth: 20,
                                }}
                              >
                                {String(qi + 1).padStart(2, "0")}
                              </span>
                              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(0,0,0,0.70)", margin: 0 }}>
                                {q}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link
                          href={`/programmes/${prog.slug}`}
                          style={{
                            fontFamily: "'SF Mono','Fira Code',monospace",
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "white",
                            background: "#0047BB",
                            padding: "12px 24px",
                            borderRadius: 2,
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
                          Explore {prog.name} →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
