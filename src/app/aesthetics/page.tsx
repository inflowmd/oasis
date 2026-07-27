import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AestheticsHero, AestheticsCTA } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics";
const TITLE = "Vein & Aesthetic Services | Oasis Vein & Vitality";
const DESCRIPTION =
  "Gold-standard vein and aesthetic treatments delivering fast, long-lasting results without surgery or downtime. Dr. Steven Mehta in Scottsdale and Prescott, AZ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const services = [
  {
    title: "Varicose Veins Treatment",
    body: "Regain comfort and confidence with the help of state-of-the-art, minimally invasive treatments for vein abnormalities.",
    href: "/aesthetics/varicose-veins",
  },
  {
    title: "Sclerotherapy",
    body: "Rid your face, hands, body, legs or feet of small varicose and spider veins with this proven, virtually painless treatment.",
    href: "/aesthetics/sclerotherapy",
  },
  {
    title: "Microneedling",
    body: "Get smoother, more youthful, even-toned skin with an innovative radiofrequency microneedling procedure.",
    href: "/aesthetics/microneedling",
  },
  {
    title: "Exosomes",
    body: "Turn back the clock on aging. Exosomes promote skin rejuvenation and repair on a cellular level.",
    href: "/aesthetics/exosomes",
  },
  {
    title: "Hair Restoration",
    body: "Reverse hair loss and see results quickly with cutting-edge hair restoration for men and women.",
    href: "/aesthetics/hair-restoration",
  },
  {
    title: "Hand Rejuvenation",
    body: "Give your hands a more supple, youthful appearance with non-surgical hand rejuvenation.",
    href: "/aesthetics/hand-rejuvenation",
  },
];

export default function AestheticsOverviewPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Internal Medicine" />
      <Navbar />

      <AestheticsHero
        service="Vein & Aesthetics"
        headline="Vein & Aesthetic Services"
        subtitle="In addition to our longevity medicine program, Oasis Vein and Vitality uses the gold standard in aesthetic technology to deliver fast, long-lasting results without surgery or downtime."
      />

      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1240 }}>
          <p
            style={{
              fontSize: 18,
              color: "var(--tm)",
              lineHeight: 1.85,
              maxWidth: 880,
              marginBottom: 56,
            }}
          >
            Dr. Steven Mehta and his team combine medical expertise with state-of-the-art technology and regenerative
            techniques to provide powerful anti-aging results. From our minimally invasive varicose vein treatments to
            our innovative radiofrequency microneedling procedure, we&apos;re here to help you look as good as you feel.
          </p>

          <div
            className="g3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
          >
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="cl"
                style={{ display: "block", padding: "32px 30px", textDecoration: "none" }}
              >
                <h3
                  className="fd"
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--td)",
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65, marginBottom: 18 }}>
                  {s.body}
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
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AestheticsCTA headline="Ready to look as good" italicTail="as you feel?" />
      <Footer />
    </>
  );
}
