import Image from "next/image";

export default function WhenToStart() {
  return (
    <section style={{ background: "var(--ow)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#1C3538" transform="translate(900,100) scale(0.65)" /></g>
        <g opacity="0.03"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#C9A96E" transform="translate(-40,300) scale(0.5)" /></g>
      </svg>
      <div
        className="mx-lg wts-grid"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "0.95fr 1.4fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/5",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(232,237,232,0.5)",
            boxShadow: "0 30px 70px rgba(28,53,56,0.1)",
          }}
        >
          <Image
            src="/dr-mehta-longevity-consultation-scottsdale.webp"
            alt="Dr. Mehta longevity medicine consultation in Scottsdale"
            fill
            sizes="(max-width: 900px) 100vw, 480px"
            className="object-cover"
          />
        </div>
        <div>
          <div
            className="pill"
            style={{
              background: "var(--gold-pale)",
              color: "var(--gold)",
              border: "1px solid rgba(201,169,110,0.15)",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            It&apos;s Never Too Early
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
            When should <span className="fdi" style={{ color: "var(--gm)", fontSize: "1.25em" }}>you</span> start?
          </h2>
          <p style={{ fontSize: 17, color: "var(--tm)", marginBottom: 40, maxWidth: 440 }}>
            Optimizing longevity can begin today.
          </p>
          <div className="g3 wts-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            <div className="cl" style={{ padding: "32px 22px", textAlign: "center" }}>
              <div className="fd" style={{ fontSize: 42, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>30s</div>
              <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 14px" }} />
              <p style={{ fontSize: 14, color: "var(--tm)", lineHeight: 1.6 }}>
                Maximize prevention benefits. The highest return on investment in your health.
              </p>
            </div>
            <div className="cl" style={{ padding: "32px 22px", textAlign: "center", borderColor: "rgba(201,169,110,0.25)" }}>
              <div className="fd" style={{ fontSize: 42, fontWeight: 700, color: "var(--gold)", marginBottom: 8 }}>40–50s</div>
              <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 14px" }} />
              <p style={{ fontSize: 14, color: "var(--tm)", lineHeight: 1.6 }}>
                The turning point. Control how you age. Most clients begin here.
              </p>
              <div
                style={{
                  marginTop: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "var(--gold-pale)",
                  color: "var(--gold)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  borderRadius: 999,
                }}
              >
                Most popular
              </div>
            </div>
            <div className="cl" style={{ padding: "32px 22px", textAlign: "center" }}>
              <div className="fd" style={{ fontSize: 42, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>60s+</div>
              <div style={{ width: 28, height: 2, background: "var(--gold)", borderRadius: 2, margin: "0 auto 14px" }} />
              <p style={{ fontSize: 14, color: "var(--tm)", lineHeight: 1.6 }}>
                Slow decline. Reverse disease processes. Every decade matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
