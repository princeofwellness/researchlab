"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

function Section({ id, children, className, dark }: any) {
    return (
        <section id={id} className={cn(
            "py-24 md:py-32 border-b last:border-0 relative",
            dark ? "bg-black text-white border-white/10" : "border-black/10",
            className
        )}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-6 md:px-12"
            >
                {children}
            </motion.div>
        </section>
    )
}

function PillarVisual({ pillars, lang }: { pillars: any[], lang: string }) {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {pillars.map((pillar: any, i: number) => (
                    <div 
                        key={i} 
                        className={cn(
                            "p-6 border text-center space-y-4 transition-all hover:border-[#0047BB]",
                            i === 2 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white"
                        )}
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] text-[#0047BB]">[0{i + 1}]</span>
                        <h4 className="text-lg font-bold">{pillar.title}</h4>
                        <p className="text-xs text-black/50 leading-relaxed">{pillar.desc}</p>
                    </div>
                ))}
            </div>
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 -z-10 items-center justify-between px-[10%]">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-1 h-[1px] bg-black/10 mx-2" />
                ))}
            </div>
        </div>
    )
}

function FounderCard({ name, role, company, brings }: any) {
    return (
        <div className="p-6 border border-white/20 bg-white/5 space-y-4 hover:bg-white/10 transition-all">
            <div>
                <h4 className="text-xl font-serif-instrument italic">{name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-1">{role}</p>
                <p className="text-[10px] text-white/40">{company}</p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{brings}</p>
        </div>
    )
}

export default function IgnitionPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                subtitle: "Navigation / Thinking / Tools / Automation / Imagination",
                title: {
                    line1: "One Session.",
                    line2: "New Operating System."
                },
                description: "A focused half-day that rewires how your team works with AI. Not a lecture — a conversation. We listen, we adapt, we transform.",
                cta: "Book Discovery Call"
            },
            problem: {
                headline: "Everyone has AI. Few know how to use it.",
                points: [
                    "Your team prompts without strategy",
                    "Output looks like everyone else's",
                    "Tools multiply, clarity doesn't",
                    "Speed went up, quality went sideways"
                ]
            },
            pillars: {
                title: "Five Pillars. One Transformation.",
                items: [
                    { title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                    { title: "Thinking", desc: "How to frame problems. Mental models that work." },
                    { title: "Tools", desc: "What to use. Practical stack for your reality." },
                    { title: "Automation", desc: "What to build. Workflows that run themselves." },
                    { title: "Imagination", desc: "What's possible. Expanding the boundaries." }
                ]
            },
            session: {
                title: "The Session",
                headline: "4-5 Hours. Interactive. Adaptive.",
                description: "We give, but we also listen — your fears, your blockers, your reality. The session adapts to what's actually in the room.",
                parts: [
                    { num: "01", title: "Opening", time: "45 min", desc: "Live demo with your actual work. Then we listen: what's holding you back?" },
                    { num: "02", title: "Framework", time: "75 min", desc: "How to think with AI. We teach, you ask, we adjust." },
                    { num: "03", title: "Hands-On", time: "120 min", desc: "Tools + automation on YOUR tasks. Personalized guidance." },
                    { num: "04", title: "Commitment", time: "30 min", desc: "What you'll actually do in 30 days. Concrete. Accountable." }
                ]
            },
            who: {
                title: "Built For",
                industries: ["Creative Studios", "Production Houses", "Marketing Agencies", "Tech Companies", "Telco", "Forward-Thinking Teams"],
                not: {
                    title: "This is NOT for",
                    items: [
                        "Teams looking for a quick prompt cheat sheet",
                        "Organizations not ready to change how they work",
                        "Anyone expecting magic without effort"
                    ]
                }
            },
            founders: {
                title: "Three Minds",
                description: "Not consultants. Practitioners who built what they teach.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "The Creative", 
                        company: "SORRYWECAN", 
                        brings: "Imagination, visual thinking, possibility. How to see what others can't."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "The Architect", 
                        company: "SUDOLABS", 
                        brings: "Systems, automation, scale. How to build things that run themselves."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Clarity, strategy, direction. How to navigate complexity."
                    }
                ]
            },
            proof: {
                title: "Real Results",
                stats: [
                    { value: "4+", label: "hours saved per person weekly" },
                    { value: "30", label: "days to measurable change" },
                    { value: "94%", label: "would recommend to peers" }
                ],
                quote: {
                    text: "We thought we knew AI. We didn't know how to think with it.",
                    author: "Head of Creative, Major Agency"
                }
            },
            outcome: {
                title: "You Leave With",
                items: [
                    { title: "Personal AI Stack", desc: "Configured. Working. Ready for Monday." },
                    { title: "Automation Blueprints", desc: "3+ workflows for your actual processes." },
                    { title: "Thinking Frameworks", desc: "Mental models for any problem." },
                    { title: "30-Day Action Plan", desc: "Concrete next steps. One follow-up call included." }
                ]
            },
            pricing: {
                title: "Investment",
                price: "10,000",
                currency: "EUR",
                features: [
                    "4-5 hour focused session",
                    "Up to 20 participants",
                    "All three expert facilitators",
                    "Personal AI stack setup",
                    "30-day action plans",
                    "1 follow-up group call",
                    "Digital toolkit access"
                ],
                note: "Excluding VAT. In-person only. We come to you or you come to us.",
                guarantee: "Not the right fit? We'll know in the first 30 minutes. No hard feelings, no invoice.",
                cta: "Book Discovery Call"
            },
            faq: {
                title: "Questions",
                items: [
                    { 
                        q: "Is this just prompt training?", 
                        a: "No. Prompting is maybe 15%. This is about thinking, tools, automation, and imagination combined. We teach you to work with AI, not just talk to it." 
                    },
                    { 
                        q: "Our industry is specific. Will it apply?", 
                        a: "Yes. The principles are universal. We've worked across creative, tech, finance, telco. Application differs, fundamentals don't." 
                    },
                    { 
                        q: "Why half a day, not longer?", 
                        a: "Focus beats duration. People can't stay sharp for 8 hours. A tight session creates more change than a full day of diminishing attention." 
                    },
                    { 
                        q: "What's the ROI?", 
                        a: "Conservative: 4+ hours saved per person weekly. For a 15-person team, that's €100k+ annually. Plus better decisions, faster execution." 
                    }
                ]
            },
            cta: {
                headline: "Ready?",
                description: "Limited to 4-6 sessions per month. 20-minute call. No commitment.",
                button: "Book Discovery Call"
            }
        },
        sk: {
            hero: {
                subtitle: "Navigácia / Myslenie / Nástroje / Automatizácia / Imaginácia",
                title: {
                    line1: "Jedna Session.",
                    line2: "Nový Operačný Systém."
                },
                description: "Fokusované pol dňa, ktoré zmení, ako váš tím pracuje s AI. Nie prednáška — konverzácia. Počúvame, prispôsobujeme sa, transformujeme.",
                cta: "Rezervovať Discovery Call"
            },
            problem: {
                headline: "Každý má AI. Málokto vie, ako ju používať.",
                points: [
                    "Váš tím promptuje bez stratégie",
                    "Výstup vyzerá ako u všetkých ostatných",
                    "Nástroje pribúdajú, jasnosť nie",
                    "Rýchlosť stúpla, kvalita stagnuje"
                ]
            },
            pillars: {
                title: "Päť Pilierov. Jedna Transformácia.",
                items: [
                    { title: "Navigácia", desc: "Kam ísť. Strategická jasnosť v šume." },
                    { title: "Myslenie", desc: "Ako formulovať problémy. Mentálne modely, ktoré fungujú." },
                    { title: "Nástroje", desc: "Čo použiť. Praktický stack pre vašu realitu." },
                    { title: "Automatizácia", desc: "Čo postaviť. Workflow, ktoré bežia samy." },
                    { title: "Imaginácia", desc: "Čo je možné. Posúvanie hraníc." }
                ]
            },
            session: {
                title: "Session",
                headline: "4-5 Hodín. Interaktívne. Adaptívne.",
                description: "Dávame, ale aj počúvame — vaše obavy, bloky, realitu. Session sa prispôsobuje tomu, čo je v miestnosti.",
                parts: [
                    { num: "01", title: "Otvorenie", time: "45 min", desc: "Live demo s vašou skutočnou prácou. Potom počúvame: čo vás brzdí?" },
                    { num: "02", title: "Framework", time: "75 min", desc: "Ako myslieť s AI. Učíme, pýtate sa, prispôsobujeme." },
                    { num: "03", title: "Hands-On", time: "120 min", desc: "Nástroje + automatizácia na VAŠICH úlohách. Personalizované vedenie." },
                    { num: "04", title: "Záväzok", time: "30 min", desc: "Čo skutočne urobíte za 30 dní. Konkrétne. Zodpovedné." }
                ]
            },
            who: {
                title: "Vytvorené Pre",
                industries: ["Kreatívne Štúdiá", "Produkčné Spoločnosti", "Marketingové Agentúry", "Tech Firmy", "Telco", "Tímy s Víziou"],
                not: {
                    title: "Toto NIE JE pre",
                    items: [
                        "Tímy hľadajúce rýchly prompt cheat sheet",
                        "Organizácie nepripravené zmeniť, ako pracujú",
                        "Kohokoľvek, kto očakáva mágiu bez úsilia"
                    ]
                }
            },
            founders: {
                title: "Tri Mysle",
                description: "Nie konzultanti. Praktici, ktorí postavili to, čo učia.",
                cards: [
                    { 
                        name: "Roland Vraník", 
                        role: "Kreatívec", 
                        company: "SORRYWECAN", 
                        brings: "Imaginácia, vizuálne myslenie, možnosti. Ako vidieť, čo ostatní nevidia."
                    },
                    { 
                        name: "Ján Koščelanský", 
                        role: "Architekt", 
                        company: "SUDOLABS", 
                        brings: "Systémy, automatizácia, škála. Ako budovať veci, ktoré bežia samy."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Jasnosť, stratégia, smer. Ako navigovať komplexitu."
                    }
                ]
            },
            proof: {
                title: "Reálne Výsledky",
                stats: [
                    { value: "4+", label: "hodiny ušetrené na osobu týždenne" },
                    { value: "30", label: "dní do merateľnej zmeny" },
                    { value: "94%", label: "by odporučilo kolegom" }
                ],
                quote: {
                    text: "Mysleli sme, že poznáme AI. Nevedeli sme, ako s ňou myslieť.",
                    author: "Šéf Kreatívy, Veľká Agentúra"
                }
            },
            outcome: {
                title: "Odchádzate S",
                items: [
                    { title: "Osobný AI Stack", desc: "Nakonfigurovaný. Fungujúci. Pripravený na pondelok." },
                    { title: "Blueprinty Automatizácie", desc: "3+ workflow pre vaše skutočné procesy." },
                    { title: "Frameworky Myslenia", desc: "Mentálne modely pre akýkoľvek problém." },
                    { title: "30-Dňový Akčný Plán", desc: "Konkrétne ďalšie kroky. Follow-up hovor zahrnutý." }
                ]
            },
            pricing: {
                title: "Investícia",
                price: "10 000",
                currency: "EUR",
                features: [
                    "4-5 hodinová fokusovaná session",
                    "Do 20 účastníkov",
                    "Všetci traja expert facilitátori",
                    "Nastavenie osobného AI stacku",
                    "30-dňové akčné plány",
                    "1 follow-up skupinový hovor",
                    "Prístup k digitálnemu toolkitu"
                ],
                note: "Bez DPH. Len osobne. Prídeme k vám alebo vy k nám.",
                guarantee: "Nie je to pre vás? Zistíme to do 30 minút. Bez problémov, bez faktúry.",
                cta: "Rezervovať Discovery Call"
            },
            faq: {
                title: "Otázky",
                items: [
                    { 
                        q: "Je toto len prompt tréning?", 
                        a: "Nie. Promptovanie je možno 15%. Toto je o myslení, nástrojoch, automatizácii a imaginácii. Učíme vás pracovať s AI, nie sa len s ňou rozprávať." 
                    },
                    { 
                        q: "Naše odvetvie je špecifické. Bude to aplikovateľné?", 
                        a: "Áno. Princípy sú univerzálne. Pracovali sme naprieč kreatívou, tech, financiami, telco. Aplikácia sa líši, fundamenty nie." 
                    },
                    { 
                        q: "Prečo pol dňa, nie dlhšie?", 
                        a: "Fokus prekonáva trvanie. Ľudia nedokážu zostať ostrí 8 hodín. Tesná session vytvorí viac zmeny ako celý deň klesajúcej pozornosti." 
                    },
                    { 
                        q: "Aké je ROI?", 
                        a: "Konzervatívne: 4+ hodiny ušetrené na osobu týždenne. Pre 15-členný tím je to €100k+ ročne. Plus lepšie rozhodnutia, rýchlejšia exekúcia." 
                    }
                ]
            },
            cta: {
                headline: "Pripravení?",
                description: "Limitované na 4-6 sessions mesačne. 20-minútový hovor. Žiadny záväzok.",
                button: "Rezervovať Discovery Call"
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
                    {lang === 'en' ? 'SK' : 'EN'}
                </button>
            } />

            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#0047BB]">
                            {t.hero.subtitle}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[14vw] md:text-[10vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                    >
                        <p className="text-lg md:text-xl font-inter leading-relaxed text-black/60 max-w-lg">
                            {t.hero.description}
                        </p>

                        <a 
                            href="mailto:hello@sorrywecan.com?subject=Ignition - Discovery Call"
                            className="bg-[#0047BB] text-white px-8 py-4 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all w-fit"
                        >
                            {t.hero.cta}
                        </a>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <h2 className="font-serif-instrument text-3xl md:text-4xl italic leading-tight">
                        {t.problem.headline}
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {t.problem.points.map((point: string, i: number) => (
                            <div key={i} className="p-4 border border-black/10 bg-white">
                                <span className="text-sm text-black/70">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="space-y-12">
                    <h2 className="font-serif-instrument text-3xl md:text-4xl italic text-center">
                        {t.pillars.title}
                    </h2>
                    <PillarVisual pillars={t.pillars.items} lang={lang} />
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic leading-tight">
                            {t.session.headline}
                        </h2>
                        <p className="text-lg text-black/60 leading-relaxed">
                            {t.session.description}
                        </p>
                    </div>
                    <div className="space-y-4">
                        {t.session.parts.map((part: any, i: number) => (
                            <div key={i} className="flex gap-6 p-4 border border-black/10 bg-white hover:border-[#0047BB]/30 transition-all">
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] font-bold text-[#0047BB]">{part.num}</span>
                                    <span className="text-[9px] text-black/30 mt-1">{part.time}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">{part.title}</h4>
                                    <p className="text-sm text-black/50">{part.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-6">{t.who.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {t.who.industries.map((industry: string, i: number) => (
                                <span key={i} className="px-4 py-2 border border-black/10 text-sm bg-white">
                                    {industry}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 border border-black/20 bg-black/5">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600 mb-4">{t.who.not.title}</h3>
                        <div className="space-y-3">
                            {t.who.not.items.map((item: string, i: number) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-red-500 text-xs font-bold mt-0.5">[X]</span>
                                    <span className="text-sm text-black/60">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section dark>
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-4">{t.founders.title}</h2>
                        <p className="text-white/50">{t.founders.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {t.founders.cards.map((card: any, i: number) => (
                            <FounderCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="space-y-12">
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic text-center">{t.proof.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.proof.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center p-8 border border-black/10 bg-white">
                                <span className="text-5xl md:text-6xl font-serif-instrument text-[#0047BB]">{stat.value}</span>
                                <p className="text-sm text-black/50 mt-3">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-2xl mx-auto p-8 border-l-4 border-[#0047BB] bg-[#0047BB]/5">
                        <p className="text-xl font-serif-instrument italic text-black/80 mb-4">"{t.proof.quote.text}"</p>
                        <p className="text-sm text-black/40">— {t.proof.quote.author}</p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="space-y-12">
                    <h2 className="font-serif-instrument text-4xl md:text-5xl italic text-center">{t.outcome.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {t.outcome.items.map((item: any, i: number) => (
                            <div key={i} className="p-6 border border-black bg-white space-y-3">
                                <span className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs">
                                    {i + 1}
                                </span>
                                <h4 className="font-bold">{item.title}</h4>
                                <p className="text-sm text-black/50">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="max-w-2xl mx-auto">
                    <div className="p-10 border-2 border-[#0047BB] bg-[#0047BB]/5 text-center space-y-8">
                        <h2 className="font-serif-instrument text-4xl italic">{t.pricing.title}</h2>
                        <div>
                            <span className="text-6xl font-serif-instrument">{t.pricing.price}</span>
                            <span className="text-2xl ml-2 opacity-40">{t.pricing.currency}</span>
                        </div>
                        <div className="space-y-3 text-left max-w-sm mx-auto">
                            {t.pricing.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] shrink-0" />
                                    <span className="text-sm text-black/70">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-black/40">{t.pricing.note}</p>
                        <div className="border-t border-[#0047BB]/20 pt-6 mt-6">
                            <p className="text-sm text-[#0047BB] font-medium">{t.pricing.guarantee}</p>
                        </div>
                        <a 
                            href="mailto:hello@sorrywecan.com?subject=Ignition - Booking Inquiry"
                            className="bg-[#0047BB] text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-black transition-all inline-block"
                        >
                            {t.pricing.cta}
                        </a>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="max-w-2xl mx-auto space-y-4">
                    <h2 className="font-serif-instrument text-3xl italic text-center mb-8">{t.faq.title}</h2>
                    {t.faq.items.map((item: any, i: number) => (
                        <div key={i} className="border border-black/10 bg-white">
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-black/5 transition-colors"
                            >
                                <span className="font-medium pr-4">{item.q}</span>
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
                                        <p className="px-6 pb-5 text-sm text-black/60 leading-relaxed">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Section>

            <section className="py-24 bg-[#0047BB] text-white text-center">
                <div className="max-w-xl mx-auto px-6">
                    <h2 className="font-serif-instrument text-6xl md:text-7xl italic mb-6">{t.cta.headline}</h2>
                    <p className="text-lg opacity-70 mb-10">{t.cta.description}</p>
                    <a
                        href="mailto:hello@sorrywecan.com?subject=Ignition - Discovery Call"
                        className="bg-white text-[#0047BB] px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                    >
                        {t.cta.button}
                    </a>
                </div>
            </section>

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
