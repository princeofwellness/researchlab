"use client"

import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { LabStrategyNav } from "@/components/navigation/lab-strategy-nav"
import { LabDocNav } from "@/components/navigation/lab-doc-nav"

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
        <h2 className="font-syne font-bold text-2xl md:text-3xl tracking-tighter mt-2 mb-6">
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
                        <h1 className="font-syne font-bold text-5xl md:text-6xl tracking-tighter mt-3 leading-[0.95]">
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
                                    Research Lab is an AI literacy and transformation venture operating under the SORRYWECAN creative agency umbrella, based in Bratislava, Slovakia. We run immersive workshops and build community infrastructure that teaches professionals and young people not just how to use AI tools — but how to think with AI. The tagline: <strong>WHERE HUMANS & AI CO-EVOLVE.</strong>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40">Core Team</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {[
                                        { name: "Tiep Le Dinh", alias: "Prince of Wellness", role: "Vision, Output, Face, Content" },
                                        { name: "Andrea (Adka)", alias: null, role: "Production, Structure, Deals, Community ops" },
                                        { name: "Sasha", alias: null, role: "Content creation, Marketing, Research" },
                                    ].map((f) => (
                                        <div key={f.name} className="p-4 border border-black/10">
                                            <p className="font-bold text-sm">{f.name}</p>
                                            {f.alias && <p className="text-xs text-black/30 mt-0.5">{f.alias}</p>}
                                            <p className="text-xs text-[#0047BB] font-code-brand mt-1 uppercase tracking-widest">{f.role}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mt-3">Extended</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                    {[
                                        { name: "Roland", role: "Taste curation, SORRYWECAN network" },
                                        { name: "Roman Pii Wagner", role: "Advisor & partner — corporate workshops + Mindshift" },
                                        { name: "Guest speakers", role: "Outsourced per engagement" },
                                    ].map((f) => (
                                        <div key={f.name} className="p-4 border border-black/10 bg-black/[0.02]">
                                            <p className="font-bold text-sm">{f.name}</p>
                                            <p className="text-xs text-[#0047BB] font-code-brand mt-1 uppercase tracking-widest">{f.role}</p>
                                        </div>
                                    ))}
                                </div>
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
                                <p className="text-xl font-syne font-bold tracking-tight leading-snug">
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
                                <p className="font-syne font-bold text-lg">A research institution that moves fast — warm, rigorous, and sharp.</p>
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
                                    name: "THE MINDSHIFT",
                                    status: "Paused — returns Q3/Q4",
                                    type: "Public Workshop",
                                    details: [
                                        "3.5-hour immersive AI literacy session",
                                        "Format: Taste (Roland) → Leverage (Tiep) → Clarity (Roman) → Q&A",
                                        "Price: €99/person (in-person + online)",
                                        "Paused for Q2 — community growth first. Returns at different rhythm, not monthly.",
                                        "When it returns: 40 seats, live seat counter, booking via Cal.com embed",
                                        "Bilingual: EN/SK",
                                    ]
                                },
                                {
                                    name: "Corporate Workshop",
                                    status: "Validating",
                                    type: "B2B",
                                    details: [
                                        "Two-part format: Day 1 Mindshift thinking + Day 2 Practical tools",
                                        "Day 1: Mindset shift, philosophical framing, team discussion, blockades",
                                        "Day 2: Tools, prompts, workflows, multimodality, meeting notes, deep research",
                                        "Price: €690/person + VAT, min 10 people (~€6,900–9,660 per workshop)",
                                        "Target: 2 workshops Q2 = ~€14–20k. Raise to €800+ after first delivery + testimonial.",
                                        "Pipeline: O2 department (pre-warmed)",
                                    ]
                                },
                                {
                                    name: "Community Membership",
                                    status: "Building — June 2026 launch",
                                    type: "B2C Recurring",
                                    details: [
                                        "Platform: Circle",
                                        "Entry tier: €39/month (validation pricing)",
                                        "Access: Pre-recorded library, bi-weekly webinars, prompt library, thinking frameworks",
                                        "Content: Basic → Mindshift thinking → Tools → Agentic systems → What's New",
                                        "Perks: Physical event access, co-working sessions, collaborator network",
                                        "Launch: Founding cohort June 2026, full launch September 2026",
                                    ]
                                },
                                {
                                    name: "NextGen — Youth AI",
                                    status: "Seeking partners",
                                    type: "Social / CSR",
                                    details: [
                                        "AI literacy for 14-18 year olds aging out of care homes",
                                        "Trauma-aware curriculum design",
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

                    {/* 8. Current Priorities */}
                    <motion.div {...fade(0.1)}>
                        <Label>08</Label>
                        <SectionTitle>Current Priorities — Q2 2026</SectionTitle>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {[
                                    { rank: "01", title: "Close corporate workshops", detail: "O2 and two more. €25k+ from 3 workshops." },
                                    { rank: "02", title: "Build & launch Circle", detail: "Founding cohort in by June. September full blast." },
                                    { rank: "03", title: "Grow Instagram 800 → 1500", detail: "Content flywheel. Free funnels into paid." },
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
                                <a href="/lab/q2-platform" className="p-4 border border-black/10 hover:border-[#0047BB] hover:bg-[#0047BB]/5 transition-all group">
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
                                <p className="text-[10px] font-code-brand font-bold uppercase tracking-widest text-black/40 mb-3">Revenue Structure — To Define</p>
                                <p className="text-sm text-black/60 mb-3">The internal profit split between Tiep, Roman, Andrea (Adka), and the SORRYWECAN entity has not been formally mapped. Everyone needs financial clarity and motivation.</p>
                                <div className="flex gap-2 text-sm">
                                    <span className="text-[#0047BB] shrink-0">—</span>
                                    <span className="text-black/60">Action: formally define the revenue split — who gets what % per workshop, per membership, per partnership deal. Map the s.r.o. structure and billing flow.</span>
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
- THE MINDSHIFT: €99/person public workshop
- Corporate: €690/person, min 10 people, two-day format (→ €800+ after first delivery)
- Community (Circle): €39/month, launching June 2026
- NextGen: Youth programme, seeking CSR partners

WHAT WE ARE NOT: A dev shop. A consulting firm. A hype machine. A tools aggregator.`}
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
