"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function CorporatePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const partners = ["TATRA BANKA", "META", "SENNHEISER", "SAMSUNG"]

    const content = {
        en: {
            hero: {
                label: "Corporate Workshop",
                title: {
                    line1: "Your Team.",
                    line2: "New Operating System."
                },
                description: "Three practitioners. Three lenses. Your challenges. We don't present — we think together, live, on the problems keeping you stuck.",
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
                title: "Three Lenses. One Session.",
                subtitle: "We think together. You leave clear.",
                phases: [
                    { 
                        num: "01", 
                        title: "The Shift", 
                        time: "30 min",
                        desc: "The world changed. Here's what we're seeing — in your industry, in creative work, in what's possible now. All three of us. Short. Sharp. Uncomfortable.",
                        lead: "All"
                    },
                    { 
                        num: "02", 
                        title: "The Frameworks", 
                        time: "60-75 min",
                        desc: "Taste: what separates good from generic. Leverage: what to build, what to skip. Clarity: how to prioritize when everything feels urgent.",
                        lead: "Roland → Ján → Roman"
                    },
                    { 
                        num: "03", 
                        title: "Your Reality", 
                        time: "90-120 min",
                        desc: "Your challenges. Three perspectives. We look at the same problem through different lenses — live. This is where insights happen that prevent six-figure mistakes.",
                        lead: "Facilitated"
                    }
                ],
                closing: {
                    title: "The Clarity",
                    time: "30 min",
                    desc: "Each of us shares what we saw. What to prioritize. What to ignore. You leave knowing what to do.",
                    lead: "All"
                }
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Shared Vision", desc: "Your team aligned on what AI means for your business." },
                    { title: "Priorities Mapped", desc: "What to build, what to skip, where to start first." },
                    { title: "Decision Framework", desc: "How to evaluate every AI opportunity going forward." },
                    { title: "30-Day Follow-up", desc: "We check in. Digital toolkit included. You're not alone." }
                ]
            },
            founders: {
                title: "Three Lenses.",
                subtitle: "Not consultants. Practitioners who think together on your problems.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "TASTE", 
                        company: "SORRYWECAN", 
                        tagline: "What separates good from generic. Why your output looks like everyone else's."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "LEVERAGE", 
                        company: "SUDOLABS", 
                        tagline: "What to build, what to skip. What one person can do now."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "CLARITY", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        tagline: "How to prioritize when everything feels urgent. The decision framework."
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "3", label: "practitioners thinking together" },
                    { value: "90+", label: "minutes on YOUR challenges" },
                    { value: "30", label: "day follow-up included" }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { q: "Is this just prompt training?", a: "No. Prompting is maybe 10%. This is about seeing differently — what to build, what to skip, how to prioritize. Three perspectives on your actual challenges." },
                    { q: "Our industry is specific. Will it apply?", a: "The problems are more similar than you think. We've worked across creative, tech, finance, telco. The frameworks are universal. The application is yours." },
                    { q: "Why half a day, not longer?", a: "Focus beats duration. We're not here to fill time — we're here to shift how you see. That happens in hours, not days." },
                    { q: "What's the ROI?", a: "Hard to measure in hours saved. Easier to see in wrong paths avoided, right priorities found, and decisions your team can finally make with confidence." }
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
                description: "Traja praktici. Tri pohľady. Vaše výzvy. Neprezentujeme — myslíme spolu, naživo, nad problémami, ktoré vás brzdia.",
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
                title: "Tri Pohľady. Jedna Session.",
                subtitle: "Myslíme spolu. Odídete s jasnosťou.",
                phases: [
                    { 
                        num: "01", 
                        title: "The Shift", 
                        time: "30 min",
                        desc: "Svet sa zmenil. Tu je, čo vidíme — vo vašom odvetví, v kreatívnej práci, v tom, čo je teraz možné. Všetci traja. Krátko. Ostro. Nepríjemne.",
                        lead: "Všetci"
                    },
                    { 
                        num: "02", 
                        title: "Frameworky", 
                        time: "60-75 min",
                        desc: "Vkus: čo odlišuje dobré od generického. Páka: čo stavať, čo preskočiť. Jasnosť: ako prioritizovať, keď všetko pôsobí urgentne.",
                        lead: "Roland → Ján → Roman"
                    },
                    { 
                        num: "03", 
                        title: "Vaša Realita", 
                        time: "90-120 min",
                        desc: "Vaše výzvy. Tri perspektívy. Pozeráme sa na ten istý problém cez rôzne optiky — naživo. Tu vznikajú insights, ktoré zabraňujú šesťcifrovým chybám.",
                        lead: "Facilitované"
                    }
                ],
                closing: {
                    title: "Jasnosť",
                    time: "30 min",
                    desc: "Každý z nás zdieľa, čo videl. Čo prioritizovať. Čo ignorovať. Odídete s vedomím, čo robiť.",
                    lead: "Všetci"
                }
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Spoločná Vízia", desc: "Váš tím zladený na tom, čo AI znamená pre váš biznis." },
                    { title: "Zmapované Priority", desc: "Čo stavať, čo preskočiť, kde začať." },
                    { title: "Rozhodovací Framework", desc: "Ako vyhodnotiť každú AI príležitosť do budúcna." },
                    { title: "30-Dňový Follow-up", desc: "Ozveme sa. Digitálny toolkit v cene. Nie ste v tom sami." }
                ]
            },
            founders: {
                title: "Tri Pohľady.",
                subtitle: "Nie konzultanti. Praktici, ktorí myslia spolu nad vašimi problémami.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "VKUS", 
                        company: "SORRYWECAN", 
                        tagline: "Čo odlišuje dobré od generického. Prečo váš výstup vyzerá ako u všetkých."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "PÁKA", 
                        company: "SUDOLABS", 
                        tagline: "Čo stavať, čo preskočiť. Čo jeden človek zvládne dnes."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "JASNOSŤ", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        tagline: "Ako prioritizovať, keď všetko pôsobí urgentne. Rozhodovací framework."
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "3", label: "praktici myslia spolu" },
                    { value: "90+", label: "minút na VAŠE výzvy" },
                    { value: "30", label: "dňový follow-up v cene" }
                ]
            },
            faq: {
                title: "Otázky.",
                items: [
                    { q: "Je toto len prompt tréning?", a: "Nie. Promptovanie je možno 10%. Toto je o inom pohľade — čo stavať, čo preskočiť, ako prioritizovať. Tri perspektívy na vaše skutočné výzvy." },
                    { q: "Naše odvetvie je špecifické. Bude to aplikovateľné?", a: "Problémy sú podobnejšie, než si myslíte. Pracovali sme naprieč kreatívou, tech, financiami, telco. Frameworky sú univerzálne. Aplikácia je vaša." },
                    { q: "Prečo pol dňa, nie dlhšie?", a: "Fokus prekonáva trvanie. Nie sme tu, aby sme vyplnili čas — sme tu, aby sme zmenili to, ako vidíte. To sa deje za hodiny, nie dni." },
                    { q: "Aké je ROI?", a: "Ťažko merateľné v ušetrených hodinách. Ľahšie viditeľné v vyhnutých zlých cestách, nájdených správnych prioritách a rozhodnutiach, ktoré váš tím konečne dokáže spraviť s istotou." }
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
                                {lang === 'en' ? 'Trusted by' : 'Dôverujú nám'}
                            </span>
                            <div className="flex items-center gap-6">
                                {partners.map((partner) => (
                                    <span 
                                        key={partner}
                                        className="text-[11px] font-bold tracking-[0.15em] text-black/40 hover:text-black/70 transition-colors"
                                    >
                                        {partner}
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

            <section className="py-12 px-6 md:px-12 bg-[#0047BB]/5 border-y border-[#0047BB]/20">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg md:text-xl font-serif-instrument italic text-black/70 leading-relaxed">
                        {lang === 'en' 
                            ? "One consultant gives you one perspective. We give you three — live, in the room, thinking together on YOUR problem. That's where insights happen that no single expert could see alone."
                            : "Jeden konzultant vám dá jednu perspektívu. My vám dáme tri — naživo, v miestnosti, myslíme spolu nad VAŠÍM problémom. Tam vznikajú insights, ktoré žiaden jednotlivý expert nevidí sám."
                        }
                    </p>
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
