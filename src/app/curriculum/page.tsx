"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function CurriculumPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [view, setView] = useState<'public' | 'private'>('public')

    const content = {
        en: {
            public: {
                header: {
                    label: "CURRICULUM",
                    title: "What You'll Experience",
                    description: "3 hours of focused transformation. Four phases designed to expand how you think, equip you with tools, and leave you building."
                },
                promise: {
                    title: "THE PROMISE",
                    items: [
                        { title: "Expanded Thinking", desc: "Your mind will be wider than when you walked in. New mental models for AI." },
                        { title: "Practical Takeaways", desc: "You leave with something working. Not just theory — real tools, configured." },
                        { title: "Clear Direction", desc: "Know exactly what to do Monday morning. No overwhelm, just clarity." }
                    ]
                },
                pillars: {
                    title: "THE FIVE PILLARS",
                    description: "The transformation flows through these five domains. Each session touches all — emphasis shifts based on what the room needs.",
                    items: [
                        { num: "01", title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                        { num: "02", title: "Thinking", desc: "How to frame problems. Mental models that work." },
                        { num: "03", title: "Tools", desc: "What to use. Practical stack for your reality." },
                        { num: "04", title: "Automation", desc: "What to build. Workflows that run themselves." },
                        { num: "05", title: "Imagination", desc: "What's possible. Expanding the boundaries." }
                    ]
                },
                session: {
                    title: "SESSION FLOW",
                    subtitle: "3 Hours. Four Phases.",
                    phases: [
                        {
                            num: "01",
                            title: "Opening + Creative Process",
                            time: "45 min",
                            desc: "How to think. How to see. What makes output good vs generic. Live work, not slides. We show you what's possible — then we listen to what's real for you.",
                            pillars: "Navigation, Imagination",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Framework",
                            time: "40 min",
                            desc: "How to THINK with AI, not just prompt it. Mental models for collaboration. The Human Edge: what to keep, what to delegate. Interactive — you ask, we adjust.",
                            pillars: "Thinking, Navigation",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Hands-On",
                            time: "55 min",
                            desc: "Pick a problem. We show you how to solve it. Build something that works — your AI stack configured, a workflow running. Not templates. Your reality.",
                            pillars: "Tools, Automation",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Discussion",
                            time: "40 min",
                            desc: "Your field. Your questions. Real answers from people who do this daily. We go deep on what matters to you.",
                            pillars: "All Five",
                            highlight: false
                        }
                    ],
                    note: "Short breaks between phases. Total time: ~3 hours."
                },
                outcome: {
                    title: "WHAT YOU LEAVE WITH",
                    subtitle: "Tangible. Practical. Ready for Monday.",
                    items: [
                        { num: "01", title: "Clarity", desc: "Where AI is going. Where you fit. Calm confidence, not hype anxiety." },
                        { num: "02", title: "Your AI Stack", desc: "Tools picked and configured for your reality. Not a list — actually working." },
                        { num: "03", title: "A Working Workflow", desc: "Something real you built during the session. Ready for Monday." },
                        { num: "04", title: "Mental Models", desc: "Decision rules to cut through noise. How to think, not just what to do." },
                        { num: "05", title: "Digital Toolkit", desc: "Templates, playbooks, community access. Resources that keep giving." }
                    ]
                },
                guides: {
                    title: "YOUR GUIDES",
                    description: "Not consultants. Practitioners who built what they teach.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "The Creative",
                            company: "CEO/Founder SORRYWECAN",
                            focus: "Opens with imagination. Shows what's possible. Sets taste over templates.",
                            phase: "Phase 01"
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "The Navigator",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Strategic clarity. Mental models. How to think with AI, not just use it.",
                            phase: "Phase 02"
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "The Architect",
                            company: "CPO/Co-founder SUDOLABS",
                            focus: "Makes it real. Systems, tools, automation. You leave with something working.",
                            phase: "Phase 03"
                        }
                    ]
                },
                cta: {
                    headline: "Ready to Transform?",
                    description: "Limited seats. First session February 2025.",
                    button: "Reserve Your Seat",
                    price: "€99"
                }
            },
            private: {
                header: {
                    label: "INTERNAL REFERENCE // SPEAKER ALIGNMENT",
                    title: "Curriculum Blueprint",
                    description: "Working structure for the 3-hour public session. For Roland, Jan, Roman to review and iterate."
                },
                promise: {
                    title: "THE PROMISE",
                    items: [
                        { title: "Expanded Thinking", desc: "Their minds will be wider than when they walked in. New mental models for AI." },
                        { title: "Practical Takeaways", desc: "They leave with something working. Not just theory." },
                        { title: "Clear ROI", desc: "Justifiable spend. Measurable value within 30 days." }
                    ]
                },
                pillars: {
                    title: "THE FIVE PILLARS",
                    description: "The transformation flows through these five domains. Not all covered equally — emphasis depends on the room's needs.",
                    items: [
                        { num: "01", title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                        { num: "02", title: "Thinking", desc: "How to frame problems. Mental models that work." },
                        { num: "03", title: "Tools", desc: "What to use. Practical stack for their reality." },
                        { num: "04", title: "Automation", desc: "What to build. Workflows that run themselves." },
                        { num: "05", title: "Imagination", desc: "What's possible. Expanding the boundaries." }
                    ]
                },
                session: {
                    title: "SESSION FLOW",
                    subtitle: "3 Hours. Four Phases.",
                    phases: [
                        {
                            num: "01",
                            title: "Opening + Creative Process",
                            time: "45 min",
                            desc: "How to think. How to see. What makes output good vs generic. Live work, not slides. Taste, iteration, and navigating creative chaos.",
                            lead: "Roland (The Creative)",
                            pillars: "Navigation, Imagination",
                            notes: "Opens with vision and possibility. Show the 'art of the possible' (wow moment). Then LISTEN: fears, blockers, reality. Calibrate session to what's in the room.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Framework",
                            time: "40 min",
                            desc: "How to THINK with AI (not just prompt). Mental models for AI collaboration. The Human Edge: what to keep, what to delegate. Interactive Q&A.",
                            lead: "Roman (The Navigator)",
                            pillars: "Thinking, Navigation",
                            notes: "Strategic clarity and mindset. They ask, we adjust. Not prompting tips — thinking frameworks.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Hands-On",
                            time: "55 min",
                            desc: "Pick a problem. We show how to solve it. Build something that works. Personal AI stack setup (configured, working). Personalized guidance, not generic demos.",
                            lead: "Jan (The Architect)",
                            pillars: "Tools, Automation (core focus)",
                            notes: "This is the CORE. They must leave with something working. Tools + automation on THEIR actual tasks.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Discussion",
                            time: "40 min",
                            desc: "Their field. Their questions. Real answers from people who do this daily. Deep dive on what matters most.",
                            lead: "All three",
                            pillars: "All Five",
                            notes: "Collaborative close. Go where the room needs to go. Address lingering fears/blockers.",
                            highlight: false
                        }
                    ],
                    note: "Breaks built in between phases. Total time: ~3 hours with buffer."
                },
                outcome: {
                    title: "WHAT THEY LEAVE WITH",
                    subtitle: "Tangible. Practical. Ready for Monday.",
                    items: [
                        { num: "01", title: "Clarity", desc: "Where AI is going. Where they fit. Calm confidence, not hype anxiety." },
                        { num: "02", title: "Personal AI Stack", desc: "Configured. Working. Not just a list of tools — actually set up." },
                        { num: "03", title: "Working Workflow", desc: "Built on THEIR problems during the session. Not templates — their reality." },
                        { num: "04", title: "Thinking Frameworks", desc: "Mental models for AI collaboration. How to think, not just how to prompt." },
                        { num: "05", title: "Digital Toolkit", desc: "Templates, playbooks, community access. The gift that keeps giving." }
                    ]
                },
                guides: {
                    title: "SPEAKER ROLES",
                    description: "Clear ownership with collaborative overlap.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "The Creative",
                            company: "SORRYWECAN",
                            focus: "Opens with imagination. Shows what's possible. Brings the creative lens.",
                            phase: "PRIMARY: Phase 01 (Opening)"
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "The Navigator",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Strategic clarity. Mental models. How to think with AI, not just use it.",
                            phase: "PRIMARY: Phase 02 (Framework)"
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "The Architect",
                            company: "SUDOLABS",
                            focus: "Systems builder. Makes it practical. Ensures they leave with working tools.",
                            phase: "PRIMARY: Phase 03 (Hands-On)"
                        }
                    ]
                },
                questions: {
                    title: "QUESTIONS FOR SPEAKERS",
                    description: "To validate this curriculum structure:",
                    items: [
                        "Does this flow feel right? Opening → Framework → Hands-On → Discussion?",
                        "Are the time allocations realistic? (45 / 40 / 55 / 40 min)",
                        "Is the 'what they leave with' list achievable in this timeframe?",
                        "Does each speaker's primary phase align with their strengths?",
                        "What's missing? What would make this more holistic?",
                        "Are participant fears/blockers being addressed in the right phase?"
                    ]
                }
            }
        },
        sk: {
            public: {
                header: {
                    label: "KURIKULUM",
                    title: "Čo Zažiješ",
                    description: "3 hodiny fokusovanej transformácie. Štyri fázy navrhnuté tak, aby rozšírili tvoje myslenie, vybavili ťa nástrojmi a nechali ťa budovať."
                },
                promise: {
                    title: "PRÍSĽUB",
                    items: [
                        { title: "Rozšírené Myslenie", desc: "Tvoja myseľ bude širšia než keď si prišiel. Nové mentálne modely pre AI." },
                        { title: "Praktické Výstupy", desc: "Odídeš s niečím fungujúcim. Nie len teória — skutočné nástroje, nakonfigurované." },
                        { title: "Jasný Smer", desc: "Presne vieš, čo robiť v pondelok ráno. Žiadne zahltenie, len jasnosť." }
                    ]
                },
                pillars: {
                    title: "PÄŤ PILIEROV",
                    description: "Transformácia prúdi cez týchto päť domén. Každá session sa dotýka všetkých — dôraz sa mení podľa toho, čo miestnosť potrebuje.",
                    items: [
                        { num: "01", title: "Navigácia", desc: "Kam ísť. Strategická jasnosť v šume." },
                        { num: "02", title: "Myslenie", desc: "Ako formulovať problémy. Mentálne modely, ktoré fungujú." },
                        { num: "03", title: "Nástroje", desc: "Čo použiť. Praktický stack pre tvoju realitu." },
                        { num: "04", title: "Automatizácia", desc: "Čo postaviť. Workflow, ktoré bežia samy." },
                        { num: "05", title: "Imaginácia", desc: "Čo je možné. Posúvanie hraníc." }
                    ]
                },
                session: {
                    title: "PRIEBEH SESSION",
                    subtitle: "3 Hodiny. Štyri Fázy.",
                    phases: [
                        {
                            num: "01",
                            title: "Otvorenie + Kreatívny Proces",
                            time: "45 min",
                            desc: "Ako myslieť. Ako vidieť. Čo robí výstup dobrým vs generickým. Živá práca, nie slajdy. Ukážeme ti, čo je možné — potom počúvame, čo je pre teba skutočné.",
                            pillars: "Navigácia, Imaginácia",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Framework",
                            time: "40 min",
                            desc: "Ako MYSLIEŤ s AI, nie len promptovať. Mentálne modely pre spoluprácu. Ľudská Výhoda: čo si nechať, čo delegovať. Interaktívne — pýtaš sa, my prispôsobujeme.",
                            pillars: "Myslenie, Navigácia",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Hands-On",
                            time: "55 min",
                            desc: "Vyber si problém. Ukážeme ti, ako ho vyriešiť. Postav niečo, čo funguje — tvoj AI stack nakonfigurovaný, workflow bežiaci. Nie šablóny. Tvoja realita.",
                            pillars: "Nástroje, Automatizácia",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Diskusia",
                            time: "40 min",
                            desc: "Tvoj odbor. Tvoje otázky. Skutočné odpovede od ľudí, ktorí toto robia denne. Ideme hlboko do toho, čo pre teba záleží.",
                            pillars: "Všetkých Päť",
                            highlight: false
                        }
                    ],
                    note: "Krátke prestávky medzi fázami. Celkový čas: ~3 hodiny."
                },
                outcome: {
                    title: "S ČÍM ODÍDEŠ",
                    subtitle: "Hmatateľné. Praktické. Pripravené na pondelok.",
                    items: [
                        { num: "01", title: "Jasnosť", desc: "Kam AI smeruje. Kde sa nachádzaš ty. Pokojná istota, nie úzkosť z hype." },
                        { num: "02", title: "Tvoj AI Stack", desc: "Nástroje vybrané a nakonfigurované pre tvoju realitu. Nie zoznam — skutočne fungujúce." },
                        { num: "03", title: "Fungujúci Workflow", desc: "Niečo skutočné, čo si postavil počas session. Pripravené na pondelok." },
                        { num: "04", title: "Mentálne Modely", desc: "Rozhodovacie pravidlá na prerezanie šumu. Ako myslieť, nie len čo robiť." },
                        { num: "05", title: "Digitálny Toolkit", desc: "Šablóny, playbooks, prístup ku komunite. Zdroje, ktoré stále dávajú." }
                    ]
                },
                guides: {
                    title: "TVOJI SPRIEVODCOVIA",
                    description: "Nie konzultanti. Praktici, ktorí postavili to, čo učia.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "Kreatívec",
                            company: "CEO/Zakladateľ SORRYWECAN",
                            focus: "Otvára s imagináciou. Ukazuje, čo je možné. Nastavuje vkus nad šablónami.",
                            phase: "Fáza 01"
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "Navigátor",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Strategická jasnosť. Mentálne modely. Ako myslieť s AI, nie len ju používať.",
                            phase: "Fáza 02"
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "Architekt",
                            company: "CPO/Spoluzakladateľ SUDOLABS",
                            focus: "Robí to skutočným. Systémy, nástroje, automatizácia. Odídeš s niečím fungujúcim.",
                            phase: "Fáza 03"
                        }
                    ]
                },
                cta: {
                    headline: "Pripravený na Transformáciu?",
                    description: "Limitované miesta. Prvá session február 2025.",
                    button: "Rezervovať Miesto",
                    price: "€99"
                }
            },
            private: {
                header: {
                    label: "INTERNÁ REFERENCIA // ZLADENIE SPEAKEROV",
                    title: "Blueprint Kurikula",
                    description: "Pracovná štruktúra pre 3-hodinovú verejnú session. Pre Rolanda, Jana, Romana na review a iteráciu."
                },
                promise: {
                    title: "PRÍSĽUB",
                    items: [
                        { title: "Rozšírené Myslenie", desc: "Ich mysle budú širšie než keď prišli. Nové mentálne modely pre AI." },
                        { title: "Praktické Výstupy", desc: "Odídu s niečím fungujúcim. Nie len teória." },
                        { title: "Jasné ROI", desc: "Opodstatnený výdavok. Merateľná hodnota do 30 dní." }
                    ]
                },
                pillars: {
                    title: "PÄŤ PILIEROV",
                    description: "Transformácia prúdi cez týchto päť domén. Nie všetky pokryté rovnako — dôraz závisí od potrieb miestnosti.",
                    items: [
                        { num: "01", title: "Navigácia", desc: "Kam ísť. Strategická jasnosť v šume." },
                        { num: "02", title: "Myslenie", desc: "Ako formulovať problémy. Mentálne modely, ktoré fungujú." },
                        { num: "03", title: "Nástroje", desc: "Čo použiť. Praktický stack pre ich realitu." },
                        { num: "04", title: "Automatizácia", desc: "Čo postaviť. Workflow, ktoré bežia samy." },
                        { num: "05", title: "Imaginácia", desc: "Čo je možné. Posúvanie hraníc." }
                    ]
                },
                session: {
                    title: "PRIEBEH SESSION",
                    subtitle: "3 Hodiny. Štyri Fázy.",
                    phases: [
                        {
                            num: "01",
                            title: "Otvorenie + Kreatívny Proces",
                            time: "45 min",
                            desc: "Ako myslieť. Ako vidieť. Čo robí výstup dobrým vs generickým. Živá práca, nie slajdy. Vkus, iterácia a navigácia kreatívnym chaosom.",
                            lead: "Roland (Kreatívec)",
                            pillars: "Navigácia, Imaginácia",
                            notes: "Otvára s víziou a možnosťami. Ukáž 'umenie možného' (wow moment). Potom POČÚVAJ: obavy, bloky, realita. Kalibruj session podľa toho, čo je v miestnosti.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Framework",
                            time: "40 min",
                            desc: "Ako MYSLIEŤ s AI (nie len promptovať). Mentálne modely pre spoluprácu s AI. Ľudská Výhoda: čo si nechať, čo delegovať. Interaktívne Q&A.",
                            lead: "Roman (Navigátor)",
                            pillars: "Myslenie, Navigácia",
                            notes: "Strategická jasnosť a mindset. Oni sa pýtajú, my prispôsobujeme. Nie tipy na prompty — frameworky myslenia.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Hands-On",
                            time: "55 min",
                            desc: "Vyber problém. Ukážeme, ako ho vyriešiť. Postav niečo, čo funguje. Nastavenie osobného AI stacku (nakonfigurovaný, fungujúci). Personalizované vedenie, nie generické demá.",
                            lead: "Jan (Architekt)",
                            pillars: "Nástroje, Automatizácia (jadro)",
                            notes: "Toto je JADRO. Musia odísť s niečím fungujúcim. Nástroje + automatizácia na ICH skutočných úlohách.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Diskusia",
                            time: "40 min",
                            desc: "Ich odbor. Ich otázky. Skutočné odpovede od ľudí, ktorí toto robia denne. Hlboký ponor do toho, čo najviac záleží.",
                            lead: "Všetci traja",
                            pillars: "Všetkých Päť",
                            notes: "Kolaboratívny záver. Choď tam, kam miestnosť potrebuje. Adresuj pretrvávajúce obavy/bloky.",
                            highlight: false
                        }
                    ],
                    note: "Prestávky zabudované medzi fázami. Celkový čas: ~3 hodiny s rezervou."
                },
                outcome: {
                    title: "S ČÍM ODÍDU",
                    subtitle: "Hmatateľné. Praktické. Pripravené na pondelok.",
                    items: [
                        { num: "01", title: "Jasnosť", desc: "Kam AI smeruje. Kde sa nachádzajú oni. Pokojná istota, nie úzkosť z hype." },
                        { num: "02", title: "Osobný AI Stack", desc: "Nakonfigurovaný. Fungujúci. Nie len zoznam nástrojov — skutočne nastavený." },
                        { num: "03", title: "Fungujúci Workflow", desc: "Postavený na ICH problémoch počas session. Nie šablóny — ich realita." },
                        { num: "04", title: "Frameworky Myslenia", desc: "Mentálne modely pre spoluprácu s AI. Ako myslieť, nie len ako promptovať." },
                        { num: "05", title: "Digitálny Toolkit", desc: "Šablóny, playbooks, prístup ku komunite. Dar, ktorý stále dáva." }
                    ]
                },
                guides: {
                    title: "ROLY SPEAKEROV",
                    description: "Jasné vlastníctvo s kolaboratívnym prekryvom.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "Kreatívec",
                            company: "SORRYWECAN",
                            focus: "Otvára s imagináciou. Ukazuje, čo je možné. Prináša kreatívnu optiku.",
                            phase: "PRIMÁRNE: Fáza 01 (Otvorenie)"
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "Navigátor",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Strategická jasnosť. Mentálne modely. Ako myslieť s AI, nie len ju používať.",
                            phase: "PRIMÁRNE: Fáza 02 (Framework)"
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "Architekt",
                            company: "SUDOLABS",
                            focus: "Staviteľ systémov. Robí to praktickým. Zabezpečí, že odídu s fungujúcimi nástrojmi.",
                            phase: "PRIMÁRNE: Fáza 03 (Hands-On)"
                        }
                    ]
                },
                questions: {
                    title: "OTÁZKY PRE SPEAKEROV",
                    description: "Na validáciu tejto štruktúry kurikula:",
                    items: [
                        "Sedí tento flow? Otvorenie → Framework → Hands-On → Diskusia?",
                        "Sú časové alokácie realistické? (45 / 40 / 55 / 40 min)",
                        "Je zoznam 's čím odídu' dosiahnuteľný v tomto časovom rámci?",
                        "Zodpovedá primárna fáza každého speakera jeho silným stránkam?",
                        "Čo chýba? Čo by to urobilo holistickejším?",
                        "Sú obavy/bloky účastníkov adresované v správnej fáze?"
                    ]
                }
            }
        }
    }

    const t = content[lang][view]
    const isPrivate = view === 'private'

    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav customAction={
                <div className="flex items-center gap-2">
                    {/* View Toggle */}
                    <div className="flex items-center border border-black/10 bg-black/5">
                        <button
                            onClick={() => setView('public')}
                            className={cn(
                                "px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all",
                                view === 'public' 
                                    ? "bg-[#0047BB] text-white" 
                                    : "text-black/40 hover:text-black"
                            )}
                        >
                            Public
                        </button>
                        <button
                            onClick={() => setView('private')}
                            className={cn(
                                "px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all",
                                view === 'private' 
                                    ? "bg-black text-white" 
                                    : "text-black/40 hover:text-black"
                            )}
                        >
                            Private
                        </button>
                    </div>
                    {/* Language Toggle */}
                    <button 
                        onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                        className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                    >
                        {lang === 'en' ? 'SK' : 'EN'}
                    </button>
                </div>
            } />

            {/* Header */}
            <section className={cn(
                "pt-28 pb-16 px-6 md:px-12 border-b",
                isPrivate ? "border-black/10 bg-[#fffbeb]" : "border-black/10"
            )}>
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        key={`header-${view}-${lang}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className={cn(
                            "text-[10px] font-bold tracking-[0.3em] uppercase block mb-4",
                            isPrivate ? "text-amber-600" : "text-[#0047BB]"
                        )}>
                            {t.header.label}
                        </span>
                        <h1 className="font-serif-instrument text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
                            {t.header.title}
                        </h1>
                        <p className="text-lg text-black/50 max-w-2xl">
                            {t.header.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Promise */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#f8f8f6]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                        {t.promise.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.promise.items.map((item: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border border-black/10"
                            >
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-black/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Five Pillars */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">
                        {t.pillars.title}
                    </h2>
                    <p className="text-black/50 mb-10 max-w-2xl">
                        {t.pillars.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {t.pillars.items.map((pillar: any, i: number) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "p-4 border text-center transition-all hover:border-[#0047BB]",
                                    i === 2 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10"
                                )}
                            >
                                <span className="text-[9px] font-bold tracking-[0.2em] text-[#0047BB] block mb-2">[{pillar.num}]</span>
                                <h4 className="font-bold text-sm mb-2">{pillar.title}</h4>
                                <p className="text-[10px] text-black/40 leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Session Flow */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">
                        {t.session.title}
                    </h2>
                    <p className="text-2xl font-serif-instrument italic mb-10">
                        {t.session.subtitle}
                    </p>

                    <div className="space-y-4">
                        {t.session.phases.map((phase: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "border p-6 md:p-8 transition-all",
                                    phase.highlight 
                                        ? "border-2 border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-[10px] font-bold text-[#0047BB] tracking-wider">PHASE {phase.num}</span>
                                        <h3 className="text-xl md:text-2xl font-serif-instrument italic mt-1">{phase.title}</h3>
                                    </div>
                                    <span className="text-sm font-mono bg-black/5 px-3 py-1">{phase.time}</span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-black/60 leading-relaxed">{phase.desc}</p>
                                    </div>
                                    <div className="space-y-3">
                                        {isPrivate && phase.lead && (
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-1">
                                                    {lang === 'en' ? 'WHO LEADS' : 'KTO VEDIE'}
                                                </h4>
                                                <p className="text-sm text-black/60">{phase.lead}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/40 mb-1">
                                                {lang === 'en' ? 'PILLARS TOUCHED' : 'DOTKNUTÉ PILIERE'}
                                            </h4>
                                            <p className="text-sm text-black/60">{phase.pillars}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Private-only: Internal Notes */}
                                {isPrivate && phase.notes && (
                                    <div className="mt-6 pt-4 border-t border-amber-200 bg-amber-50/50 -mx-6 md:-mx-8 px-6 md:px-8 -mb-6 md:-mb-8 pb-6 md:pb-8">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-2">
                                            {lang === 'en' ? 'INTERNAL NOTES' : 'INTERNÉ POZNÁMKY'}
                                        </p>
                                        <p className="text-sm text-amber-800/70">{phase.notes}</p>
                                    </div>
                                )}

                                {/* Core indicator for Hands-On */}
                                {phase.highlight && (
                                    <div className="mt-4 pt-4 border-t border-[#0047BB]/20">
                                        <p className="text-xs text-[#0047BB] font-medium">
                                            {lang === 'en' 
                                                ? "This is the CORE. You must leave with something working."
                                                : "Toto je JADRO. Musíš odísť s niečím fungujúcim."
                                            }
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-black/5 text-center">
                        <p className="text-xs text-black/50">{t.session.note}</p>
                    </div>
                </div>
            </section>

            {/* What You Leave With */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2">
                        {t.outcome.title}
                    </h2>
                    <p className="text-2xl font-serif-instrument italic mb-10">
                        {t.outcome.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border border-white/10 hover:border-[#0047BB]/50 transition-all"
                            >
                                <span className="text-[#0047BB] text-2xl font-serif-instrument">{item.num}</span>
                                <h3 className="font-bold mt-2 mb-2">{item.title}</h3>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guides / Speaker Roles */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-[#f8f8f6]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-2">
                        {t.guides.title}
                    </h2>
                    <p className="text-black/50 mb-10">{t.guides.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.guides.cards.map((card: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border border-black/10 hover:border-[#0047BB]/30 transition-all"
                            >
                                <span className="text-[10px] font-bold tracking-wider text-[#0047BB]">{card.role.toUpperCase()}</span>
                                <h3 className="text-xl font-serif-instrument italic mt-2 mb-1">{card.name}</h3>
                                <p className="text-xs text-black/40 mb-4">{card.company}</p>
                                <p className="text-sm text-black/50 mb-4">{card.focus}</p>
                                <p className="text-xs font-bold text-black/40">{card.phase}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private-only: Questions for Speakers */}
            <AnimatePresence>
                {isPrivate && 'questions' in t && (
                    <motion.section
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="py-16 px-6 md:px-12 border-b border-black/10 bg-amber-50"
                    >
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-600 mb-2">
                                {(t as any).questions.title}
                            </h2>
                            <p className="text-black/50 mb-8">{(t as any).questions.description}</p>
                            
                            <div className="space-y-3">
                                {(t as any).questions.items.map((q: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4 p-4 border border-amber-200 bg-white hover:bg-amber-50 transition-colors">
                                        <span className="text-amber-600 font-bold text-sm">{i + 1}.</span>
                                        <p className="text-sm text-black/70">{q}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Public-only: CTA */}
            {!isPrivate && 'cta' in t && (
                <section className="py-24 bg-[#0047BB] text-white text-center">
                    <div className="max-w-2xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-6">
                                {(t as any).cta.headline}
                            </h2>
                            <p className="text-lg opacity-70 mb-4">{(t as any).cta.description}</p>
                            <p className="text-4xl font-serif-instrument mb-8">{(t as any).cta.price}</p>
                            <a
                                href="mailto:hello@sorrywecan.com?subject=Public Session - Reserve Seat"
                                className="bg-white text-[#0047BB] px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                            >
                                {(t as any).cta.button}
                            </a>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    {isPrivate 
                        ? (lang === 'en' ? 'INTERNAL DOCUMENT // ITERATE FREELY // V2.0' : 'INTERNÝ DOKUMENT // ITERUJ SLOBODNE // V2.0')
                        : 'SORRYWECAN // RESEARCH LAB // 2026'
                    }
                </p>
            </footer>
        </div>
    )
}
