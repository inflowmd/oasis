import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ServiceHero, ServiceCTA, SectionTitle } from "@/components/ServiceShell";
import JoinPrompt from "@/components/JoinPrompt";

export const metadata: Metadata = {
  title: "Peptide Therapy | Physician-Directed | Oasis Longevity Scottsdale",
  description:
    "Targeted peptide protocols prescribed and monitored by a board-certified cardiologist. Medical-grade compounds from FDA-certified labs — not the unregulated wellness-spa market.",
  alternates: { canonical: "/services/peptide-therapy" },
};

type App = { title: string; body: string; icon: ReactNode };

const applications: App[] = [
  {
    title: "Tissue Repair & Healing",
    body: "Accelerated recovery from injury, training stress, and surgical procedures.",
    icon: <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#1C3538" />,
  },
  {
    title: "Hormonal Support",
    body: "Targeted peptide signaling to support endocrine balance and resilience.",
    icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#1C3538" />,
  },
  {
    title: "Immune Optimization",
    body: "Modulating immune response and supporting recovery from chronic stressors.",
    icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#1C3538" />,
  },
  {
    title: "Body Composition",
    body: "Metabolic support and lean-mass preservation, integrated with broader protocol.",
    icon: <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" fill="#1C3538" />,
  },
  {
    title: "Cognitive Enhancement",
    body: "Targeted support for focus, memory, and neural resilience.",
    icon: <path d="M21 11.18V9.72L17 8l-1.72 4-1.84-4.05L11 8 9.56 12.05 7.72 8 4 9.72v1.46L7.5 13l1.13 4.5h7L17 13z" fill="#1C3538" />,
  },
  {
    title: "Cellular Regeneration",
    body: "Protocols supporting cellular repair pathways and biological-age targets.",
    icon: (
      <g fill="none" stroke="#1C3538" strokeWidth="1.6">
        <circle cx="12" cy="12" r="2" fill="#1C3538" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-60 12 12)" />
      </g>
    ),
  },
  {
    title: "Joint & Musculoskeletal",
    body: "Support for joint health, connective tissue, and recovery from wear-and-tear.",
    icon: <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="#1C3538" />,
  },
  {
    title: "Sleep Quality",
    body: "Peptide protocols supporting sleep architecture and overnight recovery.",
    icon: <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16V5c3.86 0 7 3.14 7 7s-3.14 7-7 7z" fill="#1C3538" />,
  },
];

const faqs = [
  {
    q: "Is peptide therapy safe?",
    a: "When prescribed and monitored by a licensed physician using medical-grade peptides from FDA-certified labs, peptide therapy is well-tolerated with minimal side effects. Peptides are naturally occurring molecules that the body recognizes and processes efficiently. The key is sourcing — unregulated peptides from online retailers may not deliver the purity or potency advertised, increasing the risk of adverse effects.",
  },
  {
    q: "How are peptides administered?",
    a: "The delivery method depends on the specific protocol and your needs. The most common approach is subcutaneous injection, which provides direct bloodstream delivery and optimal absorption. Dr. Mehta will recommend the most effective method for your specific goals.",
  },
  {
    q: "How does peptide therapy fit into a longevity program?",
    a: "Peptide therapy is one modality among several that Dr. Mehta may incorporate into your personalized longevity protocol. It works synergistically with other interventions — hormonal optimization, metabolic support, cardiovascular prevention — and the specific peptides used are determined by your individual biology and goals, not by a standard menu.",
  },
  {
    q: "How is this different from getting peptides at a wellness spa?",
    a: "The difference is clinical training, sourcing, and integration. Dr. Mehta is a board-certified cardiologist who evaluates whether peptide therapy is appropriate for your specific health profile, prescribes medical-grade compounds from certified labs, monitors your response, and integrates peptide therapy into a comprehensive longevity strategy. A wellness spa typically offers peptides as a standalone service without comprehensive medical evaluation or ongoing monitoring.",
  },
];

export default function PeptideTherapyPage() {
  return (
    <>
      <Navbar />

      <ServiceHero
        service="Peptide Therapy"
        headline="Peptide Therapy."
        subtitle="Targeted peptide protocols that work with your body's natural signaling systems — prescribed and monitored by a physician, not a wellness spa."
      />

      {/* WHAT ARE PEPTIDES */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div
          className="mx-lg phil-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "5/6",
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(232,237,232,0.5)",
              boxShadow: "0 30px 80px rgba(28,53,56,0.12)",
            }}
          >
            <Image
              src="/doctor-patient-health-review-personalized-protocol.webp"
              alt="Peptide therapy physician consultation personalized protocol"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle eyebrow="The Science">
              Naturally occurring molecules — <span className="fdi" style={{ color: "var(--gm)" }}>precisely directed.</span>
            </SectionTitle>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                Peptides are short chains of amino acids that act as signaling molecules in your body. They bind to
                specific cellular receptors and trigger targeted biological responses — from stimulating tissue repair
                to modulating hormonal activity to supporting immune function.
              </p>
              <p style={{ marginBottom: 18 }}>
                Peptide therapy uses these naturally occurring molecules to target specific systems. Because peptides
                can be directed to precise receptors, therapy can be customized to your individual needs and health
                goals — not delivered from a fixed menu.
              </p>
              <p>
                At Oasis, Dr. Mehta prescribes medical-grade peptides from FDA-certified lab partners and monitors
                each patient&apos;s response. This physician-directed approach ensures safety, proper dosing, and
                integration with your overall longevity protocol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS — icon grid */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1240 }}>
          <SectionTitle eyebrow="Applications">
            Where peptides can <span className="fdi" style={{ color: "var(--gm)" }}>support you.</span>
          </SectionTitle>
          <div
            className="g3"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
          >
            {applications.map((a) => (
              <div
                key={a.title}
                className="modality-mini"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(232,237,232,0.6)",
                  borderRadius: 16,
                  padding: "26px 24px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "var(--gp)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{a.icon}</svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--gd)", marginBottom: 6, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--tm)", lineHeight: 1.55 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JoinPrompt background="var(--ow)" />


      {/* PHYSICIAN OVERSIGHT */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1080 }}>
          <SectionTitle eyebrow="Why It Matters">
            Where you get them <span className="fdi" style={{ color: "var(--gm)" }}>matters.</span>
          </SectionTitle>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 20 }}>
              The peptide market is flooded with unregulated products of questionable purity and potency. Getting
              peptides from online retailers or wellness spas without proper medical supervision carries real risks —
              and obscures the very thing peptides are good at: precise, predictable signaling.
            </p>
            <p>
              Dr. Mehta uses only medical-grade peptides from trusted, FDA-certified compounding partners. He
              evaluates whether peptide therapy is appropriate based on your health history, determines the right
              protocol, and monitors your response over time. Peptide therapy is integrated into your broader
              longevity strategy — not prescribed in isolation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <SectionTitle eyebrow="FAQ">
            Common <span className="fdi" style={{ color: "var(--gm)" }}>questions.</span>
          </SectionTitle>
          <FAQ items={faqs} />
        </div>
      </section>

      <ServiceCTA
        headline="Evidence-based peptide therapy,"
        italicTail="physician-directed."
      />
      <Footer />
    </>
  );
}
