"use client"

import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"

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
    { date: "2026-04-14", note: "Initial version. Circle architecture, membership tiers, content structure, educational framework, launch sequence documented." },
]

export default function Q2PlatformPage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />
            <LabStrategyNav />

            <section className="pt-44 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <motion.div {...fade(0)} className="mb-16">
                        <Label>Platform Strategy — Q2 2026</Label>
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-3 leading-[0.95]">
                            Platform & Next Steps
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            The operational deep-dive. Circle architecture, membership structure, content inside the platform, educational framework, and the step-by-step launch sequence.
                        </p>
                    </motion.div>

                    {/* Why Circle */}
                    <motion.div {...fade(0.05)}>
                        <Label>01</Label>
                        <SectionTitle>Why Circle</SectionTitle>

                        <div className="space-y-4">
                            <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="leading-relaxed text-black/80">
                                    Circle is the infrastructure for communities that are more than a Slack group. It supports paid memberships, content spaces, live events, courses, and a member directory — everything Research Lab needs to run a real learning community without building custom software. It grows with us: start simple, add complexity as we understand what members actually want.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What It Gives Us</p>
                                    <ul className="space-y-1 text-sm text-black/70">
                                        {[
                                            "Recurring billing (Stripe integrated)",
                                            "Gated content spaces by membership tier",
                                            "Live events + webinar hosting",
                                            "Course-style content (pre-recorded)",
                                            "Member directory and DMs",
                                            "Community posts, comments, reactions",
                                            "Custom branding and domain",
                                        ].map((i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-[#0047BB]">—</span>
                                                {i}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What We Avoid Building</p>
                                    <ul className="space-y-1 text-sm text-black/70">
                                        {[
                                            "Custom auth and membership system",
                                            "Payment processing infrastructure",
                                            "Video hosting and streaming",
                                            "Mobile app experience",
                                            "Notification systems",
                                            "Member management backend",
                                        ].map((i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-[#0047BB]">—</span>
                                                {i}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Community Architecture */}
                    <motion.div {...fade(0.05)}>
                        <Label>02</Label>
                        <SectionTitle>Community Architecture — Circle Spaces</SectionTitle>

                        <div className="space-y-2">
                            {[
                                {
                                    space: "Welcome & Orientation",
                                    access: "All members",
                                    desc: "First stop. How the community works, who's here, community norms, navigation guide. Stays fresh — updated when new formats go live.",
                                    content: "Pinned orientation post, short video welcome, member intro thread",
                                },
                                {
                                    space: "Mindshift — How to Think",
                                    access: "All members",
                                    desc: "The intellectual core. Thinking frameworks for working with AI. Not tool tutorials — the underlying mental models that make all tools more useful.",
                                    content: "Pre-recorded modules (Basic → Intermediate → Advanced), discussion threads per module, Mindshift framework reference",
                                },
                                {
                                    space: "Tools & Prompts Library",
                                    access: "All members",
                                    desc: "Practical. The distilled toolkit. Organised by use case, not by tool name. Updated weekly. Searchable.",
                                    content: "Prompt library (20+ on launch, growing), tool-by-use-case guides, workflow templates",
                                },
                                {
                                    space: "What's New in AI",
                                    access: "All members",
                                    desc: "Curated signal from the noise. One post per week — what matters, why it matters, what to do about it. No hype. Slovak-language option.",
                                    content: "Weekly digest post, short video take, discussion thread",
                                },
                                {
                                    space: "Live Sessions & Archive",
                                    access: "All members",
                                    desc: "All bi-weekly webinars, live sessions, and Q&As. Archived and searchable. Members who miss live can watch on their own time.",
                                    content: "Webinar recordings, Q&A archives, session notes",
                                },
                                {
                                    space: "Agentic Systems",
                                    access: "All members (advanced content)",
                                    desc: "The frontier. How to build with AI, not just use it. Agent workflows, automation, combining models. For those ready to go deeper.",
                                    content: "Step-by-step agent guides, workflow breakdowns, Tiep-led content",
                                },
                                {
                                    space: "Member Lounge",
                                    access: "All members",
                                    desc: "Where the community lives. Introductions, questions, wins, asks. The connective tissue between structured content.",
                                    content: "Intro thread, weekly discussion prompt, open questions, resource sharing",
                                },
                                {
                                    space: "Events & Co-working",
                                    access: "All members",
                                    desc: "Physical events, conference access, co-working sessions, partner benefits. Being a member means access to the ecosystem — not just content.",
                                    content: "Event listings, booking links, post-event notes, member meetup organising",
                                },
                                {
                                    space: "B2B / Corporate Access",
                                    access: "Corporate tier only",
                                    desc: "Team-level content. Corporate case studies, team AI readiness frameworks, bulk seat management. Separate from individual membership.",
                                    content: "Corporate frameworks, team workshop prep materials, corporate Q&A sessions",
                                },
                            ].map((s, i) => (
                                <div key={s.space} className="p-5 border border-black/10">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            <p className="font-bold">{s.space}</p>
                                        </div>
                                        <span className="text-[10px] font-code-brand uppercase tracking-widest text-black/30">{s.access}</span>
                                    </div>
                                    <p className="text-sm text-black/60 ml-9">{s.desc}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-2 ml-9">{s.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Membership Tiers */}
                    <motion.div {...fade(0.05)}>
                        <Label>03</Label>
                        <SectionTitle>Membership Tiers</SectionTitle>

                        <div className="space-y-3">
                            <div className="p-4 border border-black/10 bg-black/[0.02]">
                                <p className="text-sm text-black/60">Pricing is validation-phase. We test €39/month in Q2 with founding cohort and adjust based on churn, engagement, and conversion data. September launch pricing may differ.</p>
                            </div>

                            {[
                                {
                                    tier: "Founding Member",
                                    price: "€39/month",
                                    status: "Q2 validation",
                                    highlight: true,
                                    includes: [
                                        "Full access to all Circle spaces",
                                        "Bi-weekly live webinars",
                                        "Complete pre-recorded content library",
                                        "Prompt library (growing)",
                                        "Member directory and community",
                                        "Physical event access (priority)",
                                        "Founding member badge — permanent",
                                        "Direct influence on what gets built",
                                    ],
                                    note: "20 spots. Personal invitation only for now. Founding pricing locked for life as long as membership continues.",
                                },
                                {
                                    tier: "Core Contributor",
                                    price: "Free",
                                    status: "By invitation",
                                    highlight: false,
                                    includes: [
                                        "Full access in exchange for active contribution",
                                        "Guest educator slots (teach what you know)",
                                        "Content creation, community moderation, event support",
                                        "Same access as Founding Member",
                                    ],
                                    note: "For people who bring real value to the community. Educators, practitioners, collaborators. Max 5-8 in founding phase.",
                                },
                                {
                                    tier: "Corporate / Team",
                                    price: "TBD — Q3",
                                    status: "Planning",
                                    highlight: false,
                                    includes: [
                                        "Team access (5-20 seats)",
                                        "Corporate content space",
                                        "Team AI readiness framework",
                                        "Quarterly corporate Q&A session",
                                        "Priority corporate workshop pricing",
                                    ],
                                    note: "Build this tier based on what corporate workshop clients ask for after Day 2. Don't assume — learn from the room.",
                                },
                            ].map((t) => (
                                <div key={t.tier} className={`p-5 border ${t.highlight ? "border-2 border-[#0047BB]/40 bg-[#0047BB]/[0.03]" : "border-black/10"}`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-bold text-lg">{t.tier}</p>
                                            <span className="text-[10px] font-code-brand uppercase tracking-widest text-black/30">{t.status}</span>
                                        </div>
                                        <p className="text-2xl font-bold text-[#0047BB]">{t.price}</p>
                                    </div>
                                    <ul className="space-y-1 mb-3">
                                        {t.includes.map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-black/70">
                                                <span className="text-[#0047BB]">—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-black/40 border-t border-black/10 pt-3 mt-3">{t.note}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Educational Framework */}
                    <motion.div {...fade(0.05)}>
                        <Label>04</Label>
                        <SectionTitle>Educational Framework — What's Inside</SectionTitle>

                        <div className="space-y-4">
                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">The Learning Path — Four Levels</p>
                                <div className="space-y-3">
                                    {[
                                        {
                                            level: "Level 1 — Foundation",
                                            label: "Basic",
                                            desc: "What is AI, actually. How it works (without the engineering). What's changed. Why it matters to you specifically. Overcoming the overwhelm.",
                                            format: "3-4 short modules, 10-15 min each. Slovak + English. Beginner-accessible.",
                                        },
                                        {
                                            level: "Level 2 — Thinking Frameworks",
                                            label: "Mindshift Core",
                                            desc: "The Mindshift methodology. How to think about a problem before reaching for a tool. Mental models for working with AI: leverage, clarity, creativity, judgment.",
                                            format: "5-6 modules. Discussion threads. Practical exercises. The intellectual backbone of the whole platform.",
                                        },
                                        {
                                            level: "Level 3 — Practical Tools",
                                            label: "Applied",
                                            desc: "Specific tools, specific use cases. Meeting notes, deep research, video, writing, visual, coding, knowledge management. What to use for what and why.",
                                            format: "Ongoing library — grows continuously. Tool-by-use-case structure, not by tool name.",
                                        },
                                        {
                                            level: "Level 4 — Agentic Systems",
                                            label: "Advanced",
                                            desc: "Building with AI. Agent workflows. Combining models. Automation. For those who want to stop using tools and start building systems.",
                                            format: "Tiep-led. Step-by-step. Real examples. Updated as the technology moves.",
                                        },
                                    ].map((l, i) => (
                                        <div key={l.level} className="flex gap-4 p-4 border border-black/10">
                                            <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <div className="flex items-baseline gap-2">
                                                    <p className="font-bold">{l.level}</p>
                                                    <span className="text-[10px] font-code-brand text-[#0047BB] uppercase tracking-widest border border-[#0047BB]/30 px-1.5 py-0.5">{l.label}</span>
                                                </div>
                                                <p className="text-sm text-black/60 mt-1">{l.desc}</p>
                                                <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-2">{l.format}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Bi-Weekly Webinar System</p>
                                <div className="space-y-2 text-sm text-black/70">
                                    <p><span className="text-[#0047BB]">Format:</span> 45-60 minutes. One topic deep. 20 min structured content, 15 min demo/examples, 15 min live Q&A.</p>
                                    <p><span className="text-[#0047BB]">Live access:</span> Free / open (draws new audience). Recording: inside Circle for members only.</p>
                                    <p><span className="text-[#0047BB]">Rotation:</span> Prince + Tiep (mindset, thinking, frameworks), Roman (visual AI, design, creativity). Guest educators when relevant.</p>
                                    <p><span className="text-[#0047BB]">Promotion:</span> Newsletter + Instagram 1 week before. Replay teaser post after.</p>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Guest Educator Model</p>
                                <p className="text-sm text-black/70 mb-3">
                                    Research Lab is not just three people. It's a network. People who use AI seriously in their craft can teach their lane. A filmmaker who uses AI in production. A lawyer who uses it for research. A marketer who builds AI workflows. They bring credibility, reach, and diversity of perspective.
                                </p>
                                <ul className="space-y-1 text-sm text-black/60">
                                    {[
                                        "Guest teaches one webinar or records one module",
                                        "They get exposure to the community + co-promotion",
                                        "Best performers get ongoing collaboration offers",
                                        "No payment in Q2 founding phase — access + audience exchange",
                                    ].map((i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-[#0047BB]">—</span>
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Technology Stack */}
                    <motion.div {...fade(0.05)}>
                        <Label>05</Label>
                        <SectionTitle>Technology & Tools</SectionTitle>

                        <div className="space-y-2">
                            {[
                                { layer: "Community Platform", tool: "Circle", use: "Membership, content, events, billing, member directory" },
                                { layer: "Video Recording", tool: "Loom / ScreenStudio", use: "Pre-recorded modules. Clean, professional, fast to produce." },
                                { layer: "Live Webinars", tool: "Circle Live or Zoom", use: "Bi-weekly sessions. Recorded and archived in Circle." },
                                { layer: "Content Scheduling", tool: "Buffer / Later", use: "Instagram + newsletter scheduling. Batch weekly." },
                                { layer: "Newsletter", tool: "Resend or Beehiiv", use: "The Radar weekly. Integrates with Circle for member sync." },
                                { layer: "AI Research & Writing", tool: "Claude API", use: "Content drafts, research synthesis, prompt development. Tiep + Sasha lead." },
                                { layer: "Design", tool: "Figma + Canva AI", use: "Roman leads. Social graphics, webinar decks, platform visuals." },
                                { layer: "Platform Integration", tool: "researchlab (Next.js)", use: "This app evolves to link into Circle — member login, content teasers, event booking." },
                            ].map((t) => (
                                <div key={t.layer} className="flex gap-4 items-start p-4 border border-black/10">
                                    <div className="w-32 shrink-0">
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30">{t.layer}</p>
                                        <p className="font-bold text-sm mt-0.5">{t.tool}</p>
                                    </div>
                                    <p className="text-sm text-black/50">{t.use}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Launch Sequence */}
                    <motion.div {...fade(0.05)}>
                        <Label>06</Label>
                        <SectionTitle>Week-by-Week Launch Sequence</SectionTitle>

                        <div className="space-y-2">
                            {[
                                { week: "Week 1-2 (Apr 14-27)", tasks: ["Set up Circle account, branding, custom domain", "Create all 9 community spaces with descriptions", "Draft founding member invitation list (20 names)", "Record first 2 modules: Level 1 Foundation"] },
                                { week: "Week 3-4 (Apr 28 - May 11)", tasks: ["Record Level 2 Mindshift Core (modules 1-3)", "Build prompt library: first 20 prompts", "Send founding member invitations personally", "First bi-weekly webinar — live + recorded"] },
                                { week: "Week 5-6 (May 12-25)", tasks: ["Record Level 2 Mindshift Core (modules 4-6)", "Record Level 3 Practical Tools (first 4 use cases)", "Founding cohort: active — gather first feedback", "Second bi-weekly webinar"] },
                                { week: "Week 7-8 (May 26 - Jun 8)", tasks: ["Activate paying membership for founding cohort", "First monthly case study published inside Circle", "Iterate on spaces based on what gets used vs. ignored", "Third bi-weekly webinar"] },
                                { week: "Week 9-12 (Jun 9-30)", tasks: ["Circle is live and stable with founding cohort", "Gather and document learnings for September strategy", "First paying member metrics: churn, engagement, feedback", "Build September launch plan based on real data"] },
                            ].map((w, i) => (
                                <div key={w.week} className="p-4 border border-black/10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                            {i + 1}
                                        </div>
                                        <p className="font-bold text-sm">{w.week}</p>
                                    </div>
                                    <ul className="space-y-1 ml-9">
                                        {w.tasks.map((t, j) => (
                                            <li key={j} className="flex gap-2 text-sm text-black/60">
                                                <span className="text-[#0047BB]">—</span>
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* From Workshop to Member */}
                    <motion.div {...fade(0.05)}>
                        <Label>07</Label>
                        <SectionTitle>From Workshop Attendee to Member</SectionTitle>

                        <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                            <p className="text-sm text-black/70 mb-4">
                                The Mindshift workshop is the highest-trust moment we have with a stranger. 3.5 hours, in person, transformation. That trust should not go to waste. The bridge to community is the most important conversion we can design.
                            </p>
                            <div className="space-y-2">
                                {[
                                    { step: "End of workshop", action: "Every attendee gets a personal invitation to 30 days free inside Circle — no pitch, just: 'there's more here if you want it.'" },
                                    { step: "Day 7", action: "Email: 'What was your biggest takeaway?' with a link to the relevant Level 2 module that goes deeper on their answer." },
                                    { step: "Day 14", action: "Email: 'There's a webinar this week that picks up where the workshop left off.' Direct link." },
                                    { step: "Day 28", action: "30-day free access expires. Offer founding member pricing for the next 48 hours. One email. No pressure." },
                                    { step: "Day 30", action: "Follow-up: 'No problem if it's not the right time. Here's the newsletter — free, always.' Keeps them warm." },
                                ].map((b) => (
                                    <div key={b.step} className="flex gap-4 p-3 bg-white/40 border border-black/10">
                                        <div className="w-20 shrink-0">
                                            <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB]">{b.step}</p>
                                        </div>
                                        <p className="text-sm text-black/70">{b.action}</p>
                                    </div>
                                ))}
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
