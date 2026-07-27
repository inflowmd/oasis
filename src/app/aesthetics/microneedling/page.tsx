import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics/microneedling";
const TITLE = "RF Microneedling Scottsdale | Sylfirm X Treatment";
const DESCRIPTION =
  "Smoother, even-toned skin with Sylfirm X RF microneedling in Scottsdale, AZ. Treats melasma, scars, fine lines and laxity through collagen stimulation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const benefits = [
  {
    title: "Resolves Pigmentation Issues",
    body: "Sylfirm X is the only RF microneedling device that works for hard-to-treat conditions like melasma and rosacea.",
  },
  {
    title: "Rejuvenates Skin",
    body: "The procedure can target multiple signs of aging, including skin laxity, fine lines, wrinkles and uneven skin tone.",
  },
  {
    title: "Minimizes Discomfort",
    body: "The high-precision device reaches proper skin depths without damaging healthy tissues for safe, comfortable treatment.",
  },
];

const treats = [
  "Fine lines and wrinkles",
  "Skin laxity and sagging",
  "Acne scars",
  "Surgical scars",
  "Stretch marks",
  "Melasma and hyperpigmentation",
  "Rosacea",
  "Uneven skin tone and texture",
  "Enlarged pores",
  "Sun damage",
  "Dull or aging skin",
  "Scalp rejuvenation (stimulates circulation for hair health)",
];

const faqs = [
  {
    q: "How many treatments will I need?",
    a: "Most patients see optimal results after 3-4 treatments spaced 4-6 weeks apart. Dr. Mehta will recommend a treatment plan based on your specific skin concerns and goals. Many patients choose to do maintenance treatments once or twice a year to sustain results.",
  },
  {
    q: "How does Sylfirm X treatment work?",
    a: "Microneedling helps to resurface the skin and stimulate the body's natural repair response by creating micro-injuries. RF energy simultaneously heats tissue for a tightening and contouring effect. The treatment triggers collagen and elastin production, providing results that continue to get better over weeks and months.",
  },
  {
    q: "Is RF microneedling safe?",
    a: "Yes. Sylfirm X is FDA-cleared and designed to deliver energy at precise depths without damaging healthy tissue. The high-precision device makes treatment safe and well-tolerated for a wide range of skin types and tones.",
  },
  {
    q: "Is there downtime?",
    a: "There is no downtime. You may have some redness and minor swelling that feels like a sunburn for a few days, but most patients return to their normal routine right after the session.",
  },
  {
    q: "When will I see results?",
    a: "Many patients notice a skin tightening effect right away. Full results are typically visible in about a month as new collagen and elastin develop. Improvement continues over the following weeks.",
  },
];

export default function MicroneedlingPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Dermatology" />
      <Navbar />

      <AestheticsHero
        service="Microneedling"
        headline="Microneedling"
        subtitle="Get smoother, more youthful, even-toned skin with an innovative radiofrequency (RF) microneedling procedure."
      />

      <ProseSection eyebrow="Overview" title="Resurface, tighten" italicTail="and tone.">
        <p style={{ marginBottom: 18 }}>
          Are you bothered by fine lines, wrinkles and sagging skin? Are you tired of dealing with stubborn
          pigmentation concerns like melasma or acne scars? Oasis Vein and Vitality can help. We offer revolutionary
          Sylfirm X® RF microneedling to revitalize your skin, naturally.
        </p>
        <p>
          Treatment resurfaces, tightens and tones using a unique combination of microneedling, RF energy and pulsed
          wave technology. This stimulates the body&apos;s repair response and triggers collagen and elastin
          production. The result? More sculpted features and radiant, younger-looking skin.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection eyebrow="The Process" title="What a session" italicTail="looks like.">
        <p style={{ marginBottom: 18 }}>
          Depending on your needs, Dr. Mehta may recommend RF microneedling on its own or in combination with another
          treatment, such as exosomes. Before beginning the procedure, he&apos;ll apply a topical numbing cream. A
          handheld wand will then be used to insert gold microneedles into the skin and deliver RF energy (heat) to
          the targeted tissues.
        </p>
        <p>
          Sylfirm X treatment takes about 30–45 minutes depending on the area of the face or body being addressed.
          There is no downtime, however, you may have redness and minor swelling that feels like a sunburn for a few
          days. Many patients notice a skin tightening effect right away with full results visible in about a month.
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
            What It Treats
          </p>
          <h2 className="fd" style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, color: "var(--td)", lineHeight: 1.15, marginBottom: 32 }}>
            What can RF microneedling <span className="fdi" style={{ color: "var(--gm)" }}>treat?</span>
          </h2>
          <ul
            className="g2"
            style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {treats.map((t) => (
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
