"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

export default function LabPage() {
    const onepagers = [
        { name: "Research Lab Pitch Deck", href: "/lab/pitchdeck", desc: "Holistic RL pitch: problem, ecosystem, formats, team, engagement. EN/SK, PDF-ready." },
        { name: "Corporate Offer v2", href: "/corporate/offer-v2", desc: "O2 workshop offer deck — 7 slides, bilingual, landscape PDF." },
        { name: "Public One-Pager", href: "/public/onepager", desc: "THE MINDSHIFT session deck (PDF export)" },
        { name: "Corporate One-Pager", href: "/corporate/onepager", desc: "Corporate workshop deck (PDF export)" },
        { name: "Instagram Stories", href: "/public/stories", desc: "22 story slides for Instagram (EN/SK, screenshot-ready)" },
        { name: "Mindshift Toolkit", href: "/shift", desc: "Edition 01 toolkit: 3 speakers distilled. Landscape, PDF-ready (EN/SK)" },
    ]

    const strategyPages = [
        { name: "The Bible", href: "/lab/context", desc: "Master context: who we are, brand system, voice, products, audience. Start here." },
        { name: "Q2 Overview", href: "/lab/q2-overview", desc: "Holistic Q2 plan: revenue, content flywheel, platform launch, corporate pipeline." },
        { name: "Corporate Offer", href: "/lab/corporate", desc: "Two-day format, pricing, O2 pipeline, sales motion, objection handling." },
        { name: "Content Architecture", href: "/lab/content", desc: "The Radar, funnel stages, 60/30/10 rule, distribution channels, monetization ceiling." },
        { name: "Platform Strategy", href: "/lab/platform-strategy", desc: "Circle build, three audiences, curriculum ladder, asset moat, monetization stack, Quick Win principle." },
        { name: "Economics", href: "/lab/economics", desc: "€30k/month path, B2B math, platform ceiling, ownership structure, revenue distribution. Internal." },
    ]

    const pages = [
        { name: "Sales Strategy", href: "/sales", desc: "Outreach architecture, pipeline tracker, buyer portraits. Fill the room." },
        { name: "Prospect Database", href: "/prospects", desc: "145 Bratislava companies across 10 sectors. Tiered by fit. Email templates ready." },
        { name: "Growth Plan", href: "/growth-plan", desc: "Living roadmap: phases, initiatives, metrics. Updated as we grow." },
        { name: "The Playbook", href: "/gameplan", desc: "Growth architecture: how to build, scale, and lead in AI education." },
        { name: "Marketing Sync", href: "/marketing-sync", desc: "THE MINDSHIFT operational hub. Ownership, status, timeline." },
        { name: "Workshop Curriculum", href: "/curriculum", desc: "THE MINDSHIFT full structure: speakers, topics, timing, narrative arc. Living document." },
    ]

    const archivePages = [
        { name: "Archive", href: "/archive", desc: "All previous research, blueprints, and working documents." },
    ]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />

            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">
                            Internal
                        </span>
                        <h1 className="font-cabinet font-bold text-5xl md:text-6xl tracking-tighter mt-2">
                            Lab
                        </h1>
                        <p className="text-black/50 mt-4">
                            Working documents, research, and internal pages.
                        </p>
                    </motion.div>

                    <div className="mb-12">
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-3">One-Pagers</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {onepagers.map((page, i) => (
                                <motion.div
                                    key={page.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={page.href}
                                        className="flex items-center justify-between p-4 border-2 border-[#0047BB]/20 bg-[#0047BB]/5 hover:border-[#0047BB] hover:bg-[#0047BB]/10 transition-all group"
                                    >
                                        <div>
                                            <span className="font-medium text-[#0047BB] group-hover:text-[#0047BB] transition-colors">
                                                {page.name}
                                            </span>
                                            <p className="text-sm text-black/40 mt-0.5">{page.desc}</p>
                                        </div>
                                        <span className="text-[#0047BB]/40 group-hover:text-[#0047BB] group-hover:translate-x-1 transition-all">
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-3">Strategy — Q2 2026</p>
                        <div className="space-y-2">
                            {strategyPages.map((page, i) => (
                                <motion.div
                                    key={page.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.05 }}
                                >
                                    <Link
                                        href={page.href}
                                        className="flex items-center justify-between p-4 border-2 border-[#0047BB]/20 bg-[#0047BB]/5 hover:border-[#0047BB] hover:bg-[#0047BB]/10 transition-all group"
                                    >
                                        <div>
                                            <span className="font-medium text-[#0047BB] group-hover:text-[#0047BB] transition-colors">
                                                {page.name}
                                            </span>
                                            <p className="text-sm text-black/40 mt-0.5">{page.desc}</p>
                                        </div>
                                        <span className="text-[#0047BB]/40 group-hover:text-[#0047BB] group-hover:translate-x-1 transition-all">
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Active</p>
                    <div className="space-y-2">
                        {pages.map((page, i) => (
                            <motion.div
                                key={page.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 + 0.1 }}
                            >
                                <Link
                                    href={page.href}
                                    className="flex items-center justify-between p-4 border border-black/10 bg-white hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all group"
                                >
                                    <div>
                                        <span className="font-medium group-hover:text-[#0047BB] transition-colors">
                                            {page.name}
                                        </span>
                                        <p className="text-sm text-black/40 mt-0.5">{page.desc}</p>
                                    </div>
                                    <span className="text-black/20 group-hover:text-[#0047BB] group-hover:translate-x-1 transition-all">
                                        →
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-3">Previous Work</p>
                        <div className="space-y-2">
                            {archivePages.map((page, i) => (
                                <motion.div
                                    key={page.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.3 }}
                                >
                                    <Link
                                        href={page.href}
                                        className="flex items-center justify-between p-4 border border-black/5 bg-black/[0.02] hover:border-black/20 transition-all group"
                                    >
                                        <div>
                                            <span className="font-medium text-black/50 group-hover:text-black/70 transition-colors">
                                                {page.name}
                                            </span>
                                            <p className="text-sm text-black/30 mt-0.5">{page.desc}</p>
                                        </div>
                                        <span className="text-black/10 group-hover:text-black/30 group-hover:translate-x-1 transition-all">
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
