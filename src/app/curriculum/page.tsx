"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function CurriculumPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [view, setView] = useState<'public' | 'corporate'>('public')

    const content = {
        en: {
            switcher: {
                public: {
                    label: "THE SHIFT",
                    subtitle: "Public Session",
                    price: "€99",
                    duration: "3 hours"
                },
                corporate: {
                    label: "DEEP DIVE",
                    subtitle: "Corporate Workshop",
                    price: "€6,900",
                    duration: "4-5 hours"
                }
            },
            public: {
                header: {
                    label: "THE SHIFT",
                    title: "The World Changed. Most Haven't Noticed.",
                    description: "3 hours with people who build with AI daily. No hype. No tutorials. Just clarity on where we are, what's possible, and what you're going to do about it."
                },
                session: {
                    title: "Three Perspectives. One Shift.",
                    phases: [
                        {
                            num: "01",
                            title: "What's Possible",
                            time: "50 min",
                            lead: "Roland",
                            desc: "Roland opens. Not with slides — with work. Live creative process. What AI looks like when you have taste. What most people miss. What you'll stop missing.",
                            highlight: true
                        },
                        {
                            num: "02",
                            title: "What's Real",
                            time: "50 min",
                            lead: "Ján",
                            desc: "Jan grounds it. The builder's view. What actually works at scale. What one person can ship now. What's hype, what's not. No theory — just what we're building.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "What To Focus On",
                            time: "40 min",
                            lead: "Roman",
                            desc: "Roman clarifies. How to think when everything's moving. The questions that cut through noise. What to focus on. What to ignore.",
                            highlight: false
                        },
                        {
                            num: "04",
                            title: "Your Questions",
                            time: "40 min",
                            lead: "All",
                            desc: "Your field. Your reality. We answer what matters to you. No script — just conversation.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "You Leave With Your Eyes Open.",
                    items: [
                        { title: "Clarity", desc: "Where we are. Where it's going. What that means for you." },
                        { title: "Conviction", desc: "You've seen what's possible. You're not waiting anymore." },
                        { title: "Direction", desc: "Not a to-do list. A question you're going to answer. Something to build or change." },
                        { title: "Community", desc: "Access to others on the same path. Future sessions. You're not alone." }
                    ]
                },
                who: {
                    title: "For People Ready To Move.",
                    profiles: [
                        "Creatives exploring what AI actually enables",
                        "Founders who want to move faster with smaller teams",
                        "Designers tired of generic AI output",
                        "Anyone building something — and tired of the noise"
                    ]
                },
                guides: {
                    title: "Three Minds.",
                    subtitle: "Not trainers. Builders who do this daily.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "The Creative",
                            company: "CEO/Founder SORRYWECAN",
                            focus: "Opens with what's possible — and what separates real work from generic output."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "The Architect",
                            company: "CPO/Co-founder SUDOLABS",
                            focus: "Shows what actually ships — and what one person can do now."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "The Navigator",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "The framework for deciding what to focus on and what to ignore."
                        }
                    ]
                },
                cta: {
                    headline: "Ready?",
                    description: "First session February 2025. Limited seats.",
                    button: "I'm In",
                    price: "€99"
                }
            },
            corporate: {
                header: {
                    label: "DEEP DIVE",
                    title: "Your Team. Your Challenges. Real Solutions.",
                    description: "4-5 hours with your team. We facilitate, you create. Turn your actual problems into working AI workflows. Leave with systems that run."
                },
                session: {
                    title: "One Day. Full Transformation.",
                    phases: [
                        {
                            num: "01",
                            title: "The Wake Up",
                            time: "45 min",
                            lead: "Roland",
                            desc: "Where AI actually is. What your competitors might be doing. The uncomfortable truths about what's changing. Live demonstrations that shift perspective.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Your Reality",
                            time: "60 min",
                            lead: "All",
                            desc: "We map YOUR workflows. Your bottlenecks. Your opportunities. What's costing you time and money right now. Collaborative session — your team leads, we guide.",
                            highlight: true
                        },
                        {
                            num: "03",
                            title: "The Build",
                            time: "90 min",
                            lead: "Ján",
                            desc: "Hands-on implementation. We build real solutions together. Your team learns by doing. Personal AI stacks configured. Workflows automated. Not demos — your actual work.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "The Framework",
                            time: "45 min",
                            lead: "Roman",
                            desc: "Decision frameworks for the future. How to evaluate new tools. When to automate, when not to. The questions your team should ask before any AI decision.",
                            highlight: false
                        },
                        {
                            num: "05",
                            title: "Action Plan",
                            time: "30 min",
                            lead: "All",
                            desc: "30-day roadmap. Who does what. Measurable goals. Follow-up session scheduled. You leave with clarity and commitment.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "Your Team Leaves With.",
                    items: [
                        { title: "Working Systems", desc: "Not concepts — actual workflows running on your problems." },
                        { title: "Shared Language", desc: "Your team aligned on AI strategy. No more confusion." },
                        { title: "Personal Stacks", desc: "Each person equipped with tools configured for their role." },
                        { title: "30-Day Plan", desc: "Clear roadmap with owners, deadlines, and measurable outcomes." },
                        { title: "Follow-Up", desc: "30-day check-in session included. We ensure it sticks." }
                    ]
                },
                who: {
                    title: "Built For Teams Who Want To Move.",
                    profiles: [
                        "Marketing teams automating content workflows",
                        "Product teams integrating AI into development",
                        "Operations teams eliminating manual processes",
                        "Leadership teams building AI-first culture"
                    ]
                },
                details: {
                    title: "Details.",
                    items: [
                        { label: "Team Size", value: "10-15 people" },
                        { label: "Duration", value: "4-5 hours" },
                        { label: "Location", value: "Your office or our space" },
                        { label: "Includes", value: "Materials, follow-up session, community access" },
                        { label: "Investment", value: "€6,900 + VAT" }
                    ]
                },
                guides: {
                    title: "Your Facilitators.",
                    subtitle: "Same three minds. Deeper dive.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "The Creative",
                            company: "CEO/Founder SORRYWECAN",
                            focus: "Opens minds. Shows what's possible. Sets the bar for quality."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "The Architect",
                            company: "CPO/Co-founder SUDOLABS",
                            focus: "Leads the build. Makes it real. Ensures everyone leaves with working tools."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "The Navigator",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Creates the framework. Ensures decisions stick beyond the workshop."
                        }
                    ]
                },
                cta: {
                    headline: "Let's Talk.",
                    description: "30-minute call to understand your team and challenges.",
                    button: "Book Discovery Call"
                }
            }
        },
        sk: {
            switcher: {
                public: {
                    label: "THE SHIFT",
                    subtitle: "Verejná Session",
                    price: "€99",
                    duration: "3 hodiny"
                },
                corporate: {
                    label: "DEEP DIVE",
                    subtitle: "Firemný Workshop",
                    price: "€6 900",
                    duration: "4-5 hodín"
                }
            },
            public: {
                header: {
                    label: "THE SHIFT",
                    title: "Svet Sa Zmenil. Väčšina Si To Nevšimla.",
                    description: "3 hodiny s ľuďmi, ktorí s AI pracujú denne. Žiadny hype. Žiadne tutoriály. Len jasnosť o tom, kde sme, čo je možné, a čo s tým urobíš."
                },
                session: {
                    title: "Tri Pohľady. Jeden Posun.",
                    phases: [
                        {
                            num: "01",
                            title: "Čo Je Možné",
                            time: "50 min",
                            lead: "Roland",
                            desc: "Roland otvára. Nie slajdami — prácou. Živý kreatívny proces. Ako vyzerá AI, keď máš vkus. Čo väčšina prehliada. Čo ty prehliadať prestaneš.",
                            highlight: true
                        },
                        {
                            num: "02",
                            title: "Čo Je Reálne",
                            time: "50 min",
                            lead: "Ján",
                            desc: "Jan to uzemní. Pohľad buildera. Čo naozaj funguje vo veľkom. Čo dnes zvládne jeden človek. Čo je hype, čo nie. Žiadna teória — len čo staviame.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Na Čo Sa Sústrediť",
                            time: "40 min",
                            lead: "Roman",
                            desc: "Roman vyjasní. Ako myslieť, keď sa všetko hýbe. Otázky, ktoré prerežú šum. Na čo sa sústrediť. Čo ignorovať.",
                            highlight: false
                        },
                        {
                            num: "04",
                            title: "Tvoje Otázky",
                            time: "40 min",
                            lead: "Všetci",
                            desc: "Tvoj odbor. Tvoja realita. Odpovieme na to, čo pre teba záleží. Žiadny skript — len rozhovor.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "Odídeš S Otvorenými Očami.",
                    items: [
                        { title: "Jasnosť", desc: "Kde sme. Kam to smeruje. Čo to znamená pre teba." },
                        { title: "Presvedčenie", desc: "Videl si, čo je možné. Už nečakáš." },
                        { title: "Smer", desc: "Nie to-do list. Otázka, na ktorú budeš hľadať odpoveď. Niečo, čo postavíš alebo zmeníš." },
                        { title: "Komunita", desc: "Prístup k ostatným na tej istej ceste. Budúce sessions. Nie si v tom sám." }
                    ]
                },
                who: {
                    title: "Pre Ľudí Pripravených Ísť Ďalej.",
                    profiles: [
                        "Kreatívci skúmajúci, čo AI naozaj umožňuje",
                        "Zakladatelia, čo chcú ísť rýchlejšie s menšími tímami",
                        "Dizajnéri unavení z generického AI výstupu",
                        "Ktokoľvek, kto niečo buduje — a je unavený zo šumu"
                    ]
                },
                guides: {
                    title: "Tri Mysle.",
                    subtitle: "Nie tréneri. Builderi, čo toto robia denne.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "Kreatívec",
                            company: "CEO/Zakladateľ SORRYWECAN",
                            focus: "Otvára tým, čo je možné — a čo odlišuje skutočnú prácu od generického výstupu."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "Architekt",
                            company: "CPO/Spoluzakladateľ SUDOLABS",
                            focus: "Ukáže, čo sa reálne dodáva — a čo dnes zvládne jeden človek."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "Navigátor",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Framework na rozhodovanie, na čo sa sústrediť a čo ignorovať."
                        }
                    ]
                },
                cta: {
                    headline: "Pripravený?",
                    description: "Prvá session február 2025. Limitované miesta.",
                    button: "Idem Do Toho",
                    price: "€99"
                }
            },
            corporate: {
                header: {
                    label: "DEEP DIVE",
                    title: "Tvoj Tím. Tvoje Výzvy. Skutočné Riešenia.",
                    description: "4-5 hodín s tvojím tímom. My facilitujeme, vy tvoríte. Premeňte vaše skutočné problémy na fungujúce AI workflow. Odídete so systémami, ktoré bežia."
                },
                session: {
                    title: "Jeden Deň. Plná Transformácia.",
                    phases: [
                        {
                            num: "01",
                            title: "Prebudenie",
                            time: "45 min",
                            lead: "Roland",
                            desc: "Kde AI naozaj je. Čo možno robia vaši konkurenti. Nepríjemné pravdy o tom, čo sa mení. Živé ukážky, ktoré posunú perspektívu.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Vaša Realita",
                            time: "60 min",
                            lead: "Všetci",
                            desc: "Mapujeme VAŠE workflow. Vaše úzke miesta. Vaše príležitosti. Čo vás práve stojí čas a peniaze. Kolaboratívna session — váš tím vedie, my navigujeme.",
                            highlight: true
                        },
                        {
                            num: "03",
                            title: "Stavba",
                            time: "90 min",
                            lead: "Ján",
                            desc: "Hands-on implementácia. Staviame skutočné riešenia spolu. Váš tím sa učí praxou. Osobné AI stacky nakonfigurované. Workflow zautomatizované. Nie demá — vaša skutočná práca.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Framework",
                            time: "45 min",
                            lead: "Roman",
                            desc: "Rozhodovacie rámce pre budúcnosť. Ako hodnotiť nové nástroje. Kedy automatizovať, kedy nie. Otázky, ktoré by váš tím mal klásť pred každým AI rozhodnutím.",
                            highlight: false
                        },
                        {
                            num: "05",
                            title: "Akčný Plán",
                            time: "30 min",
                            lead: "Všetci",
                            desc: "30-dňová roadmapa. Kto čo robí. Merateľné ciele. Naplánovaná follow-up session. Odchádzate s jasnosťou a záväzkom.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "Váš Tím Odíde S.",
                    items: [
                        { title: "Fungujúce Systémy", desc: "Nie koncepty — skutočné workflow bežiace na vašich problémoch." },
                        { title: "Spoločný Jazyk", desc: "Váš tím zladený na AI stratégii. Žiadne ďalšie zmätky." },
                        { title: "Osobné Stacky", desc: "Každý vybavený nástrojmi nakonfigurovanými pre jeho rolu." },
                        { title: "30-Dňový Plán", desc: "Jasná roadmapa s vlastníkmi, deadlinami a merateľnými výsledkami." },
                        { title: "Follow-Up", desc: "30-dňová check-in session v cene. Zabezpečíme, že to zostane." }
                    ]
                },
                who: {
                    title: "Pre Tímy, Ktoré Chcú Ísť Ďalej.",
                    profiles: [
                        "Marketingové tímy automatizujúce content workflow",
                        "Produktové tímy integrujúce AI do vývoja",
                        "Operačné tímy eliminujúce manuálne procesy",
                        "Leadership tímy budujúce AI-first kultúru"
                    ]
                },
                details: {
                    title: "Detaily.",
                    items: [
                        { label: "Veľkosť tímu", value: "10-15 ľudí" },
                        { label: "Trvanie", value: "4-5 hodín" },
                        { label: "Miesto", value: "Vaša kancelária alebo náš priestor" },
                        { label: "Zahŕňa", value: "Materiály, follow-up session, prístup ku komunite" },
                        { label: "Investícia", value: "€6 900 + DPH" }
                    ]
                },
                guides: {
                    title: "Vaši Facilitátori.",
                    subtitle: "Tie isté tri mysle. Hlbší ponor.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "Kreatívec",
                            company: "CEO/Zakladateľ SORRYWECAN",
                            focus: "Otvára mysle. Ukazuje, čo je možné. Nastavuje latku kvality."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "Architekt",
                            company: "CPO/Spoluzakladateľ SUDOLABS",
                            focus: "Vedie stavbu. Robí to skutočným. Zabezpečí, že každý odíde s fungujúcimi nástrojmi."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "Navigátor",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Vytvára framework. Zabezpečí, že rozhodnutia vydržia aj po workshope."
                        }
                    ]
                },
                cta: {
                    headline: "Porozprávajme Sa.",
                    description: "30-minútový hovor na pochopenie vášho tímu a výziev.",
                    button: "Rezervovať Discovery Call"
                }
            }
        }
    }

    const t = content[lang]
    const currentView = t[view]
    const isCorporate = view === 'corporate'

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

            {/* Switcher Hero */}
            <section className="pt-24 pb-8 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8 text-center"
                    >
                        {lang === 'en' ? 'CHOOSE YOUR PATH' : 'VYBER SI CESTU'}
                    </motion.p>
                    
                    {/* Switcher Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {/* Public Option */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => setView('public')}
                            className={cn(
                                "p-6 md:p-8 border-2 text-left transition-all",
                                view === 'public' 
                                    ? "border-[#0047BB] bg-[#0047BB] text-white" 
                                    : "border-black/10 bg-white hover:border-[#0047BB]/30"
                            )}
                        >
                            <span className={cn(
                                "text-[10px] font-bold tracking-[0.2em] uppercase",
                                view === 'public' ? "text-white/60" : "text-[#0047BB]"
                            )}>
                                {t.switcher.public.label}
                            </span>
                            <h3 className="text-xl md:text-2xl font-serif-instrument italic mt-2 mb-3">
                                {t.switcher.public.subtitle}
                            </h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-serif-instrument">{t.switcher.public.price}</span>
                                <span className={cn(
                                    "text-sm",
                                    view === 'public' ? "text-white/50" : "text-black/40"
                                )}>
                                    / {t.switcher.public.duration}
                                </span>
                            </div>
                        </motion.button>

                        {/* Corporate Option */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            onClick={() => setView('corporate')}
                            className={cn(
                                "p-6 md:p-8 border-2 text-left transition-all",
                                view === 'corporate' 
                                    ? "border-black bg-black text-white" 
                                    : "border-black/10 bg-white hover:border-black/30"
                            )}
                        >
                            <span className={cn(
                                "text-[10px] font-bold tracking-[0.2em] uppercase",
                                view === 'corporate' ? "text-white/60" : "text-black/60"
                            )}>
                                {t.switcher.corporate.label}
                            </span>
                            <h3 className="text-xl md:text-2xl font-serif-instrument italic mt-2 mb-3">
                                {t.switcher.corporate.subtitle}
                            </h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-serif-instrument">{t.switcher.corporate.price}</span>
                                <span className={cn(
                                    "text-sm",
                                    view === 'corporate' ? "text-white/50" : "text-black/40"
                                )}>
                                    / {t.switcher.corporate.duration}
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Content Header */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`header-${view}-${lang}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="py-16 md:py-24 px-6 md:px-12 border-t border-black/10"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <span className={cn(
                            "text-[10px] font-bold tracking-[0.3em] uppercase block mb-6",
                            isCorporate ? "text-black/60" : "text-[#0047BB]"
                        )}>
                            {currentView.header.label}
                        </span>
                        <h1 className="font-serif-instrument text-4xl md:text-6xl tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                            {currentView.header.title}
                        </h1>
                        <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto">
                            {currentView.header.description}
                        </p>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Session Flow */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`session-${view}-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 px-6 md:px-12 border-t border-black/10 bg-white"
                >
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif-instrument text-3xl md:text-4xl italic text-center mb-16">
                            {currentView.session.title}
                        </h2>

                        <div className="space-y-4">
                            {currentView.session.phases.map((phase: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={cn(
                                        "flex flex-col md:flex-row gap-6 p-6 md:p-8 border transition-all",
                                        phase.highlight 
                                            ? isCorporate 
                                                ? "border-2 border-black bg-black/5" 
                                                : "border-2 border-[#0047BB] bg-[#0047BB]/5"
                                            : "border-black/10 hover:border-black/20"
                                    )}
                                >
                                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-20 shrink-0">
                                        <span className={cn(
                                            "text-[10px] font-bold",
                                            phase.highlight 
                                                ? isCorporate ? "text-black" : "text-[#0047BB]"
                                                : "text-black/40"
                                        )}>
                                            {phase.num}
                                        </span>
                                        <span className="text-[10px] text-black/30">{phase.time}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl md:text-2xl font-serif-instrument italic mb-3">{phase.title}</h4>
                                        <p className="text-black/60 leading-relaxed">{phase.desc}</p>
                                    </div>
                                    <div className="md:w-20 shrink-0 md:text-right">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{phase.lead}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* What You Leave With */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`outcome-${view}-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "py-16 md:py-24 px-6 md:px-12 border-t text-white",
                        isCorporate ? "bg-black border-black" : "bg-[#0047BB] border-[#0047BB]"
                    )}
                >
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-serif-instrument text-3xl md:text-4xl italic text-center mb-16">
                            {currentView.outcome.title}
                        </h2>
                        <div className={cn(
                            "grid gap-6",
                            isCorporate ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"
                        )}>
                            {currentView.outcome.items.map((item: any, i: number) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 border border-white/20 hover:border-white/40 transition-all"
                                >
                                    <h4 className="text-xl font-serif-instrument italic mb-3">{item.title}</h4>
                                    <p className="text-white/60">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Who It's For */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`who-${view}-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 px-6 md:px-12 border-t border-black/10"
                >
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif-instrument text-2xl md:text-3xl italic text-center mb-10">
                            {currentView.who.title}
                        </h2>
                        <div className="space-y-4">
                            {currentView.who.profiles.map((profile: string, i: number) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className={cn(
                                        "w-2 h-2 rounded-full mt-2 shrink-0",
                                        isCorporate ? "bg-black" : "bg-[#0047BB]"
                                    )} />
                                    <span className="text-lg text-black/70">{profile}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Corporate Details */}
            {isCorporate && 'details' in currentView && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 px-6 md:px-12 border-t border-black/10 bg-black/5"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-8 text-center">
                            {(currentView as any).details.title}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {(currentView as any).details.items.map((item: any, i: number) => (
                                <div key={i} className="text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{item.label}</p>
                                    <p className="font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Guides */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`guides-${view}-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 md:py-24 px-6 md:px-12 border-t border-black/10 bg-white"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-serif-instrument text-3xl md:text-4xl italic mb-3">{currentView.guides.title}</h2>
                            <p className="text-black/50">{currentView.guides.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {currentView.guides.cards.map((card: any, i: number) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 border border-black/10 hover:border-black/20 transition-all"
                                >
                                    <span className={cn(
                                        "text-[10px] font-bold tracking-widest uppercase",
                                        isCorporate ? "text-black/60" : "text-[#0047BB]"
                                    )}>
                                        {card.role}
                                    </span>
                                    <h4 className="text-xl font-serif-instrument italic mt-2 mb-1">{card.name}</h4>
                                    <p className="text-xs text-black/40 mb-4">{card.company}</p>
                                    <p className="text-sm text-black/60">{card.focus}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={`cta-${view}-${lang}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "py-24 text-center",
                        isCorporate ? "bg-black text-white" : "bg-[#0047BB] text-white"
                    )}
                >
                    <div className="max-w-2xl mx-auto px-6">
                        <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-6">{currentView.cta.headline}</h2>
                        <p className="text-lg text-white/60 mb-4">{currentView.cta.description}</p>
                        {'price' in currentView.cta && (
                            <p className="text-4xl font-serif-instrument mb-8">{(currentView.cta as any).price}</p>
                        )}
                        <a
                            href={isCorporate 
                                ? "mailto:hello@sorrywecan.com?subject=Corporate Workshop - Discovery Call" 
                                : "mailto:hello@sorrywecan.com?subject=THE SHIFT - I'm In"
                            }
                            className={cn(
                                "px-12 py-5 font-bold text-xs uppercase tracking-widest transition-all inline-block",
                                isCorporate 
                                    ? "bg-white text-black hover:bg-[#0047BB] hover:text-white"
                                    : "bg-white text-[#0047BB] hover:bg-black hover:text-white"
                            )}
                        >
                            {currentView.cta.button}
                        </a>
                        
                        {/* Cross-sell */}
                        <div className="mt-10">
                            <span className="text-sm text-white/40">
                                {isCorporate 
                                    ? (lang === 'en' ? "Want to try first?" : "Chceš najprv vyskúšať?")
                                    : (lang === 'en' ? "Want this for your team?" : "Chceš toto pre svoj tím?")
                                }
                            </span>
                            <button
                                onClick={() => setView(isCorporate ? 'public' : 'corporate')}
                                className="block mx-auto mt-2 text-sm font-bold text-white hover:underline"
                            >
                                {isCorporate 
                                    ? (lang === 'en' ? "See Public Session →" : "Pozri Verejnú Session →")
                                    : (lang === 'en' ? "See Corporate Workshop →" : "Pozri Firemný Workshop →")
                                }
                            </button>
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2025
                </p>
            </footer>
        </div>
    )
}
