"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

export default function HomePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                eyebrow: "The world shifted. Most haven't noticed.",
                title: {
                    line1: "One Session.",
                    line2: "New Operating System."
                }
            },
            trust: {
                label: "Trusted by"
            },
            paths: {
                title: "Two Ways In.",
                individual: {
                    label: "For Individuals",
                    name: "THE SHIFT",
                    line1: "40 people. 3 hours.",
                    line2: "See what's possible.",
                    line3: "Leave different.",
                    cta: "I'm ready"
                },
                team: {
                    label: "For Teams",
                    name: "Corporate Workshop",
                    line1: "Your team. Your challenges.",
                    line2: "We facilitate.",
                    line3: "You transform.",
                    cta: "Book a call"
                }
            },
            cta: {
                headline: "Ready?",
                subline: "First session: February 26. Limited seats.",
                buttons: {
                    public: "Join THE SHIFT",
                    corporate: "Book Corporate"
                }
            }
        },
        sk: {
            hero: {
                eyebrow: "Svet sa zmenil. Väčšina si to nevšimla.",
                title: {
                    line1: "Jedna Session.",
                    line2: "Nový Operačný Systém."
                }
            },
            trust: {
                label: "Dôverujú nám"
            },
            paths: {
                title: "Dva Spôsoby.",
                individual: {
                    label: "Pre Jednotlivcov",
                    name: "THE SHIFT",
                    line1: "40 ľudí. 3 hodiny.",
                    line2: "Pozri, čo je možné.",
                    line3: "Odíď iný.",
                    cta: "Idem do toho"
                },
                team: {
                    label: "Pre Tímy",
                    name: "Firemný Workshop",
                    line1: "Váš tím. Vaše výzvy.",
                    line2: "My facilitujeme.",
                    line3: "Vy transformujete.",
                    cta: "Rezervovať hovor"
                }
            },
            cta: {
                headline: "Pripravení?",
                subline: "Prvá session: 26. február. Limitované miesta.",
                buttons: {
                    public: "Pridať sa na THE SHIFT",
                    corporate: "Rezervovať Corporate"
                }
            }
        }
    }

    const t = content[lang]

    const partners = [
        { name: "EYERIM", highlight: true },
        { name: "SUDOLABS", highlight: false },
        { name: "SORRYWECAN", highlight: false }
    ]

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
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm md:text-base text-black/50 mb-6 max-w-md"
                    >
                        {t.hero.eyebrow}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[15vw] md:text-[11vw] leading-[0.85] tracking-tighter"
                    >
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 flex items-center gap-8"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                            {t.trust.label}
                        </span>
                        <div className="flex items-center gap-6">
                            {partners.map((partner) => (
                                <span 
                                    key={partner.name}
                                    className={cn(
                                        "text-sm font-bold tracking-wide",
                                        partner.highlight ? "text-[#0047BB]" : "text-black/30"
                                    )}
                                >
                                    {partner.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif-instrument text-4xl md:text-5xl italic text-center mb-16"
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
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.individual.label}
                                </span>
                                <h3 className="font-serif-instrument text-4xl md:text-5xl italic mt-4 mb-8 group-hover:text-[#0047BB] transition-colors">
                                    {t.paths.individual.name}
                                </h3>
                                <div className="space-y-1 text-black/60 mb-8">
                                    <p>{t.paths.individual.line1}</p>
                                    <p>{t.paths.individual.line2}</p>
                                    <p className="font-medium text-black">{t.paths.individual.line3}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0047BB] group-hover:gap-4 transition-all">
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
                                className="block h-full p-8 md:p-12 border-2 border-[#0047BB] bg-[#0047BB]/5 hover:bg-[#0047BB]/10 transition-all group"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                    {t.paths.team.label}
                                </span>
                                <h3 className="font-serif-instrument text-4xl md:text-5xl italic mt-4 mb-8 group-hover:text-[#0047BB] transition-colors">
                                    {t.paths.team.name}
                                </h3>
                                <div className="space-y-1 text-black/60 mb-8">
                                    <p>{t.paths.team.line1}</p>
                                    <p>{t.paths.team.line2}</p>
                                    <p className="font-medium text-black">{t.paths.team.line3}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0047BB] group-hover:gap-4 transition-all">
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
                    <h2 className="font-serif-instrument text-6xl md:text-7xl italic mb-4">
                        {t.cta.headline}
                    </h2>
                    <p className="text-lg text-white/50 mb-10">
                        {t.cta.subline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/public"
                            className="bg-[#0047BB] text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            {t.cta.buttons.public}
                        </Link>
                        <Link
                            href="/corporate"
                            className="border-2 border-white text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            {t.cta.buttons.corporate}
                        </Link>
                    </div>
                </motion.div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
