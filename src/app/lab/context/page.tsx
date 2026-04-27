"use client"

import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"
import { LabDocNav } from "@/components/navigation/lab-doc-nav"
import { LabComments } from "@/components/lab/lab-comments"

const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
})

function Label({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-[#0047BB]">
            {children}
        </span>
    )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-cabinet font-bold text-2xl md:text-3xl tracking-tighter mt-2 mb-6">
            {children}
        </h2>
    )
}

function Divider() {
    return <div className="border-t border-black/10 my-12" />
}

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] border border-black/20 px-2 py-1 mr-2 mb-2">
            {children}
        </span>
    )
}

function ColorSwatch({ hex, name, usage }: { hex: string; name: string; usage: string }) {
    return (
        <div className="flex items-start gap-4 p-4 border border-black/10">
            <div className="w-12 h-12 shrink-0 border border-black/10" style={{ backgroundColor: hex }} />
            <div>
                <p className="font-bold text-sm">{name}</p>
                <p className="text-[11px] font-code-brand text-[#0047BB]">{hex}</p>
                <p className="text-xs text-black/50 mt-1">{usage}</p>
            </div>
        </div>
    )
}

const changelog = [
    { date: "2026-04-14", note: "Initial version created. Identity, mission, brand, voice, products, audience, technology, priorities documented." },
    { date: "2026-04-15", note: "Art direction section added to Brand. Team updated to reflect current core (Tiep/Andrea/Sasha) + extended (Roland/Roman). Partnerships & Ecosystem section added: Austrian AI collaboration + Mirka/Aj Ty v IT. Competitive intelligence added. Strategic shift documented." },
    { date: "2026-04-15", note: "Synced with Q2 strategy: €690/person corporate pricing, Mindshift paused Q2, Platform product updated (Circle with builder network layer, €29→€49 pricing tiers), Revenue structure mapped (40/30/20/10 working model), Q4 €30k/month target added to priorities. Platform Strategy deep dive link fixed. The Radar noted in content flywheel." },
    { date: "2026-04-16", note: "THE SOURCE added — bi-monthly internal session for SORRYWECAN × Research Lab team. Format defined, rhythm set (June/August/October), added to Ecosystem RESEARCH layer and Q2 priorities." },
    { date: "2026-04-15", note: "Major expansion from pitch deck: Peter Kaspar added as Creative Direction Co-Founder, Roland updated to SORRYWECAN CEO & Founder, full team roles updated. What We Are reframed. Core Problem section added. COMMUNITEA format added. MINDSHIFT reframed as organisational programme. FUTURE PROTOCOLS and MEDIA HOUSE added. New sections: The Ecosystem (4 layers) and Engagement Model (3 tiers). Origin, team structure reorganised." },
]

