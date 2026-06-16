import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";

export const metadata: Metadata = {
  title: "Hair Restoration | Non-Surgical Hair Regrowth | Oasis Vein & Vitality | Scottsdale",
  description:
    "Reverse hair loss with cutting-edge, non-surgical hair restoration for men and women — exosomes, BHRT and peptides with Dr. Steven Mehta in Scottsdale, AZ.",
  alternates: { canonical: "/aesthetics/hair-restoration" },
};

const benefits = [
  {
    title: "Restores Hair Naturally",
    body: "Our treatments work at the cellular level to treat the underlying causes of your hair loss and promote natural regrowth.",
  },
  {
    title: "Safe and Non-Surgical",
    body: "We use safe, proven solutions to give you thicker, fuller hair without surgery or downtime.",
  },
  {
    title: "Boosts Confidence",
    body: "No more using hairstyles, products or hats to mask thinning hair. Enjoy real results and more confidence.",
  },
];

const faqs = [
  {
    q: "Who is a good candidate for hair restoration?",
    a: "Men and women experiencing thinning hair, receding hairlines or diffuse hair loss are often good candidates. Dr. Mehta will evaluate your medical history, hormones and the cause of your hair loss before recommending a treatment plan.",
  },
  {
    q: "How quickly will I see results?",
    a: "Many patients notice early signs of improvement within a few months, with continued thickening and regrowth developing over six months or longer as new follicles mature.",
  },
  {
    q: "Are there side effects?",
    a: "The non-surgical approaches Dr. Mehta uses — exosomes with RF microneedling, BHRT and peptides — are well-tolerated. Any minor effects are typically localized and short-lived. Dr. Mehta will review what to expect in detail at your consultation.",
  },
  {
    q: "Do I have to choose just one therapy?",
    a: "No. Hair restoration plans are personalized. Dr. Mehta may combine modalities — for example, RF microneedling with exosomes alongside hormonal optimization — to address multiple underlying causes at once.",
  },
];

export default function HairRestorationPage() {
  return (
    <>
      <Navbar />

      <AestheticsHero
        service="Hair Restoration"
        headline="Hair Restoration"
        subtitle="Reverse hair loss and see results quickly with cutting-edge hair restoration for men and women."
      />

      <ProseSection eyebrow="Overview" title="Non-surgical, personalized" italicTail="hair restoration.">
        <p style={{ marginBottom: 18 }}>
          Genetics, aging, hormonal imbalances and other factors can lead to hair loss in men and women, but
          there&apos;s no need to resort to invasive, expensive hair transplants. Dr. Steven Mehta offers advanced,
          non-surgical solutions that help to regrow and thicken hair naturally.
        </p>
        <p>
          At your consultation, Dr. Mehta will create a personalized treatment plan based on your unique needs.
          Whether it includes bioidentical hormone replacement therapy, peptides, exosomes or a mixture of therapies,
          the goal is to address the root causes of hair loss to deliver lasting results.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection
        eyebrow="Exosomes for Hair Restoration"
        title="Cellular regeneration"
        italicTail="for the scalp."
      >
        <p style={{ marginBottom: 18 }}>
          Radiofrequency (RF) microneedling with exosomes is a clinically proven way to treat hair loss in men and
          women. Exosomes, which are extracted from donated stem cells, deliver proteins and growth factors to damaged
          or aging cells, stimulating tissue repair and the growth of new hair follicles.
        </p>
        <p>
          RF microneedling improves circulation in the scalp and makes micro-channels that allow the exosomes to
          penetrate the deeper layers of skin for enhanced effectiveness. Over time, strands become thicker and
          healthier and new hair grows in.
        </p>
      </ProseSection>

      <ProseSection
        eyebrow="BHRT for Hair Loss"
        title="Hormone balance,"
        italicTail="follicle support."
        background="var(--tl)"
      >
        <p style={{ marginBottom: 18 }}>
          Bioidentical hormone replacement therapy (BHRT) is an option for anyone experiencing hair loss due to
          hormonal changes. BHRT uses hormones that are chemically identical to the ones your body produces to restore
          balance.
        </p>
        <p>
          In perimenopausal or menopausal women, hormone optimization with a customized blend of hormones may
          encourage follicle repair and hair growth. For men with hair loss caused by low testosterone, bioidentical
          testosterone replacement therapy will have a similar effect.
        </p>
      </ProseSection>

      <ProseSection
        eyebrow="Hair Restoration Peptides"
        title="Targeted biological"
        italicTail="signaling."
      >
        <p>
          Peptides are another option to treat hair loss naturally. Generally administered via injections, peptides
          are short chains of amino acids that bind to receptors in your cells and trigger biological responses, such
          as promoting collagen and elastin production and stimulating new hair growth.
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
