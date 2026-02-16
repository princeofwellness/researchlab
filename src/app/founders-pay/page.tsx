"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import {
    Brain,
    Globe,
    Target,
    TrendingUp,
    Users,
    Shield,
    Zap,
    ChevronRight,
    FileText,
    BarChart3,
    Rocket,
    AlertCircle,
    Quote,
    Eye,
    ShieldAlert,
    Clock,
    DollarSign,
    CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function FoundersPay2026Page() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [activeSection, setActiveSection] = useState("")
    const [activeTab, setActiveTab] = useState("marketing")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.2, rootMargin: "-100px 0px -40% 0px" }
        )

        document.querySelectorAll("section[id]").forEach((section) => {
            observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
            <TopNav variant="dark" />
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-[64px] left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 origin-left z-50 px-6 box-content"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-xl text-[10px] font-mono tracking-widest text-orange-400 uppercase"
                    >
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Market Intelligence & Corporate Foresight
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                    >
                        WHAT FOUNDERS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-serif">WILL PAY FOR</span> <br />
                        <span className="text-orange-500">IN 2026</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl font-light text-white/50 tracking-tight max-w-3xl mx-auto leading-relaxed"
                    >
                        A Deep Dive into Workforce Transformation, Human-AI Collaboration, and the Economics of the "Human Edge."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-12 pt-12 items-center text-[10px] font-mono tracking-widest text-white/20 uppercase"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">JAN 15, 2026</span>
                            <span>Release Date</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">HUMAN-EDGE</span>
                            <span>Primary Vector</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">GOVERNANCE</span>
                            <span>Buying Trigger</span>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.4em] text-white/10 animate-bounce">
                    SCROLL TO ANALYZE
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="relative z-20 px-6 pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-20">

                {/* Left Side: Body */}
                <div className="space-y-40">

                    {/* 1. Executive Summary */}
                    <section id="summary" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="01" title="Executive Summary" />
                        <div className="space-y-8 text-xl text-white/60 leading-relaxed font-light">
                            <p>
                                By 2026, the corporate world has moved beyond "AI Literacy." The primary value vector has shifted from efficiency to <span className="text-white font-medium italic">Cognitive Resilience</span>. Founders are no longer paying for tools; they are paying for the human judgment required to maintain them.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <SummaryCard
                                icon={<Brain className="text-orange-400" />}
                                title="Cognitive Resilience"
                                desc="Founders are no longer paying for 'AI literacy' (how to use the tool); they are paying for 'Cognitive Resilience' (how to think while using the tool)."
                            />
                            <SummaryCard
                                icon={<Users className="text-orange-400" />}
                                title="The Passive Operator"
                                desc="The primary fear is 'Institutional Alzheimer’s'—workforces offloading critical thinking to algorithms, leading to a degradation of capability."
                            />
                            <SummaryCard
                                icon={<Shield className="text-orange-400" />}
                                title="Risk & Reputation"
                                desc="Spending has shifted from efficiency to governance. Preventing 'AI Slop' and liability lawsuits drives the highest margin training budgets."
                            />
                        </div>

                        <QuoteBlock
                            quote="The primary anxiety is no longer 'Can we build it?' but 'Do we understand what we've built?'"
                        />
                    </section>

                    {/* 2. Macro Context */}
                    <section id="macro" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="02" title="The Macro-Strategic Context" />
                        <div className="space-y-8 text-xl text-white/60 leading-relaxed font-light">
                            <p>
                                The "AI Integration Phase" is in full swing. Executives report that while AI has permeated operations, it hasn't universally delivered transformative ROI without significant <span className="text-white font-medium">organizational redesign</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
                                <h4 className="text-xl font-bold italic text-orange-400">SMEs (Small/Medium)</h4>
                                <div className="space-y-2 text-sm">
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Driver:</span> Survival & Speed</p>
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Fear:</span> One 'hallucination' ruining reputation</p>
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Budget:</span> 'Emergency' funds to prevent generic marketing</p>
                                </div>
                            </div>
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
                                <h4 className="text-xl font-bold italic text-orange-400">Enterprises</h4>
                                <div className="space-y-2 text-sm">
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Driver:</span> Governance & Scale</p>
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Fear:</span> Compliance breaches & cultural erosion</p>
                                    <p><span className="text-white/40 font-mono uppercase tracking-widest text-[10px]">Budget:</span> 'Change Management' & 'Digital Transformation'</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-500/5 border border-orange-500/10 rounded-3xl p-8 space-y-4">
                            <h4 className="flex items-center gap-2 text-lg font-bold">
                                <ShieldAlert className="text-orange-500" size={20} />
                                The 'Institutional Alzheimer’s' Crisis
                            </h4>
                            <p className="text-white/60 font-light leading-relaxed">
                                Research indicates a strong negative correlation between high-frequency AI usage and independent analytical capability. As employees offload cognitive tasks—memory, synthesis, logical structuring—to LLMs, their internal capabilities atrophy.
                            </p>
                        </div>
                    </section>

                    {/* 3. Founder Psychology */}
                    <section id="psychology" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="03" title="Founder Psychographic Profile" />
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            In 2026, founders are not buying "training"; they are buying <span className="text-white font-medium">"sleep."</span> They are plagued by specific anxieties that traditional L&D providers fail to address.
                        </p>

                        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.02]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-[10px] font-mono tracking-widest text-white/40 uppercase">
                                        <th className="px-8 py-6">The Anxiety</th>
                                        <th className="px-8 py-6">The Fear</th>
                                        <th className="px-8 py-6">The Buying Trigger</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-light">
                                    <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                                        <td className="px-8 py-6 font-bold italic text-orange-400">Sea of Sameness</td>
                                        <td className="px-8 py-6 text-white/60">"If my brand sounds like ChatGPT, I have no brand."</td>
                                        <td className="px-8 py-6 font-medium">Taste & Curation. Teaching teams to be editors.</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                                        <td className="px-8 py-6 font-bold italic text-orange-400">Black Box Liability</td>
                                        <td className="px-8 py-6 text-white/60">"We are making decisions based on data we don't understand."</td>
                                        <td className="px-8 py-6 font-medium">Skepticism. Algorithmic Auditing workshops.</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                                        <td className="px-8 py-6 font-bold italic text-orange-400">The Frozen Middle</td>
                                        <td className="px-8 py-6 text-white/60">"My managers are obsolete, but I can't manage 50 agents alone."</td>
                                        <td className="px-8 py-6 font-medium">Manager as Coach. Retraining managers to audit agents.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 4. Employee Reality */}
                    <section id="experience" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="04" title="The Employee Experience" />
                        <div className="space-y-8 text-xl text-white/60 leading-relaxed font-light">
                            <p>
                                While founders worry about "output," employees worry about "survival." The 2026 workforce is defined by <span className="text-white font-medium">Cognitive Overload</span> and "human-in-the-loop" fatigue.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4 border-l-2 border-l-orange-500">
                                <h4 className="text-xl font-bold tracking-tight">Imposter Syndrome</h4>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    "If the AI does 80% of my job, why am I here?" Employees need training that redefines their role as the "Architect" or "Pilot" to restore agency.
                                </p>
                            </div>
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4 border-l-2 border-l-orange-500">
                                <h4 className="text-xl font-bold tracking-tight">Loss of Deep Work</h4>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    The frictionlessness of AI has destroyed "white space" for thinking. "Deep Work" protocols and disconnect workshops are now premium perks.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Department Pain Points */}
                    <section id="departments" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="05" title="Department-Specific Pain Points" />

                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide border-b border-white/5">
                            {["marketing", "finance", "hr", "product"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-6 py-2 text-[10px] font-mono tracking-[0.2em] uppercase transition-all whitespace-nowrap",
                                        activeTab === tab ? "text-orange-400 border-b-2 border-orange-500" : "text-white/30"
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[300px]">
                            {activeTab === 'marketing' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h3 className="text-2xl font-bold italic tracking-tight text-orange-400">The "Taste" & "Originality" Defense</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        Audiences have developed "AI Blindness" to generic content. The solution is moving from <span className="text-white">Prompter to Curator</span>.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">The "Anti-Slop" Protocol</p>
                                                <p className="text-xs text-white/40">Training teams to identify and remove linguistic markers of AI generation.</p>
                                            </div>
                                        </li>
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">Hybrid Creativity</p>
                                                <p className="text-xs text-white/40">Using AI for divergent ideas, but enforcing human rigor for selection.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'finance' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h3 className="text-2xl font-bold italic tracking-tight text-orange-400">The "Skepticism" & "Verification" Shield</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        CFOs are terrified of "Silent Errors"—hallucinations in financial modeling that could lead to catastrophe.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">Forensic AI Auditing</p>
                                                <p className="text-xs text-white/40">"Red team" exercises designed specifically to break the model.</p>
                                            </div>
                                        </li>
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">The Skeptic's Toolkit</p>
                                                <p className="text-xs text-white/40">Protocols for verifying AI data sources before decision making.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'hr' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h3 className="text-2xl font-bold italic tracking-tight text-orange-400">The "Empathy" & "Culture" Bridge</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        As admin is automated, the human touch vanishes. The workplace risks becoming "sterile."
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">AI-Assisted Empathy</p>
                                                <p className="text-xs text-white/40">Using AI agents to simulate difficult conversations for practice.</p>
                                            </div>
                                        </li>
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">Manager as Coach</p>
                                                <p className="text-xs text-white/40">Shifting managers from 'supervisors of tasks' to 'developers of people.'</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'product' && (
                                <div className="space-y-6 animate-in fade-in duration-500">
                                    <h3 className="text-2xl font-bold italic tracking-tight text-orange-400">The "Ethics" & "Product Thinking" Pivot</h3>
                                    <p className="text-lg text-white/60 font-light leading-relaxed">
                                        Developers use AI to code faster but lose "Product Thinking"—the judgment of <em>what</em> to build.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">The Pre-Mortem</p>
                                                <p className="text-xs text-white/40">Imagining future product failure to identify risks AI missed.</p>
                                            </div>
                                        </li>
                                        <li className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm">Design Thinking with AI</p>
                                                <p className="text-xs text-white/40">Using AI for prototyping, but humans for empathy and definition.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* 6. Workshop Formats */}
                    <section id="workshops" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="06" title="The Pedagogy: Workshop Blueprints" />
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            The "Lunch and Learn" is dead. Founders pay for <span className="text-white">Interventions</span> that disrupt the "passive operator" trance.
                        </p>

                        <div className="p-10 border border-orange-500/20 bg-orange-500/5 rounded-[40px] space-y-8">
                            <h3 className="text-3xl font-bold tracking-tight text-orange-400 italic">The 1-Day Immersive: "The Jolt"</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                A high-intensity experience to reset the cognitive baseline. Device-free blocks are mandatory.
                            </p>

                            <div className="space-y-6">
                                <AgendaItem time="09:00 - 10:30" title="The Trap Test" desc="Participants confront a 'Trojan Horse' AI exercise designed to trick them. 80% usually fail. Proves the need for skepticism." />
                                <AgendaItem time="10:45 - 13:00" title="Skill Build Tracks" desc="Practical application of human-in-the-loop rigor. Marketing 'De-Sloping' or Finance 'Red Team' audits." />
                                <AgendaItem time="14:00 - 16:00" title="Agency Restoration" desc="'Job Crafting' exercise. Designing workflows where AI does the lifting, and humans do the thinking." />
                            </div>
                        </div>
                    </section>

                    {/* 7. Economics */}
                    <section id="economics" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="07" title="The Economics: Pricing & ROI" />
                        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="p-6 text-sm font-mono text-white/40 uppercase tracking-widest">Provider Tier</th>
                                        <th className="p-6 text-sm font-mono text-white/40 uppercase tracking-widest">Offering</th>
                                        <th className="p-6 text-sm font-mono text-white/40 uppercase tracking-widest">Price Range</th>
                                        <th className="p-6 text-sm font-mono text-white/40 uppercase tracking-widest">Market Position</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-orange-400 uppercase tracking-wider">Commodity Provider</td>
                                        <td className="p-6 text-white/70">"Intro to Prompt Engineering"</td>
                                        <td className="p-6 text-white/50">$50 - $150 / user</td>
                                        <td className="p-6 font-mono text-xs text-white/40">Low margin. Race to bottom.</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-orange-400 uppercase tracking-wider">Boutique Specialist</td>
                                        <td className="p-6 text-white/70">"Critical Thinking for Finance"</td>
                                        <td className="p-6 text-white/50">$10k - $25k / day</td>
                                        <td className="p-6 font-mono text-xs text-white/40">High margin. "Bleeding neck" problem.</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-orange-400 uppercase tracking-wider">Transformation Partner</td>
                                        <td className="p-6 text-white/70">"AI Cultural Integration"</td>
                                        <td className="p-6 text-white/50">$50k - $250k / project</td>
                                        <td className="p-6 font-mono text-xs text-white/40">CEO-level buy-in. Strategic.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
                                <p className="text-[10px] font-mono text-orange-400 tracking-widest uppercase">ROI Calculation: Risk Avoidance</p>
                                <p className="text-xl font-bold tracking-tight">(Cost of Lawsuit) x (Prob. Reduction)</p>
                                <p className="text-sm text-white/40 italic">"If this training prevents one $2M hallucination error, the ROI is 20x."</p>
                            </div>
                            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
                                <p className="text-[10px] font-mono text-orange-400 tracking-widest uppercase">ROI Calculation: Talent Retention</p>
                                <p className="text-xl font-bold tracking-tight">(Replacement Cost) x (Churn Reduction)</p>
                                <p className="text-sm text-white/40 italic">"Employees with 'agency' are 40% less likely to leave."</p>
                            </div>
                        </div>
                    </section>

                    {/* Final Footer */}
                    <footer className="pt-20 border-t border-white/5 text-center space-y-4 pb-40">
                        <p className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase">
                            © 2026 CORPORATE FORESIGHT RESEARCH • DO NOT DISTRIBUTE
                        </p>
                    </footer>
                </div>

                {/* Right Side: Sidebar Navigation */}
                <aside className="hidden lg:block sticky top-32 h-fit space-y-12">
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-white/20">Archive Modules</h4>
                        <nav className="flex flex-col gap-4">
                            <SidebarLink href="#summary" active={activeSection === "summary"}>01 Summary</SidebarLink>
                            <SidebarLink href="#macro" active={activeSection === "macro"}>02 Macro Context</SidebarLink>
                            <SidebarLink href="#psychology" active={activeSection === "psychology"}>03 Psychology</SidebarLink>
                            <SidebarLink href="#experience" active={activeSection === "experience"}>04 Human Exp</SidebarLink>
                            <SidebarLink href="#departments" active={activeSection === "departments"}>05 Departments</SidebarLink>
                            <SidebarLink href="#workshops" active={activeSection === "workshops"}>06 Pedagogy</SidebarLink>
                            <SidebarLink href="#economics" active={activeSection === "economics"}>07 Economics</SidebarLink>
                        </nav>
                    </div>

                    <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl space-y-4">
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-orange-400">Intelligence Brief</h4>
                        <p className="text-[10px] leading-relaxed text-white/40 uppercase tracking-tighter">
                            CONFIDENTIAL FORESIGHT ANALYSIS. PRODUCED FOR PRINCE OS EXECUTIVE TERMINAL.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    )
}

/* ----------------- Sub-Components ----------------- */

function ModernHeader({ number, title }: { number: string, title: string }) {
    return (
        <div className="space-y-4">
            <span className="text-xs font-mono text-orange-500 tracking-[0.4em] uppercase">{number} / Intelligence Module</span>
            <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
            <div className="w-20 h-px bg-orange-500" />
        </div>
    )
}

function SummaryCard({ icon, title, desc }: any) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-orange-500/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h4 className="text-lg font-bold mb-3">{title}</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">{desc}</p>
        </div>
    )
}

function QuoteBlock({ quote }: { quote: string }) {
    return (
        <div className="relative p-12 bg-white/[0.02] border-l-2 border-orange-500 rounded-r-3xl italic text-white/60 text-lg leading-relaxed font-serif">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-orange-500 opacity-20" />
            <p>"{quote}"</p>
        </div>
    )
}

function AgendaItem({ time, title, desc }: any) {
    return (
        <div className="flex gap-6 p-6 border border-white/5 bg-white/[0.01] rounded-2xl group hover:border-orange-500/20 transition-all">
            <div className="shrink-0 font-mono text-orange-500 text-xs mt-1">{time}</div>
            <div className="space-y-1">
                <h4 className="text-lg font-bold tracking-tight">{title}</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

function SidebarLink({ href, children, active }: { href: string, children: React.ReactNode, active?: boolean }) {
    return (
        <a
            href={href}
            className={cn(
                "text-[10px] font-mono uppercase tracking-[0.2em] transition-all hover:text-orange-400",
                active ? "text-orange-400 border-l-2 border-orange-500 pl-4" : "text-white/30 pl-0"
            )}
        >
            {children}
        </a>
    )
}
