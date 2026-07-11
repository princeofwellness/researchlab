# Research Lab Unified Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the unified Research Lab public homepage at `/site` in the Next.js researchlab repo — a Berggruen-minimal institute front door with 8 full-viewport sections, ready to swap to `/` on launch.

**Architecture:** Single page at `src/app/site/page.tsx` with a clean public layout that overrides the existing internal nav chrome. A reusable `PublicNav` component handles the fixed top bar. All sections are inline in the page component (one-time-use, no premature abstraction). Sections scroll into each other: parchment → dark → parchment → blue → parchment → dark → parchment → dark (footer).

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Cabinet Grotesk (already loaded via Fontshare in globals.css), framer-motion (already installed), no new dependencies.

---

## Design Tokens Reference (use throughout all tasks)

```
Parchment: #e8e1da   (var(--background))
Dark:      #0d0d0d
Blue:      #0047BB   (var(--accent))
Font:      Cabinet Grotesk — className="font-cabinet"
Mono:      SF Mono / Fira Code — font-family: 'SF Mono','Fira Code',monospace
Hairline:  1px solid rgba(0,0,0,0.10) on parchment | 1px solid rgba(255,255,255,0.12) on dark/blue
```

---

## Task 1: Public Site Layout

**Files:**
- Create: `src/app/site/layout.tsx`

Sets Cabinet Grotesk as the body font for all public pages. Strips the internal lab chrome (no TopNav, no wrapping providers). Children render directly.

- [ ] **Step 1: Create the layout**

```tsx
// src/app/site/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Lab — SORRYWECAN",
  description: "An experimental space for exploring tomorrow's mindset. Where humans and AI co-evolve.",
}

export default function PublicSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-cabinet antialiased" style={{ background: "#e8e1da", color: "#0d0d0d" }}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/princeofwellness/researchlab && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors (or only pre-existing errors unrelated to this file)

- [ ] **Step 3: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/layout.tsx
git commit -m "feat: add public site layout for unified homepage"
```

---

## Task 2: PublicNav Component

**Files:**
- Create: `src/components/public/PublicNav.tsx`

Fixed top bar: `RESEARCH LAB` logo (RESEARCH in blue, LAB in dark), 5 nav links, blue CTA pill. Parchment background with blur. Collapses to hamburger on mobile.

- [ ] **Step 1: Create the component**

```tsx
// src/components/public/PublicNav.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Programmes", href: "#programmes" },
  { label: "Publications", href: "#publications" },
  { label: "HAAB", href: "#haab" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "About", href: "#about" },
]

export function PublicNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 font-cabinet"
        style={{
          height: 56,
          background: "rgba(232,225,218,0.94)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="/site" className="flex items-center gap-0 no-underline">
          <span
            className="font-black tracking-widest uppercase"
            style={{ fontSize: 13, letterSpacing: "0.18em", color: "#0047BB" }}
          >
            RESEARCH
          </span>
          <span
            className="font-black tracking-widest uppercase"
            style={{ fontSize: 13, letterSpacing: "0.18em", color: "#0d0d0d" }}
          >
            LAB
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0d0d0d",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#collaborate"
            className="hidden md:inline-flex items-center no-underline"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#0047BB",
              color: "white",
              padding: "8px 18px",
              borderRadius: 3,
            }}
          >
            Work With Us
          </Link>
          <button
            className="md:hidden p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 font-cabinet md:hidden"
          style={{ background: "#e8e1da" }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="no-underline py-4"
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#0d0d0d",
                borderBottom: "1px solid rgba(0,0,0,0.10)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#collaborate"
            onClick={() => setOpen(false)}
            className="no-underline mt-8 inline-flex"
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#0047BB",
              color: "white",
              padding: "14px 24px",
              borderRadius: 3,
            }}
          >
            Work With Us
          </Link>
        </div>
      )}
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
cd /Users/princeofwellness/researchlab && npx tsc --noEmit 2>&1 | head -20
```

Expected: no new errors

