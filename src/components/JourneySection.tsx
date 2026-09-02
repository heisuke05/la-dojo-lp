const steps = [
  {
    num: "1",
    title: "Book a Visit",
    body: "Reserve your visit to the Los Angeles Center. Simply send us a text or email — no prior experience or religious background required.",
  },
  {
    num: "2",
    title: "Receive Okiyome",
    body: "Visit the center and experience the Art of Divine Light firsthand. Many people report a sense of deep calm, warmth, and clarity even after a single session.",
  },
  {
    num: "3",
    title: "Continue Your Practice",
    body: "Return for follow-up sessions and experience the wonder of Divine Light for yourself. Repeat steps 1–3 as you deepen your connection.",
  },
  {
    num: "4",
    title: "Become a Practitioner",
    body: "Attend the 3-day Basic Seminar to deepen your understanding of Divine Law. Receive Omitama — a Holy Pendant — and begin sharing the Art of Divine Light with family, friends, and community.",
  },
];

export default function JourneySection() {
  return (
    <section
      id="journey"
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
            Getting Started
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
            Your Journey{" "}
            <em style={{ color: "#C09040", fontStyle: "italic" }}>
              Begins Here
            </em>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "40px 32px",
                borderRight:
                  i < steps.length - 1
                    ? "1px solid rgba(192,144,64,0.15)"
                    : "none",
                position: "relative",
              }}
              className="journey-step"
            >
              {/* Step number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #C09040",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1rem",
                      color: "#C09040",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "linear-gradient(to right, rgba(192,144,64,0.4), transparent)",
                    }}
                  />
                )}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "#14110C",
                  marginBottom: "10px",
                }}
              >
                {step.title}
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
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a
            href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
            className="btn-gold-solid"
          >
            Begin Your Journey
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .journey-step {
            border-right: none !important;
            border-bottom: 1px solid rgba(192,144,64,0.15);
            padding: 28px 20px !important;
          }
          #journey { padding: 72px 20px !important; }
        }
      `}</style>
    </section>
  );
}
