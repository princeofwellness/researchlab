"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import React, { useState, useEffect } from "react"
import { CAL_CONFIG } from "@/components/book-call"
import { Menu, X } from "lucide-react"

export function TopNav({ 
    customAction, 
    variant = "light",
    lang = "en"
}: { 
    customAction?: React.ReactNode,
    variant?: "light" | "dark",
    lang?: "en" | "sk"
}) {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Corporate", href: "/corporate" },
        { name: "THE MINDSHIFT", href: "/mindshift" },
        { name: "Lab", href: "/lab" },
    ]

    const isDark = variant === "dark"

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 h-16 z-[100] border-b px-6 md:px-20 flex items-center justify-between transition-all duration-300",
                isDark 
                    ? "bg-black/80 backdrop-blur-md border-white/10 text-white" 
                    : "bg-[#f5f5f3]/80 backdrop-blur-md border-black/10 text-black"
            )}>
                <div className="flex items-center gap-8">
                    <Link href="/" className="font-syne font-bold tracking-tighter text-xl z-[101]">
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
                        href={CAL_CONFIG.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "hidden md:block px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors",
                            isDark 
                                ? "bg-white text-black hover:bg-blue-400 hover:text-white" 
                                : "bg-black text-white hover:bg-[#0047BB]"
                        )}
                    >
                        {lang === 'sk' ? 'Rezervovať Hovor' : 'Book a Call'}
                    </a>

                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-[101] p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className={cn("w-6 h-6", isDark ? "text-white" : "text-black")} />
                        ) : (
                            <Menu className={cn("w-6 h-6", isDark ? "text-white" : "text-black")} />
                        )}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "fixed inset-0 z-[90] flex flex-col items-center justify-center pt-20 px-6 md:hidden",
                            isDark 
                                ? "bg-black text-white" 
                                : "bg-[#f5f5f3] text-black"
                        )}
                    >
                        <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-syne font-bold uppercase tracking-wide transition-colors hover:text-[#0047BB]",
                                        pathname === item.href 
                                            ? (isDark ? "text-blue-400" : "text-[#0047BB]") 
                                            : (isDark ? "text-white/60" : "text-black/60")
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            
                            <div className="w-12 h-[1px] bg-current opacity-20 my-4" />

                            <a
                                href={CAL_CONFIG.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "w-full text-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors",
                                    isDark 
                                        ? "bg-white text-black hover:bg-blue-400 hover:text-white" 
                                        : "bg-black text-white hover:bg-[#0047BB]"
                                )}
                            >
                                {lang === 'sk' ? 'Rezervovať Hovor' : 'Book a Call'}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
