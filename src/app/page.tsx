"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// ─── Data ─────────────────────────────────────────────────────────────────────
type Item = {
    id: string
    type: "Programme" | "Toolkit" | "Offer" | "Site" | "Lab"
    name: string
    href: string
    desc: string
    img?: string
    status?: "ACTIVE" | "ONGOING" | "NEW" | "INTERNAL"
    external?: boolean
}

const ITEMS: Item[] = [
    // Programmes
    {
        id: "mindshift",
        type: "Programme",
        name: "THE MINDSHIFT",
        href: "/programmes/mindshift",
        desc: "A 3.5-hour immersive session on how to think with AI — not just use it. Two perspectives, live discussion, open panel.",
        img: "/img/protocols/mindshift-issue.jpg",
        status: "ACTIVE",
    },
    {
        id: "communitea",
        type: "Programme",
        name: "COMMUNITEA",
        href: "/programmes/communitea",
        desc: "The tea ritual that opens every session. Slowing down to sit together before we think together.",
        status: "ONGOING",
    },
    {
        id: "future-protocols",
        type: "Programme",
        name: "FUTURE PROTOCOLS",
        href: "/programmes/future-protocols",
        desc: "Toolkit series. Each issue distils one session into something you can keep — read, share, return to.",
        img: "/img/protocols/wisdom-work.jpg",
        status: "ONGOING",
    },
    {
        id: "the-source",
        type: "Programme",
        name: "THE SOURCE",
        href: "/programmes/the-source",
        desc: "The research and thinking that feeds everything else. Where the ideas come from.",
        status: "ONGOING",
    },
    // Toolkits
    {
        id: "tk-01",
        type: "Toolkit",
        name: "The Mindshift Issue",
        href: "/Mindshift-Issue.pdf",
        desc: "Issue 01 · Nov 2025. Three speakers, one night, distilled.",
        img: "/img/protocols/mindshift-issue.jpg",
    },
    {
        id: "tk-02",
        type: "Toolkit",
        name: "The End of Art — or Art Without End?",
        href: "/end-of-art-or-art-without-end.pdf",
        desc: "Issue 02 · Oct 2025. What AI means for creativity and what it can't touch.",
        img: "/img/protocols/end-of-art.jpg",
    },
    {
        id: "tk-03",
        type: "Toolkit",
        name: "The Coming Age of Wisdom Work",
        href: "/the-coming-age-of-wisdom-work.pdf",
        desc: "Issue 03 · Sep 2025. When execution is automated, what becomes valuable?",
        img: "/img/protocols/wisdom-work.jpg",
    },
    {
        id: "tk-04",
        type: "Toolkit",
        name: "AI as a New Entity",
        href: "/Toolkit.pdf",
        desc: "Issue 04 · Aug 2025. How to relate to AI as something genuinely new.",
        img: "/img/protocols/ai-as-entity.jpg",
    },
    {
        id: "tk-05",
        type: "Toolkit",
        name: "Lightpaper",
        href: "/Lightpaper.pdf",
        desc: "Issue 05 · Aug 2025. The Research Lab foundation document.",
        img: "/img/protocols/lightpaper.jpg",
    },
    // Offers
    {
        id: "corporate",
        type: "Offer",
        name: "Corporate Workshop",
        href: "/corporate/offer-v2",
        desc: "Two-day guided experience for teams. Thinking before tools. Built for companies ready to move beyond random AI adoption.",
        status: "ACTIVE",
    },
    {
        id: "mini-tech-mba",
        type: "Offer",
        name: "RL × Mini Tech MBA",
        href: "/corporate/mini-tech-mba",
        desc: "Partnership offer for the Mini Tech MBA community. AI fluency for those who create.",
        status: "NEW",
    },
    // Site & Lab
    {
        id: "site",
        type: "Site",
        name: "Public Homepage",
        href: "/site",
        desc: "The public face of Research Lab. Institute + magazine. Opens at researchlab.sk after DNS flip.",
        status: "ACTIVE",
    },
    {
        id: "lab",
        type: "Lab",
        name: "The Lab",
        href: "/lab",
        desc: "Backstage. All internal documents, strategy, decks, experiments. The engine room.",
        status: "INTERNAL",
    },
]

const TYPE_ORDER: Item["type"][] = ["Programme", "Toolkit", "Offer", "Site", "Lab"]

const TYPE_COLOR: Record<Item["type"], string> = {
    Programme: "#0047BB",
    Toolkit:   "#5c4a3a",
    Offer:     "#2d4a2d",
    Site:      "#1a1a2e",
    Lab:       "#1a1a1a",
}

const TYPE_BG: Record<Item["type"], string> = {
    Programme: "rgba(0,71,187,0.07)",
    Toolkit:   "rgba(92,74,58,0.07)",
    Offer:     "rgba(45,74,45,0.07)",
    Site:      "rgba(26,26,46,0.06)",
    Lab:       "rgba(26,26,26,0.05)",
}

