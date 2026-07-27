import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AestheticsHero, AestheticsCTA, ProseSection, Benefits } from "@/components/AestheticsShell";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/aesthetics/hand-rejuvenation";
const TITLE = "Hand Rejuvenation Scottsdale | Restore Youthful Hands";
const DESCRIPTION =
  "Restore volume, fade age spots and minimize veins with non-surgical hand rejuvenation in Scottsdale, AZ — microneedling, fillers and sclerotherapy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const benefits = [
  {
    title: "Stimulates Natural Healing",
    body: "Treatments like radiofrequency (RF) microneedling jumpstart the body's healing response and stimulate collagen production.",
  },
  {
    title: "No Downtime",
    body: "Our hand rejuvenation treatments are minimally invasive and comfortable. You can go right back to your day after a procedure.",
  },
  {
    title: "Combats Signs of Aging",
    body: "Hand rejuvenation can restore lost volume, minimize the appearance of veins, tendons and age spots, and improve skin tone and texture.",
  },
];

const concerns = [
  "Prominent veins on the back of the hands and forearms",
  "A lack of soft tissue volume in the hands",
  "Pigmentation concerns, including uneven skin tone and age spots",
  "Lax skin",
  "Wrinkles",
  "Issues with skin texture",
];

const faqs = [
  {
    q: "Who is a good candidate for hand rejuvenation?",
    a: "Dr. Mehta will assess your health and medical history to determine if you're a good candidate for hand rejuvenation procedures. However, most people who want to reduce the signs of hand aging will be able to get treatment.",
  },
  {
    q: "What concerns can hand rejuvenation treatment address?",
    a: "Prominent veins on the back of the hands and forearms, a lack of soft tissue volume, pigmentation concerns including uneven skin tone and age spots, lax skin, wrinkles, and issues with skin texture.",
  },
  {
    q: "What should I expect during and after treatment?",
    a: "That will depend on your treatment plan and the specific procedures used. Sclerotherapy is nearly painless when performed by an experienced provider like Dr. Mehta. Prior to microneedling treatment, a topical anesthetic will be used to make you comfortable. Dr. Mehta will provide you with detailed after-care instructions. There is no downtime for any of the procedures and you can go back to work or your other daily activities after a session.",
  },
];

export default function HandRejuvenationPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Dermatology" />
      <Navbar />

      <AestheticsHero
        service="Hand Rejuvenation"
        headline="Hand Rejuvenation"
        subtitle="Give your hands a more supple, youthful appearance with non-surgical hand rejuvenation."
      />

      <ProseSection eyebrow="Overview" title="The hands age too —" italicTail="and we can help.">
        <p style={{ marginBottom: 18 }}>
          When it comes to addressing the signs of aging, many people focus their efforts on the face. However, the
          skin of the hands goes through the same natural aging process and is exposed to the same environmental
          factors, most notably the sun, often with less protection than facial skin.
        </p>
        <p>
          Over time, soft tissue volume in the hands is depleted, resulting in loose skin, wrinkles and prominent
          veins and tendons. Sun damage can also cause textural issues and age spots. Our personalized hand
          rejuvenation treatments can help to restore volume, minimize visible veins and improve skin tone and
          texture.
        </p>
      </ProseSection>

      <Benefits items={benefits} />

      <ProseSection
        eyebrow="Treatment Options"
        title="Three approaches to"
        italicTail="hand rejuvenation."
      >
        <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, color: "var(--gd)", marginTop: 12, marginBottom: 10 }}>
          Sclerotherapy for Hand Veins
        </h3>
        <p style={{ marginBottom: 26 }}>
          Prominent veins on the back of the hands and forearms can be treated with sclerotherapy. Dr. Mehta injects
          a sclerosant into the visible veins, causing them to close and gradually fade from view. The procedure is
          virtually painless and requires no downtime.
        </p>

        <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, color: "var(--gd)", marginBottom: 10 }}>
          RF Microneedling for Hands
        </h3>
        <p style={{ marginBottom: 26 }}>
          Radiofrequency microneedling with Sylfirm X stimulates collagen production in the skin of the hands,
          improving tone, texture, and firmness. The treatment triggers the body&apos;s natural repair response for
          smoother, more youthful-looking skin.
        </p>

        <h3 className="fd" style={{ fontSize: 22, fontWeight: 700, color: "var(--gd)", marginBottom: 10 }}>
          Dermal Fillers
        </h3>
        <p>
          Injectable dermal fillers restore lost volume to the hands, reducing the visibility of tendons, veins, and
          bony structures. Dr. Mehta carefully injects filler beneath the skin to create a smoother, more supple
          appearance. Results are immediate and can last up to a year or longer depending on the product used.
        </p>
      </ProseSection>

      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
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
            What It Addresses
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              marginBottom: 32,
            }}
          >
            Concerns we <span className="fdi" style={{ color: "var(--gm)" }}>treat.</span>
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14, gridTemplateColumns: "1fr" }}>
            {concerns.map((c) => (
              <li
                key={c}
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
                <span style={{ fontSize: 16, color: "var(--gd)", lineHeight: 1.55 }}>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
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
