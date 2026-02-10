"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function PublicSessionsPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                label: "THE SHIFT",
                title: {
                    line1: "The World Changed.",
                    line2: "Most Haven't Noticed."
                },
                description: "3 hours with founders who build with AI daily. Clarity on where we are, what's possible, and what you're going to do about it.",
                price: "99",
                duration: "3 hours",
                date: "February 26, 2026",
                spots: "40 seats",
                cta: "I'm In"
            },
            session: {
                title: "What separates the 1%.",
                subtitle: "",
                parts: [
                    { 
                        num: "01", 
                        title: "Taste", 
                        time: "50 min", 
                        desc: "What separates good from unforgettable. Roland opens with live work. What's possible when taste meets technology.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Leverage", 
                        time: "50 min", 
                        desc: "What one person can build now. Ján shows the builder's reality. What actually ships, and the opportunity for those who see it first.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Clarity", 
                        time: "40 min", 
                        desc: "How to think when everything moves. Roman gives you the framework for every AI decision. What to focus on. What to ignore.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Your Questions", 
                        time: "40 min", 
                        desc: "Your field. Your reality. No script. Just honest answers from people who build with AI daily.",
                        lead: "All"
                    }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Faster output.", subline: "But less certainty in what's good." },
                    { headline: "Generation is easy.", subline: "Taste is the hard part." },
                    { headline: "You have the tools.", subline: "Your habits haven't caught up." },
                    { headline: "You know where to go.", subline: "Daily practice is still fog." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "A Working System", desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning." },
                    { title: "Less Noise, More Signal", desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones." },
                    { title: "Your Edge", desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently." },
                    { title: "The Community", desc: "Access to the people who showed up. Monthly toolkit updates. A place to stay connected and keep growing." }
                ]
            },
            founders: {
                title: "Three Perspectives",
                subtitle: "Art. Product. Transformation.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "Creative Director / Founder, SORRYWECAN", 
                        tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.",
                        bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "The Architect", 
                        company: "CPO / Co-founder, SUDOLABS", 
                        tagline: "Knows exactly where teams waste months building what one person could ship in a week.",
                        bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "Transformational Design", 
                        tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.",
                        bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure."
                    }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { q: "Do I need technical skills?", a: "No. If you can use a browser, you can do this." },
                    { q: "What should I bring?", a: "Laptop. Internet. That's it." },
                    { q: "Why €99?", a: "We want this accessible. Best marketing is people telling friends." },
                    { q: "What makes this different?", a: "We're not teaching from slides. We build with AI daily. Real work, not theory." },
                    { q: "Can I expense this?", a: "Yes. Proper invoices. Most companies approve €99 without questions." },
                    { q: "What language?", a: "Slovak primarily. English materials. We adapt." },
                    { q: "What if I want more after?", a: "Good. Corporate workshops for teams. Or join again." }
                ],
                details: {
                    title: "Details",
                    items: [
                        { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
                        { label: "Duration", value: "3 hours", subvalue: "17:30 — 20:30" },
                        { label: "Price", value: "from €99", subvalue: "per person" }
                    ]
                }
            },
            cta: {
                headline: "I'm In.",
                subline: "40 seats. February 26.",
                button: "I'm In",
                note: "Want this for your team?",
                corporate: "Corporate Workshop"
            }
        },
        sk: {
            hero: {
                label: "THE SHIFT",
                title: {
                    line1: "Svet Sa Zmenil.",
                    line2: "Väčšina Si To Nevšimla."
                },
                description: "3 hodiny so zakladateľmi, ktorí s AI pracujú denne. Jasnosť o tom, kde sme, čo je možné, a čo s tým urobíš.",
                price: "99",
                duration: "3 hodiny",
                date: "26. februára 2026",
                spots: "40 miest",
                cta: "Idem Do Toho"
            },
            session: {
                title: "Čo odlišuje to 1%.",
                subtitle: "",
                parts: [
                    { 
                        num: "01", 
                        title: "Vkus", 
                        time: "50 min", 
                        desc: "Čo odlišuje dobré od nezabudnuteľného. Roland otvára živou prácou. Čo je možné, keď sa vkus stretne s technológiou.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Páka", 
                        time: "50 min", 
                        desc: "Čo jeden človek dokáže postaviť dnes. Ján ukáže realitu buildera. Čo sa reálne dodáva, a príležitosť pre tých, čo to vidia prví.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Jasnosť", 
                        time: "40 min", 
                        desc: "Ako myslieť, keď sa všetko hýbe. Roman ti dá framework pre každé AI rozhodnutie. Na čo sa sústrediť. Čo ignorovať.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Tvoje Otázky", 
                        time: "40 min", 
                        desc: "Tvoj odbor. Tvoja realita. Žiadny skript. Len úprimné odpovede od ľudí, čo s AI budujú denne.",
                        lead: "Všetci"
                    }
                ]
            },
            problem: {
                title: "Znie Povedome?",
                cards: [
                    { headline: "Rýchlejší výstup.", subline: "Ale menšia istota, čo je dobré." },
                    { headline: "Generovať je ľahké.", subline: "Vkus je to ťažké." },
                    { headline: "Nástroje máte.", subline: "Návyky ešte nie." },
                    { headline: "Viete kam.", subline: "Denná prax je stále hmla." }
                ]
            },
             outcome: {
                 title: "S Čím Odchádzate",
                 items: [
                     { title: "Funkčný Systém", desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno." },
                     { title: "Menej Šumu, Viac Signálu", desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne." },
                     { title: "Vaša Výhoda", desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak." },
                     { title: "Komunita", desc: "Prístup ku ľuďom, ktorí prišli. Mesačné toolkit updaty. Miesto, kde zostanete prepojení a rastete ďalej." }
                 ]
             },
             founders: {
                 title: "Tri Perspektívy",
                 subtitle: "Umenie. Produkt. Transformácia.",
                 trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                 cards: [
                     { 
                         name: "Roland Vraník", 
                         role: "Umelec", 
                         company: "Creative Director / Zakladateľ, SORRYWECAN", 
                         tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.",
                         bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne."
                     },
                     { 
                         name: "Ján Koscelanský", 
                         role: "Architekt", 
                         company: "CPO / Spoluzakladateľ, SUDOLABS", 
                         tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.",
                         bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli."
                     },
                     { 
                         name: "Roman Pii Wagner", 
                         role: "Navigátor", 
                         company: "Transformational Design", 
                         tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.",
                         bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom."
                     }
                 ]
             },
            faq: {
                title: "Otázky.",
                items: [
                    { q: "Potrebujem technické zručnosti?", a: "Nie. Ak vieš používať prehliadač, zvládneš to." },
                    { q: "Čo si mám priniesť?", a: "Laptop. Internet. To je všetko." },
                    { q: "Prečo €99?", a: "Chceme, aby to bolo dostupné. Najlepší marketing je, keď ľudia povedia kamarátom." },
                    { q: "Čo je na tom iné?", a: "Neučíme zo slajdov. S AI pracujeme denne. Reálna práca, nie teória." },
                    { q: "Môžem si to preplatiť?", a: "Áno. Riadne faktúry. Väčšina firiem schváli €99 bez otázok." },
                    { q: "V akom jazyku?", a: "Primárne slovensky. Anglické materiály. Prispôsobíme sa." },
                    { q: "Čo ak budem chcieť viac?", a: "Dobre. Firemné workshopy pre tímy. Alebo príď znova." }
                ],
                details: {
                    title: "Detaily",
                    items: [
                        { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
                        { label: "Trvanie", value: "3 hodiny", subvalue: "17:30 — 20:30" },
                        { label: "Cena", value: "od €99", subvalue: "na osobu" }
                    ]
                }
            },
             cta: {
                 headline: "Idem Do Toho.",
                 subline: "40 miest. 26. február.",
                 button: "Idem Do Toho",
                 note: "Chceš toto pre svoj tím?",
                 corporate: "Firemný Workshop"
             }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20">
            <TopNav lang={lang} customAction={
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
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] font-code-brand">
                            {t.hero.label}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-bold text-[13vw] md:text-[9vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB]">{t.hero.title.line2}</span>
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
                        className="space-y-8"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl md:text-7xl font-bold">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <a 
                                href="mailto:andrea@sorrywecan.com?subject=THE SHIFT - I'm In"
                                className="bg-[#0047BB] text-white px-10 py-5 font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all font-code-brand"
                            >
                                {t.hero.cta}
                            </a>
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest font-code-brand">
                                <span className="text-[#0047BB]">{t.hero.date}</span>
                                <span className="text-black/30">|</span>
                                <span className="text-black/40">{t.hero.spots}</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bold text-2xl md:text-3xl text-center mb-10"
                    >
                        {t.problem.title}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.problem.cards.map((card: { headline: string; subline: string }, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border border-black/10 bg-white"
                            >
                                <p className="text-lg md:text-xl font-medium text-black">{card.headline}</p>
                                <p className="text-lg md:text-xl text-black/40">{card.subline}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="font-bold text-4xl md:text-5xl">
                            {t.session.title}
                        </h2>
                        <p className="text-lg text-[#0047BB] mt-2">{t.session.subtitle}</p>
                    </div>

                    <div className="space-y-3">
                        {t.session.parts.map((part: any, i: number) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "flex flex-col md:flex-row gap-4 p-5 md:p-6 border transition-all",
                                    i === 0 
                                        ? "border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB] font-code-brand">{part.num}</span>
                                    <span className="text-[10px] text-black/30 font-code-brand">{part.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-2">{part.title}</h4>
                                    <p className="text-sm text-black/60 leading-relaxed">{part.desc}</p>
                                </div>
                                <div className="md:w-20 shrink-0 md:text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 font-code-brand">{part.lead}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-4xl text-center mb-12">
                        {t.outcome.title}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-5 border border-white/10 hover:border-[#0047BB]/50 transition-all">
                                <h4 className="text-lg font-bold text-[#0047BB] mb-2">{item.title}</h4>
                                <p className="text-sm text-white/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0047BB] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-bold text-4xl md:text-5xl mb-2">{t.founders.title}</h2>
                        <p className="text-white/60">{t.founders.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <div key={i} className="p-6 border border-white/20 bg-white/5 hover:bg-white/10 transition-all">
                                <h4 className="text-xl font-bold">{card.name}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1 font-code-brand">{card.role}</p>
                                <p className="text-[10px] text-white/30 mb-4 font-code-brand">{card.company}</p>
                                <p className="text-sm text-white/60 mb-3">{card.bio}</p>
                                <p className="text-sm text-white/80 italic border-t border-white/10 pt-3">"{card.tagline}"</p>
                            </div>
                        ))}
                    </div>
                    {t.founders.trust && (
                        <p className="text-center text-[11px] font-code-brand text-white/40 mt-6">{t.founders.trust}</p>
                    )}
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-bold text-3xl text-center mb-10">{t.faq.title}</h2>
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-black/5 border border-black/10">
                        {t.faq.details.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 font-code-brand">{item.label}</p>
                                <p className="text-base font-medium">{item.value}</p>
                                <p className="text-sm text-black/50">{item.subvalue}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-bold text-5xl md:text-6xl mb-4">{t.cta.headline}</h2>
                    <p className="text-lg text-white/50 mb-8">{t.cta.subline}</p>
                    <a
                        href="mailto:andrea@sorrywecan.com?subject=THE SHIFT - I'm In"
                        className="bg-[#0047BB] text-white px-12 py-5 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all inline-block font-code-brand"
                    >
                        {t.cta.button}
                    </a>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm text-white/40">{t.cta.note}</span>
                        <Link 
                            href="/corporate" 
                            className="text-sm font-bold text-[#0047BB] hover:text-white transition-colors font-code-brand"
                        >
                            {t.cta.corporate} →
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 font-code-brand">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
