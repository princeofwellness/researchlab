"use client"

import { useState, useEffect } from "react"

interface Comment {
    id: string
    author_name: string
    content: string
    created_at: string
}

interface LabCommentsProps {
    page: string
}

function timeAgo(iso: string): string {
    const diff = Date.now() - new Date(iso).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return "just now"
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    if (days < 30) return `${days}d ago`
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
}

export function LabComments({ page }: LabCommentsProps) {
    const [comments, setComments] = useState<Comment[]>([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/api/lab-comments?page=${page}`)
            .then(r => r.json())
            .then(data => { setComments(Array.isArray(data) ? data : []); setLoading(false) })
            .catch(() => setLoading(false))
    }, [page])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!name.trim() || !text.trim()) return
        setSubmitting(true)
        setError("")

        const res = await fetch("/api/lab-comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ page_slug: page, author_name: name, content: text }),
        })

        if (res.ok) {
            const newComment = await res.json()
            setComments(prev => [newComment, ...prev])
            setText("")
        } else {
            setError("Something went wrong. Try again.")
        }
        setSubmitting(false)
    }

    return (
        <section className="bg-[#0d0d0d] text-white px-8 md:px-16 py-20 border-t border-white/[0.06]">
            <div className="max-w-3xl mx-auto">

                <div className="flex items-center gap-4 mb-12">
                    <span className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] text-white/30">
                        Comments
                    </span>
                    {!loading && (
                        <span className="text-[9px] font-code-brand text-white/20">
                            — {comments.length} {comments.length === 1 ? "note" : "notes"}
                        </span>
                    )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-px bg-white/[0.06] mb-px">
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            maxLength={60}
                            className="bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-white/20 outline-none focus:bg-white/[0.07] transition-colors font-sans-brand"
                        />
                        <input
                            type="text"
                            placeholder="Your thought on this doc..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            maxLength={500}
                            className="bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-white/20 outline-none focus:bg-white/[0.07] transition-colors font-sans-brand"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[9px] font-code-brand text-white/20">
                            {error && <span className="text-red-400">{error}</span>}
                        </p>
                        <button
                            type="submit"
                            disabled={submitting || !name.trim() || !text.trim()}
                            className="text-[9px] font-code-brand font-bold uppercase tracking-[0.3em] px-6 py-3 bg-[#0047BB] text-white hover:bg-[#0047BB]/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors mt-px"
                        >
                            {submitting ? "Posting..." : "Post →"}
                        </button>
                    </div>
                </form>

                {/* Comments list */}
                {loading ? (
                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20">Loading...</p>
                ) : comments.length === 0 ? (
                    <p className="text-[9px] font-code-brand uppercase tracking-widest text-white/20">No notes yet. Be the first.</p>
                ) : (
                    <div className="space-y-0">
                        {comments.map((c, i) => (
                            <div key={c.id} className={`py-7 ${i < comments.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                                <div className="flex items-baseline gap-4 mb-3">
                                    <span className="font-cabinet font-bold text-sm text-white">{c.author_name}</span>
                                    <span className="text-[9px] font-code-brand text-white/20 uppercase tracking-widest">{timeAgo(c.created_at)}</span>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed">{c.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
