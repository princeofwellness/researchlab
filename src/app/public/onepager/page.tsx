"use client"

import React, { useState } from "react"

export default function PublicOnePager() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "Everyone has AI tools.", line2: "Thinking makes the difference." },
                subline: "What changed. What's possible. What's next.",
                desc: "3 hours with founders who build with AI daily.",
                info: "BRATISLAVA \u00b7 FEB 26 \u00b7 from \u20ac99"
            },
            stats: {
                headline: "The world is shifting faster than you think.",
                subline: "",
                items: [
                    { value: "39%", label: "of your current skills will change by 2030", source: "WEF 2025" },
                    { value: "75%", label: "of knowledge workers already use AI", source: "Microsoft 2024" },
                    { value: "2.5×", label: "revenue growth in AI-led companies vs. laggards", source: "Accenture 2024" },
                    { value: "56%", label: "of companies see no return on AI investment yet", source: "PwC 2026" },
                    { value: "88%", label: "of organizations now use AI in at least one function", source: "McKinsey 2025" }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Generation is easy now.", subline: "Recognizing quality is harder." },
                    { headline: "Tools keep multiplying.", subline: "Habits can't keep up." },
                    { headline: "Everything moves faster.", subline: "But what's actually worth creating?" },
                    { headline: "AI gave everyone the same power.", subline: "So what's your edge now?" }
                ]
            },
            session: {
                title: "What separates the 1%.",
                subtitle: "",
                parts: [
                    { num: "01", title: "Taste", time: "50 min", lead: "Roland", desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail." },
                    { num: "02", title: "Leverage", time: "50 min", lead: "Ján", desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality." },
                    { num: "03", title: "Clarity", time: "40 min", lead: "Roman", desc: "What stays human and what to delegate to AI. When to automate and when to consciously stop. Decision frameworks you'll actually use." },
                    { num: "04", title: "Q&A", time: "40 min", lead: "All", desc: "Your questions. Your reality. Open and honest answers from people who work with AI daily." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "A Working System", desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning." },
                    { title: "Less Noise, More Signal", desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones." },
                    { title: "Your Edge", desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently." },
                    { title: "The Community", desc: "Access to the people who showed up. Monthly toolkit updates. A place to stay connected and keep growing." }
                ]
            },
            founders: {
                title: "Three Perspectives",
                subtitle: "Art. Product. Transformation.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "Creative Director / Founder, SORRYWECAN", bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.", tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "The Architect", company: "CPO / Co-founder, SUDOLABS", bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.", tagline: "Knows exactly where teams waste months building what one person could ship in a week.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "The Navigator", company: "Transformational Design", bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.", tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.", url: "" }
                ]
            },
            details: {
                title: "Details",
                items: [
                    { label: "Where", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                    { label: "When", value: "February 26, 2026", sub: "Wednesday" },
                    { label: "Time", value: "17:00 – 20:30", sub: "3.5 hours" },
                    { label: "Price", value: "from €99", sub: "per person" }
                ]
            },
            cta: {
                headline: "I'm In.",
                subline: "40 seats. First session February 26.",
                email: "Reserve Your Seat",
                contact: "For questions write to: andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "THE SHIFT",
                title: { line1: "AI nástroje má dnes každý.", line2: "Rozhoduje spôsob myslenia." },
                subline: "Čo sa zmenilo. Čo je možné. Čo ďalej.",
                desc: "3 hodiny so zakladateľmi, ktorí s AI pracujú denne.",
                info: "BRATISLAVA \u00b7 26.2. \u00b7 od 99 eur"
            },
            stats: {
                headline: "Svet sa mení rýchlejšie, než si myslíte.",
                subline: "",
                items: [
                    { value: "39%", label: "vašich súčasných zručností sa zmení do 2030", source: "WEF 2025" },
                    { value: "75%", label: "knowledge workers už používa AI", source: "Microsoft 2024" },
                    { value: "2.5×", label: "rast tržieb firiem s AI vs. ostatní", source: "Accenture 2024" },
                    { value: "56%", label: "firiem nevidí návratnosť investícií do AI", source: "PwC 2026" },
                    { value: "88%", label: "organizácií už používa AI aspoň v jednej oblasti", source: "McKinsey 2025" }
                ]
            },
            problem: {
                title: "Poznáte To?",
                cards: [
                    { headline: "Generovať je dnes jednoduché.", subline: "Rozlíšiť kvalitu je ťažšie." },
                    { headline: "Nástroje pribúdajú.", subline: "Návyky nestíhajú." },
                    { headline: "Všetko ide rýchlejšie.", subline: "Ale čo sa naozaj oplatí tvoriť?" },
                    { headline: "AI dalo všetkým rovnaké možnosti.", subline: "Tak čo je teraz tvoja výhoda?" }
                ]
            },
            session: {
                title: "Čo odlišuje to 1%.",
                subtitle: "",
                parts: [
                    { num: "01", title: "Vkus", time: "50 min", lead: "Roland", desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail." },
                    { num: "02", title: "Využitie", time: "50 min", lead: "Ján", desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete." },
                    { num: "03", title: "Jasnosť", time: "40 min", lead: "Roman", desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať a kedy sa vedome zastaviť. Rozhodovacie rámce, ktoré viete reálne používať." },
                    { num: "04", title: "Q&A", time: "40 min", lead: "Všetci", desc: "Vaše otázky. Vaša realita. Otvorené a úprimné odpovede od ľudí, ktorí s AI pracujú denne." }
                ]
            },
            outcome: {
                title: "S Čím Odchádzate",
                items: [
                    { title: "Funkčný Systém", desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno." },
                    { title: "Menej Šumu, Viac Signálu", desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne." },
                    { title: "Vaša Výhoda", desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak." },
                    { title: "Komunita", desc: "Prístup ku ľuďom, ktorí prišli. Mesačné toolkit updaty. Miesto, kde zostanete prepojení a rastete ďalej." }
                ]
            },
            founders: {
                title: "Tri Perspektívy",
                subtitle: "Umenie. Produkt. Transformácia.",
                trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                cards: [
                    { name: "Roland Vraník", role: "Umelec", company: "Creative Director / Zakladateľ, SORRYWECAN", bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.", tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.", url: "https://sorrywecan.com/" },
                    { name: "Ján Koscelanský", role: "Architekt", company: "CPO / Spoluzakladateľ, SUDOLABS", bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.", tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.", url: "https://sudolabs.com/" },
                    { name: "Roman Pii Wagner", role: "Navigátor", company: "Transformational Design", bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.", tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.", url: "" }
                ]
            },
            details: {
                title: "Detaily",
                items: [
                    { label: "Kde", value: "SORRYWECAN Studio", sub: "Pečnianska 7, Bratislava" },
                    { label: "Kedy", value: "26. februára 2026", sub: "Streda" },
                    { label: "Čas", value: "17:00 – 20:30", sub: "3.5 hodiny" },
                    { label: "Cena", value: "od €99", sub: "na osobu" }
                ]
            },
            cta: {
                headline: "Idem Do Toho.",
                subline: "40 miest. Prvá session 26. februára.",
                email: "Rezervovať Miesto",
                contact: "V prípade otázok píšte na: andrea@sorrywecan.com"
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
                                <div key={i} className="p-4 md:p-6 border-2 border-black/10 flex flex-col">
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
                                    {card.url && (
                                        <a href={card.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mt-3 hover:underline">
                                            {card.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                        </a>
                                    )}
                                    {card.tagline && (
                                        <p className="text-[12px] md:text-[13px] text-black/80 italic mt-3 pt-3 border-t border-black/10">&ldquo;{card.tagline}&rdquo;</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
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
                            <p className="text-[12px] md:text-[14px] font-code-brand font-bold uppercase tracking-widest text-white">{t.cta.email}</p>
                        </div>
                        
                        <p className="text-[11px] md:text-[13px] text-black/40 mt-6 md:mt-8">{t.cta.contact}</p>
                        <p className="text-[8px] md:text-[10px] font-code-brand uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/30 mt-6 md:mt-8">SORRYWECAN // RESEARCH LAB // 2026</p>
                    </div>
                </div>

            </div>
        </>
    )
}
