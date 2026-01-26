"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function FounderCard({ name, role, company, brings }: any) {
    return (
        <div className="p-6 border border-white/20 bg-white/5 space-y-4 hover:bg-white/10 transition-all">
            <div>
                <h4 className="text-xl font-serif-instrument italic">{name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-1">{role}</p>
                <p className="text-[10px] text-white/40">{company}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{brings}</p>
        </div>
    )
}

export default function HomePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                subtitle: "Navigation / Thinking / Tools / Automation / Imagination",
                title: {
                    line1: "One Session.",
                    line2: "New Operating System."
                },
                description: "We teach professionals and teams to work with AI — not just use it. Practical skills. Real transformation. Leave with something working."
            },
            paths: {
                title: "Two Ways In.",
                public: {
                    label: "For Individuals",
                    title: "Public Sessions",
                    price: "99",
                    duration: "3 hours",
                    description: "Join professionals from different companies. Learn the fundamentals. Build your first automation. Discuss what matters to your field.",
                    features: [
                        "Mixed group, diverse perspectives",
                        "Framework + hands-on + discussion",
                        "Leave with working tools",
                        "Monthly sessions in Bratislava"
                    ],
                    cta: "View Public Sessions"
                },
                corporate: {
                    label: "For Teams",
                    title: "Corporate Workshop",
                    price: "6,900",
                    duration: "4-5 hours",
                    description: "Your team, your workflows, your problems. We listen first, then transform how you work. Deep dive into what actually matters.",
                    features: [
                        "10-15 people, single company",
                        "Customized to your workflows",
                        "Full AI stack setup",
                        "30-day action plan + follow-up"
                    ],
                    cta: "Book Discovery Call"
                }
            },
            pillars: {
                title: "Five Pillars. One Transformation.",
                items: [
                    { title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                    { title: "Thinking", desc: "How to frame problems. Mental models that work." },
                    { title: "Tools", desc: "What to use. Practical stack for your reality." },
                    { title: "Automation", desc: "What to build. Workflows that run themselves." },
                    { title: "Imagination", desc: "What's possible. Expanding the boundaries." }
                ]
            },
            founders: {
                title: "Three Minds",
                description: "Not consultants. Practitioners who built what they teach.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "SORRYWECAN", 
                        brings: "Imagination, visual thinking, possibility. How to see what others can't."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "The Architect", 
                        company: "SUDOLABS", 
                        brings: "Systems, automation, scale. How to build things that run themselves."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Clarity, strategy, direction. How to navigate complexity."
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
            cta: {
                headline: "Ready?",
                description: "Start with a public session. Or bring us to your team.",
                buttons: {
                    public: "Join Public Session",
                    corporate: "Book Corporate Workshop"
                }
            }
        },
        sk: {
            hero: {
                subtitle: "Navigácia / Myslenie / Nástroje / Automatizácia / Imaginácia",
                title: {
                    line1: "Jedna Session.",
                    line2: "Nový Operačný Systém."
                },
                description: "Učíme profesionálov a tímy pracovať s AI — nielen ju používať. Praktické zručnosti. Skutočná transformácia. Odíďte s niečím fungujúcim."
            },
            paths: {
                title: "Dva Spôsoby.",
                public: {
                    label: "Pre Jednotlivcov",
                    title: "Verejné Sessions",
                    price: "99",
                    duration: "3 hodiny",
                    description: "Pripojte sa k profesionálom z rôznych firiem. Naučte sa základy. Postavte prvú automatizáciu. Diskutujte o tom, čo je dôležité pre váš odbor.",
                    features: [
                        "Zmiešaná skupina, rôzne perspektívy",
                        "Framework + hands-on + diskusia",
                        "Odíďte s fungujúcimi nástrojmi",
                        "Mesačné sessions v Bratislave"
                    ],
                    cta: "Zobraziť Verejné Sessions"
                },
                corporate: {
                    label: "Pre Tímy",
                    title: "Firemný Workshop",
                    price: "6 900",
                    duration: "4-5 hodín",
                    description: "Váš tím, vaše workflow, vaše problémy. Najprv počúvame, potom transformujeme, ako pracujete. Hlboký ponor do toho, na čom skutočne záleží.",
                    features: [
                        "10-15 ľudí, jedna firma",
                        "Prispôsobené vašim workflow",
                        "Kompletný AI stack setup",
                        "30-dňový akčný plán + follow-up"
                    ],
                    cta: "Rezervovať Discovery Call"
                }
            },
            pillars: {
                title: "Päť Pilierov. Jedna Transformácia.",
                items: [
                    { title: "Navigácia", desc: "Kam ísť. Strategická jasnosť v šume." },
                    { title: "Myslenie", desc: "Ako formulovať problémy. Mentálne modely, ktoré fungujú." },
                    { title: "Nástroje", desc: "Čo použiť. Praktický stack pre vašu realitu." },
                    { title: "Automatizácia", desc: "Čo postaviť. Workflow, ktoré bežia samy." },
                    { title: "Imaginácia", desc: "Čo je možné. Posúvanie hraníc." }
                ]
            },
            founders: {
                title: "Tri Mysle",
                description: "Nie konzultanti. Praktici, ktorí postavili to, čo učia.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "SORRYWECAN", 
                        brings: "Imaginácia, vizuálne myslenie, možnosti. Ako vidieť, čo ostatní nevidia."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "Architekt", 
                        company: "SUDOLABS", 
                        brings: "Systémy, automatizácia, škála. Ako budovať veci, ktoré bežia samy."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Jasnosť, stratégia, smer. Ako navigovať komplexitu."
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
            cta: {
                headline: "Pripravení?",
                description: "Začnite verejnou session. Alebo nás pozvite k vášmu tímu.",
                buttons: {
                    public: "Pridať sa na Verejnú Session",
                    corporate: "Rezervovať Firemný Workshop"
                }
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
            <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0047BB]">
                            {t.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[14vw] md:text-[10vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl font-inter leading-relaxed text-black/60 max-w-2xl"
                    >
                        {t.hero.description}
                    </motion.p>
                </div>
            </section>

            {/* Two Paths */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif-instrument text-4xl md:text-5xl italic text-center mb-16"
                    >
                        {t.paths.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Public */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-2 border-black/10 bg-white p-8 md:p-10 space-y-6 hover:border-[#0047BB]/30 transition-all"
                        >
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.public.label}
                                </span>
                                <h3 className="font-serif-instrument text-3xl md:text-4xl italic mt-2">
                                    {t.paths.public.title}
                                </h3>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-serif-instrument">{t.paths.public.price}</span>
                                <span className="text-xl opacity-40">EUR</span>
                                <span className="text-sm text-black/40 ml-4">{t.paths.public.duration}</span>
                            </div>

                            <p className="text-black/60 leading-relaxed">
                                {t.paths.public.description}
                            </p>

                            <div className="space-y-3 pt-4">
                                {t.paths.public.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                        <span className="text-sm text-black/70">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/public"
                                className="bg-[#0047BB] text-white px-8 py-4 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all inline-block mt-4"
                            >
                                {t.paths.public.cta}
                            </Link>
                        </motion.div>

                        {/* Corporate */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="border-2 border-[#0047BB] bg-[#0047BB]/5 p-8 md:p-10 space-y-6"
                        >
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.corporate.label}
                                </span>
                                <h3 className="font-serif-instrument text-3xl md:text-4xl italic mt-2">
                                    {t.paths.corporate.title}
                                </h3>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-serif-instrument">{t.paths.corporate.price}</span>
                                <span className="text-xl opacity-40">EUR</span>
                                <span className="text-sm text-black/40 ml-4">{t.paths.corporate.duration}</span>
                            </div>

                            <p className="text-black/60 leading-relaxed">
                                {t.paths.corporate.description}
                            </p>

                            <div className="space-y-3 pt-4">
                                {t.paths.corporate.features.map((feature: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                        <span className="text-sm text-black/70">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/corporate"
                                className="bg-black text-white px-8 py-4 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-[#0047BB] transition-all inline-block mt-4"
                            >
                                {t.paths.corporate.cta}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Five Pillars */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="font-serif-instrument text-3xl md:text-4xl italic text-center mb-12">
                        {t.pillars.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {t.pillars.items.map((pillar: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "p-6 border text-center space-y-4 transition-all hover:border-[#0047BB]",
                                    i === 2 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white"
                                )}
                            >
                                <span className="text-[10px] font-bold tracking-[0.3em] text-[#0047BB]">[0{i + 1}]</span>
                                <h4 className="text-lg font-bold">{pillar.title}</h4>
                                <p className="text-xs text-black/50 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Founders */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto space-y-12"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-4">{t.founders.title}</h2>
                        <p className="text-white/50">{t.founders.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <FounderCard key={i} {...card} />
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Proof Stats */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-b border-black/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.proof.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center p-8 border border-black/10 bg-white">
                                <span className="text-5xl md:text-6xl font-serif-instrument text-[#0047BB]">{stat.value}</span>
                                <p className="text-sm text-black/50 mt-3">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#0047BB] text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-serif-instrument text-6xl md:text-7xl italic mb-6">{t.cta.headline}</h2>
                    <p className="text-lg opacity-70 mb-10">{t.cta.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/public"
                            className="bg-white text-[#0047BB] px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                        >
                            {t.cta.buttons.public}
                        </Link>
                        <Link
                            href="/corporate"
                            className="border-2 border-white text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0047BB] transition-all"
                        >
                            {t.cta.buttons.corporate}
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
