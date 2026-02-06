"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    return (
        <button 
            onClick={copy} 
            className={cn(
                "text-[9px] font-bold uppercase tracking-widest px-3 py-1 transition-all",
                copied ? "bg-green-500 text-white" : "bg-black/5 text-black/40 hover:bg-[#0047BB] hover:text-white"
            )}
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    )
}

export default function MarketingStrategyPage() {
    const [activePhase, setActivePhase] = useState<number>(1)
    const [activeHookTab, setActiveHookTab] = useState<string>("controversy")
    const [expandedDM, setExpandedDM] = useState<string | null>(null)
    const [expandedEmail, setExpandedEmail] = useState<number | null>(0)
    const [ticketsSold, setTicketsSold] = useState<number>(0)
    const [dmsSent, setDmsSent] = useState<number>(0)

    const launchDate = new Date('2026-02-26')
    const today = new Date()
    const daysUntilLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    const timeline = {
        phases: [
            {
                id: 0,
                name: "ALREADY DONE",
                dates: "Oct 2025 - Jan 2026",
                status: "complete",
                color: "#10b981",
                focus: "4 months of free toolkits. Trust built.",
                actions: [
                    "Monthly toolkit delivered",
                    "Email list growing",
                    "Social presence established",
                    "Audience knows who you are"
                ],
                insight: "You're not starting from zero. You have a warm audience."
            },
            {
                id: 1,
                name: "TRANSITION",
                dates: "Jan 27 - Feb 9",
                status: "current",
                color: "#0047BB",
                focus: "Start mentioning THE SHIFT. Naturally.",
                actions: [
                    "Continue toolkit value (don't stop)",
                    "Behind-scenes: 'We're building something...'",
                    "Tease without hard sell",
                    "DM warm leads personally",
                    "Ask influencer friends to save the date"
                ],
                insight: "Soft introduction. Let curiosity build."
            },
            {
                id: 2,
                name: "ANNOUNCE",
                dates: "Feb 10 - Feb 16",
                status: "upcoming",
                color: "#6366f1",
                focus: "Official announcement. Registration opens.",
                actions: [
                    "Email blast: 'It's happening'",
                    "LinkedIn/IG announcement posts",
                    "Friends reshare (ask personally)",
                    "Early bird for toolkit subscribers",
                    "Limited seats messaging"
                ],
                insight: "Your email list is your #1 asset here."
            },
            {
                id: 3,
                name: "FILL SEATS",
                dates: "Feb 17 - Feb 25",
                status: "upcoming",
                color: "#f59e0b",
                focus: "Urgency. Social proof. Close.",
                actions: [
                    "'X seats left' updates",
                    "Countdown posts",
                    "Personal DMs to engaged followers",
                    "Final email sequence",
                    "Friends post testimonials/endorsements"
                ],
                insight: "Warm leads + email list = filled room."
            },
            {
                id: 4,
                name: "DELIVER + CAPTURE",
                dates: "Feb 26+",
                status: "upcoming",
                color: "#ec4899",
                focus: "Session #1. Capture everything. Amplify.",
                actions: [
                    "Deliver incredible session",
                    "Capture video reactions on the spot",
                    "Collect testimonials immediately",
                    "Attendees reshare (UGC starts here)",
                    "Open Session #2 registration"
                ],
                insight: "UGC happens AFTER the session, not before."
            }
        ]
    }

    const channels = [
        {
            name: "Email List",
            icon: "📧",
            priority: "HIGHEST",
            why: "You own it. Direct conversion. 4 months of subscribers.",
            actions: ["Announce to list first", "Early bird access", "3-email launch sequence"],
            cost: "€0",
            expected: "50% of seats"
        },
        {
            name: "Warm Leads",
            icon: "🔥",
            priority: "HIGH",
            why: "Personal network. Highest conversion. Free.",
            actions: ["Each founder: 20 personal contacts", "Call/voice note (not mass message)", "Frame as invitation"],
            cost: "€0",
            expected: "30% of seats"
        },
        {
            name: "Influencer Friends",
            icon: "🤝",
            priority: "HIGH",
            why: "Free reach to new audiences. Social proof.",
            actions: ["Ask 10 friends to reshare", "Give them early access/free seat", "They post their experience later"],
            cost: "€0 (or free seats)",
            expected: "15% of seats"
        },
        {
            name: "Organic Social",
            icon: "📱",
            priority: "MEDIUM",
            why: "Awareness + credibility. Not direct conversion.",
            actions: ["3-4 posts/week", "Behind-scenes content", "Hook-first writing"],
            cost: "€0",
            expected: "5% of seats"
        },
        {
            name: "Paid Ads",
            icon: "💰",
            priority: "NOT NOW",
            why: "Wait until you have testimonials + proven conversion.",
            actions: ["Skip for Session #1", "Use after you have video testimonials", "Retarget warm audience first"],
            cost: "€0 (for now)",
            expected: "0% (Session #1)"
        },
        {
            name: "UGC",
            icon: "🎬",
            priority: "AFTER SESSION",
            why: "You can't have UGC before the thing happens.",
            actions: ["Capture reactions AT the session", "Ask attendees to post", "Use for Session #2 marketing"],
            cost: "€0",
            expected: "Asset for future"
        }
    ]

    const attentionPrinciples = [
        {
            principle: "Hook in 2 seconds",
            desc: "First line decides if anyone reads the rest.",
            examples: ["'I made this in 20 minutes.'", "'Most AI advice is useless.'", "'What we shipped with 2 people.'"]
        },
        {
            principle: "Specific > Generic",
            desc: "Numbers, timeframes, concrete examples.",
            examples: ["'4 hours saved every day' vs 'save time'", "'€5M revenue' vs 'successful'", "'20 minutes' vs 'quickly'"]
        },
        {
            principle: "Controversy creates conversation",
            desc: "Opinions that make people react.",
            examples: ["'You don't need to learn prompting.'", "'AI courses are mostly useless.'", "'The 10-person team is dead.'"]
        },
        {
            principle: "Show, don't tell",
            desc: "Results > claims. Process > promises.",
            examples: ["Time-lapse of creation", "Before/after", "Live work, not slides"]
        }
    ]

    const math = {
        session: {
            seats: 40,
            minSeats: 35,
            price: 99,
            revenue: 3960,
            minRevenue: 3465
        },
        sources: [
            { source: "Email list", percent: 50, seats: 20 },
            { source: "Warm leads", percent: 30, seats: 12 },
            { source: "Friend reshares", percent: 15, seats: 6 },
            { source: "Organic social", percent: 5, seats: 2 }
        ],
        cost: "€0",
        note: "First session should be filled 100% organically."
    }

    const currentPhase = timeline.phases[activePhase]

    // HOOKS LIBRARY DATA
    const hooksData: Record<string, Array<{hook: string, useFor: string}>> = {
        controversy: [
            { hook: "You don't need to learn prompting.", useFor: "LinkedIn opener" },
            { hook: "AI courses are 95% useless. Here's why.", useFor: "Thread starter" },
            { hook: "Stop trying to be better at AI.", useFor: "Contrarian post" },
            { hook: "The problem isn't the tool. It's how you see.", useFor: "Philosophy post" },
            { hook: "Your AI output looks like everyone else's. That's the problem.", useFor: "Pain point" },
            { hook: "Prompting is the new typing. Nobody cares if you're fast.", useFor: "Reframe" },
            { hook: "AI won't take your job. Someone using AI better will.", useFor: "Classic + twist" },
            { hook: "The best AI users prompt less, not more.", useFor: "Counterintuitive" },
            { hook: "Most people use AI like a calculator. We use it like a co-pilot.", useFor: "Analogy" },
            { hook: "AI is a taste amplifier. If your taste is bad, AI makes it worse.", useFor: "Truth bomb" }
        ],
        specificity: [
            { hook: "I made this in 20 minutes.", useFor: "Show work post" },
            { hook: "4 hours saved. Every day. Here's the stack.", useFor: "Value post" },
            { hook: "One prompt. 47 variations. 3 minutes.", useFor: "Demo post" },
            { hook: "3 tools. €50/month. Replaced a €3,000 workflow.", useFor: "ROI post" },
            { hook: "We ran 4 months of free toolkits. Here's what we learned.", useFor: "Story post" },
            { hook: "40 people. 3 hours. Everything changes.", useFor: "Event hook" },
            { hook: "€99. 3 hours. Leave with a working system.", useFor: "CTA hook" },
            { hook: "10,000+ toolkit downloads. One question kept coming up.", useFor: "Social proof" }
        ],
        questions: [
            { hook: "Why does your AI output look like everyone else's?", useFor: "Problem awareness" },
            { hook: "What if the tool isn't the problem?", useFor: "Reframe" },
            { hook: "Do you use AI? Probably. Are you getting everything out of it? Probably not.", useFor: "Qualification" },
            { hook: "What would you do with 4 extra hours a day?", useFor: "Aspiration" },
            { hook: "Are you prompting or curating?", useFor: "Core concept" },
            { hook: "What separates good AI work from forgettable?", useFor: "Taste question" }
        ],
        story: [
            { hook: "I've been making AI toolkits for four months. Free. Every month.", useFor: "Origin story" },
            { hook: "The question I keep getting: 'Can you show me how YOU use it?'", useFor: "Transition to offer" },
            { hook: "Something changed in how we work. Most people haven't caught up.", useFor: "Observation" },
            { hook: "We built this because we were frustrated with AI courses.", useFor: "Why we exist" },
            { hook: "Three of us. Different backgrounds. Same realization.", useFor: "Founder story" },
            { hook: "This isn't a course. It's what we wish existed when we started.", useFor: "Positioning" }
        ],
        urgency: [
            { hook: "40 seats. Link in bio.", useFor: "Simple CTA" },
            { hook: "X seats left. Not doing another until March.", useFor: "Scarcity" },
            { hook: "Registration closes in 48 hours.", useFor: "Deadline" },
            { hook: "Last 10 seats. Then we focus on delivery.", useFor: "Final push" },
            { hook: "Early bird ends tonight. €99 → €129 tomorrow.", useFor: "Price urgency" }
        ]
    }

    const hookTabs = [
        { id: "controversy", label: "Controversy", color: "#ef4444" },
        { id: "specificity", label: "Specificity", color: "#0047BB" },
        { id: "questions", label: "Questions", color: "#8b5cf6" },
        { id: "story", label: "Story", color: "#10b981" },
        { id: "urgency", label: "Urgency", color: "#f59e0b" }
    ]

    // DM TEMPLATES DATA
    const dmTemplates = [
        {
            id: "warm",
            name: "Warm Lead",
            situation: "Know them personally",
            script: `Hey [Name],

Quick one — we're doing a thing on Feb 26. 

THE SHIFT. 3-hour AI workshop. 40 people. €99.

Roland, Ján, and me. Everything we've learned building with AI.

Not a course. More like "here's exactly how we work."

Think it'd be up your alley. Wanted you to hear before we announce publicly.

Interested? I can send the link.`
        },
        {
            id: "engaged",
            name: "Engaged Follower",
            situation: "Liked/commented on your stuff",
            script: `Hey [Name],

Noticed you've been engaging with my AI content — thanks for that.

Quick question: do you use AI in your work?

Asking because we're doing a live workshop (Feb 26, Bratislava) and I'm trying to figure out who'd actually benefit vs. who's just curious.

No pitch. Just curious about your situation.`
        },
        {
            id: "influencer",
            name: "Influencer Friend",
            situation: "Asking for reshare",
            script: `Hey [Name],

Need a favor.

We're launching THE SHIFT — AI workshop, Feb 26, 40 people.

Would you be open to resharing my announcement when it drops? Just a quick story or repost.

Happy to give you a free seat if you want to come (or give to someone in your audience).

Let me know if you're down and I'll send you the post when it's live.`
        },
        {
            id: "cold",
            name: "Cold-ish Lead",
            situation: "Know of them, no relationship",
            script: `Hey [Name],

Random reach-out — I've been following your work on [specific thing they do].

We're running an AI workshop for creatives/practitioners on Feb 26. Small group, 40 people.

Not sure if it's relevant for you, but thought I'd mention it since you seem to be thinking about this stuff.

No pressure either way. Just wanted to put it on your radar.`
        },
        {
            id: "followup",
            name: "Post-Interest Follow-Up",
            situation: "They showed interest before",
            script: `Hey [Name],

Following up — you mentioned you might be interested in THE SHIFT.

Quick update: 20 seats left. Filling faster than expected.

If you want in, here's the link: [LINK]

If you have questions, happy to hop on a quick call.

No pressure — just didn't want you to miss it if you actually wanted to come.`
        },
        {
            id: "final",
            name: "Final Push",
            situation: "Ask for the sale",
            script: `Hey [Name],

Last ping on this — THE SHIFT is down to final 10 seats.

You seemed interested when we talked. 

If you're in, now's the time: [LINK]

If not, totally fine — no more messages about this, promise.

Let me know either way?`
        }
    ]

    // EMAIL SEQUENCES DATA
    const emails = [
        {
            name: "Email #1: It's Happening",
            timing: "Day of announcement",
            subjects: ["Something's been building", "Feb 26. Save the date."],
            body: `For four months, we've been sending you AI toolkits.

Free. Every month. No catch.

And the question we kept getting was:
"This is great, but... can you just show us how YOU use it?"

So that's what we're doing.

---

THE SHIFT
February 26, 2026
3 hours. 40 people. One room.

Me (Roman), Roland, and Ján — everything we've learned building with AI daily.

No slides. No theory. Just how we actually work.

Roland on TASTE — what separates good from forgettable.
Ján on LEVERAGE — what one person can build now.
Me on CLARITY — how to think when everything moves.

---

€99. Three hours. Leave with a working system.

40 seats only. We're keeping it small on purpose.

[RESERVE YOUR SEAT]

---

Why €99 when AI courses charge €500+?

Because we want this accessible. 
The best marketing is people telling their friends.
We'd rather have 40 people who actually show up and talk about it.

See you there?

Roman
(with Roland & Ján)

P.S. — If you've been downloading our toolkits, this is the live version. The "show, don't tell" edition.`
        },
        {
            name: "Email #2: Momentum",
            timing: "Day 2-3",
            subjects: ["20 seats gone in 24 hours", "Quick update on THE SHIFT"],
            body: `Quick update:

20 seats filled in the first 24 hours.

Not telling you this to pressure you. 
Just want you to know — if you're considering it, don't wait until the last day.

Here's what people are asking:

Q: "Is this for beginners or advanced?"
A: It's for practitioners. If you use AI at work (even casually), you'll get value. If you've never touched ChatGPT, this might be too fast.

Q: "What do I actually leave with?"
A: A working system. Not theory. You'll build something during the session that you'll use Monday morning.

Q: "Why only 40 people?"
A: Because we want to actually talk to you. Not lecture at you. This is a workshop, not a webinar.

---

20 seats left. Feb 26.

[GRAB YOUR SEAT]

---

See you there?

Roman

P.S. — Roland's section on "taste" is the thing I'm most excited about. How do you develop an eye for what's good when AI can make anything?`
        },
        {
            name: "Email #3: Final Call",
            timing: "Day 5-7 or 48h before close",
            subjects: ["Last 10 seats — then we focus on delivery", "Closing registration tomorrow"],
            body: `Last email about this. Promise.

10 seats left for THE SHIFT (Feb 26).

If you've been thinking about it, now's the time.

After this, we're closing registration and focusing on making the session great.

No pressure. But also — no more reminders after this.

---

What you get:

- 3 hours with Roland, Ján, and me
- The frameworks we actually use (not theory)
- A working system you build during the session
- Access to the community of 40 people who showed up

What you don't get:

- Recordings (this is live only)
- Another chance until March
- Refunds (commit or don't)

---

€99. Last 10 seats.

[I'M IN]

---

See you there?

Roman

P.S. — If €99 is genuinely a blocker and you really want to come, reply to this email. We'll figure something out.`
        }
    ]

    // CALENDAR DATA
    const calendarData = [
        { date: "Feb 1", day: "Sat", phase: "transition", roman: "Teaser story", roland: "Normal content", jan: "Normal content", email: "—" },
        { date: "Feb 3", day: "Mon", phase: "transition", roman: "Value post", roland: "Value post", jan: "Value post", email: "—" },
        { date: "Feb 5", day: "Wed", phase: "transition", roman: "Framework post", roland: "—", jan: "—", email: "Toolkit" },
        { date: "Feb 7", day: "Fri", phase: "transition", roman: "Soft tease", roland: "Reshare", jan: "Reshare", email: "—" },
        { date: "Feb 10", day: "Mon", phase: "announce", roman: "VIDEO + Announce", roland: "Reshare", jan: "Reshare", email: "Email #1" },
        { date: "Feb 12", day: "Wed", phase: "announce", roman: "Framework", roland: "—", jan: "—", email: "Email #2" },
        { date: "Feb 14", day: "Fri", phase: "announce", roman: "'20 seats left'", roland: "Reshare", jan: "Reshare", email: "—" },
        { date: "Feb 17", day: "Mon", phase: "fill", roman: "Value post", roland: "Value post", jan: "Value post", email: "—" },
        { date: "Feb 19", day: "Wed", phase: "fill", roman: "Social proof", roland: "—", jan: "—", email: "Email #3" },
        { date: "Feb 21", day: "Fri", phase: "fill", roman: "'10 seats left'", roland: "Reshare", jan: "Reshare", email: "—" },
        { date: "Feb 24", day: "Mon", phase: "fill", roman: "'Last 5'", roland: "Reshare", jan: "Reshare", email: "Final" },
        { date: "Feb 26", day: "Wed", phase: "deliver", roman: "SESSION", roland: "—", jan: "—", email: "—" }
    ]

    // IG REELS DATA
    const reelIdeas = [
        {
            title: "The Sea of Sameness",
            hook: "Why does everyone's AI work look the same?",
            concept: "Show side-by-side AI outputs that look identical",
            punchline: "Because prompting isn't the skill. Curating is.",
            cta: "Feb 26. Link in bio."
        },
        {
            title: "20 Minutes",
            hook: "I made this in 20 minutes.",
            concept: "Time-lapse of building something with AI",
            punchline: "Not because AI is magic. Because I know what to ask for.",
            cta: "Want the framework? Feb 26."
        },
        {
            title: "Three Questions",
            hook: "Three questions.",
            concept: "Talking head, direct to camera",
            punchline: "Do you use AI? Probably. Getting everything out of it? Probably not.",
            cta: "40 seats. Link in bio."
        },
        {
            title: "Before/After",
            hook: "Same prompt. Different result.",
            concept: "Show generic output → refined output",
            punchline: "The difference? 3 hours of learning how to see.",
            cta: "THE SHIFT. Feb 26."
        }
    ]

    const carouselIdeas = [
        {
            title: "5 Signs You're Using AI Wrong",
            slides: [
                "5 Signs You're Using AI Wrong",
                "1. You prompt once and accept the first output",
                "2. Your work looks like everyone else's",
                "3. You use AI for everything",
                "4. You can't explain WHY something is good",
                "5. You're faster but not better",
                "Fix all 5 in 3 hours. Feb 26."
            ]
        },
        {
            title: "Prompter vs. Curator",
            slides: [
                "Are you a Prompter or a Curator?",
                "Prompter: Types and hopes",
                "Curator: Directs and refines",
                "Prompter: Accepts first output",
                "Curator: Knows what 'good' looks like",
                "Become a curator. Feb 26."
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav />

            {/* Hero */}
            <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black/10 relative">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            MARKETING PLAYBOOK
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter mt-4"
                    >
                        The Path to<br/>
                        <span className="text-[#0047BB] italic">Feb 26.</span>
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex flex-wrap items-center gap-6"
                    >
                        <div className="flex items-center gap-3 px-6 py-4 bg-[#0047BB]/10 border border-[#0047BB]/20">
                            <span className="text-4xl font-serif-instrument text-[#0047BB]">{daysUntilLaunch}</span>
                            <span className="text-sm text-black/50">days left</span>
                        </div>
                        <div className="text-sm text-black/40 max-w-md">
                            You've been delivering value for 4 months. Now it's time to transition — not launch cold.
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reality Check */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#0047BB]/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] mb-6">REALITY CHECK</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">You're Not Starting Cold</h3>
                            <p className="text-sm text-black/50">4 months of toolkits = warm audience. This isn't a launch from zero.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">No Paid Ads Needed</h3>
                            <p className="text-sm text-black/50">Email + warm leads + friend reshares = 40 seats. Save ads for scaling later.</p>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <h3 className="font-bold mb-2">UGC Comes After</h3>
                            <p className="text-sm text-black/50">You can't have user content before the session. Capture it on Feb 26.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">TIMELINE</h2>
                    
                    {/* Phase Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {timeline.phases.map((phase) => (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(phase.id)}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border",
                                    activePhase === phase.id 
                                        ? "text-white border-transparent" 
                                        : "text-black/40 border-black/10 hover:border-black/20 bg-white"
                                )}
                                style={{ 
                                    backgroundColor: activePhase === phase.id ? phase.color : undefined
                                }}
                            >
                                {phase.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Phase */}
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                        <div className="p-8 bg-white border-2" style={{ borderColor: currentPhase.color }}>
                            <div className="flex items-center gap-3 mb-4">
                                <span 
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: currentPhase.color }}
                                />
                                <span className="text-xs text-black/40">{currentPhase.dates}</span>
                                {currentPhase.status === 'complete' && (
                                    <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 bg-green-100 text-green-700">DONE</span>
                                )}
                                {currentPhase.status === 'current' && (
                                    <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 bg-blue-100 text-blue-700">NOW</span>
                                )}
                            </div>
                            <h3 className="text-2xl font-serif-instrument italic mb-4">{currentPhase.focus}</h3>
                            <p className="text-sm text-black/50 p-4 bg-black/5 border-l-2" style={{ borderColor: currentPhase.color }}>
                                {currentPhase.insight}
                            </p>
                        </div>

                        <div className="p-8 bg-white border border-black/10">
                            <h4 className="text-[10px] font-bold tracking-widest text-black/40 mb-4">ACTIONS</h4>
                            <div className="space-y-3">
                                {currentPhase.actions.map((action: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div 
                                            className="w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                                            style={{ backgroundColor: `${currentPhase.color}20`, color: currentPhase.color }}
                                        >
                                            {i + 1}
                                        </div>
                                        <span className="text-sm text-black/70">{action}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline Bar */}
                    <div className="mt-12 relative h-2 bg-black/5 rounded-full">
                        <div 
                            className="absolute top-0 left-0 h-full bg-[#0047BB] rounded-full transition-all"
                            style={{ width: `${((activePhase + 1) / timeline.phases.length) * 100}%` }}
                        />
                        <div className="absolute top-4 left-0 right-0 flex justify-between">
                            {timeline.phases.map((phase) => (
                                <button
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={cn(
                                        "text-[8px] font-bold tracking-widest transition-all",
                                        activePhase === phase.id ? "text-[#0047BB]" : "text-black/30"
                                    )}
                                >
                                    {phase.dates.split(' - ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Strategy */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">CHANNEL STRATEGY</h2>
                    <p className="text-2xl font-serif-instrument italic text-[#0047BB] mb-8">Fill 40 seats with €0 ad spend.</p>
                    
                    <div className="space-y-4">
                        {channels.map((channel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "p-6 border transition-all",
                                    channel.priority === "HIGHEST" ? "border-2 border-[#0047BB] bg-[#0047BB]/5" :
                                    channel.priority === "NOT NOW" || channel.priority === "AFTER SESSION" ? "border-black/5 bg-black/[0.02] opacity-60" :
                                    "border-black/10"
                                )}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-3 md:w-40 shrink-0">
                                        <span className="text-2xl">{channel.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-sm">{channel.name}</h3>
                                            <span className={cn(
                                                "text-[9px] font-bold tracking-widest",
                                                channel.priority === "HIGHEST" ? "text-[#0047BB]" :
                                                channel.priority === "HIGH" ? "text-green-600" :
                                                channel.priority === "MEDIUM" ? "text-yellow-600" :
                                                "text-black/30"
                                            )}>
                                                {channel.priority}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-black/50 md:w-48 shrink-0">{channel.why}</p>
                                    <div className="flex-1 flex flex-wrap gap-2">
                                        {channel.actions.map((action: string, j: number) => (
                                            <span key={j} className="text-xs px-3 py-1 bg-black/5 text-black/60">
                                                {action}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="md:w-24 shrink-0 text-right">
                                        <div className="text-sm font-bold text-[#0047BB]">{channel.expected}</div>
                                        <div className="text-[10px] text-black/30">{channel.cost}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* World of Attention */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">THE ATTENTION GAME</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">You have 2 seconds. Make them count.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {attentionPrinciples.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border border-black/10"
                            >
                                <h3 className="font-bold text-[#0047BB] mb-2">{item.principle}</h3>
                                <p className="text-sm text-black/50 mb-4">{item.desc}</p>
                                <div className="space-y-2">
                                    {item.examples.map((ex: string, j: number) => (
                                        <div key={j} className="text-xs text-black/60 flex items-start gap-2">
                                            <span className="text-[#0047BB]">→</span>
                                            <span>{ex}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Math */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#0047BB] text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">THE MATH</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="flex flex-col gap-2 mb-8">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl font-serif-instrument">{math.session.seats}</span>
                                    <span className="text-xl text-white/50">seats × €{math.session.price} = </span>
                                    <span className="text-4xl font-serif-instrument">€{math.session.revenue.toLocaleString()}</span>
                                </div>
                                <div className="text-sm text-white/50">
                                    Minimum target: {math.session.minSeats} paid seats = €{math.session.minRevenue.toLocaleString()}
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                {math.sources.map((source, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-full max-w-[200px] h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-white rounded-full"
                                                style={{ width: `${source.percent}%` }}
                                            />
                                        </div>
                                        <span className="text-sm text-white/70 w-32">{source.source}</span>
                                        <span className="text-lg font-bold">{source.seats} seats</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white/10 border border-white/20">
                            <h3 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">KEY INSIGHT</h3>
                            <p className="text-xl font-serif-instrument italic mb-4">{math.note}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-bold tracking-widest text-white/40">AD SPEND</span>
                                <span className="text-3xl font-serif-instrument">{math.cost}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Types */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">CONTENT TO CREATE</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Behind Scenes</h3>
                            <p className="text-xs text-black/50 mb-4">Show the making of THE SHIFT</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Prep videos</div>
                                <div>• Speaker discussions</div>
                                <div>• Venue setup</div>
                            </div>
                        </div>
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Value Posts</h3>
                            <p className="text-xs text-black/50 mb-4">Tips, tools, insights (keep giving)</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Tool of the week</div>
                                <div>• Quick wins</div>
                                <div>• Frameworks</div>
                            </div>
                        </div>
                        <div className="p-6 border border-black/10">
                            <h3 className="font-bold mb-2">Show the Work</h3>
                            <p className="text-xs text-black/50 mb-4">Live creation, results, process</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Time-lapses</div>
                                <div>• Before/after</div>
                                <div>• Ship updates</div>
                            </div>
                        </div>
                        <div className="p-6 border border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="font-bold mb-2 text-[#0047BB]">THE SHIFT Posts</h3>
                            <p className="text-xs text-black/50 mb-4">Direct promotion (20% of content)</p>
                            <div className="space-y-1 text-[10px] text-black/40">
                                <div>• Announcement</div>
                                <div>• Seats left</div>
                                <div>• Countdown</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekly Rhythm */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">WEEKLY RHYTHM</h2>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-black/10">
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">DAY</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">LINKEDIN</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">INSTAGRAM</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-black/40">EMAIL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Mon</td>
                                    <td className="py-3 px-4 text-black/60">Value post (Roland)</td>
                                    <td className="py-3 px-4 text-black/60">Story: Week ahead</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Tue</td>
                                    <td className="py-3 px-4 text-black/60">Show work (Jan)</td>
                                    <td className="py-3 px-4 text-black/60">Reel: Behind scenes</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Wed</td>
                                    <td className="py-3 px-4 text-black/60">Framework (Roman)</td>
                                    <td className="py-3 px-4 text-black/60">Carousel: Tips</td>
                                    <td className="py-3 px-4 text-[#0047BB]">Weekly toolkit</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Thu</td>
                                    <td className="py-3 px-4 text-black/60">Engage (comment day)</td>
                                    <td className="py-3 px-4 text-black/60">Story: Poll/Q&A</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr className="border-b border-black/5">
                                    <td className="py-3 px-4 font-bold">Fri</td>
                                    <td className="py-3 px-4 text-[#0047BB]">THE SHIFT mention</td>
                                    <td className="py-3 px-4 text-black/60">Reel: Show work</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-bold">Sat/Sun</td>
                                    <td className="py-3 px-4 text-black/40">Rest / engage</td>
                                    <td className="py-3 px-4 text-black/60">Story: Personal</td>
                                    <td className="py-3 px-4 text-black/40">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Video Invite Scripts */}
            <section className="py-16 px-6 md:px-12 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">VIDEO INVITE</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">Roman records. Roland & Ján reshare.</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        {/* Option 1 */}
                        <div className="p-6 border border-white/20 bg-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold tracking-widest text-white/40">OPTION 1</span>
                                <span className="text-[10px] text-white/30">~45 sec</span>
                            </div>
                            <h3 className="font-bold text-lg mb-4">"The Honest One"</h3>
                            <div className="text-sm text-white/70 space-y-3 italic">
                                <p>"Look, I'm not going to pretend AI is going to take your job tomorrow.</p>
                                <p>But something did change. And most people haven't caught up yet.</p>
                                <p>For the past four months, we've been giving away free toolkits. Thousands of people used them.</p>
                                <p>Now we're doing something different.</p>
                                <p>February 26th. One room. 40 people. Three hours.</p>
                                <p>Me, Roland, Ján — everything we've learned building with AI daily. No theory. No hype. Just what actually works.</p>
                                <p>It's called THE SHIFT.</p>
                                <p>40 seats. Link's in bio."</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                                Tone: Calm confidence. No urgency tricks.
                            </div>
                        </div>

                        {/* Option 2 */}
                        <div className="p-6 border border-white/20 bg-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold tracking-widest text-white/40">OPTION 2</span>
                                <span className="text-[10px] text-white/30">~35 sec</span>
                            </div>
                            <h3 className="font-bold text-lg mb-4">"The Direct One"</h3>
                            <div className="text-sm text-white/70 space-y-3 italic">
                                <p>"Three questions.</p>
                                <p>Do you use AI? Probably.</p>
                                <p>Do you feel like you're getting everything out of it? Probably not.</p>
                                <p>Do you have three hours on February 26th?</p>
                                <p>That's it. That's the pitch.</p>
                                <p>40 people. One room. Three of us who build with this stuff every day.</p>
                                <p>We're calling it THE SHIFT.</p>
                                <p>Not a course. Not a webinar. Just clarity on what changed and how to use it.</p>
                                <p>Link's below. 40 seats."</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                                Tone: Punchy. No wasted words.
                            </div>
                        </div>

                        {/* Option 3 */}
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/20">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold tracking-widest text-[#0047BB]">OPTION 3 — RECOMMENDED</span>
                                <span className="text-[10px] text-white/30">~50 sec</span>
                            </div>
                            <h3 className="font-bold text-lg mb-4">"The Real Talk One"</h3>
                            <div className="text-sm text-white/70 space-y-3 italic">
                                <p>"I've been making AI toolkits for four months now.</p>
                                <p>Free. Every month. Thousands of downloads.</p>
                                <p>And the question I keep getting is: 'This is great, but... can you just show me how YOU use it?'</p>
                                <p>So that's what we're doing.</p>
                                <p>February 26th. Me, Roland, Ján. Three hours. 40 people in a room.</p>
                                <p>Roland on taste — what separates good from forgettable.<br/>
                                Ján on leverage — what one person can build now.<br/>
                                Me on clarity — how to think when everything moves.</p>
                                <p>No slides. No theory. Just how we actually work.</p>
                                <p>It's called THE SHIFT. Link's in bio."</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
                                Tone: Personal. Origin story energy.
                            </div>
                        </div>
                    </div>

                    {/* Filming Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border border-white/10">
                            <h4 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">FILMING NOTES</h4>
                            <div className="space-y-2 text-sm text-white/60">
                                <div className="flex items-start gap-2"><span className="text-white/30">→</span> Phone camera. Eye level. Vertical for reels, horizontal for LinkedIn.</div>
                                <div className="flex items-start gap-2"><span className="text-white/30">→</span> Face the window. Natural light. No ring light plastic look.</div>
                                <div className="flex items-start gap-2"><span className="text-white/30">→</span> Quiet room. No music. Your voice only.</div>
                                <div className="flex items-start gap-2"><span className="text-white/30">→</span> Minimal edit. Jump cuts okay. Don't over-polish.</div>
                                <div className="flex items-start gap-2"><span className="text-white/30">→</span> Always end with "40 seats" + "link in bio"</div>
                            </div>
                        </div>

                        <div className="p-6 border border-white/10">
                            <h4 className="text-[10px] font-bold tracking-widest text-white/40 mb-4">WHAT ROLAND & JÁN DO</h4>
                            <div className="space-y-4 text-sm text-white/60">
                                <div>
                                    <div className="text-white/80 font-medium mb-1">Reshare Roman's video:</div>
                                    <div className="text-xs italic">"This is going to be fun. See you there." — Roland</div>
                                    <div className="text-xs italic">"Been building toward this for months. 40 seats." — Ján</div>
                                </div>
                                <div>
                                    <div className="text-white/80 font-medium mb-1">Keep posting their own content:</div>
                                    <div className="text-xs">Roland: Process videos, creative work</div>
                                    <div className="text-xs">Ján: Technical builds, frameworks</div>
                                </div>
                                <div>
                                    <div className="text-white/80 font-medium">DM warm leads personally</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Items */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">THIS WEEK</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">ROLAND</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ 1 behind-scenes video</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">JÁN</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ Show work content</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                        <div className="p-6 border-2 border-[#0047BB] bg-[#0047BB]/5">
                            <h3 className="text-[10px] font-bold tracking-widest text-[#0047BB] mb-4">ROMAN</h3>
                            <div className="space-y-2 text-sm text-black/70">
                                <div>☐ List 20 warm leads</div>
                                <div>☐ 2 LinkedIn posts</div>
                                <div>☐ Framework content</div>
                                <div>☐ DM 5 influencer friends</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* EXECUTION ARSENAL - START */}
            {/* ═══════════════════════════════════════════════════════════════ */}

            {/* Hooks Library */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10 bg-gradient-to-b from-[#0047BB]/5 to-transparent">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">EXECUTION ARSENAL</h2>
                        <span className="text-[9px] font-bold tracking-widest text-black/30 bg-black/5 px-3 py-1">COPY-PASTE READY</span>
                    </div>
                    <p className="text-3xl font-serif-instrument italic mb-8">40 Hooks. Click to copy.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {hookTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveHookTab(tab.id)}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border",
                                    activeHookTab === tab.id 
                                        ? "text-white border-transparent" 
                                        : "text-black/40 border-black/10 hover:border-black/20 bg-white"
                                )}
                                style={{ backgroundColor: activeHookTab === tab.id ? tab.color : undefined }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.div 
                        key={activeHookTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {hooksData[activeHookTab]?.map((item, i) => (
                            <div key={i} className="p-5 bg-white border border-black/10 hover:border-[#0047BB]/30 transition-all group">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-lg font-bold leading-tight mb-2">"{item.hook}"</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">{item.useFor}</p>
                                    </div>
                                    <CopyButton text={item.hook} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* DM Templates */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">DM TEMPLATES</h2>
                    <p className="text-2xl font-serif-instrument italic text-[#0047BB] mb-8">6 scripts for every situation.</p>
                    
                    <div className="space-y-4">
                        {dmTemplates.map((template) => (
                            <div 
                                key={template.id} 
                                className={cn(
                                    "border transition-all",
                                    expandedDM === template.id ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white"
                                )}
                            >
                                <button 
                                    onClick={() => setExpandedDM(expandedDM === template.id ? null : template.id)}
                                    className="w-full p-6 flex items-center justify-between text-left"
                                >
                                    <div>
                                        <h3 className="font-bold text-lg">{template.name}</h3>
                                        <p className="text-sm text-black/50">{template.situation}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "text-2xl transition-transform",
                                            expandedDM === template.id ? "rotate-45" : ""
                                        )}>+</span>
                                    </div>
                                </button>
                                {expandedDM === template.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="px-6 pb-6"
                                    >
                                        <div className="p-4 bg-black/5 border-l-2 border-[#0047BB] font-mono text-sm whitespace-pre-wrap">
                                            {template.script}
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <CopyButton text={template.script} />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Email Sequences */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">EMAIL SEQUENCES</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">3 emails. Full copy. Ready to send.</p>
                    
                    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                        {emails.map((email, i) => (
                            <button
                                key={i}
                                onClick={() => setExpandedEmail(i)}
                                className={cn(
                                    "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap",
                                    expandedEmail === i 
                                        ? "bg-[#0047BB] text-white border-[#0047BB]" 
                                        : "bg-white text-black/40 border-black/10 hover:border-black/20"
                                )}
                            >
                                {email.name}
                            </button>
                        ))}
                    </div>

                    {expandedEmail !== null && (
                        <motion.div 
                            key={expandedEmail}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white border border-black/10 p-8"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">{emails[expandedEmail].timing}</p>
                                    <h3 className="text-2xl font-serif-instrument italic">{emails[expandedEmail].name}</h3>
                                </div>
                                <CopyButton text={emails[expandedEmail].body} />
                            </div>
                            
                            <div className="mb-6">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Subject Lines (A/B test)</p>
                                <div className="flex flex-wrap gap-2">
                                    {emails[expandedEmail].subjects.map((subj, i) => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-2 bg-black/5">
                                            <span className="text-sm">"{subj}"</span>
                                            <CopyButton text={subj} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-6 bg-[#e8e1da] border-l-4 border-[#0047BB] font-mono text-sm whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                                {emails[expandedEmail].body}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Day-by-Day Calendar */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">25-DAY CALENDAR</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">Feb 1 → Feb 26. Every action mapped.</p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-white/40">DATE</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-white/40">ROMAN</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-white/40">ROLAND</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-white/40">JÁN</th>
                                    <th className="text-left py-3 px-4 text-[10px] font-bold tracking-widest text-white/40">EMAIL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calendarData.map((row, i) => (
                                    <tr 
                                        key={i} 
                                        className={cn(
                                            "border-b border-white/5 transition-colors",
                                            row.phase === "transition" && "hover:bg-blue-500/10",
                                            row.phase === "announce" && "hover:bg-indigo-500/10",
                                            row.phase === "fill" && "hover:bg-amber-500/10",
                                            row.phase === "deliver" && "bg-green-500/20"
                                        )}
                                    >
                                        <td className="py-3 px-4">
                                            <span className="font-bold">{row.date}</span>
                                            <span className="text-white/30 ml-2 text-xs">{row.day}</span>
                                        </td>
                                        <td className={cn(
                                            "py-3 px-4",
                                            row.roman.includes("VIDEO") || row.roman.includes("SESSION") ? "text-[#0047BB] font-bold" : "text-white/60"
                                        )}>{row.roman}</td>
                                        <td className="py-3 px-4 text-white/40">{row.roland}</td>
                                        <td className="py-3 px-4 text-white/40">{row.jan}</td>
                                        <td className={cn(
                                            "py-3 px-4",
                                            row.email !== "—" ? "text-green-400 font-bold" : "text-white/20"
                                        )}>{row.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500/30" />
                            <span className="text-xs text-white/40">Transition</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-indigo-500/30" />
                            <span className="text-xs text-white/40">Announce</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-amber-500/30" />
                            <span className="text-xs text-white/40">Fill Seats</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500/30" />
                            <span className="text-xs text-white/40">Deliver</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* IG Playbook */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10 bg-gradient-to-b from-pink-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-pink-600 mb-2">INSTAGRAM PLAYBOOK</h2>
                    <p className="text-2xl font-serif-instrument italic mb-8">Reels + Carousels. Scripts ready.</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[10px] font-bold tracking-widest text-black/40 mb-4">REEL IDEAS</h3>
                            <div className="space-y-4">
                                {reelIdeas.map((reel, i) => (
                                    <div key={i} className="p-5 bg-white border border-black/10 hover:border-pink-300 transition-all">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="font-bold text-pink-600">{reel.title}</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-black/30 bg-black/5 px-2 py-0.5">REEL</span>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <p><span className="text-black/40">Hook:</span> "{reel.hook}"</p>
                                            <p><span className="text-black/40">Show:</span> {reel.concept}</p>
                                            <p><span className="text-black/40">Punchline:</span> "{reel.punchline}"</p>
                                            <p className="text-pink-600 font-bold">CTA: {reel.cta}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-[10px] font-bold tracking-widest text-black/40 mb-4">CAROUSEL IDEAS</h3>
                            <div className="space-y-4">
                                {carouselIdeas.map((carousel, i) => (
                                    <div key={i} className="p-5 bg-white border border-black/10 hover:border-pink-300 transition-all">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="font-bold text-pink-600">{carousel.title}</h4>
                                            <span className="text-[9px] font-bold tracking-widest text-black/30 bg-black/5 px-2 py-0.5">{carousel.slides.length} SLIDES</span>
                                        </div>
                                        <div className="space-y-1">
                                            {carousel.slides.map((slide, j) => (
                                                <div key={j} className="flex items-start gap-2 text-sm">
                                                    <span className="text-pink-400 font-bold text-xs w-4">{j + 1}.</span>
                                                    <span className={j === 0 || j === carousel.slides.length - 1 ? "font-bold" : "text-black/60"}>{slide}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-6 p-5 bg-pink-100 border border-pink-200">
                                <h4 className="font-bold text-pink-700 mb-2">Story Strategy</h4>
                                <div className="text-sm text-pink-900/70 space-y-1">
                                    <p>Mon: Poll ("Do you use AI daily?")</p>
                                    <p>Tue: Behind-scenes snippet</p>
                                    <p>Wed: Countdown sticker</p>
                                    <p>Thu: Q&A box</p>
                                    <p>Fri: "Seats left" update</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Scoreboard */}
            <section className="py-16 px-6 md:px-12 border-t border-black/10 bg-[#0047BB]">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">LIVE SCOREBOARD</h2>
                    <p className="text-2xl font-serif-instrument italic mb-12">Track your progress. Update daily.</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="p-6 bg-white/10 border border-white/20">
                            <input 
                                type="number" 
                                value={ticketsSold}
                                onChange={(e) => setTicketsSold(Math.min(40, Math.max(0, parseInt(e.target.value) || 0)))}
                                className="text-5xl font-serif-instrument bg-transparent text-center w-full outline-none"
                            />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">Tickets Sold</p>
                        </div>
                        <div className="p-6 bg-white/10 border border-white/20">
                            <div className="text-5xl font-serif-instrument">{daysUntilLaunch}</div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">Days Left</p>
                        </div>
                        <div className="p-6 bg-white/10 border border-white/20">
                            <input 
                                type="number" 
                                value={dmsSent}
                                onChange={(e) => setDmsSent(Math.max(0, parseInt(e.target.value) || 0))}
                                className="text-5xl font-serif-instrument bg-transparent text-center w-full outline-none"
                            />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">DMs Sent</p>
                        </div>
                        <div className="p-6 bg-white/10 border border-white/20">
                            <div className="text-5xl font-serif-instrument">{Math.round((ticketsSold / 40) * 100)}%</div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">To Goal</p>
                        </div>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                        <div className="flex justify-between text-xs text-white/40 mb-2">
                            <span>0</span>
                            <span>40 seats</span>
                        </div>
                        <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-white rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(ticketsSold / 40) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <p className="text-sm text-white/60 mt-4">
                            {ticketsSold < 35 
                                ? `${35 - ticketsSold} more to minimum target` 
                                : ticketsSold < 40 
                                    ? `${40 - ticketsSold} more to sell out!` 
                                    : "SOLD OUT!"}
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* EXECUTION ARSENAL - END */}
            {/* ═══════════════════════════════════════════════════════════════ */}

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <div className="flex justify-center gap-4 mb-8">
                    <Link href="/public" className="px-6 py-3 bg-[#0047BB] text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                        View THE SHIFT
                    </Link>
                    <Link href="/corporate" className="px-6 py-3 border border-black/20 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-all">
                        View Corporate
                    </Link>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // PLAYBOOK
                </p>
            </footer>
        </div>
    )
}
