import { notFound } from "next/navigation"
import Link from "next/link"
import { PublicNav } from "@/components/public/PublicNav"

const MONO = "'SF Mono','Fira Code',monospace"

const label = (_text: string, light = false) => ({
  fontFamily: MONO,
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.32em",
  textTransform: "uppercase" as const,
  color: light ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.35)",
  marginBottom: 24,
})

// ─── MINDSHIFT ────────────────────────────────────────────────────────────────
// Colour rhythm: parchment (hero+stats) → dark strip → parchment (body) → dark CTA
function MindshiftContent() {
  return (
    <>
      {/* Stats — stays in parchment, directly under hero */}
      <section style={{ background: "#e8e1da", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {[
            { num: "3.5h", label: "Opening session · panel discussion · tailored to your organisation" },
            { num: "3", label: "Specialist leads · intelligence, transformation, technical build" },
            { num: "2", label: "Paths forward · people & culture or technical implementation" },
          ].map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: "48px 56px",
                borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.08)" : undefined,
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "clamp(3rem, 5vw, 4.5rem)", color: "#0047BB", lineHeight: 1, marginBottom: 14 }}>
                {s.num}
              </p>
              <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.40)", lineHeight: 1.7 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Moment — single dark strip */}
      <section style={{ background: "#0d0d0d", padding: "72px 56px" }}>
        <p style={label("The Moment", true)}>The Moment</p>
        <p style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 700, lineHeight: 1.5, color: "#e8e1da", maxWidth: 800, marginBottom: 20 }}>
          Companies are making <span style={{ color: "#0047BB" }}>irreversible decisions</span> right now —
          restructures, hiring freezes, technology bets — without a clear picture of what
          is actually changing and <span style={{ color: "#0047BB" }}>why it matters for them specifically.</span>
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(232,225,218,0.50)" }}>
          The cost of getting this wrong is no longer recoverable in six months.
          The window for smart, intentional moves is now.
        </p>
      </section>

      {/* The Opening Session — parchment, two columns */}
      <section style={{ background: "#e8e1da", padding: "80px 56px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={label("0001 — It Starts With One Session")}>0001 — It Starts With One Session</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(0,0,0,0.10)" }}>
          {/* Left */}
          <div style={{ padding: "48px 48px 48px 0", borderRight: "1px solid rgba(0,0,0,0.10)" }}>
            <h3 style={{ fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.01em" }}>
              3.5 Hours.<br />Open the Space.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(13,13,13,0.65)", marginBottom: 16 }}>
              We come to your company. Three specialists. Before we arrive, we research your sector,
              your team, your current bets. The session is not generic — it is read for you.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(13,13,13,0.65)", marginBottom: 16 }}>
              Panel format. Facilitated discussion. We open the questions that matter —
              the ones people in your organisation already feel but haven&apos;t said out loud.
              We map the forces. We find where the real tension is.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(13,13,13,0.65)" }}>
              By the end, you have clarity. And we know exactly what you need next.
            </p>
          </div>
          {/* Right */}
          <div style={{ padding: "48px 0 48px 48px" }}>
            <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0047BB", marginBottom: 28 }}>
              What Happens in the Room
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "We present our read of what is changing in your sector — AI, market forces, customer behaviour, competitive landscape.",
                "Panel discussion opens. Three specialists, your leadership team. Real questions, no prepared answers.",
                "We surface where the thinking is stuck — the assumptions that are no longer true but are still driving decisions.",
                "We close with a map: where you are, where the pressure is coming from, and what the next honest move looks like.",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: 20, padding: "20px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: "#0047BB", minWidth: 20, paddingTop: 3 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(13,13,13,0.65)", margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Paths — parchment, full width */}
      <section style={{ background: "#e8e1da", padding: "80px 56px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={label("0010 — Then It Goes Where You Need It")}>0010 — Then It Goes Where You Need It</p>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(13,13,13,0.55)", maxWidth: 600, marginBottom: 48 }}>
          After the opening session, every company has different needs. The path is designed
          around what actually came up — not a fixed package.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(0,0,0,0.10)" }}>
          {/* Path A */}
          <div style={{ padding: "40px 48px 40px 0", borderRight: "1px solid rgba(0,0,0,0.10)", borderTop: "3px solid #0047BB" }}>
            <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0047BB", marginBottom: 16 }}>
              Path A — Led by Roman
            </p>
            <h3 style={{ fontWeight: 800, fontSize: 22, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
              How the Business<br />Thinks Differently
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(13,13,13,0.60)", marginBottom: 24 }}>
              The hardest change in any organisation is not the technology — it&apos;s the thinking.
              Roman works at the level of identity and operating model. How do leaders lead
              differently when the ground keeps moving?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Decision frameworks for uncertainty",
                "Where the operating model is brittle",
                "Culture signals that predict whether transformation sticks",
                "How customer expectations are changing",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: "#0047BB", fontFamily: MONO, fontSize: 9 }}>—</span>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(13,13,13,0.55)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Path B */}
          <div style={{ padding: "40px 0 40px 48px", borderTop: "3px solid rgba(0,0,0,0.12)" }}>
            <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0047BB", marginBottom: 16 }}>
              Path B — Led by Jan · Sudo Labs
            </p>
            <h3 style={{ fontWeight: 800, fontSize: 22, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.01em" }}>
              What You<br />Actually Build Next
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(13,13,13,0.60)", marginBottom: 24 }}>
              Some companies leave the opening session knowing they need to build something.
              Jan and Sudo Labs take the strategic clarity from the opening and turn it into
              something real. From scoped to shipped.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "What is actually worth building vs. hype",
                "AI workflow integration for real operational leverage",
                "Custom tooling around your actual processes",
                "Prototyping fast — test before committing the budget",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ color: "#0047BB", fontFamily: MONO, fontSize: 9 }}>—</span>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(13,13,13,0.55)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ marginTop: 20, fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.28)" }}>
          Both paths can run in parallel. Most companies end up in both.
        </p>
      </section>

      {/* Team — parchment, full-bleed 3 columns */}
      <section style={{ background: "#e8e1da", padding: "80px 56px" }}>
        <p style={label("0100 — Who Comes With You")}>0100 — Who Comes With You</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(0,0,0,0.10)" }}>
          {[
            {
              role: "Intelligence & Facilitation",
              name: "Prince",
              company: "Research Lab · SORRYWECAN",
              body: "Reads the landscape. Opens the space. Brings the intelligence — AI, geopolitics, cultural forces — and connects it to your specific situation. The thread between specialists and client.",
            },
            {
              role: "Transformation & Business Design",
              name: "Roman",
              company: "Transformational Design",
              body: "Works at the level of how organisations actually think. Not process maps — the deeper layer of identity, assumptions, and culture. Makes organisational change real.",
            },
            {
              role: "Technical Implementation",
              name: "Jan",
              company: "Sudo Labs",
              body: "Turns strategic clarity into built things. When the session surfaces what needs to be built, Jan and Sudo Labs scope and build it. From idea to running system.",
            },
          ].map((member, i) => (
            <div
              key={member.name}
              style={{
                padding: "40px 40px 40px 0",
                paddingLeft: i > 0 ? 40 : 0,
                borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.10)" : undefined,
              }}
            >
              <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0047BB", marginBottom: 12 }}>
                {member.role}
              </p>
              <p style={{ fontWeight: 900, fontSize: 24, letterSpacing: "-0.01em", marginBottom: 4 }}>{member.name}</p>
              <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: 20 }}>
                {member.company}
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(13,13,13,0.55)" }}>{member.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// ─── COMMUNITEA ───────────────────────────────────────────────────────────────
function CommunteaContent() {
  return (
    <section style={{ background: "#e8e1da", padding: "80px 56px" }}>
      {/* Main copy + format */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(0,0,0,0.10)", marginBottom: 0 }}>
        <div style={{ padding: "48px 48px 48px 0", borderRight: "1px solid rgba(0,0,0,0.10)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#0d0d0d" }}>
            While our main focus is <strong>artificial intelligence</strong>, Research Lab has never been only about technology.
            We explore the subtle conditions that allow <strong>awareness</strong> — human or artificial — to manifest.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(13,13,13,0.65)" }}>
            <strong style={{ color: "#0d0d0d" }}>COMMUNITEA</strong> is an experiment in <strong style={{ color: "#0d0d0d" }}>collective synchronization</strong>.
            It doesn&apos;t start with data, but with tea — a ritual known to slow neural oscillations and enhance
            alpha-wave coherence in the brain. Combined with mindful architecture, it works as a <strong style={{ color: "#0d0d0d" }}>cognitive catalyst</strong>.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(13,13,13,0.65)" }}>
            COMMUNITEA often serves as an entry point to <strong style={{ color: "#0047BB" }}>MINDSHIFT</strong> —
            a relaxed way for organisations to understand where they stand with AI before deciding on their next steps.
          </p>
          <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.35)", marginTop: 8 }}>
            Pop-Up Tea House · Sep 22–26, 2025 · Bratislava
          </p>
        </div>

        <div style={{ padding: "48px 0 48px 48px", display: "flex", flexDirection: "column" }}>
          {[
            { label: "Public Sessions", desc: "Open gatherings where tea, mindfulness, and AI meet in one space." },
            { label: "Private Sessions", desc: "Curated experiences for organisations — guest lecturer, tea programme, fully designed spatial ambience." },
            { label: "Monthly Rhythm", desc: "Regular gatherings, shared reading, peer conversations. A space to think seriously together." },
            { label: "Key Questions", desc: "How do communities form around shared uncertainty? Where do people go to think seriously together?" },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.08)" : undefined }}>
              <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#0047BB", marginBottom: 8 }}>
                {item.label}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(13,13,13,0.55)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FUTURE PROTOCOLS ─────────────────────────────────────────────────────────
// Future Protocols IS the toolkit series — each edition is a published research output
const TOOLKITS = [
  {
    num: "01",
    date: "Nov 2025",
    title: "THE MINDSHIFT ISSUE",
    desc: "The core methodology behind our Mindshift program — how we think about change, adaptability, and the cognitive mechanics behind flexibility.",
    href: "/Mindshift-Issue.pdf",
    img: "/img/protocols/mindshift-issue.jpg",
  },
  {
    num: "02",
    date: "Oct 2025",
    title: "The End of Art — or Art Without End?",
    desc: "When machines can effortlessly generate what we once called art, what remains for the human imagination? Authorship and meaning in an era of shared human-AI creation.",
    href: "/end-of-art-or-art-without-end.pdf",
    img: "/img/protocols/end-of-art.jpg",
  },
  {
    num: "03",
    date: "Sep 2025",
    title: "The Coming Age of Wisdom Work",
    desc: "As AI takes over execution, human work becomes about awareness, intuition, and presence. Productivity redefined through emotional intelligence, flow, and depth.",
    href: "/the-coming-age-of-wisdom-work.pdf",
    img: "/img/protocols/wisdom-work.jpg",
  },
  {
    num: "04",
    date: "Aug 2025",
    title: "AI as a New Entity",
    desc: "The first edition — AI not as a tool, but as an emerging form of intelligence evolving its own logic and ecology. Developed in parallel with EXHIBIZZ.",
    href: "/Toolkit.pdf",
    img: "/img/protocols/ai-as-entity.jpg",
  },
  {
    num: "05",
    date: "Aug 2025",
    title: "Lightpaper",
    desc: "Adaptive pattern recognition frameworks for navigating hybrid human-AI intelligence landscapes.",
    href: "/Lightpaper.pdf",
    img: "/img/protocols/lightpaper.jpg",
  },
]

function FutureProtocolsContent() {
  return (
    <section style={{ background: "#e8e1da", padding: "80px 56px" }}>
      <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(13,13,13,0.55)", maxWidth: 560, marginBottom: 64 }}>
        Each edition is applied research distilled into a toolkit — published as a PDF you can use.
      </p>

      {/* Card grid — 3 col portrait rectangles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {TOOLKITS.map((tk) => (
          <a
            key={tk.num}
            href={tk.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image — contain with parchment bg so nothing gets cropped or boxed */}
            <div style={{ width: "100%", aspectRatio: "2/3", overflow: "hidden", background: "#e8e1da", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tk.img}
                alt={tk.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "20px 24px 28px", borderTop: "1px solid rgba(0,0,0,0.08)", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", color: "rgba(0,0,0,0.30)" }}>
                  {tk.num}
                </span>
                <span style={{ fontFamily: MONO, fontSize: 9, color: "rgba(0,0,0,0.30)" }}>
                  {tk.date}
                </span>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35, color: "#0d0d0d", margin: 0 }}>
                {tk.title}
              </p>
              <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#0047BB", marginTop: "auto", paddingTop: 12 }}>
                Download PDF ↗
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── THE SOURCE ───────────────────────────────────────────────────────────────
function TheSourceContent() {
  return (
    <section style={{ background: "#e8e1da", padding: "80px 56px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(0,0,0,0.10)" }}>
        <div style={{ padding: "48px 48px 48px 0", borderRight: "1px solid rgba(0,0,0,0.10)", display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#0d0d0d" }}>
            Research Lab&apos;s media arm — documentation, case studies, and the archive of what we build and observe.
            THE SOURCE is how we make our practice legible to the world.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(13,13,13,0.65)" }}>
            Bi-monthly internal sessions, long-form publications, and the living record of Research Lab in motion.
            Not content marketing — actual documentation of practice.
          </p>
        </div>
        <div style={{ padding: "48px 0 48px 48px" }}>
          <p style={label("Key Questions")}>Key Questions</p>
          {[
            "What does it mean to publish research in real time?",
            "How do you archive a practice that is still forming?",
            "What format carries ideas best in the age of short attention?",
          ].map((q, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 16, padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.08)" : undefined, alignItems: "baseline" }}>
              <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, color: "#0047BB" }}>{String(i + 1).padStart(2, "0")}</span>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#0d0d0d", margin: 0, fontWeight: 500 }}>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROGRAMME REGISTRY ───────────────────────────────────────────────────────
const PROGRAMME_META: Record<string, {
  num: string; name: string; tag: string; tagline: string; thesis: string
  heroBg?: string; heroText?: string; heroTagColor?: string
  cta: string; ctaLabel: string; note?: string
  content: () => React.ReactNode
}> = {
  mindshift: {
    num: "01", name: "MINDSHIFT", tag: "Flagship Workshop",
    tagline: "A session that changes how your team thinks.",
    thesis: "AI doesn't make thinking easier — it makes the quality of thinking more consequential.",
    heroBg: "#e8e1da",
    heroText: "#0d0d0d",
    heroTagColor: "#0047BB",
    cta: "mailto:researchlab@sorrywecan.com", ctaLabel: "Book the Opening Session",
    note: "Running Q1–Q2 2026 for corporate teams.",
    content: MindshiftContent,
  },
  communitea: {
    num: "02", name: "COMMUNITEA", tag: "Community",
    tagline: "TEA × AI × PRESENCE",
    thesis: "The most important conversations about AI are still happening between humans.",
    heroBg: "#e8e1da",
    heroText: "#0d0d0d",
    heroTagColor: "#0047BB",
    cta: "mailto:researchlab@sorrywecan.com", ctaLabel: "Join COMMUNITEA",
    content: CommunteaContent,
  },
  "future-protocols": {
    num: "03", name: "FUTURE PROTOCOLS", tag: "Research · Toolkit Series",
    tagline: "Applied research, published as toolkits.",
    thesis: "Work is being reorganized faster than the protocols that govern it. We document what's actually emerging.",
    cta: "mailto:researchlab@sorrywecan.com", ctaLabel: "Partner on Research",
    content: FutureProtocolsContent,
  },
  "the-source": {
    num: "04", name: "THE SOURCE", tag: "Media & Publishing",
    tagline: "Everything we build and observe, documented.",
    thesis: "Everything Research Lab builds and observes should be documented, published, and shared.",
    cta: "https://research-hub.xyz", ctaLabel: "Read the HUB →",
    content: TheSourceContent,
  },
}

export function generateStaticParams() {
  return Object.keys(PROGRAMME_META).map((slug) => ({ slug }))
}

export default function ProgrammePage({ params }: { params: { slug: string } }) {
  const prog = PROGRAMME_META[params.slug]
  if (!prog) notFound()

  const heroBg = prog.heroBg ?? "#0d0d0d"
  const heroText = prog.heroText ?? "#e8e1da"
  const heroTagColor = prog.heroTagColor ?? "#0047BB"
  const thesisBg = heroBg === "#e8e1da" ? "#0047BB" : "#0047BB"

  const Content = prog.content

  return (
    <main className="font-cabinet" style={{ background: "#e8e1da", color: "#0d0d0d", minHeight: "100vh" }}>
      <PublicNav />

      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "55vh",
          background: heroBg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "120px 56px 64px",
          borderBottom: heroBg === "#e8e1da" ? "1px solid rgba(0,0,0,0.08)" : undefined,
        }}
      >
        <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: heroTagColor, marginBottom: 8 }}>
          {prog.num} — {prog.tag}
        </p>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.025em", color: heroText, marginBottom: 32 }}>
          {prog.name}
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: heroBg === "#e8e1da" ? "rgba(13,13,13,0.55)" : "rgba(232,225,218,0.55)", maxWidth: 560 }}>
          {prog.tagline}
        </p>
      </section>

      {/* ─── THESIS ─── */}
      <section style={{ background: thesisBg, padding: "64px 56px" }}>
        <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.40)", marginBottom: 24 }}>
          Core Thesis
        </p>
        <p style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, lineHeight: 1.4, color: "white", maxWidth: 800 }}>
          {prog.thesis}
        </p>
      </section>

      {/* ─── CONTENT ─── */}
      <Content />

      {/* ─── CTA ─── */}
      <section style={{ background: "#0d0d0d", padding: "80px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.0, color: "#e8e1da", letterSpacing: "-0.02em" }}>
          Work with<br />the Lab.
        </h2>
        {prog.note && (
          <p style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(232,225,218,0.35)" }}>
            {prog.note}
          </p>
        )}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={prog.cta} style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "white", background: "#0047BB", padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
            {prog.ctaLabel}
          </a>
          <Link href="/site#programmes" style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(232,225,218,0.50)", border: "1px solid rgba(255,255,255,0.15)", padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
            ← All Programmes
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0d0d0d", color: "#e8e1da", padding: "40px 56px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <a href="mailto:researchlab@sorrywecan.com" style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#e8e1da", textDecoration: "none" }}>
          researchlab@sorrywecan.com
        </a>
        <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,225,218,0.25)" }}>
          © {new Date().getFullYear()} SORRYWECAN
        </p>
      </footer>
    </main>
  )
}
