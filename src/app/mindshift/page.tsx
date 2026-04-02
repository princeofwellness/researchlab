"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
})

const BLUE = "#0047BB"
const CREAM = "#f4ebe2"
const INK = "#0a0a0a"
const MID = "#3a3a3a"
const RULE = "#d0c8be"
const WHITE = "#ffffff"

export default function MindShiftPage() {
    const [activeTab, setActiveTab] = useState<"problem" | "programme" | "team">("problem")

    return (
        <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: INK }}>
            <TopNav />

            {/* ── HERO ── */}
            <section style={{
                borderBottom: `1px solid ${INK}`,
                paddingTop: "clamp(4rem, 10vw, 8rem)",
                overflow: "hidden",
            }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "end" }}>

                        {/* Left */}
                        <div style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
                            <motion.div {...fade(0.1)}>
                                <div style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase" as const,
                                    color: BLUE,
                                    marginBottom: "1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}>
                                    <span style={{ display: "block", width: "2rem", height: 1, background: BLUE }} />
                                    Enterprise Programme · 2026
                                </div>
                            </motion.div>

                            <motion.h1 {...fade(0.2)} style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                                fontWeight: 700,
                                lineHeight: 0.95,
                                letterSpacing: "-0.02em",
                                textTransform: "uppercase" as const,
                                marginBottom: "2rem",
                            }}>
                                Mind<span style={{ color: BLUE, display: "block" }}>Shift</span>
                            </motion.h1>

                            <motion.p {...fade(0.3)} style={{
                                fontSize: "1.05rem",
                                color: MID,
                                maxWidth: "28rem",
                                lineHeight: 1.6,
                                marginBottom: "2.5rem",
                            }}>
                                A multi-layer intelligence programme for organisations navigating the transition.
                                Not a workshop. Not a keynote. A sustained transformation — across people,
                                operations, and strategic position.
                            </motion.p>

                            <motion.div {...fade(0.4)} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" as const, alignItems: "center" }}>
                                <a href="#programme" style={{
                                    display: "inline-block",
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase" as const,
                                    textDecoration: "none",
                                    background: BLUE,
                                    color: WHITE,
                                    padding: "0.9rem 2rem",
                                }}>
                                    See the Programme
                                </a>
                                <a href="#team" style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase" as const,
                                    textDecoration: "none",
                                    color: INK,
                                    borderBottom: `1px solid ${INK}`,
                                    paddingBottom: "0.1rem",
                                }}>
                                    The Team
                                </a>
                            </motion.div>
                        </div>

                        {/* Right — stats */}
                        <motion.div {...fade(0.3)} style={{
                            borderLeft: `1px solid ${INK}`,
                            padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
                            display: "flex",
                            flexDirection: "column" as const,
                            gap: "2.5rem",
                        }}>
                            {[
                                { num: "3", label: "Expert leads — intelligence, transformation, technology" },
                                { num: "4", label: "Engagement layers — from opening to implementation" },
                                { num: "∞", label: "Questions worth asking before your competitors do" },
                            ].map((s, i) => (
                                <div key={i} style={{ borderTop: i > 0 ? `1px solid ${RULE}` : "none", paddingTop: i > 0 ? "2rem" : 0 }}>
                                    <div style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "clamp(3rem, 6vw, 5rem)",
                                        fontWeight: 700,
                                        color: BLUE,
                                        lineHeight: 1,
                                    }}>{s.num}</div>
                                    <div style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase" as const,
                                        color: MID,
                                        marginTop: "0.5rem",
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div style={{
                background: BLUE,
                color: WHITE,
                padding: "0.75rem 0",
                overflow: "hidden",
                borderTop: `1px solid ${INK}`,
                borderBottom: `1px solid ${INK}`,
            }}>
                <motion.div
                    style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" as const }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {["Intelligence", "✺ Transformation", "Technical Implementation", "✺ Strategic Redesign",
                      "People & Culture", "✺ AI Transition", "Research Lab", "✺ SORRYWECAN",
                      "Intelligence", "✺ Transformation", "Technical Implementation", "✺ Strategic Redesign",
                      "People & Culture", "✺ AI Transition", "Research Lab", "✺ SORRYWECAN"].map((item, i) => (
                        <span key={i} style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase" as const,
                            flexShrink: 0,
                        }}>{item}</span>
                    ))}
                </motion.div>
            </div>

            {/* ── PROBLEM STATEMENT ── */}
            <section style={{ background: INK, color: CREAM, padding: "clamp(3rem, 7vw, 6rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: "3rem", alignItems: "start" }}
                    >
                        <div style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase" as const,
                            color: BLUE,
                            writingMode: "vertical-rl" as const,
                            transform: "rotate(180deg)",
                            paddingTop: "0.5rem",
                        }}>Context</div>
                        <p style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
                            fontWeight: 400,
                            lineHeight: 1.35,
                            letterSpacing: "-0.01em",
                            maxWidth: "40rem",
                        }}>
                            Generic AI workshops are over. Your people already know{" "}
                            <span style={{ color: BLUE }}>ChatGPT exists.</span> What they don&apos;t know is{" "}
                            <span style={{ color: BLUE }}>what changes,</span> what stays, and{" "}
                            <span style={{ color: BLUE }}>how to lead</span> when the customer profile,
                            the operating model, and the value chain are all shifting simultaneously — in 2026.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── FRAMEWORK LAYERS ── */}
            <section id="programme" style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0001</span>
                        <h2 style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "clamp(1.3rem, 3vw, 2rem)",
                            fontWeight: 700,
                            textTransform: "uppercase" as const,
                            letterSpacing: "-0.01em",
                            borderBottom: `2px solid ${BLUE}`,
                            paddingBottom: "0.25rem",
                        }}>The Framework</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: `1px solid ${INK}` }}>
                        {[
                            {
                                num: "Layer 01", title: "Intelligence\nOpening", owner: "Prince · Research Lab",
                                accent: BLUE,
                                body: "The MindShift session. We open the space — reading your organisation's position, mapping the forces reshaping your sector, and surfacing the questions worth asking. Cross-department. Public or invite-only. Sets the frame for everything that follows."
                            },
                            {
                                num: "Layer 02", title: "Business\nRedesign", owner: "Roman · Transformation",
                                accent: INK,
                                body: "How does the business need to change — not just its tools, but its thinking, its operating model, its culture? Roman works at the level of identity and structure. How do you lead differently when the assumptions underneath your model are being rewritten."
                            },
                            {
                                num: "Layer 03", title: "Technical\nImplementation", owner: "Jan · Sudo Labs",
                                accent: RULE,
                                body: "From the strategic insight to the actual build. Jan and Sudo Labs take what's been identified — the bottlenecks, the opportunities, the redesigned processes — and implement them. Products. Automations. Custom AI systems. Proof of concept to production."
                            },
                        ].map((layer, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    borderRight: `1px solid ${INK}`,
                                    borderTop: `4px solid ${layer.accent}`,
                                    padding: "clamp(2rem, 4vw, 3rem)",
                                }}
                            >
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1.25rem" }}>{layer.num}</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.15rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: "1rem", whiteSpace: "pre-line" as const }}>{layer.title}</div>
                                <span style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, background: BLUE, color: WHITE, padding: "0.2rem 0.6rem", marginBottom: "1.25rem" }}>{layer.owner}</span>
                                <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.6 }}>{layer.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section id="team" style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}`, background: WHITE }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0011</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>The Team</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: `1px solid ${INK}` }}>
                        {[
                            {
                                role: "Intelligence Lead", name: "Prince", company: "Research Lab · SORRYWECAN",
                                body: "Connects the dots between intelligence, people, and possibility. Brings the research — AI, cultural, geopolitical — and opens the space where real questions can be asked. The thread between layers.",
                                tags: ["Intelligence", "Facilitation", "Network", "Strategy"],
                            },
                            {
                                role: "Transformation Lead", name: "Roman", company: "Transformational Design",
                                body: "Works at the level of how organisations think, not just what they do. Business redesign through a transformational lens — identity, culture, leadership models, the deeper assumptions that need to shift.",
                                tags: ["Business Design", "Culture", "Leadership", "Systems"],
                            },
                            {
                                role: "Technical Lead", name: "Jan", company: "Sudo Labs",
                                body: "Turns insight into infrastructure. AI systems, automations, custom products — built for the actual business, not a demo. Sudo Labs bridges the gap between strategic direction and technical reality.",
                                tags: ["AI Systems", "Product", "Automation", "Build"],
                            },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ borderRight: `1px solid ${INK}`, padding: "clamp(2rem, 4vw, 3rem)" }}
                            >
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "0.75rem" }}>{member.role}</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "0.25rem" }}>{member.name}</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.06em", color: MID, marginBottom: "1.25rem", textTransform: "uppercase" as const }}>{member.company}</div>
                                <p style={{ fontSize: "0.875rem", color: MID, lineHeight: 1.6, marginBottom: "1.25rem" }}>{member.body}</p>
                                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
                                    {member.tags.map(tag => (
                                        <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.07em", textTransform: "uppercase" as const, border: `1px solid ${RULE}`, color: MID, padding: "0.2rem 0.6rem" }}>{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROGRAMME TABLE ── */}
            <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0100</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>Programme Structure</h2>
                    </div>

                    <table style={{ width: "100%", borderCollapse: "collapse" as const, border: `1px solid ${INK}` }}>
                        <thead>
                            <tr>
                                {["Phase", "Format", "Who", "Outcome"].map(h => (
                                    <th key={h} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, textAlign: "left" as const, padding: "0.9rem 1.25rem", background: INK, color: CREAM, borderRight: `1px solid ${MID}` }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { phase: "01 · Opening", format: "MindShift Session — 2–3h, cross-department, facilitated", who: "Prince + full team", outcome: "Shared language. Mapped forces. The real questions surfaced.", highlight: false },
                                { phase: "02 · Depth", format: "Department-level deep dives — smaller groups, specific problems", who: "Prince + Roman", outcome: "Department-specific insight. Clarity on what needs to change.", highlight: false },
                                { phase: "03 · Redesign", format: "Business redesign workshops — leadership, operating model, culture", who: "Roman (lead)", outcome: "A redesigned operating picture. New assumptions for how the business runs.", highlight: true },
                                { phase: "04 · Build", format: "Technical scoping + implementation — custom to the organisation", who: "Jan / Sudo Labs", outcome: "AI systems, automations, or products. From scoped to shipped.", highlight: false },
                                { phase: "05 · Embed", format: "Follow-up sessions + ongoing access — quarterly or as needed", who: "Full team", outcome: "Sustained transformation. Not a one-time event.", highlight: false },
                            ].map((row, i) => (
                                <tr key={i} style={{ background: row.highlight ? "#eaf0ff" : "transparent" }}>
                                    <td style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, color: row.highlight ? BLUE : BLUE, letterSpacing: "0.06em", padding: "1.1rem 1.25rem", borderBottom: i < 4 ? `1px solid ${RULE}` : "none", borderRight: `1px solid ${RULE}`, background: row.highlight ? BLUE : "#f0ebe2", ...(row.highlight ? { color: WHITE } : {}) }}>{row.phase}</td>
                                    <td style={{ fontSize: "0.875rem", padding: "1.1rem 1.25rem", borderBottom: i < 4 ? `1px solid ${RULE}` : "none", borderRight: `1px solid ${RULE}`, verticalAlign: "top" as const, lineHeight: 1.5 }}>{row.format}</td>
                                    <td style={{ fontSize: "0.875rem", padding: "1.1rem 1.25rem", borderBottom: i < 4 ? `1px solid ${RULE}` : "none", borderRight: `1px solid ${RULE}`, verticalAlign: "top" as const, lineHeight: 1.5, whiteSpace: "nowrap" as const }}>{row.who}</td>
                                    <td style={{ fontSize: "0.875rem", padding: "1.1rem 1.25rem", borderBottom: i < 4 ? `1px solid ${RULE}` : "none", verticalAlign: "top" as const, lineHeight: 1.5 }}>{row.outcome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ background: BLUE, color: WHITE, padding: "clamp(4rem, 8vw, 7rem) 0" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 700, textTransform: "uppercase" as const, lineHeight: 1, letterSpacing: "-0.01em" }}
                            >
                                Ready to start<br />the conversation?
                            </motion.h2>
                            <p style={{ marginTop: "1rem", fontSize: "0.95rem", opacity: 0.8, maxWidth: "32rem" }}>
                                The first session is a diagnostic — we read your context, map the forces, surface the real questions. From there, we design what&apos;s needed.
                            </p>
                        </div>
                        <a href="mailto:hello@researchlab.sk" style={{
                            display: "inline-block",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase" as const,
                            textDecoration: "none",
                            background: WHITE,
                            color: BLUE,
                            padding: "1rem 2.5rem",
                            whiteSpace: "nowrap" as const,
                        }}>
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
