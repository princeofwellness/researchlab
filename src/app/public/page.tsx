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
                description: "3 hours with people who build with AI daily. No hype. No tutorials. Just clarity on where we are, what's possible, and what you're going to do about it.",
                price: "99",
                duration: "3 hours",
                nextSession: "February 2025",
                spots: "Limited seats",
                cta: "I'm In"
            },

            session: {
                title: "Taste. Leverage. Clarity.",
                subtitle: "Three hours. One shift.",
                parts: [
                    { 
                        num: "01", 
                        title: "Taste", 
                        time: "50 min", 
                        desc: "The highest form of creative work in this new era. What separates good from unforgettable. Roland opens with live work — what's possible when taste meets technology.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Leverage", 
                        time: "50 min", 
                        desc: "What one person can build now. The new math of small teams and unlimited output. Jan shows the builder's reality — what actually ships, where business is going, and the opportunity for those who see it first.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Clarity", 
                        time: "40 min", 
                        desc: "How to think when everything moves. Not 50 tools to try — the questions that matter. Roman gives you the framework for every AI decision going forward. What to focus on. What to ignore.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Your Questions", 
                        time: "40 min", 
                        desc: "Your field. Your reality. The things you're actually wondering about. No script — just honest answers from people who build successful businesses with it daily.",
                        lead: "All"
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
                ],
                not: {
                    title: "Not For.",
                    items: [
                        "People expecting magic without effort",
                        "Complete beginners (you should know what ChatGPT is)",
                        "Spectators"
                    ]
                }
            },
            founders: {
                title: "Three Minds.",
                subtitle: "Not trainers. Builders who do this daily.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "CEO/Founder SORRYWECAN", 
                        brings: "Runs an award-winning creative studio. Opens with what's possible — and what separates real work from generic output."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "The Architect", 
                        company: "CPO/Co-founder SUDOLABS", 
                        brings: "Built products for US clients, €5M+ revenue. Shows what actually ships — and what one person can do now."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategic clarity. The framework for deciding what to focus on and what to ignore."
                    }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { 
                        q: "Do I need technical skills?", 
                        a: "No. If you can use a browser, you can do this." 
                    },
                    { 
                        q: "What should I bring?", 
                        a: "Laptop. Internet. That's it." 
                    },
                    { 
                        q: "Why so cheap?", 
                        a: "We want this accessible. Best marketing is people telling friends." 
                    },
                    { 
                        q: "What makes this different?", 
                        a: "We're not teaching from slides. We build with AI daily. You'll see real work, not theory." 
                    },
                    { 
                        q: "Can I expense this?", 
                        a: "Yes. Proper invoices. Most companies approve €99 without questions." 
                    },
                    { 
                        q: "What language is the session in?", 
                        a: "Slovak primarily. English materials. We adapt." 
                    },
                    { 
                        q: "What if I want more after?", 
                        a: "Good. That's what the corporate workshops are for. Or join again." 
                    }
                ]
            },
            logistics: {
                title: "Details.",
                items: [
                    { label: "Where", value: "Bratislava (venue TBA)" },
                    { label: "When", value: "February 2025" },
                    { label: "Duration", value: "~3 hours" },
                    { label: "Size", value: "Limited seats" },
                    { label: "Price", value: "€99 + VAT" }
                ]
            },
            cta: {
                headline: "Ready?",
                description: "First session February 2025. Limited seats.",
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
                description: "3 hodiny s ľuďmi, ktorí s AI pracujú denne. Žiadny hype. Žiadne tutoriály. Len jasnosť o tom, kde sme, čo je možné, a čo s tým urobíš.",
                price: "99",
                duration: "3 hodiny",
                nextSession: "Február 2025",
                spots: "Limitované miesta",
                cta: "Idem Do Toho"
            },

            session: {
                title: "Vkus. Páka. Jasnosť.",
                subtitle: "Tri hodiny. Jeden posun.",
                parts: [
                    { 
                        num: "01", 
                        title: "Vkus", 
                        time: "50 min", 
                        desc: "Najvyššia forma kreatívnej práce v tejto novej ére. Čo odlišuje dobré od nezabudnuteľného. Roland otvára živou prácou — čo je možné, keď sa vkus stretne s technológiou.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Páka", 
                        time: "50 min", 
                        desc: "Čo jeden človek dokáže postaviť dnes. Nová matematika malých tímov a neobmedzeného výstupu. Jan ukáže realitu buildera — čo sa reálne dodáva, kam smeruje biznis, a príležitosť pre tých, čo to vidia prví.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Jasnosť", 
                        time: "40 min", 
                        desc: "Ako myslieť, keď sa všetko hýbe. Nie 50 nástrojov na vyskúšanie — otázky, ktoré záležia. Roman ti dá framework pre každé AI rozhodnutie. Na čo sa sústrediť. Čo ignorovať.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Tvoje Otázky", 
                        time: "40 min", 
                        desc: "Tvoj odbor. Tvoja realita. Veci, nad ktorými naozaj premýšľaš. Žiadny skript — len úprimné odpovede od ľudí, ktorí s tým denne budujú úspešné biznisy.",
                        lead: "Všetci"
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
                ],
                not: {
                    title: "Nie Pre.",
                    items: [
                        "Ľudí čakajúcich mágiu bez námahy",
                        "Úplných začiatočníkov (vedz, čo je ChatGPT)",
                        "Divákov"
                    ]
                }
            },
            founders: {
                title: "Tri Mysle.",
                subtitle: "Nie tréneri. Builderi, čo toto robia denne.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "CEO/Zakladateľ SORRYWECAN", 
                        brings: "Vedie ocenené kreatívne štúdio. Otvára tým, čo je možné — a čo odlišuje skutočnú prácu od generického výstupu."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "Architekt", 
                        company: "CPO/Spoluzakladateľ SUDOLABS", 
                        brings: "Budoval produkty pre US klientov, €5M+ tržby. Ukáže, čo sa reálne dodáva — a čo dnes zvládne jeden človek."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategická jasnosť. Framework na rozhodovanie, na čo sa sústrediť a čo ignorovať."
                    }
                ]
            },
            faq: {
                title: "Otázky.",
                items: [
                    { 
                        q: "Potrebujem technické zručnosti?", 
                        a: "Nie. Ak vieš používať prehliadač, zvládneš to." 
                    },
                    { 
                        q: "Čo si mám priniesť?", 
                        a: "Laptop. Internet. To je všetko." 
                    },
                    { 
                        q: "Prečo tak lacno?", 
                        a: "Chceme, aby to bolo dostupné. Najlepší marketing je, keď ľudia povedia kamarátom." 
                    },
                    { 
                        q: "Čo je na tom iné?", 
                        a: "Neučíme zo slajdov. S AI pracujeme denne. Uvidíš reálnu prácu, nie teóriu." 
                    },
                    { 
                        q: "Môžem si to preplatiť?", 
                        a: "Áno. Riadne faktúry. Väčšina firiem schváli €99 bez otázok." 
                    },
                    { 
                        q: "V akom jazyku je session?", 
                        a: "Primárne slovensky. Anglické materiály. Prispôsobíme sa." 
                    },
                    { 
                        q: "Čo ak budem chcieť viac?", 
                        a: "Dobre. Na to sú firemné workshopy. Alebo príď znova." 
                    }
                ]
            },
            logistics: {
                title: "Detaily.",
                items: [
                    { label: "Kde", value: "Bratislava (miesto bude upresnené)" },
                    { label: "Kedy", value: "Február 2025" },
                    { label: "Trvanie", value: "~3 hodiny" },
                    { label: "Veľkosť", value: "Limitované miesta" },
                    { label: "Cena", value: "€99 + DPH" }
                ]
            },
            cta: {
                headline: "Pripravený?",
                description: "Prvá session február 2025. Limitované miesta.",
                button: "Idem Do Toho",
                note: "Chceš toto pre svoj tím?",
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

            {/* Hero */}
            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            {t.hero.label}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[13vw] md:text-[9vw] leading-[0.9] tracking-tighter mb-10"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-inter leading-relaxed text-black/60 max-w-2xl mb-12"
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
                            <span className="text-6xl md:text-7xl font-serif-instrument">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=THE SHIFT - I'm In"
                                className="bg-[#0047BB] text-white px-10 py-5 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all"
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

            {/* Session Structure */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mb-16 text-center">
                        <h2 className="font-serif-instrument text-5xl md:text-6xl italic">
                            {t.session.title}
                        </h2>
                        <p className="font-serif-instrument text-3xl md:text-4xl italic text-[#0047BB] mt-2">
                            {t.session.subtitle}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {t.session.parts.map((part: any, i: number) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "flex flex-col md:flex-row gap-6 p-6 md:p-8 border transition-all",
                                    i === 0 
                                        ? "border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-24 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">{part.num}</span>
                                    <span className="text-[10px] text-black/30">{part.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl md:text-2xl font-serif-instrument italic mb-3">{part.title}</h4>
                                    <p className="text-black/60 leading-relaxed">{part.desc}</p>
                                </div>
                                <div className="md:w-24 shrink-0 md:text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{part.lead}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* What You Leave With */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10 bg-black text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic text-center mb-16">
                        {t.outcome.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.outcome.items.map((item: any, i: number) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-white/10 hover:border-[#0047BB]/50 transition-all"
                            >
                                <h4 className="text-2xl font-serif-instrument italic text-[#0047BB] mb-3">{item.title}</h4>
                                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Who It's For */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-serif-instrument text-3xl md:text-4xl italic mb-8">{t.who.title}</h3>
                            <div className="space-y-4">
                                {t.who.profiles.map((profile: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                        <span className="text-lg text-black/70">{profile}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 border border-black/20 bg-black/5">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600 mb-6">{t.who.not.title}</h3>
                            <div className="space-y-4">
                                {t.who.not.items.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <span className="text-red-500 font-bold mt-0.5">✕</span>
                                        <span className="text-black/60">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Three Minds */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0047BB] text-white border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-4">{t.founders.title}</h2>
                        <p className="text-white/60">{t.founders.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border border-white/20 bg-white/5 space-y-4 hover:bg-white/10 transition-all"
                            >
                                <div>
                                    <h4 className="text-xl font-serif-instrument italic">{card.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mt-1">{card.role}</p>
                                    <p className="text-[10px] text-white/40">{card.company}</p>
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed">{card.brings}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FAQ */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-3xl italic text-center mb-12">{t.faq.title}</h2>
                    <div className="space-y-3">
                        {t.faq.items.map((item: any, i: number) => (
                            <div key={i} className="border border-black/10">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                                >
                                    <span className="font-medium pr-4">{item.q}</span>
                                    <span className={cn("text-[#0047BB] font-bold text-xl transition-transform", faqOpen === i && "rotate-45")}>+</span>
                                </button>
                                <AnimatePresence>
                                    {faqOpen === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-black/60 leading-relaxed">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Logistics */}
            <section className="py-16 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-8 text-center">{t.logistics.title}</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {t.logistics.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">{item.label}</p>
                                <p className="font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif-instrument text-6xl md:text-7xl italic mb-6">{t.cta.headline}</h2>
                        <p className="text-lg text-white/50 mb-10">{t.cta.description}</p>
                        <a
                            href="mailto:hello@sorrywecan.com?subject=THE SHIFT - I'm In"
                            className="bg-[#0047BB] text-white px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-block"
                        >
                            {t.cta.button}
                        </a>
                        <div className="mt-10 flex items-center justify-center gap-3">
                            <span className="text-sm text-white/40">{t.cta.note}</span>
                            <Link 
                                href="/corporate" 
                                className="text-sm font-bold text-[#0047BB] hover:text-white transition-colors"
                            >
                                {t.cta.corporate} →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2025
                </p>
            </footer>
        </div>
    )
}
