"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"
import { LabDocNav } from "@/components/navigation/lab-doc-nav"

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
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[22vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    PLATFORM
                </span>
                <div className="flex items-center justify-between px-8 md:px-16 pt-36 md:pt-40 pb-6">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">Research Lab — Platform Strategy</span>
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">Circle · 2026</span>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pb-24">
                    <motion.div {...fadeUp(0.1)} className="mb-12">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-6">01 — Vision</span>
                        <h1 className="font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.92] mb-8">
                            Not a course.<br />A living network.
                        </h1>
                        <p className="text-white/50 text-xl max-w-xl leading-relaxed">
                            Structured curriculum. Real builders. An asset library you can't leave behind.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-px bg-white/10 max-w-2xl">
                        {[
                            { label: "Beginners", sub: "Mindshift first" },
                            { label: "Professionals", sub: "Frameworks + tools" },
                            { label: "B2B Teams", sub: "Workshop → Circle" },
                        ].map(t => (
                            <div key={t.label} className="bg-white/[0.06] px-5 py-4">
                                <p className="font-cabinet font-bold text-lg">{t.label}</p>
                                <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/30 mt-1">{t.sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="h-px bg-white/10 mx-8 md:mx-16" />
                <div className="px-8 md:px-16 py-5 flex items-center gap-8">
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Taste → Leverage → Clarity</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">Mindset before tools</span>
                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest hidden md:block">Architecture over apps</span>
                </div>
            </section>

            {/* ── 02 AUDIENCES / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 top-0 font-cabinet font-bold text-[20vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">WHO</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">02 — Three Audiences</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">One platform.<br />Three entry points.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
                        {[
                            {
                                label: "The Curious",
                                tag: "Total Beginners",
                                lines: ["Never used AI seriously.", "Feels left behind.", "Enters through content or word of mouth."],
                                hook: "Week one: one task automated.",
                                color: "",
                            },
                            {
                                label: "The Builder",
                                tag: "Professionals",
                                lines: ["Uses AI casually.", "Has a specific problem to solve.", "Wants tools that work together."],
                                hook: "One workflow that changes their daily rhythm.",
                                color: "border-l border-r border-black/10 bg-[#0047BB]/[0.03]",
                            },
                            {
                                label: "The Team",
                                tag: "B2B · Corporate",
                                lines: ["10–50 people.", "Bought licences. Nobody uses them.", "Needs ROI they can show leadership."],
                                hook: "Workshop alumni → Circle founding rate.",
                                color: "",
                            },
                        ].map((a, i) => (
                            <motion.div key={a.label} {...fadeUp(i * 0.1)} className={`p-8 ${a.color}`}>
                                <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-3">{a.tag}</span>
                                <p className="font-cabinet font-bold text-3xl tracking-tight mb-6">{a.label}</p>
                                <div className="h-px bg-black/10 mb-6" />
                                <div className="space-y-1 mb-8">
                                    {a.lines.map(l => (
                                        <p key={l} className="text-sm text-black/50">{l}</p>
                                    ))}
                                </div>
                                <div className="border-l-2 border-[#0047BB] pl-4">
                                    <p className="text-sm font-medium">{a.hook}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 03 FRAMEWORKS / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute left-0 bottom-0 font-cabinet font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">CORE</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">03 — The Frameworks</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">What we own.<br />How every session moves.</h2>
                    </motion.div>

                    {/* The Arc — clean and visual */}
                    <motion.div {...fadeUp(0.08)} className="mb-16">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20 mb-6">The Teaching Arc</p>
                        <div className="grid grid-cols-3 gap-0 border border-white/[0.07]">
                            {[
                                { label: "Taste", owner: "Roland", desc: "Fear → curiosity. Open the mind before anything else." },
                                { label: "Leverage", owner: "Tiep", desc: "The thinking frameworks. Tool-user → system-thinker." },
                                { label: "Clarity", owner: "Roman", desc: "Synthesis. Visual. What to take and where to go next." },
                            ].map((s, i) => (
                                <div key={s.label} className={`p-6 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
                                    <p className="font-cabinet font-bold text-4xl tracking-tighter mb-2">{s.label}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-4">{s.owner}</p>
                                    <p className="text-white/40 text-sm">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Five frameworks — tight */}
                    <div className="space-y-0">
                        {[
                            { n: "01", name: "Mindshift First", line: "The mental model before the tool. Everything else fails without this.", who: "All levels" },
                            { n: "02", name: "Practical Hook", line: "Lead with results. Then reveal the depth. This is the correct sequence.", who: "Beginners → Builders" },
                            { n: "03", name: "Architecture Over Apps", line: "Tools die. Logic survives. Teach systems, not buttons.", who: "Builders → Corporate" },
                            { n: "04", name: "The Intelligence Filter", line: "Curation is the product. SORRYWECAN aesthetic applied to AI signal.", who: "All levels" },
                            { n: "05", name: "Human-Centric AI", line: "Humans bring taste and judgment. AI brings scale. Design that relationship.", who: "B2B · Corporate" },
                        ].map((f, i) => (
                            <motion.div key={f.n} {...fadeUp(i * 0.06)} className="flex items-baseline gap-8 py-6 border-b border-white/[0.06] last:border-0">
                                <span className="text-[11px] font-code-brand text-white/15 w-8 shrink-0">{f.n}</span>
                                <p className="font-cabinet font-bold text-xl tracking-tight flex-1">{f.name}</p>
                                <p className="text-white/40 text-sm flex-[2] hidden md:block">{f.line}</p>
                                <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/20 shrink-0 hidden lg:block">{f.who}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 04 CURRICULUM / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-cabinet font-bold text-[18vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">LEVELS</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">04 — Curriculum</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">Four levels.<br />One direction: deeper.</h2>
                    </motion.div>
                    <div className="space-y-3">
                        {[
                            {
                                n: "01", name: "The Mindshift", label: "Foundation",
                                outcome: "AI goes from threatening to navigable.",
                                items: ["What AI actually is — and isn't", "Fear → curiosity → leverage", "First win: one manual task automated"],
                                who: "Total beginners",
                            },
                            {
                                n: "02", name: "Thinking Frameworks", label: "Intermediate",
                                outcome: "Decompose any problem. Design a solution.",
                                items: ["Problem decomposition", "Chain of thought + reasoning patterns", "Briefing AI like a creative director"],
                                who: "Post-mindshift",
                            },
                            {
                                n: "03", name: "Practical Tools", label: "Applied",
                                outcome: "A working personal AI stack. Chosen by use case, not hype.",
                                items: ["Meeting notes, research, writing, visual, coding", "No-code automation: n8n, Make, Zapier", "Vibe coding — build full apps in natural language"],
                                who: "Builders · B2B alumni",
                            },
                            {
                                n: "04", name: "Agentic Systems", label: "Advanced",
                                outcome: "Design, deploy, and manage autonomous agent workflows.",
                                items: ["MCP — the industry standard for agent tool connection", "Multi-agent systems: roles, delegation, memory", "Production: evaluation, observability, governance"],
                                who: "Technical-ready",
                            },
                        ].map((l, i) => (
                            <motion.div key={l.n} {...fadeUp(i * 0.08)} className="border border-white/10 p-6 md:p-8 bg-white/[0.04] grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 items-start">
                                <div className="flex items-center gap-4 md:block">
                                    <div className="w-10 h-10 bg-white text-[#0047BB] flex items-center justify-center text-[11px] font-bold shrink-0">{i + 1}</div>
                                    <div className="md:mt-4">
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] border border-white/20 px-2 py-0.5 text-white/50 block w-fit">{l.label}</span>
                                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20 mt-2">{l.who}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-cabinet font-bold text-2xl tracking-tight mb-4">{l.name}</p>
                                    <div className="space-y-1">
                                        {l.items.map(it => (
                                            <p key={it} className="text-sm text-white/50">— {it}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="border border-white/10 p-4">
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">Outcome</p>
                                    <p className="text-white/80 text-sm leading-relaxed">{l.outcome}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 05 NETWORK / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[14vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">NETWORK</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">05 — The Network</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">Learners look up.<br />Builders teach down.</h2>
                        <p className="text-black/40 mt-6 max-w-xl">
                            SORRYWECAN spent years building trust across Slovakia's creative and business scene. Research Lab opens that network as a platform feature.
                        </p>
                    </motion.div>

                    {/* Core team as foundation */}
                    <motion.div {...fadeUp(0.05)} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10 mb-8">
                        {[
                            { name: "Roland", role: "Taste · SORRYWECAN network", desc: "Opens every session. The cultural and aesthetic lens." },
                            { name: "Roman Pii Wagner", role: "Advisor · Visual AI", desc: "Creative industry perspective. Visual frameworks. Synthesis." },
                            { name: "Tiep Le Dinh", role: "Vision · Face · Product", desc: "The thinking behind the tool is the tool." },
                        ].map((p, i) => (
                            <div key={p.name} className={`p-6 ${i < 2 ? "border-r border-black/10" : ""}`}>
                                <p className="font-cabinet font-bold text-xl tracking-tight mb-1">{p.name}</p>
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-4">{p.role}</p>
                                <p className="text-sm text-black/40">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Practitioner types */}
                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-4">Builders We Bring In</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {[
                            { type: "Platform Builders", example: "Vibe coders with €200k+/month from AI products", what: "Real numbers. Real timelines. What's actually possible." },
                            { type: "Domain Specialists", example: "Lawyers, filmmakers, marketers using AI in their lane", what: "Credibility where it counts. Members trust people who look like them." },
                            { type: "AI Architects", example: "Multi-agent systems and MCP production deployments", what: "The Level 4 frontier. Can only be taught by people who've deployed it." },
                            { type: "Creative Operators", example: "Designers and directors using AI with taste", what: "The SORRYWECAN angle. AI that has aesthetic intelligence." },
                        ].map((p, i) => (
                            <motion.div key={p.type} {...fadeUp(i * 0.07)} className="p-5 border border-black/10">
                                <p className="font-cabinet font-bold text-lg tracking-tight mb-1">{p.type}</p>
                                <p className="text-xs text-black/30 italic mb-4">{p.example}</p>
                                <p className="text-sm text-black/60">{p.what}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Core Contributor */}
                    <motion.div {...fadeUp(0.12)} className="p-6 bg-[#0d0d0d] text-white flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                            <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-2">Membership Tier</p>
                            <p className="font-cabinet font-bold text-2xl tracking-tight mb-2">Core Contributor</p>
                            <p className="text-white/40 text-sm">Full access in exchange for real contribution. Max 5–8 in founding phase. Teach one session, contribute actively, get the audience.</p>
                        </div>
                        <div className="shrink-0">
                            <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-1">Price</p>
                            <p className="font-cabinet font-bold text-4xl">Free</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 06 CIRCLE / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute left-0 top-0 font-cabinet font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">CIRCLE</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">06 — Inside Circle</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">Nine spaces.<br />One ecosystem.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] mb-8">
                        {[
                            { phase: "Launch", name: "Welcome & Orientation", note: "The Quick Win task lives here." },
                            { phase: "Launch", name: "Component Library", note: "The moat. Templates, blueprints, automations.", highlight: true },
                            { phase: "Launch", name: "Mindshift — How to Think", note: "The intellectual core. Not tool tutorials." },
                            { phase: "Launch", name: "Tools & Prompts", note: "Organised by use case. Growing weekly." },
                            { phase: "Launch", name: "The Radar", note: "Weekly digest + discussion thread." },
                            { phase: "Launch", name: "Member Lounge", note: "What people post here = what gets built next." },
                            { phase: "Month 2", name: "Live Sessions & Archive", note: "Webinars live and recorded. Members only." },
                            { phase: "Month 2", name: "Events & Co-working", note: "Physical events, conferences, partner access." },
                            { phase: "Q3", name: "Collective Intelligence AI", note: "The network's best frameworks. Always on.", highlight: true },
                        ].map((s, i) => (
                            <motion.div key={s.name} {...fadeUp(i * 0.04)} className={`p-5 ${s.highlight ? "bg-[#0047BB]/[0.12] border border-[#0047BB]/30" : "bg-[#0d0d0d]"}`}>
                                <span className="text-[8px] font-code-brand uppercase tracking-[0.2em] text-white/20 block mb-2">{s.phase}</span>
                                <p className="font-bold text-sm mb-2">{s.name}</p>
                                <p className="text-white/30 text-xs">{s.note}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp(0.1)} className="p-5 border border-white/[0.07]">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20 mb-2">The Moat</p>
                        <p className="text-white/50 text-sm">Component Library + Collective Intelligence AI = infrastructure members run their work on. Cancelling means losing the tools. That's not lock-in by force — it's value by design.</p>
                    </motion.div>
                </div>
            </section>

            {/* ── 07 BRIDGE / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[18vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">BRIDGE</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">07 — Workshop → Circle</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">The highest-trust moment<br />we have with a stranger.</h2>
                    </motion.div>
                    <div className="space-y-px">
                        {[
                            { step: "End of workshop", action: "Personal invitation — 30 days free. No pitch. Just: 'the thinking continues.'" },
                            { step: "Day 7", action: "Email: 'What was your biggest takeaway?' + link to the Level 2 module that goes deeper." },
                            { step: "Day 14", action: "'There's a webinar this week that picks up where Day 1 left off.' One click." },
                            { step: "Day 28", action: "Founding member rate, 48 hours. One email. No fake urgency." },
                            { step: "Day 30", action: "'No problem. Here's The Radar — free, always.' They come back when they're ready." },
                        ].map((b, i) => (
                            <motion.div key={b.step} {...fadeUp(i * 0.07)} className="flex gap-6 p-5 border border-white/10 bg-white/[0.04]">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-[#0047BB] bg-white px-3 py-2 h-fit shrink-0 w-28 text-center">{b.step}</p>
                                <p className="text-sm text-white/60 leading-relaxed self-center">{b.action}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 08 MONETIZATION / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[20vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">€</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">08 — Monetization</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">Four layers.<br />One direction: up.</h2>
                    </motion.div>
                    <div className="space-y-3">
                        {[
                            { tier: "Founding Members", price: "€39/mo", tag: "Locked forever · 20 spots · June 2026", note: "Personal invite only. Alumni + warm network. Rate locked for life." },
                            { tier: "General Membership", price: "€49/mo", tag: "Open enrollment · September 2026", note: "Public launch. Everything founding members have + Collective Intelligence AI (Q3).", highlight: true },
                            { tier: "Premium Challenges", price: "€97–197", tag: "One-time sprint · Q3+", note: "14–21 days. One outcome built. 70–80% completion rate. Highest retention mechanism." },
                            { tier: "Corporate Workshop", price: "€690–1,000/seat", tag: "B2B · Min 10 people · Q2 Active", note: "Two days. Alumni get founding rate in Circle. Raise to €800–1,000 after first testimonial." },
                        ].map((t, i) => (
                            <motion.div key={t.tier} {...fadeUp(i * 0.07)} className={`flex items-center justify-between gap-6 p-6 border flex-wrap ${t.highlight ? "border-2 border-[#0047BB]/40 bg-[#0047BB]/[0.03]" : "border-black/10"}`}>
                                <div className="flex-1 min-w-[200px]">
                                    <p className="font-cabinet font-bold text-xl tracking-tight mb-1">{t.tier}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-2">{t.tag}</p>
                                    <p className="text-sm text-black/50">{t.note}</p>
                                </div>
                                <p className="font-cabinet font-bold text-3xl md:text-4xl text-[#0047BB] shrink-0">{t.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 09 QUICK WIN / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">WIN</span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">09 — Retention</span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">Month one<br />decides everything.</h2>
                        <p className="text-white/40 mt-6 max-w-xl text-lg">
                            No quick win in 30 days = discretionary expense = first thing cut. Not because they don't believe in it — because it never became real.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] mb-8">
                        {[
                            { title: "Quick Win", desc: "One automation in week one. Turns the abstract into the real." },
                            { title: "Asset Access", desc: "Component Library = infrastructure. Cancel = lose what's running." },
                            { title: "Community Pull", desc: "The Lounge, the webinars, the challenges. People stay for people." },
                        ].map(s => (
                            <div key={s.title} className="bg-[#0d0d0d] p-6">
                                <p className="font-cabinet font-bold text-2xl tracking-tight text-[#0047BB] mb-3">{s.title}</p>
                                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
                        {[
                            { signal: "Month 1 churn", read: "Value gap, not pricing" },
                            { signal: "Lounge posts", read: "Your next content topic" },
                            { signal: "Library usage", read: "Who can't cancel" },
                            { signal: "Referral patterns", read: "Your real audience" },
                        ].map(s => (
                            <div key={s.signal} className="bg-[#0d0d0d] p-5">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20 mb-2">Watch</p>
                                <p className="font-bold text-sm mb-1">{s.signal}</p>
                                <p className="text-xs text-white/30">{s.read}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <LabDocNav
                prev={{ label: "Content", href: "/lab/content" }}
                next={{ label: "Economics", href: "/lab/economics" }}
            />

            {/* ── FOOTER ── */}
            <footer className="bg-[#0d0d0d] text-white border-t border-white/[0.06] px-8 md:px-16 py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="font-cabinet font-bold text-xl tracking-tighter">RESEARCH<span className="text-[#0047BB]">LAB</span></p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/20 mt-1">Platform Strategy · 2026</p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/10 mt-0.5">SORRYWECAN // WHERE HUMANS & AI CO-EVOLVE</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "The Bible", href: "/lab/context" },
                            { label: "Q2 Overview", href: "/lab/q2-overview" },
                            { label: "Corporate", href: "/lab/corporate" },
                            { label: "Content", href: "/lab/content" },
                            { label: "Economics", href: "/lab/economics" },
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
