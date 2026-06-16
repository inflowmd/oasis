import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

export function AestheticsHero({
  service,
  headline,
  subtitle,
}: {
  service: string;
  headline: string;
  subtitle: string;
}) {
  return (
    <section
      className="dark-mesh-1"
      style={{
        background: "var(--dark)",
        padding: "180px 0 110px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="mx-lg" style={{ position: "relative", zIndex: 1, maxWidth: 1180 }}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Vein & Aesthetics", href: "/aesthetics" },
            { label: service },
          ]}
          dark
        />
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginTop: 24,
            marginBottom: 22,
          }}
        >
          {service}
        </p>
        <h1
          className="fd"
          style={{
            fontSize: "clamp(36px,4.6vw,64px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: 24,
          }}
        >
          {headline}
        </h1>
        <p style={{ fontSize: 19, color: "rgba(232,237,232,0.75)", lineHeight: 1.65, maxWidth: 880 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function AestheticsCTA({
  headline = "Ready to learn more?",
  italicTail = "Schedule a consultation.",
}: {
  headline?: string;
  italicTail?: string;
}) {
  return (
    <section
      className="dark-mesh-3"
      style={{
        background: "var(--dark)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="mx-sm"
        style={{ position: "relative", zIndex: 1, maxWidth: 1080, textAlign: "center" }}
      >
        <h2
          className="fd page-cta-h2"
          style={{
            fontSize: "clamp(28px,3vw,44px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          {headline}{" "}
          <span className="fdi" style={{ color: "var(--gold)" }}>{italicTail}</span>
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(232,237,232,0.6)",
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 540,
            margin: "0 auto 36px",
          }}
        >
          Meet with Dr. Mehta to discuss your goals and the right treatment plan for you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
            Schedule a Consultation
          </Link>
          <a
            href="tel:4807207044"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.85)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "17px 32px",
              borderRadius: 999,
            }}
          >
            480-720-7044
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProseSection({
  eyebrow,
  title,
  italicTail,
  children,
  background = "var(--ow)",
}: {
  eyebrow?: string;
  title?: ReactNode;
  italicTail?: string;
  children: ReactNode;
  background?: string;
}) {
  return (
    <section style={{ background, padding: "100px 0" }}>
      <div className="mx-lg" style={{ maxWidth: 1080 }}>
        {eyebrow && (
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
            }}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className="fd"
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              marginBottom: 28,
            }}
          >
            {title}{" "}
            {italicTail && (
              <span className="fdi" style={{ color: "var(--gm)" }}>{italicTail}</span>
            )}
          </h2>
        )}
        <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>{children}</div>
      </div>
    </section>
  );
}

export function Benefits({
  items,
  background = "var(--tl)",
}: {
  items: { title: string; body: string }[];
  background?: string;
}) {
  return (
    <section style={{ background, padding: "100px 0" }}>
      <div className="mx-lg">
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 16,
          }}
        >
          Benefits
        </p>
        <h2
          className="fd"
          style={{
            fontSize: "clamp(28px,3vw,42px)",
            fontWeight: 700,
            color: "var(--td)",
            lineHeight: 1.15,
            marginBottom: 40,
          }}
        >
          What you can expect.
        </h2>
        <div
          className="g3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}
        >
          {items.map((it, i) => (
            <div
              key={it.title}
              className="cl"
              style={{ padding: "28px 28px" }}
            >
              <div
                className="fd"
                style={{
                  fontSize: 30,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="fd" style={{ fontSize: 19, fontWeight: 700, color: "var(--td)", marginBottom: 8 }}>
                {it.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.7 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
