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
                title1: "The world won't",
                title2: "wait for them.",
                title3: "But we will.",
                subtitle: "A six-month program for young people aged 14–18 in care systems — building the identity, AI skills, and real-world readiness that the system never gave them.",
                cta: "See the Curriculum",
                cta2: "Partner With Us",
                note: "Free for participating care homes. Funded through corporate partnerships.",
            },
            urgency: {
                label: "Why 2026",
                title: "The most consequential window in a generation.",
                body: "The young people who are 14 today will enter the workforce in 2027–2030. That is the exact window when AI will restructure every major industry. They will either be the ones who shape that change — or the ones it leaves behind. There is no neutral position. The question is who prepares them.",
                stats: [
                    { val: "85M", label: "jobs will disappear by 2030", src: "World Economic Forum" },
                    { val: "97M", label: "new roles will emerge requiring digital fluency", src: "WEF 2025" },
                    { val: "9×", label: "surge in AI-skill job vacancies since 2022", src: "World Bank" },
                    { val: "56%", label: "of companies see no ROI on AI yet — the skills gap is real", src: "PwC 2026" },
                ],
            },
            reality: {
                label: "The Starting Point",
                title: "They are not behind because they are less.",
                subtitle: "They are behind because nobody gave them the map.",
                sk_context: "Over 4,500 young people are in institutional care in Slovakia. Every year, hundreds leave the system at 18 with no family network, no safety net, and no digital literacy.",
                cards: [
                    { icon: "◈", h: "No network. No playbook.", s: "Nobody taught them the rules that everyone else takes for granted. The unspoken code of professional life." },
                    { icon: "◈", h: "The wrong skills.", s: "School prepared them for a world already disappearing. Not for one where a 17-year-old can build a product with AI in a weekend." },
                    { icon: "◈", h: "AI is accelerating the gap.", s: "The divide between digitally fluent and digitally excluded is widening every month. Passivity is not an option." },
                    { icon: "◈", h: "The window is now.", s: "Habits and identity formed at 16 shape everything that follows. Intervene here, or the cost compounds for decades." },
                ],
                compare: {
                    label_before: "Without the program",
                    label_after: "After 6 months",
                    rows: [
                        ["No understanding of AI tools", "Fluent AI user + critical thinker"],
                        ["No digital portfolio or presence", "Live portfolio, LinkedIn, published work"],
                        ["No professional network", "Alumni community + mentor connections"],
                        ["Vulnerable to online manipulation", "Cyber-aware, privacy-literate, sovereign online"],
                        ["No financial or career literacy", "Understands money, work, and how to get hired"],
                    ],
                },
            },
            method: {
                label: "The Approach",
                title: "Not charity. Architecture.",
                subtitle: "We do not come with pity. We come with frameworks, tools, and the same standards we bring to corporate leaders — adapted for young people who need them even more urgently.",
                principles: [
                    { num: "I", title: "Identity first, skills second", desc: "A young person who knows who they are can learn anything. We start with self-narrative, values, and agency before we open a single tool." },
                    { num: "II", title: "Real tools, not toy exercises", desc: "From session one, they use actual AI tools — the same ones professionals use. No dumbing down. Full access. Proper judgment about how to use them." },
                    { num: "III", title: "Build, don't consume", desc: "Every module ends with a made thing: a created piece, a completed audit, a launched project. The portfolio is the proof." },
                    { num: "IV", title: "Community over classroom", desc: "Peer learning. Mentors who look like them or have been through something similar. A network that does not disappear when the program ends." },
                ],
                pillars: [
                    { num: "01", title: "Identity & Self-Architecture", desc: "Self-narrative, values mapping, internal compass. The foundation everything else is built on.", tag: "Foundation" },
                    { num: "02", title: "AI Literacy & Critical Thinking", desc: "How to think with AI. Prompting as cognition. Recognising algorithmic manipulation. Using AI as leverage.", tag: "Intelligence" },
                    { num: "03", title: "Creative Intelligence", desc: "Visual storytelling, content creation, design thinking. The human skills AI cannot replicate — activated.", tag: "Expression" },
                    { num: "04", title: "Cyber Safety & Sovereignty", desc: "Phishing, deepfakes, social engineering, data privacy. They leave knowing how to protect themselves online.", tag: "Protection" },
                    { num: "05", title: "Real-World Operating System", desc: "Financial basics, professional communication, personal brand, networking. The unwritten rules — made explicit.", tag: "Life Skills" },
                    { num: "06", title: "Making & Building", desc: "From idea to real product. Website, film, app, brand. The shift from passive to creator — permanent.", tag: "Creation" },
                ],
            },
            curriculum: {
                label: "The Curriculum",
                title: "Six months. Six shifts.",
                subtitle: "Progressive. Cumulative. Each month builds on the last. Each month ends with something real.",
                months: [
                    {
                        num: "01", title: "WHO AM I IN THIS WORLD", sub: "Identity, narrative, agency",
                        detail: "Self-authoring exercises. Values mapping. Rewriting the story from 'system kid' to 'person with agency'. First AI conversation — asking questions about their own life. Peer introductions.",
                        outcomes: ["Personal values map", "Self-narrative (written + verbal)", "First AI conversation log"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "02", title: "THE MACHINE AND YOU", sub: "AI literacy, critical thinking",
                        detail: "How large language models work — demystified. What AI can and cannot do. Prompt engineering as a thinking tool. Recognising AI-generated content. Understanding algorithmic bias and filter bubbles.",
                        outcomes: ["Prompt portfolio (10+ real-use prompts)", "AI audit of a news story", "Personal AI toolkit doc"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "03", title: "CREATE OR BE CREATED FOR", sub: "Creative tools, voice, expression",
                        detail: "Image generation, short-form video, audio editing, writing tools. Building a creative voice. Storytelling structure. First piece published publicly. Peer critique and iteration.",
                        outcomes: ["First published creative piece", "Creative portfolio entry", "Facilitated peer critique"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "04", title: "STAY SAFE. STAY SOVEREIGN.", sub: "Cybersecurity, manipulation, online identity",
                        detail: "Phishing simulations. Deepfake detection. Social engineering patterns. Password hygiene. Privacy settings audit. What happens to your data. Understanding who owns your attention.",
                        outcomes: ["Personal security audit", "Deepfake detection challenge passed", "Digital privacy review completed"],
                        format: "4 × weekly sessions (2h each)",
                    },
                    {
                        num: "05", title: "BUILD SOMETHING REAL", sub: "First real project — AI-assisted",
                        detail: "Project month. Each participant proposes and builds one real thing: a website, short film, product concept, community resource, small business idea. Mentored. AI-assisted. Genuinely theirs.",
                        outcomes: ["Completed and presented project", "Public URL or shareable format", "Portfolio entry #2"],
                        format: "8 × sessions — workshop + build + present",
                    },
                    {
                        num: "06", title: "LAUNCH", sub: "Professional presence, what comes next",
                        detail: "LinkedIn profile built. Professional email communication. First cold outreach sent. How to talk about what they built. Continuing education options. Alumni network activation. Celebration.",
                        outcomes: ["Live digital presence (LinkedIn + portfolio)", "First professional message sent", "Alumni network membership"],
                        format: "4 × sessions + Demo Day event",
                    },
                ],
            },
            format: {
                label: "Program Format",
                title: "What it actually looks like.",
                items: [
                    { label: "Duration", val: "6 months", sub: "24 weeks" },
                    { label: "Sessions", val: "2× per week", sub: "2 hours each" },
                    { label: "Group size", val: "8–12 youth", sub: "Small by design" },
                    { label: "Location", val: "We come to you", sub: "In your facility" },
                    { label: "Cost", val: "Free", sub: "For care homes" },
                    { label: "Facilitators", val: "2 per cohort", sub: "Lead + tech mentor" },
                ],
                note: "We run cohorts inside the care homes — no transport required, no outside logistics for institutions. We handle the facilitation. You provide the space and the young people.",
            },
            team: {
                label: "Who Runs This",
                title: "Real practitioners. Not theorists.",
                subtitle: "The same people who run THE MINDSHIFT for corporate leaders bring those frameworks to young people who need them more.",
                members: [
                    {
                        name: "Roland Vraník",
                        role: "CREATIVE LEAD",
                        company: "Creative Director / Founder, SORRYWECAN",
                        bio: "Creative director behind campaigns for Tatra banka, Meta, Audi, Samsung. Builds with AI daily. Believes creative intelligence is the most powerful skill a young person can develop.",
                        url: "https://sorrywecan.com/",
                        image: "/founders/roland.jpg",
                    },
                    {
                        name: "Ján Koscelanský",
                        role: "TECH LEAD",
                        company: "CPO / Co-founder, SUDOLABS",
                        bio: "Co-founded SUDOLABS. Years building digital products in fintech, health, enterprise. Knows exactly what young people need to build — and what they don't.",
                        url: "https://sudolabs.com/",
                        image: "/founders/jan.jpg",
                    },
                    {
                        name: "Roman Pii Wagner",
                        role: "FACILITATION LEAD",
                        company: "Transformational Design",
                        bio: "Helps people figure out what matters, what to let go, and how to act. His methods work equally on C-suite executives and 16-year-olds — for the same reason.",
                        url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk",
                        image: "/founders/roman.jpg",
                    },
                ],
            },
            collab: {
                label: "Collaboration",
                title: "We are looking for partners.",
                subtitle: "We cannot do this alone. This program only works as an ecosystem — not as an isolated workshop.",
                partners: [
                    { icon: "🏛", title: "Children's Homes & Care Institutions", desc: "We come to you. Curriculum adapts to your schedule, your young people, your environment. No logistics overhead for you." },
                    { icon: "🏛", title: "Government & NGOs", desc: "Grant frameworks, co-funding structures, official recognition. We know how to build for scale and sustainability." },
                    { icon: "🏢", title: "Corporate Partners", desc: "CSR with real, measurable impact. Your team mentors, co-creates, and hires. Your brand attached to outcomes, not optics." },
                    { icon: "🔬", title: "Researchers & Educators", desc: "We want to measure what works. Studying youth outcomes, digital literacy, or resilience? Build the evidence base with us." },
                ],
            },
            faq: {
                label: "Questions",
                title: "What people usually ask.",
                items: [
                    { q: "Is this really free for care homes?", a: "Yes. The program is fully funded through corporate partnerships and institutional grants. Care homes provide the space and participants. We provide everything else." },
                    { q: "What is the time commitment for the institution?", a: "Two 2-hour sessions per week for 6 months. We come to you and handle facilitation — you need to provide a room and make sure the young people are there. That's it." },
                    { q: "What if the young people are disengaged or resistant?", a: "We design for this. The first month is entirely about identity and self-authoring — not screens, not tools. Young people engage when they feel they are the subject, not the object. We have methods for that." },
                    { q: "How is this different from a coding course or a workshop?", a: "Completely different. We don't teach software. We build people. Identity, critical thinking, creative voice, and real-world literacy. The AI tools are instruments — not the curriculum." },
                    { q: "Can we run this in a regional city, not Bratislava?", a: "Yes. We are building for nationwide reach. Pilot cohorts are starting in Bratislava, but we are actively seeking partners in Košice, Banská Bystrica, and other regions." },
                    { q: "What do the young people leave with, practically?", a: "A real digital portfolio, a LinkedIn profile, a completed project, knowledge of how to use AI tools professionally, a peer alumni community, and at least one mentor relationship. Tangible. Verifiable." },
                ],
            },
            cta: {
                title: "This is not a proposal.",
                title2: "It is an invitation.",
                sub: "If you work with young people in care — or want to fund something that actually changes lives — we want a real conversation. Not a pitch. Not a form. A call.",
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
                title1: "Svet na nich",
                title2: "nečaká.",
                title3: "My áno.",
                subtitle: "Šesťmesačný program pre mladých ľudí od 14 do 18 rokov v detských domovoch — budujeme identitu, zručnosti s AI a reálnu pripravenosť na život, ktorú im systém nedal.",
                cta: "Pozri kurz",
                cta2: "Stať sa partnerom",
                note: "Pre zúčastnené detské domovy bezplatné. Financované cez korporátne partnerstvá.",
            },
            urgency: {
                label: "Prečo 2026",
                title: "Najdôležitejší moment pre generáciu.",
                body: "Mladí, ktorí majú dnes 14 rokov, vstúpia na trh práce v rokoch 2027–2030. Presne vtedy AI preštruktúruje každé odvetvie. Buď budú tí, čo túto zmenu formujú — alebo tí, čo ju znášajú. Neexistuje neutrálna pozícia. Otázka je, kto ich pripraví.",
                stats: [
                    { val: "85M", label: "pracovných miest zanikne do roku 2030", src: "World Economic Forum" },
                    { val: "97M", label: "nových pozícií si bude vyžadovať digitálnu gramotnosť", src: "WEF 2025" },
                    { val: "9×", label: "nárast voľných miest vyžadujúcich AI zručnosti od roku 2022", src: "World Bank" },
                    { val: "56%", label: "firiem nevidí návratnosť investícií do AI — medzera v zručnostiach je reálna", src: "PwC 2026" },
                ],
            },
            reality: {
                label: "Východisková situácia",
                title: "Nezaostávajú preto, že by boli menej.",
                subtitle: "Zaostávajú preto, že im nikto nedal mapu.",
                sk_context: "Na Slovensku je v inštitucionálnej starostlivosti viac ako 4 500 mladých ľudí. Každý rok stovky z nich opúšťajú systém vo veku 18 rokov bez rodinnej siete, bez záchrannej siete a bez digitálnych zručností.",
                cards: [
                    { icon: "◈", h: "Žiadne siete. Žiadny návod.", s: "Nikto ich nenaučil pravidlá, ktoré ostatní berú ako samozrejmosť. Nepísaný kód profesionálneho života." },
                    { icon: "◈", h: "Nesprávne zručnosti.", s: "Škola ich pripravila na svet, ktorý už mizne. Nie na taký, kde 17-ročný môže cez víkend s AI vybudovať produkt." },
                    { icon: "◈", h: "AI zrýchľuje priepasť.", s: "Rozdiel medzi digitálne zdatným a digitálne vylúčeným rastie každý mesiac. Pasivita nie je možnosť." },
                    { icon: "◈", h: "Okno je teraz.", s: "Návyky a identita formovaná vo veku 16 rokov ovplyvňujú všetko, čo nasleduje. Zasiahnuť teraz, alebo budú náklady narastať desaťročia." },
                ],
                compare: {
                    label_before: "Bez programu",
                    label_after: "Po 6 mesiacoch",
                    rows: [
                        ["Žiadna znalosť AI nástrojov", "Zdatný používateľ AI + kritické myslenie"],
                        ["Žiadne digitálne portfólio ani prítomnosť", "Živé portfólio, LinkedIn, publikovaná tvorba"],
                        ["Žiadna profesionálna sieť", "Alumni komunita + mentoringové spojenia"],
                        ["Zraniteľný voči online manipulácii", "Kyberneticky uvedomelý, súkromne gramotný, online suverénny"],
                        ["Žiadna finančná ani kariérna gramotnosť", "Rozumie peniazom, práci a ako sa uplatniť"],
                    ],
                },
            },
            method: {
                label: "Prístup",
                title: "Nie charita. Architektúra.",
                subtitle: "Neprichádzame so súcitom. Prichádzame s frameworkmi, nástrojmi a rovnakými štandardmi, aké prinášame korporátnym lídrom — prispôsobenými pre mladých ľudí, ktorí ich potrebujú ešte naliehavejšie.",
                principles: [
                    { num: "I", title: "Najprv identita, potom zručnosti", desc: "Mladý človek, ktorý vie, kto je, sa dokáže naučiť čokoľvek. Začíname vlastným príbehom, hodnotami a agentúrou — skôr než otvoríme akýkoľvek nástroj." },
                    { num: "II", title: "Skutočné nástroje, nie hračkárske cvičenia", desc: "Od prvého stretnutia používajú skutočné AI nástroje — rovnaké, aké používajú profesionáli. Bez zjednodušovania. Plný prístup. Správny úsudok o ich použití." },
                    { num: "III", title: "Budovať, nie konzumovať", desc: "Každý modul končí niečím vytvoreným: dielom, dokončeným auditom, spusteným projektom. Portfólio je dôkaz." },
                    { num: "IV", title: "Komunita namiesto triedy", desc: "Vzájomné učenie. Mentori, ktorí sú im podobní alebo prešli niečím podobným. Sieť, ktorá nezanikne so skončením programu." },
                ],
                pillars: [
                    { num: "01", title: "Identita a sebaarchitektúra", desc: "Vlastný príbeh, mapovanie hodnôt, vnútorný kompas. Základ, na ktorom stojí všetko ostatné.", tag: "Základ" },
                    { num: "02", title: "AI gramotnosť a kritické myslenie", desc: "Ako myslieť s AI. Promptovanie ako kognícia. Rozpoznávanie algoritmickej manipulácie. AI ako páka.", tag: "Inteligencia" },
                    { num: "03", title: "Kreatívna inteligencia", desc: "Vizuálne rozprávanie, tvorba obsahu, dizajnové myslenie. Ľudské zručnosti, ktoré AI nenahradí — aktivované.", tag: "Vyjadrenie" },
                    { num: "04", title: "Kybernetická bezpečnosť a suverenita", desc: "Phishing, deepfakes, sociálne inžinierstvo, ochrana dát. Odchádzajú s vedomím, ako sa chrániť online.", tag: "Ochrana" },
                    { num: "05", title: "Operačný systém reálneho sveta", desc: "Základy financií, profesionálna komunikácia, osobná značka, networking. Nepísané pravidlá — zverejnené.", tag: "Životné zručnosti" },
                    { num: "06", title: "Tvorba a budovanie", desc: "Od nápadu k reálnemu produktu. Web, film, aplikácia, brand. Prechod od pasívneho k tvorcovi — trvalý.", tag: "Tvorba" },
                ],
            },
            curriculum: {
                label: "Kurz",
                title: "Šesť mesiacov. Šesť posunov.",
                subtitle: "Postupný. Kumulatívny. Každý mesiac stavia na predchádzajúcom. Každý mesiac končí niečím skutočným.",
                months: [
                    {
                        num: "01", title: "KTO SOM V TOMTO SVETE", sub: "Identita, príbeh, agentúra",
                        detail: "Sebapoznávacie cvičenia. Mapovanie hodnôt. Prepísanie príbehu z 'dieťa zo systému' na 'človek s agentúrou'. Prvá AI konverzácia — otázky o vlastnom živote. Vzájomné predstavovanie.",
                        outcomes: ["Mapa osobných hodnôt", "Vlastný príbeh (písomný + ústny)", "Prvý denník AI konverzácií"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "02", title: "STROJ A TY", sub: "AI gramotnosť, kritické myslenie",
                        detail: "Ako fungujú jazykové modely — bez mystifikácie. Čo AI dokáže a čo nie. Promptovanie ako myšlienkový nástroj. Rozpoznávanie AI obsahu. Porozumenie algoritmickej zaujatosti a filtračným bublinám.",
                        outcomes: ["Portfólio promptov (10+ reálnych)", "AI audit správy", "Osobný AI toolkit"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "03", title: "TVORIŤ ALEBO BYŤ TVORENÝ", sub: "Kreatívne nástroje, hlas, sebavyjadrenie",
                        detail: "Generovanie obrázkov, krátke video, úprava zvuku, písacie nástroje. Budovanie kreatívneho hlasu. Štruktúra príbehu. Prvá tvorba publikovaná verejne. Vzájomná kritika a iterácia.",
                        outcomes: ["Prvá publikovaná kreatívna tvorba", "Vstup do kreatívneho portfólia", "Facilitovaná vzájomná kritika"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "04", title: "ZOSTAŤ BEZPEČNÝ. ZOSTAŤ SUVERÉNNY.", sub: "Kybernetická bezpečnosť, manipulácia, online identita",
                        detail: "Phishing simulácie. Detekcia deepfakes. Vzorce sociálneho inžinierstva. Správa hesiel. Audit nastavení súkromia. Čo sa deje s tvojimi dátami. Kto vlastní tvoju pozornosť.",
                        outcomes: ["Osobný bezpečnostný audit", "Zvládnutá výzva detekcie deepfake", "Dokončená revízia digitálneho súkromia"],
                        format: "4 × týždenné stretnutia (2h každé)",
                    },
                    {
                        num: "05", title: "POSTAV NIEČO SKUTOČNÉ", sub: "Prvý skutočný projekt — s pomocou AI",
                        detail: "Projektový mesiac. Každý účastník navrhne a postaví jednu skutočnú vec: web, krátky film, produktový koncept, komunitný zdroj, nápad na malý biznis. S mentorom. S AI. Naozaj jeho vlastnú.",
                        outcomes: ["Dokončený a prezentovaný projekt", "Verejná URL alebo zdieľateľný formát", "Vstup do portfólia č. 2"],
                        format: "8 × stretnutí — workshop + tvorba + prezentácia",
                    },
                    {
                        num: "06", title: "ŠTART", sub: "Profesionálna prítomnosť, čo príde potom",
                        detail: "LinkedIn profil vytvorený. Profesionálna e-mailová komunikácia. Prvý studený kontakt odoslaný. Ako hovoriť o tom, čo postavili. Možnosti ďalšieho vzdelávania. Aktivácia alumni siete. Oslava.",
                        outcomes: ["Živá digitálna prítomnosť (LinkedIn + portfólio)", "Prvá profesionálna správa odoslaná", "Členstvo v alumni sieti"],
                        format: "4 × stretnutia + Demo Day podujatie",
                    },
                ],
            },
            format: {
                label: "Formát programu",
                title: "Ako to v praxi vyzerá.",
                items: [
                    { label: "Trvanie", val: "6 mesiacov", sub: "24 týždňov" },
                    { label: "Stretnutia", val: "2× týždenne", sub: "2 hodiny každé" },
                    { label: "Veľkosť skupiny", val: "8–12 mladých", sub: "Malé zámerne" },
                    { label: "Miesto", val: "Prídeme k vám", sub: "Vo vašom zariadení" },
                    { label: "Cena", val: "Bezplatne", sub: "Pre detské domovy" },
                    { label: "Facilitátori", val: "2 na kohortu", sub: "Vedúci + tech mentor" },
                ],
                note: "Kohorty realizujeme priamo v detských domovoch — žiadna doprava, žiadna logistika pre inštitúcie. Facilitáciu zabezpečujeme my. Vy poskytnete priestor a mladých ľudí.",
            },
            team: {
                label: "Kto to vedie",
                title: "Skutočná prax. Nie teória.",
                subtitle: "Tí istí ľudia, čo vedú THE MINDSHIFT pre korporátnych lídrov, prinášajú tie isté frameworky mladým ľuďom, ktorí ich potrebujú viac.",
                members: [
                    {
                        name: "Roland Vraník",
                        role: "KREATÍVNY LÍDER",
                        company: "Creative Director / Zakladateľ, SORRYWECAN",
                        bio: "Kreatívny riaditeľ kampaní pre Tatra banku, Meta, Audi, Samsung. Každý deň buduje s AI. Verí, že kreatívna inteligencia je najsilnejšia zručnosť, akú môže mladý človek rozvíjať.",
                        url: "https://sorrywecan.com/",
                        image: "/founders/roland.jpg",
                    },
                    {
                        name: "Ján Koscelanský",
                        role: "TECHNOLOGICKÝ LÍDER",
                        company: "CPO / Spoluzakladateľ, SUDOLABS",
                        bio: "Spoluzakladateľ SUDOLABS. Roky v digitálnych produktoch — fintech, zdravotníctvo, enterprise. Presne vie, čo mladí ľudia potrebujú postaviť — a čo nie.",
                        url: "https://sudolabs.com/",
                        image: "/founders/jan.jpg",
                    },
                    {
                        name: "Roman Pii Wagner",
                        role: "FACILITAČNÝ LÍDER",
                        company: "Transformačný dizajnér",
                        bio: "Pomáha ľuďom zistiť, čo je dôležité, čo pustiť a ako konať. Jeho metódy fungujú rovnako na C-suite manažérov ako na 16-ročných — z toho istého dôvodu.",
                        url: "https://www.linkedin.com/in/romanpiiwagner/?originalSubdomain=sk",
                        image: "/founders/roman.jpg",
                    },
                ],
            },
            collab: {
                label: "Spolupráca",
                title: "Hľadáme partnerov.",
                subtitle: "Toto sami nezvládneme. Program funguje iba ako ekosystém — nie ako izolovaný workshop.",
                partners: [
                    { icon: "🏛", title: "Detské domovy a zariadenia starostlivosti", desc: "Prídeme k vám. Kurz prispôsobíme vášmu rozvrhu, vašim mladým, vášmu prostrediu. Žiadna logistická záťaž pre vás." },
                    { icon: "🏛", title: "Štát a mimovládne organizácie", desc: "Grantové rámce, spolufinancovanie, oficiálne uznanie. Vieme, ako budovať pre škálu a udržateľnosť." },
                    { icon: "🏢", title: "Korporátni partneri", desc: "CSR s reálnym, merateľným dopadom. Váš tím mentoruje, spolutvorí a prijíma do práce. Vaša značka spojená s výsledkami, nie s optikou." },
                    { icon: "🔬", title: "Výskumníci a pedagógovia", desc: "Chceme merať, čo funguje. Skúmate výsledky mladých, digitálnu gramotnosť alebo odolnosť? Budujme dôkazovú základňu spolu." },
                ],
            },
            faq: {
                label: "Otázky",
                title: "Čo ľudia zvyčajne chcú vedieť.",
                items: [
                    { q: "Je to naozaj bezplatné pre detské domovy?", a: "Áno. Program je plne financovaný cez korporátne partnerstvá a inštitucionálne granty. Detské domovy poskytujú priestor a účastníkov. Všetko ostatné zabezpečujeme my." },
                    { q: "Aký je časový záväzok pre inštitúciu?", a: "Dve 2-hodinové stretnutia týždenne počas 6 mesiacov. Prídeme k vám a postaráme sa o facilitáciu — potrebujete poskytnúť miestnosť a zabezpečiť prítomnosť mladých ľudí. To je všetko." },
                    { q: "Čo ak sú mladí ľudia nezaangažovaní alebo sa bránia?", a: "S tým počítame. Prvý mesiac je celý o identite a vlastnom príbehu — nie o obrazovkách, nie o nástrojoch. Mladí ľudia sa zapoja, keď cítia, že sú subjektom, nie objektom. Na to máme metódy." },
                    { q: "Čím sa to líši od kurzu programovania alebo workshopu?", a: "Úplne iná vec. Neučíme softvér. Budujeme ľudí. Identitu, kritické myslenie, kreatívny hlas a gramotnosť pre reálny svet. AI nástroje sú nástroje — nie kurz." },
                    { q: "Dá sa to realizovať aj mimo Bratislavy?", a: "Áno. Budujeme pre celoštátne pokrytie. Pilotné kohorty štartujú v Bratislave, ale aktívne hľadáme partnerov v Košiciach, Banskej Bystrici a ďalších regiónoch." },
                    { q: "Čo si z toho mladí prakticky odnesú?", a: "Skutočné digitálne portfólio, LinkedIn profil, dokončený projekt, znalosť profesionálneho používania AI nástrojov, alumni komunitu a aspoň jedno mentorské spojenie. Hmatateľné. Overiteľné." },
                ],
            },
            cta: {
                title: "Toto nie je návrh.",
                title2: "Je to pozvanie.",
                sub: "Ak pracujete s mladými ľuďmi v starostlivosti — alebo chcete financovať niečo, čo skutočne mení životy — chceme skutočný rozhovor. Nie pitch. Nie formulár. Telefonát.",
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
                        {c.team.members.map((m, i) => (
                            <motion.a key={i} href={m.url} target="_blank" rel="noopener noreferrer"
                                {...inView(i * 0.1)}
                                className="bg-[#f5f5f3] hover:bg-white transition-colors p-8 block group">
                                {/* Avatar placeholder */}
                                <div className="w-16 h-16 rounded-full bg-black/8 mb-5 overflow-hidden">
                                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                                </div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-[#0047BB] mb-1">{m.role}</div>
                                <h3 className="font-syne font-bold text-lg mb-1 group-hover:text-[#0047BB] transition-colors">{m.name}</h3>
                                <div className="text-[10px] text-black/35 mb-4">{m.company}</div>
                                <p className="text-xs text-black/55 leading-relaxed">{m.bio}</p>
                            </motion.a>
                        ))}
                    </div>
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
