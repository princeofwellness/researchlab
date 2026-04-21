"use client"

import React, { useState } from "react"

const S = "page-slide relative w-full md:w-[297mm] min-h-screen md:h-[210mm] flex flex-col overflow-hidden print:w-[297mm] print:h-[210mm] print:overflow-hidden"

const grid = {
    backgroundImage: [
        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
        "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    ].join(", "),
    backgroundSize: "40px 40px",
}

export default function PitchDeckPage() {
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

            {/* ── Nav (screen only) ── */}
            <div className="np fixed top-0 left-0 right-0 z-50 h-10 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/[0.06] flex items-center px-4 gap-1">
                <a href="/lab" className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors px-3 py-1">
                    ← Lab
                </a>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.25em] text-[#0047BB] border-b border-[#0047BB] px-3 py-1">
                    Pitch Deck
                </span>
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
                    SLIDE 01 — COVER / blue
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <span className="absolute right-[-20px] bottom-[-20px] font-cabinet font-bold text-[180px] md:text-[260px] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        RL
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            Research Lab
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Overview · 2026" : "Prehľad · 2026"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/30 mb-6">
                            SORRYWECAN ecosystem
                        </p>
                        <h1 className="font-cabinet font-bold leading-[0.88] tracking-tighter text-[64px] md:text-[100px] text-white">
                            Research<br />Lab.
                        </h1>
                        <p className="mt-8 text-[15px] md:text-[19px] text-white/50 max-w-[420px] leading-relaxed">
                            {en
                                ? "An applied AI platform. Where strategy, execution, and cognition meet."
                                : "Aplikovaná AI platforma. Kde sa stretáva stratégia, exekúcia a kognícia."}
                        </p>
                    </div>

                    <div className="px-10 md:px-16 pb-6 text-right">
                        <p className="text-[11px] md:text-[13px] font-code-brand text-white/30 italic max-w-[400px] ml-auto leading-relaxed">
                            "WHERE HUMANS & AI CO-EVOLVE"
                        </p>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">01</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 02 — THE PROBLEM / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <span className="absolute right-[-20px] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[180px] md:text-[260px] text-black/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        WHY
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "The Problem" : "Problém"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-10 md:py-0 gap-10 items-center">
                        <div className="flex-1 md:pr-10">
                            <h2 className="font-cabinet font-bold text-[32px] md:text-[48px] tracking-tight leading-[1.0]">
                                {en
                                    ? <>AI is not a<br />tool change.<br /><span className="text-black/25">It is a system-<br />level shift.</span></>
                                    : <>AI nie je zmena<br />nástrojov.<br /><span className="text-black/25">Je to zmena<br />na úrovni systému.</span></>}
                            </h2>
                        </div>
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-black/10 md:pl-10 pt-8 md:pt-0">
                            {(en ? [
                                ["AI adoption is chaotic", "No shared standards, random usage across teams."],
                                ["Decision-making is weakening", "More options, no framework to evaluate them."],
                                ["Quality is inconsistent", "High output volume, unstable standards."],
                                ["Execution is faster, judgment is harder", "Direction suffers as speed increases."],
                            ] : [
                                ["Adopcia AI je chaotická", "Žiadne zdieľané štandardy, náhodné používanie naprieč tímami."],
                                ["Rozhodovanie sa oslabuje", "Viac možností, žiadny rámec na ich vyhodnotenie."],
                                ["Kvalita je nekonzistentná", "Vysoký objem výstupu, nestabilné štandardy."],
                                ["Exekúcia je rýchlejšia, úsudok je ťažší", "Smer trpí, keď rýchlosť rastie."],
                            ]).map(([a, b], i, arr) => (
                                <div key={i}>
                                    <div className="py-3 md:py-4">
                                        <p className="text-[14px] md:text-[15px] font-medium">{a}</p>
                                        <p className="text-[12px] md:text-[13px] text-black/35 mt-0.5">{b}</p>
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
                    SLIDE 03 — WHAT WE ARE / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <span className="absolute left-0 bottom-[-10px] font-cabinet font-bold text-[140px] md:text-[190px] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                        WHO
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Who We Are" : "Kto Sme"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            Bratislava · Slovakia
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-10 md:py-0 gap-10 items-center">
                        <div className="flex-1 md:pr-10">
                            <h2 className="font-cabinet font-bold text-[28px] md:text-[40px] tracking-tight leading-[1.05] text-white">
                                {en
                                    ? <>An applied AI platform<br />focused on how organisations<br />adapt to AI in real work.</>
                                    : <>Aplikovaná AI platforma<br />zameraná na to, ako sa<br />organizácie adaptujú na AI.</>}
                            </h2>
                        </div>
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-white/[0.07] md:pl-10 pt-8 md:pt-0 space-y-5">
                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.35em] text-[#4d7fd4] mb-2">
                                    {en ? "The Bridge" : "Most"}
                                </p>
                                <p className="text-[13px] text-white/50 leading-relaxed">
                                    {en
                                        ? "We translate real-world AI practice inside SORRYWECAN into better workflows, clearer decisions, and stronger adaptation for the organisations we work with."
                                        : "Prekladáme reálnu prax AI vo vnútri SORRYWECAN do lepších workflow, jasnejších rozhodnutí a silnejšej adaptácie pre organizácie, s ktorými pracujeme."}
                                </p>
                            </div>
                            <div className="h-px bg-white/[0.06]" />
                            <div>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.35em] text-[#4d7fd4] mb-2">
                                    {en ? "How We Work" : "Ako Pracujeme"}
                                </p>
                                <p className="text-[13px] text-white/50 leading-relaxed">
                                    {en
                                        ? "We test ideas in actual production before turning them into systems for partners. Most organisations move faster with AI but lose consistency. We design structures that keep both."
                                        : "Testujeme nápady v reálnej produkcii skôr, než ich premeníme na systémy pre partnerov. Väčšina organizácií sa pohybuje rýchlejšie s AI, ale stráca konzistentnosť. My navrhujeme štruktúry, ktoré udržia oboje."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">03</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 04 — THE ECOSYSTEM / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <span className="absolute right-[-30px] bottom-[-10px] font-cabinet font-bold text-[120px] md:text-[160px] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        SYSTEM
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "The Ecosystem" : "Ekosystém"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/30">
                            {en ? "Four Layers" : "Štyri Vrstvy"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-8 md:py-0">
                        <p className="text-[12px] md:text-[14px] text-white/40 mb-8 max-w-xl leading-relaxed">
                            {en
                                ? "Research Lab operates as a layered system connecting public, education, organisations, and research — each a different mode of engagement grounded in real AI workflows."
                                : "Research Lab funguje ako vrstvený systém prepájajúci verejnosť, vzdelávanie, organizácie a výskum — každý je iný spôsob zapojenia zakotvený v reálnych AI workflow."}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                            {(en ? [
                                { layer: "PUBLIC", format: "COMMUNITEA", desc: "Open sessions for anyone. Building shared language across society." },
                                { layer: "EDUCATION", format: "NextGen & Social", desc: "Seniors, educators, young people from care homes. Long-term capacity." },
                                { layer: "ORGANISATIONS", format: "MINDSHIFT", desc: "Internal programmes for teams and leadership. From chaos to structure." },
                                { layer: "RESEARCH", format: "FUTURE PROTOCOLS", desc: "Live experiments inside SORRYWECAN translated into frameworks." },
                            ] : [
                                { layer: "VEREJNOSŤ", format: "COMMUNITEA", desc: "Otvorené stretnutia pre každého. Budovanie spoločného jazyka." },
                                { layer: "VZDELÁVANIE", format: "NextGen & Social", desc: "Seniori, pedagógovia, mladí z detských domovov. Dlhodobá kapacita." },
                                { layer: "ORGANIZÁCIE", format: "MINDSHIFT", desc: "Interné programy pre tímy a vedenie. Od chaosu k štruktúre." },
                                { layer: "VÝSKUM", format: "FUTURE PROTOCOLS", desc: "Živé experimenty vo vnútri SORRYWECAN preložené do rámcov." },
                            ]).map((l) => (
                                <div key={l.layer} className="bg-white/[0.06] p-5 md:p-6">
                                    <p className="font-cabinet font-bold text-[20px] md:text-[24px] tracking-tighter text-white leading-none mb-1">{l.layer}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-white/40 mb-3">{l.format}</p>
                                    <p className="text-[11px] text-white/40 leading-relaxed">{l.desc}</p>
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
                    SLIDE 05 — THE FORMATS / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[140px] md:text-[200px] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                        HOW
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "What We Run" : "Čo Robíme"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 px-10 md:px-16 py-8 md:py-0 content-center gap-y-0">
                        {(en ? [
                            { name: "COMMUNITEA", tag: "Public · Open Format", desc: "Public sessions and curated discussions. Open formats that make AI understandable beyond the tech world. 2–3 hours, up to 20 people." },
                            { name: "MINDSHIFT", tag: "Organisations · B2B", desc: "Structured programme for teams and leadership. Cross-team AI diagnostics + integration into real workflows. From 2-day workshop to long-term collaboration." },
                            { name: "FUTURE PROTOCOLS", tag: "Toolkits & Research", desc: "Custom and open toolkits built on real SORRYWECAN workflows. Live experiments translated into practical frameworks others can use." },
                            { name: "MEDIA HOUSE", tag: "Content & Distribution", desc: "The Radar newsletter, blog, and online distribution. The content flywheel that builds trust and feeds all other formats." },
                        ] : [
                            { name: "COMMUNITEA", tag: "Verejnosť · Otvorený Formát", desc: "Verejné stretnutia a moderované diskusie. Otvorené formáty, ktoré robí AI zrozumiteľnou mimo tech sveta. 2–3 hodiny, až 20 ľudí." },
                            { name: "MINDSHIFT", tag: "Organizácie · B2B", desc: "Štruktúrovaný program pre tímy a vedenie. Diagnostika AI naprieč tímami + integrácia do reálnych workflow. Od 2-dňového workshopu po dlhodobú spoluprácu." },
                            { name: "FUTURE PROTOCOLS", tag: "Toolkity & Výskum", desc: "Vlastné a otvorené toolkity postavené na reálnych SORRYWECAN workflow. Živé experimenty preložené do praktických rámcov." },
                            { name: "MEDIA HOUSE", tag: "Obsah & Distribúcia", desc: "Newsletter The Radar, blog a online distribúcia. Obsahový flywheel, ktorý buduje dôveru a živí všetky ostatné formáty." },
                        ]).map((f, i) => (
                            <div key={f.name} className={`p-6 md:p-7 ${i % 2 === 0 ? "md:border-r border-black/10" : ""} ${i < 2 ? "border-b border-black/10" : ""}`}>
                                <p className="font-cabinet font-bold text-[22px] md:text-[26px] tracking-tight mb-1">{f.name}</p>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-[#0047BB] mb-3">{f.tag}</p>
                                <p className="text-[12px] text-black/50 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">05</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 06 — THE TEAM / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-cabinet font-bold text-[140px] md:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                        TEAM
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "The Team" : "Tím"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            {en ? "Practitioners" : "Praktici"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05] py-0">
                        {(en ? [
                            { name: "Peter Kaspar", role: "Creative Direction", sub: "Co-Founder · SORRYWECAN", note: "Creative alchemy at the intersection of human intuition and AI systems." },
                            { name: "Tiep Le Dinh", role: "Automation Infrastructure", sub: "Co-Founder · Research Lab", note: "Scalable workflows across tech, finance, and creative strategy." },
                            { name: "Roland Wranik", role: "Vision & Creative Strategy", sub: "SORRYWECAN CEO & Founder", note: "Early AI-native multimedia practitioner. Working with these systems from the very beginning." },
                            { name: "Roman Pii Wagner", role: "Strategic Navigation", sub: "Transformational Design", note: "Decision frameworks for uncertainty. Helps leadership prioritise signal over noise." },
                            { name: "Sasha Zaytseva", role: "Learning Systems", sub: "Research Facilitator", note: "Translates complex tech shifts into practical education and organisational formats." },
                            { name: "Andrea Kutlikova", role: "Project Lead", sub: "Adult Educator", note: "Community coordination and lifelong learning programmes focused on adaptation." },
                        ] : [
                            { name: "Peter Kaspar", role: "Kreatívne vedenie", sub: "Spoluzakladateľ · SORRYWECAN", note: "Kreatívna alchýmia na priesečníku ľudskej intuície a AI systémov." },
                            { name: "Tiep Le Dinh", role: "Automatizačná infraštruktúra", sub: "Spoluzakladateľ · Research Lab", note: "Škálovateľné workflow naprieč technológiami, financiami a kreatívnou stratégiou." },
                            { name: "Roland Wranik", role: "Vízia & Kreatívna stratégia", sub: "SORRYWECAN CEO & zakladateľ", note: "Raný AI-natívny multimediálny praktik. Pracuje s týmito systémami od samého začiatku." },
                            { name: "Roman Pii Wagner", role: "Strategická navigácia", sub: "Transformačný dizajn", note: "Rozhodovacie rámce pre neistotu. Pomáha vedeniu prioritizovať signál nad šumom." },
                            { name: "Sasha Zaytseva", role: "Vzdelávacie systémy", sub: "Výskumná facilitátorka", note: "Prekladá komplexné technologické zmeny do praktického vzdelávania a organizačných formátov." },
                            { name: "Andrea Kutlikova", role: "Vedúca projektov", sub: "Lektorka pre dospelých", note: "Koordinácia komunity a programy celoživotného vzdelávania zamerané na adaptáciu." },
                        ]).map((p) => (
                            <div key={p.name} className="bg-[#0d0d0d] p-5 md:p-6">
                                <p className="font-cabinet font-bold text-[16px] md:text-[18px] tracking-tight text-white leading-tight">{p.name}</p>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-[#4d7fd4] mt-1 mb-2">{p.role}</p>
                                <p className="text-[9px] font-code-brand text-white/20 mb-2">{p.sub}</p>
                                <p className="text-[11px] text-white/35 leading-relaxed">{p.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">06</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 07 — PROVEN IN PRACTICE / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Proven In Practice" : "Overené v Praxi"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-8 md:py-0 gap-10 items-center">
                        <div className="w-full md:w-[200px] shrink-0 flex flex-col justify-center">
                            <h2 className="font-cabinet font-bold text-[36px] md:text-[46px] leading-[0.92] tracking-tighter text-white">
                                {en ? <>Applied.<br />Not<br />theoretical.</> : <>Aplikované.<br />Nie<br />teoretické.</>}
                            </h2>
                        </div>
                        <div className="flex-1 flex flex-col justify-center md:border-l border-white/10 md:pl-10">
                            {(en ? [
                                ["AI workflows", "Live in creative production and content pipelines inside SORRYWECAN."],
                                ["MINDSHIFT delivered", "Internal programmes delivered to teams and organisations in Bratislava."],
                                ["Future Protocols", "Toolkits built from real workflows — tested before published."],
                                ["Education formats", "Across seniors, educators, and young people from children's homes."],
                                ["International collaboration", "Educational and research initiatives across borders."],
                                ["Market benchmark", "A competitor charged Tatra banka €20k for a basic 3-day tools overview. We deliver deeper for less — and with a mindset-first approach."],
                            ] : [
                                ["AI workflow", "Živé v kreatívnej produkcii a obsahových pipeline vo vnútri SORRYWECAN."],
                                ["MINDSHIFT odovzdaný", "Interné programy dodané tímom a organizáciám v Bratislave."],
                                ["Future Protocols", "Toolkity postavené na reálnych workflow — otestované pred publikovaním."],
                                ["Vzdelávacie formáty", "Naprieč seniormi, pedagógmi a mladými z detských domovov."],
                                ["Medzinárodná spolupráca", "Vzdelávacie a výskumné iniciatívy naprieč hranicami."],
                                ["Trhový benchmark", "Konkurent účtoval Tatra banke €20k za základný 3-dňový prehľad AI nástrojov. My dodávame hlbšie za menej — a s prístupom zameraným na myslenie."],
                            ]).map(([a, b], i, arr) => (
                                <div key={i}>
                                    <div className="flex gap-4 py-2.5 md:py-3 items-start">
                                        <span className="text-white/20 shrink-0 mt-0.5">—</span>
                                        <div>
                                            <span className="text-[13px] font-medium text-white">{a}: </span>
                                            <span className="text-[12px] text-white/40">{b}</span>
                                        </div>
                                    </div>
                                    {i < arr.length - 1 && <div className="h-px bg-white/[0.07]" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">07</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 08 — ENGAGEMENT / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <span className="absolute right-[-10px] bottom-[-10px] font-cabinet font-bold text-[120px] md:text-[170px] text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                        WORK
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "Work With Us" : "Spolupráca"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/20">
                            {en ? "Three Models" : "Tri Modely"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-8 md:py-0 gap-3">
                        {(en ? [
                            {
                                tier: "PARTICIPATION",
                                sub: "Participating in programmes",
                                desc: "Organisations engage Research Lab by participating in its programmes and formats. For organisations ready to build internal capability and apply AI with clarity and consistency.",
                                highlight: false,
                            },
                            {
                                tier: "COLLABORATION",
                                sub: "Contributing to shared outputs",
                                desc: "Direct involvement in selected programmes and project-based partnerships. Co-development of themes, modules, or programme editions. For organisations ready to actively contribute.",
                                highlight: false,
                            },
                            {
                                tier: "STRATEGIC PARTNERSHIP",
                                sub: "Long-term · Limited slots",
                                desc: "A limited number of organisations selected for long-term partnership. Support public formats, contribute to AI literacy, take a visible role in shaping how AI is understood at scale.",
                                highlight: true,
                            },
                        ] : [
                            {
                                tier: "PARTICIPÁCIA",
                                sub: "Účasť v programoch",
                                desc: "Organizácie sa zapájajú do programov a formátov Research Lab. Pre organizácie pripravené budovať internú kapacitu a aplikovať AI s jasnosťou a konzistentnosťou.",
                                highlight: false,
                            },
                            {
                                tier: "SPOLUPRÁCA",
                                sub: "Príspevok k spoločným výstupom",
                                desc: "Priame zapojenie do vybraných programov a projektových partnerstiev. Spolutvorianie tém, modulov alebo edícií programov. Pre organizácie pripravené aktívne prispievať.",
                                highlight: false,
                            },
                            {
                                tier: "STRATEGICKÉ PARTNERSTVO",
                                sub: "Dlhodobé · Obmedzený počet",
                                desc: "Obmedzený počet organizácií vybraných pre dlhodobé partnerstvo. Podpora verejných formátov, príspevok k AI gramotnosti, viditeľná rola pri formovaní toho, ako je AI chápaná v škále.",
                                highlight: true,
                            },
                        ]).map((t) => (
                            <div key={t.tier} className={`flex gap-6 p-4 md:p-5 border ${t.highlight ? "border-[#0047BB]/40 bg-[#0047BB]/[0.04]" : "border-black/10"}`}>
                                <div className="shrink-0 w-44 md:w-52">
                                    <p className="font-cabinet font-bold text-[15px] md:text-[17px] tracking-tight">{t.tier}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.2em] text-black/40 mt-0.5">{t.sub}</p>
                                </div>
                                <p className="text-[12px] text-black/50 leading-relaxed">{t.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">08</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 09 — CLOSE / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Let's Build Together" : "Budujme Spolu"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            Research Lab · 2026
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row items-stretch">
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-12 md:py-0">
                            <h2 className="font-cabinet font-bold text-[56px] md:text-[86px] leading-[0.87] tracking-tighter text-white">
                                {en ? <>Let's<br />talk.</> : <>Porozprávajme<br />sa.</>}
                            </h2>
                            <p className="mt-7 text-[13px] text-white/40 max-w-xs leading-relaxed">
                                {en
                                    ? "A short conversation. No commitment. We figure out together if there's something worth building."
                                    : "Krátky rozhovor. Žiadny záväzok. Spoločne zistíme, či je tu niečo, čo stojí za to budovať."}
                            </p>
                        </div>

                        <div className="w-full md:w-[260px] flex flex-col justify-center px-10 md:px-12 py-10 md:py-0 gap-6 border-t md:border-t-0 md:border-l border-white/[0.07]">
                            <a
                                href="mailto:hello@researchlab.sk"
                                className="block bg-white text-[#0d0d0d] text-center px-6 py-4 hover:bg-[#e8e1da] transition-colors"
                            >
                                <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em]">
                                    {en ? "Get In Touch" : "Kontaktujte Nás"}
                                </span>
                            </a>
                            <div className="space-y-4 text-[11px] font-code-brand text-white/30">
                                <div>
                                    <p className="uppercase tracking-[0.3em] text-white/20 mb-1">Email</p>
                                    <p>hello@researchlab.sk</p>
                                </div>
                                <div className="h-px bg-white/[0.07]" />
                                <div>
                                    <p className="uppercase tracking-[0.3em] text-white/20 mb-1">Based</p>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                                <div className="h-px bg-white/[0.07]" />
                                <div>
                                    <p className="uppercase tracking-[0.3em] text-white/20 mb-1">Part Of</p>
                                    <p>SORRYWECAN ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN // RESEARCH LAB // 2026</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">09</span>
                    </div>
                </div>

            </div>
        </>
    )
}
