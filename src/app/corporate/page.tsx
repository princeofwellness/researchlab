"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"
import { CAL_CONFIG } from "@/components/book-call"

export default function CorporatePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                label: "Corporate Workshop",
                title: {
                    line1: "Your Team.",
                    line2: "New Operating System."
                },
                subline: "Creativity. Product. Transformation. Applied to your reality.",
                description: "We don't present. We think with you, live, about the decisions you're actually facing.",
                price: "5,900",
                duration: "4-5 hours",
                capacity: "10-15 people",
                cta: "Book Discovery Call"
            },
            stats: {
                headline: "Having tools is not the same as knowing what to do with them.",
                subline: "The companies that win are the ones that figure this out first.",
                items: [
                    { value: "300M", label: "jobs exposed to AI automation worldwide", source: "Goldman Sachs 2023" },
                    { value: "56%", label: "of CEOs see no financial benefit from AI yet", source: "PwC 2026" },
                    { value: "92%", label: "of companies plan to increase AI investment", source: "McKinsey 2025" },
                    { value: ">80%", label: "report no enterprise EBIT impact from GenAI", source: "McKinsey 2025" },
                    { value: "12%", label: "of CEOs saw both cost and revenue gains", source: "PwC 2026" }
                ]
            },
            problem: {
                title: "The Reality Right Now.",
                cards: [
                    { headline: "Your team prompts.", subline: "Without strategy." },
                    { headline: "Tools multiply.", subline: "Clarity doesn't." },
                    { headline: "AI budget approved.", subline: "Nobody owns the direction." },
                    { headline: "Speed went up.", subline: "Quality went sideways." }
                ]
            },
            session: {
                title: "Three Perspectives. One Direction.",
                subtitle: "We don't present. We think with you on what's holding you back.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "All", desc: "What changed and what most companies are getting wrong. Not theory. What we see working across industries right now." },
                    { num: "02", title: "Frameworks", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "How taste separates forgettable from iconic. What a small team ships today vs. a department last year. How to decide fast when nothing feels certain." },
                    { num: "03", title: "Your Reality", time: "90-120 min", lead: "Facilitated", desc: "We stop talking about the market and start talking about you. Your blind spots, your bottlenecks, looked at from angles you haven't considered. This is where insights happen that prevent six-figure mistakes." },
                    { num: "04", title: "The Clarity", time: "30 min", lead: "All", desc: "What we each saw. What to do first. What to drop. Your team leaves with a shared direction and the confidence to act on it Monday." }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "The Edge", desc: "Opportunities your competitors will miss. You won't." },
                    { title: "Debates → Decisions", desc: "Same language. Same priorities. The endless loops end." },
                    { title: "What You're Missing", desc: "Three perspectives reveal what one can't. Wrong turns spotted before they cost you." },
                    { title: "30 Days After", desc: "Follow-up included. Toolkit that evolves. Not another workshop you forget." }
                ]
            },
            founders: {
                title: "Who's in the Room.",
                subtitle: "Entrepreneurs, not consultants. Running their own companies, innovating every day.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "TASTE", 
                        company: "Creative Director / Founder, SORRYWECAN", 
                        tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.",
                        bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.",
                        url: "https://sorrywecan.com/"
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "LEVERAGE", 
                        company: "CPO / Co-founder, SUDOLABS", 
                        tagline: "Knows exactly where teams waste months building what one person could ship in a week.",
                        bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.",
                        url: "https://sudolabs.com/"
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "CLARITY", 
                        company: "Transformational Design", 
                        tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.",
                        bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.",
                        url: ""
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "3", label: "founders in the room with you" },
                    { value: "90+", label: "minutes on YOUR challenges" },
                    { value: "30", label: "day follow-up included" }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { q: "Is this just prompt training?", a: "No. Prompting is maybe 10%. This is about seeing differently — what to build, what to skip, how to prioritize. Three perspectives on your actual challenges." },
                    { q: "Our industry is specific. Will it apply?", a: "The problems are more similar than you think. We've worked across creative, tech, finance, telco. The frameworks are universal. The application is yours." },
                    { q: "Why half a day, not longer?", a: "Focus beats duration. We're not here to fill time — we're here to shift how you see. That happens in hours, not days." },
                    { q: "What's the ROI?", a: "Hard to measure in hours saved. Easier to see in wrong paths avoided, right priorities found, and decisions your team can finally make with confidence." }
                ],
                details: {
                    title: "Details",
                    items: [
                        { label: "Duration", value: "4-5 hours", subvalue: "Half day" },
                        { label: "Team Size", value: "10-15 people", subvalue: "Leadership / key team" },
                        { label: "Location", value: "We come to you", subvalue: "Your office" },
                        { label: "Follow-up", value: "30 days", subvalue: "Included" }
                    ]
                }
            },
            cta: {
                headline: "Next Move.",
                subline: "20-minute discovery call. No commitment.",
                button: "Book Discovery Call",
                guarantee: "If it's not the right fit, we'll tell you. And point you somewhere better.",
                contact: "andrea@sorrywecan.com"
            }
        },
        sk: {
            hero: {
                label: "Firemný Workshop",
                title: {
                    line1: "Váš Tím.",
                    line2: "Nový Operačný Systém."
                },
                subline: "Kreativita. Produkt. Transformácia. Aplikované na vašu realitu.",
                description: "Neprezentujeme. Myslíme s vami, naživo, nad rozhodnutiami, ktoré práve riešite.",
                price: "5 900",
                duration: "4-5 hodín",
                capacity: "10-15 ľudí",
                cta: "Rezervovať Discovery Call"
            },
            stats: {
                headline: "Mať nástroje nie je to isté ako vedieť, čo s nimi.",
                subline: "Vyhrávajú firmy, ktoré na to prídu prvé.",
                items: [
                    { value: "300M", label: "pracovných miest vystavených AI automatizácii", source: "Goldman Sachs 2023" },
                    { value: "56%", label: "CEO nevidí finančný prínos z AI", source: "PwC 2026" },
                    { value: "92%", label: "firiem plánuje zvýšiť investície do AI", source: "McKinsey 2025" },
                    { value: ">80%", label: "nevidí dopad GenAI na podnikový EBIT", source: "McKinsey 2025" },
                    { value: "12%", label: "CEO zaznamenalo prínosy v nákladoch aj tržbách", source: "PwC 2026" }
                ]
            },
            problem: {
                title: "Realita Práve Teraz.",
                cards: [
                    { headline: "Váš tím promptuje.", subline: "Bez stratégie." },
                    { headline: "Nástroje pribúdajú.", subline: "Jasnosť nie." },
                    { headline: "AI rozpočet schválený.", subline: "Nikto nedrží smer." },
                    { headline: "Rýchlosť stúpla.", subline: "Kvalita stagnuje." }
                ]
            },
            session: {
                title: "Tri Pohľady. Jeden Smer.",
                subtitle: "Neprezentujeme. Myslíme s vami nad tým, čo vás brzdí.",
                parts: [
                    { num: "01", title: "The Shift", time: "30 min", lead: "Všetci", desc: "Čo sa zmenilo a v čom sa väčšina firiem mýli. Nie teória. To, čo vidíme fungovať naprieč odvetviami práve teraz." },
                    { num: "02", title: "Frameworky", time: "60-75 min", lead: "Roland → Ján → Roman", desc: "Čo odlišuje zabudnuteľnú prácu od ikonickej. Čo malý tím dnes dodá vs. celé oddelenie pred rokom. Ako sa rozhodovať rýchlo, keď nič nie je isté." },
                    { num: "03", title: "Vaša Realita", time: "90-120 min", lead: "Facilitované", desc: "Prestaneme hovoriť o trhu a začneme hovoriť o vás. Vaše slepé miesta, vaše brzdy, pozerané z uhlov, na ktoré ste nemysleli. Tu vznikajú insights, ktoré zabraňujú šesťcifrovým chybám." },
                    { num: "04", title: "Jasnosť", time: "30 min", lead: "Všetci", desc: "Čo sme každý videli. Čo riešiť najskôr. Čo pustiť. Váš tím odchádza so spoločným smerom a odhodlaním konať od pondelka." }
                ]
            },
            outcome: {
                title: "S Čím Odchádzate",
                items: [
                    { title: "Vaša Výhoda", desc: "Príležitosti, ktoré konkurencia premešká. Vy nie." },
                    { title: "Debaty → Rozhodnutia", desc: "Spoločný jazyk. Spoločné priority. Koniec nekonečných diskusií." },
                    { title: "Čo Vám Uniká", desc: "Tri pohľady odhalia, čo jeden nevidí. Zlé odbočky odhalené skôr, než vás stoja." },
                    { title: "30 Dní Potom", desc: "Follow-up v cene. Toolkit, ktorý sa vyvíja. Nie ďalší workshop, na ktorý zabudnete." }
                ]
            },
            founders: {
                title: "Kto Je V Miestnosti.",
                subtitle: "Podnikatelia, nie konzultanti. Vedú vlastné firmy a inovujú každý deň.",
                trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "VKUS", 
                        company: "Creative Director / Zakladateľ, SORRYWECAN", 
                        tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.",
                        bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.",
                        url: "https://sorrywecan.com/"
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "PÁKA", 
                        company: "CPO / Spoluzakladateľ, SUDOLABS", 
                        tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.",
                        bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.",
                        url: "https://sudolabs.com/"
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "JASNOSŤ", 
                        company: "Transformational Design", 
                        tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.",
                        bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.",
                        url: ""
                    }
                ]
            },
            proof: {
                stats: [
                    { value: "3", label: "zakladatelia v miestnosti s vami" },
                    { value: "90+", label: "minút na VAŠE problémy" },
                    { value: "30", label: "dňový follow-up v cene" }
                ]
            },
            faq: {
                title: "Otázky.",
                items: [
                    { q: "Je toto len prompt tréning?", a: "Nie. Promptovanie je možno 10%. Toto je o inom pohľade — čo stavať, čo preskočiť, ako prioritizovať. Tri perspektívy na vaše skutočné výzvy." },
                    { q: "Naše odvetvie je špecifické. Bude to aplikovateľné?", a: "Problémy sú podobnejšie, než si myslíte. Pracovali sme naprieč kreatívou, tech, financiami, telco. Frameworky sú univerzálne. Aplikácia je vaša." },
                    { q: "Prečo pol dňa, nie dlhšie?", a: "Fokus prekonáva trvanie. Nie sme tu, aby sme vyplnili čas — sme tu, aby sme zmenili to, ako vidíte. To sa deje za hodiny, nie dni." },
                    { q: "Aké je ROI?", a: "Ťažko merateľné v ušetrených hodinách. Ľahšie viditeľné v vyhnutých zlých cestách, nájdených správnych prioritách a rozhodnutiach, ktoré váš tím konečne dokáže spraviť s istotou." }
                ],
                details: {
                    title: "Detaily",
                    items: [
                        { label: "Trvanie", value: "4-5 hodín", subvalue: "Pol dňa" },
                        { label: "Veľkosť tímu", value: "10-15 ľudí", subvalue: "Vedenie / kľúčový tím" },
                        { label: "Miesto", value: "Prídeme k vám", subvalue: "Vaša kancelária" },
                        { label: "Follow-up", value: "30 dní", subvalue: "V cene" }
                    ]
                }
            },
            cta: {
                headline: "Ďalší Krok.",
                subline: "20-minútový discovery call. Žiadny záväzok.",
                button: "Rezervovať Discovery Call",
                guarantee: "Ak to pre vás nie je, povieme vám to. A nasmerujeme vás lepšie.",
                contact: "andrea@sorrywecan.com"
            }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20">
            <TopNav lang={lang} customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                >
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            } />

            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] font-code-brand">
                            {t.hero.label}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-bold text-[10vw] md:text-[6.5vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1}<br />
                        <span className="text-[#0047BB]">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-lg md:text-xl text-black/40 mt-2"
                    >
                        {t.hero.subline}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl leading-relaxed text-black/60 max-w-2xl mb-10"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <a 
                                href={CAL_CONFIG.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0047BB] text-white px-8 py-4 font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all font-code-brand"
                            >
                                {t.hero.cta}
                            </a>
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-black/40 font-code-brand">
                                <span>{t.hero.duration}</span>
                                <span className="text-black/20">|</span>
                                <span>{t.hero.capacity}</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl md:text-2xl font-bold text-black/70">{t.stats.headline}</p>
                        {t.stats.subline && <p className="text-lg text-black/40 mt-2">{t.stats.subline}</p>}
                    </motion.div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 md:gap-12">
                        {t.stats.items.map((stat: { value: string; label: string; source: string }, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <span className="text-3xl md:text-4xl font-bold text-[#0047BB]">{stat.value}</span>
                                <p className="text-sm text-black/60 mt-2 mb-1">{stat.label}</p>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30">{stat.source}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-bold text-2xl md:text-3xl text-center mb-10"
                    >
                        {t.problem.title}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.problem.cards.map((card: { headline: string; subline: string }, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border border-black/10 bg-black/[0.03]"
                            >
                                <p className="text-lg md:text-xl font-medium text-black">{card.headline}</p>
                                <p className="text-lg md:text-xl text-black/40">{card.subline}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-bold text-3xl md:text-4xl mb-2">
                            {t.session.title}
                        </h2>
                        <p className="text-lg text-[#0047BB]">{t.session.subtitle}</p>
                    </div>
                    <div className="space-y-3">
                        {t.session.parts.map((part: any, i: number) => (
                            <motion.div
                                key={i} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={cn(
                                    "flex flex-col md:flex-row gap-4 p-5 md:p-6 border transition-all",
                                    i === 2 
                                        ? "border-[#0047BB]/30 bg-black/[0.03]" 
                                        : "border-black/[0.06] hover:border-[#0047BB]/20"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB] font-code-brand">{part.num}</span>
                                    <span className="text-[10px] text-black/30 font-code-brand">{part.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-1">{part.title}</h4>
                                    <p className="text-sm text-black/60">{part.desc}</p>
                                </div>
                                <div className="md:w-20 shrink-0 md:text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 font-code-brand">{part.lead}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 bg-black/[0.02] border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-4xl text-center mb-12">{t.outcome.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-5 border border-black/10">
                                <span className="w-7 h-7 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs mb-3 font-code-brand">
                                    {i + 1}
                                </span>
                                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-black/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-black/10">
                        {t.proof.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center">
                                <span className="text-4xl md:text-5xl font-bold text-[#0047BB]">{stat.value}</span>
                                <p className="text-xs text-black/40 mt-2 font-code-brand">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-bold text-3xl md:text-4xl mb-2">{t.founders.title}</h2>
                        <p className="text-black/50">{t.founders.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <div key={i} className="p-6 border border-black/10 text-center">
                                 <h4 className="text-xl font-bold">{card.name}</h4>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-1 font-code-brand">{card.role}</p>
                                 <p className="text-[10px] text-black/30 mb-4 font-code-brand">{card.company}</p>
                                <p className="text-sm text-black/60 mb-3">{card.bio}</p>
                                {card.url && (
                                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] hover:underline mt-2">
                                        {card.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                    </a>
                                )}
                                <p className="text-sm text-black/80 italic border-t border-black/10 pt-3">"{card.tagline}"</p>
                            </div>
                        ))}
                    </div>
                    {t.founders.trust && (
                        <p className="text-center text-[11px] font-code-brand text-black/40 mt-6">{t.founders.trust}</p>
                    )}
                </div>
            </section>

            <section className="py-20 md:py-28 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-bold text-3xl text-center mb-10">{t.faq.title}</h2>
                    <div className="space-y-2 mb-12">
                        {t.faq.items.map((item: any, i: number) => (
                            <div key={i} className="border border-black/[0.06]">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                                >
                                    <span className="font-medium text-sm pr-4">{item.q}</span>
                                    <span className={cn("text-[#0047BB] font-bold transition-transform", faqOpen === i && "rotate-45")}>+</span>
                                </button>
                                <AnimatePresence>
                                    {faqOpen === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-4 text-sm text-black/60">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-6 bg-black/[0.02] border border-black/[0.06]">
                        {t.faq.details.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1 font-code-brand">{item.label}</p>
                                <p className="text-sm font-medium">{item.value}</p>
                                {item.subvalue && <p className="text-xs text-black/40">{item.subvalue}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-bold text-5xl md:text-6xl mb-4">{t.cta.headline}</h2>
                    <p className="text-lg text-white/50 mb-6">{t.cta.subline}</p>
                    <a
                        href={CAL_CONFIG.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0047BB] text-white px-12 py-5 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all inline-block font-code-brand"
                    >
                        {t.cta.button}
                    </a>
                    <p className="text-sm text-white/40 mt-6">{t.cta.guarantee}</p>
                    {t.cta.contact && <p className="text-xs text-white/30 mt-2">{t.cta.contact}</p>}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm text-white/40">{lang === 'en' ? "Want to try first?" : "Chceš najprv vyskúšať?"}</span>
                        <Link 
                            href="/public" 
                            className="text-sm font-bold text-[#0047BB] hover:text-white transition-colors font-code-brand"
                        >
                            {lang === 'en' ? "THE SHIFT €99" : "THE SHIFT €99"} →
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20 font-code-brand">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
