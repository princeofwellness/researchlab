"use client"

import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay },
})

export default function CurriculumPage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />

            {/* Header */}
            <section className="pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                            Internal &middot; Workshop Structure
                        </span>
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-2">
                            THE MINDSHIFT
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            Full curriculum, speaker topics, narrative arc, and timing.
                            Living document for speakers and the team.
                        </p>
                    </motion.div>

                    {/* Meta bar */}
                    <motion.div {...fade(0.1)} className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 p-5 border border-black/10 bg-white/40">
                        {[
                            { label: "Date", value: "26. feb 2026", sub: "Streda" },
                            { label: "Time", value: "17:00 – 20:10", sub: "~3h 10min" },
                            { label: "Venue", value: "SORRYWECAN Studio", sub: "Pečnianska 7, BA" },
                            { label: "Format", value: "3 Keynotes", sub: "+ Slido Q&A + Hot Seat" },
                            { label: "Price", value: "€99", sub: "Osobne / Online" },
                        ].map((m) => (
                            <div key={m.label} className="text-center">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">{m.label}</p>
                                <p className="text-sm font-bold mt-1">{m.value}</p>
                                <p className="text-[11px] text-black/40">{m.sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Narrative Arc */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.15)}>
                        <SectionLabel>Narrative Arc</SectionLabel>
                        <p className="text-sm text-black/60 mt-2 max-w-2xl">
                            Three acts, one story. Each speaker builds on the previous one.
                            The audience moves from <strong>taste</strong> to <strong>leverage</strong> to <strong>clarity</strong>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { act: "Act 1", title: "TASTE", subtitle: "Vkus", speaker: "Roland", theme: "What separates good from unforgettable. Everyone has the same tools. The difference is taste." },
                                { act: "Act 2", title: "LEVERAGE", subtitle: "Využitie", speaker: "Ján", theme: "What one person can build today. New businesses, new ways to operate." },
                                { act: "Act 3", title: "CLARITY", subtitle: "Jasnosť", speaker: "Roman", theme: "What stays human and what to delegate. Decision frameworks you'll actually use." },
                            ].map((a, i) => (
                                <motion.div
                                    key={a.act}
                                    {...fade(0.2 + i * 0.08)}
                                    className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/5"
                                >
                                    <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">{a.act}</span>
                                    <h3 className="font-syne font-bold text-2xl tracking-tight mt-1">{a.title}</h3>
                                    <p className="text-sm text-black/40 italic">{a.subtitle}</p>
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mt-3">{a.speaker}</p>
                                    <p className="text-sm text-black/60 mt-1">{a.theme}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.2)}>
                        <SectionLabel>Full Timeline</SectionLabel>
                    </motion.div>

                    <div className="mt-6 space-y-3">
                        {/* INTRO */}
                        <TimeBlock
                            time="17:00"
                            duration="3–5 min"
                            num="00"
                            title="Intro"
                            speaker="Prince"
                            type="host"
                            delay={0.22}
                        >
                            <TopicList items={[
                                "Keep it tight. 3 minutes, not 10. They bought tickets — they know why they're here.",
                                "One sentence that hits. Then introduce Roland. Go.",
                                "Quick thread: Taste → Leverage → Clarity. Three perspectives, one story.",
                                "Edition 01 — we're building this with them, not just for them.",
                            ]} />
                            <Note>
                                Don&apos;t open with logistics. Open with something that makes them glad they came.
                                One sentence, one image, one question — then Roland is already on stage.
                                Save the &quot;why it&apos;s paid, why this format&quot; for the closing when they already felt it.
                            </Note>
                        </TimeBlock>

                        {/* ROLAND */}
                        <TimeBlock
                            time="17:05"
                            duration="35–40 min"
                            num="01"
                            title="Taste — Vkus"
                            speaker="Roland Vraník"
                            role="Creative Director / Founder, SORRYWECAN"
                            type="keynote"
                            delay={0.26}
                        >
                            <TopicList items={[
                                "How creativity has fundamentally changed with AI — not the tools, the judgment.",
                                "Taste as the real differentiator. Everyone has the same tools. The difference is what you see.",
                                "Daily workflow — how he uses AI as a creative director and company owner.",
                                "Real projects: before/after, process, failures. Not theory — show the work.",
                                "Quality recognition vs. generation. Generating is easy. Knowing what's good is hard.",
                                "What creative teams often miss — the gaps he sees working across clients.",
                                "Curation, detail, the eye for what matters.",
                            ]} />
                            <Note>
                                Go deeper than the marketing copy. The homepage says &quot;What separates good from unforgettable.&quot;
                                The talk should SHOW it — real work, real decisions, real consequences.
                                Tell your best stories. The audience remembers stories, not bullet points.
                            </Note>
                            <LaneGuard>
                                Stay in the taste/creativity lane. No business strategy, no organizational theory.
                                That&apos;s Ján&apos;s and Roman&apos;s territory. Your craft, your eye, your process.
                            </LaneGuard>
                        </TimeBlock>

                        {/* ROLAND Q&A */}
                        <TimeBlock
                            time="17:45"
                            duration="10 min"
                            num=""
                            title="Q&A — Roland"
                            speaker="Via Slido"
                            type="qa"
                            delay={0.28}
                        >
                            <TopicList items={[
                                "Slido — audience votes questions up. Prince picks the top-voted ones.",
                                "Have 2–3 planted questions ready in case the first round is slow.",
                                "Prince moderates. Cut ramblers: \"Love the context — what's the specific question?\"",
                            ]} />
                            <PlantedQuestions items={[
                                "How do you decide when something AI-generated is 'good enough' vs when it needs a human eye?",
                                "What's a project where AI surprised you — either positively or by completely missing the mark?",
                                "How has your hiring changed? Do you look for different skills now?",
                            ]} />
                        </TimeBlock>

                        {/* TRANSITION 1 */}
                        <TransitionBlock delay={0.29}>
                            &quot;Roland just showed us why taste matters. But taste without leverage is just opinion.
                            Ján is going to show you how to turn that taste into products that scale.&quot;
                        </TransitionBlock>

                        {/* JÁN */}
                        <TimeBlock
                            time="17:57"
                            duration="35–40 min"
                            num="02"
                            title="Leverage — Využitie"
                            speaker="Ján Koscelanský"
                            role="CPO / Co-founder, SUDOLABS"
                            type="keynote"
                            delay={0.30}
                        >
                            <TopicList items={[
                                "How digital products are evolving — what has fundamentally changed.",
                                "What one person or a small team can build today. The 4-person company that does what 20 used to.",
                                "AI for startups vs. established companies — different playbooks.",
                                "What's worth automating, what's worth building, what's worth skipping.",
                                "Team structure in the new reality — who do you hire, how many, what for.",
                                "Personal productivity — drafting, decision-making, thinking with AI. Practical, not theoretical.",
                                "The VC / investing landscape shift — what changed, where money flows now.",
                                "Practical, inspirational examples from the tech world. Less technical, more visceral.",
                            ]} />
                            <Note>
                                Pick your 3 best stories. Tell them well. That&apos;s the talk.
                                The audience remembers &quot;we had 20 people, now we ship faster with 4&quot; —
                                they don&apos;t remember &quot;the VC landscape is shifting toward AI-first companies.&quot;
                                Depth over breadth. Always.
                            </Note>
                            <LaneGuard>
                                Stay in the building/shipping/product lane. No philosophical takes on humanity,
                                no deep creativity theory. You build things. Show how.
                            </LaneGuard>
                        </TimeBlock>

                        {/* JÁN Q&A */}
                        <TimeBlock
                            time="18:37"
                            duration="10 min"
                            num=""
                            title="Q&A — Ján"
                            speaker="Via Slido"
                            type="qa"
                            delay={0.32}
                        >
                            <TopicList items={[
                                "Slido — top-voted questions. Expect entrepreneur-heavy questions here.",
                                "Prince moderates. Keep it sharp, keep it moving.",
                            ]} />
                            <PlantedQuestions items={[
                                "What's something your team stopped doing entirely because AI replaced it — and what happened?",
                                "If someone wants to build a product today with no team, where do they actually start?",
                                "What's overhyped right now in the startup/AI space?",
                            ]} />
                        </TimeBlock>

                        {/* BREAK */}
                        <motion.div {...fade(0.33)} className="p-5 md:p-6 border-2 border-black/20 bg-black/[0.04] text-center">
                            <div className="flex items-center justify-center gap-4">
                                <span className="text-sm font-bold font-code-brand text-[#0047BB]">18:47</span>
                                <span className="text-lg font-bold">Break</span>
                                <span className="text-[10px] text-black/30 font-code-brand">10 min</span>
                            </div>
                            <p className="text-sm text-black/40 mt-2">
                                People need to breathe, process, check their phones. Natural midpoint.
                                Let them talk to each other — builds energy for the second half.
                            </p>
                        </motion.div>

                        {/* TRANSITION 2 */}
                        <TransitionBlock delay={0.34}>
                            &quot;Ján showed us how to build. But build for whom?
                            And what happens to the humans in all of this? Roman has spent years thinking about exactly that.&quot;
                        </TransitionBlock>

                        {/* ROMAN */}
                        <TimeBlock
                            time="18:59"
                            duration="30–35 min"
                            num="03"
                            title="Clarity — Jasnosť"
                            speaker="Roman Pii Wagner"
                            role="Transformational Design"
                            type="keynote"
                            delay={0.35}
                        >
                            <TopicList items={[
                                "Dôvera (Trust) — the real differentiator, not tools. If I trust a brand to deliver, I trust the people, not their stack.",
                                "What stays human and what gets delegated. When to automate and when to consciously stop.",
                                "Organizational change — new structures, new ways of working, how corporates need to think.",
                                "Business models — new form of creativity, new companies, what products look like now.",
                                "Layoffs reality — who stays, who goes, and why. Experts in fields will endure. Generalists adapt.",
                                "Required skillsets for today: meditation, reading, long formats, adaptation. Not technical skills.",
                                "The future of societies, companies, corporates — zoomed out, long-term, meaningful.",
                            ]} />
                            <Note>
                                This is the emotional peak. Trust &gt; tools is the most unique and memorable thesis
                                in the whole evening. Lead with it. Let it breathe. Close with meaning, not hype.
                                Ties into Ján&apos;s investing/VC section — business models, how companies evolve.
                                Tell your best story — one moment about trust that makes the room go quiet.
                            </Note>
                            <LaneGuard>
                                Stay in the human/organizational/meaning lane. No product demos, no creative process.
                                You&apos;re the compass. Where this is all going, and what stays human.
                            </LaneGuard>
                        </TimeBlock>

                        {/* ROMAN Q&A */}
                        <TimeBlock
                            time="19:34"
                            duration="10 min"
                            num=""
                            title="Q&A — Roman"
                            speaker="Via Slido"
                            type="qa"
                            delay={0.37}
                        >
                            <TopicList items={[
                                "Slido — top-voted questions. This Q&A tends to get philosophical — lean into it.",
                                "Prince moderates. Let the good ones breathe.",
                            ]} />
                            <PlantedQuestions items={[
                                "What's a skill you think will be worth 10x more in 5 years that nobody is investing in right now?",
                                "How do you see the relationship between trust and speed? Companies want to move fast — does trust slow you down?",
                                "What's the biggest misconception leaders have about AI and their teams?",
                            ]} />
                        </TimeBlock>

                        {/* HOT SEAT */}
                        <TimeBlock
                            time="19:44"
                            duration="15 min"
                            num="04"
                            title="Hot Seat"
                            speaker="All three + Prince (moderator)"
                            type="panel"
                            delay={0.39}
                        >
                            <TopicList items={[
                                "All three speakers standing. Rapid-fire questions from the audience or Slido.",
                                "Any speaker can grab any question. Quick answers, high energy.",
                                "Prince moderates — keeps the pace fast. No monologues.",
                                "This is not a seated panel discussion. It's quick, standing, energetic.",
                            ]} />
                            <Note>
                                Way better than a tired panel after 2.5 hours. The standing format keeps energy up.
                                If a question is great, let it breathe for 60 seconds. If it&apos;s mid, move on in 20.
                            </Note>
                        </TimeBlock>

                        {/* CLOSING */}
                        <TimeBlock
                            time="19:59"
                            duration="5 min"
                            num=""
                            title="Closing"
                            speaker="Prince"
                            type="host"
                            delay={0.41}
                        >
                            <TopicList items={[
                                "One specific action for Monday morning. Not a summary — a concrete move.",
                                "Announce the personalized toolkit: \"We recorded everything. We listened. In 10 days you get tools tailored to what YOU need.\"",
                                "Capture form — Slido or QR code: role, biggest challenge, tools they use. 3 questions max.",
                                "Thank the speakers. Thank the audience for trusting us with their evening.",
                                "Edition 01 — we're building this with them, not just for them.",
                            ]} />
                        </TimeBlock>

                        {/* NETWORKING */}
                        <TimeBlock
                            time="20:05"
                            duration="Open"
                            num=""
                            title="Networking"
                            speaker=""
                            type="networking"
                            delay={0.43}
                        >
                            <TopicList items={[
                                "Organic. No forced structure. Who wants to stay, stays. Who wants to leave, leaves.",
                                "Speakers available for 1-on-1 conversations.",
                                "Note recurring themes and questions — fuel for the toolkit.",
                            ]} />
                        </TimeBlock>
                    </div>
                </div>
            </section>

            {/* Post-Event */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.44)}>
                        <SectionLabel>Post-Event (Within 10 Days)</SectionLabel>
                        <div className="mt-4 p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/5">
                            <h3 className="font-bold text-lg mb-3">Personalized Toolkit</h3>
                            <TopicList items={[
                                "Full event recording — review what resonated, what questions came up, what themes repeated.",
                                "Build the toolkit from the recording + Slido data + capture form responses.",
                                "Curated tool recommendations per attendee profile (based on form + questions asked).",
                                "Not a generic list — tailored to their role, industry, and actual challenges discussed.",
                                "Combination of tools, prompts, workflows, and learning paths.",
                                "Delivery within 10 days. No excuses.",
                                "Internal value: recurring themes become future content, workshops, and product ideas.",
                            ]} />
                            <Note>
                                The recording is the foundation. From it you extract: what people asked about most,
                                what surprised them, what confused them. That becomes the toolkit.
                                Capture form gives you the segmentation. Recording gives you the substance.
                            </Note>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speaker Lane Guards */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.46)}>
                        <SectionLabel>Speaker Lane Guards — No Overlap</SectionLabel>
                        <p className="text-sm text-black/50 mt-2 mb-4">
                            Each speaker has a clear lane. Stay in it. The constraints force differentiation —
                            without them everyone ends up saying &quot;AI is changing everything but humans still matter.&quot;
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    speaker: "Roland",
                                    lane: "Taste & Craft",
                                    own: "Quality, aesthetics, creative judgment, curation, daily creative process with AI",
                                    avoid: "Business strategy, organizational theory, product building",
                                    craft: "How his eye and creative process are enhanced by AI. Show the work. Real projects, real failures, real before/after.",
                                },
                                {
                                    speaker: "Ján",
                                    lane: "Building & Shipping",
                                    own: "Products, teams, startups, automation, what to build, VC/investing",
                                    avoid: "Deep creativity theory, philosophical takes on humanity, organizational transformation",
                                    craft: "How he builds and ships products differently now. Team structure. What's worth automating. Practical, grounded in real products.",
                                },
                                {
                                    speaker: "Roman",
                                    lane: "Trust & Navigation",
                                    own: "Trust, organizations, business models, skillsets, future of work, what stays human",
                                    avoid: "Product demos, creative process, specific tool recommendations",
                                    craft: "How trust becomes the differentiator. Organizational change. The human skills that matter. Zoomed out, long-term, meaningful.",
                                },
                            ].map((s) => (
                                <div key={s.speaker} className="p-5 border border-black/10 bg-white/40 space-y-3">
                                    <div>
                                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">{s.speaker}</span>
                                        <h4 className="font-bold text-base mt-1">{s.lane}</h4>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-green-700/60 mb-1">Own this</p>
                                        <p className="text-sm text-black/60">{s.own}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-red-700/60 mb-1">Avoid</p>
                                        <p className="text-sm text-black/60">{s.avoid}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-1">Their craft</p>
                                        <p className="text-sm text-black/50 italic">{s.craft}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Production Notes */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.48)}>
                        <SectionLabel>Production Notes</SectionLabel>
                        <div className="mt-4 space-y-3">
                            {[
                                { flag: "Intro", note: "3–5 minutes max. One sentence that hits, introduce Roland, go. Save the \"why\" for the closing when they already felt it." },
                                { flag: "Slido", note: "Set up Slido event before the workshop. Share QR code at the start. Questions get upvoted — Prince picks top-voted. Works for all Q&As and Hot Seat." },
                                { flag: "Planted Qs", note: "2–3 ready per speaker in case the first round is slow. Written above in each Q&A block. Deliver them naturally if needed." },
                                { flag: "Break", note: "10 minutes after Ján's Q&A (~18:47). Non-negotiable. People need to process, breathe, talk to each other. Builds energy for Roman." },
                                { flag: "Timing", note: "Total runtime ~3h 10min. Need a strict timekeeper. Signal system for speakers — 5 min warning, 1 min warning." },
                                { flag: "Transitions", note: "Don't just say \"next up is...\" Use 2-minute bridges to connect themes. Makes it ONE story, not three separate talks." },
                                { flag: "Ján's Scope", note: "Broadest range. Coach him: pick your 3 best stories. Tell them well. That's the talk. Depth over breadth." },
                                { flag: "Roman's Energy", note: "He speaks last when energy is lowest. Needs to be dynamic — shorter sentences, pauses, questions to the room. Not a 35-min lecture." },
                                { flag: "Hot Seat", note: "All three standing. Fast. 15 min max. Any speaker grabs any question. Way more energy than a seated panel." },
                                { flag: "Recording", note: "Record the full event. This is the foundation for the personalized toolkit. Audio at minimum, video ideal." },
                                { flag: "Toolkit", note: "10-day delivery. Built from recording + Slido data + capture form. Recording tells you what resonated. Form tells you who needs what." },
                                { flag: "First Edition", note: "Frame it right: \"Edition 01. Every future edition builds on what we learn tonight — including from you.\" Collaborative, not apologetic." },
                            ].map((n) => (
                                <div key={n.flag} className="flex gap-4 p-4 border border-black/10 bg-white/40">
                                    <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] shrink-0 w-28 pt-0.5">
                                        {n.flag}
                                    </span>
                                    <p className="text-sm text-black/60">{n.note}</p>
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

/* ── Helper Components ──────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">
            {children}
        </p>
    )
}

function TimeBlock({
    time,
    duration,
    num,
    title,
    speaker,
    role,
    type,
    children,
    delay = 0,
}: {
    time: string
    duration: string
    num: string
    title: string
    speaker?: string
    role?: string
    type: "host" | "keynote" | "qa" | "panel" | "networking"
    children: React.ReactNode
    delay?: number
}) {
    const borderColor = {
        host: "border-black/20",
        keynote: "border-[#0047BB]/30 bg-black/[0.03]",
        qa: "border-black/[0.06]",
        panel: "border-[#0047BB]/20 bg-[#0047BB]/[0.03]",
        networking: "border-black/[0.06]",
    }

    return (
        <motion.div {...fade(delay)} className={cn("p-5 md:p-6 border transition-all", borderColor[type])}>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-24 shrink-0">
                    <span className="text-sm font-bold font-code-brand text-[#0047BB]">{time}</span>
                    <span className="text-[10px] text-black/30 font-code-brand">{duration}</span>
                    {num && <span className="text-[10px] font-bold text-black/20 font-code-brand">{num}</span>}
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold">{title}</h4>
                    {speaker && (
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mt-1">
                            {speaker}
                            {role && <span className="text-black/25"> &middot; {role}</span>}
                        </p>
                    )}
                    <div className="mt-3">{children}</div>
                </div>
            </div>
        </motion.div>
    )
}

function TransitionBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.div {...fade(delay)} className="px-5 md:px-6 py-3 flex items-center gap-4">
            <div className="w-24 shrink-0 hidden md:block" />
            <div className="flex-1">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-1">
                    Transition &middot; Prince
                </p>
                <p className="text-sm italic text-black/40">{children}</p>
            </div>
        </motion.div>
    )
}

function TopicList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-1.5">
            {items.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-black/60">
                    <span className="text-[#0047BB] shrink-0 mt-0.5">·</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

function Note({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-4 px-4 py-3 border-l-2 border-[#0047BB]/30 bg-[#0047BB]/[0.03]">
            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]/60 mb-1">Note</p>
            <p className="text-sm text-black/50">{children}</p>
        </div>
    )
}

function LaneGuard({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-3 px-4 py-3 border-l-2 border-amber-500/40 bg-amber-500/[0.04]">
            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-amber-700/60 mb-1">Lane Guard</p>
            <p className="text-sm text-black/50">{children}</p>
        </div>
    )
}

function PlantedQuestions({ items }: { items: string[] }) {
    return (
        <div className="mt-3 px-4 py-3 border-l-2 border-black/10 bg-black/[0.02]">
            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-2">Planted Questions (if needed)</p>
            <ul className="space-y-1.5">
                {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-black/40 italic">
                        <span className="shrink-0 mt-0.5">{i + 1}.</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
