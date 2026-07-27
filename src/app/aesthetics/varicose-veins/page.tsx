import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics/varicose-veins";
const TITLE = "Varicose Vein Treatment Scottsdale | VenaSeal & RFA";
const DESCRIPTION =
  "Minimally invasive varicose vein treatment in Scottsdale — VenaSeal, radiofrequency ablation, Varithena and phlebectomy with vein expert Dr. Steven Mehta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const benefits = [
  {
    title: "Alleviates Discomfort",
    body: "Our varicose vein treatments reduce symptoms like leg aching, cramping and heaviness, as well as swelling in the legs and feet for more comfort.",
  },
  {
    title: "Improves Appearance",
    body: "Eliminating discolored and/or bulging veins significantly improves the appearance of your legs, giving you a boost in confidence.",
  },
  {
    title: "Enhances Circulation",
    body: "After a vein procedure, blood flow is redirected from the diseased vein to nearby, healthy veins, making your circulation more efficient.",
  },
];

const faqs = [
  {
    q: "What are the signs and symptoms of vein disease?",
    a: "Common signs include visible varicose or spider veins, leg aching or heaviness, leg cramps (especially at night), swelling in the legs or ankles, restless legs, skin discoloration near the ankles, and slow-healing wounds on the legs. If you experience any of these symptoms, a vein evaluation can determine if treatment is needed.",
  },
  {
    q: "What are the risk factors for varicose veins?",
    a: "Risk factors include family history (you have about a 40% chance if one parent has vein disease and up to 90% if both do), gender (about 25% of women and 15% of men are affected), pregnancy, occupations requiring prolonged standing or sitting, obesity, and age (1 in 2 people over 50 develop varicose veins).",
  },
  {
    q: "What happens during a vein evaluation?",
    a: "Dr. Mehta will discuss your symptoms and medical history, then perform an in-office venous ultrasound examination. This painless, non-invasive imaging test uses sound waves to evaluate blood flow in your leg veins and identify any malfunctioning valves or diseased vein segments. Results are available immediately so Dr. Mehta can discuss your treatment options the same day.",
  },
  {
    q: "Is varicose vein treatment safe?",
    a: "Yes. The minimally invasive treatments offered at Oasis Vein and Vitality are FDA-approved and well-established, with strong safety records. Dr. Mehta is a board-certified cardiologist with extensive experience in vein disease.",
  },
  {
    q: "Does the procedure hurt?",
    a: "Most patients tolerate treatment well. Dr. Mehta numbs the entry point on the leg before beginning, and modern techniques like VenaSeal and radiofrequency ablation have replaced more painful procedures such as vein stripping.",
  },
  {
    q: "Who is a good candidate for varicose vein treatment?",
    a: "Anyone experiencing symptoms of vein disease — aching, heaviness, swelling, cramping, or visible bulging veins — may benefit from evaluation. At your consultation, Dr. Mehta will perform an ultrasound and walk you through your options.",
  },
  {
    q: "What is the recovery like?",
    a: "Recovery is typically quick. Most patients return to normal daily activities the same day. Dr. Mehta will provide specific after-care instructions based on the procedure performed.",
  },
  {
    q: "Is treatment covered by insurance?",
    a: "Many varicose vein procedures are covered by insurance when medically necessary. Our team can help you understand your coverage during the consultation process.",
  },
];

export default function VaricoseVeinsPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Internal Medicine" />
      <Navbar />

      <AestheticsHero
        service="Varicose Veins Treatment"
        headline="Varicose Veins Treatment"
        subtitle="Regain comfort and confidence with the help of state-of-the-art, minimally invasive treatments for vein abnormalities."
      />

      <ProseSection eyebrow="Overview" title="A more comfortable" italicTail="kind of care.">
        <p style={{ marginBottom: 18 }}>
          Varicose veins aren&apos;t merely a cosmetic problem; they can cause cramping, swelling and discomfort in the
          legs and ankles that gets in the way of doing the things you love. At Oasis Vein and Vitality, we have the
          most up-to-date and minimally invasive treatment options to help you reclaim your quality of life and
          confidence.
        </p>
        <p>
          At your consultation, vein disease expert Dr. Steven Mehta will listen to your concerns and ask about your
          symptoms. We know your time is valuable, which is why we&apos;re often able to offer same-day, in-office
          ultrasounds to evaluate you for venous conditions. Dr. Mehta will then fully explain your results and
          treatment options.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection eyebrow="VenaSeal™" title="A non-thermal, non-tumescent" italicTail="treatment option.">
        <p style={{ marginBottom: 18 }}>
          VenaSeal™, made by Medtronic, is one of the newest technologies on the market. However, cyanoacrylate glue,
          which is the substance in VenaSeal, has been used in the medical field for a long time and has a
          well-established safety record. It is the only non-tumescent, non-thermal, non-sclerosant procedure performed
          to close the vein.
        </p>
        <p>
          During the procedure, we&apos;ll use ultrasound to identify the unhealthy vein. Dr. Mehta will gently numb
          the entry point on your leg before inserting a small catheter into your vein using ultrasound guidance. Next,
          he&apos;ll slowly inject VenaSeal into the vein. This causes it to shut down as it is essentially
          &ldquo;glued&rdquo; to itself. With the diseased vein sealed, blood flow is rerouted to healthy veins,
          improving circulation and resolving symptoms.
        </p>
      </ProseSection>

      <ProseSection
        eyebrow="Radiofrequency Ablation"
        title="Proven, effective"
        italicTail="and minimally invasive."
        background="var(--tl)"
      >
        <p style={{ marginBottom: 18 }}>
          Radiofrequency ablation (RFA) is a procedure that uses a tiny device that produces high-intensity sound
          waves to generate heat energy. The safe, effective treatment has replaced procedures such as vein stripping,
          which is more invasive and painful and has a longer recovery time.
        </p>
        <p style={{ marginBottom: 18 }}>
          First, we&apos;ll identify the unhealthy vein using ultrasound. Dr. Mehta will numb the entry point on your
          leg before inserting the device into the diseased vein. He&apos;ll surround the vein with a protective
          numbing fluid called tumescent. The device will deliver heat to the walls of the vein causing it to collapse
          and seal closed.
        </p>
        <p>
          Over time, the treated vein will be reabsorbed by the body. Since blood flow gets rerouted to nearby healthy
          veins, your circulation will become more efficient and your symptoms will improve.
        </p>
      </ProseSection>

      <ProseSection
        eyebrow="Varithena®"
        title="Polidocanol"
        italicTail="injectable foam."
      >
        <p>
          Varithena is an FDA-approved injectable foam used to treat varicose veins. Dr. Mehta injects a small amount
          of microfoam into the malfunctioning vein through a catheter or needle. The foam fills and treats the vein,
          causing it to collapse and eventually be absorbed by the body. Blood is rerouted to nearby healthy veins.
          Varithena is particularly effective for large, tortuous veins that may not be ideal candidates for thermal
          ablation.
        </p>
      </ProseSection>

      <ProseSection
        eyebrow="Ambulatory Phlebectomy"
        title="Micro-incision"
        italicTail="vein removal."
        background="var(--tl)"
      >
        <p>
          Ambulatory phlebectomy is a minimally invasive procedure used to remove superficial varicose veins through
          tiny micro-incisions in the skin. Dr. Mehta uses local anesthesia to numb the area, then removes the
          varicose vein segments through punctures so small they typically don&apos;t require stitches. The procedure
          is performed in-office and patients can return to normal activities quickly.
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
