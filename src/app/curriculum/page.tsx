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
                            { label: "Time", value: "17:00 – 20:15", sub: "3h 15min" },
                            { label: "Venue", value: "SORRYWECAN Studio", sub: "Pečnianska 7, BA" },
                            { label: "Format", value: "3 Keynotes", sub: "+ Q&A + Panel" },
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
                            The audience moves from <strong>seeing</strong> to <strong>building</strong> to <strong>navigating</strong>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { act: "Act 1", title: "OKO", subtitle: "The Eye", speaker: "Roland", theme: "Why what you SEE matters more than what you USE" },
                                { act: "Act 2", title: "RUKA", subtitle: "The Hand", speaker: "Ján", theme: "How to BUILD in this new reality" },
                                { act: "Act 3", title: "KOMPAS", subtitle: "The Compass", speaker: "Roman", theme: "WHERE this is all going — and what stays human" },
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
                            duration="10 min"
                            num="00"
                            title="Intro"
                            speaker="Prince"
                            type="host"
                            delay={0.22}
                        >
                            <TopicList items={[
                                "Hook — provocation, not logistics. Break an assumption in the first 90 seconds.",
                                "Why we're here, why it's paid, why this format.",
                                "The narrative arc: See → Build → Navigate. Three perspectives, one story.",
                                "Quick speaker intros — what connects them, what the audience should listen for.",
                                "Set expectations: this is the first edition. We're listening, we're building.",
                            ]} />
                            <Note>
                                Don't open with &quot;welcome and here&apos;s the agenda.&quot; Start with something that makes them
                                glad they came. Show two images, ask a question, break a pattern.
                                Then pivot to the structure.
                            </Note>
                        </TimeBlock>

                        {/* ROLAND */}
                        <TimeBlock
                            time="17:10"
                            duration="35–40 min"
                            num="01"
                            title="Oko — Vkus"
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
                            </Note>
                        </TimeBlock>

                        {/* ROLAND Q&A */}
                        <TimeBlock
                            time="17:50"
                            duration="10–15 min"
                            num=""
                            title="Q&A — Roland"
                            speaker=""
                            type="qa"
                            delay={0.28}
                        >
                            <p className="text-sm text-black/50">
                                Questions specifically about taste, creativity, daily AI workflows.
                                Prince moderates. Keep sharp — cut rambling questions.
                            </p>
                        </TimeBlock>

                        {/* TRANSITION 1 */}
                        <TransitionBlock delay={0.29}>
                            &quot;Roland just showed us why taste matters. But taste without leverage is just opinion.
                            Ján is going to show you how to turn that taste into products that scale.&quot;
                        </TransitionBlock>

                        {/* JÁN */}
                        <TimeBlock
                            time="18:05"
                            duration="35–40 min"
                            num="02"
                            title="Ruka — Využitie"
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
                                Risk: scope is very wide. Focus on 2–3 core ideas with real stories.
                                The audience remembers stories, not surveys. Pick depth over breadth.
                            </Note>
                        </TimeBlock>

                        {/* JÁN Q&A */}
                        <TimeBlock
                            time="18:45"
                            duration="10–15 min"
                            num=""
                            title="Q&A — Ján"
                            speaker=""
                            type="qa"
                            delay={0.32}
                        >
                            <p className="text-sm text-black/50">
                                Questions about products, business, automation, team building.
                                Expect entrepreneur-heavy questions here.
                            </p>
                        </TimeBlock>

                        {/* TRANSITION 2 */}
                        <TransitionBlock delay={0.33}>
                            &quot;Ján showed us how to build. But build for whom?
                            And what happens to the humans in all of this? Roman has spent years thinking about exactly that.&quot;
                        </TransitionBlock>

                        {/* ROMAN */}
                        <TimeBlock
                            time="19:00"
                            duration="30–35 min"
                            num="03"
                            title="Kompas — Jasnosť"
                            speaker="Roman Pii Wagner"
                            role="Transformational Design"
                            type="keynote"
                            delay={0.34}
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
                            </Note>
                        </TimeBlock>

                        {/* ROMAN Q&A */}
                        <TimeBlock
                            time="19:35"
                            duration="10–15 min"
                            num=""
                            title="Q&A — Roman"
                            speaker=""
                            type="qa"
                            delay={0.36}
                        >
                            <p className="text-sm text-black/50">
                                Questions about trust, organization, transformation.
                                This Q&A tends to get philosophical — that&apos;s fine, lean into it.
                            </p>
                        </TimeBlock>

                        {/* PANEL */}
                        <TimeBlock
                            time="19:50"
                            duration="15–20 min"
                            num="04"
                            title="Panel"
                            speaker="All three + Prince (moderator)"
                            type="panel"
                            delay={0.38}
                        >
                            <TopicList items={[
                                "One provocative question to all three — let them debate and build on each other.",
                                "Cross-pollination of ideas across the three acts.",
                                "Curated audience questions (Prince filters — no rambling).",
                            ]} />
                            <Note>
                                Better than a &quot;big Q&A.&quot; Random audience questions after 3 hours are low energy.
                                A structured panel moment with one great question is way more valuable.
                                Example: &quot;If you could only teach your team one skill for the next 5 years, what would it be?&quot;
                            </Note>
                        </TimeBlock>

                        {/* CLOSING */}
                        <TimeBlock
                            time="20:10"
                            duration="5 min"
                            num=""
                            title="Closing"
                            speaker="Prince"
                            type="host"
                            delay={0.40}
                        >
                            <TopicList items={[
                                "One actionable thing for Monday morning. Not a summary — a specific action.",
                                "Announce the personalized toolkit: \"We listened. In one week you'll get tools tailored to what YOU need.\"",
                                "Capture mechanism — QR code / short form: role, biggest challenge, tools they use.",
                                "Thank the speakers. Thank the audience for trusting us with their evening.",
                                "First edition — we're building this with them, not just for them.",
                            ]} />
                        </TimeBlock>

                        {/* NETWORKING */}
                        <TimeBlock
                            time="20:15"
                            duration="Open"
                            num=""
                            title="Networking"
                            speaker=""
                            type="networking"
                            delay={0.42}
                        >
                            <TopicList items={[
                                "Informal conversations, connections between attendees and speakers.",
                                "Feedback collection — what resonated, what's missing, what they'd pay for next.",
                                "Note recurring themes and questions — fuel for the personalized toolkit.",
                            ]} />
                        </TimeBlock>
                    </div>
                </div>
            </section>

            {/* Post-Event */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.44)}>
                        <SectionLabel>Post-Event (Within 1 Week)</SectionLabel>
                        <div className="mt-4 p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/5">
                            <h3 className="font-bold text-lg mb-3">Personalized Toolkit</h3>
                            <TopicList items={[
                                "Curated tool recommendations per attendee profile (based on form + questions asked).",
                                "Not a generic list — tailored to their role, industry, and actual challenges discussed.",
                                "Combination of tools, prompts, workflows, and learning paths.",
                                "Internal value: recurring themes become future content, workshops, and product ideas.",
                                "This is the differentiator — most workshops end at the door. We extend the value.",
                            ]} />
                            <Note>
                                Capture mechanism is critical. Without the form data, you can&apos;t personalize.
                                Make the QR code / form part of the closing ritual, not an afterthought.
                            </Note>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speaker Notes */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.46)}>
                        <SectionLabel>Production Notes</SectionLabel>
                        <div className="mt-4 space-y-3">
                            {[
                                { flag: "Timing", note: "Total runtime ~3h 15min. Tight but works. Need a strict timekeeper. Consider a visible timer or signal system for speakers." },
                                { flag: "Transitions", note: "Don't just say \"next up is...\" Use 2-minute bridges to connect themes. Makes it ONE story, not three separate talks." },
                                { flag: "Ján's Scope", note: "Broadest topic range of the three. Coach him to pick 2–3 core ideas with real stories, not a survey of everything." },
                                { flag: "Roman → Ján Link", note: "Roman's trust/investing/VC angle connects back to Ján's section. Let them reference each other during the panel." },
                                { flag: "First Edition", note: "Announce this. It sets expectations and makes the audience feel like co-creators, not just consumers." },
                                { flag: "Toolkit Capture", note: "Without a form at the closing, the toolkit promise is empty. Prepare QR code, test it, make it 3 questions max." },
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
