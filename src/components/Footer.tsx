"use client";

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
        {/* Logo mark */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.7">
          <circle cx="14" cy="14" r="6" fill="none" stroke="#C09040" strokeWidth="1" />
          <circle cx="14" cy="14" r="2.5" fill="#C09040" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={14 + 7 * Math.cos(rad)}
                y1={14 + 7 * Math.sin(rad)}
                x2={14 + 12 * Math.cos(rad)}
                y2={14 + 12 * Math.sin(rad)}
                stroke="#C09040"
                strokeWidth={i % 2 === 0 ? "0.9" : "0.4"}
                opacity={i % 2 === 0 ? 0.9 : 0.4}
              />
            );
          })}
        </svg>

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
