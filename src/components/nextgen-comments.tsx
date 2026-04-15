"use client"

import { useEffect, useRef } from "react"

type Lang = "en" | "sk"

interface CommentsProps {
  lang: Lang
}

export function NextgenComments({ lang }: CommentsProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Remove any existing script
    const existing = ref.current.querySelector("script")
    if (existing) existing.remove()
    ref.current.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "princeofwellness/researchlab")
    script.setAttribute("data-repo-id", "R_kgDOQ6IXNA")
    script.setAttribute("data-category", "General")
    script.setAttribute("data-category-id", "DIC_kwDOQ6IXNM4C4ika")
    script.setAttribute("data-mapping", "specific")
    script.setAttribute("data-term", "nextgen-programme-feedback")
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "top")
    script.setAttribute("data-theme", "light")
    script.setAttribute("data-lang", lang === "sk" ? "sk" : "en")
    script.setAttribute("data-loading", "lazy")
    script.crossOrigin = "anonymous"
    script.async = true

    ref.current.appendChild(script)
  }, [lang])

  return (
    <section className="py-24 px-6 md:px-20 bg-[#f5f5f3]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] block mb-4">
            {lang === "en" ? "Discussion" : "Diskusia"}
          </span>
          <h2 className="font-cabinet font-bold text-4xl md:text-5xl tracking-tighter mb-3">
            {lang === "en" ? "Leave a Comment." : "Zanechajte komentár."}
          </h2>
          <p className="text-black/50 text-base font-light max-w-xl">
            {lang === "en"
              ? "Questions, suggestions, feedback — all welcome. Sign in with GitHub to comment."
              : "Otázky, návrhy, spätná väzba — všetko vítané. Prihláste sa cez GitHub a komentujte."}
          </p>
        </div>
        <div ref={ref} className="giscus" />
      </div>
    </section>
  )
}
