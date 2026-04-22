"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.")
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        throw new Error()
      }
    } catch {
      setErrorMsg("Something went wrong. Try again or email us directly.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0047BB",
          }}
        >
          You&apos;re in.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(232,225,218,0.50)" }}>
          We&apos;ll reach out when something worth reading is ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 0 }}>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); setErrorMsg("") }}
          placeholder="Your email"
          style={{
            flex: 1,
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.20)",
            borderRight: "none",
            color: "#e8e1da",
            padding: "14px 20px",
            fontSize: 14,
            fontFamily: "'Cabinet Grotesk', sans-serif",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            background: status === "loading" ? "rgba(0,71,187,0.6)" : "#0047BB",
            color: "white",
            border: "none",
            padding: "14px 24px",
            cursor: status === "loading" ? "default" : "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "rgba(232,225,218,0.40)",
          }}
        >
          {errorMsg}
        </p>
      )}
    </form>
  )
}
