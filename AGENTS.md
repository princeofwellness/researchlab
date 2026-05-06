# Research Lab — Agent Context

## What This Is

Research Lab is the internal + client-facing platform for **SORRYWECAN** — an AI education company based in Bratislava. The codebase serves two audiences:

1. **Internal lab** (`/lab/*`) — strategy docs, economics, content architecture, sales pipeline. The team's backstage.
2. **Client-facing** (`/corporate/*`, `/public/*`, `/mindshift`, `/shift`) — offer decks, one-pagers, programme pages. What prospects see.

Deployed to **Vercel** at `researchlab-three.vercel.app`.

## Stack

- **Next.js 14** (App Router, `src/app/`)
- **TypeScript**
- **Tailwind CSS** with custom fonts (Cabinet Grotesk, Proxima Nova, Source Code Pro)
- **Framer Motion** for lab page animations
- **Supabase** for API routes (comments, seats, subscriptions)

## Key People

- **Tiep Le Dinh** — Founder, vision, community. The "why" person.
- **Roman Pii Wagner** — Transformational designer, clarity, facilitation. The "how" person.

## Route Architecture

```
/                           → Homepage (public)
/lab                        → Internal hub — all docs organized by section
/lab/context                → "The Bible" — master brand/product/voice context
/lab/corporate              → Corporate strategy page (links to offer decks)
/lab/pitchdeck              → RL pitch deck (EN/SK, PDF)
/lab/content                → Content architecture
/lab/economics              → Revenue model (confidential)
/lab/platform-strategy      → Circle/community platform plan
/lab/q2-overview            → Quarterly plan

/corporate/offer-v2         → 2-day workshop deck (7 slides, EN/SK, €690/person)
/corporate/offer-v3         → 1-day intensive deck (6 slides, EN/SK, €360/person)
/corporate/offer            → Legacy offer v1
/corporate/onepager         → Corporate one-pager
/corporate/mini-tech-mba    → Partnership deck with Mini Tech MBA

/public/onepager            → Public MINDSHIFT one-pager
/public/stories             → Instagram story slides
/public/youth-ai            → Youth AI programme page

/mindshift                  → MINDSHIFT marketing page
/shift                      → Toolkit (Edition 01)
/programmes/[slug]          → Programme detail pages (mindshift, communitea, etc.)

/sales                      → Sales strategy
/prospects                  → 145-company prospect database
/curriculum                 → Workshop curriculum detail
```

## Corporate Offers (the decks)

Two formats exist:

| Offer | Route | Duration | Price | Slides |
|-------|-------|----------|-------|--------|
| 2-Day Workshop | `/corporate/offer-v2` | 2 full days | €690/person + VAT | 7 |
| 1-Day Intensive | `/corporate/offer-v3` | 3.5 hours | €360/person + VAT | 6 |

Both are self-contained `page.tsx` files — no shared components, no external data files. Each has:
- Language toggle (EN/SK) via `useState`
- Print/PDF export via CSS `@media print` + `window.print()`
- A4 landscape slide layout (297mm × 210mm)
- Shared design system: blue (#0047BB), parchment (#e8e1da), dark (#0d0d0d)

### 2-Day Workshop (offer-v2)
Day 1 "The Mindshift": tea ritual → 2 speakers → circle discussion → panel
Day 2 "The Practice": live demo → tool stack → prompts → hands-on

### 1-Day Intensive (offer-v3)
Single session: 2 speakers (2×30min) → diagnostics circle (30min) → hands-on practice (90min) → panel (30min)

## Design System

- **Fonts**: Cabinet Grotesk (headings), Proxima Nova (body), Source Code Pro (labels/monospace)
- **Colors**: Blue `#0047BB`, parchment `#e8e1da`, near-black `#0d0d0d`, white
- **Slide pages** use class `page-slide` with A4 landscape dimensions
- **Lab pages** use framer-motion fade animations, parchment background, monospace labels

## Bilingual (EN/SK)

All client-facing decks support English and Slovak via a `lang` state toggle. Slovak copy should be:
- **Written**, not translated — natural marketing tone, not literal
- **Punchy** — match the English energy (short sentences, confident, no filler)
- **Diacritics** — always proper: ň, ť, ľ, ď, ž, š, č, á, é, í, ó, ú, ý, ä, ô
- Use actual UTF-8 characters, never HTML entities like `&ncaron;` or escape sequences like `\u0165` in JSX text

## Navigation

The `/lab` page is the central hub. It organizes all routes into sections:
- **Decks & Offers** — all client-facing decks and one-pagers
- **Strategy** — internal strategy documents
- **Operations** — sales, growth, marketing, curriculum
- **Archive** — deprecated/old versions

Each offer deck has its own internal top navbar linking between decks.

## When Editing

- Offer decks are single-file components — edit in place, no shared component extraction needed
- Lab pages use shared patterns (Label, SectionTitle components defined locally)
- Always test both EN and SK versions after copy changes
- PDF export: test with `window.print()` — colors must be preserved via `print-color-adjust: exact`
