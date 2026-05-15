import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ServiceHero, ServiceCTA, SectionTitle } from "@/components/ServiceShell";
import JoinPrompt from "@/components/JoinPrompt";

export const metadata: Metadata = {
  title: "Hormone Optimization in Scottsdale | Cardiologist-Led | Oasis Longevity",
  description:
    "Bioidentical hormone optimization with cardiovascular safety oversight. Restore vitality, protect long-term health, and slow age-related decline — under the guidance of a board-certified cardiologist.",
  alternates: { canonical: "/services/hormone-optimization" },
};

const faqs = [
  {
    q: "Who can benefit from hormone optimization?",
    a: "Anyone experiencing symptoms of hormonal decline — fatigue, weight gain, brain fog, reduced libido, sleep disruption, loss of muscle mass — may benefit from evaluation. Additionally, men and women over 30 who want to proactively maintain hormonal balance as part of a longevity strategy can benefit from assessment, even without obvious symptoms.",
  },
  {
    q: "What are the signs of a hormonal imbalance?",
    a: "Common signs include persistent fatigue, unexplained weight gain, difficulty concentrating, mood changes, sleep disturbances, reduced libido, loss of lean muscle, hair changes, and for women, irregular periods or menopausal symptoms. Because hormone levels fluctuate throughout the day and lab reference ranges are broad, a thorough clinical evaluation — not just a blood draw — is essential for accurate diagnosis.",
  },
  {
    q: "Is bioidentical hormone therapy safe?",
    a: "Bioidentical hormones are chemically identical to the hormones your body naturally produces. When prescribed and monitored by a qualified physician, they are well-tolerated with minimal side effects. Dr. Mehta's background in cardiology adds an additional layer of safety — he monitors cardiovascular markers alongside hormonal levels to ensure the therapy supports your overall health.",
  },
  {
    q: "How is this different from a hormone clinic or med spa?",
    a: "Most hormone clinics are run by nurse practitioners or naturopathic physicians without cardiology training. Hormone therapy can affect cardiovascular risk factors including lipid profiles, blood pressure, and clotting. Dr. Mehta brings decades of cardiology experience to hormone management, ensuring that optimization doesn't come at the expense of cardiovascular safety.",
  },
];

const pillars = [
  {
    title: "Cardiovascular Safety",
    body: "Hormone therapy can affect lipid profiles, blood pressure, and clotting factors. A cardiologist monitors these interactions in real time, adjusting protocols to protect cardiovascular health while optimizing hormones.",
  },
  {
    title: "Precision Dosing",
    body: "Dr. Mehta uses bioidentical hormones — chemically identical to what your body produces — and titrates dosing based on your individual biology, symptoms, and lab data. No two patients receive the same protocol.",
  },
  {
    title: "Integrated Monitoring",
    body: "Hormone optimization doesn't happen in isolation. Dr. Mehta evaluates your full metabolic, cardiovascular, and hormonal picture together, ensuring that every intervention supports your overall health trajectory.",
  },
];

export default function HormoneOptimizationPage() {
  return (
    <>
      <Navbar />

      <ServiceHero
        service="Hormone Optimization"
        headline="Hormone Optimization."
        subtitle="Restoring hormonal balance to prevent age-related decline, improve vitality, and protect long-term health — under the guidance of a board-certified cardiologist."
      />

      {/* THE CASE — editorial two-column */}
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
            <SectionTitle eyebrow="The Case">
              The hormonal arc that <span className="fdi" style={{ color: "var(--gm)" }}>shapes how you age.</span>
            </SectionTitle>
            <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
              <p style={{ marginBottom: 18 }}>
                Hormonal decline begins around age 30 and accelerates with each passing decade. Testosterone, estrogen,
                progesterone, and other key hormones gradually fall below the levels needed to sustain energy,
                metabolism, cognitive function, and cardiovascular health.
              </p>
              <p style={{ marginBottom: 18 }}>
                Most people experience this decline as a collection of frustrating symptoms — fatigue, weight gain,
                brain fog, sleep disruption, reduced libido, loss of lean muscle. These are often dismissed as
                &ldquo;normal aging&rdquo; or treated with prescriptions that address individual symptoms without
                addressing the underlying cause.
              </p>
              <p>
                Dr. Mehta takes a different approach. As a board-certified cardiologist, he understands the critical
                relationship between hormonal health and cardiovascular risk — a dimension most hormone clinics
                overlook entirely. Hormonal optimization isn&apos;t just about feeling better today. It&apos;s about
                protecting your cardiovascular system, your metabolic health, and your cognitive function for decades
                to come.
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
              src="/physician-consultation-longevity-medicine-scottsdale.jpg"
              alt="Hormone optimization consultation"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CARDIOLOGIST OVERSIGHT — three vertical bordered blocks */}
      <section style={{ background: "var(--tl)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1180 }}>
          <SectionTitle eyebrow="Why Cardiologist Oversight">
            Three things a cardiologist sees that <span className="fdi" style={{ color: "var(--gm)" }}>others miss.</span>
          </SectionTitle>
          <div>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderTop: "1px solid rgba(28,53,56,0.1)",
                  borderBottom: i === pillars.length - 1 ? "1px solid rgba(28,53,56,0.1)" : undefined,
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
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="fd" style={{ fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.8, maxWidth: 760 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JoinPrompt background="var(--ow)" />


      {/* WHO BENEFITS */}
      <section style={{ background: "var(--ow)", padding: "120px 0" }}>
        <div className="mx-lg" style={{ maxWidth: 1080 }}>
          <SectionTitle eyebrow="Who Benefits">
            Who tends to benefit <span className="fdi" style={{ color: "var(--gm)" }}>most.</span>
          </SectionTitle>
          <div style={{ fontSize: 17, color: "var(--tm)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: 18 }}>
              <strong style={{ color: "var(--gd)", fontWeight: 600 }}>Men experiencing symptoms of low testosterone</strong> — fatigue, reduced muscle mass, cognitive decline, and changes in sexual function — often see the most immediate quality-of-life gains. The longer-term benefit is preserving cardiovascular and metabolic health as testosterone settles into its post-40 trajectory.
            </p>
            <p style={{ marginBottom: 18 }}>
              <strong style={{ color: "var(--gd)", fontWeight: 600 }}>Perimenopausal and menopausal women</strong> face one of the steepest hormonal transitions in adult life — hot flashes, sleep disruption, mood changes, and an accelerated cardiovascular risk curve that conventional medicine routinely under-treats. Thoughtful, individualized hormone therapy with cardiology oversight changes that trajectory.
            </p>
            <p>
              <strong style={{ color: "var(--gd)", fontWeight: 600 }}>Anyone over 30 thinking long-term</strong> can benefit from a baseline assessment — well before symptoms arrive. The same applies to clients with conditions that disrupt hormonal balance, such as PCOS or thyroid dysfunction, where coordinated cardiometabolic care matters more than any single intervention.
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
        headline="Hormonal health is the foundation of how you feel,"
        italicTail="think, and perform."
      />
      <Footer />
    </>
  );
}
