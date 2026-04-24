"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// ─── Types ────────────────────────────────────────────────────────────────────
type RouteItem = {
    name: string
    href: string
    desc: string
    tag?: "PREVIEW" | "CONFIDENTIAL" | "LIVE" | "PARTNER"
}

type Section = {
    id: string
    title: string
    coord: string
    items: RouteItem[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SECTIONS: Section[] = [
    {
        id: "decks",
        title: "Decks & Offers",
        coord: "48°21'N · 17°06'E",
        items: [
            { name: "Research Lab Pitch Deck", href: "/lab/pitchdeck", desc: "Holistic RL pitch: problem, ecosystem, formats, team. EN/SK, PDF-ready." },
            { name: "Corporate Offer v2", href: "/corporate/offer-v2", desc: "O2 workshop offer deck — 7 slides, bilingual, landscape PDF." },
            { name: "RL × Mini Tech MBA", href: "/corporate/mini-tech-mba", desc: "Partnership offer deck — 7 slides EN/SK. Community education + client pipeline.", tag: "PARTNER" },
            { name: "Public One-Pager", href: "/public/onepager", desc: "THE MINDSHIFT session deck — PDF export." },
            { name: "Corporate One-Pager", href: "/corporate/onepager", desc: "Corporate workshop deck — PDF export." },
            { name: "Instagram Stories", href: "/public/stories", desc: "22 story slides for Instagram (EN/SK, screenshot-ready)." },
            { name: "Mindshift Toolkit", href: "/shift", desc: "Edition 01 toolkit: 3 speakers distilled. Landscape, PDF-ready." },
            { name: "MINDSHIFT Page", href: "/mindshift", desc: "Original MINDSHIFT marketing page — full programme detail, booking, FAQ. EN/SK." },
        ],
    },
    {
        id: "strategy",
        title: "Strategy",
        coord: "48°08'N · 17°07'E",
        items: [
            { name: "The Bible", href: "/lab/context", desc: "Master context: who we are, brand system, voice, products, audience. Start here." },
            { name: "Q2 Overview", href: "/lab/q2-overview", desc: "Holistic Q2 plan: revenue, content flywheel, platform launch, corporate pipeline." },
            { name: "Corporate Offer", href: "/lab/corporate", desc: "Two-day format, pricing, O2 pipeline, sales motion, objection handling." },
            { name: "Content Architecture", href: "/lab/content", desc: "The Radar, funnel stages, 60/30/10 rule, distribution channels." },
            { name: "Platform Strategy", href: "/lab/platform-strategy", desc: "Circle build, three audiences, curriculum ladder, asset moat, monetization stack." },
            { name: "Economics", href: "/lab/economics", desc: "€30k/month path, B2B math, platform ceiling, ownership structure.", tag: "CONFIDENTIAL" },
        ],
    },
    {
        id: "operations",
        title: "Operations",
        coord: "48°09'N · 17°08'E",
        items: [
            { name: "Sales Strategy", href: "/sales", desc: "Outreach architecture, pipeline tracker, buyer portraits. Fill the room." },
            { name: "Prospect Database", href: "/prospects", desc: "145 Bratislava companies across 10 sectors. Tiered by fit. Email templates ready." },
            { name: "Growth Plan", href: "/growth-plan", desc: "Living roadmap: phases, initiatives, metrics. Updated as we grow." },
            { name: "The Playbook", href: "/gameplan", desc: "Growth architecture: how to build, scale, and lead in AI education." },
            { name: "Marketing Sync", href: "/marketing-sync", desc: "THE MINDSHIFT operational hub. Ownership, status, timeline." },
            { name: "Workshop Curriculum", href: "/curriculum", desc: "THE MINDSHIFT full structure: speakers, topics, timing, narrative arc." },
            { name: "Marketing", href: "/marketing", desc: "Campaigns, channels, messaging frameworks. Distribution engine." },
            { name: "Enhancements", href: "/enhancements", desc: "Product and experience improvements — live tracking." },
        ],
    },
    {
        id: "research",
        title: "Research & Experiments",
        coord: "48°15'N · 17°10'E",
        items: [
            { name: "AI Education Blueprint", href: "/ai-education-blueprint", desc: "The foundational architecture for AI education at scale." },
            { name: "AI Market Intelligence", href: "/ai-market-intelligence", desc: "Market landscape, signals, emerging patterns in AI adoption." },
            { name: "NextGen", href: "/nextgen", desc: "Next generation formats, experiments, and emerging product directions." },
            { name: "Protocol", href: "/protocol", desc: "Frameworks and operating protocols for how Research Lab runs." },
            { name: "Journey", href: "/journey", desc: "The arc of Research Lab — where we came from, where we're going." },
        ],
    },
    {
        id: "finance",
        title: "Finance",
        coord: "48°22'N · 17°05'E",
        items: [
            { name: "Projections", href: "/projections", desc: "Revenue projections, scenario modeling, growth curves.", tag: "CONFIDENTIAL" },
            { name: "Founders Pay", href: "/founders-pay", desc: "Compensation structure, equity logic, founder agreements.", tag: "CONFIDENTIAL" },
        ],
    },
    {
        id: "archive",
        title: "Previous Work",
        coord: "47°59'N · 17°02'E",
        items: [
            { name: "Archive", href: "/archive", desc: "All previous research, blueprints, and working documents." },
        ],
    },
]

// ─── Animation variants ───────────────────────────────────────────────────────
const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
}
const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}
const sectionHeader = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// ─── Tag badge ────────────────────────────────────────────────────────────────
const TAG_STYLES: Record<string, string> = {
    PREVIEW:      "text-[#0047BB] border-[#0047BB]/40",
    CONFIDENTIAL: "text-white/40 border-white/20",
    LIVE:         "text-emerald-400 border-emerald-400/40",
    PARTNER:      "text-amber-400/80 border-amber-400/30",
}

