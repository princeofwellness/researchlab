
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
                title2: "You Are Ready.",
                subtitle: "A curriculum designed for young people aged 14–18 stepping into adulthood with everything they need to lead it.",
                cta: "Explore the Curriculum",
                badge: "New Initiative · 2026",
            },
            challenge: {
                label: "The Opportunity",
                title: "AI as a Social Lift.",
                intro: "In Slovakia, around 4,000–5,000 young people grow up in Centres for Children and Families. When they turn 18, they leave without the family support, guidance, and networks most of their peers rely on. AI changes that equation. For the first time, a young person with a laptop can access the same creative tools, career guidance, brainstorming partners, and feedback loops that used to require the right family, the right school, or the right city.",
                stats: [
                    { val: "4–5K", label: "young people leave care in Slovakia each year — without the networks most peers take for granted" },
                    { val: "3×", label: "employment advantage for young people with structured digital skills training" },
                    { val: "45M+", label: "new roles emerging in the AI economy by 2030 — we prepare them to take them" },
                    { val: "20+", label: "international programmes reviewed to build this curriculum — evidence-based from day one" },
                ],
                cards: [
                    { h: "A creative sparring partner.", s: "Ideas can be tested, challenged, and developed — no network required." },
                    { h: "A real feedback loop.", s: "Try, improve, refine. The iteration cycle most people get from mentors — now accessible to everyone." },
                    { h: "A full creative studio.", s: "A laptop becomes a space for writing, design, coding, research, and storytelling. No gatekeepers." },
                    { h: "A first project. A real portfolio.", s: "AI helps turn ideas into tangible outputs — prototypes, visuals, texts, concepts. Something real to show the world." },
                ],
            },
            method: {
                label: "The Approach",
                title: "Not Charity. Architecture.",
                subtitle: "We rebuild identity, not just skills. Emotional safety comes first — young people cannot process new information until they feel safe. That is why every session is designed as a trauma-aware safety space.",
                pillars: [
                    {
                        num: "01",
                        title: "Identity & Self-Architecture",
                        desc: "Before any skill, we address who they believe they are. We help young people develop critical thinking and regain a sense of agency — the feeling that they can influence their own reality. Through AI tools, they are not positioned as passive consumers, but as creators of their own path.",
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
                        desc: "The threats are real and accelerating. Phishing, deepfakes, social engineering, data privacy. We make them dangerous to manipulate and confident online.",
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
                label: "The Programme",
                title: "One Day. Real Change.",
                subtitle: "A single full-day workshop — or two half-day visits — that fits within any institution's schedule. No long-term commitment required. Scalable nationwide.",
                months: [
                    {
                        num: "AM",
                        title: "WHO ARE YOU IN THE DIGITAL WORLD",
                        sub: "Identity, agency, and your first AI conversation",
                        detail: "We open with a question, not a lecture. Who are you, and what do you want? Through guided exercises, participants map their own strengths and connect them to the digital world. First hands-on time with an AI tool — using it as a thinking partner, not a search engine.",
                        outcomes: ["Personal strengths map", "First AI conversation completed", "One question answered by AI that they couldn't answer alone"],
                    },
                    {
                        num: "MID",
                        title: "AI AS YOUR EVERYDAY TOOL",
                        sub: "Practical skills for real life — right now",
                        detail: "The practical core of the day. Participants use AI to write a CV draft, draft a formal email, understand a contract or official document, and brainstorm a personal goal. No theory — only doing. Every exercise uses a real situation from their actual lives.",
                        outcomes: ["CV draft created with AI assistance", "One formal communication written", "One real document explained and understood"],
                    },
                    {
                        num: "PM",
                        title: "BUILD SOMETHING. LEAVE WITH IT.",
                        sub: "One output, made today, entirely theirs",
                        detail: "Each participant chooses one thing to make: a short personal introduction video, a creative piece, a digital poster, a simple project concept. AI-assisted, facilitator-supported. They leave with something real — a first portfolio entry and the knowledge that they made it themselves.",
                        outcomes: ["One completed creative output", "Youthpass competence self-assessment", "What comes next — resources to keep going independently"],
                    },
                ],
                note: "Two-visit option: Day 1 covers the morning and midday blocks. Day 2 is the full build session — expanding what was started into a richer output. Each day works independently if only one visit is possible.",
            },
            why: {
                label: "Why Us",
                title: "Research Lab Brings Something Different.",
                points: [
                    "We are not an NGO running workshops. We are a creative and intelligence organisation that builds with AI every day. We bring that real-world practice into the room.",
                    "Our curriculum draws on a systematic review of 20+ international programmes — including SOS YouthCan! across 41 countries, IRC REACH, First Star Academy, and UNICEF-Akelius. Evidence-based from day one.",
                    "Emotional safety comes first. For two years, Research Lab has been studying and developing trauma-aware approaches — because young people with this life experience cannot process new information until they feel safe.",
                    "When a 16-year-old leaves our programme, they have an AI literacy portfolio, measurable outcomes, and a way of thinking most adults never develop. Our interdisciplinary team — facilitators, psychologists, AI practitioners, entrepreneurs, and artists — is there every step of the way.",
                ],
            },
            collab: {
                label: "Collaboration",
                title: "We Are Looking For Partners.",
                subtitle: "The biggest impact happens in partnership.",
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
                sub: "If you work with young people in care — or want to — we want to talk. A real conversation about what we can build together.",
                btn: "Start the Conversation",
            },
        },
        sk: {
            hero: {
                label: "Mládež × AI × Research Lab",
                title1: "Svet sa zmenil.",
                title2: "Ty si pripravený.",
                subtitle: "Kurz pre mladých ľudí vo veku 14–18 rokov, ktorí vstupujú do dospelosti so všetkým, čo potrebujú na to, aby ju viedli.",
                cta: "Preskúmaj kurz",
                badge: "Nová iniciatíva · 2026",
            },
            challenge: {
                label: "Príležitosť",
                title: "AI ako sociálny výťah.",
                intro: "Na Slovensku vyrastá v centrách pre deti a rodiny 4 000 až 5 000 mladých ľudí. Keď dovŕšia 18 rokov, odchádzajú bez rodinnej podpory, usmerňovania a sietí kontaktov, na ktoré sa väčšina rovesníkov spolieha. AI mení túto rovnicu. Po prvýkrát môže mladý človek s laptopom získať prístup k rovnakým kreatívnym nástrojom, kariérnemu poradenstvu a spätnoväzbovým cyklom, ktoré kedysi vyžadovali správnu rodinu, správnú školu alebo správné mesto.",
                stats: [
                    { val: "4–5K", label: "mladých ľudí opúšťa starostlivosť na Slovensku každý rok — bez sietí kontaktov, ktoré väčšina rovesníkov považuje za samozrejmosť" },
                    { val: "3×", label: "vyššia šanca zamestnania pre mladých so štruktúrovaným digitálnym vzdelávaním" },
                    { val: "45M+", label: "nových pracovných miest v AI ekonomike do roku 2030 — pripravujeme ich zaujať ich" },
                    { val: "20+", label: "medzinárodných programov preskúmaných pri tvorbe kurzu — od prvého dňa postavený na dôkazoch" },
                ],
                cards: [
                    { h: "Kreatívny partner na rozmýšľanie.", s: "Nápady možno testovať, spochybňovať a rozvíjať — bez potreby siete kontaktov." },
                    { h: "Skutočný spätnoväzbový cyklus.", s: "Skúšaj, zlepšuj, vylepšuj. Iteračný cyklus, ktorý väčšina ľudí dostáva od mentorov — teraz dostupný každému." },
                    { h: "Kompletné kreatívne štúdio.", s: "Laptop sa stáva priestorom pre písanie, dizajn, kód, výskum a rozprávanie príbehov. Bez obmedzení prístupu." },
                    { h: "Prvý projekt. Skutočné portfólio.", s: "AI pomáha premeniť nápady na hmatateľné výstupy — prototypy, vizuály, texty, koncepty. Niečo skutočné ukázať svetu." },
                ],
            },
            method: {
                label: "Prístup",
                title: "Nie charita. Architektúra.",
                subtitle: "Budujeme identitu, nielen zručnosti. Emocionálna bezpečnosť je na prvom mieste — mladí ľudia nedokážu spracovávať nové informácie, kým sa necítia bezpečne. Preto každé stretnutie navrhujeme ako bezpečný priestor citlivý na traumu.",
                pillars: [
                    {
                        num: "01",
                        title: "Identita a sebaarchitektúra",
                        desc: "Skôr ako akákoľvek zručnosť, riešime to, kým si myslia, že sú. Pomáhame mladým ľuďom rozvíjať kritické myslenie a znovu získať pocit vlastnej schopnosti konať — pocit, že môžu ovplyvniť svoju vlastnú realitu. Prostredníctvom AI nástrojov nie sú postavení ako pasívni konzumenti, ale tvorcovia vlastnej cesty.",
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
                        desc: "Hrozby sú reálne a zrýchľujú sa. Phishing, deepfakes, sociálne inžinierstvo, ochrana dát. Robíme ich sebavedomými a odolnými voči manipulácii online.",
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
                label: "Program",
                title: "Jeden deň. Skutočná zmena.",
                subtitle: "Jeden celodenný workshop — alebo dve poldenné návštevy — ktorý zapadá do rozvrhu akéhokoľvek zariadenia. Bez dlhodobého záväzku. Replikovateľný po celom Slovensku.",
                months: [
                    {
                        num: "DOP",
                        title: "KTO SI V DIGITÁLNOM SVETE",
                        sub: "Identita, schopnosť konať a prvý rozhovor s AI",
                        detail: "Začíname otázkou, nie prednáškou. Kto si a čo chceš? Cez riadené cvičenia si účastníci zmapujú vlastné silné stránky a prepoja ich s digitálnym svetom. Prvý praktický kontakt s AI nástrojom — ako partnerom na rozmýšľanie, nie ako vyhľadávačom.",
                        outcomes: ["Mapa osobných silných stránok", "Prvý rozhovor s AI dokončený", "Jedna otázka zodpovedaná s pomocou AI, ktorú nedokázali vyriešiť sami"],
                    },
                    {
                        num: "OBE",
                        title: "AI AKO TVOJ KAŽDODENNÝ NÁSTROJ",
                        sub: "Praktické zručnosti pre reálny život — hneď teraz",
                        detail: "Praktické jadro dňa. Účastníci použijú AI na napísanie životopisu, formálneho e-mailu, pochopenie zmluvy alebo úradného dokumentu a brainstorming osobného cieľa. Žiadna teória — len robenie. Každé cvičenie vychádza z reálnej situácie z ich vlastného života.",
                        outcomes: ["Návrh životopisu vytvorený s pomocou AI", "Jedna formálna komunikácia napísaná", "Jeden skutočný dokument vysvetlený a pochopený"],
                    },
                    {
                        num: "POO",
                        title: "POSTAV NIEČO. ODNES SI TO.",
                        sub: "Jeden výstup, vytvorený dnes, úplne ich vlastný",
                        detail: "Každý účastník si vyberie jednu vec na vytvorenie: krátke osobné predstavenie, kreatívny kúsok, digitálny plagát alebo jednoduchý projektový koncept. S pomocou AI, s podporou facilitátora. Odchádzajú s niečím skutočným — prvým vstupom do portfólia a vedomím, že to dokázali sami.",
                        outcomes: ["Jeden dokončený kreatívny výstup", "Sebahodnotenie kompetencií Youthpass", "Čo ďalej — zdroje na samostatné pokračovanie"],
                    },
                ],
                note: "Možnosť dvoch návštev: 1. deň pokrýva dopoludňajší a poludňajší blok. 2. deň je plná tvorivá session — rozvinúť to, čo bolo začaté, do bohatšieho výstupu. Každý deň funguje samostatne, ak je možná len jedna návšteva.",
            },
            why: {
                label: "Prečo my",
                title: "Research Lab prináša niečo iné.",
                points: [
                    "Nie sme mimovládka organizujúca workshopy. Sme kreatívna a inteligenčná organizácia, ktorá každý deň buduje s AI. Tú prax prinášame do miestnosti.",
                    "Náš kurz vychádza zo systematickej analýzy 20+ medzinárodných iniciatív — vrátane SOS YouthCan! v 41 krajinách, IRC REACH, First Star Academy a UNICEF-Akelius. Od prvého dňa postavený na dôkazoch.",
                    "Emocionálna bezpečnosť je na prvom mieste. Dva roky Research Lab skúma a vyvíja prístupy citlivé na traumu — pretože mladí ľudia s touto životnou skúsenosťou nedokážu spracovávať nové informácie, kým sa necítia bezpečne.",
                    "Keď šestnásťročný opustí náš program, má portfólio AI gramotnosti, merateľné výsledky a spôsob myslenia, ktorý väčšina dospelých nikdy nerozvinie. Náš interdisciplinárny tím — facilitátori, psychológovia, AI odborníci, podnikatelia a umelci — je pri nich na každom kroku.",
                ],
            },
            collab: {
                label: "Spolupráca",
                title: "Hľadáme partnerov.",
                subtitle: "Najväčší dopad vzniká v partnerstve.",
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
                sub: "Ak pracujete s mladými ľuďmi v starostlivosti — alebo chcete — chceme sa porozprávať. Skutočný rozhovor o tom, čo môžeme spoločne vybudovať.",
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

            {/* THE OPPORTUNITY */}
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

                    {/* Opportunity cards */}
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
                                                {lang === "en" ? `Block ${m.num}` : `Blok ${m.num}`}
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
