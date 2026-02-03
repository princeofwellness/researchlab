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
                    title: "Taste. Leverage. Clarity.",
                    phases: [
                        {
                            num: "01",
                            title: "Taste",
                            time: "50 min",
                            lead: "Roland",
                            desc: "The highest form of creative work in this new era. What separates good from unforgettable. Roland opens with live work — what's possible when taste meets technology.",
                            highlight: true
                        },
                        {
                            num: "02",
                            title: "Leverage",
                            time: "50 min",
                            lead: "Ján",
                            desc: "What one person can build now. The new math of small teams and unlimited output. Jan shows the builder's reality — what actually ships, where business is going, and the opportunity for those who see it first.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Clarity",
                            time: "40 min",
                            lead: "Roman",
                            desc: "How to think when everything moves. Not 50 tools to try — the questions that matter. Roman gives you the framework for every AI decision going forward. What to focus on. What to ignore.",
                            highlight: false
                        },
                        {
                            num: "04",
                            title: "Your Questions",
                            time: "40 min",
                            lead: "All",
                            desc: "Your field. Your reality. The things you're actually wondering about. No script — just honest answers from people who build successful businesses with it daily.",
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
                    title: "Your Team. Your Challenges. Three Perspectives.",
                    description: "4-5 hours with your team. Three practitioners thinking together — live — on the problems keeping you stuck. Not a presentation. A session that changes how you see."
                },
                session: {
                    title: "Three Lenses. One Session.",
                    phases: [
                        {
                            num: "01",
                            title: "The Shift",
                            time: "30 min",
                            lead: "All",
                            desc: "The world changed. Here's what we're seeing — in your industry, in creative work, in what's possible now. All three of us. Short. Sharp. Uncomfortable.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "The Frameworks",
                            time: "60-75 min",
                            lead: "Roland → Ján → Roman",
                            desc: "Taste: what separates good from generic. Leverage: what to build, what to skip. Clarity: how to prioritize when everything feels urgent. Mental models you'll use forever.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Your Reality",
                            time: "90-120 min",
                            lead: "Facilitated",
                            desc: "Your challenges. Three perspectives. We look at the same problem through different lenses — live. This is where insights happen that prevent six-figure mistakes.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "The Clarity",
                            time: "30 min",
                            lead: "All",
                            desc: "Each of us shares what we saw. What to prioritize. What to ignore. You leave knowing what to do — not confused about what comes next.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "Your Team Leaves With.",
                    items: [
                        { title: "Shared Vision", desc: "Your team aligned on what AI means for your business. Same language. Same priorities." },
                        { title: "Priorities Mapped", desc: "What to build, what to skip, where to start. The paths not worth taking — identified." },
                        { title: "Decision Framework", desc: "How to evaluate every AI opportunity going forward. Not just today — for years." },
                        { title: "Digital Toolkit", desc: "Frameworks, prompts, resources. Keeps updating. You're not abandoned." },
                        { title: "30-Day Follow-Up", desc: "We check in. See what stuck. Answer what's new. You're not alone." }
                    ]
                },
                who: {
                    title: "Built For Teams Who Need Clarity.",
                    profiles: [
                        "Leadership teams who know AI matters but not where to start",
                        "Creative teams whose output is becoming generic",
                        "Operations teams drowning in tools that don't connect",
                        "Any team that's busy with AI but not seeing results"
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
                    subtitle: "Three practitioners. Three lenses. One session.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "The Creative",
                            company: "CEO/Founder SORRYWECAN",
                            focus: "The TASTE lens. What separates good from generic. Why your output looks like everyone else's — and what to do about it."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "The Architect",
                            company: "CPO/Co-founder SUDOLABS",
                            focus: "The LEVERAGE lens. What to build, what to skip. What one person can do now that took teams of ten before."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "The Navigator",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "The CLARITY lens. How to prioritize when everything feels urgent. The decision framework for every AI choice."
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
                    title: "Vkus. Páka. Jasnosť.",
                    phases: [
                        {
                            num: "01",
                            title: "Vkus",
                            time: "50 min",
                            lead: "Roland",
                            desc: "Najvyššia forma kreatívnej práce v tejto novej ére. Čo odlišuje dobré od nezabudnuteľného. Roland otvára živou prácou — čo je možné, keď sa vkus stretne s technológiou.",
                            highlight: true
                        },
                        {
                            num: "02",
                            title: "Páka",
                            time: "50 min",
                            lead: "Ján",
                            desc: "Čo jeden človek dokáže postaviť dnes. Nová matematika malých tímov a neobmedzeného výstupu. Jan ukáže realitu buildera — čo sa reálne dodáva, kam smeruje biznis, a príležitosť pre tých, čo to vidia prví.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Jasnosť",
                            time: "40 min",
                            lead: "Roman",
                            desc: "Ako myslieť, keď sa všetko hýbe. Nie 50 nástrojov na vyskúšanie — otázky, ktoré záležia. Roman ti dá framework pre každé AI rozhodnutie. Na čo sa sústrediť. Čo ignorovať.",
                            highlight: false
                        },
                        {
                            num: "04",
                            title: "Tvoje Otázky",
                            time: "40 min",
                            lead: "Všetci",
                            desc: "Tvoj odbor. Tvoja realita. Veci, nad ktorými naozaj premýšľaš. Žiadny skript — len úprimné odpovede od ľudí, ktorí s tým denne budujú úspešné biznisy.",
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
                    title: "Váš Tím. Vaše Výzvy. Tri Perspektívy.",
                    description: "4-5 hodín s vaším tímom. Traja praktici myslia spolu — naživo — nad problémami, ktoré vás brzdia. Nie prezentácia. Session, ktorá zmení to, ako vidíte."
                },
                session: {
                    title: "Tri Pohľady. Jedna Session.",
                    phases: [
                        {
                            num: "01",
                            title: "The Shift",
                            time: "30 min",
                            lead: "Všetci",
                            desc: "Svet sa zmenil. Tu je, čo vidíme — vo vašom odvetví, v kreatívnej práci, v tom, čo je teraz možné. Všetci traja. Krátko. Ostro. Nepríjemne.",
                            highlight: false
                        },
                        {
                            num: "02",
                            title: "Frameworky",
                            time: "60-75 min",
                            lead: "Roland → Ján → Roman",
                            desc: "Vkus: čo odlišuje dobré od generického. Páka: čo stavať, čo preskočiť. Jasnosť: ako prioritizovať, keď všetko pôsobí urgentne. Mentálne modely, ktoré použijete navždy.",
                            highlight: false
                        },
                        {
                            num: "03",
                            title: "Vaša Realita",
                            time: "90-120 min",
                            lead: "Facilitované",
                            desc: "Vaše výzvy. Tri perspektívy. Pozeráme sa na ten istý problém cez rôzne optiky — naživo. Tu vznikajú insights, ktoré zabraňujú šesťcifrovým chybám.",
                            highlight: true
                        },
                        {
                            num: "04",
                            title: "Jasnosť",
                            time: "30 min",
                            lead: "Všetci",
                            desc: "Každý z nás zdieľa, čo videl. Čo prioritizovať. Čo ignorovať. Odídete s vedomím, čo robiť — nie zmätení, čo bude ďalej.",
                            highlight: false
                        }
                    ]
                },
                outcome: {
                    title: "Váš Tím Odíde S.",
                    items: [
                        { title: "Spoločná Vízia", desc: "Váš tím zladený na tom, čo AI znamená pre váš biznis. Spoločný jazyk. Spoločné priority." },
                        { title: "Zmapované Priority", desc: "Čo stavať, čo preskočiť, kde začať. Cesty, ktoré nestoja za to — identifikované." },
                        { title: "Rozhodovací Framework", desc: "Ako vyhodnotiť každú AI príležitosť do budúcna. Nie len dnes — na roky." },
                        { title: "Digitálny Toolkit", desc: "Frameworky, prompty, zdroje. Priebežne sa aktualizuje. Nie ste opustení." },
                        { title: "30-Dňový Follow-Up", desc: "Ozveme sa. Pozrieme, čo zostalo. Odpovieme na nové otázky. Nie ste v tom sami." }
                    ]
                },
                who: {
                    title: "Pre Tímy, Ktoré Potrebujú Jasnosť.",
                    profiles: [
                        "Leadership tímy, ktoré vedia, že AI je dôležité, ale nevedia kde začať",
                        "Kreatívne tímy, ktorých výstup sa stáva generickým",
                        "Operačné tímy topiace sa v nástrojoch, ktoré sa neprepájajú",
                        "Akýkoľvek tím zaneprázdnený s AI, ale bez viditeľných výsledkov"
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
                    subtitle: "Traja praktici. Tri pohľady. Jedna session.",
                    cards: [
                        {
                            name: "Roland Vraník",
                            role: "Kreatívec",
                            company: "CEO/Zakladateľ SORRYWECAN",
                            focus: "Optika VKUSU. Čo odlišuje dobré od generického. Prečo váš výstup vyzerá ako všetci ostatní — a čo s tým."
                        },
                        {
                            name: "Ján Koscelanský",
                            role: "Architekt",
                            company: "CPO/Spoluzakladateľ SUDOLABS",
                            focus: "Optika PÁKY. Čo stavať, čo preskočiť. Čo jeden človek zvládne dnes, na čo predtým treba tím desiatich."
                        },
                        {
                            name: "Roman Pii Wagner",
                            role: "Navigátor",
                            company: "TRANSFORMATIONAL DESIGN",
                            focus: "Optika JASNOSTI. Ako prioritizovať, keď všetko pôsobí urgentne. Rozhodovací framework pre každú AI voľbu."
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
