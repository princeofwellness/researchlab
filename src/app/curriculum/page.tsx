"use client"

import React from "react"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function CurriculumPage() {
    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav />

            {/* Header */}
            <section className="pt-28 pb-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] block mb-4">
                        INTERNAL REFERENCE // SPEAKER ALIGNMENT
                    </span>
                    <h1 className="font-serif-instrument text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                        Curriculum Blueprint
                    </h1>
                    <p className="text-lg text-black/50 max-w-2xl">
                        Working structure for the 4-5 hour transformation session. 
                        For Roland, Jan, Roman to review and iterate.
                    </p>
                </div>
            </section>

            {/* The Promise */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#f8f8f6]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        THE PROMISE
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">Expanded Thinking</h3>
                            <p className="text-sm text-black/50">Their minds will be wider than when they walked in. New mental models for AI.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">Practical Takeaways</h3>
                            <p className="text-sm text-black/50">They leave with something working. Not just theory.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">Clear ROI</h3>
                            <p className="text-sm text-black/50">Justifiable budget spend. Measurable time savings within 30 days.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Five Pillars Overview */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        THE FIVE PILLARS
                    </h2>
                    <p className="text-black/50 mb-10 max-w-2xl">
                        The transformation flows through these five domains. Not all covered equally — 
                        emphasis depends on the team's needs.
                    </p>
                    
                    <div className="grid grid-cols-5 gap-2">
                        {[
                            { num: "01", title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                            { num: "02", title: "Thinking", desc: "How to frame problems. Mental models that work." },
                            { num: "03", title: "Tools", desc: "What to use. Practical stack for their reality." },
                            { num: "04", title: "Automation", desc: "What to build. Workflows that run themselves." },
                            { num: "05", title: "Imagination", desc: "What's possible. Expanding the boundaries." },
                        ].map((pillar, i) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "p-4 border text-center",
                                    i === 2 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10"
                                )}
                            >
                                <span className="text-[9px] font-bold tracking-[0.2em] text-[#0047BB] block mb-2">[{pillar.num}]</span>
                                <h4 className="font-bold text-sm mb-2">{pillar.title}</h4>
                                <p className="text-[10px] text-black/40 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Session Flow */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">
                        SESSION FLOW
                    </h2>
                    <p className="text-2xl font-serif-instrument italic mb-10">
                        4-5 Hours. Four Phases.
                    </p>

                    <div className="space-y-6">
                        {/* Phase 1: Opening */}
                        <div className="border border-black/10 p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-[#0047BB] tracking-wider">PHASE 01</span>
                                    <h3 className="text-2xl font-serif-instrument italic mt-1">Opening</h3>
                                </div>
                                <span className="text-sm font-mono bg-black/5 px-3 py-1">~45 min</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHAT HAPPENS</h4>
                                    <ul className="space-y-2 text-sm text-black/60">
                                        <li>- Live demo with their actual work/brand</li>
                                        <li>- Show the "art of the possible" (wow moment)</li>
                                        <li>- Then we LISTEN: fears, blockers, reality</li>
                                        <li>- Calibrate session to what's in the room</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHO LEADS</h4>
                                    <p className="text-sm text-black/60 mb-4">Roland (The Creative) — opens with vision and possibility</p>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">PILLARS TOUCHED</h4>
                                    <p className="text-sm text-black/60">Navigation, Imagination</p>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2: Framework */}
                        <div className="border border-black/10 p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-[#0047BB] tracking-wider">PHASE 02</span>
                                    <h3 className="text-2xl font-serif-instrument italic mt-1">Framework</h3>
                                </div>
                                <span className="text-sm font-mono bg-black/5 px-3 py-1">~75 min</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHAT HAPPENS</h4>
                                    <ul className="space-y-2 text-sm text-black/60">
                                        <li>- How to THINK with AI (not just prompt)</li>
                                        <li>- Mental models for AI collaboration</li>
                                        <li>- The Human Edge: what to keep, what to delegate</li>
                                        <li>- Interactive Q&A — they ask, we adjust</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHO LEADS</h4>
                                    <p className="text-sm text-black/60 mb-4">Roman (The Navigator) — strategic clarity and mindset</p>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">PILLARS TOUCHED</h4>
                                    <p className="text-sm text-black/60">Thinking, Navigation</p>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3: Hands-On */}
                        <div className="border-2 border-[#0047BB] p-8 bg-[#0047BB]/5">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-[#0047BB] tracking-wider">PHASE 03</span>
                                    <h3 className="text-2xl font-serif-instrument italic mt-1">Hands-On</h3>
                                </div>
                                <span className="text-sm font-mono bg-white px-3 py-1">~120 min</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHAT HAPPENS</h4>
                                    <ul className="space-y-2 text-sm text-black/60">
                                        <li>- Tools + automation on THEIR actual tasks</li>
                                        <li>- Personal AI stack setup (configured, working)</li>
                                        <li>- Build 2-3 workflows for their processes</li>
                                        <li>- Personalized guidance, not generic demos</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHO LEADS</h4>
                                    <p className="text-sm text-black/60 mb-4">Jan (The Architect) — systems, tools, automation</p>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">PILLARS TOUCHED</h4>
                                    <p className="text-sm text-black/60">Tools, Automation (core focus)</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-[#0047BB]/20">
                                <p className="text-xs text-[#0047BB] font-medium">
                                    This is the CORE. They must leave with something working.
                                </p>
                            </div>
                        </div>

                        {/* Phase 4: Commitment */}
                        <div className="border border-black/10 p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-[10px] font-bold text-[#0047BB] tracking-wider">PHASE 04</span>
                                    <h3 className="text-2xl font-serif-instrument italic mt-1">Commitment</h3>
                                </div>
                                <span className="text-sm font-mono bg-black/5 px-3 py-1">~30 min</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHAT HAPPENS</h4>
                                    <ul className="space-y-2 text-sm text-black/60">
                                        <li>- What they'll ACTUALLY do in 30 days</li>
                                        <li>- Concrete, accountable action items</li>
                                        <li>- Set expectations for follow-up</li>
                                        <li>- Close with clarity, not overwhelm</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">WHO LEADS</h4>
                                    <p className="text-sm text-black/60 mb-4">All three — collaborative close</p>
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">PILLARS TOUCHED</h4>
                                    <p className="text-sm text-black/60">Navigation (what's next)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Break note */}
                    <div className="mt-8 p-4 bg-black/5 text-center">
                        <p className="text-xs text-black/50">
                            Breaks built in between phases. Total time: 4.5-5 hours with buffer.
                        </p>
                    </div>
                </div>
            </section>

            {/* What They Leave With */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">
                        WHAT THEY LEAVE WITH
                    </h2>
                    <p className="text-2xl font-serif-instrument italic mb-10">
                        Tangible. Practical. Ready for Monday.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border border-white/10">
                            <span className="text-[#0047BB] text-2xl font-serif-instrument">01</span>
                            <h3 className="font-bold mt-2 mb-2">Personal AI Stack</h3>
                            <p className="text-sm text-white/50">Configured. Working. Not just a list of tools — actually set up on their machines.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <span className="text-[#0047BB] text-2xl font-serif-instrument">02</span>
                            <h3 className="font-bold mt-2 mb-2">2-3 Working Automations</h3>
                            <p className="text-sm text-white/50">Built on THEIR processes during the session. Not templates — their workflows.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <span className="text-[#0047BB] text-2xl font-serif-instrument">03</span>
                            <h3 className="font-bold mt-2 mb-2">Thinking Frameworks</h3>
                            <p className="text-sm text-white/50">Mental models for AI collaboration. How to think, not just how to prompt.</p>
                        </div>
                        <div className="p-6 border border-white/10">
                            <span className="text-[#0047BB] text-2xl font-serif-instrument">04</span>
                            <h3 className="font-bold mt-2 mb-2">30-Day Action Plan</h3>
                            <p className="text-sm text-white/50">Concrete next steps. What they'll implement, when, and how to measure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Follow-Up Structure */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        FOLLOW-UP STRUCTURE
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-serif-instrument italic mb-4">Included in Package</h3>
                            <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-3xl font-serif-instrument text-[#0047BB]">1</span>
                                    <div>
                                        <p className="font-bold">Group Follow-Up Call</p>
                                        <p className="text-sm text-black/50">1 hour, ~30 days after session</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-black/60">
                                    <li>- Check progress on action items</li>
                                    <li>- Troubleshoot blockers</li>
                                    <li>- Answer questions that emerged</li>
                                    <li>- Celebrate wins, adjust course</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-serif-instrument italic mb-4">Optional: Ongoing Support</h3>
                            <div className="p-6 border border-black/10">
                                <p className="text-sm text-black/50 mb-4">
                                    For teams that want continued support:
                                </p>
                                <ul className="space-y-2 text-sm text-black/60">
                                    <li>- Monthly 1-hour check-in calls</li>
                                    <li>- Review progress, new challenges</li>
                                    <li>- Evolve their AI practice over time</li>
                                    <li>- Pricing TBD (separate from core package)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speaker Roles Summary */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#f8f8f6]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        SPEAKER ROLES
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-black/10">
                            <span className="text-[10px] font-bold tracking-wider text-[#0047BB]">THE CREATIVE</span>
                            <h3 className="text-xl font-serif-instrument italic mt-2 mb-1">Roland Vranik</h3>
                            <p className="text-xs text-black/40 mb-4">SORRYWECAN</p>
                            <p className="text-sm text-black/50 mb-4">Opens with imagination. Shows what's possible. Brings the creative lens.</p>
                            <p className="text-xs font-bold text-black/40">PRIMARY: Phase 01 (Opening)</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <span className="text-[10px] font-bold tracking-wider text-[#0047BB]">THE NAVIGATOR</span>
                            <h3 className="text-xl font-serif-instrument italic mt-2 mb-1">Roman Pii Wagner</h3>
                            <p className="text-xs text-black/40 mb-4">TRANSFORMATIONAL DESIGN</p>
                            <p className="text-sm text-black/50 mb-4">Strategic clarity. Mental models. How to think with AI, not just use it.</p>
                            <p className="text-xs font-bold text-black/40">PRIMARY: Phase 02 (Framework)</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <span className="text-[10px] font-bold tracking-wider text-[#0047BB]">THE ARCHITECT</span>
                            <h3 className="text-xl font-serif-instrument italic mt-2 mb-1">Jan Koscelansky</h3>
                            <p className="text-xs text-black/40 mb-4">SUDOLABS</p>
                            <p className="text-sm text-black/50 mb-4">Systems builder. Makes it practical. Ensures they leave with working tools.</p>
                            <p className="text-xs font-bold text-black/40">PRIMARY: Phase 03 (Hands-On)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Questions for Alignment */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        QUESTIONS FOR SPEAKERS
                    </h2>
                    <p className="text-black/50 mb-8">
                        To validate this curriculum structure:
                    </p>
                    
                    <div className="space-y-4">
                        {[
                            "Does this flow feel right? Opening → Framework → Hands-On → Commitment?",
                            "Are the time allocations realistic? (45 / 75 / 120 / 30 min)",
                            "Is the 'what they leave with' list achievable in this timeframe?",
                            "Does each speaker's primary phase align with their strengths?",
                            "What's missing? What would make this more holistic?",
                            "Are participant fears/blockers being addressed in the right phase?",
                        ].map((q, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 border border-black/10 hover:bg-black/5 transition-colors">
                                <span className="text-[#0047BB] font-bold text-sm">{i + 1}.</span>
                                <p className="text-sm text-black/70">{q}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    INTERNAL DOCUMENT // ITERATE FREELY // V1.0
                </p>
            </footer>
        </div>
    )
}
