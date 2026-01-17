"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

// --- Components ---

function Section({ id, number, title, children, className, dark }: any) {
    return (
        <section id={id} className={cn(
            "py-32 border-b last:border-0 relative",
            dark ? "bg-black text-white border-white/10" : "border-black/10",
            className
        )}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-20"
            >
                {(number || title) && (
                    <div className="space-y-8 mb-24">
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{number}</span>
                            <div className={cn("flex-1 h-[1px]", dark ? "bg-white/10" : "bg-black/10")} />
                        </div>
                        {title && <h2 className="font-serif-instrument text-6xl md:text-7xl tracking-tighter leading-none">{title}</h2>}
                    </div>
                )}
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </section>
    )
}

function TimeBlock({ time, title, description, emotion, accent }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 p-8 border transition-all",
                accent ? "border-[#0047BB] bg-[#0047BB]/5" : "border-black/10 bg-white hover:border-black/30"
            )}
        >
            <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">{time}</span>
            </div>
            <div className="space-y-4">
                <h4 className="text-2xl font-serif-instrument italic">{title}</h4>
                <p className="text-sm text-black/60 leading-relaxed">{description}</p>
                <div className="pt-4 border-t border-black/10">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Emotional State: </span>
                    <span className="text-sm italic text-[#0047BB]">{emotion}</span>
                </div>
            </div>
        </motion.div>
    )
}

function WhoCard({ icon, title, pain, transformation }: any) {
    return (
        <div className="p-8 border border-black/10 bg-white space-y-6 hover:border-[#0047BB]/30 transition-all group">
            <div className="text-4xl">{icon}</div>
            <h4 className="text-xl font-bold">{title}</h4>
            <div className="space-y-4 text-sm">
                <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-500 block mb-2">BEFORE</span>
                    <p className="text-black/60 leading-relaxed">{pain}</p>
                </div>
                <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-green-600 block mb-2">AFTER</span>
                    <p className="text-black/80 leading-relaxed font-medium">{transformation}</p>
                </div>
            </div>
        </div>
    )
}

