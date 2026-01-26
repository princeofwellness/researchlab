"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
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

export default function CorporatePage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                label: "Corporate Workshop",
                subtitle: "Vision / Direction / Integration",
                title: {
                    line1: "One Session.",
                    line2: "New Operating System."
                },
                description: "We work through challenges together. Not a presentation — a facilitated session that turns problems into working frameworks.",
                price: "6,900",
                duration: "4-5 hours",
                capacity: "10-15 people",
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
            framework: {
                title: "Three Phases. One Transformation.",
                description: "We facilitate. You create. Challenges become frameworks.",
                phases: [
                    { 
                        num: "01", 
                        title: "Vision", 
                        time: "60 min",
                        desc: "Ignites possibility. Where we are, where it's going, how to see what others don't. Taste over templates.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Direction", 
                        time: "60 min",
                        desc: "Strategic clarity. Where AI creates leverage, where it creates noise. Decision rules you can use.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Integration", 
                        time: "90 min",
                        desc: "Makes it real. Design the workflow, build the system, ship something that runs.",
                        lead: "Ján"
                    }
                ],
                closing: {
                    title: "Commitment",
                    time: "50 min",
                    desc: "Lock it in. Roles, standards, next steps. The change sticks.",
                    lead: "All"
                }
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
                        company: "CEO/Founder SORRYWECAN", 
                        brings: "Award-winning creative studio. Ignites possibility and sets taste — helping teams see what others don't."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "The Architect", 
                        company: "CPO/Co-founder SUDOLABS", 
                        brings: "Built apps for US clients, €5M+ revenue. Makes it real — workflows and systems that run."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "The Navigator", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Strategic clarity expert. Decision frameworks for what AI can solve and what to prioritize."
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
                price: "6,900",
                currency: "EUR",
                features: [
                    "4-5 hour focused session",
                    "10-15 participants",
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
                label: "Firemný Workshop",
                subtitle: "Vízia / Smer / Integrácia",
                title: {
                    line1: "Jedna Session.",
                    line2: "Nový Operačný Systém."
                },
                description: "Pracujeme na VAŠICH výzvach spolu. Nie prezentácia — facilitovaná session, ktorá premení vaše problémy na fungujúce frameworky.",
                price: "6 900",
                duration: "4-5 hodín",
                capacity: "10-15 ľudí",
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
            framework: {
                title: "Tri Fázy. Jedna Transformácia.",
                description: "My facilitujeme. Vy tvoríte. Výzvy sa stávajú frameworkami.",
                phases: [
                    { 
                        num: "01", 
                        title: "Vízia", 
                        time: "60 min",
                        desc: "Zapaľuje možnosti. Kde sme, kam to smeruje, ako vidieť to, čo ostatní nevidia. Vkus nad šablónami.",
                        lead: "Roland"
                    },
                    { 
                        num: "02", 
                        title: "Smer", 
                        time: "60 min",
                        desc: "Strategická jasnosť. Kde AI vytvára páku, kde vytvára šum. Rozhodovacie pravidlá, ktoré použijete.",
                        lead: "Roman"
                    },
                    { 
                        num: "03", 
                        title: "Integrácia", 
                        time: "90 min",
                        desc: "Robí to skutočným. Navrhnite workflow, postavte systém, dodajte niečo, čo beží.",
                        lead: "Ján"
                    }
                ],
                closing: {
                    title: "Záväzok",
                    time: "50 min",
                    desc: "Uzamknite to. Roly, štandardy, ďalšie kroky. Zmena zostane.",
                    lead: "Všetci"
                }
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
                        company: "CEO/Zakladateľ SORRYWECAN", 
                        brings: "Oceňované kreatívne štúdio. Zapaľuje možnosti a nastavuje vkus — pomáha tímom vidieť to, čo ostatní nevidia."
                    },
                    { 
                        name: "Ján Koscelanský", 
                        role: "Architekt", 
                        company: "CPO/Spoluzakladateľ SUDOLABS", 
                        brings: "Budoval appky pre US klientov, €5M+ revenue. Robí to skutočným — workflow a systémy, ktoré bežia."
                    },
                    { 
                        name: "Roman Pii Wagner", 
                        role: "Navigátor", 
                        company: "TRANSFORMATIONAL DESIGN", 
                        brings: "Expert na strategickú jasnosť. Rozhodovacie rámce pre to, čo AI vie vyriešiť a čo prioritizovať."
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
                price: "6 900",
                currency: "EUR",
                features: [
                    "4-5 hodinová fokusovaná session",
                    "10-15 účastníkov",
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

            <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-20" />
                <div className="max-w-5xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">
                            {t.hero.label}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter mb-8"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-inter leading-relaxed text-black/60 max-w-2xl mb-10"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl font-serif-instrument">{t.hero.price}</span>
                            <span className="text-2xl opacity-40">EUR</span>
                            <span className="text-sm text-black/40 ml-2">/ {t.hero.duration}</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=Corporate Workshop - Discovery Call"
                                className="bg-[#0047BB] text-white px-8 py-4 font-inter font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-black transition-all"
                            >
                                {t.hero.cta}
                            </a>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{t.hero.capacity}</span>
                        </div>
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
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-serif-instrument text-4xl md:text-5xl italic mb-4">
                            {t.framework.title}
                        </h2>
                        <p className="text-lg text-black/60">{t.framework.description}</p>
                    </div>
                    <div className="space-y-4">
                        {t.framework.phases.map((phase: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "flex flex-col md:flex-row gap-6 p-6 md:p-8 border transition-all",
                                    i === 2 
                                        ? "border-[#0047BB] bg-[#0047BB]/5" 
                                        : "border-black/10 bg-white hover:border-[#0047BB]/30"
                                )}
                            >
                                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-24 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">{phase.num}</span>
                                    <span className="text-[10px] text-black/30">{phase.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                                    <p className="text-black/60 leading-relaxed">{phase.desc}</p>
                                </div>
                                <div className="md:w-24 shrink-0 text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{phase.lead}</span>
                                </div>
                            </div>
                        ))}
                        
                        <div className="mt-8 p-6 md:p-8 bg-black text-white">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-24 shrink-0">
                                    <span className="text-[10px] font-bold text-[#0047BB]">CLOSE</span>
                                    <span className="text-[10px] text-white/30">{t.framework.closing.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2">{t.framework.closing.title}</h4>
                                    <p className="text-white/60 leading-relaxed">{t.framework.closing.desc}</p>
                                </div>
                                <div className="md:w-24 shrink-0 text-right">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.framework.closing.lead}</span>
                                </div>
                            </div>
                        </div>
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
                        href="mailto:hello@sorrywecan.com?subject=Corporate Workshop - Discovery Call"
                        className="bg-white text-[#0047BB] px-12 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-block"
                    >
                        {t.cta.button}
                    </a>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <span className="text-sm opacity-50">{lang === 'en' ? "Want to try first?" : "Chceš najprv vyskúšať?"}</span>
                        <Link 
                            href="/public" 
                            className="text-sm font-bold underline underline-offset-4 hover:no-underline"
                        >
                            {lang === 'en' ? "Public Session €99" : "Verejná Session €99"}
                        </Link>
                    </div>
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
