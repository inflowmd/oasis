import Image from "next/image";
import type { ReactNode } from "react";

type Step = {
  n: string;
  title: ReactNode;
  body: string;
  image: string;
  alt: string;
  reverse?: boolean;
  borderBottom?: boolean;
};

const steps: Step[] = [
  {
    n: "1",
    title: (<>Application &amp; <span className="fdi" style={{ color: "var(--gm)" }}>Discovery</span></>),
    body: "An unhurried, customized first consultation. Dr. Mehta takes whatever time is needed to understand your full picture — paired with lab testing that goes far beyond standard panels.",
    image: "/application-discovery.jpeg",
    alt: "Application and discovery consultation with Dr. Mehta",
    borderBottom: true,
  },
  {
    n: "2",
    title: (<>In-Depth Review &amp; <span className="fdi" style={{ color: "var(--gm)" }}>Your Plan</span></>),
    body: "Dr. Mehta assesses your health on a cellular and vascular level, reviews every result, and builds your personalized longevity protocol.",
    image: "/in-depth-review.jpeg",
    alt: "In-depth review of lab results and personalized longevity plan",
    reverse: true,
    borderBottom: true,
  },
  {
    n: "3",
    title: (<>Your Ongoing <span className="fdi" style={{ color: "var(--gm)" }}>Partnership</span></>),
    body: "Continuous access to Dr. Mehta, annual labs, quarterly reviews, evolving interventions. Specialist referrals within his trusted network.",
    image: "/partnership.jpeg",
    alt: "Ongoing physician-client partnership with Dr. Mehta",
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
            <div
              className="si"
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: 20,
                overflow: "hidden",
                order: s.reverse ? -1 : undefined,
              }}
            >
              <Image src={s.image} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
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
