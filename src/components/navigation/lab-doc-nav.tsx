"use client"

import Link from "next/link"

interface DocLink {
    label: string
    href: string
}

interface LabDocNavProps {
    prev?: DocLink
    next?: DocLink
    theme?: "dark" | "light"
}

export function LabDocNav({ prev, next, theme = "dark" }: LabDocNavProps) {
    const isDark = theme === "dark"
    const bg = isDark ? "bg-[#0d0d0d]" : "bg-[#e8e1da]"
    const border = isDark ? "border-white/10" : "border-black/10"
    const labelColor = isDark ? "text-white/30" : "text-black/30"
    const textColor = isDark ? "text-white" : "text-[#0a0a0a]"
    const hoverBg = isDark ? "hover:bg-white/[0.03]" : "hover:bg-black/[0.03]"
    const dimColor = isDark ? "text-white/20" : "text-black/20"
    const dimHover = isDark ? "hover:text-white/50" : "hover:text-black/50"

    return (
        <div className={`${bg} border-t ${border} grid grid-cols-2`}>
            <div>
                {prev ? (
                    <Link
                        href={prev.href}
                        className={`flex flex-col justify-center px-8 md:px-16 py-10 border-r ${border} ${hoverBg} transition-colors group h-full`}
                    >
                        <span className={`text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] ${labelColor} mb-3`}>
                            ← Previous
                        </span>
                        <span className={`font-cabinet font-bold text-2xl md:text-3xl ${textColor} group-hover:opacity-70 transition-opacity`}>
                            {prev.label}
                        </span>
                    </Link>
                ) : (
                    <div className={`flex flex-col justify-center px-8 md:px-16 py-10 border-r ${border} h-full`}>
                        <span className={`text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] ${dimColor} mb-3`}>
                            ← Start of docs
                        </span>
                        <Link
                            href="/lab"
                            className={`font-cabinet font-bold text-2xl md:text-3xl ${dimColor} ${dimHover} transition-colors`}
                        >
                            ← Back to Lab
                        </Link>
                    </div>
                )}
            </div>
            <div>
                {next ? (
                    <Link
                        href={next.href}
                        className={`flex flex-col justify-center items-end text-right px-8 md:px-16 py-10 ${hoverBg} transition-colors group h-full`}
                    >
                        <span className={`text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] ${labelColor} mb-3`}>
                            Next →
                        </span>
                        <span className={`font-cabinet font-bold text-2xl md:text-3xl ${textColor} group-hover:opacity-70 transition-opacity`}>
                            {next.label}
                        </span>
                    </Link>
                ) : (
                    <div className={`flex flex-col justify-center items-end text-right px-8 md:px-16 py-10 h-full`}>
                        <span className={`text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] ${dimColor} mb-3`}>
                            End of docs →
                        </span>
                        <Link
                            href="/lab"
                            className={`font-cabinet font-bold text-2xl md:text-3xl ${dimColor} ${dimHover} transition-colors`}
                        >
                            Back to Lab →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
