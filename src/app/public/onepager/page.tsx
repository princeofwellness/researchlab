"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PublicOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                title: { line1: "One Session.", line2: "New Operating System." },
                subline: "What changed. What's possible. What's next."
            },
            stats: {
                headline: "Technology is available to everyone. The difference is how you think, decide, and work.",
                items: [
                    { value: "40%", label: "of jobs exposed to AI", source: "IMF" },
                    { value: "22%", label: "changing by 2030", source: "WEF" },
                    { value: "41%", label: "reducing workforce", source: "McKinsey" },
                    { value: "1%", label: "consider themselves ready", source: "McKinsey" }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Faster output.", subline: "Less certainty in what's good." },
                    { headline: "Generation is easy.", subline: "Taste is the hard part." },
                    { headline: "You have the tools.", subline: "Your habits haven't caught up." },
                    { headline: "You know where to go.", subline: "Daily practice is still fog." }
                ]
            },
            session: {
                title: "Taste. Leverage. Clarity.",
                subtitle: "3 hours. 3 founders. 1 shift.",
                parts: [
                    { title: "Taste", time: "50 min", lead: "Roland", desc: "What separates good from unforgettable." },
                    { title: "Leverage", time: "50 min", lead: "Ján", desc: "What one person can build now." },
                    { title: "Clarity", time: "40 min", lead: "Roman", desc: "How to decide when everything moves." },
                    { title: "Q&A", time: "40 min", lead: "All", desc: "Your questions. Honest answers." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Clarity in Action", desc: "A clearer way of working when AI is everywhere." },
                    { title: "Your Edge", desc: "Quality and identity — even when everyone has the same tools." },
                    { title: "From Reactive to Intentional", desc: "Consciously designed operation, not random use." },
                    { title: "Less Noise", desc: "Lower mental load. No more AI FOMO." },
                    { title: "Frameworks That Travel", desc: "Mental models across projects and roles." }
                ]
            },
            founders: {
                title: "Three Founders",
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "SORRYWECAN", focus: "Taste & possibility" },
                    { name: "Ján Koscelanský", role: "The Architect", company: "SUDOLABS", focus: "What actually ships" },
                    { name: "Roman Pii Wagner", role: "The Navigator", company: "Transformational Design", focus: "Decisions that stick" }
                ]
            },
            details: {
                items: [
                    { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                    { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
                    { label: "Duration", value: "3 hours", subvalue: "17:30 — 20:30" },
                    { label: "Price", value: "from €99", subvalue: "per person" }
                ]
            },
            cta: {
                headline: "Ready?",
                subline: "40 seats. First session February 26.",
                button: "I'm In",
                email: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                title: { line1: "Jedna Session.", line2: "Nový Operačný Systém." },
                subline: "Čo sa zmenilo. Čo je možné. Čo ďalej."
            },
            stats: {
                headline: "Technológia je dostupná všetkým. Rozdiel robí spôsob myslenia, rozhodovania a práce.",
                items: [
                    { value: "40%", label: "pozícií vystavených AI", source: "IMF" },
                    { value: "22%", label: "sa zmení do 2030", source: "WEF" },
                    { value: "41%", label: "firiem redukuje", source: "McKinsey" },
                    { value: "1%", label: "sa považuje za pripravených", source: "McKinsey" }
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
            session: {
                title: "Vkus. Páka. Jasnosť.",
                subtitle: "3 hodiny. 3 zakladatelia. 1 posun.",
                parts: [
                    { title: "Vkus", time: "50 min", lead: "Roland", desc: "Čo odlišuje dobré od nezabudnuteľného." },
                    { title: "Páka", time: "50 min", lead: "Ján", desc: "Čo jeden človek dokáže postaviť dnes." },
                    { title: "Jasnosť", time: "40 min", lead: "Roman", desc: "Ako sa rozhodovať, keď sa všetko hýbe." },
                    { title: "Q&A", time: "40 min", lead: "Všetci", desc: "Vaše otázky. Úprimné odpovede." }
                ]
            },
            outcome: {
                title: "Odídete S",
                items: [
                    { title: "Jasnosť v Praxi", desc: "Jasnejší spôsob práce, keď je AI všade." },
                    { title: "Vaša Výhoda", desc: "Kvalita a identita — aj keď má každý tie isté nástroje." },
                    { title: "Od Reaktívneho k Vedomému", desc: "Vedome navrhnuté fungovanie, nie náhodné použitie." },
                    { title: "Menej Šumu", desc: "Nižšia mentálna záťaž. Koniec AI FOMO." },
                    { title: "Frameworky, Čo Cestujú", desc: "Mentálne modely naprieč projektmi a rolami." }
                ]
            },
            founders: {
                title: "Traja Zakladatelia",
                cards: [
                    { name: "Roland Vraník", role: "Kreatívec", company: "SORRYWECAN", focus: "Vkus & možnosti" },
                    { name: "Ján Koscelanský", role: "Architekt", company: "SUDOLABS", focus: "Čo sa reálne dodáva" },
                    { name: "Roman Pii Wagner", role: "Navigátor", company: "Transformational Design", focus: "Rozhodnutia, čo držia" }
                ]
            },
            details: {
                items: [
                    { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                    { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
                    { label: "Trvanie", value: "3 hodiny", subvalue: "17:30 — 20:30" },
                    { label: "Cena", value: "od €99", subvalue: "na osobu" }
                ]
            },
            cta: {
                headline: "Pripravený?",
                subline: "40 miest. Prvá session 26. februára.",
                button: "Idem Do Toho",
                email: "andrea@sorrywecan.com"
            }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono">
            {/* Language Toggle */}
            <div className="fixed top-4 right-4 z-50">
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-black/5 hover:bg-black/10 transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            </div>

            {/* Hero */}
            <section className="pt-16 pb-12 px-6 md:px-12 text-center border-b border-black/10">
                <div className="max-w-3xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-4">
                        THE SHIFT
                    </p>
                    <h1 className="font-serif-instrument text-5xl md:text-7xl tracking-tight leading-[0.95]">
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-black/60">
                        {t.hero.subline}
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 px-6 md:px-12 bg-black/5 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-sm md:text-base text-black/60 mb-8">
                        {t.stats.headline}
                    </p>
                    <div className="grid grid-cols-4 gap-4">
                        {t.stats.items.map((stat, i) => (
                            <div key={i} className="text-center">
                                <span className="text-2xl md:text-3xl font-serif-instrument text-[#0047BB]">{stat.value}</span>
                                <p className="text-[10px] text-black/50 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="py-10 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif-instrument text-2xl italic text-center mb-6">
                        {t.problem.title}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {t.problem.cards.map((card, i) => (
                            <div key={i} className="p-4 border border-black/10">
                                <p className="font-medium text-sm">{card.headline}</p>
                                <p className="text-sm text-black/40">{card.subline}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Session */}
            <section className="py-10 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="font-serif-instrument text-3xl md:text-4xl italic">{t.session.title}</h2>
                        <p className="text-sm text-[#0047BB] mt-1">{t.session.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {t.session.parts.map((part, i) => (
                            <div key={i} className={`p-4 border ${i === 0 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">{part.time}</p>
                                <p className="font-serif-instrument text-xl italic mt-1">{part.title}</p>
                                <p className="text-xs text-black/50 mt-2">{part.desc}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{part.lead}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-10 px-6 md:px-12 bg-[#0047BB] text-white border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif-instrument text-2xl italic text-center mb-6">{t.outcome.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {t.outcome.items.map((item, i) => (
                            <div key={i} className="p-3 border border-white/20">
                                <p className="font-medium text-sm">{item.title}</p>
                                <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders */}
            <section className="py-10 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif-instrument text-2xl italic text-center mb-6">{t.founders.title}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {t.founders.cards.map((card, i) => (
                            <div key={i} className="text-center">
                                <p className="font-serif-instrument text-lg italic">{card.name}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-1">{card.role}</p>
                                <p className="text-[10px] text-black/40">{card.company}</p>
                                <p className="text-xs text-black/60 mt-2">{card.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="py-8 px-6 md:px-12 bg-black/5 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        {t.details.items.map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">{item.label}</p>
                                <p className="font-medium text-sm mt-1">{item.value}</p>
                                <p className="text-xs text-black/50">{item.subvalue}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-6 md:px-12 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-2">{t.cta.headline}</h2>
                    <p className="text-white/50 mb-6">{t.cta.subline}</p>
                    <a
                        href={`mailto:${t.cta.email}?subject=THE SHIFT - I'm In`}
                        className="inline-block bg-[#0047BB] text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                        {t.cta.button}
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
