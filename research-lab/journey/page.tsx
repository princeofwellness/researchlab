"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    ArrowLeft, 
    ArrowUpRight, 
    CheckCircle2, 
    Brain, 
    Zap, 
    Target, 
    Briefcase, 
    Activity,
    Search,
    Rocket,
    Globe,
    Lock,
    Users
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// --- Components ---

function Nav({ lang }: { lang: 'en' | 'sk' }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <Link href="/ideas/research-lab" className="flex items-center gap-2 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] font-inter">
                    {lang === 'en' ? 'Back' : 'Späť'}
                </span>
            </Link>
            <div className="flex gap-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] font-inter opacity-40">
                    SORRYWECAN // JOURNEY
                </span>
            </div>
        </nav>
    )
}

function Section({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
    return (
        <section id={id} className={cn("py-32 px-6 md:px-20", className)}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    )
}

function WeekCard({ number, title, focus, result, details, lang }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-black/10 p-8 md:p-12 space-y-8 bg-white/50 backdrop-blur-sm relative overflow-hidden group hover:border-[#0047BB]/30 transition-colors"
        >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <span className="text-[15vw] font-serif-instrument italic leading-none">{number}</span>
            </div>
            
            <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB]">
                    {lang === 'en' ? `WEEK ${number}` : `TÝŽDEŇ ${number}`}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif-instrument italic mt-4">{title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">
                                {lang === 'en' ? 'FOCUS' : 'FÓKUS'}
                            </h4>
                            <p className="text-lg leading-relaxed text-black/70 italic">
                                {focus}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">
                                {lang === 'en' ? 'OUTCOME' : 'VÝSLEDOK'}
                            </h4>
                            <p className="text-sm font-medium leading-relaxed">
                                {result}
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4">
                            {lang === 'en' ? 'CORE GOALS' : 'CIELE'}
                        </h4>
                        <div className="space-y-3">
                            {details.map((goal: string, i: number) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={14} className="text-[#0047BB] mt-1 shrink-0" />
                                    <span className="text-xs font-inter leading-relaxed opacity-60">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

// --- Page Content ---

const content = {
    sk: {
        hero: {
            title: "Trajektória",
            subtitle: "NIE JE TO KURZ, ALE LABORATÓRIUM",
            description: "Za jeden mesiac si vybuduješ funkčný systém na rozšírenie a zosilnenie inteligencie. Od roztrúsených promptov k integrovanej AI-sústave.",
            philosophy: "Neposkytujeme vám len informácie. Informácie sa menia príliš rýchlo — potrebujeme meniť spôsob myslenia a prístup."
        },
        automation: {
            title: "Automation — čo sa naučíš",
            items: [
                { t: "Vyberať úlohy", d: "Naučíš sa rozpoznať, čo má zmysel automatizovať a čo nie." },
                { t: "Vedomá automatizácia", d: "Budeš vedieť určiť, čo delegovať strojom a kde je kritická empatia a kreativita." },
                { t: "Teória v praxi", d: "Krok za krokom si vybuduješ automatizácie pre vlastné procesy." },
                { t: "Prepojené ekosystémy", d: "Prepojíš modely a platformy tak, aby vytvárali synergický efekt." },
                { t: "Každodenný potenciál", d: "Začneš si všímať, kde technológia odstraňuje rutinu — a uvoľníš si čas na život." }
            ]
        },
        weeks: [
            {
                number: "01",
                title: "Diagnostika rutiny a audit úloh",
                focus: "Od procesného chaosu k vedomému výberu.",
                result: "Mapa vašich aktuálnych procesov a tri kľúčové úlohy pripravené na delegovanie AI-asistentom.",
                details: [
                    "Pochopiť, čo je vhodné automatizovať — a čo nie.",
                    "Osvojiť si framework 6T na prioritizáciu úloh.",
                    "Audit rutinných procesov a identifikácia „požieračov času“.",
                    "Vytvorenie procesnej matice s ROI analýzou."
                ],
                practice: [
                    "Zoznam 10–15 pravidelných úloh.",
                    "Analýza podľa 6T (frekvencia, dôležitosť, náročnosť).",
                    "Vizuálna mapa procesov.",
                    "Výber TOP 3 úloh pre rýchle víťazstvá."
                ],
                tools: ["Make / n8n", "Miro (Procesné mapy)", "Šablóny na audit"]
            },
            {
                number: "02",
                title: "Ekosystém nástrojov a AI integrácie",
                focus: "Od mechanických úkonov k inteligentnému spracovaniu.",
                result: "1–2 funkčné automatizácie s AI a knižnica 5–7 systémových promptov.",
                details: [
                    "Zorientovať sa v mape nástrojov od jednoduchých po výkonné no-code.",
                    "Pochopiť, ako sa AI stáva súčasťou automatizácií.",
                    "Osvojiť si základné princípy prompt dizajnu.",
                    "Výber správneho nástroja podľa konkrétnej úlohy."
                ],
                practice: [
                    "Osobná mapa nástrojov a identifikácia medzier.",
                    "Prvé AI scenáre v Make / n8n.",
                    "Vytvorenie knižnice promptov pre typové úlohy.",
                    "Formalizácia úloh (zdroj → AI proces → výstup)."
                ],
                tools: ["OpenAI / Claude API", "OpenRouter", "JSON štruktúry", "Notion / Obsidian"]
            },
            {
                number: "03",
                title: "Agenti, MCP a orchestrácia",
                focus: "Od jednotlivých scenárov k orchestrácii procesov.",
                result: "Funkčná viacstupňová automatizácia s AI agentmi, ktorá rieši komplexnú úlohu.",
                details: [
                    "Navrhovať komplexné viacstupňové scenáre.",
                    "Osvojiť si prácu s API, webhookmi a JSON.",
                    "Pochopiť koncept AI agentov a Model Context Protocol (MCP).",
                    "Vytvoriť agentný systém pre reálnu úlohu."
                ],
                practice: [
                    "Hlboký ponor do Make / n8n (routery, cykly, podmienky).",
                    "Pripájanie služieb cez API a webhooky.",
                    "Návrh schémy spolupráce špecializovaných agentov.",
                    "Ladenie a nastavenie fallback scenárov."
                ],
                tools: ["Claude Desktop s MCP", "Pokročilé Make / n8n", "JSON premenné"]
            },
            {
                number: "04",
                title: "Ekosystémy a škálovanie",
                focus: "Od automatizácií k ucelenej AI ekosystéme.",
                result: "Mapa vašej osobnej AI ekosystémy, finálny projekt a plán rozvoja na 3 mesiace.",
                details: [
                    "Myslieť v kategóriách ekosystémov a multiagentných systémov.",
                    "Pochopiť princípy škálovania a údržby.",
                    "Pripraviť finálny projekt na Demo Day.",
                    "Určiť smer ďalšieho rozvoja."
                ],
                practice: [
                    "Návrh mapy osobnej automatizačnej sústavy.",
                    "Dotiahnutie hlavnej automatizácie do prod-ready stavu.",
                    "Príprava 3–5 minútovej prezentácie (Demo Day).",
                    "Vyplnenie roadmapy pre ďalšie 3 mesiace."
                ],
                tools: ["Kompletný stack osvojených nástrojov", "Miro pre vizualizáciu"]
            }
        ],
        teamLab: {
            title: "Lab pre tímy",
            subtitle: "Prémiové vzdelávanie na reálnych firemných úlohách",
            features: [
                "Audit aktuálnych AI praktík vo firme",
                "Definovanie tímových cieľov na 4 týždne",
                "Výber prioritných projektov",
                "2-hodinová tech set-up session"
            ],
            outcomes: [
                "Jednotné porozumenie možnostiam AI",
                "Funkčné scenáre pre skutočné procesy",
                "Úspora až 20 % času a zdrojov"
            ]
        },
        examples: [
            { t: "AI Coaching", d: "Personalizovaný AI kouč s hlasovým rozhraním.", tools: "Claude · Vapi · Obsidian" },
            { t: "AI Vision", d: "Automatické triedenie a tagovanie vizuálneho obsahu.", tools: "GPT Vision · Claude" },
            { t: "AI Summary", d: "Transkripcia stretnutí s action items do CRM.", tools: "Zoom · Gemini · Whisper" },
            { t: "AI Learning", d: "Jazykový partner s adaptívnou náročnosťou.", tools: "GPT-4 · ElevenLabs" },
            { t: "AI Knowledge", d: "RAG systém pre sémantické vyhľadávanie v poznámkach.", tools: "Obsidian · Claude API" },
            { t: "AI Automation", d: "Email triage a automatická správa dokumentov.", tools: "n8n · Make · Claude" }
        ],
        learningGoals: {
            title: "Čo sa v laboratóriu naučíte?",
            items: [
                "Budovať znalostnú bázu v Obsidiane na mieru úlohám",
                "Integrovať AI (GPT, Claude, Groq) do systému práce",
                "Navrhovať personifikovaných AI asistentov",
                "Vizualizovať graf znalostí pre nové insighty",
                "Využívať AI na tvorbu obsahu priamo z databázy",
                "Nastavovať procesy zberu a integrácie informácií",
                "Organizovať spoluprácu v tímoch cez Obsidian",
                "Prepojiť Obsidian s vývojovými nástrojmi cez MCP"
            ]
        }
    },
    en: {
        hero: {
            title: "Trajectory",
            subtitle: "NOT A COURSE, BUT A LABORATORY",
            description: "In one month, you will build a functional system to expand and amplify intelligence. From scattered prompts to an integrated AI system.",
            philosophy: "We don't just provide information. Information changes too fast — we need to change the way of thinking and approach."
        },
        automation: {
            title: "Automation — what you'll learn",
            items: [
                { t: "Selecting tasks", d: "Learn to recognize what makes sense to automate and what doesn't." },
                { t: "Conscious automation", d: "Know what to delegate to machines and where empathy is critical." },
                { t: "Theory in practice", d: "Step-by-step building of automations for your own processes." },
                { t: "Connected ecosystems", d: "Link models and platforms for a synergistic effect." },
                { t: "Everyday potential", d: "Notice where technology removes routine — freeing up time for life." }
            ]
        },
        weeks: [
            {
                number: "01",
                title: "Routine Diagnosis & Task Audit",
                focus: "From process chaos to conscious choice.",
                result: "A map of your current processes and three key tasks ready for delegation to AI assistants.",
                details: [
                    "Understand what is suitable for automation — and what is not.",
                    "Master the 6T framework for task prioritization.",
                    "Identify 'time-wasters' and routine process audit.",
                    "Create a process matrix with ROI analysis."
                ],
                practice: [
                    "List of 10–15 regular tasks.",
                    "6T analysis (frequency, importance, difficulty).",
                    "Visual process map.",
                    "Selecting TOP 3 tasks for quick wins."
                ],
                tools: ["Make / n8n", "Miro (Process maps)", "Audit templates"]
            },
            {
                number: "02",
                title: "Tool Ecosystem & AI Integration",
                focus: "From mechanical actions to intelligent processing.",
                result: "1–2 functional AI automations and a library of 5–7 systematic prompts.",
                details: [
                    "Navigate the tool map from simple to powerful no-code solutions.",
                    "Understand how AI becomes part of automations.",
                    "Master basic principles of prompt design.",
                    "Select the right tool for a specific task."
                ],
                practice: [
                    "Personal tool map and gap identification.",
                    "First AI scenarios in Make / n8n.",
                    "Creating a prompt library for typical tasks.",
                    "Task formalization (source → AI process → output)."
                ],
                tools: ["OpenAI / Claude API", "OpenRouter", "JSON structures", "Notion / Obsidian"]
            },
            {
                number: "03",
                title: "Agents, MCP & Orchestration",
                focus: "From individual scenarios to process orchestration.",
                result: "Functional multi-stage automation with AI agents solving a complex task.",
                details: [
                    "Design complex multi-stage scenarios.",
                    "Master working with APIs, webhooks, and JSON.",
                    "Understand AI agents and Model Context Protocol (MCP).",
                    "Create an agent system for a real task."
                ],
                practice: [
                    "Deep dive into Make / n8n (routers, loops, conditions).",
                    "Connecting services via API and webhooks.",
                    "Designing a specialized agent collaboration scheme.",
                    "Debugging and setting up fallback scenarios."
                ],
                tools: ["Claude Desktop with MCP", "Advanced Make / n8n", "JSON variables"]
            },
            {
                number: "04",
                title: "Ecosystems & Scaling",
                focus: "From automations to a complete AI ecosystem.",
                result: "Map of your personal AI ecosystem, final project, and a 3-month growth plan.",
                details: [
                    "Think in terms of ecosystems and multi-agent systems.",
                    "Understand principles of scaling and maintenance.",
                    "Prepare final project for Demo Day.",
                    "Define next development directions."
                ],
                practice: [
                    "Designing a personal automation system map.",
                    "Finishing the main automation to prod-ready status.",
                    "Preparing a 3–5 minute presentation (Demo Day).",
                    "Filling out a roadmap for the next 3 months."
                ],
                tools: ["Full stack of mastered tools", "Miro for visualization"]
            }
        ],
        teamLab: {
            title: "Lab for Teams",
            subtitle: "Premium education on real business tasks",
            features: [
                "Audit of current AI practices in the company",
                "Defining team goals for 4 weeks",
                "Selecting priority projects",
                "2-hour tech set-up session"
            ],
            outcomes: [
                "Unified understanding of AI possibilities",
                "Functional scenarios for real processes",
                "Savings of up to 20% of time and resources"
            ]
        },
        examples: [
            { t: "AI Coaching", d: "Personalized AI coach with voice interface.", tools: "Claude · Vapi · Obsidian" },
            { t: "AI Vision", d: "Automatic sorting and tagging of visual content.", tools: "GPT Vision · Claude" },
            { t: "AI Summary", d: "Meeting transcription with action items to CRM.", tools: "Zoom · Gemini · Whisper" },
            { t: "AI Learning", d: "Language partner with adaptive difficulty.", tools: "GPT-4 · ElevenLabs" },
            { t: "AI Knowledge", d: "RAG system for semantic search in notes.", tools: "Obsidian · Claude API" },
            { t: "AI Automation", d: "Email triage and automatic document management.", tools: "n8n · Make · Claude" }
        ],
        learningGoals: {
            title: "What will you learn in the lab?",
            items: [
                "Build a knowledge base in Obsidian tailored to tasks",
                "Integrate AI (GPT, Claude, Groq) into your workflow",
                "Design personalized AI assistants",
                "Visualize knowledge graph for new insights",
                "Use AI for content creation directly from the database",
                "Set up data collection and integration processes",
                "Organize team collaboration through Obsidian",
                "Connect Obsidian with dev tools via MCP"
            ]
        }
    }
}

export default function JourneyPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('sk')

    return (
        <main className="bg-white text-black min-h-screen font-inter selection:bg-[#0047BB] selection:text-white">
            <Nav lang={lang} />
            
            {/* Language Switcher */}
            <div className="fixed top-24 right-6 z-[100]">
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-[10px] font-bold uppercase tracking-widest border border-black/10 px-4 py-2 hover:bg-black hover:text-white transition-all backdrop-blur-md"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            </div>

            {/* Hero Section */}
            <Section className="min-h-[80vh] flex flex-col justify-center blueprint-grid relative">
                <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
                
                <div className="relative z-10 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0047BB] mb-8 block">
                            {content[lang].hero.subtitle}
                        </span>
                        <h1 className="text-[12vw] md:text-[10vw] font-serif-instrument italic leading-[0.8] tracking-tighter mb-12">
                            {content[lang].hero.title}
                        </h1>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end"
                    >
                        <p className="text-xl md:text-2xl font-inter leading-relaxed text-black/70 max-w-xl">
                            {content[lang].hero.description}
                        </p>
                        <div className="p-8 border-l border-black/10">
                            <p className="text-sm font-medium leading-relaxed italic opacity-60">
                                {content[lang].hero.philosophy}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Automation Section */}
            <Section className="bg-[#f8f8f8] border-y border-black/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB]">
                            {content[lang].automation.title}
                        </span>
                        <div className="space-y-8">
                            {content[lang].automation.items.map((item: any, i: number) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="text-[#0047BB] opacity-20 group-hover:opacity-100 transition-opacity font-serif-instrument italic text-2xl">
                                        0{i + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold tracking-tight">{item.t}</h3>
                                        <p className="text-sm text-black/60 leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        {/* Abstract Flow Visual */}
                        <div className="absolute w-full h-full blueprint-grid opacity-10" />
                        <div className="relative w-80 h-80 border border-black/5 rounded-full flex items-center justify-center">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-t-2 border-[#0047BB]/20 rounded-full"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-12 border-b-2 border-black/10 rounded-full"
                            />
                            <Brain size={40} className="text-[#0047BB] opacity-40" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Program Timeline */}
            <Section>
                <div className="space-y-32">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-6 block">
                            {lang === 'en' ? 'THE PATH' : 'CESTA'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif-instrument italic">
                            {lang === 'en' ? 'Four weeks to change how you work.' : 'Štyri týždne, ktoré zmenia váš prístup k práci.'}
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {content[lang].weeks.map((week: any, i: number) => (
                            <WeekCard key={i} {...week} lang={lang} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Team Lab Section */}
            <Section className="bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                    <div className="space-y-12">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-6 block">
                                {content[lang].teamLab.title}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif-instrument italic leading-tight">
                                {content[lang].teamLab.subtitle}
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                                    {lang === 'en' ? 'PROCESS' : 'PROCES'}
                                </h4>
                                {content[lang].teamLab.features.map((f: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                                        <span className="text-sm opacity-70 leading-relaxed">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                                    {lang === 'en' ? 'OUTCOMES' : 'VÝSLEDKY'}
                                </h4>
                                {content[lang].teamLab.outcomes.map((f: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                                        <span className="text-sm opacity-70 leading-relaxed">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <div className="p-12 border border-white/10 space-y-8 bg-white/5 backdrop-blur-sm max-w-md w-full">
                            <div className="flex gap-4 items-center opacity-40">
                                <Users size={20} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Corporate Transformation</span>
                            </div>
                            <p className="text-xl italic font-serif-instrument leading-relaxed">
                                {lang === 'en' 
                                    ? "We don't teach abstract theory. We work on your real company tasks to deliver immediate value."
                                    : "Neučíme abstraktnú teóriu. Pracujeme na vašich reálnych firemných úlohách pre okamžitý prínos."}
                            </p>
                            <div className="pt-8 border-t border-white/10">
                                <div className="text-xs font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-2">ROI</div>
                                <div className="text-4xl font-serif-instrument italic">20% Time Saved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* AI Examples Grid */}
            <Section>
                <div className="space-y-20">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 block">
                            {lang === 'en' ? 'FUNCTIONAL ARTEFACTS' : 'FUNKČNÉ ARTEFAKTY'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif-instrument italic">
                            {lang === 'en' ? 'Real agents. Real workflows.' : 'Skutoční agenti. Skutočné workflowy.'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content[lang].examples.map((ex: any, i: number) => (
                            <div key={i} className="p-8 border border-black/5 hover:border-[#0047BB]/20 transition-all space-y-6 group">
                                <h3 className="text-xl font-bold tracking-tight group-hover:text-[#0047BB] transition-colors">{ex.t}</h3>
                                <p className="text-sm opacity-60 leading-relaxed min-h-[48px]">{ex.d}</p>
                                <div className="pt-6 border-t border-black/5">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 block mb-2">Tools</span>
                                    <span className="text-[10px] font-medium opacity-60">{ex.tools}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Learning Goals Section */}
            <Section className="bg-[#0047BB] text-white overflow-hidden relative">
                <div className="absolute inset-0 noise-bg opacity-20" />
                <div className="absolute -top-40 -right-40 w-96 h-96 border border-white/5 rounded-full animate-spin-slow" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/5 rounded-full animate-spin-slow-reverse" />
                
                <div className="max-w-4xl mx-auto relative z-10 space-y-16">
                    <h2 className="text-4xl md:text-5xl font-serif-instrument italic text-center leading-tight">
                        {content[lang].learningGoals.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {content[lang].learningGoals.items.map((item: string, i: number) => (
                            <div key={i} className="flex items-start gap-4 p-4 border-l border-white/10 hover:bg-white/5 transition-colors">
                                <span className="text-[#0047BB] bg-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {i + 1}
                                </span>
                                <span className="text-sm font-medium leading-relaxed opacity-90">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="text-center py-48">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-12 block">READY TO START?</span>
                <h2 className="text-[8vw] md:text-[6vw] font-serif-instrument italic leading-none mb-20 tracking-tighter">
                    {lang === 'en' ? 'Join the next cohort.' : 'Pridaj sa k ďalšej skupine.'}
                </h2>
                <Link 
                    href="/ideas/research-lab#contact"
                    className="bg-[#0047BB] text-white px-12 py-6 font-inter font-semibold text-xs uppercase tracking-[0.4em] hover:bg-black transition-all inline-flex items-center gap-3 shadow-2xl"
                >
                    {lang === 'en' ? 'BOOK YOUR DISCOVERY CALL' : 'REZERVUJ SI DISCOVERY CALL'} <ArrowUpRight size={16} />
                </Link>
            </Section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-black/5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </main>
    )
}
