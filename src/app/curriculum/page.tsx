"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CurriculumPage() {
    const router = useRouter()
    
    useEffect(() => {
        router.replace("/public")
    }, [router])

    return (
        <div className="min-h-screen bg-[#f5f5f3] flex items-center justify-center">
            <p className="text-black/40 text-sm">Redirecting...</p>
        </div>
    )
}
