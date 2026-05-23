export default function CTA() {
  return (
    <section id="apply" className="cta-section dark-mesh-3">
      <div className="cta-inner">
        <div
          className="pill"
          style={{
            background: "rgba(201,169,110,0.1)",
            color: "var(--gold)",
            border: "1px solid rgba(201,169,110,0.18)",
            letterSpacing: "0.18em",
            marginBottom: 32,
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
          Begin Your Journey
        </div>

        <h2
          className="fd"
          style={{
            fontSize: "clamp(34px,4vw,54px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: 28,
            whiteSpace: "nowrap",
          }}
        >
          Longevity is not{" "}
          <span
            className="fdi"
            style={{ color: "var(--gold)", fontSize: "1.25em", lineHeight: 1 }}
          >
            accidental.
          </span>
        </h2>

        <p
          style={{
            fontSize: 19,
            color: "rgba(232,237,232,0.55)",
            lineHeight: 1.7,
            maxWidth: 620,
            margin: "0 auto 52px",
          }}
        >
          Limited enrollment. Inquiries reviewed by Dr. Mehta personally.
        </p>

        <div className="cta-btns">
          <a
            href="/contact"
            className="btn-gold"
            style={{ padding: "18px 40px", fontSize: 12 }}
          >
            Join Our Practice
          </a>
          <a
            href="tel:4807207044"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "inherit",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "17px 36px",
              borderRadius: 999,
              transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          >
            Call 480-720-7044
          </a>
        </div>
      </div>
    </section>
  );
}
