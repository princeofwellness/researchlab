"use client"

import React, { useState } from "react"

export default function CorporateOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "CORPORATE WORKSHOP",
                title: { line1: "Your Team.", line2: "New Operating System." },
                subline: "Creativity. Product. Transformation. Applied to your reality.",
                desc: "We don't present. We think with you, live, about the decisions you're actually facing.",
                info: "HALF DAY · 10-15 PEOPLE · €5,900"
            },
            stats: {
                headline: "Having tools is not the same as knowing what to do with them.",
                subline: "The companies that win are the ones that figure this out first.",
                items: [
                    { value: "300M", label: "jobs exposed to AI automation worldwide", source: "Goldman Sachs" },
                    { value: "56%", label: "of CEOs see no return on AI investment yet", source: "PwC CEO Survey 2026" },
                    { value: "2.5×", label: "revenue growth in AI-led companies vs. laggards", source: "Accenture 2024" },
                    { value: "1%", label: "of organizations consider themselves AI-mature", source: "McKinsey 2025" },
                    { value: "3×", label: "faster than any technology shift before", source: "World Bank" }
                ]
            },
            problem: {
                title: "The Reality Right Now.",
                cards: [
                    { headline: "Your team prompts.", subline: "Without strategy." },
                    { headline: "Tools multiply.", subline: "Clarity doesn't." },
                    { headline: "AI budget approved.", subline: "Nobody owns the direction." },
                    { headline: "Speed went up.", subline: "Quality went sideways." }
                ]
            },
            session: {
                title: "Three Perspectives. One Direction.",
                subtitle: "We don't present. We think with you on what's holding you back.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "All", desc: "What changed and what most companies are getting wrong. Not theory. What we see working across industries right now." },
                    { num: "02", title: "Frameworks", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "How taste separates forgettable from iconic. What a small team ships today vs. a department last year. How to decide fast when nothing feels certain." },
                    { num: "03", title: "Your Reality", time: "90-120 min", lead: "Facilitated", desc: "We stop talking about the market and start talking about you. Your blind spots, your bottlenecks, looked at from angles you haven't considered. This is where insights happen that prevent six-figure mistakes." },
                    { num: "04", title: "The Clarity", time: "30 min", lead: "All", desc: "What we each saw. What to do first. What to drop. Your team leaves with a shared direction and the confidence to act on it Monday." }
                ]
            },
            founders: {
                title: "Who's in the Room.",
                subtitle: "Builders, not consultants. Running companies, not advising from the side.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { name: "Roland Vraník", role: "TASTE", company: "Creative Director / Founder, SORRYWECAN", tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.", bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily — does in hours what used to take weeks.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "LEVERAGE", company: "CPO / Co-founder, SUDOLABS", tagline: "Knows exactly where teams waste months building what one person could ship in a week.", bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "CLARITY", company: "Transformational Design", tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.", bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.", url: "" }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "The Edge", desc: "Opportunities your competitors will miss. You won't." },
                    { title: "Debates → Decisions", desc: "Same language. Same priorities. The endless loops end." },
                    { title: "Blind Spots, Found", desc: "Different angles reveal what one perspective can't. Wrong turns spotted before they cost you." },
                    { title: "It Doesn't End Here", desc: "30-day follow-up. Toolkit that evolves. Not another workshop you forget." }
                ],
                proof: [
                    { value: "3", label: "founders in the room with you" },
                    { value: "90+", label: "minutes on YOUR challenges" },
                    { value: "30", label: "day follow-up included" }
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
                headline: "Next Move.",
                subline: "20-minute discovery call. No commitment.",
                button: "Book Discovery Call",
                guarantee: "If it's not the right fit, we'll tell you — and point you somewhere better.",
                contact: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "FIREMNÝ WORKSHOP",
                title: { line1: "Váš Tím.", line2: "Nový Operačný Systém." },
                subline: "Kreativita. Produkt. Transformácia. Aplikované na vašu realitu.",
                desc: "Neprezentujeme. Myslíme s vami, naživo, nad rozhodnutiami, ktoré práve riešite.",
                info: "POL DŇA · 10-15 ĽUDÍ · €5 900"
            },
            stats: {
                headline: "Mať nástroje nie je to isté ako vedieť, čo s nimi.",
                subline: "Vyhrávajú firmy, ktoré na to prídu prvé.",
                items: [
                    { value: "300M", label: "pracovných miest vystavených AI automatizácii", source: "Goldman Sachs" },
                    { value: "56%", label: "CEO nevidí návratnosť investícií do AI", source: "PwC CEO Survey 2026" },
                    { value: "2.5×", label: "rast tržieb firiem s AI vs. ostatní", source: "Accenture 2024" },
                    { value: "1%", label: "organizácií sa považuje za AI-zrelých", source: "McKinsey 2025" },
                    { value: "3×", label: "rýchlejšie než čokoľvek pred tým", source: "World Bank" }
                ]
            },
            problem: {
                title: "Realita Práve Teraz.",
                cards: [
                    { headline: "Váš tím promptuje.", subline: "Bez stratégie." },
                    { headline: "Nástroje pribúdajú.", subline: "Jasnosť nie." },
                    { headline: "AI rozpočet schválený.", subline: "Nikto nedrží smer." },
                    { headline: "Rýchlosť stúpla.", subline: "Kvalita stagnuje." }
                ]
            },
            session: {
                title: "Tri Pohľady. Jeden Smer.",
                subtitle: "Neprezentujeme. Myslíme s vami nad tým, čo vás brzdí.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "Všetci", desc: "Čo sa zmenilo a v čom sa väčšina firiem mýli. Nie teória. To, čo vidíme fungovať naprieč odvetviami práve teraz." },
                    { num: "02", title: "Frameworky", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Čo odlišuje zabudnuteľnú prácu od ikonickej. Čo malý tím dnes dodá vs. celé oddelenie pred rokom. Ako sa rozhodovať rýchlo, keď nič nie je isté." },
                    { num: "03", title: "Vaša Realita", time: "90-120 min", lead: "Facilitované", desc: "Prestaneme hovoriť o trhu a začneme hovoriť o vás. Vaše slepé miesta, vaše brzdy, pozerané z uhlov, na ktoré ste nemysleli. Tu vznikajú insights, ktoré zabraňujú šesťcifrovým chybám." },
                    { num: "04", title: "Jasnosť", time: "30 min", lead: "Všetci", desc: "Čo sme každý videli. Čo riešiť najskôr. Čo pustiť. Váš tím odchádza so spoločným smerom a odhodlaním konať od pondelka." }
                ]
            },
            founders: {
                title: "Kto Je V Miestnosti.",
                subtitle: "Budovatelia, nie konzultanti. Vedú vlastné firmy, nie radia z bočnej čiary.",
                trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                cards: [
                    { name: "Roland Vraník", role: "VKUS", company: "Creative Director / Zakladateľ, SORRYWECAN", tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.", bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne — robí za hodiny, čo kedysi trvalo týždne.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "PÁKA", company: "CPO / Spoluzakladateľ, SUDOLABS", tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.", bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "JASNOSŤ", company: "Transformational Design", tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.", bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.", url: "" }
                ]
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Vaša Výhoda", desc: "Príležitosti, ktoré konkurencia premešká. Vy nie." },
                    { title: "Debaty → Rozhodnutia", desc: "Spoločný jazyk. Spoločné priority. Koniec nekonečných diskusií." },
                    { title: "Slepé Miesta, Nájdené", desc: "Rôzne uhly pohľadu odhalia, čo jeden človek prehliadne. Zlé odbočky odhalené skôr, než vás stoja." },
                    { title: "Nekončí To Tu", desc: "30-dňový follow-up. Toolkit, ktorý sa vyvíja. Nie ďalší workshop, na ktorý zabudnete." }
                ],
                proof: [
                    { value: "3", label: "zakladatelia v miestnosti s vami" },
                    { value: "90+", label: "minút na VAŠE problémy" },
                    { value: "30", label: "dňový follow-up v cene" }
                ]
            },
            details: {
                title: "Detaily",
                items: [
                    { label: "Trvanie", value: "4-5 hodín", sub: "Pol dňa" },
                    { label: "Veľkosť tímu", value: "10-15 ľudí", sub: "Vedenie / kľúčový tím" },
                    { label: "Miesto", value: "Prídeme k vám", sub: "Vaša kancelária" },
                    { label: "Follow-up", value: "30 dní", sub: "V cene" }
                ]
            },
            cta: {
                headline: "Ďalší Krok.",
                subline: "20-minútový discovery call. Žiadny záväzok.",
                button: "Rezervovať Discovery Call",
                guarantee: "Ak to pre vás nie je, povieme vám to — a nasmerujeme vás lepšie.",
                contact: "andrea@sorrywecan.com"
            }
        }
    }

    const t = content[lang]

    const pageClass = "page-slide w-full md:w-[297mm] min-h-screen md:h-[210mm] bg-[#f4ede6] relative flex flex-col justify-center items-center p-6 md:p-12 print:w-[297mm] print:h-[210mm] print:p-8"

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
                        background: #e8e1da;
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
                    className="text-[10px] font-code-brand font-bold uppercase tracking-widest px-3 md:px-4 py-2 bg-white shadow hover:bg-black hover:text-white transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
                <button 
                    onClick={() => window.print()}
                    className="hidden md:block text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white shadow hover:bg-black transition-colors"
                >
                    Export PDF
                </button>
            </div>

            <div className="page-container font-sans-brand text-[#0a0a0a]">
                
                {/* Page 1: Hero */}
                <div className={pageClass}>
                    <div className="text-center max-w-4xl px-4">
                        <p className="text-[13px] md:text-[16px] font-code-brand font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#0047BB] mb-12 md:mb-16">{t.hero.label}</p>
                        <h1 className="font-bold text-[36px] md:text-[72px] leading-[0.95] tracking-tight">
                            {t.hero.title.line1}<br />
                            <span className="text-[#0047BB]">{t.hero.title.line2}<span className="text-black/20">*</span></span>
                        </h1>
                        <p className="text-[16px] md:text-[24px] text-black/50 mt-4 md:mt-8">{t.hero.subline}</p>
                        <p className="text-[14px] md:text-[16px] text-black/40 mt-2 md:mt-4">{t.hero.desc}</p>
                        <p className="text-[11px] md:text-[13px] font-code-brand font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0047BB] mt-4 md:mt-6">{t.hero.info}</p>
                    </div>
                    <p className="absolute bottom-4 md:bottom-8 text-[8px] md:text-[10px] font-code-brand uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/20">SORRYWECAN // RESEARCH LAB</p>
                </div>

                {/* Page 2: Stats */}
                <div className={`${pageClass} bg-black/[0.02]`}>
                    <div className="text-center max-w-4xl px-4">
                        <h2 className="font-bold text-[28px] md:text-[48px] leading-tight">{t.stats.headline}</h2>
                        <p className="text-[16px] md:text-[24px] text-black/50 mt-2">{t.stats.subline}</p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mt-8 md:mt-16">
                            {t.stats.items.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[32px] md:text-[48px] font-bold text-[#0047BB]">{stat.value}</span>
                                    <p className="text-[12px] md:text-[14px] text-black/60 mt-2">{stat.label}</p>
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mt-1">{stat.source}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 3: Problem */}
                <div className={pageClass}>
                    <div className="text-center max-w-5xl w-full px-4">
                        <h2 className="font-bold text-[32px] md:text-[48px] mb-6 md:mb-8">{t.problem.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {t.problem.cards.map((card, i) => (
                                <div key={i} className="p-4 md:p-6 border-2 border-black/10 text-left">
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
                            <h2 className="font-bold text-[36px] md:text-[56px]">{t.session.title}</h2>
                            {t.session.subtitle && <p className="text-[14px] md:text-[18px] text-[#0047BB] mt-2">{t.session.subtitle}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                            {t.session.parts.map((part, i) => (
                                <div key={i} className={`p-4 md:p-6 border-2 flex flex-col ${i === 2 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[11px] md:text-[12px] font-code-brand font-bold text-black/30">{part.num}</p>
                                    <p className="font-bold text-[24px] md:text-[32px] mt-1">{part.title}</p>
                                    <p className="text-[11px] md:text-[12px] font-code-brand text-black/40 mt-1">{part.time}</p>
                                    <p className="text-[13px] md:text-[14px] text-black/60 mt-3 md:mt-4 leading-relaxed md:flex-grow">{part.desc}</p>
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mt-3 md:mt-4">{part.lead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 5: Founders */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="font-bold text-[32px] md:text-[48px]">{t.founders.title}</h2>
                            <p className="text-[14px] md:text-[16px] text-black/50 mt-2">{t.founders.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            {t.founders.cards.map((card, i) => (
                                <div key={i} className="text-center p-4 md:p-6 border border-black/10">
                                    <p className="font-bold text-[22px] md:text-[28px]">{card.name}</p>
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mt-2">{card.role}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40 mt-1">{card.company}</p>
                                    <p className="text-[13px] md:text-[14px] text-black/60 mt-3 md:mt-4 leading-relaxed">{card.bio}</p>
                                    <p className="text-[12px] md:text-[13px] text-black/80 italic mt-3 pt-3 border-t border-black/10">"{card.tagline}"</p>
                                    {card.url && (
                                        <a href={card.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mt-3 hover:underline">
                                            {card.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                        {t.founders.trust && (
                            <p className="text-center text-[11px] md:text-[13px] font-code-brand text-black/40 mt-6 md:mt-8">{t.founders.trust}</p>
                        )}
                    </div>
                </div>

                {/* Page 6: Outcomes */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-bold text-[32px] md:text-[56px] text-center mb-6 md:mb-12">{t.outcome.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                            {t.outcome.items.map((item, i) => (
                                <div key={i} className="p-4 md:p-5 border border-black/10">
                                    <p className="text-[16px] md:text-[18px] font-medium">{item.title}</p>
                                    <p className="text-[13px] text-black/50 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-t border-black/10 pt-8 md:pt-12">
                            {t.outcome.proof.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-[32px] md:text-[48px] font-bold text-[#0047BB]">{stat.value}</span>
                                    <p className="text-[12px] md:text-[14px] font-code-brand font-bold uppercase tracking-widest text-black/40 mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Page 7: Details + CTA */}
                <div className={pageClass}>
                    <div className="max-w-4xl w-full text-center px-4">
                        <h2 className="font-bold text-[48px] md:text-[72px] mb-2 md:mb-4">{t.cta.headline}</h2>
                        <p className="text-[16px] md:text-[20px] text-black/50 mb-8 md:mb-12">{t.cta.subline}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
                            {t.details.items.map((item, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">{item.label}</p>
                                    <p className="text-[16px] md:text-[20px] font-medium mt-1 md:mt-2">{item.value}</p>
                                    <p className="text-[12px] md:text-[14px] text-black/50">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="inline-block bg-[#0047BB] px-6 md:px-8 py-3 md:py-4">
                            <p className="text-[12px] md:text-[14px] font-code-brand font-bold uppercase tracking-widest text-white">{t.cta.button}</p>
                        </div>
                        
                        <p className="text-[12px] md:text-[14px] text-black/40 mt-6 md:mt-8">{t.cta.guarantee}</p>
                        <p className="text-[11px] md:text-[13px] text-black/40 mt-2">{t.cta.contact}</p>
                        <p className="text-[8px] md:text-[10px] font-code-brand uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/30 mt-6 md:mt-8">SORRYWECAN // RESEARCH LAB // 2026</p>
                    </div>
                </div>

            </div>
        </>
    )
}
