import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics/sclerotherapy";
const TITLE = "Sclerotherapy Scottsdale | Spider Vein Treatment";
const DESCRIPTION =
  "Eliminate spider and small varicose veins with proven, virtually painless sclerotherapy in Scottsdale, AZ. No downtime, fast results with Dr. Steven Mehta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const benefits = [
  {
    title: "Versatile",
    body: "Sclerotherapy can treat small-to-medium sized varicose and spider veins on the face, hands, torso, legs and feet.",
  },
  {
    title: "Fast and Nearly Painless",
    body: "When performed by an experienced provider like Dr. Mehta, treatment is virtually painless and usually takes 30 minutes or less.",
  },
  {
    title: "Effective",
    body: "The procedure eliminates the visible appearance of the veins and improves circulation by redirecting blood through healthy veins.",
  },
];

const faqs = [
  {
    q: "Is sclerotherapy safe?",
    a: "Yes, sclerotherapy has been used since the 1930s. It's often the preferred method for eliminating spider veins and small varicose veins because it's so well-proven and has little to no side effects. Occasionally, patients may experience bruising, soreness, redness and temporarily darkened skin at the injection site.",
  },
  {
    q: "Does sclerotherapy hurt?",
    a: "Sclerotherapy relies on a very fine needle and is virtually painless. You might feel small pinches in the treatment area. The procedure doesn't require anesthesia and you will not be left with any scars.",
  },
  {
    q: "Who is a good candidate for sclerotherapy?",
    a: "Individuals with spider veins or small varicose veins who are in overall good health.",
  },
];

export default function SclerotherapyPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Internal Medicine" />
      <Navbar />

      <AestheticsHero
        service="Sclerotherapy"
        headline="Sclerotherapy"
        subtitle="Rid your face, hands, body, legs or feet of small varicose and spider veins with this proven, virtually painless treatment."
      />

      <ProseSection eyebrow="Overview" title="A proven, virtually" italicTail="painless treatment.">
        <p style={{ marginBottom: 18 }}>
          Vein disease expert Dr. Steven Mehta offers sclerotherapy for spider veins (the little red or purple veins
          near the skin surface) and small bulging or varicose veins. The minimally invasive, FDA-approved treatment
          only takes 10–30 minutes and there is no downtime.
        </p>
        <p>
          During the procedure, Dr. Mehta uses a very fine needle to inject the veins with a medical agent called a
          sclerosant. This causes a chemical reaction that makes the walls of the vessels stick together, closing the
          veins. Over time, the veins are reabsorbed into the body and fade from view.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection eyebrow="Results" title="What to" italicTail="expect.">
        <p>
          Occasionally, more than one session is needed, however, this depends on your unique case and vascular
          health. After treatment, the veins will gradually disappear with full results visible in about two months.
          Generally, the treated veins will not come back.
        </p>
      </ProseSection>

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
