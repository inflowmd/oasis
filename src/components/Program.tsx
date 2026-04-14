const steps = [
  {
    n: "01",
    title: "Comprehensive Assessment",
    body: "60-minute consultation with extensive lab testing — hormones, inflammation, cellular health, cardiovascular risk biomarkers.",
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
    <section id="program" style={{ background: "var(--dark)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <div className="mx-sm" style={{ position: "relative", zIndex: 1 }}>
        <div className="pill" style={{ background: "rgba(184,150,90,0.1)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 28 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
          The Program
        </div>
        <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
          A longevity program <span className="fdi" style={{ color: "var(--gold)" }}>built for the long term.</span>
        </h2>
        <p style={{ fontSize: 17, color: "rgba(204,221,223,0.6)", lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
          An ongoing, membership-based physician–client relationship. Dr. Mehta works with a select number of clients, providing continuous guidance that evolves with your health.
        </p>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginBottom: 36 }}>
          {steps.map((s) => (
            <div key={s.n} className="cd">
              <div className="fd" style={{ fontSize: 48, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "rgba(204,221,223,0.5)", fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="cd" style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "24px 28px" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(184,150,90,0.1)", border: "1px solid rgba(184,150,90,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#B8965A" />
            </svg>
          </div>
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Qualified Medical Expenses</h4>
            <p style={{ color: "rgba(204,221,223,0.5)", fontSize: 14, lineHeight: 1.65 }}>
              Program fees are 100% outside of and exceed standard plan coverage — eligible for HSA, HRA, FSA, and MSA funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
