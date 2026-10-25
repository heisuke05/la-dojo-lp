import Image from "next/image";

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

        {/* 2-column: photo + features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="practice-grid"
        >
          {/* Left: Okiyome photo */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              <Image
                src="/photo-okiyome.jpg"
                alt="Okiyome — the Art of Divine Light being practiced at the Los Angeles Spiritual Center"
                fill
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
              {/* Warm gold frame accent */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 0 1px rgba(192,144,64,0.25)",
                  pointerEvents: "none",
                }}
              />
            </div>
            {/* Decorative offset frame */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "-16px",
                right: "16px",
                bottom: "-16px",
                border: "1px solid rgba(192,144,64,0.2)",
                zIndex: -1,
              }}
              className="practice-frame"
            />
            {/* Caption */}
            <div
              style={{
                marginTop: "20px",
                paddingLeft: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#9A8060",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                Okiyome being shared at the Los Angeles Spiritual Center.
                Practitioners channel Divine Light through an outstretched hand,
                requiring no physical contact.
              </p>
            </div>
          </div>

          {/* Right: Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {features.map((f, i) => (
              <div
                key={f.num}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "32px 0",
                  borderBottom:
                    i < features.length - 1
                      ? "1px solid rgba(192,144,64,0.15)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.7rem",
                    color: "#C09040",
                    opacity: 0.35,
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: "40px",
                    textAlign: "right",
                  }}
                >
                  {f.num}
                </span>
                <div
                  style={{
                    width: "1px",
                    alignSelf: "stretch",
                    background: "rgba(192,144,64,0.2)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: "#14110C",
                      marginBottom: "10px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
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

            {/* CTA */}
            <div style={{ marginTop: "36px" }}>
              <a
                href="#contact"
                className="btn-gold-solid"
                style={{ display: "inline-flex" }}
              >
                Experience Okiyome — It&apos;s Free
              </a>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#9A8060",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  marginTop: "12px",
                }}
              >
                First visits are always free. No commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .practice-grid {
          position: relative;
        }
        @media (max-width: 768px) {
          .practice-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .practice-frame {
            display: none;
          }
          #practice { padding: 72px 20px !important; }
        }
      `}</style>
    </section>
  );
}
