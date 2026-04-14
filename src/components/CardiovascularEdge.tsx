const stats = [
  { v: "919K+", l: "CVD deaths in 2023", gold: true },
  { v: "80%", l: "Preventable", gold: true },
  { v: "1 in 3", l: "Deaths from CVD", gold: false },
  { v: "34 sec", l: "One CVD death", gold: false },
];

const bullets = [
  "Coronary artery calcium (CAC) scoring",
  "CT coronary angiography with AI analysis",
  "Advanced lipid panels — ApoB, Lp(a), LDL-P",
  "Carotid intima-media thickness ultrasound",
  "VO₂ max testing (CPET)",
  "Echocardiography and cardiac imaging",
  "GLP-1/SGLT2 with cardiac monitoring",
  "Hormonal therapy with CV safety oversight",
];

export default function CardiovascularEdge() {
  return (
    <section id="approach" style={{ background: "#fff", padding: "100px 0" }}>
      <div className="mx cvf" style={{ display: "flex", alignItems: "flex-start", gap: "clamp(40px,6vw,80px)" }}>
        <div style={{ flex: 1 }}>
          <div className="pill" style={{ background: "var(--gold-pale)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            The Cardiovascular Edge
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(28px,2.8vw,42px)", fontWeight: 700, color: "var(--td)", lineHeight: 1.15, marginBottom: 20 }}>
            Heart disease is the #1 killer.<br />
            <span className="fdi" style={{ color: "var(--gm)" }}>Your longevity doctor should know that.</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--tm)", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
            Most longevity practices are led by naturopaths or functional medicine practitioners. Dr. Mehta brings decades of interventional cardiology training and first-hand experience treating the disease longevity medicine exists to prevent.
          </p>
          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {stats.map((s) => (
              <div key={s.v} style={{ display: "flex", gap: 14 }}>
                <div style={{ width: 3, borderRadius: 3, background: s.gold ? "var(--gold)" : "var(--gl)", flexShrink: 0, alignSelf: "stretch" }} />
                <div>
                  <div className="fd" style={{ fontSize: 30, fontWeight: 700, color: "var(--gd)" }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: "var(--ts)", marginTop: 3 }}>{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cvr" style={{ width: 440, flexShrink: 0 }}>
          <div style={{ background: "var(--gd)", borderRadius: 24, padding: "36px 40px" }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 28 }}>
              What a cardiologist brings
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(184,150,90,0.15)", border: "1px solid rgba(184,150,90,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#B8965A" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
