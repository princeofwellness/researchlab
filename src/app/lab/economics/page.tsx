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

export default function EconomicsPage() {
    return (
        <div className="font-sans-brand">
            <TopNav />
            <LabStrategyNav />

            {/* ── 01 HERO / blue ── */}
            <section className="relative min-h-screen bg-[#0047BB] text-white overflow-hidden flex flex-col" style={grid}>
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[20vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    30K
                </span>
                <div className="flex items-center justify-between px-8 md:px-16 pt-36 md:pt-40 pb-6">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">
                        Research Lab — Economics
                    </span>
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">
                        Internal · Confidential
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pb-24">
                    <motion.div {...fadeUp(0.1)}>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-6">
                            01 — The Target
                        </span>
                        <h1 className="font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
                            €30,000/month<br />by Q4 2026.
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                            This is achievable. A guy building community around one niche with no AI angle has 2,000 paying members at €50/month — that's €100k MRR. We have AI, B2B, SORRYWECAN social capital, and a practitioner network. The math is clear. The path is clear. What follows is the breakdown.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-px bg-white/10 max-w-2xl">
                        {[
                            { label: "Q2 Target", value: "€14–20k", note: "2 corporate workshops" },
                            { label: "Q3 Target", value: "€20–25k", note: "Platform + B2B mix" },
                            { label: "Q4 Target", value: "€30k+", note: "Full flywheel active" },
                        ].map(s => (
                            <div key={s.label} className="bg-white/[0.06] p-5 text-center">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-1">{s.label}</p>
                                <p className="font-cabinet font-bold text-2xl">{s.value}</p>
                                <p className="text-[9px] font-code-brand text-white/30 mt-1">{s.note}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 02 B2B MATH / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[16vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    B2B
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            02 — B2B Revenue Math
                        </span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">
                            €1,000/seat.<br />10 seats minimum.
                        </h2>
                        <p className="text-black/50 mt-6 max-w-2xl">
                            €690 is the Q2 validation price. After the first delivery and testimonial, €1,000/seat is the move. The Tatra banka benchmark (€20k for a basic 3-day tools overview) means €10k for a two-day mindshift transformation is still significantly under market — while delivering more.
                        </p>
                    </motion.div>

                    {/* Unit economics */}
                    <motion.div {...fadeUp(0.05)} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
                        {[
                            { label: "Price per seat", value: "€1,000", sub: "Post-testimonial pricing" },
                            { label: "Min group size", value: "10 seats", sub: "€10,000 minimum per workshop" },
                            { label: "Max group size", value: "15 seats", sub: "€15,000 per workshop" },
                        ].map(s => (
                            <div key={s.label} className="p-6 border border-black/10 text-center">
                                <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-2">{s.label}</p>
                                <p className="font-cabinet font-bold text-4xl text-[#0047BB] mb-1">{s.value}</p>
                                <p className="text-xs text-black/40">{s.sub}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Paths */}
                    <motion.div {...fadeUp(0.08)} className="mb-4">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-6">B2B Paths to €30k/month</p>
                        <div className="space-y-3">
                            {[
                                {
                                    path: "Path A — B2B Only",
                                    monthly: "3 workshops/month",
                                    math: "3 × €10,000",
                                    result: "€30,000/mo",
                                    note: "Aggressive. Needs pipeline of at least 6 conversations at any time. Doable in Q4 with strong referrals.",
                                    feasibility: "Stretch",
                                    color: "border-black/10",
                                },
                                {
                                    path: "Path B — B2B + Platform",
                                    monthly: "2 workshops/month + 200 members",
                                    math: "€20k + 200 × €49",
                                    result: "€29,800/mo",
                                    note: "The realistic Q4 scenario. Two workshops a month is manageable. 200 paying members by Q4 is achievable if Circle launches June and content flywheel is running.",
                                    feasibility: "Realistic",
                                    color: "border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]",
                                },
                                {
                                    path: "Path C — Platform Heavy",
                                    monthly: "1 workshop/month + 400 members",
                                    math: "€10k + 400 × €49",
                                    result: "€29,600/mo",
                                    note: "Lower B2B pressure, higher platform dependency. Works if content machine is running hard from Q2. More scalable long-term.",
                                    feasibility: "Optimistic",
                                    color: "border-black/10",
                                },
                            ].map((p, i) => (
                                <motion.div key={p.path} {...fadeUp(i * 0.07)} className={`p-6 border ${p.color}`}>
                                    <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                                        <div>
                                            <p className="font-cabinet font-bold text-xl tracking-tight">{p.path}</p>
                                            <p className="text-sm text-black/40 mt-1">{p.monthly}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-1">{p.math}</p>
                                            <p className="font-cabinet font-bold text-3xl text-[#0047BB]">{p.result}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <p className="text-sm text-black/50 leading-relaxed flex-1">{p.note}</p>
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] border border-black/20 px-2 py-1 text-black/40 shrink-0">{p.feasibility}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(0.12)} className="p-6 bg-[#0d0d0d] text-white">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-3">The Honest Take</p>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Path B is the target. Two corporate workshops a month is not a grind — it's one new conversation per week closing into a booking. The pipeline already exists in SORRYWECAN's network. Five active B2B conversations at any time. Two close per month. The platform MRR compounds quietly underneath while B2B pays the bills.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── 03 PLATFORM CEILING / dark ── */}
            <section className="relative bg-[#0d0d0d] text-white overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute left-0 bottom-0 font-cabinet font-bold text-[14vw] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    1000
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            03 — Platform Ceiling
                        </span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">
                            1,000 members.<br />€49/month.<br />That's €49k MRR.
                        </h2>
                        <p className="text-white/40 mt-6 max-w-2xl">
                            Not the Q4 target — the medium-term ceiling that proves the model. If someone with one niche and no AI angle can build 2,000 paying members at €50/month doing marketing only, Research Lab — with AI, B2B clients feeding alumni, a practitioner network, and SORRYWECAN — can get to 1,000.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                        {[
                            { members: "15", price: "€39", mrr: "€585", label: "June — Founding cohort", note: "Personal invitations. Workshop alumni. Locked rate forever." },
                            { members: "50", price: "€49", mrr: "€2,450", label: "August — Early growth", note: "Content flywheel running. The Radar building the list." },
                            { members: "150", price: "€49", mrr: "€7,350", label: "October — Post-launch", note: "September open enrollment + first challenges converting." },
                            { members: "300", price: "€49", mrr: "€14,700", label: "December — Q4", note: "B2B alumni feeding in. Network effect starting. Referrals active." },
                            { members: "600", price: "€49", mrr: "€29,400", label: "Mid-2027", note: "Collective Intelligence AI live. Premium tier. Challenges quarterly." },
                            { members: "1,000", price: "€49", mrr: "€49,000", label: "End of 2027", note: "Full flywheel. That's where €100k+ total revenue becomes real." },
                        ].map((s, i) => (
                            <motion.div key={s.label} {...fadeUp(i * 0.06)} className={`p-5 border ${i === 3 ? "border-[#0047BB]/40 bg-[#0047BB]/[0.06]" : "border-white/[0.07]"}`}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-white/30">{s.label}</span>
                                    {i === 3 && <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5">Q4 Target</span>}
                                </div>
                                <div className="flex items-baseline gap-3 mb-2">
                                    <p className="font-cabinet font-bold text-3xl">{s.members}</p>
                                    <p className="text-white/30 text-sm">members × {s.price}</p>
                                    <p className="font-cabinet font-bold text-xl text-[#0047BB] ml-auto">{s.mrr}</p>
                                </div>
                                <p className="text-white/30 text-xs">{s.note}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fadeUp(0.12)} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
                        {[
                            { label: "What gets people in", value: "Content + B2B alumni + referrals", desc: "The Radar builds the list. Workshop alumni get founding rate. Every member who succeeds refers someone." },
                            { label: "What keeps them", value: "Asset Library + network + challenges", desc: "Component Library they're running their business on. Practitioners they can't access elsewhere. Quarterly sprints they actually finish." },
                            { label: "What makes them upgrade", value: "Collective Intelligence AI + premium tiers", desc: "Once the network AI is live, the platform becomes a tool, not just a community. Tool access = stickiest retention." },
                        ].map(s => (
                            <div key={s.label} className="bg-[#0d0d0d] p-6">
                                <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20 mb-2">{s.label}</p>
                                <p className="font-bold text-sm text-white/80 mb-3">{s.value}</p>
                                <p className="text-xs text-white/30 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 04 OWNERSHIP / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden py-32 px-8 md:px-16" style={grid}>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 font-cabinet font-bold text-[16vw] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                    EQUITY
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40 block mb-4">
                            04 — Ownership Structure
                        </span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">
                            How we divide<br />the pie.
                        </h2>
                        <p className="text-white/50 mt-6 max-w-2xl">
                            SORRYWECAN as a company holds a proportional stake — it's the brand, the network, the infrastructure that Research Lab operates under. The remainder is divided between founders and potential partners. Below are the models worth considering.
                        </p>
                    </motion.div>

                    {/* The fixed part */}
                    <motion.div {...fadeUp(0.05)} className="p-6 border border-white/10 bg-white/[0.05] mb-8">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/40 mb-4">The Fixed Piece — SORRYWECAN Stake</p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <p className="font-cabinet font-bold text-5xl">33–40%</p>
                            <div className="flex-1 min-w-[200px]">
                                <p className="text-white/60 text-sm leading-relaxed">
                                    SORRYWECAN owns a proportional stake as the parent entity providing brand, network, legal structure, and operating infrastructure. This stake does not dilute with partner additions — it comes from the total. The exact number (33% or 40%) depends on how much operational weight SORRYWECAN carries vs. the individual founders.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Models */}
                    <motion.div {...fadeUp(0.08)} className="mb-4">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-6">Split Models — Four Approaches</p>
                        <div className="space-y-3">
                            {[
                                {
                                    model: "Model A — Clean Thirds",
                                    split: [
                                        { who: "SORRYWECAN", pct: "33%", role: "Brand, network, infrastructure" },
                                        { who: "Prince of Wellness (Tiep)", pct: "33%", role: "Vision, face, content, product" },
                                        { who: "Andrea (Adka)", pct: "34%", role: "Production, structure, operations" },
                                    ],
                                    note: "Simplest. Equal weight between SORRYWECAN and founders. Works best when Adka is fully load-bearing operationally. No partner slot.",
                                    highlight: false,
                                },
                                {
                                    model: "Model B — Weighted + Partner Room",
                                    split: [
                                        { who: "SORRYWECAN", pct: "40%", role: "Brand, network, infrastructure" },
                                        { who: "Prince of Wellness (Tiep)", pct: "30%", role: "Vision, face, content, product" },
                                        { who: "Andrea (Adka)", pct: "20%", role: "Production, structure, operations" },
                                        { who: "Partner (TBD)", pct: "10%", role: "Strategic fit — B2B, technical, or network" },
                                    ],
                                    note: "SORRYWECAN carries more weight. Leaves 10% for the right partner without major dilution. Tiep leads with meaningful control.",
                                    highlight: true,
                                },
                                {
                                    model: "Model C — Four Equal Partners",
                                    split: [
                                        { who: "SORRYWECAN", pct: "33%", role: "Brand, network, infrastructure" },
                                        { who: "Prince of Wellness (Tiep)", pct: "25%", role: "Vision, face, content, product" },
                                        { who: "Andrea (Adka)", pct: "25%", role: "Production, structure, operations" },
                                        { who: "Partner (TBD)", pct: "17%", role: "Strategic fit — meaningful stake" },
                                    ],
                                    note: "More equitable if the partner brings significant value — B2B network, technical capability, or capital. Partner has real skin in the game at 17%.",
                                    highlight: false,
                                },
                                {
                                    model: "Model D — Aggressive Growth",
                                    split: [
                                        { who: "SORRYWECAN", pct: "30%", role: "Brand, network, infrastructure" },
                                        { who: "Prince of Wellness (Tiep)", pct: "40%", role: "Vision, face, content, product" },
                                        { who: "Andrea (Adka)", pct: "20%", role: "Production, structure, operations" },
                                        { who: "Partner (TBD)", pct: "10%", role: "Strategic fit" },
                                    ],
                                    note: "Tiep holds majority as primary face and product driver. Makes sense if the platform is genuinely built around his presence and thinking.",
                                    highlight: false,
                                },
                            ].map((m, mi) => (
                                <motion.div key={m.model} {...fadeUp(mi * 0.07)} className={`p-6 border ${m.highlight ? "border-white bg-white/10" : "border-white/10"}`}>
                                    <p className="font-cabinet font-bold text-lg tracking-tight mb-4">{m.model}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                                        {m.split.map(s => (
                                            <div key={s.who} className="p-3 bg-white/[0.06] border border-white/10">
                                                <p className="font-cabinet font-bold text-2xl text-white mb-1">{s.pct}</p>
                                                <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/70 mb-1">{s.who}</p>
                                                <p className="text-[10px] text-white/30">{s.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white/40 text-xs leading-relaxed border-t border-white/10 pt-3">{m.note}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(0.12)} className="p-6 border border-white/10 bg-white/[0.03]">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/30 mb-3">What determines the right model</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/50">
                            <div className="space-y-2">
                                <p><span className="text-white/80">SORRYWECAN's stake goes up</span> when the brand, network, and operational infrastructure are heavily load-bearing — e.g. if most B2B pipeline comes through SORRYWECAN relationships.</p>
                                <p><span className="text-white/80">Tiep's stake goes up</span> when the platform is genuinely inseparable from his presence, thinking, and content — which it largely is.</p>
                            </div>
                            <div className="space-y-2">
                                <p><span className="text-white/80">Partner stake</span> should reflect what they actually bring: a B2B network that opens doors, a technical capability that builds infrastructure, or capital that de-risks Q2. Not just a title.</p>
                                <p><span className="text-white/80">Adka's stake</span> reflects operational ownership. If she is running the machine that makes everything else possible, 20% is conservative. 25-34% is more honest.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 05 REVENUE DISTRIBUTION / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden py-32 px-8 md:px-16">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[16vw] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    SPLIT
                </span>
                <div className="max-w-5xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-16">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 block mb-4">
                            05 — Revenue Distribution
                        </span>
                        <h2 className="font-cabinet font-bold text-4xl md:text-6xl tracking-tighter">
                            What €30k/month<br />looks like in practice.
                        </h2>
                    </motion.div>

                    {/* Applied to Path B */}
                    <motion.div {...fadeUp(0.05)} className="mb-8">
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-6">Applied to Path B (Realistic Q4) — Model B Ownership</p>
                        <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03] mb-4">
                            <p className="text-sm text-black/50 mb-6">2 workshops/month (€20k) + 200 Circle members (€9,800) = <strong className="text-black">€29,800/month</strong></p>
                            <div className="space-y-3">
                                {[
                                    { who: "SORRYWECAN (40%)", monthly: "€11,920", quarterly: "€35,760", note: "Covers brand infrastructure, ops overhead, reinvestment into growth" },
                                    { who: "Prince of Wellness / Tiep (30%)", monthly: "€8,940", quarterly: "€26,820", note: "Primary content, product, face — this is the core value driver" },
                                    { who: "Andrea / Adka (20%)", monthly: "€5,960", quarterly: "€17,880", note: "Operations, production, client management, community" },
                                    { who: "Partner (10%)", monthly: "€2,980", quarterly: "€8,940", note: "Strategic contribution — B2B pipeline, technical, or network" },
                                ].map((r, i) => (
                                    <div key={r.who} className="flex items-center gap-4 p-4 border border-black/10 bg-white/40 flex-wrap">
                                        <div className="flex-1 min-w-[160px]">
                                            <p className="font-bold text-sm">{r.who}</p>
                                            <p className="text-xs text-black/40 mt-0.5">{r.note}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-cabinet font-bold text-xl text-[#0047BB]">{r.monthly}<span className="text-xs font-sans font-normal text-black/30 ml-1">/mo</span></p>
                                            <p className="text-xs text-black/40">{r.quarterly} /quarter</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Who to invite */}
                    <motion.div {...fadeUp(0.1)}>
                        <p className="text-[9px] font-code-brand uppercase tracking-widest text-black/30 mb-6">Who Fits as Partner — What to Look For</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                {
                                    type: "The B2B Opener",
                                    desc: "Someone with an active rolodex in Slovak/Czech corporate — HR directors, heads of L&D, C-suite at mid-size companies. They open the door, we close the room.",
                                    stake: "5–10%",
                                    tradeoff: "Lower stake — primarily channel value. Clean and simple.",
                                },
                                {
                                    type: "The Technical Builder",
                                    desc: "Someone who can build the Collective Intelligence AI, the Circle integrations, and the agentic infrastructure the platform needs in Q3-Q4. Saves significant outsourcing cost.",
                                    stake: "10–17%",
                                    tradeoff: "Higher stake — they build core infrastructure. Saves €20-50k in dev.",
                                },
                                {
                                    type: "The Platform Operator",
                                    desc: "Someone who has run a paid community before — knows Circle, knows retention, knows what kills a launch vs. what makes it stick. Operational knowledge, not just network.",
                                    stake: "10–15%",
                                    tradeoff: "Mid stake — experience reduces risk significantly in the first 6 months.",
                                },
                                {
                                    type: "The Capital Partner",
                                    desc: "Someone who invests to accelerate — funding content production, marketing, or event costs for 6 months. Converts risk into speed. Less operational, more strategic backing.",
                                    stake: "10–20%",
                                    tradeoff: "Stake reflects investment size. Dilutive but de-risks the runway.",
                                },
                            ].map((p, i) => (
                                <motion.div key={p.type} {...fadeUp(i * 0.07)} className="p-6 border border-black/10">
                                    <div className="flex items-start justify-between mb-3">
                                        <p className="font-cabinet font-bold text-lg tracking-tight">{p.type}</p>
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-1 shrink-0">{p.stake}</span>
                                    </div>
                                    <p className="text-sm text-black/60 leading-relaxed mb-3">{p.desc}</p>
                                    <p className="text-xs text-black/40 border-t border-black/10 pt-3">{p.tradeoff}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <LabDocNav
                prev={{ label: "Platform Strategy", href: "/lab/platform-strategy" }}
            />

            {/* ── FOOTER ── */}
            <footer className="bg-[#0d0d0d] text-white border-t border-white/[0.06] px-8 md:px-16 py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="font-cabinet font-bold text-xl tracking-tighter">RESEARCH<span className="text-[#0047BB]">LAB</span></p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/20 mt-1">Economics · Internal · Confidential</p>
                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-white/10 mt-0.5">SORRYWECAN // 2026</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: "Q2 Overview", href: "/lab/q2-overview" },
                            { label: "Platform Strategy", href: "/lab/platform-strategy" },
                            { label: "Corporate", href: "/lab/corporate" },
                            { label: "The Bible", href: "/lab/context" },
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
