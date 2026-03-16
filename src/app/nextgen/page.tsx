"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
})

const inView = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
})

type Lang = "en" | "sk"

export default function NextGenPage() {
    const [lang, setLang] = useState<Lang>("en")
    const [faqOpen, setFaqOpen] = useState<number | null>(null)

    const content = {
        en: {
            meta: { title: "NEXT GEN — Research Lab Youth Initiative" },
            hero: {
                label: "Youth × AI × Research Lab",
                badge: "New Initiative · 2026",
                title1: "AI changed",
                title2: "the rules.",
                title3: "Learn them first.",
                subtitle: "Six months. Real AI skills. A life built on your terms — not someone else's blueprint. Ages 14–18.",
                cta: "See the Curriculum",
                cta2: "Partner With Us",
                note: "Free for partner institutions. Funded through corporate partnerships.",
            },
            urgency: {
                label: "The Window",
                title: "2027–2030. The most important window in a generation.",
                body: "Young people who are 14 today enter the workforce when AI restructures every industry. First-movers win. This is the moment to build the skills that compound.",
                stats: [
                    { val: "97M", label: "new roles emerging that require digital fluency", src: "WEF 2025" },
                    { val: "9×", label: "surge in AI-skill job vacancies since 2022", src: "World Bank" },
                    { val: "85M", label: "traditional jobs shifting — creating space at the top", src: "WEF 2025" },
                    { val: "1%", label: "of young people in institutions have structured AI education", src: "Research Lab est." },
                ],
            },
            reality: {
                label: "The Opportunity",
                title: "AI is the great equaliser.",
                subtitle: "It does not ask where you started. It asks what you can build.",
                sk_context: "A 16-year-old with the right skills can today do what previously required a team, a budget, and five years of experience.",
                cards: [
                    { icon: "◈", h: "Networks are built, not inherited.", s: "We build yours. Alumni community, mentor connections, real professional relationships — from day one." },
                    { icon: "◈", h: "The skills that matter changed.", s: "A 17-year-old with AI fluency is more capable than a graduate without it. We teach the new ones." },
                    { icon: "◈", h: "AI accelerates everyone who uses it.", s: "The window to get ahead is open now. Starting here is not a disadvantage — it is a clean slate." },
                    { icon: "◈", h: "Identity shapes everything.", s: "Knowing who you are at 16 is a strategic advantage. We build that first." },
                ],
                compare: {
                    label_before: "Before",
                    label_after: "After 6 months",
                    rows: [
                        ["No AI tools experience", "Fluent AI user + critical thinker"],
                        ["No digital portfolio", "Live portfolio, LinkedIn, published work"],
                        ["No professional network", "Alumni community + mentor connections"],
                        ["No cyber awareness", "Sovereign online — secure, private, sharp"],
                        ["No career literacy", "Knows money, work, and how to get hired"],
                    ],
                },
            },
            method: {
                label: "The Approach",
                title: "Not charity. Architecture.",
                subtitle: "Same frameworks we use with corporate leaders. Applied here because this is where it matters more.",
                principles: [
                    { num: "I", title: "Identity first, skills second", desc: "Know who you are and you can learn anything. We start with self-narrative and values before we open a single tool." },
                    { num: "II", title: "Real tools from day one", desc: "The same AI tools professionals use. No simplified versions. Full access. Proper judgment on how to use them." },
                    { num: "III", title: "Build, don't consume", desc: "Every module ends with something made. A created piece, a completed project. The portfolio is the proof." },
                    { num: "IV", title: "A network that stays", desc: "Peer learning. Mentors who've walked a similar path. Connections that don't end when the program does." },
                ],
                pillars: [
                    { num: "01", title: "Identity & Self-Architecture", desc: "Self-narrative, values, internal compass. The foundation everything else is built on.", tag: "Foundation" },
                    { num: "02", title: "AI Literacy & Critical Thinking", desc: "How to think with AI. Prompting as cognition. Recognising manipulation. Using AI as leverage.", tag: "Intelligence" },
                    { num: "03", title: "Creative Intelligence", desc: "Visual storytelling, content, design thinking. The human edge AI cannot replicate — activated.", tag: "Expression" },
                    { num: "04", title: "Cyber Safety & Sovereignty", desc: "Phishing, deepfakes, social engineering, data privacy. Own your digital life.", tag: "Protection" },
                    { num: "05", title: "Real-World Operating System", desc: "Finance, professional communication, personal brand, networking. The unwritten rules — made explicit.", tag: "Life Skills" },
                    { num: "06", title: "Making & Building", desc: "From idea to real product. Website, film, app, brand. Consumer to creator — permanently.", tag: "Creation" },
                ],
            },
            curriculum: {
                label: "The Curriculum",
                title: "Six months. Six shifts.",
                subtitle: "Progressive. Cumulative. Each month builds on the last. Each ends with something real.",
                months: [
                    {
                        num: "01", title: "WHO AM I IN THIS WORLD", sub: "Identity, narrative, agency",
                        detail: "Values mapping. Self-authoring. First AI conversation — questions about your own life. Rewriting your story on your terms.",
                        outcomes: ["Personal values map", "Self-narrative written + verbal", "First AI conversation log"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "02", title: "THE MACHINE AND YOU", sub: "AI literacy, critical thinking",
                        detail: "How LLMs actually work. What AI can and cannot do. Prompting as a thinking tool. Algorithmic bias, filter bubbles, recognising AI content.",
                        outcomes: ["Prompt portfolio (10+ prompts)", "AI audit of a news story", "Personal AI toolkit"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "03", title: "CREATE OR BE CREATED FOR", sub: "Creative tools, voice, expression",
                        detail: "Image gen, short video, audio, writing tools. Building a creative voice. First piece published publicly. Peer critique.",
                        outcomes: ["First published piece", "Creative portfolio entry", "Peer critique session"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "04", title: "STAY SAFE. STAY SOVEREIGN.", sub: "Cybersecurity, manipulation, online identity",
                        detail: "Phishing simulations. Deepfake detection. Social engineering patterns. Privacy audit. Who owns your data and your attention.",
                        outcomes: ["Personal security audit", "Deepfake detection challenge", "Privacy review completed"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "05", title: "BUILD SOMETHING REAL", sub: "First real project — AI-assisted",
                        detail: "Choose it. Build it. Ship it. Website, short film, product concept, community resource. Mentored. AI-assisted. Yours.",
                        outcomes: ["Completed + presented project", "Public URL or shareable format", "Portfolio entry #2"],
                        format: "8 × sessions — workshop + build + present",
                    },
                    {
                        num: "06", title: "LAUNCH", sub: "Professional presence, what comes next",
                        detail: "LinkedIn built. First cold outreach sent. How to talk about what you made. Alumni network activated. Demo Day.",
                        outcomes: ["Live digital presence", "First professional message sent", "Alumni network membership"],
                        format: "4 × sessions + Demo Day",
                    },
                ],
            },
            format: {
                label: "Program Format",
                title: "What it looks like.",
                items: [
                    { label: "Duration", val: "6 months", sub: "24 weeks" },
                    { label: "Sessions", val: "2× per week", sub: "2 hours each" },
                    { label: "Group size", val: "8–12", sub: "Small by design" },
                    { label: "Location", val: "We come to you", sub: "Your facility" },
                    { label: "Cost", val: "Free", sub: "For institutions" },
                    { label: "Facilitators", val: "2 per cohort", sub: "Lead + tech mentor" },
                ],
                note: "We run inside the institution. No transport, no logistics for you. We handle facilitation. You provide the space and the people.",
            },
            team: {
                label: "The Framework",
                title: "Built on what works.",
                subtitle: "Every method in this program is field-tested — not designed for youth, adapted from what actually shifts behaviour in adults. Applied here because the stakes are higher.",
                pillarsEN: [
                    { num: "I", title: "Taste over tools", desc: "We train judgment, not just usage. Anyone can open ChatGPT. Knowing what to do with it is the skill." },
                    { num: "II", title: "Leverage thinking", desc: "What can one person build now that previously required a team? We map that reality and work inside it." },
                    { num: "III", title: "Decision clarity", desc: "What to focus on, what to drop, how to act fast when nothing feels certain. The framework Roman uses with organisations — adapted for 16-year-olds navigating their own lives." },
                    { num: "IV", title: "Creative edge", desc: "AI makes execution cheap. The difference is creative intelligence — how you think, what you make, how you see. That is what we activate." },
                ],
                credit: "The team behind THE MINDSHIFT — Research Lab's flagship programme for corporate leaders.",
            },
            collab: {
                label: "Build With Us",
                title: "We are looking for partners.",
                subtitle: "This only works as an ecosystem.",
                partners: [
                    { icon: "🏛", title: "Youth Institutions", desc: "We come to you. Curriculum fits your schedule and your people. Zero logistics overhead." },
                    { icon: "🏛", title: "Government & NGOs", desc: "Grant structures, co-funding, official recognition. Built for scale." },
                    { icon: "🏢", title: "Corporate Partners", desc: "Real CSR. Your team mentors and hires. Your brand on outcomes — not optics." },
                    { icon: "🔬", title: "Researchers & Educators", desc: "We measure everything. Build the evidence base with us." },
                ],
            },
            faq: {
                label: "Questions",
                title: "What people ask.",
                items: [
                    { q: "Is this free for institutions?", a: "Yes. Fully funded through corporate partnerships and grants. You provide space and participants. We handle everything else." },
                    { q: "What's the time commitment?", a: "Two 2-hour sessions per week for 6 months. We come to you. You provide a room and the young people. That's it." },
                    { q: "What if participants are disengaged?", a: "Month one is all identity and self-authoring — no screens, no tools. People engage when they feel like the subject, not the object. We design for this." },
                    { q: "How is this different from a coding course?", a: "Different category. We build people — identity, critical thinking, creative voice, real-world literacy. AI tools are instruments, not the curriculum." },
                    { q: "Can you run this outside Bratislava?", a: "Yes. Pilot cohorts start in Bratislava. Actively expanding to Košice, Banská Bystrica, and beyond." },
                    { q: "What do participants leave with?", a: "Digital portfolio. LinkedIn. Completed project. AI fluency. Alumni network. At least one mentor relationship. Tangible. Verifiable." },
                ],
            },
            cta: {
                title: "Not a proposal.",
                title2: "A beginning.",
                sub: "Working with young people — or want to fund something real? One call. No pitch deck.",
                btn: "Book a Call",
                email: "andrea@sorrywecan.com",
                note: "Or email directly:",
            },
        },
        sk: {
            meta: { title: "NEXT GEN — Iniciatíva Research Lab pre mládež" },
            hero: {
                label: "Mládež × AI × Research Lab",
                badge: "Nová iniciatíva · 2026",
                title1: "AI zmenilo",
                title2: "pravidlá.",
                title3: "Nauč sa ich ako prvý.",
                subtitle: "Šesť mesiacov. Skutočné AI zručnosti. Život postavený podľa vlastných podmienok. Vek 14–18.",
                cta: "Pozri kurz",
                cta2: "Stať sa partnerom",
                note: "Pre partnerské inštitúcie bezplatné. Financované cez korporátne partnerstvá.",
            },
            urgency: {
                label: "Okno",
                title: "2027–2030. Najdôležitejšie okno pre generáciu.",
                body: "Mladí, ktorí majú dnes 14 rokov, vstúpia na trh práce presne vtedy, keď AI preformuje každé odvetvie. Kto je pripravený ako prvý, vyhrá. Toto je moment na budovanie zručností, ktoré sa nabaľujú.",
                stats: [
                    { val: "97M", label: "nových pozícií vyžadujúcich digitálnu gramotnosť", src: "WEF 2025" },
                    { val: "9×", label: "nárast voľných miest s AI zručnosťami od 2022", src: "World Bank" },
                    { val: "85M", label: "tradičných pozícií sa mení — priestor na vrchu rastie", src: "WEF 2025" },
                    { val: "1%", label: "mladých v inštitúciách má štruktúrované AI vzdelávanie", src: "Research Lab odhad" },
                ],
            },
            reality: {
                label: "Príležitosť",
                title: "AI je veľký vyrovnávač.",
                subtitle: "Nezaujíma ho, kde si začal. Zaujíma ho, čo dokážeš postaviť.",
                sk_context: "Šestnásťročný so správnymi zručnosťami dnes dokáže to, čo predtým vyžadovalo tím, rozpočet a päť rokov praxe.",
                cards: [
                    { icon: "◈", h: "Siete sa budujú, nededia.", s: "Tvoju sieť budujeme od prvého dňa. Alumni komunita, mentori, skutočné profesionálne spojenia." },
                    { icon: "◈", h: "Dôležité zručnosti sa zmenili.", s: "Sedemnásťročný s AI gramotnosťou predbehne absolventa bez nej. Učíme tie nové." },
                    { icon: "◈", h: "AI urýchľuje každého, kto ju používa.", s: "Okno na získanie náskoku je otvorené teraz. Čistý štít nie je nevýhoda — je to výhoda." },
                    { icon: "◈", h: "Identita formuje všetko.", s: "Vedieť, kto si vo veku 16, je strategická výhoda. Tú budujeme ako prvú." },
                ],
                compare: {
                    label_before: "Pred programom",
                    label_after: "Po 6 mesiacoch",
                    rows: [
                        ["Žiadna skúsenosť s AI nástrojmi", "Zdatný používateľ AI + kritické myslenie"],
                        ["Žiadne digitálne portfólio", "Živé portfólio, LinkedIn, publikovaná tvorba"],
                        ["Žiadna profesionálna sieť", "Alumni komunita + mentoringové spojenia"],
                        ["Žiadne povedomie o kybernetickej bezpečnosti", "Digitálne suverénny — bezpečný, súkromný, bystrý"],
                        ["Žiadna kariérna gramotnosť", "Rozumie peniazom, práci a ako sa uplatniť"],
                    ],
                },
            },
            method: {
                label: "Prístup",
                title: "Nie charita. Architektúra.",
                subtitle: "Tie isté frameworky, ktoré používame s korporátnymi lídrami. Aplikované tu, pretože tu záleží viac.",
                principles: [
                    { num: "I", title: "Najprv identita, potom zručnosti", desc: "Kto vie, kto je, dokáže sa naučiť čokoľvek. Začíname vlastným príbehom a hodnotami — skôr než otvoríme akýkoľvek nástroj." },
                    { num: "II", title: "Skutočné nástroje od prvého dňa", desc: "Tie isté AI nástroje, aké používajú profesionáli. Bez zjednodušovania. Plný prístup. Správny úsudok." },
                    { num: "III", title: "Budovať, nie konzumovať", desc: "Každý modul končí niečím vytvoreným. Portfólio je dôkaz." },
                    { num: "IV", title: "Sieť, ktorá zostáva", desc: "Vzájomné učenie. Mentori s podobnou cestou. Spojenia, ktoré nekončia so programom." },
                ],
                pillars: [
                    { num: "01", title: "Identita a sebaarchitektúra", desc: "Vlastný príbeh, hodnoty, vnútorný kompas. Základ, na ktorom stojí všetko ostatné.", tag: "Základ" },
                    { num: "02", title: "AI gramotnosť a kritické myslenie", desc: "Myslieť s AI. Promptovanie ako kognícia. Rozpoznávanie manipulácie. AI ako páka.", tag: "Inteligencia" },
                    { num: "03", title: "Kreatívna inteligencia", desc: "Vizuálne rozprávanie, tvorba obsahu, dizajnové myslenie. Ľudská výhoda, ktorú AI nenahradí — prebúdzaná.", tag: "Vyjadrenie" },
                    { num: "04", title: "Kybernetická bezpečnosť a suverenita", desc: "Phishing, deepfakes, sociálne inžinierstvo, ochrana dát. Vlastni svoj digitálny život.", tag: "Ochrana" },
                    { num: "05", title: "Operačný systém reálneho sveta", desc: "Financie, komunikácia, osobná značka, networking. Nepísané pravidlá — zverejnené.", tag: "Životné zručnosti" },
                    { num: "06", title: "Tvorba a budovanie", desc: "Od nápadu k reálnemu produktu. Web, film, aplikácia, brand. Z konzumenta na tvorcu — trvale.", tag: "Tvorba" },
                ],
            },
            curriculum: {
                label: "Kurz",
                title: "Šesť mesiacov. Šesť posunov.",
                subtitle: "Postupný. Kumulatívny. Každý mesiac stavia na predchádzajúcom. Každý končí niečím skutočným.",
                months: [
                    {
                        num: "01", title: "KTO SOM V TOMTO SVETE", sub: "Identita, príbeh, agentúra",
                        detail: "Mapovanie hodnôt. Sebaautorstvo. Prvá AI konverzácia — otázky o vlastnom živote. Vlastný príbeh napísaný na vlastných podmienkach.",
                        outcomes: ["Mapa osobných hodnôt", "Vlastný príbeh písomný + ústny", "Prvý denník AI konverzácií"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "02", title: "STROJ A TY", sub: "AI gramotnosť, kritické myslenie",
                        detail: "Ako LLM skutočne fungujú. Čo AI dokáže a čo nie. Promptovanie ako myšlienkový nástroj. Algoritmická zaujatosť, filtračné bubliny, rozpoznávanie AI obsahu.",
                        outcomes: ["Portfólio promptov (10+)", "AI audit správy", "Osobný AI toolkit"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "03", title: "TVORIŤ ALEBO BYŤ TVORENÝ", sub: "Kreatívne nástroje, hlas, sebavyjadrenie",
                        detail: "Generovanie obrázkov, krátke video, zvuk, písacie nástroje. Budovanie kreatívneho hlasu. Prvá tvorba publikovaná verejne. Vzájomná kritika.",
                        outcomes: ["Prvá publikovaná tvorba", "Vstup do kreatívneho portfólia", "Vzájomná kritika"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "04", title: "ZOSTAŤ BEZPEČNÝ. ZOSTAŤ SUVERÉNNY.", sub: "Kybernetická bezpečnosť, manipulácia, online identita",
                        detail: "Phishing simulácie. Detekcia deepfakes. Vzorce sociálneho inžinierstva. Audit súkromia. Kto vlastní tvoje dáta a tvoju pozornosť.",
                        outcomes: ["Osobný bezpečnostný audit", "Výzva detekcie deepfake", "Audit súkromia dokončený"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "05", title: "POSTAV NIEČO SKUTOČNÉ", sub: "Prvý projekt — s pomocou AI",
                        detail: "Vyber si to. Postav to. Spusti to. Web, krátky film, produktový koncept, komunitný zdroj. S mentorom. S AI. Tvoje.",
                        outcomes: ["Dokončený + prezentovaný projekt", "Verejná URL alebo zdieľateľný formát", "Vstup do portfólia č. 2"],
                        format: "8 × stretnutí — workshop + tvorba + prezentácia",
                    },
                    {
                        num: "06", title: "ŠTART", sub: "Profesionálna prítomnosť, čo príde potom",
                        detail: "LinkedIn postavený. Prvý studený kontakt odoslaný. Ako hovoriť o tom, čo si postavil. Alumni sieť aktivovaná. Demo Day.",
                        outcomes: ["Živá digitálna prítomnosť", "Prvá profesionálna správa odoslaná", "Členstvo v alumni sieti"],
                        format: "4 × stretnutia + Demo Day",
                    },
                ],
            },
            format: {
                label: "Formát programu",
                title: "Ako to vyzerá.",
                items: [
                    { label: "Trvanie", val: "6 mesiacov", sub: "24 týždňov" },
                    { label: "Stretnutia", val: "2× týždenne", sub: "2 hodiny každé" },
                    { label: "Veľkosť skupiny", val: "8–12", sub: "Malé zámerne" },
                    { label: "Miesto", val: "Prídeme k vám", sub: "Vaše zariadenie" },
                    { label: "Cena", val: "Bezplatne", sub: "Pre inštitúcie" },
                    { label: "Facilitátori", val: "2 na kohortu", sub: "Vedúci + tech mentor" },
                ],
                note: "Realizujeme priamo v inštitúcii. Žiadna doprava, žiadna logistika pre vás. Facilitáciu máme my. Vy poskytnete priestor a ľudí.",
            },
            team: {
                label: "Metodológia",
                title: "Postavené na tom, čo funguje.",
                subtitle: "Každá metóda v programe je overená v praxi — nie navrhnutá pre mládež, ale prispôsobená z toho, čo skutočne mení správanie dospelých. Aplikovaná tu, pretože tu sú stávky vyššie.",
                pillarsEN: [
                    { num: "I", title: "Vkus nad nástrojmi", desc: "Trénujeme úsudok, nie len obsluhu. ChatGPT vie otvoriť ktokoľvek. Vedieť, čo s ním urobiť — to je zručnosť." },
                    { num: "II", title: "Myslenie cez páku", desc: "Čo dokáže dnes jeden človek postaviť tam, kde predtým bol potrebný tím? Mapujeme túto realitu a pracujeme v nej." },
                    { num: "III", title: "Rozhodovacia jasnosť", desc: "Na čo sa sústrediť, čo pustiť, ako konať rýchlo keď nič nie je isté. Framework, ktorý Roman používa v organizáciách — prispôsobený pre 16-ročných navigujúcich vlastný život." },
                    { num: "IV", title: "Kreatívna výhoda", desc: "AI robí exekúciu lacnou. Rozdiel je v kreatívnej inteligencii — ako myslíš, čo vytváraš, ako vidíš. To aktivujeme." },
                ],
                credit: "Tím za THE MINDSHIFT — vlajkovým programom Research Lab pre korporátnych lídrov.",
            },
            collab: {
                label: "Buduj s nami",
                title: "Hľadáme partnerov.",
                subtitle: "Funguje to iba ako ekosystém.",
                partners: [
                    { icon: "🏛", title: "Mládežnícke inštitúcie", desc: "Prídeme k vám. Kurz sa prispôsobí vášmu rozvrhu a ľuďom. Nulová logistická záťaž." },
                    { icon: "🏛", title: "Štát a mimovládky", desc: "Grantové rámce, spolufinancovanie, uznanie. Budované pre škálu." },
                    { icon: "🏢", title: "Korporátni partneri", desc: "Skutočné CSR. Váš tím mentoruje a prijíma. Značka na výsledkoch — nie na optics." },
                    { icon: "🔬", title: "Výskumníci a pedagógovia", desc: "Všetko meriame. Budujte dôkazovú základňu s nami." },
                ],
            },
            faq: {
                label: "Otázky",
                title: "Čo ľudia pýtajú.",
                items: [
                    { q: "Je to pre inštitúcie naozaj bezplatné?", a: "Áno. Plne financované cez korporátne partnerstvá a granty. Poskytnete priestor a účastníkov. Všetko ostatné máme my." },
                    { q: "Aký je časový záväzok?", a: "Dve 2-hodinové stretnutia týždenne počas 6 mesiacov. Prídeme k vám. Poskytnete miestnosť a mladých ľudí. To je všetko." },
                    { q: "Čo ak účastníci nie sú zaangažovaní?", a: "Prvý mesiac je celý o identite a vlastnom príbehu — nie o obrazovkách. Ľudia sa zapoja, keď cítia, že sú subjektom, nie objektom. Na to máme metódy." },
                    { q: "Čím sa to líši od kurzu programovania?", a: "Iná kategória. Neučíme softvér. Budujeme ľudí — identitu, kritické myslenie, kreatívny hlas, gramotnosť pre reálny svet." },
                    { q: "Dá sa to realizovať aj mimo Bratislavy?", a: "Áno. Pilotné kohorty v Bratislave. Aktívne expandujeme do Košíc, Banskej Bystrice a ďalej." },
                    { q: "Čo si účastníci odnesú?", a: "Digitálne portfólio. LinkedIn. Dokončený projekt. AI gramotnosť. Alumni sieť. Aspoň jedno mentorské spojenie. Hmatateľné. Overiteľné." },
                ],
            },
            cta: {
                title: "Nie návrh.",
                title2: "Začiatok.",
                sub: "Pracujete s mladými ľuďmi — alebo chcete financovať niečo skutočné? Jeden hovor. Bez pitch decku.",
                btn: "Dohodnite hovor",
                email: "andrea@sorrywecan.com",
                note: "Alebo napíšte priamo:",
            },
        },
    }

    const c = content[lang]

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a]">
            <TopNav lang={lang} />

            {/* LANG TOGGLE — sticky top right */}
            <div className="fixed top-[72px] right-4 md:right-6 z-[99] flex gap-1 bg-[#f5f5f3]/90 backdrop-blur-md border border-black/10 rounded-full px-1 py-1 shadow-sm">
                {(["en", "sk"] as Lang[]).map((l) => (
                    <button key={l} onClick={() => setLang(l)}
                        className={`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full transition-all ${lang === l ? "bg-black text-white" : "text-black/40 hover:text-black"}`}>
                        {l.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* ─── HERO ─── */}
            <section className="relative min-h-[95vh] flex flex-col justify-end pb-24 px-6 md:px-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #0047BB 0%, transparent 60%), radial-gradient(circle at 80% 20%, #c2a378 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f3] to-transparent z-10" />

                <div className="max-w-5xl mx-auto w-full relative z-20">
                    <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-3 mb-10">
                        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">{c.hero.label}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 border border-white/20 px-3 py-1 rounded-full">{c.hero.badge}</span>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.2)} className="font-syne font-bold text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tighter text-white mb-10">
                        {c.hero.title1}<br />
                        {c.hero.title2}<br />
                        <span className="text-[#0047BB]">{c.hero.title3}</span>
                    </motion.h1>

                    <motion.p {...fadeUp(0.35)} className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 font-light">
                        {c.hero.subtitle}
                    </motion.p>

                    <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-4">
                        <a href="#curriculum" className="bg-[#0047BB] text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            {c.hero.cta} ↓
                        </a>
                        <a href="#collab" className="border border-white/30 text-white/70 px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:border-white hover:text-white transition-colors">
                            {c.hero.cta2}
                        </a>
                    </motion.div>

                    <motion.p {...fadeUp(0.55)} className="mt-8 text-xs text-white/30 font-light">
                        {c.hero.note}
                    </motion.p>
                </div>
            </section>

            {/* ─── WHY 2026 ─── */}
            <section className="py-24 px-6 md:px-20 bg-[#0047BB] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 block mb-5">{c.urgency.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter mb-8 max-w-3xl leading-tight">{c.urgency.title}</h2>
                        <p className="text-xl text-white/70 max-w-3xl leading-relaxed font-light mb-16">{c.urgency.body}</p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20">
                        {c.urgency.stats.map((s, i) => (
                            <motion.div key={i} {...inView(i * 0.08)} className="bg-[#0047BB] p-6 md:p-8">
                                <div className="font-syne font-bold text-4xl md:text-5xl mb-3">{s.val}</div>
                                <div className="text-xs text-white/60 leading-relaxed mb-2">{s.label}</div>
                                <div className="text-[9px] text-white/30 uppercase tracking-widest">{s.src}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── REALITY ─── */}
            <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-5">{c.reality.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter mb-4">{c.reality.title}</h2>
                        <p className="text-xl text-white/50 font-light mb-8">{c.reality.subtitle}</p>
                        <div className="inline-block border border-white/10 px-5 py-3 text-sm text-white/40 italic max-w-2xl leading-relaxed">
                            {c.reality.sk_context}
                        </div>
                    </motion.div>

                    {/* Problem cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mb-16">
                        {c.reality.cards.map((card, i) => (
                            <motion.div key={i} {...inView(i * 0.07)} className="bg-[#111] p-8 border-l-2 border-transparent hover:border-[#0047BB] transition-colors">
                                <div className="text-[#0047BB] text-2xl mb-4">{card.icon}</div>
                                <h3 className="font-syne font-bold text-xl mb-2">{card.h}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{card.s}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Before / After */}
                    <motion.div {...inView()} className="border border-white/10">
                        <div className="grid grid-cols-2 border-b border-white/10">
                            <div className="p-5 text-[10px] font-bold uppercase tracking-widest text-red-400/70">{c.reality.compare.label_before}</div>
                            <div className="p-5 text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 border-l border-white/10">{c.reality.compare.label_after}</div>
                        </div>
                        {c.reality.compare.rows.map((row, i) => (
                            <div key={i} className={`grid grid-cols-2 ${i < c.reality.compare.rows.length - 1 ? "border-b border-white/5" : ""}`}>
                                <div className="p-5 text-sm text-white/40 border-r border-white/10">{row[0]}</div>
                                <div className="p-5 text-sm text-white/80">{row[1]}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── METHOD / PRINCIPLES ─── */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-5">{c.method.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter mb-4">{c.method.title}</h2>
                        <p className="text-lg text-black/55 max-w-2xl leading-relaxed font-light">{c.method.subtitle}</p>
                    </motion.div>

                    {/* 4 Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 mb-16">
                        {c.method.principles.map((p, i) => (
                            <motion.div key={i} {...inView(i * 0.08)} className="bg-[#f5f5f3] hover:bg-white transition-colors p-8">
                                <div className="font-syne font-bold text-3xl text-black/10 mb-4">{p.num}</div>
                                <h3 className="font-syne font-bold text-lg mb-3">{p.title}</h3>
                                <p className="text-sm text-black/55 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 6 Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
                        {c.method.pillars.map((p, i) => (
                            <motion.div key={i} {...inView(i * 0.06)} className="bg-[#f5f5f3] hover:bg-white transition-colors p-7 group">
                                <div className="flex items-start justify-between mb-5">
                                    <span className="font-syne font-bold text-4xl text-black/8 group-hover:text-[#0047BB]/15 transition-colors">{p.num}</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/25 px-2 py-0.5">{p.tag}</span>
                                </div>
                                <h3 className="font-syne font-bold text-base tracking-tight mb-2">{p.title}</h3>
                                <p className="text-xs text-black/50 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CURRICULUM ─── */}
            <section id="curriculum" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-5">{c.curriculum.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter mb-4">{c.curriculum.title}</h2>
                        <p className="text-lg text-white/45 max-w-2xl font-light">{c.curriculum.subtitle}</p>
                    </motion.div>

                    <div className="space-y-px bg-white/5">
                        {c.curriculum.months.map((m, i) => (
                            <motion.div key={i} {...inView(i * 0.06)} className="bg-[#0f0f0f] hover:bg-[#161616] transition-colors group">
                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                        <div className="flex-shrink-0 w-16">
                                            <span className="font-syne font-bold text-5xl text-white/8 group-hover:text-white/12 transition-colors">{m.num}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-[#0047BB] block mb-1">
                                                {lang === "en" ? `Month ${parseInt(m.num)}` : `Mesiac ${parseInt(m.num)}`}
                                            </span>
                                            <h3 className="font-syne font-bold text-2xl md:text-3xl tracking-tight mb-1">{m.title}</h3>
                                            <p className="text-white/35 text-sm italic mb-4">{m.sub}</p>
                                            <p className="text-white/55 text-sm leading-relaxed mb-5 max-w-xl">{m.detail}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {m.outcomes.map((o, j) => (
                                                    <span key={j} className="text-[9px] font-bold uppercase tracking-wider text-emerald-400/60 border border-emerald-400/15 px-3 py-1.5">
                                                        ✓ {o}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-[9px] text-white/25 uppercase tracking-widest">{m.format}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FORMAT BLOCK ─── */}
            <section className="py-20 px-6 md:px-20 bg-[#f0ece6]">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/35 block mb-4">{c.format.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tighter">{c.format.title}</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-black/10 mb-10">
                        {c.format.items.map((item, i) => (
                            <motion.div key={i} {...inView(i * 0.06)} className="bg-[#f0ece6] hover:bg-white transition-colors p-6 text-center">
                                <div className="font-syne font-bold text-2xl mb-1">{item.val}</div>
                                <div className="text-[9px] text-black/35 uppercase tracking-widest mb-1">{item.sub}</div>
                                <div className="text-[10px] text-black/55">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p {...inView()} className="text-sm text-black/50 leading-relaxed max-w-2xl border-l-2 border-[#0047BB]/30 pl-5 italic">
                        {c.format.note}
                    </motion.p>
                </div>
            </section>

            {/* ─── TEAM ─── */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/35 block mb-4">{c.team.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tighter mb-3">{c.team.title}</h2>
                        <p className="text-lg text-black/45 font-light max-w-xl">{c.team.subtitle}</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 mb-8">
                        {c.team.pillarsEN.map((p, i) => (
                            <motion.div key={i} {...inView(i * 0.07)}
                                className="bg-[#f5f5f3] hover:bg-white transition-colors p-8">
                                <div className="font-syne font-bold text-3xl text-black/10 mb-4">{p.num}</div>
                                <h3 className="font-syne font-bold text-lg mb-3">{p.title}</h3>
                                <p className="text-sm text-black/55 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p {...inView()} className="text-xs text-black/35 border-l-2 border-[#0047BB]/20 pl-4 italic">
                        {c.team.credit}
                    </motion.p>
                </div>
            </section>

            {/* ─── COLLABORATION ─── */}
            <section id="collab" className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-white">
                <div className="max-w-5xl mx-auto">
                    <motion.div {...inView()} className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-4">{c.collab.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-6xl tracking-tighter mb-4">{c.collab.title}</h2>
                        <p className="text-lg text-white/40 font-light">{c.collab.subtitle}</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                        {c.collab.partners.map((p, i) => (
                            <motion.div key={i} {...inView(i * 0.08)}
                                className="bg-[#111] hover:bg-[#0047BB] transition-colors p-8 group cursor-default">
                                <div className="text-2xl mb-5">{p.icon}</div>
                                <h3 className="font-syne font-bold text-lg mb-3 group-hover:text-white">{p.title}</h3>
                                <p className="text-sm text-white/50 group-hover:text-white/80 leading-relaxed transition-colors">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
                <div className="max-w-3xl mx-auto">
                    <motion.div {...inView()} className="mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/35 block mb-4">{c.faq.label}</span>
                        <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tighter">{c.faq.title}</h2>
                    </motion.div>
                    <div className="divide-y divide-black/8">
                        {c.faq.items.map((item, i) => (
                            <motion.div key={i} {...inView(i * 0.05)}>
                                <button
                                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                    className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                                >
                                    <span className="font-syne font-bold text-base group-hover:text-[#0047BB] transition-colors">{item.q}</span>
                                    <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border border-black/20 rounded-full text-[10px] transition-transform ${faqOpen === i ? "rotate-45 border-[#0047BB] text-[#0047BB]" : ""}`}>+</span>
                                </button>
                                <AnimatePresence>
                                    {faqOpen === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-sm text-black/60 leading-relaxed">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-32 px-6 md:px-20 bg-[#0a0a0a] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #0047BB 0%, transparent 70%)" }} />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div {...inView()}>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter mb-3">{c.cta.title}</h2>
                        <h2 className="font-syne font-bold text-5xl md:text-7xl tracking-tighter text-white/25 mb-12">{c.cta.title2}</h2>
                        <p className="text-xl text-white/55 mb-12 font-light leading-relaxed max-w-xl mx-auto">{c.cta.sub}</p>
                        <div className="flex flex-col items-center gap-5">
                            <a href="https://cal.com/sorrywecan" target="_blank" rel="noopener noreferrer"
                                className="bg-white text-black px-14 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#0047BB] hover:text-white transition-colors">
                                {c.cta.btn} →
                            </a>
                            <div className="text-xs text-white/25">
                                {c.cta.note} <a href={`mailto:${c.cta.email}`} className="text-white/50 hover:text-white underline transition-colors">{c.cta.email}</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="py-8 px-6 md:px-20 bg-[#050505] text-white/20">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-syne font-bold text-sm">RESEARCH<span className="text-[#0047BB]">LAB</span></span>
                    <span className="text-xs uppercase tracking-widest">{lang === "en" ? "Youth Initiative · 2026" : "Iniciatíva pre mládež · 2026"}</span>
                    <span className="text-xs">© 2026 SORRYWECAN</span>
                </div>
            </footer>
        </div>
    )
}