const STATUS_STYLE: Record<string, string> = {
    ACTIVE:   "text-emerald-700 border-emerald-500/30 bg-emerald-50",
    ONGOING:  "text-[#0047BB] border-[#0047BB]/30 bg-blue-50",
    NEW:      "text-amber-700 border-amber-400/40 bg-amber-50",
    INTERNAL: "text-black/40 border-black/15 bg-black/[0.03]",
}

// ─── Animation ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
    }),
}

// ─── Live clock ───────────────────────────────────────────────────────────────
function LiveClock() {
    const [time, setTime] = useState("")
    useEffect(() => {
        const fmt = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
        setTime(fmt())
        const id = setInterval(() => setTime(fmt()), 10000)
        return () => clearInterval(id)
    }, [])
    return <span className="tabular-nums">{time}</span>
}

// ─── List row ─────────────────────────────────────────────────────────────────
function ListRow({ item, index }: { item: Item; index: number }) {
    const dot = <span className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: TYPE_COLOR[item.type] }} />
    return (
        <motion.div custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
            <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="group flex items-center gap-5 py-4 border-b border-black/[0.07] border-l-[2px] border-l-transparent hover:border-l-[#0047BB] hover:pl-3 transition-all duration-200"
            >
                <div className="flex items-center gap-2 w-28 shrink-0">
                    {dot}
                    <span className="font-code-brand text-[9px] uppercase tracking-[0.25em] text-black/35" style={{ color: TYPE_COLOR[item.type] + "aa" }}>
                        {item.type}
                    </span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="font-cabinet font-bold text-[15px] md:text-[16px] text-[#0a0a0a] group-hover:text-[#0047BB] transition-colors">
                            {item.name}
                        </span>
                        {item.status && (
                            <span className={`font-code-brand text-[8px] font-bold uppercase tracking-[0.2em] border px-1.5 py-0.5 hidden md:inline ${STATUS_STYLE[item.status]}`}>
                                {item.status}
                            </span>
                        )}
                    </div>
                    <p className="font-code-brand text-[11px] text-black/35 mt-0.5 truncate hidden md:block">{item.desc}</p>
                </div>
                <span className="text-black/20 group-hover:text-[#0047BB] group-hover:translate-x-1 transition-all shrink-0">→</span>
            </Link>
        </motion.div>
    )
}

