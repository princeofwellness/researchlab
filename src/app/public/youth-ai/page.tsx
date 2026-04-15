"use client"

import React from "react"

export default function YouthAIPage() {
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
                        background: #f4ede6;
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
                    type="button"
                    onClick={() => window.print()}
                    className="hidden md:block text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-[#0047BB] text-white shadow hover:bg-black transition-colors"
                >
                    Export PDF
                </button>
            </div>

            <div className="page-container font-sans-brand text-[#0a0a0a]">
                
                <div className={pageClass}>
                    <div className="text-center max-w-4xl px-4">
                        <p className="text-[13px] md:text-[16px] font-code-brand font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#0047BB] mb-12 md:mb-16">RESEARCH LAB</p>
                        <h1 className="font-bold text-[42px] md:text-[64px] leading-[1.1] tracking-tight">
                            VZDELÁVACÍ PROGRAM RESEARCH LAB PRE MLADÝCH ĽUDÍ ODCHÁDZAJÚCICH ZO SYSTÉMU STAROSTLIVOSTI
                        </h1>
                        <div className="w-12 md:w-16 h-1 bg-[#0047BB] mx-auto mt-8 md:mt-10"></div>
                    </div>
                    <p className="absolute bottom-4 md:bottom-8 text-[8px] md:text-[10px] font-code-brand uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/20">RESEARCH LAB {"//"} 2026</p>
                </div>

                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="p-6 md:p-8 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                <h2 className="font-bold text-[24px] md:text-[32px] leading-tight mb-4">Nové nástroje. Nové príležitosti.</h2>
                                <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                    Umelá inteligencia "AI" je dnes jednou z prvých technológií, ktoré dokážu pomôcť nahrádzať časť neformálnej podpory, ktorú ľudia bežne získavajú od rodiny alebo komunity. Pre mladých ľudí odchádzajúcich z inštitucionálnej starostlivosti sa tak môže stať užitočným nástrojom na orientáciu v informáciách a na zvládanie praktických životných situácií.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">PRÍLEŽITOSŤ</p>
                                <h2 className="font-bold text-[24px] md:text-[32px] leading-tight mb-4">AI ako nástroj nových príležitostí</h2>
                                <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                    Keď mladí ľudia odchádzajú zo systému starostlivosti vo veku 18 rokov, stoja pred rozhodnutiami, ktoré väčšina ich rovesníkov nerieši bez podpory rodiny, blízkych alebo svojho zázemia. AI môže v tomto kontexte fungovať ako praktický nástroj podpory. Pomáha porozumieť dokumentom, pripraviť sa na náročné situácie, premyslieť si možnosti alebo hľadať pracovné príležitosti.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pageClass}>
                    <div className="max-w-4xl w-full px-4 text-center">
                        <h2 className="font-bold text-[32px] md:text-[48px] mb-6">VZDELÁVACÍ PROGRAM RESEARCHLAB</h2>
                        <p className="text-[16px] md:text-[20px] text-black/70 mb-8 leading-relaxed">
                            Náš program je navrhnutý ako praktická podpora pre mladých ľudí na začiatku samostatného života.
                            Pozostáva z dvoch vzájomne prepojených častí:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 text-left">
                            <div className="p-6 border border-black/[0.08] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[18px] md:text-[22px] text-[#0047BB]">interaktívne workshopy</p>
                                <p className="text-[14px] md:text-[16px] text-black/70 mt-2">realizované priamo v zariadení</p>
                            </div>
                            <div className="p-6 border border-black/[0.08] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[18px] md:text-[22px] text-[#0047BB]">online sprievodca</p>
                                <p className="text-[14px] md:text-[16px] text-black/70 mt-2">ktorý zostáva k dispozícii aj po ich ukončení</p>
                            </div>
                        </div>
                        <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed mb-4">
                            Spolu vytvárajú ucelený systém, ktorý pomáha mladým ľuďom využívať AI nástroje prakticky a zmysluplne v situáciách, ktoré ich čakajú.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                            Program je navrhnutý tak, aby bol realizovateľný v rôznych typoch zariadení a prispôsobiteľný ich kapacitám a podmienkam.
                        </p>
                    </div>
                </div>

                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-bold text-[28px] md:text-[40px] text-center mb-8 md:mb-12">ZÁKLADNÉ PRINCÍPY PROGRAMU</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="p-6 md:p-8 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                <p className="text-[11px] md:text-[12px] font-code-brand font-bold text-black/30 mb-2">1. IDENTITA</p>
                                <h3 className="font-bold text-[20px] md:text-[24px] mb-4">Identita na prvom mieste</h3>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed mb-3">
                                    Ešte pred učením konkrétnych zručností sa venujeme tomu, ako mladí ľudia premýšľajú o sebe a o svojich možnostiach.
                                </p>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed mb-3">
                                    Rozvíjame kritické myslenie, schopnosť pracovať s informáciami a pocit, že dokážu robiť vlastné rozhodnutia.
                                </p>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed">
                                    AI nástroje v tomto procese nepoužívame ako náhradu myslenia, ale ako nástroj, ktorý im pomáha lepšie premýšľať, overovať informácie a postupne získavať väčšiu samostatnosť.
                                </p>
                            </div>
                            <div className="p-6 md:p-8 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                <p className="text-[11px] md:text-[12px] font-code-brand font-bold text-black/30 mb-2">2. PRÁCA S INFORMÁCIAMI</p>
                                <h3 className="font-bold text-[20px] md:text-[24px] mb-4">Nie len ako používať AI, ale ako s ňou premýšľať</h3>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed mb-3">
                                    Mladí ľudia sa neučia iba ovládať nástroje. Učia sa, ako pomocou AI premýšľať nad problémami, klásť správne otázky a pracovať s informáciami.
                                </p>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed mb-2">V praxi to znamená rozvíjať schopnosť:</p>
                                <ul className="pl-5 text-[13px] md:text-[15px] text-black/70 leading-relaxed mb-3 space-y-2">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                        <span>formulovať otázky tak, aby AI vedela pomôcť</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                        <span>rozlišovať, kedy je odpoveď užitočná a kedy jej netreba veriť</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                        <span>overovať informácie a kriticky ich posudzovať</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                        <span>použiť AI ako pomocníka pri riešení konkrétnych úloh, nie ako generátora riešení</span>
                                    </li>
                                </ul>
                                <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed">
                                    Cieľom nie je slepo dôverovať technológii, ale naučiť sa ju používať ako nástroj pri premýšľaní a rozhodovaní.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 6: Workshop details */}
                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="mb-8">
                            <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">OFFLINE</p>
                            <h2 className="font-bold text-[28px] md:text-[40px] leading-tight">WORKSHOP: Lektorované stretnutie v Centre pre deti a rodiny</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="md:col-span-1 space-y-4">
                                <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                    Program môže byť realizovaný ako jednodňové stretnutie alebo ako dve kratšie návštevy.
                                </p>
                                <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                    Stretnutie vedie lektor a facilitátor Research Lab a je postavené na praktickej práci v malých skupinách.
                                </p>
                                <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                    Cieľom nie je prednáška o technológiách, ale spoločná práca s konkrétnymi situáciami, ktoré mladí ľudia riešia v každodennom živote.
                                </p>
                                <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                    Workshop zároveň vytvára priestor na budovanie dôvery a na prvé praktické skúsenosti s využívaním AI nástrojov.
                                </p>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 gap-4">
                                <div className="p-5 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                    <h3 className="font-bold text-[18px] md:text-[20px] mb-2 text-[#0047BB]">Kto som v digitálnom svete</h3>
                                    <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                        Úvodná časť je zameraná na reflexiu silných stránok, spôsobov práce s informáciami a prvú skúsenosť s AI ako nástrojom na premýšľanie a orientáciu v problémoch.
                                    </p>
                                </div>
                                <div className="p-5 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                    <h3 className="font-bold text-[18px] md:text-[20px] mb-2 text-[#0047BB]">AI ako praktický nástroj</h3>
                                    <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed mb-2">
                                        Práca s tromi modelovými situáciami z bežného života:
                                    </p>
                                    <ul className="pl-5 text-[14px] md:text-[15px] text-black/70 leading-relaxed space-y-2">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                            <span>porozumenie dokumentu</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                            <span>formulovanie správy alebo žiadosti</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-[#0047BB] mt-1.5 shrink-0"></div>
                                            <span>identifikácia podvodu alebo manipulatívnej ponuky</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 7: Online Guide */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="mb-6 md:mb-8 text-center">
                            <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">ONLINE</p>
                            <h2 className="font-bold text-[28px] md:text-[40px] leading-tight">PRAKTICKÝ SPRIEVODCA</h2>
                            <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed mt-4 max-w-3xl mx-auto">
                                Súčasťou programu je jednoduchá webová platforma obsahujúca praktické návody na riešenie najčastejších situácií, s ktorými sa mladí ľudia stretávajú po odchode zo systému starostlivosti. Sprievodca je dostupný z akéhokoľvek zariadenia, bez registrácie a môže byť používaný samostatne.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako porozumieť úradnému dokumentu</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Ako vložiť text do AI a položiť otázky, ktoré pomôžu pochopiť jeho význam. Na čo si dať pozor a čo si vždy overiť.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako napísať správu alebo žiadosť</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Ako pripraviť správu alebo žiadosť pomocou AI. Čo je potrebné pred odoslaním skontrolovať.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako rozpoznať podvod alebo manipulatívnu ponuku</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Jednoduchý kontrolný zoznam a reálne príklady podvodov. Čo robiť, keď sa ponuka alebo správa zdá podozrivá.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako pripraviť životopis</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Postup, ako vytvoriť životopis s pomocou AI a čo je dôležité upraviť vlastnými slovami.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako sa pripraviť na pracovný pohovor</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">AI môže pomôcť pripraviť sa na pracovný pohovor alebo dôležitý rozhovor. Mladí ľudia si môžu vyskúšať modelové situácie a pripraviť si odpovede.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="font-bold text-[14px] md:text-[16px] mb-2">Ako čítať pracovné ponuky</p>
                                <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Ako čítať pracovné ponuky a lepšie porozumieť tomu, čo zamestnávateľ skutočne hľadá.</p>
                            </div>
                        </div>
                        <p className="text-[13px] md:text-[15px] text-black/70 leading-relaxed mt-6 text-center font-medium">
                            Cieľom je, aby mali mladí ľudia k dispozícii jednoduchý a praktický nástroj, ku ktorému sa môžu vrátiť vždy, keď riešia konkrétnu situáciu.
                        </p>
                    </div>
                </div>

                {/* Page 8: Program Content intro + first categories */}
                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="mb-6 md:mb-8">
                            <h2 className="font-bold text-[28px] md:text-[40px] leading-tight mb-4">OBSAH PROGRAMU</h2>
                            <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed mb-2">
                                Program je postavený na oblastiach, ktoré reflektujú konkrétne situácie, s ktorými sa mladí ľudia stretávajú pri prechode do samostatného života po odchode z centier pre deti a rodiny.
                            </p>
                            <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed mb-2">
                                Jednotlivé témy sa v praxi prepájajú a môžu byť realizované flexibilne, podľa potrieb konkrétneho zariadenia a skupiny účastníkov.
                            </p>
                            <p className="text-[14px] md:text-[15px] text-black/70 leading-relaxed">
                                Cieľom programu je poskytnúť mladým ľuďom praktické nástroje, ktoré im pomôžu orientovať sa v informáciách, robiť informované rozhodnutia a zvládať situácie, ktoré by inak riešili s pomocou blízkeho okolia.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">IDENTITA</p>
                                <p className="font-bold text-[16px] md:text-[18px] mb-2">Kto som v digitálnom svete</p>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">Podpora uvedomenia si vlastných silných stránok a spôsobov, ako mladí ľudia premýšľajú o sebe a o svojich možnostiach.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">AI GRAMOTNOSŤ</p>
                                <p className="font-bold text-[16px] md:text-[18px] mb-2">Čo AI dokáže a čo nie</p>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">Základná orientácia v AI nástrojoch, ich možnostiach a limitoch. Rozvoj schopnosti kriticky posudzovať informácie a pracovať s odpoveďami.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">PRAKTICKÉ SITUÁCIE</p>
                                <p className="font-bold text-[16px] md:text-[18px] mb-2">Porozumenie dokumentu</p>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">Práca so skutočnými dokumentmi (napr. nájomná zmluva, úradné listy) a ich pochopenie v kontexte reálnych rozhodnutí.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">KOMUNIKÁCIA</p>
                                <p className="font-bold text-[16px] md:text-[18px] mb-2">Ako komunikovať s úradmi</p>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">Príprava správ a žiadostí tak, aby boli zrozumiteľné, vecné a použiteľné v reálnych situáciách.</p>
                            </div>
                            <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors md:col-span-2">
                                <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">BEZPEČNOSŤ</p>
                                <p className="font-bold text-[16px] md:text-[18px] mb-2">Ako rozpoznať podvod</p>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">Základná orientácia v rizikách digitálneho prostredia, práca s príkladmi podvodov a manipulatívnych ponúk.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 9: Program Content continued + Expected outcomes */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3 md:space-y-4">
                                <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">ZAMESTNATEĽNOSŤ</p>
                                    <p className="font-bold text-[15px] md:text-[16px] mb-1">Ako čítať pracovnú ponuku</p>
                                    <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Porozumenie pracovným inzerátom a schopnosť identifikovať očakávania zamestnávateľa.</p>
                                </div>
                                <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">SEBAPREZENTÁCIA</p>
                                    <p className="font-bold text-[15px] md:text-[16px] mb-1">Príprava životopisu</p>
                                    <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Vytvorenie vlastného životopisu a pochopenie, ako ho upraviť tak, aby zodpovedal reálnym požiadavkám.</p>
                                </div>
                                <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                    <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">DÔLEŽITÉ ROZHODNUTIA</p>
                                    <p className="font-bold text-[15px] md:text-[16px] mb-1">Ako zvládnuť dôležité momenty</p>
                                    <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Mladí ľudia sa pripravujú na situácie, ktoré ich čakajú po odchode zo systému starostlivosti, napríklad pracovný pohovor alebo riešenie bývania. Učia sa, ako sa na takúto situáciu pripraviť, aké kroky urobiť a na čo si dať pozor.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                        <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">PRÁVA</p>
                                        <p className="font-bold text-[15px] md:text-[16px] mb-1">Moje dáta a moje práva</p>
                                        <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed">Základná orientácia v ochrane osobných údajov a bezpečnom správaní v digitálnom prostredí.</p>
                                    </div>
                                    <div className="p-4 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                        <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">ZHRNUTIE</p>
                                        <p className="text-[12px] md:text-[13px] text-black/70 leading-relaxed mt-1">Ujasnenie si, v akých situáciách môžu mladí ľudia tieto nástroje využívať a kde je potrebné zachovať vlastné rozhodovanie a zodpovednosť.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 border-l-2 border-l-[#0047BB] flex flex-col justify-center">
                                <h3 className="font-bold text-[20px] md:text-[24px] mb-4 text-[#0047BB]">OČAKÁVANÝ PRÍNOS</h3>
                                <p className="text-[14px] md:text-[16px] text-black/80 mb-4 font-medium">Po absolvovaní programu účastník/účastníčka:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">vie porozumieť základným dokumentom (zmluva, list, formulár)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">vie samostatne napísať jednoduchú oficiálnu komunikáciu</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">vie sa zorientovať v pracovnej ponuke</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">má pripravený životopis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">vie rozpoznať základné riziká (podvody, manipulácia)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">má základnú predstavu, ako postupovať v kľúčových životných momentoch</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 10: About Research Lab */}
                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-4xl w-full px-4 text-center">
                        <p className="text-[10px] md:text-[11px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">REALIZÁTOR PROGRAMU</p>
                        <h2 className="font-bold text-[32px] md:text-[48px] mb-8">RESEARCH LAB</h2>
                        <div className="space-y-6 text-left">
                            <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                Research Lab je občianske združenie pôsobiace ako vzdelávacia a výskumná inštitúcia zameraná na využívanie umelej inteligencie v kontexte vzdelávania a každodenného rozhodovania.
                            </p>
                            <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                Research Lab vznikol na základe dlhodobej odbornej praxe v oblasti digitálnych technológií a AI, ktorá sa formovala v rámci kreatívneho štúdia SORRYWECAN, a na ktorú nadväzuje systematickým rozvojom vzdelávacích programov a metodík.
                            </p>
                            <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                Od začiatku je budovaný ako interdisciplinárne prostredie, v ktorom sa prepája technologická expertíza s odborným zázemím vo vzdelávaní dospelých, výskume a práci s rôznorodými cieľovými skupinami. Vzdelávacie programy vychádzajú z tohto prepojenia a sú navrhované v spolupráci s odbornými garantmi a lektormi s relevantnou skúsenosťou. Dôraz sa pritom kladie na ich zrozumiteľnosť, praktickú použiteľnosť a metodické ukotvenie.
                            </p>
                            <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
                                Zameriavame sa na rozvoj schopnosti využívať AI ako nástroj pri práci s informáciami, rozhodovaní a riešení situácií s priamym dopadom na každodenný život. Súčasťou prístupu je vytváranie metodicky vedeného a inkluzívneho vzdelávacieho prostredia, ktoré podporuje postupné nadobúdanie istoty a schopnosť samostatne pracovať s informáciami.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Page 11: Research Lab Approach */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <h2 className="font-bold text-[28px] md:text-[40px] text-center mb-8 md:mb-12">PRÍSTUP RESEARCH LAB</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="p-5 md:p-6 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[24px] md:text-[32px] font-bold text-[#0047BB] mb-2">1.</p>
                                <h3 className="font-bold text-[16px] md:text-[18px] mb-3">Identita na prvom mieste, nie len zručnosti</h3>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">
                                    Zameriavame sa najprv na to, ako mladí ľudia premýšľajú o sebe a o svojich možnostiach. Podporujeme kritické myslenie a pocit, že majú vplyv na svoj vlastný život. Digitálne nástroje v tomto kontexte používame ako nástroj, ktorý podporuje orientáciu, rozhodovanie a postupné budovanie vlastnej cesty.
                                </p>
                            </div>
                            <div className="p-5 md:p-6 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[24px] md:text-[32px] font-bold text-[#0047BB] mb-2">2.</p>
                                <h3 className="font-bold text-[16px] md:text-[18px] mb-3">Metodicky vedené a bezpečné prostredie</h3>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">
                                    Mladí ľudia s touto životnou skúsenosťou potrebujú stabilné a predvídateľné prostredie, aby mohli pracovať s novými informáciami. Program je preto navrhnutý ako metodicky vedený a rešpektujúci rámec, ktorý zohľadňuje individuálne tempo a skúsenosť účastníkov. Pri jeho návrhu vychádzame aj zo skúseností s tvorbou prostredí, ktoré reflektujú psychickú záťaž a podporujú reálne učenie.
                                </p>
                            </div>
                            <div className="p-5 md:p-6 border border-black/[0.06] border-t-2 border-t-[#0047BB] hover:border-black/[0.12] transition-colors">
                                <p className="text-[24px] md:text-[32px] font-bold text-[#0047BB] mb-2">3.</p>
                                <h3 className="font-bold text-[16px] md:text-[18px] mb-3">Prepojenie rôznych perspektív v učení</h3>
                                <p className="text-[13px] md:text-[14px] text-black/70 leading-relaxed">
                                    Program prepája rôzne pohľady na riešenie situácií od praktického fungovania v každodennom živote až po prácu s informáciami a rozhodovaním. Účastníci sa učia pozerať na problémy z viacerých strán a hľadať riešenia, ktoré sú pre nich reálne použiteľné.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 12: Safe Framework + Team */}
                <div className={`${pageClass} bg-[#ebe4dc]`}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h2 className="font-bold text-[24px] md:text-[32px] mb-6">BEZPEČNÝ RÁMEC PROGRAMU</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 p-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] font-medium">práca v malých skupinách</span>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] font-medium">dobrovoľná participácia</span>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] font-medium">bez zberu citlivých osobných údajov</span>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] font-medium">dôraz na rešpekt a individuálne tempo</span>
                                    </li>
                                    <li className="flex items-center gap-4 p-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] font-medium">facilitátori so skúsenosťou s mladými ľuďmi v náročných situáciách</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-[24px] md:text-[32px] mb-6">TÍM A ODBORNÉ ZÁZEMIE</h2>
                                <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed mb-6">
                                    Program realizuje Research Lab v spolupráci s odborníkmi z praxe, ktorí sa podieľajú na jeho návrhu aj realizácii:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">lektori a facilitátori so skúsenosťou s prácou s mladými ľuďmi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">odborníci na digitálne nástroje a ich praktické využitie</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[14px] md:text-[16px] text-black/70">psychológovia a odborníci na bezpečné vzdelávacie prostredie</span>
                                    </li>
                                </ul>
                                <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed italic border-l-2 border-[#0047BB] pl-4">
                                    Program vychádza zo skúseností z oblasti vzdelávania, technológií a kreatívnych odvetví.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 13: Implementation + Sources */}
                <div className={pageClass}>
                    <div className="max-w-5xl w-full px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="p-6 md:p-8 border border-black/[0.08] hover:border-black/[0.12] transition-colors">
                                <h2 className="font-bold text-[24px] md:text-[32px] mb-6">IMPLEMENTÁCIA V PRAXI</h2>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] text-black/80">program je možné realizovať priamo v zariadení</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] text-black/80">nevyžaduje špeciálne technické vybavenie</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#0047BB] mt-2 shrink-0"></div>
                                        <span className="text-[15px] md:text-[16px] text-black/80">prispôsobuje sa kapacitám a podmienkam konkrétneho centra</span>
                                    </li>
                                </ul>
                                <div className="p-4 bg-[#0047BB] text-white">
                                    <p className="text-[15px] md:text-[16px] font-medium leading-relaxed">
                                        Cieľom programu nie je naučiť mladých ľudí technológiu. Cieľom je pomôcť im zvládnuť situácie, ktoré ich čakajú.
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 border border-black/[0.06] hover:border-black/[0.12] transition-colors flex flex-col justify-center">
                                <h2 className="font-bold text-[20px] md:text-[24px] mb-6 text-black/50">ZDROJE A INŠPIRÁCIE</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">SOS YouthCan!</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40">41 krajín</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">IRC REACH</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40">USA</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">First Star Academy</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40"></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">Paper Airplanes</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40">globálny program</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">Way to Life</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40">Slovensko</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2">
                                        <span className="font-medium text-[15px] md:text-[16px]">UNICEF–Akelius</span>
                                        <span className="text-[12px] md:text-[13px] font-code-brand text-black/40"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-4 md:bottom-8 text-[8px] md:text-[10px] font-code-brand uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/20">RESEARCH LAB {"//"} 2026</p>
                </div>

            </div>
        </>
    )
}
