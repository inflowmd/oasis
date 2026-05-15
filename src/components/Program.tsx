import Image from "next/image";
import type { ReactNode } from "react";

type Modality = { title: string; desc: string; icon: ReactNode };

const modalities: Modality[] = [
  {
    title: "Hormonal Optimization",
    desc: "Precision hormone management with cardiovascular safety oversight.",
    icon: (
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="#1C3538"
      />
    ),
  },
  {
    title: "Peptide Therapy",
    desc: "Evidence-based peptide protocols tailored to individual biology.",
    icon: <path d="M13 2L4.09 12.97 11 14l-1 8 8.91-10.97L12 10l1-8z" fill="#1C3538" />,
  },
  {
    title: "Regenerative Science",
    desc: "Emerging exosome and stem cell therapies guided by clinical evidence.",
    icon: (
      <g fill="none" stroke="#1C3538" strokeWidth="1.6">
        <circle cx="12" cy="12" r="2" fill="#1C3538" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-60 12 12)" />
      </g>
    ),
  },
  {
    title: "Metabolic Science",
    desc: "Metabolic optimization, nutritional strategy, and body composition.",
    icon: (
      <g fill="none" stroke="#1C3538" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </g>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Comprehensive Assessment",
    body: "A thorough, personalized consultation paired with advanced diagnostic testing — tailored entirely to your history, risk profile, and health goals.",
  },
  {
    n: "02",
    title: "Personalized Protocol",
    body: "Fully customized based on your biomarkers and goals — cardiovascular, hormonal, metabolic, or cognitive.",
  },
  {
    n: "03",
    title: "Ongoing Partnership",
    body: "Continuous physician access, annual labs, quarterly reviews, evolving protocols. Your strategy adapts as you do.",
  },
];

export default function Program() {
  return (
    <section id="program" className="dark-mesh-2" style={{ background: "var(--dark)", paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      <div className="mx-lg" style={{ position: "relative", zIndex: 1, paddingBottom: 0 }}>
        <div
          className="program-intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.9fr",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <div>
            <div
              className="pill"
              style={{
                background: "rgba(201,169,110,0.1)",
                color: "var(--gold)",
                border: "1px solid rgba(201,169,110,0.15)",
                marginBottom: 28,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
              The Program
            </div>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(32px,3.4vw,52px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: 24,
              }}
            >
              A longevity program <span className="fdi" style={{ color: "var(--gold)" }}>built for the long term.</span>
            </h2>
            <p style={{ fontSize: 18, color: "rgba(232,237,232,0.72)", lineHeight: 1.8 }}>
              Our ongoing annual and follow-up routine diagnostic lifestyle and longevity exam, combined with a supportive, year-round, high-connection communications subscription, creates a personalized physician–patient relationship{" "}
              <span
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  backgroundImage:
                    "linear-gradient(transparent 62%, rgba(201,169,110,0.22) 62%, rgba(201,169,110,0.22) 92%, transparent 92%)",
                  backgroundRepeat: "no-repeat",
                  padding: "0 2px",
                }}
              >
                designed to optimize your health
              </span>
              .
            </p>
          </div>
          <div
            className="program-intro-image"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(201,169,110,0.18)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
            }}
          >
            <Image
              src="/in-depth-review.jpeg"
              alt="The longevity program — designed around you"
              fill
              sizes="(max-width: 1100px) 90vw, 540px"
              className="object-cover"
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(15,31,31,0) 40%, rgba(15,31,31,0.75))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                right: 24,
                bottom: 22,
                color: "#fff",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                A continuous relationship
              </p>
              <p
                className="fdi"
                style={{
                  fontSize: "clamp(18px,1.6vw,22px)",
                  lineHeight: 1.4,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Built around your biology, your goals, and your life.
              </p>
            </div>
          </div>
        </div>

        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {steps.map((s) => (
            <div key={s.n} className="cd">
              <div className="fd" style={{ fontSize: 48, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "rgba(232,237,232,0.5)", fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-sm" style={{ position: "relative", zIndex: 1 }}>
        {/* Therapeutic Expertise — cream insert with 2x2 mini cards */}
        <div
          className="modality-card"
          style={{
            maxWidth: 1220,
            margin: "60px auto",
            background: "rgba(245,241,235,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(245,241,235,0.5)",
            borderRadius: 24,
            padding: "44px 48px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A96E",
            }}
          >
            Therapeutic Expertise
          </div>
          <div style={{ width: 36, height: 2, background: "#C9A96E", margin: "12px auto 32px", borderRadius: 2 }} />
          <div
            className="modality-grid-mini"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {modalities.map((m) => (
              <div
                key={m.title}
                className="modality-mini"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  background: "#fff",
                  border: "1px solid rgba(232,237,232,0.2)",
                  borderRadius: 16,
                  padding: "18px 20px",
                  transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "var(--gp)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{m.icon}</svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1C3538", marginBottom: 4, lineHeight: 1.3 }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#7A9A8E", lineHeight: 1.5 }}>
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p
            className="fdi"
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#3D6B5E",
              lineHeight: 1.5,
              marginTop: 28,
            }}
          >
            Integrating the right modalities for each client.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 22,
            alignItems: "flex-start",
            padding: "34px 38px",
            borderRadius: 18,
            background: "rgba(201,169,110,0.08)",
            border: "1px solid rgba(201,169,110,0.4)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: "rgba(201,169,110,0.16)",
              border: "1px solid rgba(201,169,110,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                fill="#C9A96E"
              />
            </svg>
          </div>
          <div>
            <h4
              style={{
                color: "var(--gold)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Qualified Medical Expense
            </h4>
            <p
              className="fd"
              style={{
                color: "#fff",
                fontSize: "clamp(17px,1.7vw,21px)",
                lineHeight: 1.6,
                fontWeight: 500,
                marginBottom: 14,
              }}
            >
              Cash patient annual subscription fees, payable annually or monthly, purchase annual comprehensive
              diagnostic and unlimited follow-up exams, supported by ongoing communication connection to your
              healthcare professional, to optimize your health.
            </p>
            <p style={{ color: "rgba(232,237,232,0.55)", fontSize: 14, lineHeight: 1.65 }}>
              Program fees are 100% outside of and exceed standard plan coverage — eligible for HSA, HRA, FSA, and MSA
              funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
