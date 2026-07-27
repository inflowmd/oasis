import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ServiceHero, ServiceCTA, SectionTitle } from "@/components/ServiceShell";
import JoinPrompt from "@/components/JoinPrompt";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/services/weight-management";
const TITLE = "Medical Weight Management Scottsdale | Dr. Mehta";
const DESCRIPTION =
  "Physician-supervised weight and body-composition management in Scottsdale, AZ. Addresses metabolism and cardiovascular health — not a quick fix.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    q: "Who is this program designed for?",
    a: "This program is designed for individuals who are overweight or struggling to maintain a healthy body composition over time. It's also appropriate for anyone with metabolic risk factors — insulin resistance, elevated blood sugar, or visceral fat accumulation — who wants a medically supervised approach rather than a commercial diet program.",
  },
  {
    q: "Will I need medication?",
    a: "Not necessarily. Dr. Mehta evaluates your lab work, health history, and goals to determine whether pharmaceutical intervention is appropriate. Some patients achieve excellent results through nutritional strategy and lifestyle modification alone. Others benefit from evidence-based medications that support appetite regulation and metabolic function. The decision is always individualized.",
  },
  {
    q: "Is this a meal plan or packaged food program?",
    a: "No. We don't use shakes, pre-packaged foods, or commercial meal systems. The goal is to help you develop sustainable eating patterns based on your individual metabolic needs. Relying on packaged options makes long-term maintenance difficult and often introduces highly processed ingredients that undermine metabolic health.",
  },
  {
    q: "How does this differ from a weight loss clinic?",
    a: "Most weight loss clinics prescribe medication and provide basic dietary guidelines without comprehensive metabolic evaluation or cardiologist oversight. Dr. Mehta starts with detailed lab work, identifies the metabolic drivers of your weight challenges, and builds a protocol around your specific biology. As a cardiologist, he also monitors cardiovascular health throughout the process.",
  },
];

const blocks = [
  {
    title: "Diagnostic Foundation",
    body: "Every protocol begins with lab work to evaluate metabolic health, hormonal status, inflammatory markers, and body composition. This data determines the strategy — not the other way around.",
  },
  {
    title: "Physician-Directed Protocols",
    body: "Depending on your individual needs, the program may incorporate evidence-based pharmaceutical interventions, nutritional guidance, and targeted supplementation. Dr. Mehta determines the right approach based on your data, not on trends.",
  },
  {
    title: "Cardiologist Oversight",
    body: "Weight management medications can affect cardiovascular health. As a cardiologist, Dr. Mehta monitors cardiac markers throughout the program, ensuring that weight loss supports heart health rather than compromising it.",
  },
];

export default function WeightManagementPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Internal Medicine" />
      <Navbar />

      <ServiceHero
        service="Medical Weight Management"
        headline="Medical Weight Management."
        subtitle="Sustainable body composition optimization guided by a board-certified cardiologist — not a quick fix, but a strategy built around your biology."
      />

      {/* BEYOND THE SCALE */}
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
              src="/healthy-man-running-fitness-healthspan-optimization.jpg"
              alt="Healthy man running — fitness and metabolic health for weight management"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle eyebrow="Beyond the Scale">
              Weight is the symptom — <span className="fdi" style={{ color: "var(--gm)" }}>metabolism is the cause.</span>
            </SectionTitle>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                Excess body fat — particularly visceral fat — is one of the strongest predictors of cardiovascular
                disease, metabolic syndrome, and accelerated aging. The number on the scale is downstream of biology
                that, once understood, can be reshaped.
              </p>
              <p style={{ marginBottom: 18 }}>
                Most weight-loss programs fail because they treat weight as the problem rather than the symptom. The
                real issues are metabolic dysfunction, insulin resistance, hormonal imbalance, and inflammatory
                patterns that drive the body toward fat storage.
              </p>
              <p>
                Dr. Mehta&apos;s approach starts with comprehensive lab work and assessment to identify the underlying
                metabolic drivers. The protocol is built around your specific biology — not a generic calorie count or
                pre-packaged meal plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE APPROACH — alternating numbered blocks */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <SectionTitle eyebrow="The Approach">
            How the program <span className="fdi" style={{ color: "var(--gm)" }}>actually works.</span>
          </SectionTitle>
          <div
            className="g3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}
          >
            {blocks.map((b, i) => (
              <div
                key={b.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(232,237,232,0.6)",
                  borderRadius: 20,
                  padding: "32px 30px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="fd"
                  style={{
                    fontSize: 36,
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginBottom: 18,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="fd" style={{ fontSize: 21, fontWeight: 700, color: "var(--td)", marginBottom: 10 }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.7 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JoinPrompt background="var(--ow)" />


      {/* FAQ */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <SectionTitle eyebrow="FAQ">
            Common <span className="fdi" style={{ color: "var(--gm)" }}>questions.</span>
          </SectionTitle>
          <FAQ items={faqs} />
        </div>
      </section>

      <ServiceCTA
        headline="Sustainable results start with"
        italicTail="understanding your metabolism."
      />
      <Footer />
    </>
  );
}
