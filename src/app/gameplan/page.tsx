"use client"

import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"
import { 
    ArrowRight, 
    Users, 
    Mail, 
    Zap, 
    Target, 
    TrendingUp, 
    Award, 
    Layers, 
    Mic, 
    Video, 
    PenTool, 
    Share2, 
    BarChart3, 
    Globe, 
    Shield, 
    CheckCircle2,
    Play,
    Instagram,
    Linkedin,
    Cpu,
    Palette,
    Lightbulb,
    RefreshCw
} from "lucide-react"

export default function GameplanPage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#0047BB]/30 overflow-x-hidden">
            <TopNav variant="dark" />
            
            <motion.div
                className="fixed top-[64px] left-0 right-0 h-1 bg-[#0047BB] origin-left z-50"
                style={{ scaleX }}
            />

            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <main className="relative z-10">
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
                <FooterSection />
            </main>
        </div>
    )
}

function HeroSection() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black pointer-events-none" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8 max-w-5xl mx-auto relative z-10"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#0047BB]/30 bg-[#0047BB]/10 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-[#0047BB] animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.2em] text-blue-300 uppercase">Growth Architecture // 2025-2026</span>
                </div>

                <h1 className="text-7xl md:text-9xl font-serif-instrument italic tracking-tight leading-[0.9]">
                    THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 not-italic font-sans font-bold tracking-tighter">PLAYBOOK</span>
                </h1>

                <p className="text-xl md:text-2xl font-syne font-light text-white/60 max-w-2xl mx-auto">
                    How to build, grow, and lead in AI education.
                </p>

                <div className="pt-12">
                    <p className="text-sm font-mono text-[#0047BB] tracking-widest uppercase">
                        You are the main character. This is the system.
                    </p>
                </div>
            </motion.div>

            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-white/20"
                >
                    <ArrowRight className="rotate-90 w-6 h-6" />
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
        <section className="py-32 px-6 border-b border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="THE TRUST ENGINE" subtitle="Systematic Authority Building" />
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0047BB]/50 to-transparent -translate-y-1/2 hidden md:block" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#0047BB] transition-colors flex items-center justify-center relative z-10 shadow-2xl">
                                    <step.icon className="w-6 h-6 text-white/60 group-hover:text-[#0047BB] transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xs font-bold tracking-widest uppercase text-white">{step.title}</h3>
                                    <p className="text-[10px] font-mono text-white/40">{step.desc}</p>
                                </div>
                                
                                {i !== steps.length - 1 && (
                                    <ArrowRight className="md:hidden w-4 h-4 text-white/20 rotate-90 my-2" />
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
        <section className="py-32 px-6 border-b border-white/10">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="BECOME THE MAIN CHARACTER" subtitle="Personal Brand Strategy" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors space-y-6 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#0047BB]/10 flex items-center justify-center text-[#0047BB] group-hover:scale-110 transition-transform">
                                <role.icon size={24} />
                            </div>
                            <h3 className="text-2xl font-serif-instrument italic">{role.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-light">{role.desc}</p>
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
        <section className="py-32 px-6 border-b border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="CONTENT MACHINE" subtitle="Production Schedule" />
                
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
                    <div className="border border-white/10 rounded-2xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-xs font-mono uppercase tracking-widest text-white/40">
                                <tr>
                                    <th className="p-6 font-normal">Type</th>
                                    <th className="p-6 font-normal hidden md:table-cell">Format</th>
                                    <th className="p-6 font-normal hidden md:table-cell">Platform</th>
                                    <th className="p-6 font-normal text-right">Freq</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {content.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-white">{row.type}</td>
                                        <td className="p-6 text-white/60 text-sm hidden md:table-cell">{row.format}</td>
                                        <td className="p-6 text-white/60 text-sm hidden md:table-cell">{row.platform}</td>
                                        <td className="p-6 text-[#0047BB] font-mono text-right">{row.freq}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 rounded-2xl bg-[#0047BB] text-white flex flex-col justify-center space-y-6 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        <h3 className="text-3xl font-serif-instrument italic relative z-10">The 1 → 10 Rule</h3>
                        <p className="text-white/80 leading-relaxed relative z-10">
                            Every piece becomes 10. <br/>
                            Anchor → clips → email → community thread → case study.
                        </p>
                        <div className="h-px w-full bg-white/20" />
                        <p className="text-xs font-mono uppercase tracking-widest opacity-60">Maximize Leverage</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialPlaybookSection() {
    return (
        <section className="py-32 px-6 border-b border-white/10">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="SOCIAL PLAYBOOK" subtitle="Platform Strategy" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 rounded-[40px] border border-white/10 bg-[#0077b5]/5 hover:bg-[#0077b5]/10 transition-colors space-y-8">
                        <div className="flex items-center gap-4">
                            <Linkedin className="w-8 h-8 text-[#0077b5]" />
                            <h3 className="text-2xl font-bold tracking-tight">LinkedIn <span className="text-sm font-normal text-white/40 ml-2">(Primary)</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {["Long-form posts with strong hooks", "'Art meets tech' positioning", "Build-in-public threads", "Workflow teardowns with screenshots", "Comment engagement (reply to everyone)"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/70">
                                    <CheckCircle2 className="w-5 h-5 text-[#0077b5] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-xs font-mono uppercase tracking-widest text-[#0077b5]">Goal: Thought Leadership + Email Capture</p>
                        </div>
                    </div>

                    <div className="p-10 rounded-[40px] border border-white/10 bg-[#E1306C]/5 hover:bg-[#E1306C]/10 transition-colors space-y-8">
                        <div className="flex items-center gap-4">
                            <Instagram className="w-8 h-8 text-[#E1306C]" />
                            <h3 className="text-2xl font-bold tracking-tight">Instagram <span className="text-sm font-normal text-white/40 ml-2">(Secondary)</span></h3>
                        </div>
                        <ul className="space-y-4">
                            {["Reels: quick AI demos, before/after", "Stories: daily, raw, behind-scenes", "Carousels: frameworks, comparisons", "Visual aesthetic focus", "Direct Message engagement"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-white/70">
                                    <CheckCircle2 className="w-5 h-5 text-[#E1306C] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-xs font-mono uppercase tracking-widest text-[#E1306C]">Goal: Reach + Personality + Younger Audience</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-white/60">
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
        <section className="py-32 px-6 border-b border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="THE COMMUNITY ARC" subtitle="Growth Timeline" />
                
                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:grid md:grid-cols-4 md:gap-8">
                    {phases.map((phase, i) => (
                        <div key={i} className="pl-8 pb-12 md:pl-0 md:pb-0 md:pt-8 relative">
                            <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#0047BB] md:top-[-7px] md:left-0" />
                            
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-[#0047BB] uppercase tracking-widest">{phase.time}</span>
                                    <h3 className="text-xl font-bold">{phase.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {phase.items.map((item, j) => (
                                        <li key={j} className="text-sm text-white/60 flex items-start gap-2">
                                            <span className="text-white/20">•</span>
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
        <section className="py-32 px-6 border-b border-white/10">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="EMAIL ARCHITECTURE" subtitle="The Sequences" />
                
                <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
                    <div className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-center">
                        <span className="font-bold">New Subscriber</span>
                    </div>
                    
                    <div className="h-8 w-px bg-white/20" />
                    
                    <div className="p-6 rounded-2xl border border-[#0047BB] bg-[#0047BB]/10 text-center w-full max-w-md">
                        <h4 className="font-bold text-[#0047BB]">Welcome Series</h4>
                        <p className="text-xs text-white/60 mt-1">5 emails, 14 days • Value first, ask later</p>
                    </div>

                    <div className="h-8 w-px bg-white/20" />

                    <div className="grid grid-cols-3 gap-4 w-full">
                        {["Track A: AI Beginner", "Track B: AI Operator", "Track C: AI Builder"].map((track, i) => (
                            <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center text-sm hover:border-white/30 transition-colors">
                                {track}
                            </div>
                        ))}
                    </div>

                    <div className="h-8 w-px bg-white/20" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2">
                            <Mail className="w-6 h-6 mx-auto text-white/40" />
                            <h4 className="font-bold">Weekly Newsletter</h4>
                            <p className="text-xs text-white/40">Ongoing value</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2">
                            <RocketIcon className="w-6 h-6 mx-auto text-white/40" />
                            <h4 className="font-bold">Launch Sequence</h4>
                            <p className="text-xs text-white/40">When product opens</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center space-y-2">
                            <RefreshCw className="w-6 h-6 mx-auto text-white/40" />
                            <h4 className="font-bold">Re-engagement</h4>
                            <p className="text-xs text-white/40">If inactive 30 days</p>
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
        <section className="py-32 px-6 border-b border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="WHAT WORKS IN 2025-2026" subtitle="Key Insights" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {insights.map((insight, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-black hover:border-[#0047BB]/50 transition-colors group">
                            <h4 className="text-lg font-bold mb-3 group-hover:text-[#0047BB] transition-colors">{insight.title}</h4>
                            <p className="text-sm text-white/50 leading-relaxed">{insight.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TheNicheSection() {
    return (
        <section className="py-40 px-6 border-b border-white/10 overflow-hidden relative">
            <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-serif-instrument italic">Where Art Meets Technology</h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Most AI education is technical. Most creative education ignores AI. <br/>
                        <span className="text-white font-bold">You sit at the intersection.</span>
                    </p>
                </div>

                <div className="relative h-[400px] w-full max-w-2xl mx-auto flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-64 h-64 rounded-full border-2 border-[#0047BB] bg-[#0047BB]/10 mix-blend-screen flex items-center justify-center">
                        <span className="font-bold tracking-widest text-[#0047BB] -mt-20">TASTE</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-purple-500 bg-purple-500/10 mix-blend-screen flex items-center justify-center">
                        <span className="font-bold tracking-widest text-purple-500 mt-20 mr-10">LEVERAGE</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border-2 border-emerald-500 bg-emerald-500/10 mix-blend-screen flex items-center justify-center">
                        <span className="font-bold tracking-widest text-emerald-500 mt-20 ml-10">CLARITY</span>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl tracking-widest z-20 drop-shadow-lg">
                        YOU
                    </div>
                </div>

                <p className="text-sm font-mono text-white/40 uppercase tracking-widest">
                    This intersection is the brand. Everything flows from here.
                </p>
            </div>
        </section>
    )
}

function MetricsSection() {
    return (
        <section className="py-32 px-6 border-b border-white/10">
            <div className="max-w-7xl mx-auto space-y-20">
                <SectionHeader title="METRICS THAT MATTER" subtitle="Dashboard Preview" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <MetricCard title="Attention" kpis={["Reach", "Saves", "Shares", "Watch completion"]} icon={Play} />
                    <MetricCard title="List" kpis={["Subs/day", "Click rate", "Reply rate", "Unsub rate"]} icon={Mail} />
                    <MetricCard title="Community" kpis={["Activation rate", "WAU/MAU", "Contributions", "Peer help"]} icon={Users} />
                    <MetricCard title="Revenue" kpis={["Free→Buyer conv.", "LTV", "Churn", "Referral %"]} icon={BarChart3} />
                </div>
            </div>
        </section>
    )
}

function FooterSection() {
    return (
        <footer className="py-40 px-6 text-center bg-black">
            <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif-instrument italic text-white/80">
                    "Stop planning. Start shipping. Proof compounds."
                </h2>
                <div className="w-20 h-1 bg-[#0047BB] mx-auto" />
                <p className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">
                    Research Lab // Growth Gameplan
                </p>
            </div>
        </footer>
    )
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="space-y-2 border-l-2 border-[#0047BB] pl-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{title}</h2>
            <p className="text-lg font-mono text-white/40 uppercase tracking-widest">{subtitle}</p>
        </div>
    )
}

function MetricCard({ title, kpis, icon: Icon }: { title: string, kpis: string[], icon: any }) {
    return (
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] space-y-6">
            <div className="flex items-center gap-3 text-[#0047BB]">
                <Icon size={20} />
                <h3 className="font-bold tracking-widest uppercase">{title}</h3>
            </div>
            <ul className="space-y-3">
                {kpis.map((kpi, i) => (
                    <li key={i} className="text-sm text-white/60 border-b border-white/5 pb-2 last:border-0">
                        {kpi}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function RocketIcon(props: any) {
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
