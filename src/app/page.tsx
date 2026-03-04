"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"

export default function HomePage() {
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
                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                            SORRYWECAN × SUDOLABS
                        </span>
                        <h1 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mt-4">
                            RESEARCH<span className="text-[#0047BB]">LAB</span>
                        </h1>
                        <p className="text-lg text-black/50 mt-6 max-w-xl leading-relaxed">
                            AI education toolkits, research, and resources for builders.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        <Link
                            href="/lab"
                            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#0047BB] transition-colors font-code-brand"
                        >
                            Enter Lab →
                        </Link>
                    </motion.div>
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
