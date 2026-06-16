import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Payment Plans | Oasis Vein & Vitality",
  description:
    "Get treated now and pay over time with Cherry payment plans for health, beauty and wellness services at Oasis Vein & Vitality in Scottsdale and Prescott, AZ.",
  alternates: { canonical: "/payment-plans" },
};

export default function PaymentPlansPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(165deg, var(--ow) 0%, var(--tl) 100%)",
          padding: "180px 0 80px",
        }}
      >
        <div className="mx-lg" style={{ maxWidth: 1080 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Payment Plans" }]} />
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
            Flexible Financing
          </p>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(36px,4.4vw,60px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 24,
            }}
          >
            Payment Plans
          </h1>
          <p style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.7, maxWidth: 760 }}>
            Get treated now and pay over time with Cherry. Cherry is a payment plan designed for your health, beauty,
            and wellness needs and procedures and allows you to make convenient monthly payments.
          </p>
        </div>
      </section>

      {/* CHERRY WIDGET */}
      <section style={{ background: "var(--ow)", padding: "60px 0 100px" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <div
            id="cherry-widget"
            style={{
              minHeight: 800,
              padding: "32px 0",
            }}
          />
        </div>
        <Script
          id="_hw"
          src="https://files.withcherry.com/widgets/widget.js"
          strategy="afterInteractive"
          async
        />
      </section>

      {/* CTA */}
      <section
        className="dark-mesh-3"
        style={{
          background: "var(--dark)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 760, textAlign: "center" }}>
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
            Ready to get started?
          </h2>
          <Link
            href="/contact"
            className="btn-gold"
            style={{ padding: "18px 36px", fontSize: 12 }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