function FounderCard({ name, role, company, focus, quote }: any) {
    return (
        <div className="p-8 border border-white/20 bg-white/5 space-y-6 hover:bg-white/10 transition-all">
            <div>
                <h4 className="text-2xl font-serif-instrument italic">{name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mt-2">{role}</p>
                <p className="text-xs text-white/40 mt-1">{company}</p>
            </div>
            <div className="space-y-4">
                <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 block mb-2">BRINGS</span>
                    <p className="text-sm text-white/70 leading-relaxed">{focus}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                    <p className="text-sm italic text-white/50">"{quote}"</p>
                </div>
            </div>
        </div>
    )
}

export default function IgnitionPage() {
    const [lang, setLang] = useState<'en' | 'sk'>('en')
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            hero: {
                subtitle: "LOGIC MEETS MAGIC",
                title: {
                    line1: "One Day.",
                    line2: "Everything Changes."
                },
                description: "We don't teach tools. We teach thinking. In 8 hours, your team learns to see differently, decide faster, and create what AI cannot.",
                stats: [
                    { value: "8hrs", label: "Intensive" },
                    { value: "10-25", label: "Participants" },
                    { value: "3", label: "Expert Minds" },
                    { value: "1", label: "Transformation" }
                ]
            },
            problem: {
                title: "The Problem",
                headline: "Everyone Has AI. Nobody Knows How to Think.",
                points: [
                    "Your team prompts. They don't curate.",
                    "Output looks like everyone else's output.",
                    "Speed increased. Quality decreased.",
                    "The machine decides. Humans execute."
                ],
                stats: [
                    { value: "73%", label: "of AI output is generic 'slop'" },
                    { value: "4hrs", label: "wasted daily on bad prompting" },
                    { value: "0%", label: "of courses teach actual thinking" }
                ]
            },
            solution: {
                title: "The Ignition",
                headline: "Not a Course. A Catalyst.",
                description: "We're not here to teach you which buttons to press. We're here to rewire how your team approaches problems, creativity, and decision-making in an age where AI does the heavy lifting.",
                principles: [
                    { title: "Taste Over Tools", desc: "Anyone can prompt. Few can curate. We restore the judgment that makes output premium." },
                    { title: "Think With, Not For", desc: "AI amplifies your thinking. It doesn't replace it. Learn to stay in the driver's seat." },
                    { title: "Navigation Over Automation", desc: "The map matters more than the vehicle. We teach you to see where you're going." }
                ]
            },
            day: {
                title: "The Day",
                headline: "8 Hours That Rewire Everything.",
                blocks: [
                    { time: "09:00", title: "THE SHOCK", desc: "We take your actual painful task. Solve it in 5 minutes. Your jaws drop. The old world ends here.", emotion: '"Holy shit, this is possible?"' },
                    { time: "09:30", title: "THE MIRROR", desc: "Each person identifies their #1 time-sink. Public commitment. The problem becomes real.", emotion: '"I spend HOW much time on this?"' },
                    { time: "10:45", title: "THE SKILL", desc: "Hands-on: Task framing + Prompting fundamentals. You practice on YOUR tasks. Not hypotheticals.", emotion: '"I can actually do this."' },
                    { time: "13:00", title: "THE TRANSFORMATION", desc: "Workflow redesign. We take 3 actual company processes. Rebuild them live. Before/after.", emotion: '"Our process was insane."' },
                    { time: "14:45", title: "THE NAVIGATION", desc: "Role-specific breakouts. Each person leaves with their personal AI-augmented job description.", emotion: '"I know MY path now."', accent: true },
                    { time: "16:00", title: "THE COMMITMENT", desc: "Each person presents: 'In the next 30 days, I will...' Public accountability. No escape.", emotion: '"I\'m doing this."' }
                ]
            },
            who: {
                title: "Who This Is For",
                headline: "Production. Creative. Anyone Who Refuses Mediocrity.",
                cards: [
                    { icon: "🎬", title: "Production Companies", pain: "AI is everywhere but quality dropped. Generic visual slop. Lost your edge.", transformation: "Curated excellence. AI as multiplier, not replacement. Distinctive output." },
                    { icon: "🎨", title: "Creative Studios", pain: "Everyone sounds the same. Brand voice diluted. Team forgot how to think.", transformation: "Restored taste. Human judgment in every workflow. Unignorable work." },
                    { icon: "🏢", title: "Marketing Teams", pain: "Content factory mode. Speed up, meaning down. Losing the thread.", transformation: "Strategic clarity. AI handles volume, humans handle vision. Quality at scale." },
                    { icon: "🚀", title: "Founders & Leaders", pain: "Team adopted AI chaotically. No system. No standards. Hidden risks.", transformation: "Unified approach. Clear navigation. Competitive advantage locked in." }
                ]
            },
            founders: {
                title: "The Trinity",
                headline: "Three Minds. One Mission.",
                description: "Not consultants. Practitioners. We've built what we teach.",
                cards: [
                    { name: "Roland Vraník", role: "The Creative", company: "SORRYWECAN // Founder", focus: "Taste, variance, and the soul of the brand. Ensures AI output isn't generic slop.", quote: "Stop prompting. Start curating." },
                    { name: "Ján Koščelanský", role: "The Architect", company: "SUDOLABS // Co-founder & CPO", focus: "Scale, sovereignty, and logic. Builds the pipelines that let vision scale securely.", quote: "Speed without accuracy is chaos." },
                    { name: "Roman Pii Wagner", role: "The Navigator", company: "TRANSFORMATIONAL DESIGN", focus: "Strategic clarity and critical distance. Keeps humans in the loop as the final arbiters.", quote: "Judgment is permanent." }
                ]
            },
            leave: {
                title: "What You Leave With",
                headline: "Not Just Inspiration. Implementation.",
                items: [
                    { title: "Personal AI Toolkit", desc: "Your specific tools, prompts, workflows. Not generic—built for YOUR role." },
                    { title: "30-Day Challenge Card", desc: "One specific transformation you'll implement. Accountability built in." },
                    { title: "Resource Vault Access", desc: "Templates, prompt libraries, video replays. Forever access." },
                    { title: "Call-a-Friend Token", desc: "One 30-min call with our team in the next 30 days. Support when you need it." }
                ]
            },
            pricing: {
                title: "Investment",
                headline: "One Day. One Price. Everything Changes.",
                tiers: [
                    { name: "Standard", price: "8,000", currency: "EUR", features: ["8-hour intensive workshop", "Up to 15 participants", "Personal AI Toolkit for each", "30-Day Challenge Cards", "Resource Vault access", "1 month email support"], cta: "Book Standard" },
                    { name: "Premium", price: "12,000", currency: "EUR", features: ["Everything in Standard", "Up to 25 participants", "Pre-workshop diagnostic call", "Executive 1:1 session", "Extended resource library", "3-month support + 2 follow-up calls"], cta: "Book Premium", highlight: true },
                    { name: "Enterprise", price: "Custom", currency: "", features: ["Custom scope and duration", "Multiple sessions possible", "Ongoing advisory retainer", "Priority scheduling", "White-glove service"], cta: "Contact Us" }
                ],
                note: "All prices exclude VAT. In-person only. We come to you or you come to us."
            },
            faq: {
                title: "Questions",
                items: [
                    { q: "Is this a prompt engineering course?", a: "No. Prompting is talking TO machines. We teach thinking WITH machines. Building judgment into workflows, not just efficiency." },
                    { q: "What if our team is already using AI?", a: "Good. That means you've hit the ceiling of 'tools'. Now it's time to develop taste and curation—what separates generic output from premium work." },
                    { q: "Why one day instead of a longer program?", a: "Ignition, not incubation. We light the fire. You tend it. Long programs create dependency. One day creates autonomy." },
                    { q: "What industries is this for?", a: "Production companies, creative studios, marketing teams, agencies. Anyone who refuses to sound like everyone else." },
                    { q: "Can this be done remotely?", a: "No. The intensity requires presence. Transformation happens in the room, not through a screen." },
                    { q: "What's the follow-up?", a: "Each participant gets a 30-min call token. For teams wanting deeper integration, we offer follow-up programs delivered by trained facilitators." }
                ]
            },
            cta: {
                headline: "Ready to Ignite?",
                description: "Limited to 4-6 workshops per month. We work with select organizations who refuse mediocrity.",
                button: "Book Your Ignition",
                note: "Discovery call takes 20 minutes. No commitment."
            }
        },
        sk: {
            hero: {
                subtitle: "LOGIKA STRETÁVA MÁGIU",
                title: {
                    line1: "Jeden Deň.",
                    line2: "Všetko Sa Zmení."
                },
                description: "Neučíme nástroje. Učíme myslenie. Za 8 hodín sa váš tím naučí vidieť inak, rozhodovať rýchlejšie a tvoriť to, čo AI nedokáže.",
                stats: [
                    { value: "8hod", label: "Intenzívne" },
                    { value: "10-25", label: "Účastníkov" },
                    { value: "3", label: "Expertné Mysle" },
                    { value: "1", label: "Transformácia" }
                ]
            },
            problem: {
                title: "Problém",
                headline: "Každý Má AI. Nikto Nevie Myslieť.",
                points: [
                    "Váš tím promptuje. Nekurátoruje.",
                    "Výstup vyzerá ako výstup všetkých ostatných.",
                    "Rýchlosť sa zvýšila. Kvalita klesla.",
                    "Stroj rozhoduje. Ľudia vykonávajú."
                ],
                stats: [
                    { value: "73%", label: "AI výstupu je generický 'slop'" },
                    { value: "4hod", label: "denne stratené zlým promptovaním" },
                    { value: "0%", label: "kurzov učí skutočné myslenie" }
                ]
            },
            solution: {
                title: "Ignition",
                headline: "Nie Kurz. Katalyzátor.",
                description: "Nie sme tu, aby sme vás učili, ktoré tlačidlá stláčať. Sme tu, aby sme prepojili, ako váš tím pristupuje k problémom, kreativite a rozhodovaniu vo veku, keď AI robí ťažkú prácu.",
                principles: [
                    { title: "Vkus Nad Nástroje", desc: "Promptovať vie každý. Kurátorovať málokto. Obnovujeme úsudok, ktorý robí výstup prémiovým." },
                    { title: "Myslieť S, Nie Za", desc: "AI zosilňuje vaše myslenie. Nenahrádza ho. Naučte sa zostať za volantom." },
                    { title: "Navigácia Nad Automatizáciu", desc: "Mapa je dôležitejšia ako vozidlo. Učíme vás vidieť, kam idete." }
                ]
            },
            day: {
                title: "Ten Deň",
                headline: "8 Hodín, Ktoré Zmenia Všetko.",
                blocks: [
                    { time: "09:00", title: "ŠOK", desc: "Vezmeme vašu skutočnú bolestivú úlohu. Vyriešime ju za 5 minút. Čeľuste padajú. Starý svet končí.", emotion: '"Sakra, toto je možné?"' },
                    { time: "09:30", title: "ZRKADLO", desc: "Každý identifikuje svoj #1 požierač času. Verejný záväzok. Problém sa stáva reálnym.", emotion: '"TOĽKO času míňam na toto?"' },
                    { time: "10:45", title: "SKILL", desc: "Hands-on: Framing úloh + Základy promptovania. Cvičíte na VAŠICH úlohách. Nie na hypotetických.", emotion: '"Toto naozaj zvládnem."' },
                    { time: "13:00", title: "TRANSFORMÁCIA", desc: "Redesign workflow. Vezmeme 3 skutočné firemné procesy. Prebudujeme ich naživo. Pred/po.", emotion: '"Náš proces bol šialený."' },
                    { time: "14:45", title: "NAVIGÁCIA", desc: "Breakouty podľa rolí. Každý odchádza s osobným AI-augmentovaným popisom práce.", emotion: '"Poznám SVOJU cestu."', accent: true },
                    { time: "16:00", title: "ZÁVÄZOK", desc: "Každý prezentuje: 'V najbližších 30 dňoch urobím...' Verejná zodpovednosť. Bez úniku.", emotion: '"Idem do toho."' }
                ]
            },
            who: {
                title: "Pre Koho",
                headline: "Produkcia. Kreatíva. Ktokoľvek, Kto Odmieta Priemernosť.",
                cards: [
                    { icon: "🎬", title: "Produkčné Spoločnosti", pain: "AI je všade, ale kvalita klesla. Generický vizuálny slop. Stratili ste náskok.", transformation: "Kurátorovaná excelentnosť. AI ako multiplikátor, nie náhrada. Rozpoznateľný výstup." },
                    { icon: "🎨", title: "Kreatívne Štúdiá", pain: "Každý znie rovnako. Hlas značky sa rozriedil. Tím zabudol myslieť.", transformation: "Obnovený vkus. Ľudský úsudok v každom workflow. Neprehliadnuteľná práca." },
                    { icon: "🏢", title: "Marketingové Tímy", pain: "Režim obsahovej fabriky. Rýchlosť hore, význam dole. Strácate niť.", transformation: "Strategická jasnosť. AI rieši objem, ľudia riešia víziu. Kvalita vo veľkom." },
                    { icon: "🚀", title: "Zakladatelia & Lídri", pain: "Tím prijal AI chaoticky. Žiadny systém. Žiadne štandardy. Skryté riziká.", transformation: "Jednotný prístup. Jasná navigácia. Konkurenčná výhoda uzamknutá." }
                ]
            },
            founders: {
                title: "Trojica",
                headline: "Tri Mysle. Jedna Misia.",
                description: "Nie konzultanti. Praktici. Postavili sme to, čo učíme.",
                cards: [
                    { name: "Roland Vraník", role: "Kreatívec", company: "SORRYWECAN // Founder", focus: "Vkus, variancia a duša značky. Zabezpečuje, že AI výstup nie je generický slop.", quote: "Prestaň promptovať. Začni kurátorovať." },
                    { name: "Ján Koščelanský", role: "Architekt", company: "SUDOLABS // Co-founder & CPO", focus: "Škála, suverenita a logika. Buduje potrubia, ktoré umožňujú vízii rásť bezpečne.", quote: "Rýchlosť bez presnosti je chaos." },
                    { name: "Roman Pii Wagner", role: "Navigátor", company: "TRANSFORMATIONAL DESIGN", focus: "Strategická jasnosť a kritický odstup. Drží ľudí v slučke ako finálnych arbitrov.", quote: "Úsudok je trvalý." }
                ]
            },
            leave: {
                title: "Čo Si Odnesiete",
                headline: "Nie Len Inšpiráciu. Implementáciu.",
                items: [
                    { title: "Osobný AI Toolkit", desc: "Vaše špecifické nástroje, prompty, workflow. Nie generické—postavené pre VAŠU rolu." },
                    { title: "30-Dňová Challenge Karta", desc: "Jedna konkrétna transformácia, ktorú implementujete. Zodpovednosť zabudovaná." },
                    { title: "Prístup do Resource Vault", desc: "Šablóny, knižnice promptov, video replays. Navždy prístup." },
                    { title: "Token na Hovor", desc: "Jeden 30-min hovor s naším tímom do 30 dní. Podpora, keď ju potrebujete." }
                ]
            },
            pricing: {
                title: "Investícia",
                headline: "Jeden Deň. Jedna Cena. Všetko Sa Zmení.",
                tiers: [
                    { name: "Standard", price: "8 000", currency: "EUR", features: ["8-hodinový intenzívny workshop", "Do 15 účastníkov", "Osobný AI Toolkit pre každého", "30-Dňové Challenge Karty", "Prístup do Resource Vault", "1 mesiac email podpora"], cta: "Rezervovať Standard" },
                    { name: "Premium", price: "12 000", currency: "EUR", features: ["Všetko v Standard", "Do 25 účastníkov", "Pre-workshop diagnostický hovor", "Executive 1:1 session", "Rozšírená knižnica zdrojov", "3-mesačná podpora + 2 follow-up hovory"], cta: "Rezervovať Premium", highlight: true },
                    { name: "Enterprise", price: "Na mieru", currency: "", features: ["Vlastný rozsah a trvanie", "Možné viacero sessions", "Priebežný advisory retainer", "Prioritné plánovanie", "White-glove servis"], cta: "Kontaktujte Nás" }
                ],
                note: "Všetky ceny bez DPH. Len osobne. Prídeme k vám alebo vy k nám."
            },
            faq: {
                title: "Otázky",
                items: [
                    { q: "Je toto kurz prompt engineeringu?", a: "Nie. Promptovanie je rozprávanie SA strojom. My učíme myslenie SO strojmi. Budovanie úsudku do workflow, nie len efektivity." },
                    { q: "Čo ak náš tím už AI používa?", a: "Dobre. To znamená, že ste narazili na strop 'nástrojov'. Teraz je čas rozvinúť vkus a kurátorstvo—to, čo oddeľuje generický výstup od prémiovej práce." },
                    { q: "Prečo jeden deň namiesto dlhšieho programu?", a: "Ignition, nie inkubácia. Zapaľujeme oheň. Vy ho udržiavate. Dlhé programy vytvárajú závislosť. Jeden deň vytvára autonómiu." },
                    { q: "Pre aké odvetvia je to?", a: "Produkčné spoločnosti, kreatívne štúdiá, marketingové tímy, agentúry. Ktokoľvek, kto odmieta znieť ako všetci ostatní." },
                    { q: "Dá sa to robiť online?", a: "Nie. Intenzita vyžaduje prítomnosť. Transformácia sa deje v miestnosti, nie cez obrazovku." },
                    { q: "Aký je follow-up?", a: "Každý účastník dostane token na 30-min hovor. Pre tímy, ktoré chcú hlbšiu integráciu, ponúkame follow-up programy vedené vyškolenými facilitátormi." }
                ]
            },
            cta: {
                headline: "Pripravení na Ignition?",
                description: "Limitované na 4-6 workshopov mesačne. Pracujeme s vybranými organizáciami, ktoré odmietajú priemernosť.",
                button: "Rezervovať Ignition",
                note: "Discovery call trvá 20 minút. Žiadny záväzok."
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

            {/* Hero */}
            <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-black relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-30" />
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
                        className="font-serif-instrument text-[12vw] md:text-[10vw] leading-[0.9] tracking-tighter mb-12"
                    >
                        {t.hero.title.line1} <br />
                        <span className="text-[#0047BB] italic">{t.hero.title.line2}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end"
                    >
                        <p className="text-xl md:text-2xl font-inter leading-relaxed text-black/70 max-w-xl">
                            {t.hero.description}
                        </p>

                        <div className="space-y-6">
                            <a 
                                href="mailto:hello@sorrywecan.com?subject=Ignition Workshop Inquiry"
                                className="bg-[#0047BB] text-white px-10 py-5 font-inter font-semibold text-[11px] uppercase tracking-[0.25em] flex items-center gap-3 hover:bg-black transition-all w-fit"
                            >
                                {t.cta.button}
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-black/10 pt-12">
                        {t.hero.stats.map((stat: any, i: number) => (
                            <div key={i} className="text-center">
                                <p className={cn("text-5xl font-serif-instrument", i % 2 === 0 ? "text-[#0047BB]" : "text-black")}>{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <Section number="01" title={t.problem.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.problem.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {t.problem.points.map((point: string, i: number) => (
                                <div key={i} className="flex items-start gap-4 p-6 border border-black/10 bg-white">
                                    <span className="text-red-500 text-xs font-bold">[X]</span>
                                    <span className="text-lg font-inter">{point}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {t.problem.stats.map((stat: any, i: number) => (
                                <div key={i} className="p-8 bg-black text-white">
                                    <p className="text-5xl font-serif-instrument italic text-[#0047BB] mb-4">{stat.value}</p>
                                    <p className="text-sm opacity-60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Solution Section */}
            <Section number="02" title={t.solution.title}>
                <div className="space-y-16">
                    <div className="max-w-4xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] mb-8">
                            {t.solution.headline}
                        </p>
                        <p className="text-xl text-black/60 leading-relaxed">
                            {t.solution.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.solution.principles.map((principle: any, i: number) => (
                            <div key={i} className="p-10 border border-black bg-white space-y-6 hover:bg-[#0047BB]/5 transition-all">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB]">0{i + 1}</span>
                                <h4 className="text-2xl font-serif-instrument italic">{principle.title}</h4>
                                <p className="text-sm text-black/60 leading-relaxed">{principle.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* The Day Section */}
            <Section number="03" title={t.day.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.day.headline}
                    </p>

                    <div className="space-y-4">
                        {t.day.blocks.map((block: any, i: number) => (
                            <TimeBlock 
                                key={i}
                                time={block.time}
                                title={block.title}
                                description={block.desc}
                                emotion={block.emotion}
                                accent={block.accent}
                            />
                        ))}
                    </div>

                    <div className="p-12 bg-black text-white text-center">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0047BB] mb-4">END RESULT</p>
                        <p className="text-2xl md:text-3xl font-serif-instrument italic">
                            {lang === 'en' 
                                ? "They don't leave inspired. They leave transformed." 
                                : "Neodchádzajú inšpirovaní. Odchádzajú transformovaní."}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Who This Is For */}
            <Section number="04" title={t.who.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.who.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.who.cards.map((card: any, i: number) => (
                            <WhoCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* The Trinity - Founders */}
            <Section number="05" title={t.founders.title} dark>
                <div className="space-y-16">
                    <div className="max-w-3xl">
                        <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight mb-6">
                            {t.founders.headline}
                        </p>
                        <p className="text-xl text-white/60 leading-relaxed">
                            {t.founders.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.founders.cards.map((card: any, i: number) => (
                            <FounderCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* What You Leave With */}
            <Section number="06" title={t.leave.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.leave.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.leave.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 border border-black bg-white space-y-4 hover:bg-[#0047BB]/5 transition-all">
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-10 bg-[#0047BB] text-white flex items-center justify-center font-bold text-sm">
                                        {i + 1}
                                    </span>
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed pl-14">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Pricing */}
            <Section number="07" title={t.pricing.title}>
                <div className="space-y-16">
                    <p className="font-serif-instrument text-4xl md:text-5xl italic leading-tight text-[#0047BB] max-w-4xl">
                        {t.pricing.headline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.pricing.tiers.map((tier: any, i: number) => (
                            <div 
                                key={i} 
                                className={cn(
                                    "p-10 border space-y-8 relative",
                                    tier.highlight 
                                        ? "border-[#0047BB] bg-[#0047BB]/5 scale-[1.02]" 
                                        : "border-black/10 bg-white"
                                )}
                            >
                                {tier.highlight && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0047BB] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1">
                                        {lang === 'en' ? 'RECOMMENDED' : 'ODPORÚČANÉ'}
                                    </span>
                                )}
                                <div>
                                    <h4 className="text-2xl font-serif-instrument italic">{tier.name}</h4>
                                    <div className="mt-4">
                                        <span className="text-5xl font-serif-instrument">{tier.price}</span>
                                        {tier.currency && <span className="text-xl ml-2 opacity-40">{tier.currency}</span>}
                                    </div>
                                </div>
                                <div className="space-y-3 pt-6 border-t border-black/10">
                                    {tier.features.map((feature: string, j: number) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-1.5 shrink-0" />
                                            <span className="text-sm text-black/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a 
                                    href="mailto:hello@sorrywecan.com?subject=Ignition Workshop - ${tier.name}"
                                    className={cn(
                                        "block text-center py-4 font-bold text-xs uppercase tracking-widest transition-all",
                                        tier.highlight 
                                            ? "bg-[#0047BB] text-white hover:bg-black" 
                                            : "bg-black text-white hover:bg-[#0047BB]"
                                    )}
                                >
                                    {tier.cta}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-black/40 text-center">{t.pricing.note}</p>
                </div>
            </Section>

            {/* FAQ */}
            <Section number="08" title={t.faq.title}>
                <div className="max-w-4xl mx-auto space-y-4">
                    {t.faq.items.map((item: any, i: number) => (
                        <div key={i} className="border border-black bg-white group hover:border-[#0047BB] transition-colors">
                            <button
                                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                className="w-full px-10 py-8 flex justify-between items-center text-left"
                            >
                                <span className="font-serif-instrument text-xl italic pr-6 group-hover:text-[#0047BB] transition-colors">{item.q}</span>
                                <div className={cn("transition-transform duration-500 font-bold text-[#0047BB]", faqOpen === i ? "rotate-45" : "rotate-0")}>
                                    +
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
            <section className="py-48 bg-[#0047BB] text-white overflow-hidden relative border-t border-black">
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <h2 className="font-serif-instrument text-[10vw] md:text-[8vw] leading-[0.85] mb-12 italic tracking-tight">
                        {t.cta.headline}
                    </h2>
                    <p className="text-xl md:text-2xl mb-16 opacity-80 leading-relaxed font-inter max-w-2xl mx-auto">
                        {t.cta.description}
                    </p>
                    <div className="space-y-6">
                        <a
                            href="mailto:hello@sorrywecan.com?subject=Ignition Workshop - Discovery Call Request"
                            className="bg-white text-[#0047BB] px-16 py-6 font-inter font-bold text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all inline-block shadow-[15px_15px_0px_rgba(0,0,0,0.2)]"
                        >
                            {t.cta.button}
                        </a>
                        <p className="text-sm opacity-60">{t.cta.note}</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-24 px-6 md:px-20 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // LOGIC MEETS MAGIC // 2026
                </p>
            </footer>
        </div>
    )
}
