export default function CTA() {
  return (
    <section id="apply" style={{ background: "linear-gradient(165deg,var(--darker),var(--dark),#1f3536)", padding: "120px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(184,150,90,0.05),transparent 70%)", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto", padding: "0 6%" }}>
        <div className="fd" style={{ fontSize: "clamp(34px,4vw,56px)", fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 20 }}>
          Longevity is not <span className="fdi" style={{ color: "var(--gold)" }}>accidental.</span>
        </div>
        <p style={{ fontSize: 17, color: "rgba(204,221,223,0.55)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 40px" }}>
          Limited enrollment. Applications reviewed by Dr. Mehta personally.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-gold" style={{ padding: "18px 36px", fontSize: 13 }}>
            Apply for the Longevity Program
          </a>
          <a href="tel:4807207044" className="btn-glass">Call 480-720-7044</a>
        </div>
      </div>
    </section>
  );
}
