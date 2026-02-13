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
                desc: "We don't come with ready-made answers. We think with you about the decisions ahead of you.",
                info: "HALF DAY · 10-15 PEOPLE · €5,900"
            },
            stats: {
                headline: "Having tools is not the same as knowing what to do with them.",
                subline: "The companies that win are the ones that figure this out first.",
                items: [
                    { value: "300M", label: "jobs exposed to AI automation worldwide", source: "Goldman Sachs 2023" },
                    { value: "56%", label: "of CEOs see no financial benefit from AI yet", source: "PwC 2026" },
                    { value: "92%", label: "of companies plan to increase AI investment", source: "McKinsey 2025" },
                    { value: ">80%", label: "report no enterprise EBIT impact from GenAI", source: "McKinsey 2025" },
                    { value: "12%", label: "of CEOs saw both cost and revenue gains", source: "PwC 2026" }
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
                title: "Three Perspectives, One Direction.",
                subtitle: "We don't explain. We work with you.",
                parts: [
                    { num: "01", title: "The Mindshift", time: "30 min", lead: "All", desc: "What changed and what most companies are getting wrong. Not theory. What we see working across industries right now." },
                    { num: "02", title: "Frameworks", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "How taste separates forgettable from iconic. What a small team ships today vs. a department last year. How to decide fast when nothing feels certain." },
                    { num: "03", title: "Your Reality", time: "90-120 min", lead: "Facilitated", desc: "We stop talking about the market in general. We go to your blind spots and the invisible patterns shaping your decisions. That's where the decisions are born that prevent six-figure mistakes." },
                    { num: "04", title: "Clarity", time: "30 min", lead: "All", desc: "What matters. What to solve first. What to consciously let go. Your team leaves with a shared direction and a clear decision to act starting Monday." }
                ]
            },
             founders: {
                 title: "Who You'll Work With.",
                 subtitle: "Creators, not theorists. Building their own companies and innovating every day.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { name: "Roland Vraník", role: "TASTE", company: "Creative Director / Founder, SORRYWECAN", tagline: "Made decisions that came at a high price. Now sees what creative teams often miss.", bio: "Creative director behind award-winning campaigns for Tatra banka, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "LEVERAGE", company: "CPO / Co-founder, SUDOLABS", tagline: "Years of building products showed him exactly where teams lose months on what can now be done many times faster.", bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "CLARITY", company: "Transformational Design", tagline: "Turns confusion into priorities and priorities into concrete decisions.", bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.", url: "" }
                ]
            },
             outcome: {
                 title: "You Leave With",
                 items: [
                     { title: "Strategic Edge", desc: "Identified opportunities others overlook. You won't." },
                     { title: "Decisions, Not Debates", desc: "Shared language. Aligned priorities. Less endless discussion, more clear steps." },
                     { title: "What You're Missing", desc: "Three perspectives reveal what one person overlooks. Before it starts costing you time, energy, and money." },
                     { title: "30 Days After", desc: "A practical toolkit that evolves with you." }
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
                guarantee: "If it's not the right fit, we'll tell you. And point you somewhere better.",
                contact: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "FIREMNÝ WORKSHOP",
                title: { line1: "Váš Tím.", line2: "Nový Operačný Systém." },
                subline: "Kreativita. Produkt. Transformácia. Aplikované na vašu realitu.",
                desc: "Neprichádzame s hotovými odpoveďami, premýšľame s vami nad rozhodnutiami, ktoré sú pred vami.",
                info: "POL DŇA · 10-15 ĽUDÍ · €5 900"
            },
            stats: {
                headline: "Mať nástroje nie je to isté ako vedieť, čo s nimi.",
                subline: "Vyhrávajú firmy, ktoré na to prídu prvé.",
                items: [
                    { value: "300M", label: "pracovných miest vystavených AI automatizácii", source: "Goldman Sachs 2023" },
                    { value: "56%", label: "CEO nevidí finančný prínos z AI", source: "PwC 2026" },
                    { value: "92%", label: "firiem plánuje zvýšiť investície do AI", source: "McKinsey 2025" },
                    { value: ">80%", label: "nevidí dopad GenAI na podnikový EBIT", source: "McKinsey 2025" },
                    { value: "12%", label: "CEO zaznamenalo prínosy v nákladoch aj tržbách", source: "PwC 2026" }
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
                 title: "Tri pohľady, jeden smer.",
                 subtitle: "Nevysvetľujeme. Pracujeme s vami.",
                parts: [
                     { num: "01", title: "The Mindshift", time: "30 min", lead: "Všetci", desc: "Čo sa zmenilo a v čom sa väčšina firiem mýli. Nie teória. To, čo vidíme fungovať naprieč odvetviami práve teraz." },
                    { num: "02", title: "Frameworky", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Čo odlišuje zabudnuteľnú prácu od ikonickej. Čo malý tím dnes dodá vs. celé oddelenie pred rokom. Ako sa rozhodovať rýchlo, keď nič nie je isté." },
                     { num: "03", title: "Vaša Realita", time: "90-120 min", lead: "Facilitované", desc: "Prestaneme hovoriť všeobecne o trhu. Pôjdeme k vašim slepým miestam a neviditeľným vzorcom, ktoré formujú vaše kroky. Tam sa rodia rozhodnutia, ktoré zabraňujú 6-cifrovým chybám." },
                     { num: "04", title: "Jasnosť", time: "30 min", lead: "Všetci", desc: "Čo je podstatné. Čo riešiť najskôr. Čo vedome pustiť. Váš tím odchádza so spoločným smerom a jasným rozhodnutím konať hneď od pondelka." }
                ]
            },
             founders: {
                 title: "Kto s vami bude pracovať?",
                 subtitle: "Tvorcovia, nie teoretici. Budujú vlastné firmy a inovujú každý deň.",
                trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                cards: [
                     { name: "Roland Vraník", role: "VKUS", company: "Creative Director / Zakladateľ, SORRYWECAN", tagline: "Prešiel si rozhodnutiami, ktoré mali vysokú cenu. Dnes vidí to, čo kreatívnym tímom často uniká.", bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Tatra banku, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "PÁKA", company: "CPO / Spoluzakladateľ, SUDOLABS", tagline: "Po rokoch v developmente presne vie, kde tímy trávia mesiace nad niečím, čo sa dnes dá zvládnuť mnohonásobne rýchlejšie.", bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.", url: "https://sudolabs.com/" },
                     { name: "Roman Pii Wagner", role: "JASNOSŤ", company: "Transformational Design", tagline: "Mení zmätok na priority a priority na konkrétne rozhodnutia.", bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.", url: "" }
                ]
            },
             outcome: {
                 title: "S Čím Odchádzate",
                 items: [
                     { title: "Strategická výhoda", desc: "Identifikované príležitosti, ktoré iní prehliadnu. Vy nie." },
                     { title: "Rozhodnutia namiesto debát", desc: "Spoločný jazyk. Zladené priority. Menej nekonečných diskusií, viac jasných krokov." },
                     { title: "Čo Vám Uniká", desc: "Tri perspektívy odhalia to, čo jeden človek prehliadne. Skôr, než vás to začne stáť čas, energiu a financie." },
                     { title: "30 Dní Potom", desc: "Praktický toolkit, ktorý sa vyvíja spolu s vami." }
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
                guarantee: "Ak to pre vás nie je, povieme vám to. A nasmerujeme vás lepšie.",
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
