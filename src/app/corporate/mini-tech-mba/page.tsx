"use client"

import React, { useState } from "react"

// ─── Dot grid motif ───────────────────────────────────────────────────────────
function DotGrid({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 240 240" className={className} aria-hidden>
            {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => {
                    const x = 20 + col * 40
                    const y = 20 + row * 40
                    const featured = (row + col) % 5 === 0
                    return (
                        <circle
                            key={`${row}-${col}`}
                            cx={x} cy={y}
                            r={featured ? 3 : 1.5}
                            fill="currentColor"
                            opacity={featured ? 0.6 : 0.12}
                        />
                    )
                })
            )}
        </svg>
    )
}

// ─── Shared slide shell ───────────────────────────────────────────────────────
const S = "page-slide relative w-full md:w-[297mm] min-h-screen md:h-[210mm] flex flex-col overflow-hidden print:w-[297mm] print:h-[210mm] print:overflow-hidden"

export default function MiniTechMBAOffer() {
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
                    ← Lab
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <a href="/corporate/offer-v2" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    Corporate Offer v2
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <a href="/corporate/mini-tech-mba" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB] border-b border-[#0047BB] px-3 py-1">
                    Mini Tech MBA
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
                    {/* Dot motif */}
                    <DotGrid className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 w-48 h-48 text-white opacity-60" />

                    {/* Top bar */}
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            Research Lab
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Partnership Proposal · 2026" : "Návrh Spolupráce · 2026"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    {/* Main */}
                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0">
                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/35 mb-5">
                            {en ? "Research Lab × Mini Tech MBA" : "Research Lab × Mini Tech MBA"}
                        </p>
                        <h1 className="font-cabinet font-bold leading-[0.88] tracking-tighter text-[52px] md:text-[82px] text-white">
                            {en
                                ? <>AI fluency<br />for the<br />builders.</>
                                : <>AI gramotnosť<br />pre tých,<br />čo stavajú.</>}
                        </h1>
                        <p className="mt-6 md:mt-9 text-[15px] md:text-[18px] text-white/50 max-w-[420px] leading-relaxed">
                            {en
                                ? "A collaboration between two communities. One brings depth. One brings reach. Together, we make the transition to AI-native work real."
                                : "Spolupráca dvoch komunít. Jedna prináša hĺbku. Druhá dosah. Spolu robíme prechod na AI-native prácu reálnym."}
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="px-10 md:px-16 pb-6 text-right">
                        <p className="text-[11px] md:text-[13px] font-code-brand text-white/40 italic leading-relaxed max-w-[440px] ml-auto">
                            {en
                                ? "\"The question is not whether AI will change the way you work. It already has.\""
                                : "\"Otázka nie je, či AI zmení spôsob, akým pracujete. Už sa to stalo.\""}
                        </p>
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
                            <h2 className="font-cabinet font-bold text-[32px] md:text-[50px] tracking-tight leading-[1.0]">
                                {en
                                    ? <>{`AI is`}<br />{`everywhere.`}<br /><span className="text-black/25">System is not.</span></>
                                    : <>{`AI je`}<br />{`všade.`}<br /><span className="text-black/25">Systém nie.</span></>}
                            </h2>
                            <p className="mt-6 text-[13px] text-black/40 leading-relaxed max-w-[260px]">
                                {en
                                    ? "Women in AI and tech are navigating a fast-moving landscape — often alone, without a shared framework."
                                    : "Ženy v AI a technológiách navigujú rýchlo sa meniace prostredie — často samy, bez spoločného rámca."}
                            </p>
                        </div>

                        {/* Right: tensions */}
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-black/10 md:pl-12 pt-8 md:pt-0">
                            {(en ? [
                                ["AI tools are multiplying.", "Clarity about which ones matter isn't."],
                                ["Everyone is adapting.", "Nobody is leading the transition."],
                                ["The tools are accessible.", "The thinking behind them isn't taught."],
                                ["Career paths are shifting.", "Most guidance hasn't caught up."],
                            ] : [
                                ["AI nástroje pribúdajú.", "Jasnosť o tom, ktoré sú podstatné, nie."],
                                ["Všetci sa prispôsobujú.", "Nikto nevedie prechod."],
                                ["Nástroje sú dostupné.", "Myslenie za nimi sa neučí."],
                                ["Kariérne cesty sa menia.", "Väčšina rád nestíha."],
                            ]).map(([a, b], i, arr) => (
                                <div key={i}>
                                    <div className="py-4 md:py-5">
                                        <p className="text-[14px] md:text-[16px] font-medium leading-tight">{a}</p>
                                        <p className="text-[13px] md:text-[15px] text-black/30 mt-0.5">{b}</p>
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
                    SLIDE 03 — WHAT WE BRING  /  near-black
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    {/* Watermark */}
                    <span className="absolute left-0 bottom-[-10px] font-cabinet font-bold text-[150px] md:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none">
                        03
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "What We Bring" : "Čo Prinášame"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            Research Lab
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-8 items-center">
                        {/* Left */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center shrink-0">
                            <h2 className="font-cabinet font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Three<br />areas.</> : <>Tri<br />oblasti.</>}
                            </h2>
                            <p className="mt-5 text-[11px] text-white/35 leading-relaxed max-w-[170px]">
                                {en
                                    ? "Each one practical. Each one built from real experience in AI education."
                                    : "Každá praktická. Každá postavená na reálnych skúsenostiach s AI vzdelávaním."}
                            </p>
                        </div>

                        {/* Right: three areas */}
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/[0.06] md:pl-10">
                            {(en ? [
                                {
                                    tag: "01 — Automation & Workflow",
                                    h: "Work that used to take hours.",
                                    d: "Practical automation for research, communication, content, and admin. Real use cases, not theory. Built for the work your community actually does.",
                                },
                                {
                                    tag: "02 — Tool Orientation",
                                    h: "The right tool for the right job.",
                                    d: "Beyond ChatGPT. How to evaluate, combine, and own a tool stack that serves your career. The logic, not just the list.",
                                },
                                {
                                    tag: "03 — Mindset & Career Navigation",
                                    h: "AI changes what expertise means.",
                                    d: "How roles shift, what skills compound, and how to position yourself when the floor is moving. For leaders and individual contributors both.",
                                },
                            ] : [
                                {
                                    tag: "01 — Automatizácia & Workflow",
                                    h: "Práca, ktorá trvala hodiny.",
                                    d: "Praktická automatizácia pre výskum, komunikáciu, obsah a administratívu. Reálne prípady, nie teória. Navrhnutá pre prácu, ktorú vaša komunita skutočne robí.",
                                },
                                {
                                    tag: "02 — Orientácia v Nástrojoch",
                                    h: "Správny nástroj pre správnu prácu.",
                                    d: "Za hranicami ChatGPT. Ako hodnotiť, kombinovať a vlastniť tool stack, ktorý slúži vašej kariére. Logika, nielen zoznam.",
                                },
                                {
                                    tag: "03 — Mindset & Kariérna Navigácia",
                                    h: "AI mení to, čo znamená odbornosť.",
                                    d: "Ako sa menia roly, ktoré zručnosti sa znásobujú, a ako sa nastaviť, keď sa mení základ. Pre líderky aj individuálnych prispievateľov.",
                                },
                            ]).map((p, i, arr) => (
                                <div key={i}>
                                    <div className="py-3 md:py-4">
                                        <p className="text-[9px] font-code-brand text-[#4d7fd4] uppercase tracking-[0.3em] mb-1">{p.tag}</p>
                                        <p className="text-[14px] md:text-[15px] font-medium text-white">{p.h}</p>
                                        <p className="text-[11px] text-white/30 mt-1 leading-relaxed">{p.d}</p>
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
                    SLIDE 04 — THE FORMATS  /  blue + grid
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
                    <span className="absolute right-[-10px] bottom-[-10px] font-cabinet font-bold text-[150px] md:text-[200px] text-white/[0.05] leading-none select-none pointer-events-none">
                        04
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "The Formats" : "Formáty"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Modular by design" : "Modulárne od základu"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-8 items-center">
                        {/* Left */}
                        <div className="w-full md:w-[200px] flex flex-col justify-center shrink-0">
                            <h2 className="font-cabinet font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Your call.<br />Our shape.</> : <>Vaša voľba.<br />Náš tvar.</>}
                            </h2>
                            <p className="mt-5 text-[11px] text-white/40 leading-relaxed max-w-[170px]">
                                {en
                                    ? "Pick the format that fits your community calendar. Scale it from there."
                                    : "Vyberte formát, ktorý sedí do vášho komunitného kalendára. Odtiaľ ho škálujte."}
                            </p>
                        </div>

                        {/* Right: formats */}
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/10 md:pl-10">
                            {(en ? [
                                {
                                    tag: "Entry",
                                    h: "The Mindshift Session — 3.5h",
                                    d: "One focused session. Two perspectives, live discussion, Q&A. Works as a standalone event or series opener. For up to 50 participants.",
                                },
                                {
                                    tag: "Series",
                                    h: "3-Session Arc — across 6 weeks",
                                    d: "Three themed sessions covering the full arc: mindset shift → tool orientation → career positioning. Built for communities that want real depth.",
                                },
                                {
                                    tag: "Intensive",
                                    h: "Full-Day or Two-Day Intensive",
                                    d: "Deep immersion for a smaller group (15–30). Theory meets practice. Real workflow problems worked live. Includes follow-up and community access.",
                                },
                            ] : [
                                {
                                    tag: "Vstupný",
                                    h: "Mindshift Session — 3,5h",
                                    d: "Jeden sústredený program. Dve perspektívy, živá diskusia, Q&A. Funguje ako samostatná udalosť alebo úvod série. Pre až 50 účastníkov.",
                                },
                                {
                                    tag: "Séria",
                                    h: "3-dielny Arc — počas 6 týždňov",
                                    d: "Tri tematické stretnutia pokrývajúce celý oblúk: zmena myslenia → orientácia v nástrojoch → kariérne nastavenie. Pre komunity, ktoré chcú skutočnú hĺbku.",
                                },
                                {
                                    tag: "Intenzív",
                                    h: "Celodenný alebo Dvojdňový Intenzív",
                                    d: "Hlboké ponorenie pre menšiu skupinu (15–30). Teória stretáva prax. Reálne problémy riešené naživo. Vrátane follow-upu a prístupu do komunity.",
                                },
                            ]).map((p, i, arr) => (
                                <div key={i}>
                                    <div className="flex items-start gap-5 py-3 md:py-4">
                                        <span className="text-[9px] font-code-brand text-white/35 uppercase tracking-[0.3em] w-14 shrink-0 pt-0.5">{p.tag}</span>
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
                    SLIDE 05 — THE COLLABORATION LAYERS  /  parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    {/* Background watermark */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-cabinet font-bold text-[130px] md:text-[190px] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap">
                        TOGETHER
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "The Collaboration" : "Spolupráca"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/20">
                            {en ? "Three layers" : "Tri vrstvy"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col md:flex-row items-center px-10 md:px-16 py-10 md:py-0 gap-10">
                        {/* Left: statement */}
                        <div className="w-full md:w-[220px] shrink-0 flex flex-col justify-center">
                            <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] leading-[0.9] tracking-tighter">
                                {en
                                    ? <>This is more<br />than a gig.</>
                                    : <>Toto je viac<br />než zákazka.</>}
                            </h2>
                            <p className="mt-5 text-[12px] text-black/40 leading-relaxed">
                                {en
                                    ? "We're building something that compounds over time. Three ways this can grow."
                                    : "Stavíme niečo, čo sa zhodnocuje v čase. Tri spôsoby, ako to môže rásť."}
                            </p>
                        </div>

                        {/* Right: three layers */}
                        <div className="flex-1 md:border-l border-black/10 md:pl-12">
                            {(en ? [
                                {
                                    num: "01",
                                    h: "Community Education",
                                    d: "Research Lab content — live sessions, toolkits, frameworks — delivered inside Mini Tech MBA. Your community gets curriculum. We get reach.",
                                },
                                {
                                    num: "02",
                                    h: "External Client Pipeline",
                                    d: "Mini Tech MBA members work in companies. Those companies need AI training. You refer. We deliver. Revenue shared. Clean and sustainable.",
                                },
                                {
                                    num: "03",
                                    h: "Ecosystem & Platform Access",
                                    d: "Mini Tech MBA members get access to Research Lab's Circle — online content, community, and new releases. A reason to stay connected beyond single events.",
                                },
                            ] : [
                                {
                                    num: "01",
                                    h: "Vzdelávanie Komunity",
                                    d: "Research Lab obsah — živé sessions, toolkity, rámce — doručený v rámci Mini Tech MBA. Vaša komunita dostane curriculum. My dosah.",
                                },
                                {
                                    num: "02",
                                    h: "Pipeline Externých Klientov",
                                    d: "Členky Mini Tech MBA pracujú vo firmách. Tie firmy potrebujú AI tréning. Vy odporučíte. My doručíme. Príjem zdieľaný. Čisté a udržateľné.",
                                },
                                {
                                    num: "03",
                                    h: "Ekosystém a Prístup k Platforme",
                                    d: "Členky Mini Tech MBA dostanú prístup do Research Lab Circle — online obsah, komunita a nové vydania. Dôvod zostať prepojený aj po jednorazových udalostiach.",
                                },
                            ]).map((p, i, arr) => (
                                <div key={i}>
                                    <div className="flex items-start gap-6 py-4 md:py-5">
                                        <span className="text-[10px] font-code-brand font-bold text-[#0047BB] w-6 shrink-0 pt-0.5">{p.num}</span>
                                        <div>
                                            <p className="text-[14px] md:text-[16px] font-medium leading-tight">{p.h}</p>
                                            <p className="text-[12px] text-black/40 mt-1 leading-relaxed">{p.d}</p>
                                        </div>
                                    </div>
                                    {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">05</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 06 — WHO WE ARE  /  near-black, two bios
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    {/* Background watermark */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-cabinet font-bold text-[130px] md:text-[190px] text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap">
                        WHO
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Who We Are" : "Kto Sme"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            Research Lab · Bratislava
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    {/* Two bios */}
                    <div className="flex-1 flex flex-col md:flex-row">
                        {/* Tiep */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0 border-b md:border-b-0 md:border-r border-white/[0.06]">
                            <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4] mb-5">
                                {en ? "Vision & Education" : "Vízia & Vzdelávanie"}
                            </p>
                            <h3 className="font-cabinet font-bold leading-[0.9] tracking-tighter text-[44px] md:text-[58px] text-white">
                                Tiep<br />Le Dinh
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-white/40 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Builder and creative at the intersection of AI, culture, and human development. Founder of Research Lab. Designs experiences that change how people think — not just what they know."
                                    : "Tvorca a kreatívec na priesečníku AI, kultúry a ľudského rozvoja. Zakladateľ Research Lab. Navrhuje zážitky, ktoré menia spôsob, akým ľudia premýšľajú — nielen to, čo vedia."}
                            </p>
                            <p className="mt-4 text-[11px] md:text-[12px] italic text-white/30 max-w-[260px] leading-snug">
                                {en
                                    ? "\"The thinking behind the tool is the tool.\""
                                    : "\"Myslenie za nástrojom je nástrojom samotným.\""}
                            </p>
                        </div>

                        {/* Roman */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-10 md:py-0">
                            <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4] mb-5">
                                {en ? "Strategy & Business Models" : "Stratégia & Obchodné Modely"}
                            </p>
                            <h3 className="font-cabinet font-bold leading-[0.9] tracking-tighter text-[44px] md:text-[58px] text-white">
                                Roman<br />Pii Wagner
                            </h3>
                            <p className="mt-6 text-[12px] md:text-[13px] text-white/40 leading-relaxed max-w-[280px]">
                                {en
                                    ? "Transformational designer and strategist. Works on AI business models, organizational architecture, and the societal impact of emerging technology. Brings clarity to rooms that are moving fast."
                                    : "Transformačný dizajnér a stratég. Pracuje na AI obchodných modeloch, organizačnej architektúre a spoločenskom dopade nových technológií. Prináša jasnosť do miestností, ktoré sa rýchlo pohybujú."}
                            </p>
                            <p className="mt-4 text-[11px] md:text-[12px] italic text-white/30 max-w-[260px] leading-snug">
                                {en
                                    ? "\"Clarity is not a luxury. It's what makes everything else possible.\""
                                    : "\"Jasnosť nie je luxus. Je to to, čo umožňuje všetko ostatné.\""}
                            </p>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">06</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 07 — NEXT STEP  /  blue
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
                            <h2 className="font-cabinet font-bold text-[60px] md:text-[96px] leading-[0.87] tracking-tighter text-white">
                                {en ? <>Let's<br />talk.</> : <>Pobavme<br />sa.</>}
                            </h2>
                            <p className="mt-7 text-[14px] text-white/45 max-w-xs leading-relaxed">
                                {en
                                    ? "30-minute conversation. No commitment. We find where the overlap is and design it from there."
                                    : "30-minútový rozhovor. Žiadny záväzok. Nájdeme, kde je prienik, a odtiaľ to navrhneme."}
                            </p>
                            <p className="mt-4 text-[11px] text-white/25 max-w-xs leading-relaxed">
                                {en
                                    ? "If this isn't the right time or fit, we'll say so directly."
                                    : "Ak to nie je správny čas alebo fit, povieme priamo."}
                            </p>
                        </div>

                        {/* Right: action block */}
                        <div className="w-full md:w-[260px] flex flex-col justify-center px-10 md:px-12 py-10 md:py-0 gap-6 border-t md:border-t-0 md:border-l border-white/10">
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
                                <div className="space-y-2 text-[10px] font-code-brand text-white/30">
                                    <p className="font-bold text-white/50 uppercase tracking-[0.2em]">{en ? "What's included:" : "Čo je v cene:"}</p>
                                    <p>{en ? "→ Tailored session design" : "→ Návrh session na mieru"}</p>
                                    <p>{en ? "→ Research Lab toolkit access" : "→ Prístup k Research Lab toolkitom"}</p>
                                    <p>{en ? "→ Community cross-promotion" : "→ Krížová propagácia komunity"}</p>
                                    <p>{en ? "→ Revenue sharing on referrals" : "→ Zdieľanie príjmov z odporúčaní"}</p>
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
