import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics/exosomes";
const TITLE = "Exosome Therapy Scottsdale | Skin Rejuvenation";
const DESCRIPTION =
  "Exosomes promote skin rejuvenation and repair at the cellular level. Non-surgical, regenerative aesthetic treatment in Scottsdale, AZ with Dr. Steven Mehta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const benefits = [
  {
    title: "Achieves Results Naturally",
    body: "Exosomes help aging and damaged cells repair themselves and revert to their youthful state, rejuvenating your skin from the inside out.",
  },
  {
    title: "Reverses Signs of Aging",
    body: "Treatment visibly reduces the appearance of fine lines, wrinkles and sun damage, while also promoting collagen production for firmer skin.",
  },
  {
    title: "Provides Lasting Effects",
    body: "Because the safe, non-surgical solution works on the cellular level, the benefits can last 18–24 months or even longer.",
  },
];

const beneficiaries = [
  "Fine lines and wrinkles",
  "Sun-damaged skin",
  "Uneven skin tone",
  "Loss of skin firmness and elasticity",
  "Acne scarring",
  "Enlarged pores",
  "Dull or dehydrated skin",
  "Post-procedure healing acceleration",
  "Age-related skin thinning",
  "Hair loss and thinning hair",
];

const faqs = [
  {
    q: "How many sessions will I need?",
    a: "Results vary by individual, but many patients benefit from a series of 3-4 sessions spaced 4-6 weeks apart. Because exosome therapy works at the cellular level, benefits continue to improve over several months and can last 18-24 months or longer.",
  },
  {
    q: "What are exosomes?",
    a: "Exosomes are tiny vesicles naturally produced by cells in the body. They play a key role in cell-to-cell communication, carrying proteins, growth factors and other molecules that help target cells repair and regenerate.",
  },
  {
    q: "Are exosome treatments safe?",
    a: "When sourced from reputable, regulated labs and administered by a physician like Dr. Mehta, exosome treatment is well-tolerated with minimal side effects. The exosomes used are derived from donated stem cells and pair seamlessly with the body's natural repair processes.",
  },
  {
    q: "Is there downtime?",
    a: "There is no downtime. You can return to your usual routine right after the session. You may notice your skin looks firmer and more youthful immediately, with full results developing over about six weeks.",
  },
  {
    q: "How long do results last?",
    a: "Because exosomes work at the cellular level, results can last 18–24 months — and sometimes longer — as collagen and elastin continue to develop after the treatment.",
  },
];

export default function ExosomesPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Regenerative Medicine" />
      <Navbar />

      <AestheticsHero
        service="Exosomes"
        headline="Exosomes"
        subtitle="Turn back the clock on aging. Exosomes promote skin rejuvenation and repair on a cellular level."
      />

      <ProseSection eyebrow="Overview" title="Regeneration at the" italicTail="cellular level.">
        <p style={{ marginBottom: 18 }}>
          Exosomes have powerful regenerative properties that Dr. Mehta harnesses to reverse visible signs of aging,
          improve skin health and restore hair loss. Naturally produced by different cells in the body, exosomes are
          tiny vesicles that play a key role in cell-to-cell communication.
        </p>
        <p>
          When used for aesthetic purposes, exosomes are extracted from donated stem cells. We pair them with
          microneedling to maximize penetration. The exosomes bind to target cells and release proteins, growth
          factors and molecules, helping to restore cellular health and promote skin repair.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection
        eyebrow="Exosomes for Skin Rejuvenation"
        title="How a session"
        italicTail="works."
      >
        <p style={{ marginBottom: 18 }}>
          We start the process by applying a numbing agent to the treatment area and then performing radiofrequency
          (RF) microneedling. This creates micro-channels in the skin, allowing the exosomes to penetrate the deeper
          levels. Once applied, the exosomes deliver their bounty of growth factors, proteins and coenzymes directly
          to the skin cells, initiating the repair process.
        </p>
        <p>
          There is no downtime so you can go back to your usual routine right after your session. You&apos;ll notice
          immediately that your skin looks firmer and more youthful. Full results will be evident in about six weeks
          as cell regeneration occurs and the body produces new collagen and elastin.
        </p>
      </ProseSection>

      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1080 }}>
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
            Who Can Benefit
          </p>
          <h2 className="fd" style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "var(--td)", lineHeight: 1.15, marginBottom: 32 }}>
            Conditions exosome therapy <span className="fdi" style={{ color: "var(--gm)" }}>can address.</span>
          </h2>
          <ul
            className="g2"
            style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {beneficiaries.map((t) => (
              <li
                key={t}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "16px 18px",
                  background: "#fff",
                  border: "1px solid rgba(232,237,232,0.6)",
                  borderRadius: 14,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--gold-pale)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--gold)" />
                  </svg>
                </span>
                <span style={{ fontSize: 15, color: "var(--gd)", lineHeight: 1.55 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
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
            FAQ
          </p>
          <h2 className="fd" style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "var(--td)", marginBottom: 32 }}>
            Common <span className="fdi" style={{ color: "var(--gm)" }}>questions.</span>
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <AestheticsCTA />
      <Footer />
    </>
  );
}