export default function ContextPage() {
    return (
        <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand">
            <TopNav />
            <LabStrategyNav />

            <section className="pt-44 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <motion.div {...fade(0)} className="mb-16">
                        <Label>Master Context — Research Lab</Label>
                        <h1 className="font-cabinet font-bold text-5xl md:text-6xl tracking-tighter mt-3 leading-[0.95]">
                            The Bible
                        </h1>
                        <p className="text-black/50 mt-4 max-w-xl">
                            Everything someone needs to understand Research Lab in 15 minutes. For humans and AI agents alike. Updated continuously.
                        </p>
                    </motion.div>

                    {/* 1. Identity */}
                    <motion.div {...fade(0.05)}>
                        <Label>01</Label>
                        <SectionTitle>Identity</SectionTitle>

                        <div className="space-y-6">
                            <div className="p-6 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">What We Are</p>
                                <p className="leading-relaxed">
                                    Research Lab is an applied AI platform focused on how organisations adapt to AI in real work. It translates real-world AI practice into better workflows, clearer decision-making, and stronger organisational adaptation. Developed within the SORRYWECAN ecosystem, based in Bratislava, Slovakia. The tagline: <strong>WHERE HUMANS & AI CO-EVOLVE.</strong>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">Team</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {[
                                        { name: "Peter Kaspar", sub: "Co-Founder", role: "Creative Direction — creative alchemy at the intersection of human intuition and AI systems" },
                                        { name: "Tiep Le Dinh", sub: "Co-Founder", role: "Automation Infrastructure — scalable workflows across tech, finance, creative strategy" },
                                        { name: "Sasha Zaytseva", sub: null, role: "Learning Systems — translates complex tech shifts into practical education + organisational formats" },
                                        { name: "Andrea Kutlikova", sub: null, role: "Project Lead & Adult Educator — community coordination, lifelong learning, adaptation programmes" },
                                        { name: "Roman Pii Wagner", sub: null, role: "Strategic Navigation — decision frameworks for uncertainty, helps leadership prioritise signal over noise" },
                                        { name: "Roland Wranik", sub: "SORRYWECAN CEO & Founder", role: "Vision & Creative Strategy — early AI-native multimedia practitioner, working with these systems from the very beginning" },
                                    ].map((f) => (
                                        <div key={f.name} className="p-4 border border-black/10">
                                            <p className="font-bold text-sm">{f.name}</p>
                                            {f.sub && <p className="text-xs text-black/30 mt-0.5">{f.sub}</p>}
                                            <p className="text-xs text-[#0047BB] font-code-brand mt-1 uppercase tracking-widest leading-relaxed">{f.role}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[9px] font-code-brand text-black/30 mt-2">Extended by a curated network of domain experts engaged based on the needs of each project.</p>
                            </div>

                            <div className="p-6 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-2">Origin</p>
                                <p className="leading-relaxed text-black/70">
                                    Born from a frustration with surface-level AI content. The market is flooded with "10 ChatGPT prompts that will change your life." Nobody was teaching the underlying thinking. We built THE MINDSHIFT as a live 3.5-hour session — part philosophy, part practical — and the response confirmed the gap was real. Research Lab is the infrastructure to scale that approach.
                                </p>
                            </div>

                            <div className="p-4 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-1">Legal & Location</p>
                                <p className="text-sm">Bratislava, Slovakia — under SORRYWECAN</p>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 2. Mission & Positioning */}
                    <motion.div {...fade(0.1)}>
                        <Label>02</Label>
                        <SectionTitle>Mission & Positioning</SectionTitle>

                        <div className="space-y-6">
                            <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">Mission</p>
                                <p className="text-xl font-cabinet font-bold tracking-tight leading-snug">
                                    Distill what matters from the noise. Teach people how to think with AI — not just use it. Build the most credible AI education community in the Slovak-speaking world and beyond.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Who We Serve</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Professionals 30-50 who feel AI anxiety — know it matters, don't know where to start",
                                            "Young learners 18-30 curious about AI as a creative and career tool",
                                            "Corporate teams who need to get AI-ready without hype",
                                            "Older population who want accessible, human-paced AI understanding",
                                        ].map((s, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-[#0047BB] shrink-0">—</span>
                                                <span className="text-black/70">{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What We Believe</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Thinking is the skill — tools are just the interface",
                                            "Curation beats volume. Most AI content is noise",
                                            "Community accelerates learning faster than solo consumption",
                                            "Slovak context matters — local language, local problems, local trust",
                                            "AI education should be immersive, not informational",
                                        ].map((b, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-[#0047BB] shrink-0">—</span>
                                                <span className="text-black/70">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">The Core Problem We Solve</p>
                                <div className="space-y-2 text-sm">
                                    {[
                                        ["AI adoption is chaotic", "No shared standards, random usage across teams"],
                                        ["Decision-making is weakening", "More options, no framework to evaluate them"],
                                        ["Quality is inconsistent", "High output volume, unstable creative and operational standards"],
                                        ["Execution is faster, judgment is harder", "Direction suffers as speed increases"],
                                    ].map(([problem, detail]) => (
                                        <div key={problem} className="flex gap-3">
                                            <span className="text-[#0047BB] shrink-0">—</span>
                                            <div><span className="font-bold">{problem}: </span><span className="text-black/50">{detail}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">How We Work</p>
                                <p className="text-sm text-black/70 leading-relaxed">Research Lab works where strategy, execution, and cognition meet. Built on real AI production inside SORRYWECAN, we test ideas in actual workflows before translating them into systems for partners. Most organisations move faster with AI but lose consistency and direction. We design structures that keep both.</p>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What We Are Not</p>
                                <div className="flex flex-wrap">
                                    {[
                                        "A dev shop or coding bootcamp",
                                        "An AI tools aggregator",
                                        "A consulting firm that delivers reports",
                                        "A hype machine for the latest model releases",
                                        "A corporate training commodity",
                                        "A translation of Western AI content into Slovak",
                                    ].map((n) => <Tag key={n}>{n}</Tag>)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 3. Brand & Visual System */}
                    <motion.div {...fade(0.1)}>
                        <Label>03</Label>
                        <SectionTitle>Brand & Visual System</SectionTitle>

                        <div className="space-y-6">
                            <div className="p-4 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-2">The Aesthetic in One Sentence</p>
                                <p className="font-cabinet font-bold text-lg">A research institution that moves fast — warm, rigorous, and sharp.</p>
                            </div>

                            <div>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Color Palette</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <ColorSwatch hex="#e8e1da" name="Parchment (Background)" usage="Page surface everywhere. The defining warmth of the brand." />
                                    <ColorSwatch hex="#0047BB" name="Cobalt Blue (Accent)" usage="The ONLY accent. CTAs, active states, labels, numbered chips, borders." />
                                    <ColorSwatch hex="#0a0a0a" name="Near-Black (Foreground)" usage="Primary text. Never pure black." />
                                    <ColorSwatch hex="#f4ede6" name="Light Parchment (Alt BG)" usage="Toolkit pages, print/PDF slides, subtle surface variation." />
                                    <ColorSwatch hex="#a9beda" name="Accent Tint" usage="Occasional light blue wash. Secondary accent only." />
                                    <ColorSwatch hex="#ffffff" name="White" usage="Modal interiors only. Almost never on page backgrounds." />
                                </div>
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">Typography</p>
                                <div className="space-y-3">
                                    {[
                                        { font: "Space Mono", role: "Body default", note: "Monospace everywhere. The primary reading font." },
                                        { font: "Syne", role: "Brand headings", note: "Logo, page H1s, nav in mobile menu. Always bold." },
                                        { font: "Source Code Pro", role: "Labels & badges", note: "10px uppercase tracked — the signature overline pattern." },
                                        { font: "Proxima Nova", role: "Readable body copy", note: "Long-form paragraphs. Loaded as local OTF." },
                                        { font: "Instrument Serif", role: "Accent editorial", note: "For moments that need warmth and character." },
                                    ].map((t) => (
                                        <div key={t.font} className="flex gap-4 items-start">
                                            <div className="w-40 shrink-0">
                                                <p className="font-bold text-sm">{t.font}</p>
                                                <p className="text-[10px] font-code-brand text-[#0047BB] uppercase tracking-widest">{t.role}</p>
                                            </div>
                                            <p className="text-sm text-black/50">{t.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Art Direction */}
                            <div className="p-5 border-2 border-[#0047BB]/30 bg-[#0047BB]/[0.04]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-1">Art Direction — Presentation Mode</p>
                                <p className="text-xs text-black/50 mb-4">For decks, offer documents, and print-grade materials. Validated April 2026.</p>
                                <div className="space-y-3 text-sm">
                                    {[
                                        ["Color rhythm", "Blue (#0047BB) → Parchment (#e8e1da) → Near-black (#0d0d0d) — alternating full-bleed slide backgrounds. Blue as a background is encouraged, not just as accent."],
                                        ["Watermark typography", "Single word, 200-280px Syne, opacity 3-5% — used as background texture, not decoration. Examples: 'AI', 'WHO', '01', '02'."],
                                        ["No card boxes", "Structure through hairlines (1px, opacity 7-15%) and negative space. Ruled separators between items instead of bordered cards."],
                                        ["Slide anatomy", "Top bar: 9px label left + edition right. 1px separator. Content. 1px separator. Bottom bar: brand left + page number right."],
                                        ["Giant names & headlines", "46-92px Syne, tracking-tighter, leading 0.88-0.92. Left-anchored, never centered on presentation slides."],
                                        ["SVG motifs", "Geometric elements that carry meaning — e.g. circle of dots for people sitting in a circle. Placed as absolute positioned background elements."],
                                        ["Grid texture", "On technical/tool slides: repeating linear-gradient at 2.5% opacity, 40×40px. Blueprint feel on blue backgrounds."],
                                        ["Time/metadata labels", "9px font-code-brand, #4d7fd4 (lightened blue) on dark backgrounds. black/30 on parchment."],
                                    ].map(([principle, desc]) => (
                                        <div key={principle} className="flex gap-3">
                                            <span className="text-[#0047BB] shrink-0">—</span>
                                            <div>
                                                <span className="font-bold">{principle}: </span>
                                                <span className="text-black/60">{desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-black/10">
                                    <p className="text-xs text-black/40">Reference implementation: <a href="/corporate/offer-v2" className="text-[#0047BB] hover:underline">/corporate/offer-v2</a> — 7-slide deck that defines this direction.</p>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">Core Design Principles</p>
                                <div className="space-y-3 text-sm">
                                    {[
                                        ["Zero border radius", "Everything is square. Buttons, cards, modals, inputs. No rounded corners ever."],
                                        ["10px signature label", "10px / uppercase / tracking-[0.3em] in Source Code Pro. The typographic fingerprint. Used for section starters, badges, nav links, button text."],
                                        ["One accent color", "Cobalt #0047BB does all signaling. No secondary color accents. Hierarchy through opacity."],
                                        ["Blueprint texture", "Subtle 40×40px grid overlay (opacity 0.10) + noise texture (opacity 0.05) on hero sections. Technical/research feel."],
                                        ["Framer Motion — controlled", "opacity 0→1, y:20→0 entrance animations. whileInView, viewport once. Never flashy."],
                                        ["Borders not shadows", "border border-black/10 for separation. No drop shadows anywhere."],
                                        ["Warm parchment", "Never pure white as a page background. Always #e8e1da."],
                                    ].map(([principle, desc]) => (
                                        <div key={principle} className="flex gap-4">
                                            <span className="text-[#0047BB] shrink-0 w-4">—</span>
                                            <div>
                                                <span className="font-bold">{principle}: </span>
                                                <span className="text-black/60">{desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 4. Voice & Language */}
                    <motion.div {...fade(0.1)}>
                        <Label>04</Label>
                        <SectionTitle>Voice & Language</SectionTitle>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">How We Sound</p>
                                    <div className="flex flex-wrap">
                                        {["Direct", "Warm", "Rigorous", "Curious", "Grounded", "Never preachy", "Never hype"].map((w) => <Tag key={w}>{w}</Tag>)}
                                    </div>
                                </div>
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Language Rules</p>
                                    <ul className="space-y-2 text-sm text-black/70">
                                        <li><span className="text-[#0047BB]">—</span> Slovak for community content, events, local audience</li>
                                        <li><span className="text-[#0047BB]">—</span> English for platform, corporate, international reach</li>
                                        <li><span className="text-[#0047BB]">—</span> Never translate — write fresh in each language</li>
                                        <li><span className="text-[#0047BB]">—</span> Bilingual option on public pages (EN/SK toggle)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Words We Use vs. Avoid</p>
                                <div className="grid grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-bold text-[#0047BB] mb-2">Use</p>
                                        <ul className="space-y-1 text-black/70">
                                            {["Think with AI", "Co-evolve", "Mindshift", "Distill", "Practical", "Curious", "Community", "Tools that work", "Thinking frameworks"].map(w => <li key={w}>— {w}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-black/40 mb-2">Avoid</p>
                                        <ul className="space-y-1 text-black/40">
                                            {["Disruptive", "Game-changing", "Revolutionary", "Unleash", "Leverage synergies", "AI-powered future", "Unprecedented", "Cutting-edge", "Transformational journey"].map(w => <li key={w}>— {w}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">On-Brand Writing — Three Examples</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-1">Social Post</p>
                                        <p className="text-sm text-black/70 border-l-2 border-[#0047BB]/30 pl-4">
                                            "Everyone has access to the same tools. The difference is in how you think. That's what we're building — a place where thinking about AI is as important as using it."
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-1">Workshop Description</p>
                                        <p className="text-sm text-black/70 border-l-2 border-[#0047BB]/30 pl-4">
                                            "THE MINDSHIFT is not a tutorial. It's 3.5 hours of structured thinking — about AI, about how you work, about what changes when you stop being afraid of the tool and start using it with intention."
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-1">Corporate Pitch</p>
                                        <p className="text-sm text-black/70 border-l-2 border-[#0047BB]/30 pl-4">
                                            "Your team doesn't need another AI workshop that teaches them to summarise emails. They need to understand what's actually possible — and build the judgment to use it well. That's what Day 2 is for."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 5. Products */}
                    <motion.div {...fade(0.1)}>
                        <Label>05</Label>
                        <SectionTitle>Products & Offers</SectionTitle>

                        <div className="space-y-3">
                            {[
                                {
                                    name: "COMMUNITEA",
                                    status: "Active",
                                    type: "Public — Open Format",
                                    details: [
                                        "Public sessions and curated discussions on AI, creativity, and change",
                                        "Open and accessible — not just for tech or business audiences",
                                        "Length: 2–3 hours · Capacity: up to 20 people",
                                        "Hosted in our studio or at partner locations",
                                        "Builds shared language and awareness across society",
                                    ]
                                },
                                {
                                    name: "MINDSHIFT",
                                    status: "Active — B2B focus",
                                    type: "Organisational Programme",
                                    details: [
                                        "Structured programme for teams and leadership",
                                        "Cross-team AI diagnostics + integration into real workflows, decision-making, shared standards",
                                        "Format: 2-day workshop → long-term programme / collaboration",
                                        "Capacity: up to 15 people",
                                        "Price: €690/person + VAT, min 10 people. Raise to €800+ post-testimonial.",
                                        "Public version paused Q2 — returns Q3/Q4 at different rhythm",
                                        "Pipeline: O2 department (pre-warmed)",
                                    ]
                                },
                                {
                                    name: "FUTURE PROTOCOLS",
                                    status: "Developing",
                                    type: "Toolkits & Applied Research",
                                    details: [
                                        "Custom and open toolkits built on real SORRYWECAN workflows",
                                        "Live experiments translated into practical frameworks others can use",
                                        "Both proprietary client work and open-access editions",
                                        "The research layer that feeds everything else",
                                    ]
                                },
                                {
                                    name: "MEDIA HOUSE",
                                    status: "Building",
                                    type: "Content & Distribution",
                                    details: [
                                        "House blog, media source, and online distribution channel",
                                        "The Radar: bi-weekly newsletter (EN/SK) — curated signal from the noise",
                                        "Collaboration with other creators and thinkers",
                                        "The content flywheel that feeds all other formats",
                                    ]
                                },
                                {
                                    name: "Circle — Practitioner Platform",
                                    status: "Building — June 2026 launch",
                                    type: "B2C Recurring",
                                    details: [
                                        "Founding cohort: €29/month · Standard tier: €49/month",
                                        "Three audiences: Beginners (Mindshift first), Professionals (frameworks + tools), Builders (vibe coders, AI architects, domain specialists)",
                                        "Curriculum: Basic → Mindshift thinking → Tools → Agentic systems → What's New",
                                        "Asset moat: Component library + Collective Intelligence AI — cancelling means losing infrastructure, not just videos",
                                        "Launch: Founding cohort June 2026, full launch September 2026",
                                    ]
                                },
                                {
                                    name: "THE SOURCE",
                                    status: "Starting June 2026",
                                    type: "Internal — SORRYWECAN × Research Lab",
                                    details: [
                                        "Bi-monthly internal session for the full SORRYWECAN + Research Lab team",
                                        "Panel discussion format — not a lecture. A structured conversation with a theme.",
                                        "Each session: one person shares what they've been experimenting with in their domain, one external idea gets pressure-tested by the group",
                                        "The internal version of COMMUNITEA — closed, honest, no performance",
                                        "Output: shared language, aligned direction, raw material for FUTURE PROTOCOLS",
                                        "Why: SORRYWECAN is the real-world lab. If the team inside isn't growing together, the translation to external work breaks down.",
                                        "Rhythm: every 2 months — June, August, October 2026",
                                    ]
                                },
                                {
                                    name: "Education — NextGen & Social",
                                    status: "Seeking partners",
                                    type: "Education / CSR",
                                    details: [
                                        "Programmes for groups navigating technological change: seniors, educators, young people from children's homes",
                                        "Focus on building long-term capacity and meaningful adaptation to AI",
                                        "NextGen: AI literacy for 14-18 year olds aging out of care homes",
                                        "Funded via CSR and institutional partnerships",
                                        "Timeline: Partnership outreach Q2, delivery Q3+",
                                    ]
                                },
                            ].map((p) => (
                                <div key={p.name} className="p-5 border border-black/10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-bold">{p.name}</p>
                                            <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40">{p.type}</p>
                                        </div>
                                        <span className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-1">{p.status}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {p.details.map((d, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-black/60">
                                                <span className="text-[#0047BB]">—</span>
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 6. Audience */}
                    <motion.div {...fade(0.1)}>
                        <Label>06</Label>
                        <SectionTitle>Audience & Traction</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {[
                                    { label: "Instagram Followers", value: "~800", sub: "Q2 target: 1,500" },
                                    { label: "Workshop Alumni", value: "40+", sub: "from Feb 26 session" },
                                    { label: "Corporate Prospects", value: "145", sub: "Bratislava, tiered" },
                                    { label: "Community Members", value: "0", sub: "founding cohort June" },
                                ].map((m) => (
                                    <div key={m.label} className="p-4 border border-black/10 text-center">
                                        <p className="text-3xl font-bold text-[#0047BB]">{m.value}</p>
                                        <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40 mt-1">{m.label}</p>
                                        <p className="text-xs text-black/30 mt-1">{m.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Three Audience Segments</p>
                                <div className="space-y-3 text-sm">
                                    {[
                                        { seg: "Young Learner", desc: "18-30, curious, digital native, wants AI as creative and career advantage. Discovers us via Instagram and podcast." },
                                        { seg: "Slovak Professional", desc: "30-50, feels the pressure, knows AI is coming, overwhelmed by the noise. Comes to THE MINDSHIFT via word of mouth or LinkedIn." },
                                        { seg: "Corporate Team", desc: "Department heads and teams who need practical AI literacy without buzzwords. Reaches us via direct outreach or a colleague who attended." },
                                    ].map((s) => (
                                        <div key={s.seg} className="flex gap-4">
                                            <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                                                {s.seg[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold">{s.seg}</p>
                                                <p className="text-black/50">{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 7. Technology */}
                    <motion.div {...fade(0.1)}>
                        <Label>07</Label>
                        <SectionTitle>Technology & Infrastructure</SectionTitle>

                        <div className="space-y-3">
                            {[
                                { layer: "Public website", stack: "research-lab (Nuxt 3 / Vue)", detail: "Marketing site, events, lightpaper. Deployed on Vercel." },
                                { layer: "Internal platform", stack: "researchlab (Next.js 14 / TypeScript)", detail: "This app. Ops, sales, curriculum, decks. Deployed on Vercel." },
                                { layer: "Database", stack: "Supabase (PostgreSQL)", detail: "Seat tracking, bookings, webhook logs." },
                                { layer: "Community", stack: "Circle", detail: "Membership platform. Launching June 2026." },
                                { layer: "Booking", stack: "Cal.com embed", detail: "Integrated via @calcom/embed-react inside modal." },
                                { layer: "Payments", stack: "Stripe", detail: "Workshop bookings, future membership billing." },
                                { layer: "Animation", stack: "Framer Motion 11", detail: "All entrance animations across both apps." },
                                { layer: "AI tools", stack: "Claude API, various", detail: "Content generation, research, agent workflows." },
                            ].map((t) => (
                                <div key={t.layer} className="flex gap-4 items-start p-4 border border-black/10">
                                    <div className="w-36 shrink-0">
                                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">{t.layer}</p>
                                        <p className="font-bold text-sm mt-0.5">{t.stack}</p>
                                    </div>
                                    <p className="text-sm text-black/50">{t.detail}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 8. Ecosystem Layers */}
                    <motion.div {...fade(0.1)}>
                        <Label>08</Label>
                        <SectionTitle>The Ecosystem</SectionTitle>
                        <p className="text-sm text-black/50 mb-6 -mt-2">Research Lab operates as a layered system. Each layer is a different mode of engagement, grounded in real AI workflows.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                                {
                                    layer: "PUBLIC",
                                    desc: "Open events, discussions, and resources accessible to anyone. Formats that make AI understandable and relevant beyond the tech world — building shared language and awareness across society.",
                                    format: "COMMUNITEA",
                                },
                                {
                                    layer: "EDUCATION",
                                    desc: "Programmes for groups navigating technological change. From seniors and educators to young people from children's homes — focused on long-term capacity and meaningful adaptation.",
                                    format: "NextGen & Social Programmes",
                                },
                                {
                                    layer: "ORGANISATIONS",
                                    desc: "Internal educational programmes for teams and leadership. From fragmented AI usage to structured workflows, clear decision-making, and consistent quality across teams.",
                                    format: "MINDSHIFT",
                                },
                                {
                                    layer: "RESEARCH",
                                    desc: "Real-world experimentation inside SORRYWECAN production. Tested approaches translated into frameworks, systems, and learning formats used across the ecosystem. THE SOURCE sessions keep the internal team aligned and feed this layer directly.",
                                    format: "FUTURE PROTOCOLS + THE SOURCE",
                                },
                            ].map((l) => (
                                <div key={l.layer} className="p-5 border border-black/10">
                                    <p className="font-cabinet font-bold text-xl tracking-tight mb-1">{l.layer}</p>
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] mb-3">{l.format}</p>
                                    <p className="text-sm text-black/50 leading-relaxed">{l.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 8b. Engagement Model */}
                    <motion.div {...fade(0.1)}>
                        <Label>08b</Label>
                        <SectionTitle>Engagement Model</SectionTitle>
                        <p className="text-sm text-black/50 mb-6 -mt-2">How organisations engage with Research Lab. Three levels — each with a different depth of involvement.</p>

                        <div className="space-y-2">
                            {[
                                {
                                    tier: "PARTICIPATION",
                                    sub: "Participating in programmes",
                                    desc: "Organisations engage Research Lab by participating in its programmes and formats, designed to strengthen how teams work with AI in practice. For organisations ready to build internal capability and apply AI with clarity and consistency.",
                                    available: true,
                                },
                                {
                                    tier: "COLLABORATION",
                                    sub: "Contributing to shared outputs",
                                    desc: "Direct involvement in selected programmes, formats, and initiatives, or as partners on specific projects. Includes co-development of themes or modules, project-based partnerships, and participation in research outputs. For organisations ready to actively contribute and shape work with broader relevance.",
                                    available: true,
                                },
                                {
                                    tier: "STRATEGIC PARTNERSHIP",
                                    sub: "Long-term — limited slots",
                                    desc: "A limited number of organisations selected for long-term partnership. Support of public formats and educational initiatives, contribution to AI literacy development, visible role in shaping how AI is understood and applied. Reserved for organisations ready to take a leading role at scale.",
                                    available: false,
                                },
                            ].map((t) => (
                                <div key={t.tier} className={`p-5 border ${t.available ? "border-black/10" : "border-[#0047BB]/30 bg-[#0047BB]/[0.03]"}`}>
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <p className="font-cabinet font-bold text-lg tracking-tight">{t.tier}</p>
                                            <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/40">{t.sub}</p>
                                        </div>
                                        {!t.available && (
                                            <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-1 shrink-0">Selected</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-black/50 leading-relaxed">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 9. Current Priorities */}
                    <motion.div {...fade(0.1)}>
                        <Label>09</Label>
                        <SectionTitle>Current Priorities — Q2 2026</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    { rank: "01", title: "Close corporate workshops", detail: "2 workshops Q2 = ~€14–20k. O2 pipeline pre-warmed. Raise to €800+ after first delivery." },
                                    { rank: "02", title: "Build & launch Circle", detail: "Founding cohort by June. Full launch September. €30k/month path by Q4." },
                                    { rank: "03", title: "Grow Instagram 800 → 1500", detail: "Content flywheel. The Radar newsletter. Free funnels into paid." },
                                ].map((p) => (
                                    <div key={p.rank} className="p-5 border border-black/10">
                                        <div className="w-8 h-8 bg-[#0047BB] text-white flex items-center justify-center text-[11px] font-bold mb-3">
                                            {p.rank}
                                        </div>
                                        <p className="font-bold">{p.title}</p>
                                        <p className="text-sm text-black/50 mt-1">{p.detail}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">What We Are Saying No To in Q2</p>
                                <div className="flex flex-wrap">
                                    {[
                                        "New workshop formats before validating current one",
                                        "Annual report (Q4 at earliest)",
                                        "Paid advertising before organic is proven",
                                        "NextGen delivery (partnership only this quarter)",
                                        "Geographic expansion beyond Slovakia/CEE",
                                        "Building custom AI infra before Circle is live",
                                    ].map((n) => <Tag key={n}>{n}</Tag>)}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                                <a href="/lab/q2-overview" className="p-4 border border-black/10 hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all group">
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Deep Dive →</p>
                                    <p className="font-bold group-hover:text-[#0047BB] transition-colors">Q2 Overview</p>
                                </a>
                                <a href="/lab/platform-strategy" className="p-4 border border-black/10 hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all group">
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Deep Dive →</p>
                                    <p className="font-bold group-hover:text-[#0047BB] transition-colors">Platform Strategy</p>
                                </a>
                                <a href="/lab/corporate" className="p-4 border border-black/10 hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all group">
                                    <p className="text-[10px] font-code-brand uppercase tracking-widest text-black/30 mb-1">Deep Dive →</p>
                                    <p className="font-bold group-hover:text-[#0047BB] transition-colors">Corporate Offer</p>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 09. Partnerships & Ecosystem */}
                    <motion.div {...fade(0.1)}>
                        <Label>09</Label>
                        <SectionTitle>Partnerships & Ecosystem</SectionTitle>

                        <div className="space-y-4">

                            {/* Austrian collaboration */}
                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <div className="flex items-start justify-between mb-2">
                                    <p className="font-bold">Austrian AI Collaboration</p>
                                    <span className="text-[10px] font-code-brand uppercase tracking-widest text-[#0047BB] border border-[#0047BB]/30 px-2 py-1 shrink-0 ml-4">Active</span>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed mb-3">
                                    State-funded Austrian AI coworking and networking group seeking to expand into Bratislava. Met with their founders. Interested in merging forces: RL brings strong visual production and developer capabilities; they bring state funding, credibility, and DACH market access.
                                </p>
                                <div className="space-y-1 text-sm">
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Co-organize a major AI conference in Vienna — target September/October 2026</span></div>
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Next step: schedule alignment meeting to plan the Vienna event</span></div>
                                </div>
                            </div>

                            {/* Mirka / Aj Ty v IT */}
                            <div className="p-5 border border-black/10">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-bold">Mirka — Aj Ty v IT / Women in Tech</p>
                                        <p className="text-xs text-black/40 font-code-brand mt-0.5 uppercase tracking-widest">Educational network · Female managers, entrepreneurs, career-changers</p>
                                    </div>
                                    <span className="text-[10px] font-code-brand uppercase tracking-widest text-black/40 border border-black/20 px-2 py-1 shrink-0 ml-4">Follow-up pending</span>
                                </div>
                                <p className="text-sm text-black/60 leading-relaxed mb-3">
                                    Mirka runs an educational network for female managers, entrepreneurs, and women transitioning into tech. Her audience has fear of technology — needs a safe, non-intimidating environment. RL delivers specialized AI training for her alumni; in exchange, Mirka refers larger corporate clients to RL.
                                </p>
                                <div className="space-y-1 text-sm">
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">RL angle: ideal audience for gentle-entry AI workshops, builds female professional segment</span></div>
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Next step: wait for Mirka to send proposed format and needs assessment</span></div>
                                </div>
                            </div>

                            {/* Competitive intel */}
                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Competitive Intelligence</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex gap-2">
                                        <span className="text-[#0047BB] shrink-0">—</span>
                                        <span className="text-black/60"><strong>Tatra banka benchmark:</strong> A competitor agency charged Tatra banka €20,000 for a basic 3-day AI tools overview. RL's €690/person format delivers more depth at lower per-seat cost with a mindset-first approach. This validates pricing power and premium positioning — and signals €800+ is realistic after first delivery.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-[#0047BB] shrink-0">—</span>
                                        <span className="text-black/60"><strong>Action:</strong> Investigate through personal contacts exactly what that agency taught — use it to sharpen RL's differentiation and tailor the corporate pitch.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Revenue structure */}
                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Ownership & Revenue Structure — Working Model</p>
                                <p className="text-sm text-black/60 mb-3">Working model (Model B — Weighted + Partner): SORRYWECAN entity 40% · Tiep 30% · Adka 20% · Partners 10%. Applied after operating costs. Formal s.r.o. structure and billing flow to be mapped.</p>
                                <div className="space-y-1 text-sm">
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">B2B path: 2 workshops Q2 at €6,900–10,350 each → €14–20k gross</span></div>
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Realistic Q4 mix: 1 workshop/mo + 400 Circle members = €30k+/month</span></div>
                                    <div className="flex gap-2"><span className="text-[#0047BB] shrink-0">—</span><span className="text-black/60">Full breakdown: <a href="/lab/economics" className="text-[#0047BB] hover:underline">/lab/economics</a></span></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 10. For AI Agents */}
                    <motion.div {...fade(0.1)}>
                        <Label>10</Label>
                        <SectionTitle>For AI Agents</SectionTitle>

                        <div className="p-6 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03] space-y-4 text-sm">
                            <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB]">Prompt Context Block — Copy and Use</p>
                            <div className="bg-black/5 p-4 font-code-brand text-xs leading-relaxed text-black/70 whitespace-pre-wrap">
{`You are generating content for RESEARCH LAB by SORRYWECAN.

BRAND: AI literacy and transformation venture in Bratislava, Slovakia.
MISSION: Teach people how to think with AI — not just use it.
VOICE: Direct, warm, rigorous, curious. Never hype. Never preachy.
AUDIENCE: Slovak professionals 30-50, young learners 18-30, corporate teams.
LANGUAGE: Write fresh (not translated). EN for platform/corporate. SK for community.

VISUAL SYSTEM (if generating UI/copy):
- Background: #e8e1da (warm parchment)
- Accent: #0047BB (cobalt blue — the ONLY accent color)
- Text: #0a0a0a
- Typography: Space Mono body, Syne headings, Source Code Pro for 10px labels
- No border radius. Square corners always.
- Labels: 10px / uppercase / tracking-[0.3em]

TONE EXAMPLES:
✓ "The difference is in how you think, not which tool you use."
✓ "3.5 hours. Structured. Practical. No slides full of buzzwords."
✗ "Leverage our cutting-edge AI-powered transformational journey."
✗ "Disrupt your workflow with revolutionary AI solutions."

PRODUCTS:
- THE MINDSHIFT: €99/person public workshop (paused Q2, returns Q3/Q4)
- Corporate: €690/person, min 10 people, two-day format (→ €800+ after first delivery)
- Circle (Community + Practitioner Platform): €29 founding / €49 standard, launching June 2026
- NextGen: Youth programme, seeking CSR partners

PLATFORM NOTE:
Circle is not just a learning platform. It serves Beginners, Professionals, AND Builders (vibe coders, AI architects, domain specialists). Asset moat: Component Library + Collective Intelligence AI built from the network's collective frameworks.

REVENUE TARGET: €30k/month by Q4 2026 via 1 corporate workshop/mo + 400 Circle members.

WHAT WE ARE NOT: A dev shop. A consulting firm. A hype machine. A tools aggregator.`}
                            </div>
                        </div>
                    </motion.div>

                    <Divider />

                    {/* 11. Lexicon & Voice — From Toolkits */}
                    <motion.div {...fade(0.1)}>
                        <Label>11</Label>
                        <SectionTitle>Lexicon & Voice — From the Toolkits</SectionTitle>
                        <p className="text-sm text-black/50 mb-6 -mt-2">
                            Extracted from deep reading of all five Future Protocols issues (Apr 2026).
                            These are the actual concepts, sentence structures, and vocabulary that define Research Lab's thinking.
                            Use this when writing anything — copy, decks, social, internal docs.
                        </p>

                        <div className="space-y-6">

                            {/* Core coined concepts */}
                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-4">Our Coined Concepts — Use These</p>
                                <div className="space-y-4">
                                    {[
                                        {
                                            term: "Soft Engineering",
                                            src: "Issue 01",
                                            def: "The practice of designing with awareness — combining systems thinking with empathy, observation, and imagination. Rooted in presence and human-centered. The counter to hard tech culture. 9 qualities: self-awareness without ego, energy to make decisions, radical imagination, dynamic communication, alignment with values + purpose, systems-oriented thinking, observation, empathy, active listening.",
                                        },
                                        {
                                            term: "Prediction-Error Tolerance",
                                            src: "Issue 01",
                                            def: "The neuroscience frame for adaptability. The brain only updates its internal models when a strong enough prediction error occurs. Highly adaptable individuals tolerate prediction error without shutting down or defending old assumptions. Adaptability is a cognitive skill, not a personality trait.",
                                        },
                                        {
                                            term: "Wisdom Work",
                                            src: "Issue 03",
                                            def: "The post-execution era of work. When AI handles the how — the remaining 20% becomes everything: taste, judgment, presence, improvisation, depth leadership. Work is becoming less like execution and more like improvisation.",
                                        },
                                        {
                                            term: "Creative Entropy",
                                            src: "Issue 02",
                                            def: "Nothing is fixed, everything merges, everything is fluid. The condition of co-creation with AI — we do not fully know what is happening inside the system, even if we have designed it ourselves.",
                                        },
                                        {
                                            term: "Operational AI",
                                            src: "Issue 01",
                                            def: "Distinct from tool AI. In 2026, the task is turning agents into Operational AI — a shared layer that makes collective thinking precise and reproducible. The same way the body synchronises billions of neurons through a shared electrochemical language, Operational AI synchronises team intelligence through a shared operational language.",
                                        },
                                        {
                                            term: "Algorithmic Unconscious",
                                            src: "Issue 04",
                                            def: "AI systems have hidden layers similar to our own subconscious — formed from the mix of human desires, logic, and computer programming, remaining hidden because of the black-box effect. AI is not other; it is a mirror of collective human patterns.",
                                        },
                                        {
                                            term: "Self-As-Process",
                                            src: "Issue 01",
                                            def: "Identity is fluid, not fixed. 'There is no previously existing I to do the experiencing. The only self that exists is the one in the process of contacting the environment.' Resistance emerges when we cling to outdated self-concepts. Growth requires letting the old self dissolve.",
                                        },
                                        {
                                            term: "Symbiotic Creativity",
                                            src: "Issue 02",
                                            def: "Five principles: Transparency (name AI's role openly), Intentionality (work with purpose, not just effect), Reflexivity (notice how tools shape your process), Openness (stay receptive to detours, accidents, surprise), Authenticity (let your own voice remain visible).",
                                        },
                                    ].map(({ term, src, def }) => (
                                        <div key={term} className="flex gap-4 pb-4 border-b border-black/[0.07] last:border-b-0 last:pb-0">
                                            <div className="w-48 shrink-0">
                                                <p className="font-cabinet font-bold text-[15px] tracking-tight">{term}</p>
                                                <p className="text-[9px] font-code-brand text-[#0047BB] uppercase tracking-widest mt-0.5">{src}</p>
                                            </div>
                                            <p className="text-sm text-black/55 leading-relaxed">{def}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sentence structures */}
                            <div className="p-5 border border-black/10">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">Sentence Structures We Use</p>
                                <div className="space-y-3">
                                    {[
                                        ["Paradox / inversion", "if NOT CHANGE then MOVEMENT · change how you see, and see how you change"],
                                        ["Not X, but Y", "The real transformation happens not in machines, but in the way we learn to move with them."],
                                        ["X is not a destination, it is a stance", "Mindshift is not a destination; it is an ongoing stance."],
                                        ["Question as punctuation", "Can there be machine taste? · Does AI know you better than you do? · What's left for the human imagination?"],
                                        ["The colon reveal", "Collaboration begins with knowing: where we stand and what we bring to the table."],
                                        ["Scientific → poetic", "Start with neuroscience, arrive at the human. 'Each moment of awareness becomes an act of redesign.'"],
                                        ["Before X, Y", "Before AI can free us to be creative, we need to remember how to enter that space again."],
                                        ["The editable declaration", "Perception is editable. The future stops being something that happens to you."],
                                    ].map(([pattern, example]) => (
                                        <div key={pattern} className="flex gap-4">
                                            <span className="text-[#0047BB] shrink-0 w-4">—</span>
                                            <div>
                                                <p className="text-sm font-bold">{pattern}</p>
                                                <p className="text-sm text-black/45 italic mt-0.5">"{example}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vocabulary — use vs avoid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-3">Words That Are Ours</p>
                                    <div className="flex flex-wrap gap-1">
                                        {[
                                            "aliveness", "presence", "stance", "perception", "plasticity",
                                            "soft engineering", "wisdom work", "creative entropy", "operational AI",
                                            "co-evolution", "co-creation", "distill", "curate", "engineer context",
                                            "the fold", "the opening", "the threshold", "rhythm", "tempo",
                                            "improvisation", "the crossing point", "awareness", "adaptability",
                                            "taste", "judgment", "the mirror", "the pause",
                                        ].map((w) => <Tag key={w}>{w}</Tag>)}
                                    </div>
                                </div>
                                <div className="p-5 border border-black/10">
                                    <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/30 mb-3">Words We Never Use</p>
                                    <div className="flex flex-wrap gap-1 opacity-50">
                                        {[
                                            "disruptive", "game-changing", "revolutionary", "unleash",
                                            "leverage", "AI-powered future", "unprecedented", "cutting-edge",
                                            "transformational journey", "next-level", "supercharge",
                                            "seamlessly", "robust", "scalable solution", "unlock potential",
                                        ].map((w) => <Tag key={w}>{w}</Tag>)}
                                    </div>
                                </div>
                            </div>

                            {/* The AI mirror thesis */}
                            <div className="p-5 border-2 border-[#0047BB]/20 bg-[#0047BB]/[0.03]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-[#0047BB] mb-3">The Mirror Thesis — Our Core AI Philosophy</p>
                                <div className="space-y-3 text-sm text-black/65 leading-relaxed">
                                    <p>From <em>AI as a New Entity</em>: <strong>"A new agent, not divine but speaking in our voices, revealing our blind spots, repeating our patterns. Every output's a mirror. Every answer's an echo. AI's not other — it is us."</strong></p>
                                    <p>AI is not a tool to be feared or worshipped. It is a reflection of collective human thought — built from everything we have written, imagined, and decided. To understand AI is to understand ourselves more clearly.</p>
                                    <p>The AI spectrum: <strong>Tool → Partner → Co-creator → Independent Agent.</strong> Research Lab works at the Partner / Co-creator level — not just using AI but thinking alongside it.</p>
                                    <p>From <em>The End of Art</em>: <strong>"Interacting with AI can feel like pure magic — an unexpected alchemy, a quantum space of creativity where intuition, chance, and machine intelligence intersect. It's only a question of optics: shift your gaze, and the ordinary becomes transcendent."</strong></p>
                                </div>
                            </div>

                            {/* Bangers — lines to use */}
                            <div className="p-5 border border-black/10 bg-black/[0.02]">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-4">Lines Worth Stealing — From Our Own Work</p>
                                <div className="space-y-3">
                                    {[
                                        ["Issue 01", "Mindshift is not a destination; it is an ongoing stance: the moment you realise your perception is editable — the future stops being something that happens to you and becomes something you can (self) engineer."],
                                        ["Issue 01", "What we call change is often nothing more than perception learning to move."],
                                        ["Issue 01", "The mind that observes itself changes itself. Each moment of awareness becomes an act of redesign."],
                                        ["Issue 02", "Taste is the new scarcity. This personal perspective is one of the most valuable resources in creative work — a rare luxury that cannot be copied yet always offers new depth."],
                                        ["Issue 02", "Most people use AI like an upgraded office tool. But the real future begins when we use it wrong — in strange, illogical, inefficient ways. In those glitches and improvisations, new forms of art, thought, and human-machine relations appear."],
                                        ["Issue 03", "Before AI can free us to be creative, we need to remember how to enter that space again — and rebuild the rituals we lost chasing productivity."],
                                        ["Issue 03", "While AI can handle the how, the why will always be uniquely and irreplaceably human. The ability to see the whole as more than the sum of its parts is our core advantage."],
                                        ["Issue 03", "We don't just solve problems; we engineer context and systems — we curate."],
                                        ["Issue 04", "We've entered a new world where we need to study AI systems not as engineering artifacts, but as agents with their own cognitive ecology, behaviors, and logic. We explore AI, and AI explores us."],
                                        ["Lightpaper", "How do all domains of intuition blur for the most learning environment?"],
                                    ].map(([src, line]) => (
                                        <div key={line.slice(0, 30)} className="flex gap-4">
                                            <span className="font-code-brand text-[9px] text-[#0047BB] uppercase tracking-widest shrink-0 w-16 pt-0.5">{src}</span>
                                            <p className="text-sm text-black/60 italic leading-relaxed border-l border-[#0047BB]/20 pl-4">"{line}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <Divider />

                    {/* Changelog */}
                    <motion.div {...fade(0.1)}>
                        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/30 mb-4">Changelog</p>
                        <div className="space-y-2">
                            {changelog.map((entry) => (
                                <div key={entry.date} className="flex gap-4 text-sm">
                                    <span className="font-code-brand text-black/30 shrink-0">{entry.date}</span>
                                    <span className="text-black/50">{entry.note}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            <LabComments page="context" />

            <LabDocNav
                theme="light"
                next={{ label: "Q2 Overview", href: "/lab/q2-overview" }}
            />

            <footer className="py-12 text-center border-t border-black/10">
                <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
                    SORRYWECAN // RESEARCH LAB // 2026
                </p>
            </footer>
        </div>
    )
}
