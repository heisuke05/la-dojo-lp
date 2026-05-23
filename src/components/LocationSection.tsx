"use client";

const schedule = [
  { day: "Sunday",    time: "10:00 AM – 6:00 PM",  label: "Service & Okiyome" },
  { day: "Monday",    time: "Closed",               label: "" },
  { day: "Tuesday",   time: "10:00 AM – 6:00 PM",  label: "Open Session" },
  { day: "Wednesday", time: "11:00 AM – 7:00 PM",  label: "Open Session" },
  { day: "Thursday",  time: "11:00 AM – 7:00 PM",  label: "Open Session" },
  { day: "Friday",    time: "10:00 AM – 6:00 PM",  label: "Open Session" },
  { day: "Saturday",  time: "10:00 AM – 6:00 PM",  label: "Service & Events" },
];

const ADDRESS = "809 S Atlantic Blvd., #378, Monterey Park CA 91754";
const MAP_SRC =
  "https://maps.google.com/maps?q=809+S+Atlantic+Blvd+%23378+Monterey+Park+CA+91754&output=embed";

export default function LocationSection() {
  return (
    <section
      id="location"
      style={{ background: "#FAF8F2", padding: "100px 24px" }}
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
            <em style={{ color: "#C09040", fontStyle: "italic" }}>
              Spiritual Center
            </em>
          </h2>
        </div>

        {/* Google Map */}
        <div
          style={{
            width: "100%",
            height: "340px",
            marginBottom: "56px",
            border: "1px solid rgba(192,144,64,0.2)",
            overflow: "hidden",
          }}
        >
          <iframe
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Los Angeles Spiritual Center Map"
          />
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="location-grid"
        >
          {/* Left: Address + contact */}
          <div>
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
              Address
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#2E2618",
                lineHeight: 1.9,
                fontFamily: "var(--font-inter)",
                marginBottom: "32px",
              }}
            >
              Los Angeles Spiritual Center
              <br />
              <span style={{ color: "#7A6840", fontWeight: 300 }}>
                809 S Atlantic Blvd., #378
                <br />
                Monterey Park, CA 91754
                <br />
                United States
              </span>
            </p>

            {/* Phone */}
            <a
              href="tel:+16268615069"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.05rem",
                color: "#2E2618",
                textDecoration: "none",
                fontFamily: "var(--font-inter)",
                transition: "color 0.2s",
                marginBottom: "6px",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C09040")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#2E2618")
              }
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M16 12.5c0 .3-.1.6-.2.9-.1.3-.3.6-.5.8-.4.4-.8.7-1.3.8-.5.1-1 0-1.4-.1-1.2-.4-2.4-1-3.5-1.9-1-.8-1.9-1.8-2.7-2.8-.8-1-1.4-2.1-1.8-3.2-.2-.5-.2-1 0-1.4.1-.5.4-.9.8-1.2l.8-.8c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-.8.8c-.1.1-.1.3 0 .4.4.7.9 1.3 1.5 1.9.6.6 1.2 1.1 1.9 1.5.1.1.3.1.4 0l.8-.8c.2-.2.5-.2.7 0l2 2c.1.2.1.4-.1.7l-.1.1v.1z"
                  fill="#C09040"
                />
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

            {/* Google Maps link */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                fontSize: "0.8rem",
                color: "#C09040",
                textDecoration: "none",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5c-.8 0-1.5-.7-1.5-1.5S6.2 3.5 7 3.5 8.5 4.2 8.5 5 7.8 6.5 7 6.5z" fill="#C09040" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Right: Schedule */}
          <div>
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
              Hours
            </h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {schedule.map((s, i) => (
                <div
                  key={s.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom:
                      i < schedule.length - 1
                        ? "1px solid rgba(192,144,64,0.12)"
                        : "none",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: s.day === "Monday" ? 300 : 500,
                      color: s.day === "Monday" ? "#B0A090" : "#2E2618",
                      fontSize: "0.92rem",
                      minWidth: "90px",
                    }}
                  >
                    {s.day}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        color:
                          s.day === "Monday" ? "#B0A090" : "#C09040",
                        fontSize: "0.88rem",
                        fontFamily: "var(--font-inter)",
                        fontStyle:
                          s.day === "Monday" ? "italic" : "normal",
                      }}
                    >
                      {s.time}
                    </div>
                    {s.label && (
                      <div
                        style={{
                          color: "#7A6840",
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                        }}
                      >
                        {s.label}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#7A6840",
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                marginTop: "14px",
                fontStyle: "italic",
              }}
            >
              * Schedule may vary. Please check the latest calendar on our homepage
              or call ahead to confirm.
            </p>
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
