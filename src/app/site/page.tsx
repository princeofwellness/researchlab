import { PublicNav } from "@/components/public/PublicNav"
import Link from "next/link"

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

const QUESTIONS = [
  "How does work hold under AI — and what breaks first when execution accelerates?",
  "Can organisations move faster with AI while keeping consistency, direction, and what makes them human?",
  "What does it mean to build and lead in an age where judgment is more scarce than execution?",
]

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
        <div style={{ flex: 1 }} />

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
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "#e8e1da" }}>
                SORRYWECAN Research Lab is an experimental space for exploring tomorrow&apos;s
                mindset — a platform for open experimentation and observation.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "rgba(232,225,218,0.75)" }}>
                In the age of AI, we turn our attention to{" "}
                <strong style={{ color: "#e8e1da" }}>the human</strong> — how creativity
                transforms, how consciousness adapts, and how identity evolves in dialogue
                with non-human agents.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, fontWeight: 400, color: "rgba(232,225,218,0.75)" }}>
                SORRYWECAN Research Lab&apos;s holistic practice combines{" "}
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

      {/* HAAB, QUESTIONS, COLLABORATE, FOOTER will be added in Tasks 6-8 */}
    </main>
  )
}

// Exported for use in Tasks 6 and 7
export { HAAB_ARTICLES, QUESTIONS }
