import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const baseColor = dark ? "rgba(232,237,232,0.55)" : "var(--ts)";
  const linkColor = dark ? "rgba(232,237,232,0.85)" : "var(--tm)";
  const sep = dark ? "rgba(232,237,232,0.3)" : "var(--gl)";
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: baseColor,
        }}
      >
        {items.map((c, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {c.href ? (
              <Link href={c.href} style={{ color: linkColor, transition: "color 0.3s" }}>
                {c.label}
              </Link>
            ) : (
              <span style={{ color: baseColor }}>{c.label}</span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden style={{ color: sep, fontSize: 10 }}>
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
