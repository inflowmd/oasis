import type { ReactNode } from "react";

type Card = { title: string; icon: ReactNode; items: string[] };

const cards: Card[] = [
  {
    title: "Cardiovascular",
    icon: (<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#375253" />),
    items: ["ECG & Echocardiogram", "Coronary calcium score", "Carotid ultrasound", "ABI", "Advanced lipid panel"],
  },
  {
    title: "Metabolic & Hormonal",
    icon: (<path d="M7 2v11h3v9l7-12h-4l4-8z" fill="#375253" />),
    items: ["Metabolic panel", "Full hormone panel", "Insulin & glucose", "Thyroid comprehensive", "CGM"],
  },
  {
    title: "Cellular & Genomic",
    icon: (<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="#375253" />),
    items: ["Epigenetic age testing", "Inflammation markers", "Nutrient levels", "Genetic risk", "Telomere analysis"],
  },
  {
    title: "Body Composition",
    icon: (<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#375253" />),
    items: ["DEXA scan", "VO₂ max testing", "Body composition", "Bone density", "Muscle mass"],
  },
  {
    title: "Wearables",
    icon: (<path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="#375253" />),
    items: ["Blood pressure", "Sleep tracking", "Heart rate variability", "Activity data", "CGM patterns"],
  },
  {
    title: "Ongoing Monitoring",
    icon: (<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#375253" />),
    items: ["Annual baseline labs", "Quarterly reviews", "Protocol adjustments", "Specialist coordination", "Emerging biomarkers"],
  },
];

export default function Diagnostics() {
  return (
    <section style={{ background: "var(--tl)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1000 800" fill="none" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.045"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#B8965A" transform="translate(-20,80) scale(1.2)" /></g>
        <g opacity="0.035"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#375253" transform="translate(850,50) scale(0.7)" /></g>
        <g opacity="0.05"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#C3B9AE" transform="translate(780,500) scale(0.5)" /></g>
        <g opacity="0.03"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#375253" transform="translate(400,600) scale(0.6)" /></g>
        <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#B8965A" transform="translate(150,550) scale(0.35)" /></g>
      </svg>
      <div className="mx">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="pill" style={{ background: "var(--gold-pale)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            Diagnostics
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
            Every protocol begins with <span className="fdi" style={{ color: "var(--gm)" }}>data.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--tm)", maxWidth: 480, margin: "0 auto" }}>
            Fully personalized. No standard panels. Refined over time.
          </p>
        </div>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {cards.map((c) => (
            <div key={c.title} className="cl">
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div className="ic" style={{ background: "var(--gp)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{c.icon}</svg>
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold)" }}>{c.title}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.items.map((it) => (
                  <div key={it} className="di"><span />{it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
