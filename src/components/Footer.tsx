export default function Footer() {
  return (
    <footer style={{ background: "var(--darker)", padding: "56px 0 32px" }}>
      <div className="mx">
        <div className="ff" style={{ display: "flex", justifyContent: "space-between", gap: 32, marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>Oasis</div>
            <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Longevity Medicine</div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.25)", marginTop: 14, maxWidth: 240, lineHeight: 1.65 }}>
              Physician-led longevity medicine grounded in cardiovascular science.
            </p>
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            <div>
              <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Scottsdale</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.65 }}>
                7659 E. Pinnacle Peak Rd<br />Suite 110, Scottsdale, AZ 85255
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Prescott</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.65 }}>
                2001 Excellence Way<br />Suite 200, Prescott, AZ 86301
              </p>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>Contact</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.65 }}>
              480-720-7044<br />smehta(at)oasisvv.com
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Oasis Vein &amp; Vitality</p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Privacy</a>
            <a href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
