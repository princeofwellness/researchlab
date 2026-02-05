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
                    <p className="text-lg text-black/50 mt-4">20 days. 40 seats. No ad budget. Go.</p>
                    <p className="text-sm text-black/40 mt-2">Stop planning. Start doing.</p>
                </header>

                <section className="mb-16 bg-black/[0.03] p-6">
                    <h2 className="font-serif text-2xl italic mb-6">What We Actually Have</h2>
                    <p className="text-sm text-black/50 mb-4">We're not at zero. We have real assets. Use them.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-black/10 p-4">
                            <p className="text-3xl font-serif text-[#0047BB]">600</p>
                            <p className="text-sm text-black/50 mt-1">IG followers</p>
                            <p className="text-xs text-black/30">Mostly SK creative scene</p>
                        </div>
                        <div className="border border-black/10 p-4">
                            <p className="text-3xl font-serif text-[#0047BB]">350</p>
                            <p className="text-sm text-black/50 mt-1">Email list</p>
                            <p className="text-xs text-black/30">Warm — toolkit subscribers</p>
                        </div>
                        <div className="border border-black/10 p-4">
                            <p className="text-3xl font-serif text-[#0047BB]">3</p>
                            <p className="text-sm text-black/50 mt-1">Founders' networks</p>
                            <p className="text-xs text-black/30">Friends, partners, warm leads</p>
                        </div>
                        <div className="border border-black/10 p-4">
                            <p className="text-3xl font-serif text-[#0047BB]">1</p>
                            <p className="text-sm text-black/50 mt-1">SORRYWECAN brand</p>
                            <p className="text-xs text-black/30">Existing reputation + credibility</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16 bg-black/[0.03] p-6">
                    <h2 className="font-serif text-2xl italic mb-6">The Real Math</h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center border-b border-black/10 pb-3">
                            <div>
                                <p className="font-bold">Email list</p>
                                <p className="text-black/40">350 people × 10% conversion</p>
                            </div>
                            <p className="text-xl font-serif text-[#0047BB]">~35 seats</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-black/10 pb-3">
                            <div>
                                <p className="font-bold">IG stories + posts</p>
                                <p className="text-black/40">600 followers → direct interest</p>
                            </div>
                            <p className="text-xl font-serif text-[#0047BB]">~5-10</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-black/10 pb-3">
                            <div>
                                <p className="font-bold">Personal DMs</p>
                                <p className="text-black/40">3 founders × warm leads</p>
                            </div>
                            <p className="text-xl font-serif text-[#0047BB]">~10-15</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-black/10 pb-3">
                            <div>
                                <p className="font-bold">SORRYWECAN clients + partners</p>
                                <p className="text-black/40">B2B relationships → group tickets</p>
                            </div>
                            <p className="text-xl font-serif text-[#0047BB]">~10-20</p>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <p className="font-bold">Realistic total</p>
                            <p className="text-xl font-bold text-[#0047BB]">50-80 seats reachable</p>
                        </div>
                    </div>
                    <p className="text-sm text-black/40 mt-4 italic">You can overfill this. The question isn't "can we sell 40?" — it's "should we add a second session?"</p>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">Language Strategy</h2>
                    <p className="text-black/60 leading-relaxed mb-4">IG has been English. We're selling in Slovakia. This needs a decision.</p>
                    
                    <div className="bg-[#0047BB]/5 border border-[#0047BB]/20 p-6 mb-6">
                        <p className="font-bold text-[#0047BB] mb-3">Recommendation: Lead Slovak. English second.</p>
                        <p className="text-sm text-black/60 leading-relaxed">You're selling €99 tickets in Bratislava to Slovaks. The 600 followers are likely mostly Slovak. The email list is Slovak. Your warm leads speak Slovak. English makes you look international. Slovak makes you feel close. Close sells tickets.</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">IG Posts</span>
                            <span className="text-black/60">Slovak caption. English below (smaller/lighter).</span>
                        </div>
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">IG Stories</span>
                            <span className="text-black/60">Slovak. This is where conversion happens. Personal = native language.</span>
                        </div>
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">Reels</span>
                            <span className="text-black/60">Slovak spoken + English subtitles. Best of both worlds.</span>
                        </div>
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">DMs</span>
                            <span className="text-black/60">Whatever language you speak with that person.</span>
                        </div>
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">Email</span>
                            <span className="text-black/60">Slovak. Your list is Slovak.</span>
                        </div>
                        <div className="flex gap-4 text-sm border-b border-black/5 pb-3">
                            <span className="font-bold w-28 shrink-0">LinkedIn</span>
                            <span className="text-black/60">English. LinkedIn audience is broader. SK founders post in EN anyway.</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <span className="font-bold w-28 shrink-0">Website</span>
                            <span className="text-black/60">Already bilingual with toggle. ✓</span>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-8">5 Things. Everything Else Is Noise.</h2>

                    <div className="space-y-10">

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">01</p>
                            <h3 className="text-xl font-bold mb-3">One Sentence</h3>
                            <p className="text-black/60 leading-relaxed mb-4">If you can't say it in one line, you don't understand it.</p>
                            <blockquote className="border-l-2 border-black/10 pl-4 text-black/80 italic mb-3">
                                "THE SHIFT is 3 hours with 3 founders who build with AI daily — you leave with clarity on how to actually work with it."
                            </blockquote>
                            <blockquote className="border-l-2 border-black/10 pl-4 text-black/60 italic text-sm">
                                "THE SHIFT — 3 hodiny s 3 zakladateľmi, ktorí s AI pracujú denne. Odídete s jasnosťou, ako s tým reálne pracovať."
                            </blockquote>
                            <p className="text-sm text-black/40 mt-3">Lock both versions. No more messaging debates.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">02</p>
                            <h3 className="text-xl font-bold mb-3">One Proof Asset</h3>
                            <p className="text-black/60 leading-relaxed mb-4">Not a content calendar. Not 40 hooks. One thing that makes people go "I need to be there."</p>
                            <p className="text-black/60 leading-relaxed mb-3"><span className="font-bold text-black">What:</span> 2-4 minute video. Screen recording + founder voice. Show one workflow that feels like magic but is repeatable. Before → after. Real work, not slides.</p>
                            <p className="text-black/60 leading-relaxed mb-3"><span className="font-bold text-black">Language:</span> Slovak spoken. English subtitles. Post natively on IG + LinkedIn.</p>
                            <p className="text-black/60 leading-relaxed mb-3"><span className="font-bold text-black">Why:</span> Proof collapses skepticism faster than any amount of "content." People don't buy promises. They buy demonstrations.</p>
                            <p className="text-sm text-black/40">Record within 48 hours. This is the anchor everything else links to.</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">03</p>
                            <h3 className="text-xl font-bold mb-3">Activate What You Have</h3>
                            <p className="text-black/60 leading-relaxed mb-4">You don't need to build an audience. You need to activate the one you already have.</p>
                            
                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">Channel 1: Email List (350 people)</p>
                                <p className="text-black/60 mb-1">This is your best asset. These people already opted in.</p>
                                <p className="text-black/60">Send one clear email in Slovak. Subject: "26. februára. 40 miest." — short, personal, link to buy.</p>
                                <p className="text-black/60 mt-1">Follow up 3 days later with social proof or a FAQ.</p>
                                <p className="text-black/60 mt-1">Final email 5 days before: "Posledných X miest."</p>
                                <p className="text-[#0047BB] font-bold mt-2">3 emails total. Not 7. Three.</p>
                            </div>

                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">Channel 2: Personal DMs (founders' networks)</p>
                                <p className="text-black/60 mb-1">Each founder: list of people they'd actually invite to dinner.</p>
                                <p className="text-black/60">Not 70 strangers. 20-30 real relationships each.</p>
                                <p className="text-black/60 mt-1">Personal message. In your language. "Robíme vec, myslím že by ťa to bavilo."</p>
                                <p className="text-[#0047BB] font-bold mt-2">3 founders × 25 real DMs = 75 warm touches. At 20% = 15 seats.</p>
                            </div>

                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">Channel 3: IG (600 followers)</p>
                                <p className="text-black/60 mb-1">Post the proof video. Stories daily for 2 weeks.</p>
                                <p className="text-black/60">Use stories for: countdown, behind-scenes, polls, seat updates.</p>
                                <p className="text-black/60 mt-1">Slovak captions. Keep it raw, not polished.</p>
                                <p className="text-[#0047BB] font-bold mt-2">Stories over Feed. Personal over Produced.</p>
                            </div>

                            <div className="bg-black/[0.03] p-4 mb-4 text-sm">
                                <p className="font-bold mb-2">Channel 4: SORRYWECAN Reputation</p>
                                <p className="text-black/60 mb-1">Cross-post from SORRYWECAN accounts.</p>
                                <p className="text-black/60">Ask 5 respected people for a 1-line endorsement of the founders.</p>
                                <p className="text-black/60 mt-1">Put on landing page. Screenshot for stories.</p>
                                <p className="text-[#0047BB] font-bold mt-2">Borrowed trust is the fastest shortcut from "what is this?" to "I'm in."</p>
                            </div>

                            <div className="bg-[#0047BB]/5 border border-[#0047BB]/20 p-4 text-sm">
                                <p className="font-bold text-[#0047BB] mb-2">Channel 5: SORRYWECAN Clients + Partners (the multiplier)</p>
                                <p className="text-black/60 mb-3">This is the most underused asset. SORRYWECAN has real B2B relationships — clients, partners, vendors. Each one is two things at once:</p>
                                
                                <div className="ml-4 mb-3 space-y-3">
                                    <div>
                                        <p className="font-bold text-black">A) A corporate workshop lead</p>
                                        <p className="text-black/60">"Máme niečo nové — workshop pre tímy. Myslíš, že by to dávalo zmysel pre vás?" Send the corporate one-pager. Plant the seed. Even if not now, it's on their radar.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-black">B) A ticket multiplier for THE SHIFT</p>
                                        <p className="text-black/60">"Povedz to ľuďom vo firme — €99, 3 hodiny, 26. februára." Partners send their employees. One conversation = 3-5 tickets. Group dynamic: "Ideme tam celý tím."</p>
                                    </div>
                                </div>

                                <div className="bg-white/80 p-3 mb-3">
                                    <p className="font-bold text-black mb-1">The ask (simple, two-part):</p>
                                    <p className="text-black/60 italic">"Hey, robíme dve veci — verejnú session za €99 (26. feb, 40 miest) a firemné workshopy. Ak poznáš niekoho koho by to bavilo, pošli im link. A ak by to dávalo zmysel pre tvoj tím, radi sa stretneme na 20 min call."</p>
                                </div>

                                <p className="text-[#0047BB] font-bold">One message, two pipelines. Public tickets now, corporate leads for later.</p>
                                <p className="text-black/40 mt-2">List every SORRYWECAN client/partner from last 2 years. Each founder takes a third. Personal message, not mass email.</p>
                            </div>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">04</p>
                            <h3 className="text-xl font-bold mb-3">One Public Moment</h3>
                            <p className="text-black/60 leading-relaxed mb-4">7-10 days before Feb 26: run a free 30-45 min live session.</p>
                            <ul className="space-y-2 text-sm text-black/60">
                                <li>→ "THE SHIFT Preview" — the demo + Q&A</li>
                                <li>→ IG Live or Zoom — wherever your audience is</li>
                                <li>→ Slovak. Intimate. Show what the session will feel like.</li>
                                <li>→ Record it — becomes content for final push</li>
                                <li>→ Attendees get 24-48h priority booking</li>
                            </ul>
                            <p className="text-sm text-black/40 mt-3">One concentrated moment beats 3 weeks of "content."</p>
                        </div>

                        <div className="border-l-2 border-[#0047BB] pl-6">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">05</p>
                            <h3 className="text-xl font-bold mb-3">Close Every Loop</h3>
                            <p className="text-black/60 leading-relaxed mb-4">Most sales happen on the 2nd-4th touch. Follow-up is not spam — it's professionalism.</p>
                            <div className="bg-black/[0.03] p-4 text-sm">
                                <p className="font-bold mb-2">Follow-up System</p>
                                <div className="space-y-1 text-black/60">
                                    <p>Day 1: Initial message / email</p>
                                    <p>Day 3: "Videl/a si? Ak máš otázky, daj vedieť."</p>
                                    <p>Day 7: Share social proof ("Už X miest preč")</p>
                                    <p>Day 14: Final: "Posledných 10 miest. Si in alebo out?"</p>
                                </div>
                                <p className="text-[#0047BB] font-bold mt-3">One shared sheet. One person owns the numbers. No leads fall through.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">What To Cut</h2>
                    <div className="space-y-2">
                        {[
                            ["900-line hook library", "You have 350 warm emails. Write one good one."],
                            ["Content pillars", "You have 20 days, not 20 weeks"],
                            ["Multi-platform strategy", "IG stories + email + DMs. That's it."],
                            ["Elaborate email sequences", "3 emails. Not 7."],
                            ["Building a new audience", "Activate the one you have"],
                            ["Perfect brand identity", "Website + one-pager exist. Ship."],
                            ["Carousel templates", "Stories and DMs sell. Carousels don't."],
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
                                <p>☐ Lock the one-sentence positioning (EN + SK)</p>
                                <p>☐ Record the proof video (one take, Slovak, English subs)</p>
                                <p>☐ Each founder: list 25-30 people to personally invite</p>
                                <p>☐ Ask 5 respected peers for endorsement quotes</p>
                                <p>☐ Put quotes on landing page</p>
                                <p>☐ Prepare the one email (Slovak, short, personal)</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 1 — Activate (days 3-9)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Send Email #1 to 350 list</p>
                                <p>☐ Post proof video on IG + founders' LinkedIn</p>
                                <p>☐ Each founder: send personal DMs (all 25-30)</p>
                                <p>☐ Daily IG stories (Slovak, raw, behind-scenes)</p>
                                <p>☐ Cross-post from SORRYWECAN accounts</p>
                                <p>☐ Track replies in shared sheet</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 2 — Push (days 10-16)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Send Email #2 (social proof + FAQ)</p>
                                <p>☐ Run live preview session (~Feb 17-18)</p>
                                <p>☐ Follow up on all DMs that didn't respond</p>
                                <p>☐ "X miest preč" stories daily</p>
                                <p>☐ Clip preview session → post as content</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-[#0047BB] mb-3">Week 3 — Close (days 17-20)</p>
                            <div className="space-y-2 text-sm text-black/60">
                                <p>☐ Send Email #3: "Posledných X miest"</p>
                                <p>☐ Close every open conversation personally</p>
                                <p>☐ Final DM to "maybe" people: "Si in alebo out?"</p>
                                <p>☐ Daily countdown stories</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-serif text-2xl italic mb-6">After Feb 26 — Then You Build</h2>
                    <div className="space-y-2 text-sm text-black/60">
                        <p>→ Record testimonials on-site (Slovak, 30-60s each)</p>
                        <p>→ Clip content from the session</p>
                        <p>→ NOW you have proof, UGC, real stories to post</p>
                        <p>→ NOW a content strategy makes sense</p>
                        <p>→ NOW you can build the long-term cadence</p>
                        <p>→ Use attendees as seed for corporate leads</p>
                        <p>→ Open Session #2 with UGC as the anchor</p>
                    </div>
                    <p className="text-sm text-black/50 mt-4 italic">The flywheel starts with one successful session. Not with content.</p>
                </section>

                <section className="mb-16 bg-black/[0.03] p-6">
                    <h2 className="font-serif text-2xl italic mb-6">Meeting Decisions</h2>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">1.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Language confirmation</span> — Slovak-first on IG/email/stories. English on LinkedIn. Yes?</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">2.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Proof video</span> — who records, what workflow, when? (48h deadline)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">3.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Each founder's DM list</span> — 25-30 real names each. Ready by tomorrow.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">4.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Email #1 to 350 list</span> — who writes it, when does it send?</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">5.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Live preview date</span> — Feb 17 or 18?</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">6.</span>
                            <p className="text-black/70"><span className="font-bold text-black">SORRYWECAN client/partner list</span> — who are they? Split among founders. Personal outreach this week.</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-[#0047BB] shrink-0">7.</span>
                            <p className="text-black/70"><span className="font-bold text-black">Shared tracking</span> — who owns the sheet? (One person, updated daily)</p>
                        </div>
                    </div>
                </section>

                <footer className="border-t border-black/10 pt-8 text-center">
                    <p className="font-serif text-lg italic text-black/40">"People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas."</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3">— Steve Jobs</p>
                </footer>

            </article>
        </div>
    )
}
