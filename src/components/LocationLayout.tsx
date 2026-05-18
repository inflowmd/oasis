import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

type Props = {
  city: string;
  intro: string;
  address: { line1: string; line2: string };
  hours: { day: string; time: string }[];
  parking: string;
  serving: string;
  neighborhoods: string[];
  mapEmbedSrc?: string; // optional Google Maps embed URL
  heroImage?: string;
  heroImageAlt?: string;
  extra?: ReactNode;
};

export default function LocationLayout({
  city,
  intro,
  address,
  hours,
  parking,
  serving,
  neighborhoods,
  mapEmbedSrc,
  heroImage = "/active-couple-hiking-arizona-desert-longevity-lifestyle.jpg",
  heroImageAlt,
  extra,
}: Props) {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "180px 0 60px",
          overflow: "hidden",
          background: "var(--dark)",
        }}
      >
        <Image
          src={heroImage}
          alt={heroImageAlt ?? `${city} Arizona — active longevity lifestyle in the desert`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.45, zIndex: 0 }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,31,31,0.55) 0%, rgba(15,31,31,0.7) 100%)",
            zIndex: 0,
          }}
        />
        <div className="mx-lg" style={{ maxWidth: 1240, position: "relative", zIndex: 1 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations", href: "#" }, { label: city }]} dark />
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginTop: 24,
              marginBottom: 20,
            }}
          >
            Office
          </p>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(36px,4.4vw,60px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 22,
              maxWidth: 760,
            }}
          >
            {city} <span className="fdi" style={{ color: "var(--gold)" }}>Office</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(232,237,232,0.75)", lineHeight: 1.7, maxWidth: 720 }}>{intro}</p>
        </div>
      </section>

      {/* DETAILS */}
      <section style={{ background: "var(--ow)", padding: "80px 0 100px" }}>
        <div
          className="mx loc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(32px,4vw,56px)",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              minHeight: 520,
              background: "var(--gp)",
              border: "1px solid rgba(232,237,232,0.5)",
              position: "relative",
            }}
          >
            {mapEmbedSrc ? (
              <iframe
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${city} office map`}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 24,
                }}
              >
                <div>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 12px" }}>
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#1C3538"
                      opacity="0.4"
                    />
                  </svg>
                  <p style={{ fontSize: 12, color: "var(--ts)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    Map placeholder — replace with Google Maps embed for {address.line1}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <DetailBlock label="Address">
              {address.line1}
              <br />
              {address.line2}
            </DetailBlock>
            <DetailBlock label="Phone">
              <a href="tel:4807207044" style={{ color: "var(--gd)", fontWeight: 600 }}>
                480-720-7044
              </a>
            </DetailBlock>
            <DetailBlock label="Hours">
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    style={{ display: "flex", justifyContent: "space-between", gap: 24, fontSize: 15 }}
                  >
                    <span style={{ color: "var(--tm)" }}>{h.day}</span>
                    <span style={{ color: "var(--gd)" }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </DetailBlock>
            <DetailBlock label="Parking">{parking}</DetailBlock>

            <Link
              href="/contact"
              className="btn-gold"
              style={{ marginTop: 16, padding: "16px 32px", fontSize: 12 }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SERVING */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1180 }}>
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
            Serving the Community
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            {city} <span className="fdi" style={{ color: "var(--gm)" }}>and beyond.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85, marginBottom: 32 }}>{serving}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {neighborhoods.map((n) => (
              <span
                key={n}
                style={{
                  display: "inline-block",
                  background: "#fff",
                  border: "1px solid rgba(28,53,56,0.1)",
                  color: "var(--gd)",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: 999,
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {extra}

      {/* CTA */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 980, textAlign: "center" }}>
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 28,
            }}
          >
            Schedule a <span className="fdi" style={{ color: "var(--gold)" }}>consultation.</span>
          </h2>
          <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
            Join Our Practice
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <h3
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 8,
        }}
      >
        {label}
      </h3>
      <div style={{ fontSize: 16, color: "var(--tm)", lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}
