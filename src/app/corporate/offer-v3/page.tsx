"use client"

import React, { useState } from "react"

// ─── Circle motif — people sitting in a circle ───────────────────────────────
function CircleMotif({ className }: { className?: string }) {
    const count = 12
    return (
        <svg viewBox="0 0 240 240" className={className} aria-hidden>
            <circle cx="120" cy="120" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.12" />
            {Array.from({ length: count }).map((_, i) => {
                const angle = (i * (360 / count) - 90) * (Math.PI / 180)
                const cx = 120 + 96 * Math.cos(angle)
                const cy = 120 + 96 * Math.sin(angle)
                const featured = i === 0 || i === 6
                return (
                    <circle
                        key={i}
                        cx={cx} cy={cy}
                        r={featured ? 5.5 : 2.5}
                        fill="currentColor"
                        opacity={featured ? 0.85 : 0.16}
                    />
                )
            })}
        </svg>
    )
}

// ─── Shared slide shell ───────────────────────────────────────────────────────
const S = "page-slide relative w-full md:w-[297mm] min-h-screen md:h-[210mm] flex flex-col overflow-hidden print:w-[297mm] print:h-[210mm] print:overflow-hidden"

export default function CorporateOfferV3() {
    const [lang, setLang] = useState<"en" | "sk">("en")
    const en = lang === "en"

    return (
        <>
            <style jsx global>{`
                .page-container {
                    display: flex; flex-direction: column; align-items: center;
                    gap: 0; padding: 0; background: #111;
                }
                @media (min-width: 768px) {
                    .page-container { gap: 3px; padding: 2rem; }
                    .page-slide { overflow: hidden; }
                }
                @media print {
                    @page { size: 297mm 210mm landscape; margin: 0; }
                    html, body {
                        margin: 0; padding: 0;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .page-container { padding: 0; gap: 0; background: #fff; }
                    .page-slide {
                        page-break-after: always; break-after: page;
                        break-inside: avoid;
                    }
                    .page-slide:last-child { page-break-after: avoid; break-after: avoid; }
                    .np { display: none !important; }
                }
            `}</style>

            {/* ── Top Nav (screen only) ── */}
            <div className="np fixed top-0 left-0 right-0 z-50 h-10 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/[0.06] flex items-center px-4 gap-1">
                <a href="/lab" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    {"← Lab"}
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <a href="/lab/corporate" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    Corporate Strategy
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <a href="/corporate/offer-v2" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    2-Day Deck
                </a>
                <a href="/corporate/offer-v3" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB] border-b border-[#0047BB] px-3 py-1">
                    Intensive
                </a>
                <a href="/corporate/onepager" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    One-Pager
                </a>
                <div className="flex-1" />
                <button
                    onClick={() => setLang(l => l === "en" ? "sk" : "en")}
                    className="text-[9px] font-code-brand font-bold uppercase tracking-widest px-3 py-1 text-white/30 hover:text-white/70 transition-colors"
                >
                    {en ? "SK" : "EN"}
                </button>
                <button
                    onClick={() => window.print()}
                    className="hidden md:block text-[9px] font-code-brand font-bold uppercase tracking-widest px-3 py-1 bg-[#0047BB] text-white hover:bg-[#0047BB]/80 transition-colors ml-1"
                >
                    PDF
                </button>
            </div>

            <div className="page-container font-sans-brand">

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 01 — COVER  /  blue background
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`}>
                    {/* Top bar */}
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            Research Lab
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Corporate Intensive · 2026" : "Firemný Workshop · 2026"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    {/* Main */}
                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0">
                        <h1 className="font-cabinet font-bold leading-[0.88] tracking-tighter text-[58px] md:text-[92px] text-white">
                            {en ? <>One-Day<br />Intensive.</> : <>Jednodňový<br />Workshop.</>}
                        </h1>
                        {!en && <p className="text-[13px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30 mt-3">SORRYWECAN</p>}
                        <p className="mt-6 md:mt-9 text-[16px] md:text-[20px] text-white/50 max-w-[440px] leading-relaxed">
                            {en
                                ? "3.5 hours. One room. Your team walks out thinking differently about AI."
                                : "3,5 hodiny. Jedna miestnosť. Váš tím odíde s úplne iným pohľadom na AI."}
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="px-10 md:px-16 pb-6 text-right">
                        <p className="text-[11px] md:text-[13px] font-code-brand text-white/50 italic leading-relaxed max-w-[480px] ml-auto">
                            {en
                                ? "\"We cannot solve our problems with the same thinking we used when we created them.\""
                                : "\"Problémy nemôžeme vyriešiť rovnakým myslením, akým sme ich vytvorili.\""}
                        </p>
                        <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/35 mt-1">— Einstein</p>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">01</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 02 — THE SITUATION  /  parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    {/* Watermark */}
                    <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[200px] md:text-[280px] text-black/[0.04] leading-none select-none pointer-events-none">
                        AI
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "The Situation" : "Situácia"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-10 md:py-0 gap-10 items-center">
                        {/* Left: Big statement */}
                        <div className="flex-1 md:pr-12">
                            <h2 className="font-cabinet font-bold text-[34px] md:text-[52px] tracking-tight leading-[1.0]">
                                {en
                                    ? <>{`Your team`}<br />{`is using AI.`}<br /><span className="text-black/25">Randomly.</span></>
                                    : <>{`Váš tím`}<br />{`používa AI.`}<br /><span className="text-black/25">Náhodne.</span></>}
                            </h2>
                        </div>

                        {/* Right: Four tensions */}
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-black/10 md:pl-12 pt-8 md:pt-0">
                            {(en ? [
                                ["Tools multiply.", "Clarity doesn't."],
                                ["Pressure is real.", "Direction isn't."],
                                ["Adoption is happening.", "Thinking hasn't caught up."],
                                ["Everyone experiments.", "Nobody owns the outcome."],
                            ] : [
                                ["Nástroje pribúdajú.", "Jasnosť nie."],
                                ["Tlak je reálny.", "Smer nie je."],
                                ["Adopcia prebieha.", "Myslenie nestíha."],
                                ["Každý experimentuje.", "Nikto nenesie zodpovednosť za výsledok."],
                            ]).map(([a, b], i, arr) => (
                                <div key={i}>
                                    <div className="py-4 md:py-5">
                                        <p className="text-[15px] md:text-[17px] font-medium leading-tight">{a}</p>
                                        <p className="text-[14px] md:text-[16px] text-black/30 mt-0.5">{b}</p>
                                    </div>
                                    {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">02</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 03 — THE PROGRAM  /  near-black
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    {/* Circle motif */}
                    <CircleMotif className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 w-44 md:w-60 h-44 md:h-60 text-white" />
                    {/* Watermark */}
                    <span className="absolute left-0 bottom-[-10px] font-cabinet font-bold text-[150px] md:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none">
                        3.5h
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "The Program" : "Program"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            {en ? "Mindshift + Practice" : "Myslenie + Prax"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-8">
                        {/* Left */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center shrink-0">
                            <h2 className="font-cabinet font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Think.<br />Build.<br />Ship.</> : <>Pochop.<br />Vyskúšaj.<br />Použi.</>}
                            </h2>
                            <p className="mt-5 text-[11px] text-white/35 leading-relaxed max-w-[170px]">
                                {en
                                    ? "One concentrated session. Thinking and doing in the same room, the same day."
                                    : "Jedno intenzívne dopoludnie. Myslenie aj prax v jednej miestnosti, v jeden deň."}
                            </p>
                        </div>

                        {/* Right: session flow */}
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/[0.06] md:pl-10">
                            {(en ? [
                                { t: "2×30 min", h: "Two Perspectives", d: "Tiep · Roman — two lenses, one room. Short, sharp. No script." },
                                { t: "30 min", h: "Diagnostics Circle", d: "Sitting in a circle. Your team surfaces the real questions — the ones that don't get asked in meetings." },
                                { t: "90 min", h: "Hands-On Practice", d: "Real tools, real prompts, your actual work. Everyone builds something they'll use Monday morning." },
                                { t: "30 min", h: "Panel Discussion", d: "Open. Anything goes. Honest answers from experience, not theory. The room decides the agenda." },
                            ] : [
                                { t: "2×30 min", h: "Dva Pohľady", d: "Tiep · Roman — dva pohľady, jedna miestnosť. Bez slidov, bez scenára. Krátko a na telo." },
                                { t: "30 min", h: "Diagnostika v Kruhu", d: "Sadneme si do kruhu. Váš tím položí otázky, ktoré sa na poradách nikdy nepovedia." },
                                { t: "90 min", h: "Prax", d: "Reálne nástroje, reálne prompty, vaša skutočná práca. Každý odíde s niečím, čo použije v pondelok ráno." },
                                { t: "30 min", h: "Panelová Diskusia", d: "Otvorený formát. Čokoľvek. Úprimné odpovede zo skúseností, nie z teórie. Agendu určí miestnosť." },
                            ]).map((p, i, arr) => (
                                <div key={i}>
                                    <div className="flex items-start gap-5 py-3 md:py-4">
                                        <span className="text-[9px] font-code-brand text-[#4d7fd4] uppercase tracking-[0.3em] w-14 shrink-0 pt-0.5">{p.t}</span>
                                        <div>
                                            <p className="text-[14px] md:text-[15px] font-medium text-white">{p.h}</p>
                                            <p className="text-[11px] text-white/30 mt-0.5 leading-relaxed">{p.d}</p>
                                        </div>
                                    </div>
                                    {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">03</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 04 — WHO FACILITATES  /  parchment, names huge
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    {/* Background watermark */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-cabinet font-bold text-[160px] md:text-[220px] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap">
                        WHO
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "Who Facilitates" : "Kto Facilituje"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/20">
                            {"Bratislava · Research Lab"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    {/* Two people — full height split */}
                    <div className="flex-1 flex flex-col md:flex-row">
                        {/* Tiep Le Dinh */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0 border-b md:border-b-0 md:border-r border-black/10">
                            <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB] mb-5">
                                {en ? "Vision & Community" : "Vízia & Komunita"}
                            </p>
                            <h3 className="font-cabinet font-bold leading-[0.9] tracking-tighter text-[46px] md:text-[60px]">
                                Tiep<br />Le Dinh
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-black/50 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Builder and creative at the intersection of AI, culture, and human development. Founder of Research Lab. Thinks about AI the way others think about language — as the core of everything."
                                    : "Tvorca a kreatívec na priesečníku AI, kultúry a ľudského rozvoja. Spoluzakladateľ Research Lab. O AI premýšľa podobne, ako iní o jazyku — ako o základe všetkého."}
                            </p>
                            <p className="mt-4 text-[11px] md:text-[12px] italic text-black/40 max-w-[260px] leading-snug">
                                {en
                                    ? "\"The thinking behind the tool is the tool.\""
                                    : "\"Myslenie za nástrojom je nástrojom samotným.\""}
                            </p>
                        </div>

                        {/* Roman Pii Wagner */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0">
                            <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB] mb-5">
                                {en ? "Clarity & Decision" : "Jasnosť & Rozhodnutie"}
                            </p>
                            <h3 className="font-cabinet font-bold leading-[0.9] tracking-tighter text-[46px] md:text-[60px]">
                                Roman<br />Pii Wagner
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-black/50 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Transformational designer. Helps teams align on what matters and make decisions that hold under pressure. Facilitates the conversations most teams avoid."
                                    : "Transformačný dizajnér. Pomáha tímom zjednotiť sa v tom, čo je podstatné, a robiť rozhodnutia, ktoré obstoja aj pod tlakom."}
                            </p>
                            <p className="mt-4 text-[11px] md:text-[12px] italic text-black/40 max-w-[260px] leading-snug">
                                {en
                                    ? "\"Clarity is not a luxury. It's what makes everything else possible.\""
                                    : "\"Jasnosť nie je luxus. Je to to, čo umožňuje všetko ostatné.\""}
                            </p>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">04</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 05 — OUTCOMES  /  near-black, editorial list
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "What You Leave With" : "S Čím Odchádzate"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-10 items-center">
                        {/* Left: section title */}
                        <div className="w-full md:w-[170px] shrink-0 flex flex-col justify-center">
                            <h2 className="font-cabinet font-bold text-[44px] md:text-[56px] leading-[0.88] tracking-tighter text-white">
                                {en ? <>Five<br />things.</> : <>Päť<br />vecí.</>}
                            </h2>
                        </div>

                        {/* Right: two-column editorial list */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 content-center md:border-l border-white/[0.06] md:pl-12 gap-x-10">
                            {(en ? [
                                ["A Shared Framework", "One team, one way of thinking about AI."],
                                ["Hands-On Tool Experience", "Not a demo — you built something real during the session."],
                                ["Prompts That Work", "The logic, not just the examples."],
                                ["A Monday Decision", "Something concrete. Starting the next morning."],
                                ["30-Day Follow-Up", "A check-in call. What's working, what isn't. Included."],
                            ] : [
                                ["Spoločný Rámec", "Jeden tím, jeden spôsob myslenia o AI."],
                                ["Reálna Skúsenosť", "Žiadna ukážka — počas sesie ste niečo vytvorili sami."],
                                ["Prompty, Ktoré Fungujú", "Logika za promptom, nielen príklady."],
                                ["Pondelkové Rozhodnutie", "Konkrétny krok. Použiteľný hneď ráno."],
                                ["30-Dňový Follow-Up", "Kontrolný hovor. Čo funguje, čo nie. V cene."],
                            ]).map(([title, desc], i) => (
                                <div key={i} className="py-3 md:py-4 border-b border-white/[0.06] last:border-b-0 odd:last:border-b-0">
                                    <p className="text-[13px] md:text-[14px] font-medium text-white">{title}</p>
                                    <p className="text-[11px] text-white/30 mt-0.5 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">05</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 06 — CLOSE  /  blue, one line
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Next Step" : "Ďalší Krok"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {"Research Lab · 2026"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col md:flex-row items-stretch">
                        {/* Left: headline */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-12 md:py-0">
                            <h2 className="font-cabinet font-bold text-[64px] md:text-[100px] leading-[0.87] tracking-tighter text-white">
                                {en ? <>{`Let's`}<br />talk.</> : <>Pobavme<br />sa.</>}
                            </h2>
                            <p className="mt-7 text-[14px] text-white/45 max-w-xs leading-relaxed">
                                {en
                                    ? "20-minute call. No commitment. We figure out if it makes sense and go from there."
                                    : "20-minútový hovor. Bez záväzkov. Zistíme, či to dáva zmysel, a ideme ďalej."}
                            </p>
                            <p className="mt-4 text-[11px] text-white/25 max-w-xs leading-relaxed">
                                {en
                                    ? "If it's not the right match, we'll say so directly."
                                    : "Ak to nesedí, povieme to priamo."}
                            </p>
                        </div>

                        {/* Right: action block */}
                        <div className="w-full md:w-[240px] flex flex-col justify-center px-10 md:px-12 py-10 md:py-0 gap-6 border-t md:border-t-0 md:border-l border-white/10">
                            <a
                                href="https://cal.com/researchlabsorrywecan/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white text-[#0047BB] text-center px-6 py-4 hover:bg-[#e8e1da] transition-colors"
                            >
                                <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em]">
                                    {en ? "Book the Call" : "Rezervovať Hovor"}
                                </span>
                            </a>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.35em] text-white/30 mb-1">Email</p>
                                    <a href="mailto:hello@researchlab.sk" className="text-[12px] font-code-brand text-white/80 hover:text-white hover:underline transition-colors">
                                        hello@researchlab.sk
                                    </a>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="space-y-1.5 text-[10px] font-code-brand text-white/30">
                                    <p>{"€360"} {en ? "/ person + VAT" : "/ osoba + DPH"}</p>
                                    <p>{en ? "10–15 people" : "10–15 ľudí"}</p>
                                    <p>{en ? "1 day · 3.5 hours" : "1 deň · 3,5 hodiny"}</p>
                                    <p>Bratislava</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">
                            SORRYWECAN // RESEARCH LAB
                        </span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">06</span>
                    </div>
                </div>

            </div>
        </>
    )
}
