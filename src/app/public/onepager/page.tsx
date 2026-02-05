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
                    { headline: "Generation is easy now.", subline: "Recognizing quality is harder." },
                    { headline: "Tools keep multiplying.", subline: "Habits can't keep up." },
                    { headline: "The direction is clear.", subline: "Daily practice in it isn't." },
                    { headline: "Everything moves faster.", subline: "But what should I actually create?" },
                    { headline: "I've tried dozens of tools.", subline: "Still don't know which one to use." },
                    { headline: "Everyone talks about AI.", subline: "But I don't know what to do with it." }
                ]
            },
            session: {
                title: "Taste. Leverage. Clarity.",
                subtitle: "",
                parts: [
                    { num: "01", title: "Taste", time: "50 min", lead: "Roland", desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail." },
                    { num: "02", title: "Leverage", time: "50 min", lead: "Ján", desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality." },
                    { num: "03", title: "Clarity", time: "40 min", lead: "Roman", desc: "What stays human and what to delegate to AI. When to automate, when to stop. A decision framework you'll actually use." },
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
                    { title: "What's Possible", desc: "A clear picture of what you can do today. And the confidence that it's within reach." },
                    { title: "30-Day Follow-Up", desc: "A short check-in to anchor what works, what doesn't, and what to adjust." }
                ]
            },
            founders: {
                title: "Three Founders",
                subtitle: "Successful companies. Portfolio and clients worldwide.",
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "Creative Director / Founder, SORRYWECAN", bio: "Director and creative lead connecting aesthetics with technology, exploring new forms of visual experience." },
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
                    { headline: "Generovať je dnes jednoduché.", subline: "Rozlíšiť kvalitu je ťažšie." },
                    { headline: "Nástroje pribúdajú.", subline: "Návyky nestíhajú." },
                    { headline: "Smer je zrejmý.", subline: "Každodenná prax v ňom nie." },
                    { headline: "Všetko ide rýchlejšie.", subline: "Ale čo mám vlastne tvoriť?" },
                    { headline: "Vyskúšal som desiatky nástrojov.", subline: "Stále neviem, ktorý použiť." },
                    { headline: "Všetci o AI hovoria.", subline: "Ale neviem, čo s tým." }
                ]
            },
            session: {
                title: "Vkus. Využitie. Jasnosť.",
                subtitle: "",
                parts: [
                    { num: "01", title: "Vkus", time: "50 min", lead: "Roland", desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail." },
                    { num: "02", title: "Využitie", time: "50 min", lead: "Ján", desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete." },
                    { num: "03", title: "Jasnosť", time: "40 min", lead: "Roman", desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať, kedy zastaviť. Rozhodovací rámec, ktorý reálne použiješ." },
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
                    { title: "Čo Je Možné", desc: "Jasný obraz toho, čo je dnes možné. A pocit, že je to na dosah." },
                    { title: "Follow-up po 30 Dňoch", desc: "Krátke zhodnotenie a ukotvenie v praxi. Čo funguje, čo nie a čo upraviť." }
                ]
            },
            founders: {
                title: "Traja Zakladatelia",
                subtitle: "Úspešné firmy. Portfólio a klienti po celom svete.",
                cards: [
                    { name: "Roland Vraník", role: "Kreatívec", company: "Creative Director / Zakladateľ, SORRYWECAN", bio: "Režisér a kreatívny riaditeľ prepájajúci estetiku s technológiou, hľadajúci nové formy vizuálnych zážitkov." },
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
                        <p className="text-[16px] md:text-[24px] text-black/50 mt-4 md:mt-8">{t.hero.subline}</p>
                        <p className="text-[14px] md:text-[16px] text-black/40 mt-2 md:mt-4">{t.hero.desc}</p>
                    </div>
                    <p className="absolute bottom-4 md:bottom-8 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/20">SORRYWECAN // RESEARCH LAB</p>
                </div>

                {/* Page 2: Stats */}
                <div className={`${pageClass} bg-black/[0.02]`}>
                    <div className="text-center max-w-4xl px-4">
                        <h2 className="font-serif text-[28px] md:text-[48px] italic leading-tight">{t.stats.headline}</h2>
                        <p className="text-[16px] md:text-[24px] text-black/50 mt-2">{t.stats.subline}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-8 md:mt-16">
                            {t.stats.items.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[40px] md:text-[64px] font-serif text-[#0047BB]">{stat.value}</span>
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
                            {t.session.subtitle && <p className="text-[14px] md:text-[18px] text-[#0047BB] mt-2">{t.session.subtitle}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                            {t.session.parts.map((part, i) => (
                                <div key={i} className={`p-4 md:p-6 border-2 flex flex-col ${i === 0 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[11px] md:text-[12px] font-bold text-black/30">{part.num}</p>
                                    <p className="font-serif text-[24px] md:text-[32px] italic mt-1">{part.title}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40 mt-1">{part.time}</p>
                                    <p className="text-[13px] md:text-[14px] text-black/60 mt-3 md:mt-4 leading-relaxed md:flex-grow">{part.desc}</p>
                                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mt-3 md:mt-4">{part.lead}</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            {t.founders.cards.map((card, i) => (
                                <div key={i} className="text-center p-4 md:p-6 border border-black/10">
                                    <p className="font-serif text-[22px] md:text-[28px] italic">{card.name}</p>
                                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{card.role}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40 mt-1">{card.company}</p>
                                    <p className="text-[13px] md:text-[14px] text-black/60 mt-3 md:mt-4 leading-relaxed">{card.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 6: Outcomes */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-serif text-[32px] md:text-[56px] italic text-center mb-6 md:mb-12">{t.outcome.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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

                        <div className="inline-block bg-[#0047BB] px-6 md:px-8 py-3 md:py-4">
                            <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest text-white">{t.cta.email}</p>
                        </div>
                        
                        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/30 mt-8 md:mt-12">SORRYWECAN // RESEARCH LAB // 2026</p>
                    </div>
                </div>

            </div>
        </>
    )
}
