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
                            <p className="text-3xl md:text-5xl font-bold text-red-600 tracking-tighter">10 DAYS</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">Until Feb 26</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-black/50">
                        <span className="bg-red-600 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">Final Sprint</span>
                        <span>Updated: Feb 16, 2026</span>
                    </div>
                </header>

                {/* ==================== TODAY — FEB 16 ==================== */}
                <section className="mb-16 bg-black text-white p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-serif text-2xl md:text-3xl italic">Today: Feb 16</h2>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Sunday</span>
                    </div>
                    <p className="text-sm text-white/50 mb-6">Website, payment, and booking must be verified today. Tomorrow is live preview week.</p>
                    
                    <div className="space-y-4">
                        <div className="bg-white/10 border border-white/20 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2">Critical — Before Anything Else</p>
                            <div className="space-y-2 text-sm text-white/80">
                                <p>{"[ ]"} Test full booking flow end-to-end (see testing checklist below)</p>
                                <p>{"[ ]"} Verify Cal.com event type exists + payment enabled (EUR 99)</p>
                                <p>{"[ ]"} Verify webhook fires to Supabase on test booking</p>
                                <p>{"[ ]"} Verify seat counter updates on site after purchase</p>
                                <p>{"[ ]"} Verify confirmation email goes out after booking</p>
                            </div>
                        </div>

                        <div className="bg-white/10 border border-white/20 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Content — Get It Out</p>
                            <div className="space-y-2 text-sm text-white/80">
                                <p>{"[ ]"} Post LinkedIn #1 — long format personal story (draft ready below)</p>
                                <p>{"[ ]"} Confirm with Brano: are IG stories running daily?</p>
                                <p>{"[ ]"} Confirm live preview session: date, platform, link (Feb 17 or 18?)</p>
                            </div>
                        </div>

                        <div className="bg-white/10 border border-white/20 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Status Check — Answer These</p>
                            <div className="space-y-2 text-sm text-white/80">
                                <p>{"[ ]"} Did Email #1 send? (Was due Feb 10)</p>
                                <p>{"[ ]"} Did Email #2 send? (Was due Feb 12-13)</p>
                                <p>{"[ ]"} How many DMs have founders sent? (Target was 7/day since Feb 10)</p>
                                <p>{"[ ]"} How many tickets sold? (Target was 10 by Feb 12, 20 by Feb 16)</p>
                                <p>{"[ ]"} Is site live on lab.sorrywecan.com? (Was due Feb 15)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== STATUS ==================== */}
                <section className="mb-16 border-2 border-red-200 bg-red-50 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-serif text-2xl italic text-red-900">Status: Feb 16</h2>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-100 px-2 py-1">Needs Update</span>
                    </div>
                    <p className="text-sm text-red-700/60 mb-6">These numbers need to be filled in TODAY. If any are still 0, that{"'"}s the priority.</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <MetricCard value="?" label="Tickets sold" color="red" note="Target: 20" />
                        <MetricCard value="?" label="DMs sent (total)" color="red" note="Target: 100+" />
                        <MetricCard value="?" label="Emails sent" color="red" note="Target: 2 of 3" />
                        <MetricCard value="?" label="Payment working" color="amber" note="Test today" />
                        <MetricCard value="?" label="Site on lab domain" color="amber" note="Due Feb 15" />
                        <MetricCard value="10" label="Days left" color="blue" />
                    </div>
                    
                    <div className="bg-white border border-red-200 p-4 text-sm text-red-800">
                        <p className="font-bold mb-1">Where we should be by now (per our own plan):</p>
                        <p className="text-red-700/70">Email #1 sent. Email #2 sent. ~100 DMs out. 10-20 tickets sold. Site migrated. Payment confirmed. Photos on site. We{"'"}re at Day 7 of a 16-day sprint.</p>
                    </div>
                </section>

                {/* ==================== 10-DAY GAME PLAN ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl md:text-3xl italic mb-2 text-black">10-Day Game Plan</h2>
                    <p className="text-sm text-black/40 mb-8">Feb 16-26. Everything that matters. Nothing that doesn{"'"}t.</p>

                    <div className="space-y-8">
                        <PhaseBlock
                            phase="PHASE 1"
                            title="CATCH UP + LAUNCH"
                            dates="Feb 16-17 (Sun-Mon)"
                            color="red"
                            items={[
                                "Test full booking flow — payment, webhook, seat counter, confirmation",
                                "If emails didn't send yet — Email #1 goes TODAY",
                                "Founders: compile 25-30 person DM list if not done",
                                "Start/continue personal DMs — 10/day per founder",
                                "Post LinkedIn long-format post (Roman)",
                                "Confirm live preview session details (date, platform, link)",
                                "Brano: daily IG stories running — countdown, BTS, polls",
                            ]}
                        />

                        <PhaseBlock
                            phase="PHASE 2"
                            title="LIVE PREVIEW + PUSH"
                            dates="Feb 17-19 (Mon-Wed)"
                            color="blue"
                            items={[
                                "Run FREE live preview session (30-45 min) — record it",
                                "Attendees get 24-48h priority seat hold",
                                "Email #2 if not sent — send Feb 17 (social proof + FAQ)",
                                "Email #3 — 'Final Call' — send Feb 19",
                                "LinkedIn post #2 — short/punchy format",
                                "Clip preview session — post highlights on IG + LinkedIn",
                                "Partner emails go out (Andrea/Sasha — SWC network)",
                                "Follow up on all non-responses from Week 1 DMs",
                            ]}
                        />

                        <PhaseBlock
                            phase="PHASE 3"
                            title="URGENCY + CLOSE"
                            dates="Feb 20-25 (Thu-Tue)"
                            color="black"
                            items={[
                                "'X seats left' stories DAILY (only if true)",
                                "LinkedIn post #3 — proof/numbers format",
                                "Close every open conversation personally",
                                "Final DM to all 'maybe' people: 'Poslednych 10 miest. Si in alebo out?'",
                                "Daily countdown stories on IG",
                                "Feb 24: Final logistics check — AV, check-in, video capture",
                                "Feb 25: 'Tomorrow. Last chance.' across all channels",
                            ]}
                        />

                        <PhaseBlock
                            phase="D-DAY"
                            title="SESSION DAY"
                            dates="Feb 26 (Wednesday)"
                            color="green"
                            items={[
                                "Deliver THE MINDSHIFT",
                                "Capture: b-roll, testimonials (30-60s each), photos",
                                "Testimonial questions: What surprised you? What will you do differently Monday?",
                                "Same-day: follow-up email to attendees",
                                "Same-day: post 1 raw story from the session",
                            ]}
                        />
                    </div>
                </section>

                {/* ==================== TESTING CHECKLIST ==================== */}
                <section className="mb-16 border-2 border-black p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="font-serif text-2xl italic text-black">Booking Flow Test</h2>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-black px-2 py-1">Do This Today</span>
                    </div>
                    <p className="text-sm text-black/50 mb-6">The whole purchase experience, tested before going live. No surprises on launch.</p>

                    <div className="space-y-6">
                        <TestStep 
                            num="1" 
                            title="Database" 
                            checks={[
                                "Supabase dashboard: 'events' table has row with slug 'the-shift-feb-26'",
                                "sold_seats = 0 (or current real number)",
                                "total_seats = 40",
                                "status = 'active'",
                            ]}
                        />
                        <TestStep 
                            num="2" 
                            title="Seat Counter" 
                            checks={[
                                "Open site: seat counter shows correct count (e.g. '40 / 40 seats left')",
                                "Counter polls every 30 seconds (check network tab)",
                                "If seats sold, counter reflects accurately",
                            ]}
                        />
                        <TestStep 
                            num="3" 
                            title="Booking (Critical Path)" 
                            checks={[
                                "Click 'I'm In': Cal.com embed opens in modal",
                                "Cal.com event 'theshift' loads correctly",
                                "Payment is enabled at EUR 99",
                                "Complete a TEST booking with test email",
                                "After payment: check Supabase 'webhook_log' for new entry",
                                "Check 'bookings' table for new row with correct email + amount",
                                "Check 'events' table: sold_seats incremented",
                                "Site seat counter updated",
                            ]}
                        />
                        <TestStep 
                            num="4" 
                            title="Confirmation" 
                            checks={[
                                "Cal.com sends confirmation email after booking",
                                "Email includes: date, time, location, what to expect",
                                "Booking appears in Cal.com dashboard",
                            ]}
                        />
                        <TestStep 
                            num="5" 
                            title="Cancellation" 
                            checks={[
                                "Cancel the test booking in Cal.com",
                                "Webhook fires BOOKING_CANCELLED (check webhook_log)",
                                "sold_seats decrements back",
                                "Seat counter on site updates",
                            ]}
                        />
                        <TestStep 
                            num="6" 
                            title="Environment" 
                            checks={[
                                "Webhook endpoint deployed (not just localhost)",
                                "CAL_WEBHOOK_SECRET set in production",
                                "NEXT_PUBLIC_SUPABASE_URL set",
                                "NEXT_PUBLIC_SUPABASE_ANON_KEY set",
                                "SUPABASE_SERVICE_ROLE_KEY set",
                            ]}
                        />
                    </div>
                </section>

                {/* ==================== CONTENT READY TO POST ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl md:text-3xl italic mb-2 text-black">Content: Ready to Post</h2>
                    <p className="text-sm text-black/40 mb-8">Three LinkedIn posts drafted. Copy-paste and go.</p>

                    <div className="space-y-8">
                        <ContentDraft
                            num="1"
                            format="Long Format — Personal Story"
                            platform="LinkedIn"
                            when="Post TODAY (Feb 16)"
                            body={`Something changed in how work gets done. Most people haven't caught up.

For four months, we've been giving away free AI toolkits. Thousands of downloads. No catch.

And the same question kept coming back: "This is great, but can you just show me how YOU actually use it?"

Fair question. Toolkits give you the what. But the real value is in the how — the judgment calls, the taste, the knowing when NOT to use AI.

Three things we've learned building with AI daily:

1. Prompting isn't the skill. Curating is. Anyone can generate. Few can recognize quality.

2. The tools are the easy part. The hard part is knowing what's worth building and what's noise.

3. Speed without direction is just faster confusion.

So we're doing something about it. Feb 26. One room. 40 people. Three hours.

Not a course. Not slides. Not theory. Just how we actually work.

Roland on taste. Jan on leverage. Me on clarity.

If you use AI at work and feel like you're leaving potential on the table — this is for you.

40 seats. EUR 99. Link in comments.`}
                        />

                        <ContentDraft
                            num="2"
                            format="Short Format — Punchy / Contrarian"
                            platform="LinkedIn"
                            when="Feb 18-19"
                            body={`You don't need to learn prompting.

You need to learn what "good" looks like.

AI gave everyone the same tools. The gap isn't access. It's taste.

Feb 26. Bratislava. 40 people. 3 hours.

We're calling it THE MINDSHIFT.

Link below.`}
                        />

                        <ContentDraft
                            num="3"
                            format="Medium Format — Proof / Numbers"
                            platform="LinkedIn"
                            when="Feb 21-22"
                            body={`3 founders. 4 months of free toolkits. 10,000+ downloads.

One question kept coming up:

"Can you just show me how YOU use it?"

So that's exactly what we're doing.

Feb 26. One room. Three hours. EUR 99.

Taste — what separates good from forgettable (Roland)
Leverage — what one person can build now (Jan)
Clarity — how to think when everything moves (Roman)

Not a webinar. Not a course. 40 seats, and we want to talk to every person in the room.

Last spots available. Link in comments.`}
                        />
                    </div>
                </section>

                {/* ==================== EMAIL STATUS ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Email + Newsletter</h2>
                    <p className="text-sm text-black/40 mb-6">Your {"'"}newsletter{"'"} IS the 3-email sequence to the ~350 subscribers on lab.sorrywecan.com. Not a separate thing.</p>

                    <div className="space-y-4">
                        <EmailRow 
                            num="1" 
                            name={`"It's Happening"`} 
                            target="Feb 10" 
                            status="overdue"
                            note="If not sent: send TODAY. Copy is ready in execution doc."
                        />
                        <EmailRow 
                            num="2" 
                            name={`"Momentum" — Social Proof + FAQ`} 
                            target="Feb 12-13" 
                            status="overdue"
                            note="If not sent: send Feb 17. Adjust numbers to reality."
                        />
                        <EmailRow 
                            num="3" 
                            name={`"Final Call" — Poslednych X miest`}
                            target="Feb 19" 
                            status="upcoming"
                            note="On schedule. Send regardless."
                        />
                    </div>

                    <div className="mt-6 bg-[#0047BB]/5 border border-[#0047BB]/20 p-4 text-sm">
                        <p className="font-bold text-[#0047BB] mb-1">Partner Emails (separate from newsletter)</p>
                        <p className="text-black/60">Andrea/Sasha send to SWC partner/client network using the two-part ask template. This is B2B outreach, not newsletter. Templates are ready in marketing-execution-algorithm.md.</p>
                    </div>
                </section>

                {/* ==================== OUTREACH ENGINE ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Outreach Engine</h2>
                    <p className="text-sm text-black/40 mb-6">70% of tickets come from personal outreach. This IS the channel.</p>
                    
                    <div className="border border-black/10 overflow-hidden mb-6">
                        <div className="grid grid-cols-[100px_1fr_80px] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Channel</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Action</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Target</div>
                        </div>
                        {[
                            ["DMs", "Each founder: 10/day personal messages to warm leads", "15-20"],
                            ["Email list", "3 emails to 350 subscribers (Slovak, short, link to buy)", "15-35"],
                            ["SWC B2B", "Edo/Tibor: client/partner database outreach", "10-20"],
                            ["IG", "Daily stories (BTS, countdown, polls) + founders' personal", "5-10"],
                            ["LinkedIn", "3 posts from founders' personal profiles (EN)", "3-5"],
                            ["Preview", "Free 30-45 min session Feb 17-18 — convert to tickets", "5-10"],
                        ].map(([channel, action, target], i) => (
                            <div key={i} className="grid grid-cols-[100px_1fr_80px] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 bg-black/[0.01]">{channel}</div>
                                <div className="p-3 text-black/70 border-r border-black/10">{action}</div>
                                <div className="p-3 font-bold text-[#0047BB] text-center">{target}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-black/[0.03] p-4 text-sm">
                        <p className="font-bold mb-1">The Math (unchanged)</p>
                        <p className="text-black/60">3 founders x 25 DMs = 75 warm touches at 20% = 15 seats. Email 350 x 10% = 35. SWC partners = 10-20. Total reachable: 50-80. We need 40.</p>
                        <p className="font-bold text-[#0047BB] mt-2">The math works. The question is execution.</p>
                    </div>
                </section>

                {/* ==================== OWNERSHIP ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Ownership (Next 10 Days)</h2>
                    <div className="border border-black/10 rounded-sm overflow-hidden">
                        <div className="grid grid-cols-[120px_1fr] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Person</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Owns</div>
                        </div>
                        {[
                            ["Tepi", "Website verified, payment working, creative/content coordination, LinkedIn posts, marketing sync"],
                            ["Sasha", "Research publishing, structured newsletter send, social copy"],
                            ["Andrea", "Partner comms, email ops to 350 list, SWC network activation"],
                            ["Roland", "10 DMs/day, warm lead opener, personal LinkedIn post"],
                            ["Jan", "10 DMs/day, session prep, personal outreach"],
                            ["Roman", "10 DMs/day, session prep, email copy review, live preview"],
                            ["Brano", "Daily IG stories, countdown templates, video editing"],
                            ["Edo, Tibor", "SWC client/partner database outreach, B2B pipeline"],
                        ].map(([person, owns], i) => (
                            <div key={i} className="grid grid-cols-[120px_1fr] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 bg-black/[0.01]">{person}</div>
                                <div className="p-3 text-black/70">{owns}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ==================== GAPS ==================== */}
                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6 text-black">Gaps — Feb 16 Update</h2>
                    <div className="border border-black/10 overflow-hidden">
                        <div className="grid grid-cols-[1fr_100px_80px] border-b border-black/10 bg-black/[0.02]">
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Gap</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40 border-r border-black/10">Status</div>
                            <div className="p-3 text-[10px] font-bold uppercase tracking-widest text-black/40">Fix By</div>
                        </div>
                        {([
                            ["Payment + booking flow not tested end-to-end", "Unknown", "TODAY", "red"],
                            ["Email #1 may not have sent (was due Feb 10)", "Unknown", "TODAY", "red"],
                            ["Email #2 may not have sent (was due Feb 12-13)", "Unknown", "Feb 17", "red"],
                            ["DMs may not have started (was due Feb 10)", "Unknown", "NOW", "red"],
                            ["Site migration to lab.sorrywecan.com (was due Feb 15)", "Unknown", "ASAP", "amber"],
                            ["Live preview session not confirmed (target Feb 17-18)", "Unknown", "TODAY", "amber"],
                            ["Speaker deals confirmed?", "Should be ok", "Confirm", "amber"],
                            ["Photos on site (was due Feb 14)", "Unknown", "This week", "amber"],
                            ["One-pagers approved", "Done", "Done", "green"],
                            ["Website pages built", "Done", "Done", "green"],
                            ["Email/DM templates written", "Done", "Done", "green"],
                            ["Session structure locked", "Done", "Done", "green"],
                            ["Pricing locked", "Done", "Done", "green"],
                        ] as const).map(([gap, status, fix, color], i) => (
                            <div key={i} className="grid grid-cols-[1fr_100px_80px] border-b border-black/10 last:border-0 text-sm">
                                <div className="p-3 font-bold border-r border-black/10 text-black">{gap}</div>
                                <div className={`p-3 text-center border-r border-black/10 font-bold text-[10px] uppercase tracking-wider ${
                                    color === 'red' ? 'text-red-600 bg-red-50' : 
                                    color === 'amber' ? 'text-amber-600 bg-amber-50' : 
                                    'text-green-600 bg-green-50'
                                }`}>{status}</div>
                                <div className={`p-3 font-bold text-center ${
                                    color === 'red' ? 'text-red-600' : 
                                    color === 'amber' ? 'text-amber-600' : 
                                    'text-green-600'
                                }`}>{fix}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ==================== DONE ==================== */}
                <section className="mb-16 bg-green-50 border border-green-200 p-6">
                    <h2 className="font-serif text-2xl italic mb-4 text-green-900">What{"'"}s Done</h2>
                    <ul className="space-y-2">
                        {[
                            "Venue — our studio, confirmed",
                            "Session structure locked (Taste / Leverage / Clarity / Q&A)",
                            "Pricing locked (EUR 99 public / EUR 5,900 corporate)",
                            "Website: homepage with full content, bilingual EN/SK, FAQ, speakers",
                            "Booking integration: Cal.com embed with modal",
                            "Seat counter: real-time from Supabase, auto-refresh every 30s",
                            "Webhook handler: Cal.com to Supabase (booking + cancellation)",
                            "Database schema: events, bookings, webhook_log tables with RLS",
                            "Copy polished: all page copy, email templates (3 launch), DM templates (6 variants)",
                            "Objection handling scripts ready",
                            "One-sentence positioning locked (EN + SK)",
                            "One-pagers: public + corporate, approved",
                            "Partner logos on site",
                            "Email collection on lab.sorrywecan.com (~350 subs)",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-green-800">
                                <span className="text-green-500 font-bold shrink-0 mt-0.5">done</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ==================== DAILY CHECK ==================== */}
                <section className="mb-16 bg-black/[0.03] p-6 rounded-sm">
                    <h2 className="font-serif text-2xl italic mb-4 text-black">Daily Check (Feb 16-26)</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Every Morning, 5 Min</p>
                    <ol className="space-y-3">
                        {[
                            "How many seats sold?",
                            "How many DMs sent yesterday? By who?",
                            "Any email replies to follow up on?",
                            "What's blocked? Who needs to unblock it?",
                            "What's the one thing that moves tickets today?",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-black/70">
                                <span className="font-bold text-[#0047BB]">{i + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ==================== AFTER FEB 26 ==================== */}
                <section className="mb-16 bg-black/[0.02] border border-black/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="font-serif text-2xl italic text-black">After Feb 26</h2>
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-black/5 text-black/40">Parked</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                        {[
                            "Post UGC + testimonials from session",
                            "Open Session #2 registration",
                            "Corporate pipeline from attendees",
                            "Content strategy (with real session footage)",
                            "SWC vs Research Lab content split",
                            "Digital products / toolkit monetization",
                            "Tatrabanka AI case study video",
                            "Quarterly KPIs + growth plan",
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

                <footer className="border-t border-black/10 pt-8 text-center">
                    <p className="text-sm text-black/30">Single source of truth. Updated Feb 16. Next update: after status answers come in.</p>
                </footer>

            </article>
        </div>
    )
}

/* ==================== COMPONENTS ==================== */

function MetricCard({ value, label, color = "blue", note }: { value: string, label: string, color?: string, note?: string }) {
    const colors: Record<string, string> = {
        red: "text-red-600",
        amber: "text-amber-600",
        blue: "text-[#0047BB]",
        green: "text-green-600",
    }
    return (
        <div className="border border-black/10 p-4 text-center">
            <p className={`text-3xl font-serif ${colors[color] || colors.blue}`}>{value}</p>
            <p className="text-xs text-black/40 mt-1 uppercase tracking-wider">{label}</p>
            {note && <p className="text-[10px] text-black/30 mt-1">{note}</p>}
        </div>
    )
}

function PhaseBlock({ phase, title, dates, color, items }: { 
    phase: string, title: string, dates: string, color: string, items: string[] 
}) {
    const borderColors: Record<string, string> = {
        red: "border-red-500",
        blue: "border-[#0047BB]",
        black: "border-black",
        green: "border-green-500",
    }
    const labelColors: Record<string, string> = {
        red: "text-red-600",
        blue: "text-[#0047BB]",
        black: "text-black",
        green: "text-green-600",
    }
    return (
        <div className={`border-l-2 ${borderColors[color] || borderColors.blue} pl-6 py-2`}>
            <div className="flex items-baseline gap-3 mb-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${labelColors[color]}`}>{phase}</span>
            </div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-xs text-black/40 uppercase tracking-wider mb-4">{dates}</p>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black/80">
                        <div className="w-4 h-4 border border-black/20 rounded-sm mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function TestStep({ num, title, checks }: { num: string, title: string, checks: string[] }) {
    return (
        <div>
            <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-bold text-[#0047BB]">{num}.</span>
                <h3 className="font-bold">{title}</h3>
            </div>
            <ul className="space-y-2 ml-6">
                {checks.map((check, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-black/70">
                        <div className="w-3.5 h-3.5 border border-black/20 rounded-sm mt-0.5 shrink-0" />
                        <span>{check}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ContentDraft({ num, format, platform, when, body }: { 
    num: string, format: string, platform: string, when: string, body: string 
}) {
    return (
        <div className="border border-black/10 overflow-hidden">
            <div className="bg-black/[0.02] p-4 flex items-center justify-between border-b border-black/10">
                <div className="flex items-baseline gap-3">
                    <span className="text-lg font-bold text-[#0047BB]">#{num}</span>
                    <div>
                        <p className="font-bold text-sm">{format}</p>
                        <p className="text-[10px] text-black/40 uppercase tracking-wider">{platform}</p>
                    </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] bg-[#0047BB]/10 px-2 py-1">{when}</span>
            </div>
            <div className="p-4">
                <pre className="text-sm text-black/70 whitespace-pre-wrap font-sans leading-relaxed">{body}</pre>
            </div>
        </div>
    )
}

function EmailRow({ num, name, target, status, note }: { 
    num: string, name: string, target: string, status: "sent" | "overdue" | "upcoming", note: string 
}) {
    const statusColors = {
        sent: "text-green-600 bg-green-50",
        overdue: "text-red-600 bg-red-50",
        upcoming: "text-[#0047BB] bg-[#0047BB]/10",
    }
    const statusLabels = {
        sent: "Sent",
        overdue: "Overdue?",
        upcoming: "Upcoming",
    }
    return (
        <div className="border border-black/10 p-4">
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[#0047BB]">#{num}</span>
                    <span className="font-bold text-sm">{name}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-black/40">Target: {target}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${statusColors[status]}`}>{statusLabels[status]}</span>
                </div>
            </div>
            <p className="text-sm text-black/50">{note}</p>
        </div>
    )
}
