"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function HomePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                title: {
                    line1: "One Session.",
                    line2: "New Operating System."
                },
                subline: "What changed. What's possible. What's next."
            },
            trust: {
                label: "Trusted by"
            },
            shift: {
                headline: "Technology is available to everyone. The difference is how you think, decide, and work.",
                stats: [
                    { value: "75%", label: "of knowledge workers already use AI", source: "Microsoft 2024" },
                    { value: "39%", label: "of current skills will change by 2030", source: "WEF 2025" },
                    { value: "1%", label: "of organizations consider themselves AI-mature", source: "McKinsey 2025" }
                ]
            },
            paths: {
                title: "Two Ways In.",
                individual: {
                    label: "For Individuals",
                    name: "THE SHIFT",
                    line1: "40 people. 3 hours.",
                    line2: "Three founders. Three lenses.",
                    line3: "Leave with clarity.",
                    cta: "I'm In"
                },
                team: {
                    label: "For Teams",
                    name: "Corporate Workshop",
                    line1: "Your team. Your challenges.",
                    line2: "Three perspectives on your reality.",
                    line3: "Leave with direction.",
                    cta: "Book Discovery Call"
                }
            },
            cta: {
                headline: "Your Move.",
                subline: "First session: February 26. Limited seats.",
                buttons: {
                    public: "Join THE SHIFT",
                    corporate: "Corporate Workshop"
                }
            }
        },
        sk: {
            hero: {
                title: {
                    line1: "Jedna Session.",
                    line2: "Nový Operačný Systém."
                },
                subline: "Čo sa zmenilo. Čo je možné. Čo ďalej."
            },
            trust: {
                label: "Dôverujú nám"
            },
            shift: {
                headline: "Technológia je dostupná všetkým. Rozdiel robí spôsob myslenia, rozhodovania a práce.",
                stats: [
                    { value: "75%", label: "knowledge workers už používa AI", source: "Microsoft 2024" },
                    { value: "39%", label: "súčasných zručností sa zmení do 2030", source: "WEF 2025" },
                    { value: "1%", label: "organizácií sa považuje za AI-zrelých", source: "McKinsey 2025" }
                ]
            },
            paths: {
                title: "Dva Spôsoby.",
                individual: {
                    label: "Pre Jednotlivcov",
                    name: "THE SHIFT",
                    line1: "40 ľudí. 3 hodiny.",
                    line2: "Traja zakladatelia. Tri pohľady.",
                    line3: "Odíďte s jasnosťou.",
                    cta: "Idem Do Toho"
                },
                team: {
                    label: "Pre Tímy",
                    name: "Firemný Workshop",
                    line1: "Váš tím. Vaše výzvy.",
                    line2: "Tri perspektívy na vašu realitu.",
                    line3: "Odíďte so smerom.",
                    cta: "Rezervovať Discovery Call"
                }
            },
            cta: {
                headline: "Váš Ťah.",
                subline: "Prvá session: 26. február. Limitované miesta.",
                buttons: {
                    public: "Pridať sa na THE SHIFT",
                    corporate: "Firemný Workshop"
                }
            }
        }
    }

    const t = content[lang]

    const partners = [
        { name: "Meta", logo: "/logos/meta.png" },
        { name: "Tatra Banka", logo: "/logos/tatrabanka.jpg" },
        { name: "Raiffeisen", logo: "/logos/raiffeisen.png" },
        { name: "VUB Banka", logo: "/logos/vub.png" },
        { name: "Sennheiser", logo: "/logos/sennheiser.png" },
        { name: "Forbes", logo: "/logos/forbes.png" },
        { name: "Audi", logo: "/logos/audi.svg" }
    ]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20">
            <TopNav customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            } />

            <section className="min-h-[100vh] flex flex-col justify-between px-6 md:px-12 pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="max-w-5xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-bold text-[13vw] md:text-[9vw] leading-[0.9] tracking-tighter"
                    >
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB]">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg md:text-xl leading-relaxed text-black/60"
                    >
                        {t.hero.subline}
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
                    >
                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 shrink-0">
                            {t.trust.label}
                        </span>
                        <div className="flex items-center gap-10 md:gap-12 flex-wrap">
                            {partners.map((partner) => (
                                <div 
                                    key={partner.name}
                                    className="relative h-6 md:h-7 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        height={28}
                                        width={100}
                                        className="h-6 md:h-7 w-auto object-contain"
                                        style={{ maxWidth: '100px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-12 border-t border-black/10">
                <div className="max-w-5xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-xl md:text-2xl font-bold text-black/70 mb-12"
                    >
                        {t.shift.headline}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
                        {t.shift.stats.map((stat: { value: string; label: string; source: string }, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <span className="text-4xl md:text-5xl font-bold text-[#0047BB]">{stat.value}</span>
                                <p className="text-sm text-black/60 mt-2 mb-1">{stat.label}</p>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30">{stat.source}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bold text-4xl md:text-5xl text-center mb-16"
                    >
                        {t.paths.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link 
                                href="/public"
                                className="block h-full p-8 md:p-12 border-2 border-black/10 bg-white hover:border-[#0047BB] transition-all group"
                            >
                                <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.individual.label}
                                </span>
                                <h3 className="font-bold text-4xl md:text-5xl mt-4 mb-8 group-hover:text-[#0047BB] transition-colors">
                                    {t.paths.individual.name}
                                </h3>
                                <div className="space-y-1 text-black/60 mb-8">
                                    <p>{t.paths.individual.line1}</p>
                                    <p>{t.paths.individual.line2}</p>
                                    <p className="font-medium text-black">{t.paths.individual.line3}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-[11px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB] group-hover:gap-4 transition-all">
                                    {t.paths.individual.cta}
                                    <span className="text-lg">→</span>
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Link 
                                href="/corporate"
                                className="block h-full p-8 md:p-12 border-2 border-black/10 bg-white hover:border-[#0047BB] transition-all group"
                            >
                                <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.team.label}
                                </span>
                                <h3 className="font-bold text-4xl md:text-5xl mt-4 mb-8 group-hover:text-[#0047BB] transition-colors">
                                    {t.paths.team.name}
                                </h3>
                                <div className="space-y-1 text-black/60 mb-8">
                                    <p>{t.paths.team.line1}</p>
                                    <p>{t.paths.team.line2}</p>
                                    <p className="font-medium text-black">{t.paths.team.line3}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-[11px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB] group-hover:gap-4 transition-all">
                                    {t.paths.team.cta}
                                    <span className="text-lg">→</span>
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-black text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto px-6"
                >
                    <h2 className="font-bold text-5xl md:text-6xl mb-4">
                        {t.cta.headline}
                    </h2>
                    <p className="text-lg text-white/50 mb-10">
                        {t.cta.subline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/public"
                            className="bg-[#0047BB] text-white px-10 py-5 font-code-brand font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                        >
                            {t.cta.buttons.public}
                        </Link>
                        <Link
                            href="/corporate"
                            className="border-2 border-white text-white px-10 py-5 font-code-brand font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                        >
                            {t.cta.buttons.corporate}
                        </Link>
                    </div>
                </motion.div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
