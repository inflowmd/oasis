"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Dr. Mehta", href: "/about" },
  { label: "Program", href: "/program" },
  {
    label: "Services",
    children: [
      { label: "Hormone Optimization", href: "/services/hormone-optimization" },
      { label: "Weight Management", href: "/services/weight-management" },
      { label: "Epigenetic Evaluation", href: "/services/epigenetic-evaluation" },
      { label: "Cardiovascular Prevention", href: "/services/cardiovascular-prevention" },
      { label: "Peptide Therapy", href: "/services/peptide-therapy" },
    ],
  },
  {
    label: "Our Approach",
    children: [
      { label: "Longevity Medicine", href: "/longevity-medicine-scottsdale" },
      { label: "Preventive Cardiology", href: "/preventive-cardiology-scottsdale" },
    ],
  },
  {
    label: "Locations",
    children: [
      { label: "Scottsdale", href: "/locations/scottsdale" },
      { label: "Prescott", href: "/locations/prescott" },
    ],
  },
  // { label: "Blog", href: "/blog" }, // hidden until blog content is ready
];

const DARK_HERO_PATHS = [
  "/about",
  "/program",
  "/preventive-cardiology-scottsdale",
  "/services/hormone-optimization",
  "/services/weight-management",
  "/services/epigenetic-evaluation",
  "/services/cardiovascular-prevention",
  "/services/peptide-therapy",
  "/locations/scottsdale",
  "/locations/prescott",
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDarkHero =
    DARK_HERO_PATHS.some((p) => pathname === p || pathname?.startsWith(p + "/"));
  const overDarkHero = isDarkHero && !scrolled;

  const linkColor = overDarkHero ? "rgba(255,255,255,0.85)" : "var(--tm)";

  const linkStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: linkColor,
    cursor: "pointer",
    transition: "color 0.3s",
    whiteSpace: "nowrap",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    height: 24,
    textDecoration: "none",
  };

  return (
    <nav
      id="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s",
        background: scrolled || mobileOpen ? "rgba(250,250,247,0.92)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || mobileOpen ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,237,232,0.3)" : "1px solid transparent",
      }}
    >
      <div
        className="mx"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 90 : 130,
          transition: "height 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.webp"
            alt="Oasis Longevity Medicine"
            width={120}
            height={120}
            priority
            style={{
              height: scrolled ? 70 : 110,
              width: "auto",
              maxHeight: "none",
              transition: "height 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
              filter: overDarkHero ? "brightness(1.1)" : "none",
            }}
          />
        </Link>

        <div className="nl" style={{ display: "flex", alignItems: "center", gap: 24, height: 40 }}>
          {navItems.map((item) => {
            if ("href" in item) {
              return (
                <Link key={item.label} href={item.href} style={linkStyle}>
                  {item.label}
                </Link>
              );
            }
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                style={{ position: "relative", display: "flex", alignItems: "center" }}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  style={{
                    ...linkStyle,
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    fontFamily: "inherit",
                    gap: 6,
                  }}
                >
                  {item.label}
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{ display: "block", flexShrink: 0 }}
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: 14,
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? "visible" : "hidden",
                    transition: "opacity 0.25s ease, visibility 0.25s",
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(250,250,247,0.98)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(232,237,232,0.5)",
                      borderRadius: 14,
                      padding: 8,
                      minWidth: 240,
                      boxShadow: "0 24px 60px rgba(28,53,56,0.12)",
                    }}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        style={{
                          display: "block",
                          padding: "10px 14px",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          color: "var(--gd)",
                          borderRadius: 8,
                          textTransform: "none",
                          transition: "background 0.2s, color 0.2s",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href="/contact"
            className="btn-gold"
            style={{ padding: "11px 24px", fontSize: 10, boxShadow: "none" }}
          >
            Join Our Practice
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-burger"
          style={{
            display: "none",
            width: 44,
            height: 44,
            borderRadius: 10,
            border: `1px solid ${overDarkHero ? "rgba(255,255,255,0.25)" : "rgba(28,53,56,0.15)"}`,
            background: "transparent",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ position: "relative", width: 18, height: 14 }}>
            {[0, 6, 12].map((y, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: mobileOpen ? 6 : y,
                  height: 2,
                  background: overDarkHero && !mobileOpen ? "#fff" : "var(--gd)",
                  transformOrigin: "center",
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg)"
                      : i === 2
                      ? "rotate(-45deg)"
                      : "none"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className="nav-mobile-panel"
        style={{
          display: mobileOpen ? "block" : "none",
          maxHeight: "calc(100vh - 90px)",
          overflowY: "auto",
          padding: "8px 6% 32px",
          borderTop: "1px solid rgba(232,237,232,0.4)",
        }}
      >
        {navItems.map((item) => {
          if ("href" in item) {
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 0",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gd)",
                  borderBottom: "1px solid rgba(232,237,232,0.5)",
                }}
              >
                {item.label}
              </Link>
            );
          }
          const expanded = mobileExpanded === item.label;
          return (
            <div
              key={item.label}
              style={{ borderBottom: "1px solid rgba(232,237,232,0.5)" }}
            >
              <button
                type="button"
                onClick={() => setMobileExpanded(expanded ? null : item.label)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gd)",
                  fontFamily: "inherit",
                }}
              >
                <span>{item.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: expanded ? 200 : 0,
                  transition: "max-height 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
              >
                <div style={{ paddingBottom: 12 }}>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--tm)",
                      }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="btn-gold"
          style={{
            display: "inline-flex",
            marginTop: 24,
            padding: "14px 28px",
            fontSize: 11,
            boxShadow: "none",
          }}
        >
          Join Our Practice
        </Link>
      </div>
    </nav>
  );
}
