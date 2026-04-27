"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const stories = [
  {
    label: "Origins",
    title: "A Personal Beginning",
    text: "I was raised in a family of physicians — my father and two sisters all chose careers in medicine — where scientific inquiry and responsibility to patients were woven into daily life.\n\nMusic became another enduring influence. The discipline of listening, improvisation, and collaboration mirrors how I care for patients today.",
  },
  {
    label: "Perspective",
    title: "Expanding the Lens",
    text: "Early in my career, I had the opportunity to teach in China — an experience that profoundly broadened my perspective on health and healing.\n\nWhile my clinical practice remains grounded in evidence-based medicine, these experiences shaped a systems-oriented mindset that recognizes diverse medical philosophies.",
  },
  {
    label: "The Gap",
    title: "Where Medicine Falls Short",
    text: "Scientific advances have been extraordinary, yet healthcare remains fragmented and reactive.\n\nEven highly informed individuals lack a trusted physician who can synthesize evolving knowledge into a clear, personalized understanding of risk, options, and long-term direction.",
  },
  {
    label: "Science",
    title: "Cardiovascular Science",
    text: "Cardiovascular disease remains the leading cause of mortality in the US — reflecting the cumulative impact of metabolic health, inflammation, hormones, genetics, and lifestyle over decades.\n\nPrevention requires a longitudinal, systems-based approach that anticipates risk and supports vitality across the lifespan.",
  },
  {
    label: "Program",
    title: "The Oasis Program",
    text: "The Oasis Longevity Program represents a deliberate rethinking of how advanced medical science can be applied to individual lives.\n\nClients make informed, strategic decisions about their health — not in moments of crisis, but throughout the arc of their lives. Longevity is thoughtfully shaped.",
  },
  {
    label: "Partnership",
    title: "A Collaborative Model",
    text: "At the heart of this work is a collaborative physician–client relationship grounded in trust, transparency, and shared commitment.\n\nLongevity is not simply the extension of years. It is the preservation of the capacity to live them fully.",
  },
];

type Cred = { title: string; body: string; icon: ReactNode };

const creds: Cred[] = [
  {
    title: "Double Board-Certified",
    body: "Internal Medicine and Cardiovascular Disease.",
    icon: (<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#B8965A" />),
  },
  {
    title: "ACC Governor, Arizona",
    body: "American College of Cardiology — Arizona Chapter.",
    icon: (<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#B8965A" />),
  },
  {
    title: "Phoenix Top Docs",
    body: "Phoenix Magazine — peer-nominated.",
    icon: (<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#B8965A" />),
  },
  {
    title: "Director of CV Intervention",
    body: "Former Chief of Medical Staff and CMO.",
    icon: (<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#B8965A" />),
  },
  {
    title: "Fellowship Trained",
    body: "Arizona Heart Institute — interventional cardiology.",
    icon: (<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#B8965A" />),
  },
  {
    title: "MBA",
    body: "Healthcare delivery and patient outcomes.",
    icon: (<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="#B8965A" />),
  },
];

export default function Story() {
  const [si, setSi] = useState(0);
  const [barKey, setBarKey] = useState(0);

  useEffect(() => {
    setBarKey((k) => k + 1);
    const t = setTimeout(() => setSi((i) => (i + 1) % stories.length), 8000);
    return () => clearTimeout(t);
  }, [si]);

  const current = stories[si];
  const paragraphs = current.text.split("\n\n");

  return (
    <section id="story" style={{ background: "var(--dark)", padding: "100px 0", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: "linear-gradient(90deg,transparent,rgba(184,150,90,0.15),transparent)" }} />
      <div className="mx">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="pill" style={{ background: "rgba(184,150,90,0.1)", color: "var(--gold)", border: "1px solid rgba(184,150,90,0.15)", marginBottom: 24 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)" }} />
            The Physician
          </div>
          <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
            From treating disease to <span className="fdi" style={{ color: "var(--gold)" }}>preventing it.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(204,221,223,0.5)", maxWidth: 500, margin: "0 auto" }}>
            After years of treating advanced cardiovascular disease, Dr. Mehta shifted his focus to what matters most.
          </p>
        </div>
        <div className="sf" style={{ display: "flex", gap: 60, alignItems: "flex-start", maxWidth: 960, margin: "0 auto" }}>
          <div className="sns" style={{ width: 200, flexShrink: 0, position: "sticky", top: 100 }}>
            {stories.map((s, i) => (
              <div
                key={i}
                onClick={() => setSi(i)}
                style={{ padding: "12px 0", cursor: "pointer", borderLeft: `2px solid ${i === si ? "var(--gold)" : "rgba(255,255,255,0.06)"}`, paddingLeft: 16 }}
              >
                <span className={`sl${i === si ? " active" : ""}`}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(204,221,223,0.6)", minHeight: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
                {current.label}
              </div>
              <h3 className="fd" style={{ fontSize: "clamp(24px,2vw,32px)", fontWeight: 700, color: "#fff", marginBottom: 18 }}>
                {current.title}
              </h3>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ marginBottom: 14 }}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 32, position: "relative", height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
              <div key={barKey} className="story-progress" style={{ animation: "fillBar 8s linear forwards" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
              {stories.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSi(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: `2px solid ${i === si ? "var(--gold)" : "rgba(255,255,255,0.12)"}`,
                    background: i === si ? "var(--gold)" : "transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Credentials block */}
        <div id="doctor" style={{ maxWidth: 1000, margin: "100px auto 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(184,150,90,0.35))" }} />
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", whiteSpace: "nowrap" }}>
              Credentials &amp; Leadership
            </div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(184,150,90,0.35),transparent)" }} />
          </div>
          <div className="creds-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {creds.map((c) => (
              <div
                key={c.title}
                className="cd"
                style={{ padding: "24px 26px" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(184,150,90,0.1)",
                      border: "1px solid rgba(184,150,90,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">{c.icon}</svg>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{c.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "rgba(204,221,223,0.55)", lineHeight: 1.6 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
