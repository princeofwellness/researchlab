"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function CorporatePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const partners = [
        { name: "EYERIM", highlight: true },
        { name: "SUDOLABS", highlight: false },
        { name: "SORRYWECAN", highlight: false }
    ]

    const content = {
        en: {
            hero: {
                label: "Corporate Workshop",
                title: {
                    line1: "Your Team.",
                    line2: "New Operating System."
                },
                description: "We work through YOUR challenges together. Not a presentation — a facilitated session that turns problems into working frameworks.",
                price: "6,900",
                duration: "4-5 hours",
                capacity: "10-15 people",
                cta: "Book Discovery Call"
            },
            problem: {
                headline: "Everyone has AI. Few know how to use it.",
                points: [
                    "Your team prompts without strategy",
                    "Output looks like everyone else's",
                    "Tools multiply, clarity doesn't",
                    "Speed went up, quality went sideways"
                ]
            },
            framework: {
                title: "Three Phases. One Transformation.",
                subtitle: "We facilitate. You create.",
                phases: [
                    { 
                        num: "01", 
                        title: "Vision", 
                        time: "60 min",
                        desc: "Where we are, where it's going, how to see what others don't. Taste over templates.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Direction", 
                        time: "60 min",
                        desc: "Where AI creates leverage, where it creates noise. Decision rules you can use.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Integration", 
                        time: "90 min",
                        desc: "Design the workflow, build the system, ship something that runs.",
                        lead: "Ján"
                    }
                ],
                closing: {
                    title: "Commitment",
                    time: "50 min",
                    desc: "Lock it in. Roles, standards, next steps. The change sticks.",
                    lead: "All"
                }
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Personal AI Stack", desc: "Configured. Working. Ready for Monday." },
                    { title: "Automation Blueprints", desc: "3+ workflows for your actual processes." },
                    { title: "Thinking Frameworks", desc: "Mental models for any problem." },
                    { title: "30-Day Action Plan", desc: "Concrete next steps. Follow-up call included." }
                ]
            },
            founders: {
                title: "Three Minds.",
                subtitle: "Not consultants. Practitioners who built what they teach.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "SORRYWECAN", 
                        tagline: "Sets taste. Ignites what's possible."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "The Architect", 
                        company: "SUDOLABS", 
                        tagline: "Builds what ships. Systems that run."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        tagline: "Clarity in chaos. Decisions that stick."
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "4+", label: "hours saved per person weekly" },
                    { value: "30", label: "days to measurable change" },
                    { value: "94%", label: "would recommend to peers" }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { q: "Is this just prompt training?", a: "No. Prompting is maybe 15%. This is about thinking, tools, automation, and imagination. We teach you to work with AI, not just talk to it." },
                    { q: "Our industry is specific. Will it apply?", a: "Yes. The principles are universal. We've worked across creative, tech, finance, telco. Application differs, fundamentals don't." },
                    { q: "Why half a day, not longer?", a: "Focus beats duration. People can't stay sharp for 8 hours. A tight session creates more change than a full day of diminishing attention." },
                    { q: "What's the ROI?", a: "Conservative: 4+ hours saved per person weekly. For a 15-person team, that's €100k+ annually. Plus better decisions, faster execution." }
                ],
                details: {
                    title: "Details",
                    items: [
                        { label: "Duration", value: "4-5 hours" },
                        { label: "Team size", value: "10-15 people" },
                        { label: "Location", value: "We come to you" },
                        { label: "Investment", value: "€6,900 + VAT" }
                    ]
                }
            },
            cta: {
                headline: "Ready?",
                subline: "20-minute discovery call. No commitment.",
                button: "Book Discovery Call",
                guarantee: "Not the right fit? We'll know in the first 30 minutes. No hard feelings, no invoice."
            }
        },
        sk: {
            hero: {
                label: "Firemný Workshop",
                title: {
                    line1: "Váš Tím.",
                    line2: "Nový Operačný Systém."
                },
                description: "Pracujeme na VAŠICH výzvach spolu. Nie prezentácia — facilitovaná session, ktorá premení vaše problémy na fungujúce frameworky.",
                price: "6 900",
                duration: "4-5 hodín",
                capacity: "10-15 ľudí",
                cta: "Rezervovať Discovery Call"
            },
            problem: {
                headline: "Každý má AI. Málokto vie, ako ju používať.",
                points: [
                    "Váš tím promptuje bez stratégie",
                    "Výstup vyzerá ako u všetkých ostatných",
                    "Nástroje pribúdajú, jasnosť nie",
                    "Rýchlosť stúpla, kvalita stagnuje"
                ]
            },
            framework: {
                title: "Tri Fázy. Jedna Transformácia.",
                subtitle: "My facilitujeme. Vy tvoríte.",
                phases: [
                    { 
                        num: "01", 
                        title: "Vízia", 
                        time: "60 min",
                        desc: "Kde sme, kam to smeruje, ako vidieť to, čo ostatní nevidia. Vkus nad šablónami.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Smer", 
                        time: "60 min",
                        desc: "Kde AI vytvára páku, kde vytvára šum. Rozhodovacie pravidlá, ktoré použijete.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Integrácia", 
                        time: "90 min",
                        desc: "Navrhnite workflow, postavte systém, dodajte niečo, čo beží.",
                        lead: "Ján"
                    }
                ],
                closing: {
                    title: "Záväzok",
                    time: "50 min",
                    desc: "Uzamknite to. Roly, štandardy, ďalšie kroky. Zmena zostane.",
                    lead: "Všetci"
                }
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Osobný AI Stack", desc: "Nakonfigurovaný. Fungujúci. Pripravený na pondelok." },
                    { title: "Blueprinty Automatizácie", desc: "3+ workflow pre vaše skutočné procesy." },
                    { title: "Frameworky Myslenia", desc: "Mentálne modely pre akýkoľvek problém." },
                    { title: "30-Dňový Akčný Plán", desc: "Konkrétne ďalšie kroky. Follow-up hovor zahrnutý." }
                ]
            },
            founders: {
                title: "Tri Mysle.",
                subtitle: "Nie konzultanti. Praktici, ktorí postavili to, čo učia.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "SORRYWECAN", 
                        tagline: "Nastavuje vkus. Zapaľuje možnosti."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "Architekt", 
                        company: "SUDOLABS", 
                        tagline: "Stavia, čo beží. Systémy, čo fungujú."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        tagline: "Jasnosť v chaose. Rozhodnutia, čo držia."
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "4+", label: "hodiny ušetrené na osobu týždenne" },
                    { value: "30", label: "dní do merateľnej zmeny" },
                    { value: "94%", label: "by odporučilo kolegom" }
                ]
            },
            faq: {
                title: "Otázky.",
                items: [
                    { q: "Je toto len prompt tréning?", a: "Nie. Promptovanie je možno 15%. Toto je o myslení, nástrojoch, automatizácii a imaginácii. Učíme vás pracovať s AI, nie sa len s ňou rozprávať." },
                    { q: "Naše odvetvie je špecifické. Bude to aplikovateľné?", a: "Áno. Princípy sú univerzálne. Pracovali sme naprieč kreatívou, tech, financiami, telco. Aplikácia sa líši, fundamenty nie." },
                    { q: "Prečo pol dňa, nie dlhšie?", a: "Fokus prekonáva trvanie. Ľudia nedokážu zostať ostrí 8 hodín. Tesná session vytvorí viac zmeny ako celý deň klesajúcej pozornosti." },
                    { q: "Aké je ROI?", a: "Konzervatívne: 4+ hodiny ušetrené na osobu týždenne. Pre 15-členný tím je to €100k+ ročne. Plus lepšie rozhodnutia, rýchlejšia exekúcia." }
                ],
                details: {
                    title: "Detaily",
                    items: [
                        { label: "Trvanie", value: "4-5 hodín" },
                        { label: "Veľkosť tímu", value: "10-15 ľudí" },
                        { label: "Miesto", value: "Prídeme k vám" },
                        { label: "Investícia", value: "€6 900 + DPH" }
                    ]
                }
            },
            cta: {
                headline: "Pripravení?",
                subline: "20-minútový discovery call. Žiadny záväzok.",
                button: "Rezervovať Discovery Call",
                guarantee: "Nie je to pre vás? Zistíme to do 30 minút. Bez problémov, bez faktúry."
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

            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            {t.hero.label}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl leading-relaxed text-black/60 max-w-2xl mb-10"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl font-serif-instrument">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=Corporate Workshop - Discovery Call"
                                className="bg-[#0047BB] text-white px-8 py-4 font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all"
                            >
                                {t.hero.cta}
                            </a>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{t.hero.capacity}</span>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                Trusted by
                            </span>
                            <div className="flex items-center gap-4">
                                {partners.map((partner) => (
                                    <span 
                                        key={partner.name}
                                        className={cn(
                                            "text-xs font-bold tracking-wide",
                                            partner.highlight ? "text-[#0047BB]" : "text-black/30"
                                        )}
                                    >
                                        {partner.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <h2 className="font-serif-instrument text-3xl md:text-4xl italic leading-tight">
                            {t.problem.headline}
                        </h2>
                        <div className="grid grid-cols-2 gap-3">
                            {t.problem.points.map((point: string, i: number) => (
                                <div key={i} className="p-4 border border-black/10 bg-white">
                                    <span className="text-sm text-black/70">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-2">
                            {t.framework.title}
                        </h2>
                        <p className="text-lg text-[#0047BB]">{t.framework.subtitle}</p>
                    </div>
                    <div className="space-y-3">
                        {t.framework.phases.map((phase: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "flex flex-col md:flex-row gap-4 p-5 md:p-6 border transition-all",
                                    i === 2 
                                        ? "border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">{phase.num}</span>
                                    <span className="text-[10px] text-black/30">{phase.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-1">{phase.title}</h4>
                                    <p className="text-sm text-black/60">{phase.desc}</p>
                                </div>
                                <div className="md:w-20 shrink-0 md:text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{phase.lead}</span>
                                </div>
                            </div>
                        ))}
                        
                        <div className="p-5 md:p-6 bg-black text-white">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">CLOSE</span>
                                    <span className="text-[10px] text-white/30">{t.framework.closing.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-1">{t.framework.closing.title}</h4>
                                    <p className="text-sm text-white/60">{t.framework.closing.desc}</p>
                                </div>
                                <div className="md:w-20 shrink-0 md:text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.framework.closing.lead}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-serif-instrument text-3xl md:text-4xl italic text-center mb-12">{t.outcome.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-5 border border-white/10">
                                <span className="w-7 h-7 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs mb-3">
                                    {i + 1}
                                </span>
                                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-white/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/10">
                        {t.proof.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center">
                                <span className="text-4xl md:text-5xl font-serif-instrument text-[#0047BB]">{stat.value}</span>
                                <p className="text-xs text-white/40 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0047BB] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-2">{t.founders.title}</h2>
                        <p className="text-white/60">{t.founders.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <div key={i} className="p-6 border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
                                <h4 className="text-xl font-serif-instrument italic">{card.name}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">{card.role}</p>
                                <p className="text-[10px] text-white/30 mb-3">{card.company}</p>
                                <p className="text-sm text-white/70 italic">"{card.tagline}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif-instrument text-3xl italic text-center mb-10">{t.faq.title}</h2>
                    <div className="space-y-2 mb-12">
                        {t.faq.items.map((item: any, i: number) => (
                            <div key={i} className="border border-black/10">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                                >
                                    <span className="font-medium text-sm pr-4">{item.q}</span>
                                    <span className={cn("text-[#0047BB] font-bold transition-transform", faqOpen === i && "rotate-45")}>+</span>
                                </button>
                                <AnimatePresence>
                                    {faqOpen === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-4 text-sm text-black/60">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-6 bg-black/5 border border-black/10">
                        {t.faq.details.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{item.label}</p>
                                <p className="text-sm font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-4">{t.cta.headline}</h2>
                    <p className="text-lg text-white/50 mb-6">{t.cta.subline}</p>
                    <a
                        href="mailto:hello@sorrywecan.com?subject=Corporate Workshop - Discovery Call"
                        className="bg-[#0047BB] text-white px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-block"
                    >
                        {t.cta.button}
                    </a>
                    <p className="text-sm text-white/40 mt-6">{t.cta.guarantee}</p>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm text-white/40">{lang === 'en' ? "Want to try first?" : "Chceš najprv vyskúšať?"}</span>
                        <Link 
                            href="/public" 
                            className="text-sm font-bold text-[#0047BB] hover:text-white transition-colors"
                        >
                            {lang === 'en' ? "THE SHIFT €99" : "THE SHIFT €99"} →
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
