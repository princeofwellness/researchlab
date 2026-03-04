"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function OverlappingCircles({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" className={cn("absolute opacity-[0.1]", className)} fill="none">
            <title>Overlapping circles</title>
            <circle cx="80" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
            <circle cx="120" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="80" r="70" stroke="currentColor" strokeWidth="1" />
        </svg>
    )
}

function DotGrid({ className, cols = 12, rows = 8 }: { className?: string; cols?: number; rows?: number }) {
    const dots = []
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dots.push(<circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="1.5" fill="currentColor" />)
        }
    }
    return (
        <svg viewBox={`0 0 ${cols * 20} ${rows * 20}`} className={cn("absolute opacity-[0.09]", className)}>
            <title>Dot grid</title>
            {dots}
        </svg>
    )
}

function DiagonalLines({ className }: { className?: string }) {
    const offsets = Array.from({ length: 22 }, (_, i) => i * 25)
    return (
        <svg viewBox="0 0 400 300" className={cn("absolute opacity-[0.08]", className)} fill="none">
            <title>Diagonal lines</title>
            {offsets.map((offset) => (
                <line key={`line-${offset}`} x1={offset} y1="0" x2={offset + 300} y2="300" stroke="currentColor" strokeWidth="0.6" />
            ))}
        </svg>
    )
}

function ConcentricRings({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 300 300" className={cn("absolute opacity-[0.09]", className)} fill="none">
            <title>Concentric rings</title>
            {[30, 60, 90, 120, 150].map((r) => (
                <circle key={r} cx="150" cy="150" r={r} stroke="currentColor" strokeWidth="0.5" />
            ))}
        </svg>
    )
}

function HexGrid({ className }: { className?: string }) {
    const hexPath = (cx: number, cy: number, r: number) => {
        const pts = Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i - Math.PI / 6
            return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
        })
        return `M${pts.join("L")}Z`
    }

    const hexes = []
    const r = 20
    const dx = r * Math.sqrt(3)
    const dy = r * 1.5

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 8; col++) {
            const cx = col * dx + (row % 2 === 1 ? dx / 2 : 0) + r
            const cy = row * dy + r
            hexes.push(<path key={`${row}-${col}`} d={hexPath(cx, cy, r - 2)} stroke="currentColor" strokeWidth="0.55" fill="none" />)
        }
    }

    return (
        <svg viewBox="0 0 300 200" className={cn("absolute opacity-[0.08]", className)}>
            <title>Hex grid</title>
            {hexes}
        </svg>
    )
}

function TriangleAccent({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={cn("absolute opacity-[0.1]", className)} fill="none">
            <title>Triangle accent</title>
            <polygon points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="0.85" />
            <polygon points="50,25 80,85 20,85" stroke="currentColor" strokeWidth="0.55" />
        </svg>
    )
}

function OrganicBlob({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 300 240" className={cn("absolute opacity-[0.1]", className)} fill="none">
            <title>Organic blob</title>
            <path
                d="M59.1,58.2C88.7,28.9,140.8,12.5,185.6,27.4C230.3,42.4,267.9,88.8,266.5,132.8C265,176.7,224.5,218.2,177.6,225.7C130.6,233.2,77.2,206.9,51.8,165.6C26.4,124.3,29.4,87.5,59.1,58.2Z"
                stroke="currentColor"
                strokeWidth="1"
            />
            <path
                d="M88.3,78.4C108.7,56.7,146.4,45.4,178.6,56.8C210.9,68.2,237.5,102.4,235.9,134.4C234.2,166.5,204.2,196.4,170.4,202.2C136.5,208,98.8,189.8,81.2,159.8C63.5,129.9,67.9,100.1,88.3,78.4Z"
                stroke="currentColor"
                strokeWidth="0.6"
            />
        </svg>
    )
}

function Railwave({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 460 160" className={cn("absolute opacity-[0.11]", className)} fill="none">
            <title>Rail wave</title>
            <path d="M0 110C70 50 140 50 210 110C280 170 350 170 460 70" stroke="currentColor" strokeWidth="1.2" />
            <path d="M0 140C70 80 140 80 210 140C280 200 350 200 460 100" stroke="currentColor" strokeWidth="0.7" />
            <path d="M0 80C70 20 140 20 210 80C280 140 350 140 460 40" stroke="currentColor" strokeWidth="0.7" />
        </svg>
    )
}

function ToolkitPage({ children, num, className, id }: { children: React.ReactNode; num: string; className?: string; id?: string }) {
    return (
        <section
            id={id}
            className={cn(
                "toolkit-page w-full min-h-[70vh] md:aspect-[16/10] md:min-h-0 p-8 md:p-12 lg:p-16 relative overflow-hidden border-b border-black/10 flex flex-col justify-center",
                className
            )}
        >
            <span className="absolute top-6 right-8 text-[10px] font-code-brand font-bold tracking-[0.3em] text-black/15 print:text-black/10">
                {num}
            </span>
            {children}
        </section>
    )
}

