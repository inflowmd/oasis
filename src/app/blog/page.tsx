import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogIndexClient from "@/components/BlogIndexClient";

export const metadata: Metadata = {
  title: "The Longevity Brief | Oasis Longevity Medicine Blog",
  description:
    "Evidence-based perspectives on longevity, cardiovascular health, and the science of aging well — by Dr. Steven Mehta and the Oasis team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(165deg, var(--ow) 0%, var(--tl) 100%)",
          padding: "180px 0 60px",
        }}
      >
        <div className="mx" style={{ maxWidth: 1240, textAlign: "center", margin: "0 auto" }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginTop: 28,
              marginBottom: 16,
            }}
          >
            The Longevity Brief
          </p>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(36px,4.4vw,60px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 22,
            }}
          >
            Notes from the <span className="fdi" style={{ color: "var(--gm)" }}>practice.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--tm)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Evidence-based perspectives on longevity, cardiovascular health, and the science of aging well.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--ow)", padding: "60px 0 120px" }}>
        <div className="mx-lg">
          <BlogIndexClient />
        </div>
      </section>

      <Footer />
    </>
  );
}
