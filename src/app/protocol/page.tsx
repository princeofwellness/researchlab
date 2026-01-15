"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

// --- Components ---

function Section({ id, number, title, children, className }: any) {
    return (
        <section id={id} className={cn("py-32 border-b border-black last:border-0 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-20"
            >
                <div className="space-y-8 mb-24">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{number}</span>
                        <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <h2 className="font-serif-instrument text-7xl md:text-8xl tracking-tighter leading-none">{title}</h2>
                </div>
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}

function PhaseCard({ number, title, subtitle, desc, items, highlight }: any) {
    return (
        <div className={cn(
            "border border-black/10 bg-white p-8 md:p-12 relative group hover:border-black transition-colors",
            highlight && "bg-[#0047BB]/5 border-[#0047BB]/20"
        )}>
            <span className="absolute top-8 right-8 text-[10px] font-bold tracking-[0.3em] opacity-30">PHASE {number}</span>
            <h3 className="text-3xl font-serif-instrument italic mb-2">{title}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0047BB] mb-8">{subtitle}</p>
            <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-xl">
                {desc}
            </p>
            <ul className="space-y-3">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                        <span className="text-sm font-inter opacity-70 leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function TrackCard({ title, expert, focus, desc, outcome, tags, active, ledBy, output }: any) {
    return (
        <div className={cn(
            "p-10 border transition-all duration-500 flex flex-col",
            active ? "bg-black text-white border-black scale-[1.02] shadow-2xl" : "bg-white text-black border-black/10 hover:border-black"
        )}>
            <div className="flex justify-between items-start mb-8">
                <h4 className="font-serif-instrument text-4xl italic">{title}</h4>
                <span className={cn(
                    "text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 border",
                    active ? "border-white/20 text-white/60" : "border-black/10 text-black/40"
                )}>{focus}</span>
            </div>
            
            <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">{ledBy}</p>
                <p className="font-serif-instrument text-xl">{expert}</p>
            </div>

            <p className={cn("text-sm leading-relaxed mb-8 flex-grow", active ? "opacity-80" : "opacity-60")}>
                {desc}
            </p>

            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag: string) => (
                        <span key={tag} className={cn(
                            "text-[9px] font-bold uppercase tracking-wider px-2 py-1",
                            active ? "bg-white/10 text-white" : "bg-black/5 text-black"
                        )}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={cn("pt-6 border-t", active ? "border-white/20" : "border-black/10")}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-2">{output}</p>
                    <p className="font-medium">{outcome}</p>
                </div>
            </div>
        </div>
    )
}

export default function ProtocolPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')

    const content = {
        en: {
            hero: {
                subtitle: "THE PROTOCOL",
                title: {
                    line1: "The Cognitive",
                    line2: "Operating System."
                },
                description: "Companies don't just need software; they need a new way to think. We audit your mindset, map your automation potential, and install the navigation tools to survive speed.",
                features: ["Audit (Diagnosis)", "Map (Prototyping)", "Integrate (Mindset)"]
            },
            trinity: {
                title: "The Trinity",
                description: "Transformation requires three forces: Vision to see the future, Logic to build the path, and Awareness to stay on it. We bring all three.",
                cards: [
                    {
                        tag: "THE SPARK",
                        title: "The Creative",
                        desc: "Focuses on taste, variance, and the soul of the brand. Ensures AI output isn't generic. Teaches your team to stop prompting and start curating.",
                        name: "Roland Vraník",
                        role: "FOUNDER & CD"
                    },
                    {
                        tag: "THE COMPASS",
                        title: "The Navigator",
                        desc: "Focuses on purpose, human agency, and Zen in the age of speed. Grounds the team so they can steer the machine without being consumed by it.",
                        name: "Roman Pii Wagner",
                        role: "TRANSFORMATIONAL DESIGN"
                    },
                    {
                        tag: "THE ENGINE",
                        title: "The Architect",
                        desc: "Focuses on scale, sovereignty, and logic. Builds the pipelines and safety layers (Private Models) that allow vision to scale securely.",
                        name: "Ján Koščelanský",
                        role: "CO-FOUNDER & CPO"
                    }
                ]
            },
            arc: {
                title: "The Arc",
                cards: [
                    {
                        title: "The Vision",
                        subtitle: "OPENING THE STATE",
                        desc: "We start with the Art of the Possible. We shatter the Sea of Sameness by showing what AI looks like when steered by C-Level Vision and Taste, not just prompts.",
                        items: ["Breaking the Slop mental model", "C-Level Visual Thinking & Strategy", "Defining the new standard of Quality"]
                    },
                    {
                        title: "The Architecture",
                        subtitle: "DIAGNOSIS & MAPPING",
                        desc: "From vision to logic. We audit your current workflows and map the Automaton Blueprint—identifying exactly where to inject speed and where to preserve soul.",
                        items: ["Auditing current bottlenecks", "Mapping automation potential", "Building the blueprint live"]
                    },
                    {
                        title: "The Integration",
                        subtitle: "HANDOVER & ANCHORING",
                        desc: "We don't just leave you with ideas. We install the Cognitive OS. You walk away with a functioning Digital Toolkit and the mindset to navigate the new speed.",
                        items: ["The Human Constant session", "Handover of the Digital Toolkit", "Installation of the Decision Matrix"]
                    }
                ]
            },
            tracks: {
                title: "The Tracks",
                desc: "In Phase 02, we customize the intervention. What is your primary operating deficit?",
                labels: { ledBy: "LED BY", output: "OUTPUT" },
                cards: [
                    {
                        title: "The Studio",
                        focus: "CREATIVE & BRAND",
                        expert: "The Creative",
                        desc: "For C-levels, design leads, and brand guardians. We focus on Visual Strategy and How to Think with AI. The goal is variance, taste, and high-level direction.",
                        outcome: "The 100-to-1 Curation Workflow",
                        tags: ["Taste", "Visual Strategy", "C-Level Thinking", "Brand Voice"]
                    },
                    {
                        title: "The Engine",
                        focus: "PRODUCT & OPS",
                        expert: "The Architect",
                        desc: "For operations, legal, and product teams. We focus on Sovereign AI—private models, RAG architectures, and secure automation. The goal is accuracy and scale.",
                        outcome: "The Sovereign Automation Blueprint",
                        tags: ["Logic", "Private Models", "Regulations", "RAG"]
                    }
                ]
            },
            toolkit: {
                title: "The Toolkit",
                headline: {
                    line1: "We don't charge for hours.",
                    line2: "We charge for the",
                    highlight: "Cognitive OS",
                    line3: "we install."
                },
                desc: "This is not just software. It is a set of mental models, decision matrices, and digital artifacts that remain with you forever.",
                items: [
                    { name: "The Constitution (Prompt)", type: "BASE SYSTEM" },
                    { name: "Decision Matrix (6T)", type: "MENTAL MODEL" },
                    { name: "The Navigator's Manual", type: "GUIDE" },
                    { name: "Sovereignty / Muse Pack", type: "INDUSTRY MODULE" }
                ]
            },
            menu: {
                label: "SELECTION",
                title: "Which OS do you need?",
                button: "Start The Protocol",
                cards: [
                    {
                        title: "The Amplifier",
                        desc: "Our work feels generic. We need to restore taste and variance.",
                        os: "Creative OS",
                        combo: "Creative + Navigator"
                    },
                    {
                        title: "The Sovereign",
                        desc: "We need speed, privacy, and secure automation.",
                        os: "Product OS",
                        combo: "Architect + Navigator"
                    },
                    {
                        title: "The Synthesis",
                        desc: "Magic meets Logic. Scale the vision without losing the soul.",
                        os: "Dual Core OS",
                        combo: "Creative + Architect"
                    },
                    {
                        title: "The Trinity",
                        desc: "We need to change our entire DNA. Vision, Logic, and Mindset.",
                        os: "Full Hybrid OS",
                        combo: "Roland + Jan + Roman"
                    }
                ]
            }
        },
        sk: {
            hero: {
                subtitle: "PROTOKOL",
                title: {
                    line1: "Kognitívny",
                    line2: "Operačný Systém."
                },
                description: "Firmy nepotrebujú len softvér; potrebujú nový spôsob myslenia. Auditujeme váš mindset, mapujeme automatizačný potenciál a inštalujeme navigačné nástroje na prežitie rýchlosti.",
                features: ["Audit (Diagnóza)", "Mapa (Prototypovanie)", "Integrácia (Mindset)"]
            },
            trinity: {
                title: "Trojica",
                description: "Transformácia vyžaduje tri sily: Víziu na videnie budúcnosti, Logiku na stavbu cesty a Vedomie na udržanie smeru. Prinášame všetky tri.",
                cards: [
                    {
                        tag: "ISKRA",
                        title: "Kreatívec",
                        desc: "Sústredí sa na vkus, varianciu a dušu značky. Zabezpečuje, aby AI výstup nebol generický. Učí váš tím prestať promptovať a začať kurátorovať.",
                        name: "Roland Vraník",
                        role: "FOUNDER & CD"
                    },
                    {
                        tag: "KOMPAS",
                        title: "Navigátor",
                        desc: "Zameriava sa na účel, ľudskú agentnosť a Zen v dobe rýchlosti. Uzemňuje tím, aby mohli riadiť stroj bez toho, aby ich pohltil.",
                        name: "Roman Pii Wagner",
                        role: "TRANSFORMATIONAL DESIGN"
                    },
                    {
                        tag: "MOTOR",
                        title: "Architekt",
                        desc: "Sústredí sa na škálovanie, suverenitu a logiku. Buduje potrubia a bezpečnostné vrstvy (Privátne Modely), ktoré umožňujú vízii bezpečne rásť.",
                        name: "Ján Koščelanský",
                        role: "CO-FOUNDER & CPO"
                    }
                ]
            },
            arc: {
                title: "Oblúk",
                cards: [
                    {
                        title: "Vízia",
                        subtitle: "OTVORENIE STAVU",
                        desc: "Začíname Umením Možného. Rozbíjame Oceán Priemernosti ukážkou toho, ako vyzerá AI, keď je riadená C-Level Víziou a Vkusom, nie len promptami.",
                        items: ["Prelomenie Slop mentálneho modelu", "C-Level Vizuálne Myslenie & Stratégia", "Definovanie nového štandardu Kvality"]
                    },
                    {
                        title: "Architektúra",
                        subtitle: "DIAGNÓZA & MAPOVANIE",
                        desc: "Od vízie k logike. Auditujeme vaše súčasné workflowy a mapujeme Blueprint Automata—identifikujeme presne, kde vložiť rýchlosť a kde zachovať dušu.",
                        items: ["Audit súčasných úzkych hrdiel", "Mapovanie automatizačného potenciálu", "Budovanie blueprintu naživo"]
                    },
                    {
                        title: "Integrácia",
                        subtitle: "ODOVZDANIE & UKOTVENIE",
                        desc: "Nenecháme vás len s nápadmi. Inštalujeme Kognitívny OS. Odchádzate s funkčným Digitálnym Toolkitom a nastavením mysle na navigáciu v novej rýchlosti.",
                        items: ["Sedenie Ľudská Konštanta", "Odovzdanie Digitálneho Toolkitu", "Inštalácia Rozhodovacej Matice"]
                    }
                ]
            },
            tracks: {
                title: "Trakcie",
                desc: "V Fáze 02 prispôsobujeme intervenciu. Aký je váš primárny operačný deficit?",
                labels: { ledBy: "VEDIE", output: "VÝSTUP" },
                cards: [
                    {
                        title: "Štúdio",
                        focus: "KREATÍVA & BRAND",
                        expert: "Kreatívec",
                        desc: "Pre C-level, dizajnérov a strážcov značky. Sústredíme sa na Vizuálnu Stratégiu a Ako Myslieť s AI. Cieľom je variancia, vkus a smerovanie na vysokej úrovni.",
                        outcome: "Workflow 100-do-1 Kurátorstva",
                        tags: ["Vkus", "Vizuálna Stratégia", "C-Level Myslenie", "Hlas Značky"]
                    },
                    {
                        title: "Motor",
                        focus: "PRODUKT & OPS",
                        expert: "Architekt",
                        desc: "Pre operácie, právne a produktové tímy. Zameriavame sa na Suverénnu AI—privátne modely, RAG architektúry a bezpečnú automatizáciu. Cieľom je presnosť a škála.",
                        outcome: "Blueprint Suverénnej Automatizácie",
                        tags: ["Logika", "Privátne Modely", "Regulácie", "RAG"]
                    }
                ]
            },
            toolkit: {
                title: "Toolkit",
                headline: {
                    line1: "Neúčtujeme za hodiny.",
                    line2: "Účtujeme za",
                    highlight: "Kognitívny OS",
                    line3: ", ktorý inštalujeme."
                },
                desc: "Toto nie je len softvér. Je to súbor mentálnych modelov, rozhodovacích matíc a digitálnych artefaktov, ktoré s vami zostanú navždy.",
                items: [
                    { name: "Ústava (Prompt)", type: "ZÁKLADNÝ SYSTÉM" },
                    { name: "Rozhodovacia Matica (6T)", type: "MENTÁLNY MODEL" },
                    { name: "Manuál Navigátora", type: "SPRIEVODCA" },
                    { name: "Balík Suverenity / Múzy", type: "PRIEMYSELNÝ MODUL" }
                ]
            },
            menu: {
                label: "VÝBER",
                title: "Ktorý OS potrebujete?",
                button: "Spustiť Protokol",
                cards: [
                    {
                        title: "Zosilňovač",
                        desc: "Naša práca pôsobí genericky. Potrebujeme obnoviť vkus a varianciu.",
                        os: "Kreatívny OS",
                        combo: "Kreatívec + Navigátor"
                    },
                    {
                        title: "Suverén",
                        desc: "Potrebujeme rýchlosť, súkromie a bezpečnú automatizáciu.",
                        os: "Produktový OS",
                        combo: "Architekt + Navigátor"
                    },
                    {
                        title: "Syntéza",
                        desc: "Mágia stretáva Logiku. Škálovanie vízie bez straty duše.",
                        os: "Dual Core OS",
                        combo: "Kreatívec + Architekt"
                    },
                    {
                        title: "Trojica",
                        desc: "Potrebujeme zmeniť celú našu DNA. Vízia, Logika a Mindset.",
                        os: "Plný Hybridný OS",
                        combo: "Roland + Jan + Roman"
                    }
                ]
            }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                >
                    {lang === 'en' ? '🇸🇰 SK' : '🇬🇧 EN'}
                </button>
            } />

            {/* Hero */}
            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-black relative">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            {t.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] leading-[0.95] tracking-tighter mb-16"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-black/10 pt-12">
                        <div className="max-w-md">
                            <p className="text-xl leading-relaxed text-black/70">
                                {t.hero.description}
                            </p>
                        </div>
                        <div className="space-y-6">
                            {t.hero.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-[#0047BB]" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Trinity Philosophy */}
            <Section number="01" title={t.trinity.title}>
                <div className="mb-16">
                    <p className="text-xl text-black/60 max-w-3xl leading-relaxed">
                        {t.trinity.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10 items-stretch">
                    {t.trinity.cards.map((card, i) => (
                        <div key={i} className="p-10 space-y-8 flex flex-col bg-white">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB]">{card.tag}</span>
                            <h3 className="font-serif-instrument text-4xl italic">{card.title}</h3>
                            <p className="text-sm text-black/60 leading-relaxed flex-grow">
                                {card.desc}
                            </p>
                            <div className="pt-8 border-t border-black/10">
                                <p className="text-xs font-bold uppercase tracking-widest">{card.name}</p>
                                <p className="text-[10px] opacity-50 mt-1">{card.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* The Arc */}
            <Section number="02" title={t.arc.title}>
                <div className="space-y-8 max-w-5xl mx-auto">
                    {t.arc.cards.map((card, i) => (
                        <PhaseCard 
                            key={i}
                            number={`0${i + 1}`}
                            title={card.title}
                            subtitle={card.subtitle}
                            desc={card.desc}
                            items={card.items}
                            highlight={i === 2}
                        />
                    ))}
                </div>
            </Section>

            {/* The Tracks */}
            <Section number="03" title={t.tracks.title}>
                <div className="mb-16 max-w-3xl">
                    <p className="text-xl text-black/60 leading-relaxed">
                        {t.tracks.desc}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.tracks.cards.map((card, i) => (
                        <TrackCard 
                            key={i}
                            title={card.title}
                            focus={card.focus}
                            expert={card.expert}
                            desc={card.desc}
                            outcome={card.outcome}
                            tags={card.tags}
                            active={i === 1}
                            ledBy={t.tracks.labels.ledBy}
                            output={t.tracks.labels.output}
                        />
                    ))}
                </div>
            </Section>

            {/* The Digital Toolkit */}
            <Section number="04" title={t.toolkit.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <p className="text-2xl font-serif-instrument italic leading-relaxed">
                            {t.toolkit.headline.line1} <br />
                            {t.toolkit.headline.line2} <span className="text-[#0047BB]">{t.toolkit.headline.highlight}</span> {t.toolkit.headline.line3}
                        </p>
                        <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                            {t.toolkit.desc}
                        </p>
                    </div>
                    <div className="space-y-px bg-black/10 border border-black/10">
                        {t.toolkit.items.map((item, i) => (
                            <div key={i} className={cn("p-8 flex justify-between items-center", i === 3 ? "bg-[#0047BB] text-white" : "bg-white")}>
                                <span className={cn("font-serif-instrument text-xl", i === 3 && "italic")}>{item.name}</span>
                                <span className={cn("text-[9px] uppercase tracking-widest", i === 3 ? "opacity-60" : "opacity-40")}>{item.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* The Menu */}
            <section className="py-32 px-6 md:px-20 border-t border-black bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB] block mb-8">{t.menu.label}</span>
                        <h2 className="font-serif-instrument text-6xl md:text-8xl tracking-tighter leading-none">{t.menu.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.menu.cards.map((card, i) => (
                            <div key={i} className={cn(
                                "p-10 space-y-8 relative overflow-hidden group",
                                i === 3 ? "bg-[#0047BB] text-white border border-[#0047BB]" : "border border-white/20 hover:bg-white/5 transition-colors"
                            )}>
                                <h3 className="text-3xl font-serif-instrument italic relative z-10">{card.title}</h3>
                                <p className={cn("text-sm leading-relaxed h-20 relative z-10", i === 3 ? "opacity-80" : "opacity-60 group-hover:opacity-80")}>
                                    {card.desc}
                                </p>
                                <ul className={cn("space-y-4 pt-8 border-t relative z-10", i === 3 ? "border-white/20" : "border-white/10")}>
                                    <li className="text-xs font-bold uppercase tracking-widest">{card.os}</li>
                                    <li className={cn("text-xs", i === 3 ? "opacity-80" : "opacity-60 group-hover:opacity-80")}>{card.combo}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Protocol Inquiry&body=We are interested in The Trinity protocol."
                            className="bg-white text-black px-16 py-6 font-inter font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#0047BB] hover:text-white transition-all inline-block"
                        >
                            {t.menu.button}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}