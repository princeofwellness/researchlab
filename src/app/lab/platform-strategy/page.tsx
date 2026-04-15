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
                            Not a course.<br />A living network.
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                            Research Lab's platform is a progressive intelligence ecosystem built inside Circle — combining structured curriculum, a practitioner network of real builders, and an asset library that makes leaving costly. Three audiences, one direction: deeper.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
                        {["Total Beginners", "Growing Professionals", "B2B Teams", "Builders & Practitioners", "SORRYWECAN Network", "Asset Library"].map(tag => (
                            <span key={tag} className="px-3 py-1.5 border border-white/20 text-[10px] font-code-brand font-bold uppercase tracking-widest text-white/50">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
                <div className="h-px bg-white/10 mx-8 md:mx-16" />
                <div className="px-8 md:px-16 py-6 flex items-center justify-between">
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Taste → Leverage → Clarity</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Mindset before tools</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest hidden md:block">Architecture over apps</span>
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
                                label: "The Curious",
                                tag: "Total Beginners",
                                desc: "Never used AI seriously. Feels left behind. Wants to understand without the hype, the fear, or the jargon. Enters through social content, The Radar, or word of mouth.",
                                need: "Permission to start. A mental model that makes AI feel approachable.",
                                hook: "Week one: one win. One task automated.",
                                color: "border-black/10",
                            },
                            {
                                label: "The Builder",
                                tag: "Professionals",
                                desc: "Uses AI casually. Ready to go deeper. Has a specific problem — meeting notes, research, content workflow. Wants tools that work together, not 50 separate tutorials.",
                                need: "Frameworks and a working stack. Real results in month one.",
                                hook: "One automated workflow that changes their daily rhythm.",
                                color: "border-[#0047BB]/30 bg-[#0047BB]/[0.03]",
                            },
                            {
                                label: "The Team",
                                tag: "B2B · Corporate",
                                desc: "10–50 people. Manager trying to upskill their department. Bought AI licences, nobody uses them consistently. Wants structured change with ROI they can show leadership.",
                                need: "Workshop → Circle bridge. Ongoing upskilling after the two days.",
                                hook: "Alumni founding member rate. Team grows with the platform.",
                                color: "border-black/10",
                            },
                        ].map((a, i) => (
                            <motion.div key={a.label} {...fadeUp(i * 0.1)} className={`p-8 border ${a.color}`}>
                                <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-3">{a.tag}</span>
                                <p className="font-syne font-bold text-2xl tracking-tight mb-4">{a.label}</p>
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
                    <motion.div {...fadeUp(0)} className="mb-6">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            03 — The Golden Frameworks
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            This is what we own.<br />Nobody else teaches this.
                        </h2>
                        <p className="text-white/40 mt-6 max-w-2xl text-lg">
                            Tools change. Models change. The thinking doesn't. These are Research Lab's core IP — built from SORRYWECAN's years of taste-making and Tiep's deep work with AI systems.
                        </p>
                    </motion.div>

                    {/* The Arc */}
                    <motion.div {...fadeUp(0.1)} className="mb-12 p-6 border border-white/[0.07] bg-white/[0.02]">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-4">The Pedagogical Arc — How Every Session Moves</p>
                        <div className="grid grid-cols-3 gap-0">
                            {[
                                { label: "Taste", owner: "Roland", desc: "Opening the mind. Where are we? What is AI actually doing? Why does it feel threatening — and why that reaction makes sense. From fear to curiosity." },
                                { label: "Leverage", owner: "Tiep", desc: "The thinking frameworks. How to approach a task with AI. The mental model shift from tool-user to system-thinker. Prompt architecture. Chain of thought." },
                                { label: "Clarity", owner: "Roman", desc: "Synthesis. How these ideas connect to each other and to the room's specific context. Visual frameworks. What to take away and where to go next." },
                            ].map((s, i) => (
                                <div key={s.label} className={`p-5 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
                                    <p className="font-syne font-bold text-2xl tracking-tight mb-1">{s.label}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-4">{s.owner}</p>
                                    <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/[0.06]">
                            <p className="text-[10px] font-code-brand text-white/20 uppercase tracking-widest">This arc lives in THE MINDSHIFT, in corporate workshops, in webinars, in the curriculum. It's the DNA of how we teach.</p>
                        </div>
                    </motion.div>

                    <div className="space-y-0">
                        {[
                            {
                                n: "01",
                                name: "Mindshift First",
                                desc: "The mental model before the tool. Fear → curiosity → leverage. Without this, every tool tutorial is a dead end. With it, every new tool is immediately navigable. This is the foundation everything rests on.",
                                who: "All levels",
                            },
                            {
                                n: "02",
                                name: "The Practical Hook",
                                desc: "People come for the practical — 'show me how to do X faster.' They stay for the thinking. Lead with results, then reveal the depth. This is not a compromise — it's the correct sequence.",
                                who: "Beginners → Builders",
                            },
                            {
                                n: "03",
                                name: "Architecture Over Apps",
                                desc: "Teaching a specific tool is worthless if OpenAI ships a native version next month. Teaching architecture — problem decomposition, logic chains, orchestration — creates skills that survive any model update. This is what the 2026 market actually pays for.",
                                who: "Builders → Corporate",
                            },
                            {
                                n: "04",
                                name: "The Intelligence Filter",
                                desc: "The Radar, the content pillars, the recommended stack — all acts of editorial intelligence. SORRYWECAN built its reputation on curation and taste. Research Lab applies that to AI. Members don't need to follow everything. They need to know what matters and why.",
                                who: "All levels",
                            },
                            {
                                n: "05",
                                name: "Human-Centric AI",
                                desc: "AI as collaborator, not replacement. Humans bring taste, judgment, direction. AI brings scale, speed, execution. The thinking behind the tool is the tool. Designing that relationship correctly is the skill the market is paying for in 2026.",
                                who: "B2B · Corporate",
                            },
                        ].map((f, i) => (
                            <motion.div key={f.n} {...fadeUp(i * 0.07)} className="flex gap-8 py-8 border-b border-white/[0.06] last:border-0">
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
                        <p className="text-white/50 mt-6 max-w-2xl">
                            Every member enters at their level. Every level has a clear outcome. Progress is designed into the structure — not assumed.
                        </p>
                    </motion.div>
                    <div className="space-y-3">
                        {[
                            {
                                level: "Level 1",
                                name: "The Mindshift",
                                label: "Foundation",
                                audience: "Total beginners · Anyone starting from scratch",
                                outcome: "AI goes from threatening to navigable. The mental model clicks.",
                                what: ["What AI actually is — and isn't", "Fear → curiosity → leverage arc", "Why most people use 10% of what's possible", "The thinking frameworks behind every good prompt", "First practical win — one manual task automated"],
                                duration: "Weeks 1–4",
                            },
                            {
                                level: "Level 2",
                                name: "Thinking Frameworks",
                                label: "Intermediate",
                                audience: "Growing professionals · Post-mindshift members",
                                outcome: "Members can decompose any problem and design an AI-assisted solution.",
                                what: ["Problem decomposition — breaking goals into logic steps", "Chain of thought and reasoning patterns", "How to brief AI like a creative director", "Workflow design: before you touch a tool", "Taste → Leverage → Clarity in their own work"],
                                duration: "Weeks 5–10",
                            },
                            {
                                level: "Level 3",
                                name: "Practical Tools",
                                label: "Applied",
                                audience: "Builders · B2B teams post-workshop",
                                outcome: "Members have a working personal AI stack chosen for their use case, not hype.",
                                what: ["Meeting notes, deep research, writing, visual, coding", "No-code workflow automation (n8n, Make, Zapier)", "RAG — grounding AI in your own data", "Tool-by-use-case library (not tool-by-tool)", "Vibe coding — building full apps through natural language"],
                                duration: "Months 3–5",
                            },
                            {
                                level: "Level 4",
                                name: "Agentic Systems",
                                label: "Advanced",
                                audience: "Builders ready to go further · Technical-curious professionals",
                                outcome: "Members can design, deploy, and manage semi-autonomous agent workflows.",
                                what: ["MCP — the industry standard for agentic tool connection", "Reasoning loops: ReAct, Reflection, self-correction", "Multi-agent systems: roles, delegation, coordination", "Persistent memory — agents that improve over time", "Production governance: evaluation, observability, guardian agents"],
                                duration: "Months 6–12",
                            },
                        ].map((l, i) => (
                            <motion.div key={l.level} {...fadeUp(i * 0.08)} className="border border-white/10 p-6 md:p-8 bg-white/[0.04]">
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
                                    <div className="space-y-2">
                                        {l.what.map(w => (
                                            <div key={w} className="flex gap-2 text-sm text-white/60">
                                                <span className="text-white/20 shrink-0">—</span>
                                                <span>{w}</span>
                                            </div>
                                        ))}
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

            {/* ── 05 NETWORK LAYER / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[16vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    NETWORK
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            05 — The Network Layer
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Not just a community.<br />A room of builders.
                        </h2>
                        <p className="text-black/50 mt-6 max-w-2xl text-lg">
                            Research Lab is not just Tiep, Adka, and Sasha. It's a network. SORRYWECAN built real social capital — designers, directors, marketers, business people — across Slovakia and beyond. The platform opens that network as a feature.
                        </p>
                    </motion.div>

                    {/* SORRYWECAN as the foundation */}
                    <motion.div {...fadeUp(0.05)} className="p-8 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03] mb-8">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-4">The Foundation — SORRYWECAN Network</p>
                        <p className="text-black/70 text-sm leading-relaxed mb-4">
                            SORRYWECAN spent years building credibility through taste, aesthetics, and cultural relevance in the Slovak creative and business scene. That's not just a brand — it's a trust layer. Research Lab inherits that trust. Members don't just get content — they get access to a network that was built before the platform existed.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { name: "Roland", role: "Taste curation · SORRYWECAN network", desc: "The cultural lens. Opens every session with context — where are we, what's actually happening, why it matters aesthetically and intellectually." },
                                { name: "Roman Pii Wagner", role: "Advisor · Corporate + Mindshift", desc: "Visual AI, design, creativity lane. Brings the creative industry perspective. Legitimacy for artists and designers entering the space." },
                                { name: "Guest speakers", role: "Per engagement", desc: "Outsourced per topic. Always practitioners — people actually using AI in their specific craft. Never theoretical." },
                            ].map(p => (
                                <div key={p.name} className="p-4 border border-black/10 bg-white/40">
                                    <p className="font-bold text-sm mb-1">{p.name}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-3">{p.role}</p>
                                    <p className="text-xs text-black/50 leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Practitioner Network */}
                    <motion.div {...fadeUp(0.08)} className="mb-8">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-6">Expanding the Network — Builders, Creators, Specialists</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                {
                                    type: "Platform Builders",
                                    example: "Vibe coders generating €200k+/month from AI-native platforms they built in weeks",
                                    value: "Show what's actually possible. Not theory — real numbers, real products, real timelines.",
                                    how: "One build breakdown, one live session, one behind-the-scenes walkthrough.",
                                },
                                {
                                    type: "Domain Specialists",
                                    example: "A lawyer using AI for research. A filmmaker using it in production. A marketer building full automation workflows.",
                                    value: "Credibility in specific lanes. Members trust people who look like them.",
                                    how: "One module or webinar teaching their specific use case. Access + audience in exchange.",
                                },
                                {
                                    type: "AI Architects",
                                    example: "People building multi-agent systems, MCP servers, production workflows for real companies",
                                    value: "The frontier. Level 4 content cannot be taught by people who haven't deployed it.",
                                    how: "Rotating advanced content contributors. Small equity of access and co-promotion.",
                                },
                                {
                                    type: "Creative Operators",
                                    example: "Designers, directors, brand builders using AI as a creative collaborator — not a shortcut",
                                    value: "The SORRYWECAN angle. AI that has taste. This is the differentiation from every other AI course.",
                                    how: "Guest sessions on creative AI. Connects the aesthetic side to the technical side.",
                                },
                            ].map((p, i) => (
                                <motion.div key={p.type} {...fadeUp(i * 0.07)} className="p-6 border border-black/10">
                                    <p className="font-syne font-bold text-lg tracking-tight mb-2">{p.type}</p>
                                    <p className="text-xs text-black/40 italic mb-4">{p.example}</p>
                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] block mb-1">What they bring</span>
                                            <p className="text-sm text-black/60">{p.value}</p>
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 block mb-1">How they contribute</span>
                                            <p className="text-sm text-black/60">{p.how}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Core Contributor Tier */}
                    <motion.div {...fadeUp(0.12)} className="p-6 bg-[#0d0d0d] text-white">
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">Membership Tier</p>
                                <p className="font-syne font-bold text-2xl tracking-tight">Core Contributor</p>
                            </div>
                            <span className="text-2xl font-syne font-bold text-[#0047BB]">Free</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Full platform access in exchange for active, meaningful contribution. For builders, educators, and practitioners who bring real value — not just content consumers, but people who make the community better by being in it.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">What they get</p>
                                {["Full access — same as Founding Member", "Guest educator slots — teach their lane", "Co-promotion and audience exposure", "Early access to new platform features"].map(i => (
                                    <div key={i} className="flex gap-2 text-sm text-white/50 mb-1">
                                        <span className="text-[#0047BB]">—</span>{i}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">The deal</p>
                                <p className="text-sm text-white/50 leading-relaxed">Max 5–8 in founding phase. Teach one webinar or record one module. Contribute actively in the Lounge. No payment in Q2 — access + audience exchange. Best performers get ongoing collaboration.</p>
                            </div>
                        </div>
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
                            06 — Inside Circle
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Nine spaces.<br />One ecosystem.
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        {[
                            { phase: "Launch", space: "Welcome & Orientation", desc: "First stop. How the community works, who's here, norms, navigation. The Quick Win task lives here: what you're automating in week one.", moat: false },
                            { phase: "Launch", space: "Component Library", desc: "The moat. Pre-built agent templates, workflow blueprints, prompt frameworks, automation recipes. Leaving = losing access to what's running your workflows.", moat: true },
                            { phase: "Launch", space: "Mindshift — How to Think", desc: "The intellectual core. Thinking frameworks, mental models, the Taste → Leverage → Clarity curriculum. Not tool tutorials — the thinking that makes all tools more useful.", moat: false },
                            { phase: "Launch", space: "Tools & Prompts Library", desc: "Practical and growing. Organised by use case, not by tool name. Updated weekly. Searchable. 20+ prompts on launch.", moat: false },
                            { phase: "Launch", space: "The Radar — What's New", desc: "Weekly digest: what matters this week and why. Curated signal from the noise. Discussion thread below each post.", moat: false },
                            { phase: "Launch", space: "Member Lounge", desc: "Where community lives. Intros, questions, wins, asks. What people post here = what gets built next. The pulse of the platform.", moat: false },
                            { phase: "Month 2", space: "Live Sessions & Archive", desc: "Bi-weekly webinars live here. Public joins free. Recording archived in Circle — members only. Rotation: Tiep, Roman, guest educators.", moat: false },
                            { phase: "Month 2", space: "Events & Co-working", desc: "Physical events, conference access, co-working sessions, partner benefits. Being a member means access to the ecosystem — not just content.", moat: false },
                            { phase: "Q3", space: "Collective Intelligence AI", desc: "Not one person's brain — the network's. Trained on the best frameworks, methodologies, and thinking from all the builders and practitioners inside Research Lab. A living knowledge base that grows as the network grows. 24/7 access to collective RL intelligence.", moat: true },
                        ].map((s, i) => (
                            <motion.div key={s.space} {...fadeUp(i * 0.05)} className={`p-5 border ${s.moat ? "border-[#0047BB]/40 bg-[#0047BB]/[0.06]" : "border-white/[0.07]"}`}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/30">{s.phase}</span>
                                    {s.moat && <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5">Moat</span>}
                                </div>
                                <p className="font-syne font-bold text-lg tracking-tight mb-2">{s.space}</p>
                                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp(0.1)} className="p-6 border border-white/[0.07] bg-white/[0.02]">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-4">Why Circle Over Everything Else</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/50">
                            <div><span className="text-white/80 font-medium block mb-1">White-labeling</span>Full custom domain, branding, CSS. Looks like RL, not Circle.</div>
                            <div><span className="text-white/80 font-medium block mb-1">Spaces model</span>Topic-specific segmentation. Scales beyond 1,000 members cleanly.</div>
                            <div><span className="text-white/80 font-medium block mb-1">Native AI features</span>Feed summarizers, automated check-ins. Built-in livestreaming. Flexible billing tiers.</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 07 WORKSHOP BRIDGE / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[18vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    BRIDGE
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">
                            07 — Workshop → Circle Bridge
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            The highest-trust moment<br />we have with a stranger.
                        </h2>
                        <p className="text-white/50 mt-6 max-w-2xl">
                            A corporate workshop is 2 days, in a room, transformative. That trust cannot go to waste. The bridge from workshop attendee to Circle member is the most important conversion we design.
                        </p>
                    </motion.div>
                    <div className="space-y-3 mb-12">
                        {[
                            { step: "End of workshop", action: "Every attendee gets a personal invitation — 30 days free inside Circle. No pitch. Just: 'there's more here if you want it. The thinking continues.'" },
                            { step: "Day 7", action: "Email: 'What was your biggest takeaway?' with a direct link to the Level 2 module that goes deeper on their answer. Personalised, not automated-feeling." },
                            { step: "Day 14", action: "Email: 'There's a webinar this week that picks up where Day 1 left off.' Direct link. One click to join live or watch the replay." },
                            { step: "Day 28", action: "30-day free access expires. Offer founding member pricing for 48 hours. One email. No pressure, no countdown timer, no fake urgency." },
                            { step: "Day 30", action: "Follow-up: 'No problem if it's not the right time. Here's The Radar — free, always.' Keeps them warm. They come back when they're ready." },
                        ].map((b, i) => (
                            <motion.div key={b.step} {...fadeUp(i * 0.07)} className="flex gap-4 md:gap-8 p-5 border border-white/10 bg-white/[0.04]">
                                <div className="w-20 md:w-28 shrink-0">
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB]">{b.step}</p>
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed">{b.action}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp(0.1)} className="p-6 border border-white/10">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-3">Alumni Pricing</p>
                        <p className="text-white/60 text-sm leading-relaxed">Corporate workshop alumni get founding member rate in Circle — €39/month, locked. This makes the workshop feel like an entry point to an ongoing relationship, not a one-off transaction. The team grows with the platform.</p>
                    </motion.div>
                </div>
            </section>

            {/* ── 08 MONETIZATION / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[20vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    €
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            08 — Monetization Stack
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Four layers.<br />One direction: up.
                        </h2>
                    </motion.div>
                    <div className="space-y-3 mb-12">
                        {[
                            { tier: "Founding Members", price: "€39/mo", lock: "Locked forever", timeline: "Now → June 2026", highlight: true, who: "Personal invite only. Workshop alumni, warm network. 20 spots maximum.", what: ["Full curriculum (Levels 1–4 as built)", "Component Library + The Radar + Lounge", "Physical event priority access", "Founding badge — permanent"] },
                            { tier: "General Membership", price: "€59/mo", lock: "Open enrollment", timeline: "September 2026", highlight: false, who: "Public launch. Found through content, webinars, The Radar.", what: ["Everything founding members have", "Collective Intelligence AI access (Q3)", "Quarterly Premium Challenges"] },
                            { tier: "Premium Challenges", price: "€97–197", lock: "One-time sprint", timeline: "Q3 2026+", highlight: false, who: "Members and non-members. 14–21 days. One outcome. One workflow built.", what: ["70–80% completion vs 3–5% for video courses", "Converts passive members → active participants", "Highest churn-prevention mechanism"] },
                            { tier: "Corporate Workshop", price: "€690/person", lock: "B2B · Min 10 people", timeline: "Q2 Active", highlight: false, who: "Teams of 10–15. Two days. Alumni → Circle at founding rate.", what: ["Day 1: Mindshift thinking", "Day 2: Practical tools + workflows", "→ €800+ after first delivery + testimonial"] },
                        ].map((t, i) => (
                            <motion.div key={t.tier} {...fadeUp(i * 0.07)} className={`p-6 border ${t.highlight ? "border-2 border-[#0047BB]/40 bg-[#0047BB]/[0.03]" : "border-black/10"}`}>
                                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                                    <div>
                                        <div className="flex items-center gap-3 flex-wrap mb-1">
                                            <p className="font-syne font-bold text-xl tracking-tight">{t.tier}</p>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] border border-black/20 px-2 py-0.5 text-black/40">{t.lock}</span>
                                            <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-black/30">{t.timeline}</span>
                                        </div>
                                        <p className="text-sm text-black/50">{t.who}</p>
                                    </div>
                                    <p className="font-syne font-bold text-3xl tracking-tight text-[#0047BB] shrink-0">{t.price}</p>
                                </div>
                                <div className="h-px bg-black/10 mb-4" />
                                <div className="flex flex-wrap gap-2">
                                    {t.what.map(w => (
                                        <span key={w} className="text-[10px] font-code-brand text-black/40 border border-black/10 px-2 py-1">{w}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10">
                        {[
                            { label: "15 founding members", value: "€585/mo" },
                            { label: "50 general members", value: "€2,950/mo" },
                            { label: "2 corporate workshops", value: "~€14–20k" },
                            { label: "Q4 MRR ceiling", value: "€5–8k" },
                        ].map(s => (
                            <div key={s.label} className="bg-[#e8e1da] p-5 text-center">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">{s.label}</p>
                                <p className="font-syne font-bold text-2xl text-[#0047BB]">{s.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 09 QUICK WIN / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    WIN
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            09 — The Quick Win Principle
                        </span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter">
                            Month one decides everything.
                        </h2>
                        <p className="text-white/40 mt-6 max-w-2xl">
                            If a member doesn't save time or remove friction within 30 days, the membership becomes a discretionary expense — first thing cut in a budget review. Not because they don't believe in it. Because it never became real.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        <motion.div {...fadeUp(0.05)} className="p-8 border border-[#0047BB]/30 bg-[#0047BB]/[0.06]">
                            <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-4">Week One Design</p>
                            <p className="font-syne font-bold text-xl tracking-tight mb-4">Pick one thing you do manually 3× a week. Automate it.</p>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">The first thing a new member sees is not a welcome video or a philosophy. It is a single task with a single outcome. By end of week one, it should be running.</p>
                            {["Meeting notes — automated and filed", "Weekly report draft from data", "Content repurposing — one post becomes five", "Email triage — sorted and responded to", "Research digest — curated and delivered"].map(w => (
                                <div key={w} className="flex gap-2 text-sm text-white/50 mb-1">
                                    <span className="text-[#0047BB]">—</span><span>{w}</span>
                                </div>
                            ))}
                        </motion.div>
                        <div className="space-y-3">
                            {[
                                { signal: "Month 1 churn", read: "Content/value gap, not pricing. Find what didn't connect. Fix it." },
                                { signal: "Lounge activity", read: "What they post = what to build next. The community writes the roadmap." },
                                { signal: "Component Library usage", read: "Members deploying templates = members who can't cancel. Track from day one." },
                                { signal: "Who refers who", read: "Referral patterns reveal your real audience — not who you assumed, who it actually is." },
                            ].map((s, i) => (
                                <motion.div key={s.signal} {...fadeUp(0.07 + i * 0.05)} className="p-5 border border-white/[0.07]">
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-1">Watch</p>
                                    <p className="font-bold text-sm mb-2">{s.signal}</p>
                                    <p className="text-sm text-white/40">{s.read}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-[#0d0d0d] text-white border-t border-white/[0.06] px-8 md:px-16 py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="font-syne font-bold text-xl tracking-tighter">RESEARCH<span className="text-[#0047BB]">LAB</span></p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/20 mt-1">Platform Strategy · 2026</p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/10 mt-0.5">SORRYWECAN // WHERE HUMANS & AI CO-EVOLVE</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "The Bible", href: "/lab/context" },
                            { label: "Q2 Overview", href: "/lab/q2-overview" },
                            { label: "Corporate", href: "/lab/corporate" },
                            { label: "Platform Ops", href: "/lab/q2-platform" },
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
