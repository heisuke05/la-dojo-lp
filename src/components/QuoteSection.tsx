export default function QuoteSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1E1A12 0%, #14110C 50%, #0A0806 100%)",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(192,144,64,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
        {/* Decorative top line */}
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, #C09040)",
            margin: "0 auto 32px",
            opacity: 0.6,
          }}
        />

        {/* Gold ornament */}
        <div style={{ marginBottom: "28px" }}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="10" y2="8" stroke="#C09040" strokeWidth="0.8" opacity="0.6" />
            <circle cx="16" cy="8" r="4" fill="none" stroke="#C09040" strokeWidth="1" />
            <circle cx="16" cy="8" r="1.5" fill="#C09040" />
            <line x1="22" y1="8" x2="32" y2="8" stroke="#C09040" strokeWidth="0.8" opacity="0.6" />
          </svg>
        </div>

        <blockquote
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#F5EDD5",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          &ldquo;When the spirit is cleansed, the mind finds peace, relationships
          improve, and harmony returns to daily life. This is the natural
          unfolding of divine grace.&rdquo;
        </blockquote>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "28px",
              height: "1px",
              background: "#C09040",
              opacity: 0.5,
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C09040",
              fontFamily: "var(--font-inter)",
            }}
          >
            World Divine Light Organization
          </span>
          <span
            style={{
              display: "block",
              width: "28px",
              height: "1px",
              background: "#C09040",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Decorative bottom line */}
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #C09040, transparent)",
            margin: "32px auto 0",
            opacity: 0.6,
          }}
        />
      </div>
    </section>
  );
}
