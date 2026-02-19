"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

/* ================================================================
   SALES STRATEGY — THE MINDSHIFT
   Pipeline, outreach architecture, buyer portraits, tracking.
   Living document. Updated as seats fill.
   ================================================================ */

// ── Data ──────────────────────────────────────────────────────────

const PIPELINE = {
    total: 40,
    confirmed: 5,
    preWarmed: 15,
    toActivate: 20,
}

const BUYER_PORTRAITS = [
    {
        id: "agency",
        label: "Agency Operators",
        who: "Marketing agencies, digital studios, creative shops",
        signal: "Already shipping AI-assisted work for clients. Highly skilled. Want the edge, not the basics.",
        where: "LinkedIn, industry Slack groups, agency partner networks",
        hook: "You're already using it. This is about using it better than everyone else.",
        size: "~30% of target",
    },
    {
        id: "finance",
        label: "Finance & Data Pros",
        who: "Analysts, consultants, fintech operators, banking innovation teams",
        signal: "Work with data daily. AI-curious but need practical frameworks, not hype.",
        where: "LinkedIn, professional networks, Telegram finance groups",
        hook: "The tools changed. The thinking hasn't. This closes that gap.",
        size: "~20% of target",
    },
    {
        id: "creative",
        label: "Creative Technologists",
        who: "Artists, designers, content creators integrating AI into their craft",
        signal: "Already experimenting. Want taste + curation, not just generation.",
        where: "Instagram, creative communities, personal networks",
        hook: "AI can make anything. The question is: can you tell what's good?",
        size: "~20% of target",
    },
    {
        id: "builder",
        label: "Builders & Operators",
        who: "Product people, startup founders, solo operators shipping with AI",
        signal: "Building products or businesses with AI tools. Want systems, not tutorials.",
        where: "Twitter/X, Telegram tech groups, startup communities",
        hook: "One person can now do what took a team of ten. Here's how.",
        size: "~20% of target",
    },
    {
        id: "executive",
        label: "Business Leaders",
        who: "Executives, team leads, department heads exploring AI integration",
        signal: "Not hands-on daily but need to understand what's possible and lead the shift.",
        where: "LinkedIn, business chambers, partner company referrals",
        hook: "Your team is already using AI. The question is whether you're leading or catching up.",
        size: "~10% of target",
    },
]

const ACTIVATION_LAYERS = [
    {
        layer: 1,
        name: "Inner Circle",
        desc: "Founders' direct contacts. People who already know and trust you.",
        conversion: "40-60%",
        effort: "Low",
        actions: [
            "Personal voice note or call (not mass message)",
            "Frame as personal invitation: 'I want you there'",
            "Each founder: 15-20 direct contacts minimum",
            "Follow up once if no response within 3 days",
        ],
        owners: ["Roman", "Roland", "Jan"],
        expectedSeats: "8-12",
    },
    {
        layer: 2,
        name: "Extended Network",
        desc: "Colleagues of colleagues. Friends of friends. Second-degree connections.",
        conversion: "15-25%",
        effort: "Medium",
        actions: [
            "Ask confirmed attendees to bring +1 (social proof)",
            "Ask friends to forward to 'someone who'd benefit'",
            "Personal intro from mutual connection",
            "Use Telegram/WhatsApp groups where you're active",
        ],
        owners: ["Everyone"],
        expectedSeats: "5-8",
    },
    {
        layer: 3,
        name: "Influencer Friends",
        desc: "3-4 well-connected friends who get free entry and naturally spread the word.",
        conversion: "N/A (reach multiplier)",
        effort: "Low",
        actions: [
            "Pick 3-4 friends with strong networks in target segments",
            "Give them complimentary entry — no strings attached",
            "Ask one thing: 'Share that this is happening. Naturally.'",
            "They post from their own perspective, not your copy",
            "Their audience trusts them > trusts your brand",
        ],
        owners: ["Roman", "Roland"],
        expectedSeats: "4-6 (indirect)",
    },
    {
        layer: 4,
        name: "Partner Companies",
        desc: "Companies from different sectors. Their teams are your audience.",
        conversion: "10-15%",
        effort: "Medium-High",
        actions: [
            "Identify 8-10 companies across sectors (agencies, tech, finance, creative)",
            "Send personalized intro — not a mass email",
            "Offer group discount for 3+ seats from same company",
            "Frame as team development, not event ticket",
            "Follow up with a call if they show interest",
        ],
        owners: ["Andrea", "Eduard", "Roland"],
        expectedSeats: "4-8",
    },
    {
        layer: 5,
        name: "Warm Digital Outreach",
        desc: "Engaged followers, newsletter subscribers, people who've interacted with your content.",
        conversion: "5-10%",
        effort: "Medium",
        actions: [
            "DM people who engaged with recent AI posts",
            "Email blast to toolkit subscriber list",
            "LinkedIn DMs to people who commented on relevant topics",
            "Not a pitch — start a conversation first",
        ],
        owners: ["Roman", "Tepi", "Sasha"],
        expectedSeats: "3-5",
    },
]

