export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(180deg, #14110C 0%, #1E1A12 100%)",
        padding: "100px 24px",
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
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(192,144,64,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
        {/* Eyebrow */}
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
          Connect With Us
        </p>
        <div
          style={{
            width: "56px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C09040, transparent)",
            margin: "0 auto 28px",
          }}
        />

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "#F5EDD5",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Ready to{" "}
          <em style={{ color: "#DDB96A", fontStyle: "italic" }}>
            Experience the Light?
          </em>
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "#B8A070",
            lineHeight: 1.85,
            marginBottom: "52px",
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
          }}
        >
          We welcome all sincere seekers. Reach out by phone or text — our
          members are always happy to answer questions, arrange a visit, or
          simply share more about what we do.
        </p>

        {/* Phone display */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
            padding: "20px 40px",
            border: "1px solid rgba(192,144,64,0.35)",
            background: "rgba(192,144,64,0.06)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M20 15.5c0 .4-.1.8-.3 1.1-.2.4-.4.7-.7 1-.5.5-1 .8-1.6 1-.6.1-1.2 0-1.8-.1-1.5-.5-3-.1.3-4.3-1.3-1-2.4-2.2-3.3-3.4-.9-1.3-1.7-2.6-2.2-4-.2-.6-.2-1.2 0-1.8.2-.6.5-1.1 1-1.5l1-.9c.3-.3.6-.3.9 0l2.5 2.5c.3.3.3.6 0 .9L13.4 11c-.1.1-.1.4 0 .5.5.9 1.1 1.6 1.8 2.3.7.7 1.4 1.3 2.3 1.8.1.1.4.1.5 0l1-.9c.3-.3.6-.3.9 0l2.5 2.5c.2.1.2.5.1.8v.2l-.5.4v-.1z"
              fill="#C09040"
            />
          </svg>
          <a
            href="tel:+16268615069"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.6rem",
              color: "#F5EDD5",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            +1 (626) 861-5069
          </a>
        </div>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href="tel:+16268615069"
            className="btn-gold-solid"
            style={{ gap: "10px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.5 11c0 .3-.1.6-.2.8-.2.3-.3.5-.5.7-.3.4-.7.6-1.2.7-.4.1-.9 0-1.3-.1-1.1-.4-2.2-.9-3.2-1.7-.9-.7-1.7-1.6-2.4-2.5-.7-.9-1.2-1.9-1.6-2.9-.2-.5-.2-.9 0-1.3.1-.4.3-.8.7-1.1l.7-.7c.2-.2.4-.2.6 0l1.8 1.8c.2.2.2.4 0 .6l-.7.7c-.1.1-.1.3 0 .4.4.6.8 1.2 1.3 1.7.5.5 1.1 1 1.7 1.3.1.1.3.1.4 0l.7-.7c.2-.2.4-.2.6 0l1.8 1.8c.1.1.1.3 0 .5l-.1.2v-.1z" fill="currentColor" />
            </svg>
            Call Now
          </a>
          <a
            href="sms:+16268615069"
            className="btn-gold"
            style={{ gap: "10px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 1H3C2 1 1 2 1 3v7c0 1 1 2 2 2h2l2 3 2-3h4c1 0 2-1 2-2V3c0-1-1-2-2-2z" fill="none" stroke="#DDB96A" strokeWidth="1.2" strokeLinejoin="round" />
              <line x1="4" y1="5" x2="12" y2="5" stroke="#DDB96A" strokeWidth="1" strokeLinecap="round" />
              <line x1="4" y1="8" x2="9" y2="8" stroke="#DDB96A" strokeWidth="1" strokeLinecap="round" />
            </svg>
            Send a Text
          </a>
        </div>

        {/* Note */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "#7A6840",
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          First visits are always free and carry no obligation.
          <br />
          All are welcome — regardless of background or belief.
        </p>
      </div>
    </section>
  );
}