export default function ShiftToolkitPage() {
    const [lang, setLang] = useState<"en" | "sk">("en")
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = () => {
        window.print()
    }

    const t = {
        en: {
            cover: {
                label: "MINDSHIFT TOOLKIT",
                title: "Rise of the Builders",
                edition: "Edition 01 · February 2026",
                subtitle: "3.5 hours of insight, distilled into what matters.",
                note: "A toolkit from the speakers, for the builders.",
                railHint: "As railways commoditized transport, AI is commoditizing intelligence.",
            },
            thesis: {
                label: "THE THESIS",
                quote: "The most significant organizational shift of this decade is the transformation of the 'knower' into the 'doer'.",
                sub: "In the agentic AI era, everybody can build.",
                commoditization: {
                    title: "Intelligence Commoditization",
                    body: "The first industrial revolution amplified physical force. This one scales cognitive force. Intelligence itself becomes infrastructure.",
                    analogy: "Roman's railway analogy: owning rails mattered less over time than knowing where to go and why.",
                    sputnik: "Today's AI investment wave mirrors the Sputnik effect: strategic urgency, national competition, and massive acceleration.",
                },
                pillars: [
                    { num: "01", title: "Taste", speaker: "Roland", desc: "What separates good from unforgettable." },
                    { num: "02", title: "Leverage", speaker: "Ján", desc: "What one person can build today." },
                    { num: "03", title: "Clarity", speaker: "Roman", desc: "What stays human. What to delegate." },
                ],
            },
            taste: {
                label: "ACT 1",
                title: "Taste",
                speaker: "Roland Vraník · Creative Director, SORRYWECAN",
                insight:
                    "Give 10 people a camera. Only one gets a great shot. Same with AI. We all have the same tools. The difference is taste.",
                points: [
                    {
                        title: "Quality recognition > Generation",
                        desc: "Generating is easy. Knowing what's good is hard. Years of experience shape the eye for light, sound, composition.",
                    },
                    {
                        title: "Taste is a skill",
                        desc: "Somebody has it, somebody doesn't - but we can develop it. Study the greats. Curate obsessively. Notice what others miss.",
                    },
                    {
                        title: "Outsource inspiration, not judgment",
                        desc: "Get the Christopher Nolan look. The Salvador Dali texture. Great artists become your living reference library.",
                    },
                    {
                        title: "Build to learn",
                        desc: "Go to Midjourney. Process. Cut. Try again. Try again. Try again. There is no faster way to learn than building.",
                    },
                ],
                pullQuote: "The best way to learn has always been to build.",
            },
            leverage: {
                label: "ACT 2",
                title: "Leverage",
                speaker: "Ján Koscelanský · CPO & Co-founder, SUDOLABS",
                insight:
                    "What didn't need to be built, or was costly to build - now can be built. And by doing it, teams learn, engage, and move faster.",
                points: [
                    {
                        title: "The Gutenberg moment",
                        desc: "Like the printing press eliminated scribes but created authors, AI removes repetition but creates a new builder class.",
                    },
                    {
                        title: "Team evolution",
                        desc: "2012: 100 people. 2020: 8 people. 2026: 2 people - Product Architect + AI Engineer.",
                    },
                    {
                        title: "Context > Models",
                        desc: "Great results come from deep context, not from chasing every new model release.",
                    },
                    {
                        title: "Personal AI",
                        desc: "Build your own AI companion. Rules, memory, identity. The relationship is the multiplier.",
                    },
                ],
                pullQuote: "Coding is solved. 90% generated. The question is: what's worth building?",
                gutenberg: {
                    leftTitle: "Printing Press",
                    leftDesc: "Knowledge became reproducible. Authority decentralized.",
                    rightTitle: "Agentic AI",
                    rightDesc: "Execution becomes reproducible. Capability decentralizes.",
                },
            },
            clarity: {
                label: "ACT 3",
                title: "Clarity",
                speaker: "Roman Pii Wagner · Transformational Design",
                insight:
                    "If we can do anything and anything is possible - what do we even want to do? The doing is now the easy part. Knowing what to build is hard.",
                points: [
                    {
                        title: "Option paralysis",
                        desc: "When everything is possible, we freeze. The antidote is a goal strong enough to survive continuous change.",
                    },
                    {
                        title: "Turn inward",
                        desc: "Data tells us what works. Trends tell us what is hot. Entrepreneurs still need inner orientation.",
                    },
                    {
                        title: "Goodhart's Paradox x AI",
                        desc: "When a KPI becomes the goal, it stops being a good measure. AI can maximize the metric while abandoning ethics.",
                    },
                    {
                        title: "Business model blindspot",
                        desc: "In a survey of 150 Slovak SMBs, none could imagine how fundamentally their business model could change.",
                    },
                    {
                        title: "AI-first paradox",
                        desc: "If you want to become AI-first, you must first build with humans and for humans.",
                    },
                ],
                pullQuote: "The thinking is the differentiator. Not the tools.",
            },
            humanEdge: {
                label: "THE HUMAN EDGE",
                title: "What Machines Cannot Own",
                intro:
                    "Roman's core message: the frontier is not only outside us. The next advantage is developing human capacities as intentionally as we develop AI systems.",
                themes: [
                    {
                        title: "Consciousness & intuition",
                        desc: "There are 300+ theories of consciousness. Instead of waiting for one answer, train intuition as a practical skill.",
                    },
                    {
                        title: "Harari's investment ratio",
                        desc: "If we invested EUR1 into human potential for every EUR1 in AI, the trajectory of society would change dramatically.",
                    },
                    {
                        title: "Responsibility delegation",
                        desc: "Anthropic's 1.5M chat study suggests humans quickly delegate responsibility to perceived cognitive superiors.",
                    },
                    {
                        title: "The 10% trait",
                        desc: "Entrepreneurs accept responsibility beyond their control. They move before certainty. That is the human edge.",
                    },
                ],
                paths: [
                    {
                        title: "Path 1 · Second Brain",
                        desc: "Build autonomous agents that expand your operational range. Let software carry repetitive cognitive load.",
                    },
                    {
                        title: "Path 2 · Inner Development",
                        desc: "Train presence, intuition, and ethical discernment. In an age of abundant execution, orientation is premium.",
                    },
                ],
            },
            timeline: {
                label: "THE AI LANDSCAPE",
                title: "Five Years That Changed Everything",
                events: [
                    { year: "2022", title: "Intelligence as Product", desc: "ChatGPT launches. AI becomes a consumer layer." },
                    { year: "2023", title: "Reasoning Gets Reliable", desc: "GPT-4 makes complex task chains practical." },
                    { year: "2024", title: "Execution Engines", desc: "Agents emerge. AI starts doing, not only answering." },
                    { year: "2025", title: "Coding Is Solved", desc: "Tooling crosses the threshold. 90% generated code becomes normal." },
                    {
                        year: "2026",
                        title: "Organization Rewrites",
                        desc: "Teams, products, and business architecture get redesigned around machine collaboration.",
                    },
                ],
                stat: {
                    value: "30-50%",
                    label: "job disruption expected in the next 3-5 years",
                    sub: "This is not just labor displacement. It is a rewrite of role definition and identity.",
                },
                neuro: "The parallel frontier is neurobiological: consciousness, cognition, and attention become strategic business topics.",
            },
            shifts: {
                label: "PARADIGM SHIFTS",
                title: "What Changed",
                items: [
                    { from: "Specialist", to: "Generalist", note: "Breadth beats depth in early AI-native execution." },
                    { from: "Information", to: "Intuition & Taste", note: "Everyone has access. Few have discernment." },
                    { from: "Knowers", to: "Builders", note: "Knowing is free. Shipping is edge." },
                    { from: "Best Model", to: "Deep Context", note: "Prompting quality follows context quality." },
                    { from: "Learning About", to: "Learning By Doing", note: "Build the artifact. Build understanding." },
                    { from: "Worrying", to: "Building", note: "Even obsolete outputs create durable capability." },
                ],
            },
            tools: {
                label: "THE TOOLKIT",
                title: "What We Use",
                subtitle: "It does not need to be the best model. It needs to be the right experiment.",
                categories: [
                    {
                        name: "Building",
                        items: [
                            { tool: "Claude Code", note: "Go-to for end-to-end app builds" },
                            { tool: "Cursor", note: "AI IDE for serious implementation" },
                            { tool: "Gemini Pro", note: "Strong frontend support and visual quality" },
                            { tool: "Vercel", note: "Fast deployment loop for product testing" },
                        ],
                    },
                    {
                        name: "Creating",
                        items: [
                            { tool: "Midjourney", note: "Image generation and aesthetic exploration" },
                            { tool: "Kling", note: "Video model with strong motion results" },
                            { tool: "Nano Banana", note: "Experimental format play and prototyping" },
                        ],
                    },
                    {
                        name: "Thinking",
                        items: [
                            { tool: "Obsidian", note: "Knowledge architecture and synthesis" },
                            { tool: "Personal AI (Solas)", note: "Reflection, journaling, planning companion" },
                            { tool: "X / Twitter", note: "Real-time research and frontier discovery" },
                        ],
                    },
                    {
                        name: "Ops",
                        items: [
                            { tool: "Notion", note: "Execution memory and team rituals" },
                            { tool: "Zapier / Make", note: "Workflow automation between systems" },
                            { tool: "Linear", note: "High-signal product shipping cadence" },
                        ],
                    },
                ],
            },
            principles: {
                label: "THE BUILDER'S FRAMEWORK",
                title: "Principles From the Stage",
                items: [
                    {
                        num: "01",
                        title: "Build first, learn by building",
                        desc: "There is no faster way to learn than to execute and iterate on real outcomes.",
                    },
                    {
                        num: "02",
                        title: "Taste is earned, not downloaded",
                        desc: "Study excellent work. Curate deliberately. Judgment compounds over years.",
                    },
                    {
                        num: "03",
                        title: "Context beats everything",
                        desc: "Deep context, not model novelty, produces useful and coherent outputs.",
                    },
                    {
                        num: "04",
                        title: "The goal must be strong enough",
                        desc: "A resilient goal survives volatility, technology shifts, and uncertainty.",
                    },
                    {
                        num: "05",
                        title: "Stop caring about obsolescence",
                        desc: "Even obsolete products teach durable decision-making and capability.",
                    },
                    {
                        num: "06",
                        title: "Play with everything",
                        desc: "Experiment broadly. The right tool for a job is often contextual, not popular.",
                    },
                    {
                        num: "07",
                        title: "Accept responsibility beyond your control",
                        desc: "The 10% trait: entrepreneurs move without guaranteed outcomes and own consequences anyway.",
                    },
                    {
                        num: "08",
                        title: "Build your second brain",
                        desc: "Autonomous agents and inner development are two paths that eventually converge.",
                    },
                ],
            },
            action: {
                label: "YOUR MONDAY ACTION",
                title: "One Thing. Tomorrow Morning.",
                subtitle: "Do not take fifty notes. Take one committed move.",
                actions: [
                    {
                        domain: "If you are a creative",
                        action: "Open Midjourney. Recreate a piece you admire. Write down what still feels wrong - that is your taste developing.",
                    },
                    {
                        domain: "If you are a builder",
                        action: "Pick one tool - Claude, Cursor, or Gemini - and ship a tiny product this week.",
                    },
                    {
                        domain: "If you are a leader",
                        action: "Map one process AI should own and one process humans must keep owning.",
                    },
                    {
                        domain: "If you are starting out",
                        action: "Choose one idea and build now. No perfect research phase.",
                    },
                ],
                paths: {
                    title: "Two Paths Forward",
                    first: "Path 1: Second Brain - Build autonomous agents that extend your cognitive and operational capacity.",
                    second: "Path 2: Inner Development - Train intuition, consciousness, and ethical clarity as strategic skills.",
                },
                bottom: "The doing is now the easy part. Start.",
            },
            resources: {
                label: "RESOURCES",
                title: "Keep Going",
                links: [
                    { name: "SORRYWECAN", url: "sorrywecan.com", desc: "Creative studio behind the event" },
                    { name: "SUDOLABS", url: "sudolabs.com", desc: "Custom AI solution builder" },
                    { name: "Research Lab Newsletter", url: "research@sorrywecan.com", desc: "What we are learning, building, and shipping" },
                    { name: "X / Twitter", url: "@sorrywecan", desc: "The fastest place to learn and update context" },
                ],
                stat: "1 capability built this week beats 100 saved links.",
                qr: "Scan for updates",
                closing: "This was Edition 01. The next editions will be co-created by what the community builds next.",
                footer: "MINDSHIFT TOOLKIT · EDITION 01 · FEBRUARY 2026 · SORRYWECAN × SUDOLABS",
            },
            backCover: {
                statement: "The doing is now the easy part. The question is: what's worth building?",
                edition: "Edition 01 · 2026",
            },
        },
        sk: {
            cover: {
                label: "MINDSHIFT TOOLKIT",
                title: "Rise of the Builders",
                edition: "Edition 01 · Február 2026",
                subtitle: "3,5 hodiny insightov, destilovaných do toho podstatného.",
                note: "Toolkit od spíkrov pre ľudí, ktorí stavajú.",
                railHint: "Tak ako železnice skomoditizovali dopravu, AI komoditizuje inteligenciu.",
            },
            thesis: {
                label: "TÉZA",
                quote: "Najvýznamnejší organizačný posun tejto dekády je premena 'toho, kto vie' na 'toho, kto robí'.",
                sub: "V ére agentického AI môže stavať každý.",
                commoditization: {
                    title: "Komoditizácia inteligencie",
                    body: "Prvá priemyselná revolúcia násobila fyzickú silu. Táto násobí kognitívnu silu. Inteligencia sa stáva infraštruktúrou.",
                    analogy: "Romanova analógia železníc: časom nebolo kľúčové vlastniť koľaje, ale vedieť, kam a prečo ideš.",
                    sputnik: "Súčasná vlna AI investícií pripomína Sputnik efekt - strategická urgencia, súťaž štátov a masívna akcelerácia.",
                },
                pillars: [
                    { num: "01", title: "Vkus", speaker: "Roland", desc: "Čo oddeľuje dobré od nezabudnuteľného." },
                    { num: "02", title: "Využitie", speaker: "Ján", desc: "Čo dnes dokáže postaviť jeden človek." },
                    { num: "03", title: "Jasnosť", speaker: "Roman", desc: "Čo zostáva ľudské. Čo delegovať." },
                ],
            },
            taste: {
                label: "AKT 1",
                title: "Vkus",
                speaker: "Roland Vraník · Creative Director, SORRYWECAN",
                insight: "Daj 10 ľuďom kameru. Len jeden urobí výnimočný záber. Pri AI je to rovnaké. Nástroje sú rovnaké, rozdiel robí vkus.",
                points: [
                    {
                        title: "Rozpoznanie kvality > Generovanie",
                        desc: "Generovať je ľahké. Vedieť, čo je dobré, je ťažké. Roky skúseností formujú oko pre svetlo, zvuk a kompozíciu.",
                    },
                    {
                        title: "Vkus je zručnosť",
                        desc: "Niekto ho má prirodzene, no dá sa cielene rozvíjať. Študuj veľkých. Kurátoruj obsesívne. Všímaj si, čo iní prehliadajú.",
                    },
                    {
                        title: "Outsourcuj inšpiráciu, nie úsudok",
                        desc: "Nolanov look. Dalího textúra. Diela veľkých autorov sa stávajú živou referenčnou knižnicou.",
                    },
                    {
                        title: "Stavaj, aby si sa naučil",
                        desc: "Choď do Midjourney. Spracuj. Strihaj. Skús znova. Neexistuje rýchlejší spôsob učenia než stavanie.",
                    },
                ],
                pullQuote: "Najlepší spôsob učenia vždy bol - stavať.",
            },
            leverage: {
                label: "AKT 2",
                title: "Využitie",
                speaker: "Ján Koscelanský · CPO & Co-founder, SUDOLABS",
                insight: "To, čo sa kedysi neoplatilo stavať alebo bolo príliš drahé, je dnes realizovateľné. A tím sa pritom učí rýchlejšie.",
                points: [
                    {
                        title: "Gutenbergov moment",
                        desc: "Tlačiarenský lis odstránil pisárov, no vytvoril autorov. AI odstraňuje repetíciu, no vytvára builderov.",
                    },
                    {
                        title: "Evolúcia tímu",
                        desc: "2012: 100 ľudí. 2020: 8 ľudí. 2026: 2 ľudia - Product Architect + AI Engineer.",
                    },
                    {
                        title: "Kontext > Modely",
                        desc: "Najlepšie výsledky nevznikajú z najnovšieho modelu, ale z hlbokého pochopenia problému.",
                    },
                    {
                        title: "Osobná AI",
                        desc: "Postav si AI partnera. Pravidlá, pamäť, identita. Vzťah je násobič.",
                    },
                ],
                pullQuote: "Coding je vyriešený. 90% generované. Otázka je: čo sa oplatí stavať?",
                gutenberg: {
                    leftTitle: "Tlačiarenský lis",
                    leftDesc: "Znalosti sa dali kopírovať. Autorita sa decentralizovala.",
                    rightTitle: "Agentické AI",
                    rightDesc: "Exekúcia sa dá kopírovať. Schopnosť sa decentralizuje.",
                },
            },
            clarity: {
                label: "AKT 3",
                title: "Jasnosť",
                speaker: "Roman Pii Wagner · Transformational Design",
                insight: "Ak môžeme robiť čokoľvek, čo vlastne chceme robiť? Robenie je ľahšie než kedykoľvek predtým. Náročné je vedieť, čo postaviť.",
                points: [
                    {
                        title: "Paralýza možností",
                        desc: "Keď je možné všetko, zamŕzame. Protilátkou je cieľ taký silný, že prežije aj veľké zmeny.",
                    },
                    {
                        title: "Obráť sa dovnútra",
                        desc: "Dáta povedia, čo funguje. Trendy povedia, čo je hot. Smerovanie však ostáva vnútorná práca.",
                    },
                    {
                        title: "Goodhartov paradox x AI",
                        desc: "Keď sa KPI stane cieľom, prestáva byť dobrým meradlom. AI môže maximalizovať číslo a ignorovať etiku.",
                    },
                    {
                        title: "Slepé miesto biznis modelu",
                        desc: "V prieskume 150 slovenských SMB nevedela ani jedna firma predstaviť, ako zásadne sa môže zmeniť ich model.",
                    },
                    {
                        title: "AI-first paradox",
                        desc: "Ak chceš byť AI-first, najprv musíš vedieť stavať s ľuďmi a pre ľudí.",
                    },
                ],
                pullQuote: "Myslenie je diferenciátor. Nie nástroje.",
            },
            humanEdge: {
                label: "ĽUDSKÁ VÝHODA",
                title: "Čo stroje nevedia vlastniť",
                intro:
                    "Jadro Romanovho odkazu: hranica nie je len mimo nás. Ďalšia výhoda je cielený rozvoj ľudských kapacít, rovnako disciplínovaný ako vývoj AI.",
                themes: [
                    {
                        title: "Vedomie a intuícia",
                        desc: "Existuje 300+ teórií vedomia. Namiesto čakania na jedinú odpoveď trénuj intuíciu ako praktickú zručnosť.",
                    },
                    {
                        title: "Harariho pomer investícií",
                        desc: "Keby sme dali 1 euro do ľudského potenciálu na každé 1 euro investované do AI, spoločnosť by sa vyvíjala inak.",
                    },
                    {
                        title: "Delegovanie zodpovednosti",
                        desc: "Anthropic štúdia 1,5 milióna chatov ukazuje, že ľudia rýchlo delegujú zodpovednosť na vnímané kognitívne autority.",
                    },
                    {
                        title: "10% črta",
                        desc: "Podnikatelia prijímajú zodpovednosť aj za veci mimo svojej kontroly. Hýbu sa pred istotou. To je ľudská výhoda.",
                    },
                ],
                paths: [
                    {
                        title: "Cesta 1 · Druhý mozog",
                        desc: "Buduj autonómnych agentov, ktorí rozšíria tvoj operatívny dosah. Nech softvér nesie repetitívnu kognitívnu záťaž.",
                    },
                    {
                        title: "Cesta 2 · Vnútorný rozvoj",
                        desc: "Trénuj prítomnosť, intuíciu a etické rozlišovanie. V ére lacnej exekúcie je orientácia prémiová schopnosť.",
                    },
                ],
            },
            timeline: {
                label: "AI LANDSCAPE",
                title: "Päť rokov, ktoré zmenili všetko",
                events: [
                    { year: "2022", title: "Inteligencia ako produkt", desc: "ChatGPT štartuje. AI sa dostáva k bežným ľuďom." },
                    { year: "2023", title: "Reasoning je stabilný", desc: "GPT-4 sprístupňuje komplexnejšie pracovné reťazce." },
                    { year: "2024", title: "Exekučné enginy", desc: "Objavujú sa agenti. AI už nielen odpovedá, ale vykonáva." },
                    { year: "2025", title: "Coding je vyriešený", desc: "90% generovaného kódu sa stáva normou." },
                    {
                        year: "2026",
                        title: "Prepis organizácií",
                        desc: "Tímy, produkty a biznis architektúra sa navrhujú nanovo okolo spolupráce s AI.",
                    },
                ],
                stat: {
                    value: "30-50%",
                    label: "narušenie pracovných rolí v horizonte 3-5 rokov",
                    sub: "Nejde len o prácu. Ide o prepis role, identity a zodpovednosti.",
                },
                neuro: "Paralelne rastie neurobiologická línia: vedomie, pozornosť a kognícia sa stávajú strategickou témou firiem.",
            },
            shifts: {
                label: "PARADIGMATICKÉ ZMENY",
                title: "Čo sa zmenilo",
                items: [
                    { from: "Špecialista", to: "Generalista", note: "V ranej AI-natívnej exekúcii vyhráva šírka." },
                    { from: "Informácie", to: "Intuícia a vkus", note: "Prístup má každý. Rozlišovanie málokto." },
                    { from: "Tí, čo vedia", to: "Tí, čo stavajú", note: "Vedenie je lacné. Dodanie je edge." },
                    { from: "Najlepší model", to: "Hlboký kontext", note: "Kvalita promptu je funkcia kvality kontextu." },
                    { from: "Učiť sa o", to: "Učiť sa robením", note: "Postav artefakt. Postav porozumenie." },
                    { from: "Obávať sa", to: "Stavať", note: "Aj zastaraný výstup buduje trvalú schopnosť." },
                ],
            },
            tools: {
                label: "TOOLKIT",
                title: "Čo používame",
                subtitle: "Nemusí to byť najlepší model. Musí to byť správny experiment.",
                categories: [
                    {
                        name: "Stavanie",
                        items: [
                            { tool: "Claude Code", note: "Go-to nástroj na end-to-end appky" },
                            { tool: "Cursor", note: "AI IDE pre serióznu implementáciu" },
                            { tool: "Gemini Pro", note: "Silná podpora frontendu a vizuálnej kvality" },
                            { tool: "Vercel", note: "Rýchly deployment loop pre testovanie produktu" },
                        ],
                    },
                    {
                        name: "Tvorba",
                        items: [
                            { tool: "Midjourney", note: "Generovanie obrazu a explorácia estetiky" },
                            { tool: "Kling", note: "Video model so silným motion outputom" },
                            { tool: "Nano Banana", note: "Experimenty s formátom a prototypovanie" },
                        ],
                    },
                    {
                        name: "Myslenie",
                        items: [
                            { tool: "Obsidian", note: "Architektúra poznania a syntéza" },
                            { tool: "Osobná AI (Solas)", note: "Partner pre reflexiu, journaling a plánovanie" },
                            { tool: "X / Twitter", note: "Realtime research a objavovanie frontieru" },
                        ],
                    },
                    {
                        name: "Prevádzka",
                        items: [
                            { tool: "Notion", note: "Pamäť exekúcie a tímové rituály" },
                            { tool: "Zapier / Make", note: "Automatizácia workflowov medzi systémami" },
                            { tool: "Linear", note: "Vysokosignálový cadence pre shipovanie" },
                        ],
                    },
                ],
            },
            principles: {
                label: "FRAMEWORK BUILDERA",
                title: "Princípy z pódia",
                items: [
                    {
                        num: "01",
                        title: "Najprv stavaj, uč sa stavaním",
                        desc: "Najrýchlejšie učenie je exekúcia a iterácia na reálnom výsledku.",
                    },
                    {
                        num: "02",
                        title: "Vkus sa buduje, nesťahuje",
                        desc: "Študuj výnimočnú prácu. Kurátoruj vedome. Úsudok sa násobí rokmi.",
                    },
                    {
                        num: "03",
                        title: "Kontext poráža všetko",
                        desc: "Užitočný output vychádza z kontextu, nie z novosti modelu.",
                    },
                    {
                        num: "04",
                        title: "Cieľ musí byť dostatočne silný",
                        desc: "Odolný cieľ prežije volatilitu, technologické zmeny aj neistotu.",
                    },
                    {
                        num: "05",
                        title: "Prestaň riešiť obsolétnosť",
                        desc: "Aj zastarané produkty učia rozhodovanie a budujú schopnosť.",
                    },
                    {
                        num: "06",
                        title: "Hraj sa so všetkým",
                        desc: "Experimentuj naprieč nástrojmi. Správny nástroj je kontextová voľba.",
                    },
                    {
                        num: "07",
                        title: "Prijmi zodpovednosť aj za to, čo nekontroluješ",
                        desc: "10% črta: podnikatelia sa hýbu bez garancií a nesú dôsledky.",
                    },
                    {
                        num: "08",
                        title: "Buduj svoj druhý mozog",
                        desc: "Autonómni agenti a vnútorný rozvoj sú dve cesty, ktoré sa napokon spoja.",
                    },
                ],
            },
            action: {
                label: "TVOJA PONDELKOVÁ AKCIA",
                title: "Jedna vec. Zajtra ráno.",
                subtitle: "Neber si päťdesiat poznámok. Vyber si jeden záväzný krok.",
                actions: [
                    {
                        domain: "Ak si kreatívec",
                        action: "Otvor Midjourney. Zrekonštruuj dielo, ktoré obdivuješ. Zapíš si, čo je stále zle - tam sa rodí tvoj vkus.",
                    },
                    {
                        domain: "Ak si builder",
                        action: "Vyber jeden nástroj - Claude, Cursor alebo Gemini - a tento týždeň shipni malý produkt.",
                    },
                    {
                        domain: "Ak si líder",
                        action: "Pomenuj jeden proces, ktorý má vlastniť AI, a jeden proces, ktorý musí zostať v rukách ľudí.",
                    },
                    {
                        domain: "Ak začínaš",
                        action: "Vyber jednu myšlienku a postav ju hneď. Bez dokonalej prípravnej fázy.",
                    },
                ],
                paths: {
                    title: "Dve cesty vpred",
                    first: "Cesta 1: Druhý mozog - Buduj autonómnych agentov, ktorí rozšíria tvoju kognitívnu aj operatívnu kapacitu.",
                    second: "Cesta 2: Vnútorný rozvoj - Trénuj intuíciu, vedomie a etickú jasnosť ako strategické zručnosti.",
                },
                bottom: "Robenie je teraz ľahká časť. Začni.",
            },
            resources: {
                label: "ZDROJE",
                title: "Pokračuj",
                links: [
                    { name: "SORRYWECAN", url: "sorrywecan.com", desc: "Kreatívne štúdio za eventom" },
                    { name: "SUDOLABS", url: "sudolabs.com", desc: "Builder custom AI riešení" },
                    { name: "Research Lab Newsletter", url: "research@sorrywecan.com", desc: "Čo sa učíme, staviame a shipujeme" },
                    { name: "X / Twitter", url: "@sorrywecan", desc: "Najrýchlejšie miesto na učenie a update kontextu" },
                ],
                stat: "1 schopnosť vybudovaná tento týždeň má väčšiu hodnotu než 100 uložených odkazov.",
                qr: "Naskenuj pre aktualizácie",
                closing: "Toto bola Edition 01. Ďalšie edície budú spolu-vytvorené tým, čo komunita postaví ďalej.",
                footer: "MINDSHIFT TOOLKIT · EDITION 01 · FEBRUÁR 2026 · SORRYWECAN × SUDOLABS",
            },
            backCover: {
                statement: "Robenie je teraz ľahká časť. Otázka je: čo sa oplatí postaviť?",
                edition: "Edition 01 · 2026",
            },
        },
    }

    const c = t[lang]

    const fade = (delay = 0) => ({
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay, duration: 0.55 },
    })

    return (
        <div ref={printRef} className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20 print:bg-white">
            <div className="print:hidden">
                <TopNav
                    lang={lang}
                    customAction={
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handlePrint}
                                className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors font-code-brand"
                            >
                                PDF ↓
                            </button>
                            <button
                                type="button"
                                onClick={() => setLang(lang === "en" ? "sk" : "en")}
                                className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                            >
                                {lang === "en" ? "SK" : "EN"}
                            </button>
                        </div>
                    }
                />
            </div>

            <ToolkitPage num="01" id="cover" className="bg-black text-white pt-24 md:pt-16">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 20% 30%, #0047BB15, transparent 50%), radial-gradient(circle at 80% 70%, #0047BB22, transparent 55%)",
                    }}
                />
                <OverlappingCircles className="w-[560px] h-[560px] -right-40 -top-16 text-[#0047BB]" />
                <Railwave className="w-[640px] h-[220px] -left-12 bottom-6 text-white" />
                <DotGrid className="w-[320px] h-[220px] right-12 bottom-12 text-[#0047BB]" cols={16} rows={11} />
                <DiagonalLines className="w-full h-full top-0 left-0 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.cover.label}</span>
                    </motion.div>

                    <motion.h1 {...fade(0.08)} className="font-bold text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.88] tracking-tighter mt-4">
                        {c.cover.title}
                    </motion.h1>

                    <motion.div {...fade(0.14)} className="mt-9 flex flex-col md:flex-row md:items-end gap-6 md:gap-14">
                        <div>
                            <p className="text-lg md:text-xl text-white/55 max-w-md">{c.cover.subtitle}</p>
                            <p className="text-sm text-white/35 mt-3">{c.cover.note}</p>
                        </div>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/25 md:ml-auto">{c.cover.edition}</span>
                    </motion.div>

                    <motion.p {...fade(0.2)} className="mt-9 text-sm md:text-base max-w-2xl text-[#9fbdf9]">
                        {c.cover.railHint}
                    </motion.p>

                    <motion.div {...fade(0.24)} className="mt-12 md:mt-14 h-px bg-gradient-to-r from-[#0047BB] via-[#0047BB]/40 to-transparent" />

                    <motion.div {...fade(0.28)} className="mt-6 flex items-center gap-8">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/20">×</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/20">SUDOLABS</span>
                    </motion.div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="02" id="thesis">
                <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(circle at 75% 35%, #0047BB15, transparent 48%)" }}
                />
                <ConcentricRings className="w-[420px] h-[420px] -right-28 top-1/2 -translate-y-1/2 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.thesis.label}</span>
                    </motion.div>

                    <motion.blockquote {...fade(0.08)} className="mt-6 text-2xl md:text-4xl lg:text-[2.8rem] font-bold leading-tight tracking-tight max-w-4xl">
                        &ldquo;{c.thesis.quote}&rdquo;
                    </motion.blockquote>

                    <motion.p {...fade(0.12)} className="text-lg md:text-xl text-[#0047BB] mt-6 font-medium">
                        {c.thesis.sub}
                    </motion.p>

                    <motion.div {...fade(0.16)} className="mt-8 p-6 border border-[#0047BB]/20 bg-white/60 backdrop-blur-sm">
                        <h3 className="text-lg md:text-xl font-bold">{c.thesis.commoditization.title}</h3>
                        <p className="text-sm md:text-base text-black/70 mt-3 leading-relaxed">{c.thesis.commoditization.body}</p>
                        <p className="text-sm text-black/65 mt-3">{c.thesis.commoditization.analogy}</p>
                        <p className="text-sm text-[#0047BB] mt-2 font-medium">{c.thesis.commoditization.sputnik}</p>
                    </motion.div>

                    <motion.div {...fade(0.2)} className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {c.thesis.pillars.map((p, idx) => (
                            <div
                                key={p.num}
                                className={cn(
                                    "p-5 md:p-6 bg-white/55 border border-[#0047BB]/20 relative overflow-hidden",
                                    idx === 1 ? "md:-translate-y-2" : ""
                                )}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0047BB] to-[#0047BB]/20" />
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                                    <span className="text-3xl md:text-4xl font-bold text-[#0047BB]/70 leading-none">{p.num}</span>
                                </div>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-black/35 mt-3">{p.speaker}</p>
                                <p className="text-sm text-black/65 mt-2 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="03" id="taste">
                <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(circle at 22% 20%, #0047BB15, transparent 48%)" }}
                />
                <TriangleAccent className="w-[240px] h-[240px] right-4 -top-8 text-[#0047BB]" />
                <DotGrid className="w-[230px] h-[140px] -left-6 bottom-8 text-[#0047BB]" cols={12} rows={7} />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()} className="flex items-center justify-between">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.taste.label}</span>
                        <span className="hidden md:block text-[10px] font-code-brand font-bold tracking-[0.3em] text-black/25 -rotate-3">VISUAL JUDGMENT</span>
                    </motion.div>

                    <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 items-start">
                        <motion.div {...fade(0.05)} className="md:col-span-7 md:pr-10">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">{c.taste.title}</h2>
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/35 mt-3">{c.taste.speaker}</p>
                            <p className="text-lg md:text-xl text-black/75 mt-8 max-w-2xl leading-relaxed">{c.taste.insight}</p>
                        </motion.div>

                        <motion.div {...fade(0.08)} className="md:col-span-5 md:-mt-6">
                            <div className="border border-[#0047BB]/20 bg-white/55 p-6 md:p-7 relative md:rotate-[-1.2deg]">
                                <span className="text-[10px] font-code-brand font-bold tracking-[0.2em] text-[#0047BB]">HERO POINT</span>
                                <h4 className="mt-3 text-xl md:text-2xl font-bold">{c.taste.points[0].title}</h4>
                                <p className="mt-3 text-sm md:text-base text-black/70 leading-relaxed">{c.taste.points[0].desc}</p>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.12)} className="md:col-span-4">
                            <div className="p-5 border border-[#0047BB]/15 bg-black/[0.03] h-full">
                                <h4 className="font-bold text-sm">{c.taste.points[1].title}</h4>
                                <p className="text-sm text-black/60 mt-2 leading-relaxed">{c.taste.points[1].desc}</p>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.15)} className="md:col-span-4 md:-translate-y-5">
                            <div className="p-5 border border-[#0047BB]/15 bg-white/40 h-full">
                                <h4 className="font-bold text-sm">{c.taste.points[2].title}</h4>
                                <p className="text-sm text-black/60 mt-2 leading-relaxed">{c.taste.points[2].desc}</p>
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.18)} className="md:col-span-4">
                            <div className="p-5 border border-[#0047BB]/15 bg-black/[0.03] h-full">
                                <h4 className="font-bold text-sm">{c.taste.points[3].title}</h4>
                                <p className="text-sm text-black/60 mt-2 leading-relaxed">{c.taste.points[3].desc}</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p
                        {...fade(0.22)}
                        className="mt-8 md:mt-10 text-3xl md:text-5xl font-bold tracking-tight text-[#0047BB] leading-tight max-w-5xl"
                    >
                        &ldquo;{c.taste.pullQuote}&rdquo;
                    </motion.p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="04" id="leverage">
                <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(circle at 80% 20%, #0047BB18, transparent 52%)" }}
                />
                <HexGrid className="w-[360px] h-[260px] -right-20 top-8 text-[#0047BB]" />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()} className="flex items-baseline justify-between gap-4">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.leverage.label}</span>
                        <span className="hidden md:block text-[10px] font-code-brand tracking-[0.28em] text-black/25">EXECUTION MULTIPLIER</span>
                    </motion.div>

                    <motion.h2 {...fade(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter mt-2">
                        {c.leverage.title}
                    </motion.h2>
                    <motion.p {...fade(0.08)} className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-2">
                        {c.leverage.speaker}
                    </motion.p>
                    <motion.p {...fade(0.1)} className="text-lg md:text-xl text-black/72 mt-5 max-w-3xl leading-relaxed">
                        {c.leverage.insight}
                    </motion.p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <motion.div {...fade(0.14)} className="md:col-span-7 border border-[#0047BB]/20 bg-white/65 p-6 md:p-8">
                            <span className="text-[10px] font-code-brand font-bold tracking-[0.25em] text-[#0047BB]">TEAM EVOLUTION</span>
                            <div className="mt-5 flex items-center justify-between gap-3 md:gap-4">
                                {[
                                    { year: "2012", people: "100", label: "Waterfall" },
                                    { year: "2020", people: "8", label: "Agile" },
                                    { year: "2026", people: "2", label: "Agentic" },
                                ].map((era, i) => (
                                    <React.Fragment key={era.year}>
                                        {i > 0 && <span className="text-[#0047BB]/45 text-2xl md:text-4xl">→</span>}
                                        <div className="text-center flex-1">
                                            <p className="text-[10px] font-code-brand text-black/35">{era.year}</p>
                                            <p className="text-4xl md:text-6xl font-bold text-[#0047BB] leading-none mt-1">{era.people}</p>
                                            <p className="text-[10px] md:text-xs text-black/45 mt-1">{lang === "en" ? "people" : "ľudí"}</p>
                                            <p className="text-[10px] font-code-brand tracking-[0.18em] text-black/30 mt-2">{era.label}</p>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fade(0.16)} className="md:col-span-5 border border-[#0047BB]/20 bg-black/[0.03] p-5">
                            <span className="text-[10px] font-code-brand font-bold tracking-[0.24em] text-[#0047BB]">GUTENBERG MOMENT</span>
                            <div className="mt-3 space-y-3">
                                <div className="p-3 border border-[#0047BB]/15 bg-white/40">
                                    <p className="font-bold text-sm">{c.leverage.gutenberg.leftTitle}</p>
                                    <p className="text-xs text-black/55 mt-1">{c.leverage.gutenberg.leftDesc}</p>
                                </div>
                                <div className="text-center text-[#0047BB] text-xl">≋</div>
                                <div className="p-3 border border-[#0047BB]/15 bg-white/40">
                                    <p className="font-bold text-sm">{c.leverage.gutenberg.rightTitle}</p>
                                    <p className="text-xs text-black/55 mt-1">{c.leverage.gutenberg.rightDesc}</p>
                                </div>
                            </div>
                        </motion.div>

                        {c.leverage.points.map((p, i) => (
                            <motion.div key={p.title} {...fade(0.18 + i * 0.03)} className="md:col-span-4 p-4 border border-[#0047BB]/15 bg-white/40">
                                <h4 className="font-bold text-sm">{p.title}</h4>
                                <p className="text-sm text-black/58 mt-2 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p {...fade(0.28)} className="mt-7 text-2xl md:text-3xl font-bold text-[#0047BB] italic max-w-4xl">
                        &ldquo;{c.leverage.pullQuote}&rdquo;
                    </motion.p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="05" id="clarity" className="py-12 md:py-16">
                <ConcentricRings className="w-[330px] h-[330px] -left-24 -bottom-14 text-[#0047BB]" />
                <DiagonalLines className="w-[430px] h-[320px] -right-10 top-4 text-[#0047BB]" />
                <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(circle at 32% 72%, #0047BB14, transparent 50%)" }}
                />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.clarity.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter mt-2">
                        {c.clarity.title}
                    </motion.h2>
                    <motion.p {...fade(0.08)} className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-2">
                        {c.clarity.speaker}
                    </motion.p>

                    <motion.p {...fade(0.1)} className="text-lg md:text-xl text-black/72 mt-8 max-w-4xl leading-relaxed">
                        {c.clarity.insight}
                    </motion.p>

                    <motion.p {...fade(0.14)} className="mt-9 text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-4xl text-[#0047BB]">
                        &ldquo;{c.clarity.pullQuote}&rdquo;
                    </motion.p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div {...fade(0.16)} className="p-7 border border-[#0047BB]/20 bg-white/70">
                            <h3 className="text-xl md:text-2xl font-bold">{c.clarity.points[2].title}</h3>
                            <p className="mt-3 text-base text-black/68 leading-relaxed">{c.clarity.points[2].desc}</p>
                        </motion.div>

                        <motion.div {...fade(0.18)} className="p-7 border border-[#0047BB]/20 bg-white/70">
                            <h3 className="text-xl md:text-2xl font-bold">{c.clarity.points[3].title}</h3>
                            <p className="mt-3 text-base text-black/68 leading-relaxed">{c.clarity.points[3].desc}</p>
                        </motion.div>
                    </div>

                    <motion.div {...fade(0.22)} className="mt-6 p-7 border border-[#0047BB]/20 bg-black/[0.03]">
                        <h3 className="text-xl md:text-2xl font-bold">{c.clarity.points[4].title}</h3>
                        <p className="mt-3 text-base text-black/68 leading-relaxed max-w-4xl">{c.clarity.points[4].desc}</p>
                    </motion.div>

                    <motion.div {...fade(0.25)} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 border border-[#0047BB]/15 bg-white/40">
                            <h4 className="font-bold text-sm">{c.clarity.points[0].title}</h4>
                            <p className="text-sm text-black/60 mt-2 leading-relaxed">{c.clarity.points[0].desc}</p>
                        </div>
                        <div className="p-5 border border-[#0047BB]/15 bg-white/40">
                            <h4 className="font-bold text-sm">{c.clarity.points[1].title}</h4>
                            <p className="text-sm text-black/60 mt-2 leading-relaxed">{c.clarity.points[1].desc}</p>
                        </div>
                    </motion.div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="06" id="human-edge" className="bg-[#ede4d8]">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 18% 28%, #0047BB10, transparent 50%), radial-gradient(circle at 78% 70%, #c9905b20, transparent 55%)",
                    }}
                />
                <OrganicBlob className="w-[360px] h-[280px] -left-16 bottom-4 text-[#b27a4d]" />
                <OrganicBlob className="w-[320px] h-[250px] right-0 -top-8 text-[#0047BB] rotate-6" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.38em] text-[#0047BB]">{c.humanEdge.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-4xl md:text-6xl font-bold tracking-tight mt-2">
                        {c.humanEdge.title}
                    </motion.h2>
                    <motion.p {...fade(0.1)} className="mt-6 max-w-3xl text-base md:text-lg text-black/72 leading-relaxed">
                        {c.humanEdge.intro}
                    </motion.p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {c.humanEdge.themes.map((theme, i) => (
                            <motion.div key={theme.title} {...fade(0.12 + i * 0.03)} className="p-5 md:p-6 border border-[#0047BB]/15 bg-white/60">
                                <h3 className="text-lg font-bold">{theme.title}</h3>
                                <p className="text-sm md:text-base text-black/62 mt-2 leading-relaxed">{theme.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fade(0.25)} className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {c.humanEdge.paths.map((path) => (
                            <div key={path.title} className="p-6 border border-[#0047BB]/20 bg-black/[0.03]">
                                <p className="text-[10px] font-code-brand tracking-[0.22em] text-[#0047BB] uppercase">{path.title}</p>
                                <p className="text-sm md:text-base text-black/68 mt-3 leading-relaxed">{path.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="07" id="timeline" className="bg-black text-white">
                <DotGrid className="w-[420px] h-[260px] -right-12 top-8 text-[#0047BB]" cols={21} rows={13} />
                <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(circle at 65% 22%, #0047BB20, transparent 52%)" }}
                />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.timeline.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.timeline.title}
                    </motion.h2>

                    <motion.div {...fade(0.1)} className="mt-10 relative">
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/15" />
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                            {c.timeline.events.map((evt, i) => (
                                <motion.div
                                    key={evt.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    className="relative"
                                >
                                    <div className="hidden md:block w-3 h-3 bg-[#0047BB] rounded-full mb-4 relative z-10" />
                                    <span className="text-2xl md:text-3xl font-bold text-[#9cbcff]">{evt.year}</span>
                                    <h4 className="font-bold text-sm mt-2">{evt.title}</h4>
                                    <p className="text-xs text-white/45 mt-1 leading-relaxed">{evt.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fade(0.26)} className="mt-10 p-6 md:p-8 border border-[#0047BB]/40 bg-[#0047BB]/[0.08] w-full">
                        <p className="text-5xl md:text-7xl font-bold text-[#8bb1ff] leading-none">{c.timeline.stat.value}</p>
                        <p className="text-lg md:text-2xl mt-3 text-white/90">{c.timeline.stat.label}</p>
                        <p className="text-sm md:text-base text-white/55 mt-2 max-w-3xl">{c.timeline.stat.sub}</p>
                    </motion.div>

                    <motion.p {...fade(0.32)} className="mt-6 text-sm md:text-base text-white/65 max-w-4xl leading-relaxed">
                        {c.timeline.neuro}
                    </motion.p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="08" id="shifts">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        backgroundImage: "radial-gradient(#0047BB 0.55px, transparent 0.55px)",
                        backgroundSize: "20px 20px",
                    }}
                />
                <TriangleAccent className="w-[250px] h-[250px] -right-16 -bottom-16 text-[#0047BB] rotate-180" />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.shifts.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.shifts.title}
                    </motion.h2>

                    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {c.shifts.items.map((shift, i) => (
                            <motion.div
                                key={shift.from}
                                {...fade(0.1 + i * 0.03)}
                                className={cn(
                                    "p-5 border border-[#0047BB]/15 bg-gradient-to-br from-white/75 to-[#dbe6fb]/55",
                                    i % 2 === 1 ? "md:-translate-y-2" : ""
                                )}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-sm text-black/35 line-through">{shift.from}</span>
                                    <span className="text-[#0047BB] font-bold text-lg">⟶</span>
                                    <span className="text-sm md:text-base font-bold">{shift.to}</span>
                                </div>
                                <p className="text-xs md:text-sm text-black/58">{shift.note}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="09" id="tools">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "radial-gradient(#0047BB 0.5px, transparent 0.5px)",
                        backgroundSize: "24px 24px",
                        opacity: 0.08,
                    }}
                />
                <HexGrid className="w-[300px] h-[200px] -right-10 bottom-6 text-[#0047BB]" />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.tools.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.tools.title}
                    </motion.h2>
                    <motion.p {...fade(0.08)} className="text-sm text-black/52 mt-3 max-w-xl">
                        {c.tools.subtitle}
                    </motion.p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <motion.div {...fade(0.11)} className="md:col-span-7 p-6 border border-[#0047BB]/15 bg-white/70">
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB]">{c.tools.categories[0].name}</p>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {c.tools.categories[0].items.map((item) => (
                                    <div key={item.tool} className="p-4 border border-[#0047BB]/15 bg-black/[0.03]">
                                        <p className="font-bold text-sm">{item.tool}</p>
                                        <p className="text-xs text-black/48 mt-1">{item.note}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {c.tools.categories.slice(1).map((cat, i) => (
                            <motion.div key={cat.name} {...fade(0.14 + i * 0.03)} className="md:col-span-5 p-5 border border-[#0047BB]/15 bg-white/55">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.22em] text-[#0047BB]">{cat.name}</p>
                                <div className="mt-3 space-y-3">
                                    {cat.items.map((item) => (
                                        <div key={item.tool}>
                                            <p className="font-bold text-sm">{item.tool}</p>
                                            <p className="text-xs text-black/48 mt-0.5">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="10" id="principles">
                <OverlappingCircles className="w-[420px] h-[420px] -left-36 top-1/2 -translate-y-1/2 text-[#0047BB]" />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.principles.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.principles.title}
                    </motion.h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <motion.div {...fade(0.09)} className="md:col-span-6 p-6 border border-[#0047BB]/20 bg-white/70">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0047BB] text-white text-[10px] font-code-brand font-bold mb-3">
                                {c.principles.items[6].num}
                            </span>
                            <h3 className="text-xl font-bold">{c.principles.items[6].title}</h3>
                            <p className="text-sm md:text-base text-black/62 mt-3 leading-relaxed">{c.principles.items[6].desc}</p>
                        </motion.div>

                        <motion.div {...fade(0.12)} className="md:col-span-6 p-6 border border-[#0047BB]/20 bg-white/70">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0047BB] text-white text-[10px] font-code-brand font-bold mb-3">
                                {c.principles.items[7].num}
                            </span>
                            <h3 className="text-xl font-bold">{c.principles.items[7].title}</h3>
                            <p className="text-sm md:text-base text-black/62 mt-3 leading-relaxed">{c.principles.items[7].desc}</p>
                        </motion.div>

                        {c.principles.items.slice(0, 6).map((p, i) => (
                            <motion.div key={p.num} {...fade(0.14 + i * 0.025)} className="md:col-span-4 p-5 border border-[#0047BB]/15 bg-black/[0.03]">
                                <span className="inline-flex items-center justify-center w-7 h-7 bg-[#0047BB] text-white text-[10px] font-code-brand font-bold mb-3">
                                    {p.num}
                                </span>
                                <h4 className="font-bold text-sm">{p.title}</h4>
                                <p className="text-xs text-black/58 mt-2 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="11" id="action" className="bg-black text-white">
                <DiagonalLines className="w-full h-full top-0 left-0 text-[#0047BB]" />
                <ConcentricRings className="w-[300px] h-[300px] -right-14 -bottom-14 text-[#0047BB]" />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.action.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.action.title}
                    </motion.h2>
                    <motion.p {...fade(0.08)} className="text-lg text-white/45 mt-3">
                        {c.action.subtitle}
                    </motion.p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.action.actions.map((a, i) => (
                            <motion.div key={a.domain} {...fade(0.1 + i * 0.03)} className="p-5 border border-white/12 bg-white/[0.03]">
                                <span className="text-[10px] font-code-brand font-bold tracking-widest text-[#8cb2ff] uppercase">{a.domain}</span>
                                <p className="text-sm text-white/72 mt-2 leading-relaxed">{a.action}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div {...fade(0.24)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 border border-[#0047BB]/35 bg-[#0047BB]/[0.09]">
                            <p className="text-[10px] font-code-brand tracking-[0.2em] text-[#8cb2ff] uppercase">{c.action.paths.title}</p>
                            <p className="mt-3 text-sm md:text-base text-white/84 leading-relaxed">{c.action.paths.first}</p>
                        </div>
                        <div className="p-6 border border-white/18 bg-white/[0.04]">
                            <p className="text-[10px] font-code-brand tracking-[0.2em] text-[#8cb2ff] uppercase">{c.action.paths.title}</p>
                            <p className="mt-3 text-sm md:text-base text-white/84 leading-relaxed">{c.action.paths.second}</p>
                        </div>
                    </motion.div>

                    <motion.p {...fade(0.3)} className="mt-9 text-2xl md:text-3xl font-bold text-[#8cb2ff]">
                        {c.action.bottom}
                    </motion.p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="12" id="resources">
                <DotGrid className="w-[260px] h-[170px] -right-6 top-8 text-[#0047BB]" cols={13} rows={8} />

                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.resources.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">
                        {c.resources.title}
                    </motion.h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                        <motion.div {...fade(0.1)} className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {c.resources.links.map((link) => (
                                <div key={link.name} className="p-5 border border-[#0047BB]/15 bg-white/55 flex items-start gap-4">
                                    <span className="w-2 h-2 bg-[#0047BB] rounded-full mt-1.5 shrink-0" />
                                    <div>
                                        <p className="font-bold text-sm">{link.name}</p>
                                        <p className="text-[10px] font-code-brand text-[#0047BB] mt-0.5">{link.url}</p>
                                        <p className="text-xs text-black/45 mt-1">{link.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div {...fade(0.15)} className="md:col-span-4 p-5 border border-[#0047BB]/20 bg-black/[0.03] flex flex-col">
                            <div className="h-40 md:h-full border border-dashed border-[#0047BB]/35 flex items-center justify-center text-center px-4">
                                <p className="text-sm font-code-brand uppercase tracking-[0.2em] text-[#0047BB]">{c.resources.qr}</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.p {...fade(0.2)} className="mt-8 text-2xl md:text-4xl font-bold text-[#0047BB] leading-tight max-w-4xl">
                        {c.resources.stat}
                    </motion.p>

                    <motion.div {...fade(0.24)} className="mt-6 border-t border-[#0047BB]/20 pt-6">
                        <p className="text-lg md:text-xl text-black/62 italic max-w-2xl">{c.resources.closing}</p>
                    </motion.div>

                    <motion.div {...fade(0.28)} className="mt-7">
                        <p className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-black/20">{c.resources.footer}</p>
                    </motion.div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="13" id="back-cover" className="bg-black text-white">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 20% 30%, #0047BB15, transparent 50%), radial-gradient(circle at 78% 68%, #0047BB20, transparent 55%)",
                    }}
                />
                <OverlappingCircles className="w-[520px] h-[520px] -left-44 top-1/2 -translate-y-1/2 text-[#0047BB]" />
                <Railwave className="w-[580px] h-[200px] right-0 top-10 text-[#0047BB]" />

                <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
                    <motion.p {...fade(0.05)} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        {c.backCover.statement}
                    </motion.p>

                    <motion.div {...fade(0.16)} className="mt-12 h-px bg-gradient-to-r from-transparent via-[#0047BB] to-transparent" />

                    <motion.div {...fade(0.2)} className="mt-7 flex items-center justify-center gap-7">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/25">SORRYWECAN</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/25">×</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/25">SUDOLABS</span>
                    </motion.div>

                    <motion.p {...fade(0.24)} className="mt-4 text-[10px] font-code-brand tracking-[0.3em] text-white/20">
                        {c.backCover.edition}
                    </motion.p>
                </div>
            </ToolkitPage>

            <footer className="py-10 text-center border-t border-black/10 print:hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 font-code-brand">SORRYWECAN · RESEARCH LAB · 2026</p>
            </footer>
        </div>
    )
}
