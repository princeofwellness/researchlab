"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

// --- Components ---

function Section({ id, number, title, children, className }: any) {
    return (
        <section id={id} className={cn("py-32 border-b border-black last:border-0 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-20"
            >
                <div className="space-y-8 mb-24">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{number}</span>
                        <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <h2 className="font-serif-instrument text-7xl md:text-8xl tracking-tighter leading-none">{title}</h2>
                </div>
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}

function PhaseCard({ number, title, subtitle, desc, items }: any) {
    return (
        <div className="border border-black/10 bg-white p-8 md:p-12 relative group hover:border-black transition-colors">
            <span className="absolute top-8 right-8 text-[10px] font-bold tracking-[0.3em] opacity-30">PHASE {number}</span>
            <h3 className="text-3xl font-serif-instrument italic mb-2">{title}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0047BB] mb-8">{subtitle}</p>
            <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-xl">
                {desc}
            </p>
            <ul className="space-y-3">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                        <span className="text-sm font-inter opacity-70 leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function TrackCard({ title, expert, focus, desc, outcome, active }: any) {
    return (
        <div className={cn(
            "p-10 border transition-all duration-500",
            active ? "bg-black text-white border-black scale-[1.02] shadow-2xl" : "bg-white text-black border-black/10 hover:border-black"
        )}>
            <div className="flex justify-between items-start mb-8">
                <h4 className="font-serif-instrument text-4xl italic">{title}</h4>
                <span className={cn(
                    "text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 border",
                    active ? "border-white/20 text-white/60" : "border-black/10 text-black/40"
                )}>{focus}</span>
            </div>
            
            <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">LED BY</p>
                <p className="font-serif-instrument text-xl">{expert}</p>
            </div>

            <p className={cn("text-sm leading-relaxed mb-8", active ? "opacity-80" : "opacity-60")}>
                {desc}
            </p>

            <div className={cn("pt-8 border-t", active ? "border-white/20" : "border-black/10")}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">OUTCOME</p>
                <p className="font-medium">{outcome}</p>
            </div>
        </div>
    )
}

export default function ProtocolPage() {
    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav />

            {/* Hero */}
            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-black relative">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            THE PROTOCOL
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] leading-[0.8] tracking-tighter mb-16"
                    >
                        Cognitive <br />
                        <span className="text-[#0047BB] italic">Rehabilitation.</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-black/10 pt-12">
                        <div className="max-w-md">
                            <p className="text-xl leading-relaxed text-black/70">
                                This is not a workshop. It is an intervention. We treat AI paralysis and "slop addiction" by installing a new operating system for your business.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Therapy (Mindset)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Surgery (Process)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Implant (Toolkit)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Dual Core Philosophy */}
            <Section number="01" title="Dual Core">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
                    <div className="bg-white p-12 md:p-20 space-y-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">RIGHT BRAIN</span>
                        <h3 className="font-serif-instrument text-5xl italic">The Creative</h3>
                        <p className="text-lg text-black/60 leading-relaxed">
                            Focuses on taste, nuance, and the "soul" of the brand. Ensures AI output isn't generic. Teaches your team to stop prompting and start curating.
                        </p>
                        <div className="pt-8 border-t border-black/10">
                            <p className="text-xs font-bold uppercase tracking-widest">Roland Vraník</p>
                            <p className="text-[10px] opacity-50 mt-1">FOUNDER & CD</p>
                        </div>
                    </div>
                    <div className="bg-white p-12 md:p-20 space-y-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">LEFT BRAIN</span>
                        <h3 className="font-serif-instrument text-5xl italic">The Architect</h3>
                        <p className="text-lg text-black/60 leading-relaxed">
                            Focuses on scale, systems, and logic. Builds the pipelines that allow the creative vision to be executed 100x faster without breaking.
                        </p>
                        <div className="pt-8 border-t border-black/10">
                            <p className="text-xs font-bold uppercase tracking-widest">Ján Koščelanský</p>
                            <p className="text-[10px] opacity-50 mt-1">CO-FOUNDER & CPO</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* The Arc */}
            <Section number="02" title="The Arc">
                <div className="space-y-8 max-w-5xl mx-auto">
                    <PhaseCard 
                        number="01"
                        title="The Diagnosis"
                        subtitle="THERAPY & MINDSET (90 MIN)"
                        desc="We break the current mental model. We prove that AI creates average work unless steered by an expert. We identify the 'Sea of Sameness' in your current output."
                        items={[
                            "The 'Slop' Audit: Blind test of your work vs. AI",
                            "Cognitive Sorting: Using the 6T Framework",
                            "The 'Driver' Mindset Shift"
                        ]}
                    />
                    <PhaseCard 
                        number="02"
                        title="The Surgery"
                        subtitle="KNOWING BY DOING (120 MIN)"
                        desc="We split into tracks. We don't talk about theory; we solve one burning problem in the room using the Hybrid approach."
                        items={[
                            "Real-time workflow construction",
                            "solving actual company bottlenecks",
                            "From 'Prompting' to 'Orchestration'"
                        ]}
                    />
                    <PhaseCard 
                        number="03"
                        title="The Implant"
                        subtitle="INSTALLATION (30 MIN)"
                        desc="We leave you with a system, not just notes. We install the 'Second Brain' on your devices."
                        items={[
                            "Deploying the Digital Toolkit",
                            "Installation ceremony",
                            "The Driver's Manual handover"
                        ]}
                    />
                </div>
            </Section>

            {/* The Tracks */}
            <Section number="03" title="The Tracks">
                <div className="mb-16 max-w-3xl">
                    <p className="text-xl text-black/60 leading-relaxed">
                        In Phase 02, we divide and conquer. Your team chooses the surgery they need.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TrackCard 
                        title="The Studio"
                        focus="CREATIVE & BRAND"
                        expert="The Creative Founder"
                        desc="For marketing, design, and content teams. We move from generating ideas to generating variations. The goal is variance and taste."
                        outcome="The '100-to-1' Curation Workflow"
                        active={false}
                    />
                    <TrackCard 
                        title="The Engine"
                        focus="PRODUCT & OPS"
                        expert="The Systems Architect"
                        desc="For operations, legal, and product teams. We build 'RAG' architectures to talk to your data securely. The goal is accuracy and speed."
                        outcome="The Analyst Agent Blueprint"
                        active={true}
                    />
                </div>
            </Section>

            {/* The Digital Toolkit */}
            <Section number="04" title="The Toolkit">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <p className="text-2xl font-serif-instrument italic leading-relaxed">
                            We don't charge for the time. <br />
                            We charge for the <span className="text-[#0047BB]">System</span> we install.
                        </p>
                        <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                            Every client receives the Base System (The Console). You then select your specialized Game Cartridge based on your industry.
                        </p>
                    </div>
                    <div className="space-y-px bg-black/10 border border-black/10">
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">The Constitution</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">BASE SYSTEM</span>
                        </div>
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">Decision Matrix (6T)</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">BASE SYSTEM</span>
                        </div>
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">The Driver's Manual</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">BASE SYSTEM</span>
                        </div>
                        <div className="bg-[#0047BB] text-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl italic">The Muse / Analyst Pack</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-60">INDUSTRY MODULE</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* The Menu */}
            <section className="py-32 px-6 md:px-20 border-t border-black bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB] block mb-8">SELECTION</span>
                        <h2 className="font-serif-instrument text-6xl md:text-8xl tracking-tighter leading-none">Which OS do you need?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-white/20 p-10 space-y-8 hover:bg-white/5 transition-colors">
                            <h3 className="text-3xl font-serif-instrument italic">The Amplifier</h3>
                            <p className="text-sm opacity-60 leading-relaxed h-20">
                                "Our work feels generic. We are scared AI will make us boring."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/10">
                                <li className="text-xs font-bold uppercase tracking-widest">Creative Focus</li>
                                <li className="text-xs opacity-60">The Muse Pack</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-10 space-y-8 hover:bg-white/5 transition-colors">
                            <h3 className="text-3xl font-serif-instrument italic">The Accelerator</h3>
                            <p className="text-sm opacity-60 leading-relaxed h-20">
                                "We are drowning in admin. We need speed and accuracy."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/10">
                                <li className="text-xs font-bold uppercase tracking-widest">Systems Focus</li>
                                <li className="text-xs opacity-60">The Analyst Pack</li>
                            </ul>
                        </div>
                        <div className="bg-[#0047BB] text-white p-10 space-y-8 border border-[#0047BB] relative overflow-hidden">
                            <h3 className="text-3xl font-serif-instrument italic relative z-10">The Transformation</h3>
                            <p className="text-sm opacity-80 leading-relaxed h-20 relative z-10">
                                "We need to change our entire DNA. Magic meets Logic."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/20 relative z-10">
                                <li className="text-xs font-bold uppercase tracking-widest">Full Hybrid</li>
                                <li className="text-xs opacity-80">Complete Toolkit</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Protocol Inquiry&body=We are interested in The Transformation protocol."
                            className="bg-white text-black px-16 py-6 font-inter font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#0047BB] hover:text-white transition-all inline-block"
                        >
                            Start The Protocol
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
