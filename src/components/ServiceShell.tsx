import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

export function ServiceHero({
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
            { label: "Services", href: "#" },
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
            fontSize: "clamp(38px,5vw,72px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.04,
            letterSpacing: "-0.01em",
            marginBottom: 26,
          }}
        >
          {headline}
        </h1>
        <p style={{ fontSize: 19, color: "rgba(232,237,232,0.7)", lineHeight: 1.7, maxWidth: 880 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function ServiceCTA({
  headline,
  italicTail,
}: {
  headline: string;
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
        style={{ position: "relative", zIndex: 1, maxWidth: 1180, textAlign: "center" }}
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
          {italicTail && (
            <span className="fdi" style={{ color: "var(--gold)" }}>
              {italicTail}
            </span>
          )}
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
          Limited enrollment. Every application is reviewed by Dr. Mehta personally.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
            Join Our Practice
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

export function SectionTitle({
  eyebrow,
  children,
  dark = false,
}: {
  eyebrow: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 18,
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="fd"
        style={{
          fontSize: "clamp(30px,3.2vw,46px)",
          fontWeight: 700,
          color: dark ? "#fff" : "var(--td)",
          lineHeight: 1.12,
          letterSpacing: "-0.005em",
          maxWidth: 880,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