const NETWORK_MAP = [
    {
        person: "Roman",
        channels: ["LinkedIn (primary)", "Personal DMs", "Email"],
        network: "Tech + business LinkedIn network. Thought leadership audience.",
        play: "LinkedIn posts 2-3x this week. Personal DMs to 20 warm contacts. Voice notes > text.",
        target: "8-10 conversations started",
    },
    {
        person: "Roland",
        channels: ["Telegram (primary)", "Instagram", "Personal calls"],
        network: "Creative + tech Telegram groups. Strong personal IG presence.",
        play: "Telegram personal invites to curated list. IG stories from personal account. Phone calls to top 10.",
        target: "8-10 conversations started",
    },
    {
        person: "Jan",
        channels: ["LinkedIn", "Personal DMs", "Tech communities"],
        network: "Tech community connections. Builder network.",
        play: "LinkedIn post about what he's building. DMs to builder/operator contacts.",
        target: "5-8 conversations started",
    },
    {
        person: "Andrea / Eduard",
        channels: ["Email", "Partner networks", "SWC channels"],
        network: "B2B partner network. Corporate contacts. SWC client base.",
        play: "Partner outreach emails with one-pagers attached. Company-level invitations.",
        target: "5-8 companies contacted",
    },
    {
        person: "Tepi / Sasha",
        channels: ["Email list", "Social content", "IG (Research Lab)"],
        network: "Toolkit subscriber base (~350). Research Lab IG followers.",
        play: "Email sequence to subscribers. Social content for brand channels. DM engaged followers.",
        target: "Email sent + 10 DMs to engaged followers",
    },
    {
        person: "Friends (3-4)",
        channels: ["Their own platforms"],
        network: "Each friend's unique audience segment",
        play: "Free entry. They share authentically: 'I'm going to this thing.' Not promotional — genuine.",
        target: "1 story/post each",
    },
]

const OUTREACH_TRACKER_TEMPLATE = [
    { name: "[Contact Name]", segment: "Agency", channel: "LinkedIn DM", owner: "Roman", status: "Reached out", response: "—", followUp: "Feb 20", notes: "Runs digital agency, 15 people" },
    { name: "[Contact Name]", segment: "Finance", channel: "Telegram", owner: "Roland", status: "Interested", response: "Wants more info", followUp: "Feb 19", notes: "Works at fintech startup" },
    { name: "[Contact Name]", segment: "Creative", channel: "IG DM", owner: "Roland", status: "Confirmed", response: "Bought ticket", followUp: "—", notes: "Photographer, uses AI for editing" },
    { name: "[Contact Name]", segment: "Builder", channel: "Call", owner: "Jan", status: "Maybe", response: "Checking calendar", followUp: "Feb 21", notes: "Solo founder, SaaS product" },
    { name: "[Contact Name]", segment: "Executive", channel: "Email", owner: "Andrea", status: "No response", response: "—", followUp: "Feb 22", notes: "Head of innovation, bank" },
]

