"use client"

import React, { useState } from "react"

export default function CorporateOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "CORPORATE WORKSHOP",
                title: { line1: "Your Team.", line2: "New Operating System." },
                subline: "Art. Product. Transformation. Applied to your reality.",
                desc: "We don't present. We think with you, live, about the decisions you're actually facing.",
                info: "HALF DAY · 10-15 PEOPLE · €5,900"
            },
            stats: {
                headline: "Having tools is not the same as knowing what to do with them.",
                subline: "The companies that win are the ones that figure this out first.",
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
                    { headline: "AI budget approved.", subline: "Nobody owns the direction." },
                    { headline: "You need alignment.", subline: "You get endless debates." }
                ]
            },
            session: {
                title: "One Session. Half a Day.",
                subtitle: "We think with you. You leave clear.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "All", desc: "What changed and what most companies are getting wrong. Not theory. What we see working across industries right now." },
                    { num: "02", title: "Frameworks", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "How taste separates forgettable from iconic. What a small team ships today vs. a department last year. How to decide fast when nothing feels certain." },
                    { num: "03", title: "Your Reality", time: "90-120 min", lead: "Facilitated", desc: "We stop talking about the market and start talking about you. Your blind spots, your bottlenecks, looked at from angles you haven't considered. New products, better processes, what to kill." },
                    { num: "04", title: "The Clarity", time: "30 min", lead: "All", desc: "What we each saw. What to do first. What to drop. Your team leaves with a shared direction and the confidence to act on it Monday." }
                ]
            },
            founders: {
                title: "Who's in the Room.",
                subtitle: "Builders, not consultants. Running companies, not advising from the side.",
                cards: [
                    { name: "Roland Vraník", role: "TASTE", company: "Creative Director / Founder, SORRYWECAN", tagline: "Ran campaigns for global brands. Made mistakes that cost more than money. Now builds with AI every day and sees what most creative teams miss.", bio: "Director and creative lead. Decades at the intersection of aesthetics and technology. Knows what separates work people remember from work people scroll past.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "LEVERAGE", company: "CPO / Co-founder, SUDOLABS", tagline: "Built and scaled products used across industries. Sees what's possible before the tools even exist. Knows exactly where teams waste time.", bio: "Product leader. Years of shipping digital products, building teams, and designing processes. Sees the gap between what companies build and what they could build.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "CLARITY", company: "Transformational Design", tagline: "Works with leadership teams navigating change they don't fully understand yet. Turns confusion into clear priorities.", bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.", url: "" }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Shared Understanding", desc: "Your team sees what's actually happening. Not hype. Not fear. The reality." },
                    { title: "The Edge", desc: "Opportunities your competitors will miss. You won't." },
                    { title: "Debates → Decisions", desc: "Same language. Same priorities. The endless loops end." },
                    { title: "Blind Spots, Found", desc: "Different angles reveal what one perspective can't. Wrong turns spotted before they cost you." },
                    { title: "It Sticks", desc: "30-day follow-up. Toolkit that evolves. Not another workshop you forget." }
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
                headline: "Ready?",
                subline: "20-minute discovery call. No commitment.",
                button: "Book Discovery Call",
                guarantee: "Not the right fit? We'll know in the first 30 minutes.",
                contact: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "FIREMNÝ WORKSHOP",
                title: { line1: "Váš Tím.", line2: "Nový Operačný Systém." },
                subline: "Umenie. Produkt. Transformácia. Aplikované na vašu realitu.",
                desc: "Neprezentujeme. Myslíme s vami, naživo, nad rozhodnutiami, ktoré práve riešite.",
                info: "POL DŇA · 10-15 ĽUDÍ · €5 900"
            },
            stats: {
                headline: "Mať nástroje nie je to isté ako vedieť, čo s nimi.",
                subline: "Vyhrávajú firmy, ktoré na to prídu prvé.",
                items: [
                    { value: "300M", label: "automatizovateľných pracovných miest na svete", source: "Goldman Sachs" },
                    { value: "16%", label: "pokles zamestnanosti, pracovníci 22–25 rokov v AI-exponovaných pozíciách", source: "Stanford / ADP 2025" },
                    { value: "2.5×", label: "rast tržieb firiem s AI vs. ostatní", source: "Accenture 2025" },
                    { value: "1%", label: "organizácií sa považuje za pripravených na AI", source: "McKinsey 2025" },
                    { value: "3×", label: "rýchlejšie než čokoľvek pred tým", source: "World Bank" }
                ]
            },
            problem: {
                title: "Znie Povedome?",
                cards: [
                    { headline: "Váš tím promptuje.", subline: "Bez stratégie." },
                    { headline: "Výstup je generický.", subline: "Ako u všetkých ostatných." },
                    { headline: "Nástroje pribúdajú.", subline: "Jasnosť nie." },
                    { headline: "Rýchlosť stúpla.", subline: "Kvalita stagnuje." },
                    { headline: "AI rozpočet schválený.", subline: "Nikto nedrží smer." },
                    { headline: "Potrebujete spoločný smer.", subline: "Máte nekonečné debaty." }
                ]
            },
            session: {
                title: "Jedna Session. Pol Dňa.",
                subtitle: "Myslíme s vami. Odídete s jasnosťou.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "Všetci", desc: "Čo sa zmenilo a v čom sa väčšina firiem mýli. Nie teória. To, čo vidíme fungovať naprieč odvetviami práve teraz." },
                    { num: "02", title: "Frameworky", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Čo odlišuje zabudnuteľnú prácu od ikonickej. Čo malý tím dnes dodá vs. celé oddelenie pred rokom. Ako sa rozhodovať rýchlo, keď nič nie je isté." },
                    { num: "03", title: "Vaša Realita", time: "90-120 min", lead: "Facilitované", desc: "Prestaneme hovoriť o trhu a začneme hovoriť o vás. Vaše slepé miesta, vaše brzdy, pozerané z uhlov, na ktoré ste nemysleli. Nové produkty, lepšie procesy, čo zabiť." },
                    { num: "04", title: "Jasnosť", time: "30 min", lead: "Všetci", desc: "Čo sme každý videli. Čo riešiť najskôr. Čo pustiť. Váš tím odchádza so spoločným smerom a odhodlaním konať od pondelka." }
                ]
            },
            founders: {
                title: "Kto Je V Miestnosti.",
                subtitle: "Budovatelia, nie konzultanti. Vedú vlastné firmy, nie radia z bočnej čiary.",
                cards: [
                    { name: "Roland Vraník", role: "VKUS", company: "Creative Director / Zakladateľ, SORRYWECAN", tagline: "Viedol kampane pre globálne značky. Urobil chyby, ktoré stáli viac než peniaze. Dnes buduje s AI denne a vidí, čo väčšine kreatívnych tímov uniká.", bio: "Režisér a kreatívny riaditeľ. Dekády na priesečníku estetiky a technológie. Vie, čo odlišuje prácu, ktorú si ľudia zapamätajú, od práce, cez ktorú scrollnú.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "PÁKA", company: "CPO / Spoluzakladateľ, SUDOLABS", tagline: "Stavil a škáloval produkty naprieč odvetviami. Vidí možnosti skôr, než existujú nástroje. Presne vie, kde tímy strácajú čas.", bio: "Produktový líder. Roky dodávania digitálnych produktov, budovania tímov a navrhovania procesov. Vidí priepasť medzi tým, čo firmy stavajú, a čo by stavať mohli.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "JASNOSŤ", company: "Transformational Design", tagline: "Pracuje s vedením tímov, ktoré prechádzajú zmenou, ktorej ešte celkom nerozumejú. Mení zmätok na jasné priority.", bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.", url: "" }
                ]
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Spoločné Porozumenie", desc: "Váš tím vidí, čo sa naozaj deje. Nie hype. Nie strach. Realita." },
                    { title: "Vaša Výhoda", desc: "Príležitosti, ktoré konkurencia premešká. Vy nie." },
                    { title: "Debaty → Rozhodnutia", desc: "Spoločný jazyk. Spoločné priority. Koniec nekonečných diskusií." },
                    { title: "Slepé Miesta, Nájdené", desc: "Rôzne uhly pohľadu odhalia, čo jeden človek prehliadne. Zlé odbočky odhalené skôr, než vás stoja." },
                    { title: "Zostane S Vami", desc: "30-dňový follow-up. Toolkit, ktorý sa vyvíja. Nie ďalší workshop, na ktorý zabudnete." }
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
                headline: "Pripravení?",
                subline: "20-minútový discovery call. Žiadny záväzok.",
                button: "Rezervovať Discovery Call",
                guarantee: "Nie je to pre vás? Zistíme to do 30 minút.",
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
                    </div>
                </div>

                {/* Page 6: Outcomes */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-bold text-[32px] md:text-[56px] text-center mb-6 md:mb-12">{t.outcome.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
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
