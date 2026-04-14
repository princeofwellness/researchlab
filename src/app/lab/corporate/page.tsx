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
    { date: "2026-04-14", note: "Initial version. Two-day format defined, pricing confirmed, O2 pipeline documented, sales motion and objection handling drafted." },
    { date: "2026-04-15", note: "Competitive intelligence added (Tatra banka benchmark). Partnership channels added: Mirka/Aj Ty v IT + Austrian conference. Action items updated." },
]

export default function CorporatePage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />

            <section className="pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <motion.div {...fade(0)} className="mb-16">
                        <Label>Corporate Offer — B2B Strategy</Label>
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-3 leading-[0.95]">
                            Corporate Workshop
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            The offer, the format, the pricing, the pipeline, and how to sell it. Updated as we learn from each delivery.
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap">
                            <a
                                href="/corporate/offer-v2"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0047BB] text-white text-[10px] font-code-brand font-bold uppercase tracking-[0.25em] hover:bg-black transition-colors"
                            >
                                Offer Document (Art Direction) →
                            </a>
                            <a
                                href="/corporate/offer"
                                className="inline-flex items-center gap-2 px-5 py-3 border border-black/20 text-[10px] font-code-brand font-bold uppercase tracking-[0.25em] hover:border-black transition-colors"
                            >
                                Offer v1 →
                            </a>
                        </div>
                    </motion.div>

                    {/* The Insight */}
                    <motion.div {...fade(0.05)}>
                        <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03] mb-12">
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">The Insight That Sells It</p>
                            <p className="text-xl font-syne font-bold tracking-tight leading-snug">
                                The head of the O2 department didn't love the tools section. He loved the thinking section. That's the differentiator: we teach how to think about AI, not just how to use it. Most corporate AI training is glorified software onboarding. Ours is a mindset shift first, tools second.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Offer */}
                    <motion.div {...fade(0.05)}>
                        <Label>01</Label>
                        <SectionTitle>The Offer</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    { label: "Price", value: "€690/person + VAT" },
                                    { label: "Group size", value: "10-15 people" },
                                    { label: "Revenue per workshop", value: "~€6,900–10,350" },
                                ].map((s) => (
                                    <div key={s.label} className="p-5 border border-black/10 text-center">
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40">{s.label}</p>
                                        <p className="text-2xl font-bold text-[#0047BB] mt-2">{s.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">Who It's For</p>
                                <p className="text-sm text-black/70 mb-3">
                                    Department heads and their teams at Slovak companies who already sense that AI is changing their industry — but don't know what to actually do about it. They've seen the demos. They've tried ChatGPT. They want to understand: what's genuinely possible, what should we be doing differently, and how do we build the judgment to use this well?
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Marketing & agencies", "Finance & banking", "Legal & consulting", "Insurance", "Tech companies", "Real estate", "E-commerce"].map((s) => (
                                        <span key={s} className="text-[10px] font-code-brand uppercase tracking-widest border border-black/20 px-2 py-1">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">The Transformation Promise</p>
                                <p className="text-sm text-black/70">
                                    A team leaves the two-day experience with: (1) a shared mental model for thinking about AI — not just individual tool tips, but a framework the whole team can reason with together; (2) a practical toolkit of specific AI workflows relevant to their actual work; (3) enough confidence to experiment — to try things, fail forward, and not feel lost when the next model drops.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Two-Day Format */}
                    <motion.div {...fade(0.05)}>
                        <Label>02</Label>
                        <SectionTitle>The Two-Day Format</SectionTitle>

                        <div className="space-y-3">
                            <div className="p-6 border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center text-[11px] font-bold">1</div>
                                    <div>
                                        <p className="font-bold text-lg">Day 1 — The Mindshift</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB]">Thinking / Mindset / Discussion</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { segment: "Taste (Roland / Prince)", desc: "Opening the mind. Where are we? What is AI actually doing? Why does it feel threatening — and why that reaction makes sense. From fear to curiosity." },
                                        { segment: "Discussion: Their Reality", desc: "Structured conversation: where are you using AI now? Where are you blocked? What's the real fear? What would change if you trusted it? Real problems, real people, real room." },
                                        { segment: "Leverage (Tiep)", desc: "The thinking frameworks. How to approach a task with AI. Prompt thinking. The mental model shift from tool-user to system-thinker." },
                                        { segment: "Clarity (Roman)", desc: "Synthesis. How these ideas connect to each other and to the team's specific context. Visual frameworks. What to take away from today." },
                                        { segment: "Open Q&A", desc: "No slides. No agenda. Real questions, honest answers." },
                                    ].map((s) => (
                                        <div key={s.segment} className="flex gap-3">
                                            <span className="text-[#0047BB] shrink-0 mt-1">—</span>
                                            <div>
                                                <p className="font-bold text-sm">{s.segment}</p>
                                                <p className="text-sm text-black/60">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 border border-black/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-[11px] font-bold">2</div>
                                    <div>
                                        <p className="font-bold text-lg">Day 2 — The Practical</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40">Tools / Prompts / Workflows / Live Demo</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { segment: "What's actually possible", desc: "Live demonstration: what Tiep does with AI in a real working day. No slides. Screen share, real tools, real workflows. Sets the ceiling." },
                                        { segment: "The Tool Stack", desc: "What exists, what to use for what. Meeting notes and transcription. Knowledge management and search. Video and content creation. Deep research. Writing and editing. Multimodal models — text, image, voice, video together." },
                                        { segment: "Prompts and how to think about them", desc: "Not a list of prompts. The underlying logic of how to prompt well. The mental model. Practice round: each person tries something live." },
                                        { segment: "Their Problems — Live", desc: "The team brings their actual challenges. We work on them in real time. This is the most valuable 90 minutes of the two days." },
                                        { segment: "Takeaway package", desc: "Curated toolkit document. Top 15 prompts for their context. Recommended tool stack for their workflow. Follow-up access." },
                                    ].map((s) => (
                                        <div key={s.segment} className="flex gap-3">
                                            <span className="text-[#0047BB] shrink-0 mt-1">—</span>
                                            <div>
                                                <p className="font-bold text-sm">{s.segment}</p>
                                                <p className="text-sm text-black/60">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Q2 Pipeline */}
                    <motion.div {...fade(0.05)}>
                        <Label>03</Label>
                        <SectionTitle>Q2 Pipeline</SectionTitle>

                        <div className="space-y-3">
                            {[
                                {
                                    company: "O2 — Department 1",
                                    status: "Pre-warmed",
                                    statusColor: true,
                                    contact: "Head of department — attended THE MINDSHIFT personally",
                                    value: "~€9,660",
                                    why: "The head loved the thinking approach, not just the tools. Called it 'practical and philosophical at the same time.' That's our signal.",
                                    next: "Send formal proposal. Confirm dates. Get the contract signed.",
                                    timeline: "Target: May 2026",
                                },
                                {
                                    company: "O2 — Department 2",
                                    status: "Interested",
                                    statusColor: false,
                                    contact: "Same head of department is the bridge to second department",
                                    value: "~€9,660",
                                    why: "Internal referral. The internal credibility of Department 1 doing it first makes Department 2 easier.",
                                    next: "Wait for Department 1 confirmation, then move simultaneously.",
                                    timeline: "Target: June 2026",
                                },
                                {
                                    company: "Target #3 — TBD",
                                    status: "To identify",
                                    statusColor: false,
                                    contact: "Pull from 145-company prospect database — Tier 1",
                                    value: "~€9,660",
                                    why: "Two strong Q2 closings = ~€19k. A third extends the runway significantly. We need one more hot conversation by end of April.",
                                    next: "Pull top 10 Tier 1 prospects from /prospects. Identify best contact. Outreach by April 21.",
                                    timeline: "Target: June 2026",
                                },
                            ].map((c) => (
                                <div key={c.company} className={`p-5 border ${c.statusColor ? "border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]" : "border-black/10"}`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-bold">{c.company}</p>
                                            <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40 mt-0.5">{c.contact}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-[#0047BB]">{c.value}</p>
                                            <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB]">{c.status}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/60 mb-3">{c.why}</p>
                                    <div className="border-t border-black/10 pt-3 flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Next action</p>
                                            <p className="text-sm font-bold">{c.next}</p>
                                        </div>
                                        <span className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 shrink-0">{c.timeline}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Sales Motion */}
                    <motion.div {...fade(0.05)}>
                        <Label>04</Label>
                        <SectionTitle>Sales Motion — How to Sell This</SectionTitle>

                        <div className="space-y-4">
                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Who Buys This</p>
                                <p className="text-sm text-black/70 mb-3">
                                    Not the CTO. Not HR. The department head who is personally curious about AI, already using it informally, and is starting to feel responsible for their team's readiness. They have budget discretion (training budget, team development, innovation). They want to be seen as the person who got their team ahead of this.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <div className="p-3 border border-black/10">
                                        <p className="font-bold text-[#0047BB] mb-1">What triggers a yes</p>
                                        <ul className="space-y-1 text-black/60">
                                            <li>— They've already seen AI impact their competitors</li>
                                            <li>— Their team is asking questions they can't answer</li>
                                            <li>— They attended THE MINDSHIFT or know someone who did</li>
                                            <li>— Budget decision is theirs, not above them</li>
                                        </ul>
                                    </div>
                                    <div className="p-3 border border-black/10">
                                        <p className="font-bold text-black/40 mb-1">What kills the deal</p>
                                        <ul className="space-y-1 text-black/60">
                                            <li>— They need board/CFO approval (long cycle)</li>
                                            <li>— The main contact didn't experience the workshop themselves</li>
                                            <li>— They want "AI tools training" not "thinking shift"</li>
                                            <li>— They're looking for a commodity price</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">The Outreach Sequence</p>
                                <div className="space-y-3">
                                    {[
                                        { step: "Step 1", action: "Find the right person", detail: "Department head, not procurement. LinkedIn is the map. Look for people who post about AI, attended events, or work in sectors where AI is already hitting hard." },
                                        { step: "Step 2", action: "Warm approach", detail: "Not a cold pitch. Share something relevant first — an insight, a post, a comment on their content. Get on their radar as a person who thinks, not a vendor." },
                                        { step: "Step 3", action: "The invite", detail: "Invite them to THE MINDSHIFT public session (€99). If they attend, the corporate conversation is 10x easier. They've experienced the product." },
                                        { step: "Step 4", action: "The follow-up conversation", detail: "After the workshop: 'What did your team need that wasn't in the room?' That conversation writes the proposal." },
                                        { step: "Step 5", action: "The proposal", detail: "One page. What they get, who delivers it, how it connects to their team's specific situation. Price clear. No fluff. Decision timeline." },
                                    ].map((s) => (
                                        <div key={s.step} className="flex gap-4">
                                            <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0">{s.step.slice(-1)}</div>
                                            <div>
                                                <p className="font-bold text-sm">{s.action}</p>
                                                <p className="text-sm text-black/60">{s.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Objection Handling */}
                    <motion.div {...fade(0.05)}>
                        <Label>05</Label>
                        <SectionTitle>Objections — The Real Ones</SectionTitle>

                        <div className="space-y-2">
                            {[
                                {
                                    objection: "\"We already use ChatGPT. My team knows AI.\"",
                                    response: "Using ChatGPT is like saying you know how to drive because you've been in a car. Day 1 is about the underlying thinking — the mental model that makes every tool better. Most teams who 'know AI' are using 10% of what's possible and don't know what they're missing.",
                                },
                                {
                                    objection: "\"This is expensive for a two-day training.\"",
                                    response: "€690/person for a team that uses AI 20% more effectively is paid back in weeks, not months. The question isn't whether it's expensive — it's whether the team comes out of it actually changed. That's the thing we can promise.",
                                },
                                {
                                    objection: "\"Can you do it in half a day?\"",
                                    response: "Day 1 (mindset) can stand alone if budget is the real constraint. €345/person, half-day, thinking-only. Day 2 requires Day 1 — the practical lands differently when the mindset is already shifted. We'd recommend the full two days, but we can start with one.",
                                },
                                {
                                    objection: "\"We need to check with our training budget owner.\"",
                                    response: "Understood. Would it help to have a 30-minute call with the three of us and them together? Usually easier to say yes when the people who built it can speak directly.",
                                },
                                {
                                    objection: "\"Can you customise it for our industry?\"",
                                    response: "Yes — Day 2 specifically. The tool stack section and the 'live on their problems' section are fully tailored. We ask for a 30-minute pre-call with you to understand the team's actual workflow and build the right examples in.",
                                },
                            ].map((o) => (
                                <div key={o.objection} className="p-5 border border-black/10">
                                    <p className="font-bold text-sm text-black/80 mb-2">{o.objection}</p>
                                    <p className="text-sm text-black/60"><span className="text-[#0047BB] font-bold">→ </span>{o.response}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* What We Leave Behind */}
                    <motion.div {...fade(0.05)}>
                        <Label>06</Label>
                        <SectionTitle>What We Leave Behind</SectionTitle>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { item: "Takeaway Document", desc: "Curated for their team specifically. Tool stack. Top 15 prompts for their context. Key mental models from Day 1. One page." },
                                { item: "30-Day Access to Circle", desc: "Every attendee gets free access to the community platform for 30 days after the workshop. They continue the learning inside the community." },
                                { item: "Follow-Up Q&A Call", desc: "Two weeks after delivery. 30 minutes. What questions came up? What's working? What do they need next? Builds the relationship and opens the door to a retainer." },
                                { item: "Corporate Client Status", desc: "Priority access to future workshops, quarterly corporate sessions, and early invitations to Research Lab events. Being a client means being part of the ecosystem." },
                            ].map((m) => (
                                <div key={m.item} className="p-5 border border-black/10">
                                    <p className="font-bold">{m.item}</p>
                                    <p className="text-sm text-black/60 mt-1">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Bridge to Community */}
                    <motion.div {...fade(0.05)}>
                        <Label>07</Label>
                        <SectionTitle>From Corporate Client to Community</SectionTitle>

                        <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                            <p className="text-sm text-black/70 mb-4">
                                The workshop is a door, not a destination. After two days together, the relationship is warm. The trust is built. Most of these people want to keep learning — they just need a reason and a place.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "30-day free Circle access for every attendee (automatic, no friction)",
                                    "Follow-up email Day 7: 'The module that goes deeper on the thinking from Day 1'",
                                    "Bi-weekly webinar invitation: 'We're doing a live session on the topic your team asked most about'",
                                    "Day 28: Founding member offer for any individual who wants to continue",
                                    "For the company: quarterly corporate membership discussion — 5-10 seat team tier",
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="w-6 h-6 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</div>
                                        <p className="text-sm text-black/70">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Competitive Intelligence */}
                    <motion.div {...fade(0.05)}>
                        <Label>08</Label>
                        <SectionTitle>Competitive Intelligence</SectionTitle>

                        <div className="space-y-4">
                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">Tatra Banka Benchmark</p>
                                <p className="text-sm text-black/70 leading-relaxed">
                                    A competitor agency recently charged Tatra banka <strong>€20,000 for a basic 3-day AI tools overview</strong>. This is a landmark data point — it confirms that large Slovak companies have budget and appetite for AI training at premium price points, and that the market is far from saturated with quality providers.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div className="p-4 border border-black/10">
                                    <p className="font-bold mb-1">What it means for pricing</p>
                                    <p className="text-black/60">At €690/person × 14 people = €9,660. We are <strong>significantly</strong> under-priced relative to the market. After first delivery + testimonial, move to €800+. The mindset-first approach is a stronger differentiator than the competitor's tools-only overview.</p>
                                </div>
                                <div className="p-4 border border-black/10">
                                    <p className="font-bold mb-1">Action item</p>
                                    <p className="text-black/60">Investigate through personal contacts exactly what the competitor taught Tatra banka — use it to sharpen differentiation and tailor the pitch for banking and finance clients specifically.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* Partnership Channels */}
                    <motion.div {...fade(0.05)}>
                        <Label>09</Label>
                        <SectionTitle>Partnership Channels</SectionTitle>

                        <div className="space-y-3">
                            <div className="p-5 border border-black/10">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="font-bold">Mirka — Aj Ty v IT</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-1">Women in Tech · Educational network · Referral partnership</p>
                                    </div>
                                    <span className="text-[10px] font-code-brand uppercase tracking-widest text-black/40 border border-black/20 px-2 py-1 shrink-0 ml-4">Awaiting format doc</span>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed mb-3">
                                    Mirka runs an educational network for female managers, entrepreneurs, and women transitioning into tech. Her audience needs a safe, non-intimidating introduction to AI. RL delivers specialized workshops for her community; in exchange, she refers larger corporate clients.
                                </p>
                                <div className="space-y-1 text-sm">
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Workshop format: gentler entry, focus on practical daily use before deep mindset</span></div>
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Next: wait for Mirka's needs assessment and proposed format</span></div>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="font-bold">Austrian AI Collaboration</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mt-1">DACH market · State-funded · Vienna conference</p>
                                    </div>
                                    <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-1 shrink-0 ml-4">Sept/Oct target</span>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed mb-3">
                                    State-funded Austrian AI group expanding into Bratislava. They bring funding, credibility, and DACH market access. RL brings visual production and developer capabilities. First major joint output: an immersive AI conference in Vienna.
                                </p>
                                <div className="flex gap-2 text-sm">
                                    <span className="text-[#0047BB] shrink-0">—</span>
                                    <span className="text-black/60">Next: schedule alignment meeting to plan the Vienna event format and responsibilities</span>
                                </div>
                            </div>

                            <div className="p-4 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">Mindshift Recording — Sell It</p>
                                <p className="text-sm text-black/60">Send email campaign selling online access to the last Mindshift event recording — target people who couldn't attend. Offer 50% discount for students. Quick revenue activation with existing asset.</p>
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
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
