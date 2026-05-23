import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JoinPrompt from "@/components/JoinPrompt";

export const metadata: Metadata = {
  title: "The Oasis Longevity Program | Dr. Steven Mehta | Scottsdale",
  description:
    "An ongoing physician-patient relationship built around your biology, your goals, and your life. Discover how Dr. Steven Mehta's longevity practice is designed to optimize your health.",
  alternates: { canonical: "/program" },
};

const phases = [
  {
    n: "01",
    title: "Discovery",
    image: "/dr-mehta-longevity-consultation-scottsdale.webp",
    body: [
      "Your first conversation with Dr. Mehta isn't a checklist. It's an exploration — of your history, your family's health patterns, your goals, your fears, what you've tried, what's worked, and what hasn't. He's listening for the story your data will tell.",
      "The diagnostic workup is built around you — not a standard panel applied to everyone. Dr. Mehta evaluates your health on a cardiovascular, metabolic, hormonal, and cellular level, selecting the specific assessments that matter for your individual risk profile and goals. No two clients receive identical workups, because no two clients arrive with identical biology.",
    ],
  },
  {
    n: "02",
    title: "Your Blueprint",
    image: "/doctor-patient-health-review-personalized-protocol.webp",
    body: [
      "When your results are in, Dr. Mehta doesn't hand you a printout and send you home. He synthesizes dozens of data points into a clear, actionable picture of where your health stands today — and where it's heading.",
      "The review session is unhurried and thorough. Every finding is explained. Every question is answered. Every recommendation is grounded in your specific data, not generic guidelines. The result is a personalized protocol — your longevity blueprint — designed around the intersection of your biology, your goals, and the best available evidence.",
    ],
    reverse: true,
  },
  {
    n: "03",
    title: "Implementation & Calibration",
    image: "/physician-reviewing-patient-data-longevity-program.webp",
    body: [
      "Your protocol isn't static. As your body responds — and as new data comes in — Dr. Mehta adjusts course. Early follow-ups are closer together, then settle into a rhythm as your trajectory becomes clear.",
      "This is where the breadth of Dr. Mehta's clinical expertise matters. The protocol may draw on hormonal optimization, peptide therapy, regenerative science, metabolic interventions, or advanced cardiovascular prevention — whatever your biology calls for. The specific modalities are determined by your data, not by a menu.",
    ],
  },
];

const fitFor = [
  "Want a physician who sees the full picture, not just a snapshot",
  "Are proactive about their health and willing to invest in prevention",
  "Value an ongoing relationship over episodic visits",
  "Want decisions guided by data, not trends",
  "Are ready to commit to a long-term health partnership",
];

const fitNot = [
  "Are looking for a quick fix or a single treatment",
  "Want the most affordable option above all else",
  "Prefer to see a different provider each visit",
  "Are seeking a specific procedure without comprehensive evaluation",
  "Aren't ready for an ongoing physician relationship",
];

