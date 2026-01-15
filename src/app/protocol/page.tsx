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

function PhaseCard({ number, title, subtitle, desc, items, highlight }: any) {
    return (
        <div className={cn(
            "border border-black/10 bg-white p-8 md:p-12 relative group hover:border-black transition-colors",
            highlight && "bg-[#0047BB]/5 border-[#0047BB]/20"
        )}>
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

function TrackCard({ title, expert, focus, desc, outcome, tags, active }: any) {
    return (
        <div className={cn(
            "p-10 border transition-all duration-500 flex flex-col",
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

            <p className={cn("text-sm leading-relaxed mb-8 flex-grow", active ? "opacity-80" : "opacity-60")}>
                {desc}
            </p>

            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                        <span key={tag} className={cn(
                            "text-[9px] font-bold uppercase tracking-wider px-2 py-1",
                            active ? "bg-white/10 text-white" : "bg-black/5 text-black"
                        )}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={cn("pt-6 border-t", active ? "border-white/20" : "border-black/10")}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">OUTPUT</p>
                    <p className="font-medium">{outcome}</p>
                </div>
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
                        The Cognitive <br />
                        <span className="text-[#0047BB] italic">Operating System.</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-black/10 pt-12">
                        <div className="max-w-md">
                            <p className="text-xl leading-relaxed text-black/70">
                                Companies don't just need software; they need a new way to think. We audit your mindset, map your automation potential, and install the navigation tools to survive speed.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Audit (Diagnosis)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Map (Prototyping)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#0047BB]" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Integrate (Mindset)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Trinity Philosophy */}
            <Section number="01" title="The Trinity">
                <div className="mb-16">
                    <p className="text-xl text-black/60 max-w-3xl leading-relaxed">
                        Transformation requires three forces: Vision to see the future, Logic to build the path, and Awareness to stay on it. We bring all three.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
                    {/* The Creative */}
                    <div className="bg-white p-10 space-y-8 flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">THE SPARK</span>
                        <h3 className="font-serif-instrument text-4xl italic">The Creative</h3>
                        <p className="text-sm text-black/60 leading-relaxed flex-grow">
                            Focuses on taste, variance, and the "soul" of the brand. Ensures AI output isn't generic. Teaches your team to stop prompting and start curating.
                        </p>
                        <div className="pt-8 border-t border-black/10">
                            <p className="text-xs font-bold uppercase tracking-widest">Roland Vraník</p>
                            <p className="text-[10px] opacity-50 mt-1">FOUNDER & CD</p>
                        </div>
                    </div>

                    {/* The Navigator (Center) */}
                    <div className="bg-white p-10 space-y-8 flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">THE COMPASS</span>
                        <h3 className="font-serif-instrument text-4xl italic">The Navigator</h3>
                        <p className="text-sm text-black/60 leading-relaxed flex-grow">
                            Focuses on purpose, human agency, and "Zen" in the age of speed. Grounds the team so they can steer the machine without being consumed by it.
                        </p>
                        <div className="pt-8 border-t border-black/10">
                            <p className="text-xs font-bold uppercase tracking-widest">Roman Pii Wagner</p>
                            <p className="text-[10px] opacity-50 mt-1">TRANSFORMATIONAL DESIGN</p>
                        </div>
                    </div>

                    {/* The Architect */}
                    <div className="bg-white p-10 space-y-8 flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">THE ENGINE</span>
                        <h3 className="font-serif-instrument text-4xl italic">The Architect</h3>
                        <p className="text-sm text-black/60 leading-relaxed flex-grow">
                            Focuses on scale, sovereignty, and logic. Builds the pipelines and safety layers (Private Models) that allow vision to scale securely.
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
                        title="The Vision"
                        subtitle="OPENING THE STATE (90 MIN)"
                        desc="We start with the 'Art of the Possible'. We shatter the 'Sea of Sameness' by showing what AI looks like when steered by C-Level Vision and Taste, not just prompts."
                        items={[
                            "Breaking the 'Slop' mental model",
                            "C-Level Visual Thinking & Strategy",
                            "Defining the new standard of Quality"
                        ]}
                    />
                    <PhaseCard 
                        number="02"
                        title="The Architecture"
                        subtitle="DIAGNOSIS & MAPPING (120 MIN)"
                        desc="From vision to logic. We audit your current workflows and map the 'Automaton Blueprint'—identifying exactly where to inject speed and where to preserve soul."
                        items={[
                            "Auditing current bottlenecks",
                            "Mapping automation potential",
                            "Building the blueprint live"
                        ]}
                    />
                    <PhaseCard 
                        number="03"
                        title="The Integration"
                        subtitle="HANDOVER & ANCHORING (30 MIN)"
                        desc="We don't just leave you with ideas. We install the 'Cognitive OS'. You walk away with a functioning Digital Toolkit and the mindset to navigate the new speed."
                        items={[
                            "The 'Human Constant' session",
                            "Handover of the Digital Toolkit",
                            "Installation of the Decision Matrix"
                        ]}
                        highlight
                    />
                </div>
            </Section>

            {/* The Tracks */}
            <Section number="03" title="The Tracks">
                <div className="mb-16 max-w-3xl">
                    <p className="text-xl text-black/60 leading-relaxed">
                        In Phase 02, we customize the intervention. What is your primary operating deficit?
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TrackCard 
                        title="The Studio"
                        focus="CREATIVE & BRAND"
                        expert="The Creative"
                        desc="For C-levels, design leads, and brand guardians. We focus on Visual Strategy and 'How to Think' with AI. The goal is variance, taste, and high-level direction."
                        outcome="The '100-to-1' Curation Workflow"
                        tags={["Taste", "Visual Strategy", "C-Level Thinking", "Brand Voice"]}
                        active={false}
                    />
                    <TrackCard 
                        title="The Engine"
                        focus="PRODUCT & OPS"
                        expert="The Architect"
                        desc="For operations, legal, and product teams. We focus on 'Sovereign AI'—private models, RAG architectures, and secure automation. The goal is accuracy and scale."
                        outcome="The Sovereign Automation Blueprint"
                        tags={["Logic", "Private Models", "Regulations", "RAG"]}
                        active={true}
                    />
                </div>
            </Section>

            {/* The Digital Toolkit */}
            <Section number="04" title="The Toolkit">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <p className="text-2xl font-serif-instrument italic leading-relaxed">
                            We don't charge for hours. <br />
                            We charge for the <span className="text-[#0047BB]">Cognitive OS</span> we install.
                        </p>
                        <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                            This is not just software. It is a set of mental models, decision matrices, and digital artifacts that remain with you forever.
                        </p>
                    </div>
                    <div className="space-y-px bg-black/10 border border-black/10">
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">The Constitution (Prompt)</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">BASE SYSTEM</span>
                        </div>
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">Decision Matrix (6T)</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">MENTAL MODEL</span>
                        </div>
                        <div className="bg-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl">The Navigator's Manual</span>
                            <span className="text-[9px] uppercase tracking-widest opacity-40">GUIDE</span>
                        </div>
                        <div className="bg-[#0047BB] text-white p-8 flex justify-between items-center">
                            <span className="font-serif-instrument text-xl italic">Sovereignty / Muse Pack</span>
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
                                "Our work feels generic. We need to restore taste and variance."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/10">
                                <li className="text-xs font-bold uppercase tracking-widest">Creative OS</li>
                                <li className="text-xs opacity-60">Creative + Navigator</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-10 space-y-8 hover:bg-white/5 transition-colors">
                            <h3 className="text-3xl font-serif-instrument italic">The Sovereign</h3>
                            <p className="text-sm opacity-60 leading-relaxed h-20">
                                "We need speed, privacy, and secure automation."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/10">
                                <li className="text-xs font-bold uppercase tracking-widest">Product OS</li>
                                <li className="text-xs opacity-60">Architect + Navigator</li>
                            </ul>
                        </div>
                        <div className="bg-[#0047BB] text-white p-10 space-y-8 border border-[#0047BB] relative overflow-hidden">
                            <h3 className="text-3xl font-serif-instrument italic relative z-10">The Trinity</h3>
                            <p className="text-sm opacity-80 leading-relaxed h-20 relative z-10">
                                "We need to change our entire DNA. Vision, Logic, and Mindset."
                            </p>
                            <ul className="space-y-4 pt-8 border-t border-white/20 relative z-10">
                                <li className="text-xs font-bold uppercase tracking-widest">Full Hybrid OS</li>
                                <li className="text-xs opacity-80">Roland + Jan + Roman</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Protocol Inquiry&body=We are interested in The Trinity protocol."
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
