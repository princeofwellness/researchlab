"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const CAL_CONFIG = {
    username: "researchlabsorrywecan",
    eventSlug: "30min",
    get bookingUrl() {
        return `https://cal.com/${this.username}/${this.eventSlug}`
    }
}

const CAL_SHIFT_CONFIG = {
    username: "researchlabsorrywecan",
    eventSlug: "theshift",
    get bookingUrl() {
        return `https://cal.com/${this.username}/${this.eventSlug}`
    }
}

interface BookCallButtonProps {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary" | "nav"
}

export function BookCallButton({ children, className, variant = "primary" }: BookCallButtonProps) {
    const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer"
    
    const variants = {
        primary: "bg-[#0047BB] text-white px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-black",
        secondary: "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
        nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]"
    }

    return (
        <a
            href={CAL_CONFIG.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variants[variant], className)}
        >
            {children}
        </a>
    )
}

export function BookCallModal({ 
    children, 
    className,
    variant = "primary" 
}: BookCallButtonProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (isOpen && !isLoaded) {
            const script = document.createElement('script')
            script.src = 'https://app.cal.com/embed/embed.js'
            script.async = true
            script.onload = () => setIsLoaded(true)
            document.body.appendChild(script)
        }
    }, [isOpen, isLoaded])

    const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer"
    
    const variants = {
        primary: "bg-[#0047BB] text-white px-8 py-4 text-[11px] tracking-[0.2em] hover:bg-black",
        secondary: "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
        nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]"
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(baseStyles, variants[variant], className)}
            >
                {children}
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className="relative w-full max-w-2xl h-[80vh] bg-white rounded-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                        >
                            <span className="text-xl leading-none">&times;</span>
                        </button>
                        <iframe
                            src={`${CAL_CONFIG.bookingUrl}?embed=true&theme=light`}
                            className="w-full h-full border-0"
                            title="Book a Call"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export function BookCallEmbed({ className }: { className?: string }) {
    return (
        <div className={cn("w-full min-h-[600px]", className)}>
            <iframe
                src={`${CAL_CONFIG.bookingUrl}?embed=true&theme=light`}
                className="w-full h-full min-h-[600px] border-0"
                title="Book a Call"
            />
        </div>
    )
}

export function TheShiftBookButton({
    children,
    className,
    variant = "primary",
}: BookCallButtonProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (isOpen && !isLoaded) {
            const script = document.createElement("script")
            script.src = "https://app.cal.com/embed/embed.js"
            script.async = true
            script.onload = () => setIsLoaded(true)
            document.body.appendChild(script)
        }
    }, [isOpen, isLoaded])

    const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer"

    const variants = {
        primary:
            "bg-[#0047BB] text-white px-10 py-5 text-[11px] tracking-[0.2em] hover:bg-black font-code-brand",
        secondary:
            "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
        nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]",
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(baseStyles, variants[variant], className)}
            >
                {children}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full max-w-2xl h-[80vh] bg-white rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                        >
                            <span className="text-xl leading-none">&times;</span>
                        </button>
                        <iframe
                            src={`${CAL_SHIFT_CONFIG.bookingUrl}?embed=true&theme=light`}
                            className="w-full h-full border-0"
                            title="Book THE MINDSHIFT"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export function TheShiftAutoPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="relative w-full max-w-2xl h-[80vh] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                >
                    <span className="text-xl leading-none">&times;</span>
                </button>
                <iframe
                    src={`${CAL_SHIFT_CONFIG.bookingUrl}?embed=true&theme=light`}
                    className="w-full h-full border-0"
                    title="Book THE MINDSHIFT"
                />
            </div>
        </div>
    )
}

export { CAL_CONFIG, CAL_SHIFT_CONFIG }