const OUTREACH_TEMPLATES = [
    {
        tier: "Kamaráti",
        tierEn: "Friends & Inner Circle",
        tone: "Tykanie. Osobné. Ako keby si písal kamarátovi.",
        templates: [
            {
                label: "Univerzálna",
                audience: "Ktokoľvek z tvojho okolia",
                message: "Čau [meno], 26.2. robíme v Bratislave jednu vec — THE MINDSHIFT. 40 ľudí, jeden večer, AI ale nie pre začiatočníkov. Napadlo ma, že by ťa to mohlo zaujať. Ak jo, hodím ti viac info. Ak nie, žiadny stres.",
            },
            {
                label: "Kreatívci",
                audience: "Dizajnéri, marketéri, content ľudia",
                message: "Čau [meno], 26.2. robíme THE MINDSHIFT — AI workshop pre 40 ľudí v BA. Roland tam bude hovoriť o vkuse a o tom, čo odlišuje dobrú prácu od priemernej, keď nástroje má každý. Myslím, že presne tvoja téma. Prídeš?",
            },
            {
                label: "Biznis / Founders",
                audience: "Podnikatelia, manažéri, lídri",
                message: "Čau [meno], 26.2. robíme prvý live event — THE MINDSHIFT. 40 ľudí, 3.5h, žiadne básičky. Ako reálne pracovať s AI, rozhodovať sa rýchlejšie a nestratiť sa v tom. Daj vedieť, ak chceš miesto.",
            },
        ],
    },
    {
        tier: "Network",
        tierEn: "Partners & Colleagues",
        tone: "Tykanie alebo vykanie podľa vzťahu. Teplý ale profesionálny.",
        templates: [
            {
                label: "Osobná správa",
                audience: "Človek ktorého poznáš z biznisu",
                message: "Ahoj [meno], organizujeme 26.2. v Bratislave THE MINDSHIFT — AI workshop pre 40 ľudí. Nie teória, nie prompty. Praktický pohľad na to, ako s AI reálne pracovať a rozhodovať sa lepšie. Myslím, že by ťa to mohlo zaujať. Pošlem ti viac, ak chceš.",
            },
            {
                label: "Pre tím / firmu",
                audience: "HR, team lead, CEO — keď chceš aby poslali ľudí",
                message: "Ahoj [meno], 26.2. robíme v BA workshop THE MINDSHIFT — 40 miest, 3.5 hodiny. Pre ľudí, ktorí už s AI pracujú a chcú z toho vyťažiť viac. Akákoľvek pozícia, akékoľvek odvetvie. Myslím, že by to mohlo byť zaujímavé pre váš tím. Ak áno, rád poviem viac.",
            },
            {
                label: "Kreatívna agentúra",
                audience: "Agentúry, štúdiá, produkcie",
                message: "Ahoj [meno], robíme 26.2. v BA workshop THE MINDSHIFT. 40 ľudí, jeden večer — o tom, čo odlišuje dobrú prácu od priemernej, keď AI nástroje má každý. Roland, Ján a Roman — traja ľudia, čo s tým denne pracujú. Myslím, že pre vás super relevantné. Daj vedieť.",
            },
        ],
    },
    {
        tier: "Nový kontakt",
        tierEn: "Cold Outreach",
        tone: "Vykanie. Rešpekt. Žiadny push — len ponuka informácie.",
        templates: [
            {
                label: "Firma — všeobecne",
                audience: "Nový kontakt, firma ktorú nepoznáš",
                message: "Dobrý deň, organizujeme 26. februára v Bratislave workshop THE MINDSHIFT. 40 ľudí, 3.5 hodiny — praktický AI workshop pre ľudí, ktorí s AI už pracujú a chcú z toho vyťažiť viac. Pre akúkoľvek pozíciu, akékoľvek odvetvie. Ak je to téma, ktorú riešite, radi pošleme viac informácií.",
            },
            {
                label: "Kreatívny priemysel",
                audience: "Agentúra, štúdio, produkcia — cold",
                message: "Dobrý deň, sledujeme, čo robíte, a páči sa nám to. 26.2. robíme v Bratislave THE MINDSHIFT — AI workshop pre 40 ľudí. Nie školenie na prompty. O vkuse, rozhodovaní a o tom, čo odlišuje dobrú prácu od priemernej v dobe AI. Ak vás to zaujme — radi povieme viac.",
            },
            {
                label: "Voice note / DM tip",
                audience: "Keď radšej pošleš hlasovku",
                message: "Čau [meno], len krátko — 26.2. robíme v Bratislave AI workshop, 40 ľudí, jeden večer. Nie pre začiatočníkov, skôr pre ľudí, čo už s tým pracujú. Napadlo ma, že by ťa to mohlo zaujať. Keby jo, hodím ti link. Keby nie, pohoda.",
            },
        ],
    },
]

const PARTNER_TARGETS = [
    { sector: "Marketing Agencies", why: "Their teams ARE the target audience. AI is transforming their workflows.", examples: "Digital studios, performance agencies, creative shops", approach: "Team development angle. Group discount for 3+." },
    { sector: "Tech Companies", why: "AI-forward teams. Engineers, PMs, designers already using tools.", examples: "SaaS companies, dev shops, tech consultancies", approach: "Skill upgrade angle. 'Stay ahead of your competition.'" },
    { sector: "Creative Studios", why: "Design, content, video — AI is reshaping every creative workflow.", examples: "Design agencies, production houses, content studios", approach: "Taste + curation angle. 'AI makes everything possible. Taste makes it good.'" },
    { sector: "Finance & Consulting", why: "Data-heavy, process-heavy. AI unlocks massive efficiency.", examples: "Banks, fintechs, consulting firms, accounting", approach: "Efficiency + competitive advantage angle." },
    { sector: "Innovation Hubs", why: "Already curating for their communities. Partnership is natural.", examples: "Coworking spaces, startup incubators, chambers of commerce", approach: "Co-promotion. They share with their community, we give group rate." },
]

