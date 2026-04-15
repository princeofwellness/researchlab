"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.55 },
})

const grid = {
    backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.025) 39px,rgba(255,255,255,0.025) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.025) 39px,rgba(255,255,255,0.025) 40px)`,
}

export default function PlatformStrategyPage() {
    return (
        <div className="font-sans-brand">
            <TopNav />
            <LabStrategyNav />

            {/* ── 01 HERO / blue ── */}
            <section className="relative min-h-screen bg-[#0047BB] text-white overflow-hidden flex flex-col" style={grid}>
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[22vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    PLATFORM
                </span>
                <div className="flex items-center justify-between px-8 md:px-16 pt-36 md:pt-40 pb-6">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">
                        Research Lab — Platform Strategy
                    </span>
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">
                        Circle · 2026
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pb-24">
                    <motion.div {...fadeUp(0.1)}>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-6">
                            01 — Vision
                        </span>
                        <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
                            Not a course.<br />A living system.
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                            Research Lab's platform is not a library of videos. It is a progressive intelligence ecosystem — built for total beginners, growing professionals, and corporate teams — where leaving means losing access to the infrastructure you run your work on.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
                        {["Total Beginners", "Growing Professionals", "B2B Teams", "Circle Community", "Asset Library", "Agentic Transition"].map(tag => (
                            <span key={tag} className="px-3 py-1.5 border border-white/20 text-[10px] font-code-brand font-bold uppercase tracking-widest text-white/50">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
                <div className="h-px bg-white/10 mx-8 md:mx-16" />
                <div className="px-8 md:px-16 py-6 flex items-center justify-between">
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Architecture over apps</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Mindset before tools</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest hidden md:block">Systems, not features</span>
                </div>
            </section>

            {/* ── 02 THREE AUDIENCES / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 top-0 font-syne font-bold text-[20vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    WHO
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            02 — Three Audiences
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            One platform.<br />Three entry points.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {[
                            {
                                level: "Entry",
                                label: "The Curious",
                                tag: "Total Beginners",
                                desc: "Never used AI seriously. Feels left behind. Wants to understand without the hype, the fear, or the jargon. Comes in through THE MINDSHIFT thinking or social content.",
                                need: "Permission to start. A mental model that makes AI feel approachable.",
                                hook: "Mindset first. One win in week one.",
                                color: "border-black/10",
                            },
                            {
                                level: "Growing",
                                label: "The Builder",
                                tag: "Professionals",
                                desc: "Uses AI casually — ChatGPT for drafts, maybe Notion AI. Wants to go deeper. Ready to build real workflows. Has a specific problem they want to solve.",
                                need: "Frameworks and tools that work together. Not 50 separate tutorials.",
                                hook: "One automated workflow in month one.",
                                color: "border-[#0047BB]/30 bg-[#0047BB]/[0.03]",
                            },
                            {
                                level: "Corporate",
                                label: "The Team",
                                tag: "B2B",
                                desc: "10-50 people. Manager trying to upskill their department. Bought AI licenses but nobody uses them consistently. Wants results, not just awareness.",
                                need: "Structured transformation. Practical ROI. Something they can show leadership.",
                                hook: "Workshop → Circle membership → ongoing upskilling.",
                                color: "border-black/10",
                            },
                        ].map((a, i) => (
                            <motion.div key={a.label} {...fadeUp(i * 0.1)} className={`p-8 border ${a.color}`}>
                                <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-3">{a.tag}</span>
                                <p className="font-syne font-bold text-2xl tracking-tight mb-2">{a.label}</p>
                                <span className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 block mb-6">{a.level}</span>
                                <div className="h-px bg-black/10 mb-6" />
                                <p className="text-sm text-black/60 leading-relaxed mb-6">{a.desc}</p>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 block mb-1">They need</span>
                                        <p className="text-sm text-black/70">{a.need}</p>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] block mb-1">The hook</span>
                                        <p className="text-sm font-medium">{a.hook}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 03 GOLDEN FRAMEWORKS / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute left-0 bottom-0 font-syne font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    CORE
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            03 — The Golden Frameworks
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            This is what we own.<br />Nobody else teaches this.
                        </h2>
                        <p className="text-white/40 mt-6 max-w-2xl text-lg">
                            Tools change. Models change. The thinking doesn't. These are Research Lab's core IP — the frameworks that make the platform irreplaceable.
                        </p>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            {
                                n: "01",
                                name: "Mindshift First",
                                desc: "The mental model before the tool. Fear → curiosity → leverage. Without this, every tool tutorial is a dead end. With it, every new tool is immediately navigable. This is the foundation everything else rests on.",
                                who: "All levels",
                            },
                            {
                                n: "02",
                                name: "The Practical Hook",
                                desc: "People come for the practical — 'show me how to do X faster.' They stay for the thinking. The hook is the workflow. The differentiator is the philosophy behind it. Don't lead with philosophy. Lead with results, then reveal the depth.",
                                who: "Beginners → Builders",
                            },
                            {
                                n: "03",
                                name: "Architecture Over Apps",
                                desc: "Teaching a tool is worthless if OpenAI ships a native version next month. Teaching architecture — how to decompose a problem, design a logic chain, orchestrate tools — creates skills that survive any model update. This is the 2026 market shift.",
                                who: "Builders → Corporate",
                            },
                            {
                                n: "04",
                                name: "The Intelligence Filter",
                                desc: "The AI landscape produces too much noise. Research Lab curates signal. The Radar, the content pillars, the recommended stack — all are acts of editorial intelligence. Members don't need to follow everything. They need to know what matters and why.",
                                who: "All levels",
                            },
                            {
                                n: "05",
                                name: "Human-Centric AI",
                                desc: "AI as collaborator, not replacement. The thinking behind the tool is the tool. Humans bring taste, judgment, and strategic direction. AI brings scale, speed, and execution. Designing that relationship correctly is the skill the market is paying for.",
                                who: "B2B · Corporate",
                            },
                        ].map((f, i) => (
                            <motion.div key={f.n} {...fadeUp(i * 0.08)} className="flex gap-8 py-8 border-b border-white/[0.06] last:border-0">
                                <span className="text-[11px] font-code-brand text-white/20 shrink-0 mt-1 w-8">{f.n}</span>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <p className="font-syne font-bold text-xl tracking-tight">{f.name}</p>
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-1 shrink-0">{f.who}</span>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 04 CURRICULUM LADDER / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-bold text-[18vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    LEVELS
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">
                            04 — Curriculum Ladder
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Four levels.<br />One direction: deeper.
                        </h2>
                        <p className="text-white/50 mt-6 max-w-2xl text-lg">
                            Every member enters at their level. Every level has a clear outcome. Progress is not optional — it is designed into the structure.
                        </p>
                    </motion.div>

                    <div className="space-y-3">
                        {[
                            {
                                level: "Level 1",
                                name: "The Mindshift",
                                label: "Foundation",
                                audience: "Total beginners · Curious professionals",
                                outcome: "AI goes from threatening to navigable. The mental model clicks.",
                                what: ["What AI actually is — and isn't", "Fear → curiosity → leverage arc", "Why most people use 10% of what's possible", "The thinking frameworks behind every good prompt", "First practical win — one task automated"],
                                duration: "Weeks 1–4",
                                bg: "bg-white/10",
                            },
                            {
                                level: "Level 2",
                                name: "Thinking Frameworks",
                                label: "Intermediate",
                                audience: "Growing professionals · Post-mindshift members",
                                outcome: "Members can decompose any problem and design an AI-assisted solution.",
                                what: ["Problem decomposition — breaking goals into logic steps", "Chain of thought and reasoning patterns", "How to brief AI like a creative director", "Workflow design: before you touch a tool", "The CRAFT cycle: map → MVP → automate → refine"],
                                duration: "Weeks 5–10",
                                bg: "bg-white/[0.07]",
                            },
                            {
                                level: "Level 3",
                                name: "Practical Tools",
                                label: "Applied",
                                audience: "Builders · B2B teams post-workshop",
                                outcome: "Members have a working personal AI stack. Tools chosen for their use case, not hype.",
                                what: ["Meeting notes, deep research, writing, visual, coding", "No-code workflow automation (n8n, Make, Zapier)", "RAG foundations — grounding AI in your own data", "Tool-by-use-case library (not tool-by-tool)", "Vibe coding — building full apps through natural language"],
                                duration: "Months 3–5",
                                bg: "bg-white/10",
                            },
                            {
                                level: "Level 4",
                                name: "Agentic Systems",
                                label: "Advanced",
                                audience: "Builders ready to build · Technical-curious professionals",
                                outcome: "Members can design, deploy, and manage semi-autonomous agent workflows.",
                                what: ["MCP — the industry standard for agentic tool connection", "Reasoning loops: ReAct, Reflection, self-correction", "Multi-agent systems: CrewAI, role assignment, delegation", "Persistent memory — agents that improve over time", "Production governance: evaluation, observability, guardian agents"],
                                duration: "Months 6–12",
                                bg: "bg-white/[0.07]",
                            },
                        ].map((l, i) => (
                            <motion.div key={l.level} {...fadeUp(i * 0.08)} className={`${l.bg} border border-white/10 p-6 md:p-8`}>
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-10 h-10 bg-white text-[#0047BB] flex items-center justify-center text-[11px] font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 flex-wrap mb-1">
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/40">{l.level}</span>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] border border-white/20 px-2 py-0.5 text-white/60">{l.label}</span>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/30">{l.duration}</span>
                                        </div>
                                        <p className="font-syne font-bold text-2xl tracking-tight">{l.name}</p>
                                        <p className="text-white/40 text-xs mt-1">{l.audience}</p>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10 mb-6" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-3">What's inside</p>
                                        <div className="space-y-2">
                                            {l.what.map(w => (
                                                <div key={w} className="flex gap-2 text-sm text-white/60">
                                                    <span className="text-[#0047BB] shrink-0 opacity-0" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span>
                                                    <span className="text-white/60">— {w}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="border border-white/10 p-4">
                                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-3">Outcome</p>
                                        <p className="text-white/80 text-sm leading-relaxed">{l.outcome}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 05 MARKET REALITY / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[18vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    MARKET
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            05 — What the Market Actually Wants
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Not gonna lie.<br />The market has shifted.
                        </h2>
                        <p className="text-black/50 mt-6 max-w-2xl text-lg">
                            2024 was curiosity. 2026 is implementation. SMBs don't want prompt libraries. They want someone who can deploy reliable, semi-autonomous agents that handle their actual workflows.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        {[
                            { label: "AI agents market by 2033", value: "€182B+", note: "~50% CAGR starting 2026" },
                            { label: "Enterprise apps with embedded agents", value: "40%", note: "Up from under 5% one year prior" },
                            { label: "Companies using AI with scaling blocked", value: "76%", note: "Constraint: lack of architects, not tools" },
                            { label: "Completion rate — Premium Challenge vs Course", value: "70–80%", note: "vs 3–5% for standard course videos" },
                        ].map((s, i) => (
                            <motion.div key={s.label} {...fadeUp(i * 0.07)} className="p-6 border border-black/10">
                                <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-2">{s.label}</p>
                                <p className="font-syne font-bold text-4xl tracking-tight text-[#0047BB] mb-1">{s.value}</p>
                                <p className="text-xs text-black/40">{s.note}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
                        {[
                            {
                                old: "AI Tourism",
                                new: "Core Process Automation",
                                desc: "Safe, low-impact pilots → end-to-end workflow deployment. Companies stuck in tourism phase face obsolescence.",
                            },
                            {
                                old: "Tool Proficiency",
                                new: "Architectural Logic",
                                desc: "Tool-centric curricula die when models ship native features. Architectural thinking survives every update cycle.",
                            },
                            {
                                old: "Content Library",
                                new: "Asset Infrastructure",
                                desc: "Members cancel content access when they've 'learned it all.' They can't cancel infrastructure they're running their business on.",
                            },
                        ].map((s, i) => (
                            <div key={s.old} className={`p-6 ${i < 2 ? "border-r border-black/10" : ""}`}>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-1">From</p>
                                <p className="font-bold text-base mb-3 line-through text-black/30">{s.old}</p>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-1">To</p>
                                <p className="font-bold text-base mb-4">{s.new}</p>
                                <p className="text-xs text-black/50 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 06 CIRCLE ARCHITECTURE / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute left-0 top-0 font-syne font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    CIRCLE
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            06 — How It Lives Inside Circle
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Six spaces.<br />One ecosystem.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        {[
                            {
                                phase: "Launch",
                                space: "Start Here",
                                purpose: "Onboarding. Who we are. The Quick Win task — what you're automating in week one.",
                                moat: false,
                            },
                            {
                                phase: "Launch",
                                space: "Component Library",
                                purpose: "The moat. Pre-built agent templates, workflow blueprints, prompt frameworks, automation recipes. Leaving = losing this.",
                                moat: true,
                            },
                            {
                                phase: "Launch",
                                space: "The Radar",
                                purpose: "Weekly digest dropped here. Discussion thread below. What matters this week and why.",
                                moat: false,
                            },
                            {
                                phase: "Launch",
                                space: "Lounge",
                                purpose: "Intros, questions, wins, asks. The pulse of the community. What people ask here = next content topics.",
                                moat: false,
                            },
                            {
                                phase: "Month 2",
                                space: "Live Sessions",
                                purpose: "Bi-weekly webinars live here. Public joins free. Recording archived in Circle — members only.",
                                moat: false,
                            },
                            {
                                phase: "Q3",
                                space: "Guru AI",
                                purpose: "Tiep's thinking, frameworks, and methodologies — trained as a private Claude instance. 24/7 access to RL's intelligence. Scales Tiep without burning him out.",
                                moat: true,
                            },
                        ].map((s, i) => (
                            <motion.div key={s.space} {...fadeUp(i * 0.07)} className={`p-5 border ${s.moat ? "border-[#0047BB]/40 bg-[#0047BB]/[0.06]" : "border-white/[0.07]"}`}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/30">{s.phase}</span>
                                    {s.moat && (
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5">
                                            Moat
                                        </span>
                                    )}
                                </div>
                                <p className="font-syne font-bold text-xl tracking-tight mb-3">{s.space}</p>
                                <p className="text-white/40 text-sm leading-relaxed">{s.purpose}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp(0.15)} className="p-6 border border-white/[0.07] bg-white/[0.02]">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-4">The Asset Moat — Why People Can't Leave</p>
                        <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
                            A content library can be downloaded and cancelled. A Component Library that runs your daily workflows cannot. Every template a member deploys, every automation they run — it lives in Circle. The more they build, the stickier the membership becomes. This is not lock-in by force. It is value by design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── 07 MONETIZATION / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[20vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    €
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">
                            07 — Monetization Stack
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Four revenue layers.<br />One direction: up.
                        </h2>
                    </motion.div>

                    <div className="space-y-3 mb-12">
                        {[
                            {
                                tier: "Founding Members",
                                price: "€39/mo",
                                lock: "Locked forever",
                                who: "Personal invite only. Workshop alumni, warm network. The people who shape it.",
                                what: ["Full curriculum access (Level 1–4 as built)", "Component Library", "The Radar + Lounge + Live Sessions"],
                                timeline: "Now → June 2026",
                                highlight: false,
                            },
                            {
                                tier: "General Membership",
                                price: "€59/mo",
                                lock: "Open enrollment",
                                who: "Public launch. Anyone who finds RL through content, webinars, or The Radar.",
                                what: ["Everything founding members have", "Guru AI access (Q3)", "Quarterly Premium Challenges"],
                                timeline: "September 2026",
                                highlight: true,
                            },
                            {
                                tier: "Premium Challenges",
                                price: "€97–197",
                                lock: "One-time sprint",
                                who: "Members and non-members. 14–21 day intensive. One outcome. One workflow built.",
                                what: ["'Build a content automation in 14 days'", "70–80% completion rate vs 3–5% for courses", "Converts passive members → active participants"],
                                timeline: "Q3 2026+",
                                highlight: false,
                            },
                            {
                                tier: "Corporate Workshop",
                                price: "€690/person",
                                lock: "B2B",
                                who: "10–15 people. Two days. Team walks out changed. Pipeline → Circle membership for alumni.",
                                what: ["Day 1: Mindshift thinking", "Day 2: Practical tools + workflows", "Alumni path: founding member rate in Circle"],
                                timeline: "Q2 Active",
                                highlight: false,
                            },
                        ].map((t, i) => (
                            <motion.div key={t.tier} {...fadeUp(i * 0.08)} className={`p-6 border ${t.highlight ? "border-white bg-white/10" : "border-white/10"}`}>
                                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                                            <p className="font-syne font-bold text-xl tracking-tight">{t.tier}</p>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] border border-white/20 px-2 py-0.5 text-white/50">{t.lock}</span>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/30">{t.timeline}</span>
                                        </div>
                                        <p className="text-white/50 text-sm">{t.who}</p>
                                    </div>
                                    <p className="font-syne font-bold text-3xl tracking-tight shrink-0">{t.price}</p>
                                </div>
                                <div className="h-px bg-white/10 mb-4" />
                                <div className="flex flex-wrap gap-2">
                                    {t.what.map(w => (
                                        <span key={w} className="text-[10px] font-code-brand text-white/40 border border-white/10 px-2 py-1">
                                            {w}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[
                            { label: "15 founding members", value: "€585/mo" },
                            { label: "50 general members", value: "€2,950/mo" },
                            { label: "2 corporate workshops", value: "€14–20k" },
                            { label: "Q4 ceiling", value: "€5–8k MRR" },
                        ].map(s => (
                            <div key={s.label} className="bg-[#0047BB] p-5 text-center" style={grid}>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">{s.label}</p>
                                <p className="font-syne font-bold text-2xl">{s.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 08 QUICK WIN PRINCIPLE / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[18vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    WIN
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            08 — The Quick Win Principle
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Month one decides<br />everything.
                        </h2>
                        <p className="text-black/50 mt-6 max-w-2xl text-lg">
                            If a member doesn't save time or remove friction within 30 days, the membership becomes a discretionary expense. It's the first thing cut in a budget review. Not because they don't believe in it — because it never became real.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        <motion.div {...fadeUp(0.05)} className="p-8 border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]">
                            <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-4">The Design</p>
                            <p className="font-syne font-bold text-2xl tracking-tight mb-4">Week one = one win</p>
                            <p className="text-black/60 text-sm leading-relaxed mb-6">
                                The first thing a new member sees in Start Here is not a welcome video or a philosophy. It is a single task: pick one thing you do manually at least 3 times a week and automate it. By the end of week one, it should be running.
                            </p>
                            <div className="space-y-2">
                                {["Meeting notes — automated and filed", "Weekly report draft — generated from data", "Content repurposing — one post becomes five", "Email triage — sorted and responded to", "Research digest — curated and delivered"].map(w => (
                                    <div key={w} className="flex gap-2 text-sm text-black/60">
                                        <span className="text-[#0047BB]">—</span>
                                        <span>{w}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="space-y-3">
                            <motion.div {...fadeUp(0.08)} className="p-6 border border-black/10">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">Signal to watch</p>
                                <p className="font-bold text-base mb-2">Month 1 churn</p>
                                <p className="text-sm text-black/50">If high → content/value gap, not pricing. Find what didn't connect and fix it.</p>
                            </motion.div>
                            <motion.div {...fadeUp(0.1)} className="p-6 border border-black/10">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">Signal to watch</p>
                                <p className="font-bold text-base mb-2">Lounge activity</p>
                                <p className="text-sm text-black/50">What they post = what to build next. The community writes the roadmap.</p>
                            </motion.div>
                            <motion.div {...fadeUp(0.12)} className="p-6 border border-black/10">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">Signal to watch</p>
                                <p className="font-bold text-base mb-2">Component Library usage</p>
                                <p className="text-sm text-black/50">Members using templates = members who can't cancel. Track it from day one.</p>
                            </motion.div>
                            <motion.div {...fadeUp(0.14)} className="p-6 border border-black/10">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">Signal to watch</p>
                                <p className="font-bold text-base mb-2">Who refers who</p>
                                <p className="text-sm text-black/50">Referral patterns reveal your real audience. Not who you thought it was — who it actually is.</p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div {...fadeUp(0.2)} className="p-8 bg-[#0d0d0d] text-white">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-4">The Retention Equation</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <p className="font-syne font-bold text-3xl tracking-tight text-[#0047BB] mb-2">Quick Win</p>
                                <p className="text-white/40 text-sm">One automation in week one. Converts the abstract into the real.</p>
                            </div>
                            <div>
                                <p className="font-syne font-bold text-3xl tracking-tight text-[#0047BB] mb-2">Asset Access</p>
                                <p className="text-white/40 text-sm">Component Library becomes infrastructure. Cancelling means losing what's running.</p>
                            </div>
                            <div>
                                <p className="font-syne font-bold text-3xl tracking-tight text-[#0047BB] mb-2">Community Pull</p>
                                <p className="text-white/40 text-sm">The Lounge, the webinars, the challenges. People stay for people, not just content.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-[#0d0d0d] text-white border-t border-white/[0.06] px-8 md:px-16 py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="font-syne font-bold text-xl tracking-tighter">RESEARCH<span className="text-[#0047BB]">LAB</span></p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/20 mt-1">Platform Strategy · 2026</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "The Bible", href: "/lab/context" },
                            { label: "Q2 Overview", href: "/lab/q2-overview" },
                            { label: "Corporate", href: "/lab/corporate" },
                            { label: "Content", href: "/lab/content" },
                        ].map(l => (
                            <a key={l.href} href={l.href} className="text-[10px] font-code-brand uppercase tracking-widest text-white/30 hover:text-white/70 transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}
