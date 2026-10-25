const testimonials = [
  {
    quote:
      "I came in feeling burned out and disconnected. What I found wasn't a religion — it was a practice. Slowly, the anxiety I'd carried for years began to lift. My relationships changed. I changed.",
    author: "Sarah M.",
    detail: "LA Center Participant, 40s",
  },
  {
    quote:
      "I was so caught up in competition — at work, in life. Learning to live with a spirit of giving felt counterintuitive at first. But things began to open up in ways I never expected.",
    author: "David K.",
    detail: "LA Center Participant, 30s",
  },
  {
    quote:
      "What moves me most is being in a room with people from so many different backgrounds — all connected by the same light. In a city as divided as LA, this community feels like a glimpse of what's possible.",
    author: "Maria L.",
    detail: "LA Center Participant, 50s",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#FDF8F0",
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
            Community Voices
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
            Words from{" "}
            <em style={{ color: "#C09040", fontStyle: "italic" }}>
              Our Community
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "36px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Stars */}
              <div style={{ color: "#C09040", letterSpacing: "3px", fontSize: "0.85rem" }}>
                ★★★★★
              </div>
              {/* Quote */}
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "#4A3F35",
                  fontStyle: "italic",
                  lineHeight: 1.85,
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#9E7C2A",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#7A6E65",
                    fontFamily: "var(--font-inter)",
                    marginTop: "2px",
                  }}
                >
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA banner */}
        <div
          style={{
            marginTop: "64px",
            padding: "48px 40px",
            background: "linear-gradient(135deg, #14110C 0%, #261F10 100%)",
            borderRadius: "2px",
            textAlign: "center",
            border: "1px solid rgba(192,144,64,0.2)",
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#C09040",
              fontFamily: "var(--font-inter)",
              marginBottom: "16px",
            }}
          >
            Ready to Experience It?
          </p>
          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 400,
              color: "#F5EDD5",
              marginBottom: "28px",
              lineHeight: 1.3,
            }}
          >
            Your first visit is{" "}
            <em style={{ color: "#DDB96A", fontStyle: "italic" }}>
              always free
            </em>
          </h3>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="sms:+16268615069&body=Hello%2C%20I%27d%20like%20to%20book%20a%20Divine%20Light%20session."
              className="btn-gold-solid"
            >
              Book by Text
            </a>
            <a href="#contact" className="btn-gold">
              Send a Message
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #testimonials { padding: 72px 20px !important; }
        }
      `}</style>
    </section>
  );
}
