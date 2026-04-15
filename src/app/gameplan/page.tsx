"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { 
    ArrowRight, 
    Users, 
    Mail, 
    Zap, 
    Target, 
    Award, 
    Layers, 
    Mic, 
    Share2, 
    BarChart3, 
    CheckCircle2,
    Play,
    Instagram,
    Linkedin,
    Cpu,
    RefreshCw
} from "lucide-react"

export default function GameplanPage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB] selection:text-white">
            <TopNav />

            <main>
                <HeroSection />
                <TrustEngineSection />
                <MainCharacterSection />
                <ContentMachineSection />
                <SocialPlaybookSection />
                <CommunityArcSection />
                <EmailArchitectureSection />
                <KeyInsightsSection />
                <TheNicheSection />
                <MetricsSection />
            </main>

            <footer className="py-12 text-center border-t border-black/10 bg-[#e8e1da]">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}

function HeroSection() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
            
            <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                        Growth Architecture // 2025-2026
                    </span>

                    <h1 className="font-cabinet font-bold text-[10vw] md:text-[6.5vw] leading-[0.9] tracking-tighter">
                        THE<br />
                        <span className="text-[#0047BB]">PLAYBOOK</span>
                    </h1>

                    <p className="text-lg md:text-xl text-black/60 max-w-2xl font-sans-brand leading-relaxed">
                        How to build, grow, and lead in AI education.
                    </p>

                    <div className="pt-4 border-t border-black/10 w-full max-w-md">
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">
                            You are the main character. This is the system.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function TrustEngineSection() {
    const steps = [
        { icon: Share2, title: "SOCIAL", desc: "Attention + Authority" },
        { icon: Target, title: "LEAD CAPTURE", desc: "Newsletter + Magnet" },
        { icon: Zap, title: "FIRST WIN", desc: "Onboarding + Proof" },
        { icon: Mail, title: "WEEKLY VALUE", desc: "Newsletter + Challenges" },
        { icon: Users, title: "COMMUNITY", desc: "Peer Trust + Rituals" },
        { icon: Layers, title: "PRODUCT LADDER", desc: "Free → Low → Core → Premium" },
        { icon: Award, title: "RETENTION", desc: "Case Studies + Growth" },
    ]

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 border-t border-black/10 bg-[#f4ede6]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="THE TRUST ENGINE" subtitle="Systematic Authority Building" />
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-black/10 -translate-y-1/2 hidden md:block" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-14 h-14 border border-black/[0.06] bg-white hover:border-[#0047BB]/30 transition-all duration-300 flex items-center justify-center shadow-sm">
                                    <step.icon className="w-5 h-5 text-black/40 group-hover:text-[#0047BB] transition-colors" />
                                </div>
                                <div className="space-y-2 bg-[#f4ede6] px-2">
                                    <h3 className="text-[10px] font-code-brand font-bold tracking-widest uppercase text-[#0a0a0a]">{step.title}</h3>
                                    <p className="text-[10px] font-code-brand text-black/40 leading-tight">{step.desc}</p>
                                </div>
                                
                                {i !== steps.length - 1 && (
                                    <ArrowRight className="md:hidden w-4 h-4 text-black/20 rotate-90 my-1" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function MainCharacterSection() {
    const roles = [
        { title: "The Educator", desc: "Teach what you practice. Not theory — real workflows, real results. Build in public. Show the work.", icon: Mic },
        { title: "The Curator", desc: "Don't add to the noise. Filter, test, and share only what works. Be the taste filter in a flood of AI content.", icon: Layers },
        { title: "The Connector", desc: "Build the room, not just the stage. Your community is your moat. Members trust members more than brands.", icon: Users },
        { title: "The Builder", desc: "Ship weekly. Templates, workflows, tools. Proof compounds. Every artefact is a trust deposit.", icon: Cpu },
    ]

    return (
        <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 bg-[#e8e1da]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="BECOME THE MAIN CHARACTER" subtitle="Personal Brand Strategy" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-8 border border-black/[0.06] bg-black/[0.03] hover:border-[#0047BB]/30 transition-all group flex flex-col h-full"
                        >
                            <div className="w-10 h-10 border border-black/[0.06] bg-white flex items-center justify-center text-[#0047BB] mb-6 shadow-sm">
                                <role.icon size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-cabinet font-bold mb-4">{role.title}</h3>
                            <p className="text-sm text-black/60 leading-relaxed font-sans-brand flex-1">{role.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ContentMachineSection() {
    const content = [
        { type: "Workflow Demos", format: "Short video (30-60s)", platform: "IG Reels, TikTok, YT Shorts", freq: "2-3x/week" },
        { type: "Teardowns", format: "Video or carousel", platform: "LinkedIn, IG", freq: "1x/week" },
        { type: "Build in Public", format: "Text + screenshots", platform: "LinkedIn", freq: "2x/week" },
        { type: "Long-form Deep Dives", format: "Article or video", platform: "LinkedIn, YouTube", freq: "1x/week" },
        { type: "Member Wins", format: "Story + carousel", platform: "IG, LinkedIn", freq: "1x/week" },
        { type: "Newsletter", format: "Email", platform: "Email list", freq: "1x/week" },
    ]

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 border-t border-black/10 bg-[#f4ede6]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="CONTENT MACHINE" subtitle="Production Schedule" />
                
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                    <div className="border border-black/[0.06] overflow-hidden bg-white/40">
                        <table className="w-full text-left">
                            <thead className="bg-black/[0.03] text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 border-b border-black/[0.06]">
                                <tr>
                                    <th className="p-5 font-normal">Type</th>
                                    <th className="p-5 font-normal hidden md:table-cell">Format</th>
                                    <th className="p-5 font-normal hidden md:table-cell">Platform</th>
                                    <th className="p-5 font-normal text-right">Freq</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/[0.06]">
                                {content.map((row, i) => (
                                    <tr key={i} className="hover:bg-black/[0.02] transition-colors">
                                        <td className="p-5 font-bold font-cabinet text-sm">{row.type}</td>
                                        <td className="p-5 text-black/60 text-sm hidden md:table-cell font-sans-brand">{row.format}</td>
                                        <td className="p-5 text-black/60 text-sm hidden md:table-cell font-sans-brand">{row.platform}</td>
                                        <td className="p-5 text-[#0047BB] font-code-brand text-xs font-bold text-right">{row.freq}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 border border-black/[0.06] bg-black/[0.03] flex flex-col justify-center space-y-6">
                        <h3 className="text-2xl font-cabinet font-bold">The 1 → 10 Rule</h3>
                        <p className="text-black/60 leading-relaxed font-serif-instrument italic text-lg">
                            Every piece becomes 10. <br/>
                            Anchor → clips → email → community thread → case study.
                        </p>
                        <div className="h-px w-full bg-black/10" />
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30">Maximize Leverage</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialPlaybookSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 bg-[#e8e1da]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="SOCIAL PLAYBOOK" subtitle="Platform Strategy" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 md:p-10 border border-black/[0.06] bg-black/[0.03] hover:border-[#0047BB]/30 transition-all space-y-8">
                        <div className="flex items-center gap-4 border-b border-black/5 pb-6">
                            <Linkedin className="w-6 h-6 text-[#0047BB]" />
                            <h3 className="text-xl font-cabinet font-bold">LinkedIn <span className="text-sm font-sans-brand font-normal text-black/40 ml-1">(Primary)</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {["Long-form posts with strong hooks", "'Art meets tech' positioning", "Build-in-public threads", "Workflow teardowns with screenshots", "Comment engagement (reply to everyone)"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-black/60">
                                    <CheckCircle2 className="w-4 h-4 text-[#0047BB] shrink-0 mt-0.5" />
                                    <span className="text-sm font-sans-brand">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-black/10">
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB]">Goal: Thought Leadership + Email Capture</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 border border-black/[0.06] bg-black/[0.03] hover:border-[#0047BB]/30 transition-all space-y-8">
                        <div className="flex items-center gap-4 border-b border-black/5 pb-6">
                            <Instagram className="w-6 h-6 text-[#0047BB]" />
                            <h3 className="text-xl font-cabinet font-bold">Instagram <span className="text-sm font-sans-brand font-normal text-black/40 ml-1">(Secondary)</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {["Reels: quick AI demos, before/after", "Stories: daily, raw, behind-scenes", "Carousels: frameworks, comparisons", "Visual aesthetic focus", "Direct Message engagement"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-black/60">
                                    <CheckCircle2 className="w-4 h-4 text-[#0047BB] shrink-0 mt-0.5" />
                                    <span className="text-sm font-sans-brand">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-black/10">
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB]">Goal: Reach + Personality + Younger Audience</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="inline-block px-8 py-4 border border-black/[0.06] bg-white/50 text-sm text-black/60 font-code-brand tracking-wide">
                        Platform = Discovery. Email = Ownership. Community = Moat.
                    </p>
                </div>
            </div>
        </section>
    )
}

function CommunityArcSection() {
    const phases = [
        { title: "PHASE 1: PROVE IT", time: "Now", items: ["Free workshops / sessions", "Build in public", "Collect testimonials + wins", "0 → 500 email subs"] },
        { title: "PHASE 2: GROW THE ROOM", time: "Month 2-4", items: ["Weekly newsletter", "Monthly challenges", "Office hours (free)", "Low-ticket product (€19-49)", "500 → 2,000 subs"] },
        { title: "PHASE 3: BUILD THE ENGINE", time: "Month 5-8", items: ["Launch community (Slack/Circle)", "Core offer: cohort course (€299-499)", "Member-led programming", "Referral system", "2,000 → 5,000 subs"] },
        { title: "PHASE 4: SCALE THE SYSTEM", time: "Month 9-12", items: ["Premium tier: mentoring (€1k+)", "Evergreen funnels", "Ambassador program", "Quarterly live events", "5,000 → 15,000 subs"] },
    ]

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 border-t border-black/10 bg-[#f4ede6]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="THE COMMUNITY ARC" subtitle="Growth Timeline" />
                
                <div className="relative border-l-2 border-black/10 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:grid md:grid-cols-4 md:gap-8">
                    {phases.map((phase, i) => (
                        <div key={i} className="pl-8 pb-12 md:pl-0 md:pb-0 md:pt-8 relative">
                            <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#0047BB] md:top-[-7px] md:left-0 ring-4 ring-[#f4ede6]" />
                            
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-code-brand font-bold text-[#0047BB] uppercase tracking-[0.2em] block">{phase.time}</span>
                                    <h3 className="text-lg font-cabinet font-bold leading-tight">{phase.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {phase.items.map((item, j) => (
                                        <li key={j} className="text-sm text-black/60 flex items-start gap-2 font-sans-brand">
                                            <span className="text-black/20 mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function EmailArchitectureSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 bg-[#e8e1da]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="EMAIL ARCHITECTURE" subtitle="The Sequences" />
                
                <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
                    <div className="px-8 py-4 border border-black/[0.06] bg-white text-center shadow-sm">
                        <span className="font-bold font-cabinet">New Subscriber</span>
                    </div>
                    
                    <div className="h-8 w-px bg-black/10" />
                    
                    <div className="p-6 border-2 border-[#0047BB]/30 bg-[#0047BB]/5 text-center w-full max-w-md">
                        <h4 className="font-bold text-[#0047BB] font-cabinet text-lg">Welcome Series</h4>
                        <p className="text-[10px] font-code-brand text-black/40 mt-2 uppercase tracking-wider">5 emails, 14 days • Value first, ask later</p>
                    </div>

                    <div className="h-8 w-px bg-black/10" />

                    <div className="grid grid-cols-3 gap-3 w-full">
                        {["Track A: AI Beginner", "Track B: AI Operator", "Track C: AI Builder"].map((track, i) => (
                            <div key={i} className="p-4 border border-black/[0.06] bg-black/[0.03] text-center text-sm hover:border-[#0047BB]/30 transition-colors font-sans-brand">
                                {track}
                            </div>
                        ))}
                    </div>

                    <div className="h-8 w-px bg-black/10" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 border border-black/[0.06] bg-black/[0.03] text-center space-y-3 hover:border-[#0047BB]/30 transition-colors">
                            <Mail className="w-5 h-5 mx-auto text-black/30" />
                            <h4 className="font-bold font-cabinet">Weekly Newsletter</h4>
                            <p className="text-[10px] font-code-brand text-black/30 uppercase tracking-wider">Ongoing value</p>
                        </div>
                        <div className="p-6 border border-black/[0.06] bg-black/[0.03] text-center space-y-3 hover:border-[#0047BB]/30 transition-colors">
                            <RocketIcon className="w-5 h-5 mx-auto text-black/30" />
                            <h4 className="font-bold font-cabinet">Launch Sequence</h4>
                            <p className="text-[10px] font-code-brand text-black/30 uppercase tracking-wider">When product opens</p>
                        </div>
                        <div className="p-6 border border-black/[0.06] bg-black/[0.03] text-center space-y-3 hover:border-[#0047BB]/30 transition-colors">
                            <RefreshCw className="w-5 h-5 mx-auto text-black/30" />
                            <h4 className="font-bold font-cabinet">Re-engagement</h4>
                            <p className="text-[10px] font-code-brand text-black/30 uppercase tracking-wider">If inactive 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function KeyInsightsSection() {
    const insights = [
        { title: "Trust is peer-mediated", desc: "Friends, reviews, and 'people like me' outrank influencers and CEOs in brand trust. (Edelman 2025)" },
        { title: "Human > AI content", desc: "Consumers trust brands that commit to human-created content. The AI flood makes authenticity a differentiator." },
        { title: "Experience drives purchase", desc: "Your own experience + others' experience are the #1 purchase influence. Not ads, not claims." },
        { title: "Community = peer proof", desc: "Members validating your work is more trusted than anything you say about yourself." },
        { title: "Open rates are dead", desc: "Apple privacy broke open tracking. Track clicks, replies, complaints instead." },
        { title: "Platform = volatile", desc: "Algorithms change weekly. Email list is the only distribution you own." },
        { title: "Insularity is rising", desc: "7 in 10 hesitate to trust 'different from me.' In-group signals (community, peer proof) matter more than ever." },
        { title: "Creator budgets rising", desc: "Enterprise creator marketing investment is increasing through 2026. The category is real." },
    ]

    return (
        <section className="py-16 md:py-20 px-6 md:px-12 border-t border-black/10 bg-[#f4ede6]">
            <div className="max-w-5xl mx-auto space-y-16">
                <SectionHeader title="WHAT WORKS IN 2025-2026" subtitle="Key Insights" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {insights.map((insight, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-6 border border-black/[0.06] bg-white/50 hover:border-[#0047BB]/30 transition-colors group"
                        >
                            <h4 className="font-bold mb-3 group-hover:text-[#0047BB] transition-colors font-cabinet leading-tight">{insight.title}</h4>
                            <p className="text-sm text-black/50 leading-relaxed font-sans-brand">{insight.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TheNicheSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 bg-[#e8e1da]">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                        The Niche
                    </span>
                    <h2 className="font-cabinet font-bold text-4xl md:text-5xl tracking-tighter">
                        Where Art Meets Technology
                    </h2>
                    <p className="text-lg text-black/60 font-serif-instrument italic">
                        Most AI education is technical. Most creative education ignores AI. <br/>
                        <span className="text-[#0a0a0a] font-bold not-italic font-sans-brand">You sit at the intersection.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    {[
                        { label: "TASTE", desc: "The creative eye. Design thinking. Aesthetic sensibility." },
                        { label: "LEVERAGE", desc: "AI tools. Automation. Systems that scale your output." },
                        { label: "CLARITY", desc: "Strategy. Communication. Making complexity simple." },
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-4 p-8 border border-black/[0.06] bg-black/[0.03] hover:border-[#0047BB]/30 transition-colors">
                            <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] block">{item.label}</span>
                            <p className="text-sm text-black/50 font-sans-brand leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30">
                    This intersection is the brand. Everything flows from here.
                </p>
            </div>
        </section>
    )
}

function MetricsSection() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="space-y-2 border-l-2 border-[#0047BB] pl-6">
                    <h2 className="text-4xl md:text-5xl font-cabinet font-bold tracking-tighter">METRICS THAT MATTER</h2>
                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/40">Dashboard Preview</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <MetricCard title="Attention" kpis={["Reach", "Saves", "Shares", "Watch completion"]} icon={Play} />
                    <MetricCard title="List" kpis={["Subs/day", "Click rate", "Reply rate", "Unsub rate"]} icon={Mail} />
                    <MetricCard title="Community" kpis={["Activation rate", "WAU/MAU", "Contributions", "Peer help"]} icon={Users} />
                    <MetricCard title="Revenue" kpis={["Free→Buyer conv.", "LTV", "Churn", "Referral %"]} icon={BarChart3} />
                </div>

                <div className="text-center pt-12">
                    <p className="text-3xl md:text-4xl font-cabinet font-bold text-white/90">
                        "Stop planning. Start shipping. Proof compounds."
                    </p>
                </div>
            </div>
        </section>
    )
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="space-y-2 border-l-2 border-[#0047BB] pl-6">
            <h2 className="text-4xl md:text-5xl font-cabinet font-bold tracking-tighter">{title}</h2>
            <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{subtitle}</p>
        </div>
    )
}

function MetricCard({ title, kpis, icon: Icon }: { title: string, kpis: string[], icon: React.ComponentType<{ size?: string | number }> }) {
    return (
        <div className="p-8 border border-white/10 space-y-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <div className="flex items-center gap-3 text-[#0047BB]">
                <Icon size={18} />
                <h3 className="text-[10px] font-code-brand font-bold tracking-[0.2em] uppercase">{title}</h3>
            </div>
            <ul className="space-y-3">
                {kpis.map((kpi, i) => (
                    <li key={i} className="text-sm text-white/60 border-b border-white/5 pb-2 last:border-0 font-mono">
                        {kpi}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
