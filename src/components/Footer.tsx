"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0A0806",
        padding: "48px 24px 32px",
        borderTop: "1px solid rgba(192,144,64,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Official logo */}
        <Image
          src="/logo_w.png"
          alt="World Divine Light Organization"
          width={120}
          height={60}
          style={{
            filter:
              "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.75)",
            opacity: 0.75,
            objectFit: "contain",
          }}
        />

        <p
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7A6840",
            fontFamily: "var(--font-inter)",
          }}
        >
          World Divine Light Organization · Los Angeles Spiritual Center
        </p>

        <div
          style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["#about", "#practice", "#mission", "#location", "#contact"].map(
            (href) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#5A4E38",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C09040")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#5A4E38")
                }
              >
                {href.replace("#", "")}
              </a>
            )
          )}
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(192,144,64,0.08)",
          }}
        />

        <p
          style={{
            fontSize: "0.68rem",
            color: "#3A3020",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.06em",
          }}
        >
          © {year} World Divine Light Organization — Los Angeles Spiritual Center. All rights
          reserved.
          <br />
          <span style={{ opacity: 0.6 }}>
            A US Government-Recognized Nonprofit Organization.
          </span>
        </p>
      </div>
    </footer>
  );
}
