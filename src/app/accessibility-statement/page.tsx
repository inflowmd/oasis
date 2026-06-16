import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Accessibility Statement | Oasis Vein & Vitality",
  description:
    "Accessibility statement for Oasis Vein & Vitality. We are partially conformant with WCAG 2.1 level AA and welcome feedback on the accessibility of our site.",
  alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <Navbar />

      <section style={{ background: "var(--ow)", padding: "180px 0 100px" }}>
        <div
          className="mx-sm"
          style={{ maxWidth: 760, margin: "0 auto" }}
        >
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Accessibility Statement" }]} />
          <h1
            className="fd"
            style={{
              fontSize: "clamp(32px,3.8vw,52px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginTop: 24,
              marginBottom: 36,
            }}
          >
            Accessibility Statement for Oasis Vein &amp; Vitality
          </h1>

          <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 24 }}>
              This is an accessibility statement from Oasis Vein &amp; Vitality.
            </p>

            <h2
              className="fd"
              style={{
                fontSize: "clamp(22px,2.2vw,28px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.2,
                marginTop: 36,
                marginBottom: 16,
              }}
            >
              Conformance status
            </h2>
            <p style={{ marginBottom: 24 }}>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
              Level AA, and Level AAA. Oasis Vein &amp; Vitality is partially conformant with WCAG 2.1 level AA.
              Partially conformant means that some parts of the content do not fully conform to the accessibility
              standard.
            </p>

            <h2
              className="fd"
              style={{
                fontSize: "clamp(22px,2.2vw,28px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.2,
                marginTop: 36,
                marginBottom: 16,
              }}
            >
              Feedback
            </h2>
            <p style={{ marginBottom: 16 }}>
              We welcome your feedback on the accessibility of Oasis Vein &amp; Vitality. Please let us know if you
              encounter accessibility barriers on Oasis Vein &amp; Vitality:
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--gd)" }}>E-mail:</strong>{" "}
              <a href="mailto:info@oasisvv.com" style={{ color: "var(--gold)" }}>
                info@oasisvv.com
              </a>
            </p>
            <p style={{ marginBottom: 24 }}>
              <strong style={{ color: "var(--gd)" }}>Visitor Address:</strong> 7659 E. Pinnacle Peak Rd, Suite 110,
              Scottsdale, AZ 85255
            </p>

            <p>We try to respond to feedback within 10 business days.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
