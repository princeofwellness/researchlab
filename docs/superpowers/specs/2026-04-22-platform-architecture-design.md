# Research Lab — Unified Public Homepage Design Spec
**Date:** 2026-04-22  
**Status:** Approved for implementation  
**Repo:** `princeofwellness/researchlab` (Next.js 14, App Router)

---

## 1. What We're Building

A unified public-facing homepage for Research Lab by SORRYWECAN — a single front door that presents both the **institute** (programmes, mission, intellectual identity) and the **magazine** (The Radar, intelligence publication). The homepage replaces the current Nuxt public site at `lab.sorrywecan.com` once deployed.

Reference inspiration: berggruen.org (institute-first, ultra-minimal, photography + whitespace) and noemamag.com (magazine arm).

---

## 2. Architecture Decision

**Option C (Unified Front Door)** — selected over:
- A: Institute First (buries The Radar, hurts content discovery)
- B: Magazine First (looks like a blog, hard to sell programmes)

One URL, one identity. Institute-level framing at the top. Navigation branches immediately to Programmes or The Radar. Equal weight given to both.

---

## 3. Visual System

| Token | Value |
|-------|-------|
| `--blue` | `#0047BB` |
| `--dark` | `#0d0d0d` |
| `--parchment` | `#e8e1da` |
| Font | Cabinet Grotesk (Fontshare CDN), weights 400–900 |
| Monospace accent | SF Mono / Fira Code, 9px, 0.32em tracking |

**Section alternation:** parchment → dark → parchment → blue → parchment → dark → parchment  
**No decorative boxes.** Hairline borders (`1px solid rgba`) only.  
**No watermarks.** Typography and whitespace carry the weight.

---

## 4. Page Structure

All sections are full-viewport (`min-height: 100vh`) except the footer.

### 4.1 Navigation (fixed, 56px)
- Logo: `RESEARCH` (blue) + `LAB` (dark), 900 weight, 13px, uppercase tracking
- Links: Programmes · The Radar · Work With Us · Lab
- CTA: "WORK WITH US" pill button (blue fill, white text)
- Background: `rgba(232,225,218,0.94)` with `backdrop-filter: blur(20px)`
- Bottom border: `1px solid rgba(0,0,0,0.06)`

### 4.2 Hero (parchment, ~100vh)
- Headline: "WHERE HUMANS & AI CO-EVOLVE." — 80px, 900 weight, dark
- Tagline below: "Research. Rewire. Recreate." — 13px code-style, monospace
- Two CTAs at bottom: "READ THE LAB →" (ghost/hairline) + "WORK WITH US" (blue fill)
- **Future:** slot reserved for full-bleed editorial photography (behind or beside headline, Berggruen-style). Not blocking v1.

### 4.3 About / Mission (dark, 100vh)
- Label: "ABOUT THE LAB" (blue, 9px mono uppercase)
- Copy (3 paragraphs from Nuxt en.json):
  1. "SORRYWECAN Research Lab is an experimental space for exploring tomorrow's mindset..."
  2. "In the age of AI, we turn our attention to **the human**..."
  3. "SORRYWECAN Research Lab's holistic practice combines **analytical and intuitive approaches**..."
- "READ THE MANIFESTO →" link at bottom
- Right column (desktop): "Est. 2024 · Bratislava · AI × Human Research"

### 4.4 Programmes (parchment, 100vh)
- Label: "PROGRAMMES" + "04 ACTIVE" right-aligned
- Numbered hairline list. Each row: `01 · PROGRAMME NAME · [description excerpt] · [status tag]`
- Programmes: MINDSHIFT / COMMUNITEA / FUTURE PROTOCOLS / THE SOURCE
- Each name links to `/programmes/[slug]`
- **Programmes stay on the landing page** — numbered index gives institute feel (Berggruen model). Dedicated pages live at `/programmes/mindshift` etc. for full detail.

### 4.5 The Radar (blue, 100vh)
- Label: "THE RADAR" + "INTELLIGENCE PUBLICATION" right-aligned
- Tagline: "We track **what the news is a symptom of.** AI, work, cognition, and the forces reshaping how humans operate."
- Article list (4–5 items): numbered rows with title, tag, date
- CTA: "EXPLORE THE RADAR →" links to research-hub (Radar publication)
- **Links:** The Radar section and nav item point to research-hub. Destination TBD between same-domain (`/radar`) and subdomain (`radar.sorrywecan.com`).

### 4.6 Animating Questions (parchment, auto)
- Label: "ANIMATING QUESTIONS"
- 3 big numbered questions (large type, generous leading)
- No CTA — these are provocations, not funnels

### 4.7 Work with the Lab (dark, auto)
- Headline: "Work with the Lab." — large, 900 weight
- Description paragraph
- 3 tiers in hairline grid:
  - **PARTICIPATION** — workshops, retreats, speaking
  - **COLLABORATION** — embedded research, co-production
  - **STRATEGIC PARTNERSHIP** — long-term institutional engagement
- Each tier: label + description + "ENQUIRE →" link (opens mailto or /engage form)

### 4.8 Footer (dark)
- Email: `researchlab@sorrywecan.com`
- Nav links repeated
- "© 2024 SORRYWECAN" + "RESEARCH LAB" right-aligned
- Divider hairline at top