// ─── Gallery card ─────────────────────────────────────────────────────────────
function GalleryCard({ item, index }: { item: Item; index: number }) {
    return (
        <motion.div custom={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
            <Link href={item.href} target={item.external ? "_blank" : undefined} className="group block">
                {/* Image or color block */}
                <div
                    className="w-full aspect-[4/3] overflow-hidden mb-3 relative"
                    style={{ background: TYPE_BG[item.type] }}
                >
                    {item.img ? (
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span
                                className="font-cabinet font-black text-[40px] md:text-[52px] tracking-tighter leading-none opacity-[0.12]"
                                style={{ color: TYPE_COLOR[item.type] }}
                            >
                                {item.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                            </span>
                        </div>
                    )}
                    {/* Type label overlay */}
                    <div className="absolute top-3 left-3">
                        <span
                            className="font-code-brand text-[8px] font-bold uppercase tracking-[0.25em] px-2 py-1 text-white"
                            style={{ background: TYPE_COLOR[item.type] }}
                        >
                            {item.type}
                        </span>
                    </div>
                    {item.status && (
                        <div className="absolute top-3 right-3">
                            <span className={`font-code-brand text-[8px] font-bold uppercase tracking-[0.2em] border px-1.5 py-0.5 ${STATUS_STYLE[item.status]}`}>
                                {item.status}
                            </span>
                        </div>
                    )}
                </div>
                {/* Text below */}
                <p className="font-cabinet font-bold text-[14px] text-[#0a0a0a] group-hover:text-[#0047BB] transition-colors leading-tight mb-1">
                    {item.name}
                </p>
                <p className="font-code-brand text-[10px] text-black/35 leading-relaxed line-clamp-2">
                    {item.desc}
                </p>
            </Link>
        </motion.div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
    const [view, setView] = useState<"list" | "gallery">("list")
    const [activeType, setActiveType] = useState<Item["type"] | "All">("All")

    const filtered = activeType === "All" ? ITEMS : ITEMS.filter(i => i.type === activeType)
    const counts = TYPE_ORDER.reduce((acc, t) => ({ ...acc, [t]: ITEMS.filter(i => i.type === t).length }), {} as Record<string, number>)

    return (
        <div className="min-h-screen bg-[#f7f4f0] text-[#0a0a0a] font-cabinet">

            {/* ── Header ── */}
            <header className="bg-[#0a0a0a] text-white">
                <div className="max-w-5xl mx-auto px-6 md:px-12">

                    {/* Top bar */}
                    <div className="flex items-center justify-between py-4 border-b border-white/[0.07]">
                        <span className="font-cabinet font-black text-[13px] tracking-widest uppercase">
                            RESEARCH<span className="text-[#0047BB]">LAB</span>
                        </span>
                        <div className="flex items-center gap-5">
                            <span className="font-code-brand text-[9px] text-white/20 uppercase tracking-[0.3em] hidden md:block">
                                SORRYWECAN · BRATISLAVA
                            </span>
                            <span className="font-code-brand text-[10px] text-white/20">
                                <LiveClock />
                            </span>
                            <Link href="/lab" className="font-code-brand text-[9px] text-white/25 hover:text-white/60 uppercase tracking-[0.25em] transition-colors hidden md:block">
                                Lab →
                            </Link>
                        </div>
                    </div>

                    {/* Hero */}
                    <div className="py-16 md:py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Main headline */}
                            <h1
                                className="font-cabinet font-black tracking-tighter leading-[0.87] text-white mb-8"
                                style={{ fontSize: "clamp(48px, 8.5vw, 100px)" }}
                            >
                                The thinking<br />behind the tool<br />
                                <span className="text-white/30">is the tool.</span>
                            </h1>

                            {/* Philosophy */}
                            <div className="border-l-[2px] border-[#0047BB] pl-6 max-w-xl mb-10">
                                <p className="text-[15px] md:text-[17px] text-white/60 leading-relaxed">
                                    Most AI content teaches output. We teach perspective.
                                    Research Lab exists because nobody was teaching
                                    the underlying thinking — and that gap is the whole problem.
                                </p>
                            </div>

                            {/* Three beliefs */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/[0.07] bg-white/[0.07] max-w-2xl">
                                {[
                                    ["Thinking is the skill.", "Tools are just the interface."],
                                    ["Curation beats volume.", "Most AI content is noise."],
                                    ["Immersive, not informational.", "Education that changes how you think."],
                                ].map(([a, b]) => (
                                    <div key={a} className="bg-[#0a0a0a] px-5 py-4">
                                        <p className="font-cabinet font-bold text-[13px] text-white/80 leading-snug">{a}</p>
                                        <p className="font-code-brand text-[10px] text-white/30 mt-1 leading-relaxed">{b}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="font-code-brand text-[9px] uppercase tracking-[0.5em] text-white/20 mt-10"
                        >
                            WHERE HUMANS & AI CO-EVOLVE · BRATISLAVA · 2026
                        </motion.p>
                    </div>
                </div>
            </header>

            {/* ── Content ── */}
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">

                {/* Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

                    {/* Type filter */}
                    <div className="flex items-center gap-1 flex-wrap">
                        {(["All", ...TYPE_ORDER] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setActiveType(t)}
                                className={`font-code-brand text-[9px] uppercase tracking-[0.25em] px-3 py-1.5 border transition-all ${
                                    activeType === t
                                        ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                                        : "text-black/40 border-black/15 hover:border-black/30 hover:text-black/70 bg-transparent"
                                }`}
                            >
                                {t}
                                {t !== "All" && (
                                    <span className="ml-1 opacity-50">({counts[t]})</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* View toggle */}
                    <div className="flex items-center gap-1 border border-black/10 p-0.5 self-start sm:self-auto">
                        {(["list", "gallery"] as const).map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                className={`font-code-brand text-[9px] uppercase tracking-[0.25em] px-3 py-1.5 transition-all ${
                                    view === v ? "bg-[#0a0a0a] text-white" : "text-black/35 hover:text-black/60"
                                }`}
                            >
                                {v === "list" ? "≡ List" : "⊞ Gallery"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Items */}
                {view === "list" ? (
                    <div>
                        {filtered.map((item, i) => (
                            <ListRow key={item.id} item={item} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {filtered.map((item, i) => (
                            <GalleryCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                )}

                {filtered.length === 0 && (
                    <p className="font-code-brand text-[11px] text-black/30 py-12 text-center uppercase tracking-widest">
                        Nothing here yet.
                    </p>
                )}
            </main>

            {/* ── Footer ── */}
            <footer className="border-t border-black/[0.07] py-10 px-6 md:px-12 max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="font-code-brand text-[9px] text-black/25 uppercase tracking-[0.4em]">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
                <div className="flex items-center gap-4">
                    <Link href="/site" className="font-code-brand text-[9px] text-black/30 hover:text-[#0047BB] uppercase tracking-[0.25em] transition-colors">
                        Public Site
                    </Link>
                    <span className="text-black/15">·</span>
                    <Link href="/lab" className="font-code-brand text-[9px] text-black/30 hover:text-[#0047BB] uppercase tracking-[0.25em] transition-colors">
                        Lab
                    </Link>
                    <span className="text-black/15">·</span>
                    <a href="mailto:hello@researchlab.sk" className="font-code-brand text-[9px] text-black/30 hover:text-[#0047BB] uppercase tracking-[0.25em] transition-colors">
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    )
}
