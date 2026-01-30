"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function MarketingStrategyPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [activePhase, setActivePhase] = useState<number>(0)

    const launchDate = new Date('2026-02-26')
    const today = new Date()
    const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    const content = {
        en: {
            header: {
                label: "MARKETING PLAYBOOK",
                title: "The Path to Feb 26.",
                subtitle: "Warm up. Build trust. Fill seats. Repeat.",
                daysLeft: `${daysUntilLaunch} days until first session`
            },
            overview: {
                title: "The Big Picture",
                principle: "Give €900 of value before asking for €99.",
                tracks: [
                    { 
                        name: "Public Sessions", 
                        target: "THE SHIFT", 
                        price: "€99", 
                        goal: "30 seats/session",
                        purpose: "Build community, create ambassadors, prove concept"
                    },
                    { 
                        name: "Corporate Workshops", 
                        target: "DEEP DIVE", 
                        price: "€6,900", 
                        goal: "1-2/month",
                        purpose: "Revenue engine, brought in by public attendees or direct outreach"
                    }
                ],
                flywheel: [
                    "Free value (social, toolkit)",
                    "Email capture",
                    "Warm audience",
                    "Public session (€99)",
                    "Attendees → Ambassadors",
                    "Referrals → Corporate (€6,900)",
                    "Repeat"
                ]
            },
            timeline: {
                title: "Timeline to Launch",
                phases: [
                    {
                        name: "WARM-UP",
                        dates: "Jan 20 - Feb 9",
                        weeks: "3 weeks",
                        color: "#0047BB",
                        focus: "Build trust. No selling.",
                        actions: [
                            "Launch free monthly toolkit",
                            "Daily social content (value-first)",
                            "Build email list (target: 200+)",
                            "Personal outreach to warm leads",
                            "Engage: reply to every comment"
                        ],
                        metrics: [
                            { label: "Email signups", target: "200+" },
                            { label: "Social engagement", target: "3%+" },
                            { label: "Warm lead calls", target: "30+" }
                        ]
                    },
                    {
                        name: "SOFT LAUNCH",
                        dates: "Feb 10 - Feb 16",
                        weeks: "1 week",
                        color: "#6366f1",
                        focus: "Introduce THE SHIFT. Soft mentions.",
                        actions: [
                            "Tease 'something coming'",
                            "Behind-scenes of session prep",
                            "Email sequence: 'You're invited'",
                            "Early bird for engaged followers",
                            "Testimonial prep (mock sessions)"
                        ],
                        metrics: [
                            { label: "Interest signals", target: "50+" },
                            { label: "Early reservations", target: "10+" },
                            { label: "Email open rate", target: "40%+" }
                        ]
                    },
                    {
                        name: "LAUNCH",
                        dates: "Feb 17 - Feb 25",
                        weeks: "9 days",
                        color: "#10b981",
                        focus: "Fill seats. Create urgency.",
                        actions: [
                            "Official announcement",
                            "Countdown content",
                            "'X seats left' updates",
                            "Final push emails",
                            "Personal DMs to engaged leads"
                        ],
                        metrics: [
                            { label: "Seats filled", target: "30" },
                            { label: "Waitlist", target: "20+" },
                            { label: "Conversion rate", target: "5%+" }
                        ]
                    },
                    {
                        name: "SESSION #1",
                        dates: "Feb 26",
                        weeks: "Day 0",
                        color: "#f59e0b",
                        focus: "Deliver. Capture. Convert.",
                        actions: [
                            "Deliver incredible session",
                            "Capture reactions (video, quotes)",
                            "Collect testimonials on the spot",
                            "Announce next session date",
                            "Identify corporate prospects"
                        ],
                        metrics: [
                            { label: "NPS score", target: "9+" },
                            { label: "Testimonials", target: "10+" },
                            { label: "Corporate leads", target: "3+" }
                        ]
                    },
                    {
                        name: "POST-LAUNCH",
                        dates: "Feb 27+",
                        weeks: "Ongoing",
                        color: "#ec4899",
                        focus: "Amplify. Scale. Repeat.",
                        actions: [
                            "Share testimonials everywhere",
                            "Follow up with corporate leads",
                            "Open next session registration",
                            "Build recurring monthly rhythm",
                            "Document everything for playbook"
                        ],
                        metrics: [
                            { label: "Session #2 signups", target: "20+" },
                            { label: "Corporate calls", target: "5+" },
                            { label: "Referrals", target: "10+" }
                        ]
                    }
                ]
            },
            channels: {
                title: "Channel Strategy",
                items: [
                    {
                        name: "Warm Leads",
                        icon: "🔥",
                        priority: "HIGH",
                        description: "Personal network of all 3 founders",
                        tactics: [
                            "Each founder lists 20+ contacts",
                            "Personal calls/messages (not mass)",
                            "Frame: invitation, not pitch",
                            "Target: 15 seats from warm leads"
                        ],
                        timeline: "Week 1-3",
                        cost: "€0"
                    },
                    {
                        name: "LinkedIn",
                        icon: "💼",
                        priority: "HIGH",
                        description: "B2B credibility, corporate pipeline",
                        tactics: [
                            "3-4 posts/week per founder",
                            "Show work, share insights, hot takes",
                            "Engage in comments (not just post)",
                            "Target: Decision makers, founders, creatives"
                        ],
                        timeline: "Ongoing",
                        cost: "€0"
                    },
                    {
                        name: "Instagram",
                        icon: "📸",
                        priority: "MEDIUM",
                        description: "Younger creatives, visual showcase",
                        tactics: [
                            "Reels: time-lapses, behind scenes",
                            "Carousels: tips, tools, frameworks",
                            "Stories: daily engagement, polls",
                            "Target: Designers, creators, founders"
                        ],
                        timeline: "Ongoing",
                        cost: "€0"
                    },
                    {
                        name: "Email",
                        icon: "📧",
                        priority: "HIGH",
                        description: "Owned audience, direct conversion",
                        tactics: [
                            "Free toolkit = email capture",
                            "Weekly value emails",
                            "Launch sequence (5 emails)",
                            "Target: 200+ subscribers before launch"
                        ],
                        timeline: "Week 1+",
                        cost: "~€30/mo"
                    },
                    {
                        name: "Paid Ads",
                        icon: "💰",
                        priority: "LOW (for now)",
                        description: "Scale after proof, not before",
                        tactics: [
                            "Wait until: testimonials + proven conversion",
                            "Start with retargeting warm audience",
                            "Meta: €5-15 CPL realistic",
                            "LinkedIn: €30-80 CPL (expensive but quality)"
                        ],
                        timeline: "Post Session #1",
                        cost: "€500-1000/mo when ready"
                    }
                ]
            },
            content: {
                title: "Content Playbook",
                pillars: [
                    { 
                        name: "Show the Work", 
                        desc: "Behind-scenes, live creation, process reveals",
                        examples: ["Time-lapse videos", "Before/after", "Tool demos"]
                    },
                    { 
                        name: "Hot Takes", 
                        desc: "Opinions that spark conversation",
                        examples: ["Unpopular opinions", "Myth-busting", "Predictions"]
                    },
                    { 
                        name: "Quick Wins", 
                        desc: "Tips people can use TODAY",
                        examples: ["One prompt that...", "Tool I can't stop using", "5-min tutorial"]
                    },
                    { 
                        name: "Human Moments", 
                        desc: "Personality, failures, fun",
                        examples: ["Experiments gone wrong", "Personal stories", "Memes"]
                    }
                ],
                hooks: [
                    "I made this in 20 minutes. Here's how.",
                    "Most AI advice is useless. Here's what actually works.",
                    "What we shipped this week with 2 people.",
                    "One tool. 4 hours saved. Every single day.",
                    "The question I ask before any AI decision.",
                    "Unpopular opinion: You don't need to learn prompting."
                ],
                frequency: {
                    linkedin: "3-4 posts/week per founder",
                    instagram: "1 post/day, 3-5 stories/day",
                    email: "1x/week during warm-up, 3-5x during launch"
                }
            },
            toolkit: {
                title: "Free Toolkit Strategy",
                what: "Monthly curated AI tools, prompts, templates",
                why: "Email capture + recurring value = warm audience",
                flow: [
                    "Promote on social → Landing page",
                    "Collect email (name + email only)",
                    "Deliver toolkit immediately",
                    "Weekly value emails",
                    "Monthly: new toolkit + engagement",
                    "Launch: invite to THE SHIFT"
                ]
            },
            corporate: {
                title: "Corporate Pipeline",
                sources: [
                    { source: "Public attendees", desc: "They attend → love it → bring to company", likelihood: "HIGH" },
                    { source: "Direct outreach", desc: "Warm leads who have teams", likelihood: "MEDIUM" },
                    { source: "Referrals", desc: "Word of mouth from satisfied clients", likelihood: "HIGH" },
                    { source: "LinkedIn content", desc: "Decision makers see value → reach out", likelihood: "MEDIUM" }
                ],
                timeline: "Corporate pipeline builds AFTER first public sessions prove value"
            },
            metrics: {
                title: "Success Metrics",
                primary: [
                    { metric: "Seats filled (Session #1)", target: "30/30", why: "Proof of concept" },
                    { metric: "Email list size", target: "200+", why: "Owned audience" },
                    { metric: "Testimonials collected", target: "10+", why: "Social proof" },
                    { metric: "Corporate leads", target: "3+", why: "Revenue pipeline" }
                ],
                secondary: [
                    { metric: "LinkedIn engagement", target: "3%+" },
                    { metric: "Email open rate", target: "40%+" },
                    { metric: "Conversion rate (email → ticket)", target: "5%+" },
                    { metric: "Referral rate", target: "30%+" }
                ]
            }
        }
    }

    const t = content.en
    const currentPhase = t.timeline.phases[activePhase]

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-[#0047BB]/40">
            <TopNav variant="dark" customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-white/5 transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            } />

            {/* Hero */}
            <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0047BB]/20 to-transparent" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            {t.header.label}
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter mt-4"
                    >
                        {t.header.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/50 mt-6"
                    >
                        {t.header.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 inline-flex items-center gap-4 px-6 py-3 bg-[#0047BB]/20 border border-[#0047BB]/40"
                    >
                        <span className="text-4xl font-serif-instrument text-[#0047BB]">{daysUntilLaunch}</span>
                        <span className="text-sm text-white/60">days until<br/>Feb 26, 2026</span>
                    </motion.div>
                </div>
            </section>

            {/* Big Picture */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">{t.overview.title}</h2>
                    <p className="text-2xl md:text-3xl font-serif-instrument italic text-[#0047BB] mb-12">
                        "{t.overview.principle}"
                    </p>

                    {/* Two Tracks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {t.overview.tracks.map((track: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "p-8 border",
                                    i === 0 ? "border-[#0047BB] bg-[#0047BB]/10" : "border-white/20 bg-white/5"
                                )}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-[10px] font-bold tracking-widest text-white/40">{track.name}</span>
                                        <h3 className="text-2xl font-serif-instrument italic mt-1">{track.target}</h3>
                                    </div>
                                    <span className="text-3xl font-serif-instrument text-[#0047BB]">{track.price}</span>
                                </div>
                                <p className="text-sm text-white/50 mb-4">{track.purpose}</p>
                                <div className="text-xs text-white/30">Goal: {track.goal}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Flywheel */}
                    <div className="p-8 border border-white/10 bg-white/5">
                        <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">THE FLYWHEEL</h3>
                        <div className="flex flex-wrap items-center gap-4">
                            {t.overview.flywheel.map((step: string, i: number) => (
                                <React.Fragment key={i}>
                                    <span className={cn(
                                        "px-4 py-2 text-sm",
                                        i === 3 ? "bg-[#0047BB] text-white" : 
                                        i === 5 ? "bg-green-500/20 text-green-400 border border-green-500/40" :
                                        "bg-white/10 text-white/70"
                                    )}>
                                        {step}
                                    </span>
                                    {i < t.overview.flywheel.length - 1 && (
                                        <span className="text-white/20">→</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">{t.timeline.title}</h2>
                    
                    {/* Phase Selector */}
                    <div className="flex flex-wrap gap-2 mb-8">
                            {t.timeline.phases.map((phase: any, i: number) => (
                            <button
                                key={i}
                                onClick={() => setActivePhase(i)}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                                    activePhase === i 
                                        ? "text-white" 
                                        : "text-white/30 hover:text-white/60"
                                )}
                                style={{ 
                                    backgroundColor: activePhase === i ? phase.color : 'transparent',
                                    borderBottom: activePhase === i ? 'none' : `2px solid ${phase.color}40`
                                }}
                            >
                                {phase.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Phase Detail */}
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                        {/* Phase Info */}
                        <div className="p-8 border border-white/10" style={{ borderLeftColor: currentPhase.color, borderLeftWidth: 4 }}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl font-serif-instrument" style={{ color: currentPhase.color }}>
                                    {String(activePhase + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold">{currentPhase.name}</h3>
                                    <p className="text-xs text-white/40">{currentPhase.dates} • {currentPhase.weeks}</p>
                                </div>
                            </div>
                            <p className="text-lg text-white/70 font-serif-instrument italic">"{currentPhase.focus}"</p>
                        </div>

                        {/* Actions */}
                        <div className="p-8 border border-white/10 bg-white/5">
                            <h4 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">ACTIONS</h4>
                            <div className="space-y-3">
                                {currentPhase.actions.map((action: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-5 h-5 flex items-center justify-center text-xs border border-white/20 text-white/40 shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-white/70">{action}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="p-8 border border-white/10" style={{ backgroundColor: `${currentPhase.color}10` }}>
                            <h4 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">TARGET METRICS</h4>
                            <div className="space-y-4">
                                {currentPhase.metrics.map((metric: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-sm text-white/60">{metric.label}</span>
                                        <span className="text-lg font-bold" style={{ color: currentPhase.color }}>{metric.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Visual */}
                    <div className="mt-12 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
                        <div className="flex justify-between relative">
                        {t.timeline.phases.map((phase: any, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => setActivePhase(i)}
                                    className={cn(
                                        "flex flex-col items-center gap-2 transition-all",
                                        activePhase === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                                    )}
                                >
                                    <div 
                                        className="w-4 h-4 rounded-full border-2"
                                        style={{ 
                                            backgroundColor: activePhase === i ? phase.color : 'transparent',
                                            borderColor: phase.color
                                        }}
                                    />
                                    <span className="text-[8px] font-bold tracking-widest text-white/60 hidden md:block">
                                        {phase.dates.split(' - ')[0]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Strategy */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">{t.channels.title}</h2>
                    <div className="space-y-4">
                        {t.channels.items.map((channel: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                                        <span className="text-2xl">{channel.icon}</span>
                                        <div>
                                            <h3 className="font-bold">{channel.name}</h3>
                                            <span className={cn(
                                                "text-[9px] font-bold tracking-widest",
                                                channel.priority === "HIGH" ? "text-green-400" :
                                                channel.priority === "MEDIUM" ? "text-yellow-400" : "text-white/30"
                                            )}>
                                                {channel.priority}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/50 md:w-48 shrink-0">{channel.description}</p>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2">
                                            {channel.tactics.map((tactic: string, j: number) => (
                                                <span key={j} className="text-xs px-3 py-1 bg-white/5 text-white/60">
                                                    {tactic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-right md:w-24 shrink-0">
                                        <div className="text-xs text-white/30">{channel.timeline}</div>
                                        <div className="text-sm font-bold text-[#0047BB]">{channel.cost}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Playbook */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10 bg-[#0047BB]/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">{t.content.title}</h2>
                    
                    {/* Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {t.content.pillars.map((pillar: any, i: number) => (
                            <div key={i} className="p-6 border border-white/10 bg-black/20">
                                <h3 className="font-bold text-[#0047BB] mb-2">{pillar.name}</h3>
                                <p className="text-sm text-white/50 mb-4">{pillar.desc}</p>
                                <div className="space-y-1">
                                    {pillar.examples.map((ex: string, j: number) => (
                                        <span key={j} className="text-xs text-white/30 block">• {ex}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hooks */}
                    <div className="p-8 border border-white/10">
                        <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">HOOK TEMPLATES</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {t.content.hooks.map((hook: string, i: number) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-[#0047BB]">→</span>
                                    <span className="text-white/70">"{hook}"</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frequency */}
                    <div className="mt-8 flex flex-wrap gap-6">
                        <div className="px-6 py-4 bg-white/5 border border-white/10">
                            <span className="text-[10px] font-bold tracking-widest text-white/40 block mb-1">LINKEDIN</span>
                            <span className="text-sm text-white/70">{t.content.frequency.linkedin}</span>
                        </div>
                        <div className="px-6 py-4 bg-white/5 border border-white/10">
                            <span className="text-[10px] font-bold tracking-widest text-white/40 block mb-1">INSTAGRAM</span>
                            <span className="text-sm text-white/70">{t.content.frequency.instagram}</span>
                        </div>
                        <div className="px-6 py-4 bg-white/5 border border-white/10">
                            <span className="text-[10px] font-bold tracking-widest text-white/40 block mb-1">EMAIL</span>
                            <span className="text-sm text-white/70">{t.content.frequency.email}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toolkit Funnel */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">{t.toolkit.title}</h2>
                    <p className="text-lg text-white/50 mb-8">{t.toolkit.what}</p>
                    
                    <div className="flex flex-col md:flex-row items-stretch gap-4">
                        {t.toolkit.flow.map((step: string, i: number) => (
                            <React.Fragment key={i}>
                                <div className={cn(
                                    "flex-1 p-6 border text-center",
                                    i === 1 ? "border-[#0047BB] bg-[#0047BB]/10" : "border-white/10"
                                )}>
                                    <span className="text-[10px] font-bold text-white/30 block mb-2">{String(i + 1).padStart(2, '0')}</span>
                                    <span className="text-sm text-white/70">{step}</span>
                                </div>
                                {i < t.toolkit.flow.length - 1 && (
                                    <div className="hidden md:flex items-center text-white/20">→</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Pipeline */}
            <section className="py-20 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-green-500/5 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">{t.corporate.title}</h2>
                    <p className="text-sm text-white/40 mb-8 max-w-2xl">{t.corporate.timeline}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.corporate.sources.map((source: any, i: number) => (
                            <div key={i} className="p-6 border border-white/10 flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold mb-1">{source.source}</h3>
                                    <p className="text-sm text-white/50">{source.desc}</p>
                                </div>
                                <span className={cn(
                                    "text-[9px] font-bold tracking-widest px-2 py-1",
                                    source.likelihood === "HIGH" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                                )}>
                                    {source.likelihood}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">{t.metrics.title}</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Primary */}
                        <div className="p-8 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-6">PRIMARY METRICS</h3>
                            <div className="space-y-6">
                                {t.metrics.primary.map((m: any, i: number) => (
                                    <div key={i} className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold">{m.metric}</h4>
                                            <p className="text-xs text-white/40">{m.why}</p>
                                        </div>
                                        <span className="text-2xl font-serif-instrument text-[#0047BB]">{m.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Secondary */}
                        <div className="p-8 border border-white/10">
                            <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">SECONDARY METRICS</h3>
                            <div className="space-y-4">
                                {t.metrics.secondary.map((m: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-sm text-white/60">{m.metric}</span>
                                        <span className="font-bold text-white/80">{m.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-white/40 mb-6">Ready to execute?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/public" className="px-8 py-4 bg-[#0047BB] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0047BB]/80 transition-all">
                            View Public Session
                        </Link>
                        <Link href="/corporate" className="px-8 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                            View Corporate
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                    SORRYWECAN // RESEARCH LAB // INTERNAL PLAYBOOK
                </p>
            </footer>
        </div>
    )
}
