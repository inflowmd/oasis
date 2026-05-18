import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JoinPrompt from "@/components/JoinPrompt";

export const metadata: Metadata = {
  title: "Longevity Medicine in Scottsdale | Cardiologist-Led | Oasis Longevity",
  description:
    "What longevity medicine actually is, who it's for, and why your physician's credentials matter more than you think. A primer on cardiologist-led longevity care in Scottsdale, AZ.",
  alternates: { canonical: "/longevity-medicine-scottsdale" },
};

export default function LongevityMedicineScottsdale() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(165deg, var(--ow) 0%, var(--tl) 60%, #F0EBE5 100%)",
          padding: "180px 0 90px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }}
          viewBox="0 0 900 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g opacity="0.06"><path d="M-20 250 L50 200 L120 250 L120 350 L50 400 L-20 350Z" fill="#1C3538" transform="scale(1.5) translate(-30,10)" /></g>
          <g opacity="0.045"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#C9A96E" transform="translate(700,80) scale(0.7)" /></g>
          <g opacity="0.04"><path d="M0 50 L70 0 L140 50 L140 150 L70 200 L0 150Z" fill="#F5F1EB" transform="translate(150,480) scale(0.5)" /></g>
        </svg>
        <div className="mx-lg" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Approach", href: "#" }, { label: "Longevity Medicine" }]} />
          <div
            className="phil-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "clamp(32px,5vw,80px)",
              alignItems: "center",
              marginTop: 28,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}
              >
                Longevity Medicine
              </p>
              <h1
                className="fd"
                style={{
                  fontSize: "clamp(36px,4.6vw,64px)",
                  fontWeight: 700,
                  color: "var(--td)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  marginBottom: 22,
                }}
              >
                Longevity Medicine <span className="fdi" style={{ color: "var(--gm)" }}>in Scottsdale.</span>
              </h1>
              <p style={{ fontSize: 19, color: "var(--tm)", lineHeight: 1.65, maxWidth: 600 }}>
                What it is, who it&apos;s for, and why your doctor&apos;s credentials matter more than you think.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(232,237,232,0.5)",
                boxShadow: "0 30px 80px rgba(28,53,56,0.12)",
              }}
            >
              <Image
                src="/advanced-diagnostics-longevity-medicine-technology.webp"
                alt="Advanced longevity medicine diagnostics Scottsdale"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <Reading title="What is longevity medicine?">
        <p>
          Longevity medicine is a discipline focused on extending <em>healthspan</em> — the years of life lived in good
          function — rather than maximizing lifespan in isolation. It assumes that the chronic conditions that kill most
          people are not inevitabilities; they are trajectories shaped by decades of physiology, lifestyle, and missed
          opportunities for early intervention.
        </p>
        <p>
          The conventional medical system is, by architecture, reactive. Visits are short. Tests are tied to insurance
          schedules. Diagnostic thresholds are population-derived rather than personal. The model is excellent at
          treating disease that has arrived — and structurally indifferent to the long, quiet phase before it arrives.
          That isn&apos;t a failure of physicians. It&apos;s a failure of design.
        </p>
        <p>
          A longevity-focused practice inverts the assumptions. Comprehensive diagnostics replace standard panels.
          Personalized protocols replace population guidelines. Ongoing physician relationships replace episodic visits.
          The goal is not to add a few weeks at the end of life. It is to compress disease into the shortest possible
          window and preserve cognitive, physical, and metabolic capacity across decades.
        </p>
        <Stat
          big="95%"
          label="of adults age 65+ live with at least one chronic condition — most preventable through earlier intervention."
        />
        <Stat
          big="12.7"
          label="years — the average gap between American lifespan and healthspan, lived in significant decline."
        />
      </Reading>

      {/* SCOTTSDALE LANDSCAPE */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1160 }}>
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
            The Scottsdale Landscape
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
            Not all longevity medicine is the <span className="fdi" style={{ color: "var(--gm)" }}>same.</span>
          </h2>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              The Phoenix–Scottsdale area has seen rapid growth in clinics marketing longevity, anti-aging, and
              optimization services. Many are led by naturopathic physicians, nurse practitioners, or functional
              medicine practitioners. Many offer IV therapy, hormone pellets, and supplement protocols under the
              umbrella of &ldquo;longevity medicine.&rdquo;
            </p>
            <p>
              While these providers may offer valuable services within their scope, there is a meaningful difference
              between a wellness clinic and a physician-led longevity practice — particularly when it comes to
              cardiovascular assessment, pharmaceutical management, and the clinical judgment required to interpret
              complex diagnostic data. The label is the same. The training underneath it is not.
            </p>
          </div>
        </div>
      </section>
      <JoinPrompt background="var(--tl)" />


      {/* FULL-BLEED BREAK */}
      <section
        style={{
          position: "relative",
          height: "clamp(260px, 32vw, 420px)",
          overflow: "hidden",
          background: "var(--dark)",
        }}
      >
        <Image
          src="/partnership.jpeg"
          alt="Longitudinal physician partnership"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.65 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,31,31,0.5), rgba(28,53,56,0.7))",
          }}
        />
      </section>

      {/* CREDENTIALS MATTER */}
      <section style={{ background: "var(--ow)", padding: "100px 0" }}>
        <div
          className="mx phil-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(40px,6vw,80px)",
          }}
        >
          <div>
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
              Why Credentials Matter
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(28px,3vw,42px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              The same data, read through a <span className="fdi" style={{ color: "var(--gm)" }}>different lens.</span>
            </h2>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                A board-certified cardiologist reads cardiovascular data differently than a provider who hasn&apos;t
                spent years inside coronary arteries. Where a generalist sees a number on a lipid panel, a cardiologist
                sees the arterial wall. Where an unsupervised algorithm flags a hormone level, a cardiologist sees the
                downstream cardiac risk of an intervention.
              </p>
              <p style={{ marginBottom: 18 }}>
                This isn&apos;t a credential argument for its own sake. It&apos;s a clinical-safety argument. Longevity
                protocols increasingly involve agents — peptides, hormones, GLP-1 medications, off-label
                pharmaceuticals — that interact with the cardiovascular system in non-trivial ways. The supervising
                physician&apos;s training shapes whether those interactions are anticipated or discovered after the fact.
              </p>
              <p>
                Search engines and AI assistants now formally weight medical content by E-E-A-T criteria — Experience,
                Expertise, Authoritativeness, Trust. Patients are doing the same thing intuitively. They want to know
                who is actually responsible for the decisions affecting their long-term health.
              </p>
            </div>
          </div>

          <aside
            style={{
              background: "#fff",
              border: "1px solid rgba(232,237,232,0.6)",
              borderRadius: 20,
              padding: "32px 30px",
              alignSelf: "start",
              boxShadow: "0 24px 60px rgba(28,53,56,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              What a Cardiologist Brings
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                "Advanced cardiac imaging interpretation",
                "Prescription authority for cardiovascular agents with proper monitoring",
                "Understanding of drug interactions across complex protocols",
                "Fellowship training in invasive coronary assessment",
                "First-hand experience treating the disease longevity medicine prevents",
                "Clinical authority for E-E-A-T-aligned medical decisions",
              ].map((it) => (
                <li key={it} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14, color: "var(--tm)", lineHeight: 1.55 }}>
                  <span
                    aria-hidden
                    style={{
                      flexShrink: 0,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "var(--gold-pale)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--gold)" />
                    </svg>
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* WHO SEEKS IT */}
      <section style={{ background: "var(--tl)", padding: "100px 0" }}>
        <div
          className="mx-lg phil-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "clamp(40px,5vw,72px)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(232,237,232,0.5)",
              boxShadow: "0 30px 70px rgba(28,53,56,0.1)",
            }}
          >
            <Image
              src="/dr-mehta-longevity-consultation-scottsdale.webp"
              alt="Longevity medicine consultation Scottsdale Arizona"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className="object-cover"
            />
          </div>
          <div>
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
              Who Seeks It
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(28px,3vw,42px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.15,
                marginBottom: 36,
              }}
            >
              The patients drawn to <span className="fdi" style={{ color: "var(--gm)" }}>this approach.</span>
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                {
                  t: "High-performing professionals.",
                  d: "Executives who need sustained cognitive and physical output across a long career, and who are uninterested in waiting for symptoms to appear.",
                },
                {
                  t: "Engaged parents.",
                  d: "Mothers and fathers who want to be active and present for the long arc of their children's lives, not just a few healthy years.",
                },
                {
                  t: "Family-history-aware patients.",
                  d: "Anyone with a meaningful family history of heart disease, cancer, or neurodegenerative disease who wants to change their trajectory rather than wait to confirm it.",
                },
                {
                  t: "&ldquo;Fine&rdquo; isn't enough.",
                  d: "People who feel fine by conventional standards but understand that fine isn't optimal — and want their care held to a higher bar.",
                },
                {
                  t: "Disenchanted with conventional care.",
                  d: "Patients who have been through the standard system and felt unseen, unheard, or undertested — and want a relationship with a physician again.",
                },
              ].map((row) => (
                <li
                  key={row.t}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(232,237,232,0.6)",
                    borderRadius: 16,
                    padding: "20px 24px",
                  }}
                >
                  <h3
                    className="fd"
                    style={{ fontSize: 19, fontWeight: 700, color: "var(--td)", marginBottom: 6 }}
                    dangerouslySetInnerHTML={{ __html: row.t }}
                  />
                  <p style={{ fontSize: 15, color: "var(--tm)", lineHeight: 1.65 }}>{row.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 1080, textAlign: "center" }}>
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(30px,3.2vw,46px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ready to take a different <span className="fdi" style={{ color: "var(--gold)" }}>approach?</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(232,237,232,0.6)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            Learn how the program is structured, or apply for an initial consultation.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/program" className="btn-gold" style={{ padding: "18px 36px", fontSize: 12 }}>
              Explore the Program
            </Link>
            <Link
              href="/contact"
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
              Join Our Practice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Reading({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ background: "var(--ow)", padding: "100px 0" }}>
      <div className="mx-sm" style={{ maxWidth: 1120 }}>
        <h2
          className="fd"
          style={{
            fontSize: "clamp(28px,3vw,42px)",
            fontWeight: 700,
            color: "var(--td)",
            lineHeight: 1.15,
            marginBottom: 36,
          }}
        >
          {title}
        </h2>
        <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.85 }}>{children}</div>
      </div>
    </section>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div
      style={{
        margin: "32px 0",
        padding: "24px 28px",
        background: "var(--tl)",
        borderLeft: "3px solid var(--gold)",
        borderRadius: 6,
        display: "flex",
        gap: 24,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span
        className="fd"
        style={{
          fontSize: "clamp(36px,4vw,52px)",
          fontWeight: 700,
          color: "var(--gd)",
          lineHeight: 1,
        }}
      >
        {big}
      </span>
      <span style={{ flex: 1, minWidth: 200, fontSize: 15, color: "var(--tm)", lineHeight: 1.6 }}>{label}</span>
    </div>
  );
}
