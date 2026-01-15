"use client"

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import {
    ArrowUpRight,
    BarChart3,
    CheckCircle2,
    ChevronRight,
    Clock,
    Globe,
    Layers,
    LayoutGrid,
    Lock,
    Mail,
    MessageSquare,
    Zap,
    TrendingUp,
    ShieldAlert,
    Target,
    Users,
    Search,
    Activity,
    FileText
} from "lucide-react"
import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function AiEducationBlueprintPage() {
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
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20 overflow-x-hidden">
            <TopNav />

            {/* Scroll Progress */}
            <motion.div
                className="fixed top-[64px] left-0 right-0 h-[2px] bg-[#0047BB] origin-left z-50"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden border-b border-black">
                <div className="noise-bg absolute inset-0 z-0" />

                {/* Floating AI Background */}
                <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 opacity-[0.05] select-none pointer-events-none">
                    <span className="font-serif-instrument text-[500px] leading-none text-transparent [webkit-text-stroke:1px_#000]">AI</span>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between mb-12"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-black" />
                            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#0047BB]">SORRYWECAN RESEARCH LAB</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-serif-instrument text-[8vw] md:text-[7.5vw] leading-[0.95] tracking-tight mb-12 max-w-5xl"
                    >
                        AI Education for <br />
                        <span className="italic text-[#0047BB]">Teams</span> That <br />
                        Actually Work
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl text-[14px] text-black/60 leading-relaxed mb-20"
                    >
                        We don't transform entire companies. We empower specific teams—Marketing, HR, Admin, Finance—with practical AI skills they can use tomorrow. Not philosophy. Not theory. Real workflows that save real hours.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black pt-12">
                        <HeroMeta
                            label="Who We Are"
                            value="SORRYWECAN is a creative-tech studio in Bratislava. Our Research Lab explores human-AI collaboration at the frontier of what's possible."
                        />
                        <HeroMeta
                            label="What We Do"
                            value="Department-level AI education. Marketing teams. HR departments. Admin staff. Finance groups. One team at a time, with measurable ROI."
                        />
                        <HeroMeta
                            label="Why Us"
                            value="We're not consultants. We're practitioners who use AI daily. Creative studio credibility meets research lab depth."
                        />
                    </div>
                </div>
            </section>

            {/* Sticky Sub-Navigation */}
            <div className="sticky top-[64px] z-40 bg-[#f5f5f3]/90 backdrop-blur-md border-b border-black overflow-x-auto no-scrollbar">
                <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center gap-8 whitespace-nowrap">
                    <NavAnchor id="philosophy" active={activeSection === "philosophy"}>00 PHILOSOPHY</NavAnchor>
                    <NavAnchor id="market" active={activeSection === "market"}>01 MARKET</NavAnchor>
                    <NavAnchor id="departments" active={activeSection === "departments"}>02 DEPARTMENTS</NavAnchor>
                    <NavAnchor id="offers" active={activeSection === "offers"}>03 OFFERS</NavAnchor>
                    <NavAnchor id="workflows" active={activeSection === "workflows"}>04 WORKFLOWS</NavAnchor>
                    <NavAnchor id="gtm" active={activeSection === "gtm"}>05 EXECUTION</NavAnchor>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 relative z-10">

                {/* Section 00: Philosophy */}
                <Section id="philosophy" number="00" title="Our Philosophy">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start mb-20">
                        <SidebarLabel>The SORRYWECAN Way</SidebarLabel>
                        <div className="space-y-6 text-lg leading-relaxed max-w-3xl">
                            <p>
                                <strong>We are the medicine and the poison.</strong> SORRYWECAN operates at the intersection of creative vision and practical execution. We're not interested in theoretical AI debates or philosophical hand-wringing. We build things. We teach what works.
                            </p>
                            <p>
                                Our Research Lab isn't an ivory tower—it's a living laboratory where we test AI workflows on real projects before teaching them to others. Every technique we share has been battle-tested in our own creative studio first.
                            </p>
                        </div>
                    </div>

                    <QuoteBlock quote="We don't believe in transforming companies. We believe in empowering teams. One department. One workflow. One measurable win at a time." />

                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start mt-20">
                        <SidebarLabel>What Makes Us Different</SidebarLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <Point title="Creative Studio Credibility" desc="We're not McKinsey. We're a neo-surrealist creative studio that happens to run a research lab. Our visual language is bold. Our approach is unconventional." />
                            <Point title="Practitioner-First" desc="Every AI workflow we teach, we use ourselves. Our team builds with Claude, GPT-4, Midjourney, and custom tools daily." />
                            <Point title="Department-Level Focus" desc="We don't try to boil the ocean. We train specific teams on specific workflows with specific ROI targets." />
                            <Point title="Bratislava to the World" desc="We're proudly CEE-based. We understand the Slovak and Czech market intimately—the culture, the hesitancy, the regulatory environment." />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-black mt-20 divide-x divide-y divide-black bg-black">
                        <StatSmall label="Team at a time" value="1" />
                        <StatSmall label="Avg time reclaimed" value="66m" accent />
                        <StatSmall label="1st Year ROI" value="700%" />
                        <StatSmall label="Starts using" value="Day 1" accent />
                    </div>
                </Section>

                {/* Section 01: Market Reality */}
                <Section id="market" number="01" title="Market Reality">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start mb-20">
                        <SidebarLabel>The Maturity Divide</SidebarLabel>
                        <div className="space-y-6 text-lg leading-relaxed max-w-3xl">
                            <p>
                                The era of experimental AI has concluded, giving way to rigorous, ROI-driven integration.
                                Czech Republic leads CESEE with <span className="text-[#0047BB] font-bold">48% systematic adoption</span>—but this is colliding with massive skills gaps.
                            </p>
                            <p>
                                In Slovakia, 24% of jobs face significant displacement risk. The "Capacity Gap" has reached a breaking point: 80% of workers report insufficient time to complete tasks.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        <StatBox val="48%" label="CZ Firms using GenAI systematiclly" />
                        <StatBox val="88%" label="CZ Firms reporting critical skill gaps" accent />
                        <StatBox val="71%" label="Workers using 'Shadow AI' tools" />
                        <StatBox val="€670K" label="Avg cost per Shadow AI breach" accent />
                    </div>

                    <div className="overflow-x-auto mb-20">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-black text-white text-[10px] uppercase tracking-widest text-left">
                                    <th className="p-4 border border-black">Sector</th>
                                    <th className="p-4 border border-black">Czech Rep</th>
                                    <th className="p-4 border border-black">Slovakia</th>
                                    <th className="p-4 border border-black">Primary Vector</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs">
                                <TableRow sector="Banking & Finance" cz="56%" sk="51%" vector="Fraud & AML Triage" />
                                <TableRow sector="IT & Services" cz="55%" sk="53%" vector="Automated Code Units" />
                                <TableRow sector="Manufacturing" cz="52%" sk="30%" vector="Predictive Analytics" />
                                <TableRow sector="Public Sector" cz="18%" sk="14%" vector="Admin Automation" />
                            </tbody>
                        </table>
                    </div>

                    <QuoteBlock quote="The white space is Applied Agentic Transformation — where employees evolve from task-doers to orchestrators of digital agents." />
                </Section>

                {/* Section 02: Departments */}
                <Section id="departments" number="02" title="Target Departments">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black divide-x divide-y divide-black mb-20">
                        <DepartmentCard
                            title="Marketing & Creative"
                            solve="Content bottlenecks, revision cycles, ad copy at scale."
                            wins="10 ad variants in 10 mins. 80% first-draft reduction."
                            price="€3.5K — €7.5K"
                        />
                        <DepartmentCard
                            title="HR & People Ops"
                            solve="Resume screening, document chaos, policy FAQ fatigue."
                            wins="Screen 200 CVs in 30 mins. 60% FAQ deflection."
                            price="€3.5K — €7.5K"
                        />
                        <DepartmentCard
                            title="Admin & Operations"
                            solve="Meeting minutes, travel logistics, document formatting."
                            wins="Notes in 2 mins vs 30. 5 hrs/week recovered."
                            price="€3.5K — €7.5K"
                        />
                        <DepartmentCard
                            title="Finance & Accounting"
                            solve="Invoice backlogs, report tedium, audit prep chaos."
                            wins="Monthly close in 4 hrs vs 16. 75% faster reports."
                            price="€3.5K — €7.5K"
                        />
                        <DepartmentCard
                            title="Customer Support"
                            solve="Repetitive query fatigue, slow response, inconsistency."
                            wins="65% tickets auto-drafted. 50% faster response."
                            price="€3.5K — €7.5K"
                        />
                        <DepartmentCard
                            title="Sales & BD"
                            solve="Proposal writing burnout, research time sinks, CRM neglect."
                            wins="Proposals in 2 hrs vs 2 days. 3x outreach volume."
                            price="€3.5K — €7.5K"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start">
                        <SidebarLabel>Who Actually Buys</SidebarLabel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-black/60">
                            <p><strong>Department Heads:</strong> Marketing Directors, HR Managers. They feel the pain weekly and have discretionary budget for workshops under €10K.</p>
                            <p><strong>L&D / HR Directors:</strong> Responsible for EU AI Act Article 4 compliance. Need documented training for audit trails.</p>
                            <p><strong>Innovation Leads:</strong> Looking for quick wins to justify their existence. Department workshops = proof points.</p>
                            <p><strong>SME CEOs:</strong> Small enough to decide fast (50-250 employees), big enough to have departmental pain.</p>
                        </div>
                    </div>
                </Section>

                {/* Section 03: Offers */}
                <Section id="offers" number="03" title="Offer Architecture">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <OfferBox
                            num="01"
                            title="AI Productivity Sprint"
                            desc="One intensive day. Hands-on building of 2-3 live automations. Personal playbooks for everyone."
                            price="€3,500"
                        />
                        <OfferBox
                            num="02"
                            title="Workflow Lab"
                            desc="Three days of deep work. We audit processes and build 3+ functional AI systems tailored to your stack."
                            price="€7,500"
                            accent
                        />
                        <OfferBox
                            num="03"
                            title="Adoption Program"
                            desc="8 weeks. Department-by-department rollout. Internal champion training + governance framework."
                            price="€15,000+"
                        />
                    </div>

                    <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10 font-serif-instrument text-[20vw] leading-none select-none pointer-events-none italic">ROI</div>
                        <h3 className="font-serif-instrument text-5xl mb-12 relative z-10">The Math That Matters</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                            <BigStat val="2 hrs" label="Weekly savings / person" />
                            <BigStat val="96 hrs" label="Annual hours reclaimed" accent />
                            <BigStat val="€2.4K" label="Annual value / person" />
                            <BigStat val="700%" label="First-year ROI" accent />
                        </div>
                        <div className="mt-12 pt-12 border-t border-white/10 text-center font-serif-instrument text-2xl italic">
                            Employee earning €50K saves 2 hours/week = €2,400/year saved
                        </div>
                    </div>
                </Section>

                {/* Section 04: Workflows */}
                <Section id="workflows" number="04" title="Department Workflows">
                    <div className="space-y-12">
                        <WorkflowBlock
                            title="Marketing & Creative"
                            items={[
                                { name: "Campaign Brainstorm Engine", desc: "GPT-4 + Claude workflow for 50 concepts from one brief", hours: "4 hrs → 30 mins" },
                                { name: "Content Atomizer", desc: "One blog post to 10 social posts, 3 emails, 5 ad hooks", hours: "6 hrs → 45 mins" },
                                { name: "Brief-to-Moodboard", desc: "Midjourney pipeline turning briefs into visual direction", hours: "8 hrs → 1 hr" }
                            ]}
                        />
                        <WorkflowBlock
                            title="HR & People Operations"
                            items={[
                                { name: "CV Screening Assistant", desc: "Pre-screen 200 CVs and rank top 20 candidates", hours: "8 hrs → 30 mins" },
                                { name: "Policy FAQ Bot", desc: "Internal chatbot trained on company docs handles 80% queries", hours: "20+ hrs → 4 hrs" },
                                { name: "Performance Drafter", desc: "First-draft reviews from manager notes and OKR data", hours: "2 hrs → 15 mins" }
                            ]}
                        />
                        <WorkflowBlock
                            title="Finance & Accounting"
                            items={[
                                { name: "Invoice Data Extractor", desc: "PDFs to structured data—vendor, amount, line items", hours: "10 min → 30 sec" },
                                { name: "Report Narrative Gen", desc: "Data tables to executive-ready commentary/insights", hours: "2 hrs → 15 mins" },
                                { name: "Variance Explainer", desc: "Auto-generated budget vs actual difference reports", hours: "4 hrs → 30 mins" }
                            ]}
                        />
                    </div>
                </Section>

                {/* Section 05: GTM */}
                <Section id="gtm" number="05" title="Execution Plan">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start mb-20">
                        <SidebarLabel>90-Day Timeline</SidebarLabel>
                        <div className="border border-black overflow-hidden bg-white">
                            <TimelineRow week="W 1-4" title="Engine Building" desc="Finalize workshop materials, build department landing pages, map target 100 firms." />
                            <TimelineRow week="W 5-8" title="Pilot Phase" desc="Run 3 pilot workshops for case studies, launch LinkedIn workflow series." accent />
                            <TimelineRow week="W 9-12" title="Scale Outreach" desc="Launch cold outreach to 200 prospects, 2 free webinars, target 6-10 paid bookings." />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <OutreachBox
                            target="Marketing Director"
                            subject="10 ad copy variants in 10 minutes"
                            msg="Hey, your team is spending days on what AI can do in minutes. We ran a workshop last month where they now produce 10x content variants. Worth 15 mins to hear how?"
                        />
                        <OutreachBox
                            target="HR Manager"
                            subject="Your team answering same questions 200x"
                            msg="HR teams spend 20+ hrs/week on repetitive queries. We train teams to build assistants that handle 80% of this automatically. One day workshop. Interested?"
                        />
                        <OutreachBox
                            target="Finance Controller"
                            subject="Monthly close in 4 hrs instead of 16"
                            msg="We've trained teams to use AI to draft variance explanations automatically—accurate and fast. Real workflows you can use immediately. Coffee next week?"
                        />
                    </div>
                </Section>

            </div>

            <footer className="bg-black text-white py-32 mt-32 px-6 md:px-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20">
                    <div className="space-y-6">
                        <h2 className="font-serif-instrument text-[10vw] md:text-[8vw] leading-none text-[#0047BB]">SORRYWECAN</h2>
                        <p className="max-w-md text-xs uppercase tracking-[0.2em] leading-relaxed opacity-40">
                            WE'RE THE MEDICINE AND THE POISON. <br />
                            BRATISLAVA, SLOVAKIA / CEE REGION. <br />
                            © 2026 RESEARCH LAB
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-12 text-[10px] font-bold tracking-widest uppercase opacity-60">
                        <div>
                            <p className="mb-2 opacity-30">Location</p>
                            <p>Bratislava, SK</p>
                        </div>
                        <div>
                            <p className="mb-2 opacity-30">Focus</p>
                            <p>Applied AI Training</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

/* ----------------- Sub-Components ----------------- */

function HeroMeta({ label, value }: { label: string, value: string }) {
    return (
        <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">{label}</p>
            <p className="text-sm leading-relaxed">{value}</p>
        </div>
    )
}

function Section({ id, number, title, children }: any) {
    return (
        <section id={id} className="scroll-mt-32 py-32 border-b border-black last:border-0 relative">
            <div className="absolute top-32 right-0 text-[12vw] font-serif-instrument italic text-black/[0.02] select-none pointer-events-none">
                {number}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 mb-20"
            >
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">{number} // MODULE</span>
                <h2 className="font-serif-instrument text-6xl md:text-7xl tracking-tighter">{title}</h2>
            </motion.div>
            {children}
        </section>
    )
}

function QuoteBlock({ quote }: { quote: string }) {
    return (
        <div className="py-20 border-y border-black relative overflow-hidden group">
            <blockquote className="font-serif-instrument text-4xl md:text-5xl leading-tight max-w-4xl italic">
                "{quote}"
            </blockquote>
        </div>
    )
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 pt-2 lg:sticky lg:top-40">
            {children}
        </div>
    )
}

