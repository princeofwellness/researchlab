"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

export default function ProjectionsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-[#0047BB]/20">
            <TopNav variant="dark" />

            <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-white/10">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            INTERNAL
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[8vw] leading-[0.95] tracking-tighter"
                    >
                        Financial Projections
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 mt-6 max-w-xl"
                    >
                        Numbers that make this viable. Updated as we learn.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-white/20">
                            <h3 className="font-serif-instrument text-2xl italic mb-6">Fixed Monthly Costs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Blueroom (venue)</span>
                                    <span className="font-bold">€2,000</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Andrea (PM)</span>
                                    <span className="font-bold">€2,200</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Saši (Research)</span>
                                    <span className="font-bold">€900</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Tepi (Sales/Tech)</span>
                                    <span className="font-bold">€1,000</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-[#0047BB] font-bold">Total Fixed</span>
                                    <span className="text-2xl font-serif-instrument">€6,100</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-white/20">
                            <h3 className="font-serif-instrument text-2xl italic mb-6">Per-Workshop Costs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Lecturers (3 × €500)</span>
                                    <span className="font-bold">€1,500</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Catering</span>
                                    <span className="font-bold">€150</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Chairs rental</span>
                                    <span className="font-bold">€100</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Production reserve</span>
                                    <span className="font-bold">€100</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Marketing</span>
                                    <span className="font-bold">€200</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-amber-400 font-bold">Total per Workshop</span>
                                    <span className="text-2xl font-serif-instrument">€2,050</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="font-serif-instrument text-3xl italic mb-8 text-center">Monthly Scenarios</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 border border-red-500/30 bg-red-500/5">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Pessimistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Minimum Viable</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Public: 1 × 25 @ €99</span>
                                        <span>€2,475</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Corporate: 1 × €6,900</span>
                                        <span>€6,900</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€9,375</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + 2 workshops)</span>
                                        <span className="text-red-400">-€10,200</span>
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-red-500/20 border border-red-500/30">
                                    <span className="text-2xl font-serif-instrument text-red-400">-€825</span>
                                    <p className="text-[10px] text-red-400/60 mt-1">Not sustainable</p>
                                </div>
                            </div>

                            <div className="p-8 border border-[#0047BB] bg-[#0047BB]/10">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">Realistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Target</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Public: 2 × 30 @ €99</span>
                                        <span>€5,940</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Corporate: 2 × €6,900</span>
                                        <span>€13,800</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€19,740</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + 4 workshops)</span>
                                        <span className="text-red-400">-€14,300</span>
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-green-500/20 border border-green-500/30">
                                    <span className="text-2xl font-serif-instrument text-green-400">+€5,440</span>
                                    <p className="text-[10px] text-green-400/60 mt-1">Healthy margin</p>
                                </div>
                            </div>

                            <div className="p-8 border border-green-500/30 bg-green-500/5">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Optimistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Stretch Goal</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Public: 2 × 40 @ €99</span>
                                        <span>€7,920</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Corporate: 3 × €6,900</span>
                                        <span>€20,700</span>
                                    </div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€28,620</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + 5 workshops)</span>
                                        <span className="text-red-400">-€16,350</span>
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-green-500/20 border border-green-500/30">
                                    <span className="text-2xl font-serif-instrument text-green-400">+€12,270</span>
                                    <p className="text-[10px] text-green-400/60 mt-1">Strong growth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border border-white/20 bg-white/5 mb-16">
                        <h3 className="font-serif-instrument text-2xl italic mb-6 text-center">Break-Even Analysis</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">1</p>
                                <p className="text-sm text-white/60 mt-2">Corporate deal covers fixed costs</p>
                                <p className="text-xs text-white/40">€6,900 / €6,100 = 113%</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">62</p>
                                <p className="text-sm text-white/60 mt-2">Public seats to cover fixed</p>
                                <p className="text-xs text-white/40">€6,100 / €99 = 62 people</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">2+2</p>
                                <p className="text-sm text-white/60 mt-2">Monthly target for profit</p>
                                <p className="text-xs text-white/40">2 public + 2 corporate</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="font-serif-instrument text-3xl italic mb-4">Year 1 Conservative Projection</h3>
                        <p className="text-white/40 mb-8">(March - December, 10 months @ realistic scenario)</p>
                        <div className="inline-grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-5xl font-serif-instrument text-white">€197k</p>
                                <p className="text-sm text-white/40 mt-2">Revenue</p>
                            </div>
                            <div>
                                <p className="text-5xl font-serif-instrument text-red-400">€143k</p>
                                <p className="text-sm text-white/40 mt-2">Costs</p>
                            </div>
                            <div>
                                <p className="text-5xl font-serif-instrument text-green-400">€54k</p>
                                <p className="text-sm text-white/40 mt-2">Profit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // PROJECTIONS // INTERNAL
                </p>
            </footer>
        </div>
    )
}
