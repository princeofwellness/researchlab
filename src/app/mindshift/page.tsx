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
const LIGHTBLUE = "#eaf0ff"

export default function MindShiftPage() {
    const [activePath, setActivePath] = useState<"people" | "technical">("people")

    return (
        <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: INK }}>
            <TopNav />

            {/* ── HERO ── */}
            <section style={{ borderBottom: `1px solid ${INK}`, paddingTop: "clamp(4rem, 10vw, 8rem)", overflow: "hidden" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "end" }}>
                        <div style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
                            <motion.div {...fade(0.1)}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ display: "block", width: "2rem", height: 1, background: BLUE }} />
                                    Research Lab · For Organisations · 2026
                                </div>
                            </motion.div>
                            <motion.h1 {...fade(0.2)} style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase" as const, marginBottom: "2rem" }}>
                                Mind<span style={{ color: BLUE, display: "block" }}>Shift</span>
                            </motion.h1>
                            <motion.p {...fade(0.3)} style={{ fontSize: "1.05rem", color: MID, maxWidth: "28rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
                                A session that changes how your team thinks about what is happening right now —
                                and a path that changes what you do next.
                            </motion.p>
                            <motion.div {...fade(0.4)} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" as const, alignItems: "center" }}>
                                <a href="#opening" style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, textDecoration: "none", background: BLUE, color: WHITE, padding: "0.9rem 2rem" }}>
                                    Start with the Opening
                                </a>
                                <a href="#ecosystem" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, textDecoration: "none", color: INK, borderBottom: `1px solid ${INK}`, paddingBottom: "0.1rem" }}>
                                    See how it connects
                                </a>
                            </motion.div>
                        </div>

                        <motion.div {...fade(0.3)} style={{ borderLeft: `1px solid ${INK}`, padding: "clamp(2rem, 4vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column" as const, gap: "2.5rem" }}>
                            {[
                                { num: "3.5h", label: "Opening session — panel discussion, tailored to your organisation" },
                                { num: "3", label: "Specialist leads — intelligence, transformation, technical build" },
                                { num: "2", label: "Paths forward — people & culture, or technical implementation" },
                            ].map((s, i) => (
                                <div key={i} style={{ borderTop: i > 0 ? `1px solid ${RULE}` : "none", paddingTop: i > 0 ? "2rem" : 0 }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, color: BLUE, lineHeight: 1 }}>{s.num}</div>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: MID, marginTop: "0.5rem" }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div style={{ background: BLUE, color: WHITE, padding: "0.75rem 0", overflow: "hidden", borderBottom: `1px solid ${INK}` }}>
                <motion.div
                    style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" as const }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {["Open the space", "✺ Shift the thinking", "Map the forces", "✺ Find the path", "Build what&apos;s next", "✺ Research Lab", "People first", "✺ Then the technology",
                      "Open the space", "✺ Shift the thinking", "Map the forces", "✺ Find the path", "Build what&apos;s next", "✺ Research Lab", "People first", "✺ Then the technology"].map((item, i) => (
                        <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, flexShrink: 0 }}>{item}</span>
                    ))}
                </motion.div>
            </div>

            {/* ── PROBLEM ── */}
            <section style={{ background: INK, color: CREAM, padding: "clamp(3rem, 7vw, 6rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: "3rem", alignItems: "start" }}>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, writingMode: "vertical-rl" as const, transform: "rotate(180deg)", paddingTop: "0.5rem" }}>The moment</div>
                        <div>
                            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2.2rem)", fontWeight: 400, lineHeight: 1.35, letterSpacing: "-0.01em", maxWidth: "40rem", marginBottom: "2rem" }}>
                                Companies are making <span style={{ color: BLUE }}>irreversible decisions</span> right now —
                                restructures, hiring freezes, technology bets — without a clear picture of what
                                is actually changing and <span style={{ color: BLUE }}>why it matters for them specifically.</span>
                            </p>
                            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "1rem", lineHeight: 1.5, opacity: 0.7, maxWidth: "36rem" }}>
                                The cost of getting this wrong is no longer recoverable in six months.
                                The window for smart, intentional moves is now.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── HOW IT STARTS ── */}
            <section id="opening" style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0001</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>It Starts With One Session</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${INK}` }}>
                        <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)", borderRight: `1px solid ${INK}` }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1.25rem" }}>The Opening Session</div>
                            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", fontWeight: 700, textTransform: "uppercase" as const, lineHeight: 1.1, marginBottom: "1.5rem" }}>3.5 Hours.<br />Open the Space.</h3>
                            <p style={{ fontSize: "0.95rem", color: MID, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                We come to your company. Three specialists. Before we arrive, we research your sector,
                                your team, your current bets. The session is not generic — it is read for you.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: MID, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                Panel format. Facilitated discussion. We open the questions that matter —
                                the ones people in your organisation already feel but haven&apos;t said out loud.
                                We map the forces. We find where the real tension is.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: MID, lineHeight: 1.7 }}>
                                By the end, you have clarity. And we know exactly what you need next.
                            </p>
                        </div>
                        <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)", background: LIGHTBLUE }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1.25rem" }}>What happens in the room</div>
                            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
                                {[
                                    { step: "01", text: "We present our read of what is changing in your sector — AI, market forces, customer behaviour, competitive landscape." },
                                    { step: "02", text: "Panel discussion opens. Three specialists, your leadership team. Real questions, no prepared answers." },
                                    { step: "03", text: "We surface where the thinking is stuck — the assumptions that are no longer true but are still driving decisions." },
                                    { step: "04", text: "We close with a map: where you are, where the pressure is coming from, and what the next honest move looks like." },
                                ].map((item) => (
                                    <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: BLUE, minWidth: "1.5rem", paddingTop: "0.15rem" }}>{item.step}</span>
                                        <p style={{ fontSize: "0.875rem", color: MID, lineHeight: 1.6 }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PATHS FORWARD ── */}
            <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}`, background: WHITE }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0010</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>Then It Goes Where You Need It</h2>
                    </div>

                    <p style={{ fontSize: "1rem", color: MID, maxWidth: "42rem", lineHeight: 1.7, marginBottom: "3rem" }}>
                        After the opening session, every company has different needs. Some are ready to rebuild
                        how they operate. Some need to build something new. Most need both. The path is designed
                        around what actually came up — not a fixed package.
                    </p>

                    {/* Path selector */}
                    <div style={{ display: "flex", gap: 0, marginBottom: "2.5rem", border: `1px solid ${INK}`, width: "fit-content" }}>
                        {[
                            { key: "people", label: "Path A: People & Business" },
                            { key: "technical", label: "Path B: Technical Build" },
                        ].map(p => (
                            <button key={p.key}
                                onClick={() => setActivePath(p.key as "people" | "technical")}
                                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "0.75rem 1.75rem", border: "none", borderRight: p.key === "people" ? `1px solid ${INK}` : "none", cursor: "pointer", background: activePath === p.key ? BLUE : "transparent", color: activePath === p.key ? WHITE : INK, transition: "all 0.2s" }}
                            >{p.label}</button>
                        ))}
                    </div>

                    {activePath === "people" && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${INK}` }}>
                            <div style={{ padding: "clamp(2rem, 4vw, 3rem)", borderRight: `1px solid ${INK}`, borderTop: `4px solid ${BLUE}` }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>Led by Roman</div>
                                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "1.25rem", lineHeight: 1.1 }}>How the Business<br />Thinks Differently</h3>
                                <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                    The hardest change in any organisation is not the technology — it&apos;s the thinking.
                                    Roman works at the level of identity and operating model. How do leaders lead
                                    differently when the ground keeps moving? How does the culture adapt without losing
                                    what made it good?
                                </p>
                                <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7 }}>
                                    This path runs as a series of focused sessions with leadership and key teams.
                                    It can run as a short arc of 3 sessions or as an ongoing engagement.
                                </p>
                            </div>
                            <div style={{ padding: "clamp(2rem, 4vw, 3rem)", borderTop: `4px solid ${RULE}` }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>What this covers</div>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.85rem" }}>
                                    {[
                                        "How leadership makes decisions in uncertainty — frameworks that actually work",
                                        "Where the operating model is brittle under current pressure",
                                        "How to talk to your team about what is changing without losing trust",
                                        "What stays, what evolves, what needs to be let go",
                                        "How customer relationships and expectations are changing — specifically for your sector",
                                        "The culture signals that predict whether transformation sticks or collapses",
                                    ].map((item, i) => (
                                        <li key={i} style={{ fontSize: "0.875rem", color: MID, lineHeight: 1.55, paddingLeft: "1.25rem", position: "relative" as const }}>
                                            <span style={{ position: "absolute" as const, left: 0, color: BLUE, fontFamily: "'Space Mono', monospace" }}>—</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {activePath === "technical" && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${INK}` }}>
                            <div style={{ padding: "clamp(2rem, 4vw, 3rem)", borderRight: `1px solid ${INK}`, borderTop: `4px solid ${BLUE}` }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>Led by Jan · Sudo Labs</div>
                                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "1.25rem", lineHeight: 1.1 }}>What You<br />Actually Build Next</h3>
                                <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                    Some companies leave the opening session knowing they need to build something —
                                    a new process, an AI-assisted workflow, a product that didn&apos;t exist six months ago.
                                    Jan and Sudo Labs take the strategic clarity from the opening and turn it into
                                    something real.
                                </p>
                                <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7 }}>
                                    This is not consultancy. This is implementation. From scoped to shipped.
                                </p>
                            </div>
                            <div style={{ padding: "clamp(2rem, 4vw, 3rem)", borderTop: `4px solid ${RULE}` }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>What this covers</div>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.85rem" }}>
                                    {[
                                        "Technical scoping — what is actually worth building vs. what is hype",
                                        "AI workflow integration — where automation creates real leverage in your operations",
                                        "Custom tooling built around your actual processes, not generic software",
                                        "Prototyping fast — test the idea before committing the budget",
                                        "Team handover — your people can run what we build",
                                        "Ongoing support if the build evolves — we don&apos;t disappear after delivery",
                                    ].map((item, i) => (
                                        <li key={i} style={{ fontSize: "0.875rem", color: MID, lineHeight: 1.55, paddingLeft: "1.25rem", position: "relative" as const }}>
                                            <span style={{ position: "absolute" as const, left: 0, color: BLUE, fontFamily: "'Space Mono', monospace" }}>—</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    <p style={{ marginTop: "1.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: MID, letterSpacing: "0.05em" }}>
                        Both paths can run in parallel. Most companies end up in both.
                    </p>
                </div>
            </section>

            {/* ── ECOSYSTEM ── */}
            <section id="ecosystem" style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}` }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0011</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>Two Doors. One Ecosystem.</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${INK}` }}>
                        <div style={{ padding: "clamp(2rem, 4vw, 3rem)", borderRight: `1px solid ${INK}` }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>Public MindShift</div>
                            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "1rem", lineHeight: 1.1 }}>Open Events.<br />Paid & Invite.</h3>
                            <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                Our public sessions bring together curious people — founders, executives, creatives,
                                builders. The format is the same: three speakers, panel discussion, real questions.
                                The content is broader — sector-agnostic, forward-looking.
                            </p>
                            <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7 }}>
                                People who attend bring it back. They share it in their companies.
                                Some of those companies call us. That is the pipeline —
                                not a funnel, but a genuine word-of-mouth chain built on the quality of the session.
                            </p>
                        </div>
                        <div style={{ padding: "clamp(2rem, 4vw, 3rem)", background: LIGHTBLUE }}>
                            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "1rem" }}>Company MindShift</div>
                            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "1rem", lineHeight: 1.1 }}>Tailored.<br />For Your Organisation.</h3>
                            <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                Same energy, different depth. We research your company before we arrive.
                                The session is built around your sector, your team, your specific moment.
                                The questions are harder. The conversation goes further.
                            </p>
                            <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7 }}>
                                This is the entry point to everything else. One session often becomes
                                the beginning of a longer engagement — because the questions it surfaces
                                don&apos;t resolve themselves in an afternoon.
                            </p>
                        </div>
                    </div>

                    {/* Flow diagram — text-based */}
                    <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" as const }}>
                        {[
                            { label: "Public Session", sub: "People attend" },
                            { arrow: true },
                            { label: "Word of Mouth", sub: "They share it" },
                            { arrow: true },
                            { label: "Company Calls", sub: "Opening session" },
                            { arrow: true },
                            { label: "Path A or B", sub: "Or both" },
                        ].map((item, i) => (
                            item.arrow ? (
                                <div key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", color: BLUE, padding: "0 1rem" }}>→</div>
                            ) : (
                                <div key={i} style={{ textAlign: "center" as const, padding: "1rem 1.5rem", border: `1px solid ${RULE}`, background: WHITE }}>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>{item.label}</div>
                                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: MID, letterSpacing: "0.05em", marginTop: "0.25rem" }}>{item.sub}</div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0", borderBottom: `1px solid ${INK}`, background: WHITE }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: BLUE, minWidth: "3.5rem" }}>0100</span>
                        <h2 style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, textTransform: "uppercase" as const, borderBottom: `2px solid ${BLUE}`, paddingBottom: "0.25rem" }}>Who Comes With You</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderLeft: `1px solid ${INK}` }}>
                        {[
                            {
                                role: "Intelligence & Facilitation", name: "Prince", company: "Research Lab · SORRYWECAN",
                                body: "Reads the landscape. Opens the space. Brings the intelligence — AI, geopolitics, cultural forces — and connects it to your specific situation. The thread between specialists and client. The one who knows what questions to ask before you do.",
                                tags: ["Intelligence", "Research", "Facilitation", "Network"],
                            },
                            {
                                role: "Transformation & Business Design", name: "Roman", company: "Transformational Design",
                                body: "Works at the level of how organisations actually think. Not process maps — the deeper layer of identity, assumptions, and culture. If your business needs to change how it operates at its core, Roman is the person who makes that real.",
                                tags: ["Business Design", "Culture", "Leadership", "Systems Thinking"],
                            },
                            {
                                role: "Technical Implementation", name: "Jan", company: "Sudo Labs",
                                body: "Turns strategic clarity into built things. When the session surfaces what needs to be built — an AI workflow, a new product, a technical infrastructure — Jan and Sudo Labs scope and build it. From idea to running system.",
                                tags: ["AI Systems", "Product Build", "Automation", "Implementation"],
                            },
                        ].map((member, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ borderRight: `1px solid ${INK}`, padding: "clamp(2rem, 4vw, 3rem)" }}>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: BLUE, marginBottom: "0.75rem" }}>{member.role}</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.25rem", fontWeight: 700, textTransform: "uppercase" as const, marginBottom: "0.25rem" }}>{member.name}</div>
                                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.06em", color: MID, marginBottom: "1.25rem", textTransform: "uppercase" as const }}>{member.company}</div>
                                <p style={{ fontSize: "0.875rem", color: MID, lineHeight: 1.65, marginBottom: "1.25rem" }}>{member.body}</p>
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

            {/* ── CTA ── */}
            <section style={{ background: BLUE, color: WHITE, padding: "clamp(4rem, 8vw, 7rem) 0" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 4rem)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
                        <div>
                            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(1.5rem, 4vw, 3rem)", fontWeight: 700, textTransform: "uppercase" as const, lineHeight: 1, letterSpacing: "-0.01em" }}>
                                Start with<br />one session.
                            </motion.h2>
                            <p style={{ marginTop: "1rem", fontSize: "0.95rem", opacity: 0.8, maxWidth: "32rem" }}>
                                The opening is the product. Three and a half hours that changes what your team
                                sees — and opens the path to what comes next.
                            </p>
                        </div>
                        <a href="mailto:hello@researchlab.sk" style={{ display: "inline-block", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, textDecoration: "none", background: WHITE, color: BLUE, padding: "1rem 2.5rem", whiteSpace: "nowrap" as const }}>
                            Book the Opening
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
