import Link from "next/link"
import { TopNav } from "@/components/navigation/top-nav"

const archiveEntries = [
  {
    title: "Research Lab",
    route: "/",
    type: "Landing Experience",
    summary: "Flagship Sorrywecan Research Lab narrative and hero journey.",
  },
  {
    title: "Journey",
    route: "/journey",
    type: "Product Story",
    summary: "Living operating manual for our trajectory, rituals, and proof of work.",
  },
  {
    title: "AI Education Blueprint",
    route: "/ai-education-blueprint",
    type: "Education Track",
    summary: "Curriculum + systems blueprint for Sorrywecan Education.",
  },
  {
    title: "AI Market Intelligence",
    route: "/ai-market-intelligence",
    type: "Advisory Program",
    summary: "Dark mode systems deck for executive intelligence teams.",
  },
  {
    title: "Founders Pay",
    route: "/founders-pay",
    type: "Transformation Sprint",
    summary: "Financial autonomy and compliance operating system for founders.",
  },
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a]">
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