function TagBadge({ tag }: { tag: string }) {
    return (
        <span className={`font-code-brand text-[8px] font-bold uppercase tracking-[0.25em] border px-1.5 py-0.5 ml-2 shrink-0 ${TAG_STYLES[tag] ?? "text-white/30 border-white/20"}`}>
            {tag}
        </span>
    )
}

// ─── Link row ─────────────────────────────────────────────────────────────────
function LinkRow({ route, index }: { route: RouteItem; index: number }) {
    const num = String(index + 1).padStart(2, "0")
    return (
        <motion.div variants={item}>
            <Link
                href={route.href}
                className="group flex items-center gap-4 py-4 border-b border-white/[0.06] border-l-[2px] border-l-transparent hover:border-l-[#0047BB] hover:bg-white/[0.02] pl-0 hover:pl-4 transition-all duration-200"
            >
                <span className="font-code-brand text-[10px] text-white/20 shrink-0 w-6 select-none">{num}</span>
                <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-4">
                    <div className="flex items-center gap-0 shrink-0">
                        <span className="font-cabinet font-bold text-[16px] md:text-[17px] text-white/80 group-hover:text-white transition-colors leading-tight">
                            {route.name}
                        </span>
                        {route.tag && <TagBadge tag={route.tag} />}
                    </div>
                    <span className="font-code-brand text-[11px] text-white/25 group-hover:text-white/40 transition-colors truncate hidden md:block">
                        {route.desc}
                    </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                    <span className="font-code-brand text-[10px] text-white/15 group-hover:text-white/30 transition-colors hidden md:block">
                        {route.href}
                    </span>
                    <span className="text-white/20 group-hover:text-[#0047BB] group-hover:translate-x-1 transition-all">→</span>
                </div>
            </Link>
        </motion.div>
    )
}

// ─── Section block ────────────────────────────────────────────────────────────
function SectionBlock({ section }: { section: Section }) {
    return (
        <div className="mb-16">
            <motion.div
                variants={sectionHeader}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, margin: "-80px" }}
                className="flex items-end justify-between border-t border-white/[0.10] pt-6 pb-5"
            >
                <div className="flex items-baseline gap-4">
                    <h2 className="font-cabinet font-black text-[36px] md:text-[44px] tracking-tighter text-white/90 leading-none">
                        {section.title}
                    </h2>
                    <span className="font-code-brand text-[11px] text-white/20">
                        ({String(section.items.length).padStart(2, "0")})
                    </span>
                </div>
                <span className="font-code-brand text-[10px] text-white/15 hidden md:block">
                    {section.coord}
                </span>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
                {section.items.map((route, i) => (
                    <LinkRow key={route.href} route={route} index={i} />
                ))}
            </motion.div>
        </div>
    )
}

