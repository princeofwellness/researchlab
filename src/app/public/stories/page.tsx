"use client"

import React, { useState } from "react"

export default function StoriesPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            slides: [
                {
                    type: "title",
                    label: "THE MINDSHIFT",
                    title: "Everyone has AI tools.\nThinking makes the difference.",
                    date: "BRATISLAVA · FEB 26 · from €99"
                },
                {
                    type: "stat",
                    value: "39%",
                    label: "of your current skills will change by 2030",
                    source: "WEF 2025"
                },
                {
                    type: "stat",
                    value: "75%",
                    label: "of knowledge workers already use AI",
                    source: "Microsoft 2024"
                },
                {
                    type: "stat",
                    value: "88%",
                    label: "of companies use AI in at least one function",
                    source: "McKinsey 2025"
                },
                {
                    type: "stat",
                    value: "9×",
                    label: "surge in GenAI-skill job vacancies since 2022",
                    source: "World Bank 2025"
                },
                {
                    type: "stat",
                    value: "56%",
                    label: "of companies see no return on AI investment yet",
                    source: "PwC 2026"
                },
                {
                    type: "session-title",
                    title: "What separates the 1%.",
                    subtitle: "3.5 hours · 3 founders · 1 evening"
                },
                {
                    type: "session-part",
                    num: "01",
                    title: "Taste",
                    time: "50 min",
                    desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail.",
                    lead: "Roland"
                },
                {
                    type: "session-part",
                    num: "02",
                    title: "Leverage",
                    time: "50 min",
                    desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality.",
                    lead: "Ján"
                },
                {
                    type: "session-part",
                    num: "03",
                    title: "Clarity",
                    time: "40 min",
                    desc: "What stays human and what to delegate to AI. When to automate and when to consciously stop. Decision frameworks you'll actually use.",
                    lead: "Roman"
                },
                {
                    type: "session-part",
                    num: "04",
                    title: "Q&A",
                    time: "40 min",
                    desc: "Your questions. Your reality. Open and honest answers from people who work with AI daily.",
                    lead: "All"
                },
                {
                    type: "founders-title",
                    title: "Three Perspectives",
                    subtitle: "Art. Product. Transformation."
                },
                {
                    type: "founder",
                    name: "Roland Vraník",
                    role: "The Creative",
                    company: "Creative Director / Founder, SORRYWECAN",
                    tagline: "Made decisions that came at a high price. Now sees what creative teams often miss.",
                    image: "/founders/roland.jpg"
                },
                {
                    type: "founder",
                    name: "Ján Koscelanský",
                    role: "The Architect",
                    company: "CPO / Co-founder, SUDOLABS",
                    tagline: "Years of building products showed him exactly where teams lose months on what can now be done many times faster.",
                    image: "/founders/jan.jpg"
                },
                {
                    type: "founder",
                    name: "Roman Pii Wagner",
                    role: "The Navigator",
                    company: "Transformational Design",
                    tagline: "Turns confusion into priorities and priorities into concrete decisions.",
                    image: "/founders/roman.jpg"
                },
                {
                    type: "outcome-title",
                    title: "You Leave With"
                },
                {
                    type: "outcome",
                    num: 1,
                    title: "A Working System",
                    desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning."
                },
                {
                    type: "outcome",
                    num: 2,
                    title: "Less Noise, More Signal",
                    desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones."
                },
                {
                    type: "outcome",
                    num: 3,
                    title: "Your Edge",
                    desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently."
                },
                {
                    type: "outcome",
                    num: 4,
                    title: "A New Lens",
                    desc: "You won't leave with new tools. You'll leave with a different way of looking at what you already have."
                },
                {
                    type: "details",
                    items: [
                        { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
                        { label: "Time", value: "17:00 – 20:30", subvalue: "3.5 hours" },
                        { label: "Price", value: "from €99", subvalue: "per person" }
                    ]
                },
                {
                    type: "cta",
                    title: "Your Move.",
                    subline: "First session February 26.",
                    button: "I'm In",
                    link: "https://cal.com/researchlabsorrywecan/theshift"
                }
            ]
        },
        sk: {
            slides: [
                {
                    type: "title",
                    label: "THE MINDSHIFT",
                    title: "AI nástroje má dnes každý.\nRozhoduje spôsob myslenia.",
                    date: "BRATISLAVA · 26.2. · od 99 eur"
                },
                {
                    type: "stat",
                    value: "39%",
                    label: "vašich súčasných zručností sa zmení do 2030",
                    source: "WEF 2025"
                },
                {
                    type: "stat",
                    value: "75%",
                    label: "knowledge workers už používa AI",
                    source: "Microsoft 2024"
                },
                {
                    type: "stat",
                    value: "88%",
                    label: "firiem používa AI aspoň v jednej oblasti",
                    source: "McKinsey 2025"
                },
                {
                    type: "stat",
                    value: "9×",
                    label: "nárast pracovných ponúk vyžadujúcich GenAI zručnosti od 2022",
                    source: "World Bank 2025"
                },
                {
                    type: "stat",
                    value: "56%",
                    label: "firiem nevidí návratnosť investícií do AI",
                    source: "PwC 2026"
                },
                {
                    type: "session-title",
                    title: "Čo odlišuje to 1%.",
                    subtitle: "3.5 hodiny · 3 zakladatelia · 1 večer"
                },
                {
                    type: "session-part",
                    num: "01",
                    title: "Vkus",
                    time: "50 min",
                    desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail.",
                    lead: "Roland"
                },
                {
                    type: "session-part",
                    num: "02",
                    title: "Využitie",
                    time: "50 min",
                    desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete.",
                    lead: "Ján"
                },
                {
                    type: "session-part",
                    num: "03",
                    title: "Jasnosť",
                    time: "40 min",
                    desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať a kedy sa vedome zastaviť. Rozhodovacie rámce, ktoré viete reálne používať.",
                    lead: "Roman"
                },
                {
                    type: "session-part",
                    num: "04",
                    title: "Q&A",
                    time: "40 min",
                    desc: "Vaše otázky. Vaša realita. Otvorené a úprimné odpovede od ľudí, ktorí s AI pracujú denne.",
                    lead: "Všetci"
                },
                {
                    type: "founders-title",
                    title: "Tri Perspektívy",
                    subtitle: "Umenie. Produkt. Transformácia."
                },
                {
                    type: "founder",
                    name: "Roland Vraník",
                    role: "Umelec",
                    company: "Creative Director / Zakladateľ, SORRYWECAN",
                    tagline: "Prešiel si rozhodnutiami, ktoré mali vysokú cenu. Dnes vidí to, čo kreatívnym tímom často uniká.",
                    image: "/founders/roland.jpg"
                },
                {
                    type: "founder",
                    name: "Ján Koscelanský",
                    role: "Architekt",
                    company: "CPO / Spoluzakladateľ, SUDOLABS",
                    tagline: "Po rokoch v developmente presne vie, kde tímy trávia mesiace nad niečím, čo sa dnes dá zvládnuť mnohonásobne rýchlejšie.",
                    image: "/founders/jan.jpg"
                },
                {
                    type: "founder",
                    name: "Roman Pii Wagner",
                    role: "Navigátor",
                    company: "Transformačný dizajnér",
                    tagline: "Mení zmätok na priority a priority na konkrétne rozhodnutia.",
                    image: "/founders/roman.jpg"
                },
                {
                    type: "outcome-title",
                    title: "S Čím Odchádzate"
                },
                {
                    type: "outcome",
                    num: 1,
                    title: "Funkčný Systém",
                    desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno."
                },
                {
                    type: "outcome",
                    num: 2,
                    title: "Menej Šumu, Viac Signálu",
                    desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne."
                },
                {
                    type: "outcome",
                    num: 3,
                    title: "Vaša Výhoda",
                    desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak."
                },
                {
                    type: "outcome",
                    num: 4,
                    title: "Nová Optika",
                    desc: "Neodídete s novými nástrojmi. Odídete s iným pohľadom na to, čo už máte."
                },
                {
                    type: "details",
                    items: [
                        { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
                        { label: "Čas", value: "17:00 – 20:30", subvalue: "3.5 hodiny" },
                        { label: "Cena", value: "od €99", subvalue: "na osobu" }
                    ]
                },
                {
                    type: "cta",
                    title: "Váš Ťah.",
                    subline: "Prvá session 26. februára.",
                    button: "Idem Do Toho",
                    link: "https://cal.com/researchlabsorrywecan/theshift"
                }
            ]
        }
    }

    const t = content[lang]

    const slideClass = "w-full max-w-[430px] aspect-[9/16] md:w-[430px] md:h-[764px] bg-[#f4ede6] relative flex flex-col p-8 shadow-2xl overflow-hidden print:shadow-none print:w-[100%] print:h-[100vh] print:max-w-none print:aspect-auto"

    return (
        <>
            <style jsx global>{`
                .stories-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2.5rem;
                    padding: 2.5rem;
                    background: #e5e5e5;
                    min-height: 100vh;
                }
                @media print {
                    @page {
                        size: 100% 100%;
                        margin: 0;
                    }
                    html, body {
                        margin: 0;
                        padding: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .stories-container {
                        padding: 0;
                        gap: 0;
                        background: white;
                        display: block;
                    }
                    .story-slide {
                        page-break-after: always;
                        page-break-inside: avoid;
                        break-after: page;
                        break-inside: avoid;
                        width: 100% !important;
                        height: 100vh !important;
                        max-width: none !important;
                        aspect-ratio: auto !important;
                        box-shadow: none !important;
                    }
                    .story-slide:last-child {
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

            <div className="stories-container font-sans-brand text-[#0a0a0a]">
                {t.slides.map((slide: any, i: number) => (
                    <div key={i} className={`${slideClass} story-slide`}>
                        
                        <div className="flex-grow flex flex-col justify-center">
                            
                            {slide.type === 'title' && (
                                <div className="text-center">
                                    <p className="text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-12">{slide.label}</p>
                                    <h1 className="font-bold text-[36px] leading-[1.1] tracking-tight whitespace-pre-line">
                                        {slide.title}
                                    </h1>
                                    <p className="text-[11px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB] mt-12">{slide.date}</p>
                                </div>
                            )}

                            {slide.type === 'stat' && (
                                <div className="text-center px-4">
                                    <span className="text-[96px] font-bold text-[#0047BB] leading-none block mb-6">{slide.value}</span>
                                    <p className="text-[24px] font-medium leading-tight mb-4">{slide.label}</p>
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30">{slide.source}</p>
                                </div>
                            )}

                            {slide.type === 'session-title' && (
                                <div className="text-center px-4">
                                    <h2 className="font-bold text-[48px] leading-tight mb-8">{slide.title}</h2>
                                    <div className="w-16 h-1 bg-[#0047BB] mx-auto mb-8"></div>
                                    <p className="text-[14px] font-code-brand font-bold uppercase tracking-widest text-black/40">{slide.subtitle}</p>
                                </div>
                            )}

                            {slide.type === 'session-part' && (
                                <div className="px-4">
                                    <div className="flex justify-between items-baseline border-b border-black/10 pb-4 mb-6">
                                        <span className="text-[14px] font-code-brand font-bold text-[#0047BB]">{slide.num}</span>
                                        <span className="text-[12px] font-code-brand text-black/40">{slide.time}</span>
                                    </div>
                                    <h3 className="text-[42px] font-bold mb-6">{slide.title}</h3>
                                    <p className="text-[18px] leading-relaxed text-black/60 mb-8">{slide.desc}</p>
                                    <p className="text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">Lead: {slide.lead}</p>
                                </div>
                            )}

                            {slide.type === 'founders-title' && (
                                <div className="text-center px-4">
                                    <h2 className="font-bold text-[48px] leading-tight mb-4">{slide.title}</h2>
                                    <p className="text-[16px] text-black/50">{slide.subtitle}</p>
                                </div>
                            )}

                            {slide.type === 'founder' && (
                                <div className="text-center px-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 border-black/10">
                                        <img src={slide.image} alt={slide.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-[28px] font-bold mb-2">{slide.name}</h3>
                                    <p className="text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">{slide.role}</p>
                                    <p className="text-[12px] text-black/40 mb-8">{slide.company}</p>
                                    <p className="text-[18px] italic text-black/70 leading-relaxed">"{slide.tagline}"</p>
                                </div>
                            )}

                            {slide.type === 'outcome-title' && (
                                <div className="text-center px-4">
                                    <h2 className="font-bold text-[48px] leading-tight">{slide.title}</h2>
                                </div>
                            )}

                            {slide.type === 'outcome' && (
                                <div className="px-6 text-center">
                                    <div className="w-12 h-12 bg-[#0047BB] text-white rounded-full flex items-center justify-center text-[20px] font-bold mx-auto mb-8 shadow-lg">
                                        {slide.num}
                                    </div>
                                    <h3 className="text-[32px] font-bold mb-6">{slide.title}</h3>
                                    <p className="text-[18px] leading-relaxed text-black/60">{slide.desc}</p>
                                </div>
                            )}

                            {slide.type === 'details' && (
                                <div className="px-4">
                                    <div className="space-y-8">
                                        {slide.items.map((item: any, idx: number) => (
                                            <div key={idx} className="text-center border-b border-black/5 pb-6 last:border-0 last:pb-0">
                                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-2">{item.label}</p>
                                                <p className="text-[24px] font-bold mb-1">{item.value}</p>
                                                <p className="text-[14px] text-black/50">{item.subvalue}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {slide.type === 'cta' && (
                                <div className="text-center px-4">
                                    <h2 className="font-bold text-[56px] leading-tight mb-4">{slide.title}</h2>
                                    <p className="text-[18px] text-black/50 mb-12">{slide.subline}</p>
                                    
                                    <a 
                                        href={slide.link}
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-block bg-[#0047BB] px-10 py-5 hover:bg-black transition-colors cursor-pointer shadow-lg"
                                    >
                                        <p className="text-[14px] font-code-brand font-bold uppercase tracking-widest text-white">{slide.button}</p>
                                    </a>
                                </div>
                            )}

                        </div>

                        <div className="absolute bottom-8 left-0 w-full text-center">
                            <p className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-black/20">SORRYWECAN // RESEARCH LAB</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
