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

const CAL_SHIFT_ONLINE_CONFIG = {
    username: "researchlabsorrywecan",
    eventSlug: "theshiftonline",
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

export function TheShiftOnlineButton({
    children,
    className,
    variant = "link",
}: {
    children: React.ReactNode
    className?: string
    variant?: "link" | "button"
}) {
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

    const linkStyles = "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest font-code-brand transition-all cursor-pointer hover:text-[#0047BB]"
    const buttonStyles = "inline-flex items-center gap-3 font-bold border-2 border-[#0047BB] text-[#0047BB] px-8 py-4 hover:bg-[#0047BB] hover:text-white transition-all font-code-brand uppercase tracking-widest text-[11px] cursor-pointer"

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={cn(
                    variant === "link" ? linkStyles : buttonStyles,
                    className
                )}
            >
                {children}
                {variant === "link" && <span className="text-base">→</span>}
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
                            src={`${CAL_SHIFT_ONLINE_CONFIG.bookingUrl}?embed=true&theme=light`}
                            className="w-full h-full border-0"
                            title="Book THE MINDSHIFT — Online"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export function TheShiftChoiceButton({
    children,
    className,
    variant = "primary",
    lang = "sk",
}: BookCallButtonProps & { lang?: "en" | "sk" }) {
    const [step, setStep] = useState<"closed" | "choose" | "booking">("closed")
    const [attendanceType, setAttendanceType] = useState<"in_person" | "online">("in_person")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (step === "booking" && !isLoaded) {
            const script = document.createElement("script")
            script.src = "https://app.cal.com/embed/embed.js"
            script.async = true
            script.onload = () => setIsLoaded(true)
            document.body.appendChild(script)
        }
    }, [step, isLoaded])

    const handleChoice = (type: "in_person" | "online") => {
        setAttendanceType(type)
        setStep("booking")
    }

    const close = () => setStep("closed")

    const choiceContent = {
        en: {
            title: "How would you like to attend?",
            inperson: { label: "In Person", location: "SORRYWECAN Studio, Bratislava", detail: "February 26 · 17:00" },
            online: { label: "Online", location: "Livestream", detail: "February 26 · 17:00" },
            price: "€99",
        },
        sk: {
            title: "Ako sa chcete zúčastniť?",
            inperson: { label: "Osobne", location: "SORRYWECAN Studio, Bratislava", detail: "26. februára · 17:00" },
            online: { label: "Online", location: "Livestream", detail: "26. februára · 17:00" },
            price: "€99",
        },
    }
    const ct = choiceContent[lang]

    const baseStyles = "font-bold uppercase tracking-widest transition-all cursor-pointer"
    const variants = {
        primary: "bg-[#0047BB] text-white px-10 py-5 text-[11px] tracking-[0.2em] hover:bg-black font-code-brand",
        secondary: "border-2 border-white text-white px-10 py-5 text-xs hover:bg-white hover:text-black",
        nav: "bg-black text-white px-6 py-2 text-[10px] hover:bg-[#0047BB]",
    }

    return (
        <>
            <button
                onClick={() => setStep("choose")}
                className={cn(baseStyles, variants[variant], className)}
            >
                {children}
            </button>

            {/* Choice Modal — Osobne / Online */}
            {step === "choose" && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={close}
                >
                    <div
                        className="relative w-full max-w-md bg-[#e8e1da] p-8 md:p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={close}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                        >
                            <span className="text-xl leading-none">&times;</span>
                        </button>

                        <h3 className="text-center text-lg font-bold mb-8">
                            {ct.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleChoice("in_person")}
                                className="group p-6 border-2 border-black/10 hover:border-[#0047BB] bg-white/50 hover:bg-white transition-all text-left cursor-pointer"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] font-code-brand">
                                    {ct.inperson.label}
                                </span>
                                <p className="text-sm text-black/60 mt-2">{ct.inperson.location}</p>
                                <p className="text-[10px] text-black/40 font-code-brand mt-1">{ct.inperson.detail}</p>
                                <p className="text-lg font-bold mt-4">{ct.price}</p>
                            </button>

                            <button
                                onClick={() => handleChoice("online")}
                                className="group p-6 border-2 border-black/10 hover:border-[#0047BB] bg-white/50 hover:bg-white transition-all text-left cursor-pointer"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] font-code-brand">
                                    {ct.online.label}
                                </span>
                                <p className="text-sm text-black/60 mt-2">{ct.online.location}</p>
                                <p className="text-[10px] text-black/40 font-code-brand mt-1">{ct.online.detail}</p>
                                <p className="text-lg font-bold mt-4">{ct.price}</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cal.com Booking iframe */}
            {step === "booking" && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={close}
                >
                    <div
                        className="relative w-full max-w-2xl h-[80vh] bg-white rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={close}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                        >
                            <span className="text-xl leading-none">&times;</span>
                        </button>
                        <iframe
                            src={`${CAL_SHIFT_CONFIG.bookingUrl}?embed=true&theme=light&metadata[attendance_type]=${attendanceType}`}
                            className="w-full h-full border-0"
                            title="Book THE MINDSHIFT"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

const popupContent = {
    en: {
        label: "February 26 · Bratislava",
        headline: "Mindshift is happening.",
        subline: "In 3 hours, you'll see what took us years to learn.",
        cta: "Learn More"
    },
    sk: {
        label: "26. februára · Bratislava",
        headline: "Mindshift prichádza.",
        subline: "Za 3 hodiny uvidíte to, čo nám trvalo roky pochopiť.",
        cta: "Zistiť viac"
    }
}

export function MindshiftPopup({ lang = 'en' }: { lang?: 'en' | 'sk' }) {
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false)
    const t = popupContent[lang]

    useEffect(() => {
        if (typeof window === 'undefined') return
        const dismissed = localStorage.getItem('mindshift-popup-dismissed')
        if (dismissed) return
        const timer = setTimeout(() => {
            setVisible(true)
            requestAnimationFrame(() => setShow(true))
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    const dismiss = () => {
        setShow(false)
        setTimeout(() => setVisible(false), 300)
        localStorage.setItem('mindshift-popup-dismissed', 'true')
    }

    if (!visible) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', opacity: show ? 1 : 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
        >
            <div
                className="relative bg-[#e8e1da] border-2 border-[#0047BB] mx-5 max-w-[480px] w-full px-6 py-12 md:px-12 md:py-16 transition-all duration-300"
                style={{ transform: show ? 'scale(1)' : 'scale(0.95)', opacity: show ? 1 : 0 }}
            >
                <button
                    onClick={dismiss}
                    className="absolute top-4 right-4 text-[#0047BB] text-2xl leading-none hover:opacity-60 transition-opacity"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center text-center text-[#0047BB]">
                    <span className="font-code-brand text-[10px] font-bold uppercase tracking-[0.3em]">
                        {t.label}
                    </span>
                    <h2 className="mt-4 text-[28px] md:text-[36px] font-bold uppercase leading-tight font-sans-brand">
                        {t.headline}
                    </h2>
                    <p className="mt-3 text-[14px] md:text-[16px] leading-relaxed font-sans-brand">
                        {t.subline}
                    </p>
                    <a href="/">
                        <button
                            onClick={dismiss}
                            className="mt-8 border-[#0047BB] border-2 text-[16px] font-medium px-10 py-3 bg-[#0047BB] text-white hover:bg-transparent hover:text-[#0047BB] transition-colors duration-300 uppercase tracking-wider"
                        >
                            {t.cta}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { CAL_CONFIG, CAL_SHIFT_CONFIG, CAL_SHIFT_ONLINE_CONFIG }
