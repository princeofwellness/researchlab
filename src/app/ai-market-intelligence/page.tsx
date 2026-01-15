"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { Brain, Globe, Target, TrendingUp, Users, Shield, Zap, ChevronRight, FileText, BarChart3, Rocket, AlertCircle, Quote } from "lucide-react"
import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function AIMarketIntelligencePage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [activeSection, setActiveSection] = useState("")

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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            <TopNav variant="dark" />
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-[64px] left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 origin-left z-50 px-6 box-content"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl text-[10px] font-mono tracking-widest text-blue-400 uppercase"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Market Intelligence Dossier v2.0
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
                    >
                        GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic font-serif">AI EDUCATION</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl font-light text-white/50 tracking-tight max-w-3xl mx-auto leading-relaxed"
                    >
                        The 2026 Agentic Shift. Moving from "Literacy" to "Workflow Orchestration." High-fidelity intelligence for the corporate era.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-12 pt-12 items-center text-[10px] font-mono tracking-widest text-white/20 uppercase"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">Jan 12, 2026</span>
                            <span>Release Date</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">$25.6B+</span>
                            <span>Target Market</span>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block" />
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white text-xl font-bold font-sans tracking-tighter">AGENTIC</span>
                            <span>Dominant Vector</span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Background Element */}
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
                                The "Agentic Shift" has redefined the 2026 market. The era of generic "AI Literacy" (2023–2024) has collapsed.
                                The market has consolidated into a rigorous, high-stakes sector focused on <span className="text-white font-medium">Agentic AI</span>,
                                workflow orchestration, and measurable ROI.
                            </p>
                            <p>
                                By January 2026, corporate buyers are no longer paying for "inspiration"; they are paying to bridge the "GenAI Divide,"
                                where a small fraction of firms (approx. 5%) reap exponential gains while 95% remain stuck in "pilot purgatory."
                            </p>
                        </div>

                        <ImpactGrid items={[
                            { label: "GenAI Market Size", value: "$25.6B+", detail: "2024 Base Analysis" },
                            { label: "Autonomous Ops", value: "80%", detail: "Cust. Service Forecast" },
                            { label: "Workforce Usage", value: "51%", detail: "The 'Silicon Ceiling'" }
                        ]} />

                        <QuoteBlock
                            quote="The market has bifurcated. Tier 1 (Commodity prompting) is now largely free. Tier 2 (Agentic Workforce) is where 80% of the profit resides."
                        />
                    </section>

                    {/* 2. Market Map & Taxonomy */}
                    <section id="taxonomy" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="02" title="Market Map & Taxonomy" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TaxonomyCard category="Strategic Orchestrators" players="BCG U, McKinsey, Deloitte, Accenture" desc="High-end consulting integrating training with transformation." />
                            <TaxonomyCard category="Specialized Academies" players="Section School, Maven, Hyper Island" desc="Cohort-based learning focusing on role-specific power skills." />
                            <TaxonomyCard category="Technical Implementers" players="Black Cube, AI Consulting Lab, Vention" desc="Agency-as-Educator: Building bots & training maintenance." />
                            <TaxonomyCard category="Regional Champions" players="TalentSprint, Simpliaxis, 100tal, Net101" desc="Dominant players in specific geographies + local regs." />
                        </div>
                    </section>

                    {/* 3. Competitor Database */}
                    <section id="competitors" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="03" title="Competitor Database" />
                        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.02]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-[10px] font-mono tracking-widest text-white/40 uppercase">
                                        <th className="px-8 py-6">Company</th>
                                        <th className="px-8 py-6">HQ</th>
                                        <th className="px-8 py-6">Core Offer</th>
                                        <th className="px-8 py-6">Model/Price</th>
                                        <th className="px-8 py-6">Strength</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-light">
                                    <TableRow company="BCG U" hq="Global/US" offer="Capability Building" price="$50k+ engagements" strength="C-Suite Access" />
                                    <TableRow company="Section School" hq="US/Remote" offer="Business AI Sprints" price="~$2.5k / seat" strength="Branding & Content" />
                                    <TableRow company="Maven" hq="Global" offer="Expert Cohorts" price="$500 - $2.5k" strength="Access to Pros" />
                                    <TableRow company="NobleProg" hq="UK/Global" offer="Technical GAI" price="$3.5k / group day" strength="Global Footprint" />
                                    <TableRow company="TalentSprint" hq="India" offer="Deep Tech Certs" price="~$2.5k - $6k" strength="Technical Rigor" />
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 4. Top 15 Leaderboard */}
                    <section id="leaderboard" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="04" title="The Leaderboard" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <LeaderboardCol title="The Strategists" items={["BCG U", "McKinsey Academy", "Deloitte AI", "Accenture", "IMD Sprints"]} />
                            <LeaderboardCol title="The Tacticians" items={["Section School", "Maven", "General Assembly", "Udacity", "BrainStation"]} />
                            <LeaderboardCol title="The Regionals" items={["TalentSprint", "Hyper Island", "NobleProg", "Simpliaxis", "PwC Academy"]} />
                        </div>
                    </section>

                    {/* 5. Customer Demand */}
                    <section id="demand" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="05" title="Demand & Buying Patterns" />
                        <div className="space-y-6">
                            <DemandRow type="Enterprise (2000+)" pain="Pilot Purgatory / Risk" trigger="Compliance Audits" owner="CIO + CHRO" roi="Risk Reduc & FTE Release" />
                            <DemandRow type="Mid-Market" pain="Competitive Fear" trigger="Competitor AI launch" owner="COO / VP Sales" roi="Time-to-Proposal Speed" />
                            <DemandRow type="Legal / Finance" pain="Hallucination / Liability" trigger="EU AI Act Regs" owner="General Counsel" roi="Accuracy & Compliance" />
                            <DemandRow type="Healthcare" pain="Admin Burden" trigger="EHR Integration" owner="CMO" roi="Documentation Savings" />
                        </div>
                    </section>

                    {/* 6. Offer Stacks */}
                    <section id="offer-stacks" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="06" title="Winning Offer Archetypes" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <OfferCard
                                title="The Agentic Sandbox"
                                format="3-Day Implementation"
                                promise="Build an actual agent."
                                price="Premium Tier"
                            />
                            <OfferCard
                                title="The Governance Shield"
                                format="Compliance Workshop"
                                promise="EU AI Act Readiness."
                                price="Scale/Volume"
                            />
                            <OfferCard
                                title="Role-Based Power Skills"
                                format="6-Week Cohort"
                                promise="Vertical Deep Dives."
                                price="Mid-Market Std"
                            />
                        </div>
                    </section>

                    {/* 7. Regional Systems */}
                    <section id="regional" className="scroll-mt-32 space-y-12">
                        <ModernHeader number="07" title="Regional Systems" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <RegionalCard region="United States" driver="Innovation & Efficiency" mindset="Superagency: Focus on speed & revenue." />
                            <RegionalCard region="Europe (EU)" driver="Regulation (AI Act)" mindset="Compliance: GDPR, Safety, Liability." />
                            <RegionalCard region="India / APAC" driver="Workforce Scale" mindset="Service Delivery: Massive IT upskilling." />
                            <RegionalCard region="Japan / Singapore" driver="Subsidy & Demographic" mindset="Automation: Labor shortage response." />
                        </div>
                    </section>

                    {/* 8. Recommendation */}
                    <section id="recommendation" className="scroll-mt-32 space-y-16">
                        <ModernHeader number="08" title="Strategic Recommendation" />
                        <div className="p-12 border border-blue-500/20 bg-blue-500/5 rounded-[40px] space-y-8">
                            <h3 className="text-3xl font-bold tracking-tight text-blue-400 italic">The Pivot: From "Workshops" to "Upgrades"</h3>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Position yourself as the <span className="text-white font-medium italic">Agentic Transformation Partner</span>.
                                Stop selling education; start selling a "Workforce Operating System Upgrade."
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-mono text-blue-500 tracking-widest uppercase">Phase 1</span>
                                    <h4 className="text-lg font-bold">Shadow AI Readiness Audit</h4>
                                    <p className="text-sm text-white/40">Use as a high-intent lead magnet to expose latent risks.</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-mono text-blue-500 tracking-widest uppercase">Phase 2</span>
                                    <h4 className="text-lg font-bold">The CoE In-A-Box</h4>
                                    <p className="text-sm text-white/40">High-ticket retainer to manage internal AI champions.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 9. Future Outlook */}
                    <section id="future" className="scroll-mt-32 space-y-8 pb-40">
                        <ModernHeader number="09" title="Future Outlook 2027-2030" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FuturePoint title="Professionalization" desc="AI Trainer & Agent Orchestrator become core salaried job titles." />
                            <FuturePoint title="Mandatory Licensing" desc="Govts will mandate 'Human-in-the-Loop' licenses for high-risk finance/health." />
                            <FuturePoint title="Logic Auditing" desc="Shift from 'Prompting' to 'Symbolic Reasoning & Argumentation'." />
                            <FuturePoint title="Vanishing Digital Gap" desc="AI fluency will just be 'Literacy.' The distinction disappears." />
                        </div>
                    </section>
                </div>

                {/* Right Side: Sidebar Navigation */}
                <aside className="hidden lg:block sticky top-32 h-fit space-y-12">
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-white/20">Sections</h4>
                        <nav className="flex flex-col gap-4">
                            <SidebarLink href="#summary" active={activeSection === "summary"}>01 Summary</SidebarLink>
                            <SidebarLink href="#taxonomy" active={activeSection === "taxonomy"}>02 Taxonomy</SidebarLink>
                            <SidebarLink href="#competitors" active={activeSection === "competitors"}>03 Data</SidebarLink>
                            <SidebarLink href="#leaderboard" active={activeSection === "leaderboard"}>04 Leaderboard</SidebarLink>
                            <SidebarLink href="#demand" active={activeSection === "demand"}>05 Demand</SidebarLink>
                            <SidebarLink href="#offer-stacks" active={activeSection === "offer-stacks"}>06 Offers</SidebarLink>
                            <SidebarLink href="#regional" active={activeSection === "regional"}>07 Regions</SidebarLink>
                            <SidebarLink href="#recommendation" active={activeSection === "recommendation"}>08 Strategy</SidebarLink>
                            <SidebarLink href="#future" active={activeSection === "future"}>09 Future</SidebarLink>
                        </nav>
                    </div>

                    <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl space-y-4">
                        <h4 className="text-[10px] uppercase font-mono tracking-widest text-blue-400">Intelligence Brief</h4>
                        <p className="text-[10px] leading-relaxed text-white/40 uppercase tracking-tighter">
                            DO NOT DISTRIBUTE. CONFIDENTIAL MARKET ANALYSIS. PRODUCED FOR PRINCE OS.
                        </p>
                    </div>
                </aside>
            </div>

            <footer className="px-6 py-20 border-t border-white/5 text-center">
                <p className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase">
                    Market Intelligence Lead AI • 2026 Strategy
                </p>
            </footer>
        </div>
    )
}

