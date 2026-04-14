"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.55 },
})

export default function Q2OverviewPage() {
    const [lang, setLang] = useState<"en" | "sk">("en")
    const en = lang === "en"

    return (
        <div className="font-sans-brand">
            <TopNav />

            {/* Lang toggle */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setLang(l => l === "en" ? "sk" : "en")}
                    className="text-[10px] font-code-brand font-bold uppercase tracking-widest px-4 py-2 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-black transition-colors"
                >
                    {en ? "SK" : "EN"}
                </button>
            </div>

            {/* ── 01 HERO / blue ── */}
            <section className="relative min-h-screen bg-[#0047BB] text-white overflow-hidden flex flex-col">
                <span className="absolute right-0 bottom-0 font-syne font-bold text-[28vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    Q2
                </span>

                <div className="flex items-center justify-between px-8 md:px-16 pt-28 md:pt-32">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Research Lab</span>
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">Q2 2026</span>
                </div>
                <div className="mx-8 md:mx-16 mt-4 h-px bg-white/10" />

                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.5em] text-white/40 mb-6">
                            {en ? "April → June · Internal Strategy" : "Apríl → Jún · Interná stratégia"}
                        </p>
                        <h1 className="font-syne font-bold text-[20vw] md:text-[16vw] leading-[0.82] tracking-tighter text-white">
                            {en ? <>The<br />Plan.</> : <>Plán.</>}
                        </h1>
                    </motion.div>
                    <motion.div {...fadeUp(0.1)} className="mt-10 md:mt-14 max-w-2xl">
                        <p className="text-[18px] md:text-[22px] text-white/50 leading-relaxed">
                            {en
                                ? "Three people. One quarter. Revenue, community, content — all three moving at once. This is the map."
                                : "Traja ľudia. Jeden kvartál. Príjmy, komunita, obsah — všetko naraz. Toto je mapa."}
                        </p>
                    </motion.div>
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">01</span>
                </div>
            </section>

            {/* ── 02 THE QUARTER / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-syne font-bold text-[24vw] text-black/[0.035] leading-none select-none pointer-events-none">
                    JULY
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">01</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">
                            {en ? "The Quarter" : "Kvartál"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20 max-w-5xl">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16">
                            {en
                                ? <>What July 1st<br />looks like<br /><span className="text-black/25">if Q2 worked.</span></>
                                : <>Ako vyzerá<br />1. júl<br /><span className="text-black/25">ak Q2 vyšiel.</span></>}
                        </h2>
                    </motion.div>

                    {(en ? [
                        { n: "01", title: "Three workshops delivered.", sub: "O2 contract signed. Two more closed or contracted. €25k+ invoiced." },
                        { n: "02", title: "Circle is live.", sub: "15–25 founding members inside. Some paying, some core. All active. We know what they watch and what they skip." },
                        { n: "03", title: "1,500 Instagram followers.", sub: "Content rhythm is real — 4×/week. Newsletter weekly. The funnel works." },
                        { n: "04", title: "We understand the machine.", sub: "Who comes in from social, who converts to member, who books a workshop. Q3 starts with clarity, not guesses." },
                    ] : [
                        { n: "01", title: "Tri workshopy odovzdané.", sub: "O2 kontrakt podpísaný. Ďalšie dve uzatvorené alebo v zmluve. €25k+ vyfakturovaných." },
                        { n: "02", title: "Circle je živý.", sub: "15–25 zakladajúcich členov vnútri. Niektorí platia, niektorí sú core. Všetci aktívni. Vieme čo sledujú a čo preskakujú." },
                        { n: "03", title: "1 500 sledovateľov na Instagrame.", sub: "Obsah vychádza rytmicky — 4×/týždeň. Newsletter každý týždeň. Funnel funguje." },
                        { n: "04", title: "Rozumieme stroju.", sub: "Kto prichádza zo sociálnych sietí, kto konvertuje na člena, kto rezervuje workshop. Q3 začína s jasnosťou." },
                    ]).map((item, i, arr) => (
                        <motion.div key={item.n} {...fadeUp(i * 0.05)}>
                            <div className="flex gap-8 py-8 md:py-10">
                                <span className="text-[10px] font-code-brand text-[#0047BB] uppercase tracking-[0.3em] w-8 shrink-0 mt-1">{item.n}</span>
                                <div>
                                    <p className="font-syne font-bold text-[20px] md:text-[26px] tracking-tight">{item.title}</p>
                                    <p className="text-[15px] text-black/50 mt-2 leading-relaxed">{item.sub}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">02</span>
                </div>
            </section>

            {/* ── 03 THE TEAM / dark ── */}
            <section className="relative bg-[#0d0d0d] text-[#e8e1da] overflow-hidden">
                <span className="absolute left-[-2vw] top-1/2 -translate-y-1/2 font-syne font-bold text-[24vw] text-white/[0.025] leading-none select-none pointer-events-none">
                    WHO
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">02</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            {en ? "The Team" : "Tím"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-white/[0.07]" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16 text-white">
                            {en
                                ? <>Three people.<br /><span className="text-white/25">Two advisors.</span></>
                                : <>Traja ľudia.<br /><span className="text-white/25">Dvaja poradcovia.</span></>}
                        </h2>
                    </motion.div>

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/25 mb-8">
                        {en ? "Core" : "Jadro"}
                    </p>

                    {(en ? [
                        {
                            name: "Tiep Le Dinh",
                            handle: "Prince of Wellness",
                            role: "Vision & Output",
                            owns: ["Ideas and direction", "Face of Research Lab", "The thinking behind everything", "Content — writing, speaking, presence"],
                        },
                        {
                            name: "Andrea",
                            handle: null,
                            role: "Production & Structure",
                            owns: ["Execution and follow-through", "Meetings, logistics, holding structure", "Community — day-to-day", "Setting and managing deals"],
                        },
                        {
                            name: "Sasha",
                            handle: null,
                            role: "Content & Research",
                            owns: ["Content creation and marketing", "Research — trends, tools, landscape", "Distribution"],
                        },
                    ] : [
                        {
                            name: "Tiep Le Dinh",
                            handle: "Prince of Wellness",
                            role: "Vízia & Output",
                            owns: ["Nápady a smer", "Tvár Research Lab", "Myslenie za všetkým", "Obsah — písanie, hovorenie, prítomnosť"],
                        },
                        {
                            name: "Andrea",
                            handle: null,
                            role: "Produkcia & Štruktúra",
                            owns: ["Exekúcia a dotiahnutie", "Porady, logistika, držanie štruktúry", "Komunita — každodenná práca", "Nastavovanie a riadenie dealov"],
                        },
                        {
                            name: "Sasha",
                            handle: null,
                            role: "Obsah & Výskum",
                            owns: ["Tvorba obsahu a marketing", "Výskum — trendy, nástroje, krajina", "Distribúcia"],
                        },
                    ]).map((person, i, arr) => (
                        <motion.div key={person.name} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-8 md:py-10">
                                <div className="md:w-[220px] shrink-0">
                                    <p className="font-syne font-bold text-[22px] md:text-[26px] text-white tracking-tight">{person.name}</p>
                                    {person.handle && (
                                        <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#4d7fd4] mt-1">{person.handle}</p>
                                    )}
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30 mt-2">{person.role}</p>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    {person.owns.map((o, j) => (
                                        <p key={j} className="text-[14px] text-white/40 flex gap-2">
                                            <span className="text-[#4d7fd4] shrink-0">—</span>{o}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/25 mt-14 mb-8">
                        {en ? "Extended" : "Rozšírený tím"}
                    </p>

                    {(en ? [
                        { name: "Roland", role: "Taste & Network", desc: "External taste curation. Network from SORRYWECAN. Brought in where creative direction matters." },
                        { name: "Roman Pii Wagner", role: "Advisor & Partner", desc: "Works across corporate workshops and THE MINDSHIFT. Advisor, delivery partner, facilitator." },
                    ] : [
                        { name: "Roland", role: "Vkus & Sieť", desc: "Externá kurácia vkusu. Sieť zo SORRYWECAN. Zapojený tam, kde záleží na kreatívnom smerovaní." },
                        { name: "Roman Pii Wagner", role: "Poradca & Partner", desc: "Pracuje naprieč firemnými workshopmi a THE MINDSHIFT. Poradca, delivery partner, facilitátor." },
                    ]).map((person, i, arr) => (
                        <motion.div key={person.name} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16 py-7">
                                <div className="md:w-[220px] shrink-0">
                                    <p className="font-syne font-bold text-[20px] text-white tracking-tight">{person.name}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30 mt-1">{person.role}</p>
                                </div>
                                <p className="flex-1 text-[14px] text-white/40 leading-relaxed">{person.desc}</p>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}

                    <p className="text-[12px] text-white/20 italic mt-10">
                        {en ? "Guest speakers outsourced per engagement." : "Hostia outsourcovaní podľa potreby."}
                    </p>
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/[0.07]" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">03</span>
                </div>
            </section>

            {/* ── 04 PRIORITIES / blue ── */}
            <section className="relative bg-[#0047BB] text-white overflow-hidden">
                <span className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-syne font-bold text-[22vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    FOCUS
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">03</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Priorities" : "Priority"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-white/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16">
                            {en
                                ? <>Three things.<br /><span className="text-white/25">Ranked.</span></>
                                : <>Tri veci.<br /><span className="text-white/25">Zoradené.</span></>}
                        </h2>
                    </motion.div>

                    {(en ? [
                        {
                            rank: "01",
                            title: "Close and deliver corporate workshops.",
                            why: "Fastest path to €25k+. The prospect list exists. O2 is warm. Two more needed.",
                            done: "Three workshops delivered, invoiced, paid. Testimonials captured.",
                            owner: "Tiep + Andrea",
                        },
                        {
                            rank: "02",
                            title: "Build Circle and launch to founding cohort.",
                            why: "The scalable answer to a workshop that can't scale. Validates the membership model before September.",
                            done: "15–25 founding members inside by end of June. Content library 4+ weeks. Bi-weekly webinar running.",
                            owner: "Tiep + Roman",
                        },
                        {
                            rank: "03",
                            title: "Grow Instagram 800 → 1,500+ and build the content habit.",
                            why: "Every follower is a potential member or workshop attendee. The free funnel feeds everything.",
                            done: "1,500 followers. Content 4×/week. Newsletter weekly. Podcast episode live.",
                            owner: "Sasha (lead) + Tiep",
                        },
                    ] : [
                        {
                            rank: "01",
                            title: "Uzavrieť a odovzdať firemné workshopy.",
                            why: "Najrýchlejšia cesta k €25k+. Zoznam prospektov existuje. O2 je zahriaty. Ďalšie dve sú potrebné.",
                            done: "Tri workshopy odovzdané, vyfakturované, zaplatené. Referencie zachytené.",
                            owner: "Tiep + Andrea",
                        },
                        {
                            rank: "02",
                            title: "Vybudovať Circle a spustiť so zakladajúcou kohortou.",
                            why: "Škálovateľná odpoveď na workshop, ktorý sa škálovať nedá. Validuje členský model pred septembrom.",
                            done: "15–25 zakladajúcich členov do konca júna. Knižnica obsahu na 4+ týždne. Bi-týždenný webinár beží.",
                            owner: "Tiep + Roman",
                        },
                        {
                            rank: "03",
                            title: "Rast Instagramu 800 → 1 500+ a budovanie obsahovej rutiny.",
                            why: "Každý sledovateľ je potenciálny člen alebo účastník workshopu. Bezplatný funnel živí všetko.",
                            done: "1 500 sledovateľov. Obsah 4×/týždeň. Newsletter týždenný. Podcastová epizóda živá.",
                            owner: "Sasha (lead) + Tiep",
                        },
                    ]).map((p, i, arr) => (
                        <motion.div key={p.rank} {...fadeUp(i * 0.05)}>
                            <div className="flex gap-6 md:gap-10 py-10 md:py-12">
                                <span className="font-syne font-bold text-[48px] md:text-[64px] text-white/10 leading-none shrink-0 w-16 md:w-20">{p.rank}</span>
                                <div className="flex-1">
                                    <p className="font-syne font-bold text-[20px] md:text-[26px] tracking-tight text-white">{p.title}</p>
                                    <p className="text-[14px] text-white/45 mt-3 leading-relaxed max-w-2xl">{p.why}</p>
                                    <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-10">
                                        <div>
                                            <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30 mb-1">{en ? "Done looks like" : "Hotové vyzerá tak"}</p>
                                            <p className="text-[13px] text-white/50 max-w-sm">{p.done}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30 mb-1">{en ? "Owner" : "Zodpovedný"}</p>
                                            <p className="text-[13px] text-white/50">{p.owner}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/10" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">04</span>
                </div>
            </section>

            {/* ── 05 REVENUE / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute right-[-1vw] bottom-[-4vw] font-syne font-bold text-[30vw] text-black/[0.03] leading-none select-none pointer-events-none">
                    €
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">04</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">
                            {en ? "Revenue" : "Príjmy"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[56px] md:text-[80px] tracking-tighter leading-[0.9] mb-4">
                            €30k+
                        </h2>
                        <p className="text-[15px] text-black/40 mb-16 max-w-lg">
                            {en
                                ? "Corporate is the engine. Membership is the experiment. Grants are the bonus."
                                : "Corporate je motor. Členstvo je experiment. Granty sú bonus."}
                        </p>
                    </motion.div>

                    {(en ? [
                        { source: "Corporate Workshops", target: "€25,200", calc: "3 × €8,400 avg", note: "High confidence — O2 pre-warmed, pipeline active." },
                        { source: "Community Memberships", target: "€2,340", calc: "20 members × €39 × 3 months avg", note: "Medium — validation phase. Price may shift." },
                        { source: "Grants / Other", target: "€3,000+", calc: "EU training subsidies, institutional", note: "Low confidence — research ongoing." },
                    ] : [
                        { source: "Firemné Workshopy", target: "€25 200", calc: "3 × €8 400 priemer", note: "Vysoká istota — O2 zahriaty, pipeline aktívny." },
                        { source: "Členstvo v Komunite", target: "€2 340", calc: "20 členov × €39 × 3 mesiace priemer", note: "Stredná — validačná fáza. Cena sa môže zmeniť." },
                        { source: "Granty / Iné", target: "€3 000+", calc: "EU tréningové dotácie, inštitucionálne", note: "Nízka istota — výskum prebieha." },
                    ]).map((r, i, arr) => (
                        <motion.div key={r.source} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 py-8">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.35em] text-black/40">{r.source}</p>
                                    <p className="text-[9px] font-code-brand text-black/30 mt-1">{r.calc}</p>
                                </div>
                                <p className="font-syne font-bold text-[40px] md:text-[52px] text-[#0047BB] leading-none">{r.target}</p>
                                <p className="flex-1 text-[13px] text-black/40 leading-relaxed">{r.note}</p>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-black/30 mt-16 mb-8">
                        {en ? "Monthly Checkpoints" : "Mesačné Kontrolné Body"}
                    </p>

                    {(en ? [
                        {
                            month: "End of April",
                            targets: ["O2 contract signed or clear timeline", "Content publishing 4×/week", "Circle account created, architecture planned", "Prospect outreach: 20+ active conversations"],
                        },
                        {
                            month: "End of May",
                            targets: ["First corporate workshop delivered", "Circle content backlog: 4+ weeks ready", "Instagram: 1,100+ followers", "Founding cohort: 15–20 people invited"],
                        },
                        {
                            month: "End of June",
                            targets: ["3 corporate workshops delivered or contracted", "Circle live with founding cohort, first paying members", "Instagram: 1,500+", "€25k+ invoiced"],
                        },
                    ] : [
                        {
                            month: "Koniec apríla",
                            targets: ["O2 kontrakt podpísaný alebo jasný harmonogram", "Obsah vychádza 4×/týždeň", "Circle účet vytvorený, architektúra naplánovaná", "Oslovovanie prospektov: 20+ aktívnych konverzácií"],
                        },
                        {
                            month: "Koniec mája",
                            targets: ["Prvý firemný workshop odovzdaný", "Zásoby obsahu pre Circle: 4+ týždne pripravené", "Instagram: 1 100+ sledovateľov", "Zakladajúca kohorta: 15–20 ľudí pozvaných"],
                        },
                        {
                            month: "Koniec júna",
                            targets: ["3 firemné workshopy odovzdané alebo v zmluve", "Circle živý so zakladajúcou kohortou, prví platení členovia", "Instagram: 1 500+", "€25k+ vyfakturovaných"],
                        },
                    ]).map((c, i, arr) => (
                        <motion.div key={c.month} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-syne font-bold text-[18px] tracking-tight">{c.month}</p>
                                </div>
                                <ul className="flex-1 space-y-2">
                                    {c.targets.map((t, j) => (
                                        <li key={j} className="flex gap-3 text-[14px] text-black/55">
                                            <span className="text-[#0047BB] shrink-0">—</span>{t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">05</span>
                </div>
            </section>

            {/* ── 06 AUDIENCE & CONTENT / dark ── */}
            <section className="relative bg-[#0d0d0d] text-[#e8e1da] overflow-hidden">
                <span className="absolute right-0 top-0 font-syne font-bold text-[22vw] text-white/[0.025] leading-none select-none pointer-events-none">
                    REACH
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">05</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            {en ? "Audience & Content" : "Publikum & Obsah"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-white/[0.07]" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-4 text-white">
                            {en ? <>The<br />flywheel.</> : <>Koleso.</>}
                        </h2>
                        <p className="text-[15px] text-white/35 mb-16 max-w-xl">
                            {en
                                ? "Free content drives awareness and trust. Paid content rewards depth. Each format feeds the next."
                                : "Bezplatný obsah buduje povedomie a dôveru. Platený obsah odmeňuje hĺbku. Každý formát živí ďalší."}
                        </p>
                    </motion.div>

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/25 mb-8">
                        {en ? "Growth Targets" : "Ciele Rastu"}
                    </p>

                    {(en ? [
                        { platform: "Instagram", current: "~800", target: "1,500+", tactic: "4×/week: carousels, reels, opinion. Owned by Sasha." },
                        { platform: "Newsletter", current: "Small list", target: "500+ subscribers", tactic: "Weekly THE SIGNAL — distilled AI news + Research Lab thinking." },
                        { platform: "Circle", current: "0", target: "15–25 founding members", tactic: "Personal invitations. Workshop alumni first. Founding price €39/mo." },
                    ] : [
                        { platform: "Instagram", current: "~800", target: "1 500+", tactic: "4×/týždeň: karusely, reels, názory. Zodpovedá Sasha." },
                        { platform: "Newsletter", current: "Malý zoznam", target: "500+ odberateľov", tactic: "Týždenný THE SIGNAL — destilované AI správy + pohľad Research Lab." },
                        { platform: "Circle", current: "0", target: "15–25 zakladajúcich členov", tactic: "Osobné pozvánky. Absolventi workshopov ako prví. Zakladateľská cena €39/mes." },
                    ]).map((a, i, arr) => (
                        <motion.div key={a.platform} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 py-8">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-syne font-bold text-[22px] text-white tracking-tight">{a.platform}</p>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <p className="text-[13px] text-white/25">{a.current}</p>
                                        <p className="text-[#4d7fd4]">→</p>
                                        <p className="text-[18px] font-bold text-[#4d7fd4]">{a.target}</p>
                                    </div>
                                </div>
                                <p className="flex-1 text-[14px] text-white/40 leading-relaxed">{a.tactic}</p>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/25 mt-14 mb-8">
                        {en ? "Content Cadence" : "Obsahový Rytmus"}
                    </p>

                    {(en ? [
                        { cadence: "Daily", format: "Social", type: "Free", detail: "Instagram — 4 pillars rotating. Carousels, video, opinion.", owner: "Sasha + Tiep" },
                        { cadence: "Weekly", format: "THE SIGNAL", type: "Free", detail: "Newsletter + short audio. Curated AI news + Research Lab take.", owner: "Tiep (write)" },
                        { cadence: "Bi-weekly", format: "Live Webinar", type: "Free → Paid", detail: "Live to public. Archived in Circle. 45–60 min, one topic deep.", owner: "Tiep / Roman" },
                        { cadence: "Monthly", format: "Case Study", type: "Paid", detail: "One real AI application deconstructed. Lives in Circle, teased on social.", owner: "Rotating" },
                    ] : [
                        { cadence: "Denne", format: "Sociálne siete", type: "Zadarmo", detail: "Instagram — 4 piliere striedavo. Karusely, video, názory.", owner: "Sasha + Tiep" },
                        { cadence: "Týždenne", format: "THE SIGNAL", type: "Zadarmo", detail: "Newsletter + krátke audio. Destilované AI správy + pohľad Research Lab.", owner: "Tiep (píše)" },
                        { cadence: "Bi-týždenne", format: "Živý Webinár", type: "Zadarmo → Platené", detail: "Naživo pre verejnosť. Archivované v Circle. 45–60 min, jedna téma do hĺbky.", owner: "Tiep / Roman" },
                        { cadence: "Mesačne", format: "Prípadová Štúdia", type: "Platené", detail: "Jedna reálna AI aplikácia dekontruovaná. Žije v Circle, upútavka na sieťach.", owner: "Rotujúci" },
                    ]).map((f, i, arr) => (
                        <motion.div key={f.format} {...fadeUp(i * 0.05)}>
                            <div className="flex gap-6 md:gap-12 py-7">
                                <div className="w-[110px] md:w-[150px] shrink-0">
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#4d7fd4]">{f.cadence}</p>
                                    <p className="font-bold text-white text-[15px] mt-1">{f.format}</p>
                                    <span className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-white/25 border border-white/10 px-1.5 py-0.5 inline-block mt-2">{f.type}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[14px] text-white/45 leading-relaxed">{f.detail}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-white/20 mt-2">{en ? "Owner:" : "Zodpovedný:"} {f.owner}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/[0.07]" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">06</span>
                </div>
            </section>

            {/* ── 07 PLATFORM / blue grid ── */}
            <section
                className="relative bg-[#0047BB] text-white overflow-hidden"
                style={{
                    backgroundImage: [
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
                        "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    ].join(", "),
                    backgroundSize: "40px 40px",
                }}
            >
                <span className="absolute left-[-2vw] bottom-[-4vw] font-syne font-bold text-[20vw] text-white/[0.04] leading-none select-none pointer-events-none">
                    CIRCLE
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">06</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/40">
                            {en ? "Platform" : "Platforma"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-white/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16">
                            {en
                                ? <>Circle.<br /><span className="text-white/25">Four phases.</span></>
                                : <>Circle.<br /><span className="text-white/25">Štyri fázy.</span></>}
                        </h2>
                    </motion.div>

                    {(en ? [
                        {
                            phase: "Build",
                            timeline: "April — mid May",
                            now: false,
                            items: ["Circle configured — spaces, channels, branding", "Pre-record 4–6 weeks of content backlog", "Prompt library: first 20 prompts", "Founding member list: 20 people identified and personally invited"],
                        },
                        {
                            phase: "Soft Launch",
                            timeline: "June 2026",
                            now: true,
                            items: ["15–25 founding members inside", "Mix: paying (€39/mo) + core contributors (free for contribution)", "First bi-weekly webinar recorded and posted", "Gather feedback — watch what gets skipped"],
                        },
                        {
                            phase: "Iterate",
                            timeline: "July — August",
                            now: false,
                            items: ["Fix what doesn't work from founding cohort feedback", "Build out high-engagement content areas", "Prepare September launch — landing page, social campaign", "Target: 50 members before September"],
                        },
                        {
                            phase: "Full Blast",
                            timeline: "September 2026",
                            now: false,
                            items: ["Public launch — full social campaign", "Back-to-school season — perfect timing", "Target: 100+ members by end of September", "Pricing review"],
                        },
                    ] : [
                        {
                            phase: "Budovanie",
                            timeline: "Apríl — pol mája",
                            now: false,
                            items: ["Circle nakonfigurovaný — priestory, kanály, branding", "Nahrať vopred 4–6 týždňov obsahu", "Knižnica promptov: prvých 20 promptov", "Zoznam zakladajúcich členov: 20 ľudí identifikovaných a osobne pozvaných"],
                        },
                        {
                            phase: "Soft Launch",
                            timeline: "Jún 2026",
                            now: true,
                            items: ["15–25 zakladajúcich členov vnútri", "Mix: platení (€39/mes) + core prispievatelia (zadarmo za príspevok)", "Prvý bi-týždenný webinár nahraný a zverejnený", "Zbieranie spätnej väzby"],
                        },
                        {
                            phase: "Iterácia",
                            timeline: "Júl — August",
                            now: false,
                            items: ["Opraviť čo nefunguje podľa spätnej väzby", "Rozbudovať oblasti s vysokým zapojením", "Pripraviť septembrový launch — landing page, kampaň", "Cieľ: 50 členov pred septembrom"],
                        },
                        {
                            phase: "Plný Gas",
                            timeline: "September 2026",
                            now: false,
                            items: ["Verejný launch — plná sociálna kampaň", "Sezóna učenia — perfektné načasovanie", "Cieľ: 100+ členov do konca septembra", "Revízia cien"],
                        },
                    ]).map((ph, i, arr) => (
                        <motion.div key={ph.phase} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-10">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-syne font-bold text-[20px] text-white tracking-tight">{ph.phase}</p>
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/40 mt-1">{ph.timeline}</p>
                                    {ph.now && (
                                        <span className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-white border border-white/30 px-2 py-0.5 inline-block mt-2">
                                            {en ? "Target" : "Cieľ"}
                                        </span>
                                    )}
                                </div>
                                <ul className="flex-1 space-y-2">
                                    {ph.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-[14px] text-white/50">
                                            <span className="text-white/25 shrink-0">—</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/10" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/20">07</span>
                </div>
            </section>

            {/* ── 08 CORPORATE PIPELINE / parchment ── */}
            <section className="relative bg-[#e8e1da] text-[#0a0a0a] overflow-hidden">
                <span className="absolute right-[-2vw] bottom-[-3vw] font-syne font-bold text-[24vw] text-black/[0.03] leading-none select-none pointer-events-none">
                    B2B
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-black/30">07</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#0047BB]">
                            {en ? "Corporate Pipeline" : "Firemný Pipeline"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-black/10" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16">
                            {en ? <>The<br />pipeline.</> : <>Pipeline.</>}
                        </h2>
                    </motion.div>

                    {(en ? [
                        {
                            company: "O2 — Department 1",
                            status: "Pre-warmed",
                            value: "€8,400",
                            note: "Head of department attended THE MINDSHIFT. Loved the thinking approach. Active conversation.",
                            action: "Send formal proposal. Confirm date. Close.",
                        },
                        {
                            company: "O2 — Department 2",
                            status: "Interested",
                            value: "€8,400",
                            note: "Same contact bridges. Internal referral from Department 1.",
                            action: "Follow-up after Department 1 confirmed.",
                        },
                        {
                            company: "Target #3",
                            status: "To activate",
                            value: "€8,400",
                            note: "From 145-company prospect list. Tier 1 fit. Identify and reach by end of April.",
                            action: "Pull from prospects database. Prioritise agencies and finance.",
                        },
                    ] : [
                        {
                            company: "O2 — Oddelenie 1",
                            status: "Zahriaty",
                            value: "€8 400",
                            note: "Vedúci oddelenia bol na THE MINDSHIFT. Miloval prístup myslenia. Aktívna konverzácia.",
                            action: "Poslať formálnu ponuku. Potvrdiť dátum. Uzavrieť.",
                        },
                        {
                            company: "O2 — Oddelenie 2",
                            status: "Má záujem",
                            value: "€8 400",
                            note: "Rovnaký kontakt je most. Interné odporúčanie z Oddelenia 1.",
                            action: "Nadviazanie po potvrdení Oddelenia 1.",
                        },
                        {
                            company: "Cieľ #3",
                            status: "Na aktiváciu",
                            value: "€8 400",
                            note: "Zo zoznamu 145 spoločností. Tier 1 fit. Identifikovať a osloviť do konca apríla.",
                            action: "Vybrať z databázy. Priorita: agentúry a financie.",
                        },
                    ]).map((c, i, arr) => (
                        <motion.div key={c.company} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-10">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="font-syne font-bold text-[20px] tracking-tight">{c.company}</p>
                                    <span className="text-[9px] font-code-brand uppercase tracking-[0.25em] text-[#0047BB] border border-[#0047BB]/30 px-2 py-0.5 inline-block mt-2">{c.status}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-syne font-bold text-[36px] text-[#0047BB] leading-none mb-3">{c.value}</p>
                                    <p className="text-[14px] text-black/55 leading-relaxed">{c.note}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-[0.3em] text-black/30 mt-3">
                                        {en ? "Next:" : "Ďalší krok:"} {c.action}
                                    </p>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-black/[0.08]" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-black/10" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-black/20">08</span>
                </div>
            </section>

            {/* ── 09 RISKS / dark ── */}
            <section className="relative bg-[#0d0d0d] text-[#e8e1da] overflow-hidden">
                <span className="absolute left-[-2vw] top-0 font-syne font-bold text-[24vw] text-white/[0.025] leading-none select-none pointer-events-none">
                    RISK
                </span>

                <div className="px-8 md:px-16 pt-24">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-white/25">08</span>
                        <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.45em] text-[#4d7fd4]">
                            {en ? "Risks" : "Riziká"}
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-white/[0.07]" />
                </div>

                <div className="px-8 md:px-16 py-20">
                    <motion.div {...fadeUp(0)}>
                        <h2 className="font-syne font-bold text-[36px] md:text-[56px] tracking-tighter leading-[1.0] mb-16 text-white">
                            {en
                                ? <>What could<br /><span className="text-white/25">go wrong.</span></>
                                : <>Čo môže<br /><span className="text-white/25">zle ísť.</span></>}
                        </h2>
                    </motion.div>

                    {(en ? [
                        {
                            risk: "Empty community at launch",
                            mitigation: "Founding cohort model — 20 personal invitations before any public announcement. No ghost town.",
                            kill: "Less than 5 founding members by June 15 → delay public launch to August.",
                        },
                        {
                            risk: "Corporate pipeline stalls after O2",
                            mitigation: "Activate prospect list now. Don't wait for O2 to close. Three conversations in parallel minimum.",
                            kill: "O2 stalls beyond May → activate remaining list aggressively, consider price testing.",
                        },
                        {
                            risk: "Content creation burns out the team",
                            mitigation: "One content session per week that produces 5–7 assets. Repurpose relentlessly. Newsletter becomes audio becomes 3 posts.",
                            kill: "Instagram stalls below 1,100 by May → audit format, test reels vs editorial.",
                        },
                    ] : [
                        {
                            risk: "Prázdna komunita pri spustení",
                            mitigation: "Model zakladajúcej kohorty — 20 osobných pozvánok pred akýmkoľvek verejným oznamom.",
                            kill: "Menej ako 5 zakladajúcich členov do 15. júna → odložiť verejný launch na august.",
                        },
                        {
                            risk: "Firemný pipeline sa zasekne po O2",
                            mitigation: "Aktivovať zoznam prospektov teraz. Nečakať na uzatvorenie O2. Minimum tri konverzácie paralelne.",
                            kill: "O2 sa zasekne po máji → agresívne aktivovať zvyšok zoznamu, zvážiť testovanie ceny.",
                        },
                        {
                            risk: "Tvorba obsahu vyčerpá tím",
                            mitigation: "Jeden obsahový session za týždeň produkujúci 5–7 assetov. Neúnavné repurposovanie.",
                            kill: "Rast Instagramu pod 1 100 do mája → audit formátu, testovanie reels vs editorial.",
                        },
                    ]).map((r, i, arr) => (
                        <motion.div key={r.risk} {...fadeUp(i * 0.05)}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-10">
                                <div className="md:w-[200px] shrink-0">
                                    <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/30 mb-2">{en ? "Risk" : "Riziko"}</p>
                                    <p className="font-syne font-bold text-[18px] text-white tracking-tight">{r.risk}</p>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-[#4d7fd4] mb-1">{en ? "Mitigation" : "Riešenie"}</p>
                                        <p className="text-[14px] text-white/45 leading-relaxed">{r.mitigation}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-code-brand uppercase tracking-[0.3em] text-white/20 mb-1">{en ? "Kill criteria" : "Podmienka na zmenu"}</p>
                                        <p className="text-[13px] text-white/30 leading-relaxed italic">{r.kill}</p>
                                    </div>
                                </div>
                            </div>
                            {i < arr.length - 1 && <div className="h-px bg-white/[0.06]" />}
                        </motion.div>
                    ))}

                    <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.4em] text-white/25 mt-14 mb-8">
                        {en ? "What We Are Not Doing" : "Čo Nerobíme"}
                    </p>

                    {(en ? [
                        "Annual report or long-form research — that's Q4.",
                        "Paid social advertising — organic first.",
                        "Geographic expansion — Slovakia and CEE only.",
                        "New workshop formats — validate existing before adding.",
                        "Custom AI infrastructure — Circle + existing tools first.",
                    ] : [
                        "Výročná správa alebo dlhý výskum — to je Q4.",
                        "Platená sociálna reklama — najprv organicky.",
                        "Geografická expanzia — len Slovensko a CEE.",
                        "Nové formáty workshopov — najprv validovať existujúce.",
                        "Vlastná AI infraštruktúra — najprv Circle + existujúce nástroje.",
                    ]).map((n, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.03)}>
                            <div className="flex gap-4 py-3 border-b border-white/[0.06]">
                                <span className="text-white/20 shrink-0">—</span>
                                <p className="text-[14px] text-white/40">{n}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-8 md:mx-16 h-px bg-white/[0.07]" />
                <div className="flex justify-between px-8 md:px-16 py-5">
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">SORRYWECAN</span>
                    <span className="text-[8px] font-code-brand uppercase tracking-[0.4em] text-white/15">09</span>
                </div>
            </section>

            {/* ── FOOTER / blue ── */}
            <footer className="bg-[#0047BB] text-white px-8 md:px-16 py-20">
                <p className="text-[9px] font-code-brand font-bold uppercase tracking-[0.5em] text-white/40 mb-6">
                    {en ? "Internal Document · Q2 2026" : "Interný Dokument · Q2 2026"}
                </p>
                <p className="font-syne font-bold text-[32px] md:text-[48px] tracking-tighter leading-[0.92] text-white/20">
                    Research Lab<br />by SORRYWECAN
                </p>
                <div className="mt-10 h-px bg-white/10" />
                <p className="mt-6 text-[9px] font-code-brand uppercase tracking-[0.4em] text-white/20">
                    {en ? "Updated April 2026" : "Aktualizované apríl 2026"}
                </p>
            </footer>
        </div>
    )
}
