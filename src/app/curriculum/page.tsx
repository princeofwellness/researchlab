"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay },
})

type Lang = "en" | "sk"

type MetaItem = {
    label: string
    value: string
    sub: string
}

type NarrativeAct = {
    act: string
    title: string
    subtitle: string
    speaker: string
    theme: string
}

type TimelineBlock = {
    time: string
    duration: string
    num: string
    type: "host" | "keynote" | "qa" | "panel" | "networking"
    title: string
    speaker: string
    role?: string
    topics: string[]
    notes: string
    laneGuard?: string
    plantedQuestions?: string[]
}

type TransitionBlockContent = {
    title: string
    speaker: string
    role?: string
    topics: string[]
    notes: string
    laneGuard?: string
    plantedQuestions?: string[]
}

type ProductionNote = {
    flag: string
    note: string
}

type CurriculumContent = {
    header: {
        label: string
        title: string
        subtitle: string[]
    }
    meta: MetaItem[]
    narrativeArc: {
        label: string
        description: string
        acts: NarrativeAct[]
    }
    timeline: {
        label: string
        intro: TimelineBlock
        roland: TimelineBlock
        rolandQa: TimelineBlock
        transition1: TransitionBlockContent
        jan: TimelineBlock
        janQa: TimelineBlock
        break: TimelineBlock
        transition2: TransitionBlockContent
        roman: TimelineBlock
        romanQa: TimelineBlock
        hotSeat: TimelineBlock
        closing: TimelineBlock
        networking: TimelineBlock
    }
    postEvent: {
        label: string
        toolkitTitle: string
        items: string[]
        note: string
    }
    laneGuards: {
        label: string
        description: string
        ownLabel: string
        avoidLabel: string
        craftLabel: string
        cards: Array<{
            speaker: string
            lane: string
            own: string
            avoid: string
            craft: string
        }>
    }
    productionNotes: {
        label: string
        items: ProductionNote[]
    }
}

