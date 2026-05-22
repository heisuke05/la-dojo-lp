const pillars = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="8" fill="none" stroke="#C09040" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="3" fill="#C09040" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={20 + 9 * Math.cos(rad)}
              y1={20 + 9 * Math.sin(rad)}
              x2={20 + 18 * Math.cos(rad)}
              y2={20 + 18 * Math.sin(rad)}
              stroke="#C09040"
              strokeWidth={i % 2 === 0 ? "1.2" : "0.6"}
              opacity={i % 2 === 0 ? 1 : 0.5}
            />
          );
        })}
      </svg>
    ),
    title: "Soul Purification",
    body: "Through the Art of Divine Light, spiritual impurities that cloud the soul are gently cleansed. As these impurities dissolve, suffering fades — and your true, radiant nature begins to emerge.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#C09040" strokeWidth="0.8" opacity="0.4" />
        <circle cx="20" cy="12" r="4" fill="none" stroke="#C09040" strokeWidth="1.2" />
        <circle cx="13" cy="26" r="4" fill="none" stroke="#C09040" strokeWidth="1.2" />
        <circle cx="27" cy="26" r="4" fill="none" stroke="#C09040" strokeWidth="1.2" />
        <line x1="20" y1="16" x2="15" y2="22" stroke="#C09040" strokeWidth="0.8" opacity="0.6" />
        <line x1="20" y1="16" x2="25" y2="22" stroke="#C09040" strokeWidth="0.8" opacity="0.6" />
        <line x1="17" y1="26" x2="23" y2="26" stroke="#C09040" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
    title: "Open to All",
    body: "Regardless of faith, nationality, or background — this practice welcomes every sincere soul. We believe divine light belongs to all of humanity, not to any one creed or culture.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6 L20 34" stroke="#C09040" strokeWidth="0.8" opacity="0.4" />
        <path d="M6 20 L34 20" stroke="#C09040" strokeWidth="0.8" opacity="0.4" />
        <circle cx="20" cy="20" r="5" fill="none" stroke="#C09040" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="12" fill="none" stroke="#C09040" strokeWidth="0.6" opacity="0.5" />
        <circle cx="20" cy="8" r="2" fill="#C09040" opacity="0.6" />
        <circle cx="20" cy="32" r="2" fill="#C09040" opacity="0.6" />
        <circle cx="8" cy="20" r="2" fill="#C09040" opacity="0.6" />
        <circle cx="32" cy="20" r="2" fill="#C09040" opacity="0.6" />
      </svg>
    ),
    title: "Toward Earthly Paradise",
    body: "As individual souls are purified and elevated, harmony flows into families and communities. This is our shared vision: a world where divine light guides humanity toward peace.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#FAF8F2",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
            Our Foundation
          </p>
          <div className="section-divider" style={{ marginBottom: "24px" }} />
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#14110C",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Today Our World Is at an{" "}
            <em style={{ color: "#C09040" }}>Impasse</em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#7A6840",
              lineHeight: 1.85,
              maxWidth: "620px",
              margin: "0 auto",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
            }}
          >
            Despite remarkable advances, the world suffers from growing discord,
            illness, and inner emptiness. We believe the root cause lies not in
            the material world — but in the unseen realm of the spirit.
          </p>
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-hover"
              style={{
                background: "#FFFFFF",
                padding: "40px 32px",
                borderTop: "2px solid #C09040",
                boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#14110C",
                  marginBottom: "12px",
                }}
              >
                {p.title}
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
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
