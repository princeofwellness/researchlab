"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function EnhancementsPage() {
    const [activeTab, setActiveTab] = useState<string>("social-proof")

    const tabs = [
        { id: "social-proof", label: "Social Proof", color: "#0047BB" },
        { id: "testimonials", label: "Testimonials", color: "#10b981" },
        { id: "next-steps", label: "Part II / Follow-up", color: "#8b5cf6" },
        { id: "visual", label: "Visual Content", color: "#f59e0b" },
        { id: "pricing", label: "Pricing Ideas", color: "#ec4899" }
    ]

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-[#0047BB]/20">
            <TopNav variant="dark" />

            {/* Hero */}
            <section className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-white/10">
                <div className="max-w-5xl mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            INTERNAL ROADMAP
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[6vw] leading-[0.9] tracking-tighter mt-4"
                    >
                        Possible<br />
                        <span className="text-[#0047BB] italic">Enhancements.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/50 mt-6 max-w-2xl"
                    >
                        Ideas and improvements to implement. Review, prioritize, execute.
                    </motion.p>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-8 px-6 md:px-12 border-b border-white/10 sticky top-16 bg-[#0a0a0a]/95 backdrop-blur-sm z-40">
                <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border",
                                activeTab === tab.id
                                    ? "text-white border-transparent"
                                    : "text-white/40 border-white/10 hover:border-white/20"
                            )}
                            style={{ backgroundColor: activeTab === tab.id ? tab.color : "transparent" }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    
                    {/* SOCIAL PROOF TAB */}
                    {activeTab === "social-proof" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Trusted Partners Section</h2>
                                <p className="text-white/50 mb-8">Add logos of companies you've worked with to build credibility.</p>
                                
                                <div className="p-8 border border-white/10 bg-white/5">
                                    <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">PROPOSED DESIGN</h3>
                                    <p className="text-sm text-white/60 mb-6">Section title: "Trusted By" or "We've Worked With"</p>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="h-20 border border-dashed border-white/20 flex items-center justify-center">
                                            <span className="text-sm font-bold text-[#0047BB]">EYERIM</span>
                                        </div>
                                        <div className="h-20 border border-dashed border-white/20 flex items-center justify-center">
                                            <span className="text-sm font-bold text-white/30">SUDOLABS</span>
                                        </div>
                                        <div className="h-20 border border-dashed border-white/20 flex items-center justify-center">
                                            <span className="text-sm font-bold text-white/30">SORRYWECAN</span>
                                        </div>
                                        <div className="h-20 border border-dashed border-white/20 flex items-center justify-center">
                                            <span className="text-xs text-white/20">+ More</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 p-4 bg-[#0047BB]/20 border border-[#0047BB]/30">
                                        <h4 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-2">PLACEMENT</h4>
                                        <ul className="text-sm text-white/60 space-y-1">
                                            <li>→ Homepage: After hero, before "Two Ways In"</li>
                                            <li>→ Corporate page: After problem section</li>
                                            <li>→ Public page: Before founders section</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Stats with Attribution</h2>
                                <p className="text-white/50 mb-8">Current stats lack source. Add context or real data.</p>
                                
                                <div className="p-8 border border-white/10 bg-white/5">
                                    <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">CURRENT vs ENHANCED</h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-4 border border-red-500/30 bg-red-500/5">
                                            <span className="text-[9px] font-bold tracking-widest text-red-400">CURRENT (WEAK)</span>
                                            <p className="text-2xl font-serif-instrument mt-2">4+ hours saved</p>
                                            <p className="text-sm text-white/40">per person weekly</p>
                                        </div>
                                        <div className="p-4 border border-green-500/30 bg-green-500/5">
                                            <span className="text-[9px] font-bold tracking-widest text-green-400">ENHANCED (STRONG)</span>
                                            <p className="text-2xl font-serif-instrument mt-2">4+ hours saved</p>
                                            <p className="text-sm text-white/40">per person weekly</p>
                                            <p className="text-xs text-green-400 mt-2">Based on Eyerim workshop feedback</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* TESTIMONIALS TAB */}
                    {activeTab === "testimonials" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Real Testimonials Needed</h2>
                                <p className="text-white/50 mb-8">Replace generic quotes with real names and companies.</p>
                                
                                <div className="space-y-6">
                                    {/* Eyerim - Ready */}
                                    <div className="p-8 border-2 border-[#0047BB] bg-[#0047BB]/10">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-[10px] font-bold tracking-widest text-[#0047BB]">READY TO COLLECT</span>
                                            <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-[#0047BB] text-white">PRIORITY</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Eyerim</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">CONTACT</p>
                                                <p className="text-white/70">CEO of Eyerim</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">CONTEXT</p>
                                                <p className="text-white/70">Did workshop for them. They owe a favor.</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">TESTIMONIAL TEMPLATE</p>
                                                <div className="p-4 bg-black/30 border border-white/10 font-mono text-sm">
                                                    <p className="text-white/60 italic">"[Quote about workshop impact - 2-3 sentences]"</p>
                                                    <p className="text-white/40 mt-2">— [Name], CEO, Eyerim</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">QUESTIONS TO ASK</p>
                                                <ul className="text-sm text-white/60 space-y-1">
                                                    <li>→ What changed after the workshop?</li>
                                                    <li>→ What surprised you most?</li>
                                                    <li>→ Would you recommend it? Why?</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other potential testimonials */}
                                    <div className="p-8 border border-white/10 bg-white/5">
                                        <span className="text-[10px] font-bold tracking-widest text-white/40">FUTURE TESTIMONIALS</span>
                                        <h3 className="text-xl font-bold mt-2 mb-4">Other C-Level Contacts</h3>
                                        
                                        <div className="space-y-4">
                                            <div className="p-4 border border-dashed border-white/20">
                                                <p className="text-sm text-white/40">Placeholder: Creative Agency Head</p>
                                                <p className="text-xs text-white/20 mt-1">After THE MINDSHIFT session → collect testimonial</p>
                                            </div>
                                            <div className="p-4 border border-dashed border-white/20">
                                                <p className="text-sm text-white/40">Placeholder: Tech Startup CEO</p>
                                                <p className="text-xs text-white/20 mt-1">After corporate workshop → collect testimonial</p>
                                            </div>
                                            <div className="p-4 border border-dashed border-white/20">
                                                <p className="text-sm text-white/40">Placeholder: Marketing Director</p>
                                                <p className="text-xs text-white/20 mt-1">After corporate workshop → collect testimonial</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Current weak testimonial */}
                                    <div className="p-8 border border-red-500/30 bg-red-500/5">
                                        <span className="text-[10px] font-bold tracking-widest text-red-400">CURRENT (WEAK - REPLACE)</span>
                                        <div className="mt-4 p-4 bg-black/30">
                                            <p className="text-lg italic text-white/60">"We thought we knew AI. We didn't know how to think with it."</p>
                                            <p className="text-sm text-white/30 mt-2">— Head of Creative, Major Agency</p>
                                        </div>
                                        <p className="text-xs text-red-400 mt-4">Problem: Generic, no real name, no company. Low trust.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* PART II / FOLLOW-UP TAB */}
                    {activeTab === "next-steps" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Part II / Follow-up Path</h2>
                                <p className="text-white/50 mb-8">After THE MINDSHIFT or Corporate Workshop, what's next? Roman Wagner handles this.</p>
                                
                                <div className="p-8 border border-white/10 bg-white/5">
                                    <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">PROPOSED SECTION: "WHAT'S NEXT"</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="p-6 border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="w-8 h-8 bg-[#8b5cf6] text-white flex items-center justify-center font-bold text-sm">II</span>
                                                <h4 className="text-xl font-bold">Part II: Deep Dive</h4>
                                            </div>
                                            <p className="text-white/60 mb-4">For those who want to go deeper after THE MINDSHIFT.</p>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">LED BY</p>
                                                    <p className="text-white/70">Roman Wagner</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold tracking-widest text-white/40 mb-1">FORMAT</p>
                                                    <p className="text-white/70">TBD (workshop / consulting / cohort)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 border border-white/10">
                                            <h4 className="text-lg font-bold mb-3">Corporate Workshop</h4>
                                            <p className="text-white/60">Bring it to your whole team. €5,900 + VAT.</p>
                                            <p className="text-xs text-white/30 mt-2">Already exists → link to /corporate</p>
                                        </div>

                                        <div className="p-6 border border-white/10">
                                            <h4 className="text-lg font-bold mb-3">1-on-1 Consulting</h4>
                                            <p className="text-white/60">Personal guidance for your specific challenges.</p>
                                            <p className="text-xs text-white/30 mt-2">Future offering? Define scope and pricing.</p>
                                        </div>

                                        <div className="p-6 border border-white/10">
                                            <h4 className="text-lg font-bold mb-3">Community Access</h4>
                                            <p className="text-white/60">Stay connected with others on the same path.</p>
                                            <p className="text-xs text-white/30 mt-2">Discord? Slack? Define platform.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 p-4 bg-[#0047BB]/20 border border-[#0047BB]/30">
                                        <h4 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-2">PLACEMENT</h4>
                                        <ul className="text-sm text-white/60 space-y-1">
                                            <li>→ Public page: After FAQ, before final CTA</li>
                                            <li>→ Corporate page: After outcomes section</li>
                                            <li>→ New dedicated page: /next-steps or /part-two</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">FAQ Enhancement</h2>
                                <p className="text-white/50 mb-8">Current FAQ mentions "corporate workshops" but doesn't promote Part II.</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 border border-red-500/30 bg-red-500/5">
                                        <span className="text-[9px] font-bold tracking-widest text-red-400">CURRENT FAQ</span>
                                        <p className="font-bold mt-2">What if I want more after?</p>
                                        <p className="text-sm text-white/50 mt-2">"Good. That's what the corporate workshops are for. Or join again."</p>
                                    </div>
                                    <div className="p-6 border border-green-500/30 bg-green-500/5">
                                        <span className="text-[9px] font-bold tracking-widest text-green-400">ENHANCED FAQ</span>
                                        <p className="font-bold mt-2">What if I want more after?</p>
                                        <p className="text-sm text-white/50 mt-2">"We've got you. Part II with Roman goes deeper. Corporate workshops bring it to your team. Or join the community and keep learning together."</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* VISUAL CONTENT TAB */}
                    {activeTab === "visual" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Lecture Photos</h2>
                                <p className="text-white/50 mb-8">Show real moments from sessions. Build trust through visual evidence.</p>
                                
                                <div className="p-8 border border-white/10 bg-white/5">
                                    <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-6">PROPOSED PHOTO GRID</h3>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="aspect-video border border-dashed border-white/20 flex items-center justify-center bg-white/5">
                                                <div className="text-center">
                                                    <span className="text-2xl text-white/20">📷</span>
                                                    <p className="text-xs text-white/30 mt-2">Photo {i}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest text-white/40 mb-2">PHOTOS TO CAPTURE AT FEB 26 SESSION</p>
                                            <ul className="text-sm text-white/60 space-y-1">
                                                <li>→ Founders presenting (Roland, Ján, Roman)</li>
                                                <li>→ Attendees working / engaged</li>
                                                <li>→ Room setup / venue atmosphere</li>
                                                <li>→ Candid moments / discussions</li>
                                                <li>→ Group photo at the end</li>
                                                <li>→ Behind-the-scenes prep</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 p-4 bg-[#0047BB]/20 border border-[#0047BB]/30">
                                        <h4 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-2">PLACEMENT</h4>
                                        <ul className="text-sm text-white/60 space-y-1">
                                            <li>→ Homepage: New section "Real Moments"</li>
                                            <li>→ Public page: After session structure</li>
                                            <li>→ Corporate page: In proof section</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Founder Photos</h2>
                                <p className="text-white/50 mb-8">Currently no photos of Roland, Ján, Roman. Add headshots.</p>
                                
                                <div className="p-8 border border-white/10 bg-white/5">
                                    <div className="grid grid-cols-3 gap-6">
                                        {["Roland Vraník", "Ján Koscelanský", "Roman Wagner"].map((name) => (
                                            <div key={name} className="text-center">
                                                <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5">
                                                    <span className="text-2xl text-white/20">👤</span>
                                                </div>
                                                <p className="text-sm font-bold mt-3">{name}</p>
                                                <p className="text-xs text-white/40">Headshot needed</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Video Content Ideas</h2>
                                <p className="text-white/50 mb-8">Beyond the video invite scripts already created.</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-2">Session Highlights Reel</h4>
                                        <p className="text-sm text-white/50">1-2 minute cut of best moments from Feb 26</p>
                                        <p className="text-xs text-white/30 mt-2">Use for: Social, landing page, ads (later)</p>
                                    </div>
                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-2">Testimonial Videos</h4>
                                        <p className="text-sm text-white/50">30-60 sec attendee reactions captured on-site</p>
                                        <p className="text-xs text-white/30 mt-2">Use for: Social proof, session #2 marketing</p>
                                    </div>
                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-2">Founder Intro Videos</h4>
                                        <p className="text-sm text-white/50">Each founder: 60 sec "who I am, what I bring"</p>
                                        <p className="text-xs text-white/30 mt-2">Use for: About section, LinkedIn</p>
                                    </div>
                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-2">"Day in the Life" Content</h4>
                                        <p className="text-sm text-white/50">Show how founders actually use AI daily</p>
                                        <p className="text-xs text-white/30 mt-2">Use for: Organic social, trust building</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* PRICING TAB */}
                    {activeTab === "pricing" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Current Pricing</h2>
                                <p className="text-white/50 mb-8">Prices as they stand today.</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-8 border border-white/10 bg-white/5">
                                        <span className="text-[10px] font-bold tracking-widest text-white/40">PUBLIC SESSION</span>
                                        <p className="text-5xl font-serif-instrument mt-2">€99</p>
                                        <p className="text-sm text-white/50 mt-2">+ VAT / per person / 3 hours</p>
                                        <p className="text-xs text-green-400 mt-4">✓ Good entry price</p>
                                    </div>
                                    <div className="p-8 border border-[#0047BB] bg-[#0047BB]/10">
                                        <span className="text-[10px] font-bold tracking-widest text-[#0047BB]">CORPORATE WORKSHOP</span>
                                        <p className="text-5xl font-serif-instrument mt-2">€5,900</p>
                                        <p className="text-sm text-white/50 mt-2">+ VAT / 10-15 people / 4-5 hours</p>
                                        <p className="text-xs text-[#0047BB] mt-4">Current price - keeping for now</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif-instrument italic mb-2">Future Pricing Ideas</h2>
                                <p className="text-white/50 mb-8">Options to consider as you scale.</p>
                                
                                <div className="space-y-6">
                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-3">Tiered Corporate Options</h4>
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div className="p-4 border border-white/10">
                                                <p className="text-[10px] font-bold tracking-widest text-white/40">STARTER</p>
                                                <p className="text-2xl font-serif-instrument mt-2">€3,900</p>
                                                <p className="text-xs text-white/40 mt-2">5-8 people / 3 hours / 1 facilitator</p>
                                            </div>
                                            <div className="p-4 border border-[#0047BB] bg-[#0047BB]/10">
                                                <p className="text-[10px] font-bold tracking-widest text-[#0047BB]">STANDARD</p>
                                                <p className="text-2xl font-serif-instrument mt-2">€5,900</p>
                                                <p className="text-xs text-white/40 mt-2">10-15 people / 5 hours / 3 facilitators</p>
                                            </div>
                                            <div className="p-4 border border-white/10">
                                                <p className="text-[10px] font-bold tracking-widest text-white/40">ENTERPRISE</p>
                                                <p className="text-2xl font-serif-instrument mt-2">Custom</p>
                                                <p className="text-xs text-white/40 mt-2">20+ people / multi-day / full support</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-3">Part II Pricing (Future)</h4>
                                        <p className="text-sm text-white/50 mb-4">When Roman's follow-up offering is defined:</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 border border-dashed border-white/20">
                                                <p className="text-[10px] font-bold tracking-widest text-white/40">GROUP COHORT</p>
                                                <p className="text-xl font-serif-instrument mt-2">€299-499</p>
                                                <p className="text-xs text-white/40 mt-2">4-week program / group sessions</p>
                                            </div>
                                            <div className="p-4 border border-dashed border-white/20">
                                                <p className="text-[10px] font-bold tracking-widest text-white/40">1-ON-1 CONSULTING</p>
                                                <p className="text-xl font-serif-instrument mt-2">€150-300/hr</p>
                                                <p className="text-xs text-white/40 mt-2">Direct access to Roman</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border border-white/10">
                                        <h4 className="font-bold mb-3">Early Bird / Loyalty Ideas</h4>
                                        <ul className="text-sm text-white/60 space-y-2">
                                            <li>→ Public attendees get 10% off corporate workshop</li>
                                            <li>→ Corporate clients get 2 free public seats</li>
                                            <li>→ Referral discount: €20 off for each referral</li>
                                            <li>→ Early bird: First 10 seats at €79 (creates urgency)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>
            </section>

            {/* Action Items Summary */}
            <section className="py-16 px-6 md:px-12 border-t border-white/10 bg-[#0047BB]/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-serif-instrument italic mb-8">Priority Action Items</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 border border-[#0047BB] bg-black/30">
                            <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-red-500 text-white">URGENT</span>
                            <h4 className="font-bold mt-3 mb-2">Fix Dates</h4>
                            <p className="text-sm text-white/50">Public page shows "February 2025" - should be 2026</p>
                        </div>
                        <div className="p-6 border border-[#0047BB] bg-black/30">
                            <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-[#0047BB] text-white">HIGH</span>
                            <h4 className="font-bold mt-3 mb-2">Get Eyerim Testimonial</h4>
                            <p className="text-sm text-white/50">Contact CEO, get quote, add to site</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-black/30">
                            <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-white/20 text-white">MEDIUM</span>
                            <h4 className="font-bold mt-3 mb-2">Capture Photos at Feb 26</h4>
                            <p className="text-sm text-white/50">Assign photographer, plan shots</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-black/30">
                            <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-white/20 text-white">MEDIUM</span>
                            <h4 className="font-bold mt-3 mb-2">Define Part II with Roman</h4>
                            <p className="text-sm text-white/50">Format, pricing, timeline for follow-up offering</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                    INTERNAL DOCUMENT // NOT PUBLIC // RESEARCH LAB
                </p>
            </footer>
        </div>
    )
}
