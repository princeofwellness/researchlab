"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function MarketingStrategyPage() {
    const [activePhase, setActivePhase] = useState<number>(1)

    const launchDate = new Date('2026-02-26')
    const today = new Date()
    const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    const timeline = {
        phases: [
            {
                id: 0,
                name: "ALREADY DONE",
                dates: "Oct 2025 - Jan 2026",
                status: "complete",
                color: "#10b981",
                focus: "4 months of free toolkits. Trust built.",
                actions: [
                    "Monthly toolkit delivered",
                    "Email list growing",
                    "Social presence established",
                    "Audience knows who you are"
                ],
                insight: "You're not starting from zero. You have a warm audience."
            },
            {
                id: 1,
                name: "TRANSITION",
                dates: "Jan 27 - Feb 9",
                status: "current",
                color: "#0047BB",
                focus: "Start mentioning THE SHIFT. Naturally.",
                actions: [
                    "Continue toolkit value (don't stop)",
                    "Behind-scenes: 'We're building something...'",
                    "Tease without hard sell",
                    "DM warm leads personally",
                    "Ask influencer friends to save the date"
                ],
                insight: "Soft introduction. Let curiosity build."
            },
            {
                id: 2,
                name: "ANNOUNCE",
                dates: "Feb 10 - Feb 16",
                status: "upcoming",
                color: "#6366f1",
                focus: "Official announcement. Registration opens.",
                actions: [
                    "Email blast: 'It's happening'",
                    "LinkedIn/IG announcement posts",
                    "Friends reshare (ask personally)",
                    "Early bird for toolkit subscribers",
                    "Limited seats messaging"
                ],
                insight: "Your email list is your #1 asset here."
            },
            {
                id: 3,
                name: "FILL SEATS",
                dates: "Feb 17 - Feb 25",
                status: "upcoming",
                color: "#f59e0b",
                focus: "Urgency. Social proof. Close.",
                actions: [
                    "'X seats left' updates",
                    "Countdown posts",
                    "Personal DMs to engaged followers",
                    "Final email sequence",
                    "Friends post testimonials/endorsements"
                ],
                insight: "Warm leads + email list = filled room."
            },
            {
                id: 4,
                name: "DELIVER + CAPTURE",
                dates: "Feb 26+",
                status: "upcoming",
                color: "#ec4899",
                focus: "Session #1. Capture everything. Amplify.",
                actions: [
                    "Deliver incredible session",
                    "Capture video reactions on the spot",
                    "Collect testimonials immediately",
                    "Attendees reshare (UGC starts here)",
                    "Open Session #2 registration"
                ],
                insight: "UGC happens AFTER the session, not before."
            }
        ]
    }

    const channels = [
        {
            name: "Email List",
            icon: "📧",
            priority: "HIGHEST",
            why: "You own it. Direct conversion. 4 months of subscribers.",
            actions: ["Announce to list first", "Early bird access", "3-email launch sequence"],
            cost: "€0",
            expected: "50% of seats"
        },
        {
            name: "Warm Leads",
            icon: "🔥",
            priority: "HIGH",
            why: "Personal network. Highest conversion. Free.",
            actions: ["Each founder: 20 personal contacts", "Call/voice note (not mass message)", "Frame as invitation"],
            cost: "€0",
            expected: "30% of seats"
        },
        {
            name: "Influencer Friends",
            icon: "🤝",
            priority: "HIGH",
            why: "Free reach to new audiences. Social proof.",
            actions: ["Ask 10 friends to reshare", "Give them early access/free seat", "They post their experience later"],
            cost: "€0 (or free seats)",
            expected: "15% of seats"
        },
        {
            name: "Organic Social",
            icon: "📱",
            priority: "MEDIUM",
            why: "Awareness + credibility. Not direct conversion.",
            actions: ["3-4 posts/week", "Behind-scenes content", "Hook-first writing"],
            cost: "€0",
            expected: "5% of seats"
        },
        {
            name: "Paid Ads",
            icon: "💰",
            priority: "NOT NOW",
            why: "Wait until you have testimonials + proven conversion.",
            actions: ["Skip for Session #1", "Use after you have video testimonials", "Retarget warm audience first"],
            cost: "€0 (for now)",
            expected: "0% (Session #1)"
        },
        {
            name: "UGC",
            icon: "🎬",
            priority: "AFTER SESSION",
            why: "You can't have UGC before the thing happens.",
            actions: ["Capture reactions AT the session", "Ask attendees to post", "Use for Session #2 marketing"],
            cost: "€0",
            expected: "Asset for future"
        }
    ]

    const attentionPrinciples = [
        {
            principle: "Hook in 2 seconds",
            desc: "First line decides if anyone reads the rest.",
            examples: ["'I made this in 20 minutes.'", "'Most AI advice is useless.'", "'What we shipped with 2 people.'"]
        },
        {
            principle: "Specific > Generic",
            desc: "Numbers, timeframes, concrete examples.",
            examples: ["'4 hours saved every day' vs 'save time'", "'€5M revenue' vs 'successful'", "'20 minutes' vs 'quickly'"]
        },
        {
            principle: "Controversy creates conversation",
            desc: "Opinions that make people react.",
            examples: ["'You don't need to learn prompting.'", "'AI courses are mostly useless.'", "'The 10-person team is dead.'"]
        },
        {
            principle: "Show, don't tell",
            desc: "Results > claims. Process > promises.",
            examples: ["Time-lapse of creation", "Before/after", "Live work, not slides"]
        }
    ]

    const math = {
        session: {
            seats: 30,
            price: 99,
            revenue: 2970
        },
        sources: [
            { source: "Email list", percent: 50, seats: 15 },
            { source: "Warm leads", percent: 30, seats: 9 },
            { source: "Friend reshares", percent: 15, seats: 5 },
            { source: "Organic social", percent: 5, seats: 1 }
        ],
        cost: "€0",
        note: "First session should be filled 100% organically."
    }

    const currentPhase = timeline.phases[activePhase]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav />

            {/* Hero */}
            <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black/10 relative">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            MARKETING PLAYBOOK
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter mt-4"
                    >
                        The Path to<br/>
                        <span className="text-[#0047BB] italic">Feb 26.</span>
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex flex-wrap items-center gap-6"
                    >
                        <div className="flex items-center gap-3 px-6 py-4 bg-[#0047BB]/10 border border-[#0047BB]/20">
                            <span className="text-4xl font-serif-instrument text-[#0047BB]">{daysUntilLaunch}</span>
                            <span className="text-sm text-black/50">days left</span>
                        </div>
                        <div className="text-sm text-black/40 max-w-md">
                            You've been delivering value for 4 months. Now it's time to transition — not launch cold.
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reality Check */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#0047BB]/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] mb-6">REALITY CHECK</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">You're Not Starting Cold</h3>
                            <p className="text-sm text-black/50">4 months of toolkits = warm audience. This isn't a launch from zero.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">No Paid Ads Needed</h3>
                            <p className="text-sm text-black/50">Email + warm leads + friend reshares = 30 seats. Save ads for scaling later.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">UGC Comes After</h3>
                            <p className="text-sm text-black/50">You can't have user content before the session. Capture it on Feb 26.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">TIMELINE</h2>
                    
                    {/* Phase Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {timeline.phases.map((phase) => (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(phase.id)}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border",
                                    activePhase === phase.id 
                                        ? "text-white border-transparent" 
                                        : "text-black/40 border-black/10 hover:border-black/20 bg-white"
                                )}
                                style={{ 
                                    backgroundColor: activePhase === phase.id ? phase.color : undefined
                                }}
                            >
                                {phase.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Phase */}
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        <div className="p-8 bg-white border-2" style={{ borderColor: currentPhase.color }}>
                            <div className="flex items-center gap-3 mb-4">
                                <span 
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: currentPhase.color }}
                                />
                                <span className="text-xs text-black/40">{currentPhase.dates}</span>
                                {currentPhase.status === 'complete' && (
                                    <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 bg-green-100 text-green-700">DONE</span>
                                )}
                                {currentPhase.status === 'current' && (
                                    <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 bg-blue-100 text-blue-700">NOW</span>
                                )}
                            </div>
                            <h3 className="text-2xl font-serif-instrument italic mb-4">{currentPhase.focus}</h3>
                            <p className="text-sm text-black/50 p-4 bg-black/5 border-l-2" style={{ borderColor: currentPhase.color }}>
                                {currentPhase.insight}
                            </p>
                        </div>

                        <div className="p-8 bg-white border border-black/10">
                            <h4 className="text-[10px] font-bold tracking-widest text-black/40 mb-4">ACTIONS</h4>
                            <div className="space-y-3">
                                {currentPhase.actions.map((action: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div 
                                            className="w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                                            style={{ backgroundColor: `${currentPhase.color}20`, color: currentPhase.color }}
                                        >
                                            {i + 1}
                                        </div>
                                        <span className="text-sm text-black/70">{action}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Bar */}
                    <div className="mt-12 relative h-2 bg-black/5 rounded-full">
                        <div 
                            className="absolute top-0 left-0 h-full bg-[#0047BB] rounded-full transition-all"
                            style={{ width: `${((activePhase + 1) / timeline.phases.length) * 100}%` }}
                        />
                        <div className="absolute top-4 left-0 right-0 flex justify-between">
                            {timeline.phases.map((phase) => (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={cn(
                                        "text-[8px] font-bold tracking-widest transition-all",
                                        activePhase === phase.id ? "text-[#0047BB]" : "text-black/30"
                                    )}
                                >
                                    {phase.dates.split(' - ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Strategy */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">CHANNEL STRATEGY</h2>
                    <p className="text-2xl font-serif-instrument italic text-[#0047BB] mb-8">Fill 30 seats with €0 ad spend.</p>
                    
                    <div className="space-y-4">
                        {channels.map((channel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "p-6 border transition-all",
                                    channel.priority === "HIGHEST" ? "border-2 border-[#0047BB] bg-[#0047BB]/5" :
                                    channel.priority === "NOT NOW" || channel.priority === "AFTER SESSION" ? "border-black/5 bg-black/[0.02] opacity-60" :
                                    "border-black/10"
                                )}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-3 md:w-40 shrink-0">
                                        <span className="text-2xl">{channel.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-sm">{channel.name}</h3>
                                            <span className={cn(
                                                "text-[9px] font-bold tracking-widest",
                                                channel.priority === "HIGHEST" ? "text-[#0047BB]" :
                                                channel.priority === "HIGH" ? "text-green-600" :
                                                channel.priority === "MEDIUM" ? "text-yellow-600" :
                                                "text-black/30"
                                            )}>
                                                {channel.priority}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 md:w-48 shrink-0">{channel.why}</p>
                                    <div className="flex-1 flex flex-wrap gap-2">
                                        {channel.actions.map((action: string, j: number) => (
                                            <span key={j} className="text-xs px-3 py-1 bg-black/5 text-black/60">
                                                {action}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="md:w-24 shrink-0 text-right">
                                        <div className="text-sm font-bold text-[#0047BB]">{channel.expected}</div>
                                        <div className="text-[10px] text-black/30">{channel.cost}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* World of Attention */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">THE ATTENTION GAME</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">You have 2 seconds. Make them count.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {attentionPrinciples.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border border-black/10"
                            >
                                <h3 className="font-bold text-[#0047BB] mb-2">{item.principle}</h3>
                                <p className="text-sm text-black/50 mb-4">{item.desc}</p>
                                <div className="space-y-2">
                                    {item.examples.map((ex: string, j: number) => (
                                        <div key={j} className="text-xs text-black/60 flex items-start gap-2">
                                            <span className="text-[#0047BB]">→</span>
                                            <span>{ex}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Math */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#0047BB] text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">THE MATH</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-6xl font-serif-instrument">{math.session.seats}</span>
                                <span className="text-xl text-white/50">seats × €{math.session.price} = </span>
                                <span className="text-4xl font-serif-instrument">€{math.session.revenue.toLocaleString()}</span>
                            </div>
                            
                            <div className="space-y-4">
                                {math.sources.map((source, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-full max-w-[200px] h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-white rounded-full"
                                                style={{ width: `${source.percent}%` }}
                                            />
                                        </div>
                                        <span className="text-sm text-white/70 w-32">{source.source}</span>
                                        <span className="text-lg font-bold">{source.seats} seats</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white/10 border border-white/20">
                            <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">KEY INSIGHT</h3>
                            <p className="text-xl font-serif-instrument italic mb-4">{math.note}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold tracking-widest text-white/40">AD SPEND</span>
                                <span className="text-3xl font-serif-instrument">{math.cost}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Types */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">CONTENT TO CREATE</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Behind Scenes</h3>
                            <p className="text-xs text-black/50 mb-4">Show the making of THE SHIFT</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Prep videos</div>
                                <div>• Speaker discussions</div>
                                <div>• Venue setup</div>
                            </div>
                        </div>
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Value Posts</h3>
                            <p className="text-xs text-black/50 mb-4">Tips, tools, insights (keep giving)</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Tool of the week</div>
                                <div>• Quick wins</div>
                                <div>• Frameworks</div>
                            </div>
                        </div>
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Show the Work</h3>
                            <p className="text-xs text-black/50 mb-4">Live creation, results, process</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Time-lapses</div>
                                <div>• Before/after</div>
                                <div>• Ship updates</div>
                            </div>
                        </div>
                        <div className="p-6 border border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="font-bold mb-2 text-[#0047BB]">THE SHIFT Posts</h3>
                            <p className="text-xs text-black/50 mb-4">Direct promotion (20% of content)</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Announcement</div>
                                <div>• Seats left</div>
                                <div>• Countdown</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekly Rhythm */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">WEEKLY RHYTHM</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-black/10">
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">DAY</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">LINKEDIN</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">INSTAGRAM</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">EMAIL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Mon</td>
                                    <td className="py-3 px-4 text-black/60">Value post (Roland)</td>
                                    <td className="py-3 px-4 text-black/60">Story: Week ahead</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Tue</td>
                                    <td className="py-3 px-4 text-black/60">Show work (Jan)</td>
                                    <td className="py-3 px-4 text-black/60">Reel: Behind scenes</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Wed</td>
                                    <td className="py-3 px-4 text-black/60">Framework (Roman)</td>
                                    <td className="py-3 px-4 text-black/60">Carousel: Tips</td>
                                    <td className="py-3 px-4 text-[#0047BB]">Weekly toolkit</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Thu</td>
                                    <td className="py-3 px-4 text-black/60">Engage (comment day)</td>
                                    <td className="py-3 px-4 text-black/60">Story: Poll/Q&A</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Fri</td>
                                    <td className="py-3 px-4 text-[#0047BB]">THE SHIFT mention</td>
                                    <td className="py-3 px-4 text-black/60">Reel: Show work</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-bold">Sat/Sun</td>
                                    <td className="py-3 px-4 text-black/40">Rest / engage</td>
                                    <td className="py-3 px-4 text-black/60">Story: Personal</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Action Items */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">THIS WEEK</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">ROLAND</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ 1 behind-scenes video</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">JÁN</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ Show work content</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">ROMAN</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ Framework content</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <div className="flex justify-center gap-4 mb-8">
                    <Link href="/public" className="px-6 py-3 bg-[#0047BB] text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                        View THE SHIFT
                    </Link>
                    <Link href="/corporate" className="px-6 py-3 border border-black/20 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-all">
                        View Corporate
                    </Link>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // PLAYBOOK
                </p>
            </footer>
        </div>
    )
}
