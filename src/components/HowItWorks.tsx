import type { ReactNode } from "react";

type Step = {
  n: string;
  title: ReactNode;
  body: string;
  gradient: string;
  icon: ReactNode;
  reverse?: boolean;
  borderBottom?: boolean;
};

const steps: Step[] = [
  {
    n: "1",
    title: (<>Application &amp; <span className="fdi" style={{ color: "var(--gm)" }}>Discovery</span></>),
    body: "A 60-minute consultation where Dr. Mehta learns your history, goals, and lifestyle. Extensive lab testing far beyond standard panels.",
    gradient: "linear-gradient(135deg,var(--gp),var(--gl))",
    icon: (<path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="#375253" />),
    borderBottom: true,
  },
  {
    n: "2",
    title: (<>In-Depth Review &amp; <span className="fdi" style={{ color: "var(--gm)" }}>Your Plan</span></>),
    body: "Dr. Mehta assesses your health on a cellular and vascular level, reviews every result, and builds your personalized longevity protocol.",
    gradient: "linear-gradient(135deg,var(--gl),var(--tl))",
    icon: (<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#375253" />),
    reverse: true,
    borderBottom: true,
  },
  {
    n: "3",
    title: (<>Your Ongoing <span className="fdi" style={{ color: "var(--gm)" }}>Partnership</span></>),
    body: "Continuous access to Dr. Mehta, annual labs, quarterly reviews, evolving interventions. Specialist referrals within his trusted network.",
    gradient: "linear-gradient(135deg,var(--tl),var(--gp))",
    icon: (<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" fill="#375253" />),
  },
];

export default function HowItWorks() {
  return (
    <section id="steps" style={{ background: "var(--ow)", padding: "100px 0" }}>
      <div className="mx">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill" style={{ background: "var(--gold-pale)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            How It Works
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)" }}>
            Three steps to your <span className="fdi" style={{ color: "var(--gm)" }}>longevity program.</span>
          </h2>
        </div>
        {steps.map((s) => {
          const text = (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--gold-pale)", border: "1px solid rgba(184,150,90,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="fd" style={{ fontSize: 18, fontWeight: 700, color: "var(--gold)" }}>{s.n}</span>
                </div>
                <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg,rgba(184,150,90,0.2),transparent)" }} />
              </div>
              <h3 className="fd" style={{ fontSize: 26, fontWeight: 700, color: "var(--td)", marginBottom: 14 }}>{s.title}</h3>
              <p style={{ fontSize: 16, color: "var(--tm)", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          );
          const image = (
            <div className="si" style={{ aspectRatio: "4/3", borderRadius: 20, background: s.gradient, display: "flex", alignItems: "center", justifyContent: "center", order: s.reverse ? -1 : undefined }}>
              <div style={{ opacity: 0.3, textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
              </div>
            </div>
          );
          return (
            <div
              key={s.n}
              className="sg g2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "center",
                padding: "48px 0",
                borderBottom: s.borderBottom ? "1px solid rgba(204,221,223,0.2)" : undefined,
              }}
            >
              {s.reverse ? (<>{image}{text}</>) : (<>{text}{image}</>)}
            </div>
          );
        })}
      </div>
    </section>
  );
}
