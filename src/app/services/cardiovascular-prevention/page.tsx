import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ServiceHero, ServiceCTA, SectionTitle } from "@/components/ServiceShell";
import JoinPrompt from "@/components/JoinPrompt";
import MedicalWebPageSchema from "@/components/MedicalWebPageSchema";

const SLUG = "/services/cardiovascular-prevention";
const TITLE = "Cardiovascular Prevention Scottsdale | Dr. Mehta";
const DESCRIPTION =
  "Decades of interventional cardiology applied to prevention. Early detection and personalized cardiovascular care with Dr. Mehta in Scottsdale, AZ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SLUG },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const pillars = [
  { n: "I", title: "Risk Stratification", body: "Understanding where you sit on the spectrum from healthy to subclinical disease to established risk. Not a binary assessment — a nuanced evaluation of your trajectory." },
  { n: "II", title: "Early Detection", body: "Identifying atherosclerosis, metabolic dysfunction, and inflammatory patterns at the stage where they can be reversed, not just managed." },
  { n: "III", title: "Targeted Intervention", body: "Evidence-based protocols for reducing cardiovascular risk: pharmaceutical, nutritional, exercise-based, and behavioral. Tailored to your specific risk profile." },
  { n: "IV", title: "Longitudinal Monitoring", body: "Tracking your cardiovascular trajectory over time to confirm interventions are working and catch new risks as they emerge." },
];

const beneficiaries = [
  { t: "Personal history", d: "People with a personal history of cardiovascular disease who want a longitudinal partner managing their long-term trajectory." },
  { t: "Family history", d: "Individuals with a family history of heart disease who want to change their inherited trajectory rather than wait to confirm it." },
  { t: "Cardiometabolic risk", d: "Those with elevated blood sugar, lipid abnormalities, high blood pressure, excess visceral fat, or fatty liver — the silent drivers of cardiovascular events." },
  { t: "No known risk", d: "People without obvious risk factors who want to establish a cardiovascular baseline and protect their long-term health proactively." },
];

const beyond = [
  { t: "Brain Health", d: "Cerebrovascular integrity drives cognitive function and dementia risk across decades." },
  { t: "Metabolic Health", d: "Insulin sensitivity and vascular health reinforce each other — improving one almost always improves the other." },
  { t: "Sexual Function", d: "Erectile dysfunction is often the earliest clinical sign of cardiovascular disease." },
  { t: "Physical Performance", d: "VO₂ max — the single strongest predictor of all-cause mortality — is fundamentally a cardiovascular metric." },
];

const faqs = [
  {
    q: "What does cardiovascular prevention entail?",
    a: "Dr. Mehta evaluates your health history, lab work, and risk factors to assess your cardiovascular trajectory. Based on the findings, he provides personalized guidance on reducing your risk — which may include recommendations for nutrition, exercise, stress management, supplementation, medication, and specialist referrals when needed.",
  },
  {
    q: "How is this different from seeing a regular cardiologist?",
    a: "Most cardiologists operate in a reactive model — you see them after a problem is detected. Dr. Mehta's practice is built around interception: identifying and addressing cardiovascular risk factors years or decades before they become clinical disease. His interventional background means he's treated the worst outcomes and now works to prevent them entirely.",
  },
  {
    q: "What types of cardiovascular disease can be prevented?",
    a: "Preventive strategies can reduce the risk of atherosclerosis, coronary artery disease, heart attack, stroke, heart failure, and peripheral artery disease. The earlier intervention begins, the more effective it is.",
  },
  {
    q: "I feel fine — do I still need cardiovascular prevention?",
    a: "Cardiovascular disease is often called the \"silent killer\" because it develops over decades without symptoms. By the time symptoms appear, significant damage has already occurred. Establishing a baseline and monitoring your trajectory — even when you feel perfectly healthy — is one of the most impactful things you can do for your long-term health.",
  },
];

export default function CardiovascularPreventionPage() {
  return (
    <>
      <MedicalWebPageSchema slug={SLUG} title={TITLE} description={DESCRIPTION} specialty="Cardiovascular" />
      <Navbar />

      <ServiceHero
        service="Cardiovascular Prevention"
        headline="Cardiovascular Prevention."
        subtitle="Guided by a double board-certified interventional cardiologist with decades of experience treating — and now preventing — heart disease."
      />

      {/* WHY IT MATTERS */}
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
            <SectionTitle eyebrow="The Stakes">
              The leading cause of death is also the most <span className="fdi" style={{ color: "var(--gm)" }}>preventable.</span>
            </SectionTitle>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                Heart disease remains the leading cause of death worldwide, yet the vast majority of cardiovascular
                events are preventable with early detection and intervention. The challenge is that most people never
                find out their true risk in time.
              </p>
              <p style={{ marginBottom: 18 }}>
                Standard screenings miss the signal. A normal cholesterol panel tells an incomplete story. By the time
                symptoms appear, decades of silent vascular damage have already occurred.
              </p>
              <p>
                Dr. Mehta spent years as an interventional cardiologist treating the end stage of cardiovascular
                disease — placing stents, opening blocked arteries, managing heart attacks. That experience informs
                his approach to prevention: he knows exactly what advanced disease looks like, and he works to ensure
                his patients never reach that point.
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
              src="/heart-monitoring-preventive-cardiology-scottsdale.webp"
              alt="Heart monitoring preventive cardiology Scottsdale"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* THE APPROACH — 4 Roman numeral pillars */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1240 }}>
          <SectionTitle eyebrow="The Approach">
            Four pillars of preventive <span className="fdi" style={{ color: "var(--gm)" }}>cardiology.</span>
          </SectionTitle>
          {pillars.map((p) => (
            <div
              key={p.n}
              className="pillar-row"
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: "1px solid rgba(28,53,56,0.1)",
                alignItems: "baseline",
              }}
            >
              <span
                className="fd"
                style={{
                  fontSize: 56,
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                {p.n}
              </span>
              <div>
                <h3 className="fd" style={{ fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.8, maxWidth: 920 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <JoinPrompt background="var(--ow)" />


      {/* WHO BENEFITS */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <SectionTitle eyebrow="Who Benefits">
            Built for the people most at <span className="fdi" style={{ color: "var(--gm)" }}>cardiovascular risk.</span>
          </SectionTitle>
          <div className="g2 cv-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {beneficiaries.map((b) => (
              <div key={b.t} className="cl" style={{ padding: "26px 28px" }}>
                <h3 className="fd" style={{ fontSize: 19, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>
                  {b.t}
                </h3>
                <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21/8",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(28,53,56,0.08)",
              boxShadow: "0 30px 70px rgba(28,53,56,0.1)",
              marginTop: 28,
            }}
          >
            <Image
              src="/cardiovascular-assessment-preventive-cardiology-exam.webp"
              alt="Cardiovascular prevention exam assessment"
              fill
              sizes="(max-width: 1280px) 100vw, 1180px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BEYOND THE HEART — dark */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-lg" style={{ position: "relative", zIndex: 1, maxWidth: 1240 }}>
          <SectionTitle eyebrow="Beyond the Heart" dark>
            Cardiovascular health is the <span className="fdi" style={{ color: "var(--gold)" }}>foundation.</span>
          </SectionTitle>
          <div className="g2 cv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {beyond.map((b) => (
              <div
                key={b.t}
                className="cd"
                style={{ padding: "26px 24px" }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{b.t}</h3>
                <p style={{ fontSize: 14, color: "rgba(232,237,232,0.6)", lineHeight: 1.6 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        headline="Prevention starts with"
        italicTail="understanding your risk."
      />
      <Footer />
    </>
  );
}
