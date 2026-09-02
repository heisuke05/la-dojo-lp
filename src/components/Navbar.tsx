"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Practice", href: "#practice" },
  { label: "Getting Started", href: "#journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        background: scrolled
          ? "rgba(20, 17, 12, 0.96)"
          : "rgba(20, 17, 12, 0.0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(192,144,64,0.18)" : "none",
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        {/* Emblem */}
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="17" r="7" fill="none" stroke="#C09040" strokeWidth="1.2" />
          <circle cx="17" cy="17" r="3" fill="#C09040" opacity="0.9" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <line
              key={i}
              x1="17"
              y1="17"
              x2={17 + 14 * Math.cos((deg * Math.PI) / 180)}
              y2={17 + 14 * Math.sin((deg * Math.PI) / 180)}
              stroke="#C09040"
              strokeWidth={i % 2 === 0 ? "1.0" : "0.5"}
              opacity={i % 2 === 0 ? "0.9" : "0.4"}
            />
          ))}
          <circle cx="17" cy="17" r="13" fill="none" stroke="#C09040" strokeWidth="0.4" opacity="0.35" />
        </svg>
        <div style={{ whiteSpace: "nowrap" }}>
          <div
            style={{
              color: "#DDB96A",
              fontSize: "0.62rem",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.4,
            }}
          >
            World Divine Light
          </div>
          <div
            style={{
              color: "#C09040",
              fontSize: "0.56rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
              opacity: 0.8,
            }}
          >
            Los Angeles Spiritual Center
          </div>
        </div>
      </a>

      {/* Desktop nav */}
      <nav
        style={{ display: "flex", alignItems: "center", gap: "24px" }}
        className="hidden md:flex"
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "#B8A070",
              textDecoration: "none",
              fontSize: "0.74rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              fontFamily: "var(--font-inter)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#DDB96A")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#B8A070")
            }
          >
            {l.label}
          </a>
        ))}
        <a
          href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
          style={{
            padding: "8px 20px",
            border: "1px solid #C09040",
            color: "#DDB96A",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.22s",
            fontFamily: "var(--font-inter)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background =
              "rgba(192,144,64,0.15)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "transparent")
          }
        >
          Book a Visit
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#C09040",
              transition: "opacity 0.2s",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(20, 17, 12, 0.98)",
            borderBottom: "1px solid rgba(192,144,64,0.2)",
            padding: "24px 48px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#B8A070",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#DDB96A",
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
            }}
          >
            Book a Visit
          </a>
        </div>
      )}
    </header>
  );
}
