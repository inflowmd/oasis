"use client";

import { useEffect, useRef } from "react";

export default function Stats() {
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (el: HTMLDivElement | null, end: number, suf: string, dur: number) => {
      if (!el) return;
      let st: number | null = null;
      const step = (ts: number) => {
        if (st === null) st = ts;
        const p = Math.min((ts - st) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        if (suf === "%") el.textContent = Math.round(e * end) + suf;
        else if (suf === "/10") el.textContent = Math.round(e * end) + suf;
        else el.textContent = (e * end).toFixed(1);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const t = setTimeout(() => {
      animate(s1.current, 95, "%", 2200);
      animate(s2.current, 7, "/10", 2200);
      animate(s3.current, 12.7, "", 2200);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ background: "var(--gp)", padding: "72px 0" }}>
      <div className="mx sr" style={{ display: "flex", justifyContent: "center", gap: "clamp(40px,8vw,120px)", alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div ref={s1} className="fd" style={{ fontSize: "clamp(48px,5vw,80px)", fontWeight: 700, color: "var(--gd)", lineHeight: 1 }}>95%</div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ts)", marginTop: 10 }}>
            Adults 65+ with chronic conditions
          </div>
        </div>
        <div className="stat-div" style={{ width: 1, height: 50, background: "var(--gl)" }} />
        <div style={{ textAlign: "center" }}>
          <div ref={s2} className="fd" style={{ fontSize: "clamp(48px,5vw,80px)", fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>7/10</div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ts)", marginTop: 10 }}>
            US deaths from chronic disease
          </div>
        </div>
        <div className="stat-div" style={{ width: 1, height: 50, background: "var(--gl)" }} />
        <div style={{ textAlign: "center" }}>
          <div ref={s3} className="fd" style={{ fontSize: "clamp(48px,5vw,80px)", fontWeight: 700, color: "var(--gm)", lineHeight: 1 }}>12.7</div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ts)", marginTop: 10 }}>
            Year healthspan gap
          </div>
        </div>
      </div>
    </section>
  );
}
