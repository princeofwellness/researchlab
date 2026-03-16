"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
})

type Lang = "en" | "sk"

export default function NextGenPage() {
    const [lang, setLang] = useState<Lang>("en")

    const content = {
        en: {
            hero: {
                label: "Youth × AI × Research Lab",
                title1: "The World Changed.",
                title2: "You Can Too.",
                subtitle: "A curriculum designed for young people aged 14–18 stepping into adulthood without a roadmap. We build one with them.",
                cta: "Explore the Curriculum",
                badge: "New Initiative · 2026",
            },
            challenge: {
                label: "The Reality",
                title: "They Are Starting Behind.",
                intro: "Young people leaving care systems at 14–18 enter a world that assumes a foundation they never had. Family capital. Social networks. Digital fluency. The unspoken rules of professional life.",
                stats: [
                    { val: "75%", label: "of care leavers face housing instability within 2 years" },
                    { val: "3×", label: "more likely to be unemployed compared to their peers" },
                    { val: "1 in 4", label: "has no adult they can call for guidance" },
                    { val: "2030", label: "when 85M jobs that exist today will be gone" },
                ],
                cards: [
                    { h: "No network. No playbook.", s: "Nobody taught them the rules that everyone else takes for granted." },
                    { h: "The wrong skills.", s: "School prepared them for a world that is already disappearing." },
                    { h: "AI is accelerating everything.", s: "The gap between prepared and unprepared grows every month." },
                    { h: "The window is closing.", s: "Habits and identity formed at 16 shape everything that follows." },
                ],
            },
            method: {
                label: "The Approach",
                title: "Not Charity. Architecture.",
                subtitle: "We do not teach tools. We build people who know how to navigate any tool, any system, any shift.",
                pillars: [
                    {
                        num: "01",
                        title: "Identity & Self-Architecture",
                        desc: "Before any skill, we address who they believe they are. Self-narrative, values, internal compass. A young person who knows themselves can navigate any storm.",
                        tag: "Foundation",
                    },
                    {
                        num: "02",
                        title: "Digital Fluency & AI Literacy",
                        desc: "Not how to use ChatGPT. How to think with AI. Prompting as a cognitive skill. AI as a collaborator, not a replacement. Critical thinking in an algorithmic world.",
                        tag: "Intelligence",
                    },
                    {
                        num: "03",
                        title: "Creative Intelligence",
                        desc: "Creativity is the last human edge AI cannot replicate. We activate it. Visual storytelling, content creation, design thinking — real skills for a creator economy.",
                        tag: "Expression",
                    },
                    {
                        num: "04",
                        title: "Cyber Safety & Digital Sovereignty",
                        desc: "The threats are real and accelerating. Phishing, deepfakes, social engineering, data privacy. We make them dangerous to manipulate and safe online.",
                        tag: "Protection",
                    },
                    {
                        num: "05",
                        title: "Real-World Operating System",
                        desc: "Financial basics. Professional communication. Personal brand. Networking. The unwritten rules of adult life — made explicit, practiced, owned.",
                        tag: "Life Skills",
                    },
                    {
                        num: "06",
                        title: "Making & Building",
                        desc: "From idea to product. Using AI tools to create real things — videos, websites, apps, projects. The shift from passive consumer to active creator.",
                        tag: "Creation",
                    },
                ],
            },
            curriculum: {
                label: "The Curriculum",
                title: "Six Months. Six Shifts.",
                subtitle: "A progressive curriculum built to work with — not around — the realities of their lives.",
                months: [
                    {
                        num: "01",
                        title: "WHO AM I IN THIS WORLD",
                        sub: "Identity, narrative, and what you actually want",
                        detail: "Self-authoring exercises. Values mapping. Rewriting the internal story from 'system kid' to 'person with agency'. Introduction to AI tools through the lens of personal exploration.",
                        outcomes: ["Personal values map", "Self-narrative draft", "First AI conversation log"],
                    },
                    {
                        num: "02",
                        title: "THE MACHINE AND YOU",
                        sub: "AI literacy, critical thinking, digital navigation",
                        detail: "How large language models work. What AI can and cannot do. Prompt engineering as cognitive tool. Recognising AI-generated content. Algorithmic bias and how platforms shape behaviour.",
                        outcomes: ["Prompt portfolio (10+ prompts)", "AI audit of a news story", "Personal AI toolkit"],
                    },
                    {
                        num: "03",
                        title: "CREATE OR BE CREATED FOR",
                        sub: "Creative tools, visual storytelling, self-expression",
                        detail: "Image generation, video editing, audio tools. Building a creative voice. Storytelling structure. Publishing first work publicly. Feedback loops and iteration.",
                        outcomes: ["First published piece", "Creative portfolio entry", "Peer critique session"],
                    },
                    {
                        num: "04",
                        title: "STAY SAFE. STAY SOVEREIGN.",
                        sub: "Cybersecurity, manipulation tactics, online identity",
                        detail: "Phishing simulations. Deepfake detection. Social engineering patterns. Password hygiene. Privacy settings audit. What happens to your data. How to disappear online if you need to.",
                        outcomes: ["Personal security audit", "Deepfake detection score", "Digital privacy review"],
                    },
                    {
                        num: "05",
                        title: "BUILD SOMETHING REAL",
                        sub: "First project — AI-assisted creation, portfolio entry",
                        detail: "Project-based month. Each participant proposes and builds one real thing: a website, a short film, a product concept, a community resource. Mentored. AI-assisted. Genuinely theirs.",
                        outcomes: ["Completed project", "Public presentation", "Portfolio entry"],
                    },
                    {
                        num: "06",
                        title: "LAUNCH",
                        sub: "Personal brand, professional presence, what comes next",
                        detail: "LinkedIn profile. Email communication. First cold outreach. How to talk about what they built. Continuing education pathways. Alumni network introduction.",
                        outcomes: ["Live digital presence", "First professional message sent", "Alumni network membership"],
                    },
                ],
            },
            why: {
                label: "Why Us",
                title: "Research Lab Brings Something Different.",
                points: [
                    "We are not an NGO running workshops. We are a creative and intelligence organisation that builds with AI every day. We bring that real-world practice into the room.",
                    "The Research Lab curriculum draws on the same frameworks we use with corporate leaders — adapted for young people who need them even more urgently.",
                    "When a 16-year-old leaves our programme, they have a portfolio, a digital identity, and a way of thinking that most adults never develop.",
                    "Our network — creatives, technologists, founders — becomes their network. That is the social capital that care leavers are most often denied.",
                ],
            },
            collab: {
                label: "Collaboration",
                title: "We Are Looking For Partners.",
                subtitle: "We cannot do this alone. Nor should we.",
                partners: [
                    {
                        title: "Children's Homes & Care Institutions",
                        desc: "We come to you. We design the curriculum around your schedule, your young people, your environment. No disruption. Real integration.",
                    },
                    {
                        title: "Government & NGO",
                        desc: "Grant frameworks, co-funding structures, official recognition. We know how to build this for scale and for sustainability.",
                    },
                    {
                        title: "Corporate Partners",
                        desc: "CSR with real impact. Your team volunteers, co-creates, mentors. Your brand attached to something that actually changes lives.",
                    },
                    {
                        title: "Researchers & Educators",
                        desc: "We want to measure what works. If you are studying youth outcomes, digital literacy, or resilience — let us build the evidence together.",
                    },
                ],
            },
            cta: {
                title: "This Is Not a Proposal.",
                title2: "It Is a Beginning.",
                sub: "If you work with young people in care — or want to — we want to talk. No pitch decks. No bureaucracy. A real conversation.",
                btn: "Start the Conversation",
            },
        },
        sk: {
            hero: {
                label: "Mládež × AI × Research Lab",
                title1: "Svet sa zmenil.",
                title2: "Môžeš sa zmeniť aj ty.",
                subtitle: "Kurz pre mladých ľudí vo veku 14–18 rokov, ktorí vstupujú do dospelosti bez akéhokoľvek zázemie. Budujeme ho spolu s nimi.",
                cta: "Preskúmaj kurz",
                badge: "Nová iniciatíva · 2026",
            },
            challenge: {
                label: "Realita",
                title: "Začínajú s hendikepom.",
                intro: "Mladí ľudia, ktorí opúšťajú systém starostlivosti vo veku 14–18 rokov, vstupujú do sveta, ktorý predpokladá základy, ktoré nikdy nemali. Rodinný kapitál. Sociálne siete. Digitálna zručnosť. Nepísané pravidlá profesionálneho života.",
                stats: [
                    { val: "75%", label: "mladých z detských domovov čelí nestabilite v bývaní do 2 rokov" },
                    { val: "3×", label: "vyššia pravdepodobnosť nezamestnanosti v porovnaní s rovesníkmi" },
                    { val: "1 zo 4", label: "nemá dospelého, ktorého môže zavolať o radu" },
                    { val: "2030", label: "keď 85 miliónov dnešných pracovných miest zanikne" },
                ],
                cards: [
                    { h: "Bez sietí. Bez návodu.", s: "Nikto ich nenaučil pravidlá, ktoré ostatní berú ako samozrejmosť." },
                    { h: "Nesprávne zručnosti.", s: "Škola ich pripravila na svet, ktorý už mizne." },
                    { h: "AI všetko zrýchľuje.", s: "Priepasť medzi pripraveným a nepripraveným rastie každý mesiac." },
                    { h: "Okno sa zatvára.", s: "Návyky a identita formovaná vo veku 16 rokov ovplyvňujú všetko, čo nasleduje." },
                ],
            },
            method: {
                label: "Prístup",
                title: "Nie charita. Architektúra.",
                subtitle: "Neučíme nástroje. Budujeme ľudí, ktorí vedia navigovať akýkoľvek nástroj, akýkoľvek systém, akúkoľvek zmenu.",
                pillars: [
                    {
                        num: "01",
                        title: "Identita a sebaarchitektúra",
                        desc: "Skôr ako akákoľvek zručnosť, riešime to, kým si myslia, že sú. Vlastný príbeh, hodnoty, vnútorný kompas. Mladý človek, ktorý pozná sám seba, zvládne akúkoľvek búrku.",
                        tag: "Základ",
                    },
                    {
                        num: "02",
                        title: "Digitálna gramotnosť a AI",
                        desc: "Nie ako používať ChatGPT. Ako myslieť s AI. Promptovanie ako kognitívna zručnosť. AI ako spolupracovník, nie náhrada. Kritické myslenie v algoritmickom svete.",
                        tag: "Inteligencia",
                    },
                    {
                        num: "03",
                        title: "Kreatívna inteligencia",
                        desc: "Kreativita je posledná ľudská výhoda, ktorú AI nedokáže replikovať. My ju aktivujeme. Vizuálne rozprávanie, tvorba obsahu, dizajnové myslenie — skutočné zručnosti pre kreatívnu ekonomiku.",
                        tag: "Vyjadrenie",
                    },
                    {
                        num: "04",
                        title: "Kybernetická bezpečnosť a digitálna suverenita",
                        desc: "Hrozby sú reálne a zrýchľujú sa. Phishing, deepfakes, sociálne inžinierstvo, ochrana dát. Robíme ich odolnými voči manipulácii a bezpečnými online.",
                        tag: "Ochrana",
                    },
                    {
                        num: "05",
                        title: "Operačný systém reálneho sveta",
                        desc: "Základy financií. Profesionálna komunikácia. Osobná značka. Networking. Nepísané pravidlá dospelého života — vysvetlené, precvičené, zvládnuté.",
                        tag: "Životné zručnosti",
                    },
                    {
                        num: "06",
                        title: "Tvorba a budovanie",
                        desc: "Od nápadu k produktu. Pomocou AI nástrojov vytvárať skutočné veci — videá, weby, aplikácie, projekty. Prechod od pasívneho konzumenta k aktívnemu tvorcovi.",
                        tag: "Tvorba",
                    },
                ],
            },
            curriculum: {
                label: "Kurz",
                title: "Šesť mesiacov. Šesť posunov.",
                subtitle: "Postupný kurz navrhnutý tak, aby fungoval so skutočnosťou ich životov — nie napriek nej.",
                months: [
                    {
                        num: "01",
                        title: "KTO SOM V TOMTO SVETE",
                        sub: "Identita, vlastný príbeh a to, čo naozaj chceš",
                        detail: "Sebapoznávacie cvičenia. Mapovanie hodnôt. Prepísanie vnútorného príbehu z 'dieťa zo systému' na 'človek s agentúrou'. Úvod do AI nástrojov cez optiku osobného objavovania.",
                        outcomes: ["Mapa osobných hodnôt", "Návrh vlastného príbehu", "Prvý denník AI konverzácií"],
                    },
                    {
                        num: "02",
                        title: "STROJ A TY",
                        sub: "AI gramotnosť, kritické myslenie, digitálna navigácia",
                        detail: "Ako fungujú jazykové modely. Čo AI dokáže a čo nie. Promptovanie ako kognitívny nástroj. Rozpoznávanie AI obsahu. Algoritmické skreslenie a ako platformy formujú správanie.",
                        outcomes: ["Portfólio promptov (10+)", "AI audit správy", "Osobný AI toolkit"],
                    },
                    {
                        num: "03",
                        title: "TVORIŤ ALEBO BYŤ TVORENÝ",
                        sub: "Kreatívne nástroje, vizuálne rozprávanie, sebavyjadrenie",
                        detail: "Generovanie obrázkov, strih videí, zvukové nástroje. Budovanie kreatívneho hlasu. Štruktúra príbehu. Prvé verejné publikovanie. Spätná väzba a iterácia.",
                        outcomes: ["Prvá publikovaná tvorba", "Vstup do kreatívneho portfólia", "Vzájomná kritika"],
                    },
                    {
                        num: "04",
                        title: "ZOSTAŤ BEZPEČNÝ. ZOSTAŤ SUVERÉNNY.",
                        sub: "Kybernetická bezpečnosť, manipulatívne taktiky, online identita",
                        detail: "Phishing simulácie. Detekcia deepfakes. Vzorce sociálneho inžinierstva. Správa hesiel. Audit nastavení súkromia. Čo sa deje s tvojimi dátami. Ako sa online stať neviditeľným, keď je to potrebné.",
                        outcomes: ["Osobný bezpečnostný audit", "Skóre detekcie deepfake", "Revízia digitálneho súkromia"],
                    },
                    {
                        num: "05",
                        title: "POSTAV NIEČO SKUTOČNÉ",
                        sub: "Prvý projekt — tvorba s pomocou AI, vstup do portfólia",
                        detail: "Projektový mesiac. Každý účastník navrhne a postaví jednu skutočnú vec: web, krátky film, produktový koncept, komunitný zdroj. S mentorom. S AI. Naozaj jeho vlastnú.",
                        outcomes: ["Dokončený projekt", "Verejná prezentácia", "Vstup do portfólia"],
                    },
                    {
                        num: "06",
                        title: "ŠTART",
                        sub: "Osobná značka, profesionálna prítomnosť, čo príde potom",
                        detail: "LinkedIn profil. E-mailová komunikácia. Prvý studený kontakt. Ako hovoriť o tom, čo postavili. Ďalšie vzdelávacie cesty. Vstup do alumni siete.",
                        outcomes: ["Živá digitálna prítomnosť", "Prvá profesionálna správa odoslaná", "Členstvo v alumni sieti"],
                    },
                ],
            },
            why: {
                label: "Prečo my",
                title: "Research Lab prináša niečo iné.",
                points: [
                    "Nie sme mimovládka organizujúca workshopy. Sme kreatívna a inteligenčná organizácia, ktorá každý deň buduje s AI. Tú prax prinášame do miestnosti.",
                    "Kurz Research Lab vychádza z rovnakých metód, ktoré používame s firemným vedením — prispôsobených pre mladých ľudí, ktorí ich potrebujú ešte naliehavejšie.",
                    "Keď šestnásťročný opustí náš program, má portfólio, digitálnu identitu a spôsob myslenia, ktorý väčšina dospelých nikdy nerozvinie.",
                    "Naša sieť — kreatívci, technológovia, zakladatelia firiem — sa stáva ich sieťou. To je sociálny kapitál, ktorý je mladým z detských domovov najčastejšie odopretý.",
                ],
            },
            collab: {
                label: "Spolupráca",
                title: "Hľadáme partnerov.",
                subtitle: "Toto sami nezvládneme. Ani by sme nemali.",
                partners: [
                    {
                        title: "Detské domovy a zariadenia starostlivosti",
                        desc: "Prídeme k vám. Kurz navrhujeme podľa vášho rozvrhu, vašich mladých ľudí, vášho prostredia. Bez narušenia. So skutočnou integráciou.",
                    },
                    {
                        title: "Štát a mimovládne organizácie",
                        desc: "Grantové rámce, spolufinancovanie, oficiálne uznanie. Vieme, ako toto budovať do škály a udržateľnosti.",
                    },
                    {
                        title: "Korporátni partneri",
                        desc: "CSR s reálnym dopadom. Váš tím dobrovoľničí, spolutvorí, mentoruje. Vaša značka spojená s niečím, čo skutočne mení životy.",
                    },
                    {
                        title: "Výskumníci a pedagógovia",
                        desc: "Chceme merať, čo funguje. Ak skúmate výsledky mladých, digitálnu gramotnosť alebo odolnosť — poďme budovať dôkazy spoločne.",
                    },
                ],
            },
            cta: {
                title: "Toto nie je návrh.",
                title2: "Je to začiatok.",
                sub: "Ak pracujete s mladými ľuďmi v starostlivosti — alebo chcete — chceme sa porozprávať. Žiadne prezentácie. Žiadna byrokracia. Skutočný rozhovor.",
                btn: "Začnite rozhovor",
            },
        },
    }

    const c = content[lang]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a]">
            <TopNav lang={lang} />

            {/* Lang Toggle */}
            <div className="fixed bottom-6 right-6 z-50 flex gap-1 bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-1 py-1">
                {(["en", "sk"] as Lang[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${
                            lang === l ? "bg-black text-white" : "text-black/40 hover:text-black"
                        }`}
                    >
                        {l.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* HERO */}
            <section className="pt-32 pb-24 px-6 md:px-20 min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#0047BB]/4 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c2a378]/8 blur-3xl" />
                </div>
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div {...fade(0.1)}>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                {c.hero.label}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 border border-black/15 px-3 py-1 rounded-full">
                                {c.hero.badge}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1 {...fade(0.2)} className="font-syne font-bold text-6xl md:text-8xl tracking-tighter leading-[0.92] mb-8">
                        {c.hero.title1}
                        <br />
                        <span className="text-[#0047BB]">{c.hero.title2}</span>
                    </motion.h1>

                    <motion.p {...fade(0.35)} className="text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed mb-12 font-light">
                        {c.hero.subtitle}
                    </motion.p>

                    <motion.div {...fade(0.45)}>
                        <a
                            href="#curriculum"
                            className="inline-block bg-[#0047BB] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
                        >
                            {c.hero.cta} ↓
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* THE REALITY */}
            <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            {c.challenge.label}
                        </span>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-8">
                            {c.challenge.title}
                        </h2>
                        <p className="text-xl text-white/60 max-w-3xl leading-relaxed font-light">
                            {c.challenge.intro}
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-16">
                        {c.challenge.stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0a0a0a] p-8"
                            >
                                <div className="font-syne font-bold text-4xl md:text-5xl text-[#0047BB] mb-3">{s.val}</div>
                                <div className="text-xs text-white/50 leading-relaxed">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Problem cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        {c.challenge.cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#111] p-8"
                            >
                                <div className="font-syne font-bold text-xl mb-2">{card.h}</div>
                                <div className="text-white/50 text-sm leading-relaxed">{card.s}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE APPROACH — 6 PILLARS */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-4">
                            {c.method.label}
                        </span>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-6">
                            {c.method.title}
                        </h2>
                        <p className="text-xl text-black/60 max-w-2xl leading-relaxed font-light">
                            {c.method.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
                        {c.method.pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="bg-[#f5f5f3] p-8 hover:bg-white transition-colors group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <span className="font-syne font-bold text-4xl text-black/10 group-hover:text-[#0047BB]/20 transition-colors">
                                        {p.num}
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-1">
                                        {p.tag}
                                    </span>
                                </div>
                                <h3 className="font-syne font-bold text-lg tracking-tight mb-3">{p.title}</h3>
                                <p className="text-sm text-black/55 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CURRICULUM — 6 MONTHS */}
            <section id="curriculum" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">
                            {c.curriculum.label}
                        </span>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-6">
                            {c.curriculum.title}
                        </h2>
                        <p className="text-xl text-white/50 max-w-2xl leading-relaxed font-light">
                            {c.curriculum.subtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-px bg-white/5">
                        {c.curriculum.months.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="bg-[#0f0f0f] hover:bg-[#161616] transition-colors p-8 md:p-10"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                                    <div className="flex-shrink-0">
                                        <span className="font-syne font-bold text-5xl text-white/10">{m.num}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-1">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">
                                                {lang === "en" ? `Month ${parseInt(m.num)}` : `Mesiac ${parseInt(m.num)}`}
                                            </span>
                                        </div>
                                        <h3 className="font-syne font-bold text-2xl md:text-3xl tracking-tight mb-1">
                                            {m.title}
                                        </h3>
                                        <p className="text-white/40 text-sm mb-4 italic">{m.sub}</p>
                                        <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-2xl">{m.detail}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {m.outcomes.map((o, j) => (
                                                <span key={j} className="text-[10px] font-bold uppercase tracking-wider text-white/50 border border-white/10 px-3 py-1.5">
                                                    ✓ {o}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY RESEARCH LAB */}
            <section className="py-24 px-6 md:px-20 bg-[#f0ece6]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 block mb-4">
                            {c.why.label}
                        </span>
                        <h2 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter">
                            {c.why.title}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
                        {c.why.points.map((pt, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-[#f0ece6] p-8 hover:bg-white transition-colors"
                            >
                                <div className="w-8 h-px bg-[#0047BB] mb-5" />
                                <p className="text-base text-black/70 leading-relaxed">{pt}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COLLABORATION */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-4">
                            {c.collab.label}
                        </span>
                        <h2 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mb-4">
                            {c.collab.title}
                        </h2>
                        <p className="text-xl text-black/50 font-light">{c.collab.subtitle}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
                        {c.collab.partners.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white p-8 hover:bg-[#0047BB] group transition-colors"
                            >
                                <h3 className="font-syne font-bold text-lg mb-3 group-hover:text-white transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-black/60 leading-relaxed group-hover:text-white/80 transition-colors">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 md:px-20 bg-[#0047BB] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-4">
                            {c.cta.title}
                        </h2>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-10 text-white/50">
                            {c.cta.title2}
                        </h2>
                        <p className="text-xl text-white/70 mb-12 font-light leading-relaxed">
                            {c.cta.sub}
                        </p>
                        <a
                            href="mailto:hello@sorrywecan.com"
                            className="inline-block bg-white text-[#0047BB] px-12 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                        >
                            {c.cta.btn} →
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 px-6 md:px-20 bg-[#0a0a0a] text-white/30">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-syne font-bold text-sm">
                        RESEARCH<span className="text-[#0047BB]">LAB</span>
                    </span>
                    <span className="text-xs uppercase tracking-widest">
                        {lang === "en" ? "Youth Initiative · 2026" : "Iniciatíva pre mládež · 2026"}
                    </span>
                    <span className="text-xs">© 2026 SORRYWECAN</span>
                </div>
            </footer>
        </div>
    )
}
