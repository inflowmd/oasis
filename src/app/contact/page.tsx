import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Join Our Practice | Oasis Longevity Medicine",
  description:
    "Inquire about joining Dr. Steven Mehta's longevity practice. Limited enrollment — every inquiry is reviewed personally. Scottsdale & Prescott, Arizona.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(165deg, var(--ow) 0%, var(--tl) 100%)",
          padding: "180px 0 60px",
        }}
      >
        <div className="mx" style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Apply" }]} />
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginTop: 28,
              marginBottom: 16,
            }}
          >
            New Patient Inquiries
          </p>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(34px,4vw,56px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              marginBottom: 20,
            }}
          >
            Join our <span className="fdi" style={{ color: "var(--gm)" }}>practice.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            Limited enrollment. Every inquiry is reviewed by Dr. Mehta personally.
          </p>
        </div>
      </section>

      {/* FORM + IMAGE */}
      <section style={{ background: "var(--ow)", padding: "60px 0 100px" }}>
        <div
          className="mx-lg phil-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,5vw,72px)",
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(232,237,232,0.5)",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src="/ssmehta.jpg"
              alt="Dr. Steven Mehta"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className="object-cover object-top"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(15,31,31,0.6))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                right: 28,
                bottom: 28,
                color: "#fff",
              }}
            >
              <p
                className="fdi"
                style={{
                  fontSize: "clamp(20px,2vw,26px)",
                  lineHeight: 1.4,
                  fontWeight: 500,
                  marginBottom: 8,
                }}
              >
                &ldquo;I review every application personally.&rdquo;
              </p>
              <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)" }}>
                Dr. Steven Mehta
              </p>
            </div>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* LOCATIONS SIDE BY SIDE */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div className="mx" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 14,
              }}
            >
              Visit
            </p>
            <h2
              className="fd"
              style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "var(--td)" }}
            >
              Two Arizona <span className="fdi" style={{ color: "var(--gm)" }}>locations.</span>
            </h2>
          </div>
          <div
            className="g2 contact-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
          >
            {[
              {
                city: "Scottsdale",
                line1: "7659 E. Pinnacle Peak Rd, Suite 110",
                line2: "Scottsdale, AZ 85255",
                href: "/locations/scottsdale",
              },
              {
                city: "Prescott",
                line1: "2001 Excellence Way, Suite 200",
                line2: "Prescott, AZ 86301",
                href: "/locations/prescott",
              },
            ].map((loc) => (
              <a
                key={loc.city}
                href={loc.href}
                className="cl"
                style={{
                  display: "block",
                  padding: "32px 32px",
                  textAlign: "left",
                }}
              >
                <h3
                  className="fd"
                  style={{ fontSize: 24, fontWeight: 700, color: "var(--td)", marginBottom: 12 }}
                >
                  {loc.city}
                </h3>
                <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.7, marginBottom: 18 }}>
                  {loc.line1}
                  <br />
                  {loc.line2}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  View location
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PHONE */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 1080, textAlign: "center" }}>
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
            Or speak with us directly
          </p>
          <a
            href="tel:4807207044"
            className="fd"
            style={{
              display: "inline-block",
              fontSize: "clamp(36px,4.4vw,56px)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.005em",
              transition: "color 0.3s",
            }}
          >
            480-720-7044
          </a>
          <p style={{ fontSize: 14, color: "rgba(232,237,232,0.45)", marginTop: 14 }}>
            Monday – Friday, 8:00 AM – 5:00 PM
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
