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
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
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

        {/* Feature list — full width, clean */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {features.map((f, i) => (
            <div
              key={f.num}
              style={{
                display: "flex",
                gap: "28px",
                alignItems: "flex-start",
                padding: "36px 0",
                borderBottom:
                  i < features.length - 1
                    ? "1px solid rgba(192,144,64,0.15)"
                    : "none",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2rem",
                  color: "#C09040",
                  opacity: 0.35,
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: "48px",
                  textAlign: "right",
                }}
              >
                {f.num}
              </span>
              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  alignSelf: "stretch",
                  background: "rgba(192,144,64,0.2)",
                  flexShrink: 0,
                }}
              />
              {/* Text */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "#14110C",
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.98rem",
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
    </section>
  );
}