/* ----------------- Sub-Components ----------------- */

function ModernHeader({ number, title }: { number: string, title: string }) {
    return (
        <div className="space-y-4">
            <span className="text-xs font-mono text-blue-500 tracking-[0.4em] uppercase">{number} / Dossier Module</span>
            <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
            <div className="w-20 h-px bg-blue-500" />
        </div>
    )
}

function ImpactGrid({ items }: { items: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-2">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.label}</p>
                    <p className="text-3xl font-bold tracking-tighter">{item.value}</p>
                    <p className="text-xs text-blue-400/60 font-mono italic">{item.detail}</p>
                </div>
            ))}
        </div>
    )
}

function QuoteBlock({ quote }: { quote: string }) {
    return (
        <div className="relative p-12 bg-white/[0.02] border-l-2 border-blue-500 rounded-r-3xl italic text-white/60 text-lg leading-relaxed font-serif">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-500 opacity-20" />
            <p>"{quote}"</p>
        </div>
    )
}

function TaxonomyCard({ category, players, desc }: any) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-blue-500/20 transition-all group">
            <h4 className="text-xl font-bold italic tracking-tight text-blue-400 mb-2">{category}</h4>
            <p className="text-xs font-mono text-white/40 mb-4 uppercase tracking-[0.1em]">{players}</p>
            <p className="text-sm text-white/60 leading-relaxed font-light">{desc}</p>
        </div>
    )
}

