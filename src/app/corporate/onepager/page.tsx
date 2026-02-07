"use client"

import React, { useState } from "react"

export default function CorporateOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "CORPORATE WORKSHOP",
                title: { line1: "Your Team.", line2: "New Operating System." },
                subline: "Three founders. Three lenses. Your challenges.",
                desc: "We don't present — we think together, live, on the problems keeping you stuck."
            },
            stats: {
                headline: "Technology is available to everyone.",
                subline: "The difference is how you think, decide, and work.",
                items: [
                    { value: "300M", label: "jobs automatable worldwide", source: "Goldman Sachs" },
                    { value: "16%", label: "employment drop, workers aged 22–25 in AI-exposed roles", source: "Stanford / ADP 2025" },
                    { value: "2.5×", label: "revenue growth in AI-led companies vs. laggards", source: "Accenture 2025" },
                    { value: "1%", label: "of organizations consider themselves AI-ready", source: "McKinsey 2025" },
                    { value: "3×", label: "faster than any technology shift before", source: "World Bank" }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Your team prompts.", subline: "Without strategy." },
                    { headline: "Output looks generic.", subline: "Like everyone else's." },
                    { headline: "Tools multiply.", subline: "Clarity doesn't." },
                    { headline: "Speed went up.", subline: "Quality went sideways." },
                    { headline: "Everyone has AI.", subline: "Few know how to use it." },
                    { headline: "You need alignment.", subline: "You get endless debates." }
                ]
            },
            session: {
                title: "Three Lenses. One Session.",
                subtitle: "We think together. You leave clear.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "All", desc: "The world changed. Here's what we're seeing — in your industry, in creative work, in what's possible now." },
                    { num: "02", title: "Frameworks", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Taste: decades of experience in creativity and technology — the difference is curation and the eye for detail. Leverage: workflows, automations, and real demos — what to build, what to skip. Clarity: what stays human and what to delegate — a decision framework you'll actually use." },
                    { num: "03", title: "Your Reality", time: "90-120 min", lead: "Facilitated", desc: "Your challenges. Three perspectives. Live. This is where insights happen that prevent six-figure mistakes." },
                    { num: "04", title: "The Clarity", time: "30 min", lead: "All", desc: "Each of us shares what we saw. What to prioritize. What to ignore. You leave knowing what to do." }
                ]
            },
            founders: {
                title: "Three Founders.",
                subtitle: "Successful companies. Portfolio and clients worldwide. They think together on your problems.",
                cards: [
                    { name: "Roland Vraník", role: "TASTE", company: "Creative Director / Founder, SORRYWECAN", tagline: "Everyone has the same tools. The difference is taste, curation, and the eye for detail.", bio: "Director and creative lead with decades of experience connecting aesthetics with technology, exploring new forms of visual storytelling." },
                    { name: "Ján Koscelanský", role: "LEVERAGE", company: "CPO / Co-founder, SUDOLABS", tagline: "What one person can do today. What to build, what to skip, and how to design products that work.", bio: "Product leader with years of experience designing and scaling digital products, teams and processes." },
                    { name: "Roman Pii Wagner", role: "CLARITY", company: "Transformational Design", tagline: "What stays human and what to delegate. A decision framework you'll actually use.", bio: "Works in transformational design, strategic thinking and complex organizational change." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "The Wake-Up", desc: "Your team sees what 99% don't. The shift that's already here." },
                    { title: "The Edge", desc: "Opportunities your competitors will miss. You won't." },
                    { title: "Debates → Decisions", desc: "Same language. Same priorities. The endless loops end." },
                    { title: "Mistakes Avoided", desc: "Three lenses catch what one can't. Costly wrong turns — prevented." },
                    { title: "It Sticks", desc: "30-day follow-up. Toolkit that evolves. Not another workshop you forget." }
                ]
            },
            details: {
                title: "Details",
                items: [
                    { label: "Duration", value: "4-5 hours", sub: "Half day" },
                    { label: "Team Size", value: "10-15 people", sub: "Leadership / key team" },
                    { label: "Location", value: "We come to you", sub: "Your office" },
                    { label: "Follow-up", value: "30 days", sub: "Included" }
                ]
            },
            cta: {
                headline: "Ready?",
                subline: "20-minute discovery call. No commitment.",
                button: "Book Discovery Call"
            }
        },
        sk: {
            hero: {
                label: "FIREMNÝ WORKSHOP",
                title: { line1: "Váš Tím.", line2: "Nový Operačný Systém." },
                subline: "Traja zakladatelia. Tri pohľady. Vaše výzvy.",
                desc: "Neprezentujeme — myslíme spolu, naživo, nad problémami, ktoré vás brzdia."
            },
            stats: {
                headline: "Technológia je dostupná všetkým.",
                subline: "Rozdiel robí spôsob myslenia, rozhodovania a práce.",
                items: [
                    { value: "300M", label: "automatizovateľných pracovných miest na svete", source: "Goldman Sachs" },
                    { value: "16%", label: "pokles zamestnanosti, pracovníci 22–25 rokov v AI-exponovaných pozíciách", source: "Stanford / ADP 2025" },
                    { value: "2.5×", label: "rast tržieb firiem s AI vs. ostatní", source: "Accenture 2025" },
                    { value: "1%", label: "organizácií považuje svoje využívanie AI za zrelé", source: "McKinsey 2025" },
                    { value: "3×", label: "rýchlejšie než akýkoľvek technologický posun predtým", source: "World Bank" }
                ]
            },
            problem: {
                title: "Znie Povedome?",
                cards: [
                    { headline: "Váš tím promptuje.", subline: "Bez stratégie." },
                    { headline: "Výstup je generický.", subline: "Ako u všetkých ostatných." },
                    { headline: "Nástroje pribúdajú.", subline: "Jasnosť nie." },
                    { headline: "Rýchlosť stúpla.", subline: "Kvalita stagnuje." },
                    { headline: "Každý má AI.", subline: "Málokto vie, ako ju používať." },
                    { headline: "Potrebujete alignment.", subline: "Máte nekonečné debaty." }
                ]
            },
            session: {
                title: "Tri Pohľady. Jedna Session.",
                subtitle: "Myslíme spolu. Odídete s jasnosťou.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "Všetci", desc: "Svet sa zmenil. Tu je, čo vidíme — vo vašom odvetví, v kreatívnej práci, v tom, čo je teraz možné." },
                    { num: "02", title: "Frameworky", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Vkus: dekády skúseností v kreativite a technológii — rozdiel robí kurátorstvo a oko pre detail. Páka: workflowy, automatizácie a reálne ukážky — čo stavať, čo preskočiť. Jasnosť: čo zostáva ľudské a čo delegovať — rozhodovací rámec, ktorý reálne použijete." },
                    { num: "03", title: "Vaša Realita", time: "90-120 min", lead: "Facilitované", desc: "Vaše výzvy. Tri perspektívy. Naživo. Tu vznikajú insights, ktoré zabraňujú šesťcifrovým chybám." },
                    { num: "04", title: "Jasnosť", time: "30 min", lead: "Všetci", desc: "Každý z nás zdieľa, čo videl. Čo prioritizovať. Čo ignorovať. Odídete s vedomím, čo robiť." }
                ]
            },
            founders: {
                title: "Traja Zakladatelia.",
                subtitle: "Úspešné firmy. Portfólio a klienti po celom svete. Myslia spolu nad vašimi problémami.",
                cards: [
                    { name: "Roland Vraník", role: "VKUS", company: "Creative Director / Zakladateľ, SORRYWECAN", tagline: "Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail.", bio: "Režisér a kreatívny riaditeľ s dekádami skúseností prepájajúci estetiku s technológiou, hľadajúci nové formy vizuálneho rozprávania." },
                    { name: "Ján Koscelanský", role: "PÁKA", company: "CPO / Spoluzakladateľ, SUDOLABS", tagline: "Čo dokáže jeden človek dnes. Čo stavať, čo preskočiť a ako navrhovať produkty, ktoré fungujú.", bio: "Produktový líder s dlhoročnými skúsenosťami s návrhom a škálovaním digitálnych produktov." },
                    { name: "Roman Pii Wagner", role: "JASNOSŤ", company: "Transformational Design", tagline: "Čo zostáva ľudské a čo delegovať. Rozhodovací rámec, ktorý reálne použijete.", bio: "Venuje sa transformačnému dizajnu, strategickému mysleniu a práci s komplexnými zmenami." }
                ]
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Prebudenie", desc: "Váš tím uvidí, čo 99% nevidí. Zmena, ktorá už prebieha." },
                    { title: "Vaša Výhoda", desc: "Príležitosti, ktoré konkurencia premešká. Vy nie." },
                    { title: "Debaty → Rozhodnutia", desc: "Spoločný jazyk. Spoločné priority. Koniec nekonečných diskusií." },
                    { title: "Chyby Zachytené", desc: "Tri pohľady zachytia, čo jeden prehliadne. Nákladné omyly — predídené." },
                    { title: "Zostane S Vami", desc: "30-dňový follow-up. Toolkit, ktorý sa vyvíja. Nie ďalší workshop, na ktorý zabudnete." }
                ]
            },
            details: {
                title: "Detaily",
                items: [
                    { label: "Trvanie", value: "4-5 hodín", sub: "Pol dňa" },
                    { label: "Veľkosť tímu", value: "10-15 ľudí", sub: "Leadership / kľúčový tím" },
                    { label: "Miesto", value: "Prídeme k vám", sub: "Vaša kancelária" },
                    { label: "Follow-up", value: "30 dní", sub: "V cene" }
                ]
            },
            cta: {
                headline: "Pripravení?",
                subline: "20-minútový discovery call. Žiadny záväzok.",
                button: "Rezervovať Discovery Call"
            }
        }
    }

    const t = content[lang]

    const pageClass = "page-slide w-full md:w-[297mm] min-h-screen md:h-[210mm] bg-white relative flex flex-col justify-center items-center p-6 md:p-12 print:w-[297mm] print:h-[210mm] print:p-8"

    return (
        <>
            <style jsx global>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: #f5f5f5;
                }
                .page-slide {
                    box-sizing: border-box;
                }
                @media (min-width: 768px) {
                    .page-container {
                        gap: 2rem;
                        padding: 2rem;
                        background: #e5e5e5;
                    }
                    .page-slide {
                        overflow: hidden;
                    }
                }
                @media print {
                    @page {
                        size: 297mm 210mm;
                        margin: 0;
                    }
                    html, body {
                        margin: 0;
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .page-container {
                        padding: 0;
                        gap: 0;
                        background: white;
                    }
                    .page-slide {
                        page-break-after: always;
                        page-break-inside: avoid;
                        break-after: page;
                        break-inside: avoid;
                        overflow: hidden;
                    }
                    .page-slide:last-child {
                        page-break-after: avoid;
                        break-after: avoid;
                    }
                }
            `}</style>
            
            <div className="fixed top-4 right-4 z-50 print:hidden flex gap-2">
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 md:px-4 py-2 bg-white shadow hover:bg-black hover:text-white transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
                <button 
                    onClick={() => window.print()}
                    className="hidden md:block text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white shadow hover:bg-black transition-colors"
                >
                    Export PDF
                </button>
            </div>

            <div className="page-container font-mono text-[#0a0a0a]">
                
                {/* Page 1: Hero */}
                <div className={pageClass}>
                    <div className="text-center max-w-4xl px-4">
                        <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#0047BB] mb-4 md:mb-6">{t.hero.label}</p>
                        <h1 className="font-serif text-[36px] md:text-[72px] leading-[0.95] tracking-tight">
                            {t.hero.title.line1}<br />
                            <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                        </h1>
                        <p className="text-[18px] md:text-[28px] text-black/70 mt-4 md:mt-8 font-serif italic">{t.hero.subline}</p>
                        <p className="text-[14px] md:text-[18px] text-black/40 mt-2 md:mt-4 max-w-2xl mx-auto">{t.hero.desc}</p>
                    </div>
                    <p className="absolute bottom-4 md:bottom-8 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/20">SORRYWECAN // RESEARCH LAB</p>
                </div>

                {/* Page 2: Stats */}
                <div className={`${pageClass} bg-black/[0.02]`}>
                    <div className="text-center max-w-4xl px-4">
                        <h2 className="font-serif text-[28px] md:text-[48px] italic leading-tight">{t.stats.headline}</h2>
                        <p className="text-[16px] md:text-[24px] text-black/50 mt-2">{t.stats.subline}</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mt-8 md:mt-16">
                            {t.stats.items.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[32px] md:text-[48px] font-serif text-[#0047BB]">{stat.value}</span>
                                    <p className="text-[12px] md:text-[14px] text-black/60 mt-2">{stat.label}</p>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/30 mt-1">{stat.source}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 3: Problem */}
                <div className={pageClass}>
                    <div className="text-center max-w-5xl w-full px-4">
                        <h2 className="font-serif text-[32px] md:text-[48px] italic mb-6 md:mb-8">{t.problem.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            {t.problem.cards.map((card, i) => (
                                <div key={i} className="p-4 md:p-5 border-2 border-black/10 text-left">
                                    <p className="text-[16px] md:text-[20px] font-medium leading-tight">{card.headline}</p>
                                    <p className="text-[14px] md:text-[16px] text-black/40 mt-1 leading-snug">{card.subline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 4: Session */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="font-serif text-[36px] md:text-[56px] italic">{t.session.title}</h2>
                            <p className="text-[14px] md:text-[18px] text-[#0047BB] mt-2">{t.session.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                            {t.session.parts.map((part, i) => (
                                <div key={i} className={`p-4 md:p-6 border-2 flex flex-col ${i === 2 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[11px] md:text-[12px] font-bold text-black/30">{part.num}</p>
                                    <p className="font-serif text-[24px] md:text-[28px] italic mt-1">{part.title}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40 mt-1">{part.time}</p>
                                    <p className="text-[12px] md:text-[13px] text-black/60 mt-3 md:mt-4 leading-relaxed md:flex-grow">{part.desc}</p>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-3 md:mt-4">{part.lead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 5: Founders */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="font-serif text-[32px] md:text-[48px] italic">{t.founders.title}</h2>
                            <p className="text-[14px] md:text-[16px] text-black/50 mt-2">{t.founders.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            {t.founders.cards.map((card, i) => (
                                <div key={i} className="p-4 md:p-6 border border-black/10">
                                    <p className="font-serif text-[22px] md:text-[26px] italic">{card.name}</p>
                                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{card.role}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40 mt-1">{card.company}</p>
                                    <p className="text-[13px] md:text-[14px] text-black/60 mt-3 leading-relaxed">{card.bio}</p>
                                    <p className="text-[12px] md:text-[13px] text-black/80 italic mt-3 pt-3 border-t border-black/10">"{card.tagline}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 6: Outcomes */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-serif text-[32px] md:text-[56px] italic text-center mb-6 md:mb-12">{t.outcome.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
                            {t.outcome.items.map((item, i) => (
                                <div key={i} className="p-4 md:p-5 border border-black/10">
                                    <p className="text-[16px] md:text-[18px] font-medium">{item.title}</p>
                                    <p className="text-[13px] text-black/50 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 7: Details + CTA */}
                <div className={pageClass}>
                    <div className="max-w-4xl w-full text-center px-4">
                        <h2 className="font-serif text-[48px] md:text-[72px] italic mb-2 md:mb-4">{t.cta.headline}</h2>
                        <p className="text-[16px] md:text-[20px] text-black/50 mb-8 md:mb-12">{t.cta.subline}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
                            {t.details.items.map((item, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/40">{item.label}</p>
                                    <p className="text-[16px] md:text-[20px] font-medium mt-1 md:mt-2">{item.value}</p>
                                    <p className="text-[12px] md:text-[14px] text-black/50">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="inline-block bg-[#0047BB] px-6 md:px-10 py-3 md:py-4">
                            <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-white">{t.cta.button}</p>
                        </div>
                        
                        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/30 mt-8 md:mt-12">SORRYWECAN // RESEARCH LAB // 2026</p>
                    </div>
                </div>

            </div>
        </>
    )
}
