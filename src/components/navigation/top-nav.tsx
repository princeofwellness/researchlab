"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

export function TopNav({ 
    customAction, 
    variant = "light" 
}: { 
    customAction?: React.ReactNode,
    variant?: "light" | "dark"
}) {
    const pathname = usePathname()

    const navItems = [
        { name: "Public", href: "/public" },
        { name: "Corporate", href: "/corporate" },
        { name: "Curriculum", href: "/curriculum" },
        { name: "Game Plan", href: "/gameplan" },
        { name: "Projections", href: "/projections" },
    ]

    const isDark = variant === "dark"

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 h-16 z-[100] border-b px-6 md:px-20 flex items-center justify-between transition-all duration-300",
            isDark 
                ? "bg-black/80 backdrop-blur-md border-white/10 text-white" 
                : "bg-[#f5f5f3]/80 backdrop-blur-md border-black/10 text-black"
        )}>
            <div className="flex items-center gap-8">
                <Link href="/" className="font-syne font-bold tracking-tighter text-xl">
                    RESEARCH<span className={isDark ? "text-blue-400" : "text-[#0047BB]"}>LAB</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-[#0047BB]",
                                pathname === item.href 
                                    ? (isDark ? "text-blue-400" : "text-[#0047BB]") 
                                    : (isDark ? "text-white/40" : "text-black/40")
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4">
                {customAction}
                <a
                    href="mailto:hello@sorrywecan.com"
                    className={cn(
                        "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors",
                        isDark 
                            ? "bg-white text-black hover:bg-blue-400 hover:text-white" 
                            : "bg-black text-white hover:bg-[#0047BB]"
                    )}
                >
                    Contact
                </a>
            </div>
        </nav>
    )
}