function TableRow({ company, hq, offer, price, strength }: any) {
    return (
        <tr className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
            <td className="px-8 py-6 font-bold italic tracking-tight text-blue-400 group-hover:text-blue-300">{company}</td>
            <td className="px-8 py-6 text-white/40 font-mono text-xs">{hq}</td>
            <td className="px-8 py-6">{offer}</td>
            <td className="px-8 py-6 font-medium tracking-tight whitespace-nowrap">{price}</td>
            <td className="px-8 py-6 text-white/40 text-xs">{strength}</td>
        </tr>
    )
}

function LeaderboardCol({ title, items }: any) {
    return (
        <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-white/30 border-b border-white/10 pb-4">{title}</h4>
            <ol className="space-y-4">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex gap-4 items-center group">
                        <span className="text-[10px] font-mono text-blue-500 group-hover:translate-x-1 transition-transform">{i + 1}.</span>
                        <span className="text-sm font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">{item}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}

function DemandRow({ type, pain, trigger, owner, roi }: any) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl grid grid-cols-1 md:grid-cols-5 gap-8 items-center hover:bg-white/[0.04] transition-all">
            <div className="font-bold text-blue-400 italic">{type}</div>
            <div className="text-xs text-white/50"><span className="block text-[8px] uppercase font-mono opacity-40 mb-1">Top Pain</span> {pain}</div>
            <div className="text-xs text-white/50"><span className="block text-[8px] uppercase font-mono opacity-40 mb-1">Trigger</span> {trigger}</div>
            <div className="text-xs text-white/50"><span className="block text-[8px] uppercase font-mono opacity-40 mb-1">Buyer</span> {owner}</div>
            <div className="text-xs font-bold text-white/80"><span className="block text-[8px] uppercase font-mono opacity-40 mb-1 font-normal">ROI Vector</span> {roi}</div>
        </div>
    )
}

function OfferCard({ title, format, promise, price }: any) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-[40px] space-y-6 group hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Zap size={20} />
            </div>
            <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">{title}</h4>
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{format}</p>
            </div>
            <p className="text-sm text-white/60 italic font-light">"{promise}"</p>
            <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">{price}</span>
            </div>
        </div>
    )
}

function RegionalCard({ region, driver, mindset }: any) {
    return (
        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
                <Globe size={18} className="text-blue-500" />
                <h4 className="text-xl font-black italic tracking-tighter">{region}</h4>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Core Driver</p>
                <p className="text-sm font-bold text-white/80">{driver}</p>
            </div>
            <p className="text-sm text-white/40 leading-relaxed font-light">{mindset}</p>
        </div>
    )
}

function FuturePoint({ title, desc }: any) {
    return (
        <div className="flex gap-6 p-6 border border-white/5 bg-white/[0.01] rounded-2xl group hover:border-blue-500/20 transition-all">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
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
                "text-[10px] font-mono uppercase tracking-[0.2em] transition-all hover:text-blue-400",
                active ? "text-blue-400 border-l-2 border-blue-500 pl-4" : "text-white/30 pl-0"
            )}
        >
            {children}
        </a>
    )
}
