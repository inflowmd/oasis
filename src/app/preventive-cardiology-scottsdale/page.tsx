import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Preventive Cardiology in Scottsdale | Cardiologist-Led | Oasis Longevity",
  description:
    "Cardiovascular disease is the leading cause of death — and 80% of it is preventable. Inside the philosophy of preventive cardiology with Dr. Steven Mehta, double board-certified cardiologist in Scottsdale, AZ.",
  alternates: { canonical: "/preventive-cardiology-scottsdale" },
};

export default function PreventiveCardiologyScottsdale() {
  return (
    <>
      <Navbar />

      {/* HERO — dark, serious */}
      <section
        className="dark-mesh-1"
        style={{
          background: "var(--dark)",
          padding: "180px 0 110px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-lg" style={{ position: "relative", zIndex: 1, maxWidth: 1240 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Approach", href: "#" }, { label: "Preventive Cardiology" }]} dark />
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 22,
            }}
          >
            Preventive Cardiology
          </p>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(38px,5vw,72px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              marginBottom: 26,
            }}
          >
            The Heart of <span className="fdi" style={{ color: "var(--gold)" }}>Longevity.</span>
          </h1>
          <p style={{ fontSize: 19, color: "rgba(232,237,232,0.7)", lineHeight: 1.7, maxWidth: 1080 }}>
            Cardiovascular disease is the leading cause of death worldwide. Eighty percent of it is preventable. The
            question is whether anyone is looking early enough.
          </p>
        </div>
      </section>

      {/* CASE FOR PREVENTION */}
      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1120 }}>
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
            The Case
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
            Why prevention has to start <span className="fdi" style={{ color: "var(--gm)" }}>decades earlier.</span>
          </h2>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.9 }}>
            <p style={{ marginBottom: 18 }}>
              Heart disease kills more people than cancer, accidents, and respiratory disease combined. The number is
              not new. What is new is the recognition that the great majority of these deaths reflect decades of silent
              vascular damage that was, at every stage, identifiable — and at most stages, reversible.
            </p>
            <p style={{ marginBottom: 18 }}>
              The challenge is that most people don&apos;t know their true cardiovascular risk because the standard
              testing misses it. A normal cholesterol panel tells an incomplete story. Population-derived thresholds
              flag the patients who are already in trouble while reassuring the ones who are five years from being in
              trouble. By the time symptoms appear, the silent phase is over.
            </p>
            <p>
              Vascular aging is not a heart story alone. The same processes that drive coronary disease drive cognitive
              decline, kidney dysfunction, sexual dysfunction, and the progressive loss of physical capacity that most
              people accept as &ldquo;getting older.&rdquo; The cardiovascular system is the substrate. Everything else is
              downstream.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE BREAK */}
      <section
        style={{
          position: "relative",
          height: "clamp(300px, 40vw, 520px)",
          overflow: "hidden",
          background: "var(--dark)",
        }}
      >
        <Image
          src="/application-discovery.jpeg"
          alt="Cardiovascular assessment in clinical practice"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.55 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(120deg, rgba(15,31,31,0.75), rgba(28,53,56,0.55) 50%, rgba(15,31,31,0.85))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 6%",
          }}
        >
          <div className="mx-lg" style={{ width: "100%" }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              Eighty Percent Preventable
            </p>
            <h3
              className="fd"
              style={{
                fontSize: "clamp(28px,3.4vw,52px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                maxWidth: 1120,
              }}
            >
              The most common cause of death is also the most{" "}
              <span className="fdi" style={{ color: "var(--gold)" }}>preventable.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* WHAT IT LOOKS LIKE — 4 numbered blocks, distinct from homepage */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 56, maxWidth: 1080 }}>
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
              The Approach
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(30px,3.2vw,44px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.15,
              }}
            >
              Four pillars of preventive <span className="fdi" style={{ color: "var(--gm)" }}>cardiology.</span>
            </h2>
          </div>

          {[
            {
              n: "I",
              t: "Risk Stratification",
              d: "Understanding where you sit on the spectrum from healthy to subclinical disease to established risk. Not a binary &ldquo;you&apos;re fine&rdquo; or &ldquo;you&apos;re sick&rdquo; — a nuanced read on your individual trajectory and the biology driving it.",
            },
            {
              n: "II",
              t: "Early Detection",
              d: "Finding atherosclerosis, metabolic dysfunction, and inflammatory patterns at the stage where they can be reversed, not just managed. The goal is interception, not reaction.",
            },
            {
              n: "III",
              t: "Targeted Intervention",
              d: "Evidence-based protocols for bending the curve — pharmaceutical, nutritional, exercise-based, and behavioral — calibrated to your specific risk profile and biomarkers rather than to population averages.",
            },
            {
              n: "IV",
              t: "Longitudinal Monitoring",
              d: "Tracking your trajectory over time to confirm interventions are working and to surface new risks as they emerge. Prevention isn&apos;t a one-time event. It&apos;s an ongoing practice.",
            },
          ].map((p) => (
            <div
              key={p.n}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: "1px solid rgba(28,53,56,0.1)",
                alignItems: "baseline",
              }}
              className="pillar-row"
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
                <h3
                  className="fd"
                  style={{
                    fontSize: "clamp(22px,2.2vw,30px)",
                    fontWeight: 700,
                    color: "var(--td)",
                    marginBottom: 12,
                  }}
                >
                  {p.t}
                </h3>
                <p
                  style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.8, maxWidth: 1040 }}
                  dangerouslySetInnerHTML={{ __html: p.d }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARDIOLOGIST'S ADVANTAGE */}
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
            The Cardiologist&apos;s Advantage
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(30px,3.4vw,48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Same data. <span className="fdi" style={{ color: "var(--gold)" }}>Different lens.</span>
          </h2>
          <div style={{ fontSize: 17, color: "rgba(232,237,232,0.7)", lineHeight: 1.9 }}>
            <p style={{ marginBottom: 18 }}>
              Most longevity physicians come from backgrounds in family medicine, emergency medicine, or naturopathic
              training. They approach the cardiovascular system as one component among many.
            </p>
            <p style={{ marginBottom: 18 }}>
              Dr. Mehta&apos;s perspective is inverted. After years of interventional cardiology — placing stents,
              opening arteries, treating heart attacks in real time — he understands the cardiovascular system not as
              one pillar of health but as the infrastructure that everything else depends on.
            </p>
            <p
              style={{
                paddingLeft: 22,
                borderLeft: "2px solid var(--gold)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.9)",
                fontSize: 18,
                marginTop: 28,
              }}
            >
              When a longevity physician with a family medicine background orders a lipid panel, they see cholesterol
              numbers. When an interventional cardiologist orders the same panel, he sees the arterial wall. The same
              data, interpreted through a fundamentally different clinical lens.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND THE HEART */}
      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1260 }}>
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
            Beyond the Heart
          </p>
          <h2
            className="fd"
            style={{
              fontSize: "clamp(30px,3.2vw,44px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.15,
              marginBottom: 40,
            }}
          >
            Cardiovascular health is the <span className="fdi" style={{ color: "var(--gm)" }}>foundation.</span>
          </h2>

          <div
            className="g2 cv-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
          >
            {[
              {
                t: "Brain Health",
                d: "Cerebrovascular integrity drives cognitive function, processing speed, and dementia risk across decades.",
              },
              {
                t: "Metabolic Health",
                d: "Insulin resistance and vascular inflammation reinforce each other — improving one almost always improves the other.",
              },
              {
                t: "Sexual Health",
                d: "Erectile dysfunction and reduced sexual function are often the earliest signs of cardiovascular disease.",
              },
              {
                t: "Physical Performance",
                d: "VO₂ max — the single strongest predictor of all-cause mortality — is fundamentally a cardiovascular metric.",
              },
              {
                t: "Cellular Aging",
                d: "Vascular health determines how efficiently every cell receives oxygen, nutrients, and signaling molecules.",
              },
              {
                t: "Kidney Function",
                d: "The kidneys are exquisitely sensitive to vascular health — declining renal function is often a downstream cardiovascular signal.",
              },
            ].map((it) => (
              <div
                key={it.t}
                className="cl"
                style={{ padding: "26px 28px" }}
              >
                <h3 className="fd" style={{ fontSize: 18, fontWeight: 700, color: "var(--gd)", marginBottom: 8 }}>
                  {it.t}
                </h3>
                <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>{it.d}</p>
              </div>
            ))}
          </div>
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
              marginBottom: 20,
              whiteSpace: "nowrap",
            }}
          >
            Prevention starts with <span className="fdi" style={{ color: "var(--gold)" }}>understanding your risk.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(232,237,232,0.6)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 540,
              margin: "0 auto 36px",
            }}
          >
            Apply for an initial assessment, or call to learn more.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
              Apply for Access
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
                padding: "17px 32px",
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
