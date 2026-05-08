"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, posts } from "@/lib/blog";

export default function BlogIndexClient() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          marginBottom: 56,
        }}
      >
        {categories.map((c) => {
          const isOn = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              style={{
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${isOn ? "var(--gold)" : "rgba(28,53,56,0.12)"}`,
                background: isOn ? "var(--gold)" : "transparent",
                color: isOn ? "#fff" : "var(--gd)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div
        className="g3 blog-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}
      >
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="cl"
            style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden", textDecoration: "none" }}
          >
            <div
              style={{
                aspectRatio: "16/10",
                background: "linear-gradient(135deg,var(--gp),var(--gl))",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.35,
                }}
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                    fill="#1C3538"
                  />
                </svg>
              </div>
            </div>
            <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  alignSelf: "flex-start",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  background: "var(--gold-pale)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  padding: "4px 10px",
                  borderRadius: 999,
                  marginBottom: 14,
                }}
              >
                {p.category}
              </span>
              <h3
                className="fd"
                style={{
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--td)",
                  lineHeight: 1.3,
                  marginBottom: 10,
                  letterSpacing: "-0.005em",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--tm)", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                {p.excerpt}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 11,
                  color: "var(--ts)",
                  letterSpacing: "0.04em",
                }}
              >
                <span>{p.author}</span>
                <span>
                  {p.date} · {p.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
