import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JoinPrompt from "@/components/JoinPrompt";

export const metadata: Metadata = {
  title: "About Dr. Steven Mehta | Cardiologist & Longevity Physician | Scottsdale",
  description:
    "From the cath lab to longevity medicine. The story behind Dr. Steven Mehta — double board-certified cardiologist, ACC Governor for Arizona, and founder of the Oasis Longevity Program in Scottsdale, AZ.",
  alternates: { canonical: "/about" },
};

const milestones = [
  { era: "Medical School & Residency", body: "Foundational training in internal medicine — the rigor that shapes every clinical instinct." },
  { era: "Interventional Cardiology Fellowship", body: "Arizona Heart Institute. Trained in the most technically demanding procedures in cardiovascular medicine." },
  { era: "Director of Cardiovascular Intervention", body: "Years on the front line of advanced atherosclerotic disease." },
  { era: "Chief of Medical Staff & CMO", body: "Hospital-system leadership. Responsibility for the quality and culture of cardiovascular care." },
  { era: "ACC Governor — Arizona", body: "Elected to lead the American College of Cardiology — Arizona Chapter." },
  { era: "Phoenix Magazine Top Docs", body: "Named to the Top Doctors list by peer nomination — recognition awarded by other physicians." },
  { era: "Oasis Longevity Program", body: "Founded a physician-led longevity practice grounded in cardiovascular science." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO — wide cinematic */}
      <section
        className="dark-mesh-1"
        style={{
          background: "var(--dark)",
          padding: "180px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-lg" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Dr. Mehta" }]} dark />
          <div
            className="about-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1.2fr",
              gap: "clamp(40px,6vw,100px)",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: 28,
                overflow: "hidden",
                border: "1px solid rgba(201,169,110,0.2)",
                boxShadow: "0 50px 120px rgba(0,0,0,0.55)",
              }}
            >
              <Image
                src="/ssmehta.jpg"
                alt="Dr. Steven Mehta — Board-Certified Cardiologist & Longevity Physician"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 560px"
                className="object-cover object-top"
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
                  marginBottom: 28,
                }}
              >
                Steven S. Mehta, MD
              </p>
              <h1
                className="fd"
                style={{
                  fontSize: "clamp(34px,4.6vw,68px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.08,
                  letterSpacing: "-0.01em",
                }}
              >
                I spent years treating the consequences of disease.{" "}
                <span className="fdi" style={{ color: "var(--gold)" }}>
                  Now I work to ensure they never happen.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN — alternating image/text rows */}
      <section style={{ background: "var(--tl)", padding: "120px 0 60px" }}>
        <div className="mx-lg">
          <div style={{ maxWidth: 1120, marginBottom: 72 }}>
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
              The Origin
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(32px,3.6vw,54px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              A physician shaped by family, music, and a thousand patients in crisis.
            </h2>
          </div>

          <StoryRow
            index="Chapter 01"
            heading={
              <>
                A family <span className="fdi" style={{ color: "var(--gm)" }}>language.</span>
              </>
            }
            paragraphs={[
              "Steven Mehta grew up in a household where medicine wasn't a career choice so much as a shared language. His father practiced. His two sisters followed. Conversations at the dinner table wandered between clinical reasoning and weekend plans without changing register.",
              "Music shaped him in parallel. Years of listening, playing, and developing the kind of attention ensemble work rewards. The discipline turned out to be unexpectedly clinical — a physician listening to a patient is doing the same work as a musician listening for the part beneath the melody.",
            ]}
            pull="I trained to listen to ensembles. Then I trained to listen to bodies. The disciplines turned out to be the same."
          />

          <StoryRow
            index="Chapter 02"
            heading={
              <>
                The path to the <span className="fdi" style={{ color: "var(--gm)" }}>cath lab.</span>
              </>
            }
            paragraphs={[
              "Medical school. Residency in internal medicine, where the systemic thinking that would define his later work first took shape. Then fellowship at Arizona Heart Institute — a program known for the most technically demanding procedures in cardiovascular medicine, the kind that don't forgive imprecision.",
              "He came out of it a cardiologist who could see the inside of a coronary artery as clearly as the outside of a chart.",
            ]}
          />

          <StoryRow
            index="Chapter 03"
            heading={
              <>
                A career on the <span className="fdi" style={{ color: "var(--gm)" }}>front line.</span>
              </>
            }
            paragraphs={[
              "The cath lab years that followed were the formative chapter. He served as Director of Cardiovascular Intervention, then as Chief of Medical Staff and Chief Medical Officer — leadership roles that asked him to shape institutional culture as much as practice medicine.",
              "He treated thousands of patients with advanced atherosclerotic disease. He placed stents, opened arteries, and saved lives in acute crisis. He was, by any measure, doing the work he was trained to do.",
            ]}
            pull="Every patient who arrived in my cath lab had decades of warning signs. Almost no one had been listened to early enough."
          />
        </div>
      </section>

      {/* QUOTE BAND */}
      <section
        className="dark-mesh-2"
        style={{
          position: "relative",
          background: "var(--dark)",
          padding: "clamp(80px,10vw,130px) 0",
          overflow: "hidden",
        }}
      >
        <div
          className="mx-sm"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 980,
            textAlign: "center",
          }}
        >
          <p
            className="fdi"
            style={{
              fontSize: "clamp(24px,2.8vw,40px)",
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            &ldquo;The system was excellent at saving lives in crisis and almost designed to fail at preserving them
            over a lifetime.&rdquo;
          </p>
        </div>
      </section>

      {/* ORIGIN PART 2 */}
      <section style={{ background: "var(--tl)", padding: "100px 0 120px" }}>
        <div className="mx-lg">
          <StoryRow
            index="Chapter 04"
            heading={
              <>
                A wider <span className="fdi" style={{ color: "var(--gm)" }}>lens.</span>
              </>
            }
            paragraphs={[
              "An invitation to teach in China widened the lens further. He saw systems-level thinking about health, prevention as infrastructure rather than afterthought, and integrative philosophies that — while not always translatable to evidence-based practice — clarified what the American system had stopped asking.",
              "The experience didn't change his clinical foundation. It changed what he wanted to build with it.",
            ]}
          />

          <StoryRow
            index="Chapter 05"
            heading={
              <>
                What he <span className="fdi" style={{ color: "var(--gm)" }}>built.</span>
              </>
            }
            paragraphs={[
              "Oasis Longevity is the answer he arrived at. Not a wellness center. Not a biohacking clinic. Not a functional medicine practice.",
              "A physician-led longevity program grounded in the cardiovascular science he spent decades mastering — built for patients who want their care designed around the long arc of their lives instead of the arrival of the next emergency.",
            ]}
          />
        </div>
      </section>
      <JoinPrompt background="var(--ow)" />


      {/* PHILOSOPHY */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg">
          <div style={{ maxWidth: 1120, marginBottom: 72 }}>
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
              Philosophy
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
              Three beliefs that shape every decision in this practice.
            </h2>
          </div>

          <div style={{ borderBottom: "1px solid rgba(28,53,56,0.13)" }}>
            <Belief
              n="01"
              title={<>Prevention <span className="fdi" style={{ color: "var(--gm)" }}>over reaction.</span></>}
            >
              Waiting for disease is the wrong model. Conventional medicine is engineered to intervene after damage is
              done — efficient at acute care, structurally indifferent to slow decline. Longevity medicine intervenes
              while the body still has the capacity to change course. That earlier window is where the real leverage
              lives.
            </Belief>
            <Belief
              n="02"
              title={<>Systems <span className="fdi" style={{ color: "var(--gm)" }}>over symptoms.</span></>}
            >
              Cardiovascular health isn&apos;t one category among many. It is the operating system. Vascular integrity
              underpins cognition, metabolic function, sexual health, physical performance, and cellular aging. When the
              cardiovascular system deteriorates, everything downstream follows — which is why the depth of cardiology
              training behind a longevity protocol matters far more than the surface of it suggests.
            </Belief>
            <Belief
              n="03"
              title={<>Partnership <span className="fdi" style={{ color: "var(--gm)" }}>over prescriptions.</span></>}
            >
              The physician–client relationship is the intervention. No protocol works without a physician who knows the
              patient deeply enough to adapt it as life unfolds. This is why Dr. Mehta works with a limited number of
              clients at any one time. Depth over volume — every protocol revision is a personal decision, not an
              algorithmic one.
            </Belief>
          </div>
        </div>
      </section>

      {/* CTA — lifestyle image */}
      <section
        style={{
          position: "relative",
          padding: "clamp(100px,12vw,160px) 0",
          overflow: "hidden",
        }}
      >
        <Image
          src="/active-aging-couple-cycling-cardiovascular-health.jpg"
          alt="Active aging couple cycling — partnership in lifelong health"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,31,31,0.62), rgba(28,53,56,0.78))",
          }}
        />
        <div
          className="mx-sm"
          style={{ position: "relative", zIndex: 1, maxWidth: 760, textAlign: "center" }}
        >
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(30px,3.4vw,50px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 22,
            }}
          >
            A partnership built around{" "}
            <span className="fdi" style={{ color: "var(--gold)" }}>your whole life.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(232,237,232,0.8)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Depth over volume. Dr. Mehta works with a limited number of clients at any one time.
          </p>
          <Link href="/contact" className="btn-gold" style={{ padding: "18px 40px", fontSize: 12 }}>
            Join Our Practice
          </Link>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              The Career
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
              From the cath lab to <span className="fdi" style={{ color: "var(--gm)" }}>longevity medicine.</span>
            </h2>
          </div>

          <ol
            className="career-timeline"
            style={{
              position: "relative",
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${milestones.length}, 1fr)`,
              gap: 16,
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 18,
                left: 8,
                right: 8,
                height: 1,
                background: "linear-gradient(90deg,rgba(201,169,110,0.5),rgba(201,169,110,0.1))",
              }}
            />
            {milestones.map((m) => (
              <li
                key={m.era}
                className="career-item"
                style={{ position: "relative", paddingTop: 44 }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 11,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    boxShadow: "0 0 0 4px var(--tl), 0 0 0 5px rgba(201,169,110,0.3)",
                  }}
                />
                <h3
                  className="fd"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--td)",
                    marginBottom: 6,
                    lineHeight: 1.3,
                    textAlign: "center",
                  }}
                >
                  {m.era}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--tm)",
                    lineHeight: 1.55,
                    textAlign: "center",
                  }}
                >
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BEYOND MEDICINE */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div
          className="mx-lg story-row"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.42fr) minmax(0,1fr)",
            gap: "clamp(36px,5vw,90px)",
            alignItems: "start",
          }}
        >
          <div className="story-row-head">
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
              Beyond Medicine
            </p>
            <h2
              className="fd"
              style={{
                fontSize: "clamp(28px,2.8vw,40px)",
                fontWeight: 700,
                color: "var(--td)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
              }}
            >
              A life outside the <span className="fdi" style={{ color: "var(--gm)" }}>clinic.</span>
            </h2>
          </div>
          <div style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.8, maxWidth: 680 }}>
            <p style={{ marginBottom: 18 }}>
              Music is still part of the daily picture — listening, playing, paying attention to ensembles in the way
              that first taught him how to be present. He says the discipline of music made him a better physician.
            </p>
            <p style={{ marginBottom: 18 }}>
              He&apos;s a husband and father. He applies the same principles to his own health that he asks of his
              patients — not because he has to, but because the model works in both directions.
            </p>
            <p>
              Outside of clinic and family, the throughline is the same: a quiet curiosity about how systems work,
              what they need to keep working, and what gets in the way.
            </p>
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
        <div
          className="mx-sm"
          style={{ position: "relative", zIndex: 1, maxWidth: 1080, textAlign: "center" }}
        >
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(30px,3.2vw,48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ready to work with <span className="fdi" style={{ color: "var(--gold)" }}>Dr. Mehta?</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(232,237,232,0.6)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Limited enrollment. Every application is reviewed by Dr. Mehta personally.
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

function StoryRow({
  index,
  heading,
  paragraphs,
  pull,
}: {
  index?: string;
  heading: React.ReactNode;
  paragraphs: string[];
  pull?: string;
}) {
  return (
    <div
      className="story-row"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,0.42fr) minmax(0,1fr)",
        gap: "clamp(36px,5vw,90px)",
        padding: "clamp(44px,5vw,68px) 0",
        borderTop: "1px solid rgba(28,53,56,0.13)",
        alignItems: "start",
      }}
    >
      <div className="story-row-head">
        {index && (
          <div
            className="fd"
            style={{
              fontSize: 15,
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "0.14em",
              color: "var(--gold)",
              marginBottom: 14,
            }}
          >
            {index}
          </div>
        )}
        <h3
          className="fd"
          style={{
            fontSize: "clamp(26px,2.8vw,40px)",
            fontWeight: 700,
            color: "var(--td)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
        >
          {heading}
        </h3>
      </div>
      <div style={{ maxWidth: 680 }}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.8, marginBottom: 18 }}
          >
            {p}
          </p>
        ))}
        {pull && (
          <blockquote
            className="fdi"
            style={{
              fontSize: "clamp(20px,1.9vw,26px)",
              color: "var(--gd)",
              lineHeight: 1.45,
              fontWeight: 500,
              marginTop: 26,
              paddingLeft: 24,
              borderLeft: "2px solid var(--gold)",
            }}
          >
            {pull}
          </blockquote>
        )}
      </div>
    </div>
  );
}

function Belief({
  n,
  title,
  children,
}: {
  n: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="story-row"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,0.42fr) minmax(0,1fr)",
        gap: "clamp(36px,5vw,90px)",
        padding: "clamp(44px,5vw,64px) 0",
        borderTop: "1px solid rgba(28,53,56,0.13)",
        alignItems: "start",
      }}
    >
      <div className="story-row-head" style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
        <span
          className="fd"
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "var(--gold)",
            lineHeight: 1,
            fontStyle: "italic",
          }}
        >
          {n}
        </span>
        <h3
          className="fd"
          style={{
            fontSize: "clamp(26px,2.8vw,40px)",
            fontWeight: 700,
            color: "var(--td)",
            lineHeight: 1.12,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
      </div>
      <p style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.8, maxWidth: 680 }}>
        {children}
      </p>
    </div>
  );
}
