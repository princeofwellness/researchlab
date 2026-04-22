import { PublicNav } from "@/components/public/PublicNav"
import Link from "next/link"
import { PROGRAMMES, HAAB_ARTICLES, QUESTIONS } from "./data"

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
              {/* TODO: link to /manifesto when page exists */}
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
            {`${String(PROGRAMMES.length).padStart(2, "0")} Active`}
          </p>
        </div>

        <div style={{ flex: 1 }}>
          {PROGRAMMES.map((prog, i) => (
            <Link
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
            </Link>
          ))}
        </div>
      </section>

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
            {/* TODO: link to HAAB magazine site when live */}
            Explore HAAB →
          </a>
        </div>
      </section>

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

        <div>
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
                  margin: 0,
                }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      </section>

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
            },
            {
              tier: "Collaboration",
              desc: "Embedded research, co-production, co-design. We work inside your context over a defined period.",
            },
            {
              tier: "Strategic Partnership",
              desc: "Long-term institutional engagement. Research Lab as a thinking partner, not a vendor.",
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
                Enquire →
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
          © {new Date().getFullYear()} SORRYWECAN
        </p>
      </footer>
    </main>
  )
}
