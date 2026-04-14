"use client";

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
      </div>
    </section>
  );
}
