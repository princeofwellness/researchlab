"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const docs = [
    { label: "The Bible", short: "Bible", href: "/lab/context" },
    { label: "Q2 Overview", short: "Q2", href: "/lab/q2-overview" },
    { label: "Corporate", short: "B2B", href: "/lab/corporate" },
    { label: "Platform", short: "Platform", href: "/lab/q2-platform" },
    { label: "Content", short: "Content", href: "/lab/content" },
    { label: "Platform Strategy", short: "Strategy", href: "/lab/platform-strategy" },
    { label: "Economics", short: "€", href: "/lab/economics" },
]

export function LabStrategyNav() {
    const pathname = usePathname()

    return (
        <div className="fixed top-16 left-0 right-0 z-[90] h-10 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/[0.06] flex items-center px-4 md:px-8">
            <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/20 shrink-0 mr-4 hidden md:block">
                Q2 — Strategy
            </span>
            <div className="w-px h-4 bg-white/10 mr-4 hidden md:block" />
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-none flex-1">
                {docs.map((doc) => {
                    const active = pathname === doc.href
                    return (
                        <Link
                            key={doc.href}
                            href={doc.href}
                            className={cn(
                                "shrink-0 px-3 py-1 text-[9px] font-code-brand font-bold uppercase tracking-[0.2em] transition-all duration-150 whitespace-nowrap",
                                active
                                    ? "text-[#0047BB] border-b border-[#0047BB]"
                                    : "text-white/30 hover:text-white/70"
                            )}
                        >
                            <span className="hidden md:inline">{doc.label}</span>
                            <span className="md:hidden">{doc.short}</span>
                        </Link>
                    )
                })}
            </div>
            <Link
                href="/lab"
                className="shrink-0 text-[9px] font-code-brand font-bold uppercase tracking-[0.2em] text-white/20 hover:text-white/50 transition-colors ml-4"
            >
                ← Lab
            </Link>
        </div>
    )
}
