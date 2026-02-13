import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"

const archiveEntries = [
  {
    title: "Marketing Sync — The Only Things That Matter",
    route: "/archive/marketing-sync",
    type: "Strategy",
    summary: "Stripped-down marketing plan. 5 things that move tickets. Everything else is noise.",
  },
  {
    title: "Marketing Execution Algorithm",
    route: "/archive/marketing",
    type: "Execution",
    summary: "900-line playbook: hooks, email sequences, DM templates, IG playbook, tracking dashboard.",
  },
  {
    title: "AI Education Blueprint",
    route: "/archive/ai-education-blueprint",
    type: "Research",
    summary: "Curriculum + systems blueprint for Sorrywecan Education (version 0.2).",
  },
  {
    title: "AI Market Intelligence",
    route: "/archive/ai-market-intelligence",
    type: "Research",
    summary: "Dark mode systems deck for executive intelligence teams.",
  },
  {
    title: "Customer Journey",
    route: "/archive/journey",
    type: "Strategy",
    summary: "Customer journey mapping from first touch to retention.",
  },
  {
    title: "Protocol",
    route: "/archive/protocol",
    type: "Operations",
    summary: "Operational protocols and phase planning.",
  },
  {
    title: "Enhancements / Feedback",
    route: "/archive/enhancements",
    type: "Feedback",
    summary: "Collected feedback, social proof ideas, pricing experiments.",
  },
  {
    title: "Projections",
    route: "/archive/projections",
    type: "Finance",
    summary: "Business projections and financial models.",
  },
  {
    title: "Founders Pay",
    route: "/archive/founders-pay",
    type: "Finance",
    summary: "Founder compensation models and financial autonomy framework.",
  },
  {
    title: "Pricing Tiers",
    route: "/archive/tiers",
    type: "Strategy",
    summary: "Pricing tier exploration and packaging options.",
  },
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a]">
      <TopNav />

      <main className="pt-32 pb-24 px-6 md:px-20 space-y-16">
        <section className="max-w-3xl space-y-4">
          <p className="text-[10px] uppercase tracking-[0.5em] text-black/40">Archive</p>
          <h1 className="text-4xl md:text-6xl font-serif-instrument leading-tight">
            All tracks, prototypes, and landing systems in one grid.
          </h1>
          <p className="text-base md:text-lg text-black/70 font-inter">
            Minimalist lookup table for every Sorrywecan touchpoint. Use it like an index—jump into the product or deck you need in two clicks.
          </p>
        </section>

        <section className="border border-black/10 rounded-2xl overflow-hidden bg-white">
          <div className="grid grid-cols-12 px-6 py-4 text-[12px] font-inter uppercase tracking-[0.3em] text-black/40 border-b border-black/5">
            <div className="col-span-4">Title</div>
            <div className="col-span-3">Type</div>
            <div className="col-span-4">Summary</div>
            <div className="col-span-1 text-right">Open</div>
          </div>

          {archiveEntries.map((entry) => (
            <div
              key={entry.route}
              className="grid grid-cols-12 gap-4 px-6 py-6 border-b border-black/5 last:border-0 items-center hover:bg-black/3"
            >
              <div className="col-span-4">
                <p className="text-xl font-serif-instrument">{entry.title}</p>
              </div>
              <div className="col-span-3 text-sm uppercase tracking-[0.3em] text-black/60">
                {entry.type}
              </div>
              <div className="col-span-4 text-sm text-black/70 font-inter">
                {entry.summary}
              </div>
              <div className="col-span-1 flex justify-end">
                <Link
                  href={entry.route}
                  className="text-[11px] uppercase tracking-[0.4em] font-inter border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                >
                  Go
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
