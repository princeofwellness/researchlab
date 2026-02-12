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
            <div className={cn("flex items-center gap-3", className)}>
                <div className={cn(
                    "w-2 h-2 rounded-full",
                    isSoldOut ? "bg-red-600" : isCritical ? "bg-red-500 animate-pulse" : isLow ? "bg-orange-500 animate-pulse" : "bg-emerald-500"
                )} />
                <AnimatePresence mode="wait">
                    <motion.span
                        key={seatsLeft}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={cn(
                            "text-[11px] font-bold uppercase tracking-[0.15em] font-code-brand",
                            isSoldOut ? "text-red-600" : isCritical ? "text-red-600" : isLow ? "text-orange-600" : "text-black/60"
                        )}
                    >
                        {isSoldOut ? t.soldOut : `${seatsLeft} / ${total} ${t.seatsLeft}`}
                    </motion.span>
                </AnimatePresence>
            </div>
        )
    }

    return (
        <div className={cn("space-y-3", className)}>
            <div className="flex items-center justify-center gap-3">
                <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isSoldOut ? "bg-red-600" : isCritical ? "bg-red-500 animate-pulse" : isLow ? "bg-orange-500 animate-pulse" : "bg-emerald-500"
                )} />
                <AnimatePresence mode="wait">
                    <motion.span
                        key={seatsLeft}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] font-code-brand"
                    >
                        {isSoldOut ? t.soldOut : `${seatsLeft} / ${total} ${t.seatsLeft}`}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="h-[2px] bg-white/10 overflow-hidden rounded-full">
                <motion.div
                    className={cn(
                        "h-full rounded-full",
                        isSoldOut ? "bg-red-500" : isCritical ? "bg-red-400" : isLow ? "bg-orange-400" : "bg-[#0047BB]"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${fillPercent}%` }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </div>
        </div>
    )
}
