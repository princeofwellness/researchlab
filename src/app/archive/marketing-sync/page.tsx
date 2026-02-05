"use client"

import { TopNav } from "@/components/navigation/top-nav"

export default function MarketingSyncPage() {
    return (
        <div className="min-h-screen bg-white text-[#0a0a0a] font-mono">
            <TopNav />

            <article className="max-w-2xl mx-auto pt-32 pb-24 px-6">

                <header className="mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-4">Marketing Sync</p>
                    <h1 className="font-serif text-4xl md:text-5xl italic leading-tight">The Only Things That Matter</h1>
                    <p className="text-lg text-black/50 mt-4">We have nothing. No audience. No content. No list. 20 days. 40 seats. €0 budget.</p>
                    <p className="text-sm text-black/40 mt-2">Stop planning. Start doing.</p>
                </header>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-8">5 Things. Everything Else Is Noise.</h2>

                    <div className="space-y-10">

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">01</p>
                            <h3 className="text-xl font-bold mb-3">One Sentence</h3>
                            <p className="text-black/60 leading-relaxed mb-4">If you can't say it in one line, you don't understand it.</p>
                            <blockquote className="border-l-2 border-black/10 pl-4 text-black/80 italic">
                                "THE SHIFT is 3 hours with 3 founders who build with AI daily — you leave with clarity on how to actually work with it."
                            </blockquote>
                            <p className="text-sm text-black/40 mt-3">Lock this. No more messaging debates. Put it everywhere.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">02</p>
                            <h3 className="text-xl font-bold mb-3">One Proof Asset</h3>
                            <p className="text-black/60 leading-relaxed mb-4">Not a content calendar. Not 40 hooks. One thing that makes people go "I need to be there."</p>
                            <p className="text-black/60 leading-relaxed mb-3"><span className="font-bold text-black">What:</span> 2-4 minute video. Screen recording + founder voice. Show one workflow that feels like magic but is repeatable. Before → after. Real work, not slides.</p>
                            <p className="text-black/60 leading-relaxed mb-3"><span className="font-bold text-black">Why:</span> Proof collapses skepticism faster than any amount of "content." People don't buy promises. They buy demonstrations.</p>
                            <p className="text-sm text-black/40">Record within 48 hours. This is the anchor.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">03</p>
                            <h3 className="text-xl font-bold mb-3">Personal Outreach</h3>
                            <p className="text-black/60 leading-relaxed mb-4">Not Instagram. Not LinkedIn posts. Not email sequences. Direct messages from founders to people they know.</p>
                            
                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-1">The Math</p>
                                <p className="text-black/60">3 founders × 20 messages/day × 10 working days = 600 warm touches</p>
                                <p className="text-black/60">At 7% conversion = 42 seats</p>
                                <p className="text-[#0047BB] font-bold mt-2">That's it. That's the math.</p>
                            </div>

                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">The Message</p>
                                <p className="text-black/60 italic">"Hey [name] — we're doing a thing Feb 26. 3 hours, 40 people, €99. Me, Roland, and Ján — everything we've learned building with AI. Not a course, just how we actually work. Think it'd be up your alley. Want me to save you a seat?"</p>
                            </div>

                            <p className="text-sm text-black/40">Personal, not mass. Follow up day 2 and day 5. Track in one shared sheet.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">04</p>
                            <h3 className="text-xl font-bold mb-3">Borrow SORRYWECAN's Trust</h3>
                            <p className="text-black/60 leading-relaxed mb-4">Don't build RESEARCHLAB from zero. Launch through what already exists.</p>
                            <ul className="space-y-2 text-sm text-black/60">
                                <li>→ Post from SORRYWECAN's channels (existing audience)</li>
                                <li>→ Post from founders' personal LinkedIn/IG</li>
                                <li>→ Ask 5-10 respected people for 1-2 sentence endorsements</li>
                                <li>→ Put quotes on landing page</li>
                            </ul>
                            <p className="text-sm text-black/40 mt-3">You don't need a new audience. You need your existing network to take you seriously on this new thing.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">05</p>
                            <h3 className="text-xl font-bold mb-3">One Public Moment</h3>
                            <p className="text-black/60 leading-relaxed mb-4">7-10 days before Feb 26: run a free 30-45 min live session.</p>
                            <ul className="space-y-2 text-sm text-black/60">
                                <li>→ "THE SHIFT Preview" — the demo + Q&A</li>
                                <li>→ Record it</li>
                                <li>→ Attendees get 24-48h seat hold</li>
                                <li>→ Becomes your conversion event + future content</li>
                            </ul>
                            <p className="text-sm text-black/40 mt-3">Concentrates attention into one moment instead of dripping content nobody sees.</p>
                        </div>

                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">What To Cut</h2>
                    <div className="space-y-2">
                        {[
                            ["900-line hook library", "You don't have an audience to hook"],
                            ["Content pillars", "You don't have content yet"],
                            ["Instagram playbook", "You don't have followers"],
                            ["Weekly posting cadence", "You don't have 12 weeks"],
                            ["Email sequences", "You don't have a list"],
                            ["Multi-platform strategy", "Pick 2 max: LinkedIn DMs + personal IG stories"],
                            ["Carousel templates", "Nobody's seeing your carousels"],
                        ].map(([what, why], i) => (
                            <div key={i} className="flex items-start gap-3 py-2 border-b border-black/5 last:border-0">
                                <span className="text-black/20 font-bold shrink-0">✕</span>
                                <div>
                                    <span className="text-sm font-bold line-through text-black/40">{what}</span>
                                    <span className="text-sm text-black/40 ml-2">— {why}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-black/50 mt-6 italic">The trap: Planning feels like progress. It's not. Only conversations with real humans move tickets.</p>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">20-Day Sprint</h2>

                    <div className="space-y-8">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 0 — Now (2 days)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Lock the one-sentence positioning</p>
                                <p>☐ Record the proof video (one take is fine)</p>
                                <p>☐ Each founder: write list of 70 people to reach out to</p>
                                <p>☐ Ask 5 peers for endorsement quotes</p>
                                <p>☐ Put quotes on landing page</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 1-2 — Outreach (days 3-14)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Each founder: 20 DMs/day (morning block, 45 min)</p>
                                <p>☐ Follow up on non-responses every 2-3 days</p>
                                <p>☐ Post proof video on personal profiles + SORRYWECAN</p>
                                <p>☐ Track everything in shared sheet</p>
                                <p>☐ Announce + run the free preview session (~Feb 17-19)</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 3 — Close (days 15-20)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Run the live preview session</p>
                                <p>☐ Daily: "X seats left" on stories (only if true)</p>
                                <p>☐ Close every open conversation personally</p>
                                <p>☐ Final message: "Last 10 seats. In or out?"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">After Feb 26 — Then You Build</h2>
                    <div className="space-y-2 text-sm text-black/60">
                        <p>→ Record testimonials on-site</p>
                        <p>→ Clip content from the session</p>
                        <p>→ NOW you have proof, UGC, real stories</p>
                        <p>→ NOW a content strategy makes sense</p>
                        <p>→ Use attendees as seed for corporate leads</p>
                    </div>
                    <p className="text-sm text-black/50 mt-4 italic">The flywheel starts with one successful session. Not with content.</p>
                </section>

                <section className="mb-16 bg-black/[0.03] p-6">
                    <h2 className="font-serif text-2xl italic mb-6">4 Meeting Decisions</h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">1.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Who records the proof video?</span> Which founder, what workflow to demo.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">2.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Each founder's 70-person list</span> — when is it ready? (Answer: tomorrow)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">3.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Live preview date</span> — when? (Suggest Feb 17 or 18)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">4.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Who tracks the shared sheet?</span> One person owns the numbers.</p>
                        </div>
                    </div>
                    <p className="text-sm text-black/40 mt-6">Everything else can wait until after you sell 40 seats.</p>
                </section>

                <footer className="border-t border-black/10 pt-8 text-center">
                    <p className="font-serif text-lg italic text-black/40">"People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas."</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3">— Steve Jobs</p>
                </footer>

            </article>
        </div>
    )
}
