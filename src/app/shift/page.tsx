"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

/* ─── Geometric accent components ─── */

function OverlappingCircles({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" className={cn("absolute opacity-[0.04]", className)} fill="none">
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
            dots.push(
                <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="1.5" fill="currentColor" />
            )
        }
    }
    return (
        <svg viewBox={`0 0 ${cols * 20} ${rows * 20}`} className={cn("absolute opacity-[0.06]", className)}>
            {dots}
        </svg>
    )
}

function DiagonalLines({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 300" className={cn("absolute opacity-[0.03]", className)} fill="none">
            {Array.from({ length: 20 }, (_, i) => (
                <line key={i} x1={i * 30} y1="0" x2={i * 30 + 300} y2="300" stroke="currentColor" strokeWidth="0.5" />
            ))}
        </svg>
    )
}

function ConcentricRings({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 300 300" className={cn("absolute opacity-[0.04]", className)} fill="none">
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
            hexes.push(<path key={`${row}-${col}`} d={hexPath(cx, cy, r - 2)} stroke="currentColor" strokeWidth="0.5" fill="none" />)
        }
    }
    return (
        <svg viewBox="0 0 300 200" className={cn("absolute opacity-[0.05]", className)}>
            {hexes}
        </svg>
    )
}

function TriangleAccent({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={cn("absolute opacity-[0.06]", className)} fill="none">
            <polygon points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="0.8" />
            <polygon points="50,25 80,85 20,85" stroke="currentColor" strokeWidth="0.5" />
        </svg>
    )
}

/* ─── Toolkit page wrapper ─── */

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

/* ─── Main page ─── */

