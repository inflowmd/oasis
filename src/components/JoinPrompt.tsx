import Link from "next/link";

export default function JoinPrompt({
  background = "var(--ow)",
}: {
  background?: string;
}) {
  return (
    <section style={{ background, padding: "60px 0" }}>
      <div
        className="mx-sm"
        style={{
          maxWidth: 760,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          paddingTop: 56,
          borderTop: "1px solid rgba(201,169,110,0.3)",
        }}
      >
        <p
          className="fd"
          style={{
            fontSize: "clamp(20px,2vw,26px)",
            fontWeight: 600,
            color: "var(--td)",
            lineHeight: 1.4,
          }}
        >
          Interested in joining our practice?{" "}
          <span className="fdi" style={{ color: "var(--gm)" }}>We&apos;d welcome your inquiry.</span>
        </p>
        <Link
          href="/contact"
          className="btn-gold"
          style={{ padding: "15px 34px", fontSize: 12 }}
        >
          Join Our Practice
        </Link>
      </div>
    </section>
  );
}
