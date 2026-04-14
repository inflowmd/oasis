"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const phrases = [
  "extend your healthspan.",
  "stop disease before it starts.",
  "keep your mind sharp and energy high.",
  "help you live better, not just longer.",
  "optimize how you feel and perform.",
];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let pi = 0, ci = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;
    const el = typedRef.current;
    if (!el) return;
    const tick = () => {
      const p = phrases[pi];
      if (!del) {
        ci++;
        el.textContent = p.substring(0, ci);
        if (ci === p.length) { del = true; timer = setTimeout(tick, 3800); return; }
        timer = setTimeout(tick, 55);
      } else {
        ci--;
        el.textContent = p.substring(0, ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; timer = setTimeout(tick, 400); return; }
        timer = setTimeout(tick, 25);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ background: "linear-gradient(165deg,#fff 0%,var(--ow) 50%,var(--gp) 100%)", padding: "120px 0 72px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(184,150,90,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 900 700" fill="none" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.055"><path d="M-20 250 L50 200 L120 250 L120 350 L50 400 L-20 350Z" fill="#375253" transform="scale(1.5) translate(-30,10)" /></g>
        <g opacity="0.035"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#375253" transform="translate(620,40) scale(0.8)" /></g>
        <g opacity="0.06"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#CCDDDF" transform="translate(700,320) scale(0.45)" /></g>
        <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#375253" transform="translate(500,420) scale(0.55)" /></g>
        <g opacity="0.03"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#C3B9AE" transform="translate(150,480) scale(0.6)" /></g>
      </svg>
      <div className="mx hf" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "clamp(48px,8vw,140px)" }}>
        <div className="hl" style={{ flex: 1, maxWidth: 600 }}>
          <h1 className="fd" style={{ fontSize: "clamp(42px,4.5vw,72px)", fontWeight: 700, lineHeight: 1.05, color: "var(--td)", letterSpacing: "-0.02em", marginBottom: 18 }}>
            Extend your<br />
            <span className="fdi" style={{ color: "var(--gold)" }}>healthspan.</span>
          </h1>
          <p style={{ fontSize: "clamp(17px,1.3vw,20px)", fontWeight: 400, lineHeight: 1.7, color: "var(--tm)", marginBottom: 14, maxWidth: 460 }}>
            Precision diagnostics and cardiovascular prevention designed to{" "}
            <span ref={typedRef} id="typed" style={{ color: "var(--gd)", fontWeight: 500 }}>extend your healthspan.</span>
            <span className="tw-cursor" />
          </p>
          <div className="glass-doc" style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 28, background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.85)", boxShadow: "0 4px 20px rgba(55,82,83,0.04)", borderRadius: 16, padding: "16px 22px" }}>
            <div style={{ width: 1, height: 36, background: "var(--gold)", opacity: 0.4 }} />
            <div>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--td)" }}>Dr. Steven Mehta</span>
              <span style={{ fontSize: 13, color: "var(--ts)", marginLeft: 8 }}>MD, MBA, FACC</span>
              <div style={{ fontSize: 12, color: "var(--ts)", marginTop: 2 }}>Board-Certified Cardiologist &amp; Longevity Physician · Scottsdale, AZ</div>
            </div>
          </div>
          <div className="mob-hide hero-btns" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#apply" className="btn-gold">Apply for Access</a>
            <a href="#story" className="btn-outline">Dr. Mehta&apos;s Story</a>
          </div>
        </div>
        <div className="hr" style={{ width: "clamp(300px,38%,460px)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: 24, overflow: "hidden", background: "linear-gradient(180deg,var(--gl),var(--gp))", border: "1px solid rgba(204,221,223,0.3)" }}>
            <Image
              src="/ssmehta.jpg"
              alt="Dr. Steven Mehta — Board-Certified Cardiologist & Longevity Physician"
              fill
              priority
              sizes="(max-width: 900px) 70vw, 460px"
              className="object-cover object-top"
            />
          </div>
          <div className="hero-creds" style={{ display: "flex", gap: 28, marginTop: 18, flexWrap: "wrap", padding: "0 4px" }}>
            <div style={{ display: "flex", alignItems: "stretch", gap: 12 }}>
              <div style={{ width: 3, borderRadius: 3, background: "var(--gd)" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gd)" }}>Double Board-Certified</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tn)", marginTop: 4 }}>Cardiology &amp; Vascular Medicine</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "stretch", gap: 12 }}>
              <div style={{ width: 3, borderRadius: 3, background: "var(--tn)" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gd)" }}>Phoenix Top Doc</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--tn)", marginTop: 4 }}>Phoenix Magazine</div>
              </div>
            </div>
          </div>
          <div className="mob-show hero-btns" style={{ display: "none", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 24, justifyContent: "center" }}>
            <a href="#apply" className="btn-gold">Apply for Access</a>
            <a href="#story" className="btn-outline">Dr. Mehta&apos;s Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}
