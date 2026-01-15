"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

export function TopNav({ customAction }: { customAction?: React.ReactNode }) {
    const pathname = usePathname()

    const navItems = [
        { name: "Research", href: "/" },
        { name: "Market Intelligence", href: "/ai-market-intelligence" },
        { name: "Founders Pay", href: "/founders-pay" },
        { name: "Journey", href: "/journey" },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-[#f5f5f3]/80 backdrop-blur-md z-[100] border-b border-black/10 px-6 md:px-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/" className="font-syne font-bold tracking-tighter text-xl">
                    RESEARCH<span className="text-[#0047BB]">LAB</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-[#0047BB]",
                                pathname === item.href ? "text-[#0047BB]" : "text-black/40"
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
                    className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#0047BB] transition-colors"
                >
                    Contact
                </a>
            </div>
        </nav>
    )
}
