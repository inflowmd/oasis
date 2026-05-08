"use client";

import { useState } from "react";

type QA = { q: string; a: string };

type Props = { items: QA[] };

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 1140, margin: "0 auto" }}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`faq-row${isOpen ? " is-open" : ""}`}
            style={{
              borderBottom: "1px solid rgba(232,237,232,0.5)",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="faq-trigger"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                padding: "22px 18px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                color: "var(--td)",
                position: "relative",
              }}
            >
              <span
                className="fd faq-question"
                style={{
                  fontSize: "clamp(17px,1.5vw,20px)",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.35,
                  color: isOpen ? "var(--gd)" : "var(--td)",
                  transition: "color 0.3s, transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
              >
                {it.q}
              </span>
              <span
                aria-hidden
                className="faq-icon"
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: isOpen ? "var(--gold)" : "var(--gold-pale)",
                  border: "1px solid rgba(201,169,110,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  {isOpen ? (
                    <path d="M5 12h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                  ) : (
                    <g stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </g>
                  )}
                </svg>
              </span>
            </button>
            <div
              style={{
                overflow: "hidden",
                maxHeight: isOpen ? 360 : 0,
                opacity: isOpen ? 1 : 0,
                transition:
                  "max-height 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s ease",
              }}
            >
              <p
                style={{
                  fontSize: 15.5,
                  color: "var(--tm)",
                  lineHeight: 1.75,
                  padding: "0 18px 24px",
                  maxWidth: 1040,
                }}
              >
                {it.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
