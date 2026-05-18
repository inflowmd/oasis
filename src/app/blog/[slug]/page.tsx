import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts, getPost } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Oasis Longevity`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <article style={{ background: "var(--ow)", padding: "180px 0 40px" }}>
        <div className="mx-sm" style={{ maxWidth: 740 }}>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />
          <span
            style={{
              display: "inline-block",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              background: "var(--gold-pale)",
              border: "1px solid rgba(201,169,110,0.2)",
              padding: "5px 12px",
              borderRadius: 999,
              marginBottom: 22,
              marginTop: 8,
            }}
          >
            {post.category}
          </span>
          <h1
            className="fd"
            style={{
              fontSize: "clamp(32px,3.6vw,46px)",
              fontWeight: 700,
              color: "var(--td)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              marginBottom: 22,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 13,
              color: "var(--ts)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "var(--gd)", fontWeight: 600 }}>{post.author}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>

      {/* FEATURED IMAGE PLACEHOLDER */}
      <div style={{ background: "var(--ow)", paddingBottom: 40 }}>
        <div className="mx-sm" style={{ maxWidth: 1240 }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/9",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(232,237,232,0.5)",
            }}
          >
            <Image
              src="/cardiovascular-heart-health-longevity-medicine.webp"
              alt="Cardiovascular heart health longevity medicine"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* BODY */}
      <section style={{ background: "var(--ow)", padding: "40px 0 80px" }}>
        <div className="mx-sm" style={{ maxWidth: 1080 }}>
          {post.body.map((b, i) => {
            if (b.type === "h2") {
              return (
                <h2
                  key={i}
                  className="fd"
                  style={{
                    fontSize: "clamp(24px,2.4vw,32px)",
                    fontWeight: 700,
                    color: "var(--td)",
                    lineHeight: 1.2,
                    marginTop: 44,
                    marginBottom: 18,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {b.text}
                </h2>
              );
            }
            if (b.type === "h3") {
              return (
                <h3
                  key={i}
                  className="fd"
                  style={{
                    fontSize: "clamp(20px,2vw,24px)",
                    fontWeight: 700,
                    color: "var(--gd)",
                    marginTop: 32,
                    marginBottom: 14,
                  }}
                >
                  {b.text}
                </h3>
              );
            }
            if (b.type === "pull") {
              return (
                <blockquote
                  key={i}
                  className="fdi"
                  style={{
                    fontSize: "clamp(20px,2vw,26px)",
                    color: "var(--gd)",
                    lineHeight: 1.45,
                    fontWeight: 500,
                    margin: "36px 0",
                    paddingLeft: 24,
                    borderLeft: "3px solid var(--gold)",
                  }}
                >
                  {b.text}
                </blockquote>
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "var(--tm)",
                  marginBottom: 18,
                }}
              >
                {b.text}
              </p>
            );
          })}
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section style={{ background: "var(--tl)", padding: "70px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1080 }}>
          <div
            style={{
              display: "flex",
              gap: 22,
              alignItems: "center",
              padding: "28px 28px",
              background: "#fff",
              border: "1px solid rgba(232,237,232,0.5)",
              borderRadius: 18,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 84,
                height: 84,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                background: "var(--gp)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ssmehta.jpg"
                alt="Dr. Steven Mehta"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 6,
                }}
              >
                About the Author
              </p>
              <h3 className="fd" style={{ fontSize: 20, fontWeight: 700, color: "var(--td)", marginBottom: 4 }}>
                {post.author}
              </h3>
              <p style={{ fontSize: 14, color: "var(--tm)", lineHeight: 1.6 }}>
                Double board-certified cardiologist (MD, MBA, FACC). ACC Governor — Arizona. Founder of the Oasis
                Longevity Program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: "var(--ow)", padding: "80px 0" }}>
        <div className="mx-sm" style={{ maxWidth: 1240 }}>
          <h2
            className="fd"
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "var(--td)",
              marginBottom: 28,
            }}
          >
            More from the practice
          </h2>
          <div
            className="g2 related-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="cl"
                style={{ display: "block", padding: 24 }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 12,
                  }}
                >
                  {r.category}
                </span>
                <h3 className="fd" style={{ fontSize: 19, fontWeight: 700, color: "var(--td)", lineHeight: 1.3 }}>
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="dark-mesh-2"
        style={{
          background: "var(--dark)",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="mx-sm" style={{ position: "relative", zIndex: 1, maxWidth: 1080, textAlign: "center" }}>
          <h2
            className="fd page-cta-h2"
            style={{
              fontSize: "clamp(26px,2.8vw,40px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Want this approach for <span className="fdi" style={{ color: "var(--gold)" }}>your own care?</span>
          </h2>
          <Link href="/contact" className="btn-gold" style={{ padding: "16px 32px", fontSize: 12 }}>
            Join Our Practice
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
