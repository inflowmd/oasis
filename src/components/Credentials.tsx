import type { ReactNode } from "react";

type Cred = { title: string; body: string; icon: ReactNode };

const creds: Cred[] = [
  {
    title: "Double Board-Certified",
    body: "Internal Medicine and Cardiovascular Disease.",
    icon: (<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#375253" />),
  },
  {
    title: "ACC Governor, Arizona",
    body: "American College of Cardiology — Arizona Chapter.",
    icon: (<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#375253" />),
  },
  {
    title: "Phoenix Top Docs",
    body: "Phoenix Magazine — peer-nominated.",
    icon: (<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#375253" />),
  },
  {
    title: "Director of CV Intervention",
    body: "Former Chief of Medical Staff and CMO.",
    icon: (<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#375253" />),
  },
  {
    title: "Fellowship Trained",
    body: "Arizona Heart Institute — interventional cardiology.",
    icon: (<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#375253" />),
  },
  {
    title: "MBA",
    body: "Healthcare delivery and patient outcomes.",
    icon: (<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="#375253" />),
  },
];

export default function Credentials() {
  return (
    <section id="doctor" style={{ background: "var(--ow)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#CCDDDF" transform="translate(880,30) scale(0.8)" /></g>
        <g opacity="0.03"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#B8965A" transform="translate(-30,350) scale(0.6)" /></g>
        <g opacity="0.035"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#C3B9AE" transform="translate(700,400) scale(0.45)" /></g>
      </svg>
      <div className="mx-sm">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="pill" style={{ background: "var(--gold-pale)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            Credentials
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)" }}>
            The physician behind <span className="fdi" style={{ color: "var(--gm)" }}>the program.</span>
          </h2>
        </div>
        <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {creds.map((c) => (
            <div key={c.title} className="cl">
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div className="ic" style={{ background: "var(--gp)", width: 42, height: 42 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">{c.icon}</svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--gd)" }}>{c.title}</h3>
              </div>
              <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.6, paddingLeft: 56 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
