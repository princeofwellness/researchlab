"use client"

import React, { useState } from "react"

export default function PublicOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "One Session.", line2: "New Operating System." },
                subline: "What changed. What's possible. What's next.",
                desc: "3 hours with founders who build with AI daily."
            },
            stats: {
                headline: "Technology is available to everyone.",
                subline: "The difference is how you think, decide, and work.",
                items: [
                    { value: "40%", label: "of jobs globally exposed to AI", source: "IMF 2024" },
                    { value: "22%", label: "will fundamentally change by 2030", source: "WEF 2025" },
                    { value: "41%", label: "of companies planning workforce reductions", source: "McKinsey 2025" },
                    { value: "1%", label: "of organizations consider themselves ready", source: "McKinsey 2025" }
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
            session: {
                title: "Taste. Leverage. Clarity.",
                subtitle: "3 hours. 3 founders. 1 shift.",
                parts: [
                    { num: "01", title: "Taste", time: "50 min", lead: "Roland", desc: "What separates good from unforgettable. What's possible when taste meets technology." },
                    { num: "02", title: "Leverage", time: "50 min", lead: "Ján", desc: "What one person can build now. The new math of small teams and unlimited output." },
                    { num: "03", title: "Clarity", time: "40 min", lead: "Roman", desc: "How to decide when everything moves. The framework for every AI choice." },
                    { num: "04", title: "Q&A", time: "40 min", lead: "All", desc: "Your field. Your reality. Honest answers from people who build with AI daily." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Clarity in Action", desc: "A clearer way of working and deciding when AI is part of everything." },
                    { title: "Your Edge", desc: "The ability to maintain quality, identity, and distinctiveness." },
                    { title: "From Reactive to Intentional", desc: "A shift from random AI use to consciously designed operation." },
                    { title: "Less Noise", desc: "Lower mental load. Less decision fatigue. No more AI FOMO." },
                    { title: "Frameworks That Travel", desc: "Mental models you'll use across projects, teams, and roles." }
                ]
            },
            founders: {
                title: "Three Founders",
                subtitle: "Not trainers. Builders who do this daily.",
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "CEO / Founder, SORRYWECAN", bio: "Director and creative lead connecting aesthetics with technology, exploring new forms of visual storytelling." },
                    { name: "Ján Koscelanský", role: "The Architect", company: "CPO / Co-founder, SUDOLABS", bio: "Product leader with years of experience designing and scaling digital products, teams and processes." },
                    { name: "Roman Pii Wagner", role: "The Navigator", company: "Transformational Design", bio: "Works in transformational design, strategic thinking and complex organizational change." }
                ]
            },
            details: {
                title: "Details",
                items: [
                    { label: "Where", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                    { label: "When", value: "February 26, 2026", sub: "Wednesday" },
                    { label: "Time", value: "17:30 — 20:30", sub: "3 hours" },
                    { label: "Price", value: "from €99", sub: "per person" }
                ]
            },
            cta: {
                headline: "Ready?",
                subline: "40 seats. First session February 26.",
                email: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "Jedna Session.", line2: "Nový Operačný Systém." },
                subline: "Čo sa zmenilo. Čo je možné. Čo ďalej.",
                desc: "3 hodiny so zakladateľmi, ktorí s AI pracujú denne."
            },
            stats: {
                headline: "Technológia je dostupná všetkým.",
                subline: "Rozdiel robí spôsob myslenia, rozhodovania a práce.",
                items: [
                    { value: "40%", label: "pracovných pozícií vystavených vplyvu AI", source: "IMF 2024" },
                    { value: "22%", label: "pracovných miest sa do 2030 zásadne zmení", source: "WEF 2025" },
                    { value: "41%", label: "firiem plánuje znižovanie počtu zamestnancov", source: "McKinsey 2025" },
                    { value: "1%", label: "organizácií považuje svoje využívanie AI za zrelé", source: "McKinsey 2025" }
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
                    { num: "01", title: "Vkus", time: "50 min", lead: "Roland", desc: "Čo odlišuje dobré od nezabudnuteľného. Čo je možné, keď sa vkus stretne s technológiou." },
                    { num: "02", title: "Páka", time: "50 min", lead: "Ján", desc: "Čo jeden človek dokáže postaviť dnes. Nová matematika malých tímov." },
                    { num: "03", title: "Jasnosť", time: "40 min", lead: "Roman", desc: "Ako sa rozhodovať, keď sa všetko hýbe. Framework pre každé AI rozhodnutie." },
                    { num: "04", title: "Q&A", time: "40 min", lead: "Všetci", desc: "Tvoj odbor. Tvoja realita. Úprimné odpovede od ľudí, čo s AI budujú denne." }
                ]
            },
            outcome: {
                title: "Odídete S",
                items: [
                    { title: "Jasnosť v Praxi", desc: "Jasnejší spôsob práce a rozhodovania, keď je AI všade." },
                    { title: "Vaša Výhoda", desc: "Schopnosť udržať kvalitu, identitu a rozlíšiteľnosť." },
                    { title: "Od Reaktívneho k Vedomému", desc: "Prechod od náhodného používania AI k vedome navrhnutému fungovaniu." },
                    { title: "Menej Šumu", desc: "Nižšia mentálna záťaž. Menej rozhodovacej neistoty. Koniec AI FOMO." },
                    { title: "Frameworky, Čo Cestujú", desc: "Mentálne modely použiteľné naprieč projektmi, tímami a rolami." }
                ]
            },
            founders: {
                title: "Traja Zakladatelia",
                subtitle: "Nie tréneri. Builderi, čo toto robia denne.",
                cards: [
                    { name: "Roland Vraník", role: "Kreatívec", company: "CEO / Zakladateľ, SORRYWECAN", bio: "Režisér a kreatívny riaditeľ prepájajúci estetiku s technológiou, hľadajúci nové formy vizuálneho rozprávania." },
                    { name: "Ján Koscelanský", role: "Architekt", company: "CPO / Spoluzakladateľ, SUDOLABS", bio: "Produktový líder s dlhoročnými skúsenosťami s návrhom a škálovaním digitálnych produktov." },
                    { name: "Roman Pii Wagner", role: "Navigátor", company: "Transformational Design", bio: "Venuje sa transformačnému dizajnu, strategickému mysleniu a práci s komplexnými zmenami." }
                ]
            },
            details: {
                title: "Detaily",
                items: [
                    { label: "Kde", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                    { label: "Kedy", value: "26. februára 2026", sub: "Streda" },
                    { label: "Čas", value: "17:30 — 20:30", sub: "3 hodiny" },
                    { label: "Cena", value: "od €99", sub: "na osobu" }
                ]
            },
            cta: {
                headline: "Pripravený?",
                subline: "40 miest. Prvá session 26. februára.",
                email: "andrea@sorrywecan.com"
            }
        }
    }

    const t = content[lang]

    const pageClass = "page-slide w-[297mm] h-[210mm] bg-white relative flex flex-col justify-center items-center p-12 print:p-8"

    return (
        <>
            <style jsx global>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    padding: 2rem;
                    background: #e5e5e5;
                }
                .page-slide {
                    box-sizing: border-box;
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
                    className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-white shadow hover:bg-black hover:text-white transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
                <button 
                    onClick={() => window.print()}
                    className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white shadow hover:bg-black transition-colors"
                >
                    Export PDF
                </button>
            </div>

            <div className="page-container font-mono text-[#0a0a0a]">
                
                {/* Page 1: Hero */}
                <div className={pageClass}>
                    <div className="text-center max-w-4xl">
                        <p className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-6">{t.hero.label}</p>
                        <h1 className="font-serif text-[72px] leading-[0.95] tracking-tight">
                            {t.hero.title.line1}<br />
                            <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                        </h1>
                        <p className="text-[24px] text-black/50 mt-8">{t.hero.subline}</p>
                        <p className="text-[16px] text-black/40 mt-4">{t.hero.desc}</p>
                    </div>
                    <p className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-black/20">SORRYWECAN // RESEARCH LAB</p>
                </div>

                {/* Page 2: Stats */}
                <div className={`${pageClass} bg-black/[0.02]`}>
                    <div className="text-center max-w-4xl">
                        <h2 className="font-serif text-[48px] italic leading-tight">{t.stats.headline}</h2>
                        <p className="text-[24px] text-black/50 mt-2">{t.stats.subline}</p>
                        <div className="grid grid-cols-4 gap-12 mt-16">
                            {t.stats.items.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[64px] font-serif text-[#0047BB]">{stat.value}</span>
                                    <p className="text-[14px] text-black/60 mt-2">{stat.label}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-1">{stat.source}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 3: Problem */}
                <div className={pageClass}>
                    <div className="text-center max-w-4xl">
                        <h2 className="font-serif text-[56px] italic mb-12">{t.problem.title}</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {t.problem.cards.map((card, i) => (
                                <div key={i} className="p-8 border-2 border-black/10 text-left">
                                    <p className="text-[28px] font-medium">{card.headline}</p>
                                    <p className="text-[24px] text-black/40 mt-1">{card.subline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 4: Session */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full">
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-[56px] italic">{t.session.title}</h2>
                            <p className="text-[18px] text-[#0047BB] mt-2">{t.session.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {t.session.parts.map((part, i) => (
                                <div key={i} className={`p-6 border-2 ${i === 0 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[12px] font-bold text-black/30">{part.num}</p>
                                    <p className="font-serif text-[32px] italic mt-1">{part.title}</p>
                                    <p className="text-[12px] text-black/40 mt-1">{part.time}</p>
                                    <p className="text-[14px] text-black/60 mt-4 leading-relaxed">{part.desc}</p>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mt-4">{part.lead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 5: Outcomes */}
                <div className={`${pageClass} bg-[#0047BB] text-white`}>
                    <div className="max-w-5xl w-full">
                        <h2 className="font-serif text-[56px] italic text-center mb-12">{t.outcome.title}</h2>
                        <div className="grid grid-cols-5 gap-4">
                            {t.outcome.items.map((item, i) => (
                                <div key={i} className="p-5 border border-white/20">
                                    <p className="text-[18px] font-medium">{item.title}</p>
                                    <p className="text-[13px] text-white/60 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 6: Founders */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full">
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-[48px] italic">{t.founders.title}</h2>
                            <p className="text-[16px] text-black/50 mt-2">{t.founders.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {t.founders.cards.map((card, i) => (
                                <div key={i} className="text-center p-6 border border-black/10">
                                    <p className="font-serif text-[28px] italic">{card.name}</p>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{card.role}</p>
                                    <p className="text-[12px] text-black/40 mt-1">{card.company}</p>
                                    <p className="text-[14px] text-black/60 mt-4 leading-relaxed">{card.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 7: Details + CTA */}
                <div className={`${pageClass} bg-black text-white`}>
                    <div className="max-w-4xl w-full text-center">
                        <h2 className="font-serif text-[72px] italic mb-4">{t.cta.headline}</h2>
                        <p className="text-[20px] text-white/50 mb-12">{t.cta.subline}</p>
                        
                        <div className="grid grid-cols-4 gap-8 mb-12">
                            {t.details.items.map((item, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.label}</p>
                                    <p className="text-[20px] font-medium mt-2">{item.value}</p>
                                    <p className="text-[14px] text-white/50">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="inline-block bg-[#0047BB] px-12 py-5">
                            <p className="text-[14px] font-bold uppercase tracking-widest">{t.cta.email}</p>
                        </div>
                        
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mt-12">SORRYWECAN // RESEARCH LAB // 2026</p>
                    </div>
                </div>

            </div>
        </>
    )
}