- [ ] **Step 3: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/components/public/PublicNav.tsx
git commit -m "feat: add PublicNav component for unified homepage"
```

---

## Task 3: Page Shell + Hero Section

**Files:**
- Create: `src/app/site/page.tsx`

Page shell with `PublicNav` + first section: the hero. Full-viewport parchment. Giant headline, tagline, two CTAs at the bottom.

- [ ] **Step 1: Create page with hero**

```tsx
// src/app/site/page.tsx
import { PublicNav } from "@/components/public/PublicNav"
import Link from "next/link"

export default function PublicHomePage() {
  return (
    <main className="font-cabinet">
      <PublicNav />

      {/* ─── HERO ─── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          background: "#e8e1da",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0 56px",
          paddingTop: 56,
        }}
      >
        {/* top spacer */}
        <div style={{ flex: 1 }} />

        {/* headline */}
        <div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#0d0d0d",
              maxWidth: 900,
              marginBottom: 32,
            }}
          >
            WHERE HUMANS &<br />AI CO-EVOLVE.
          </h1>
          <p
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.45)",
              marginBottom: 56,
            }}
          >
            Research · Rewire · Recreate
          </p>
        </div>

        {/* bottom CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            paddingBottom: 56,
            borderTop: "1px solid rgba(0,0,0,0.10)",
            paddingTop: 32,
          }}
        >
          <Link
            href="#about"
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#0d0d0d",
              border: "1px solid rgba(0,0,0,0.20)",
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Read the Lab →
          </Link>
          <Link
            href="#collaborate"
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "white",
              background: "#0047BB",
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Start dev server and verify hero renders**

```bash
cd /Users/princeofwellness/researchlab && npm run dev
```

Open http://localhost:3000/site — verify: parchment background, large dark headline, two CTAs at bottom of viewport, nav fixed at top.

- [ ] **Step 3: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add public homepage shell with hero section"
```

---

## Task 4: About / Mission Section

**Files:**
- Modify: `src/app/site/page.tsx` — add about section after hero

Dark full-viewport section. Label, 3-paragraph copy from Nuxt, manifesto link, side metadata.

- [ ] **Step 1: Add about section inside `<main>`, after the hero closing `</section>`**

```tsx
      {/* ─── ABOUT ─── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          background: "#0d0d0d",
          color: "#e8e1da",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 56px 56px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#0047BB",
              marginBottom: 56,
            }}
          >
            About the Lab
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 80, alignItems: "start" }}>
            {/* Copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "#e8e1da" }}>
                SORRYWECAN Research Lab is an experimental space for exploring tomorrow's
                mindset — a platform for open experimentation and observation.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "rgba(232,225,218,0.75)" }}>
                In the age of AI, we turn our attention to{" "}
                <strong style={{ color: "#e8e1da" }}>the human</strong> — how creativity
                transforms, how consciousness adapts, and how identity evolves in dialogue
                with non-human agents.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "rgba(232,225,218,0.75)" }}>
                SORRYWECAN Research Lab's holistic practice combines{" "}
                <strong style={{ color: "#e8e1da" }}>analytical and intuitive approaches</strong>{" "}
                to build new languages for our and our shared future. Developed within the
                SORRYWECAN ecosystem.
              </p>
              <a
                href="#"
                style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#0047BB",
                  textDecoration: "none",
                  marginTop: 16,
                }}
              >
                Read the Manifesto →
              </a>
            </div>

            {/* Side metadata */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                paddingLeft: 32,
                borderLeft: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              {[
                { label: "Founded", value: "2024" },
                { label: "Location", value: "Bratislava, Slovakia" },
                { label: "Focus", value: "AI × Human Research" },
                { label: "Output", value: "Programmes, Publications, HAAB" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "'SF Mono','Fira Code',monospace",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "rgba(232,225,218,0.40)",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#e8e1da" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000/site and scroll past hero — verify: dark section fills viewport, 3 paragraphs visible, blue label at top, side metadata panel.

- [ ] **Step 3: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add about/mission section to public homepage"
```

---

## Task 5: Programmes Section

**Files:**
- Modify: `src/app/site/page.tsx` — add programmes section after about

Parchment background. "PROGRAMMES" label. Numbered hairline list — 4 rows, each linking to its future programme page.

- [ ] **Step 1: Add the programmes data and section**

Add this constant near the top of `page.tsx`, before the component:

```tsx
const PROGRAMMES = [
  {
    num: "01",
    slug: "mindshift",
    name: "MINDSHIFT",
    tag: "Flagship Workshop",
    desc: "A 3-hour live experience rewiring how you think, decide, and create with AI. For teams, leaders, and creative practitioners.",
  },
  {
    num: "02",
    slug: "communitea",
    name: "COMMUNITEA",
    tag: "Community",
    desc: "A living community for people navigating the human-AI edge. Monthly gatherings, shared reading, peer conversations.",
  },
  {
    num: "03",
    slug: "future-protocols",
    name: "FUTURE PROTOCOLS",
    tag: "Research Programme",
    desc: "Applied research into the behavioural and organisational protocols emerging from AI-integrated work.",
  },
  {
    num: "04",
    slug: "the-source",
    name: "THE SOURCE",
    tag: "Media & Publishing",
    desc: "Research Lab's media arm — documentation, case studies, and the archive of what we build and observe.",
  },
]
```

Then add this section inside `<main>`, after the about `</section>`:

```tsx
      {/* ─── PROGRAMMES ─── */}
      <section
        id="programmes"
        style={{
          minHeight: "100vh",
          background: "#e8e1da",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 56px 56px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.40)",
            }}
          >
            Programmes
          </p>
          <p
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.28)",
            }}
          >
            04 Active
          </p>
        </div>

        <div style={{ flex: 1 }}>
          {PROGRAMMES.map((prog, i) => (
            <a
              key={prog.slug}
              href={`/programmes/${prog.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr 200px 120px",
                alignItems: "baseline",
                gap: 24,
                padding: "28px 0",
                borderTop: i === 0 ? "1px solid rgba(0,0,0,0.12)" : undefined,
                borderBottom: "1px solid rgba(0,0,0,0.12)",
                textDecoration: "none",
                color: "inherit",
                transition: "opacity 0.2s",
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  color: "rgba(0,0,0,0.30)",
                }}
              >
                {prog.num}
              </span>
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.02em", color: "#0d0d0d" }}>
                {prog.name}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(0,0,0,0.55)", fontWeight: 400 }}>
                {prog.desc}
              </span>
              <span
                style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.28)",
                  textAlign: "right",
                }}
              >
                {prog.tag}
              </span>
            </a>
          ))}
        </div>
      </section>
```

- [ ] **Step 2: Verify in browser**

Scroll to programmes — verify: 4 numbered rows on hairlines, names in large weight, descriptions and tags visible. All rows are clickable links (will 404 until programme pages exist — expected).

- [ ] **Step 3: TypeScript check**

```bash
cd /Users/princeofwellness/researchlab && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add programmes section with linked programme list"
```

---

## Task 6: HAAB Magazine Teaser Section

**Files:**
- Modify: `src/app/site/page.tsx` — add HAAB section after programmes

Blue full-viewport section. Label, teaser tagline, 4 article rows, explore CTA.

- [ ] **Step 1: Add article data constant** (place near `PROGRAMMES` constant at top of file)

```tsx
const HAAB_ARTICLES = [
  {
    num: "01",
    title: "The Quiet Collapse of Expertise",
    tag: "Intelligence",
    date: "Apr 2026",
  },
  {
    num: "02",
    title: "The Qualified Designer: Why AI makes creative process more human, not less",
    tag: "Synthesis",
    date: "Mar 2026",
  },
  {
    num: "03",
    title: "Slow media, fast machines: what it means to think and publish deliberately",
    tag: "Editorial",
    date: "Mar 2026",
  },
  {
    num: "04",
    title: "Future Protocols 001: The workflow patterns emerging in distributed AI teams",
    tag: "Research",
    date: "Feb 2026",
  },
]
```

- [ ] **Step 2: Add HAAB section** inside `<main>`, after programmes `</section>`:

```tsx
      {/* ─── HAAB ─── */}
      <section
        id="haab"
        style={{
          minHeight: "100vh",
          background: "#0047BB",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 56px 56px",
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
            <p
              style={{
                fontFamily: "'SF Mono','Fira Code',monospace",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.60)",
              }}
            >
              HAAB
            </p>
            <p
              style={{
                fontFamily: "'SF Mono','Fira Code',monospace",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              Intelligence Publication
            </p>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "white",
              maxWidth: 640,
              marginBottom: 64,
            }}
          >
            We track{" "}
            <em style={{ fontStyle: "normal", textDecoration: "underline", textDecorationThickness: 2 }}>
              what the news is a symptom of.
            </em>{" "}
            AI, work, cognition, and the forces reshaping how humans operate.
          </h2>

          <div>
            {HAAB_ARTICLES.map((article, i) => (
              <div
                key={article.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr 100px 80px",
                  alignItems: "baseline",
                  gap: 24,
                  padding: "20px 0",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.15)" : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {article.num}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "white", lineHeight: 1.4 }}>
                  {article.title}
                </span>
                <span
                  style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {article.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9,
                    color: "rgba(255,255,255,0.35)",
                    textAlign: "right",
                  }}
                >
                  {article.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: 40 }}>
          <a
            href="#"
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.70)",
              textDecoration: "none",
            }}
          >
            Explore HAAB →
          </a>
        </div>
      </section>
```

- [ ] **Step 3: Verify in browser**

Scroll to HAAB section — verify: blue background fills viewport, white article list with hairlines, teaser copy, "Explore HAAB →" at bottom.

- [ ] **Step 4: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add HAAB magazine teaser section"
```

---

## Task 7: Animating Questions Section

**Files:**
- Modify: `src/app/site/page.tsx` — add questions section after HAAB

Parchment. Large numbered questions. No CTA — provocations only.

- [ ] **Step 1: Add questions constant** (near top of file with other constants)

```tsx
const QUESTIONS = [
  "How does work hold under AI — and what breaks first when execution accelerates?",
  "Can organisations move faster with AI while keeping consistency, direction, and what makes them human?",
  "What does it mean to build and lead in an age where judgment is more scarce than execution?",
]
```

- [ ] **Step 2: Add questions section** inside `<main>`, after HAAB `</section>`:

```tsx
      {/* ─── ANIMATING QUESTIONS ─── */}
      <section
        id="questions"
        style={{
          background: "#e8e1da",
          padding: "100px 56px",
        }}
      >
        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.35)",
            marginBottom: 64,
          }}
        >
          Animating Questions
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {QUESTIONS.map((q, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 24,
                padding: "48px 0",
                borderBottom: "1px solid rgba(0,0,0,0.10)",
                borderTop: i === 0 ? "1px solid rgba(0,0,0,0.10)" : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.24em",
                  color: "rgba(0,0,0,0.25)",
                  paddingTop: 6,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                style={{
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#0d0d0d",
                  letterSpacing: "-0.01em",
                }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      </section>
```

- [ ] **Step 3: Verify in browser**

Scroll to questions — verify: 3 large numbered questions on hairlines, generous padding, parchment background.

- [ ] **Step 4: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add animating questions section"
```

---

## Task 8: Collaborate Section + Footer

**Files:**
- Modify: `src/app/site/page.tsx` — add collaborate section and footer, close `<main>`

Dark collaborate section (3 engagement tiers). Dark footer with email + nav.

- [ ] **Step 1: Add collaborate section + footer** inside `<main>`, after questions `</section>`. This also closes `</main>`.

```tsx
      {/* ─── COLLABORATE ─── */}
      <section
        id="collaborate"
        style={{
          background: "#0d0d0d",
          color: "#e8e1da",
          padding: "100px 56px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.95,
            color: "#e8e1da",
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          Work with<br />the Lab.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(232,225,218,0.60)",
            maxWidth: 540,
            marginBottom: 72,
          }}
        >
          We work with organisations, teams, and individuals who are serious about
          navigating what AI means for how they think, lead, and create.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.10)" }}>
          {[
            {
              tier: "Participation",
              desc: "Workshops, retreats, speaking. Single engagements designed to shift perspective and equip your team.",
              cta: "Enquire →",
            },
            {
              tier: "Collaboration",
              desc: "Embedded research, co-production, co-design. We work inside your context over a defined period.",
              cta: "Enquire →",
            },
            {
              tier: "Strategic Partnership",
              desc: "Long-term institutional engagement. Research Lab as a thinking partner, not a vendor.",
              cta: "Enquire →",
            },
          ].map((item) => (
            <div
              key={item.tier}
              style={{
                background: "#0d0d0d",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'SF Mono','Fira Code',monospace",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(232,225,218,0.40)",
                    marginBottom: 20,
                  }}
                >
                  {item.tier}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(232,225,218,0.70)", fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
              <a
                href="mailto:researchlab@sorrywecan.com"
                style={{
                  fontFamily: "'SF Mono','Fira Code',monospace",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#0047BB",
                  textDecoration: "none",
                }}
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: "#0d0d0d",
          color: "#e8e1da",
          padding: "40px 56px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <a
          href="mailto:researchlab@sorrywecan.com"
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#e8e1da",
            textDecoration: "none",
          }}
        >
          researchlab@sorrywecan.com
        </a>

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {[
            { label: "Programmes", href: "#programmes" },
            { label: "Publications", href: "#publications" },
            { label: "HAAB", href: "#haab" },
            { label: "Collaborate", href: "#collaborate" },
            { label: "Lab", href: "/lab" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'SF Mono','Fira Code',monospace",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(232,225,218,0.45)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(232,225,218,0.25)",
          }}
        >
          © 2024 SORRYWECAN
        </p>
      </footer>
    </main>
  )
}
```

- [ ] **Step 2: Verify full page in browser**

Open http://localhost:3000/site and scroll through the entire page:
- Hero: parchment, giant headline, two CTAs
- About: dark, 3 paragraphs, side metadata
- Programmes: parchment, 4 numbered rows
- HAAB: blue, article list
- Questions: parchment, 3 large questions
- Collaborate: dark, 3-column tier grid
- Footer: dark, email + links

- [ ] **Step 3: TypeScript build check**

```bash
cd /Users/princeofwellness/researchlab && npx tsc --noEmit 2>&1 | head -30
```

Expected: no new errors

- [ ] **Step 4: Commit**

```bash
cd /Users/princeofwellness/researchlab
git add src/app/site/page.tsx
git commit -m "feat: add collaborate section and footer, complete homepage"
```

---

## Task 9: Production Build Verification

**Files:** None modified — verification only.

- [ ] **Step 1: Run full Next.js build**

```bash
cd /Users/princeofwellness/researchlab && npm run build 2>&1 | tail -30
```

Expected: `✓ Compiled successfully` with `/site` appearing in the route list. Fix any build errors before proceeding.

- [ ] **Step 2: Verify route is listed**

Look for `/site` in the build output route table. If it shows as static (○) or dynamic (λ), both are correct.

- [ ] **Step 3: Push to remote**

```bash
cd /Users/princeofwellness/researchlab && git push
```

Vercel will auto-deploy. The new page will be live at `[your-vercel-url]/site`.

- [ ] **Step 4: Final commit if any fixes needed**

```bash
cd /Users/princeofwellness/researchlab
git add -A
git commit -m "fix: resolve any build errors for public homepage"
git push
```

---

## What This Plan Does NOT Cover (future tasks)

- `/programmes/[slug]` — individual programme pages (each has its own copy, needs its own plan)
- `/publications` — publications index page
- HAAB magazine site (lives in research-hub repo, separate plan)
- Editorial photography in hero
- Animations / scroll effects
- DNS flip from Nuxt to Next.js
- Mobile responsive polish (grid collapses to single column needed on Tasks 4, 5, 6, 8)