function Point({ title, desc }: any) {
    return (
        <div className="space-y-4">
            <h4 className="font-bold text-lg italic font-serif-instrument border-b border-black/10 pb-2">{title}</h4>
            <p className="text-sm text-black/60 leading-relaxed">{desc}</p>
        </div>
    )
}

function StatSmall({ label, value, accent }: any) {
    return (
        <div className="p-8 text-center space-y-2 bg-white flex flex-col justify-center items-center">
            <p className={cn("text-4xl font-serif-instrument", accent ? "text-[#0047BB]" : "text-black")}>{value}</p>
            <p className="text-[9px] uppercase tracking-widest font-bold opacity-40">{label}</p>
        </div>
    )
}

function StatBox({ val, label, accent }: any) {
    return (
        <div className={cn(
            "p-8 border border-black space-y-4 transition-all hover:scale-[1.02]",
            accent ? "bg-black text-white" : "bg-white"
        )}>
            <p className={cn("text-5xl font-serif-instrument leading-none", accent ? "text-[#0047BB]" : "text-black")}>{val}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-tight">{label}</p>
        </div>
    )
}

function TableRow({ sector, cz, sk, vector }: any) {
    return (
        <tr className="border-b border-black hover:bg-black/[0.02] transition-colors group">
            <td className="p-4 font-bold italic text-lg font-serif-instrument border-x border-black">{sector}</td>
            <td className="p-4 font-bold border-r border-black">{cz}</td>
            <td className="p-4 border-r border-black">{sk}</td>
            <td className="p-4 text-[10px] uppercase font-bold tracking-widest text-black/40 group-hover:text-[#0047BB] transition-colors">{vector}</td>
        </tr>
    )
}

