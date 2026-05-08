import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--darker)", padding: "72px 0 32px" }}>
      <div className="mx">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
            alignItems: "flex-start",
          }}
        >
          <div>
            <Image
              src="/logo.webp"
              alt="Oasis Longevity Medicine"
              width={120}
              height={120}
              style={{ height: 32, width: "auto", filter: "brightness(1.4)" }}
            />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 18, maxWidth: 280, lineHeight: 1.7 }}>
              Physician-led longevity medicine grounded in cardiovascular science. Scottsdale &amp; Prescott, Arizona.
            </p>
            <Link
              href="/contact"
              className="btn-gold"
              style={{ marginTop: 20, padding: "12px 24px", fontSize: 11, boxShadow: "none" }}
            >
              Apply for Access
            </Link>
          </div>

          <FooterCol heading="Pages">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Dr. Mehta</FooterLink>
            <FooterLink href="/program">The Program</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Apply</FooterLink>
          </FooterCol>

          <FooterCol heading="Our Approach">
            <FooterLink href="/longevity-medicine-scottsdale">Longevity Medicine</FooterLink>
            <FooterLink href="/preventive-cardiology-scottsdale">Preventive Cardiology</FooterLink>
            <FooterLink href="/locations/scottsdale">Scottsdale</FooterLink>
            <FooterLink href="/locations/prescott">Prescott</FooterLink>
          </FooterCol>

          <FooterCol heading="Contact">
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 12 }}>
              7659 E. Pinnacle Peak Rd<br />
              Suite 110, Scottsdale, AZ 85255
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 12 }}>
              2001 Excellence Way<br />
              Suite 200, Prescott, AZ 86301
            </p>
            <a
              href="tel:4807207044"
              style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.7)" }}
            >
              480-720-7044
            </a>
          </FooterCol>
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2026 Oasis Vein &amp; Vitality. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/contact" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Privacy
            </Link>
            <Link href="/contact" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h4
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 16,
        }}
      >
        {heading}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontSize: 13,
        color: "rgba(255,255,255,0.55)",
        transition: "color 0.3s",
      }}
    >
      {children}
    </Link>
  );
}
