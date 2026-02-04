"use client"

import React, { useState } from "react"

export default function PublicOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "One Session.", line2: "New Operating System." },
                subline: "What changed. What's possible. What's next."
            },
            stats: {
                items: [
                    { value: "40%", label: "jobs exposed to AI" },
                    { value: "22%", label: "changing by 2030" },
                    { value: "41%", label: "reducing workforce" },
                    { value: "1%", label: "ready" }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Faster output.", subline: "Less certainty." },
                    { headline: "Generation easy.", subline: "Taste hard." },
                    { headline: "New tools.", subline: "Old habits." },
                    { headline: "Know where.", subline: "Not how." }
                ]
            },
            session: {
                title: "Taste. Leverage. Clarity.",
                parts: [
                    { title: "Taste", time: "50m", lead: "Roland" },
                    { title: "Leverage", time: "50m", lead: "Ján" },
                    { title: "Clarity", time: "40m", lead: "Roman" },
                    { title: "Q&A", time: "40m", lead: "All" }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: ["Clarity in Action", "Your Edge", "Reactive → Intentional", "Less Noise", "Frameworks That Travel"]
            },
            founders: {
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "SORRYWECAN" },
                    { name: "Ján Koscelanský", role: "The Architect", company: "SUDOLABS" },
                    { name: "Roman Pii Wagner", role: "The Navigator", company: "Transformational Design" }
                ]
            },
            details: {
                where: { label: "Where", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                when: { label: "When", value: "Feb 26, 2026", sub: "Wednesday 17:30" },
                duration: { label: "Duration", value: "3 hours" },
                price: { label: "Price", value: "from €99" }
            },
            cta: "andrea@sorrywecan.com"
        },
        sk: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "Jedna Session.", line2: "Nový Operačný Systém." },
                subline: "Čo sa zmenilo. Čo je možné. Čo ďalej."
            },
            stats: {
                items: [
                    { value: "40%", label: "pozícií vystavených AI" },
                    { value: "22%", label: "sa zmení do 2030" },
                    { value: "41%", label: "firiem redukuje" },
                    { value: "1%", label: "pripravených" }
                ]
            },
            problem: {
                title: "Znie Povedome?",
                cards: [
                    { headline: "Rýchlejší výstup.", subline: "Menšia istota." },
                    { headline: "Generovať ľahké.", subline: "Vkus ťažký." },
                    { headline: "Nové nástroje.", subline: "Staré návyky." },
                    { headline: "Viete kam.", subline: "Nie ako." }
                ]
            },
            session: {
                title: "Vkus. Páka. Jasnosť.",
                parts: [
                    { title: "Vkus", time: "50m", lead: "Roland" },
                    { title: "Páka", time: "50m", lead: "Ján" },
                    { title: "Jasnosť", time: "40m", lead: "Roman" },
                    { title: "Q&A", time: "40m", lead: "Všetci" }
                ]
            },
            outcome: {
                title: "Odídete S",
                items: ["Jasnosť v Praxi", "Vaša Výhoda", "Reaktívne → Vedomé", "Menej Šumu", "Frameworky"]
            },
            founders: {
                cards: [
                    { name: "Roland Vraník", role: "Kreatívec", company: "SORRYWECAN" },
                    { name: "Ján Koscelanský", role: "Architekt", company: "SUDOLABS" },
                    { name: "Roman Pii Wagner", role: "Navigátor", company: "Transformational Design" }
                ]
            },
            details: {
                where: { label: "Kde", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                when: { label: "Kedy", value: "26. feb 2026", sub: "Streda 17:30" },
                duration: { label: "Trvanie", value: "3 hodiny" },
                price: { label: "Cena", value: "od €99" }
            },
            cta: "andrea@sorrywecan.com"
        }
    }

    const t = content[lang]

    return (
        <>
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4 landscape;
                        margin: 0;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>
            
            <div className="w-[297mm] h-[210mm] mx-auto bg-white text-[#0a0a0a] font-mono overflow-hidden relative print:shadow-none shadow-2xl">
                {/* Language Toggle - hidden on print */}
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="absolute top-3 right-3 text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-black/5 hover:bg-black/10 transition-colors print:hidden z-10"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>

                <div className="h-full grid grid-cols-12 grid-rows-6 gap-0">
                    
                    {/* Hero - Top Left */}
                    <div className="col-span-5 row-span-2 p-6 flex flex-col justify-center border-r border-b border-black/10">
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-2">{t.hero.label}</p>
                        <h1 className="font-serif text-[28px] leading-[1] tracking-tight">
                            {t.hero.title.line1}<br />
                            <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                        </h1>
                        <p className="text-[11px] text-black/50 mt-3">{t.hero.subline}</p>
                    </div>

                    {/* Stats - Top Right */}
                    <div className="col-span-7 row-span-2 p-6 bg-black/[0.02] border-b border-black/10 flex flex-col justify-center">
                        <div className="grid grid-cols-4 gap-4">
                            {t.stats.items.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[24px] font-serif text-[#0047BB]">{stat.value}</span>
                                    <p className="text-[8px] text-black/50 mt-1 leading-tight">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Problem - Middle Left */}
                    <div className="col-span-4 row-span-2 p-4 border-r border-b border-black/10">
                        <p className="text-[10px] font-serif italic text-center mb-3">{t.problem.title}</p>
                        <div className="grid grid-cols-2 gap-2">
                            {t.problem.cards.map((card, i) => (
                                <div key={i} className="p-2 border border-black/10 bg-white">
                                    <p className="text-[9px] font-medium leading-tight">{card.headline}</p>
                                    <p className="text-[8px] text-black/40 leading-tight">{card.subline}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Session - Middle Center */}
                    <div className="col-span-4 row-span-2 p-4 border-r border-b border-black/10">
                        <p className="text-[12px] font-serif italic text-center mb-1">{t.session.title}</p>
                        <p className="text-[8px] text-[#0047BB] text-center mb-3">3h • 3 founders • 1 shift</p>
                        <div className="space-y-1">
                            {t.session.parts.map((part, i) => (
                                <div key={i} className={`flex items-center justify-between p-1.5 text-[9px] ${i === 0 ? 'bg-[#0047BB]/10 border border-[#0047BB]/30' : 'border border-black/10'}`}>
                                    <span className="font-medium">{part.title}</span>
                                    <span className="text-black/40">{part.time} • {part.lead}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Outcomes - Middle Right */}
                    <div className="col-span-4 row-span-2 p-4 bg-[#0047BB] text-white border-b border-black/10">
                        <p className="text-[10px] font-serif italic text-center mb-3">{t.outcome.title}</p>
                        <div className="space-y-1.5">
                            {t.outcome.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-[9px]">
                                    <span className="w-1 h-1 bg-white/50 rounded-full shrink-0"></span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Founders - Bottom Left */}
                    <div className="col-span-6 row-span-2 p-4 border-r border-black/10">
                        <div className="grid grid-cols-3 gap-4 h-full">
                            {t.founders.cards.map((card, i) => (
                                <div key={i} className="flex flex-col justify-center text-center">
                                    <p className="text-[11px] font-serif italic">{card.name}</p>
                                    <p className="text-[7px] font-bold uppercase tracking-widest text-[#0047BB] mt-0.5">{card.role}</p>
                                    <p className="text-[7px] text-black/40">{card.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details + CTA - Bottom Right */}
                    <div className="col-span-6 row-span-2 p-4 bg-black text-white flex flex-col justify-between">
                        <div className="grid grid-cols-4 gap-2 text-center">
                            <div>
                                <p className="text-[7px] uppercase tracking-widest text-white/40">{t.details.where.label}</p>
                                <p className="text-[9px] font-medium mt-0.5">{t.details.where.value}</p>
                                <p className="text-[7px] text-white/50">{t.details.where.sub}</p>
                            </div>
                            <div>
                                <p className="text-[7px] uppercase tracking-widest text-white/40">{t.details.when.label}</p>
                                <p className="text-[9px] font-medium mt-0.5">{t.details.when.value}</p>
                                <p className="text-[7px] text-white/50">{t.details.when.sub}</p>
                            </div>
                            <div>
                                <p className="text-[7px] uppercase tracking-widest text-white/40">{t.details.duration.label}</p>
                                <p className="text-[9px] font-medium mt-0.5">{t.details.duration.value}</p>
                            </div>
                            <div>
                                <p className="text-[7px] uppercase tracking-widest text-white/40">{t.details.price.label}</p>
                                <p className="text-[9px] font-medium mt-0.5">{t.details.price.value}</p>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-[18px] font-serif italic">Ready?</p>
                            <p className="text-[9px] text-white/60 mt-1">{t.cta}</p>
                        </div>
                        <p className="text-[6px] uppercase tracking-[0.2em] text-white/30 text-center">
                            SORRYWECAN // RESEARCH LAB // 2026
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
