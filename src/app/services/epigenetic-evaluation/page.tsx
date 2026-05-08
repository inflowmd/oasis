import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ServiceHero, ServiceCTA, SectionTitle } from "@/components/ServiceShell";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Epigenetic Evaluation | Biological Age Testing | Oasis Longevity Scottsdale",
  description:
    "Measure how fast your cells are actually aging — and what to change. Cardiologist-led epigenetic evaluation translates gene expression data into precise lifestyle and longevity protocols.",
  alternates: { canonical: "/services/epigenetic-evaluation" },
};

type Area = { title: string; body: string; icon: ReactNode };

const areas: Area[] = [
  {
    title: "Biological Age",
    body: "How fast your cells are actually aging vs. your calendar age.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5h-1v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="#1C3538" />
    ),
  },
  {
    title: "Nutritional Optimization",
    body: "Which dietary patterns your genes respond to best.",
    icon: <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" fill="#1C3538" />,
  },
  {
    title: "Exercise Response",
    body: "How your body processes different types of physical activity.",
    icon: <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" fill="#1C3538" />,
  },
  {
    title: "Sleep Architecture",
    body: "Your genetic sleep patterns and optimization strategies.",
    icon: <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" fill="#1C3538" />,
  },
  {
    title: "Stress Response",
    body: "How your biology handles and recovers from stress.",
    icon: <path d="M13 1.07V9l7-7 .93.93C18.85 5.5 17 8 17 8s-2.5 1.85-5.07 3.93L13 13l-1 1-2-2-2 2-1-1 1.07-1.07C5.85 10.85 4 9 4 9s2.5-1.85 5.07-3.93L8 4l1-1 2 2 2-2 1 1-1 1.07A14.6 14.6 0 0011 9V1.07A11.04 11.04 0 0013 1.07z" fill="#1C3538" />,
  },
  {
    title: "Hormonal Patterns",
    body: "How gene expression affects hormonal balance.",
    icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#1C3538" />,
  },
  {
    title: "Detoxification Pathways",
    body: "How efficiently your body processes environmental toxins.",
    icon: <path d="M9.5 2L7.5 4 5 6.5 7 9 4.5 11 7 13 5 16 8 18l3 -3.5L13 16l3-2-2-3 3-2-2-2 2-2.5-2-2-3 2L9.5 2z" fill="#1C3538" />,
  },
  {
    title: "Inflammation Markers",
    body: "Genetic predisposition to inflammatory patterns.",
    icon: <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="#1C3538" />,
  },
];

const faqs = [
  {
    q: "What does epigenetic evaluation involve?",
    a: "The evaluation includes a simple cheek swab that captures your epigenetic markers, combined with comprehensive blood work. Dr. Mehta analyzes the results together to build a complete picture of how your lifestyle is affecting your gene expression and cellular aging.",
  },
  {
    q: "What is biological age?",
    a: "Your biological age reflects how fast your cells are aging, which can differ significantly from your chronological age. A 50-year-old with a biological age of 42 is aging slower than average. A 50-year-old with a biological age of 58 has accelerated aging that may respond to targeted intervention.",
  },
  {
    q: "Can epigenetic changes be reversed?",
    a: "Yes — unlike genetic mutations, epigenetic changes are reversible. Through targeted modifications to nutrition, exercise, sleep, stress management, and other factors, it's possible to shift gene expression patterns in a favorable direction and slow or reverse biological aging.",
  },
  {
    q: "Who benefits most from epigenetic evaluation?",
    a: "Anyone who wants to move beyond generic health advice and understand exactly what their body needs based on their unique genetic makeup. It's particularly valuable for people with a family history of chronic disease who want to understand their predisposition and take proactive, personalized steps to change their trajectory.",
  },
];

export default function EpigeneticEvaluationPage() {
  return (
    <>
      <Navbar />

      <ServiceHero
        service="Epigenetic Evaluation"
        headline="Epigenetic Evaluation."
        subtitle="Your DNA is fixed. Your gene expression is not. Understand how your lifestyle shapes your biology — and what to change."
      />

      {/* WHAT IS EPIGENETICS — centered editorial */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-read" style={{ maxWidth: 1040 }}>
          <SectionTitle eyebrow="The Science">
            What is <span className="fdi" style={{ color: "var(--gm)" }}>epigenetics?</span>
          </SectionTitle>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              Epigenetics is the study of how lifestyle and environment — diet, stress, exercise, sleep, toxin
              exposure — alter gene expression without changing your underlying DNA sequence. The genes you carry are
              fixed. Whether they switch on or off, and how strongly, is not.
            </p>
            <p style={{ marginBottom: 18 }}>
              Epigenetic markers determine which genes are active at any given moment. That means your habits and
              environment directly shape your health trajectory at the molecular level — for better or worse — across
              your entire life.
            </p>
            <p>
              Epigenetic evaluation measures the pace at which you are aging at a cellular level. The result is a
              biological age — which may be meaningfully different from your chronological age — and a precise read on
              the lifestyle factors driving that gap. Targeted intervention can slow or even reverse age-related
              changes once you know what to change.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE EVALUATE — icon grid */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1240 }}>
          <SectionTitle eyebrow="What We Evaluate">
            Eight dimensions of <span className="fdi" style={{ color: "var(--gm)" }}>your biology.</span>
          </SectionTitle>
          <div
            className="g3"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}
          >
            {areas.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(232,237,232,0.6)",
                  borderRadius: 16,
                  padding: "26px 24px",
                }}
                className="modality-mini"
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

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div
          className="mx-lg phil-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
          }}
        >
          <div>
            <SectionTitle eyebrow="How It Works">
              Simple to do. <span className="fdi" style={{ color: "var(--gm)" }}>Powerful to act on.</span>
            </SectionTitle>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                Evaluation begins with a non-invasive cheek swab and comprehensive blood work. From there, Dr. Mehta
                analyzes the results — combining your epigenetic data with a full clinical picture — and builds a
                customized lifestyle protocol around your specific biology.
              </p>
              <p>
                Dr. Mehta has specialized training in epigenetics and uses the data to drive precise, evidence-based
                recommendations rather than generic health advice. The result is a longevity strategy that fits how
                your body actually responds — not how the average body responds.
              </p>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(232,237,232,0.5)",
              boxShadow: "0 30px 80px rgba(28,53,56,0.12)",
            }}
          >
            <Image
              src="/partnership.jpeg"
              alt="Epigenetic evaluation review"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className="object-cover"
            />
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
        headline="Your genes aren't your destiny."
        italicTail="Your choices are."
      />
      <Footer />
    </>
  );
}
