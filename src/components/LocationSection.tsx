"use client";

const schedule = [
  { day: "Sunday", time: "10:00 AM — 12:00 PM", label: "Morning Service & Okiyome" },
  { day: "Saturday", time: "2:00 PM — 4:00 PM", label: "Afternoon Session" },
  { day: "Weekdays", time: "By Appointment", label: "Individual Sessions Available" },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      style={{
        background: "#FAF8F2",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C09040",
              marginBottom: "16px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Visit Us
          </p>
          <div className="section-divider" style={{ marginBottom: "24px" }} />
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#14110C",
              lineHeight: 1.2,
            }}
          >
            Los Angeles{" "}
            <em style={{ color: "#C09040", fontStyle: "italic" }}>Dojo</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="location-grid"
        >
          {/* Left: map placeholder */}
          <div
            style={{
              background: "#1E1A12",
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Simple decorative map-like element */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(192,144,64,0.07) 0%, transparent 70%)",
              }}
            />
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "relative", marginBottom: "16px" }}>
              {/* Map pin icon */}
              <circle cx="40" cy="32" r="14" fill="none" stroke="#C09040" strokeWidth="1.5" />
              <circle cx="40" cy="32" r="5" fill="#C09040" />
              <path d="M40 46 Q28 58 40 72 Q52 58 40 46" fill="none" stroke="#C09040" strokeWidth="1.5" />
            </svg>
            <p
              style={{
                position: "relative",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C09040",
                fontFamily: "var(--font-inter)",
                opacity: 0.7,
              }}
            >
              Los Angeles, CA
            </p>
          </div>

          {/* Right: info */}
          <div>
            {/* Address */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#C09040",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Address
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#2E2618",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-inter)",
                }}
              >
                Los Angeles Dojo
                <br />
                <span style={{ color: "#7A6840", fontWeight: 300 }}>
                  Los Angeles, California
                  <br />
                  United States
                </span>
              </p>
            </div>

            {/* Schedule */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#C09040",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Schedule
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(192,144,64,0.12)",
                      gap: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 500,
                        color: "#2E2618",
                        fontSize: "0.9rem",
                        minWidth: "80px",
                      }}
                    >
                      {s.day}
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          color: "#C09040",
                          fontSize: "0.85rem",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {s.time}
                      </div>
                      <div
                        style={{
                          color: "#7A6840",
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact shortcut */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <a
                href="tel:+16268615069"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1rem",
                  color: "#2E2618",
                  textDecoration: "none",
                  fontFamily: "var(--font-inter)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C09040")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#2E2618")}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16 12.5c0 .3-.1.6-.2.9-.1.3-.3.6-.5.8-.4.4-.8.7-1.3.8-.5.1-1 0-1.4-.1-1.2-.4-2.4-1-3.5-1.9-1-.8-1.9-1.8-2.7-2.8-.8-1-1.4-2.1-1.8-3.2-.2-.5-.2-1 0-1.4.1-.5.4-.9.8-1.2l.8-.8c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-.8.8c-.1.1-.1.3 0 .4.4.7.9 1.3 1.5 1.9.6.6 1.2 1.1 1.9 1.5.1.1.3.1.4 0l.8-.8c.2-.2.5-.2.7 0l2 2c.1.2.1.4-.1.7l-.1.1v.1z" fill="#C09040" />
                </svg>
                +1 (626) 861-5069
              </a>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#7A6840",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  marginLeft: "28px",
                }}
              >
                Call or text anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
