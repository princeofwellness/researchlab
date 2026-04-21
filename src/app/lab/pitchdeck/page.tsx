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
                    SLIDE 01 — COVER / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <span className="absolute right-[-20px] bottom-[-20px] font-cabinet font-bold text-[200px] md:text-[300px] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
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
                        <h1 className="font-cabinet font-bold leading-[0.88] tracking-tighter text-[72px] md:text-[110px] text-white">
                            RESEARCH<br />LAB.
                        </h1>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">01</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 02 — IDENTITY / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <span className="absolute right-[-10px] bottom-[-10px] font-cabinet font-bold text-[180px] md:text-[260px] text-black/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        ID
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "Identity" : "Identita"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 max-w-[680px]">
                        <h2 className="font-cabinet font-bold text-[28px] md:text-[40px] tracking-tight leading-[1.05] mb-8">
                            {en ? "Identity" : "Identita"}
                        </h2>
                        <div className="space-y-5">
                            <p className="text-[15px] md:text-[18px] leading-relaxed text-[#0a0a0a]">
                                {en
                                    ? "Research Lab is an applied AI platform focused on how organisations adapt to AI in real work."
                                    : "Research Lab je aplikovaná AI platforma zameraná na to, ako sa organizácie adaptujú na AI v reálnej práci."}
                            </p>
                            <p className="text-[15px] md:text-[18px] leading-relaxed text-[#0a0a0a]">
                                {en
                                    ? "It translates real-world AI practice into better workflows, clearer decision-making, and stronger organisational adaptation."
                                    : "Prekladá reálnu prax AI do lepších workflow, jasnejšieho rozhodovania a silnejšej organizačnej adaptácie."}
                            </p>
                            <p className="text-[15px] md:text-[18px] leading-relaxed text-black/40">
                                {en
                                    ? "Developed within the SORRYWECAN ecosystem."
                                    : "Vyvinuté v rámci ekosystému SORRYWECAN."}
                            </p>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">02</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 03 — WHY THIS EXISTS / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Why This Exists" : "Prečo Existujeme"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <h2 className="font-cabinet font-bold text-[40px] md:text-[68px] tracking-tight leading-[1.0] text-white max-w-[700px] mb-10">
                            {en
                                ? <>AI is a system-level<br />shift, not a tool change.</>
                                : <>AI je zmena na úrovni<br />systému, nie nástrojov.</>}
                        </h2>
                        <p className="text-[14px] md:text-[17px] text-white/45 max-w-[560px] leading-relaxed">
                            {en
                                ? "Most organisations lack a structured way to integrate AI without losing control. Research Lab exists to provide that bridge: across workflows, decisions, and how teams adapt."
                                : "Väčšine organizácií chýba štruktúrovaný spôsob integrácie AI bez straty kontroly. Research Lab je práve ten most: cez workflow, rozhodnutia a spôsob adaptácie tímov."}
                        </p>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">03</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 04 — THE CORE PROBLEM / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "The Core Problem" : "Koreňový Problém"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-8 md:py-0">
                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                            {(en ? [
                                { title: "AI adoption is chaotic", body: "No shared standards, random usage across teams." },
                                { title: "Decision-making is weakening", body: "More options, no framework to evaluate them." },
                                { title: "Quality is inconsistent", body: "High output volume, unstable creative and operational standards." },
                                { title: "Execution is faster, but judgment is harder", body: "Direction suffers." },
                            ] : [
                                { title: "Adopcia AI je chaotická", body: "Žiadne zdieľané štandardy, náhodné používanie naprieč tímami." },
                                { title: "Rozhodovanie sa oslabuje", body: "Viac možností, žiadny rámec na ich vyhodnotenie." },
                                { title: "Kvalita je nekonzistentná", body: "Vysoký objem výstupu, nestabilné kreatívne a operačné štandardy." },
                                { title: "Exekúcia je rýchlejšia, ale úsudok je ťažší", body: "Smer trpí." },
                            ]).map((p) => (
                                <div key={p.title} className="bg-[#0047BB] p-7 md:p-10">
                                    <p className="font-cabinet font-bold text-[18px] md:text-[22px] tracking-tight text-white leading-tight mb-3">{p.title}</p>
                                    <p className="text-[12px] text-white/40 leading-relaxed">{p.body}</p>
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
                    SLIDE 05 — HOW WE WORK / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <span className="absolute right-[-10px] bottom-[-10px] font-cabinet font-bold text-[150px] md:text-[220px] text-black/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        HOW
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "How We Work" : "Ako Pracujeme"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[56px] tracking-tight leading-[1.0] mb-10">
                            {en ? "How we work" : "Ako pracujeme"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[820px]">
                            <div className="space-y-2">
                                <p className="text-[14px] md:text-[16px] leading-relaxed text-[#0a0a0a]">
                                    {en
                                        ? <>Research Lab works where <em>strategy</em>, <em>execution</em>, and <em>cognition</em> meet.</>
                                        : <>Research Lab pracuje tam, kde sa stretáva <em>stratégia</em>, <em>exekúcia</em> a <em>kognícia</em>.</>}
                                </p>
                                <p className="text-[14px] md:text-[16px] leading-relaxed text-[#0a0a0a]">
                                    {en
                                        ? <>Built on real AI production inside SORRY<strong>WECAN</strong>, we test ideas in actual workflows before translating them into systems for partners.</>
                                        : <>Postavené na reálnej AI produkcii vo vnútri SORRY<strong>WECAN</strong>, testujeme nápady v skutočných workflow predtým, ako ich preložíme do systémov pre partnerov.</>}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[14px] md:text-[16px] leading-relaxed text-black/55">
                                    {en
                                        ? "We focus on how work holds under AI, how decisions are made, how quality is maintained, and how teams stay aligned as output scales."
                                        : "Zameriavame sa na to, ako práca obstojí pod vplyvom AI, ako sa prijímajú rozhodnutia, ako sa udržiava kvalita a ako tímy zostávajú zladené pri rastúcom výkone."}
                                </p>
                                <p className="text-[14px] md:text-[16px] leading-relaxed text-black/55">
                                    {en
                                        ? "Most organisations move faster with AI, but lose consistency and direction. We design structures that keep both."
                                        : "Väčšina organizácií sa pohybuje rýchlejšie s AI, ale stráca konzistentnosť a smer. My navrhujeme štruktúry, ktoré udržia oboje."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">05</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 06 — THE ECOSYSTEM / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "The Ecosystem" : "Ekosystém"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-6 md:py-0">
                        <h2 className="font-cabinet font-bold text-[26px] md:text-[38px] tracking-tight leading-[1.05] text-white mb-6">
                            {en ? "A layered system for real AI engagement" : "Vrstvený systém pre reálne zapojenie s AI"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {(en ? [
                                { layer: "PUBLIC", icon: "○", desc: "Open events, discussions, and resources accessible to anyone. Formats that make AI understandable and relevant beyond the tech and business world, building shared language and awareness across society." },
                                { layer: "EDUCATION", icon: "◇", desc: "Programmes for groups actively navigating and adapting to technological change. From seniors and educators to young people from children's homes, focused on building long-term capacity and supporting meaningful adaptation to AI." },
                                { layer: "ORGANISATIONS", icon: "□", desc: "Internal educational programmes for teams and leadership. From fragmented AI usage to structured workflows, clear decision-making, and consistent quality across teams." },
                                { layer: "RESEARCH", icon: "△", desc: "Real-world experimentation inside SORRYWECAN production. Tested approaches translated into frameworks, systems, and learning formats used across the ecosystem." },
                            ] : [
                                { layer: "VEREJNOSŤ", icon: "○", desc: "Otvorené podujatia, diskusie a zdroje prístupné každému. Formáty, ktoré robia AI zrozumiteľnou a relevantnou mimo tech a business sveta, budujúc spoločný jazyk a povedomie." },
                                { layer: "VZDELÁVANIE", icon: "◇", desc: "Programy pre skupiny aktívne navigujúce technologickú zmenu. Od seniorov a pedagógov po mladých z detských domovov — zamerané na dlhodobú kapacitu a zmysluplnú adaptáciu na AI." },
                                { layer: "ORGANIZÁCIE", icon: "□", desc: "Interné vzdelávacie programy pre tímy a vedenie. Od fragmentovaného používania AI k štruktúrovaným workflow, jasnému rozhodovaniu a konzistentnej kvalite naprieč tímami." },
                                { layer: "VÝSKUM", icon: "△", desc: "Reálne experimenty vo vnútri SORRYWECAN produkcie. Overené prístupy preložené do rámcov, systémov a vzdelávacích formátov používaných naprieč ekosystémom." },
                            ]).map((l) => (
                                <div key={l.layer} className="bg-white/[0.04] border border-white/[0.06] p-5 md:p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#4d7fd4] text-[16px]">{l.icon}</span>
                                        <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-white/60">{l.layer}</p>
                                    </div>
                                    <p className="text-[12px] text-white/40 leading-relaxed">{l.desc}</p>
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
                    SLIDE 07 — KEY FORMATS / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Key Formats" : "Kľúčové Formáty"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-6 md:py-0">
                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                            {(en ? [
                                { name: "COMMUNITEA", tag: "Public · Open Format", desc: "Public sessions and curated discussions. Open formats that make AI understandable beyond the tech world.", meta: ["2–3 hours · up to 20 people"] },
                                { name: "MINDSHIFT", tag: "Organisations · B2B", desc: "Structured programme for teams and leadership. Cross-team AI diagnostics + integration into real workflows. From 2-day workshop to long-term collaboration.", meta: ["2-day to long-term · up to 15 people"] },
                                { name: "FUTURE PROTOCOLS", tag: "Toolkits & Research", desc: "Custom and open toolkits built on real SORRYWECAN workflows. Live experiments translated into practical frameworks others can use.", meta: [] },
                                { name: "MEDIA HOUSE", tag: "Content & Distribution", desc: "The Radar newsletter, blog, and online distribution. The content flywheel that builds trust and feeds all other formats.", meta: [] },
                            ] : [
                                { name: "COMMUNITEA", tag: "Verejnosť · Otvorený Formát", desc: "Verejné stretnutia a moderované diskusie. Otvorené formáty, ktoré robia AI zrozumiteľnou mimo tech sveta.", meta: ["2–3 hodiny · až 20 ľudí"] },
                                { name: "MINDSHIFT", tag: "Organizácie · B2B", desc: "Štruktúrovaný program pre tímy a vedenie. Diagnostika AI + integrácia do reálnych workflow. Od 2-dňového workshopu po dlhodobú spoluprácu.", meta: ["2 dni až dlhodobý · až 15 ľudí"] },
                                { name: "FUTURE PROTOCOLS", tag: "Toolkity & Výskum", desc: "Vlastné a otvorené toolkity postavené na reálnych SORRYWECAN workflow. Živé experimenty preložené do praktických rámcov.", meta: [] },
                                { name: "MEDIA HOUSE", tag: "Obsah & Distribúcia", desc: "Newsletter The Radar, blog a online distribúcia. Obsahový flywheel, ktorý buduje dôveru a živí všetky ostatné formáty.", meta: [] },
                            ]).map((f) => (
                                <div key={f.name} className="bg-[#0047BB] p-7 md:p-10 flex flex-col">
                                    <p className="font-cabinet font-bold text-[22px] md:text-[28px] tracking-tight text-white leading-none mb-1">{f.name}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-white/35 mb-4">{f.tag}</p>
                                    <p className="text-[12px] text-white/50 leading-relaxed flex-1">{f.desc}</p>
                                    {f.meta.length > 0 && (
                                        <p className="text-[10px] font-code-brand text-white/25 mt-3">{f.meta[0]}</p>
                                    )}
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
                    SLIDE 08 — THE TEAM / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "The Team" : "Tím"}
                        </span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">
                            {en ? "Practitioners" : "Praktici"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="px-10 md:px-16 pt-4 pb-2">
                        <h2 className="font-cabinet font-bold text-[22px] md:text-[28px] tracking-tight">
                            {en ? "ResearchLab team" : "Tím ResearchLab"}
                        </h2>
                        <p className="text-[12px] text-black/40 mt-1">
                            {en
                                ? "Practitioners shaping how business, technology, creative production, and human decision-making evolve with AI."
                                : "Praktici formujúci to, ako sa biznis, technológia, kreatívna produkcia a ľudské rozhodovanie vyvíjajú s AI."}
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-px bg-black/[0.08] mx-10 md:mx-16 mb-0">
                        {(en ? [
                            { name: "Peter Kaspar", role: "Creative Direction", sub: "SORRYWECAN and Research Lab Co-Founder", note: "Exploring creative alchemy at the intersection of human intuition and AI systems." },
                            { name: "Tiep Le Dinh", role: "Automation Infrastructure", sub: "Research Lab Co-Founder", note: "Designs scalable workflows across tech, finance, and creative strategy." },
                            { name: "Sasha Zaytseva", role: "Learning Systems", sub: "Research Facilitator", note: "Translates complex tech shifts into practical education and organisational formats." },
                            { name: "Andrea Kutlikova", role: "Project Leader, Adult Educator", sub: "", note: "Leads community coordination and develops adult and lifelong learning programmes focused on adaptation to technological change." },
                            { name: "Roman Pii Wagner", role: "Strategic Navigation", sub: "Transformational Design", note: "Builds decision frameworks for uncertainty. Helps leadership prioritise signal over noise." },
                            { name: "Roland Wranik", role: "Vision and Creative Strategy", sub: "SORRYWECAN CEO and Founder", note: "Early practitioner of AI-native multimedia production, working with these systems from the very beginning." },
                        ] : [
                            { name: "Peter Kaspar", role: "Kreatívne Vedenie", sub: "Spoluzakladateľ SORRYWECAN a Research Lab", note: "Skúma kreatívnu alchýmiu na priesečníku ľudskej intuície a AI systémov." },
                            { name: "Tiep Le Dinh", role: "Automatizačná Infraštruktúra", sub: "Spoluzakladateľ Research Lab", note: "Navrhuje škálovateľné workflow naprieč tech, financiami a kreatívnou stratégiou." },
                            { name: "Sasha Zaytseva", role: "Vzdelávacie Systémy", sub: "Výskumná Facilitátorka", note: "Prekladá komplexné technologické zmeny do praktického vzdelávania a organizačných formátov." },
                            { name: "Andrea Kutlikova", role: "Vedúca Projektu, Lektorka pre Dospelých", sub: "", note: "Vedie komunitnú koordináciu a rozvíja celoživotné vzdelávacie programy zamerané na adaptáciu na technologickú zmenu." },
                            { name: "Roman Pii Wagner", role: "Strategická Navigácia", sub: "Transformačný Dizajn", note: "Buduje rozhodovací rámec pre neistotu. Pomáha vedeniu uprednostniť signál pred šumom." },
                            { name: "Roland Wranik", role: "Vízia a Kreatívna Stratégia", sub: "CEO a Zakladateľ SORRYWECAN", note: "Raný praktik AI-natívnej multimediálnej produkcie, pracujúci s týmito systémami od samého začiatku." },
                        ]).map((p) => (
                            <div key={p.name} className="bg-[#e8e1da] p-4 md:p-5">
                                <p className="font-cabinet font-bold text-[14px] md:text-[15px] tracking-tight text-[#0047BB]">{p.name}</p>
                                <p className="text-[10px] text-black/40 mt-0.5">{p.role}</p>
                                {p.sub && <p className="text-[10px] text-black/30">{p.sub}</p>}
                                <p className="text-[11px] text-black/50 leading-relaxed mt-2">{p.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="px-10 md:px-16 py-3">
                        <p className="text-[10px] text-black/30 leading-relaxed">
                            {en
                                ? "The core team is extended by a curated network of domain experts, engaged based on the needs of each project, ensuring the right combination of perspectives for each context."
                                : "Kmeňový tím je rozšírený o kurátorskú sieť odborníkov z praxe, zapájaných podľa potrieb každého projektu."}
                        </p>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">08</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 09 — APPLIED WORK / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Applied Work and Experience" : "Aplikovaná Práca a Skúsenosť"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col md:flex-row px-10 md:px-16 py-10 md:py-0 gap-12 items-center">
                        <div className="md:w-64 flex-shrink-0">
                            <h2 className="font-cabinet font-bold text-[24px] md:text-[32px] tracking-tight leading-[1.1] text-white mb-4">
                                {en
                                    ? <>Applied work<br />and experience</>
                                    : <>Aplikovaná práca<br />a skúsenosť</>}
                            </h2>
                            <p className="text-[13px] text-white/40 leading-relaxed mb-4">
                                {en
                                    ? "We design and run AI workflows for real work — from early experiments to systems that scale."
                                    : "Navrhujeme a prevádzkujeme AI workflow pre reálnu prácu — od prvých experimentov po škálovateľné systémy."}
                            </p>
                            <p className="text-[11px] font-code-brand uppercase tracking-[0.2em] text-white/25">
                                {en ? "This shows up in:" : "Toto sa prejavuje v:"}
                            </p>
                        </div>
                        <div className="flex-1 border-t md:border-t-0 md:border-l border-white/[0.07] md:pl-12 pt-8 md:pt-0 space-y-4">
                            {(en ? [
                                "AI workflows used in live creative production and content pipelines",
                                "Internal programmes (MINDSHIFT) delivered to teams and organisations",
                                "Future Protocols toolkits built from real workflows",
                                "Educational formats across seniors, educators, and young people from children's homes",
                                "International collaboration through educational and research initiatives",
                            ] : [
                                "AI workflow používané v živej kreatívnej produkcii a obsahových pipeline",
                                "Interné programy (MINDSHIFT) dodávané tímom a organizáciám",
                                "Toolkity Future Protocols postavené z reálnych workflow",
                                "Vzdelávacie formáty pre seniorov, pedagógov a mladých z detských domovov",
                                "Medzinárodná spolupráca cez vzdelávacie a výskumné iniciatívy",
                            ]).map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="text-[#4d7fd4] text-[16px] mt-0.5 flex-shrink-0">—</span>
                                    <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed">{item}</p>
                                </div>
                            ))}
                            <div className="pt-4">
                                <p className="text-[13px] text-[#4d7fd4] leading-relaxed">
                                    {en
                                        ? "Proven in live environments and applied across organisational contexts."
                                        : "Overené v živých prostrediach a aplikované naprieč organizačnými kontextmi."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">09</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 10 — ENGAGEMENT 01/03 PARTICIPATION / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Engagement — 01 / 03" : "Zapojenie — 01 / 03"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <h2 className="font-cabinet font-bold text-[54px] md:text-[88px] tracking-tighter leading-[0.9] text-white mb-8">
                            {en ? "PARTICIPATION" : "PARTICIPÁCIA"}
                        </h2>
                        <p className="text-[13px] text-[#c8b89a] mb-5 max-w-[500px]">
                            {en
                                ? "Participating in Research Lab programmes"
                                : "Účasť v programoch Research Lab"}
                        </p>
                        <div className="space-y-3 max-w-[560px]">
                            <p className="text-[14px] md:text-[16px] text-white/80 leading-relaxed">
                                {en
                                    ? "Organisations engage Research Lab by participating in its programmes and formats, designed to strengthen how teams work with AI in practice."
                                    : "Organizácie sa zapájajú do Research Lab účasťou v programoch a formátoch navrhnutých na posilnenie práce tímov s AI v praxi."}
                            </p>
                            <p className="text-[14px] md:text-[16px] text-white/50 leading-relaxed">
                                {en
                                    ? "For organisations ready to build internal capability and apply AI with clarity and consistency."
                                    : "Pre organizácie pripravené budovať internú kapacitu a aplikovať AI s jasnosťou a konzistentnosťou."}
                            </p>
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">10</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 11 — ENGAGEMENT 02/03 COLLABORATION / parchment
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#e8e1da] text-[#0a0a0a]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">
                            {en ? "Engagement — 02 / 03" : "Zapojenie — 02 / 03"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-black/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <h2 className="font-cabinet font-bold text-[54px] md:text-[88px] tracking-tighter leading-[0.9] mb-8">
                            {en ? "COLLABORATION" : "SPOLUPRÁCA"}
                        </h2>
                        <p className="text-[13px] text-[#0047BB] mb-5 max-w-[500px]">
                            {en
                                ? "Contributing to programmes and shared outputs"
                                : "Prispievanie k programom a spoločným výstupom"}
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed max-w-[500px] mb-5">
                            {en
                                ? "Organisations collaborate with Research Lab through direct involvement in selected programmes, formats, and initiatives, or as partners on specific projects."
                                : "Organizácie spolupracujú s Research Lab cez priame zapojenie do vybraných programov a formátov, alebo ako partneri na konkrétnych projektoch."}
                        </p>
                        <div className="space-y-2 max-w-[500px]">
                            {(en ? [
                                "External contribution within established formats",
                                "Co-development of themes, modules, or programme editions",
                                "Project-based partnerships on selected initiatives",
                                "Participation in research and broader outputs",
                            ] : [
                                "Externý príspevok v rámci zavedených formátov",
                                "Spoločný vývoj tém, modulov alebo edícií programu",
                                "Partnerstvá na báze projektov pri vybraných iniciatívach",
                                "Účasť na výskume a širších výstupoch",
                            ]).map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="text-[#0047BB] text-[14px] mt-0.5 flex-shrink-0">—</span>
                                    <p className="text-[13px] text-black/60 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-black/10" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-black/20">11</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 12 — ENGAGEMENT 03/03 STRATEGIC PARTNERSHIP / dark
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0d0d0d] text-[#e8e1da]`}>
                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">
                            {en ? "Engagement — 03 / 03" : "Zapojenie — 03 / 03"}
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/[0.07]" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <h2 className="font-cabinet font-bold text-[44px] md:text-[72px] tracking-tighter leading-[0.9] text-white mb-8">
                            {en ? <>STRATEGIC<br />PARTNERSHIP</> : <>STRATEGICKÉ<br />PARTNERSTVO</>}
                        </h2>
                        <p className="text-[14px] md:text-[16px] text-white/70 leading-relaxed max-w-[540px] mb-5">
                            {en
                                ? "A limited number of organisations are selected for long-term partnership with Research Lab."
                                : "Obmedzený počet organizácií je vybraný pre dlhodobé partnerstvo s Research Lab."}
                        </p>
                        <div className="space-y-2 max-w-[500px] mb-6">
                            {(en ? [
                                "Support of public formats and educational initiatives",
                                "Contribution to the development of AI literacy",
                                "Visible role in shaping how AI is understood and applied",
                            ] : [
                                "Podpora verejných formátov a vzdelávacích iniciatív",
                                "Príspevok k rozvoju AI gramotnosti",
                                "Viditeľná rola pri formovaní toho, ako je AI chápaná a aplikovaná",
                            ]).map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="text-[#4d7fd4] text-[14px] mt-0.5 flex-shrink-0">—</span>
                                    <p className="text-[13px] text-white/55 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[12px] text-white/30 leading-relaxed max-w-[480px]">
                            {en
                                ? "Reserved for organisations ready to take a leading role in defining how AI is understood and applied at scale."
                                : "Vyhradené pre organizácie pripravené prevziať vedúcu rolu v tom, ako je AI chápaná a aplikovaná v škále."}
                        </p>
                    </div>

                    <div className="mx-10 md:mx-16 h-px bg-white/[0.07]" />
                    <div className="flex justify-between px-10 md:px-16 py-4">
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">SORRYWECAN</span>
                        <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/15">12</span>
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SLIDE 13 — CLOSE / blue + grid
                ════════════════════════════════════════════════════════════ */}
                <div className={`${S} bg-[#0047BB] text-white`} style={grid}>
                    <span className="absolute right-[-20px] bottom-[-20px] font-cabinet font-bold text-[180px] md:text-[260px] text-white/[0.04] leading-none select-none pointer-events-none tracking-tighter">
                        RL
                    </span>

                    <div className="flex items-center justify-between px-10 md:px-16 pt-7">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            Research Lab
                        </span>
                    </div>
                    <div className="mx-10 md:mx-16 mt-4 h-px bg-white/10" />

                    <div className="flex-1 flex flex-col justify-center px-10 md:px-16">
                        <p className="text-[14px] md:text-[17px] text-white/50 leading-relaxed max-w-[480px] mb-6">
                            {en
                                ? "To discuss your specific needs and find the right format of engagement:"
                                : "Ak chcete prediskutovať vaše konkrétne potreby a nájsť správny formát zapojenia:"}
                        </p>
                        <a
                            href="mailto:researchlab@sorrywecan.com"
                            className="font-cabinet font-bold text-[24px] md:text-[36px] tracking-tight text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all"
                        >
                            researchlab@sorrywecan.com
                        </a>
                    </div>

                    <div className="px-10 md:px-16 pb-8">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="font-cabinet font-bold text-[16px] md:text-[20px] tracking-tight text-white">
                                    RESEARCH<span className="text-white/50">LAB</span>
                                </p>
                                <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/40 mt-0.5">
                                    BY SORRY<strong>WECAN</strong>
                                </p>
                            </div>
                            <span className="text-[8px] font-code-brand uppercase tracking-[0.3em] text-white/20">13</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