---

## 5. Routing & Linking

| Nav Item | Destination | Notes |
|----------|-------------|-------|
| Programmes | `#programmes` (anchor scroll) | On homepage; full pages at `/programmes/[slug]` |
| The Radar | Research-hub URL | Exact URL TBD — same domain or subdomain |
| Work With Us | `#engage` anchor | Scrolls to Work with the Lab section |
| Lab | `/lab` | Internal — existing Next.js lab portal (password/link gated) |
| Enquire (all tiers) | `mailto:researchlab@sorrywecan.com` | v1; replace with `/engage` form later |

---

## 6. Implementation Plan

**Repo:** `/Users/princeofwellness/researchlab` (Next.js 14 App Router, TypeScript)  
**Route:** `/app/(public)/page.tsx` or `/app/page.tsx` — replaces current homepage  
**Approach:** Build homepage as a single-page component using existing shadcn/ui base. No new dependencies needed beyond what's in the repo.

**Source of truth for copy:** Nuxt `locales/en.json` (already mined for hero, about, programmes copy)  
**Font:** Add Cabinet Grotesk to `next/font` or keep as CSS import via Fontshare CDN  
**Deployment:** Vercel (existing). Nuxt stays live until DNS flip.

**Not in v1 scope:**
- Individual programme pages (`/programmes/[slug]`)
- Engage/contact form (`/engage`)
- Editorial photography in hero
- The Radar integration (beyond external link)
- Animation / scroll effects

---

## 7. Open Questions (decided or deferred)

| Question | Decision |
|----------|----------|
| Institute First vs Magazine First vs Unified | **Unified (C)** — approved |
| Programmes on landing? | **Yes** — numbered index stays, links to detail pages |
| The Radar same domain or subdomain? | **Deferred** — link to existing research-hub URL for now |
| Photography in hero? | **Deferred** — slot reserved, not blocking v1 |
| Nuxt vs Next.js for build? | **Next.js** — build in researchlab, deploy when ready |
| New Vercel project or existing? | **Existing** — work internally in researchlab repo |

---

## 8. Unresolved Architecture — Needs Decisions Before Implementation

### 8.1 Navigation Structure

**DECIDED.** Final nav:

```
RESEARCH LAB    Programmes    Publications    HAAB    Collaborate    About
```

- **Programmes** — MINDSHIFT, COMMUNITEA, FUTURE PROTOCOLS, THE SOURCE. Community lives inside (CommUniTea IS the community programme).
- **Publications** — light papers, toolkits, research outputs. Everything the institute produces that isn't editorial.
- **HAAB** — the magazine (working title; final name TBD). Separate site/identity, links out. Built on research-hub.
- **Collaborate** — engagement tiers (Participation / Collaboration / Strategic Partnership).
- **About** — mission, people, manifesto.
- **Lab** — internal portal, accessible now, phases out of nav eventually.

### 8.2 Programmes — Detail Pages

Each programme should have its own dedicated page at `/programmes/[slug]`. We have existing copy for all four. Template per page needs defining:

| Slug | Programme | Has copy? |
|------|-----------|-----------|
| `mindshift` | MINDSHIFT | Yes (Nuxt + pitch deck) |
| `communitea` | COMMUNITEA | Yes (Nuxt + pitch deck) |
| `future-protocols` | FUTURE PROTOCOLS | Yes (Nuxt + pitch deck) |
| `the-source` | THE SOURCE | Partial |

**Decisions needed:**
- What's the template for a programme page? (Hero, mission, format, apply CTA?)
- Do programme pages live at `/programmes/mindshift` or get their own sub-domains?
- Should clicking a programme on the homepage expand inline (accordion) or navigate away?

### 8.3 Community

CommUniTea is listed as a programme. But "community" also feels like a platform-level thing — a place where members of the lab ecosystem connect.

**Decisions needed:**
- Is CommUniTea the community, or is there a separate community layer?
- If community is its own section: what does it contain? (Member profiles, Discord link, events?)
- Does community appear in the homepage scrolling sections, or only in nav?

### 8.4 Publications

The Radar is the primary publication. But there are also: light papers, research reports, synthesis documents, toolkits/frameworks.

**Decisions needed:**
- What is the full list of publication types? (The Radar articles / Light Papers / Toolkits / Case Studies?)
- Do publications all live under The Radar brand, or does Publications become its own section/nav item?
- Does the homepage show a publications preview section (beyond the current Radar article list)?

### 8.5 Lab (Internal Portal)

The `/lab` route currently exists in the Next.js repo as the internal strategy portal.

**Decisions needed:**
- What is publicly visible in the Lab vs. what requires login/link?
- Does the Lab nav link go to a gated page with a login prompt, or is it link-gated (unlisted URL)?
- Is there a public-facing "Lab" page that explains what the internal lab is, before gating?

### 8.6 Toolkits / Architecture

The pitch deck mentions frameworks and applied work. There may be downloadable toolkits or methodology pages.

**Decisions needed:**
- Do toolkits exist as pages, downloads, or are they part of programme pages?
- Is "Architecture" a public-facing page (how the lab thinks) or internal only?
- Where does this live in the IA — under Programmes, Publications, or its own section?