const faqs = [
  {
    q: "What is longevity medicine?",
    a: "Longevity medicine is a proactive approach to health that focuses on extending healthspan — the years you live in full vitality — rather than simply treating disease after it appears. It combines advanced diagnostics, personalized interventions, and ongoing monitoring to identify and address health risks decades before they become symptomatic. Think of it as the difference between maintaining an engine and waiting for it to break down.",
  },
  {
    q: "How is this different from my primary care doctor?",
    a: "Your primary care physician is essential for acute care and routine health management. But the conventional model is built around short visits, standard lab panels, and population-based guidelines. Dr. Mehta's practice goes deeper — with comprehensive diagnostics, extended consultations, and a personalized protocol that evolves with you over time. The two work best in complement, not competition.",
  },
  {
    q: "How is this different from functional medicine or naturopathic clinics?",
    a: "The most significant difference is clinical training. Dr. Mehta is a double board-certified cardiologist with fellowship training in interventional cardiology. He has the credentialing to interpret advanced cardiac imaging, prescribe and monitor cardiovascular medications, and manage the complex drug interactions that longevity protocols can involve. Many functional medicine and naturopathic providers offer valuable services, but they operate with a fundamentally different scope of training and clinical authority — particularly when it comes to the cardiovascular system, which is the foundation of longevity.",
  },
  {
    q: "What kind of testing is involved?",
    a: "The diagnostic approach is customized to each client based on their individual history, risk factors, and goals. Dr. Mehta selects from a broad range of cardiovascular, metabolic, hormonal, genomic, and body composition assessments — but no two clients receive identical workups. The goal is precision, not volume.",
  },
  {
    q: "How often will I see Dr. Mehta?",
    a: "The cadence of visits is tailored to your needs. New clients typically have more frequent touchpoints during the first few months as the initial protocol is implemented and calibrated. Over time, the rhythm settles into periodic reassessments and ongoing monitoring, with direct access to Dr. Mehta as questions arise between visits.",
  },
  {
    q: "Does insurance cover this?",
    a: "The program operates outside of standard insurance billing. However, program fees qualify as medical expenses eligible for HSA, HRA, FSA, and MSA funding. Many clients use pre-tax health accounts to fund their participation.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "Yes. The program is structured as an ongoing annual and follow-up routine diagnostic lifestyle and longevity exam. Program fees are 100% outside of and exceed standard plan coverage, making them eligible for HSA, HRA, FSA, and MSA funding.",
  },
  {
    q: "What if I need a specialist?",
    a: "When a finding requires specialist involvement, Dr. Mehta coordinates the referral directly — with context, continuity, and ongoing involvement. You're never simply handed off. His decades of practice in the Phoenix/Scottsdale medical community mean he has trusted relationships with specialists across every discipline.",
  },
  {
    q: "How do I get started?",
    a: "Start by submitting an inquiry. Dr. Mehta reviews every inquiry personally to ensure the program is the right fit. If accepted, your care coordinator will schedule your initial consultation and begin the onboarding process.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="dark-mesh-1"
        style={{
          background: "var(--dark)",
          padding: "180px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="mx-lg"
          style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", textAlign: "center" }}
        >
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "The Program" }]} dark />
          <h1
            className="fd"
            style={{
              fontSize: "clamp(36px,4.6vw,68px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginTop: 28,
              marginBottom: 24,
            }}
          >
            What to expect <span className="fdi" style={{ color: "var(--gold)" }}>when you join.</span>
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "rgba(232,237,232,0.7)",
              lineHeight: 1.7,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            This is not a one-time consultation. It&apos;s an ongoing physician–patient relationship built around your
            biology, your goals, and your life.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1160 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 18,
            }}
          >
            Why this exists
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(30px,3.4vw,46px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              marginBottom: 36,
            }}
          >
            You already know the standard model isn&apos;t working.
          </h2>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 20 }}>
              You&apos;ve probably experienced it — annual physicals that check boxes but miss the bigger picture. Lab
              results that say &ldquo;normal&rdquo; while you feel anything but. Short appointments with physicians who
              are already reaching for the door. Specialists who see one piece of you but never connect the dots.
            </p>
            <p style={{ marginBottom: 20 }}>
              Most of conventional medicine is designed to react to disease after it arrives. It waits for symptoms. It
              treats in isolation. It measures against population averages rather than your individual trajectory.
            </p>
            <p style={{ color: "var(--gd)", fontWeight: 500 }}>
              The Oasis Longevity Program was designed for people who want something fundamentally different — a
              physician who sees the full picture, takes the time to understand it, and builds a strategy to change it.
            </p>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg">
          <div style={{ textAlign: "center", marginBottom: 80, maxWidth: 1080, margin: "0 auto 80px" }}>
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
              Your First Chapter
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(30px,3.4vw,46px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.15,
              }}
            >
              How the relationship <span className="fdi" style={{ color: "var(--gm)" }}>begins.</span>
            </h2>
          </div>

          {phases.map((p) => (
            <div
              key={p.n}
              className="phase-row"
              style={{
                display: "grid",
                gridTemplateColumns: p.reverse ? "1.1fr 1fr" : "1fr 1.1fr",
                gap: "clamp(40px,6vw,90px)",
                alignItems: "center",
                marginBottom: 90,
              }}
            >
              <div className="phase-text" style={{ order: p.reverse ? 2 : 1 }}>
                <div
                  className="fd phase-number"
                  style={{
                    fontSize: 90,
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                    fontStyle: "italic",
                    marginBottom: 8,
                  }}
                >
                  {p.n}
                </div>
                <h3
                  className="fd phase-title"
                  style={{
                    fontSize: "clamp(28px,2.8vw,40px)",
                    fontWeight: 700,
                    color: "var(--td)",
                    marginBottom: 24,
                    lineHeight: 1.15,
                  }}
                >
                  {p.title}
                </h3>
                {p.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.8, marginBottom: 16 }}>
                    {para}
                  </p>
                ))}
              </div>
              <div
                className="phase-image"
                style={{
                  order: p.reverse ? 1 : 2,
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(232,237,232,0.4)",
                  boxShadow: "0 30px 80px rgba(28,53,56,0.15)",
                }}
              >
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <JoinPrompt background="var(--tl)" />


      {/* FULL-BLEED IMAGE BREAK */}
      <section
        style={{
          position: "relative",
          minHeight: "clamp(520px, 70vw, 720px)",
          padding: "clamp(120px,14vw,200px) 0",
          overflow: "hidden",
          background: "var(--dark)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/in-depth-review.jpeg"
          alt="In-depth review with Dr. Mehta"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.6, objectPosition: "center 30%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,31,31,0.55), rgba(28,53,56,0.7))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 6%",
          }}
        >
          <p
            className="fdi"
            style={{
              fontSize: "clamp(22px,2.6vw,36px)",
              color: "rgba(255,255,255,0.95)",
              textAlign: "center",
              maxWidth: 1260,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            &ldquo;The relationship is the intervention. No protocol works without a physician who knows the patient
            deeply enough to adapt it.&rdquo;
          </p>
        </div>
      </section>

      {/* THE ONGOING RELATIONSHIP */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 1180 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 18,
            }}
          >
            The Ongoing Relationship
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(30px,3.4vw,48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 36,
            }}
          >
            The first chapter is not the destination —{" "}
            <span className="fdi" style={{ color: "var(--gold)" }}>it&apos;s the foundation.</span>
          </h2>
          <div style={{ fontSize: 17, color: "rgba(232,237,232,0.7)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              The initial assessment is the beginning, not the destination. Your ongoing relationship with Dr. Mehta
              includes annual baseline reassessment, periodic lab work to track your trajectory, protocol adjustments
              as new evidence emerges, and direct physician access when questions arise.
            </p>
            <p style={{ marginBottom: 18 }}>
              When something concerning is found — and in preventive medicine, finding things early is the point —
              Dr. Mehta coordinates with a network of specialists he&apos;s built over decades of practice. You&apos;re
              never handed off. You&apos;re referred with context, continuity, and a physician who remains involved in
              every decision.
            </p>
            <p
              style={{
                marginTop: 28,
                paddingLeft: 22,
                borderLeft: "2px solid var(--gold)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                fontSize: 18,
              }}
            >
              Our ongoing annual and follow-up routine diagnostic lifestyle and longevity exam, combined with
              supportive year-round high-connection communications, creates a personalized physician–patient
              relationship designed to optimize your health.
            </p>
          </div>
        </div>
      </section>

      {/* THERAPEUTIC BREADTH */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1180 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 18,
            }}
          >
            Therapeutic Breadth
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(30px,3.4vw,46px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              marginBottom: 36,
            }}
          >
            A physician&apos;s strategy, not a <span className="fdi" style={{ color: "var(--gm)" }}>service menu.</span>
          </h2>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 20 }}>
              Dr. Mehta&apos;s clinical training spans interventional cardiology, internal medicine, and advanced
              longevity science. His practice draws on expertise across hormonal optimization, peptide therapy, exosome
              and regenerative cell science, and metabolic health — but the specific modalities used are determined
              entirely by your individual biology and goals.
            </p>
            <p>
              This is not a menu you order from. It&apos;s a physician-directed protocol built around evidence and your
              data. The difference between a longevity practice and a wellness clinic is the difference between a
              customized strategy and a catalog of services.
            </p>
          </div>
        </div>
      </section>

      {/* IS THIS RIGHT FOR YOU */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg">
          <div style={{ textAlign: "center", marginBottom: 64, maxWidth: 1040, margin: "0 auto 64px" }}>
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
              Is It a Fit?
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(30px,3.4vw,46px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.15,
              }}
            >
              Honest about <span className="fdi" style={{ color: "var(--gm)" }}>who this is for.</span>
            </h2>
          </div>
          <div
            className="fit-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            <FitColumn
              title="This program is designed for people who:"
              items={fitFor}
              positive
            />
            <FitColumn
              title="This program may not be the right fit if you:"
              items={fitNot}
              positive={false}
            />
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div
          className="mx-sm"
          style={{ maxWidth: 1120, textAlign: "center" }}
        >
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
            Investment
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(28px,3vw,42px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              marginBottom: 28,
            }}
          >
            A qualified medical expense.
          </h2>
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto 28px",
              padding: "30px 36px",
              borderRadius: 18,
              background: "#fff",
              border: "1px solid rgba(201,169,110,0.4)",
              boxShadow: "0 24px 60px rgba(28,53,56,0.08)",
              display: "flex",
              gap: 20,
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "var(--gold-pale)",
                border: "1px solid rgba(201,169,110,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                  fill="#C9A96E"
                />
              </svg>
            </div>
            <p
              className="fd"
              style={{
                fontSize: "clamp(17px,1.7vw,21px)",
                color: "var(--gd)",
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Cash patient annual subscription fees, payable annually or monthly, purchase annual comprehensive
              diagnostic and unlimited follow-up exams, supported by ongoing communication connection to your
              healthcare professional, to optimize your health.
            </p>
          </div>
          <p style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85, marginBottom: 18 }}>
            The program is structured as a qualified medical expense — eligible for funding through employer health
            plans, self-employed health deductions, HSA, HRA, FSA, and MSA accounts. Program fees are 100% outside of
            and exceed standard plan coverage.
          </p>
          <p style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85, marginBottom: 36 }}>
            Investment details are discussed during your initial consultation, because the right program structure
            depends on your individual health goals and needs.
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: "18px 36px", fontSize: 12 }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-sm">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            <h2 className="fd" style={{ fontSize: "clamp(30px,3vw,46px)", fontWeight: 700, color: "var(--td)" }}>
              Common <span className="fdi" style={{ color: "var(--gm)" }}>questions.</span>
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-mesh-3"
        style={{
          background: "var(--dark)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 1180, textAlign: "center" }}>
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(28px,3vw,44px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Your health is too important for{" "}
            <span className="fdi" style={{ color: "var(--gold)" }}>generic care.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(232,237,232,0.6)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Limited enrollment. Every inquiry is reviewed by Dr. Mehta personally.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
              Join Our Practice
            </Link>
            <a
              href="tel:4807207044"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "17px 36px",
                borderRadius: 999,
              }}
            >
              480-720-7044
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function FitColumn({
  title,
  items,
  positive,
}: {
  title: string;
  items: string[];
  positive: boolean;
}) {
  return (
    <div
      className={`fit-card ${positive ? "fit-card-pos" : "fit-card-neg"}`}
      style={{
        background: positive ? "#fff" : "rgba(28,53,56,0.04)",
        border: `1px solid ${positive ? "rgba(201,169,110,0.35)" : "rgba(28,53,56,0.1)"}`,
        borderRadius: 20,
        padding: "32px 30px",
      }}
    >
      <h3
        className="fd"
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "var(--td)",
          marginBottom: 22,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map((it) => (
          <li key={it} className="fit-item" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span
              aria-hidden
              style={{
                flexShrink: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: positive ? "var(--gold-pale)" : "rgba(28,53,56,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              {positive ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--gold)" />
                </svg>
              ) : (
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    fill="rgba(28,53,56,0.5)"
                  />
                </svg>
              )}
            </span>
            <span style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.6 }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
