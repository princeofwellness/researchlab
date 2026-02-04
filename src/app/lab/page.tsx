"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

export default function LabPage() {
    const onepagers = [
        { name: "Public One-Pager", href: "/public/onepager", desc: "THE SHIFT session deck (PDF export)" },
        { name: "Corporate One-Pager", href: "/corporate/onepager", desc: "Corporate workshop deck (PDF export)" },
    ]

    const pages = [
        { name: "Marketing", href: "/marketing", desc: "Marketing strategy and materials" },
        { name: "Projections", href: "/projections", desc: "Business projections and models" },
        { name: "Feedbacks", href: "/enhancements", desc: "Collected feedback and enhancements" },
        { name: "Gameplan", href: "/gameplan", desc: "Strategic gameplan" },
        { name: "Founders Pay", href: "/founders-pay", desc: "Founder compensation models" },
        { name: "AI Market Intelligence", href: "/ai-market-intelligence", desc: "Market research and insights" },
        { name: "AI Education Blueprint", href: "/ai-education-blueprint", desc: "Education framework" },
        { name: "Journey", href: "/journey", desc: "Customer journey mapping" },
        { name: "Protocol", href: "/protocol", desc: "Operational protocols" },
        { name: "Archive", href: "/archive", desc: "Archived materials" },
    ]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono">
            <TopNav />

            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
                            Internal
                        </span>
                        <h1 className="font-serif-instrument text-5xl md:text-6xl italic mt-2">
                            Lab
                        </h1>
                        <p className="text-black/50 mt-4">
                            Working documents, research, and internal pages.
                        </p>
                    </motion.div>

                    <div className="mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">One-Pagers</p>
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

                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-3">Working Documents</p>
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
                </div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
