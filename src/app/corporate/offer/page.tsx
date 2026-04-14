"use client"

import React, { useState } from "react"

export default function CorporateOffer() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            meta: {
                label: "Corporate Workshop",
                edition: "2026 Edition",
            },
            cover: {
                overline: "Research Lab by SORRYWECAN",
                title: ["AI Literacy.", "Two Days."],
                hook: "Not a presentation about AI. A working session with your team.",
                price: "€600",
                priceLabel: "per person + VAT",
                details: "10–15 people · Bratislava · Your premises",
                footnote: "Day 1: How to think. Day 2: How to work.",
            },
            premise: {
                overline: "The Situation",
                title: "Your team is already using AI.",
                lines: [
                    "Individually. Randomly. Without a shared framework.",
                    "Some people use it daily. Some haven't started. Nobody owns the direction.",
                    "Tools keep multiplying. The thinking hasn't caught up.",
                    "That gap is where the risk lives.",
                ],
                statement: "We don't fix that with a slide deck.\nWe fix it with two days in the room.",
            },
            day1: {
                overline: "Day One",
                title: "The Mindshift",
                subtitle: "Thinking before tools.",
                description: "Before anyone touches a tool, the team needs a shared mental model. What AI actually is, what it isn't, and how to reason about it clearly. This is the foundation everything else builds on.",
                parts: [
                    {
                        time: "Morning",
                        title: "Where We Actually Are",
                        desc: "Not a market overview. An honest read of what's changed, what most companies are getting wrong, and what the early movers are doing differently.",
                        lead: "Roland + Ján",
                    },
                    {
                        time: "Midday",
                        title: "Frameworks for Thinking",
                        desc: "Three mental models that make every AI decision cleaner: how to leverage it without losing judgment, how to decide when nothing is certain, how to tell useful from noise.",
                        lead: "Roman + Roland",
                    },
                    {
                        time: "Afternoon",
                        title: "Your Reality",
                        desc: "We stop talking about the industry. We go to your team's specific blind spots, assumptions, and the decisions you're actually facing. Live facilitation. Real answers.",
                        lead: "Facilitated — all three",
                    },
                    {
                        time: "Close",
                        title: "Shared Direction",
                        desc: "One page. What matters. What to solve first. What to consciously let go. Every person in the room aligned before they leave.",
                        lead: "Roman",
                    },
                ],
            },
            day2: {
                overline: "Day Two",
                title: "The Practice",
                subtitle: "Tools, prompts, workflows — for your actual work.",
                description: "The mindset is set. Now we go practical. Not a general tour of AI tools. A working session built around what your team actually does.",
                parts: [
                    {
                        time: "Opening",
                        title: "What's Actually Possible",
                        desc: "A live demonstration of how we work with AI in our own daily practice. No slides. Screen share, real tasks, real output. Sets the ceiling for the room.",
                        lead: "Ján",
                    },
                    {
                        time: "Core",
                        title: "The Tool Stack",
                        desc: "Meeting notes and transcription. Deep research. Writing, editing, summarising. Knowledge management. Video and visual content. Multimodal workflows — text, image, voice, video together. What to use for what, and why.",
                        lead: "Ján + Roland",
                    },
                    {
                        time: "Workshop",
                        title: "How to Prompt Well",
                        desc: "Not a list of prompts to copy. The underlying logic. The mental model for writing prompts that actually work. Then practice — each person tries something live with their own real task.",
                        lead: "All three",
                    },
                    {
                        time: "Close",
                        title: "Your Problems, Live",
                        desc: "The best 90 minutes of the two days. Your team brings their actual challenges. We work on them in real time. This is where the workshop becomes useful the next morning.",
                        lead: "All three + your team",
                    },
                ],
            },
            who: {
                overline: "Who You Work With",
                founders: [
                    {
                        name: "Roland Vraník",
                        role: "Taste",
                        line: "Creative Director, SORRYWECAN. Campaigns for Meta, Audi, Tatra banka, Samsung.",
                    },
                    {
                        name: "Ján Koscelanský",
                        role: "Leverage",
                        line: "CPO & Co-founder, SUDOLABS. Years shipping digital products across fintech and enterprise.",
                    },
                    {
                        name: "Roman Pii Wagner",
                        role: "Clarity",
                        line: "Transformational designer. Turns confusion into priorities and priorities into decisions that hold.",
                    },
                ],
                trust: "Creators, not theorists. Building their own companies and using AI in their actual daily work.",
            },
            outcomes: {
                overline: "What You Leave With",
                items: [
                    {
                        num: "01",
                        title: "A shared mental model",
                        desc: "Not ten people with ten different ideas of what AI is. One team, one framework, one direction.",
                    },
                    {
                        num: "02",
                        title: "A working tool stack",
                        desc: "Specific tools for your specific workflow. Not generic. Built around what your team actually does.",
                    },
                    {
                        num: "03",
                        title: "Prompts that work",
                        desc: "A curated set of prompts for your context. Plus the logic to write your own.",
                    },
                    {
                        num: "04",
                        title: "A decision for Monday",
                        desc: "Not a report to review later. Something concrete to start doing differently the next morning.",
                    },
                    {
                        num: "05",
                        title: "30-day follow-up",
                        desc: "A call two weeks after delivery. What came up? What's working? What needs adjusting? Included.",
                    },
                    {
                        num: "06",
                        title: "Community access",
                        desc: "Every participant gets 30 days inside our Circle community. Continue learning, access the library, join the next webinar.",
                    },
                ],
            },
            logistics: {
                overline: "The Details",
                items: [
                    { label: "Price", value: "€600 / person", note: "+ VAT" },
                    { label: "Group", value: "10–15 people", note: "Leadership or key team" },
                    { label: "Duration", value: "2 days", note: "Full days, back to back" },
                    { label: "Location", value: "Your premises or ours", note: "Bratislava" },
                    { label: "Pre-work", value: "30 min call", note: "We understand your team first" },
                    { label: "Follow-up", value: "30 days", note: "Included, no extra charge" },
                ],
                note: "We ask for a 30-minute call before every corporate workshop. Not a sales call — we need to understand your team's actual context to make Day 2 useful.",
            },
            cta: {
                overline: "Next Step",
                title: "One call. No commitment.",
                desc: "20 minutes. We figure out if this is a fit. If it's not, we'll say so.",
                button: "Book the Call",
                cal: "https://cal.com/researchlabsorrywecan/30min",
                email: "hello@researchlab.sk",
                guarantee: "No pressure. If it's not the right time or fit, we'll tell you directly.",
            },
        },
        sk: {
            meta: {
                label: "Firemný Workshop",
                edition: "Edícia 2026",
            },
            cover: {
                overline: "Research Lab by SORRYWECAN",
                title: ["AI Gramotnosť.", "Dva Dni."],
                hook: "Nie prezentácia o AI. Pracovné stretnutie s vaším tímom.",
                price: "€600",
                priceLabel: "na osobu + DPH",
                details: "10–15 ľudí · Bratislava · Vaše priestory",
                footnote: "Deň 1: Ako myslieť. Deň 2: Ako pracovať.",
            },
            premise: {
                overline: "Situácia",
                title: "Váš tím už AI používa.",
                lines: [
                    "Individuálne. Náhodne. Bez spoločného rámca.",
                    "Niektorí denne. Iní ešte nezačali. Nikto nedrží smer.",
                    "Nástrojov pribúda. Myslenie nestíha.",
                    "V tej medzere žije riziko.",
                ],
                statement: "Nezmeníme to prezentáciou.\nZmeníme to dvoma dňami v miestnosti.",
            },
            day1: {
                overline: "Deň Jeden",
                title: "The Mindshift",
                subtitle: "Myslenie pred nástrojmi.",
                description: "Skôr než sa niekto dotkne nástroja, potrebuje tím spoločný mentálny model. Čo AI skutočne je, čo nie je, a ako o nej jasne uvažovať. To je základ, na ktorom stojí všetko ostatné.",
                parts: [
                    {
                        time: "Ráno",
                        title: "Kde Naozaj Sme",
                        desc: "Nie prehľad trhu. Úprimné zhodnotenie toho, čo sa zmenilo, kde sa väčšina firiem mýli a čo robia tí, ktorí sú napred.",
                        lead: "Roland + Ján",
                    },
                    {
                        time: "Poludnie",
                        title: "Rámce Myslenia",
                        desc: "Tri mentálne modely, ktoré zjednodušia každé AI rozhodnutie: ako využiť AI bez straty úsudku, ako sa rozhodovať v neistote, ako odlíšiť užitočné od zbytočného.",
                        lead: "Roman + Roland",
                    },
                    {
                        time: "Poobede",
                        title: "Vaša Realita",
                        desc: "Prestaneme hovoriť o odvetví. Ideme k slepým miestam vášho tímu, predpokladom a rozhodnutiam, ktorým skutočne čelíte. Živá facilitácia. Skutočné odpovede.",
                        lead: "Facilitované — všetci traja",
                    },
                    {
                        time: "Záver",
                        title: "Spoločný Smer",
                        desc: "Jedna stránka. Čo je dôležité. Čo riešiť najskôr. Čo vedome pustiť. Každý v miestnosti zladený predtým, ako odíde.",
                        lead: "Roman",
                    },
                ],
            },
            day2: {
                overline: "Deň Dva",
                title: "Prax",
                subtitle: "Nástroje, prompty, workflow — pre vašu skutočnú prácu.",
                description: "Myslenie je nastavené. Teraz ideme prakticky. Nie všeobecný prehľad AI nástrojov. Pracovné stretnutie postavené okolo toho, čo váš tím skutočne robí.",
                parts: [
                    {
                        time: "Otvorenie",
                        title: "Čo Je Skutočne Možné",
                        desc: "Živá ukážka toho, ako pracujeme s AI v našej každodennej praxi. Žiadne slidy. Zdieľanie obrazovky, skutočné úlohy, skutočný výstup. Nastaví strop pre celú miestnosť.",
                        lead: "Ján",
                    },
                    {
                        time: "Jadro",
                        title: "Stack Nástrojov",
                        desc: "Zápisnice a prepisy z porád. Hĺbkový výskum. Písanie, úpravy, sumarizácia. Knowledge management. Video a vizuálny obsah. Multimodálne workflow — text, obraz, hlas, video dohromady. Čo na čo, a prečo.",
                        lead: "Ján + Roland",
                    },
                    {
                        time: "Workshop",
                        title: "Ako Dobre Promptovať",
                        desc: "Nie zoznam promptov na kopírovanie. Základná logika. Mentálny model pre písanie promptov, ktoré naozaj fungujú. Potom prax — každý skúsi niečo živé so svojou skutočnou úlohou.",
                        lead: "Všetci traja",
                    },
                    {
                        time: "Záver",
                        title: "Vaše Problémy, Živo",
                        desc: "Najlepších 90 minút dvoch dní. Váš tím prinesie skutočné výzvy. Riešime ich v reálnom čase. Tu sa workshop stáva užitočným na ďalší deň ráno.",
                        lead: "Všetci traja + váš tím",
                    },
                ],
            },
            who: {
                overline: "S Kým Pracujete",
                founders: [
                    {
                        name: "Roland Vraník",
                        role: "Vkus",
                        line: "Creative Director, SORRYWECAN. Kampane pre Meta, Audi, Tatra banku, Samsung.",
                    },
                    {
                        name: "Ján Koscelanský",
                        role: "Využitie",
                        line: "CPO a spoluzakladateľ, SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom a enterprise.",
                    },
                    {
                        name: "Roman Pii Wagner",
                        role: "Jasnosť",
                        line: "Transformačný dizajnér. Mení zmätok na priority a priority na rozhodnutia, ktoré vydržia.",
                    },
                ],
                trust: "Tvorcovia, nie teoretici. Budujú vlastné firmy a používajú AI v skutočnej každodennej práci.",
            },
            outcomes: {
                overline: "S Čím Odchádzate",
                items: [
                    {
                        num: "01",
                        title: "Spoločný mentálny model",
                        desc: "Nie desať ľudí s desiatimi rôznymi predstavami o AI. Jeden tím, jeden rámec, jeden smer.",
                    },
                    {
                        num: "02",
                        title: "Funkčný stack nástrojov",
                        desc: "Konkrétne nástroje pre váš konkrétny workflow. Nie všeobecné. Postavené okolo toho, čo váš tím skutočne robí.",
                    },
                    {
                        num: "03",
                        title: "Prompty, ktoré fungujú",
                        desc: "Kurátorovaná sada promptov pre váš kontext. Plus logika na písanie vlastných.",
                    },
                    {
                        num: "04",
                        title: "Rozhodnutie na pondelok",
                        desc: "Nie správa na neskoršie prečítanie. Niečo konkrétne, čo začnete robiť inak hneď ráno.",
                    },
                    {
                        num: "05",
                        title: "30-dňový follow-up",
                        desc: "Hovor dva týždne po workshope. Čo vyvstalo? Čo funguje? Čo treba upraviť? V cene.",
                    },
                    {
                        num: "06",
                        title: "Prístup do komunity",
                        desc: "Každý účastník dostane 30 dní v našej Circle komunite. Pokračujte v učení, pristupujte k knižnici, zúčastnite sa ďalšieho webinára.",
                    },
                ],
            },
            logistics: {
                overline: "Detaily",
                items: [
                    { label: "Cena", value: "€600 / osoba", note: "+ DPH" },
                    { label: "Skupina", value: "10–15 ľudí", note: "Vedenie alebo kľúčový tím" },
                    { label: "Trvanie", value: "2 dni", note: "Celé dni, po sebe" },
                    { label: "Miesto", value: "Vaše priestory alebo naše", note: "Bratislava" },
                    { label: "Príprava", value: "30 min hovor", note: "Najprv pochopíme váš tím" },
                    { label: "Follow-up", value: "30 dní", note: "V cene, bez príplatku" },
                ],
                note: "Pred každým firemným workshopom žiadame 30-minútový hovor. Nie predajný hovor — potrebujeme pochopiť skutočný kontext vášho tímu, aby bol Deň 2 skutočne užitočný.",
            },
            cta: {
                overline: "Ďalší Krok",
                title: "Jeden hovor. Žiadny záväzok.",
                desc: "20 minút. Zistíme, či je to fit. Ak nie, povieme priamo.",
                button: "Rezervovať Hovor",
                cal: "https://cal.com/researchlabsorrywecan/30min",
                email: "hello@researchlab.sk",
                guarantee: "Žiadny tlak. Ak to nie je správny čas alebo fit, povieme vám priamo.",
            },
        },
    }

    const t = content[lang]

    const slide = "page-slide w-full md:w-[297mm] bg-[#e8e1da] relative print:w-[297mm] print:h-[210mm] print:overflow-hidden"
    const tall = "min-h-screen md:min-h-[210mm]"

    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

                * { box-sizing: border-box; }

                .page-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: #c8c4be;
                }

                @media (min-width: 768px) {
                    .page-container {
                        gap: 2px;
                        padding: 2rem;
                        background: #c8c4be;
                    }
                }

                @media print {
                    @page {
                        size: 297mm 210mm landscape;
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
                    .no-print { display: none !important; }
                }

                .swiss-rule {
                    width: 100%;
                    height: 1px;
                    background: #0a0a0a;
                    opacity: 0.15;
                }

                .swiss-rule-strong {
                    width: 100%;
                    height: 1px;
                    background: #0a0a0a;
                    opacity: 0.6;
                }

                .blue-rule {
                    width: 100%;
                    height: 2px;
                    background: #0047BB;
                }
            `}</style>

            {/* Controls */}
            <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
                <button
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#e8e1da] text-[#0a0a0a] hover:bg-black hover:text-white transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
                <button
                    onClick={() => window.print()}
                    className="hidden md:block text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white hover:bg-black transition-colors"
                >
                    PDF
                </button>
            </div>

            <div className="page-container font-sans-brand text-[#0a0a0a]">

                {/* ── SLIDE 1: COVER ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/40">
                            {t.cover.overline}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/30">
                            {t.meta.edition}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    {/* Main content — Swiss grid */}
                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — title */}
                        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 border-b md:border-b-0 md:border-r border-black/15">
                            <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-6 md:mb-10">
                                {t.meta.label}
                            </p>
                            <h1 className="font-syne font-bold text-[44px] md:text-[72px] leading-[0.93] tracking-tighter">
                                {t.cover.title[0]}<br />
                                {t.cover.title[1]}
                            </h1>
                            <div className="blue-rule mt-8 md:mt-10 mb-0 max-w-[60px]" />
                            <p className="mt-6 md:mt-8 text-[14px] md:text-[17px] text-black/55 leading-relaxed max-w-sm">
                                {t.cover.hook}
                            </p>
                        </div>

                        {/* Right — price + details */}
                        <div className="w-full md:w-[220px] flex flex-col px-8 md:px-10 py-10 md:py-0 justify-center gap-8">
                            <div>
                                <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/30 mb-2">Investment</p>
                                <p className="font-syne font-bold text-[48px] md:text-[56px] text-[#0047BB] leading-none">
                                    {t.cover.price}
                                </p>
                                <p className="text-[11px] font-code-brand text-black/40 mt-1 uppercase tracking-widest">
                                    {t.cover.priceLabel}
                                </p>
                            </div>

                            <div className="swiss-rule" />

                            <div>
                                <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/30 mb-3">Format</p>
                                <p className="text-[12px] md:text-[13px] text-black/65 leading-relaxed">
                                    {t.cover.details}
                                </p>
                            </div>

                            <div className="swiss-rule" />

                            <div>
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold text-[#0047BB] uppercase tracking-[0.25em] leading-relaxed">
                                    {t.cover.footnote}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                            RESEARCH LAB // SORRYWECAN
                        </span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">01</span>
                    </div>
                </div>

                {/* ── SLIDE 2: THE PREMISE ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.premise.overline}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — title */}
                        <div className="w-full md:w-[280px] flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 border-b md:border-b-0 md:border-r border-black/15">
                            <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.0] tracking-tighter">
                                {t.premise.title}
                            </h2>
                        </div>

                        {/* Right — lines + statement */}
                        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 gap-0">
                            <div className="space-y-0">
                                {t.premise.lines.map((line, i) => (
                                    <div key={i}>
                                        <p className="text-[15px] md:text-[18px] text-black/70 leading-relaxed py-4 md:py-5">
                                            {line}
                                        </p>
                                        {i < t.premise.lines.length - 1 && <div className="swiss-rule" />}
                                    </div>
                                ))}
                            </div>

                            <div className="blue-rule mt-8 md:mt-10 mb-6 md:mb-8" />

                            <p className="font-syne font-bold text-[18px] md:text-[24px] text-[#0047BB] leading-snug tracking-tight whitespace-pre-line">
                                {t.premise.statement}
                            </p>
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">02</span>
                    </div>
                </div>

                {/* ── SLIDE 3: DAY ONE ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.day1.overline}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-code-brand uppercase tracking-[0.35em] text-black/30">
                            {t.day1.subtitle}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — title */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center px-8 md:px-10 py-8 md:py-0 border-b md:border-b-0 md:border-r border-black/15">
                            <h2 className="font-syne font-bold text-[36px] md:text-[48px] leading-[0.95] tracking-tighter">
                                {t.day1.title}
                            </h2>
                            <div className="blue-rule mt-6 mb-5 max-w-[40px]" />
                            <p className="text-[11px] md:text-[12px] text-black/45 leading-relaxed">
                                {t.day1.description}
                            </p>
                        </div>

                        {/* Right — four parts */}
                        <div className="flex-1 flex flex-col">
                            {t.day1.parts.map((part, i) => (
                                <div key={i} className="flex-1 flex flex-col md:flex-row items-stretch border-b border-black/10 last:border-b-0">
                                    {/* Time */}
                                    <div className="w-full md:w-24 px-6 md:px-8 py-4 md:py-0 flex md:flex-col md:justify-center border-b md:border-b-0 md:border-r border-black/10">
                                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30">
                                            {part.time}
                                        </p>
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 px-6 md:px-8 py-4 md:py-5 flex flex-col justify-center">
                                        <p className="font-syne font-bold text-[16px] md:text-[20px] tracking-tight">{part.title}</p>
                                        <p className="text-[11px] md:text-[12px] text-black/55 mt-2 leading-relaxed">{part.desc}</p>
                                    </div>
                                    {/* Lead */}
                                    <div className="w-full md:w-32 px-6 md:px-6 py-3 md:py-0 flex md:flex-col md:justify-center border-t md:border-t-0 md:border-l border-black/10">
                                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB] leading-relaxed">
                                            {part.lead}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">03</span>
                    </div>
                </div>

                {/* ── SLIDE 4: DAY TWO ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.day2.overline}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-code-brand uppercase tracking-[0.35em] text-black/30">
                            {t.day2.subtitle}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — title */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center px-8 md:px-10 py-8 md:py-0 border-b md:border-b-0 md:border-r border-black/15 bg-[#0047BB]/[0.03]">
                            <h2 className="font-syne font-bold text-[36px] md:text-[48px] leading-[0.95] tracking-tighter">
                                {t.day2.title}
                            </h2>
                            <div className="blue-rule mt-6 mb-5 max-w-[40px]" />
                            <p className="text-[11px] md:text-[12px] text-black/45 leading-relaxed">
                                {t.day2.description}
                            </p>
                        </div>

                        {/* Right — four parts */}
                        <div className="flex-1 flex flex-col">
                            {t.day2.parts.map((part, i) => (
                                <div key={i} className="flex-1 flex flex-col md:flex-row items-stretch border-b border-black/10 last:border-b-0">
                                    <div className="w-full md:w-24 px-6 md:px-8 py-4 md:py-0 flex md:flex-col md:justify-center border-b md:border-b-0 md:border-r border-black/10">
                                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30">
                                            {part.time}
                                        </p>
                                    </div>
                                    <div className="flex-1 px-6 md:px-8 py-4 md:py-5 flex flex-col justify-center">
                                        <p className="font-syne font-bold text-[16px] md:text-[20px] tracking-tight">{part.title}</p>
                                        <p className="text-[11px] md:text-[12px] text-black/55 mt-2 leading-relaxed">{part.desc}</p>
                                    </div>
                                    <div className="w-full md:w-32 px-6 md:px-6 py-3 md:py-0 flex md:flex-col md:justify-center border-t md:border-t-0 md:border-l border-black/10">
                                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB] leading-relaxed">
                                            {part.lead}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">04</span>
                    </div>
                </div>

                {/* ── SLIDE 5: WHO ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.who.overline}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — trust line */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center px-8 md:px-10 py-8 md:py-0 border-b md:border-b-0 md:border-r border-black/15">
                            <p className="text-[11px] md:text-[12px] text-black/45 leading-relaxed">
                                {t.who.trust}
                            </p>
                        </div>

                        {/* Right — three founders in Swiss grid */}
                        <div className="flex-1 flex flex-col md:flex-row">
                            {t.who.founders.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex-1 flex flex-col justify-center px-8 md:px-10 py-10 md:py-0 border-b md:border-b-0 md:border-r border-black/10 last:border-r-0"
                                >
                                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-4">
                                        {f.role}
                                    </p>
                                    <div className="swiss-rule mb-5" />
                                    <p className="font-syne font-bold text-[22px] md:text-[26px] leading-tight tracking-tight">
                                        {f.name}
                                    </p>
                                    <p className="text-[11px] md:text-[12px] text-black/50 mt-4 leading-relaxed">
                                        {f.line}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">05</span>
                    </div>
                </div>

                {/* ── SLIDE 6: OUTCOMES ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.outcomes.overline}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-2 px-0 md:px-0">
                        {t.outcomes.items.map((item, i) => (
                            <div
                                key={i}
                                className={`
                                    flex flex-col justify-between p-6 md:p-8
                                    border-b border-black/10
                                    ${i % 3 !== 2 ? "md:border-r" : ""}
                                    ${i < 3 ? "md:border-b" : "md:border-b-0"}
                                `}
                            >
                                <p className="text-[10px] font-code-brand font-bold text-black/20 mb-3">{item.num}</p>
                                <div>
                                    <p className="font-syne font-bold text-[17px] md:text-[20px] leading-tight tracking-tight mb-2">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] md:text-[12px] text-black/50 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">06</span>
                    </div>
                </div>

                {/* ── SLIDE 7: LOGISTICS ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.logistics.overline}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — logistics grid */}
                        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 md:py-0">
                            <div className="space-y-0">
                                {t.logistics.items.map((item, i) => (
                                    <div key={i}>
                                        <div className="flex items-baseline justify-between py-4 md:py-5">
                                            <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/35 w-24">
                                                {item.label}
                                            </p>
                                            <div className="flex-1 flex items-baseline justify-between ml-8">
                                                <p className="font-syne font-bold text-[18px] md:text-[22px] tracking-tight">
                                                    {item.value}
                                                </p>
                                                <p className="text-[10px] md:text-[11px] text-black/35 font-code-brand">
                                                    {item.note}
                                                </p>
                                            </div>
                                        </div>
                                        {i < t.logistics.items.length - 1 && <div className="swiss-rule" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — note */}
                        <div className="w-full md:w-[240px] flex flex-col justify-center px-8 md:px-10 py-10 md:py-0 border-t md:border-t-0 md:border-l border-black/15">
                            <div className="blue-rule mb-6 max-w-[32px]" />
                            <p className="text-[11px] md:text-[12px] text-black/50 leading-relaxed">
                                {t.logistics.note}
                            </p>
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">RESEARCH LAB // SORRYWECAN</span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">07</span>
                    </div>
                </div>

                {/* ── SLIDE 8: CTA ── */}
                <div className={`${slide} ${tall} flex flex-col`}>
                    <div className="flex items-center justify-between px-8 md:px-14 pt-8 md:pt-10 pb-6">
                        <span className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                            {t.cta.overline}
                        </span>
                    </div>
                    <div className="swiss-rule-strong" />

                    <div className="flex flex-col md:flex-row flex-1">
                        {/* Left — headline */}
                        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 md:py-0 border-b md:border-b-0 md:border-r border-black/15">
                            <h2 className="font-syne font-bold text-[40px] md:text-[64px] leading-[0.93] tracking-tighter">
                                {t.cta.title}
                            </h2>
                            <div className="blue-rule mt-8 mb-6 max-w-[48px]" />
                            <p className="text-[14px] md:text-[16px] text-black/50 max-w-sm leading-relaxed">
                                {t.cta.desc}
                            </p>
                            <p className="text-[11px] md:text-[12px] text-black/30 mt-6 max-w-xs leading-relaxed">
                                {t.cta.guarantee}
                            </p>
                        </div>

                        {/* Right — action */}
                        <div className="w-full md:w-[240px] flex flex-col justify-center px-8 md:px-10 py-10 md:py-0 gap-6">
                            <a
                                href={t.cta.cal}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-[#0047BB] px-0 py-4 md:py-5 text-center hover:bg-black transition-colors"
                            >
                                <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.25em] text-white">
                                    {t.cta.button}
                                </span>
                            </a>

                            <div className="swiss-rule" />

                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.35em] text-black/30 mb-2">Email</p>
                                <a
                                    href={`mailto:${t.cta.email}`}
                                    className="text-[12px] md:text-[13px] text-[#0047BB] hover:underline font-code-brand"
                                >
                                    {t.cta.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="swiss-rule-strong" />
                    <div className="flex items-center justify-between px-8 md:px-14 py-4">
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                            RESEARCH LAB // SORRYWECAN // 2026
                        </span>
                        <span className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">08</span>
                    </div>
                </div>

            </div>
        </>
    )
}
