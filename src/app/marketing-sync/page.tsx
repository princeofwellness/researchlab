"use client"

import { TopNav } from "@/components/navigation/top-nav"

export default function MarketingSyncPage() {
    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB] selection:text-white">
            <TopNav />

            <article className="max-w-3xl mx-auto pt-32 pb-24 px-6">

                <header className="mb-16 border-b border-black/10 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0047BB] mb-4">Internal Master Sync</p>
                            <h1 className="font-serif text-4xl md:text-6xl italic leading-tight text-black">
                                THE MINDSHIFT
                            </h1>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl md:text-5xl font-bold text-[#0047BB] tracking-tighter">16 DAYS</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">Until Feb 26</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-black/50">
                        <span className="bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">D-Day: Feb 26</span>
                        <span>Updated: Feb 10, 2026</span>
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Ownership</h2>
                    <div className="border border-black/10 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-[120px_1fr] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Person</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Owns</div>
                        </div>
                        {[
                            ["Tepi", "Product, website, creative media, speaker deals, marketing sync"],
                            ["Sasha", "Research publishing, digital toolkit, structured newsletter, social posting copy"],
                            ["Andrea", "Partner comms, email ops, grants, media communication, news/PR"],
                            ["Adam", "Social media, marketing support"],
                            ["Roland", "Warm leads (opener), pitch materials, personal network"],
                            ["Ján", "Personal outreach, session delivery"],
                            ["Roman", "Personal outreach, session delivery, email copy"],
                            ["Brano", "IG stories, templates, video editing, daily posting"],
                            ["Edo, Tibor", "Partner/client database, B2B outreach, finance"]
                        ].map(([person, owns], i) => (
                            <div key={i} className="grid grid-cols-[120px_1fr] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 bg-black/[0.01]">{person}</div>
                                <div className="p-3 text-black/70">{owns}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16 border border-black/10 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-serif text-2xl italic text-black">Status: Feb 10</h2>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black px-2 py-1">Launch Day</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <MetricCard value="0" label="Tickets sold" />
                        <MetricCard value="0" label="DMs sent" />
                        <MetricCard value="0" label="Emails sent" />
                        <MetricCard value="?" label="Payment link live" />
                        <MetricCard value="DONE" label="One-pagers approved" />
                        <MetricCard value="16" label="Days left" />
                    </div>
                    <p className="text-sm text-black/40 italic text-center font-serif">Today is launch day. Phase 2 (ANNOUNCE) starts now.</p>
                </section>

                <div className="space-y-12 mb-16">
                    <ChecklistSection 
                        letter="A" 
                        title="PRODUCT" 
                        owner="Tepi" 
                        deadline="Feb 12"
                        items={[
                            "Call each speaker personally — confirm conditions, confirm they're in",
                            "Set up online meetings with speakers before Feb 12",
                            "Confirm panel covers costs for speakers + 3 helpers",
                            "Corporate deliverables list — what companies actually get",
                            "Public deliverables — what attendees leave with"
                        ]}
                        note="Venue: our studio. Session structure: locked. Pricing: locked. Speakers: should be ok, but must be confirmed ASAP."
                    />

                    <ChecklistSection 
                        letter="B" 
                        title="WEBSITE" 
                        owner="Tepi" 
                        deadline="Fri Feb 13"
                        items={[
                            "Add real photos — founders, workshop environment, the feel",
                            "Payment system — Stripe link, Revolut, or bank transfer for EUR 99",
                            "Booking flow — working end-to-end",
                            "Seat counter — live count of 40",
                            "Migrate to lab.sorrywecan.com — target Fri Feb 13"
                        ]}
                    />

                    <ChecklistSection 
                        letter="C" 
                        title="COMMS & PARTNERS" 
                        owner="Andrea/Sasha" 
                        deadline="ongoing"
                        items={[
                            "Collect all email addresses — partners, past contacts, networks",
                            "List potential partners and influencers for outreach",
                            "Prepare outreach — simple marketing copy, ready to send",
                            "Partner communication — activate SWC referral network",
                            "Speaker logistics — brief Roland, Jan, Roman",
                            "Endorsement quotes — ask 5 respected people, put on landing page"
                        ]}
                    />

                    <ChecklistSection 
                        letter="D" 
                        title="EMAIL" 
                        owner="Andrea + Tepi" 
                        deadline="Feb 12"
                        items={[
                            "Compile all contacts — toolkit downloads, newsletter, past contacts",
                            "Founders' warm lists — 25-30 real relationships each = ~90 total",
                            "SWC database — Edo/Tibor pull client/partner emails from last 2 years",
                            "Email #1 — send TODAY — 'It's Happening' (Slovak, short, link to buy)",
                            "Email #2 — send Feb 12-13 — social proof + FAQ",
                            "Email #3 — send Feb 19 — 'Poslednych X miest'"
                        ]}
                        note="3 emails total. Not 7."
                    />

                    <ChecklistSection 
                        letter="E" 
                        title="OUTREACH" 
                        owner="Everyone" 
                        deadline="full attack by Feb 16"
                        items={[
                            "Each founder: list 25-30 people to personally invite",
                            "Personal DMs — 7-10/day per founder, start this week",
                            "SWC team: outreach to client/partner database (two asks per contact)",
                            "Follow up on non-responses: Day 3, Day 7, Day 14",
                            "Track everything in one shared sheet",
                            "Close every open conversation personally in final week"
                        ]}
                        note="Full attack mode. 50-80 seats reachable. We only need 40."
                    />

                    <ChecklistSection 
                        letter="F" 
                        title="CREATIVE" 
                        owner="Tepi + Brano" 
                        deadline="weekend / Mon"
                        items={[
                            "Website + social content — start during weekend, live by Monday",
                            "Live preview session — Feb 17-18, 30-45 min free Q&A (keep this)"
                        ]}
                    />

                    <ChecklistSection 
                        letter="G" 
                        title="PAYMENT & BOOKING" 
                        owner="Tepi" 
                        deadline="this week"
                        items={[
                            "Payment link for EUR 99 — must work for launch",
                            "Booking flow — seamless end-to-end",
                            "Seat counter — live tracking of sold/remaining",
                            "Invoice system for corporate EUR 5,900"
                        ]}
                    />

                    <ChecklistSection 
                        letter="H" 
                        title="DAY-OF (Feb 26)" 
                        owner="Andrea + Tepi" 
                        deadline="Feb 24"
                        items={[
                            "AV: projector, sound, mics",
                            "Check-in process",
                            "Video capture: b-roll + testimonials",
                            "Post-session: follow-up email same day"
                        ]}
                        note="Venue: our studio. Confirmed."
                    />
                </div>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Timeline</h2>
                    <div className="border border-black/10 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-[100px_1fr] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Date</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">What</div>
                        </div>
                        {[
                            ["Feb 10-12", "Products finalized. Payment working. Email #1 sends. Outreach starts."],
                            ["Feb 12", "Email #2. Speaker deals closed. Contact list compiled."],
                            ["Feb 13-14", "Website + migration to lab.sorrywecan.com. Target: Friday."],
                            ["Feb 15-16", "Website + social content live. Weekend push."],
                            ["Feb 16", "Full attack outreach mode. All channels active."],
                            ["Feb 17-18", "Live preview session (30-45 min Q&A)."],
                            ["Feb 19", "Email #3 — final call."],
                            ["Feb 20-25", "Close everything. Urgency. Last seats."],
                            ["Feb 26", "SESSION DAY — deliver, capture, collect testimonials."],
                            ["Feb 27+", "Post UGC. Open Session #2. Corporate pipeline."]
                        ].map(([date, what], i) => (
                            <div key={i} className="grid grid-cols-[100px_1fr] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 bg-black/[0.01] text-[#0047BB]">{date}</div>
                                <div className="p-3 text-black/70">{what}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16 bg-black/[0.02] border border-black/10 p-6">
                    <h2 className="font-serif text-2xl italic mb-4 text-black">Done</h2>
                    <ul className="space-y-2">
                        {[
                            "Venue — our studio, confirmed",
                            "Session structure locked (Taste / Leverage / Clarity)",
                            "Pricing locked (EUR 99 / EUR 5,900)",
                            "Website pages (homepage, /public, /corporate, one-pagers)",
                            "Copy polished, bilingual EN/SK",
                            "Email templates written (3 launch + DM templates)",
                            "Partner logos on site",
                            "Email collection on lab.sorrywecan.com",
                            "Objection handling scripts",
                            "One-sentence positioning locked (EN + SK)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-black/60">
                                <span className="text-[#0047BB] font-bold">done</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Gaps</h2>
                    <div className="border border-black/10 overflow-hidden">
                        <div className="grid grid-cols-[1fr_1fr_80px] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Gap</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Impact</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Fix By</div>
                        </div>
                        {[
                            ["Speaker deals not confirmed", "Can't run session", "Feb 12"],
                            ["No payment link", "Can't sell", "this week"],
                            ["No photos on site", "Doesn't feel real", "Feb 14"],
                            ["Not on official domain", "People can't find it", "Fri"],
                            ["Email #1 not sent", "Behind schedule", "NOW"],
                            ["Contact list not compiled", "Can't outreach", "this week"],
                            ["Outreach not started", "No momentum", "this week"]
                        ].map(([gap, impact, fix], i) => (
                            <div key={i} className="grid grid-cols-[1fr_1fr_80px] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 text-black">{gap}</div>
                                <div className="p-3 text-black/50 border-r border-black/10">{impact}</div>
                                <div className="p-3 font-bold text-[#0047BB]">{fix}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16 bg-black/[0.02] border border-black/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="font-serif text-2xl italic text-black">After Feb 26</h2>
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-black/5 text-black/40">Parked</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                        {[
                            "Quarterly KPIs",
                            "New workshop models",
                            "Growth plan",
                            "Content strategy (only after real session footage)",
                            "Session #2 planning",
                            "Corporate pipeline from attendees",
                            "SWC vs Research Lab content split",
                            "Digital products / toolkit monetization",
                            "Tatrabanka AI case study video"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-black/40">
                                <span className="text-black/20 font-bold">||</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-black/30 italic font-serif border-t border-black/10 pt-4">
                        None of this matters until 40 seats are sold and the session is delivered.
                    </p>
                </section>

                <section className="mb-16 bg-black/[0.03] p-6 rounded-sm">
                    <h2 className="font-serif text-2xl italic mb-4 text-black">Daily Check</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Every Morning, 5 Min</p>
                    <ol className="space-y-3">
                        {[
                            "How many seats sold?",
                            "What's blocked?",
                            "Who's doing what today?",
                            "Follow up on yesterday's DMs/emails?"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-black/70">
                                <span className="font-bold text-[#0047BB]">{i + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </section>

            </article>
        </div>
    )
}

function MetricCard({ value, label }: { value: string, label: string }) {
    return (
        <div className="border border-black/10 p-4 text-center">
            <p className="text-3xl font-serif text-[#0047BB]">{value}</p>
            <p className="text-xs text-black/40 mt-1 uppercase tracking-wider">{label}</p>
        </div>
    )
}

function ChecklistSection({ letter, title, owner, deadline, items, note }: { 
    letter: string, 
    title: string, 
    owner: string, 
    deadline: string, 
    items: string[],
    note?: string
}) {
    return (
        <div className="border-l-2 border-[#0047BB] pl-6 py-2">
            <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl font-bold text-[#0047BB]">{letter}.</span>
                <div>
                    <h3 className="font-bold text-lg leading-none">{title}</h3>
                    <p className="text-xs text-black/40 mt-1 uppercase tracking-wider">
                        {owner} · <span className="text-[#0047BB]">{deadline}</span>
                    </p>
                </div>
            </div>
            
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black/80 group">
                        <div className="w-4 h-4 border border-black/20 rounded-sm mt-0.5 shrink-0 group-hover:border-[#0047BB] transition-colors" />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
            
            {note && (
                <p className="mt-4 text-sm font-bold text-[#0047BB] bg-[#0047BB]/5 p-3 inline-block rounded-sm">
                    {note}
                </p>
            )}
        </div>
    )
}
