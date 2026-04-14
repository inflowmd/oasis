"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        background: scrolled ? "rgba(245,245,243,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(204,221,223,0.3)" : "1px solid transparent",
      }}
    >
      <div className="mx" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.webp"
            alt="Oasis Longevity Medicine"
            width={120}
            height={120}
            priority
            style={{ height: 38, width: "auto" }}
          />
        </a>
        <div className="nl" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#program" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tm)" }}>Program</a>
          <a href="#steps" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tm)" }}>Process</a>
          <a href="#approach" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tm)" }}>Our Edge</a>
          <a href="#doctor" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tm)" }}>Dr. Mehta</a>
          <a href="#apply" className="btn-gold" style={{ padding: "11px 24px", fontSize: 10, boxShadow: "none" }}>Apply for Access</a>
        </div>
      </div>
    </nav>
  );
}
