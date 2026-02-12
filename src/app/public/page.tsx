"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"
import { TheShiftBookButton } from "@/components/book-call"
import { SeatCounter } from "@/components/seat-counter"

export default function PublicSessionsPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                label: "THE SHIFT",
                title: {
                line1: "In 3 Hours, You'll See",
                line2: "What Took Us Years to Learn."
            },
            subline: "One evening. A new way to think, decide, and create with AI.",
                price: "99",
                duration: "3.5 hours",
                date: "February 26, 2026",
                spots: "40 seats",
                cta: "I'm In"
            },
            stats: {
                headline: "The world is shifting faster than you think.",
                items: [
                    { value: "39%", label: "of your current skills will change by 2030", source: "WEF 2025" },
                    { value: "75%", label: "of knowledge workers already use AI", source: "Microsoft 2024" },
                    { value: "78%", label: "of companies use AI in at least one function", source: "McKinsey 2025" },
                    { value: "9×", label: "surge in GenAI-skill job vacancies since 2022", source: "World Bank 2025" },
                    { value: "56%", label: "of companies see no return on AI investment yet", source: "PwC 2026" }
                ]
            },
            session: {
                title: "What separates the 1%.",
                subtitle: "",
                parts: [
                    { 
                        num: "01", 
                        title: "Taste", 
                        time: "50 min", 
                        desc: "What separates good from unforgettable. Everyone has the same tools. The difference is taste, curation, and the eye for detail.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Leverage", 
                        time: "50 min", 
                        desc: "What one person can build today. New businesses, new ways to operate. What to build, what to skip, and how to think about products in this new reality.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Clarity", 
                        time: "40 min", 
                        desc: "What stays human and what to delegate to AI. When to automate and when to consciously stop. Decision frameworks you'll actually use.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Q&A", 
                        time: "40 min", 
                        desc: "Your questions. Your reality. Open and honest answers from people who work with AI daily.",
                        lead: "All"
                    }
                ]
            },
            problem: {
                title: "Sound Familiar?",
                cards: [
                    { headline: "Generation is easy now.", subline: "Recognizing quality is harder." },
                    { headline: "Tools keep multiplying.", subline: "Habits can't keep up." },
                    { headline: "Everything moves faster.", subline: "But what's actually worth creating?" },
                    { headline: "AI gave everyone the same power.", subline: "So what's your edge now?" }
                ]
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "A Working System", desc: "Not tips. Not theory. A way of working with AI you'll actually use Monday morning." },
                    { title: "Less Noise, More Signal", desc: "Lower mental load. No more AI FOMO. You stop chasing tools and start choosing the right ones." },
                    { title: "Your Edge", desc: "Everyone has the same tools. You'll know what they don't. How to see, decide, and create differently." },
                    { title: "The Community", desc: "Access to the people who showed up. Monthly toolkit updates. A place to stay connected and keep growing." }
                ]
            },
            founders: {
                title: "Three Perspectives",
                subtitle: "Art. Product. Transformation.",
                trust: "From the creators of campaigns for Meta, Audi, Forbes, and Samsung.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "Creative Director / Founder, SORRYWECAN", 
                        tagline: "Made mistakes that cost more than money. Sees what most creative teams miss.",
                        bio: "Creative director behind award-winning campaigns for Forbes, Meta, Audi, and Samsung. Decades connecting aesthetics with technology. Now builds with AI daily. Does in hours what used to take weeks.",
                        url: "https://sorrywecan.com/",
                        image: "/founders/roland.jpg"
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "The Architect", 
                        company: "CPO / Co-founder, SUDOLABS", 
                        tagline: "Knows exactly where teams waste months building what one person could ship in a week.",
                        bio: "Co-founded SUDOLABS. Years shipping digital products across fintech, health, and enterprise. Sees the gap between what companies build and what they could build.",
                        url: "https://sudolabs.com/",
                        image: ""
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "Transformational Design", 
                        tagline: "Turns confusion into priorities. Turns priorities into Monday decisions.",
                        bio: "Transformational designer. Helps organizations figure out what to focus on, what to let go of, and how to make decisions that hold under pressure.",
                        url: "",
                        image: "/founders/roman.jpg"
                    }
                ]
            },
            faq: {
                title: "Questions.",
                items: [
                    { q: "Do I need technical skills?", a: "No. If you can use a browser, you can do this." },
                    { q: "What should I bring?", a: "Laptop. Internet. That's it." },
                    { q: "Why €99?", a: "We want this accessible. Best marketing is people telling friends." },
                    { q: "What makes this different?", a: "We're not teaching from slides. We build with AI daily. Real work, not theory." },
                    { q: "Can I expense this?", a: "Yes. Proper invoices. Most companies approve €99 without questions." },
                    { q: "What language?", a: "Slovak primarily. English materials. We adapt." },
                    { q: "What if I want more after?", a: "Good. Corporate workshops for teams. Or join again." }
                ],
                details: {
                    title: "Details",
                    items: [
                        { label: "Where", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "When", value: "February 26, 2026", subvalue: "Wednesday" },
                        { label: "Time", value: "17:00 – 20:30", subvalue: "3.5 hours" },
                        { label: "Price", value: "from €99", subvalue: "per person" }
                    ]
                }
            },
            cta: {
                headline: "I'm In.",
                subline: "40 seats. First session February 26.",
                button: "I'm In",
                note: "Want this for your team?",
                corporate: "Corporate Workshop"
            }
        },
        sk: {
            hero: {
                label: "THE SHIFT",
                title: {
                line1: "Za 3 Hodiny Uvidíte To,",
                line2: "Čo Nám Trvalo Roky Pochopiť."
            },
            subline: "Jeden večer. Nový spôsob, ako myslieť, rozhodovať a tvoriť s AI.",
                price: "99",
                duration: "3.5 hodiny",
                date: "26. februára 2026",
                spots: "40 miest",
                cta: "Idem Do Toho"
            },
            stats: {
                headline: "Svet sa mení rýchlejšie, než si myslíte.",
                items: [
                    { value: "39%", label: "vašich súčasných zručností sa zmení do 2030", source: "WEF 2025" },
                    { value: "75%", label: "knowledge workers už používa AI", source: "Microsoft 2024" },
                    { value: "78%", label: "firiem používa AI aspoň v jednej oblasti", source: "McKinsey 2025" },
                    { value: "9×", label: "nárast pracovných ponúk vyžadujúcich GenAI zručnosti od 2022", source: "World Bank 2025" },
                    { value: "56%", label: "firiem nevidí návratnosť investícií do AI", source: "PwC 2026" }
                ]
            },
            session: {
                title: "Čo odlišuje to 1%.",
                subtitle: "",
                parts: [
                    { 
                        num: "01", 
                        title: "Vkus", 
                        time: "50 min", 
                        desc: "Čo odlišuje dobré od nezabudnuteľného. Rovnaké nástroje má každý. Rozdiel robí vkus, kurátorstvo a oko pre detail.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Využitie", 
                        time: "50 min", 
                        desc: "Čo dokáže jeden človek vytvoriť dnes. Nové biznisy, nové spôsoby fungovania. Na čo sa sústrediť, čo tvoriť a ako premýšľať o produktoch v tomto svete.",
                        lead: "Ján"
                    },
                    { 
                        num: "03", 
                        title: "Jasnosť", 
                        time: "40 min", 
                        desc: "Čo zostáva ľudské a čo delegovať na AI. Kedy automatizovať a kedy sa vedome zastaviť. Rozhodovacie rámce, ktoré viete reálne používať.",
                        lead: "Roman"
                    },
                    { 
                        num: "04", 
                        title: "Q&A", 
                        time: "40 min", 
                        desc: "Vaše otázky. Vaša realita. Otvorené a úprimné odpovede od ľudí, ktorí s AI pracujú denne.",
                        lead: "Všetci"
                    }
                ]
            },
            problem: {
                title: "Poznáte To?",
                cards: [
                    { headline: "Generovať je dnes jednoduché.", subline: "Rozlíšiť kvalitu je ťažšie." },
                    { headline: "Nástroje pribúdajú.", subline: "Návyky nestíhajú." },
                    { headline: "Všetko ide rýchlejšie.", subline: "Ale čo sa naozaj oplatí tvoriť?" },
                    { headline: "AI dalo všetkým rovnaké možnosti.", subline: "Tak čo je teraz tvoja výhoda?" }
                ]
            },
             outcome: {
                 title: "S Čím Odchádzate",
                 items: [
                     { title: "Funkčný Systém", desc: "Nie tipy. Nie teória. Spôsob práce s AI, ktorý reálne použijete v pondelok ráno." },
                     { title: "Menej Šumu, Viac Signálu", desc: "Nižšia mentálna záťaž. Koniec AI FOMO. Prestanete naháňať nástroje a začnete vyberať tie správne." },
                     { title: "Vaša Výhoda", desc: "Rovnaké nástroje má každý. Vy budete vedieť, čo ostatní nie. Ako vidieť, rozhodovať a tvoriť inak." },
                     { title: "Komunita", desc: "Prístup ku ľuďom, ktorí prišli. Mesačné toolkit updaty. Miesto, kde zostanete prepojení a rastete ďalej." }
                 ]
             },
              founders: {
                  title: "Tri Perspektívy",
                  subtitle: "Umenie. Produkt. Transformácia.",
                  trust: "Od tvorcov kampaní pre Meta, Audi, Forbes a Samsung.",
                  cards: [
                      { 
                          name: "Roland Vraník", 
                          role: "Umelec", 
                          company: "Creative Director / Zakladateľ, SORRYWECAN", 
                          tagline: "Urobil chyby, ktoré stáli viac než peniaze. Vidí, čo väčšine kreatívnych tímov uniká.",
                          bio: "Kreatívny riaditeľ za oceňovanými kampaňami pre Forbes, Meta, Audi a Samsung. Dekády na priesečníku estetiky a technológie. Dnes buduje s AI denne. Robí za hodiny, čo kedysi trvalo týždne.",
                          url: "https://sorrywecan.com/",
                          image: "/founders/roland.jpg"
                      },
                      { 
                          name: "Ján Koscelanský", 
                          role: "Architekt", 
                          company: "CPO / Spoluzakladateľ, SUDOLABS", 
                          tagline: "Presne vie, kde tímy strácajú mesiace nad niečím, čo jeden človek dodá za týždeň.",
                          bio: "Spoluzakladateľ SUDOLABS. Roky dodávania digitálnych produktov naprieč fintechom, zdravotníctvom a enterprise. Vidí priepasť medzi tým, čo firmy stavajú a čo by stavať mohli.",
                          url: "https://sudolabs.com/",
                          image: ""
                      },
                      { 
                          name: "Roman Pii Wagner", 
                          role: "Navigátor", 
                          company: "Transformational Design", 
                          tagline: "Mení zmätok na priority. Mení priority na pondelkové rozhodnutia.",
                          bio: "Transformačný dizajnér. Pomáha organizáciám zistiť, na čo sa sústrediť, čo pustiť a ako robiť rozhodnutia, ktoré vydržia pod tlakom.",
                          url: "",
                          image: "/founders/roman.jpg"
                      }
                  ]
              },
            faq: {
                title: "Otázky.",
                items: [
                    { q: "Potrebujem technické zručnosti?", a: "Nie. Ak vieš používať prehliadač, zvládneš to." },
                    { q: "Čo si mám priniesť?", a: "Laptop. Internet. To je všetko." },
                    { q: "Prečo €99?", a: "Chceme, aby to bolo dostupné. Najlepší marketing je, keď ľudia povedia kamarátom." },
                    { q: "Čo je na tom iné?", a: "Neučíme zo slajdov. S AI pracujeme denne. Reálna práca, nie teória." },
                    { q: "Môžem si to preplatiť?", a: "Áno. Riadne faktúry. Väčšina firiem schváli €99 bez otázok." },
                    { q: "V akom jazyku?", a: "Primárne slovensky. Anglické materiály. Prispôsobíme sa." },
                    { q: "Čo ak budem chcieť viac?", a: "Dobre. Firemné workshopy pre tímy. Alebo príď znova." }
                ],
                details: {
                    title: "Detaily",
                    items: [
                        { label: "Kde", value: "SORRYWECAN Studio", subvalue: "Pečnianska 7, Bratislava" },
                        { label: "Kedy", value: "26. februára 2026", subvalue: "Streda" },
                        { label: "Čas", value: "17:00 – 20:30", subvalue: "3.5 hodiny" },
                        { label: "Cena", value: "od €99", subvalue: "na osobu" }
                    ]
                }
            },
             cta: {
                 headline: "Idem Do Toho.",
                 subline: "40 miest. Prvá session 26. februára.",
                 button: "Idem Do Toho",
                 note: "Chceš toto pre svoj tím?",
                 corporate: "Firemný Workshop"
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
                        className="text-lg md:text-xl text-black/40 mt-4"
                    >
                        {t.hero.subline}
                    </motion.p>

                    <div className="mb-10" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl md:text-7xl font-bold">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <TheShiftBookButton>
                                {t.hero.cta}
                            </TheShiftBookButton>
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest font-code-brand">
                                <span className="text-[#0047BB]">{t.hero.date}</span>
                                <span className="text-black/30">|</span>
                                <SeatCounter variant="hero" lang={lang} />
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-12 border-b border-black/10">
                <div className="max-w-5xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-xl md:text-2xl font-bold text-black/70 mb-12"
                    >
                        {t.stats.headline}
                    </motion.p>
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
                                className="p-6 border border-black/[0.06] bg-black/[0.03]"
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
                    <div className="mb-12 text-center">
                        <h2 className="font-bold text-3xl md:text-4xl">
                            {t.session.title}
                        </h2>
                        <p className="text-lg text-[#0047BB] mt-2">{t.session.subtitle}</p>
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
                                    i === 0 
                                        ? "border-[#0047BB]/30 bg-black/[0.03]" 
                                        : "border-black/[0.06] hover:border-[#0047BB]/20"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-20 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB] font-code-brand">{part.num}</span>
                                    <span className="text-[10px] text-black/30 font-code-brand">{part.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-2">{part.title}</h4>
                                    <p className="text-sm text-black/60 leading-relaxed">{part.desc}</p>
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
                    <h2 className="font-bold text-3xl md:text-4xl text-center mb-12">
                        {t.outcome.title}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-5 border border-black/10">
                                <h4 className="text-lg font-bold text-[#0047BB] mb-2">{item.title}</h4>
                                <p className="text-sm text-black/50">{item.desc}</p>
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
                                 {card.image && (
                                     <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto border-2 border-white/20">
                                         <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                                     </div>
                                 )}
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-black/[0.02] border border-black/[0.06]">
                        {t.faq.details.items.map((item: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 font-code-brand">{item.label}</p>
                                <p className="text-base font-medium">{item.value}</p>
                                <p className="text-sm text-black/50">{item.subvalue}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="font-bold text-5xl md:text-6xl mb-4">{t.cta.headline}</h2>
                    <p className="text-lg text-white/50 mb-4">{t.cta.subline}</p>
                    <SeatCounter variant="default" lang={lang} className="max-w-xs mx-auto mb-8" />
                    <TheShiftBookButton variant="secondary">
                        {t.cta.button}
                    </TheShiftBookButton>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm text-white/40">{t.cta.note}</span>
                        <Link 
                            href="/corporate" 
                            className="text-sm font-bold text-[#0047BB] hover:text-white transition-colors font-code-brand"
                        >
                            {t.cta.corporate} →
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
