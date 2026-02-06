"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TopNav } from "@/components/navigation/top-nav"

// Mission Collapsible Component
function MissionCollapsible({ content }: { content: any }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
            {/* Key Quote - Always Visible */}
            <div className="text-center mb-12">
                <div className="text-2xl md:text-3xl font-serif-instrument italic leading-relaxed text-black/80 space-y-4">
                    {content.quote.split('\n').map((line: string, i: number) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>

            {/* Expandable Button */}
            <div className="flex justify-center mb-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex items-center gap-3 px-6 py-3 border border-black/20 hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all duration-300"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] font-inter">
                        {content.title}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#0047BB] text-[10px]"
                    >
                        {isOpen ? "CLOSE" : "OPEN"}
                    </motion.div>
                </button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-black/10 pt-12 space-y-6">
                            {content.expanded.map((paragraph: string, i: number) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className={cn(
                                        "font-inter leading-relaxed max-w-3xl mx-auto",
                                        paragraph.length < 50 ? "text-xl md:text-2xl font-semibold text-center text-[#0047BB]" : "text-base text-black/70"
                                    )}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function SorrywecanResearchLab() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const content = {
        en: {
            nav: {
                bookCall: "Book Discovery Call",
                tiers: "Exploration Tiers",
                journey: "Our Trajectory"
            },
            hero: {
                subtitle: "SORRYWECAN // HUMAN EDGE LAB",
                title: {
                    line1: "AI is the Engine.",
                    line2: "You are the Driver.",
                    line3: "Take Control."
                },
                trustedBy: "Trusted by",
                description: "One session can change how your team thinks. We help leaders restore taste, judgment, and creative confidence in an age of automation.",
                availability: "Limited availability. Accepting new clients monthly.",
                stats: {
                    valuation: "Entity Valuation",
                    partners: "Strategic Partners",
                    awards: "Global Recognition",
                    team: "Cognitive Power"
                }
            },
            problem: {
                title: "The Problem",
                headline: "The Sea of Sameness.",
                description: "Everyone has AI now. Everyone sounds the same. If your output could be anyone's output, you have no brand. Worse: your team is forgetting how to think. The machine does it for them.",
                stats: {
                    guessing: "of jobs worldwide affected by AI. 40% of all work is changing.",
                    breach: "of US workers now use AI daily. Most without proper training.",
                    skills: "productivity gains possible. Companies miss it due to talent gaps.",
                    direction: "of companies using AI replaced workers. The shift is here."
                },
                comparison: {
                    without: {
                        title: "The Passive Operator",
                        items: ["Drowning in sameness", "Generic brand voice", "Declining judgment", "Hidden liability risks", "Managed by algorithms"]
                    },
                    with: {
                        title: "The Human Edge",
                        items: ["Curated excellence", "Distinctive taste", "Strategic agency", "Critical auditing", "Human-led scale"]
                    }
                },
                quote: "AI multiplies judgment. It doesn't replace it.\nWe restore the taste that makes you premium."
            },
            mission: {
                title: "Why This Matters",
                quote: "In exponential times, clarity matters more than speed.\nTaste matters more than volume.\nJudgment matters more than automation.",
                expanded: [
                    "We are in the middle of a seismic cognitive shift.",
                    "AI is not just a tool. It is a transformation of how we think. The choice is yours: lead with judgment or follow the machine.",
                    "Most focus on prompts and hacks. We focus on navigation.",
                    "Clarity matters more than speed. Taste matters more than volume. Judgment is permanent.",
                    "One session changes how your team sees. You leave with tools and restored confidence.",
                    "Serve better. Build quality. Shape the future instead of being shaped by it."
                ]
            },
            experience: {
                title: "The Experience",
                headline: "4-5 Hours. Interactive. Adaptive.",
                description: "We give, but we also listen — your fears, your blockers, your reality. Every session adapts to what's actually in the room.",
                pillars: {
                    title: "Five Pillars of Transformation",
                    items: [
                        { title: "Navigation", desc: "Where to go. Strategic clarity in the noise." },
                        { title: "Thinking", desc: "How to frame problems. Mental models that work." },
                        { title: "Tools", desc: "What to use. Practical stack for your reality." },
                        { title: "Automation", desc: "What to build. Workflows that run themselves." },
                        { title: "Imagination", desc: "What's possible. Expanding the boundaries." }
                    ]
                },
                session: {
                    title: "What Happens",
                    parts: [
                        { num: "01", title: "Opening", time: "45 min", desc: "Live demo with your actual work. Then we listen." },
                        { num: "02", title: "Framework", time: "75 min", desc: "How to think with AI. We teach, you ask, we adjust." },
                        { num: "03", title: "Hands-On", time: "120 min", desc: "Tools + automation on YOUR tasks." },
                        { num: "04", title: "Commitment", time: "30 min", desc: "Your 30-day action plan. Concrete. Accountable." }
                    ]
                },
                outcomes: {
                    title: "You Leave With",
                    items: [
                        { title: "Personal AI Stack", desc: "Configured. Working. Ready for Monday." },
                        { title: "Automation Blueprints", desc: "3+ workflows for your actual processes." },
                        { title: "Thinking Frameworks", desc: "Mental models for any problem." },
                        { title: "30-Day Action Plan", desc: "Concrete next steps. Follow-up call included." }
                    ]
                }
            },
            approach: {
                title: "The Solution",
                headline: "High-Fidelity Human. High-Velocity AI.",
                points: [
                    { title: "The Anti-Slop Protocol", desc: "Train your eye. Spot synthetic work instantly. Stop prompting. Start curating. One workshop changes how your team sees." },
                    { title: "Cognitive Resilience", desc: "Keep humans in the loop. Build judgment into every workflow. Install a check engine light for decisions. Reduce risk, increase clarity." },
                    { title: "Strategic Navigation", desc: "Master the flow. AI does the heavy lifting. You do the heavy thinking. Productivity without losing your voice." }
                ],
                collective: {
                    title: "Collective Taste",
                    desc: "Efficiency is a commodity. Taste is not. We restore what makes you different. Cross-industry expertise from creative, product, and philosophy.",
                    tags: ["Curation", "Creative Confidence"]
                },
                expert: {
                    title: "Expert Judgment",
                    desc: "Led by practitioners, not consultants. We bring skepticism, ethics, and depth. Real-world experience from banking, creative, and tech.",
                    tags: ["Risk Auditing", "Cross-Industry Mastery"]
                }
            },
            team: {
                title: "The Proof",
                headline: "Experts, not consultants.",
                subheadline: "Creative. Tech. Finance. Strategy. One curated session. Multiple expert perspectives tailored to your reality.",
                trustedBy: "Trusted by",
                experts: [
                    {
                        company: "SORRYWECAN",
                        name: "Roland Vraník",
                        role: "Founder & Creative Director",
                        bio: "Art-tech studio mixing film, music, and emerging tech into future-looking visuals. AI-driven production with craft and emotion. High-end shows from Bratislava to the world.",
                        tags: ["Cannes Lions", "NY Festivals", "Effie Awards", "Golden Drum", "Kreatívny Režisér", "Technológ", "Vizionár"]
                    },
                    {
                        company: "SUDOLABS // CO-FOUNDER & CPO",
                        name: "Ján Koscelanský",
                        role: "Product Visionary & Strategic Architect",
                        bio: "Product leader driving discovery, UX, and product-market fit. Ex-Accenture digital transformation, ex-OLX scaling. €5M+ revenue architect.",
                        tags: ["$1.5B Valuation", "€5M+ Revenue", "Product-Market Fit", "Digital Transformation"]
                    },
                    {
                        company: "TRANSFORMATIONAL DESIGN",
                        name: "Roman Pii Wagner",
                        role: "Transformational Designer & Zen Buddhist",
                        bio: "Decades bridging business transformation with Zen practice. Strategic design meets mindful awareness. Guiding profound organizational change with clarity.",
                        tags: ["Design Mastery", "Zen Practice", "Business Transformation", "Contemplative Leadership"]
                    }
                ]
            },
            tiers: {
                title: "Select Your Intervention",
                headline: "From Audit to Transformation.",
                swipeHint: "Swipe to find your edge",
                vat: "+ VAT",
                book: "Book Intervention",
                call: "Call",
                priority: "Most Critical",
                items: [
                    {
                        name: "The Risk Audit",
                        duration: "2-3 Hours, Half Day",
                        features: [
                            "Brand safety & AI risk audit",
                            "Passive operator diagnosis",
                            "Navigation map session",
                            "Digital audit report",
                            "2-3 key leaders"
                        ],
                        ideal: "For teams who suspect they're already drowning in sameness."
                    },
                    {
                        name: "The Taste Sprint",
                        duration: "1 Day Deep Dive",
                        features: [
                            "Everything in Risk Audit",
                            "Anti-Slop Protocol workshop",
                            "From prompter to curator training",
                            "Custom workflow playbook",
                            "Digital toolkit & templates",
                            "10-20 team members"
                        ],
                        ideal: "For creative teams who refuse to sound like everyone else."
                    },
                    {
                        name: "Cognitive Shift",
                        duration: "1-2 Days Intensive",
                        features: [
                            "Everything in Taste Sprint",
                            "Full Human Edge transformation",
                            "Executive judgment training",
                            "Personalized org toolkit",
                            "Premium digital resources",
                            "30-day integration support"
                        ],
                        ideal: "For founders building organizations that think, not just execute."
                    }
                ]
            },
            roi: {
                title: "The Return on Humanity.",
                desc: {
                    prefix: "This isn't about efficiency.",
                    highlight: "It's survival.",
                    suffix: " Differentiate or die. Restore pricing power. Build a moat."
                },
                grid: [
                    { title: "Differentiation", desc: "Escape commoditization. Create what AI cannot. Charge premium rates." },
                    { title: "Resilience", desc: "Teams that think critically. Reduced risk. Increased output quality. Faster decisions." },
                    { title: "Agency", desc: "Employees who architect, not just execute. Higher retention. Lower burnout." }
                ],
                footer: "The market pays for the human edge. Everything else is a race to the bottom."
            },
            faq: {
                title: "Deep Dive",
                items: [
                    { q: "Why taste over tools?", a: "Tools are commodities. Taste is the last differentiator. Can't curate? Can't compete." },
                    { q: "Is this just prompt engineering?", a: "No. Prompting is talking to machines. We teach thinking with machines. Building judgment into workflows." },
                    { q: "Who is this for?", a: "Founders who refuse to sound generic. Leaders who see their teams losing creative edge. Anyone building for the long term." },
                    { q: "What's the ROI?", a: "Risk avoidance. Brand premium. Higher retention. You charge more when you're distinct. Typical clients see 30-40% productivity gains without losing voice." },
                    { q: "Do we still use the tech?", a: "Yes. We're builders. But humans stay in the loop as the final arbiter of quality. AI amplifies. Humans decide." },
                    { q: "Can we customize this?", a: "Always. Every organization has different risks and culture. We tailor the intervention to your specific needs." }
                ]
            },
            cta: {
                headline: {
                    line1: "Stop Guessing.",
                    line2: "Restore Your Edge."
                },
                desc: "In a world of noise, we provide signal. Book a discovery call to audit your team's passive operator risk and map your transformation.",
                button: "Book Your Discovery Call",
                limited: "Limited capacity. We work with select organizations only.",
                urgency: "High demand. Book early to secure your spot."
            },
            footer: {
                location: "EST. 2026 // BRATISLAVA, SLOVAKIA.",
                rights: "© 2026 ALL RIGHTS RESERVED"
            }
        },
        sk: {
            nav: {
                bookCall: "Rezervovať Discovery Call",
                tiers: "Úrovne Intervencie",
                journey: "Trajektória"
            },
            hero: {
                subtitle: "SORRYWECAN // LABORATÓRIUM ĽUDSKEJ PREVAHY",
                title: {
                    line1: "AI je Motor.",
                    line2: "Ty si Vodič.",
                    line3: "Prevezmite Kontrolu."
                },
                trustedBy: "Dôverujú nám",
                description: "Jedno sedenie môže zmeniť, ako váš tím myslí. Pomáhame lídrom obnoviť vkus, úsudok a kreatívnu sebadôveru vo veku automatizácie.",
                availability: "Obmedzená dostupnosť. Prijímame nových klientov mesačne.",
                stats: {
                    valuation: "Hodnota Entít",
                    partners: "Strategickí Partneri",
                    awards: "Svetové Uznanie",
                    team: "Kognitívna Sila"
                }
            },
            problem: {
                title: "Problem",
                headline: "Oceán Priemernosti.",
                description: "Každý má teraz AI. Každý znie rovnako. Ak váš výstup môže byť od kohokoľvek, nemáte značku. Horšie: váš tím zabúda myslieť. Stroj to robí za nich.",
                stats: {
                    guessing: "pracovných pozícií na svete ovplyvnených AI. 40% práce sa mení.",
                    breach: "amerických pracovníkov používa AI denne. Väčšina bez školenia.",
                    skills: "možný nárast produktivity. Firmy ho prehliadajú kvôli talent gap.",
                    direction: "firiem používajúcich AI nahradilo pracovníkov. Zmena je tu."
                },
                comparison: {
                    without: {
                        title: "Pasívny Operátor",
                        items: ["Topiaci sa v priemernosti", "Generický hlas značky", "Klesajúci úsudok", "Skryté riziká zodpovednosti", "Riadení algoritmami"]
                    },
                    with: {
                        title: "Ľudský Náskok",
                        items: ["Kurátorská excelentnosť", "Rozpoznateľný vkus", "Strategická agentnosť", "Kritický audit", "Škálovanie vedené ľuďmi"]
                    }
                },
                quote: "AI násobí úsudok. Nenahradí ho.\nObnovujeme vkus, ktorý vás robí prémiovými."
            },
            mission: {
                title: "Prečo To Robíme",
                quote: "V exponenciálnych časoch je jasnosť dôležitejšia ako rýchlosť.\nVkus dôležitejší ako objem.\nÚsudok dôležitejší ako automatizácia.",
                expanded: [
                    "Sme uprostred seizmického kognitívneho posunu.",
                    "AI nie je len nástroj. Je to transformácia nášho myslenia. Voľba je na vás: viesť s úsudkom alebo slepo nasledovať stroj.",
                    "Väčšina sa sústredí na prompty a triky. My sa sústredíme na navigáciu.",
                    "Jasnosť je dôležitejšia ako rýchlosť. Vkus dôležitejší ako objem. Úsudok je trvalý.",
                    "Jedno sedenie zmení videnie vášho tímu. Odídete s nástrojmi a obnovenou sebadôverou.",
                    "Slúžte lepšie. Tvorte kvalitu. Formujte budúcnosť namiesto toho, aby formovala vás."
                ]
            },
            experience: {
                title: "Zážitok",
                headline: "4-5 Hodín. Interaktívne. Adaptívne.",
                description: "Dávame, ale aj počúvame — vaše obavy, bloky, realitu. Každá session sa prispôsobuje tomu, čo je v miestnosti.",
                pillars: {
                    title: "Päť Pilierov Transformácie",
                    items: [
                        { title: "Navigácia", desc: "Kam ísť. Strategická jasnosť v šume." },
                        { title: "Myslenie", desc: "Ako formulovať problémy. Mentálne modely, ktoré fungujú." },
                        { title: "Nástroje", desc: "Čo použiť. Praktický stack pre vašu realitu." },
                        { title: "Automatizácia", desc: "Čo postaviť. Workflow, ktoré bežia samy." },
                        { title: "Imaginácia", desc: "Čo je možné. Posúvanie hraníc." }
                    ]
                },
                session: {
                    title: "Čo sa Deje",
                    parts: [
                        { num: "01", title: "Otvorenie", time: "45 min", desc: "Live demo s vašou prácou. Potom počúvame." },
                        { num: "02", title: "Framework", time: "75 min", desc: "Ako myslieť s AI. Učíme, pýtate sa, prispôsobujeme." },
                        { num: "03", title: "Hands-On", time: "120 min", desc: "Nástroje + automatizácia na VAŠICH úlohách." },
                        { num: "04", title: "Záväzok", time: "30 min", desc: "Váš 30-dňový plán. Konkrétny. Zodpovedný." }
                    ]
                },
                outcomes: {
                    title: "Odchádzate S",
                    items: [
                        { title: "Osobný AI Stack", desc: "Nakonfigurovaný. Fungujúci. Pripravený na pondelok." },
                        { title: "Blueprinty Automatizácie", desc: "3+ workflow pre vaše procesy." },
                        { title: "Frameworky Myslenia", desc: "Mentálne modely pre akýkoľvek problém." },
                        { title: "30-Dňový Akčný Plán", desc: "Konkrétne kroky. Follow-up hovor zahrnutý." }
                    ]
                }
            },
            approach: {
                title: "Riešenie",
                headline: "Vycibrený Človek. Exponenciálna AI.",
                points: [
                    { title: "Protokol Proti Balastu", desc: "Trénujte oko. Okamžite rozpoznajte syntetickú prácu. Prestaňte promptovať. Začnite kurátorovať. Jeden workshop zmení, ako váš tím vidí." },
                    { title: "Kognitívna Odolnosť", desc: "Držte ľudí v slučke. Zabudujte úsudok do každého workflow. Inštalujte kontrolku motora pre rozhodnutia. Znížte riziko, zvýšte jasnosť." },
                    { title: "Strategická Navigácia", desc: "Ovládnite flow. AI robí ťažkú prácu. Vy robíte ťažké myslenie. Produktivita bez straty hlasu." }
                ],
                collective: {
                    title: "Kolektívny Vkus",
                    desc: "Efektivita je komodita. Vkus nie. Obnovujeme to, čo vás robí odlišnými. Expertíza naprieč odvetviami z kreatívy, produktu a filozofie.",
                    tags: ["Kurátorstvo", "Kreatívna Sebadôvera"]
                },
                expert: {
                    title: "Expertný Úsudok",
                    desc: "Vedené praktikmi, nie konzultantmi. Prinášame skepsu, etiku a hĺbku. Reálna skúsenosť z bankovníctva, kreatívy a technológií.",
                    tags: ["Audit Rizík", "Majstrovstvo Naprieč Odvetviami"]
                }
            },
            team: {
                title: "Dôkaz",
                headline: "Experti, nie konzultanti.",
                subheadline: "Kreatíva. Tech. Financie. Stratégia. Jedno kurátorované sedenie. Viaceré expertné perspektívy prispôsobené vašej realite.",
                trustedBy: "Dôverujú nám",
                experts: [
                    {
                        company: "SORRYWECAN",
                        name: "Roland Vraník",
                        role: "Founder & Creative Director",
                        bio: "Art-tech štúdio miešajúce film, hudbu a emerging tech do vizuálov z budúcnosti. AI produkcia s remeslom a emóciou. High-end show z Bratislavy pre svet.",
                        tags: ["Cannes Lions", "NY Festivals", "Effie Awards", "Golden Drum", "Kreatívny Režisér", "Technológ", "Vizionár"]
                    },
                    {
                        company: "SUDOLABS // CO-FOUNDER & CPO",
                        name: "Ján Koscelanský",
                        role: "Produktový Vizionár & Strategický Architekt",
                        bio: "Produktový leader riešiaci discovery, UX a product-market fit. Ex-Accenture digitálna transformácia, ex-OLX scaling. €5M+ revenue architekt.",
                        tags: ["$1.5B Valuation", "€5M+ Príjmy", "Product-Market Fit", "Digitálna Transformácia"]
                    },
                    {
                        company: "TRANSFORMATIONAL DESIGN",
                        name: "Roman Pii Wagner",
                        role: "Transformačný Dizajnér & Zen Budhista",
                        bio: "Desaťročia prepájania biznis transformácie so Zen praxou. Strategický dizajn stretáva mindful awareness. Vedenie hlbokej organizačnej zmeny s jasnosťou.",
                        tags: ["Design Mastery", "Zen Prax", "Biznis Transformácia", "Kontemplatívne Vedenie"]
                    }
                ]
            },
            tiers: {
                title: "Vyberte si Intervenciu",
                headline: "Od Auditu po Transformáciu.",
                swipeHint: "Potiahnite pre nájdenie vašej výhody",
                vat: "+ DPH",
                book: "Rezervovať Intervenciu",
                call: "Call",
                priority: "Najkritickejšie",
                items: [
                    {
                        name: "Audit Rizík",
                        duration: "2-3 Hodiny, Pol Dňa",
                        features: [
                            "Audit bezpečnosti značky & AI rizík",
                            "Diagnóza pasívneho operátora",
                            "Navigačná mapová session",
                            "Digitálna auditná správa",
                            "2-3 kľúčoví lídri"
                        ],
                        ideal: "Pre tímy, ktoré tušia, že sa už topia v priemernosti."
                    },
                    {
                        name: "Šprint Vkusu",
                        duration: "1 Deň Deep Dive",
                        features: [
                            "Všetko v Audite Rizík",
                            "Workshop Protokolu Proti Balastu",
                            "Tréning z promptera na kurátora",
                            "Personalizovaný workflow playbook",
                            "Digitálny toolkit & šablóny",
                            "10-20 členov tímu"
                        ],
                        ideal: "Pre kreatívne tímy, ktoré odmietajú znieť ako všetci ostatní."
                    },
                    {
                        name: "Kognitívny Posun",
                        duration: "1-2 Dni Intenzívne",
                        features: [
                            "Všetko v Šprinte Vkusu",
                            "Plná transformácia Ľudského Náskoku",
                            "Tréning úsudku pre exekutívu",
                            "Personalizovaný org toolkit",
                            "Prémiové digitálne zdroje",
                            "30-dňová integračná podpora"
                        ],
                        ideal: "Pre zakladateľov budujúcich organizácie, ktoré myslia, nielen vykonávajú."
                    }
                ]
            },
            roi: {
                title: "Návratnosť Humanizmu.",
                desc: {
                    prefix: "Toto nie je o efektivite.",
                    highlight: "Je to o prežití.",
                    suffix: " Odlíšte sa alebo zaniknite. Obnovte cenovú silu. Vybudujte priekopu."
                },
                grid: [
                    { title: "Odlíšenie", desc: "Útek z komoditizácie. Tvorte to, čo AI nedokáže. Účtujte prémiové ceny." },
                    { title: "Odolnosť", desc: "Tímy, ktoré myslia kriticky. Znížené riziko. Zvýšená kvalita výstupu. Rýchlejšie rozhodnutia." },
                    { title: "Agentnosť", desc: "Zamestnanci, ktorí architektujú, nielen vykonávajú. Vyššia retencia. Nižšie vyhorenie." }
                ],
                footer: "Trh platí za ľudský náskok. Všetko ostatné je pretek ku dnu."
            },
            faq: {
                title: "Hĺbkový Audit",
                items: [
                    { q: "Prečo vkus nad nástroje?", a: "Nástroje sú komodita. Vkus je posledný diferenciátor. Neviete kurátorovať? Nemôžete konkurovať." },
                    { q: "Je to len prompt engineering?", a: "Nie. Promptovanie je rozprávanie sa so strojmi. My učíme myslenie so strojmi. Budovanie úsudku do workflowov." },
                    { q: "Pre koho to je?", a: "Zakladatelia, ktorí odmietajú znieť genericky. Lídri, ktorí vidia, ako ich tímy strácajú kreatívny náskok. Ktokoľvek budujúci dlhodobo." },
                    { q: "Aké je ROI?", a: "Vyhnutie sa riziku. Prémiovosť značky. Vyššia retencia. Účtujete viac, keď ste odlišní. Typickí klienti vidia 30-40% nárast produktivity bez straty hlasu." },
                    { q: "Stále používame technológiu?", a: "Áno. Sme stavitelia. Ale ľudia zostávajú v slučke ako finálni arbitri kvality. AI zosilňuje. Ľudia rozhodujú." },
                    { q: "Môžeme to prispôsobiť?", a: "Vždy. Každá organizácia má iné riziká a kultúru. Intervenciu prispôsobíme vašim špecifickým potrebám." }
                ]
            },
            cta: {
                headline: {
                    line1: "Prestaňte Hádať.",
                    line2: "Obnovte Svoju Výhodu."
                },
                desc: "Vo svete šumu poskytujeme signál. Rezervujte si discovery call na audit rizika pasívneho operátora vášho tímu a naplánovanie transformácie.",
                button: "Rezervovať Discovery Call",
                limited: "Obmedzená kapacita. Pracujeme len s vybranými organizáciami.",
                urgency: "Vysoký dopyt. Rezervujte si miesto včas."
            },
            footer: {
                location: "EST. 2026 // BRATISLAVA, SLOVENSKO.",
                rights: "© 2026 VŠETKY PRÁVA VYHRADENÉ"
            }
        }
    }

    const t = content[lang]

    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20 overflow-x-hidden">
            <TopNav customAction={
                <button 
                    onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 hover:bg-black/5 transition-colors"
                >
                    {lang === 'en' ? '🇸🇰 SK' : '🇬🇧 EN'}
                </button>
            } />

            {/* Scroll Progress */}
            <motion.div
                className="fixed top-[64px] left-0 right-0 h-[2px] bg-[#0047BB] origin-left z-50"
                style={{ scaleX }}
            />

            {/* Sticky CTA */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-8 right-8 z-[100] flex items-center"
                    >
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Discovery Call Request&body=Hi, I'm interested in booking a discovery call for the Research Lab.%0D%0A%0D%0ACompany:%0D%0ATeam Size:%0D%0ACurrent Challenge:%0D%0A%0D%0AThank you!"
                            className="bg-[#0047BB] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:scale-105 transition-all"
                        >
                            {t.nav.bookCall} [CALL]
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden border-b border-black">
                <div className="relative z-10 max-w-7xl mx-auto w-full">
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
                        className="font-serif-instrument text-[9vw] md:text-[7.5vw] leading-[0.95] tracking-tighter mb-12 italic"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-black/30 text-[8.5vw] md:text-[7vw]">{t.hero.title.line2}</span> <br />
                        <span className="text-[#0047BB]">{t.hero.title.line3}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end"
                    >
                        <p className="text-xl md:text-2xl font-inter leading-relaxed text-black/70 max-w-xl">
                            {t.hero.trustedBy} <span className="text-black font-bold">Tatra Banka</span>, <span className="text-black font-bold">Samsung</span>, {lang === 'en' ? 'and' : 'a'} <span className="text-black font-bold">Sennheiser</span>. {t.hero.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:hello@sorrywecan.com?subject=Discovery Call Request&body=Hi, I'm interested in booking a discovery call for the Research Lab.%0D%0A%0D%0ACompany:%0D%0ATeam Size:%0D%0ACurrent Challenge:%0D%0A%0D%0AThank you!" className="bg-[#0047BB] text-white px-10 py-5 font-inter font-semibold text-[11px] uppercase tracking-[0.25em] flex items-center gap-3 hover:bg-black transition-all">
                                    {t.nav.bookCall} [CALL]
                                </a>
                            </div>
                            <p className="text-xs font-inter uppercase tracking-[0.3em] text-[#0047BB] font-semibold">
                                {t.hero.availability}
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-black/10 pt-12">
                        <StatSmall label={t.hero.stats.valuation} value="$1.5B" accent />
                        <StatSmall label={t.hero.stats.partners} value="Meta / Banks" />
                        <StatSmall label={t.hero.stats.awards} value="Cannes / Effie" accent />
                        <StatSmall label={t.hero.stats.team} value="80+ Experts" />
                    </div>
                </div>
            </section>

            {/* Section 01: The Problem */}
            <Section id="reality" number="01" title={t.problem.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB]">
                        {t.problem.headline}
                    </p>
                    <p className="text-xl text-black/60 max-w-4xl font-inter leading-relaxed">
                        {t.problem.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatBox
                            val="40%"
                            label={t.problem.stats.guessing}
                            accent
                        />
                        <StatBox
                            val="43%"
                            label={t.problem.stats.breach}
                        />
                        <StatBox
                            val="40%"
                            label={t.problem.stats.skills}
                            accent
                        />
                        <StatBox
                            val="49%"
                            label={t.problem.stats.direction}
                        />
                    </div>

                    {/* Problem vs Solution Comparison */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="border-2 border-black/20 p-12 bg-white relative"
                        >
                            <h4 className="font-serif-instrument text-3xl italic mb-8 text-black/40">{t.problem.comparison.without.title}</h4>
                            <div className="space-y-4">
                                {t.problem.comparison.without.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-red-500 text-xs font-bold mt-1">[X]</span>
                                        <span className="text-sm font-inter opacity-60">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="border-2 border-[#0047BB] p-12 bg-[#0047BB]/5 relative"
                        >
                            <h4 className="font-serif-instrument text-3xl italic mb-8 text-[#0047BB]">{t.problem.comparison.with.title}</h4>
                            <div className="space-y-4">
                                {t.problem.comparison.with.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                                        <span className="text-sm font-inter opacity-80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-24 max-w-4xl mx-auto"
                    >
                        <div className="relative border-l-4 border-[#0047BB] bg-[#0047BB]/5 p-12 md:p-16">
                            <p className="text-2xl md:text-3xl font-serif-instrument italic leading-relaxed text-black">
                                {t.problem.quote}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Section 01.5: Why This Matters - Collapsible */}
            <Section id="mission" number="01.5" title="">
                <MissionCollapsible content={t.mission} />
            </Section>

            {/* Section 01.8: The Experience - Curriculum Preview */}
            <Section id="experience" number="01.8" title={t.experience.title}>
                <div className="space-y-20">
                    {/* Hero Headline */}
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif-instrument text-5xl md:text-7xl italic leading-[0.95] text-[#0047BB] mb-6"
                        >
                            {t.experience.headline}
                        </motion.h2>
                        <p className="text-xl font-inter text-black/60 leading-relaxed">
                            {t.experience.description}
                        </p>
                    </div>

                    {/* Five Pillars */}
                    <div className="space-y-8">
                        <h3 className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                            {t.experience.pillars.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {t.experience.pillars.items.map((pillar: any, i: number) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={cn(
                                        "p-6 border text-center space-y-4 transition-all hover:border-[#0047BB]",
                                        i === 2 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white"
                                    )}
                                >
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#0047BB]">[0{i + 1}]</span>
                                    <h4 className="text-lg font-bold font-inter">{pillar.title}</h4>
                                    <p className="text-xs text-black/50 leading-relaxed font-inter">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Session Flow */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB]">
                                {t.experience.session.title}
                            </h3>
                            <div className="space-y-4">
                                {t.experience.session.parts.map((part: any, i: number) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 p-5 border border-black/10 bg-white hover:border-[#0047BB]/30 transition-all group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <span className="text-[10px] font-bold text-[#0047BB]">{part.num}</span>
                                            <span className="text-[9px] text-black/30 mt-1">{part.time}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold font-inter mb-1 group-hover:text-[#0047BB] transition-colors">{part.title}</h4>
                                            <p className="text-sm text-black/50 font-inter">{part.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB]">
                                {t.experience.outcomes.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {t.experience.outcomes.items.map((item: any, i: number) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 border border-black bg-white space-y-3"
                                    >
                                        <span className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center font-bold text-xs">
                                            {i + 1}
                                        </span>
                                        <h4 className="font-bold font-inter">{item.title}</h4>
                                        <p className="text-sm text-black/50 font-inter">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 02: What This Actually Is */}
            <Section id="approach" number="02" title={t.approach.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB]">
                        {t.approach.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {t.approach.points.map((point, i) => (
                            <Point
                                key={i}
                                title={point.title}
                                desc={point.desc}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-12">
                        <div className="p-12 border border-black bg-white group hover:bg-[#0047BB]/5 transition-colors">
                            <h4 className="font-serif-instrument text-4xl italic mb-6 text-[#0047BB]">{t.approach.collective.title}</h4>
                            <p className="text-sm font-inter opacity-60 leading-relaxed mb-6">
                                {t.approach.collective.desc}
                            </p>
                            <div className="flex gap-2">
                                {t.approach.collective.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-black text-white text-[9px] uppercase tracking-widest font-inter font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-12 border border-black bg-white group hover:bg-[#0047BB]/5 transition-colors">
                            <h4 className="font-serif-instrument text-4xl italic mb-6 text-[#0047BB]">{t.approach.expert.title}</h4>
                            <p className="text-sm font-inter opacity-60 leading-relaxed mb-6">
                                {t.approach.expert.desc}
                            </p>
                            <div className="flex gap-2">
                                {t.approach.expert.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#0047BB] text-white text-[9px] uppercase tracking-widest font-inter font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 03: The Practitioners & Proof */}
            <Section id="team" number="03" title={t.team.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB]">
                        {t.team.headline}
                    </p>
                    <p className="text-xl md:text-2xl font-inter leading-relaxed text-black/70 max-w-3xl">
                        {t.team.subheadline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {t.team.experts.map((expert, i) => (
                            <ExpertCard
                                key={i}
                                company={expert.company}
                                name={expert.name}
                                role={expert.role}
                                bio={expert.bio}
                                tags={expert.tags}
                            />
                        ))}
                    </div>

                    <div className="py-16 text-center">
                        <p className="text-[9px] uppercase tracking-[0.4em] font-semibold opacity-30 mb-8 font-inter">
                            {t.team.trustedBy}
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                            {["META", "SAMSUNG", "FORBES", "AUDI", "SENNHEISER", "TATRA BANKA", "RAIFFEISEN", "DUBAI EXPO"].map(logo => (
                                <span key={logo} className="font-inter font-medium tracking-[0.15em] text-xs md:text-sm opacity-25 hover:opacity-60 transition-opacity duration-300">
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 04: The Choice */}
            <Section id="offers" number="04" title={t.tiers.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB]">
                        {t.tiers.headline}
                    </p>

                    <TierCarousel content={t.tiers} />

                    <div className="mt-20 bg-[#e8e1da] border border-black/10 p-12 md:p-24 relative overflow-hidden">
                        <div className="max-w-5xl mx-auto text-center relative z-10">
                            <h3 className="font-serif-instrument text-6xl italic mb-10 text-black">{t.roi.title}</h3>
                            <p className="text-2xl font-serif-instrument italic opacity-70 mb-16 leading-relaxed max-w-3xl mx-auto text-black">
                                {t.roi.desc.prefix} <span className="text-[#0047BB] font-bold">{t.roi.desc.highlight}</span>{t.roi.desc.suffix}
                            </p>
                            
                            {/* Value Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                {t.roi.grid.map((item, i) => (
                                    <div key={i} className="p-8 bg-white border border-black/10 text-center">
                                        <p className="text-5xl font-serif-instrument italic text-[#0047BB] leading-none mb-4">{item.title}</p>
                                        <p className="text-sm font-inter opacity-60 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-black/10 pt-12">
                                <p className="text-lg font-inter opacity-50 max-w-2xl mx-auto">
                                    {t.roi.footer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 05: FAQ */}
            <Section id="faq" number="05" title={t.faq.title}>
                <div className="max-w-4xl mx-auto space-y-4">
                    {t.faq.items.map((item, i) => (
                        <div key={i} className="border border-black bg-white group hover:border-[#0047BB] transition-colors">
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full px-10 py-8 flex justify-between items-center text-left"
                            >
                                <span className="font-serif-instrument text-2xl italic pr-6 group-hover:text-[#0047BB] transition-colors">{item.q}</span>
                                <div className={cn("transition-transform duration-500 font-bold", faqOpen === i ? "rotate-45" : "rotate-0")}>
                                    {faqOpen === i ? "[X]" : "[+]"}
                                </div>
                            </button>
                            <AnimatePresence>
                                {faqOpen === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-10 pb-10">
                                            <p className="text-base text-black/60 leading-relaxed font-inter">
                                                {item.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <section id="contact" className="py-48 bg-[#0047BB] text-white overflow-hidden relative border-t border-black">
                <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
                    <h2 className="font-serif-instrument text-[9vw] md:text-[7vw] leading-[0.8] mb-16 italic tracking-tight">
                        {t.cta.headline.line1} <br />
                        <span className="text-black">{t.cta.headline.line2}</span>
                    </h2>
                    <p className="text-2xl mb-20 opacity-80 leading-relaxed font-inter max-w-3xl mx-auto">
                        {t.cta.desc}
                    </p>
                    <div className="space-y-6">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Discovery Call Request&body=Hi, I'm interested in booking a discovery call for the Research Lab.%0D%0A%0D%0ACompany:%0D%0ATeam Size:%0D%0ACurrent Challenge:%0D%0A%0D%0AThank you!"
                            className="bg-white text-[#0047BB] px-16 py-8 font-inter font-semibold text-xs uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all inline-block shadow-[15px_15px_0px_rgba(0,0,0,0.2)]"
                        >
                            {t.cta.button} [JOIN]
                        </a>
                        <div className="space-y-2">
                            <p className="text-[11px] font-inter font-semibold uppercase tracking-[0.3em] opacity-60">{t.cta.limited}</p>
                            <p className="text-[10px] font-inter uppercase tracking-[0.3em] opacity-40">{t.cta.urgency}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-40 px-6 md:px-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-20 relative z-10">
                    <div className="space-y-8">
                        <h2 className="font-serif-instrument text-[12vw] md:text-[10vw] leading-[0.7] text-[#0047BB] tracking-tighter">SORRYWECAN <br /> RESEARCH LAB</h2>
                        <p className="max-w-md text-xs uppercase tracking-[0.3em] font-bold leading-relaxed opacity-40">
                            GLOBAL CREATIVE NAVIGATION. <br />
                            AI SYSTEMS & TRANSFORMATION. <br />
                            {t.footer.location}
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-10 right-10 text-[10px] uppercase tracking-[0.5em] opacity-20">{t.footer.rights}</div>
            </footer>
        </div>
    )
}

/* ----------------- Sub-Components ----------------- */

function StatSmall({ label, value, accent }: any) {
    return (
        <div className="p-8 text-center space-y-2 bg-transparent flex flex-col justify-center items-center">
            <p className={cn("text-5xl font-serif-instrument", accent ? "text-[#0047BB]" : "text-black")}>{value}</p>
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">{label}</p>
        </div>
    )
}

function Section({ id, number, title, children }: any) {
    return (
        <section id={id} className="scroll-mt-32 py-48 border-b border-black last:border-0 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-20"
            >
                <div className="space-y-8 mb-24">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{number} // MODULE</span>
                        <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <h2 className="font-serif-instrument text-8xl md:text-9xl tracking-tighter leading-none">{title}</h2>
                </div>
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}

function StatBox({ val, label, accent }: any) {
    return (
        <div className={cn(
            "p-12 border border-black space-y-6 transition-all hover:-translate-y-2 group shadow-[0px_0px_0px_rgba(0,0,0,0)] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.05)]",
            accent ? "bg-black text-white" : "bg-white text-black"
        )}>
            <p className={cn("text-7xl font-serif-instrument leading-none", accent ? "text-[#0047BB]" : "text-black")}>{val}</p>
            <p className="text-[12px] font-semibold uppercase tracking-widest opacity-60 leading-relaxed font-inter">{label}</p>
        </div>
    )
}

function Point({ title, desc }: any) {
    return (
        <div className="space-y-8 p-10 border border-black bg-white group hover:bg-[#0047BB]/5 transition-colors">
            <h4 className="font-serif-instrument text-4xl italic uppercase tracking-tighter">{title}</h4>
            <p className="text-sm text-black/60 leading-relaxed font-inter">{desc}</p>
        </div>
    )
}

function ExpertCard({ company, name, role, bio, tags }: any) {
    return (
        <div className="p-16 border border-black bg-white hover:-translate-y-2 transition-all group hover:shadow-[20px_20px_0px_rgba(0,63,187,0.05)]">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#0047BB] uppercase mb-6 block">{company}</span>
            <h3 className="font-serif-instrument text-6xl italic mb-4 tracking-tighter">{name}</h3>
            <p className="text-[12px] font-bold uppercase tracking-widest opacity-40 mb-10">{role}</p>
            <p className="text-lg text-black/80 leading-relaxed mb-12 font-inter">"{bio}"</p>
            <div className="flex flex-wrap gap-3">
                {tags.map((t: string) => (
                    <span key={t} className="px-4 py-2 border border-black/10 text-[9px] font-inter font-semibold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 group-hover:border-[#0047BB]/30 transition-all">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}

function TierCarousel({ content }: { content: any }) {
    const [activeIndex, setActiveIndex] = useState(1)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    
    // Map the translated items to the structure expected by the carousel
    const tiers = content.items.map((item: any, i: number) => ({
        tier: `0${i + 1}`,
        name: item.name,
        price: ["€3,690", "€6,930", "€12,690"][i], // Prices remain consistent
        duration: item.duration,
        features: item.features,
        ideal: item.ideal,
        featured: i === 1,
        vat: content.vat,
        book: content.book,
        call: content.call,
        priority: content.priority
    }))

    const handleDragEnd = (event: any, info: any) => {
        if (!isMobile) return
        
        const threshold = 30
        const velocity = info.velocity.x
        
        if ((velocity < -500 || info.offset.x < -threshold) && activeIndex < tiers.length - 1) {
            setActiveIndex(activeIndex + 1)
        } else if ((velocity > 500 || info.offset.x > threshold) && activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    return (
        <div className="relative py-4">
            {/* Carousel Container with Peek */}
            <div className="overflow-visible w-full py-6 lg:py-12">
                <div 
                    className="relative w-full max-w-[1100px] mx-auto"
                    style={{
                        // @ts-ignore
                        "--card-width": isMobile ? "min(340px, 85vw)" : "320px",
                        "--gap": "12px"
                    }}
                >
                    {isMobile ? (
                        <motion.div
                            className="flex gap-[var(--gap)] cursor-grab active:cursor-grabbing pl-[calc(50%-(var(--card-width)/2))]"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            onDragEnd={handleDragEnd}
                            animate={{
                                x: `calc(-1 * ${activeIndex} * (var(--card-width) + var(--gap)))`
                            }}
                            transition={{
                                type: "spring", 
                                stiffness: 300, 
                                damping: 30,
                                mass: 0.8
                            }}
                        >
                            {tiers.map((tier: any, index: number) => {
                                const isActive = index === activeIndex
                                
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex-shrink-0"
                                        style={{ width: "var(--card-width)" }}
                                        animate={{
                                            scale: isActive ? 1 : 0.92,
                                            opacity: isActive ? 1 : 0.5,
                                            filter: isActive ? "blur(0px)" : "blur(1px)"
                                        }}
                                        transition={{
                                            type: "spring", 
                                            stiffness: 400, 
                                            damping: 30 
                                        }}
                                        onClick={() => !isActive && setActiveIndex(index)}
                                    >
                                        <div className={cn(
                                            "transition-all duration-500 h-full",
                                            isActive ? "shadow-[0_20px_60px_rgba(0,0,0,0.15)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                                        )}>
                                            <OfferCard {...tier} />
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    ) : (
                        <div className="flex justify-center items-stretch gap-3 px-4">
                            {tiers.map((tier: any, index: number) => (
                                <div 
                                    key={index}
                                    style={{ width: "var(--card-width)" }}
                                    className={cn(
                                        "transition-all duration-500",
                                        tier.featured ? "z-10 -mt-6 mb-6 scale-105 origin-top" : "mt-6 opacity-80 hover:opacity-100 hover:-translate-y-2 scale-95 origin-top"
                                    )}
                                >
                                    <div className={cn(
                                        "h-full transition-all duration-500",
                                        tier.featured ? "shadow-[0_40px_80px_rgba(0,0,0,0.12)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                                    )}>
                                        <OfferCard {...tier} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Dots (Mobile Only) */}
            {isMobile && (
                <div className="flex justify-center gap-2 mt-8">
                    {tiers.map((_: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "transition-all duration-500 ease-out",
                                activeIndex === index
                                    ? "w-8 h-2 bg-[#0047BB] rounded-full"
                                    : "w-2 h-2 bg-black/15 rounded-full hover:bg-black/30 hover:scale-125"
                            )}
                            aria-label={`Go to tier ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Swipe Hint (Mobile Only) */}
            {isMobile && (
                <p className="text-center mt-8 text-[10px] uppercase tracking-[0.3em] opacity-30 font-inter">
                    {content.swipeHint}
                </p>
            )}
        </div>
    )
}

function OfferCard({ tier, name, price, duration, features, ideal, featured, vat, book, call, priority }: any) {
    return (
        <div className={cn(
            "border border-black bg-white p-5 lg:p-6 flex flex-col relative transition-all duration-700 h-full",
            featured ? "bg-[#0047BB]/5 scale-105 z-10 border-[#0047BB] shadow-[30px_30px_0px_rgba(0,63,187,0.05)]" : "hover:scale-[1.02]"
        )}>
            {featured && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#0047BB] text-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] flex items-center gap-2 font-inter">
                    {priority}
                </div>
            )}

            <div className="mb-5">
                <span className="text-[9px] font-semibold tracking-[0.4em] uppercase opacity-40 font-inter">TIER {tier}</span>
                <h3 className="font-serif-instrument text-3xl italic mt-3 mb-3">{name}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-serif-instrument italic text-[#0047BB]">{price}</span>
                    <span className="text-[9px] font-semibold opacity-30 tracking-widest font-inter">{vat}</span>
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] opacity-40 mt-3 font-inter">{duration}</p>
            </div>

            <div className="space-y-3 mb-8 flex-1">
                {features.map((f: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                        <span className="text-[11px] font-inter leading-relaxed opacity-70">{f}</span>
                    </div>
                ))}
            </div>

            <div className="pt-5 border-t border-black/10 mt-auto">
                <p className="text-[10px] text-black/60 mb-5 font-inter leading-relaxed min-h-[32px]">{ideal}</p>
                <a
                    href="mailto:hello@sorrywecan.com?subject=Discovery Call Request&body=Hi, I'm interested in booking a discovery call for the Research Lab.%0D%0A%0D%0ACompany:%0D%0ATeam Size:%0D%0ACurrent Challenge:%0D%0A%0D%0AThank you!"
                    className={cn(
                        "w-full py-3 flex items-center justify-center gap-2 font-inter font-semibold text-[9px] uppercase tracking-[0.3em] transition-all",
                        featured
                            ? "bg-[#0047BB] text-white hover:bg-black"
                            : "border border-black hover:bg-black hover:text-white"
                    )}
                >
                    {book} {tier} {call}
                </a>
            </div>
        </div>
    )
}