export default function CurriculumPage() {
    const [lang, setLang] = useState<Lang>("en")

    const content: Record<Lang, CurriculumContent> = {
        en: {
            header: {
                label: "Internal · Workshop Structure",
                title: "THE MINDSHIFT",
                subtitle: [
                    "Full curriculum, speaker topics, narrative arc, and timing.",
                    "Living document for speakers and the team.",
                ],
            },
            meta: [
                { label: "Date", value: "26. feb 2026", sub: "Streda" },
                { label: "Time", value: "17:00 – 20:20", sub: "~3h 30min" },
                { label: "Venue", value: "SORRYWECAN Studio", sub: "Pečnianska 7, BA" },
                { label: "Format", value: "3 Keynotes", sub: "+ Slido Q&A + Hot Seat + Break" },
                { label: "Price", value: "€99", sub: "Osobne / Online" },
            ],
            narrativeArc: {
                label: "Narrative Arc",
                description:
                    "Three acts, one story. Each speaker builds on the previous one. The audience moves from taste to leverage to clarity.",
                acts: [
                    {
                        act: "Act 1",
                        title: "TASTE",
                        subtitle: "Vkus",
                        speaker: "Roland",
                        theme: "What separates good from unforgettable. Everyone has the same tools. The difference is taste.",
                    },
                    {
                        act: "Act 2",
                        title: "LEVERAGE",
                        subtitle: "Využitie",
                        speaker: "Ján",
                        theme: "What one person can build today. New businesses, new ways to operate.",
                    },
                    {
                        act: "Act 3",
                        title: "CLARITY",
                        subtitle: "Jasnosť",
                        speaker: "Roman",
                        theme: "What stays human and what to delegate. Decision frameworks you'll actually use.",
                    },
                ],
            },
            timeline: {
                label: "Full Timeline",
                intro: {
                    time: "17:00",
                    duration: "3–5 min",
                    num: "00",
                    type: "host",
                    title: "Intro",
                    speaker: "Prince",
                    topics: [
                        "Keep it tight. 3 minutes, not 10. They bought tickets — they know why they're here.",
                        "One sentence that hits. Then introduce Roland. Go.",
                        "Quick thread: Taste → Leverage → Clarity. Three perspectives, one story.",
                        "Edition 01 — we're building this with them, not just for them.",
                    ],
                    notes:
                        "Don't open with logistics. Open with something that makes them glad they came. One sentence, one image, one question — then Roland is already on stage. Save the \"why it's paid, why this format\" for the closing when they already felt it.",
                },
                roland: {
                    time: "17:05",
                    duration: "40 min",
                    num: "01",
                    type: "keynote",
                    title: "Taste — Vkus",
                    speaker: "Roland Vraník",
                    role: "Creative Director / Founder, SORRYWECAN",
                    topics: [
                        "How creativity has fundamentally changed with AI — not the tools, the judgment.",
                        "Taste as the real differentiator. Everyone has the same tools. The difference is what you see.",
                        "Daily workflow — how he uses AI as a creative director and company owner.",
                        "Real projects: before/after, process, failures. Not theory — show the work.",
                        "Quality recognition vs. generation. Generating is easy. Knowing what's good is hard.",
                        "What creative teams often miss — the gaps he sees working across clients.",
                        "Curation, detail, the eye for what matters.",
                    ],
                    notes:
                        "Go deeper than the marketing copy. The homepage says \"What separates good from unforgettable.\" The talk should SHOW it — real work, real decisions, real consequences. Tell your best stories. The audience remembers stories, not bullet points.",
                    laneGuard:
                        "Stay in the taste/creativity lane. No business strategy, no organizational theory. That's Ján's and Roman's territory. Your craft, your eye, your process.",
                },
                rolandQa: {
                    time: "17:45",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Roland",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — audience votes questions up. Prince picks the top-voted ones.",
                        "Have 2–3 planted questions ready in case the first round is slow.",
                        "Prince moderates. Cut ramblers: \"Love the context — what's the specific question?\"",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "How do you decide when something AI-generated is 'good enough' vs when it needs a human eye?",
                        "What's a project where AI surprised you — either positively or by completely missing the mark?",
                        "How has your hiring changed? Do you look for different skills now?",
                    ],
                },
                transition1: {
                    title: "Transition 1",
                    speaker: "Prince",
                    topics: [],
                    notes:
                        '"Roland just showed us why taste matters. But taste without leverage is just opinion. Ján is going to show you how to turn that taste into products that scale."',
                },
                jan: {
                    time: "17:57",
                    duration: "40 min",
                    num: "02",
                    type: "keynote",
                    title: "Leverage — Využitie",
                    speaker: "Ján Koscelanský",
                    role: "CPO / Co-founder, SUDOLABS",
                    topics: [
                        "How digital products are evolving — what has fundamentally changed.",
                        "What one person or a small team can build today. The 4-person company that does what 20 used to.",
                        "AI for startups vs. established companies — different playbooks.",
                        "What's worth automating, what's worth building, what's worth skipping.",
                        "Team structure in the new reality — who do you hire, how many, what for.",
                        "Personal productivity — drafting, decision-making, thinking with AI. Practical, not theoretical.",
                        "The VC / investing landscape shift — what changed, where money flows now.",
                        "Practical, inspirational examples from the tech world. Less technical, more visceral.",
                    ],
                    notes:
                        "Pick your 3 best stories. Tell them well. That's the talk. The audience remembers \"we had 20 people, now we ship faster with 4\" — they don't remember \"the VC landscape is shifting toward AI-first companies.\" Depth over breadth. Always.",
                    laneGuard:
                        "Stay in the building/shipping/product lane. No philosophical takes on humanity, no deep creativity theory. You build things. Show how.",
                },
                janQa: {
                    time: "18:37",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Ján",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — top-voted questions. Expect entrepreneur-heavy questions here.",
                        "Prince moderates. Keep it sharp, keep it moving.",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "What's something your team stopped doing entirely because AI replaced it — and what happened?",
                        "If someone wants to build a product today with no team, where do they actually start?",
                        "What's overhyped right now in the startup/AI space?",
                    ],
                },
                break: {
                    time: "18:47",
                    duration: "15 min",
                    num: "",
                    type: "host",
                    title: "Break",
                    speaker: "",
                    topics: [
                        "Extended break. People are coming from a work day — they need to breathe, process, move around.",
                        "Let them talk to each other. Organic conversations here build energy for Roman's section.",
                    ],
                    notes: "",
                },
                transition2: {
                    title: "Transition 2",
                    speaker: "Prince",
                    topics: [],
                    notes:
                        '"Ján showed us how to build. But build for whom? And what happens to the humans in all of this? Roman has spent years thinking about exactly that."',
                },
                roman: {
                    time: "19:04",
                    duration: "35–40 min",
                    num: "03",
                    type: "keynote",
                    title: "Clarity — Jasnosť",
                    speaker: "Roman Pii Wagner",
                    role: "Transformational Design",
                    topics: [
                        "Dôvera (Trust) — the real differentiator, not tools. If I trust a brand to deliver, I trust the people, not their stack.",
                        "What stays human and what gets delegated. When to automate and when to consciously stop.",
                        "Organizational change — new structures, new ways of working, how corporates need to think.",
                        "Business models — new form of creativity, new companies, what products look like now.",
                        "Layoffs reality — who stays, who goes, and why. Experts in fields will endure. Generalists adapt.",
                        "Required skillsets for today: meditation, reading, long formats, adaptation. Not technical skills.",
                        "The future of societies, companies, corporates — zoomed out, long-term, meaningful.",
                    ],
                    notes:
                        "⚡ Hardest slot of the evening. Post-break, post-work-day. Trust > tools is the thesis — lead with it hard. Open with a story that silences the room. Shorter sentences. Pauses. Move on stage. Questions to the room. Change rhythm every 5-7 min. Don't lecture — perform. Close with meaning, not hype. Stay in the human/org/meaning lane. No product demos, no creative process. You're the compass.",
                    laneGuard: undefined,
                },
                romanQa: {
                    time: "19:44",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Roman",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — top-voted questions. This Q&A tends to get philosophical — lean into it.",
                        "Prince moderates. Let the good ones breathe.",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "What's a skill you think will be worth 10x more in 5 years that nobody is investing in right now?",
                        "How do you see the relationship between trust and speed? Companies want to move fast — does trust slow you down?",
                        "What's the biggest misconception leaders have about AI and their teams?",
                    ],
                },
                hotSeat: {
                    time: "19:54",
                    duration: "20 min",
                    num: "04",
                    type: "panel",
                    title: "Hot Seat",
                    speaker: "All three + Prince (moderator)",
                    topics: [
                        "All three speakers standing. Rapid-fire questions from the audience or Slido.",
                        "Any speaker can grab any question. Quick answers, high energy.",
                        "Prince moderates — keeps the pace fast. No monologues.",
                        "This is not a seated panel discussion. It's quick, standing, energetic.",
                    ],
                    notes:
                        "Way better than a tired panel after 2.5 hours. The standing format keeps energy up. If a question is great, let it breathe for 60 seconds. If it's mid, move on in 20.",
                },
                closing: {
                    time: "20:14",
                    duration: "6 min",
                    num: "",
                    type: "host",
                    title: "Closing",
                    speaker: "Prince",
                    topics: [
                        "One specific action for Monday morning. Not a summary — a concrete move.",
                        "Announce the personalized toolkit: \"We recorded everything. We listened. In 10 days you get tools tailored to what YOU need.\"",
                        "Capture form — Slido or QR code: role, biggest challenge, tools they use. 3 questions max.",
                        "Thank the speakers. Thank the audience for trusting us with their evening.",
                        "Edition 01 — we're building this with them, not just for them.",
                    ],
                    notes: "",
                },
                networking: {
                    time: "20:20",
                    duration: "Open",
                    num: "",
                    type: "networking",
                    title: "Networking",
                    speaker: "",
                    topics: [
                        "Organic. No forced structure. Who wants to stay, stays. Who wants to leave, leaves.",
                        "Speakers available for 1-on-1 conversations.",
                        "Note recurring themes and questions — fuel for the toolkit.",
                    ],
                    notes: "",
                },
            },
            postEvent: {
                label: "Post-Event (Within 10 Days)",
                toolkitTitle: "Personalized Toolkit",
                items: [
                    "Full event recording — review what resonated, what questions came up, what themes repeated.",
                    "Build the toolkit from the recording + Slido data + capture form responses.",
                    "Curated tool recommendations per attendee profile (based on form + questions asked).",
                    "Not a generic list — tailored to their role, industry, and actual challenges discussed.",
                    "Combination of tools, prompts, workflows, and learning paths.",
                    "Delivery within 10 days. No excuses.",
                    "Internal value: recurring themes become future content, workshops, and product ideas.",
                ],
                note:
                    "The recording is the foundation. From it you extract: what people asked about most, what surprised them, what confused them. That becomes the toolkit. Capture form gives you the segmentation. Recording gives you the substance.",
            },
            laneGuards: {
                label: "Speaker Lane Guards — No Overlap",
                description:
                    "Each speaker has a clear lane. Stay in it. The constraints force differentiation — without them everyone ends up saying \"AI is changing everything but humans still matter.\"",
                ownLabel: "Own this",
                avoidLabel: "Avoid",
                craftLabel: "Their craft",
                cards: [
                    {
                        speaker: "Roland",
                        lane: "Taste & Craft",
                        own: "Quality, aesthetics, creative judgment, curation, daily creative process with AI",
                        avoid: "Business strategy, organizational theory, product building",
                        craft:
                            "How his eye and creative process are enhanced by AI. Show the work. Real projects, real failures, real before/after.",
                    },
                    {
                        speaker: "Ján",
                        lane: "Building & Shipping",
                        own: "Products, teams, startups, automation, what to build, VC/investing",
                        avoid: "Deep creativity theory, philosophical takes on humanity, organizational transformation",
                        craft:
                            "How he builds and ships products differently now. Team structure. What's worth automating. Practical, grounded in real products.",
                    },
                    {
                        speaker: "Roman",
                        lane: "Trust & Navigation",
                        own: "Trust, organizations, business models, skillsets, future of work, what stays human",
                        avoid: "Product demos, creative process, specific tool recommendations",
                        craft:
                            "How trust becomes the differentiator. Organizational change. The human skills that matter. Zoomed out, long-term, meaningful.",
                    },
                ],
            },
            productionNotes: {
                label: "Production Notes",
                items: [
                    {
                        flag: "Intro",
                        note: "3–5 minutes max. One sentence that hits, introduce Roland, go. Save the \"why\" for the closing when they already felt it.",
                    },
                    {
                        flag: "Slido",
                        note: "Set up Slido event before the workshop. Share QR code at the start. Questions get upvoted — Prince picks top-voted. Works for all Q&As and Hot Seat.",
                    },
                    {
                        flag: "Planted Qs",
                        note: "2–3 ready per speaker in case the first round is slow. Written above in each Q&A block. Deliver them naturally if needed.",
                    },
                    {
                        flag: "Break",
                        note: "15 minutes after Ján's Q&A (~18:47). Extended break — people are coming from a full work day. They need to move, breathe, process. Organic conversations here build energy for the second half.",
                    },
                    {
                        flag: "Timing",
                        note: "Total runtime ~3h 20min + open networking = ~3h 30min. Need a strict timekeeper. Signal system for speakers — 5 min warning, 1 min warning.",
                    },
                    {
                        flag: "Transitions",
                        note: "Don't just say \"next up is...\" Use 2-minute bridges to connect themes. Makes it ONE story, not three separate talks.",
                    },
                    {
                        flag: "Ján's Scope",
                        note: "Broadest range. Coach him: pick your 3 best stories. Tell them well. That's the talk. Depth over breadth.",
                    },
                    {
                        flag: "Roman's Energy",
                        note: "⚡ CRITICAL. He speaks after break, after a full work day. Highest energy demand of the evening. Shorter sentences, strategic pauses, questions to the room ('show of hands'), move on stage. Change rhythm every 5-7 min. Open with a story that makes the room go quiet, then build. Don't lecture — perform.",
                    },
                    {
                        flag: "Hot Seat",
                        note: "All three standing. Fast. 20 min. Any speaker grabs any question. Way more energy than a seated panel. Extended from 15 to give more breathing room.",
                    },
                    {
                        flag: "Recording",
                        note: "Record the full event. This is the foundation for the personalized toolkit. Audio at minimum, video ideal.",
                    },
                    {
                        flag: "Toolkit",
                        note: "10-day delivery. Built from recording + Slido data + capture form. Recording tells you what resonated. Form tells you who needs what.",
                    },
                    {
                        flag: "First Edition",
                        note: "Frame it right: \"Edition 01. Every future edition builds on what we learn tonight — including from you.\" Collaborative, not apologetic.",
                    },
                ],
            },
        },
        sk: {
            header: {
                label: "Interné · Štruktúra workshopu",
                title: "THE MINDSHIFT",
                subtitle: [
                    "Kompletné kurikulum, témy spíkrov, naratívny oblúk a časovanie.",
                    "Živý dokument pre spíkrov a tím.",
                ],
            },
            meta: [
                { label: "Dátum", value: "26. feb 2026", sub: "Streda" },
                { label: "Čas", value: "17:00 – 20:20", sub: "~3h 30min" },
                { label: "Miesto", value: "SORRYWECAN Studio", sub: "Pečnianska 7, BA" },
                { label: "Formát", value: "3 Keynotes", sub: "+ Slido Q&A + Hot Seat + Break" },
                { label: "Cena", value: "€99", sub: "Osobne / Online" },
            ],
            narrativeArc: {
                label: "Naratívny oblúk",
                description:
                    "Tri akty, jeden príbeh. Každý spíker prirodzene nadväzuje na predošlého. Publikum ide od vkusu cez využitie až k jasnosti.",
                acts: [
                    {
                        act: "Akt 1",
                        title: "VKUS",
                        subtitle: "Taste",
                        speaker: "Roland",
                        theme: "Čo oddeľuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus.",
                    },
                    {
                        act: "Akt 2",
                        title: "VYUŽITIE",
                        subtitle: "Leverage",
                        speaker: "Ján",
                        theme: "Čo dnes dokáže postaviť jeden človek. Nové biznisy, nové spôsoby fungovania.",
                    },
                    {
                        act: "Akt 3",
                        title: "JASNOSŤ",
                        subtitle: "Clarity",
                        speaker: "Roman",
                        theme: "Čo zostáva ľudské a čo delegovať. Rozhodovacie rámce, ktoré reálne použiješ.",
                    },
                ],
            },
            timeline: {
                label: "Kompletná časová os",
                intro: {
                    time: "17:00",
                    duration: "3–5 min",
                    num: "00",
                    type: "host",
                    title: "Intro",
                    speaker: "Prince",
                    topics: [
                        "Drž to krátko. 3 minúty, nie 10. Lístok si kúpili, vedia prečo sú tu.",
                        "Jedna veta, ktorá trafí. Potom predstav Rolanda. Ideme.",
                        "Rýchla niť: Vkus → Využitie → Jasnosť. Tri pohľady, jeden príbeh.",
                        "Edition 01 — staviame to s nimi, nie len pre nich.",
                    ],
                    notes:
                        "Neotváraj to logistikou. Otvor to niečím, po čom budú radi, že prišli. Jedna veta, jeden obraz, jedna otázka — a Roland už je na pódiu. \"Prečo je to platené, prečo tento formát\" si nechaj na záver, keď to už zažili.",
                },
                roland: {
                    time: "17:05",
                    duration: "40 min",
                    num: "01",
                    type: "keynote",
                    title: "Vkus — Taste",
                    speaker: "Roland Vraník",
                    role: "Creative Director / Founder, SORRYWECAN",
                    topics: [
                        "Ako sa kreativita s AI zmenila od základu — nie nástroje, ale úsudok.",
                        "Vkus ako skutočný diferenciátor. Rovnaké nástroje má každý. Rozdiel je v tom, čo vidíš.",
                        "Denný workflow — ako AI používa ako creative director aj owner firmy.",
                        "Reálne projekty: before/after, proces, zlyhania. Nie teória — ukáž robotu.",
                        "Rozpoznanie kvality vs. generovanie. Generovať je ľahké. Vedieť, čo je dobré, je ťažké.",
                        "Čo kreatívnym tímom často uniká — medzery, ktoré vidí naprieč klientmi.",
                        "Kurátorstvo, detail, oko na to podstatné.",
                    ],
                    notes:
                        "Choď hlbšie než marketingový copy. Na homepage je \"What separates good from unforgettable.\" Talk to musí UKÁZAŤ — reálna práca, reálne rozhodnutia, reálne následky. Daj svoje najlepšie príbehy. Publikum si pamätá príbehy, nie bullety.",
                    laneGuard:
                        "Drž lane vkus/kreativita. Bez biznis stratégie, bez organizačnej teórie. To je priestor pre Jána a Romana. Tvoje remeslo, tvoje oko, tvoj proces.",
                },
                rolandQa: {
                    time: "17:45",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Roland",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — publikum upvotuje otázky. Prince berie tie top.",
                        "Maj pripravené 2–3 planted otázky, ak sa prvé kolo rozbieha pomaly.",
                        "Prince moderuje. Keď niekto odbieha: \"Super kontext — aká je konkrétna otázka?\"",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "Ako sa rozhoduješ, kedy je AI výstup \"dosť dobrý\" a kedy potrebuje ľudské oko?",
                        "Pri ktorom projekte ťa AI najviac prekvapilo — pozitívne alebo úplne mimo?",
                        "Ako sa ti zmenilo hiring? Hľadáš dnes iné skillsety?",
                    ],
                },
                transition1: {
                    title: "Transition 1",
                    speaker: "Prince",
                    topics: [],
                    notes:
                        '"Roland nám práve ukázal, prečo je vkus dôležitý. Ale vkus bez využitia je len názor. Ján ti teraz ukáže, ako ten vkus pretaviť do produktov, ktoré škálujú."',
                },
                jan: {
                    time: "17:57",
                    duration: "40 min",
                    num: "02",
                    type: "keynote",
                    title: "Využitie — Leverage",
                    speaker: "Ján Koscelanský",
                    role: "CPO / Co-founder, SUDOLABS",
                    topics: [
                        "Ako sa menia digitálne produkty — čo sa zmenilo od základu.",
                        "Čo dnes postaví jeden človek alebo malý tím. 4-členná firma, ktorá robí to, čo kedysi robilo 20 ľudí.",
                        "AI pre startupy vs. etablované firmy — iné playbooky.",
                        "Čo sa oplatí automatizovať, čo stavať a čo úplne preskočiť.",
                        "Štruktúra tímu v novej realite — koho hireovať, koľko ľudí, na čo.",
                        "Osobná produktivita — drafting, rozhodovanie, premýšľanie s AI. Prakticky, nie teoreticky.",
                        "Posun vo VC/investing svete — čo sa zmenilo, kam teraz tečú peniaze.",
                        "Praktické, inšpiratívne príklady z tech sveta. Menej technické, viac hmatateľné.",
                    ],
                    notes:
                        "Vyber 3 najlepšie príbehy. Povedz ich dobre. To je celý talk. Publikum si zapamätá \"mali sme 20 ľudí, teraz shipujeme rýchlejšie so 4\" — nezapamätá si \"VC landscape sa posúva smerom k AI-first firmám\". Hĺbka nad šírku. Vždy.",
                    laneGuard:
                        "Drž lane building/shipping/product. Žiadne filozofické úvahy o ľudstve, žiadna hlboká kreativná teória. Ty staviaš veci. Ukáž ako.",
                },
                janQa: {
                    time: "18:37",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Ján",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — top upvotované otázky. Tu čakaj veľa podnikateľských otázok.",
                        "Prince moderuje. Nech je to ostré a svižné.",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "Čo ste vo firme úplne prestali robiť, lebo to nahradila AI — a čo to spravilo s tímom?",
                        "Ak chce dnes niekto postaviť produkt úplne bez tímu, kde má reálne začať?",
                        "Čo je teraz v startup/AI priestore podľa teba najviac prehajpované?",
                    ],
                },
                break: {
                    time: "18:47",
                    duration: "15 min",
                    num: "",
                    type: "host",
                    title: "Break",
                    speaker: "",
                    topics: [
                        "Dlhšia pauza. Ľudia prídu po pracovnom dni — potrebujú sa nadýchnuť, spracovať to, pohnúť sa.",
                        "Nech sa medzi sebou porozprávajú. Práve tu sa buduje energia na Romanovu časť.",
                    ],
                    notes: "",
                },
                transition2: {
                    title: "Transition 2",
                    speaker: "Prince",
                    topics: [],
                    notes:
                        '"Ján ukázal, ako stavať. Ale pre koho to vlastne staviame? A čo sa v tom všetkom deje s ľuďmi? Roman sa týmto otázkam venuje roky."',
                },
                roman: {
                    time: "19:04",
                    duration: "35–40 min",
                    num: "03",
                    type: "keynote",
                    title: "Jasnosť — Clarity",
                    speaker: "Roman Pii Wagner",
                    role: "Transformational Design",
                    topics: [
                        "Dôvera (Trust) — skutočný diferenciátor, nie nástroje. Keď verím značke, verím ľuďom, nie ich stacku.",
                        "Čo zostáva ľudské a čo delegovať. Kedy automatizovať a kedy sa vedome zastaviť.",
                        "Organizačná zmena — nové štruktúry, nové spôsoby práce, ako nad tým musia rozmýšľať korporáty.",
                        "Biznis modely — nová forma kreativity, nové firmy, ako dnes vyzerajú produkty.",
                        "Realita layoffs — kto zostáva, kto odchádza a prečo. Experti vydržia. Generalisti sa musia adaptovať.",
                        "Skillsety, ktoré dnes potrebuješ: meditácia, čítanie, dlhé formáty, adaptácia. Nie technické triky.",
                        "Budúcnosť spoločností, firiem, korporátov — nadhľad, dlhodobosť, zmysel.",
                    ],
                    notes:
                        "⚡ Najťažší slot večera. Po pauze, po pracovnom dni. Trust > tools je téza — začni tým tvrdo. Otvor príbehom, po ktorom miestnosť stíchne. Kratšie vety. Pauzy. Pohybuj sa po pódiu. Otázky do sály. Každých 5-7 min zmeň rytmus. Neprednášaj — performuj. Zavri významom, nie hypeom. Lane: človek/organizácia/zmysel. Bez produktových dem, bez kreatívneho procesu. Ty si kompas.",
                    laneGuard: undefined,
                },
                romanQa: {
                    time: "19:44",
                    duration: "10 min",
                    num: "",
                    type: "qa",
                    title: "Q&A — Roman",
                    speaker: "Via Slido",
                    topics: [
                        "Slido — top upvotované otázky. Toto Q&A býva filozofickejšie — nechaj to dýchať.",
                        "Prince moderuje. Dobrým otázkam daj priestor.",
                    ],
                    notes: "",
                    plantedQuestions: [
                        "Ktorý skill bude podľa teba o 5 rokov 10x cennejší, ale dnes doň skoro nikto neinvestuje?",
                        "Ako vnímaš vzťah medzi dôverou a rýchlosťou? Firmy chcú ísť rýchlo — brzdí ich dôvera alebo im naopak pomáha?",
                        "Aký je najväčší omyl, ktorý majú lídri o AI a vlastných tímoch?",
                    ],
                },
                hotSeat: {
                    time: "19:54",
                    duration: "20 min",
                    num: "04",
                    type: "panel",
                    title: "Hot Seat",
                    speaker: "All three + Prince (moderator)",
                    topics: [
                        "Všetci traja stoja. Rapid-fire otázky z publika alebo zo Slida.",
                        "Ktokoľvek môže zobrať ktorúkoľvek otázku. Krátke odpovede, vysoká energia.",
                        "Prince moderuje — drží rýchle tempo. Žiadne monológy.",
                        "Nie je to sediaca panelovka. Je to rýchle, postojačky, energické.",
                    ],
                    notes:
                        "Oveľa lepšie než unavený panel po 2,5 hodine. Formát postojačky drží energiu hore. Keď je otázka výborná, nechaj jej 60 sekúnd. Keď je slabá, posuň sa po 20.",
                },
                closing: {
                    time: "20:14",
                    duration: "6 min",
                    num: "",
                    type: "host",
                    title: "Closing",
                    speaker: "Prince",
                    topics: [
                        "Jedna konkrétna akcia na pondelkové ráno. Nie sumár — konkrétny krok.",
                        "Oznám personalizovaný toolkit: \"Všetko sme nahrali. Počúvali sme. O 10 dní dostaneš nástroje šité na to, čo potrebuješ TY.\"",
                        "Capture form — Slido alebo QR: rola, najväčšia výzva, aké nástroje používajú. Max 3 otázky.",
                        "Poďakuj spíkrom. Poďakuj publiku, že nám zverili svoj večer.",
                        "Edition 01 — staviame to s nimi, nie len pre nich.",
                    ],
                    notes: "",
                },
                networking: {
                    time: "20:20",
                    duration: "Open",
                    num: "",
                    type: "networking",
                    title: "Networking",
                    speaker: "",
                    topics: [
                        "Organicky. Bez nútenej štruktúry. Kto chce zostať, zostane. Kto chce ísť, ide.",
                        "Spíkri sú dostupní na 1-on-1 rozhovory.",
                        "Zachytávaj opakujúce sa témy a otázky — palivo pre toolkit.",
                    ],
                    notes: "",
                },
            },
            postEvent: {
                label: "Po evente (do 10 dní)",
                toolkitTitle: "Personalized Toolkit",
                items: [
                    "Celý záznam eventu — pozri, čo najviac rezonovalo, aké otázky chodili a ktoré témy sa opakovali.",
                    "Toolkit skladáme zo záznamu + Slido dát + odpovedí z capture formu.",
                    "Kurátorované odporúčania nástrojov podľa profilu účastníka (form + otázky, ktoré kládol).",
                    "Nie generický zoznam — je to šité na rolu, odvetvie a reálne výzvy, ktoré sa na evente otvorili.",
                    "Kombinácia nástrojov, promptov, workflowov a learning paths.",
                    "Doručenie do 10 dní. Bez výhovoriek.",
                    "Interná hodnota: opakujúce sa témy sa menia na budúci obsah, workshopy a produktové nápady.",
                ],
                note:
                    "Základ je záznam. Z neho vytiahneš, čo ľudia riešili najviac, čo ich prekvapilo a kde sa strácali. To je jadro toolkitu. Capture form dá segmentáciu. Záznam dá obsah.",
            },
            laneGuards: {
                label: "Speaker lane guards — bez overlapu",
                description:
                    "Každý spíker má jasný lane. Drž sa ho. Práve tieto limity robia rozdiel — bez nich všetci skončia pri \"AI mení všetko, ale ľudia sú stále dôležití\".",
                ownLabel: "Toto je tvoj priestor",
                avoidLabel: "Tomuto sa vyhni",
                craftLabel: "Jeho remeslo",
                cards: [
                    {
                        speaker: "Roland",
                        lane: "Vkus a remeslo",
                        own: "Kvalita, estetika, kreatívny úsudok, kurátorstvo, denný kreatívny proces s AI",
                        avoid: "Biznis stratégia, organizačná teória, product building",
                        craft:
                            "Ako AI zosilňuje jeho oko a kreatívny proces. Ukáž robotu. Reálne projekty, reálne fail-y, reálne before/after.",
                    },
                    {
                        speaker: "Ján",
                        lane: "Building a shipping",
                        own: "Produkty, tímy, startupy, automatizácia, čo stavať, VC/investing",
                        avoid: "Hlboká kreativná teória, filozofické úvahy o ľudstve, organizačná transformácia",
                        craft:
                            "Ako dnes stavia a shipuje produkty inak. Štruktúra tímu. Čo sa oplatí automatizovať. Prakticky, na reálnych produktoch.",
                    },
                    {
                        speaker: "Roman",
                        lane: "Dôvera a navigácia",
                        own: "Dôvera, organizácie, biznis modely, skillsety, budúcnosť práce, čo zostáva ľudské",
                        avoid: "Produktové demá, kreatívny proces, konkrétne tool recommendations",
                        craft:
                            "Ako sa dôvera stáva diferenciátorom. Organizačná zmena. Ľudské schopnosti, ktoré budú kľúčové. Nadhľad, dlhodobosť, zmysel.",
                    },
                ],
            },
            productionNotes: {
                label: "Produkčné poznámky",
                items: [
                    {
                        flag: "Intro",
                        note: "Max 3–5 minút. Jedna veta, ktorá trafí, predstav Rolanda, ideme ďalej. \"Prečo\" si nechaj na záver, keď to už odžili.",
                    },
                    {
                        flag: "Slido",
                        note: "Slido event nastav ešte pred workshopom. Na začiatku ukáž QR kód. Otázky sa upvotujú — Prince berie top. Funguje pre všetky Q&A aj Hot Seat.",
                    },
                    {
                        flag: "Planted Qs",
                        note: "Maj 2–3 pripravené na každého spíkra, keby sa prvé kolo rozbiehalo pomaly. Sú napísané vyššie v Q&A blokoch. Ak treba, hoď ich prirodzene do hry.",
                    },
                    {
                        flag: "Break",
                        note: "15 minút po Jánovom Q&A (~18:47). Dlhšia pauza — ľudia prídu z celého pracovného dňa. Potrebujú sa pohnúť, nadýchnuť, spracovať to. Práve tieto organické rozhovory zdvihnú energiu druhej polovice.",
                    },
                    {
                        flag: "Timing",
                        note: "Celkový runtime ~3h 20min + open networking = ~3h 30min. Potrebujeme striktneho timekeepera. Signal systém pre spíkrov — 5 min warning, 1 min warning.",
                    },
                    {
                        flag: "Transitions",
                        note: "Nehovor len \"ďalej je na rade...\" Použi 2-minútové mosty medzi témami. Urobí to JEDEN príbeh, nie tri oddelené talks.",
                    },
                    {
                        flag: "Ján's Scope",
                        note: "Najširší záber. Koučing preňho: vyber 3 najlepšie príbehy. Povedz ich dobre. To je celý talk. Hĺbka nad šírku.",
                    },
                    {
                        flag: "Roman's Energy",
                        note: "⚡ KRITICKÉ. Ide po pauze, po celom pracovnom dni. Najvyššia energetická náročnosť večera. Kratšie vety, strategické pauzy, otázky do miestnosti ('show of hands'), pohyb po pódiu. Každých 5-7 min zmeň rytmus. Otvor príbehom, po ktorom miestnosť stíchne, potom builduj. Neprednášaj — performuj.",
                    },
                    {
                        flag: "Hot Seat",
                        note: "Všetci traja postojačky. Rýchlo. 20 min. Ktokoľvek berie ktorúkoľvek otázku. Oveľa viac energie než sediaca panelovka. Predĺžené z 15, aby to malo dýchací priestor.",
                    },
                    {
                        flag: "Recording",
                        note: "Nahraj celý event. Toto je základ pre personalized toolkit. Audio minimum, video ideál.",
                    },
                    {
                        flag: "Toolkit",
                        note: "Doručenie do 10 dní. Stavané zo záznamu + Slido dát + capture formu. Záznam ti povie, čo rezonovalo. Form ti povie, kto čo potrebuje.",
                    },
                    {
                        flag: "First Edition",
                        note: "Zaramcuj to správne: \"Edition 01. Každé ďalšie vydanie staviame na tom, čo sa dnes večer naučíme — aj od teba.\" Spolupráca, nie ospravedlňovanie.",
                    },
                ],
            },
        },
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav
                lang={lang}
                customAction={
                    <button
                        type="button"
                        onClick={() => setLang(lang === "en" ? "sk" : "en")}
                        className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                    >
                        {lang === "en" ? "SK" : "EN"}
                    </button>
                }
            />

            {/* Header */}
            <section className="pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade()}>
                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                            {t.header.label}
                        </span>
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-2">
                            {t.header.title}
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            {t.header.subtitle[0]}
                            <br />
                            {t.header.subtitle[1]}
                        </p>
                    </motion.div>

                    {/* Meta bar */}
                    <motion.div {...fade(0.1)} className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 p-5 border border-black/10 bg-white/40">
                        {t.meta.map((m) => (
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
                        <SectionLabel>{t.narrativeArc.label}</SectionLabel>
                        <p className="text-sm text-black/60 mt-2 max-w-2xl">
                            {t.narrativeArc.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {t.narrativeArc.acts.map((a, i) => (
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
                        <SectionLabel>{t.timeline.label}</SectionLabel>
                    </motion.div>

                    <div className="mt-6 space-y-3">
                        {/* INTRO */}
                        <TimeBlock
                            time={t.timeline.intro.time}
                            duration={t.timeline.intro.duration}
                            num={t.timeline.intro.num}
                            title={t.timeline.intro.title}
                            speaker={t.timeline.intro.speaker}
                            type={t.timeline.intro.type}
                            delay={0.22}
                        >
                            <TopicList items={t.timeline.intro.topics} />
                            <Note>
                                {t.timeline.intro.notes}
                            </Note>
                        </TimeBlock>

                        {/* ROLAND */}
                        <TimeBlock
                            time={t.timeline.roland.time}
                            duration={t.timeline.roland.duration}
                            num={t.timeline.roland.num}
                            title={t.timeline.roland.title}
                            speaker={t.timeline.roland.speaker}
                            role={t.timeline.roland.role}
                            type={t.timeline.roland.type}
                            delay={0.26}
                        >
                            <TopicList items={t.timeline.roland.topics} />
                            <Note>
                                {t.timeline.roland.notes}
                            </Note>
                            <LaneGuard>
                                {t.timeline.roland.laneGuard}
                            </LaneGuard>
                        </TimeBlock>

                        {/* ROLAND Q&A */}
                        <TimeBlock
                            time={t.timeline.rolandQa.time}
                            duration={t.timeline.rolandQa.duration}
                            num={t.timeline.rolandQa.num}
                            title={t.timeline.rolandQa.title}
                            speaker={t.timeline.rolandQa.speaker}
                            type={t.timeline.rolandQa.type}
                            delay={0.28}
                        >
                            <TopicList items={t.timeline.rolandQa.topics} />
                            <PlantedQuestions items={t.timeline.rolandQa.plantedQuestions || []} />
                        </TimeBlock>

                        {/* TRANSITION 1 */}
                        <TransitionBlock delay={0.29}>
                            {t.timeline.transition1.notes}
                        </TransitionBlock>

                        {/* JÁN */}
                        <TimeBlock
                            time={t.timeline.jan.time}
                            duration={t.timeline.jan.duration}
                            num={t.timeline.jan.num}
                            title={t.timeline.jan.title}
                            speaker={t.timeline.jan.speaker}
                            role={t.timeline.jan.role}
                            type={t.timeline.jan.type}
                            delay={0.30}
                        >
                            <TopicList items={t.timeline.jan.topics} />
                            <Note>
                                {t.timeline.jan.notes}
                            </Note>
                            <LaneGuard>
                                {t.timeline.jan.laneGuard}
                            </LaneGuard>
                        </TimeBlock>

                        {/* JÁN Q&A */}
                        <TimeBlock
                            time={t.timeline.janQa.time}
                            duration={t.timeline.janQa.duration}
                            num={t.timeline.janQa.num}
                            title={t.timeline.janQa.title}
                            speaker={t.timeline.janQa.speaker}
                            type={t.timeline.janQa.type}
                            delay={0.32}
                        >
                            <TopicList items={t.timeline.janQa.topics} />
                            <PlantedQuestions items={t.timeline.janQa.plantedQuestions || []} />
                        </TimeBlock>

                        {/* BREAK */}
                        <motion.div {...fade(0.33)} className="p-5 md:p-6 border-2 border-black/20 bg-black/[0.04] text-center">
                            <div className="flex items-center justify-center gap-4">
                                <span className="text-sm font-bold font-code-brand text-[#0047BB]">{t.timeline.break.time}</span>
                                <span className="text-lg font-bold">{t.timeline.break.title}</span>
                                <span className="text-[10px] text-black/30 font-code-brand">{t.timeline.break.duration}</span>
                            </div>
                            <p className="text-sm text-black/40 mt-2">
                                {t.timeline.break.topics[0]} {t.timeline.break.topics[1]}
                            </p>
                        </motion.div>

                        {/* TRANSITION 2 */}
                        <TransitionBlock delay={0.34}>
                            {t.timeline.transition2.notes}
                        </TransitionBlock>

                        {/* ROMAN */}
                        <TimeBlock
                            time={t.timeline.roman.time}
                            duration={t.timeline.roman.duration}
                            num={t.timeline.roman.num}
                            title={t.timeline.roman.title}
                            speaker={t.timeline.roman.speaker}
                            role={t.timeline.roman.role}
                            type={t.timeline.roman.type}
                            delay={0.35}
                        >
                            <TopicList items={t.timeline.roman.topics} />
                            <Note>
                                {t.timeline.roman.notes}
                            </Note>
                            {t.timeline.roman.laneGuard && (
                                <LaneGuard>
                                    {t.timeline.roman.laneGuard}
                                </LaneGuard>
                            )}
                        </TimeBlock>

                        {/* ROMAN Q&A */}
                        <TimeBlock
                            time={t.timeline.romanQa.time}
                            duration={t.timeline.romanQa.duration}
                            num={t.timeline.romanQa.num}
                            title={t.timeline.romanQa.title}
                            speaker={t.timeline.romanQa.speaker}
                            type={t.timeline.romanQa.type}
                            delay={0.37}
                        >
                            <TopicList items={t.timeline.romanQa.topics} />
                            <PlantedQuestions items={t.timeline.romanQa.plantedQuestions || []} />
                        </TimeBlock>

                        {/* HOT SEAT */}
                        <TimeBlock
                            time={t.timeline.hotSeat.time}
                            duration={t.timeline.hotSeat.duration}
                            num={t.timeline.hotSeat.num}
                            title={t.timeline.hotSeat.title}
                            speaker={t.timeline.hotSeat.speaker}
                            type={t.timeline.hotSeat.type}
                            delay={0.39}
                        >
                            <TopicList items={t.timeline.hotSeat.topics} />
                            <Note>
                                {t.timeline.hotSeat.notes}
                            </Note>
                        </TimeBlock>

                        {/* CLOSING */}
                        <TimeBlock
                            time={t.timeline.closing.time}
                            duration={t.timeline.closing.duration}
                            num={t.timeline.closing.num}
                            title={t.timeline.closing.title}
                            speaker={t.timeline.closing.speaker}
                            type={t.timeline.closing.type}
                            delay={0.41}
                        >
                            <TopicList items={t.timeline.closing.topics} />
                        </TimeBlock>

                        {/* NETWORKING */}
                        <TimeBlock
                            time={t.timeline.networking.time}
                            duration={t.timeline.networking.duration}
                            num={t.timeline.networking.num}
                            title={t.timeline.networking.title}
                            speaker={t.timeline.networking.speaker}
                            type={t.timeline.networking.type}
                            delay={0.43}
                        >
                            <TopicList items={t.timeline.networking.topics} />
                        </TimeBlock>
                    </div>
                </div>
            </section>

            {/* Post-Event */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.44)}>
                        <SectionLabel>{t.postEvent.label}</SectionLabel>
                        <div className="mt-4 p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/5">
                            <h3 className="font-bold text-lg mb-3">{t.postEvent.toolkitTitle}</h3>
                            <TopicList items={t.postEvent.items} />
                            <Note>
                                {t.postEvent.note}
                            </Note>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speaker Lane Guards */}
            <section className="py-10 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fade(0.46)}>
                        <SectionLabel>{t.laneGuards.label}</SectionLabel>
                        <p className="text-sm text-black/50 mt-2 mb-4">
                            {t.laneGuards.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {t.laneGuards.cards.map((s) => (
                                <div key={s.speaker} className="p-5 border border-black/10 bg-white/40 space-y-3">
                                    <div>
                                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">{s.speaker}</span>
                                        <h4 className="font-bold text-base mt-1">{s.lane}</h4>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-green-700/60 mb-1">{t.laneGuards.ownLabel}</p>
                                        <p className="text-sm text-black/60">{s.own}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-red-700/60 mb-1">{t.laneGuards.avoidLabel}</p>
                                        <p className="text-sm text-black/60">{s.avoid}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-1">{t.laneGuards.craftLabel}</p>
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
                        <SectionLabel>{t.productionNotes.label}</SectionLabel>
                        <div className="mt-4 space-y-3">
                            {t.productionNotes.items.map((n) => (
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
                    {"SORRYWECAN // RESEARCH LAB // 2026"}
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
            {items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-black/60">
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
                    <li key={item} className="flex gap-2 text-sm text-black/40 italic">
                        <span className="shrink-0 mt-0.5">{i + 1}.</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
