"use client"

import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
})

function Label({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
            {children}
        </span>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-syne font-bold text-2xl md:text-3xl tracking-tighter mt-2 mb-6">
            {children}
        </h2>
    )
}

function Divider() {
    return <div className="border-t border-black/10 my-12" />
}

const changelog = [
    { date: "2026-04-14", note: "Initial version. Revenue model, content flywheel, platform launch plan, corporate pipeline, risks documented." },
]

export default function Q2OverviewPage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <motion.div {...fade(0)} className="mb-16">
                        <Label>Q2 2026 — April / May / June</Label>
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-3 leading-[0.95]">
                            Holistic Overview
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            The full picture of the quarter — revenue, audience, content, platform, corporate. One document. Updated as we learn.
                        </p>
                    </motion.div>

                    {/* The Quarter in One Paragraph */}
                    <motion.div {...fade(0.05)}>
                        <Label>The Quarter</Label>
                        <SectionTitle>What July 1st Looks Like If Q2 Worked</SectionTitle>
                        <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                            <p className="leading-relaxed text-lg font-syne font-bold tracking-tight">
                                Three corporate workshops delivered. O2 contract signed, two more in the pipeline or closed. Revenue at or above €25k from workshops. Instagram crossed 1,500 followers with a consistent content rhythm running. Circle is live with a founding cohort of 15-25 people — some paying, some core, all active. We know what content they watch and what they skip. The bi-weekly webinar is part of the routine. We understand our funnel: who comes in from social, who converts to member, who books a workshop. Q3 starts with clarity, not guesses.
                            </p>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Three Priorities */}
                    <motion.div {...fade(0.05)}>
                        <Label>02</Label>
                        <SectionTitle>Three Priorities — Ranked</SectionTitle>
                        <div className="space-y-3">
                            {[
                                {
                                    rank: "01",
                                    title: "Close and deliver corporate workshops",
                                    why: "Fastest path to €25k+. The prospect list exists. O2 is warm. Two more needed.",
                                    done: "Three workshops delivered, invoiced, paid. Testimonials captured. Bridge to community built.",
                                    owner: "Prince + Ján",
                                },
                                {
                                    rank: "02",
                                    title: "Build Circle and launch to founding cohort",
                                    why: "The scalable answer to a workshop that can't scale. Validates the membership model before September.",
                                    done: "15-25 founding members inside Circle by end of June. Content library with 4+ weeks of material. Bi-weekly webinar running.",
                                    owner: "Prince + Roman",
                                },
                                {
                                    rank: "03",
                                    title: "Grow Instagram 800 → 1,500+ and build the content habit",
                                    why: "Every follower is a potential member or workshop attendee. The free funnel feeds everything.",
                                    done: "1,500 followers. Content posting at least 4×/week. Newsletter sending weekly. Podcast episode published.",
                                    owner: "Prince (lead), all three contribute",
                                },
                            ].map((p) => (
                                <div key={p.rank} className="p-5 border border-black/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-[#0047BB] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                                            {p.rank}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-lg">{p.title}</p>
                                            <p className="text-sm text-black/50 mt-1">{p.why}</p>
                                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="p-3 bg-black/[0.03] border border-black/[0.06]">
                                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Done looks like</p>
                                                    <p className="text-sm text-black/70">{p.done}</p>
                                                </div>
                                                <div className="p-3 bg-black/[0.03] border border-black/[0.06]">
                                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Owner</p>
                                                    <p className="text-sm text-black/70">{p.owner}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Revenue */}
                    <motion.div {...fade(0.05)}>
                        <Label>03</Label>
                        <SectionTitle>Revenue Model & Targets</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    { source: "Corporate Workshops", target: "€25,200", calc: "3 workshops × €8,400 avg", confidence: "High — O2 pre-warmed" },
                                    { source: "Community Memberships", target: "€2,340", calc: "20 members × €39 × 3 months avg", confidence: "Medium — validation phase" },
                                    { source: "Grants / Other", target: "€3,000+", calc: "EU training subsidies, institutional", confidence: "Low — research needed" },
                                ].map((r) => (
                                    <div key={r.source} className="p-5 border border-black/10">
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">{r.source}</p>
                                        <p className="text-3xl font-bold text-[#0047BB] mt-2">{r.target}</p>
                                        <p className="text-xs text-black/40 mt-1">{r.calc}</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-2">{r.confidence}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">Q2 Revenue Target</p>
                                <p className="text-5xl font-bold">€30k+</p>
                                <p className="text-sm text-black/50 mt-2">Corporate is the engine. Membership is the experiment. Grants are the bonus.</p>
                            </div>

                            <div>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Monthly Checkpoints</p>
                                <div className="space-y-2">
                                    {[
                                        {
                                            month: "End of April",
                                            targets: ["O2 contract signed or clear timeline", "Content publishing 4×/week", "Circle account created, architecture planned", "Prospect outreach: 20+ active conversations"],
                                        },
                                        {
                                            month: "End of May",
                                            targets: ["First corporate workshop delivered", "Circle content backlog: 4+ weeks ready", "Instagram: 1,100+ followers", "Founding cohort identified: 15-20 people invited"],
                                        },
                                        {
                                            month: "End of June (Q2 close)",
                                            targets: ["3 corporate workshops delivered or contracted", "Circle live with founding cohort, first paying members", "Instagram: 1,500+", "Bi-weekly webinar running", "€25k+ invoiced"],
                                        },
                                    ].map((c) => (
                                        <div key={c.month} className="p-4 border border-black/10">
                                            <p className="font-bold text-sm mb-2">{c.month}</p>
                                            <ul className="space-y-1">
                                                {c.targets.map((t, i) => (
                                                    <li key={i} className="flex gap-2 text-sm text-black/60">
                                                        <span className="text-[#0047BB]">—</span>
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">Kill Criteria</p>
                                <ul className="space-y-1 text-sm text-black/60">
                                    <li><span className="text-[#0047BB]">—</span> If less than 5 founding Circle members by June 15 → delay public launch to August, focus on corporate only for Q3</li>
                                    <li><span className="text-[#0047BB]">—</span> If O2 stalls beyond May → activate remaining prospect list aggressively, consider price testing</li>
                                    <li><span className="text-[#0047BB]">—</span> If Instagram growth stalls below 1,100 by May → audit content format, test reels vs. editorial, bring in collaborator</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Audience Growth */}
                    <motion.div {...fade(0.05)}>
                        <Label>04</Label>
                        <SectionTitle>Audience Growth</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    { platform: "Instagram", current: "~800", target: "1,500+", tactic: "4×/week: educational carousels, behind-scenes, short reels, opinion posts" },
                                    { platform: "Newsletter", current: "Small list", target: "500+ subscribers", tactic: "Weekly THE SIGNAL — distilled AI news + Research Lab thinking" },
                                    { platform: "Circle Community", current: "0", target: "15-25 founding members", tactic: "Personal invitations. Workshop alumni first. Founding pricing." },
                                ].map((a) => (
                                    <div key={a.platform} className="p-5 border border-black/10">
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">{a.platform}</p>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <p className="text-black/30 text-lg font-bold">{a.current}</p>
                                            <p className="text-[#0047BB]">→</p>
                                            <p className="text-2xl font-bold text-[#0047BB]">{a.target}</p>
                                        </div>
                                        <p className="text-xs text-black/50 mt-2">{a.tactic}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">Content Pillars — Instagram</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {[
                                        { pillar: "How To Think", desc: "AI thinking frameworks. Mindshift concepts. Philosophy meets practice." },
                                        { pillar: "Tool of the Week", desc: "One tool, actually explained. What it does, when to use it, what to combine it with." },
                                        { pillar: "What's Happening", desc: "AI news distilled for Slovak professionals. No hype. Real implications." },
                                        { pillar: "Research Lab Life", desc: "Behind the scenes, workshops, community moments, founder perspectives." },
                                    ].map((p) => (
                                        <div key={p.pillar} className="p-3 border border-black/10">
                                            <p className="font-bold text-sm">{p.pillar}</p>
                                            <p className="text-xs text-black/50 mt-1">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">The Conversion Path</p>
                                <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                                    {[
                                        { step: "Stranger", channel: "Reels / Carousels" },
                                        { step: "Follower", channel: "Newsletter sign-up" },
                                        { step: "Reader", channel: "Podcast / Free content" },
                                        { step: "Workshop", channel: "THE MINDSHIFT €99" },
                                        { step: "Member", channel: "Circle €39/mo" },
                                        { step: "Advocate", channel: "Refers others" },
                                    ].map((s, i, arr) => (
                                        <div key={s.step} className="flex items-center gap-2">
                                            <div className="p-3 border border-black/10 text-center">
                                                <p className="font-bold text-sm">{s.step}</p>
                                                <p className="text-[10px] font-code-brand text-[#0047BB] uppercase tracking-widest mt-0.5">{s.channel}</p>
                                            </div>
                                            {i < arr.length - 1 && (
                                                <span className="text-black/20 hidden md:block">→</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Content Flywheel */}
                    <motion.div {...fade(0.05)}>
                        <Label>05</Label>
                        <SectionTitle>Content Flywheel</SectionTitle>

                        <div className="space-y-3">
                            <div className="p-4 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-sm text-black/70">Free content drives awareness and trust. Paid content rewards depth. Each format feeds the next.</p>
                            </div>

                            {[
                                {
                                    cadence: "Daily",
                                    format: "Social content",
                                    type: "Free / Top of funnel",
                                    detail: "Instagram posts — 4 pillars rotating. Mix of carousels, short video, opinion. Goal: reach, follow, share.",
                                    owner: "Prince (lead)",
                                },
                                {
                                    cadence: "Weekly",
                                    format: "THE SIGNAL — Newsletter + Audio",
                                    type: "Free / Mid funnel",
                                    detail: "Curated AI news + Research Lab take. Short audio version (40-60 sec) for those who don't read. Both versions, same content. Goal: trust, subscription, return visit.",
                                    owner: "Prince (write), Roman (design)",
                                },
                                {
                                    cadence: "Bi-weekly",
                                    format: "Live Webinar",
                                    type: "Free + Paid",
                                    detail: "Live to public first. Archived inside Circle for members. 45-60 min: one topic deep. Guest educators welcome. Goal: community warmth, membership conversion.",
                                    owner: "Ján (tech topics), Prince (mindset), Roman (design/visual AI)",
                                },
                                {
                                    cadence: "Monthly",
                                    format: "Case Study",
                                    type: "Paid / Depth",
                                    detail: "One real-world AI application, deconstructed. How it was done, what worked, what didn't, what to steal. Source material from our own work and workshops. Lives inside Circle, teased on social.",
                                    owner: "Rotating — one founder per month",
                                },
                                {
                                    cadence: "Quarterly",
                                    format: "State of Research Lab",
                                    type: "Public",
                                    detail: "What happened, what we learned, what's next. Honest. Data-backed. Doubles as content, social proof, and accountability.",
                                    owner: "Prince",
                                },
                            ].map((f, i) => (
                                <div key={f.cadence} className="flex gap-4 p-4 border border-black/10">
                                    <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-3 flex-wrap">
                                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30">{f.cadence}</p>
                                            <p className="font-bold">{f.format}</p>
                                            <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5">{f.type}</span>
                                        </div>
                                        <p className="text-sm text-black/60 mt-1">{f.detail}</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-2">Owner: {f.owner}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Platform Launch */}
                    <motion.div {...fade(0.05)}>
                        <Label>06</Label>
                        <SectionTitle>Platform Launch Plan</SectionTitle>

                        <div className="space-y-3">
                            {[
                                {
                                    phase: "Build Phase",
                                    timeline: "April — mid May",
                                    color: false,
                                    items: [
                                        "Circle account configured — spaces, channels, branding",
                                        "Pre-record 4-6 weeks of content backlog",
                                        "Prompt library: first 20 prompts structured",
                                        "Mindshift thinking framework: fully documented and recorded",
                                        "Founding member list: 20 people identified and personally invited",
                                    ],
                                },
                                {
                                    phase: "Soft Launch — Founding Cohort",
                                    timeline: "June 2026",
                                    color: true,
                                    items: [
                                        "15-25 founding members inside Circle",
                                        "Mix: paying members (€39/mo) + core contributors (free access for contribution)",
                                        "First bi-weekly webinar recorded and posted",
                                        "Active: gather feedback, see what gets watched, what gets skipped",
                                        "No public promotion yet — this is a test, not a launch",
                                    ],
                                },
                                {
                                    phase: "Iterate & Warm — Q3",
                                    timeline: "July — August 2026",
                                    color: false,
                                    items: [
                                        "Fix what doesn't work from founding cohort feedback",
                                        "Build out content areas that get most engagement",
                                        "Prepare September launch assets (landing page, social campaign)",
                                        "Target: 50 members before September go-full",
                                    ],
                                },
                                {
                                    phase: "Full Blast",
                                    timeline: "September 2026",
                                    color: false,
                                    items: [
                                        "Public launch — full social campaign",
                                        "Back-to-school / learning season — perfect timing",
                                        "Target: 100+ members by end of September",
                                        "Pricing review: is €39/mo working or do we adjust?",
                                    ],
                                },
                            ].map((ph) => (
                                <div key={ph.phase} className={`p-5 border ${ph.color ? "border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]" : "border-black/10"}`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <p className="font-bold">{ph.phase}</p>
                                        <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB]">{ph.timeline}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {ph.items.map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-black/60">
                                                <span className="text-[#0047BB] shrink-0">—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Corporate Pipeline */}
                    <motion.div {...fade(0.05)}>
                        <Label>07</Label>
                        <SectionTitle>Corporate Pipeline — Q2</SectionTitle>

                        <div className="space-y-3">
                            {[
                                {
                                    company: "O2 — Department 1",
                                    status: "Pre-warmed",
                                    value: "€8,400",
                                    note: "Head of department attended THE MINDSHIFT. Loved the thinking approach. Active conversation.",
                                    action: "Send formal proposal. Confirm date. Close.",
                                },
                                {
                                    company: "O2 — Department 2",
                                    status: "Interested",
                                    value: "€8,400",
                                    note: "Same contact is bridge. Internal referral from Department 1.",
                                    action: "Follow-up after Department 1 confirmation.",
                                },
                                {
                                    company: "Target #3",
                                    status: "To activate",
                                    value: "€8,400",
                                    note: "From 145-company prospect list. Tier 1 fit. Identify and reach by end of April.",
                                    action: "Pull from prospects database. Prioritise agencies and finance sector.",
                                },
                            ].map((c) => (
                                <div key={c.company} className="p-5 border border-black/10">
                                    <div className="flex items-start justify-between mb-2">
                                        <p className="font-bold">{c.company}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5">{c.status}</span>
                                            <span className="text-lg font-bold text-[#0047BB]">{c.value}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/60">{c.note}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-2">Next action: {c.action}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Risks */}
                    <motion.div {...fade(0.05)}>
                        <Label>08</Label>
                        <SectionTitle>Risks & What We Are Not Doing</SectionTitle>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                {[
                                    {
                                        risk: "Empty community at launch",
                                        mitigation: "Founding cohort model — 20 personal invitations before any public announcement. No ghost town.",
                                    },
                                    {
                                        risk: "Corporate pipeline stalls after O2",
                                        mitigation: "Activate prospect list now, don't wait for O2 to close. Three conversations in parallel minimum.",
                                    },
                                    {
                                        risk: "Content creation burns out the team",
                                        mitigation: "One content session per week that produces 5-7 assets. Repurpose relentlessly. Weekly newsletter becomes audio becomes 3 posts.",
                                    },
                                ].map((r) => (
                                    <div key={r.risk} className="p-4 border border-black/10">
                                        <p className="font-bold text-sm">Risk: {r.risk}</p>
                                        <p className="text-sm text-black/50 mt-1"><span className="text-[#0047BB]">Mitigation:</span> {r.mitigation}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What We Are Not Doing in Q2</p>
                                <ul className="space-y-1 text-sm text-black/60">
                                    {[
                                        "Annual report or long-form research — that's Q4",
                                        "Paid social advertising — organic first, understand what resonates",
                                        "Geographic expansion — Slovakia and CEE only",
                                        "New workshop formats — validate existing before adding",
                                        "Custom AI infrastructure — Circle + existing tools first",
                                        "NextGen delivery — partnership conversations only this quarter",
                                    ].map((n, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-black/20">—</span>
                                            {n}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Changelog */}
                    <motion.div {...fade(0.1)}>
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 mb-4">Changelog</p>
                        <div className="space-y-2">
                            {changelog.map((entry) => (
                                <div key={entry.date} className="flex gap-4 text-sm">
                                    <span className="font-code-brand text-black/30 shrink-0">{entry.date}</span>
                                    <span className="text-black/50">{entry.note}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // Q2 2026
                </p>
            </footer>
        </div>
    )
}
