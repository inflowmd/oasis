import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TITLE = "Payment Plans | Cherry Financing | Oasis Vein AZ";
const DESCRIPTION =
  "Get treated now and pay over time with Cherry financing — 0% APR options and no hard credit checks for services at Oasis Vein & Vitality in Scottsdale, AZ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/payment-plans" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/payment-plans" },
  twitter: { title: TITLE, description: DESCRIPTION },
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

      {/* PAYMENT PLAN DETAILS */}
      <section style={{ background: "var(--tl)", padding: "80px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1080 }}>
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
            Payment Plan Details
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(26px,2.6vw,36px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Flexible plans for health, wellness <span className="fdi" style={{ color: "var(--gm)" }}>and aesthetic services.</span>
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 28px",
              display: "grid",
              gap: 10,
            }}
          >
            {[
              "True 0% APR options available on select plans",
              "Plans also available starting at 5.99% APR",
              "No hard credit checks — checking your rate won't affect your credit score",
              "Apply in seconds from your phone",
              "Plans from 3 to 24 months",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  fontSize: 16,
                  color: "var(--tm)",
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "var(--gold-pale)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 4,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--gold)" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3
            className="fd"
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--gd)",
              marginTop: 24,
              marginBottom: 12,
            }}
          >
            How Cherry Works
          </h3>
          <ol
            style={{
              paddingLeft: 22,
              margin: "0 0 28px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 16,
              color: "var(--tm)",
              lineHeight: 1.7,
            }}
          >
            <li><strong style={{ color: "var(--gd)" }}>Apply</strong> — Complete a quick application on your phone in seconds.</li>
            <li><strong style={{ color: "var(--gd)" }}>Select your plan</strong> — Choose the monthly payment option that works best for your budget.</li>
            <li><strong style={{ color: "var(--gd)" }}>Get treated</strong> — Start your treatment right away and pay over time.</li>
          </ol>

          <p
            style={{
              fontSize: 12,
              color: "var(--ts)",
              lineHeight: 1.65,
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid rgba(28,53,56,0.1)",
            }}
          >
            Cherry is a registered trade name of Cherry Technologies Inc., NMLS #2464556. Loans are originated by
            Willamette Valley Bank, member FDIC. Terms and conditions apply. See withcherry.com for details.
          </p>
        </div>
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
