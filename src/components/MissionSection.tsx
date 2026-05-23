const points = [
  {
    title: "The Teachings of Divine Law",
    body: "We study the spiritual principles that govern all life — understanding the relationship between the seen and unseen worlds, and how divine law shapes our health, happiness, and destiny.",
  },
  {
    title: "Active Practice, Not Philosophy",
    body: "Our faith is not merely intellectual. We are called to actively engage in soul purification through Okiyome — experiencing transformation firsthand rather than understanding it from afar.",
  },
  {
    title: "Service & Spiritual Volunteer Work",
    body: "Members are encouraged to share the Art of Divine Light as an act of loving service — becoming channels through which divine grace flows outward into the world.",
  },
];

export default function MissionSection() {
  return (
    <section
      id="mission"
      style={{
        background: "#FAF8F2",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="mission-grid"
        >
          {/* Left: heading block */}
          <div>
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
              Our Purpose
            </p>
            <div
              style={{
                width: "56px",
                height: "2px",
                background: "linear-gradient(90deg, #C09040, transparent)",
                marginBottom: "24px",
              }}
            />
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                color: "#14110C",
                lineHeight: 1.25,
                marginBottom: "28px",
              }}
            >
              Raising Seed People
              <br />
              for a{" "}
              <em style={{ color: "#C09040", fontStyle: "italic" }}>
                Divine Civilization
              </em>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#7A6840",
                lineHeight: 1.9,
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                marginBottom: "24px",
              }}
            >
              We believe that as individual souls are purified, the ripple
              effect reaches families, communities, and nations. This is the
              foundation of Earthly Paradise — not a utopia imposed from
              without, but a civilization that naturally blossoms from within.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#7A6840",
                lineHeight: 1.9,
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
              }}
            >
              The World Divine Light Organization is a US government-recognized
              nonprofit dedicated to this mission — welcoming all who sincerely
              seek the light.
            </p>

            {/* Nonprofit badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "32px",
                padding: "10px 20px",
                border: "1px solid rgba(192,144,64,0.3)",
                background: "rgba(192,144,64,0.05)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="none" stroke="#C09040" strokeWidth="1" />
                <path d="M5 8l2 2 4-4" stroke="#C09040" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#C09040",
                  fontFamily: "var(--font-inter)",
                }}
              >
                US Government-Recognized Nonprofit
              </span>
            </div>
          </div>

          {/* Right: point list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {points.map((pt, i) => (
              <div
                key={pt.title}
                style={{
                  padding: "32px 0",
                  borderBottom:
                    i < points.length - 1
                      ? "1px solid rgba(192,144,64,0.18)"
                      : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "#14110C",
                    marginBottom: "10px",
                  }}
                >
                  {pt.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#5A4E38",
                    lineHeight: 1.85,
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                  }}
                >
                  {pt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          #mission { padding: 72px 20px !important; }
        }
      `}</style>
    </section>
  );
}