export default function ShiftToolkitPage() {
    const [lang, setLang] = useState<"en" | "sk">("en")
    const printRef = useRef<HTMLDivElement>(null)

    const handlePrint = () => {
        window.print()
    }

    /* ─── Content ─── */

    const t = {
        en: {
            cover: {
                label: "MINDSHIFT TOOLKIT",
                title: "Rise of the Builders",
                edition: "Edition 01 · February 2026",
                subtitle: "3.5 hours of insight, distilled into what matters.",
                note: "A toolkit from the speakers, for the builders.",
            },
            thesis: {
                label: "THE THESIS",
                quote: "The most significant organizational shift of this decade is the transformation of the 'knower' into the 'doer'.",
                sub: "In the agentic AI era, everybody can build.",
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
                insight: "Give 10 people a camera. Only one gets a great shot. Same with AI. We all have the same tools. The difference is taste.",
                points: [
                    { title: "Quality recognition > Generation", desc: "Generating is easy. Knowing what's good is hard. Years of experience shape the eye for light, sound, composition." },
                    { title: "Taste is a skill", desc: "Somebody has it, somebody doesn't — but we can develop it. Study the greats. Curate obsessively. Notice what others miss." },
                    { title: "Outsource inspiration, not judgment", desc: "Get the Christopher Nolan look. The Salvador Dalí texture. Great artists' work becomes our reference library — like Pinterest, but alive." },
                    { title: "Build to learn", desc: "Go to Midjourney. Process. Cut. Try again. Try again. Try again. There's no faster way to learn than building." },
                ],
                pullQuote: "The best way to learn has always been to build.",
            },
            leverage: {
                label: "ACT 2",
                title: "Leverage",
                speaker: "Ján Koscelanský · CPO & Co-founder, SUDOLABS",
                insight: "What didn't need to be built, or was costly to build — now can be built. And by doing it, the team learns, engages, has fun.",
                points: [
                    { title: "The Gutenberg moment", desc: "Like the printing press eliminated scribes but created authors — AI eliminates repetition but creates builders." },
                    { title: "Team evolution", desc: "2012: 100 people (Waterfall). 2020: 8 people (Agile). 2026: 2 people — Product Architect + AI Engineer." },
                    { title: "Context > Models", desc: "Good results come from deep context, not just the best models. Know what you're building and why." },
                    { title: "Personal AI", desc: "Build your own AI companion. The more you interact, the more it understands. Give it rules, memory, identity." },
                ],
                pullQuote: "Coding is solved. 90% generated. The question is: what's worth building?",
            },
            clarity: {
                label: "ACT 3",
                title: "Clarity",
                speaker: "Roman Pii Wagner · Transformational Design",
                insight: "If we can do anything and anything is possible — what do we even want to do? The doing is now the easy part. Knowing what to build is the hard part.",
                points: [
                    { title: "Option paralysis", desc: "When everything is possible, we freeze. The antidote is a goal so strong it withstands any change that comes." },
                    { title: "Turn inward", desc: "Data tells us what works. Trends tell us what's hot. But the entrepreneur must turn inward to know what to build." },
                    { title: "The mind is the differentiator", desc: "Tools are the start. But thinking — the mind shift — is the real edge. Knowing what to build, going deep into oneself." },
                    { title: "Ecosystems over empires", desc: "Small teams, collaborating. Ecosystems that withstand disruption from big corporate players. Power is decentralizing." },
                ],
                pullQuote: "The thinking is the differentiator. Not the tools.",
            },
            timeline: {
                label: "THE AI LANDSCAPE",
                title: "Five Years That Changed Everything",
                events: [
                    { year: "2022", title: "Intelligence as Product", desc: "ChatGPT launches. AI becomes a consumer tool." },
                    { year: "2023", title: "Reasoning Gets Reliable", desc: "GPT-4. Complex tasks become possible." },
                    { year: "2024", title: "LLMs as Execution Engines", desc: "Agents emerge. AI starts doing, not just answering." },
                    { year: "2025", title: "Coding Is Solved", desc: "Claude Code + Opus. 90% of code generated. 135k+ commits/day." },
                    { year: "2026", title: "Organizations Rebuilt", desc: "Structural rewrite. Teams, products, businesses — redesigned around AI." },
                ],
                stat: {
                    value: "4%",
                    label: "of all public GitHub commits",
                    sub: "from Claude Code alone · 50× growth in 13 months",
                },
            },
            shifts: {
                label: "PARADIGM SHIFTS",
                title: "What Changed",
                items: [
                    { from: "Specialist", to: "Generalist", note: "Breadth beats depth — for now." },
                    { from: "Information", to: "Intuition & Taste", note: "Everyone has access. Few have judgment." },
                    { from: "Knowers", to: "Builders", note: "Knowing is free. Building is the edge." },
                    { from: "Best Model", to: "Deep Context", note: "Right prompting > right model." },
                    { from: "Learning About", to: "Learning By Doing", note: "Build the video. Build the app. Build." },
                    { from: "Worrying", to: "Building", note: "Even if it becomes obsolete — the journey teaches." },
                ],
            },
            tools: {
                label: "THE TOOLKIT",
                title: "What We Use",
                subtitle: "It doesn't always need to be the best model. Just the right prompting, right experimenting.",
                categories: [
                    {
                        name: "Building",
                        items: [
                            { tool: "Claude Code", note: "Best for apps, the go-to builder" },
                            { tool: "Cursor", note: "IDE with AI — for serious development" },
                            { tool: "Gemini Pro", note: "Strong for frontend work" },
                        ],
                    },
                    {
                        name: "Creating",
                        items: [
                            { tool: "Midjourney", note: "Image generation, style exploration" },
                            { tool: "Kling", note: "Chinese video model — surprisingly good" },
                            { tool: "Nano Banana (Google)", note: "Experimental, worth playing with" },
                        ],
                    },
                    {
                        name: "Thinking",
                        items: [
                            { tool: "Obsidian", note: "Note-taking, knowledge management" },
                            { tool: "Personal AI (Solas)", note: "Your AI companion — journaling, therapy, planning" },
                            { tool: "X / Twitter", note: "The place to learn. Newsletters. Research labs." },
                        ],
                    },
                ],
            },
            principles: {
                label: "THE BUILDER'S FRAMEWORK",
                title: "Principles From the Stage",
                items: [
                    { num: "01", title: "Build first, learn by building", desc: "There is no faster way to learn than to actually do it. Build the picture. Build the video. Build the app. Try again." },
                    { num: "02", title: "Taste is earned, not downloaded", desc: "Study the greats. Curate obsessively. Years of experience aren't replaced — they're amplified by AI." },
                    { num: "03", title: "Context beats everything", desc: "Deep context, not the best model, produces the best results. Know your problem deeply before reaching for tools." },
                    { num: "04", title: "The goal must be strong enough", desc: "If you really want it, you'll withstand any probability of change. Have a reason that survives disruption." },
                    { num: "05", title: "Stop caring about obsolescence", desc: "Even if what you build becomes obsolete, you learned more from the journey than you ever would from standing still." },
                    { num: "06", title: "Play with everything", desc: "Use AI tools. Play with them. Experiment. The right model for the job isn't always the best model." },
                ],
            },
            action: {
                label: "YOUR MONDAY ACTION",
                title: "One Thing. Tomorrow Morning.",
                subtitle: "Don't take 50 things from tonight. Take one.",
                actions: [
                    { domain: "If you're a creative", action: "Open Midjourney. Recreate something you admire. Notice what you'd change. That's your taste." },
                    { domain: "If you're a builder", action: "Pick one tool — Claude, Cursor, Gemini — and build something small by end of week. Ship it." },
                    { domain: "If you're a leader", action: "Ask your team: what are we doing that AI should handle? What are we automating that needs a human?" },
                    { domain: "If you're starting out", action: "Pick one idea. Build it. Don't plan. Don't research. Build it today." },
                ],
                bottom: "The doing is now the easy part. Start.",
            },
            resources: {
                label: "RESOURCES",
                title: "Keep Going",
                links: [
                    { name: "SORRYWECAN", url: "sorrywecan.com", desc: "Creative studio behind the event" },
                    { name: "SUDOLABS", url: "sudolabs.com", desc: "Custom AI solutions builder" },
                    { name: "Research Lab Newsletter", url: "research@sorrywecan.com", desc: "What we're learning, building, shipping" },
                    { name: "X / Twitter", url: "@sorrywecan", desc: "The place to learn — daily" },
                ],
                closing: "This was Edition 01. Every future edition builds on what we learn — including from you.",
                footer: "MINDSHIFT TOOLKIT · EDITION 01 · FEBRUARY 2026 · SORRYWECAN × SUDOLABS",
            },
        },
        sk: {
            cover: {
                label: "MINDSHIFT TOOLKIT",
                title: "Rise of the Builders",
                edition: "Edition 01 · Február 2026",
                subtitle: "3,5 hodiny, destilované do toho podstatného.",
                note: "Toolkit od spíkrov, pre builderov.",
            },
            thesis: {
                label: "TÉZA",
                quote: "Najvýznamnejší organizačný posun tejto dekády je premena ‚toho, kto vie' na ‚toho, kto robí'.",
                sub: "V ére agentického AI môže stavať každý.",
                pillars: [
                    { num: "01", title: "Vkus", speaker: "Roland", desc: "Čo oddeľuje dobré od nezabudnuteľného." },
                    { num: "02", title: "Využitie", speaker: "Ján", desc: "Čo dnes dokáže jeden človek postaviť." },
                    { num: "03", title: "Jasnosť", speaker: "Roman", desc: "Čo zostáva ľudské. Čo delegovať." },
                ],
            },
            taste: {
                label: "AKT 1",
                title: "Vkus",
                speaker: "Roland Vraník · Creative Director, SORRYWECAN",
                insight: "Daj 10 ľuďom kameru. Len jeden urobí výnimočný záber. Rovnako s AI. Máme rovnaké nástroje. Rozdiel robí vkus.",
                points: [
                    { title: "Rozpoznanie kvality > Generovanie", desc: "Generovať je ľahké. Vedieť, čo je dobré, je ťažké. Roky skúseností formujú oko pre svetlo, zvuk, kompozíciu." },
                    { title: "Vkus je zručnosť", desc: "Niekto ho má, niekto nie — ale dá sa rozvíjať. Študuj veľkých. Kurátoruj obsesívne. Všimni si, čo ostatní prehliadajú." },
                    { title: "Outsourcuj inšpiráciu, nie úsudok", desc: "Dostaň look Christophera Nolana. Textúru Salvadora Dalího. Veľkí umelci sa stávajú referenčnou knižnicou — ako Pinterest, ale živý." },
                    { title: "Stav, aby si sa naučil", desc: "Choď do Midjourney. Spracuj. Strihaj. Skúš znova. Znova. Znova. Neexistuje rýchlejší spôsob učenia než stavanie." },
                ],
                pullQuote: "Najlepší spôsob učenia vždy bol — stavať.",
            },
            leverage: {
                label: "AKT 2",
                title: "Využitie",
                speaker: "Ján Koscelanský · CPO & Co-founder, SUDOLABS",
                insight: "Čo sa nemuselo stavať alebo bolo drahé — teraz sa dá. A tým, že to robíme, sa tím učí, zapája, baví.",
                points: [
                    { title: "Gutenbergov moment", desc: "Ako tlačiarenský lis zlikvidoval pisárov, ale vytvoril autorov — AI odstraňuje opakovanie, ale tvorí builderov." },
                    { title: "Evolúcia tímu", desc: "2012: 100 ľudí (Waterfall). 2020: 8 ľudí (Agile). 2026: 2 ľudia — Product Architect + AI Engineer." },
                    { title: "Kontext > Modely", desc: "Dobré výsledky pramenia z hlbokého kontextu, nie len z najlepšieho modelu. Vedz, čo staviaš a prečo." },
                    { title: "Osobná AI", desc: "Postav si vlastného AI kompanióna. Čím viac interaguješ, tým viac chápe. Daj mu pravidlá, pamäť, identitu." },
                ],
                pullQuote: "Coding is solved. 90% generované. Otázka je: čo sa oplatí stavať?",
            },
            clarity: {
                label: "AKT 3",
                title: "Jasnosť",
                speaker: "Roman Pii Wagner · Transformational Design",
                insight: "Ak môžeme urobiť čokoľvek a všetko je možné — čo vlastne chceme robiť? Robenie je teraz ľahká časť. Vedieť, čo stavať, je ťažké.",
                points: [
                    { title: "Paralýza možností", desc: "Keď je všetko možné, zamrzneme. Protilátka je cieľ tak silný, že odolá akejkoľvek zmene." },
                    { title: "Obráť sa dovnútra", desc: "Dáta hovoria, čo funguje. Trendy hovoria, čo je hot. Ale podnikateľ sa musí obrátiť dovnútra, aby vedel, čo stavať." },
                    { title: "Myseľ je diferenciátor", desc: "Nástroje sú začiatok. Ale myslenie — mind shift — je skutočná výhoda. Vedieť čo stavať, ísť do hĺbky do seba." },
                    { title: "Ekosystémy namiesto impérií", desc: "Malé tímy, spolupracujúce. Ekosystémy, ktoré vydržia disruption od veľkých korporátov. Moc sa decentralizuje." },
                ],
                pullQuote: "Myslenie je diferenciátor. Nie nástroje.",
            },
            timeline: {
                label: "AI LANDSCAPE",
                title: "Päť rokov, ktoré zmenili všetko",
                events: [
                    { year: "2022", title: "Inteligencia ako produkt", desc: "Spustenie ChatGPT. AI sa stáva spotrebiteľským nástrojom." },
                    { year: "2023", title: "Reasoning je spoľahlivý", desc: "GPT-4. Komplexné úlohy sú možné." },
                    { year: "2024", title: "LLMs ako exekučné enginy", desc: "Agenti sa objavujú. AI začína robiť, nie len odpovedať." },
                    { year: "2025", title: "Coding je vyriešený", desc: "Claude Code + Opus. 90% kódu generované. 135k+ commitov/deň." },
                    { year: "2026", title: "Organizácie prestavaté", desc: "Štrukturálny rewrite. Tímy, produkty, biznisy — redizajnované okolo AI." },
                ],
                stat: {
                    value: "4%",
                    label: "všetkých verejných GitHub commitov",
                    sub: "len z Claude Code · 50× rast za 13 mesiacov",
                },
            },
            shifts: {
                label: "PARADIGMATICKÉ ZMENY",
                title: "Čo sa zmenilo",
                items: [
                    { from: "Špecialista", to: "Generalista", note: "Šírka poráža hĺbku — zatiaľ." },
                    { from: "Informácie", to: "Intuícia a vkus", note: "Prístup má každý. Úsudok málokto." },
                    { from: "Tí čo vedia", to: "Tí čo stavajú", note: "Vedenie je zadarmo. Stavanie je edge." },
                    { from: "Najlepší model", to: "Hlboký kontext", note: "Správny prompting > správny model." },
                    { from: "Učiť sa o", to: "Učiť sa robením", note: "Postav video. Postav appku. Stav." },
                    { from: "Obávať sa", to: "Stavať", note: "Aj keď to zastará — cesta učí." },
                ],
            },
            tools: {
                label: "TOOLKIT",
                title: "Čo používame",
                subtitle: "Nemusí to byť vždy najlepší model. Stačí správny prompting a experimentovanie.",
                categories: [
                    {
                        name: "Stavanie",
                        items: [
                            { tool: "Claude Code", note: "Najlepší na appky, go-to builder" },
                            { tool: "Cursor", note: "IDE s AI — pre seriózny development" },
                            { tool: "Gemini Pro", note: "Silný na frontend" },
                        ],
                    },
                    {
                        name: "Tvorba",
                        items: [
                            { tool: "Midjourney", note: "Generovanie obrazu, explorácia štýlu" },
                            { tool: "Kling", note: "Čínsky video model — prekvapivo dobrý" },
                            { tool: "Nano Banana (Google)", note: "Experimentálny, stojí za vyskúšanie" },
                        ],
                    },
                    {
                        name: "Myslenie",
                        items: [
                            { tool: "Obsidian", note: "Poznámky, knowledge management" },
                            { tool: "Osobná AI (Solas)", note: "Tvoj AI kompanión — denník, terapia, plánovanie" },
                            { tool: "X / Twitter", note: "Miesto na učenie. Newslettre. Research laby." },
                        ],
                    },
                ],
            },
            principles: {
                label: "FRAMEWORK BUILDERA",
                title: "Princípy z pódia",
                items: [
                    { num: "01", title: "Najskôr stav, uč sa stavbou", desc: "Neexistuje rýchlejší spôsob učenia. Postav obrázok. Postav video. Postav appku. Skús znova." },
                    { num: "02", title: "Vkus sa zaslúži, nestiahne", desc: "Študuj veľkých. Kurátoruj obsesívne. Roky skúseností nenahradíš — AI ich zosilní." },
                    { num: "03", title: "Kontext poráža všetko", desc: "Hlboký kontext, nie najlepší model, prináša najlepšie výsledky. Poznaj svoj problém do hĺbky." },
                    { num: "04", title: "Cieľ musí byť dosť silný", desc: "Ak to naozaj chceš, vydržíš akúkoľvek zmenu. Maj dôvod, ktorý prežije disrupciu." },
                    { num: "05", title: "Prestaň sa báť zastarania", desc: "Aj keď sa to, čo postavíš, stane obsolétnym, naučíš sa viac z cesty než z nečinnosti." },
                    { num: "06", title: "Hraj sa so všetkým", desc: "Používaj AI nástroje. Hraj sa. Experimentuj. Správny model na úlohu nie je vždy ten najlepší." },
                ],
            },
            action: {
                label: "TVOJA PONDELKOVÁ AKCIA",
                title: "Jedna vec. Zajtra ráno.",
                subtitle: "Neodnášaj si 50 vecí z dnešného večera. Odnes si jednu.",
                actions: [
                    { domain: "Ak si kreatívec", action: "Otvor Midjourney. Znovu vytvor niečo, čo obdivuješ. Všimni si, čo by si zmenil. To je tvoj vkus." },
                    { domain: "Ak si builder", action: "Vyber si jeden nástroj — Claude, Cursor, Gemini — a postav niečo malé do konca týždňa. Shipni to." },
                    { domain: "Ak si líder", action: "Spýtaj sa tímu: čo robíme, čo by mal robiť AI? Čo automatizujeme, čo by malo byť ľudské?" },
                    { domain: "Ak začínaš", action: "Vyber si jednu myšlienku. Postav ju. Neplánuj. Neskúmaj. Postav ju dnes." },
                ],
                bottom: "Robenie je teraz ľahká časť. Začni.",
            },
            resources: {
                label: "ZDROJE",
                title: "Pokračuj",
                links: [
                    { name: "SORRYWECAN", url: "sorrywecan.com", desc: "Kreatívne štúdio za eventom" },
                    { name: "SUDOLABS", url: "sudolabs.com", desc: "Builder custom AI riešení" },
                    { name: "Research Lab Newsletter", url: "research@sorrywecan.com", desc: "Čo sa učíme, stavame, shipujeme" },
                    { name: "X / Twitter", url: "@sorrywecan", desc: "Miesto na učenie — každý deň" },
                ],
                closing: "Toto bola Edition 01. Každá ďalšia edícia stavia na tom, čo sa naučíme — vrátane od teba.",
                footer: "MINDSHIFT TOOLKIT · EDITION 01 · FEBRUÁR 2026 · SORRYWECAN × SUDOLABS",
            },
        },
    }

    const c = t[lang]

    const fade = (delay = 0) => ({
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay, duration: 0.5 },
    })

    return (
        <div ref={printRef} className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20 print:bg-white">
            {/* Nav — hidden in print */}
            <div className="print:hidden">
                <TopNav
                    lang={lang}
                    customAction={
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePrint}
                                className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors font-code-brand"
                            >
                                PDF ↓
                            </button>
                            <button
                                onClick={() => setLang(lang === "en" ? "sk" : "en")}
                                className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                            >
                                {lang === "en" ? "SK" : "EN"}
                            </button>
                        </div>
                    }
                />
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 01 — COVER                            */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="01" id="cover" className="bg-black text-white pt-24 md:pt-16">
                <OverlappingCircles className="w-[500px] h-[500px] -right-40 -top-20 text-[#0047BB]" />
                <DotGrid className="w-[300px] h-[200px] bottom-12 left-8 text-white" cols={15} rows={10} />
                <DiagonalLines className="w-full h-full top-0 left-0 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">
                            {c.cover.label}
                        </span>
                    </motion.div>

                    <motion.h1 {...fade(0.1)} className="font-bold text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-tighter mt-4">
                        {c.cover.title}
                    </motion.h1>

                    <motion.div {...fade(0.2)} className="mt-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
                        <div>
                            <p className="text-lg md:text-xl text-white/50 max-w-md">{c.cover.subtitle}</p>
                            <p className="text-sm text-white/30 mt-3">{c.cover.note}</p>
                        </div>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/20 md:ml-auto">
                            {c.cover.edition}
                        </span>
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div {...fade(0.3)} className="mt-12 md:mt-16 h-px bg-gradient-to-r from-[#0047BB] via-[#0047BB]/30 to-transparent" />

                    <motion.div {...fade(0.35)} className="mt-6 flex items-center gap-8">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/15">×</span>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-white/15">SUDOLABS</span>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 02 — THE THESIS                       */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="02" id="thesis">
                <ConcentricRings className="w-[400px] h-[400px] -right-32 top-1/2 -translate-y-1/2 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">
                            {c.thesis.label}
                        </span>
                    </motion.div>

                    <motion.blockquote {...fade(0.1)} className="mt-6 text-2xl md:text-4xl lg:text-[2.8rem] font-bold leading-tight tracking-tight max-w-4xl">
                        &ldquo;{c.thesis.quote}&rdquo;
                    </motion.blockquote>

                    <motion.p {...fade(0.15)} className="text-lg md:text-xl text-[#0047BB] mt-6 font-medium">
                        {c.thesis.sub}
                    </motion.p>

                    <motion.div {...fade(0.2)} className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {c.thesis.pillars.map((p) => (
                            <div key={p.num} className="p-5 md:p-6 border border-black/10 bg-white/30">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-[10px] font-code-brand font-bold text-[#0047BB]">{p.num}</span>
                                    <h3 className="text-xl font-bold">{p.title}</h3>
                                </div>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-2">{p.speaker}</p>
                                <p className="text-sm text-black/60">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 03 — ACT 1: TASTE                     */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="03" id="taste">
                <TriangleAccent className="w-[200px] h-[200px] -right-8 top-8 text-[#0047BB]" />
                <DotGrid className="w-[200px] h-[120px] bottom-8 left-8 text-[#0047BB]" cols={10} rows={6} />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()} className="flex items-baseline gap-4 mb-2">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.taste.label}</span>
                    </motion.div>

                    <motion.h2 {...fade(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter">{c.taste.title}</motion.h2>
                    <motion.p {...fade(0.08)} className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-2">{c.taste.speaker}</motion.p>

                    <motion.p {...fade(0.1)} className="text-lg md:text-xl text-black/70 mt-6 max-w-3xl leading-relaxed">
                        {c.taste.insight}
                    </motion.p>

                    <motion.div {...fade(0.15)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.taste.points.map((p, i) => (
                            <div key={i} className="p-5 border border-black/[0.06] bg-black/[0.02]">
                                <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                                <p className="text-sm text-black/50 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fade(0.2)} className="mt-8 border-l-2 border-[#0047BB] pl-6">
                        <p className="text-xl md:text-2xl font-bold text-[#0047BB] italic">&ldquo;{c.taste.pullQuote}&rdquo;</p>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 04 — ACT 2: LEVERAGE                  */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="04" id="leverage">
                <HexGrid className="w-[350px] h-[250px] -right-20 top-12 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()} className="flex items-baseline gap-4 mb-2">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.leverage.label}</span>
                    </motion.div>

                    <motion.h2 {...fade(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter">{c.leverage.title}</motion.h2>
                    <motion.p {...fade(0.08)} className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-2">{c.leverage.speaker}</motion.p>

                    <motion.p {...fade(0.1)} className="text-lg md:text-xl text-black/70 mt-6 max-w-3xl leading-relaxed">
                        {c.leverage.insight}
                    </motion.p>

                    <motion.div {...fade(0.15)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.leverage.points.map((p, i) => (
                            <div key={i} className="p-5 border border-black/[0.06] bg-black/[0.02]">
                                <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                                <p className="text-sm text-black/50 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Team evolution inline infographic */}
                    <motion.div {...fade(0.2)} className="mt-8 p-5 border border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                            {[
                                { year: "2012", people: "100", label: "Waterfall" },
                                { year: "2020", people: "8", label: "Agile" },
                                { year: "2026", people: "2", label: "Agentic" },
                            ].map((era, i) => (
                                <React.Fragment key={era.year}>
                                    {i > 0 && (
                                        <span className="hidden md:block text-[#0047BB]/30 text-2xl">→</span>
                                    )}
                                    <div className="text-center flex-1">
                                        <span className="text-[10px] font-code-brand font-bold tracking-widest text-black/30">{era.year}</span>
                                        <p className="text-3xl md:text-4xl font-bold text-[#0047BB] mt-1">{era.people}</p>
                                        <p className="text-xs text-black/40 mt-1">{lang === "en" ? "people" : "ľudí"}</p>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/20 mt-2">{era.label}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...fade(0.25)} className="mt-6 border-l-2 border-[#0047BB] pl-6">
                        <p className="text-xl md:text-2xl font-bold text-[#0047BB] italic">&ldquo;{c.leverage.pullQuote}&rdquo;</p>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 05 — ACT 3: CLARITY                   */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="05" id="clarity">
                <ConcentricRings className="w-[300px] h-[300px] -left-20 -bottom-16 text-[#0047BB]" />
                <DiagonalLines className="w-[400px] h-[300px] right-0 top-0 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()} className="flex items-baseline gap-4 mb-2">
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.clarity.label}</span>
                    </motion.div>

                    <motion.h2 {...fade(0.05)} className="text-5xl md:text-7xl font-bold tracking-tighter">{c.clarity.title}</motion.h2>
                    <motion.p {...fade(0.08)} className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-2">{c.clarity.speaker}</motion.p>

                    <motion.p {...fade(0.1)} className="text-lg md:text-xl text-black/70 mt-6 max-w-3xl leading-relaxed">
                        {c.clarity.insight}
                    </motion.p>

                    <motion.div {...fade(0.15)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.clarity.points.map((p, i) => (
                            <div key={i} className="p-5 border border-black/[0.06] bg-black/[0.02]">
                                <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                                <p className="text-sm text-black/50 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fade(0.2)} className="mt-8 border-l-2 border-[#0047BB] pl-6">
                        <p className="text-xl md:text-2xl font-bold text-[#0047BB] italic">&ldquo;{c.clarity.pullQuote}&rdquo;</p>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 06 — AI TIMELINE                      */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="06" id="timeline" className="bg-black text-white">
                <DotGrid className="w-[400px] h-[250px] -right-12 top-8 text-[#0047BB]" cols={20} rows={12} />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.timeline.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.timeline.title}</motion.h2>

                    <motion.div {...fade(0.1)} className="mt-10 relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />

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
                                    {/* Node */}
                                    <div className="hidden md:block w-3 h-3 bg-[#0047BB] rounded-full mb-4 relative z-10" />
                                    <span className="text-2xl md:text-3xl font-bold text-[#0047BB]">{evt.year}</span>
                                    <h4 className="font-bold text-sm mt-2">{evt.title}</h4>
                                    <p className="text-xs text-white/40 mt-1 leading-relaxed">{evt.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stat callout */}
                    <motion.div {...fade(0.3)} className="mt-10 p-5 border border-[#0047BB]/30 inline-flex items-baseline gap-4">
                        <span className="text-4xl md:text-5xl font-bold text-[#0047BB]">{c.timeline.stat.value}</span>
                        <div>
                            <p className="text-sm text-white/60">{c.timeline.stat.label}</p>
                            <p className="text-[10px] font-code-brand text-white/30 mt-1">{c.timeline.stat.sub}</p>
                        </div>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 07 — THE SHIFTS                       */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="07" id="shifts">
                <TriangleAccent className="w-[250px] h-[250px] -right-16 -bottom-16 text-[#0047BB] rotate-180" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.shifts.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.shifts.title}</motion.h2>

                    <motion.div {...fade(0.1)} className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {c.shifts.items.map((shift, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.12 + i * 0.06 }}
                                className="p-5 border border-black/[0.06] bg-white/40"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-sm text-black/25 line-through">{shift.from}</span>
                                    <span className="text-[#0047BB] font-bold">→</span>
                                    <span className="text-sm font-bold">{shift.to}</span>
                                </div>
                                <p className="text-xs text-black/50">{shift.note}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 08 — THE TOOLKIT (TOOLS)              */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="08" id="tools">
                <HexGrid className="w-[300px] h-[200px] -right-12 bottom-8 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.tools.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.tools.title}</motion.h2>
                    <motion.p {...fade(0.08)} className="text-sm text-black/50 mt-3 max-w-xl">{c.tools.subtitle}</motion.p>

                    <motion.div {...fade(0.12)} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {c.tools.categories.map((cat) => (
                            <div key={cat.name} className="border border-black/10 bg-white/30">
                                <div className="px-5 py-3 border-b border-black/[0.06] bg-black/[0.02]">
                                    <h3 className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">
                                        {cat.name}
                                    </h3>
                                </div>
                                <div className="p-5 space-y-4">
                                    {cat.items.map((item) => (
                                        <div key={item.tool}>
                                            <p className="font-bold text-sm">{item.tool}</p>
                                            <p className="text-xs text-black/40 mt-0.5">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 09 — BUILDER'S PRINCIPLES             */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="09" id="principles">
                <OverlappingCircles className="w-[400px] h-[400px] -left-32 top-1/2 -translate-y-1/2 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.principles.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.principles.title}</motion.h2>

                    <motion.div {...fade(0.1)} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {c.principles.items.map((p) => (
                            <div key={p.num} className="p-5 border border-black/[0.06] bg-black/[0.02]">
                                <span className="inline-flex items-center justify-center w-7 h-7 bg-[#0047BB] text-white text-[10px] font-code-brand font-bold mb-3">
                                    {p.num}
                                </span>
                                <h4 className="font-bold text-sm mb-2">{p.title}</h4>
                                <p className="text-xs text-black/50 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 10 — YOUR MONDAY ACTION               */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="10" id="action" className="bg-black text-white">
                <DiagonalLines className="w-full h-full top-0 left-0 text-[#0047BB]" />
                <ConcentricRings className="w-[300px] h-[300px] -right-16 -bottom-16 text-[#0047BB]" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.action.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.action.title}</motion.h2>
                    <motion.p {...fade(0.08)} className="text-lg text-white/40 mt-3">{c.action.subtitle}</motion.p>

                    <motion.div {...fade(0.12)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.action.actions.map((a, i) => (
                            <div key={i} className="p-5 border border-white/10 bg-white/[0.03]">
                                <span className="text-[10px] font-code-brand font-bold tracking-widest text-[#0047BB] uppercase">
                                    {a.domain}
                                </span>
                                <p className="text-sm text-white/70 mt-2 leading-relaxed">{a.action}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.p {...fade(0.2)} className="mt-10 text-2xl md:text-3xl font-bold text-[#0047BB]">
                        {c.action.bottom}
                    </motion.p>
                </div>
            </ToolkitPage>

            {/* ═══════════════════════════════════════════ */}
            {/* PAGE 11 — RESOURCES                        */}
            {/* ═══════════════════════════════════════════ */}
            <ToolkitPage num="11" id="resources">
                <DotGrid className="w-[250px] h-[160px] -right-4 top-8 text-[#0047BB]" cols={12} rows={8} />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold tracking-[0.4em] text-[#0047BB]">{c.resources.label}</span>
                    </motion.div>
                    <motion.h2 {...fade(0.05)} className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{c.resources.title}</motion.h2>

                    <motion.div {...fade(0.1)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {c.resources.links.map((link) => (
                            <div key={link.name} className="p-5 border border-black/10 bg-white/30 flex items-start gap-4">
                                <span className="w-2 h-2 bg-[#0047BB] rounded-full mt-1.5 shrink-0" />
                                <div>
                                    <p className="font-bold text-sm">{link.name}</p>
                                    <p className="text-[10px] font-code-brand text-[#0047BB] mt-0.5">{link.url}</p>
                                    <p className="text-xs text-black/40 mt-1">{link.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div {...fade(0.2)} className="mt-10 border-t border-black/10 pt-8">
                        <p className="text-lg md:text-xl text-black/60 italic max-w-2xl">{c.resources.closing}</p>
                    </motion.div>

                    <motion.div {...fade(0.25)} className="mt-8">
                        <p className="text-[10px] font-code-brand font-bold tracking-[0.3em] text-black/15">
                            {c.resources.footer}
                        </p>
                    </motion.div>
                </div>
            </ToolkitPage>

            {/* Footer — print hidden */}
            <footer className="py-10 text-center border-t border-black/10 print:hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 font-code-brand">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
