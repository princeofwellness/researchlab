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

export default function CorporateOfferV2() {
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

            {/* ── Controls ── */}
            <div className="np fixed top-4 right-4 z-50 flex gap-2">
                <button
                    onClick={() => setLang(l => l === "en" ? "sk" : "en")}
                    className="text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black transition-colors"
                >
                    {en ? "SK" : "EN"}
                </button>
                <button
                    onClick={() => window.print()}
                    className="hidden md:block text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white hover:bg-black transition-colors"
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
                            Corporate Workshop · 2026
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    {/* Main */}
                    <div className="flex-1 flex flex-col md:flex-row items-end md:items-center px-10 md:px-16 py-10 md:py-0 gap-0">
                        {/* Headline */}
                        <div className="flex-1">
                            <h1 className="font-syne font-bold leading-[0.88] tracking-tighter text-[58px] md:text-[92px] text-white">
                                {en ? <>Corporate<br />Workshop.</> : <>Firemný<br />Workshop.</>}
                            </h1>
                            <p className="mt-6 md:mt-9 text-[16px] md:text-[20px] text-white/50 max-w-[320px] leading-relaxed">
                                {en
                                    ? "A two-day guided experience. Your team thinks differently by the time they leave."
                                    : "Dvojdňová riadená skúsenosť. Váš tím myslí inak, keď odchádza."}
                            </p>
                        </div>

                        {/* Price block — desktop */}
                        <div className="hidden md:flex flex-col items-end gap-5 ml-12 shrink-0">
                            <div className="text-right">
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.4em] text-white/30 mb-1">
                                    {en ? "Investment" : "Investícia"}
                                </p>
                                <p className="font-syne font-bold text-[68px] text-white leading-none">€600</p>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/35 mt-1">
                                    {en ? "per person + VAT" : "na osobu + DPH"}
                                </p>
                            </div>
                            <div className="h-px w-full bg-white/15" />
                            <div className="text-right space-y-1.5 text-[13px] font-code-brand text-white/40">
                                <p>{en ? "10–15 people" : "10–15 ľudí"}</p>
                                <p>{en ? "2 full days" : "2 celé dni"}</p>
                                <p>Bratislava</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile price */}
                    <div className="md:hidden flex gap-8 px-10 pb-10">
                        <div>
                            <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30">
                                {en ? "Investment" : "Investícia"}
                            </p>
                            <p className="font-syne font-bold text-[44px] text-white leading-none mt-1">€600</p>
                            <p className="text-[9px] font-code-brand text-white/35">
                                {en ? "per person + VAT" : "na osobu + DPH"}
                            </p>
                        </div>
                        <div className="text-[13px] font-code-brand text-white/40 flex flex-col justify-end gap-1">
                            <p>{en ? "10–15 people" : "10–15 ľudí"}</p>
                            <p>{en ? "2 full days" : "2 celé dni"}</p>
                        </div>
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
                    <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-syne font-bold text-[200px] md:text-[280px] text-black/[0.04] leading-none select-none pointer-events-none">
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
                            <h2 className="font-syne font-bold text-[34px] md:text-[52px] tracking-tight leading-[1.0]">
                                {en
                                    ? <>{`Your team`}<br />{`is using AI.`}<br /><span className="text-black/25">Randomly.</span></>
                                    : <>{`Váš tím`}<br />{`používa AI.`}<br /><span className="text-black/25">Náhodne.</span></>}
                            </h2>
                        </div>

                        {/* Right: Four tensions — no boxes, just rules */}
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
                                ["Všetci experimentujú.", "Nikto nevlastní výsledok."],
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
                    SLIDE 03 — DAY ONE  /  near-black
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    {/* Circle motif */}
                    <CircleMotif className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 w-44 md:w-60 h-44 md:h-60 text-white" />
                    {/* Watermark */}
                    <span className="absolute left-0 bottom-[-10px] font-syne font-bold text-[150px] md:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none">
                        01
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Day One" : "Prvý Deň"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            The Mindshift
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-8">
                        {/* Left */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center shrink-0">
                            <h2 className="font-syne font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Thinking<br />before<br />tools.</> : <>Myslenie<br />pred<br />nástrojmi.</>}
                            </h2>
                            <p className="mt-5 text-[11px] text-white/35 leading-relaxed max-w-[170px]">
                                {en
                                    ? "Before anyone reaches for a tool, the team builds a shared mental model."
                                    : "Predtým než niekto siahne po nástroji, tím buduje spoločný mentálny model."}
                            </p>
                        </div>

                        {/* Right: session flow */}
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/[0.06] md:pl-10">
                            {(en ? [
                                { t: "30 min", h: "Opening Tea Ritual", d: "Sitting in a circle. Presence before performance. We open with intention." },
                                { t: "2×30 min", h: "Two Perspectives", d: "Tiep · Roman — two lenses, one room. Short, sharp. No script." },
                                { t: "60 min", h: "Circle Discussion", d: "Your team brings the real questions — the ones that don't get asked in meetings." },
                                { t: "45 min", h: "Panel", d: "Open. Anything goes. Honest answers from experience, not theory." },
                            ] : [
                                { t: "30 min", h: "Úvodný Čajový Rituál", d: "Sedenie v kruhu. Prítomnosť pred výkonom. Otvárame s úmyslom." },
                                { t: "2×30 min", h: "Dve Perspektívy", d: "Tiep · Roman — dva pohľady, jedna miestnosť. Krátko, ostro. Bez scenára." },
                                { t: "60 min", h: "Diskusia v Kruhu", d: "Váš tím prinesie skutočné otázky — tie, čo sa na poradách nepýtajú." },
                                { t: "45 min", h: "Panel", d: "Otvorený. Čokoľvek. Úprimné odpovede zo skúsenosti, nie teórie." },
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
                    SLIDE 04 — DAY TWO  /  blue + grid texture
                ════════════════════════════════════════════════════════════ */}
                <div
                    className={`${S} bg-[#0047BB] text-white`}
                    style={{
                        backgroundImage: [
                            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
                            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                        ].join(", "),
                        backgroundSize: "40px 40px",
                    }}
                >
                    {/* Watermark */}
                    <span className="absolute right-[-10px] bottom-[-10px] font-syne font-bold text-[150px] md:text-[200px] text-white/[0.05] leading-none select-none pointer-events-none">
                        02
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Day Two" : "Druhý Deň"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "The Practice" : "Prax"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-8">
                        {/* Left */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center shrink-0">
                            <h2 className="font-syne font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Tools.<br />Prompts.<br />Your work.</> : <>Nástroje.<br />Prompty.<br />Vaša práca.</>}
                            </h2>
                            <p className="mt-5 text-[11px] text-white/40 leading-relaxed max-w-[170px]">
                                {en
                                    ? "Everything tailored to your actual workflow. Not a generic AI tools tour."
                                    : "Všetko prispôsobené vášmu skutočnému workflow. Nie všeobecná prehliadka AI nástrojov."}
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/10 md:pl-10">
                            {(en ? [
                                { t: "45 min", h: "What's Actually Possible", d: "Live screen share. Real tasks, real output. No slides. Sets the ceiling for the room." },
                                { t: "60 min", h: "The Tool Stack", d: "Research, writing, video, meetings, knowledge management. What to use for what and why." },
                                { t: "45 min", h: "Prompts That Work", d: "The logic, not the list. The mental model behind good prompting. Then everyone tries it live." },
                                { t: "90 min", h: "Your Problems, Live", d: "Your team's real challenges worked through in real time. No theory. Just output." },
                            ] : [
                                { t: "45 min", h: "Čo Je Skutočne Možné", d: "Živé zdieľanie obrazovky. Skutočné úlohy, skutočný výstup. Bez slidov." },
                                { t: "60 min", h: "Stack Nástrojov", d: "Výskum, písanie, video, porady, knowledge management. Čo na čo a prečo." },
                                { t: "45 min", h: "Prompty, Ktoré Fungujú", d: "Logika, nie zoznam. Mentálny model za dobrým promptovaním. Potom každý cvičí naživo." },
                                { t: "90 min", h: "Vaše Problémy, Živo", d: "Skutočné výzvy vášho tímu riešené v reálnom čase. Bez teórie. Len výsledky." },
                            ]).map((p, i, arr) => (
                                <div key={i}>
                                    <div className="flex items-start gap-5 py-3 md:py-4">
                                        <span className="text-[9px] font-code-brand text-white/35 uppercase tracking-[0.3em] w-14 shrink-0 pt-0.5">{p.t}</span>
                                        <div>
                                            <p className="text-[14px] md:text-[15px] font-medium text-white">{p.h}</p>
                                            <p className="text-[11px] text-white/35 mt-0.5 leading-relaxed">{p.d}</p>
                                        </div>
                                    </div>
                                    {i < arr.length - 1 && <div className="h-px bg-white/[0.08]" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">04</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 05 — THE TWO  /  parchment, names huge
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    {/* Background watermark */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-bold text-[160px] md:text-[220px] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap">
                        WHO
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "Who Facilitates" : "Kto Facilituje"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/20">
                            Bratislava · Research Lab
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
                            <h3 className="font-syne font-bold leading-[0.9] tracking-tighter text-[46px] md:text-[60px]">
                                Tiep<br />Le Dinh
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-black/50 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Builder and creative at the intersection of AI, culture, and human development. Founder of Research Lab. Thinks about AI the way others think about language — as the core of everything."
                                    : "Tvorca a kreatívec na priesečníku AI, kultúry a ľudského rozvoja. Zakladateľ Research Lab. Myslí o AI tak, ako iní myslia o jazyku — ako o jadre všetkého."}
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
                            <h3 className="font-syne font-bold leading-[0.9] tracking-tighter text-[46px] md:text-[60px]">
                                Roman<br />Pii Wagner
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-black/50 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Transformational designer. Helps teams align on what matters and make decisions that hold under pressure. Facilitates the conversations most teams avoid."
                                    : "Transformačný dizajnér. Pomáha tímom zladiť sa na tom, čo je dôležité, a robiť rozhodnutia, ktoré vydržia pod tlakom. Facilituje konverzácie, ktorým sa väčšina tímov vyhýba."}
                            </p>
                            <p className="mt-4 text-[11px] md:text-[12px] italic text-black/40 max-w-[260px] leading-snug">
                                {en
                                    ? "\"Clarity is not a luxury. It's what makes everything else possible.\""
                                    : "\"Jasnosť nie je luxus. To, čo umožňuje všetko ostatné.\""}
                            </p>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">05</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 06 — OUTCOMES  /  near-black, editorial list
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
                            <h2 className="font-syne font-bold text-[44px] md:text-[56px] leading-[0.88] tracking-tighter text-white">
                                {en ? <>Six<br />things.</> : <>Šesť<br />vecí.</>}
                            </h2>
                        </div>

                        {/* Right: two-column editorial list */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 content-center md:border-l border-white/[0.06] md:pl-12 gap-x-10">
                            {(en ? [
                                ["A Shared Framework", "One team, one way of thinking about AI."],
                                ["A Working Tool Stack", "Built for your workflow, not a generic list."],
                                ["Prompts That Work", "The logic, not just the examples."],
                                ["A Monday Decision", "Something concrete. Starting the next morning."],
                                ["30-Day Follow-Up", "A check-in call. What's working, what isn't. Included."],
                                ["Community Access", "30 days in Research Lab's Circle. Keep going."],
                            ] : [
                                ["Spoločný Rámec", "Jeden tím, jeden spôsob myslenia o AI."],
                                ["Funkčný Stack Nástrojov", "Pre váš workflow, nie všeobecný zoznam."],
                                ["Prompty, Ktoré Fungujú", "Logika, nielen príklady."],
                                ["Pondelkové Rozhodnutie", "Niečo konkrétne. Od nasledujúceho rána."],
                                ["30-Dňový Follow-Up", "Kontrolný hovor. Čo funguje, čo nie. V cene."],
                                ["Prístup do Komunity", "30 dní v Research Lab Circle. Pokračujte."],
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
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">06</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 07 — CLOSE  /  blue, one line
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Next Step" : "Ďalší Krok"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            Research Lab · 2026
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col md:flex-row items-stretch">
                        {/* Left: headline */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-12 md:py-0">
                            <h2 className="font-syne font-bold text-[64px] md:text-[100px] leading-[0.87] tracking-tighter text-white">
                                {en ? <>Let's<br />talk.</> : <>Pobavme<br />sa.</>}
                            </h2>
                            <p className="mt-7 text-[14px] text-white/45 max-w-xs leading-relaxed">
                                {en
                                    ? "20-minute call. No commitment. We figure out if it makes sense and go from there."
                                    : "20-minútový hovor. Žiadny záväzok. Zistíme, či to dáva zmysel, a pohneme sa ďalej."}
                            </p>
                            <p className="mt-4 text-[11px] text-white/25 max-w-xs leading-relaxed">
                                {en
                                    ? "If it's not the right match, we'll say so directly."
                                    : "Ak to nedáva zmysel, povieme priamo."}
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
                                    <p>€600 {en ? "/ person + VAT" : "/ osoba + DPH"}</p>
                                    <p>{en ? "10–15 people" : "10–15 ľudí"}</p>
                                    <p>{en ? "2 full days" : "2 celé dni"}</p>
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
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">07</span>
                    </div>
                </div>

            </div>
        </>
    )
}
