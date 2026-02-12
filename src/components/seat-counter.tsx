"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface SeatCounterProps {
    slug?: string
    totalFallback?: number
    className?: string
    variant?: "default" | "compact" | "hero"
    lang?: "en" | "sk"
}

interface SeatData {
    seatsLeft: number
    totalSeats: number
    soldSeats: number
    status: string
}

export function SeatCounter({
    slug = "the-shift-feb-26",
    totalFallback = 40,
    className,
    variant = "default",
    lang = "en",
}: SeatCounterProps) {
    const [data, setData] = useState<SeatData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchSeats() {
            try {
                const res = await fetch(`/api/seats?slug=${slug}`)
                if (res.ok) {
                    const json = await res.json()
                    setData(json)
                }
            } catch {
            } finally {
                setLoading(false)
            }
        }

        fetchSeats()
        const interval = setInterval(fetchSeats, 30_000)
        return () => clearInterval(interval)
    }, [slug])

    const seatsLeft = data?.seatsLeft ?? totalFallback
    const total = data?.totalSeats ?? totalFallback
    const fillPercent = ((total - seatsLeft) / total) * 100
    const isLow = seatsLeft <= 10
    const isCritical = seatsLeft <= 5
    const isSoldOut = seatsLeft <= 0

    const labels = {
        en: {
            seatsLeft: "seats left",
            soldOut: "Sold Out",
            lastSeats: "Last seats",
        },
        sk: {
            seatsLeft: "voľných miest",
            soldOut: "Vypredané",
            lastSeats: "Posledné miesta",
        },
    }

    const t = labels[lang]

    if (variant === "compact") {
        return (
            <span className={cn("text-[10px] font-bold uppercase tracking-widest font-code-brand", className)}>
                {loading ? (
                    <span className="text-black/30">{totalFallback} {t.seatsLeft}</span>
                ) : isSoldOut ? (
                    <span className="text-red-600">{t.soldOut}</span>
                ) : (
                    <span className={isCritical ? "text-red-600" : isLow ? "text-orange-600" : "text-black/40"}>
                        {seatsLeft} {t.seatsLeft}
                    </span>
                )}
            </span>
        )
    }

    if (variant === "hero") {
        return (
            <div className={cn("flex items-center gap-4", className)}>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={seatsLeft}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={cn(
                            "text-[10px] font-bold uppercase tracking-widest font-code-brand",
                            isSoldOut ? "text-red-600" : isCritical ? "text-red-600" : isLow ? "text-orange-600" : "text-[#0047BB]"
                        )}
                    >
                        {isSoldOut ? t.soldOut : `${seatsLeft} ${t.seatsLeft}`}
                    </motion.span>
                </AnimatePresence>
                {isLow && !isSoldOut && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-red-500/60 font-code-brand uppercase tracking-widest"
                    >
                        {t.lastSeats}
                    </motion.span>
                )}
            </div>
        )
    }

    return (
        <div className={cn("space-y-2", className)}>
            <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={seatsLeft}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={cn(
                            "text-sm font-bold",
                            isSoldOut ? "text-red-600" : isCritical ? "text-red-600" : isLow ? "text-orange-600" : "text-black/70"
                        )}
                    >
                        {isSoldOut ? t.soldOut : `${seatsLeft} ${t.seatsLeft}`}
                    </motion.span>
                </AnimatePresence>
                <span className="text-[10px] text-black/30 font-code-brand">{total} total</span>
            </div>
            <div className="h-1 bg-black/5 overflow-hidden">
                <motion.div
                    className={cn(
                        "h-full",
                        isSoldOut ? "bg-red-600" : isCritical ? "bg-red-500" : isLow ? "bg-orange-500" : "bg-[#0047BB]"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${fillPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    )
}