function DepartmentCard({ title, solve, wins, price }: any) {
    return (
        <div className="p-8 space-y-6 hover:bg-[#0047BB]/5 transition-colors group">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0047BB]" />
                <h4 className="font-bold text-lg uppercase tracking-tight">{title}</h4>
            </div>
            <div className="space-y-4 text-xs font-light leading-relaxed">
                <p><span className="font-bold uppercase tracking-widest opacity-40 text-[9px] block mb-1">Impact</span>{solve}</p>
                <p><span className="font-bold uppercase tracking-widest opacity-40 text-[9px] block mb-1">Win</span>{wins}</p>
            </div>
            <div className="pt-4 border-t border-black/10 font-bold text-[#0047BB]">
                {price}
            </div>
        </div>
    )
}

function OfferBox({ num, title, desc, price, accent }: any) {
    return (
        <div className={cn(
            "p-10 border border-black h-full flex flex-col justify-between group hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all",
            accent ? "bg-black text-white border-black" : "bg-white"
        )}>
            <div className="space-y-6">
                <span className="text-[10px] font-bold tracking-widest opacity-40">PACK {num} //</span>
                <h3 className="font-serif-instrument text-4xl italic leading-none group-hover:text-[#0047BB] transition-colors">{title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{desc}</p>
            </div>
            <div className="pt-10 border-t border-black/10 flex justify-between items-center mt-auto">
                <span className="text-2xl font-serif-instrument italic">{price}</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </div>
    )
}

function BigStat({ val, label, accent }: any) {
    return (
        <div className="text-center group">
            <p className={cn("text-6xl font-serif-instrument mb-2", accent ? "text-[#0047BB]" : "text-white")}>{val}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{label}</p>
        </div>
    )
}

function WorkflowBlock({ title, items }: any) {
    return (
        <div className="border border-black bg-black">
            <div className="p-6 text-white font-serif-instrument text-3xl italic border-b border-white/10 flex justify-between items-center">
                {title}
                <LayoutGrid size={20} className="text-[#0047BB]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-white/10">
                {items.map((item: any, i: number) => (
                    <div key={i} className="p-8 space-y-4 hover:bg-white/[0.05] transition-colors">
                        <h5 className="font-bold uppercase text-sm text-white">{item.name}</h5>
                        <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                        <p className="text-sm font-serif-instrument italic text-[#0047BB]">{item.hours}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function TimelineRow({ week, title, desc, accent }: any) {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-[120px_1fr] divide-x divide-black border-b border-black last:border-0",
            accent ? "bg-[#0047BB]/5" : ""
        )}>
            <div className="p-6 text-[10px] font-bold uppercase tracking-widest text-black/40 flex items-center justify-center bg-white">
                {week}
            </div>
            <div className="p-8 space-y-2">
                <h4 className="font-bold italic font-serif-instrument text-xl">{title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

function OutreachBox({ target, subject, msg }: any) {
    return (
        <div className="p-8 border border-black space-y-4 hover:border-[#0047BB] transition-colors bg-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">{target}</span>
            <div className="space-y-2">
                <p className="text-xs font-bold leading-tight">Subj: "{subject}"</p>
                <p className="text-[11px] text-black/50 leading-relaxed italic">"{msg}"</p>
            </div>
        </div>
    )
}

function NavAnchor({ id, children, active }: any) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <a
            href={`#${id}`}
            onClick={handleClick}
            className={cn(
                "text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative py-2",
                active ? "text-[#0047BB]" : "text-black/30 hover:text-black"
            )}
        >
            {children}
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0047BB]"
                />
            )}
        </a>
    )
}
