import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Oasis Vein & Vitality",
  description:
    "Privacy policy for oasisvv.com. How we collect, use, share, and protect information collected through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(22px,2.2vw,28px)",
  fontWeight: 700,
  color: "var(--td)",
  lineHeight: 1.2,
  marginTop: 36,
  marginBottom: 16,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section style={{ background: "var(--ow)", padding: "180px 0 100px" }}>
        <div className="mx-sm" style={{ maxWidth: 760, margin: "0 auto" }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
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
            Privacy Policy
          </h1>

          <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 16 }}>
              This privacy policy discloses the privacy practices for oasisvv.com. This privacy policy applies solely
              to information collected by this website. It will notify you of the following:
            </p>
            <ol style={{ paddingLeft: 22, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                What personally identifiable information is collected from you through the website, how it is used and
                with whom it may be shared.
              </li>
              <li>What choices are available to you regarding the use of your data.</li>
              <li>The security procedures in place to protect the misuse of your information.</li>
              <li>How you can correct any inaccuracies in the information.</li>
            </ol>

            <h2 className="fd" style={h2Style}>Information Collection, Use, and Sharing</h2>
            <p>
              We are the sole owners of the information collected on this site. We only have access to/collect
              information that you voluntarily give us via email or other direct contact from you. We will not sell or
              rent this information to anyone. We will use your information to respond to you, regarding the reason
              you contacted us. Unless you ask us not to, we may contact you via email in the future to tell you about
              specials, new products or services, or changes to this privacy policy.
            </p>

            <h2 className="fd" style={h2Style}>Your Access to and Control Over Information</h2>
            <p style={{ marginBottom: 16 }}>
              You may opt out of any future contacts from us at any time. You can do the following at any time by
              contacting us via the email address or phone number given on our website:
            </p>
            <ul style={{ paddingLeft: 22, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Have us delete any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ul>

            <h2 className="fd" style={h2Style}>Security</h2>
            <p>
              We take precautions to protect your information. When you submit sensitive information via the website,
              your information is protected both online and offline. Wherever we collect sensitive information, that
              information is encrypted and transmitted to us in a secure way. While we use encryption to protect
              sensitive information transmitted online, we also protect your information offline. Only employees who
              need the information to perform a specific job are granted access to personally identifiable
              information. The computers/servers in which we store personally identifiable information are kept in a
              secure environment.
            </p>

            <h2 className="fd" style={h2Style}>Updates</h2>
            <p>
              Our Privacy Policy may change from time to time and all updates will be posted on this page. If you feel
              that we are not abiding by this privacy policy, you should contact us immediately via telephone or via
              email at{" "}
              <a href="mailto:info@oasisvv.com" style={{ color: "var(--gold)" }}>
                info@oasisvv.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