const TONE_PRINCIPLES = [
    {
        do: "This is actually happening",
        dont: "BUY TICKETS NOW",
        example: "'We're doing a thing on Feb 26. 40 people, one room. Thought you'd want to know.'",
    },
    {
        do: "Personal invitation",
        dont: "Mass blast",
        example: "'Hey [Name], I specifically thought of you when we were planning this.'",
    },
    {
        do: "Genuine scarcity",
        dont: "Fake urgency",
        example: "'15 seats left — we're keeping it small because we want to talk to everyone.'",
    },
    {
        do: "Let friends share naturally",
        dont: "Give them a script",
        example: "Give free entry, let them post in their own voice. Authenticity > reach.",
    },
    {
        do: "Start conversations",
        dont: "Send links",
        example: "'Do you use AI in your work? Curious about your setup.' → natural transition to invite.",
    },
]

// ── Page ──────────────────────────────────────────────────────────

export default function SalesStrategyPage() {
    const [expandedLayer, setExpandedLayer] = useState<number | null>(1)

    const filledSeats = PIPELINE.confirmed + PIPELINE.preWarmed
    const fillPercent = Math.round((PIPELINE.confirmed / PIPELINE.total) * 100)
    const preWarmPercent = Math.round((PIPELINE.preWarmed / PIPELINE.total) * 100)

    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB] selection:text-white">
            <TopNav />

            <article className="max-w-4xl mx-auto pt-32 pb-24 px-6">

                {/* ── Hero ── */}
                <header className="mb-16 border-b border-black/10 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-4">
                                Sales &amp; Outreach Strategy
                            </p>
                            <h1 className="font-serif text-4xl md:text-6xl italic leading-tight text-black">
                                Fill the Room.
                            </h1>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl md:text-5xl font-bold text-[#0047BB] tracking-tighter">
                                {PIPELINE.total - PIPELINE.confirmed} TO GO
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">
                                {PIPELINE.confirmed} confirmed of {PIPELINE.total}
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-black/50 max-w-xl">
                        Not pushy. Not salesy. Personal invitations, network activation, genuine reach. 
                        This is how 40 seats get filled by the right people.
                    </p>
                </header>

                {/* ── Pipeline Dashboard ── */}
                <section className="mb-16">
                    <SectionLabel>Pipeline Status</SectionLabel>

                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <PipelineCard value={String(PIPELINE.confirmed)} label="Confirmed" sub="Paid tickets" color="green" />
                        <PipelineCard value={String(PIPELINE.preWarmed)} label="Pre-Warmed" sub="Awaiting response" color="blue" />
                        <PipelineCard value={String(PIPELINE.toActivate)} label="To Activate" sub="New outreach needed" color="amber" />
                        <PipelineCard value={String(PIPELINE.total)} label="Target" sub="Total seats" color="black" />
                    </div>

                    {/* Visual pipeline bar */}
                    <div className="border border-black/10 p-4 bg-black/[0.02]">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Pipeline Fill</span>
                        </div>
                        <div className="w-full h-6 bg-black/5 relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-green-500 transition-all"
                                style={{ width: `${fillPercent}%` }}
                            />
                            <div
                                className="absolute top-0 h-full bg-[#0047BB]/40 transition-all"
                                style={{ left: `${fillPercent}%`, width: `${preWarmPercent}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-6 mt-3 text-[10px] font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500" /> Confirmed ({PIPELINE.confirmed})
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#0047BB]/40" /> Pre-warmed ({PIPELINE.preWarmed})
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-black/5 border border-black/10" /> Remaining ({PIPELINE.toActivate})
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 bg-[#0047BB]/5 border border-[#0047BB]/20 p-4 text-sm">
                        <p className="font-bold text-[#0047BB] mb-1">Reality Check</p>
                        <p className="text-black/60">
                            5 confirmed + 15 pre-warmed = solid base. If even half the pre-warmed convert, that{"'"}s 12-13 total. 
                            Need ~25 more from active outreach. Achievable with network activation across all layers.
                        </p>
                    </div>
                </section>

                {/* ── Buyer Portraits ── */}
                <section className="mb-16">
                    <SectionLabel>Who We{"'"}re Selling To</SectionLabel>
                    <p className="text-sm text-black/40 mb-6">
                        Not beginners. People who already work with AI and want to get meaningfully better. 
                        Business-minded practitioners across sectors.
                    </p>

                    <div className="space-y-4">
                        {BUYER_PORTRAITS.map((portrait) => (
                            <div key={portrait.id} className="border border-black/10 overflow-hidden">
                                <div className="bg-black/[0.02] p-4 flex items-center justify-between border-b border-black/10">
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-bold">{portrait.label}</span>
                                        <span className="text-[10px] font-bold tracking-widest text-[#0047BB]">{portrait.size}</span>
                                    </div>
                                </div>
                                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Who</p>
                                        <p className="text-sm text-black/70">{portrait.who}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Signal</p>
                                        <p className="text-sm text-black/70">{portrait.signal}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Where to find</p>
                                        <p className="text-sm text-black/70">{portrait.where}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Hook</p>
                                        <p className="text-sm text-black/70 italic">{portrait.hook}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Activation Architecture ── */}
                <section className="mb-16">
                    <SectionLabel>Activation Architecture</SectionLabel>
                    <p className="text-sm text-black/40 mb-2">
                        Five layers. Inner circle first (highest conversion), then expand outward.
                    </p>
                    <p className="text-2xl font-serif italic text-[#0047BB] mb-8">
                        Close in, then fan out.
                    </p>

                    <div className="space-y-3">
                        {ACTIVATION_LAYERS.map((layer) => (
                            <div key={layer.layer} className="border border-black/10 overflow-hidden">
                                <button
                                    onClick={() => setExpandedLayer(expandedLayer === layer.layer ? null : layer.layer)}
                                    className="w-full p-4 flex items-center justify-between hover:bg-black/[0.02] transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 flex items-center justify-center bg-[#0047BB] text-white text-sm font-bold">
                                            {layer.layer}
                                        </span>
                                        <div>
                                            <span className="font-bold">{layer.name}</span>
                                            <span className="text-sm text-black/40 ml-3">{layer.desc}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="text-sm font-bold text-[#0047BB]">{layer.expectedSeats} seats</span>
                                        <span className="text-black/30">{expandedLayer === layer.layer ? "−" : "+"}</span>
                                    </div>
                                </button>

                                {expandedLayer === layer.layer && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="border-t border-black/10 p-4 bg-black/[0.01]"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Actions</p>
                                                <ul className="space-y-2">
                                                    {layer.actions.map((action, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-black/70">
                                                            <span className="text-[#0047BB] mt-0.5 shrink-0">{">"}</span>
                                                            {action}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Owners</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {layer.owners.map((owner) => (
                                                        <span key={owner} className="px-2 py-1 bg-black/5 text-sm font-bold">{owner}</span>
                                                    ))}
                                                </div>
                                                <div className="mt-4">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Expected conversion</p>
                                                    <p className="text-sm font-bold text-[#0047BB]">{layer.conversion}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Effort</p>
                                                <p className="text-sm font-bold">{layer.effort}</p>
                                                <div className="mt-4">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Expected seats</p>
                                                    <p className="text-2xl font-serif text-[#0047BB]">{layer.expectedSeats}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 p-4 bg-green-50 border border-green-200 text-sm">
                        <p className="font-bold text-green-800 mb-1">Math checks out</p>
                        <p className="text-green-700/70">
                            Layers 1-5 combined = 24-39 expected seats. With 5 confirmed + 15 pre-warmed (assume 50% convert = 7-8), 
                            total realistic range = 36-52. We have more than enough pipeline — execution is the bottleneck.
                        </p>
                    </div>
                </section>

                {/* ── Network Map ── */}
                <section className="mb-16">
                    <SectionLabel>Network Map — Who Does What</SectionLabel>
                    <p className="text-sm text-black/40 mb-6">
                        Not all Roland{"'"}s. Not all Roman{"'"}s. Everyone has a network. This is the combined view.
                    </p>

                    <div className="border border-black/10 overflow-hidden">
                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[100px_150px_1fr_120px] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Who</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10 hidden md:block">Channels</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Play</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 hidden md:block">Target</div>
                        </div>
                        {NETWORK_MAP.map((row, i) => (
                            <div key={i} className="grid grid-cols-[100px_1fr] md:grid-cols-[100px_150px_1fr_120px] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 bg-black/[0.01]">{row.person}</div>
                                <div className="p-3 text-black/50 border-r border-black/10 hidden md:block">
                                    {row.channels.map((ch, j) => (
                                        <div key={j} className="text-xs">{ch}</div>
                                    ))}
                                </div>
                                <div className="p-3 text-black/70 border-r border-black/10">{row.play}</div>
                                <div className="p-3 text-[#0047BB] font-bold text-xs hidden md:block">{row.target}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── The Friend Play ── */}
                <section className="mb-16 bg-[#0047BB] text-white p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-serif text-2xl md:text-3xl italic">The Friend Play</h2>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">High Leverage</span>
                    </div>
                    <p className="text-sm text-white/60 mb-8">
                        Pick 3-4 friends with real networks in target segments. 
                        Give them free entry. Ask one thing: share that this is happening. 
                        Not a script. Not a promo. Just genuine: &quot;I&apos;m going to this.&quot;
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/10 border border-white/20 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">How to pick</p>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>{">"} Active on social (IG stories, LinkedIn posts)</li>
                                <li>{">"} Network overlaps with your buyer segments</li>
                                <li>{">"} Genuine interest in AI / tech / creativity</li>
                                <li>{">"} Would actually attend (not just post and ghost)</li>
                            </ul>
                        </div>
                        <div className="bg-white/10 border border-white/20 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">The ask</p>
                            <div className="text-sm text-white/80 space-y-3 italic">
                                <p>&quot;Hey, we&apos;re doing THE MINDSHIFT on Feb 26 — 40 people, AI workshop. 
                                   I&apos;d love you there. Free seat, on us.&quot;</p>
                                <p>&quot;Only thing I&apos;d ask — if you think it&apos;s relevant, share that it&apos;s happening 
                                   with your people. No script, no promo. Just real.&quot;</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Why this works</p>
                        <p className="text-sm text-white/70">
                            Trust is peer-mediated (Edelman 2025). People trust &quot;someone like me&quot; more than brands. 
                            One friend posting &quot;I&apos;m going to this&quot; converts better than 10 branded posts.
                        </p>
                    </div>
                </section>

                {/* ── Tone / Anti-Pushy Playbook ── */}
                <section className="mb-16">
                    <SectionLabel>The Non-Pushy Playbook</SectionLabel>
                    <p className="text-sm text-black/40 mb-6">
                        How we talk about this. Not sales scripts. Conversations.
                    </p>

                    <div className="border border-black/10 overflow-hidden">
                        <div className="grid grid-cols-[1fr_1fr_2fr] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-green-600 border-r border-black/10">Do this</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-red-500 border-r border-black/10">Not this</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Example</div>
                        </div>
                        {TONE_PRINCIPLES.map((row, i) => (
                            <div key={i} className="grid grid-cols-[1fr_1fr_2fr] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold text-green-700 border-r border-black/10">{row.do}</div>
                                <div className="p-3 text-red-500/70 line-through border-r border-black/10">{row.dont}</div>
                                <div className="p-3 text-black/60 italic">{row.example}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Outreach Templates ── */}
                <section className="mb-16">
                    <SectionLabel>Outreach Templates — Skopíruj &amp; Pošli</SectionLabel>
                    <p className="text-sm text-black/40 mb-6">
                        Správy v slovenčine. Podľa vzťahu a segmentu. Skopíruj, uprav meno, pošli.
                    </p>

                    <div className="space-y-8">
                        {OUTREACH_TEMPLATES.map((tier, ti) => (
                            <div key={ti}>
                                <div className="flex items-baseline gap-3 mb-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-[#0047BB] text-white text-sm font-bold">
                                        {ti + 1}
                                    </span>
                                    <div>
                                        <span className="font-bold text-lg">{tier.tier}</span>
                                        <span className="text-sm text-black/40 ml-2">{tier.tierEn}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-black/40 italic mb-3 ml-11">{tier.tone}</p>

                                <div className="space-y-3 ml-11">
                                    {tier.templates.map((tmpl, i) => (
                                        <div key={i} className="border border-black/10 overflow-hidden">
                                            <div className="bg-black/[0.02] px-4 py-2 flex items-center justify-between border-b border-black/10">
                                                <span className="font-bold text-sm">{tmpl.label}</span>
                                                <span className="text-[10px] font-bold tracking-widest text-black/30">{tmpl.audience}</span>
                                            </div>
                                            <div className="p-4 bg-white">
                                                <p className="text-sm text-black/80 leading-relaxed whitespace-pre-wrap">{tmpl.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-amber-50 border border-amber-200 p-4 text-sm">
                        <p className="font-bold text-amber-800 mb-1">Pravidlo #1</p>
                        <p className="text-amber-700/70">
                            Vždy uprav meno a detail. Nikdy nepošli generickú správu. 
                            Lepšie 5 osobných správ ako 50 copy-paste.
                        </p>
                    </div>
                </section>

                {/* ── Partner Company Outreach ── */}
                <section className="mb-16">
                    <SectionLabel>Partner Company Targets</SectionLabel>
                    <p className="text-sm text-black/40 mb-6">
                        Companies from different sectors. Their teams = our audience. Think team development, not event ticket.
                    </p>

                    <div className="space-y-4">
                        {PARTNER_TARGETS.map((partner, i) => (
                            <div key={i} className="border border-black/10 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-bold">{partner.sector}</span>
                                    <span className="text-[10px] font-bold tracking-widest text-[#0047BB] bg-[#0047BB]/10 px-2 py-1">
                                        SECTOR {i + 1}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Why</p>
                                        <p className="text-black/70">{partner.why}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Examples</p>
                                        <p className="text-black/70">{partner.examples}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Approach</p>
                                        <p className="text-black/70 italic">{partner.approach}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Outreach Tracker ── */}
                <section className="mb-16">
                    <SectionLabel>Outreach Tracker — Template</SectionLabel>
                    <p className="text-sm text-black/40 mb-2">
                        Track every DM, call, and email. Who was reached, what they said, what{"'"}s next.
                    </p>
                    <p className="text-sm text-black/40 mb-6">
                        Copy this to a shared Google Sheet or Notion board. Update daily.
                    </p>

                    <div className="border border-black/10 overflow-x-auto">
                        <table className="w-full text-sm min-w-[800px]">
                            <thead className="bg-black/[0.02] border-b border-black/10">
                                <tr>
                                    {["Name", "Segment", "Channel", "Owner", "Status", "Response", "Follow-up", "Notes"].map((col) => (
                                        <th key={col} className="p-3 text-left text-[10px] font-bold uppercase tracking-widest text-black/40">{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {OUTREACH_TRACKER_TEMPLATE.map((row, i) => (
                                    <tr key={i} className="border-b border-black/10 last:border-0">
                                        <td className="p-3 font-bold">{row.name}</td>
                                        <td className="p-3 text-black/60">{row.segment}</td>
                                        <td className="p-3 text-black/60">{row.channel}</td>
                                        <td className="p-3 font-bold">{row.owner}</td>
                                        <td className="p-3">
                                            <StatusTag status={row.status} />
                                        </td>
                                        <td className="p-3 text-black/60">{row.response}</td>
                                        <td className="p-3 text-[#0047BB]">{row.followUp}</td>
                                        <td className="p-3 text-black/40 text-xs">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3">
                        {[
                            { label: "Reached out", color: "bg-black/10 text-black/60" },
                            { label: "Interested", color: "bg-[#0047BB]/10 text-[#0047BB]" },
                            { label: "Confirmed", color: "bg-green-100 text-green-700" },
                            { label: "Maybe", color: "bg-amber-100 text-amber-700" },
                            { label: "No response", color: "bg-red-50 text-red-600" },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-2">
                                <span className={cn("text-[9px] font-bold uppercase tracking-widest px-2 py-0.5", s.color)}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── What to Activate Now ── */}
                <section className="mb-16 bg-black text-white p-6 md:p-8">
                    <h2 className="font-serif text-2xl md:text-3xl italic mb-2">What to Activate — Right Now</h2>
                    <p className="text-sm text-white/40 mb-8">High-level action plan. Not daily tasks — strategic levers.</p>

                    <div className="space-y-6">
                        <ActionBlock
                            num="01"
                            title="Convert the Pre-Warmed 15"
                            desc="These people already know about it. They're the lowest-hanging fruit."
                            actions={[
                                "Personal follow-up to each one — call or voice note, not text",
                                "Create urgency naturally: 'Just wanted to check if you're still thinking about it'",
                                "If they're a 'maybe', ask what's holding them back and address it",
                                "Goal: convert 8-10 of the 15 this week",
                            ]}
                        />
                        <ActionBlock
                            num="02"
                            title="Activate Inner Circle DMs"
                            desc="Each founder reaches out to 15-20 personal contacts. Not a blast — individual messages."
                            actions={[
                                "Roman: 15 LinkedIn DMs + voice notes this week",
                                "Roland: 15 Telegram personal invites + calls to top 5",
                                "Jan: 10 DMs to builder/tech contacts",
                                "Frame as invitation, not promotion",
                            ]}
                        />
                        <ActionBlock
                            num="03"
                            title="Deploy the Friend Play"
                            desc="Pick 3-4 friends today. Reach out tonight. Free entry."
                            actions={[
                                "Identify friends with networks in agency / finance / creative / tech",
                                "Personal message: 'Free seat, would love you there, share if relevant'",
                                "They post by end of week — their voice, their way",
                            ]}
                        />
                        <ActionBlock
                            num="04"
                            title="Partner Company Outreach"
                            desc="5-8 companies this week. Team development angle."
                            actions={[
                                "Andrea/Eduard send personalized emails to target companies",
                                "Attach one-pager (public version)",
                                "Offer: 3+ seats = group rate",
                                "Follow up with a call if they respond",
                            ]}
                        />
                        <ActionBlock
                            num="05"
                            title="Email List Activation"
                            desc="Toolkit subscribers are warm. They've been getting free value for months."
                            actions={[
                                "Send focused email: 'This is the live version of what we've been sending you'",
                                "Not a newsletter — a direct invitation",
                                "Include social proof: who's already confirmed, what segments are represented",
                            ]}
                        />
                        <ActionBlock
                            num="06"
                            title="Social as Amplifier (Not Primary)"
                            desc="Social creates awareness. DMs create conversions. Don't confuse the two."
                            actions={[
                                "Roman: 1-2 LinkedIn posts this week (thought leadership, not sales)",
                                "Roland: IG stories from personal account",
                                "Research Lab IG: daily stories with countdown / BTS / segments",
                                "Every post is conversation fuel, not a sales pitch",
                            ]}
                        />
                    </div>
                </section>

                {/* ── Feedback Loop ── */}
                <section className="mb-16 bg-[#0047BB]/5 border border-[#0047BB]/20 p-6">
                    <h2 className="font-serif text-2xl italic text-[#0047BB] mb-4">Feedback Loop</h2>
                    <p className="text-sm text-black/50 mb-6">
                        Every conversation is data. Track patterns, adjust approach.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white border border-black/10 p-4">
                            <p className="font-bold text-sm mb-2">Listen for</p>
                            <ul className="space-y-1 text-sm text-black/60">
                                <li>{">"} &quot;Sounds interesting but...&quot; (objection = data)</li>
                                <li>{">"} &quot;When is it exactly?&quot; (interested, needs logistics)</li>
                                <li>{">"} &quot;Can I bring someone?&quot; (network multiplier)</li>
                                <li>{">"} &quot;Not for me but I know someone&quot; (referral)</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-black/10 p-4">
                            <p className="font-bold text-sm mb-2">Adjust if</p>
                            <ul className="space-y-1 text-sm text-black/60">
                                <li>{">"} Everyone says &quot;wrong timing&quot; → is Feb 26 the issue?</li>
                                <li>{">"} Price objections coming up → test &quot;bring a friend&quot; discount</li>
                                <li>{">"} People don&apos;t get the format → clarify in messaging</li>
                                <li>{">"} One segment converts way better → double down there</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-black/10 p-4">
                            <p className="font-bold text-sm mb-2">Daily pulse</p>
                            <ul className="space-y-1 text-sm text-black/60">
                                <li>{">"} How many new conversations started?</li>
                                <li>{">"} How many moved to &quot;interested&quot; or &quot;confirmed&quot;?</li>
                                <li>{">"} What objections came up?</li>
                                <li>{">"} Who said &quot;I know someone&quot;? Follow up.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── Key Insight ── */}
                <section className="mb-16 text-center py-12 border-t border-b border-black/10">
                    <p className="text-2xl md:text-3xl font-serif italic text-black/80 max-w-2xl mx-auto leading-relaxed">
                        &quot;You don&apos;t need 10,000 followers. You need 40 people in a room 
                        who each know 3 friends who&apos;d benefit.&quot;
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-6">
                        Networks &gt; Audiences. Conversations &gt; Broadcasts.
                    </p>
                </section>

                <footer className="border-t border-black/10 pt-8 text-center">
                    <p className="text-sm text-black/30">
                        Living document. Update pipeline numbers and tracker as conversations happen.
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/15 mt-4">
                        SORRYWECAN // RESEARCH LAB // SALES STRATEGY // 2026
                    </p>
                </footer>

            </article>
        </div>
    )
}

// ── Components ────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-serif text-2xl md:text-3xl italic mb-2 text-black">{children}</h2>
    )
}

function PipelineCard({ value, label, sub, color }: {
    value: string, label: string, sub: string, color: string
}) {
    const colors: Record<string, string> = {
        green: "text-green-600",
        blue: "text-[#0047BB]",
        amber: "text-amber-600",
        black: "text-black",
    }
    return (
        <div className="border border-black/10 p-4 text-center">
            <p className={cn("text-3xl font-serif", colors[color] || colors.black)}>{value}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">{label}</p>
            <p className="text-[10px] text-black/30 mt-0.5">{sub}</p>
        </div>
    )
}

function StatusTag({ status }: { status: string }) {
    const styles: Record<string, string> = {
        "Reached out": "bg-black/10 text-black/60",
        "Interested": "bg-[#0047BB]/10 text-[#0047BB]",
        "Confirmed": "bg-green-100 text-green-700",
        "Maybe": "bg-amber-100 text-amber-700",
        "No response": "bg-red-50 text-red-600",
    }
    return (
        <span className={cn(
            "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5",
            styles[status] || "bg-black/10 text-black/60"
        )}>
            {status}
        </span>
    )
}

function ActionBlock({ num, title, desc, actions }: {
    num: string, title: string, desc: string, actions: string[]
}) {
    return (
        <div className="border-l-2 border-white/30 pl-6">
            <div className="flex items-baseline gap-3 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">{num}</span>
            </div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-sm text-white/50 mb-4">{desc}</p>
            <ul className="space-y-2">
                {actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="w-4 h-4 border border-white/30 rounded-sm mt-0.5 shrink-0" />
                        <span>{action}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
