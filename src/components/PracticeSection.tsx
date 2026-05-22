const features = [
  {
    num: "01",
    title: "Purification of Soul, Mind & Body",
    body: "Okiyome works in the spiritual dimension to remove accumulated impurities. As the spirit is cleansed, the mind finds calm and the body follows — restoring balance across all levels of being.",
  },
  {
    num: "02",
    title: "Given as a Gift from God",
    body: "This practice is not a technique invented by human wisdom. It flows through a channel established by divine grace, and any sincere member may become an instrument of this healing light.",
  },
  {
    num: "03",
    title: "Transformation in the Invisible World",
    body: "The spiritual world precedes the physical. By addressing the root cause of suffering in the unseen realm first, lasting change becomes possible in our everyday reality.",
  },
];

export default function PracticeSection() {
  return (
    <section
      id="practice"
      style={{
        background: "#FFFFFF",
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
            The Sacred Practice
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
            The Art of{" "}
            <em style={{ color: "#C09040", fontStyle: "italic" }}>
              Divine Light
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#7A6840",
              lineHeight: 1.85,
              maxWidth: "640px",
              margin: "0 auto",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
            }}
          >
            <em>Okiyome</em> (御浄め) is a sacred spiritual practice given to
            humanity as a gift from God. Simple yet profound, it gently removes
            the spiritual impurities that cause suffering — opening the way to
            health, peace, and inner freedom.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="practice-grid"
        >
          {/* Left: visual */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "380px",
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(192,144,64,0.08) 0%, transparent 70%)",
              position: "relative",
            }}
          >
            {/* Decorative concentric rings */}
            <div style={{ position: "relative" }}>
              {[120, 180, 240, 300].map((size, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: size,
                    height: size,
                    border: `1px solid rgba(192,144,64,${0.35 - i * 0.07})`,
                    borderRadius: "50%",
                  }}
                />
              ))}
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ position: "relative", zIndex: 1 }}>
                <circle cx="60" cy="60" r="24" fill="none" stroke="#C09040" strokeWidth="1.5" />
                <circle cx="60" cy="60" r="9" fill="#C09040" opacity="0.85" />
                {Array.from({ length: 20 }, (_, i) => {
                  const angle = (i * 360) / 20;
                  const rad = (angle * Math.PI) / 180;
                  const r1 = 26;
                  const r2 = i % 2 === 0 ? 52 : 40;
                  return (
                    <line
                      key={i}
                      x1={60 + r1 * Math.cos(rad)}
                      y1={60 + r1 * Math.sin(rad)}
                      x2={60 + r2 * Math.cos(rad)}
                      y2={60 + r2 * Math.sin(rad)}
                      stroke="#C09040"
                      strokeWidth={i % 2 === 0 ? "1.4" : "0.6"}
                      opacity={i % 2 === 0 ? 0.95 : 0.4}
                    />
                  );
                })}
                <circle cx="60" cy="60" r="56" fill="none" stroke="#C09040" strokeWidth="0.5" opacity="0.25" />
              </svg>
            </div>
          </div>

          {/* Right: feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {features.map((f) => (
              <div key={f.num} style={{ display: "flex", gap: "20px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.4rem",
                    color: "#C09040",
                    opacity: 0.5,
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                >
                  {f.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#14110C",
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
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
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .practice-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
