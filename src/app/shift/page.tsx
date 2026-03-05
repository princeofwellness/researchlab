"use client"

import React, { useState } from "react"

import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function ToolkitPage({ children, num, className, id }: { children: React.ReactNode; num: string; className?: string; id?: string }) {
    return (
        <section
            id={id}
            className={cn(
                "toolkit-page box-border w-full md:w-[297mm] min-h-[70vh] md:h-[210mm] bg-[#f4ede6] p-6 md:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-center mx-auto my-0 md:my-4 print:w-[297mm] print:h-[210mm] print:p-6 print:my-0 print:bg-[#f4ede6]",
                className
            )}
        >
            <span className="absolute top-4 right-6 text-[10px] font-code-brand font-bold tracking-[0.3em] text-black/15 print:text-black/10">
                {num}
            </span>
            {children}
        </section>
    )
}

export default function ShiftToolkitPage() {
    const [lang, setLang] = useState<"en" | "sk">("en")


    const handlePrint = () => {
        window.print()
    }

    const t = {
        en: {
            cover: {
                label: "MINDSHIFT TOOLKIT",
                title: "MINDSHIFT · Edition 01",
                edition: "Edition 01 · February 2026",
                subtitle: "3.5 hours of insight, distilled into what matters.",
                note: "A toolkit from the speakers, for the builders.",
                railHint: "As railways commoditized transport, AI is commoditizing intelligence.",
            },
            thesis: {
                label: "THE THESIS",
                quote: "The most significant organizational shift of this decade is the transformation of the knower into the doer.",
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
                            { tool: "Cursor", note: "The ultimate AI IDE for serious implementation" },
                            { tool: "Claude Code", note: "Go-to agent for end-to-end app builds in terminal" },
                            { tool: "OpenCode", note: "Orchestrator for complex AI coding agents" },
                            { tool: "Ghostty", note: "Lightning-fast terminal for macOS and iOS" },
                            { tool: "v0 / Lovable", note: "Instant UI generation and component prototyping" },
                        ],
                    },
                    {
                        name: "Creating",
                        items: [
                            { tool: "Midjourney", note: "Image generation and aesthetic exploration" },
                            { tool: "Google AI Studio", note: "Testing raw Gemini models with massive context" },
                            { tool: "Nano Banana", note: "Experimental format play and prototyping from Google" },
                        ],
                    },
                    {
                        name: "Thinking & Research",
                        items: [
                            { tool: "NotebookLM", note: "Parsing huge documents, podcasts, and synthesis" },
                            { tool: "Deep Research", note: "Agentic deep-dives into complex web topics (OpenAI/Gemini)" },
                            { tool: "ChatGPT (o3-mini)", note: "Advanced reasoning for complex logic and math" },
                        ],
                    },
                    {
                        name: "Co-Working",
                        items: [
                            { tool: "Claude (Projects)", note: "Maintaining context and generating interactive artifacts" },
                            { tool: "Personal AI (Solas)", note: "Reflection, journaling, planning companion" },
                            { tool: "X / Twitter", note: "Real-time research and frontier discovery" },
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
                title: "MINDSHIFT · Edition 01",
                edition: "Edition 01 · Február 2026",
                subtitle: "3,5 hodiny poznatkov, zhustených do toho podstatného.",
                note: "Od rečníkov pre ľudí, ktorí tvoria.",
                railHint: "Tak ako železnice zmenili dopravu na bežnú vec, AI robí to isté s inteligenciou.",
            },
            thesis: {
                label: "TÉZA",
                quote: "Najvýznamnejší organizačný posun tejto dekády je premena toho, kto vie na toho, kto robí.",
                sub: "V ére agentického AI môže tvoriť každý.",
                commoditization: {
                    title: "Komoditizácia inteligencie",
                    body: "Prvá priemyselná revolúcia násobila fyzickú silu. Táto násobí kognitívnu silu. Inteligencia sa stáva infraštruktúrou.",
                    analogy: "Romanova analógia železníc: časom nebolo kľúčové vlastniť koľaje, ale vedieť, kam a prečo ideš.",
                    sputnik: "Súčasná vlna AI investícií pripomína Sputnik efekt — strategická naliehavosť, súťaž štátov a masívne zrýchľovanie.",
                },
                pillars: [
                    { num: "01", title: "Vkus", speaker: "Roland", desc: "Čo oddeľuje dobré od nezabudnuteľného." },
                    { num: "02", title: "Využitie", speaker: "Ján", desc: "Čo dnes dokáže vytvoriť jeden človek." },
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
                        title: "Inšpiráciu hľadaj zvonka, úsudok si nechaj",
                        desc: "Nolanov look. Dalího textúra. Diela veľkých autorov sa stávajú živou referenčnou knižnicou.",
                    },
                    {
                        title: "Tvor, aby si sa naučil",
                        desc: "Choď do Midjourney. Spracuj. Strihaj. Skús znova. Neexistuje rýchlejší spôsob učenia než tvorba.",
                    },
                ],
                pullQuote: "Najlepší spôsob učenia vždy bol - tvoriť.",
            },
            leverage: {
                label: "AKT 2",
                title: "Využitie",
                speaker: "Ján Koscelanský · CPO & Co-founder, SUDOLABS",
                insight: "To, čo sa kedysi neoplatilo budovať alebo bolo príliš drahé, je dnes realizovateľné. A tím sa pritom učí rýchlejšie.",
                points: [
                    {
                        title: "Gutenbergov moment",
                        desc: "Tlačiarenský lis odstránil pisárov, no vytvoril autorov. AI odstraňuje opakovanie, no vytvára novú generáciu tvorcov.",
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
                        desc: "Vybuduj si AI partnera. Pravidlá, pamäť, identita. Vzťah je násobič.",
                    },
                ],
                pullQuote: "Programovanie je vyriešené. 90% generované. Otázka je: čo sa oplatí budovať?",
                gutenberg: {
                    leftTitle: "Tlačiarenský lis",
                    leftDesc: "Znalosti sa dali kopírovať. Autorita sa decentralizovala.",
                    rightTitle: "Agentické AI",
                    rightDesc: "Realizácia sa dá kopírovať. Schopnosť sa decentralizuje.",
                },
            },
            clarity: {
                label: "AKT 3",
                title: "Jasnosť",
                speaker: "Roman Pii Wagner · Transformational Design",
                insight: "Ak môžeme robiť čokoľvek, čo vlastne chceme robiť? Robenie je ľahšie než kedykoľvek predtým. Náročné je vedieť, čo vytvoriť.",
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
                        desc: "Ak chceš byť AI-first, najprv musíš vedieť tvoriť s ľuďmi a pre ľudí.",
                    },
                ],
                pullQuote: "Myslenie je to, čo rozhoduje. Nie nástroje.",
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
                        desc: "Buduj autonómnych agentov, ktorí rozšíria tvoj operatívny dosah. Nech softvér nesie opakujúcu sa kognitívnu záťaž.",
                    },
                    {
                        title: "Cesta 2 · Vnútorný rozvoj",
                        desc: "Trénuj prítomnosť, intuíciu a etické rozlišovanie. Keď je realizácia lacná, orientácia je najcennejšia schopnosť.",
                    },
                ],
            },
            timeline: {
                label: "AI LANDSCAPE",
                title: "Päť rokov, ktoré zmenili všetko",
                events: [
                    { year: "2022", title: "Inteligencia ako produkt", desc: "ChatGPT štartuje. AI sa dostáva k bežným ľuďom." },
                    { year: "2023", title: "Uvažovanie je spoľahlivé", desc: "GPT-4 sprístupňuje komplexnejšie pracovné reťazce." },
                    { year: "2024", title: "Realizačné enginy", desc: "Objavujú sa agenti. AI už nielen odpovedá, ale vykonáva." },
                    { year: "2025", title: "Programovanie je vyriešené", desc: "90% generovaného kódu sa stáva normou." },
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
                neuro: "Paralelne rastie neurobiologická línia: vedomie, pozornosť a poznávanie sa stávajú strategickou témou firiem.",
            },
            shifts: {
                label: "PARADIGMATICKÉ ZMENY",
                title: "Čo sa zmenilo",
                items: [
                    { from: "Špecialista", to: "Generalista", note: "V ranom AI-natívnom svete vyhráva šírka záberov." },
                    { from: "Informácie", to: "Intuícia a vkus", note: "Prístup má každý. Rozlišovanie málokto." },
                    { from: "Tí, čo vedia", to: "Tí, čo tvoria", note: "Vedenie je lacné. Dodanie rozhoduje." },
                    { from: "Najlepší model", to: "Hlboký kontext", note: "Kvalita promptu je funkcia kvality kontextu." },
                    { from: "Učiť sa o", to: "Učiť sa robením", note: "Vytvor artefakt. Vybuduj porozumenie." },
                    { from: "Obávať sa", to: "Tvoriť", note: "Aj zastaraný výstup buduje trvalú schopnosť." },
                ],
            },
            tools: {
                label: "TOOLKIT",
                title: "Čo používame",
                subtitle: "Nemusí to byť najlepší model. Musí to byť správny experiment.",
                categories: [
                    {
                        name: "Budovanie",
                        items: [
                            { tool: "Cursor", note: "Ultimátne AI IDE pre serióznu implementáciu" },
                            { tool: "Claude Code", note: "Go-to agent na end-to-end appky v termináli" },
                            { tool: "OpenCode", note: "Orchestrátor AI agentov na komplexné kódovanie" },
                            { tool: "Ghostty", note: "Bleskový terminál pre macOS a iOS" },
                            { tool: "v0 / Lovable", note: "Okamžité generovanie UI a prototypovanie komponentov" },
                        ],
                    },
                    {
                        name: "Tvorba",
                        items: [
                            { tool: "Midjourney", note: "Generovanie obrazu a skúmanie estetiky" },
                            { tool: "Google AI Studio", note: "Testovanie surových Gemini modelov s masívnym kontextom" },
                            { tool: "Nano Banana", note: "Experimenty s formátom a prototypovanie od Googlu" },
                        ],
                    },
                    {
                        name: "Myslenie a Rešerš",
                        items: [
                            { tool: "NotebookLM", note: "Spracovanie obrovských dokumentov, podcasty a syntéza" },
                            { tool: "Deep Research", note: "Agentický hĺbkový výskum komplexných tém (OpenAI/Gemini)" },
                            { tool: "ChatGPT (o3-mini)", note: "Pokročilé uvažovanie pre komplexnú logiku a matematiku" },
                        ],
                    },
                    {
                        name: "Spolupráca (Co-Work)",
                        items: [
                            { tool: "Claude (Projects)", note: "Udržiavanie kontextu a tvorba interaktívnych artefaktov" },
                            { tool: "Osobná AI (Solas)", note: "Partner pre reflexiu, journaling a plánovanie" },
                            { tool: "X / Twitter", note: "Priebežný výskum a sledovanie noviniek" },
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
                        title: "Najprv tvor, uč sa tvorbou",
                        desc: "Najrýchlejšie učenie je robiť a opakovane vylepšovať na reálnom výsledku.",
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
                        title: "Prestaň sa báť, že to zastará",
                        desc: "Aj zastarané produkty učia rozhodovanie a budujú schopnosti.",
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
                        action: "Vyber jednu myšlienku a vytvor ju hneď. Bez dokonalej prípravnej fázy.",
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
                    { name: "Research Lab Newsletter", url: "research@sorrywecan.com", desc: "Čo sa učíme, tvoríme a posúvame ďalej" },
                    { name: "X / Twitter", url: "@sorrywecan", desc: "Najrýchlejšie miesto na učenie a update kontextu" },
                ],
                stat: "1 schopnosť vybudovaná tento týždeň má väčšiu hodnotu než 100 uložených odkazov.",
                qr: "Naskenuj pre aktualizácie",
                closing: "Toto bola Edition 01. Ďalšie edície budú spolu-vytvorené tým, čo komunita vytvorí ďalej.",
                footer: "MINDSHIFT TOOLKIT · EDITION 01 · FEBRUÁR 2026 · SORRYWECAN × SUDOLABS",
            },
            backCover: {
                statement: "Robenie je teraz ľahká časť. Otázka je: čo sa oplatí vytvoriť?",
                edition: "Edition 01 · 2026",
            },
        },
    }

    const c = t[lang]


    const kickerClass = "text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#0047BB]"
    const heroClass = "text-[28px] md:text-[48px] font-bold leading-[0.95] tracking-tight"
    const bodyClass = "text-[13px] md:text-[14px] text-black/60 leading-relaxed"

    return (
        <>
            <style jsx global>{`
                @media print {
                    @page {
                        size: 297mm 210mm;
                        margin: 0;
                    }
                    html, body {
                        margin: 0;
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .toolkit-page {
                        page-break-after: always;
                        page-break-inside: avoid;
                        break-after: page;
                        break-inside: avoid;
                        overflow: hidden;
                    }
                    .toolkit-page:last-of-type {
                        page-break-after: avoid;
                        break-after: avoid;
                    }
                    .print\:hidden {
                        display: none !important;
                    }
                }
            `}</style>
            <div className="min-h-screen bg-white md:bg-[#d6cec6] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20 print:bg-white flex flex-col items-center">
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

            <ToolkitPage num="01" id="cover" className="pt-24 md:pt-16">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.cover.label}</p>
                    <h1 className="mt-6 text-[44px] md:text-[96px] font-bold leading-[0.88] tracking-tight max-w-5xl">{c.cover.title}</h1>
                    <p className="mt-8 max-w-xl text-[14px] md:text-[20px] text-black/60 leading-relaxed">{c.cover.subtitle}</p>
                    <p className={`${bodyClass} mt-4 max-w-xl`}>{c.cover.note}</p>
                    <div className="mt-12 pt-5 border-t border-black/10 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                        <p className={`${kickerClass} !tracking-[0.3em] md:!tracking-[0.35em]`}>{c.cover.edition}</p>
                        <p className={`${bodyClass} md:ml-auto max-w-2xl`}>{c.cover.railHint}</p>
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="02" id="thesis">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.thesis.label}</p>
                    <blockquote className="mt-4 text-[26px] md:text-[42px] font-bold leading-[0.95] tracking-tight max-w-5xl">{c.thesis.quote}</blockquote>
                    <p className="mt-4 text-[16px] md:text-[20px] font-bold text-[#0047BB]">{c.thesis.sub}</p>
                    <div className="mt-6 border-t border-black/10 pt-5">
                        <h3 className="text-[20px] md:text-[26px] font-bold tracking-tight">{c.thesis.commoditization.title}</h3>
                        <p className={`${bodyClass} mt-4 max-w-4xl`}>{c.thesis.commoditization.body}</p>
                        <p className={`${bodyClass} mt-3 max-w-4xl`}>{c.thesis.commoditization.analogy}</p>
                        <p className="mt-2 text-[11px] md:text-[12px] text-[#0047BB]">{c.thesis.commoditization.sputnik}</p>
                    </div>
                    <div className="mt-5 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {c.thesis.pillars.map((p, i) => (
                                <div key={p.num} className={cn("p-4 md:p-5", i < 2 && "md:border-r md:border-black/10", i < 2 && "border-b md:border-b-0 border-black/10") }>
                                    <p className="text-[22px] md:text-[28px] font-bold leading-none text-[#0047BB]">{p.num}</p>
                                    <h3 className="mt-2 text-[24px] md:text-[32px] font-bold leading-[0.95] tracking-tight">{p.title}</h3>
                                    <p className="mt-3 text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{p.speaker}</p>
                                    <p className={`${bodyClass} mt-1`}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="03" id="taste">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.taste.label}</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
                        <div className="md:col-span-7">
                            <h2 className="text-[40px] md:text-[72px] font-bold leading-[0.88] tracking-tight">{c.taste.title}</h2>
                            <p className="mt-4 text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{c.taste.speaker}</p>
                            <p className="mt-5 text-[15px] md:text-[18px] text-black/65 leading-relaxed">{c.taste.insight}</p>
                        </div>
                        <div className="md:col-span-5 border border-black/10 p-5 md:p-6">
                            <p className={kickerClass}>Hero Point</p>
                            <h3 className="mt-3 text-[22px] md:text-[28px] font-bold leading-[0.95] tracking-tight">{c.taste.points[0].title}</h3>
                            <p className={`${bodyClass} mt-4`}>{c.taste.points[0].desc}</p>
                        </div>
                    </div>
                    <div className="mt-4 border border-black/10 grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
                        {c.taste.points.slice(1).map((point, i) => (
                            <div key={point.title} className={cn("p-6", i < 2 && "md:border-r md:border-black/10", i < 2 && "border-b md:border-b-0 border-black/10") }>
                                <h4 className="text-[16px] md:text-[20px] font-bold leading-tight tracking-tight">{point.title}</h4>
                                <p className={`${bodyClass} mt-3`}>{point.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5 text-[26px] md:text-[40px] font-bold tracking-tight leading-[0.95] max-w-5xl text-[#0047BB]">{c.taste.pullQuote}</p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="04" id="leverage">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.leverage.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.leverage.title}</h2>
                    <p className="mt-4 text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{c.leverage.speaker}</p>
                    <p className={`${bodyClass} mt-2 max-w-4xl`}>{c.leverage.insight}</p>

                    <div className="mt-3 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                            <div className="md:col-span-8 p-4 md:p-5 md:border-r border-black/10 border-b md:border-b-0">
                                <p className={kickerClass}>Team Evolution</p>
                                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                                    {[
                                        { year: "2012", people: "100", label: "Waterfall" },
                                        { year: "2020", people: "8", label: "Agile" },
                                        { year: "2026", people: "2", label: "Agentic" },
                                    ].map((era, i) => (
                                        <div key={era.year} className={cn(i > 0 && "border-l border-black/10")}>
                                            <p className="text-[10px] md:text-[12px] font-code-brand font-bold tracking-[0.2em] text-black/40">{era.year}</p>
                                            <p className="mt-1 text-[28px] md:text-[36px] font-bold leading-none tracking-tight">{era.people}</p>
                                            <p className="mt-1 text-[12px] md:text-[14px] text-black/55">{lang === "en" ? "people" : "ľudí"}</p>
                                            <p className="mt-2 text-[10px] md:text-[11px] font-code-brand uppercase tracking-[0.25em] text-[#0047BB]">{era.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:col-span-4 p-4 md:p-5">
                                <p className={kickerClass}>Gutenberg Moment</p>
                                <div className="mt-2 space-y-2">
                                    <div>
                                        <h4 className="text-[14px] md:text-[16px] font-bold tracking-tight">{c.leverage.gutenberg.leftTitle}</h4>
                                        <p className={`${bodyClass} mt-2`}>{c.leverage.gutenberg.leftDesc}</p>
                                    </div>
                                    <p className="text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">to</p>
                                    <div>
                                        <h4 className="text-[14px] md:text-[16px] font-bold tracking-tight">{c.leverage.gutenberg.rightTitle}</h4>
                                        <p className={`${bodyClass} mt-2`}>{c.leverage.gutenberg.rightDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
                            {c.leverage.points.map((p, i) => (
                                <div key={p.title} className={cn("px-4 py-3", i % 2 === 0 && "md:border-r md:border-black/10", i < c.leverage.points.length - 2 && "border-b border-black/10")}>
                                    <h4 className="text-[14px] md:text-[16px] font-bold leading-tight tracking-tight">{p.title}</h4>
                                    <p className={`${bodyClass} mt-1`}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-2 text-[18px] md:text-[24px] font-bold tracking-tight leading-[0.95] max-w-4xl">{c.leverage.pullQuote}</p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="05" id="clarity">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.clarity.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.clarity.title}</h2>
                    <p className="mt-4 text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{c.clarity.speaker}</p>
                    <p className="mt-4 text-[15px] md:text-[18px] text-black/65 leading-relaxed max-w-5xl">{c.clarity.insight}</p>
                    <p className="mt-4 text-[26px] md:text-[36px] font-bold leading-[0.95] tracking-tight max-w-5xl">{c.clarity.pullQuote}</p>

                    <div className="mt-5 border border-black/10 grid grid-cols-1 md:grid-cols-12 gap-0 border border-black/10">
                        <div className="md:col-span-6 p-4 border-b md:border-b-0 md:border-r border-black/10">
                            <h3 className="text-[20px] md:text-[26px] font-bold leading-[0.95] tracking-tight">{c.clarity.points[2].title}</h3>
                            <p className={`${bodyClass} mt-4`}>{c.clarity.points[2].desc}</p>
                        </div>
                        <div className="md:col-span-6 p-4">
                            <h3 className="text-[20px] md:text-[26px] font-bold leading-[0.95] tracking-tight">{c.clarity.points[3].title}</h3>
                            <p className={`${bodyClass} mt-4`}>{c.clarity.points[3].desc}</p>
                        </div>
                        <div className="md:col-span-12 p-4 border-t border-black/10">
                            <h3 className="text-[18px] md:text-[22px] font-bold leading-tight tracking-tight">{c.clarity.points[4].title}</h3>
                            <p className={`${bodyClass} mt-3 max-w-5xl`}>{c.clarity.points[4].desc}</p>
                        </div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10">
                        {c.clarity.points.slice(0, 2).map((point, i) => (
                            <div key={point.title} className={cn("p-6", i === 0 && "md:border-r md:border-black/10", i === 0 && "border-b md:border-b-0 border-black/10")}>
                                <h4 className="text-[20px] md:text-[28px] font-bold tracking-tight">{point.title}</h4>
                                <p className={`${bodyClass} mt-3`}>{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="06" id="human-edge">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.humanEdge.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.humanEdge.title}</h2>
                    <p className={`${bodyClass} mt-6 max-w-5xl`}>{c.humanEdge.intro}</p>

                    <div className="mt-5 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {c.humanEdge.themes.map((theme, i) => (
                                <div key={theme.title} className={cn("p-6", i % 2 === 0 && "md:border-r md:border-black/10", i < c.humanEdge.themes.length - 2 && "border-b border-black/10")}>
                                    <h3 className="text-[18px] md:text-[24px] font-bold tracking-tight leading-tight">{theme.title}</h3>
                                    <p className={`${bodyClass} mt-3`}>{theme.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {c.humanEdge.paths.map((path, i) => (
                            <div key={path.title} className="border border-black/10 p-6">
                                <p className={kickerClass}>{path.title}</p>
                                <p className={`${bodyClass} mt-4`}>{path.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="07" id="timeline">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.timeline.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.timeline.title}</h2>
                    <div className="mt-5 border-t border-black/10 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-black/10">
                            {c.timeline.events.map((evt, i) => (
                                <div key={evt.year} className={cn("p-3 md:p-4", i < c.timeline.events.length - 1 && "md:border-r md:border-black/10", i < c.timeline.events.length - 1 && "border-b md:border-b-0 border-black/10")}>
                                    <p className="text-[24px] md:text-[30px] font-bold tracking-tight text-[#0047BB]">{evt.year}</p>
                                    <h4 className="mt-1 text-[15px] md:text-[17px] font-bold leading-tight">{evt.title}</h4>
                                    <p className="mt-1 text-[12px] md:text-[13px] text-black/60 leading-relaxed">{evt.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 border border-black/10 p-4 md:p-5">
                        <p className="text-[44px] md:text-[56px] font-bold leading-none tracking-tight">{c.timeline.stat.value}</p>
                        <p className="mt-2 text-[18px] md:text-[24px] font-bold leading-tight max-w-4xl">{c.timeline.stat.label}</p>
                        <p className={`${bodyClass} mt-3 max-w-4xl`}>{c.timeline.stat.sub}</p>
                    </div>
                    <p className={`${bodyClass} mt-3 max-w-5xl`}>{c.timeline.neuro}</p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="08" id="shifts">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.shifts.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.shifts.title}</h2>
                    <div className="mt-9 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {c.shifts.items.map((shift, i) => (
                                <div key={shift.from} className={cn(
                                    "p-6",
                                    i % 3 !== 2 && "lg:border-r lg:border-black/10",
                                    i % 2 === 0 && "md:border-r md:border-black/10 lg:border-r",
                                    i < c.shifts.items.length - 3 && "lg:border-b lg:border-black/10",
                                    i < c.shifts.items.length - 2 && "md:border-b md:border-black/10 lg:border-b",
                                    i < c.shifts.items.length - 1 && "border-b border-black/10 md:border-b"
                                )}>
                                    <p className="text-[12px] md:text-[14px] text-black/35 line-through">{shift.from}</p>
                                    <p className="mt-2 text-[20px] md:text-[28px] font-bold leading-tight tracking-tight">{shift.to}</p>
                                    <p className="mt-1 text-[10px] md:text-[11px] font-code-brand uppercase tracking-[0.2em] text-[#0047BB]">→</p>
                                    <p className="mt-3 text-[13px] md:text-[14px] text-black/60 leading-relaxed">{shift.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="09" id="tools">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.tools.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.tools.title}</h2>
                    <p className={`${bodyClass} mt-5 max-w-3xl`}>{c.tools.subtitle}</p>

                    <div className="mt-4 border border-black/10 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {c.tools.categories.map((cat, i) => (
                                <div key={cat.name} className={cn("p-0", i % 2 === 0 && "md:border-r md:border-black/10", i < 2 && "border-b border-black/10")}>
                                    <div className="px-3 py-2 md:px-4 md:py-2 border-b border-black/10">
                                        <p className={`${kickerClass} !text-[8px] md:!text-[10px]`}>{cat.name}</p>
                                    </div>
                                    {cat.items.map((item, itemIndex) => (
                                        <div key={item.tool} className={cn("px-3 py-2 md:px-4 md:py-2", itemIndex < cat.items.length - 1 && "border-b border-black/10")}>
                                            <p className="text-[14px] md:text-[15px] font-bold leading-tight">{item.tool}</p>
                                            <p className="mt-0.5 text-[11px] md:text-[11px] text-black/50 leading-snug">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="10" id="principles">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.principles.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.principles.title}</h2>
                    <div className="mt-4 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {c.principles.items.map((p, i) => (
                                <div key={p.num} className={cn("p-3 md:p-4", i % 2 === 0 && "md:border-r md:border-black/10", i < c.principles.items.length - 2 && "border-b border-black/10")}>
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">{p.num}</p>
                                    <h4 className="mt-1 text-[18px] md:text-[22px] font-bold leading-[0.95] tracking-tight">{p.title}</h4>
                                    <p className={`${bodyClass} mt-1`}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ToolkitPage>

            <ToolkitPage num="11" id="action">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.action.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.action.title}</h2>
                    <p className={`${bodyClass} mt-5`}>{c.action.subtitle}</p>
                    <div className="mt-8 border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {c.action.actions.map((a, i) => (
                                <div key={a.domain} className={cn("p-6", i % 2 === 0 && "md:border-r md:border-black/10", i < c.action.actions.length - 2 && "border-b border-black/10")}>
                                    <p className={kickerClass}>{a.domain}</p>
                                    <p className={`${bodyClass} mt-3`}>{a.action}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10">
                        <div className="p-6 border-b md:border-b-0 md:border-r border-black/10">
                            <p className={kickerClass}>{c.action.paths.title}</p>
                            <p className={`${bodyClass} mt-4`}>{c.action.paths.first}</p>
                        </div>
                        <div className="p-6">
                            <p className={kickerClass}>{c.action.paths.title}</p>
                            <p className={`${bodyClass} mt-4`}>{c.action.paths.second}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-[28px] md:text-[44px] font-bold leading-[0.95] tracking-tight">{c.action.bottom}</p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="12" id="resources">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    <p className={kickerClass}>{c.resources.label}</p>
                    <h2 className={`${heroClass} mt-5`}>{c.resources.title}</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-0 border border-black/10">
                        <div className="md:col-span-8">
                            {c.resources.links.map((link, i) => (
                                <div key={link.name} className={cn("p-4", i < c.resources.links.length - 1 && "border-b border-black/10")}>
                                    <p className="text-[16px] md:text-[20px] font-bold tracking-tight">{link.name}</p>
                                    <p className="mt-1 text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">{link.url}</p>
                                    <p className="mt-2 text-[13px] md:text-[14px] text-black/60">{link.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-black/10 p-6 flex items-center justify-center">
                            <p className={`${kickerClass} text-center`}>{c.resources.qr}</p>
                        </div>
                    </div>
                    <p className="mt-5 text-[26px] md:text-[36px] font-bold leading-[0.95] tracking-tight max-w-5xl">{c.resources.stat}</p>
                    <p className="mt-3 pt-3 border-t border-black/10 text-[14px] md:text-[16px] text-black/60 leading-relaxed max-w-4xl">{c.resources.closing}</p>
                    <p className="mt-3 text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/35">{c.resources.footer}</p>
                </div>
            </ToolkitPage>

            <ToolkitPage num="13" id="back-cover">
                <div className="relative z-10 max-w-5xl mx-auto w-full h-full flex flex-col items-center justify-center text-center">
                    <p className="text-[30px] md:text-[56px] font-bold leading-[0.9] tracking-tight max-w-4xl">{c.backCover.statement}</p>
                    <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
                        <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30">SORRYWECAN × SUDOLABS</p>
                        <p className="text-[9px] md:text-[10px] font-code-brand uppercase tracking-[0.3em] text-black/20">{c.backCover.edition}</p>
                    </div>
                </div>
            </ToolkitPage>

            <footer className="py-10 text-center border-t border-black/10 print:hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-25 font-code-brand">SORRYWECAN · RESEARCH LAB · 2026</p>
            </footer>
            </div>
        </>
    )
}
