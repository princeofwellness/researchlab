"use client"

import React, { useState } from "react"

export default function CorporateOffer() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                label: "Corporate Workshop",
                title: { line1: "Two days.", line2: "Real change." },
                desc: "Not a lecture. A guided experience. Your team thinks, talks, and leaves with tools they'll actually use.",
                info: "2 DAYS · 10–15 PEOPLE · €600 / PERSON + VAT",
            },
            problem: {
                title: "Where Most Teams Are Right Now.",
                cards: [
                    { headline: "AI is everywhere.", subline: "Understanding is not." },
                    { headline: "Everyone is experimenting.", subline: "Nobody owns the direction." },
                    { headline: "Tools are being adopted.", subline: "Thinking hasn't caught up." },
                    { headline: "The pressure is real.", subline: "The clarity isn't." },
                ],
            },
            day1: {
                label: "Day One",
                title: "The Mindshift.",
                subtitle: "Before tools — thinking. Before doing — understanding.",
                desc: "Day one is not a presentation. It's a structured conversation. We start with a ritual, we slow down, and we go deep.",
                parts: [
                    {
                        num: "01",
                        title: "Tea Opening Ceremony",
                        time: "30 min",
                        lead: "All",
                        desc: "We open with intention. Tea, presence, and a simple question for everyone in the circle: where are you with AI right now? No right answers. This sets the tone.",
                    },
                    {
                        num: "02",
                        title: "Three Perspectives",
                        time: "3 × 30 min",
                        lead: "Prince · Diabladin · Roman",
                        desc: "Each facilitator brings their lens. How AI changes creativity and culture. How it reshapes the way we build and work. How to make decisions in an environment that won't stop moving. Short. Sharp. Personal.",
                    },
                    {
                        num: "03",
                        title: "Circle Discussion",
                        time: "60 min",
                        lead: "Facilitated",
                        desc: "We sit back in the circle. Your team brings the real questions — the ones that don't get asked in regular meetings. Facilitated but open. This is where the honesty comes out.",
                    },
                    {
                        num: "04",
                        title: "Panel",
                        time: "45 min",
                        lead: "All three + your team",
                        desc: "Open panel. Your team asks anything. We answer honestly — from experience, not theory. What we'd do in your position. What we'd stop doing. What we'd start Monday.",
                    },
                ],
            },
            day2: {
                label: "Day Two",
                title: "The Practice.",
                subtitle: "Tools, prompts, and workflows built around your actual work.",
                desc: "Day two is hands-on. We take what emerged from day one and turn it into working habits. No general AI tour — everything is tailored to your team's reality.",
                parts: [
                    {
                        num: "01",
                        title: "What's Actually Possible",
                        time: "45 min",
                        lead: "Diabladin",
                        desc: "A live demonstration. Real tools, real tasks, real output. No slides — screen share of an actual working session. Sets the ceiling for the room.",
                    },
                    {
                        num: "02",
                        title: "The Tool Stack",
                        time: "60 min",
                        lead: "Diabladin + Prince",
                        desc: "Meeting notes and transcription. Deep research. Writing and editing. Knowledge management. Video and visual content. What to use, what to combine, what to skip. Tailored to your workflow.",
                    },
                    {
                        num: "03",
                        title: "Prompts That Work",
                        time: "45 min",
                        lead: "All",
                        desc: "Not a list to copy. The logic behind prompting well. The mental model. Then practice — everyone tries something live with their own real task.",
                    },
                    {
                        num: "04",
                        title: "Your Problems, Live",
                        time: "90 min",
                        lead: "All three + your team",
                        desc: "The best part. Your team brings actual challenges. We work on them together in real time. This is where the two days become useful starting the next morning.",
                    },
                ],
            },
            facilitators: {
                title: "Who Facilitates.",
                subtitle: "Practitioners, not theorists.",
                cards: [
                    {
                        name: "Prince of Wellness",
                        role: "Vision & Community",
                        bio: "Builder and creative working at the intersection of AI, culture, and human development. Founder of Research Lab. Works with AI daily across content, strategy, and community building.",
                        tagline: "The thinking behind the tools matters more than the tools.",
                    },
                    {
                        name: "Diabladin",
                        role: "Technology & Tools",
                        bio: "Deep practitioner of AI systems, automation, and agentic workflows. Builds and ships AI-powered products. Translates the complex into what actually works in a team's day-to-day.",
                        tagline: "What seems impossible today is a workflow next quarter.",
                    },
                    {
                        name: "Roman P. Wagner",
                        role: "Clarity & Decision",
                        bio: "Transformational designer. Helps teams cut through complexity, align on what matters, and make decisions that hold under pressure. Facilitates the conversations most teams avoid.",
                        tagline: "Clarity is not a luxury. It's what makes everything else possible.",
                    },
                ],
            },
            outcomes: {
                title: "You Leave With.",
                items: [
                    { title: "A Shared Framework", desc: "One team, one way of thinking about AI. Not ten people with ten different approaches pulling in different directions." },
                    { title: "A Working Tool Stack", desc: "Specific tools for your specific workflow. Built around what your team actually does, not what everyone else recommends." },
                    { title: "Prompts That Work", desc: "A curated set for your context. Plus the logic to write your own when the tools change." },
                    { title: "A Decision for Monday", desc: "Not a report to read later. Something concrete to start doing differently the next morning." },
                    { title: "30-Day Follow-Up", desc: "A call two weeks after. What came up? What's working? What needs adjusting? Included, no extra charge." },
                    { title: "Community Access", desc: "Every participant gets 30 days inside Research Lab's Circle community. Continue learning, join the next webinar, access the library." },
                ],
            },
            details: {
                title: "Details.",
                items: [
                    { label: "Investment", value: "€600 / person", sub: "+ VAT" },
                    { label: "Group Size", value: "10–15 people", sub: "Leadership or key team" },
                    { label: "Duration", value: "2 full days", sub: "Back to back" },
                    { label: "Location", value: "Your space or ours", sub: "Bratislava" },
                    { label: "Pre-Workshop", value: "30 min call", sub: "We understand your team first" },
                    { label: "Follow-Up", value: "30 days", sub: "Included" },
                ],
            },
            cta: {
                headline: "Let's Talk.",
                subline: "20-minute call. No commitment. We figure out if it's a fit.",
                button: "Book a Discovery Call",
                guarantee: "If it's not the right fit, we'll say so directly.",
                contact: "hello@researchlab.sk",
            },
        },
        sk: {
            hero: {
                label: "Firemný Workshop",
                title: { line1: "Dva dni.", line2: "Skutočná zmena." },
                desc: "Nie prednáška. Riadená skúsenosť. Váš tím premýšľa, hovorí a odchádza s nástrojmi, ktoré naozaj použijú.",
                info: "2 DNI · 10–15 ĽUDÍ · €600 / OSOBA + DPH",
            },
            problem: {
                title: "Kde Väčšina Tímov Je Práve Teraz.",
                cards: [
                    { headline: "AI je všade.", subline: "Pochopenie nie." },
                    { headline: "Všetci experimentujú.", subline: "Nikto nedrží smer." },
                    { headline: "Nástroje sa adoptujú.", subline: "Myslenie nestíha." },
                    { headline: "Tlak je reálny.", subline: "Jasnosť nie." },
                ],
            },
            day1: {
                label: "Deň Jeden",
                title: "The Mindshift.",
                subtitle: "Pred nástrojmi — myslenie. Pred konaním — pochopenie.",
                desc: "Prvý deň nie je prezentácia. Je to štruktúrovaná konverzácia. Začíname rituálom, spomaľujeme a ideme do hĺbky.",
                parts: [
                    {
                        num: "01",
                        title: "Čajový Úvodný Rituál",
                        time: "30 min",
                        lead: "Všetci",
                        desc: "Otvárame s úmyslom. Čaj, prítomnosť a jednoduchá otázka pre každého v kruhu: kde si teraz s AI? Žiadne správne odpovede. Toto nastavuje tón.",
                    },
                    {
                        num: "02",
                        title: "Tri Perspektívy",
                        time: "3 × 30 min",
                        lead: "Prince · Diabladin · Roman",
                        desc: "Každý facilitátor prináša svoj pohľad. Ako AI mení kreativitu a kultúru. Ako pretvára spôsob, akým budujeme a pracujeme. Ako sa rozhodovať v prostredí, ktoré sa neprestane hýbať. Krátko. Ostro. Osobne.",
                    },
                    {
                        num: "03",
                        title: "Diskusia v Kruhu",
                        time: "60 min",
                        lead: "Facilitované",
                        desc: "Sadneme späť do kruhu. Váš tím prinesie skutočné otázky — tie, ktoré sa na bežných poradách nepýtajú. Facilitované, ale otvorené. Tu vyjde úprimnosť.",
                    },
                    {
                        num: "04",
                        title: "Panel",
                        time: "45 min",
                        lead: "Všetci traja + váš tím",
                        desc: "Otvorený panel. Váš tím sa pýta čokoľvek. Odpovedáme úprimne — zo skúsenosti, nie teórie. Čo by sme robili na vašom mieste. Čo by sme prestali robiť. Čo by sme začali v pondelok.",
                    },
                ],
            },
            day2: {
                label: "Deň Dva",
                title: "Prax.",
                subtitle: "Nástroje, prompty a workflow postavené okolo vašej skutočnej práce.",
                desc: "Druhý deň je praktický. Berieme to, čo vzišlo z prvého dňa a meníme to na fungujúce návyky. Žiadna všeobecná prehliadka AI — všetko je prispôsobené realite vášho tímu.",
                parts: [
                    {
                        num: "01",
                        title: "Čo Je Skutočne Možné",
                        time: "45 min",
                        lead: "Diabladin",
                        desc: "Živá ukážka. Skutočné nástroje, skutočné úlohy, skutočný výstup. Žiadne slidy — zdieľanie obrazovky z reálnej pracovnej session. Nastaví strop pre celú miestnosť.",
                    },
                    {
                        num: "02",
                        title: "Stack Nástrojov",
                        time: "60 min",
                        lead: "Diabladin + Prince",
                        desc: "Zápisnice a prepisy. Hĺbkový výskum. Písanie a úpravy. Knowledge management. Video a vizuálny obsah. Čo používať, čo kombinovať, čo preskočiť. Prispôsobené vášmu workflow.",
                    },
                    {
                        num: "03",
                        title: "Prompty, Ktoré Fungujú",
                        time: "45 min",
                        lead: "Všetci",
                        desc: "Nie zoznam na kopírovanie. Logika za dobrým promptovaním. Mentálny model. Potom prax — každý skúsi niečo živé so svojou skutočnou úlohou.",
                    },
                    {
                        num: "04",
                        title: "Vaše Problémy, Živo",
                        time: "90 min",
                        lead: "Všetci traja + váš tím",
                        desc: "Najlepšia časť. Váš tím prinesie skutočné výzvy. Riešime ich spolu v reálnom čase. Tu sa oba dni stanú užitočnými od nasledujúceho rána.",
                    },
                ],
            },
            facilitators: {
                title: "Kto Facilituje.",
                subtitle: "Praktici, nie teoretici.",
                cards: [
                    {
                        name: "Prince of Wellness",
                        role: "Vízia & Komunita",
                        bio: "Tvorca a kreatívec pracujúci na priesečníku AI, kultúry a ľudského rozvoja. Zakladateľ Research Lab. Pracuje s AI denne naprieč obsahom, stratégiou a budovaním komunity.",
                        tagline: "Myslenie za nástrojmi je dôležitejšie ako nástroje samotné.",
                    },
                    {
                        name: "Diabladin",
                        role: "Technológia & Nástroje",
                        bio: "Hlboký praktik AI systémov, automatizácie a agentných workflow. Buduje a dodáva AI produkty. Prekladá komplexné do toho, čo skutočne funguje v každodennej práci tímu.",
                        tagline: "Čo sa dnes zdá nemožné, je workflow budúci kvartál.",
                    },
                    {
                        name: "Roman P. Wagner",
                        role: "Jasnosť & Rozhodnutie",
                        bio: "Transformačný dizajnér. Pomáha tímom prekonať komplexitu, zladiť sa na tom, čo je dôležité, a robiť rozhodnutia, ktoré vydržia pod tlakom. Facilituje konverzácie, ktorým sa väčšina tímov vyhýba.",
                        tagline: "Jasnosť nie je luxus. Je to to, čo umožňuje všetko ostatné.",
                    },
                ],
            },
            outcomes: {
                title: "S Čím Odchádzate.",
                items: [
                    { title: "Spoločný Rámec", desc: "Jeden tím, jeden spôsob premýšľania o AI. Nie desať ľudí s desiatimi rôznymi prístupmi ťahajúcimi rôznymi smermi." },
                    { title: "Funkčný Stack Nástrojov", desc: "Konkrétne nástroje pre váš konkrétny workflow. Postavené okolo toho, čo váš tím skutočne robí, nie čo odporúčajú všetci ostatní." },
                    { title: "Prompty, Ktoré Fungujú", desc: "Kurátorovaná sada pre váš kontext. Plus logika na písanie vlastných, keď sa nástroje zmenia." },
                    { title: "Rozhodnutie na Pondelok", desc: "Nie správa na neskoršie prečítanie. Niečo konkrétne, čo začnete robiť inak nasledujúce ráno." },
                    { title: "30-Dňový Follow-Up", desc: "Hovor dva týždne po workshope. Čo vyvstalo? Čo funguje? Čo treba upraviť? V cene, bez príplatku." },
                    { title: "Prístup do Komunity", desc: "Každý účastník dostane 30 dní v Research Lab Circle komunite. Pokračujte v učení, pridajte sa na ďalší webinár, pristupujte ku knižnici." },
                ],
            },
            details: {
                title: "Detaily.",
                items: [
                    { label: "Investícia", value: "€600 / osoba", sub: "+ DPH" },
                    { label: "Veľkosť Skupiny", value: "10–15 ľudí", sub: "Vedenie alebo kľúčový tím" },
                    { label: "Trvanie", value: "2 celé dni", sub: "Po sebe" },
                    { label: "Miesto", value: "Vaše priestory alebo naše", sub: "Bratislava" },
                    { label: "Príprava", value: "30 min hovor", sub: "Najprv pochopíme váš tím" },
                    { label: "Follow-Up", value: "30 dní", sub: "V cene" },
                ],
            },
            cta: {
                headline: "Pobavme Sa.",
                subline: "20-minútový hovor. Žiadny záväzok. Zistíme, či je to fit.",
                button: "Rezervovať Discovery Call",
                guarantee: "Ak to nebude správny fit, povieme priamo.",
                contact: "hello@researchlab.sk",
            },
        },
    }

    const t = content[lang]

    const pageClass = "page-slide w-full md:w-[297mm] min-h-screen md:h-[210mm] bg-[#f4ede6] relative flex flex-col justify-center items-center p-8 md:p-14 print:w-[297mm] print:h-[210mm] print:p-12"

    return (
        <>
            <style jsx global>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0;
                    padding: 0;
                    background: #d8d4ce;
                }
                @media (min-width: 768px) {
                    .page-container {
                        gap: 2rem;
                        padding: 2rem;
                        background: #d8d4ce;
                    }
                    .page-slide { overflow: hidden; }
                }
                @media print {
                    @page { size: 297mm 210mm landscape; margin: 0; }
                    html, body {
                        margin: 0; padding: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .page-container { padding: 0; gap: 0; background: white; }
                    .page-slide {
                        page-break-after: always;
                        page-break-inside: avoid;
                        break-after: page;
                        break-inside: avoid;
                    }
                    .page-slide:last-child { page-break-after: avoid; break-after: avoid; }
                    .no-print { display: none !important; }
                }
            `}</style>

            {/* Controls */}
            <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
                <button
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#f4ede6] shadow hover:bg-black hover:text-white transition-colors"
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

                {/* ── SLIDE 1: HERO ── */}
                <div className={pageClass}>
                    <div className="text-center max-w-3xl">
                        <p className="text-[11px] md:text-[13px] font-code-brand font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-10 md:mb-14">
                            {t.hero.label}
                        </p>
                        <h1 className="font-cabinet font-bold text-[44px] md:text-[80px] leading-[0.92] tracking-tighter">
                            {t.hero.title.line1}<br />
                            <span className="text-[#0047BB]">{t.hero.title.line2}</span>
                        </h1>
                        <p className="text-[14px] md:text-[18px] text-black/50 mt-8 md:mt-10 leading-relaxed max-w-lg mx-auto">
                            {t.hero.desc}
                        </p>
                        <p className="text-[10px] md:text-[12px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB] mt-6 md:mt-8">
                            {t.hero.info}
                        </p>
                    </div>
                    <p className="absolute bottom-6 md:bottom-8 text-[9px] md:text-[10px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 2: THE PROBLEM ── */}
                <div className={`${pageClass} !items-start !justify-start pt-10 md:pt-14`}>
                    <div className="w-full max-w-5xl">
                        <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB] mb-6 md:mb-8">
                            The Situation
                        </p>
                        <h2 className="font-cabinet font-bold text-[28px] md:text-[48px] tracking-tight mb-8 md:mb-12">
                            {t.problem.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {t.problem.cards.map((card, i) => (
                                <div key={i} className={`p-6 md:p-8 border-2 ${i === 0 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[18px] md:text-[22px] font-medium leading-tight">{card.headline}</p>
                                    <p className="text-[15px] md:text-[17px] text-black/40 mt-1">{card.subline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="absolute bottom-6 text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 3: DAY ONE ── */}
                <div className={`${pageClass} !items-start !justify-start pt-10 md:pt-14`}>
                    <div className="w-full max-w-5xl">
                        <div className="flex items-start justify-between mb-6 md:mb-8">
                            <div>
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                                    {t.day1.label}
                                </p>
                                <h2 className="font-cabinet font-bold text-[32px] md:text-[52px] tracking-tight mt-1">
                                    {t.day1.title}
                                </h2>
                            </div>
                            <p className="text-[11px] md:text-[13px] text-black/40 max-w-[200px] text-right leading-relaxed hidden md:block">
                                {t.day1.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3">
                            {t.day1.parts.map((part, i) => (
                                <div key={i} className={`p-4 md:p-5 border-2 flex flex-col ${i === 0 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold text-black/25">{part.num}</p>
                                    <p className="font-cabinet font-bold text-[18px] md:text-[22px] mt-1 tracking-tight leading-tight">{part.title}</p>
                                    <p className="text-[9px] md:text-[10px] font-code-brand text-black/35 mt-1 uppercase tracking-widest">{part.time}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/55 mt-3 leading-relaxed flex-grow">{part.desc}</p>
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB] mt-3">{part.lead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="absolute bottom-6 text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 4: DAY TWO ── */}
                <div className={`${pageClass} !items-start !justify-start pt-10 md:pt-14`}>
                    <div className="w-full max-w-5xl">
                        <div className="flex items-start justify-between mb-6 md:mb-8">
                            <div>
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB]">
                                    {t.day2.label}
                                </p>
                                <h2 className="font-cabinet font-bold text-[32px] md:text-[52px] tracking-tight mt-1">
                                    {t.day2.title}
                                </h2>
                            </div>
                            <p className="text-[11px] md:text-[13px] text-black/40 max-w-[200px] text-right leading-relaxed hidden md:block">
                                {t.day2.subtitle}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3">
                            {t.day2.parts.map((part, i) => (
                                <div key={i} className={`p-4 md:p-5 border-2 flex flex-col ${i === 3 ? 'border-[#0047BB] bg-[#0047BB]/5' : 'border-black/10'}`}>
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold text-black/25">{part.num}</p>
                                    <p className="font-cabinet font-bold text-[18px] md:text-[22px] mt-1 tracking-tight leading-tight">{part.title}</p>
                                    <p className="text-[9px] md:text-[10px] font-code-brand text-black/35 mt-1 uppercase tracking-widest">{part.time}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/55 mt-3 leading-relaxed flex-grow">{part.desc}</p>
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB] mt-3">{part.lead}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="absolute bottom-6 text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 5: FACILITATORS ── */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full">
                        <div className="text-center mb-8 md:mb-12">
                            <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-[0.35em] text-[#0047BB] mb-2">
                                {t.facilitators.title}
                            </p>
                            <p className="text-[13px] md:text-[15px] text-black/40">{t.facilitators.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {t.facilitators.cards.map((card, i) => (
                                <div key={i} className="p-6 md:p-7 border border-black/10 flex flex-col">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
                                        {card.role}
                                    </p>
                                    <p className="font-cabinet font-bold text-[22px] md:text-[26px] mt-2 tracking-tight leading-tight">
                                        {card.name}
                                    </p>
                                    <p className="text-[12px] md:text-[13px] text-black/55 mt-4 leading-relaxed flex-grow">
                                        {card.bio}
                                    </p>
                                    <p className="text-[11px] md:text-[12px] text-black/70 italic mt-4 pt-4 border-t border-black/10 leading-snug">
                                        "{card.tagline}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="absolute bottom-6 text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 6: OUTCOMES ── */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full">
                        <h2 className="font-cabinet font-bold text-[32px] md:text-[52px] tracking-tight text-center mb-8 md:mb-12">
                            {t.outcomes.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            {t.outcomes.items.map((item, i) => (
                                <div key={i} className="p-5 md:p-6 border border-black/10">
                                    <div className="w-7 h-7 bg-[#0047BB] text-white flex items-center justify-center text-[10px] font-bold mb-3">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <p className="font-medium text-[15px] md:text-[16px]">{item.title}</p>
                                    <p className="text-[12px] md:text-[13px] text-black/50 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="absolute bottom-6 text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20">
                        RESEARCH LAB // SORRYWECAN
                    </p>
                </div>

                {/* ── SLIDE 7: DETAILS + CTA ── */}
                <div className={pageClass}>
                    <div className="max-w-4xl w-full text-center">
                        <h2 className="font-cabinet font-bold text-[44px] md:text-[72px] tracking-tighter mb-2">
                            {t.cta.headline}
                        </h2>
                        <p className="text-[15px] md:text-[18px] text-black/45 mb-8 md:mb-12">
                            {t.cta.subline}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 text-left border border-black/10 p-6 md:p-8">
                            {t.details.items.map((item, i) => (
                                <div key={i}>
                                    <p className="text-[9px] md:text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/35">{item.label}</p>
                                    <p className="text-[15px] md:text-[17px] font-medium mt-1">{item.value}</p>
                                    <p className="text-[11px] md:text-[12px] text-black/40">{item.sub}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://cal.com/researchlabsorrywecan/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0047BB] px-8 md:px-10 py-3 md:py-4 hover:bg-black transition-colors"
                        >
                            <p className="text-[11px] md:text-[13px] font-code-brand font-bold uppercase tracking-[0.25em] text-white">
                                {t.cta.button}
                            </p>
                        </a>

                        <p className="text-[12px] md:text-[13px] text-black/35 mt-6">{t.cta.guarantee}</p>
                        <a href={`mailto:${t.cta.contact}`} className="inline-block text-[11px] md:text-[12px] font-code-brand text-[#0047BB] hover:underline mt-2">
                            {t.cta.contact}
                        </a>
                        <p className="text-[8px] md:text-[9px] font-code-brand uppercase tracking-[0.3em] text-black/20 mt-8">
                            SORRYWECAN // RESEARCH LAB // 2026
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