// ─── Live clock ───────────────────────────────────────────────────────────────
function LiveClock() {
    const [time, setTime] = useState("")
    useEffect(() => {
        const fmt = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        setTime(fmt())
        const id = setInterval(() => setTime(fmt()), 1000)
        return () => clearInterval(id)
    }, [])
    return <span className="font-code-brand text-[10px] text-white/25 tabular-nums">{time}</span>
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LabPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-cabinet relative">
            <style>{`
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
                .cursor-blink { animation: blink 1s step-end infinite; display: inline-block; }
            `}</style>

            {/* ── Fixed watermark ── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex flex-col items-center justify-center select-none">
                <span
                    className="font-cabinet font-black text-white leading-none tracking-tighter"
                    style={{ fontSize: "clamp(160px, 26vw, 360px)", opacity: 0.018, filter: "blur(0.5px)" }}
                >
                    LAB
                </span>
                <span
                    className="font-cabinet font-black text-white leading-none tracking-tighter"
                    style={{ fontSize: "clamp(48px, 7.5vw, 110px)", opacity: 0.012, filter: "blur(0.5px)" }}
                >
                    BACKSTAGE
                </span>
            </div>

            {/* ── Noise overlay ── */}
            <div className="fixed inset-0 z-[1] pointer-events-none noise-bg opacity-[0.03]" />

            {/* ── Backstage bar ── */}
            <div className="fixed top-0 left-0 right-0 z-50 h-11 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.07] flex items-center px-5 md:px-10 gap-3">
                <Link href="/site" className="font-cabinet font-black text-[13px] tracking-widest uppercase text-white/70 hover:text-white transition-colors">
                    RESEARCH<span className="text-[#0047BB]">LAB</span>
                </Link>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <span className="font-code-brand text-[9px] text-white/25 uppercase tracking-[0.3em] hidden md:block">
                    BACKSTAGE
                    <span className="cursor-blink ml-1 text-[#0047BB]">_</span>
                </span>
                <div className="flex-1" />
                <LiveClock />
                <div className="w-px h-4 bg-white/10 mx-2" />
                <Link href="/site" className="font-code-brand text-[9px] text-white/25 hover:text-white/60 uppercase tracking-[0.25em] transition-colors">
                    Public Site →
                </Link>
            </div>

            {/* ── Main content ── */}
            <motion.main
                className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-32"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {/* Hero identity block */}
                <motion.div variants={item} className="pt-16 pb-20">
                    <span className="font-code-brand text-[9px] text-white/20 uppercase tracking-[0.45em] block mb-4">
                        RESEARCH LAB · INTERNAL SYSTEM · 2026
                    </span>
                    <h1 className="font-cabinet font-black leading-none tracking-tighter text-white/90"
                        style={{ fontSize: "clamp(64px, 12vw, 128px)" }}>
                        THE LAB
                    </h1>
                    <p className="font-code-brand text-[13px] text-white/30 mt-5 max-w-md leading-relaxed">
                        Backstage. All routes, all systems, all working documents.
                        Everything that makes the front end work lives here.
                    </p>
                </motion.div>

                {/* ── Featured: public site ── */}
                <motion.div variants={item} className="mb-20">
                    <div className="border-t border-white/[0.10] pt-6 pb-5 flex items-end justify-between">
                        <div className="flex items-baseline gap-4">
                            <h2 className="font-cabinet font-black text-[36px] md:text-[44px] tracking-tighter text-white/90 leading-none">
                                Public Face
                            </h2>
                            <span className="font-code-brand text-[11px] text-white/20">(01)</span>
                        </div>
                        <span className="font-code-brand text-[10px] text-white/15 hidden md:block">48°08'N · 17°06'E</span>
                    </div>
                    <Link href="/site">
                        <motion.div
                            whileHover={{ x: 4 }}
                            className="group flex items-center justify-between border-l-[3px] border-[#0047BB] pl-6 py-7 hover:bg-white/[0.025] transition-colors"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-cabinet font-black text-[22px] md:text-[26px] text-white tracking-tight">
                                        RESEARCH<span className="text-[#0047BB]">LAB</span>
                                    </span>
                                    <TagBadge tag="PREVIEW" />
                                </div>
                                <p className="font-code-brand text-[12px] text-white/35 group-hover:text-white/50 transition-colors max-w-lg leading-relaxed">
                                    Unified public homepage — institute + magazine. Opens at /site until DNS flip. This is what the world sees.
                                </p>
                            </div>
                            <span className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all text-xl ml-6 shrink-0">→</span>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* ── All sections ── */}
                {SECTIONS.map((section) => (
                    <SectionBlock key={section.id} section={section} />
                ))}
            </motion.main>

            {/* ── Footer ── */}
            <div className="relative z-10 border-t border-white/[0.06] py-10 px-6 md:px-12 max-w-4xl mx-auto flex justify-between items-center">
                <p className="font-code-brand text-[9px] text-white/15 uppercase tracking-[0.4em]">
                    SORRYWECAN // RESEARCH LAB // INTERNAL // 2026
                </p>
                <p className="font-code-brand text-[9px] text-white/10 uppercase tracking-[0.3em] hidden md:block">
                    {SECTIONS.reduce((acc, s) => acc + s.items.length, 1)} routes
                </p>
            </div>
        </div>
    )
}
