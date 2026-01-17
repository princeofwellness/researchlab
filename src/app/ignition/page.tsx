"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function Section({ id, number, title, children, className, dark }: any) {
    return (
        <section id={id} className={cn(
            "py-32 border-b last:border-0 relative",
            dark ? "bg-black text-white border-white/10" : "border-black/10",
            className
        )}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-20"
            >
                {(number || title) && (
                    <div className="space-y-8 mb-24">
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{number}</span>
                            <div className={cn("flex-1 h-[1px]", dark ? "bg-white/10" : "bg-black/10")} />
                        </div>
                        {title && <h2 className="font-serif-instrument text-6xl md:text-7xl tracking-tighter leading-none">{title}</h2>}
                    </div>
                )}
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}

function TimeBlock({ time, title, description, tags, accent }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 p-8 border transition-all",
                accent ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white hover:border-black/30"
            )}
        >
            <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">{time}</span>
            </div>
            <div className="space-y-4">
                <h4 className="text-2xl font-serif-instrument italic">{title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{description}</p>
                {tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag: string, i: number) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest bg-black/5 px-3 py-1">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

function PillarCard({ icon, title, items }: any) {
    return (
        <div className="p-8 border border-black/10 bg-white space-y-6 hover:border-[#0047BB]/30 transition-all group">
            <div className="text-4xl">{icon}</div>
            <h4 className="text-xl font-bold">{title}</h4>
            <div className="space-y-3">
                {items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                        <span className="text-sm text-black/70 leading-relaxed">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function FounderCard({ name, role, company, brings, industries }: any) {
    return (
        <div className="p-8 border border-white/20 bg-white/5 space-y-6 hover:bg-white/10 transition-all">
            <div>
                <h4 className="text-2xl font-serif-instrument italic">{name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{role}</p>
                <p className="text-xs text-white/40 mt-1">{company}</p>
            </div>
            <div className="space-y-4">
                <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 block mb-2">BRINGS</span>
                    <p className="text-sm text-white/70 leading-relaxed">{brings}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 block mb-2">WORKED WITH</span>
                    <p className="text-xs text-white/50">{industries}</p>
                </div>
            </div>
        </div>
    )
}

function IndustryTag({ name }: { name: string }) {
    return (
        <span className="px-4 py-2 border border-black/10 text-sm hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all cursor-default">
            {name}
        </span>
    )
}

export default function IgnitionPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                subtitle: "THINKING + TOOLS + AUTOMATION + IMAGINATION",
                title: {
                    line1: "One Day.",
                    line2: "Unlimited Potential."
                },
                description: "We don't care what industry you're in. We care that you want to maximize what's possible. In 8 hours, we expand thinking, unlock tools, build automations, and stretch imagination. All of it.",
                stats: [
                    { value: "8hrs", label: "Intensive" },
                    { value: "10-25", label: "Participants" },
                    { value: "3", label: "Expert Minds" },
                    { value: "All", label: "Industries" }
                ]
            },
            problem: {
                title: "The Reality",
                headline: "AI Changed Everything. Most People Missed It.",
                description: "It's not about whether you use AI. Everyone does. It's about whether you're using 5% of what's possible or 85%. Most teams are stuck at 5% — prompting without understanding, automating without strategy, working harder instead of smarter.",
                points: [
                    { stat: "5%", label: "Average AI capability utilized by teams" },
                    { stat: "4hrs", label: "Wasted daily on tasks AI could handle" },
                    { stat: "10x", label: "Productivity gap between trained and untrained" }
                ]
            },
            what: {
                title: "What This Is",
                headline: "Not a Course. A Complete Upgrade.",
                description: "One day that combines everything: expanded thinking, practical tools, real automation, and imagination for what's possible. Three experts from different worlds. Universal principles that work in any industry.",
                pillars: [
                    { 
                        icon: "🧠", 
                        title: "Thinking", 
                        items: ["How to frame problems for AI", "Decision-making with machine intelligence", "Strategic navigation in complexity", "From reactive to proactive mindset"]
                    },
                    { 
                        icon: "🛠", 
                        title: "Tools", 
                        items: ["Which tools for which tasks", "Practical hands-on with YOUR work", "Building your personal AI stack", "Integration into daily workflow"]
                    },
                    { 
                        icon: "⚡", 
                        title: "Automation", 
                        items: ["Identifying automation opportunities", "Building workflows that run themselves", "From manual to systematic", "Scaling without adding headcount"]
                    },
                    { 
                        icon: "✨", 
                        title: "Imagination", 
                        items: ["Seeing possibilities you didn't know existed", "Expanding what 'possible' means", "From incremental to exponential thinking", "Future-proofing your approach"]
                    }
                ]
            },
            who: {
                title: "Who This Is For",
                headline: "Any Industry. Any Size. One Requirement.",
                description: "The only filter: you're serious about maximizing your team's potential. If you invest in development, if you want competitive advantage, if you refuse to let your people fall behind — this is for you.",
                industries: [
                    "Law Firms", "Banks & Finance", "Telco", "Healthcare", "Manufacturing",
                    "Marketing Agencies", "Production Houses", "Consulting", "Tech Companies", "Retail",
                    "Real Estate", "Insurance", "Education", "Government", "SMEs", "Startups", "Enterprise"
                ],
                note: "€8,000 is a rounding error for companies serious about their people. It's the cost of one bad hire, one wasted quarter, one competitor pulling ahead."
            },
            day: {
                title: "The Day",
                headline: "8 Hours. Complete Transformation.",
                blocks: [
                    { 
                        time: "09:00", 
                        title: "THE AWAKENING", 
                        desc: "We take your actual work. Show you what's possible in 5 minutes. The gap between where you are and where you could be becomes viscerally real.", 
                        tags: ["Live Demo", "Your Real Tasks", "Possibility Mapping"]
                    },
                    { 
                        time: "10:00", 
                        title: "THE FRAMEWORK", 
                        desc: "How to think with AI, not just use it. Decision frameworks, task decomposition, strategic prompting. Universal principles that work everywhere.", 
                        tags: ["Thinking Models", "Decision Frameworks", "Strategic Approach"]
                    },
                    { 
                        time: "11:30", 
                        title: "THE TOOLS", 
                        desc: "Hands-on with tools that matter. Not theory — practice. You work on YOUR tasks, build YOUR workflows, solve YOUR problems.", 
                        tags: ["Hands-On Practice", "Personal Stack", "Real Implementation"]
                    },
                    { 
                        time: "13:30", 
                        title: "THE AUTOMATION", 
                        desc: "Identify what should run without you. Build actual automations. From manual processes to systematic workflows that scale.", 
                        tags: ["Workflow Design", "Process Automation", "Scalable Systems"],
                        accent: true
                    },
                    { 
                        time: "15:00", 
                        title: "THE EXPANSION", 
                        desc: "Imagination session. What becomes possible when you combine everything? Industry-specific applications. Future scenarios. Competitive edges.", 
                        tags: ["Possibility Thinking", "Industry Applications", "Future Planning"]
                    },
                    { 
                        time: "16:30", 
                        title: "THE COMMITMENT", 
                        desc: "Each person leaves with a concrete 30-day implementation plan. Public commitment. Support structure. No excuses.", 
                        tags: ["Action Plan", "Accountability", "Follow-Through"]
                    }
                ]
            },
            founders: {
                title: "The Trinity",
                headline: "Three Worlds. One Mission.",
                description: "This isn't a solo trainer reading slides. It's three practitioners from completely different industries who've implemented what they teach. Together, they cover every angle.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "SORRYWECAN // Founder & Creative Director", 
                        brings: "Imagination expansion, visual thinking, possibility mapping. How to see what others can't and create what doesn't exist yet.",
                        industries: "Samsung, Sennheiser, Forbes, Tatra Banka, Dubai Expo"
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "The Architect", 
                        company: "SUDOLABS // Co-founder & CPO", 
                        brings: "Systems thinking, automation architecture, scaling logic. How to build processes that run themselves and grow without breaking.",
                        industries: "Startups to $1.5B valuations, Banks, Enterprise Tech"
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategic clarity, decision frameworks, organizational transformation. How to navigate complexity without losing direction.",
                        industries: "Corporate Transformation, Executive Advisory, Change Management"
                    }
                ]
            },
            leave: {
                title: "What You Leave With",
                headline: "Not Inspiration. Implementation.",
                items: [
                    { title: "Personal AI Stack", desc: "Your specific tools, configured and working. Not generic recommendations — actual setup you'll use Monday morning." },
                    { title: "Automation Blueprints", desc: "At least 3 workflows designed for your actual processes. Ready to deploy or refine." },
                    { title: "Thinking Frameworks", desc: "Mental models for AI-augmented decision making. How to frame any problem, any task, any industry." },
                    { title: "30-Day Action Plan", desc: "Concrete next steps with accountability built in. One follow-up call included to keep momentum." },
                    { title: "Resource Vault Access", desc: "Templates, prompts, tutorials, recordings. Permanent access. Updated continuously." },
                    { title: "Network", desc: "Connection to others who've been through Ignition. Cross-industry insights. Ongoing community." }
                ]
            },
            pricing: {
                title: "Investment",
                headline: "One Day. Clear ROI.",
                context: "For context: this is less than most companies spend on a single conference, a mediocre consultant day, or a quarter of a bad hire. The question isn't whether you can afford it. It's whether you can afford not to.",
                tiers: [
                    { 
                        name: "Standard", 
                        price: "8,000", 
                        currency: "EUR", 
                        features: [
                            "Full 8-hour intensive workshop",
                            "Up to 15 participants",
                            "All three expert facilitators",
                            "Personal AI stack setup for each",
                            "30-day action plans",
                            "Resource vault access (permanent)",
                            "1 follow-up group call"
                        ], 
                        cta: "Book Standard" 
                    },
                    { 
                        name: "Premium", 
                        price: "12,000", 
                        currency: "EUR", 
                        features: [
                            "Everything in Standard",
                            "Up to 25 participants",
                            "Pre-workshop diagnostic (2hr call)",
                            "Custom industry focus",
                            "Executive 1:1 sessions (3x 30min)",
                            "Extended resource library",
                            "3 follow-up calls over 90 days"
                        ], 
                        cta: "Book Premium", 
                        highlight: true 
                    },
                    { 
                        name: "Enterprise", 
                        price: "Custom", 
                        currency: "", 
                        features: [
                            "Multi-session programs",
                            "Department-by-department rollout",
                            "Ongoing advisory retainer",
                            "Internal champion training",
                            "Custom automation development",
                            "Quarterly strategy sessions"
                        ], 
                        cta: "Contact Us" 
                    }
                ],
                note: "All prices exclude VAT. In-person delivery (we come to you or you come to us). Remote not available — transformation requires presence."
            },
            faq: {
                title: "Questions",
                items: [
                    { 
                        q: "Is this just prompt engineering training?", 
                        a: "No. Prompting is maybe 15% of what we cover. This is about thinking, tools, automation, and imagination combined. Most 'AI training' teaches you to talk to machines. We teach you to think with them, build systems around them, and see possibilities through them." 
                    },
                    { 
                        q: "Our industry is very specific. Will this apply?", 
                        a: "Yes. The principles are universal — thinking frameworks, automation logic, possibility expansion. We've worked with creative agencies, banks, telcos, law firms, manufacturers. The application differs, the fundamentals don't." 
                    },
                    { 
                        q: "We already use AI tools. Why do we need this?", 
                        a: "Using tools isn't the same as maximizing them. Most teams use 5-10% of what's possible. We close that gap — showing what's actually achievable and building the systems to get there." 
                    },
                    { 
                        q: "Why one day instead of a longer program?", 
                        a: "Intensive > extensive. One focused day creates more change than months of occasional sessions. We light the fire and give you everything to keep it burning. The 30-day follow-up ensures it sticks." 
                    },
                    { 
                        q: "Can this be done remotely?", 
                        a: "No. The intensity requires presence. The hands-on work requires real-time collaboration. The transformation happens in the room. We don't compromise on this." 
                    },
                    { 
                        q: "What's the actual ROI?", 
                        a: "Conservative estimate: 4+ hours saved per person per week. For a 15-person team at average salary, that's €100k+ annually. Plus: better decisions, faster execution, competitive advantage. The workshop pays for itself in weeks, not months." 
                    }
                ]
            },
            cta: {
                headline: "Ready to Maximize?",
                description: "Limited to 4-6 workshops per month. We work with organizations serious about their people's potential. If that's you, let's talk.",
                button: "Book Discovery Call",
                note: "20-minute call. No commitment. We'll tell you honestly if this is right for your situation."
            }
        },
        sk: {
            hero: {
                subtitle: "MYSLENIE + NÁSTROJE + AUTOMATIZÁCIA + IMAGINÁCIA",
                title: {
                    line1: "Jeden Deň.",
                    line2: "Neobmedzený Potenciál."
                },
                description: "Nezáleží na tom, v akom ste odvetví. Záleží na tom, či chcete maximalizovať, čo je možné. Za 8 hodín rozšírime myslenie, odomkneme nástroje, postavíme automatizácie a roztiahneme imagináciu. Všetko naraz.",
                stats: [
                    { value: "8hod", label: "Intenzívne" },
                    { value: "10-25", label: "Účastníkov" },
                    { value: "3", label: "Expertné Mysle" },
                    { value: "Všetky", label: "Odvetvia" }
                ]
            },
            problem: {
                title: "Realita",
                headline: "AI Zmenila Všetko. Väčšina To Prehliadla.",
                description: "Nejde o to, či používate AI. Používa ju každý. Ide o to, či využívate 5% alebo 85% toho, čo je možné. Väčšina tímov je zaseknutá na 5% — promptujú bez porozumenia, automatizujú bez stratégie, pracujú tvrdšie namiesto chytrejšie.",
                points: [
                    { stat: "5%", label: "Priemerné využitie AI kapacity tímami" },
                    { stat: "4hod", label: "Stratené denne na úlohách, ktoré AI zvládne" },
                    { stat: "10x", label: "Rozdiel produktivity medzi trénovanými a netrénovanými" }
                ]
            },
            what: {
                title: "Čo To Je",
                headline: "Nie Kurz. Kompletný Upgrade.",
                description: "Jeden deň, ktorý kombinuje všetko: rozšírené myslenie, praktické nástroje, reálnu automatizáciu a imagináciu pre to, čo je možné. Traja experti z rôznych svetov. Univerzálne princípy, ktoré fungujú v každom odvetví.",
                pillars: [
                    { 
                        icon: "🧠", 
                        title: "Myslenie", 
                        items: ["Ako formulovať problémy pre AI", "Rozhodovanie so strojovou inteligenciou", "Strategická navigácia v komplexite", "Od reaktívneho k proaktívnemu mindetu"]
                    },
                    { 
                        icon: "🛠", 
                        title: "Nástroje", 
                        items: ["Ktoré nástroje na ktoré úlohy", "Praktická práca na VAŠICH úlohách", "Budovanie osobného AI stacku", "Integrácia do denného workflow"]
                    },
                    { 
                        icon: "⚡", 
                        title: "Automatizácia", 
                        items: ["Identifikácia príležitostí na automatizáciu", "Budovanie workflow, ktoré bežia samy", "Od manuálneho k systematickému", "Škálovanie bez pridávania ľudí"]
                    },
                    { 
                        icon: "✨", 
                        title: "Imaginácia", 
                        items: ["Vidieť možnosti, o ktorých ste nevedeli", "Rozšírenie toho, čo 'možné' znamená", "Od inkrementálneho k exponenciálnemu mysleniu", "Future-proofing vášho prístupu"]
                    }
                ]
            },
            who: {
                title: "Pre Koho To Je",
                headline: "Akékoľvek Odvetvie. Akákoľvek Veľkosť. Jedna Požiadavka.",
                description: "Jediný filter: myslíte to vážne s maximalizáciou potenciálu vášho tímu. Ak investujete do rozvoja, ak chcete konkurenčnú výhodu, ak odmietate nechať svojich ľudí zaostávať — toto je pre vás.",
                industries: [
                    "Právne Firmy", "Banky & Financie", "Telekomunikácie", "Zdravotníctvo", "Výroba",
                    "Marketingové Agentúry", "Produkčné Spoločnosti", "Consulting", "Tech Firmy", "Retail",
                    "Reality", "Poisťovníctvo", "Vzdelávanie", "Štátna Správa", "SME", "Startupy", "Enterprise"
                ],
                note: "€8 000 je zaokrúhľovacia chyba pre firmy, ktoré to myslia vážne so svojimi ľuďmi. Je to cena jedného zlého hire, jedného strateného kvartálu, jedného konkurenta, ktorý sa dostane dopredu."
            },
            day: {
                title: "Ten Deň",
                headline: "8 Hodín. Kompletná Transformácia.",
                blocks: [
                    { 
                        time: "09:00", 
                        title: "PREBUDENIE", 
                        desc: "Vezmeme vašu skutočnú prácu. Ukážeme, čo je možné za 5 minút. Rozdiel medzi tým, kde ste a kde by ste mohli byť, sa stane viscerálne reálnym.", 
                        tags: ["Live Demo", "Vaše Skutočné Úlohy", "Mapovanie Možností"]
                    },
                    { 
                        time: "10:00", 
                        title: "FRAMEWORK", 
                        desc: "Ako myslieť s AI, nie ju len používať. Rozhodovacie frameworky, dekompozícia úloh, strategické promptovanie. Univerzálne princípy, ktoré fungujú všade.", 
                        tags: ["Modely Myslenia", "Rozhodovacie Frameworky", "Strategický Prístup"]
                    },
                    { 
                        time: "11:30", 
                        title: "NÁSTROJE", 
                        desc: "Hands-on s nástrojmi, na ktorých záleží. Nie teória — prax. Pracujete na VAŠICH úlohách, budujete VAŠE workflow, riešite VAŠE problémy.", 
                        tags: ["Praktická Práca", "Osobný Stack", "Reálna Implementácia"]
                    },
                    { 
                        time: "13:30", 
                        title: "AUTOMATIZÁCIA", 
                        desc: "Identifikujte, čo by malo bežať bez vás. Postavte skutočné automatizácie. Od manuálnych procesov k systematickým workflow, ktoré škálujú.", 
                        tags: ["Dizajn Workflow", "Automatizácia Procesov", "Škálovateľné Systémy"],
                        accent: true
                    },
                    { 
                        time: "15:00", 
                        title: "EXPANZIA", 
                        desc: "Imaginačná session. Čo sa stane možným, keď skombinujete všetko? Aplikácie špecifické pre odvetvie. Budúce scenáre. Konkurenčné výhody.", 
                        tags: ["Myslenie v Možnostiach", "Aplikácie pre Odvetvie", "Plánovanie Budúcnosti"]
                    },
                    { 
                        time: "16:30", 
                        title: "ZÁVÄZOK", 
                        desc: "Každý odchádza s konkrétnym 30-dňovým implementačným plánom. Verejný záväzok. Štruktúra podpory. Žiadne výhovorky.", 
                        tags: ["Akčný Plán", "Zodpovednosť", "Follow-Through"]
                    }
                ]
            },
            founders: {
                title: "Trojica",
                headline: "Tri Svety. Jedna Misia.",
                description: "Toto nie je sólo tréner, ktorý číta slajdy. Sú to traja praktici z úplne odlišných odvetví, ktorí implementovali to, čo učia. Spolu pokrývajú každý uhol.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "SORRYWECAN // Founder & Creative Director", 
                        brings: "Rozširovanie imaginácie, vizuálne myslenie, mapovanie možností. Ako vidieť to, čo ostatní nevidia, a vytvárať to, čo ešte neexistuje.",
                        industries: "Samsung, Sennheiser, Forbes, Tatra Banka, Dubai Expo"
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "Architekt", 
                        company: "SUDOLABS // Co-founder & CPO", 
                        brings: "Systémové myslenie, architektúra automatizácie, logika škálovania. Ako budovať procesy, ktoré bežia samy a rastú bez toho, aby sa rozbili.",
                        industries: "Startupy až po $1.5B valuácie, Banky, Enterprise Tech"
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategická jasnosť, rozhodovacie frameworky, organizačná transformácia. Ako navigovať komplexitu bez straty smeru.",
                        industries: "Firemná Transformácia, Executive Advisory, Change Management"
                    }
                ]
            },
            leave: {
                title: "Čo Si Odnesiete",
                headline: "Nie Inšpiráciu. Implementáciu.",
                items: [
                    { title: "Osobný AI Stack", desc: "Vaše špecifické nástroje, nakonfigurované a fungujúce. Nie generické odporúčania — skutočné nastavenie, ktoré použijete v pondelok ráno." },
                    { title: "Blueprinty Automatizácie", desc: "Minimálne 3 workflow navrhnuté pre vaše skutočné procesy. Pripravené na nasadenie alebo doladenie." },
                    { title: "Frameworky Myslenia", desc: "Mentálne modely pre AI-augmentované rozhodovanie. Ako zarámovať akýkoľvek problém, akúkoľvek úlohu, akékoľvek odvetvie." },
                    { title: "30-Dňový Akčný Plán", desc: "Konkrétne ďalšie kroky so zabudovanou zodpovednosťou. Jeden follow-up hovor zahrnutý pre udržanie momentu." },
                    { title: "Prístup do Resource Vault", desc: "Šablóny, prompty, tutoriály, nahrávky. Trvalý prístup. Priebežne aktualizované." },
                    { title: "Sieť", desc: "Prepojenie s ostatnými, ktorí prešli Ignition. Cross-industry insights. Prebiehajúca komunita." }
                ]
            },
            pricing: {
                title: "Investícia",
                headline: "Jeden Deň. Jasné ROI.",
                context: "Pre kontext: toto je menej, než väčšina firiem minie na jednu konferenciu, jeden deň priemerného konzultanta, alebo štvrťrok zlého hire. Otázka nie je, či si to môžete dovoliť. Je to, či si môžete dovoliť to neurobiť.",
                tiers: [
                    { 
                        name: "Standard", 
                        price: "8 000", 
                        currency: "EUR", 
                        features: [
                            "Plný 8-hodinový intenzívny workshop",
                            "Do 15 účastníkov",
                            "Všetci traja expert facilitátori",
                            "Nastavenie osobného AI stacku pre každého",
                            "30-dňové akčné plány",
                            "Prístup do resource vault (trvalý)",
                            "1 follow-up skupinový hovor"
                        ], 
                        cta: "Rezervovať Standard" 
                    },
                    { 
                        name: "Premium", 
                        price: "12 000", 
                        currency: "EUR", 
                        features: [
                            "Všetko v Standard",
                            "Do 25 účastníkov",
                            "Pre-workshop diagnostika (2hod hovor)",
                            "Custom zameranie na odvetvie",
                            "Executive 1:1 sessions (3x 30min)",
                            "Rozšírená knižnica zdrojov",
                            "3 follow-up hovory počas 90 dní"
                        ], 
                        cta: "Rezervovať Premium", 
                        highlight: true 
                    },
                    { 
                        name: "Enterprise", 
                        price: "Na mieru", 
                        currency: "", 
                        features: [
                            "Viac-session programy",
                            "Rollout oddelenie po oddelení",
                            "Priebežný advisory retainer",
                            "Tréning interných championov",
                            "Custom vývoj automatizácií",
                            "Kvartálne stratégie sessions"
                        ], 
                        cta: "Kontaktujte Nás" 
                    }
                ],
                note: "Všetky ceny bez DPH. Osobná realizácia (prídeme k vám alebo vy k nám). Remote nedostupné — transformácia vyžaduje prítomnosť."
            },
            faq: {
                title: "Otázky",
                items: [
                    { 
                        q: "Je toto len tréning prompt engineeringu?", 
                        a: "Nie. Promptovanie je možno 15% toho, čo pokrývame. Toto je o myslení, nástrojoch, automatizácii a imaginácii kombinovaných. Väčšina 'AI tréningov' vás učí rozprávať sa so strojmi. My vás učíme myslieť s nimi, budovať systémy okolo nich a vidieť možnosti cez ne." 
                    },
                    { 
                        q: "Naše odvetvie je veľmi špecifické. Bude to aplikovateľné?", 
                        a: "Áno. Princípy sú univerzálne — frameworky myslenia, logika automatizácie, expanzia možností. Pracovali sme s kreatívnymi agentúrami, bankami, telco, právnymi firmami, výrobcami. Aplikácia sa líši, fundamenty nie." 
                    },
                    { 
                        q: "Už používame AI nástroje. Prečo toto potrebujeme?", 
                        a: "Používať nástroje nie je to isté ako ich maximalizovať. Väčšina tímov používa 5-10% toho, čo je možné. My ten rozdiel uzatvárame — ukazujeme, čo je skutočne dosiahnuteľné, a budujeme systémy, ako sa tam dostať." 
                    },
                    { 
                        q: "Prečo jeden deň namiesto dlhšieho programu?", 
                        a: "Intenzívne > extenzívne. Jeden sústredený deň vytvorí viac zmeny ako mesiace občasných sessions. Zapálime oheň a dáme vám všetko na jeho udržanie. 30-dňový follow-up zabezpečí, že to pretrvá." 
                    },
                    { 
                        q: "Dá sa to robiť remote?", 
                        a: "Nie. Intenzita vyžaduje prítomnosť. Hands-on práca vyžaduje real-time spoluprácu. Transformácia sa deje v miestnosti. V tomto nerobíme kompromisy." 
                    },
                    { 
                        q: "Aké je skutočné ROI?", 
                        a: "Konzervatívny odhad: 4+ hodiny ušetrené na osobu za týždeň. Pre 15-členný tím pri priemernej mzde je to €100k+ ročne. Plus: lepšie rozhodnutia, rýchlejšia exekúcia, konkurenčná výhoda. Workshop sa zaplatí za týždne, nie mesiace." 
                    }
                ]
            },
            cta: {
                headline: "Pripravení Maximalizovať?",
                description: "Limitované na 4-6 workshopov mesačne. Pracujeme s organizáciami, ktoré to myslia vážne s potenciálom svojich ľudí. Ak ste to vy, poďme sa porozprávať.",
                button: "Rezervovať Discovery Call",
                note: "20-minútový hovor. Žiadny záväzok. Úprimne vám povieme, či je to správne pre vašu situáciu."
            }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            } />

            <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-30" />
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            {t.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[12vw] md:text-[10vw] leading-[0.9] tracking-tighter mb-12"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end"
                    >
                        <p className="text-xl md:text-2xl font-inter leading-relaxed text-black/70 max-w-xl">
                            {t.hero.description}
                        </p>

                        <div className="space-y-6">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=Ignition Workshop Inquiry"
                                className="bg-[#0047BB] text-white px-10 py-5 font-inter font-semibold text-[11px] uppercase tracking-[0.25em] flex items-center gap-3 hover:bg-black transition-all w-fit"
                            >
                                {t.cta.button}
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-black/10 pt-12">
                        {t.hero.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className={cn("text-5xl font-serif-instrument", i % 2 === 0 ? "text-[#0047BB]" : "text-black")}>{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Section number="01" title={t.problem.title}>
                <div className="space-y-16">
                    <div className="max-w-4xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] mb-8">
                            {t.problem.headline}
                        </p>
                        <p className="text-xl text-black/60 leading-relaxed">
                            {t.problem.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.problem.points.map((point: any, i: number) => (
                            <div key={i} className="p-10 bg-black text-white text-center">
                                <p className="text-6xl font-serif-instrument italic text-[#0047BB] mb-4">{point.stat}</p>
                                <p className="text-sm opacity-60">{point.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="02" title={t.what.title}>
                <div className="space-y-16">
                    <div className="max-w-4xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] mb-8">
                            {t.what.headline}
                        </p>
                        <p className="text-xl text-black/60 leading-relaxed">
                            {t.what.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.what.pillars.map((pillar: any, i: number) => (
                            <PillarCard key={i} {...pillar} />
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="03" title={t.who.title}>
                <div className="space-y-16">
                    <div className="max-w-4xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] mb-8">
                            {t.who.headline}
                        </p>
                        <p className="text-xl text-black/60 leading-relaxed">
                            {t.who.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {t.who.industries.map((industry: string, i: number) => (
                            <IndustryTag key={i} name={industry} />
                        ))}
                    </div>

                    <div className="p-8 bg-[#0047BB]/5 border border-[#0047BB]/20">
                        <p className="text-lg font-inter leading-relaxed text-black/70 italic">
                            {t.who.note}
                        </p>
                    </div>
                </div>
            </Section>

            <Section number="04" title={t.day.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.day.headline}
                    </p>

                    <div className="space-y-4">
                        {t.day.blocks.map((block: any, i: number) => (
                            <TimeBlock 
                                key={i}
                                time={block.time}
                                title={block.title}
                                description={block.desc}
                                tags={block.tags}
                                accent={block.accent}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="05" title={t.founders.title} dark>
                <div className="space-y-16">
                    <div className="max-w-3xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight mb-6">
                            {t.founders.headline}
                        </p>
                        <p className="text-xl text-white/60 leading-relaxed">
                            {t.founders.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.founders.cards.map((card: any, i: number) => (
                            <FounderCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="06" title={t.leave.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.leave.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.leave.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 border border-black bg-white space-y-4 hover:bg-[#0047BB]/5 transition-all">
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-10 bg-[#0047BB] text-white flex items-center justify-center font-bold text-sm">
                                        {i + 1}
                                    </span>
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed pl-14">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="07" title={t.pricing.title}>
                <div className="space-y-16">
                    <div className="max-w-4xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] mb-8">
                            {t.pricing.headline}
                        </p>
                        <p className="text-lg text-black/60 leading-relaxed">
                            {t.pricing.context}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.pricing.tiers.map((tier: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "p-10 border space-y-8 relative",
                                    tier.highlight 
                                        ? "border-[#0047BB] bg-[#0047BB]/5 scale-[1.02]" 
                                        : "border-black/10 bg-white"
                                )}
                            >
                                {tier.highlight && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0047BB] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1">
                                        {lang === 'en' ? 'MOST POPULAR' : 'NAJPOPULÁRNEJŠÍ'}
                                    </span>
                                )}
                                <div>
                                    <h4 className="text-2xl font-serif-instrument italic">{tier.name}</h4>
                                    <div className="mt-4">
                                        <span className="text-5xl font-serif-instrument">{tier.price}</span>
                                        {tier.currency && <span className="text-xl ml-2 opacity-40">{tier.currency}</span>}
                                    </div>
                                </div>
                                <div className="space-y-3 pt-6 border-t border-black/10">
                                    {tier.features.map((feature: string, j: number) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                                            <span className="text-sm text-black/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a 
                                    href={`mailto:hello@sorrywecan.com?subject=Ignition Workshop - ${tier.name}`}
                                    className={cn(
                                        "block text-center py-4 font-bold text-xs uppercase tracking-widest transition-all",
                                        tier.highlight 
                                            ? "bg-[#0047BB] text-white hover:bg-black" 
                                            : "bg-black text-white hover:bg-[#0047BB]"
                                    )}
                                >
                                    {tier.cta}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-black/40 text-center">{t.pricing.note}</p>
                </div>
            </Section>

            <Section number="08" title={t.faq.title}>
                <div className="max-w-4xl mx-auto space-y-4">
                    {t.faq.items.map((item: any, i: number) => (
                        <div key={i} className="border border-black bg-white group hover:border-[#0047BB] transition-colors">
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full px-10 py-8 flex justify-between items-center text-left"
                            >
                                <span className="font-serif-instrument text-xl italic pr-6 group-hover:text-[#0047BB] transition-colors">{item.q}</span>
                                <div className={cn("transition-transform duration-500 font-bold text-[#0047BB]", faqOpen === i ? "rotate-45" : "rotate-0")}>
                                    +
                                </div>
                            </button>
                            <AnimatePresence>
                                {faqOpen === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-10 pb-10">
                                            <p className="text-base text-black/60 leading-relaxed font-inter">
                                                {item.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Section>

            <section className="py-48 bg-[#0047BB] text-white overflow-hidden relative border-t border-black">
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <h2 className="font-serif-instrument text-[10vw] md:text-[8vw] leading-[0.85] mb-12 italic tracking-tight">
                        {t.cta.headline}
                    </h2>
                    <p className="text-xl md:text-2xl mb-16 opacity-80 leading-relaxed font-inter max-w-2xl mx-auto">
                        {t.cta.description}
                    </p>
                    <div className="space-y-6">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Ignition Workshop - Discovery Call Request"
                            className="bg-white text-[#0047BB] px-16 py-6 font-inter font-bold text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all inline-block shadow-[15px_15px_0px_rgba(0,0,0,0.2)]"
                        >
                            {t.cta.button}
                        </a>
                        <p className="text-sm opacity-60">{t.cta.note}</p>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-white py-24 px-6 md:px-20 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // THINKING + TOOLS + AUTOMATION + IMAGINATION // 2026
                </p>
            </footer>
        </div>
    )
}
