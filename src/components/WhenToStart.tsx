export default function WhenToStart() {
  return (
    <section style={{ background: "var(--ow)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#375253" transform="translate(900,100) scale(0.65)" /></g>
        <g opacity="0.03"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#B8965A" transform="translate(-40,300) scale(0.5)" /></g>
      </svg>
      <div className="mx-sm" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div className="pill" style={{ background: "var(--gold-pale)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 24 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
          It&apos;s Never Too Early
        </div>
        <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
          When should <span className="fdi" style={{ color: "var(--gm)" }}>you</span> start?
        </h2>
        <p style={{ fontSize: 17, color: "var(--tm)", maxWidth: 440, margin: "0 auto 52px" }}>Optimizing longevity can begin today.</p>
        <div className="g3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <div className="cl" style={{ padding: "36px 28px", textAlign: "center" }}>
            <div className="fd" style={{ fontSize: 44, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>30s</div>
            <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>Maximize prevention benefits. The highest return on investment in your health.</p>
          </div>
          <div className="cl" style={{ padding: "36px 28px", textAlign: "center", borderColor: "rgba(184,150,90,0.2)" }}>
            <div className="fd" style={{ fontSize: 44, fontWeight: 700, color: "var(--gold)", marginBottom: 8 }}>40–50s</div>
            <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>The turning point. Control how you age. Most clients begin here.</p>
            <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 5, background: "var(--gold-pale)", color: "var(--gold)", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 999 }}>Most popular</div>
          </div>
          <div className="cl" style={{ padding: "36px 28px", textAlign: "center" }}>
            <div className="fd" style={{ fontSize: 44, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>60s+</div>
            <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>Slow decline. Reverse disease processes. Every decade matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
