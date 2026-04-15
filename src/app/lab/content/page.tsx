"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"
import { LabDocNav } from "@/components/navigation/lab-doc-nav"
import { LabComments } from "@/components/lab/lab-comments"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.55 },
})

export default function ContentArchitecturePage() {
    return (
        <div className="font-sans-brand">
            <TopNav />
            <LabStrategyNav />

            {/* ── HERO / blue ── */}
            <section className="relative min-h-screen bg-[#0047BB] text-white overflow-hidden flex flex-col">
                <span className="absolute right-0 bottom-0 font-cabinet font-bold text-[24vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    SIGNAL
                </span>

                <div className="flex items-center justify-between px-8 md:px-16 pt-36 md:pt-40">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Research Lab</span>
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Content Architecture</span>
                </div>
                <div className="mx-8 md:mx-16 mt-4 h-px bg-white/10" />

                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.5em] text-white/40 mb-6">
                            Intelligence Filter + Builder Toolkit
                        </p>
                        <h1 className="font-cabinet font-bold text-[14vw] md:text-[11vw] leading-[0.85] tracking-tighter text-white">
                            Content.<br />Architecture.
                        </h1>
                    </motion.div>
                    <motion.div {...fadeUp(0.1)} className="mt-10 md:mt-14 max-w-2xl">
                        <p className="text-[18px] md:text-[22px] text-white/50 leading-relaxed">
                            Filter the noise. Give people the tools to build. Everything else follows from that.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">01</span>
                </div>
            </section>

            {/* ── THE FUNNEL / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[20vw] text-black/[0.035] leading-none select-none pointer-events-none">
                    WHO
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">01</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">The Funnel</span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-4">
                            Stranger<br /><span className="text-black/25">to Advocate.</span>
                        </h2>
                        <p className="text-[15px] text-black/45 mb-16 max-w-lg">
                            Free content is the top of funnel. The Radar is the middle. Platform and workshops are the conversion. No freemium product needed — the content itself is the free tier.
                        </p>
                    </motion.div>

                    {[
                        {
                            stage: "Stranger → Aware",
                            trigger: "Viral Reel / Tweet / Carousel",
                            value: "Hook that reframes something they thought they understood.",
                            cta: "Follow for more",
                        },
                        {
                            stage: "Aware → Curious",
                            trigger: "The Radar lands in inbox",
                            value: "3 patterns + 1 thesis. Curated intelligence, every Monday.",
                            cta: "Read full analysis →",
                        },
                        {
                            stage: "Curious → Engaged",
                            trigger: "Mindshift Toolkit download",
                            value: "Free lead magnet. Actionable frameworks, not hype.",
                            cta: "Join next workshop / explore platform",
                        },
                        {
                            stage: "Engaged → Believer",
                            trigger: "Consistent Radar + webinars",
                            value: "Your worldview becomes their worldview. Every Monday.",
                            cta: "Share with someone who needs this",
                        },
                        {
                            stage: "Believer → Advocate",
                            trigger: "Mindshift Workshop (€99) or Platform member",
                            value: "Identity shift. They're now a builder, not a passive user.",
                            cta: "Tag someone for next cohort",
                        },
                    ].map((f, i, arr) => (
                        <motion.div key={f.stage} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8">
                                <div className="md:w-[220px] shrink-0">
                                    <p className="font-cabinet font-bold text-[18px] tracking-tight">{f.stage}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#0047BB] mt-1">{f.trigger}</p>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[15px] text-black/60 leading-relaxed">{f.value}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-black/30 mt-2">CTA: {f.cta}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">02</span>
                </div>
            </section>

            {/* ── 4 PILLARS / dark ── */}
            <section className="relative bg-[#0d0d0d] text-[#e8e1da] overflow-hidden">
                <span className="absolute left-[-2vw] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[20vw] text-white/[0.025] leading-none select-none pointer-events-none">
                    FOUR
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">02</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">Content Pillars</span>
                    </div>
                    <div className="mt-4 h-px bg-white/[0.07]" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-16 text-white">
                            Four pillars.<br /><span className="text-white/25">One system.</span>
                        </h2>
                    </motion.div>

                    {[
                        {
                            n: "01",
                            title: "The Intelligence Filter",
                            sub: "The Radar — Weekly",
                            role: "Track the physics of the market. What's new, what died, where capital flows. Curated, not aggregated.",
                            formats: ["The Radar newsletter (Monday 8am)", "LinkedIn carousel — 3 patterns + thesis", "X/Twitter thread — 7-10 tweets", "Instagram Reel — 30s summary"],
                            goal: "Show we see trends 6 months before they become noise.",
                            kpis: ["Newsletter open rate >40%", "Shares per issue >100"],
                        },
                        {
                            n: "02",
                            title: "The Builder's Workflow",
                            sub: "Toolkit — Monthly",
                            role: "Pass on expertise. How to actually build with AI — from the production line, not from theory.",
                            formats: ["Blog case study (1,500-3,000 words)", "YouTube tutorial (8-15 min)", "Mindshift Toolkit PDF (gated, free)", "GitHub templates"],
                            goal: "Sell Mindshift workshops. Position as people who actually build.",
                            kpis: ["Workshop signups", "Time on page >5 min"],
                        },
                        {
                            n: "03",
                            title: "The Future of Creation",
                            sub: "R&D — SORRYWECAN Edge",
                            role: "Visual experiments, AI film, avatars, one-person studios. Where art and machine meet. This is the SORRYWECAN unfair advantage.",
                            formats: ["YouTube mini-docs (high production)", "Reels — 60s BTS", "X/Twitter clips + threads", "Vimeo portfolio"],
                            goal: "Talent pipeline. Tech positioning. Not just creative agency.",
                            kpis: ["Inbound job applications", "Partnership inquiries"],
                        },
                        {
                            n: "04",
                            title: "Human-Centric AI",
                            sub: "Education + B2B",
                            role: "Ethics, accessibility, society. AI for seniors. AI for students. Corporate literacy. The work that matters beyond revenue.",
                            formats: ["LinkedIn native articles", "Webinars (live + archived in Circle)", "Corporate workshops (€690/person)", "B2B email campaigns"],
                            goal: "Corporate bookings. Social proof. Brand equity that money can't buy.",
                            kpis: ["Corporate workshop bookings", "Speaking invitations"],
                        },
                    ].map((p, i, arr) => (
                        <motion.div key={p.n} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-10 md:py-12">
                                <div className="md:w-[220px] shrink-0">
                                    <span className="font-cabinet font-bold text-[48px] text-white/10 leading-none">{p.n}</span>
                                    <p className="font-cabinet font-bold text-[20px] text-white tracking-tight mt-1">{p.title}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#4d7fd4] mt-1">{p.sub}</p>
                                </div>
                                <div className="flex-1 space-y-5">
                                    <p className="text-[15px] text-white/50 leading-relaxed">{p.role}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                        {p.formats.map((f, j) => (
                                            <p key={j} className="flex gap-2 text-[13px] text-white/30">
                                                <span className="text-[#4d7fd4] shrink-0">—</span>{f}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-1">
                                        <div>
                                            <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/20 mb-1">Goal</p>
                                            <p className="text-[13px] text-white/40">{p.goal}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/20 mb-1">KPIs</p>
                                            {p.kpis.map((k, j) => (
                                                <p key={j} className="text-[13px] text-white/40">{k}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/[0.07]" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">03</span>
                </div>
            </section>

            {/* ── 60/30/10 / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden">
                <span className="absolute right-[-1vw] bottom-[-2vw] font-cabinet font-bold text-[28vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    60
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">03</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Content Mix</span>
                    </div>
                    <div className="mt-4 h-px bg-white/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-4">
                            The 60/30/10<br /><span className="text-white/25">rule.</span>
                        </h2>
                        <p className="text-[15px] text-white/45 mb-16 max-w-lg">
                            Not all content is equal. Not all content serves the same job. This is how you split the work so it builds the funnel without burning the team.
                        </p>
                    </motion.div>

                    {[
                        {
                            pct: "60%",
                            label: "Reach",
                            desc: "New eyes. High emotion. Viral potential. This is how strangers find you.",
                            formats: ["TikTok / Reels — 15-30s", "X/Twitter threads — 8-12 tweets", "LinkedIn carousels — 10 slides", "Hot takes and sharp opinions"],
                            examples: [
                                "\"AI has stopped being a technology problem. It is now a power problem.\"",
                                "\"The doing is now the easy part. What's worth building?\"",
                                "\"Coding is 90% generated. What's your excuse?\"",
                            ],
                            kpi: "Views, shares, new followers",
                        },
                        {
                            pct: "30%",
                            label: "Depth",
                            desc: "Trust building. Specific insight. Research-backed. This is how followers become believers.",
                            formats: ["Blog posts — 1,500-3,000 words", "YouTube — 8-15 min", "The Radar newsletter", "Mindshift Toolkits — PDF downloads"],
                            examples: [
                                "The Radar Issue — 3 patterns + 1 weekly thesis",
                                "Mindshift Toolkit Edition — 12-page PDF",
                                "Builder's Workflow case study with prompts",
                            ],
                            kpi: "Saves, comments, time-on-content, email signups",
                        },
                        {
                            pct: "10%",
                            label: "Action",
                            desc: "Clear ask. Proof. Conversion. This is where revenue comes from.",
                            formats: ["Workshop landing pages", "5-email nurture sequences", "Case studies with ROI proof", "DM outreach templates"],
                            examples: [
                                "\"Join Mindshift Workshop — €99, next cohort April 15\"",
                                "\"Download: The AI Toolkit We Actually Use\"",
                                "\"Book a 30-min AI Strategy Call\"",
                            ],
                            kpi: "Click-through, conversions, revenue",
                        },
                    ].map((c, i, arr) => (
                        <motion.div key={c.pct} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-10 md:py-12">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-cabinet font-bold text-[52px] md:text-[64px] leading-none text-white">{c.pct}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.35em] text-white/40 mt-1">{c.label}</p>
                                </div>
                                <div className="flex-1 space-y-5">
                                    <p className="text-[15px] text-white/55 leading-relaxed">{c.desc}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                        {c.formats.map((f, j) => (
                                            <p key={j} className="flex gap-2 text-[13px] text-white/35">
                                                <span className="text-white/20 shrink-0">—</span>{f}
                                            </p>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/25 mb-2">Examples</p>
                                        {c.examples.map((e, j) => (
                                            <p key={j} className="text-[13px] text-white/35 italic leading-relaxed">{e}</p>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-white/25">KPI: {c.kpi}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/10" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">04</span>
                </div>
            </section>

            {/* ── PUBLISHING RHYTHM / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute left-[-2vw] bottom-[-3vw] font-cabinet font-bold text-[22vw] text-black/[0.03] leading-none select-none pointer-events-none">
                    WHEN
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">04</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">Publishing Rhythm</span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-4">
                            Rhythm,<br /><span className="text-black/25">not volume.</span>
                        </h2>
                        <p className="text-[15px] text-black/45 mb-16 max-w-lg">
                            One content session per week. Everything else is repurposing. Consistent beats prolific.
                        </p>
                    </motion.div>

                    {[
                        {
                            cadence: "Weekly",
                            when: "Monday 8am CET",
                            items: [
                                { format: "The Radar", desc: "Newsletter — 3 patterns + 1 weekly thesis. The anchor of everything." },
                                { format: "X/Twitter Thread", desc: "7-10 tweets. Radar thesis broken down in real-time format." },
                                { format: "LinkedIn Carousel", desc: "10 slides. Hero signal + 3 patterns. B2B reach." },
                                { format: "Instagram Reel", desc: "30s summary with voiceover. Radar distilled for visual audience." },
                            ],
                        },
                        {
                            cadence: "Bi-weekly",
                            when: "Every other Wednesday",
                            items: [
                                { format: "Builder Tutorial", desc: "YouTube — 8-15 min. Real workflow, real output, real tools." },
                                { format: "Blog Post", desc: "Case study with prompts and code. Long-form SEO and trust." },
                            ],
                        },
                        {
                            cadence: "Monthly",
                            when: "Last Friday",
                            items: [
                                { format: "Mindshift Toolkit", desc: "PDF download — gated free lead magnet. Grows the email list." },
                                { format: "Live Webinar", desc: "45-60 min. One topic deep. Archived in Circle for members." },
                                { format: "Mini-Doc", desc: "R&D experiment showcase. High production. SORRYWECAN edge." },
                            ],
                        },
                        {
                            cadence: "Quarterly",
                            when: "End of each quarter",
                            items: [
                                { format: "Mindshift Workshop", desc: "Live event — €99/person. The primary community and revenue activator." },
                                { format: "Strategy Refresh", desc: "Update positioning based on what the market is actually saying." },
                            ],
                        },
                    ].map((r, i, arr) => (
                        <motion.div key={r.cadence} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-10">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-cabinet font-bold text-[22px] tracking-tight">{r.cadence}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#0047BB] mt-1">{r.when}</p>
                                </div>
                                <div className="flex-1 space-y-4">
                                    {r.items.map((item, j) => (
                                        <div key={j} className="flex gap-4">
                                            <div className="w-[130px] md:w-[160px] shrink-0">
                                                <p className="font-bold text-[14px]">{item.format}</p>
                                            </div>
                                            <p className="flex-1 text-[14px] text-black/50 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">05</span>
                </div>
            </section>

            {/* ── DISTRIBUTION / dark ── */}
            <section
                className="relative bg-[#0d0d0d] text-[#e8e1da] overflow-hidden"
                style={{
                    backgroundImage: [
                        "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)",
                        "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
                    ].join(", "),
                    backgroundSize: "40px 40px",
                }}
            >
                <span className="absolute right-0 top-0 font-cabinet font-bold text-[22vw] text-white/[0.025] leading-none select-none pointer-events-none">
                    WHERE
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">05</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">Distribution</span>
                    </div>
                    <div className="mt-4 h-px bg-white/[0.07]" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-16 text-white">
                            Own the channels.<br /><span className="text-white/25">Rent the reach.</span>
                        </h2>
                    </motion.div>

                    {[
                        {
                            tier: "Primary — Own & Operate",
                            desc: "These are yours. Build here first. Everything else amplifies this.",
                            channels: [
                                { name: "Blog", handle: "lab.sorrywecan.com", role: "Long-form home. SEO. Depth." },
                                { name: "The Radar", handle: "Beehiiv newsletter", role: "Weekly intelligence filter. The anchor asset." },
                                { name: "X/Twitter", handle: "@ResearchLab_AI", role: "Real-time signals. Fast reach. Intellectual edge." },
                                { name: "LinkedIn", handle: "Research Lab page", role: "B2B reach. Corporate decision makers." },
                                { name: "YouTube", handle: "Research Lab channel", role: "Tutorials, mini-docs, Builder Workflow." },
                            ],
                        },
                        {
                            tier: "Secondary — Amplification",
                            desc: "Repurpose from primary. Don't create native here — distribute here.",
                            channels: [
                                { name: "Instagram", handle: "@researchlab.ai", role: "Visual summaries, Reels, Radar breakdowns." },
                                { name: "TikTok", handle: "@researchlab", role: "15s hooks, trending formats, new audience discovery." },
                                { name: "GitHub", handle: "github.com/sorrywecan", role: "Open-source templates. Developer credibility." },
                                { name: "Medium", handle: "Republish", role: "SEO distribution. Essay discovery." },
                            ],
                        },
                        {
                            tier: "Tertiary — Community",
                            desc: "Where the converted live. Not for acquisition — for retention and depth.",
                            channels: [
                                { name: "Circle", handle: "Research Lab platform", role: "Paid community. Content archive. Member home." },
                                { name: "Live Webinars", handle: "Monthly", role: "Lead gen. Live access free, archive paid." },
                                { name: "IRL Events", handle: "Quarterly", role: "Mindshift Workshop. Vienna (Q3/Q4). Physical presence." },
                            ],
                        },
                    ].map((tier, i, arr) => (
                        <motion.div key={tier.tier} {...fadeUp(i * 0.05)}>
                            <div className="mb-4">
                                <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-[#4d7fd4]">{tier.tier}</p>
                                <p className="text-[13px] text-white/35 mt-1">{tier.desc}</p>
                            </div>
                            <div className="space-y-0 mb-12">
                                {tier.channels.map((ch, j, cArr) => (
                                    <div key={ch.name}>
                                        <div className="flex flex-col md:flex-row gap-2 md:gap-12 py-4">
                                            <div className="md:w-[180px] shrink-0">
                                                <p className="font-bold text-white text-[15px]">{ch.name}</p>
                                                <p className="text-[10px] font-code-brand uppercase tracking-[0.25em] text-white/25 mt-0.5">{ch.handle}</p>
                                            </div>
                                            <p className="flex-1 text-[14px] text-white/40 leading-relaxed">{ch.role}</p>
                                        </div>
                                        {j < cArr.length - 1 && <div className="h-px bg-white/[0.05]" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/[0.07]" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">06</span>
                </div>
            </section>

            {/* ── MONETIZATION / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden">
                <span className="absolute right-[-1vw] bottom-[-3vw] font-cabinet font-bold text-[26vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    €
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">06</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Monetization</span>
                    </div>
                    <div className="mt-4 h-px bg-white/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-4">
                            €200k–400k<br /><span className="text-white/25">annual ceiling.</span>
                        </h2>
                        <p className="text-[15px] text-white/45 mb-16 max-w-lg">
                            Content is not the business. Content feeds the business. This is what it feeds into.
                        </p>
                    </motion.div>

                    {[
                        {
                            stream: "Corporate AI Literacy",
                            model: "€690/person · 2-day workshop · min 10 people",
                            range: "€50k–300k",
                            note: "Highest revenue per engagement. Tatra banka benchmark: competitor charged €20k for 3-day tools overview. We're positioned well.",
                            owner: "Tiep + Roman",
                        },
                        {
                            stream: "Mindshift Workshops",
                            model: "€99/ticket · 4× per year · 50-150 attendees",
                            range: "€50k–150k",
                            note: "Community seeder and brand event. Every attendee is a potential Circle member or corporate referral.",
                            owner: "Tiep (face) + Roman",
                        },
                        {
                            stream: "Platform / Circle",
                            model: "€39/month founding · scales to premium tier",
                            range: "Validation → scale",
                            note: "Q2 validation at €39/month. September public launch. Pricing may shift after founding cohort data.",
                            owner: "Tiep + Adka",
                        },
                        {
                            stream: "The Radar Premium",
                            model: "Potential future paid tier",
                            range: "TBD",
                            note: "Premium newsletter access as standalone product — possible once audience reaches scale. Not Q2.",
                            owner: "Sasha + Tiep",
                        },
                        {
                            stream: "Affiliate / Tool Partnerships",
                            model: "Commission on Cursor, Claude, Midjourney etc.",
                            range: "Variable",
                            note: "Low effort, compounds over time. Start when audience hits 1,000+ engaged subscribers.",
                            owner: "Sasha",
                        },
                    ].map((s, i, arr) => (
                        <motion.div key={s.stream} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-10">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-cabinet font-bold text-[18px] tracking-tight">{s.stream}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-white/35 mt-2 leading-relaxed">{s.model}</p>
                                </div>
                                <div className="flex-1">
                                    <p className="font-cabinet font-bold text-[36px] text-white/20 leading-none mb-3">{s.range}</p>
                                    <p className="text-[14px] text-white/50 leading-relaxed">{s.note}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-white/25 mt-2">Owner: {s.owner}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/10" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">07</span>
                </div>
            </section>

            {/* ── 90-DAY TARGETS / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[20vw] text-black/[0.03] leading-none select-none pointer-events-none">
                    90
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">07</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">Success Metrics — 90 Days</span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[52px] tracking-tighter leading-[1.0] mb-16">
                            What good<br /><span className="text-black/25">looks like.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {[
                            {
                                category: "Reach",
                                metrics: [
                                    { label: "Newsletter subscribers", target: "0 → 2,000" },
                                    { label: "X/Twitter followers", target: "0 → 5,000" },
                                    { label: "YouTube subscribers", target: "0 → 1,000" },
                                    { label: "LinkedIn followers", target: "0 → 3,000" },
                                ],
                            },
                            {
                                category: "Engagement",
                                metrics: [
                                    { label: "Radar open rate", target: ">40%" },
                                    { label: "Avg. time on blog", target: ">4 min" },
                                    { label: "YouTube watch time", target: ">50%" },
                                    { label: "Shares per Radar issue", target: ">100" },
                                ],
                            },
                            {
                                category: "Conversion",
                                metrics: [
                                    { label: "Mindshift Workshop signups", target: "50+" },
                                    { label: "Corporate inquiries (qualified)", target: "5+" },
                                    { label: "Circle founding members", target: "15–25" },
                                    { label: "Toolkit PDF downloads", target: "500+" },
                                ],
                            },
                            {
                                category: "Revenue",
                                metrics: [
                                    { label: "Corporate workshops closed", target: "3 × €9,660" },
                                    { label: "Q2 invoiced total", target: "€25k+" },
                                    { label: "Circle MRR end of June", target: "€585+" },
                                    { label: "Mindshift ticket revenue", target: "€5k+" },
                                ],
                            },
                        ].map((cat, i, arr) => (
                            <motion.div key={cat.category} {...fadeUp(i * 0.05)}>
                                <div className={`py-8 md:py-10 ${i % 2 === 0 ? "md:pr-12 md:border-r border-black/[0.08]" : "md:pl-12"} ${i < 2 ? "border-b border-black/[0.08]" : ""}`}>
                                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-5">{cat.category}</p>
                                    <div className="space-y-3">
                                        {cat.metrics.map((m, j) => (
                                            <div key={j} className="flex items-baseline justify-between gap-4">
                                                <p className="text-[14px] text-black/55">{m.label}</p>
                                                <p className="font-cabinet font-bold text-[18px] text-[#0047BB] shrink-0">{m.target}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mx-8 md:px-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">08</span>
                </div>
            </section>

            <LabComments page="content" />

            <LabDocNav
                prev={{ label: "Corporate", href: "/lab/corporate" }}
                next={{ label: "Platform Strategy", href: "/lab/platform-strategy" }}
            />

            {/* ── FOOTER ── */}
            <footer className="bg-[#0d0d0d] text-white px-8 md:px-16 py-20">
                <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.5em] text-white/40 mb-6">
                    Internal Document · Content Architecture
                </p>
                <p className="font-cabinet font-bold text-[32px] md:text-[44px] tracking-tighter leading-[0.92] text-white/20">
                    Research Lab<br />by SORRYWECAN
                </p>
                <div className="mt-10 h-px bg-white/10" />
                <p className="mt-6 text-[9px] font-code-brand uppercase tracking-[0.4em] text-white/20">
                    Updated April 2026
                </p>
            </footer>
        </div>
    )
}
