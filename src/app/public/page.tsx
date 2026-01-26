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
                label: "Public Sessions",
                title: {
                    line1: "Learn. Build.",
                    line2: "Discuss."
                },
                description: "3 hours with professionals from different companies. You leave with working tools, new mental models, and answers to questions that matter in your field.",
                price: "99",
                duration: "3 hours",
                nextSession: "February 2025",
                spots: "Limited to 25 seats",
                cta: "Reserve Your Seat"
            },
            value: {
                headline: "What €99 Gets You.",
                items: [
                    { title: "Not a Lecture", desc: "Interactive. You ask, we adapt. Your questions drive the conversation." },
                    { title: "Not Generic", desc: "Discussion time built in. What matters in YOUR field? Let's talk." },
                    { title: "Not Theory", desc: "Leave with 1 configured tool and 1 working automation. Today." },
                    { title: "Not Alone", desc: "25 professionals, different companies, shared challenges. Network forms naturally." }
                ]
            },
            session: {
                title: "The Session.",
                headline: "3 Hours. Four Phases.",
                parts: [
                    { 
                        num: "01", 
                        title: "Opening Spark", 
                        time: "30 min", 
                        desc: "Vision meets reality. Live demo of what's possible. We show, you see what AI can actually do.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Framework", 
                        time: "45 min", 
                        desc: "Five pillars, compressed. Mental models you can use tomorrow. How to think with AI, not just prompt.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Hands-On", 
                        time: "60 min", 
                        desc: "Set up your tool. Build your first automation. Leave with something working.",
                        lead: "Ján"
                    },
                    { 
                        num: "04", 
                        title: "Discussion", 
                        time: "45 min", 
                        desc: "Your field, your questions. What are you actually dealing with? Let's solve it together.",
                        lead: "All"
                    }
                ]
            },
            outcome: {
                title: "You Leave With.",
                items: [
                    { title: "Configured AI Tool", desc: "Not just installed. Set up for YOUR work." },
                    { title: "Working Automation", desc: "Something that runs. Saves time this week." },
                    { title: "Thinking Framework", desc: "Mental models for any AI problem." },
                    { title: "Digital Toolkit", desc: "Resources, templates, continued learning." }
                ]
            },
            who: {
                title: "Built For.",
                profiles: [
                    "Marketers tired of generic AI output",
                    "Designers exploring AI workflows",
                    "Managers needing team AI strategy",
                    "Founders automating operations",
                    "Anyone serious about AI productivity"
                ],
                not: {
                    title: "Not For.",
                    items: [
                        "Complete beginners (you should know what ChatGPT is)",
                        "People expecting magic without effort",
                        "Those who just want to watch"
                    ]
                }
            },
            founders: {
                title: "Your Guides.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "SORRYWECAN", 
                        brings: "Opens with vision. Shows what's possible."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "The Architect", 
                        company: "SUDOLABS", 
                        brings: "Makes it practical. You leave with working tools."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategic clarity. How to think, not just use."
                    }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { 
                        q: "Do I need technical skills?", 
                        a: "No. If you can use email and a browser, you can do this. We guide every step." 
                    },
                    { 
                        q: "What should I bring?", 
                        a: "Laptop with internet. That's it. We handle the rest." 
                    },
                    { 
                        q: "Is it really just €99?", 
                        a: "Yes. No hidden fees. We want this accessible because the best marketing is people telling their colleagues." 
                    },
                    { 
                        q: "What if my company wants more?", 
                        a: "Perfect. That's the plan. Experience this, then bring us to your team for a deep dive." 
                    },
                    { 
                        q: "Can I expense this?", 
                        a: "Yes. We provide proper invoices. Most companies approve €99 without questions." 
                    },
                    { 
                        q: "What language is the session in?", 
                        a: "Slovak primarily, with English materials. We switch to English if needed." 
                    }
                ]
            },
            logistics: {
                title: "Details.",
                items: [
                    { label: "Where", value: "Bratislava (venue TBA)" },
                    { label: "When", value: "February 2025" },
                    { label: "Duration", value: "3 hours" },
                    { label: "Size", value: "Max 25 people" },
                    { label: "Price", value: "€99 + VAT" }
                ]
            },
            cta: {
                headline: "Ready to Start?",
                description: "25 seats. First session February 2025. Reserve now, pay later.",
                button: "Reserve Your Seat",
                note: "Or bring this to your team →",
                corporate: "Corporate Workshop"
            }
        },
        sk: {
            hero: {
                label: "Verejné Sessions",
                title: {
                    line1: "Nauč sa. Postav.",
                    line2: "Diskutuj."
                },
                description: "3 hodiny s profesionálmi z rôznych firiem. Odídeš s fungujúcimi nástrojmi, novými mentálnymi modelmi a odpoveďami na otázky, ktoré sú dôležité v tvojom odbore.",
                price: "99",
                duration: "3 hodiny",
                nextSession: "Február 2025",
                spots: "Limitované na 25 miest",
                cta: "Rezervovať Miesto"
            },
            value: {
                headline: "Čo dostaneš za €99.",
                items: [
                    { title: "Nie Prednáška", desc: "Interaktívne. Pýtaš sa, my sa prispôsobujeme. Tvoje otázky riadia konverzáciu." },
                    { title: "Nie Generické", desc: "Čas na diskusiu zahrnutý. Čo je dôležité v TVOJOM odbore? Poďme sa baviť." },
                    { title: "Nie Teória", desc: "Odíď s 1 nastaveným nástrojom a 1 fungujúcou automatizáciou. Dnes." },
                    { title: "Nie Sám", desc: "25 profesionálov, rôzne firmy, spoločné výzvy. Sieť vzniká prirodzene." }
                ]
            },
            session: {
                title: "Session.",
                headline: "3 Hodiny. Štyri Fázy.",
                parts: [
                    { 
                        num: "01", 
                        title: "Otváracie Iskry", 
                        time: "30 min", 
                        desc: "Vízia stretáva realitu. Live demo toho, čo je možné. Ukážeme, ty uvidíš, čo AI skutočne dokáže.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Framework", 
                        time: "45 min", 
                        desc: "Päť pilierov, komprimované. Mentálne modely, ktoré použiješ zajtra. Ako myslieť s AI, nielen promptovať.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Hands-On", 
                        time: "60 min", 
                        desc: "Nastav si nástroj. Postav prvú automatizáciu. Odíď s niečím fungujúcim.",
                        lead: "Ján"
                    },
                    { 
                        num: "04", 
                        title: "Diskusia", 
                        time: "45 min", 
                        desc: "Tvoj odbor, tvoje otázky. S čím sa skutočne stretávaš? Vyriešme to spolu.",
                        lead: "Všetci"
                    }
                ]
            },
            outcome: {
                title: "Odídeš S.",
                items: [
                    { title: "Nakonfigurovaný AI Nástroj", desc: "Nie len nainštalovaný. Nastavený pre TVOJU prácu." },
                    { title: "Fungujúca Automatizácia", desc: "Niečo, čo beží. Šetrí čas tento týždeň." },
                    { title: "Framework Myslenia", desc: "Mentálne modely pre akýkoľvek AI problém." },
                    { title: "Digitálny Toolkit", desc: "Zdroje, šablóny, pokračujúce vzdelávanie." }
                ]
            },
            who: {
                title: "Vytvorené Pre.",
                profiles: [
                    "Marketérov unavených z generického AI výstupu",
                    "Dizajnérov skúmajúcich AI workflow",
                    "Manažérov potrebujúcich tímovú AI stratégiu",
                    "Founderov automatizujúcich operácie",
                    "Kohokoľvek vážne zaujatého AI produktivitou"
                ],
                not: {
                    title: "Nie Pre.",
                    items: [
                        "Úplných začiatočníkov (mal by si vedieť, čo je ChatGPT)",
                        "Ľudí očakávajúcich mágiu bez úsilia",
                        "Tých, čo chcú len pozerať"
                    ]
                }
            },
            founders: {
                title: "Tvoji Sprievodcovia.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "SORRYWECAN", 
                        brings: "Otvára s víziou. Ukazuje, čo je možné."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "Architekt", 
                        company: "SUDOLABS", 
                        brings: "Robí to praktickým. Odídeš s fungujúcimi nástrojmi."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategická jasnosť. Ako myslieť, nielen používať."
                    }
                ]
            },
            faq: {
                title: "Otázky.",
                items: [
                    { 
                        q: "Potrebujem technické zručnosti?", 
                        a: "Nie. Ak vieš používať email a prehliadač, zvládneš to. Vedieme ťa každým krokom." 
                    },
                    { 
                        q: "Čo si mám priniesť?", 
                        a: "Laptop s internetom. To je všetko. O zvyšok sa postaráme." 
                    },
                    { 
                        q: "Je to naozaj len €99?", 
                        a: "Áno. Žiadne skryté poplatky. Chceme, aby to bolo dostupné, pretože najlepší marketing je, keď ľudia hovoria kolegom." 
                    },
                    { 
                        q: "Čo ak moja firma chce viac?", 
                        a: "Perfektné. To je plán. Zažij toto, potom nás priveď k tvojmu tímu na hlboký ponor." 
                    },
                    { 
                        q: "Môžem si to preplatiť?", 
                        a: "Áno. Poskytujeme riadne faktúry. Väčšina firiem schváli €99 bez otázok." 
                    },
                    { 
                        q: "V akom jazyku je session?", 
                        a: "Primárne slovensky, s anglickými materiálmi. Prepneme na angličtinu, ak treba." 
                    }
                ]
            },
            logistics: {
                title: "Detaily.",
                items: [
                    { label: "Kde", value: "Bratislava (miesto bude upresnené)" },
                    { label: "Kedy", value: "Február 2025" },
                    { label: "Trvanie", value: "3 hodiny" },
                    { label: "Veľkosť", value: "Max 25 ľudí" },
                    { label: "Cena", value: "€99 + DPH" }
                ]
            },
            cta: {
                headline: "Pripravený Začať?",
                description: "25 miest. Prvá session február 2025. Rezervuj teraz, plať neskôr.",
                button: "Rezervovať Miesto",
                note: "Alebo prines toto k svojmu tímu →",
                corporate: "Firemný Workshop"
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

            <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20" />
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
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-inter leading-relaxed text-black/60 max-w-2xl mb-10"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row md:items-end gap-8"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl font-serif-instrument">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="space-y-3">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=Public Session - Reserve Seat"
                                className="bg-[#0047BB] text-white px-8 py-4 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all block w-fit"
                            >
                                {t.hero.cta}
                            </a>
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                                <span className="text-[#0047BB]">{t.hero.nextSession}</span>
                                <span className="text-black/30">|</span>
                                <span className="text-black/40">{t.hero.spots}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-12">
                        {t.value.headline}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.value.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 border border-black/10 bg-white space-y-3">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-black/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mb-12">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] block mb-4">
                            {t.session.title}
                        </span>
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic">
                            {t.session.headline}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {t.session.parts.map((part: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "flex flex-col md:flex-row gap-6 p-6 md:p-8 border transition-all",
                                    i === 3 
                                        ? "border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-24 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">{part.num}</span>
                                    <span className="text-[10px] text-black/30">{part.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2">{part.title}</h4>
                                    <p className="text-black/60 leading-relaxed">{part.desc}</p>
                                </div>
                                <div className="md:w-24 shrink-0 text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{part.lead}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-[#0047BB]/5 border border-[#0047BB]/20">
                        <p className="text-sm text-[#0047BB] font-medium text-center">
                            {lang === 'en' 
                                ? "45 minutes of dedicated discussion time. Your questions. Your field. Real answers."
                                : "45 minút venovaných diskusii. Tvoje otázky. Tvoj odbor. Skutočné odpovede."
                            }
                        </p>
                    </div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic text-center mb-12">
                        {t.outcome.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-6 border border-black bg-white space-y-3">
                                <span className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs">
                                    {i + 1}
                                </span>
                                <h4 className="font-bold">{item.title}</h4>
                                <p className="text-sm text-black/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-6">{t.who.title}</h3>
                            <div className="space-y-3">
                                {t.who.profiles.map((profile: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                        <span className="text-black/70">{profile}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border border-black/20 bg-black/5">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600 mb-4">{t.who.not.title}</h3>
                            <div className="space-y-3">
                                {t.who.not.items.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-red-500 text-xs font-bold mt-0.5">[X]</span>
                                        <span className="text-sm text-black/60">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic text-center mb-12">{t.founders.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <div key={i} className="p-6 border border-white/20 bg-white/5 space-y-4 hover:bg-white/10 transition-all">
                                <div>
                                    <h4 className="text-xl font-serif-instrument italic">{card.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-1">{card.role}</p>
                                    <p className="text-[10px] text-white/40">{card.company}</p>
                                </div>
                                <p className="text-sm text-white/60 leading-relaxed">{card.brings}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-3xl italic text-center mb-8">{t.faq.title}</h2>
                    <div className="space-y-3">
                        {t.faq.items.map((item: any, i: number) => (
                            <div key={i} className="border border-black/10 bg-white">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                                >
                                    <span className="font-medium pr-4">{item.q}</span>
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
                                            <p className="px-6 pb-5 text-sm text-black/60 leading-relaxed">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-16 px-6 md:px-12 border-b border-black/10 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-6 text-center">{t.logistics.title}</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {t.logistics.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{item.label}</p>
                                <p className="font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-24 bg-[#0047BB] text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-6">{t.cta.headline}</h2>
                    <p className="text-lg opacity-70 mb-10">{t.cta.description}</p>
                    <a
                        href="mailto:hello@sorrywecan.com?subject=Public Session - Reserve Seat"
                        className="bg-white text-[#0047BB] px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                    >
                        {t.cta.button}
                    </a>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm opacity-50">{t.cta.note}</span>
                        <Link 
                            href="/corporate" 
                            className="text-sm font-bold underline underline-offset-4 hover:no-underline"
                        >
                            {t.cta.corporate}
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
